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
using AutoMapper;
namespace CUSTOR.EICOnline.DAL
{
    public class FAssociateRepository : EFRepository<ApplicationDbContext, Associate>
    {
        public FAssociateRepository(ApplicationDbContext context) : base(context)
        {
        }

   
        public async Task<List<AssociateListDTO>> GetManagers(int InvestorId){

            List<AssociateListDTO> active_managersList = null;
            try
            {
                active_managersList = (from c in Context.Associate
                                       join nat in Context.Nationality
                                       on c.Nationality equals nat.id
                                       where c.InvestorId == InvestorId
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

        public async Task<AssociateAddressDTO> GetAssociate(int AssociateId)
        {
            AssociateAddressDTO manager = null;
            try
            {
                //  manager = await Context.Associate.FirstOrDefaultAsync(p => p.AssociateId == AssociateId);
                manager = await (from m in Context.Associate
                                 join c in Context.Address
                                 on m.AssociateId equals c.ParentId
                                 where c.AddressType == (int)AddressType.eManager && m.AssociateId == AssociateId
                                 select new AssociateAddressDTO
                                 {
                                     FirstName = m.FirstName,
                                     FatherName = m.FatherName,
                                     GrandName = m.GrandName,
                                     FirstNameEng = m.FirstNameEng,
                                     FatherNameEng = m.FirstNameEng,
                                     GrandNameEng = m.GrandNameEng,
                                     DateOfBirth = m.DateOfBirth,
                                     Gender = m.Gender,
                                     Nationality = m.Nationality,
                                     Tin = m.Tin,
                                     Title = m.Title,
                                     AssociateId = m.AssociateId,
                                     Remark = m.Remark,
                                     IsActive = m.IsActive,
                                     IsDeleted = m.IsDeleted,
                                     CreatedUserId = m.CreatedUserId,
                                     UpdatedDate = m.UpdatedDate,
                                     MobilePhone = c.CellPhoneNo,
                                     RegionId = c.RegionId,
                                     ZoneId = c.ZoneId,
                                     Tele = c.TeleNo,
                                     WoredaId = c.WoredaId,
                                     KebeleId = c.KebeleId,
                                     HouseNo = c.HouseNo,
                                     Pobox = c.Pobox,
                                     FaxNo = c.Fax,
                                     Email = c.Email,
                                     OtherAddress = c.OtherAddress,

                                 }
                              ).FirstOrDefaultAsync();
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

        public async Task<AssociateAuditAddressDTO> GetAssociateAudit(int AssociateId)
        {
            AssociateAuditAddressDTO manager = null;
            try
            {
                manager = await (from m in Context.Associate
                                 join c in Context.Address
                                 on m.AssociateId equals c.ParentId
                                 where c.AddressType == (int)AddressType.eManager && m.AssociateId == AssociateId
                                 select new AssociateAuditAddressDTO
                                 {
                                     FirstName = m.FirstName,
                                     FatherName = m.FatherName,
                                     GrandName = m.GrandName,
                                     FirstNameEng = m.FirstNameEng,
                                     FatherNameEng = m.FirstNameEng,
                                     GrandNameEng = m.GrandNameEng,
                                     DateOfBirth = m.DateOfBirth,
                                     Gender = m.Gender,
                                     Nationality = m.Nationality,
                                     Tin = m.Tin,
                                     Title = m.Title,
                                     AssociateId = m.AssociateId,
                                     Remark = m.Remark,
                                     IsActive = m.IsActive,
                                     IsDeleted = m.IsDeleted,
                                     CreatedUserId = m.CreatedUserId,
                                     UpdatedDate = m.UpdatedDate,
                                     MobilePhone = c.CellPhoneNo,
                                     RegionId = c.RegionId,
                                     ZoneId = c.ZoneId,
                                     Tele = c.TeleNo,
                                     WoredaId = c.WoredaId,
                                     KebeleId = c.KebeleId,
                                     HouseNo = c.HouseNo,
                                     Pobox = c.Pobox,
                                     FaxNo = c.Fax,
                                     Email = c.Email,
                                     OtherAddress = c.OtherAddress,

                                 }
                                ).FirstOrDefaultAsync();
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
                                var investoProfile = Context.Investors.First(s => s.InvestorId == postedAssociate.InvestorId);
                                investoProfile.IsActive = true;
                                Context.Entry(investoProfile).State = EntityState.Modified;
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