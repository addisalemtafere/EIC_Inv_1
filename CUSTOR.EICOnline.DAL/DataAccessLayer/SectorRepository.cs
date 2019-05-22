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
    public class SectorRepository : EFRepository<ApplicationDbContext, Sector>
    {
        private readonly IDistributedCache distributedCache;
        private readonly Settings settings;

        public SectorRepository(ApplicationDbContext context, IDistributedCache _distributedCache,
            IConfiguration _configuration) : base(context)
        {
            settings = new Settings(_configuration);
            distributedCache = _distributedCache;
        }

        public async Task<List<SectorDTO>> GetSectors(string lang, int page = 0, int pageSize = 15)
        {
            IEnumerable<SectorDTO> Sector = null;
            string cacheKey = "SectorKey";
            var cachedSectors = await distributedCache.GetStringAsync(cacheKey);
            if (cachedSectors != null)
            {
                Sector = JsonConvert.DeserializeObject<IEnumerable<SectorDTO>>(cachedSectors);
            }
            else
            {
                Sector =await Context.Sector
                    .OrderBy(sector => sector.SectorId)
                    .Select(r => new SectorDTO
                    {
                        SectorId = r.SectorId,
                        Description = (lang == "et") ? r.Description : r.DescriptionEnglish
                    }).ToListAsync();
                if (page > 0)
                {
                    Sector = Sector
                        .Skip((page - 1) * pageSize)
                        .Take(pageSize);
                }

                DistributedCacheEntryOptions cacheOptions = new DistributedCacheEntryOptions()
                    .SetAbsoluteExpiration(TimeSpan.FromMinutes(settings.ExpirationPeriod));
                await distributedCache.SetStringAsync(cacheKey, JsonConvert.SerializeObject(Sector), cacheOptions);
            }

            return  Sector.ToList();
        }

        public IEnumerable<Sector> GetSector(object SectorId)
        {
            IEnumerable<Sector> sector = null;
            try
            {
                int id = (int) SectorId;
                sector = Context.Sector
                    .Where(sectors => sectors.SectorId == id).AsEnumerable();
            }
            catch (InvalidOperationException)
            {
                SetError("Couldn't load Sector - invalid Sector id specified.");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }

            return sector;
        }

        public async Task<bool> DeleteSector(int id)
        {
            var Sector = await Context.Sector
                .FirstOrDefaultAsync(sector => sector.SectorId == id);
            if (Sector == null)
            {
                SetError("Sector does not exist");
                return false;
            }

            Context.Sector.Remove(Sector);
            return await SaveAsync();
        }

        //protected override bool OnValidate(Sector entity)
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