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
    public class CountryRepository : EFRepository<ApplicationDbContext, Country>
    {
        private readonly IDistributedCache distributedCache;
        private readonly Settings settings;

        public CountryRepository(ApplicationDbContext context, IDistributedCache _distributedCache,
            IConfiguration _configuration) : base(context)
        {
            settings = new Settings(_configuration);
            distributedCache = _distributedCache;
        }

        public async Task<List<CountryDTO>> GetCountrys(string lang, int page = 0, int pageSize = 15)
        {
            IEnumerable<CountryDTO> Country = null;
            string cacheKey = "CountryKey";
            var cachedCountrys = await distributedCache.GetStringAsync(cacheKey);
            if (cachedCountrys != null)
            {
                Country = JsonConvert.DeserializeObject<IEnumerable<CountryDTO>>(cachedCountrys);
            }
            else
            {
                Country = await Context.Country
                    .OrderBy(Coun => Coun.English)
                    .Select(r => new CountryDTO
                    {
                        Id = r.Id,
                        English = (lang == "et") ? r.Amharic : r.English
                    }).ToListAsync();
                if (page > 0)
                {
                    Country = Country
                        .Skip((page - 1) * pageSize)
                        .Take(pageSize);
                }

                DistributedCacheEntryOptions cacheOptions = new DistributedCacheEntryOptions()
                    .SetAbsoluteExpiration(TimeSpan.FromMinutes(settings.ExpirationPeriod));
                await distributedCache.SetStringAsync(cacheKey, JsonConvert.SerializeObject(Country), cacheOptions);
            }

            return Country.ToList();
        }

        public async Task<CountryDTO> GetRecord(int Id)
        {
            CountryDTO Country = null;
            try
            {
                string query1 = $@"(select InvestorId,id,Amharic,English from Country
                                    Inner Join Investor ON Investor.BranchCountry=Country.Id)";

                Country = await Context.CountryDTO
                    .Where(m => m.InvestorId == Id)
                    .FromSql(query1)
                    .FirstAsync();
            }
            catch (InvalidOperationException)
            {
                SetError("Couldn't load Country - invalid Country id specified.");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }

            return Country;
        }

        public async Task<bool> DeleteCountry(int id)
        {
            var Orig = await Context.Country
                .FirstOrDefaultAsync(Country => Country.Id == id);
            if (Orig == null)
            {
                SetError("Country does not exist");
                return false;
            }

            Context.Country.Remove(Orig);
            return await SaveAsync();
        }

        protected override bool OnValidate(Country entity)
        {
            if (entity == null)
            {
                ValidationErrors.Add("No record was provided");
                return false;
            }

//      if (string.IsNullOrEmpty(entity.Name))
//        ValidationErrors.Add("Please enter Name", "Name");
//      else if (string.IsNullOrEmpty(entity.Name) || entity.Name.Length < 2)
//        ValidationErrors.Add("CountryName Name must be at least 2 charcters long");
            return ValidationErrors.Count < 1;
        }
    }
}