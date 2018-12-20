using CUSTOR.EICOnline.DAL.EntityLayer;
using CUSTOR.EntityFrameworkCommon;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CUSTOR.EICOnline.DAL.DataAccessLayer
{
    public class tblMajorDivisionRepository
      : EFRepository<ApplicationDbContext, tblMajorDivision>
    {
        public tblMajorDivisionRepository(ApplicationDbContext context) : base(context)
        {
        }
        public async Task<List<tblMajorDivision>> GetRecords()
        {
            List<tblMajorDivision> tblMajorDivisions = null;
            try
            {
                tblMajorDivisions = await Context.tblMajorDivision
                 .ToListAsync();
            }
            catch (InvalidOperationException)
            {
                SetError("Couldn't load tblMajorDivisions");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }
            return tblMajorDivisions;
        }

        //public async Task<List<tblMajorDivision>> GetRecordsByTin(string Tin)
        //{
        //    List<tblMajorDivision> tblMajorDivisions = new List<tblMajorDivision>();
        //    try
        //    {
        //        var catagory = await Context.RegistrationCatagorys
        //            .SingleOrDefaultAsync(param => param.Tin == Tin);

        //        tblMajorDivisions = await Context.tblMajorDivision
        //            .Where(param => param.Code.ToString() == catagory.MajorCatagoryCode)
        //            .ToListAsync();
        //    }
        //    catch (InvalidOperationException exc)
        //    {
        //        SetError("Couldn't load tblMajorDivisions");
        //        return null;
        //    }
        //    catch (Exception ex)
        //    {
        //        SetError(ex);
        //    }
        //    return tblMajorDivisions;
        //}


        public async Task<List<tblMajorDivision>> GetMajorDivisionsByInvestorID(int InvstorId)
        {
            List<tblMajorDivision> tblMajorDivisions = new List<tblMajorDivision>();
            try
            {

                //var q = from m in Context.tblMajorDivision
                //        join r in Context.RegistrationCatagorys
                //        on m.Code equals r.MajorCatagoryCode
                //        select new
                //        {
                //            m.Id,m.Code,
                //            m.Description,
                //            m.DescriptionSort,
                //            m.DescriptionSoundX,
                //            m.EnglishDescription,
                //            m.MajorDivAfanOromo,
                //            m.MajorDivAfar,
                //            m.MajorDivArabic,
                //            m.MajorDivSomali,
                //            m.MajorDivTigrigna,

                //        };


                List<RegistrationCatagory> catagory = await Context.RegistrationCatagorys
                //.ToListAsync(param => param.InvestorId === InvstorId);
                .Where(m => m.InvestorId == InvstorId).ToListAsync();
                // ToDO Fire
                for (var i = 0; i < catagory.Count; i++)
                {
                    tblMajorDivisions = await Context.tblMajorDivision
                        .Where(param => param.Code.ToString() == catagory[i].MajorCatagoryCode).ToListAsync();
                }
            }
            catch (InvalidOperationException exc)
            {
                SetError("Couldn't load tblMajorDivisions");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }
            return tblMajorDivisions;
        }



    }
}
