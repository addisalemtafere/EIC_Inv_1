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

        public async Task<List<AssociateAuditListDTO>> GetNewManagersList(int InvestorId , int serviceApplicationId)
        {
            List<AssociateAuditListDTO> active_managersList = null;
            try
            {
                active_managersList = (from c in Context.AssociateAudit
                                       join s in Context.ServiceApplication
                                       on c.ServiceApplicationId equals s.ServiceApplicationId
                                       where c.InvestorId == InvestorId && c.IsNew == true && s.ServiceApplicationId == serviceApplicationId
                                       select new AssociateAuditListDTO
                                       {
                                           id = c.id,
                                           AssociateId = c.AssociateId,
                                           Tin = c.Tin,
                                           FullName = c.FirstName + " " + c.FatherName + " " + c.GrandName,
                                           FullNameEng = c.FirstNameEng + " " + c.FatherNameEng + " " + c.GrandNameEng,
                                       }).ToList();
            }
            catch(Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }

            return active_managersList;
        }
        public async Task<List<AssociateListDTO>> GetManagers(int InvestorId){

            List<AssociateListDTO> active_managersList = null;
            try
            {
                active_managersList = (from c in Context.Associate
                                      // join nat in Context.Nationality
                                      // on c.Nationality equals nat.id
                                       where c.InvestorId == InvestorId
                                       select new AssociateListDTO
                                       {
                                           AssociateId = c.AssociateId,
                                           Tin = c.Tin,
                                           FullName = c.FirstName + " " + c.FatherName + " " + c.GrandName,
                                           FullNameEng = c.FirstNameEng + " " + c.FatherNameEng + " " + c.GrandNameEng,
                                         //  Nationality = nat.description,
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
                                     IsMainOffice = c.IsMainOffice

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
        public async Task<AssociateAuditAddressDTO> GetNewManagerById (int id)
        {
            AssociateAuditAddressDTO manager = null;
            try
            {
                manager = (from m in Context.AssociateAudit
                           join c in Context.AddressAudit
                           on m.AssociateId equals c.ParentId
                           where c.AddressType == (int)AddressType.eManager && m.id == id
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
                               AddressId = c.AddressId,
                               IsActive = m.IsActive,
                               IsDeleted = m.IsDeleted,
                               CreatedUserId = m.CreatedUserId,
                               UpdatedDate = m.UpdatedDate,
                               CellPhoneNo = c.CellPhoneNo,
                               RegionId = c.RegionId,
                               ZoneId = c.ZoneId,
                               TeleNo = c.TeleNo,
                               WoredaId = c.WoredaId,
                               KebeleId = c.KebeleId,
                               HouseNo = c.HouseNo,
                               Pobox = c.Pobox,
                               Fax = c.Fax,
                               Email = c.Email,
                               OtherAddress = c.OtherAddress,
                           }).FirstOrDefault();
              return manager;
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
        }
        public async Task<AssociateAuditAddressDTO> GetAssociateAudit(int AssociateId)
        {
            AssociateAuditAddressDTO manager = null;
            try
            {
                manager = await (from m in Context.AssociateAudit
                                 join c in Context.AddressAudit
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
                                     CellPhoneNo = c.CellPhoneNo,
                                     RegionId = c.RegionId,
                                     ZoneId = c.ZoneId,
                                     TeleNo = c.TeleNo,
                                     WoredaId = c.WoredaId,
                                     KebeleId = c.KebeleId,
                                     HouseNo = c.HouseNo,
                                     Pobox = c.Pobox,
                                     Fax = c.Fax,
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

        public async Task<AssociateAuditAddressDTO> SaveManagerWithServiceApplication(AssociateAuditAddressDTO postedManager)
        {
            AssociateAuditAddressDTO test = null;

            ServiceApplication serviceApplication = null;

            ServiceApplication existingServiceApplication = null;

            AssociateAudit manager = Mapper.Map<AssociateAudit>(postedManager);

            try
            {
                if (postedManager.ServiceApplicationId != null)
                {
                    existingServiceApplication = await Context.ServiceApplication.FirstOrDefaultAsync(s => s.ServiceApplicationId == postedManager.ServiceApplicationId);
                    existingServiceApplication.UpdatedEventDatetime = DateTime.Now;
                }
                else
                {
                    serviceApplication = new ServiceApplication
                    {
                        InvestorId = postedManager.InvestorId,
                        CaseNumber = "0009990",
                        ServiceId = 1028,
                        StartDate = DateTime.Now,
                        EventDatetime = DateTime.Now,
                        ServiceNameAmharic = "",
                        ServiceNameEnglish = "",
                        InvestorNameEnglish = postedManager.FirstNameEng,
                        InvestorNameAmharic = postedManager.FirstName,
                    };
                }
                
               
                using (var transaction = await Context.Database.BeginTransactionAsync())
                {
                    try
                    {
                        if (postedManager.ServiceApplicationId != null)
                        {
                            Context.Update(existingServiceApplication);
                            Context.SaveChanges();
                        }
                        else
                        {
                            Context.Add(serviceApplication);
                            Context.SaveChanges();

                        }
                        if (postedManager.ServiceApplicationId != null)
                        {
                            manager.ServiceApplicationId = postedManager.ServiceApplicationId;
                        }
                        else
                        {
                            manager.ServiceApplicationId = serviceApplication.ServiceApplicationId;
                        }
                        manager.InvestorId = postedManager.InvestorId;
                        manager.AssociateId = postedManager.AssociateId;
                        Context.AssociateAudit.Add(manager);
                        var  address = new AddressAudit
                        {
                            AddressId = postedManager.AddressId,
                            ParentId = postedManager.AssociateId,
                            IsMainOffice = postedManager.IsMainOffice,
                            RegionId = postedManager.RegionId,
                            ZoneId = postedManager.ZoneId,
                            KebeleId = postedManager.KebeleId,
                            WoredaId = postedManager.WoredaId,
                            HouseNo = postedManager.HouseNo,
                            TeleNo = postedManager.TeleNo,
                            Pobox = postedManager.Pobox,
                            Fax = postedManager.Fax,
                            CellPhoneNo = postedManager.CellPhoneNo,
                            Email = postedManager.Email,
                            OtherAddress = postedManager.OtherAddress,
                            IsActive = postedManager.IsActive,
                            IsDeleted = postedManager.IsDeleted,
                            CreatedUserId = postedManager.CreatedUserId,
                            ServiceApplicationId = serviceApplication.ServiceApplicationId,
                            IsNew = postedManager.IsNew,
                            AddressType =3,
                        };
                        Context.AddressAudit.Add(address);
                        Context.SaveChanges();
                        transaction.Commit();
                    }
                    catch (Exception ex)
                    {
                        transaction.Rollback();
                        string s = ex.Message;
                        throw new Exception(ex.Message);
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return test;
        }
        public async Task <AssociateAuditAddressDTO> UpdateManagerWithServiceApplication(AssociateAuditAddressDTO postedManager)
        {
            using (var transaction = await Context.Database.BeginTransactionAsync())
            {
                try
                {
                    var sa = await Context.ServiceApplication.FirstOrDefaultAsync(s => s.ServiceApplicationId == postedManager.ServiceApplicationId);
                    var associate_update = await Context.AssociateAudit.FirstOrDefaultAsync(t => t.AssociateId == postedManager.AssociateId);
                    var address_update = await Context.AddressAudit.FirstOrDefaultAsync(a => a.AddressId == postedManager.AddressId);
                    if (postedManager == null)
                    {
                        throw new Exception("Registration couldnot be found");
                    }

                    associate_update = Mapper.Map(postedManager, associate_update);
                    var address = new AddressAudit
                    {
                        AddressId = postedManager.AddressId,
                        ParentId = postedManager.AssociateId,
                        IsMainOffice = postedManager.IsMainOffice,
                        RegionId = postedManager.RegionId,
                        ZoneId = postedManager.ZoneId,
                        KebeleId = postedManager.KebeleId,
                        WoredaId = postedManager.WoredaId,
                        HouseNo = postedManager.HouseNo,
                        TeleNo = postedManager.TeleNo,
                        Pobox = postedManager.Pobox,
                        Fax = postedManager.Fax,
                        CellPhoneNo = postedManager.CellPhoneNo,
                        Email = postedManager.Email,
                        OtherAddress = postedManager.OtherAddress,
                        IsActive = postedManager.IsActive,
                        IsDeleted = postedManager.IsDeleted,
                        CreatedUserId = postedManager.CreatedUserId,
                        IsNew = postedManager.IsNew,
                    };
                    address_update = Mapper.Map(address, address_update);
                    await Context.SaveChangesAsync();
                    transaction.Commit();
                    return Mapper.Map<AssociateAuditAddressDTO>(associate_update);
                }
                catch (Exception ex)
                {
                    transaction.Rollback();
                    string s = ex.Message;
                    throw new Exception(ex.Message);
                }
            }
        }
        //public async Task<AssociateDTO> GetAssociateByInvestorId(int InvestorId)
        //{
        //    Associate associate = null;
        //    Address add = null;
        //    try
        //    {
        //        int id = InvestorId;
        //        associate = await Context.Associate
        //            .FirstOrDefaultAsync(asso => asso.InvestorId == id);

        //        add = await Context.Address
        //            .FirstOrDefaultAsync(a =>
        //                a.ParentId == associate.AssociateId && a.AddressType == (int) AddressType.eManager);
        //    }
        //    catch (InvalidOperationException)
        //    {
        //        SetError("Couldn't load Associate - invalid Associate id specified.");
        //        return null;
        //    }
        //    catch (Exception ex)
        //    {
        //        SetError(ex);
        //    }

        //    return AssociateHelper.GetAssociateDTO(associate, add);
        //}


        //public async Task<AssociateDTO> SaveAssociate(AssociateDTO postedAssociate, ApplicationUser appUser)
        //{
        //    bool isUpdate = (postedAssociate.AssociateId > 0);
        //    Associate ass = AssociateHelper.GetAssociate(postedAssociate);

        //    using (var transaction = await Context.Database.BeginTransactionAsync())
        //    {
        //        try
        //        {
        //            Context.CurrentUserId = appUser.Id;
        //            Context.CurrentUserName = appUser.FullName;
        //            if (isUpdate)
        //            {
        //                Context.Associate.Update(ass);
        //                Context.SaveChanges();

        //                if (postedAssociate.InvestorId>0)
        //                {
        //                    {
        //                        var investoProfile = Context.Investors.First(s => s.InvestorId == postedAssociate.InvestorId);
        //                        investoProfile.IsActive = true;
        //                        Context.Entry(investoProfile).State = EntityState.Modified;
        //                    }  
        //                }
        //            }
        //            else
        //            {
        //                Context.Associate.Add(ass);
        //                Context.SaveChanges();
        //                var workFlowId = postedAssociate.workFlowId;
        //                if (workFlowId.HasValue)
        //                {
        //                    var serviceWorkflow = Context.ServiceWorkflow.First(s => s.ServiceWorkflowId == workFlowId);
        //                    serviceWorkflow.NextStepId = 1021;
        //                    Context.Entry(serviceWorkflow).State = EntityState.Modified;
        //                }

        //                if (postedAssociate.InvestorId>0)
        //                {
        //                    {
        //                        var investoProfile = Context.Investors.First(s => s.InvestorId == postedAssociate.InvestorId);
        //                        investoProfile.IsActive = true;
        //                        Context.Entry(investoProfile).State = EntityState.Modified;
        //                    }  
        //                }
        //            }
        //            //Context.SaveChanges();

        //            // Add/Update Address
        //            Address address = AssociateHelper.GetAddress(postedAssociate);
        //            address.ParentId = ass.AssociateId;

        //            if (isUpdate)
        //            {
        //                address.AddressId = postedAssociate.AddressId;
        //                Context.Address.Update(address);
        //                Context.SaveChanges();
        //            }
        //            else
        //            {
        //                address.AddressId = 0;
        //                Context.Address.Add(address);
        //                Context.SaveChanges();
        //            }
        //        }
        //        catch (Exception ex)
        //        {
        //            transaction.Rollback();
        //            SetError(ex.Message);
        //        }

        //        transaction.Commit();
        //        postedAssociate.AssociateId = ass.AssociateId; //used for image filename
        //        return postedAssociate;
        //    }
        //}

        //public async Task<bool> DeleteAssociate(int id)
        //{
        //    using (var transaction = await Context.Database.BeginTransactionAsync())
        //    {
        //        try
        //        {
        //            var associate = await Context.Associate
        //                .FirstOrDefaultAsync(ass => ass.AssociateId == id);
        //            if (associate == null)
        //            {
        //                transaction.Rollback();
        //                SetError("Investor does not exist");
        //                return false;
        //            }

        //            Context.Associate.Remove(associate);
        //            await SaveAsync();


        //            var add = await Context.Address
        //                .FirstOrDefaultAsync(a => a.ParentId == id && a.AddressType == (int) AddressType.eManager);

        //            if (add != null)
        //            {
        //                Context.Address.Remove(add);
        //                await SaveAsync();
        //            }

        //            transaction.Commit();
        //            return true;
        //        }
        //        catch (Exception ex)
        //        {
        //            transaction.Rollback();
        //            SetError(ex.Message);
        //            return false;
        //        }
        //    }
        //}
    }
}