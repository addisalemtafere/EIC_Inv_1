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
    public class RegistrationRepository : EFRepository<ApplicationDbContext, Registration>
    {
        public RegistrationRepository(ApplicationDbContext context) : base(context)
        {
        }

        //public override async Task<Registration> GetRecord(object tin)
        //{
        //    Registration registration = null;
        //    try
        //    {
        //        string Tin = (string)tin;
        //        registration = await Context.Registrations
        //          .Include(p => p.RegistrationCatagory)
        //                        .FirstOrDefaultAsync(reg => reg.Tin == Tin);
        //    }
        //    catch (InvalidOperationException)
        //    {
        //        SetError("Couldn't load Registration - invalid Registration Tin specified.");
        //        return null;
        //    }
        //    catch (Exception ex)
        //    {
        //        SetError(ex);
        //    }
        //    return registration;
        //}


        public async Task<List<Registration>> GetRecordByUserId(object UserId)
        {
            List<Registration> registration = null;
            try
            {
                string id = (string)UserId;
                registration = await Context.Registrations
                  .Where(reg => reg.Username == id)
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
            return registration;
        }


        public async Task<Registration> GetRecordByTIN(object Tin)
        {
            Registration registration = null;
            try
            {
                string id = (string)Tin;
                registration = await Context.Registrations
                  .SingleOrDefaultAsync(reg => reg.Tin == id);
            }
            catch (InvalidOperationException ex)
            {
                SetError("Couldn't load Registration - invalid Registration id specified.");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }
            return registration;
        }

        public async Task<bool> DeleteRegistration(string Tin)
        {
            var registration = await Context.Registrations
                .FirstOrDefaultAsync(reg => reg.Tin == Tin);
            if (registration == null)
            {
                SetError("Registration does not exist");
                return false;
            }
            Context.Registrations.Remove(registration);
            return await SaveAsync();
        }

        protected override bool OnValidate(Registration entity)
        {
            if (entity == null)
            {
                ValidationErrors.Add("No record was provided");
                return false;
            }
            if (string.IsNullOrEmpty(entity.BusinessNameAmh))
                ValidationErrors.Add("Please enter business Name for Registration", "BusinessNameAmh");
            if (string.IsNullOrEmpty(entity.BusinessName))
                ValidationErrors.Add("Please enter business Name for Registration", "BusinessName");
            if (string.IsNullOrEmpty(entity.BusinessName))
                entity.BusinessNameRegional = entity.BusinessNameAmh;

            else if (string.IsNullOrEmpty(entity.BusinessNameAmh) || entity.BusinessName.Length < 2)
                ValidationErrors.Add("First Name must be at least 2 charcters long");
            return ValidationErrors.Count < 1;
        }
    }
}