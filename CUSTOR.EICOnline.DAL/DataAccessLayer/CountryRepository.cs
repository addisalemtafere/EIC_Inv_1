using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CUSTOR.EICOnline.DAL.EntityLayer;
using CUSTOR.EntityFrameworkCommon;
using Microsoft.EntityFrameworkCore;

namespace CUSTOR.EICOnline.DAL
{
    public class CountryRepository : EFRepository<ApplicationDbContext, Country>
    {
        public CountryRepository(ApplicationDbContext context) : base(context)
        {
        }

        public async Task<List<Country>> GetCountrys(int page = 0, int pageSize = 15)
        {
            IQueryable<Country> Countrys = Context.Country
                .OrderBy(Country => Country.Id);
            if (page > 0)
            {
                Countrys = Countrys
                    .Skip((page - 1) * pageSize)
                    .Take(pageSize);
            }

            return await Countrys.ToListAsync();
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