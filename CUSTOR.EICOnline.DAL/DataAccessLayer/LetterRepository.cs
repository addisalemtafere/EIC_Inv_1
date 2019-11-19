using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CUSTOR.EICOnline.DAL.EntityLayer;
using CUSTOR.EntityFrameworkCommon;
using Microsoft.EntityFrameworkCore;

namespace CUSTOR.EICOnline.DAL.DataAccessLayer
{
    public class LetterRepository : EFRepository<ApplicationDbContext, Letter>
    {
        public LetterRepository(ApplicationDbContext context) : base(context)
        {
        }

        public Task<List<Letter>> GetLetters(int id, string letterType, string letterType1, int page = 0,
            int pageSize = 15)
        {
//            string query1 =
//                $@"(select distinct (Select English from Lookup Where Lookup.LookupId=Letter.LetterType) as LetterType,LetterId,LetterContent,UserName,ProjectId,RequestDate,LetterNo from Letter)";
            IQueryable<Letter> Letters = Context.Letter
                .Where(Let => Let.ProjectId == id && (Let.LetterType == letterType || Let.LetterType == letterType1))
                //.FromSql(query1)
                .OrderBy(Let => Let.LetterId);
            if (page > 0)
            {
                Letters = Letters
                    .Skip((page - 1) * pageSize)
                    .Take(pageSize);
            }

            return Letters.ToListAsync();
        }

        public Task<List<Letter>> GetLettersByProjectId(string lang, int id, int page = 0, int pageSize = 15)
        {
//            string FieldName = StaticDataHelper.GetFieldName(lang);
//            (Select {FieldName} from Lookup Where Lookup.LookupId=Letter.LetterType) as
            string query1 =
                $@"(select distinct  LetterType,LetterId,LetterContent,UserName,ProjectId,RequestDate,LetterNo from Letter)";

            IQueryable<Letter> Letters = Context.Letter
                .Where(Let => Let.ProjectId == id)
                .FromSql(query1)
                .OrderBy(Let => Let.LetterId);
            if (page > 0)
            {
                Letters = Letters
                    .Skip((page - 1) * pageSize)
                    .Take(pageSize);
            }

            return Letters.ToListAsync();
        }

        public Letter GetLetter(object LetterId)
        {
            Letter letterIds = null;
            try
            {
                int id = (int) LetterId;
                letterIds = Context.Letter
                    .Where(lett => lett.LetterId == id).FirstOrDefault();
            }
            catch (InvalidOperationException)
            {
                SetError("Couldn't load Letter - invalid Letter id specified.");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }

            return letterIds;
        }

        public async Task<bool> DeleteLetter(int id)
        {
            var Letter = await Context.Letter
                .FirstOrDefaultAsync(Let => Let.LetterId == id);
            if (Letter == null)
            {
                SetError("Letter does not exist");
                return false;
            }

            Context.Letter.Remove(Letter);
            return await SaveAsync();
        }

        //protected override bool OnValidate(Letter entity)
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