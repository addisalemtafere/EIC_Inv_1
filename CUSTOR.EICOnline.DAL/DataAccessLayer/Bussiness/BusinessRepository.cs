using CUSTOR.EICOnline.DAL.EntityLayer;
using CUSTOR.EntityFrameworkCommon;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CUSTOR.EICOnline.DAL.DataAccessLayer.Bussiness
{
   public class BusinessRepository : EFRepository<ApplicationDbContext, Business>
    {
        public BusinessRepository(ApplicationDbContext context) : base(context)
        {
        }

        public async Task<List<Business>> GetRecordsById(object Id)
        {
            List<Business> Business = null;
            try
            {
                int id = (int)Id;
                Business = await Context.Businesses
                  .Where(business => business.ID == id)
                                .ToListAsync();
            }
            catch (InvalidOperationException ex1)
            {
                SetError("Couldn't load Business - invalid Business id specified.");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }
            return Business;
        }

        public async Task<Registration> GetRegistrationByTin(string Tin)
        {
            Registration tblRegistration = null;
            try
            {
                tblRegistration = await Context.Registrations
                  .SingleOrDefaultAsync(Registration => Registration.Tin == Tin);
            }
            catch (InvalidOperationException ex1)
            {
                SetError("Couldn't load tblRegistration - invalid tblRegistration Tin specified.");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }
            return tblRegistration;
        }

        public async Task<Business> SaveBussiness(Business bussiness)
        {
            try
            {
                
                bussiness.DateRegistered = DateTime.Now;
                bussiness.EventDateTime = DateTime.Now;
                bussiness.IsPrivouslyRegistered = false;
                bussiness.MainGuid = Guid.NewGuid();
                bussiness.SiteID = "";
                bussiness.Status = "0";
                bussiness.TradeNameDate = DateTime.Now;
                bussiness.Username = "";
                Context.Businesses.Add(bussiness);
                await Context.SaveChangesAsync();
            }
           
            catch (InvalidOperationException ex1)
            {
                SetError("Couldn't load Business - invalid Business id specified.");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }
            return bussiness;
        }
    }
}
