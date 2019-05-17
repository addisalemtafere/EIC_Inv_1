using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CUSTOR.EICOnline.DAL.EntityLayer;
using CUSTOR.EntityFrameworkCommon;
using Microsoft.EntityFrameworkCore;

namespace CUSTOR.EICOnline.DAL
{
    public class NationalityRepository : EFRepository<ApplicationDbContext, Nationality>
    {
        public NationalityRepository(ApplicationDbContext context) : base(context)
        {
        }

        public async Task<List<Nationality>> GetNationalitys(int page = 0, int pageSize = 15)
        {
            IQueryable<Nationality> Nationalitys = Context.Nationality
                .OrderBy(Nationality => Nationality.id);
            if (page > 0)
            {
                Nationalitys = Nationalitys
                    .Skip((page - 1) * pageSize)
                    .Take(pageSize);
            }

            return await Nationalitys.ToListAsync();
        }

        public async Task<NationalityDTO> GetRecord(int Id)
        {
            NationalityDTO Nationality = null;
            try
            {
                string query1 = $@"(select InvestorId,id,descriptionEnglish,description,code from Nationality
                                    Inner Join Investor ON Investor.Nationality=Nationality.Code)";
    
                Nationality = await Context.NationalityDTO
                    .Where(m => m.InvestorId == Id)
                    .FromSql(query1)
                    .FirstAsync();
            }
            catch (InvalidOperationException)
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