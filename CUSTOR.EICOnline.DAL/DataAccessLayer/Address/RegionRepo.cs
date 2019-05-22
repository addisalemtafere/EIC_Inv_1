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

namespace CUSTOR.EICOnline.DAL.DataAccessLayer.Address
{
    public class RegionRepo : EFRepository<ApplicationDbContext, Region>
    {
        private readonly IDistributedCache distributedCache;
        private readonly Settings settings;

        public RegionRepo(ApplicationDbContext context, IDistributedCache _distributedCache,
            IConfiguration _configuration) : base(context)
        {
            settings = new Settings(_configuration);
            distributedCache = _distributedCache;
        }

        public async Task<List<Region>> GetRegions()
        {
            try
            {
                return await Context.Regions.ToListAsync();
                //.Select(r => new RegionViewModel
                //{
                //    RegionId = r.RegionId,
                //    DescriptionEnglish = r.DescriptionEnglish,
                //    Description = r.Description
                //})
                //.ToListAsync();
            }
            catch (Exception ex)
            {
                SetError(ex);
                return null;
            }
        }

        public async Task<List<RegionViewModel>> GetRegions(string lang)
        {
            IEnumerable<RegionViewModel> Regions = null;
            string cacheKey = "RegionKey";
            var cachedRegions = await distributedCache.GetStringAsync(cacheKey);
            if (cachedRegions != null)
            {
                Regions = JsonConvert.DeserializeObject<IEnumerable<RegionViewModel>>(cachedRegions);
            }
            else
            {
                Regions = await Context.Regions
                    .Select(r => new RegionViewModel
                    {
                        RegionId = r.RegionId,
                        Description = (lang == "et") ? r.Description : r.DescriptionEnglish
                    })
                    .ToListAsync();

                DistributedCacheEntryOptions cacheOptions = new DistributedCacheEntryOptions()
                    .SetAbsoluteExpiration(TimeSpan.FromMinutes(settings.ExpirationPeriod));
                await distributedCache.SetStringAsync(cacheKey, JsonConvert.SerializeObject(Regions), cacheOptions);
            }

            return Regions.ToList();
        }

        public async Task<Region> GetRegionsById(string Id)
        {
            try
            {
                return await Context.Regions.Where(r => r.RegionId == Id)
                    .FirstOrDefaultAsync();
            }
            catch (Exception ex)
            {
                SetError(ex);
                return null;
            }
        }

        public async Task<bool> DeleteRegion(string id)
        {
            var Region = await Context.Regions
                .FirstOrDefaultAsync(region => region.RegionId == id);
            if (Region == null)
            {
                SetError("Region does not exist");
                return false;
            }

            Context.Regions.Remove(Region);
            return await SaveAsync();
        }
    }
}