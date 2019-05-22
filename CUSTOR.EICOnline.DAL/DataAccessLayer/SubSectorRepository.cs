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
    public class SubSectorRepository : EFRepository<ApplicationDbContext, SubSector>
    {
        private readonly IDistributedCache distributedCache;
        private readonly Settings settings;

        public SubSectorRepository(ApplicationDbContext context, IDistributedCache _distributedCache,
            IConfiguration _configuration) : base(context)
        {
            settings = new Settings(_configuration);
            distributedCache = _distributedCache;
        }

        public async Task<List<SubSectorDTO>> GetSubSectors(string lang, int page = 0, int pageSize = 15)
        {
            IEnumerable<SubSectorDTO> SubSector = null;
            string cacheKey = "SubSectorKey";
            var cachedSectors = await distributedCache.GetStringAsync(cacheKey);
            if (cachedSectors != null)
            {
                SubSector = JsonConvert.DeserializeObject<IEnumerable<SubSectorDTO>>(cachedSectors);
            }
            else
            {
                SubSector = await Context.SubSector
                    .OrderBy(sub => sub.DescriptionEnglish)
                    .Select(r => new SubSectorDTO()
                    {
                        SectorId = r.SectorId,
                        SubSectorId = r.SubSectorId,
                        Description = (lang == "et") ? r.Description : r.DescriptionEnglish
                    }).ToListAsync();
                if (page > 0)
                {
                    SubSector = SubSector
                        .Skip((page - 1) * pageSize)
                        .Take(pageSize);
                }

                DistributedCacheEntryOptions cacheOptions = new DistributedCacheEntryOptions()
                    .SetAbsoluteExpiration(TimeSpan.FromMinutes(settings.ExpirationPeriod));
                await distributedCache.SetStringAsync(cacheKey, JsonConvert.SerializeObject(SubSector), cacheOptions);
            }

            return SubSector.ToList();
        }

        public async Task<List<SubSector>> GetSubSectorsByParent(int id, int page = 0, int pageSize = 15)
        {
            IQueryable<SubSector> subsectors = Context.SubSector
                .Include(s => s.Sector)
                .Where(subsector => subsector.SectorId == id)
                .OrderBy(subsector => subsector.SubSectorId);
            if (page > 0)
            {
                subsectors = subsectors
                    .Skip((page - 1) * pageSize)
                    .Take(pageSize);
            }

            return await subsectors.ToListAsync();
        }

        public SubSector GetSubSector(object SubSectorId)
        {
            SubSector subsectors = null;
            try
            {
                int id = (int) SubSectorId;
                subsectors = Context.SubSector
                    .Include(s => s.Sector)
                    .Where(subss => subss.SubSectorId == id).FirstOrDefault();
            }
            catch (InvalidOperationException)
            {
                SetError("Couldn't load SubSector - invalid SubSector id specified.");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }

            return subsectors;
        }

        public async Task<bool> DeleteSubSector(int id)
        {
            var SubSector = await Context.SubSector
                .FirstOrDefaultAsync(sector => sector.SubSectorId == id);
            if (SubSector == null)
            {
                SetError("SubSector does not exist");
                return false;
            }

            Context.SubSector.Remove(SubSector);
            return await SaveAsync();
        }

        //protected override bool OnValidate(SubSector entity)
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