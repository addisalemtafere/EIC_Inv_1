using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CUSTOR.EICOnline.DAL.DataAccessLayer;
using CUSTOR.EICOnline.DAL.EntityLayer;
using CUSTOR.EntityFrameworkCommon;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;


namespace CUSTOR.EICOnline.DAL
{
    public class ActivityRepository : EFRepository<ApplicationDbContext, Activity>
    {
        private readonly IDistributedCache distributedCache;
        private readonly Settings settings;

        public ActivityRepository(ApplicationDbContext context, IDistributedCache _distributedCache,
            IConfiguration _configuration) : base(context)
        {
            settings = new Settings(_configuration);
            distributedCache = _distributedCache;
        }

        public async Task<List<ActivityDTO>> GetActivitys(string lang, int page = 0, int pageSize = 15)
        {
            IEnumerable<ActivityDTO> Acts = null;
            string cacheKey = "ActivityKey";
            var cachedActivitys = await distributedCache.GetStringAsync(cacheKey);
            if (cachedActivitys != null)
            {
                Acts = JsonConvert.DeserializeObject<IEnumerable<ActivityDTO>>(cachedActivitys);
            }
            else
            {
                Acts = await Context.Activity
                    .OrderBy(Act => Act.ActivityId)
                    .Select(r => new ActivityDTO()
                    {
                        SubSectorId = r.SubSectorId,
                        ActivityId = r.ActivityId,
                        Description = (lang == "et") ? r.Description : r.DescriptionEnglish
                    }).ToListAsync();
                if (page > 0)
                {
                    Acts = Acts
                        .Skip((page - 1) * pageSize)
                        .Take(pageSize);
                }

                DistributedCacheEntryOptions cacheOptions = new DistributedCacheEntryOptions()
                    .SetAbsoluteExpiration(TimeSpan.FromMinutes(settings.ExpirationPeriod));
                await distributedCache.SetStringAsync(cacheKey, JsonConvert.SerializeObject(Acts), cacheOptions);
            }

            return Acts.ToList();
        }

        public async Task<List<Activity>> GetActivitysByParent(int id, int page = 0, int pageSize = 15)
        {
            IQueryable<Activity> Acts = Context.Activity
                .Include(s => s.SubSector)
                .Where(s => s.SubSectorId == id)
                .OrderBy(Act => Act.ActivityId);
            if (page > 0)
            {
                Acts = Acts
                    .Skip((page - 1) * pageSize)
                    .Take(pageSize);
            }

            return await Acts.ToListAsync();
        }

        public Activity GetActivity(object ActivityId)
        {
            Activity Act = null;
            try
            {
                int id = (int) ActivityId;
                Act = Context.Activity
                    .Include(s => s.SubSector)
                    .Where(Acts => Acts.ActivityId == id).FirstOrDefault();
            }
            catch (InvalidOperationException)
            {
                SetError("Couldn't load Activity - invalid Activity id specified.");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }

            return Act;
        }

        public async Task<bool> DeleteActivity(int id)
        {
            var Activity = await Context.Activity
                .FirstOrDefaultAsync(Act => Act.ActivityId == id);
            if (Activity == null)
            {
                SetError("Activity does not exist");
                return false;
            }

            Context.Activity.Remove(Activity);
            return await SaveAsync();
        }

        //protected override bool OnValidate(Activity entity)
        //{
        //    if (entity == null)
        //    {
        //        ValidationErrors.Add("No record was provided");
        //        return false;
        //    }
        //    //if (string.IsNullOrEmpty(entity.Name))
        //    //    ValidationErrors.Add("Please enter Name", "Name");
        //    //else if (string.IsNullOrEmpty(entity.Name) || entity.Name.Length < 2)
        //    //    ValidationErrors.Add("TariffName Name must be at least 2 charcters long");
        //    return ValidationErrors.Count < 1;
        //}
    }
}