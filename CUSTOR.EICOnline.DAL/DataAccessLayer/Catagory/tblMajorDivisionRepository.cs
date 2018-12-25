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
        : EFRepository<ApplicationDbContext, MajorDivision>
    {
        public tblMajorDivisionRepository(ApplicationDbContext context) : base(context)
        {
        }

        public async Task<List<MajorDivision>> GetRecords()
        {
            List<MajorDivision> tblMajorDivisions = null;
            try
            {
                tblMajorDivisions = await Context.MajorDivision
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

        //public async Task<List<MajorDivision>> GetRecordsByTin(string Tin)
        //{
        //    List<MajorDivision> tblMajorDivisions = new List<MajorDivision>();
        //    try
        //    {
        //        var catagory = await Context.RegistrationCatagorys
        //            .SingleOrDefaultAsync(param => param.Tin == Tin);

        //        tblMajorDivisions = await Context.MajorDivision
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


        public async Task<List<MajorDivision>> GetMajorDivisionsByInvestorID(int InvstorId)
        {
            List<MajorDivision> tblMajorDivisions = new List<MajorDivision>();
            try
            {
                //var q = from m in Context.MajorDivision
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
                    //if (i == 1)
                    //{
                    tblMajorDivisions = await Context.MajorDivision
                        .Where(param => param.Code.ToString() == catagory[i].MajorCatagoryCode).ToListAsync();
                    //}
                    //else if (i == 2)
                    //{
                    //    tblMajorDivisions = await Context.MajorDivision
                    //        .Where(param =>
                    //            param.Code.ToString() == catagory[i].MajorCatagoryCode ||
                    //            param.Code.ToString() == catagory[i + 1].MajorCatagoryCode).ToListAsync();
                    //}
                    //else if (i == 3)
                    //{
                    //    tblMajorDivisions = await Context.MajorDivision
                    //        .Where(param =>
                    //            param.Code.ToString() == catagory[i].MajorCatagoryCode ||
                    //            param.Code.ToString() == catagory[i + 1].MajorCatagoryCode ||
                    //            param.Code.ToString() == catagory[i + 2].MajorCatagoryCode).ToListAsync();
                    //}
                    //else if (i == 4)
                    //{
                    //    tblMajorDivisions = await Context.MajorDivision
                    //        .Where(param => param.Code.ToString() == catagory[i].MajorCatagoryCode ||
                    //                        param.Code.ToString() == catagory[i + 1].MajorCatagoryCode ||
                    //                        param.Code.ToString() == catagory[i + 2].MajorCatagoryCode ||
                    //                        param.Code.ToString() == catagory[i + 2].MajorCatagoryCode).ToListAsync();
                    //}
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