using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CUSTOR.EICOnline.DAL.EntityLayer;
using CUSTOR.EntityFrameworkCommon;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

namespace CUSTOR.EICOnline.DAL
{
    public class InvestmentActivityRepository : EFRepository<ApplicationDbContext, InvestmentActivity>
    {
        private readonly IDistributedCache distributedCache;
        private readonly Settings settings;

        public InvestmentActivityRepository(ApplicationDbContext context, IDistributedCache _distributedCache,
            IConfiguration _configuration) : base(context)
        {
            settings = new Settings(_configuration);
            distributedCache = _distributedCache;
        }

        public async Task<List<InvestmentActivity>> GetInvestmentActivitys(string lang, int page = 0,
            int pageSize = 15)
        {
            IEnumerable<InvestmentActivity> InvActs = null;
//            string cacheKey = "InvActivityKey";
//            var cachedInvActivitys = await distributedCache.GetStringAsync(cacheKey);
//            if (cachedInvActivitys != null)
//            {
//                InvActs = JsonConvert.DeserializeObject<IEnumerable<InvestmentActivity>>(cachedInvActivitys);
//            }
//            else
//            {
            InvActs = await Context.InvestmentActivity
                .OrderBy(Act => Act.DescriptionEnglish)
                .Select(r => new InvestmentActivity()
                {
                    ActivityId = r.ActivityId,
                    InvActivityId = r.InvActivityId,
                    Description = (lang == "et") ? r.Description : r.DescriptionEnglish
                }).ToListAsync();
            if (page > 0)
            {
                InvActs = InvActs
                    .Skip((page - 1) * pageSize)
                    .Take(pageSize);
            }

//                DistributedCacheEntryOptions cacheOptions = new DistributedCacheEntryOptions()
//                    .SetAbsoluteExpiration(TimeSpan.FromMinutes(settings.ExpirationPeriod));
//                await distributedCache.SetStringAsync(cacheKey, JsonConvert.SerializeObject(InvActs), cacheOptions);
//            }

            return InvActs.ToList();
        }

        public async Task<List<InvestmentActivity>> GetInvestmentActivitysByParent(int id, int page = 0,
            int pageSize = 15)

        {
            IQueryable<InvestmentActivity> Acts = Context.InvestmentActivity
                .Include(a => a.Activity)
                .Where(sb => sb.ActivityId == id)
                .OrderBy(Act => Act.InvActivityId);
            if (page > 0)
            {
                Acts = Acts
                    .Skip((page - 1) * pageSize)
                    .Take(pageSize);
            }

            return await Acts.ToListAsync();
        }

        public InvestmentActivity GetInvestmentActivityByProjectId(object ProjectId)
        {
            InvestmentActivity InvAct = null;
            try
            {
                int id = (int) ProjectId;
                InvAct = Context.InvestmentActivity
                    .Include(a => a.Project)
                    .Where(Inv => Inv.Project.ProjectId == id).FirstOrDefault();
            }
            catch (InvalidOperationException)
            {
                SetError("Couldn't load InvestmentActivity - invalid InvestmentActivity id specified.");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }

            return InvAct;
        }

        public InvestmentActivity GetInvestmentActivity(object InvActivityId)
        {
            InvestmentActivity InvAct = null;
            try
            {
                int id = (int) InvActivityId;
                InvAct = Context.InvestmentActivity
                    .Include(a => a.Activity)
                    .ThenInclude(s => s.SubSector)
                    .Where(Inv => Inv.InvActivityId == id).FirstOrDefault();
            }
            catch (InvalidOperationException)
            {
                SetError("Couldn't load InvestmentActivity - invalid InvestmentActivity id specified.");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }

            return InvAct;
        }

        public async Task<bool> DeleteInvestmentActivity(int id)
        {
            var InvestmentActivity = await Context.InvestmentActivity
                .FirstOrDefaultAsync(Act => Act.InvActivityId == id);
            if (InvestmentActivity == null)
            {
                SetError("InvestmentActivity does not exist");
                return false;
            }

            Context.InvestmentActivity.Remove(InvestmentActivity);
            return await SaveAsync();
        }

        //protected override bool OnValidate(InvestmentActivity entity)
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