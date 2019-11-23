using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CUSTOR.EICOnline.DAL.DataAccessLayer;
using CUSTOR.EICOnline.DAL.EntityLayer;
using CUSTOR.EICOnline.DAL.EntityLayer.AllAddress;
using CUSTOR.EntityFrameworkCommon;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

namespace CUSTOR.EICOnline.DAL
{
    public class NationalityRepository : EFRepository<ApplicationDbContext, Nationality>
    {
        private readonly IDistributedCache distributedCache;
        private readonly Settings settings;

        public NationalityRepository(ApplicationDbContext context, IDistributedCache _distributedCache,
            IConfiguration _configuration) : base(context)
        {
            settings = new Settings(_configuration);
            distributedCache = _distributedCache;
        }

        public async Task<List<NationalDTO>> GetNationalitys(string lang, int page = 0, int pageSize = 15)
        {
            IEnumerable<NationalDTO> Nationals = null;
            string cacheKey = "NationalityKey";
            var cachedNationals = await distributedCache.GetStringAsync(cacheKey);
            if (cachedNationals != null)
            {
                Nationals = JsonConvert.DeserializeObject<IEnumerable<NationalDTO>>(cachedNationals);
            }
            else
            {
                Nationals = await Context.Nationality
                    .OrderBy(Nationality => Nationality.description)
                    .Select(r => new NationalDTO
                    {
                        id = r.id,
                        descriptionEnglish = (lang == "et") ? r.description : r.descriptionEnglish
                    }).ToListAsync();
                if (page > 0)
                {
                    Nationals = Nationals
                        .Skip((page - 1) * pageSize)
                        .Take(pageSize);
                }

                DistributedCacheEntryOptions cacheOptions = new DistributedCacheEntryOptions()
                    .SetAbsoluteExpiration(TimeSpan.FromMinutes(settings.ExpirationPeriod));
                await distributedCache.SetStringAsync(cacheKey, JsonConvert.SerializeObject(Nationals), cacheOptions);
            }

            return Nationals.ToList();
        }

        public async Task<NationalityDTO> GetRecord(int Id)
        {
            NationalityDTO Nationality = null;
            try
            {
                string query1 = $@"(select InvestorId,id,descriptionEnglish,description,code from Nationality
                                    Inner Join Investor ON Investor.Nationality=Nationality.Id)";

                Nationality = await Context.NationalityDTO
                    .Where(m => m.InvestorId == Id)
                    .FromSql(query1)
                    .FirstAsync();
            }
            catch (InvalidOperationException ex)
            {
                SetError("Couldn't load Nationality - invalid Nationality id specified.");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }

            return Nationality;
        }

        public async Task<bool> DeleteNationality(int id)
        {
            var Orig = await Context.Nationality
                .FirstOrDefaultAsync(Nationality => Nationality.id == id);
            if (Orig == null)
            {
                SetError("Nationality does not exist");
                return false;
            }

            Context.Nationality.Remove(Orig);
            return await SaveAsync();
        }

        protected override bool OnValidate(Nationality entity)
        {
            if (entity == null)
            {
                ValidationErrors.Add("No record was provided");
                return false;
            }

//      if (string.IsNullOrEmpty(entity.Name))
//        ValidationErrors.Add("Please enter Name", "Name");
//      else if (string.IsNullOrEmpty(entity.Name) || entity.Name.Length < 2)
//        ValidationErrors.Add("NationalityName Name must be at least 2 charcters long");
            return ValidationErrors.Count < 1;
        }
    }
}