
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
    public class FInvestorRepository : EFRepository<ApplicationDbContext, Associate>
    {

        //protected readonly IMapper _mapper;
        public FInvestorRepository(ApplicationDbContext context) : base(context)
        {
        }
        public async Task<FInvestorAudit> GetProfileAuditByInvestorId (int InvestorId)
        {
            FInvestorAudit profileAudit = null;
            try
            {
                List<int> cat = new List<int>();
                var catagory = Context.RegistrationCatagoryAudit.Where(inv => inv.InvestorId == InvestorId).ToList();
                foreach (var item in catagory)
                {
                    cat.Add(System.Convert.ToInt32(item.MajorCatagoryCode));
                }
                if (cat.ToArray() != null)
                {
                    profileAudit = await (from m in Context.InvestorAudit
                                          join c in Context.AddressAudit
                                        on m.InvestorId equals c.ParentId
                                     where m.InvestorId == InvestorId
                                     select new FInvestorAudit
                                     {
                                         InvestorId = m.InvestorId,
                                         LegalStatus = m.LegalStatus,
                                         FirstName = m.FirstName,
                                         FatherName = m.FatherName,
                                         GrandName = m.GrandName,
                                         FirstNameEng = m.FirstNameEng,
                                         FatherNameEng = m.FirstNameEng,
                                         GrandNameEng = m.GrandNameEng,
                                         FormOfOwnership = m.FormOfOwnership,
                                         Gender = m.Gender,
                                         Nationality = m.Nationality,
                                         BranchCountry = m.BranchCountry,
                                         IsDiaspora = m.IsDiaspora,
                                         IsEthiopianOrigin = m.IsEthiopianOrigin,
                                         Tin = m.Tin,
                                         Title = m.Title,
                                         RegistrationNumber = m.RegistrationNumber,
                                         RegistrationDate = m.RegistrationDate,
                                         PaidCapital = m.PaidCapital,
                                         SighnedCapital = m.SighnedCapital,
                                         IsActive = m.IsActive,
                                         UserId = m.UserId,
                                         IsExistingCustomer = m.IsExistingCustomer,
                                         IsDeleted = m.IsDeleted,
                                         ObjectId = m.ObjectId,
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
                                         RegistrationCatagories = cat.ToArray(),
                                     }
                             ).FirstOrDefaultAsync();

                }
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
            return profileAudit;
        }
        public async Task<FInvestor> GetProfileByInvestorId(int InvestorId)
        {
            FInvestor profile = null;
            try
            {
                List<int> cat = new List<int>();
                var catagory = Context.RegistrationCatagorys.Where(inv => inv.InvestorId == InvestorId).ToList();
                foreach (var item in catagory)
                {
                    cat.Add(System.Convert.ToInt32(item.MajorCatagoryCode));
                }
                if(cat.ToArray() != null)
                {
                    profile = await (from m in Context.Investors
                                     join c in Context.Address
                                     on m.InvestorId equals c.ParentId
                                     where m.InvestorId == InvestorId
                                     select new FInvestor
                                     {
                                         InvestorId = m.InvestorId,
                                         LegalStatus = m.LegalStatus,
                                         FirstName = m.FirstName,
                                         FatherName = m.FatherName,
                                         GrandName = m.GrandName,
                                         FirstNameEng = m.FirstNameEng,
                                         FatherNameEng = m.FirstNameEng,
                                         GrandNameEng = m.GrandNameEng,
                                         FormOfOwnership = m.FormOfOwnership,
                                         Gender = m.Gender,
                                         Nationality = m.Nationality,
                                         BranchCountry = m.BranchCountry,
                                         IsDiaspora = m.IsDiaspora,
                                         IsEthiopianOrigin = m.IsEthiopianOrigin,
                                         Tin = m.Tin,
                                         Title = m.Title,
                                         RegistrationNumber = m.RegistrationNumber,
                                         RegistrationDate = m.RegistrationDate,
                                         PaidCapital = m.PaidCapital,
                                         SighnedCapital = m.SighnedCapital,
                                         IsActive = m.IsActive,
                                         UserId = m.UserId,
                                         IsExistingCustomer = m.IsExistingCustomer,
                                         IsDeleted = m.IsDeleted,
                                         ObjectId = m.ObjectId,
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
                                         RegistrationCatagories = cat.ToArray(),
                                     }
                             ).FirstOrDefaultAsync();

                }

            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
            return profile;

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

        public async Task<FInvestorAudit> SaveProfileWithServiceApplication(FInvestorAudit postedProfile)
        {
            FInvestorAudit test = null;
           
                ServiceApplication serviceApplication = null;

                ServiceApplication existingServiceApplication = null;

                InvestorAudit existingInvestor = await Context.InvestorAudit.FirstOrDefaultAsync(t=>t.ServiceApplicationId == postedProfile.ServiceApplicationId);

                InvestorAudit investor  = Mapper.Map<InvestorAudit>(postedProfile);

                if (postedProfile.ServiceApplicationId != null)
                {
                    existingServiceApplication = await Context.ServiceApplication.FirstOrDefaultAsync(s => s.ServiceApplicationId == postedProfile.ServiceApplicationId);
                    existingServiceApplication.UpdatedEventDatetime = DateTime.Now;
                }
                else
                {
                    serviceApplication = new ServiceApplication
                    {
                        InvestorId = postedProfile.InvestorId,
                        ProjectId = postedProfile.ProjectId,
                        CaseNumber = "0009990",
                        ServiceId= 1028,
                        StartDate = DateTime.Now,
                        EventDatetime = DateTime.Now,
                        ServiceNameAmharic = "",
                        ServiceNameEnglish="",
                        InvestorNameEnglish = postedProfile.FirstNameEng,
                        InvestorNameAmharic = postedProfile.FirstName,
                    };
                }
            if (postedProfile.ServiceApplicationId != null)
            {
                investor.ServiceApplicationId = postedProfile.ServiceApplicationId;
            }

            else
            {
                investor.ServiceApplicationId = serviceApplication.ServiceApplicationId;
            }
            using (var transaction = await Context.Database.BeginTransactionAsync())
                {
                    try
                    {
                        if (postedProfile.ServiceApplicationId != null)
                        {
                            Context.Update(existingServiceApplication);
                            Context.SaveChanges();
                        }
                        else
                        {
                            Context.Add(serviceApplication);
                            Context.SaveChanges();

                        }
                        if (existingInvestor == null)
                        {
                           
                           Context.InvestorAudit.Add(investor);
                           Context.SaveChanges();
                    }
                        else
                        {
                            existingInvestor = Mapper.Map(postedProfile, existingInvestor);
                            existingInvestor.CreatedDate = DateTime.Now;
                            existingInvestor.UpdatedDate = DateTime.Now;
                            existingInvestor.RegistrationDate = DateTime.Now;
                            Context.InvestorAudit.Update(existingInvestor);
                        }
                    }
                    catch (Exception ex)
                    {
                        transaction.Rollback();
                        string s = ex.Message;
                        throw new Exception(ex.Message);
                    }
                }

                    
            
            return test;
        }

    }
}