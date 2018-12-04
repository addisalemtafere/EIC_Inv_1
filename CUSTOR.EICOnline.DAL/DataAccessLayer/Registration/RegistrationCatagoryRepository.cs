using CUSTOR.EICOnline.DAL.DataAccessLayer.dto;
using CUSTOR.EICOnline.DAL.EntityLayer;
using CUSTOR.EntityFrameworkCommon;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace CUSTOR.EICOnline.DAL
{
    public class RegistrationCatagoryRepository : EFRepository<ApplicationDbContext, RegistrationCatagory>
    {
        public RegistrationCatagoryRepository(ApplicationDbContext context) : base(context)
        {
        }


        public async Task<List<RegistrationCatagory>> GetRegistrationCatagoryRecordsByInvestorId(int InvestorID)
        {
            List<RegistrationCatagory> registrationCatagory = null;
            try
            {               
                registrationCatagory = await Context.RegistrationCatagorys
                  .Where(reg => reg.InvestorId == InvestorID)
                                .ToListAsync();
            }
            catch (InvalidOperationException)
            {
                SetError("Couldn't load Registration - invalid Registration id specified.");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }
            return registrationCatagory;
        }


        //public async Task<List<RegistrationCatagory>> GetRegistrationCatagoryRecordsByTIN(object Tin)
        //{
        //    List<RegistrationCatagory> registrationCatagory = null;
        //    try
        //    {
        //        string id = (string)Tin;
        //        registrationCatagory = await Context.RegistrationCatagorys
        //          .Where(reg => reg.Tin == id)
        //                        .ToListAsync();
        //    }
        //    catch (InvalidOperationException)
        //    {
        //        SetError("Couldn't load Registration - invalid Registration id specified.");
        //        return null;
        //    }
        //    catch (Exception ex)
        //    {
        //        SetError(ex);
        //    }
        //    return registrationCatagory;
        //}




        public async Task<bool> DeleteRegistrationCatagoryByInvestorId(int InvestorID)
        {
            var registrationCatagory = await Context.RegistrationCatagorys
                .FirstOrDefaultAsync(reg => reg.InvestorId == InvestorID);
            if (registrationCatagory == null)
            {
                //SetError("Registration does not exist");
                return false;
            }
            Context.RegistrationCatagorys.Remove(registrationCatagory);
            return await SaveAsync();
        }

        //public async Task<bool> DeleteRegistrationCatagory(string Tin)
        //{
        //    var registrationCatagory = await Context.RegistrationCatagorys
        //        .FirstOrDefaultAsync(reg => reg.Tin == Tin);
        //    if (registrationCatagory == null)
        //    {
        //        SetError("Registration does not exist");
        //        return false;
        //    }
        //    Context.RegistrationCatagorys.Remove(registrationCatagory);
        //    return await SaveAsync();
        //}



        //protected override bool OnValidate(RegistrationCatagory entity)
        //{
        //    if (entity == null)
        //    {
        //        ValidationErrors.Add("No record was provided");
        //        return false;
        //    }
        //    if (string.IsNullOrEmpty(entity.BusinessNameAmh))
        //        ValidationErrors.Add("Please enter business Name for Registration", "BusinessNameAmh");
        //    if (string.IsNullOrEmpty(entity.BusinessName))
        //        ValidationErrors.Add("Please enter business Name for Registration", "BusinessName");
        //    if (string.IsNullOrEmpty(entity.BusinessName))
        //        entity.BusinessNameRegional = entity.BusinessNameAmh;
        //    else if (string.IsNullOrEmpty(entity.BusinessNameAmh) || entity.BusinessName.Length < 2)
        //        ValidationErrors.Add("First Name must be at least 2 charcters long");
        //    return ValidationErrors.Count < 1;
        //}
    }
}