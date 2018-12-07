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

        public async Task<Business> GetRecordsById(object Id)
        {
          
            try
            {
                int id = (int)Id;
                return await Context.Businesses
                  .SingleOrDefaultAsync(business => business.ID == id);
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
            return null;
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

                var investor = Context.Investors.FirstOrDefault(inv => inv.InvestorId == bussiness.InvestorId);

                var service = Context.Service.FirstOrDefault(inv => inv.ServiceId == 1236);

                bussiness.DateRegistered = DateTime.Now;
                bussiness.CreatedDate = DateTime.Now;
                bussiness.IsPrivouslyRegistered = false;
                bussiness.MainGuid = Guid.NewGuid();
                bussiness.SiteID = "";
                bussiness.Status = "0";
                bussiness.TradeNameDate = DateTime.Now;
                bussiness.CreatedBy = "";

                var serviceApplication = new ServiceApplication
                {
                    InvestorId = bussiness.InvestorId,
                    CaseNumber = "6755",
                    ServiceId = 1236,
                    CurrentStatusId = 44450,
                    IsSelfService = true,
                    IsPaid = true,
                    StartDate = DateTime.Now,
                    CreatedUserId = 1,
                    IsActive = false,
                    CreatedUserName = "",
                    InvestorNameAmharic = investor.InvestorName,
                    InvestorNameEnglish = investor.InvestorNameEng,
                    ServiceNameAmharic = service.DisplayName,
                    ServiceNameEnglish = service.DisplayNameEnglish,
                };

                var serviceWorkflow = new ServiceWorkflow
                {
                    StepId = 9,
                    ActionId = 3,
                    FromStatusId = 3,
                    ToStatusId = 5,
                    PerformedByRoleId = 1,
                    NextStepId = 13,
                    GenerateEmail = true,
                    GenerateLetter = true,
                    IsDocumentRequired = true,
                    ServiceId = 1236,
                    LegalStatusId = 3,
                    CreatedUserId = 1,
                    IsActive = false
                };

                Context.Businesses.Add(bussiness);
                Context.SaveChanges();

                serviceApplication.ProjectId = bussiness.ID;
                Context.ServiceApplication.Add(serviceApplication);
                Context.SaveChanges();
                bussiness.ServiceApplicationId = serviceApplication.ServiceApplicationId;
                serviceWorkflow.ServiceApplicationId = serviceApplication.ServiceApplicationId;
                Context.ServiceWorkflow.Add(serviceWorkflow);
                Context.SaveChanges();
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
