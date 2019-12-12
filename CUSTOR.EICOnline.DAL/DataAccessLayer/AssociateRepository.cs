using CUSTOR.EICOnline.DAL.EntityLayer;
using CUSTOR.EICOnline.DAL.Enum;
using CUSTOR.EntityFrameworkCommon;
using CUSTOR.Security;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace CUSTOR.EICOnline.DAL
{
    public class AssociateRepository : EFRepository<ApplicationDbContext, Associate>
    {
        public AssociateRepository(ApplicationDbContext context) : base(context)
        {
        }

        public override async Task<Associate> GetRecord(object AssociateId)
        {
            Associate associate = null;
            try
            {
                int id = (int) AssociateId;
                associate = await Context.Associate
                    .FirstOrDefaultAsync(inv => inv.AssociateId == id);
            }
            catch (InvalidOperationException)
            {
                SetError("Couldn't load Investor - invalid Investor id specified.");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }

            return associate;
        }

        public async Task<AssociateDTO> GetAssociate(int associateId)
        {
            Associate associate = null;
            Address add = null;
            try
            {
                int id = associateId;
                associate = await Context.Associate
                    .FirstOrDefaultAsync(inv => inv.AssociateId == id);

                add = await Context.Address
                    .FirstOrDefaultAsync(a => a.ParentId == id && a.AddressType == (int) AddressType.eManager);
            }
            catch (InvalidOperationException)
            {
                SetError("Couldn't load Associate - invalid Associate id specified.");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }

            return AssociateHelper.GetAssociateDTO(associate, add);
        }

        public async Task<List<AssociateListDTO>> GetManagers(int InvestorId){

            List<AssociateListDTO> active_managersList = null;
            try
            {
                active_managersList = (from c in Context.Associate
                                       join nat in Context.Nationality
                                       on c.Nationality equals nat.id
                                       select new AssociateListDTO
                                       {
                                           AssociateId = c.AssociateId,
                                           Tin = c.Tin,
                                           FullName = c.FirstName + " " + c.FatherName + " " + c.GrandName,
                                           FullNameEng = c.FirstNameEng + " " + c.FatherNameEng + " " + c.GrandNameEng,
                                           Nationality = nat.description,
                                       }).ToList();

            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }


            return active_managersList;
        }
        public async Task<Associate> GetManagerByIvestorId (int InvestorId)
        {
            Associate manager = null;
            try
            {
               manager = await Context.Associate.FirstOrDefaultAsync(p => p.InvestorId == InvestorId);
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
            return manager;

        }
        public async Task <AssociateAudit> GetManagerAuditByIvestorId(int InvestorId)
        {
            AssociateAudit manager = null;
            try
            {
                manager = await Context.AssociateAudit.FirstOrDefaultAsync(p => p.InvestorId == InvestorId);
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
            return manager;
        }
        public async Task<List<AssociateAuditDTO>> GetManagersFromAudit(int InvestorId){

            List<AssociateAuditDTO> active_managersList = null;
            try
            {
                active_managersList = (from c in Context.AssociateAudit
                                       join nat in Context.Nationality
                                       on c.Nationality equals nat.id
                                       where c.InvestorId == InvestorId
                                       select new AssociateAuditDTO
                                       {
                                           AssociateId = c.AssociateId,
                                           Tin = c.Tin,
                                           FullName = c.FirstName + " " + c.FatherName + " " + c.GrandName,
                                           FullNameEng = c.FirstNameEng + " " + c.FatherNameEng + " " + c.GrandNameEng,
                                           Nationality = nat.description,
                                       }).ToList();
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
            return active_managersList;
        }
        public async Task<AssociateDTO> GetAssociateByInvestorId(int InvestorId)
        {
            Associate associate = null;
            Address add = null;
            try
            {
                int id = InvestorId;
                associate = await Context.Associate
                    .FirstOrDefaultAsync(asso => asso.InvestorId == id);

                add = await Context.Address
                    .FirstOrDefaultAsync(a =>
                        a.ParentId == associate.AssociateId && a.AddressType == (int) AddressType.eManager);
            }
            catch (InvalidOperationException)
            {
                SetError("Couldn't load Associate - invalid Associate id specified.");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }

            return AssociateHelper.GetAssociateDTO(associate, add);
        }


        public async Task<AssociateDTO> SaveAssociate(AssociateDTO postedAssociate, ApplicationUser appUser)
        {
            bool isUpdate = (postedAssociate.AssociateId > 0);
            Associate ass = AssociateHelper.GetAssociate(postedAssociate);

            using (var transaction = await Context.Database.BeginTransactionAsync())
            {
                try
                {
                    Context.CurrentUserId = appUser.Id;
                    Context.CurrentUserName = appUser.FullName;
                    if (isUpdate)
                    {
                        Context.Associate.Update(ass);
                        Context.SaveChanges();
                        
                        if (postedAssociate.InvestorId>0)
                        {
                            {
                                var investoProfile = Context.Investors.First(s => s.InvestorId == postedAssociate.InvestorId);
                                investoProfile.IsActive = true;
                                Context.Entry(investoProfile).State = EntityState.Modified;
                            }  
                        }
                    }
                    else
                    {
                        Context.Associate.Add(ass);
                        Context.SaveChanges();
                        var workFlowId = postedAssociate.workFlowId;
                        if (workFlowId.HasValue)
                        {
                            var serviceWorkflow = Context.ServiceWorkflow.First(s => s.ServiceWorkflowId == workFlowId);
                            serviceWorkflow.NextStepId = 1021;
                            Context.Entry(serviceWorkflow).State = EntityState.Modified;
                        }

                        if (postedAssociate.InvestorId>0)
                        {
                            {
                                var investoProfile = Context.Investors.FirstOrDefault(s => s.InvestorId == postedAssociate.InvestorId);
                                if (investoProfile != null)
                                {
                                    investoProfile.IsActive = true;
                                    Context.Entry(investoProfile).State = EntityState.Modified;
                                }
                               
                            }  
                        }
                    }
                    //Context.SaveChanges();

                    // Add/Update Address
                    Address address = AssociateHelper.GetAddress(postedAssociate);
                    address.ParentId = ass.AssociateId;

                    if (isUpdate)
                    {
                        address.AddressId = postedAssociate.AddressId;
                        Context.Address.Update(address);
                        Context.SaveChanges();
                    }
                    else
                    {
                        address.AddressId = 0;
                        Context.Address.Add(address);
                        Context.SaveChanges();
                    }
                }
                catch (Exception ex)
                {
                    transaction.Rollback();
                    SetError(ex.Message);
                }

                transaction.Commit();
                postedAssociate.AssociateId = ass.AssociateId; //used for image filename
                return postedAssociate;
            }
        }

        public async Task<bool> DeleteAssociate(int id)
        {
            using (var transaction = await Context.Database.BeginTransactionAsync())
            {
                try
                {
                    var associate = await Context.Associate
                        .FirstOrDefaultAsync(ass => ass.AssociateId == id);
                    if (associate == null)
                    {
                        transaction.Rollback();
                        SetError("Investor does not exist");
                        return false;
                    }

                    Context.Associate.Remove(associate);
                    await SaveAsync();


                    var add = await Context.Address
                        .FirstOrDefaultAsync(a => a.ParentId == id && a.AddressType == (int) AddressType.eManager);

                    if (add != null)
                    {
                        Context.Address.Remove(add);
                        await SaveAsync();
                    }

                    transaction.Commit();
                    return true;
                }
                catch (Exception ex)
                {
                    transaction.Rollback();
                    SetError(ex.Message);
                    return false;
                }
            }
        }
    }
}