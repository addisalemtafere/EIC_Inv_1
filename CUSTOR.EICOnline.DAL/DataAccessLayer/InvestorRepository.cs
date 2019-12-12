using CUSTOR.EICOnline.DAL.DataAccessLayer.dto;
using CUSTOR.EICOnline.DAL.EntityLayer;
using CUSTOR.EICOnline.DAL.Enum;
using CUSTOR.EntityFrameworkCommon;
using CUSTOR.Security;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CUSTOR.EICOnline.DAL
{
    public class InvestorRepository : EFRepository<ApplicationDbContext, Investor>
    {
        RegistrationCatagoryRepository regCatagoryRepo;

        public InvestorRepository(ApplicationDbContext context, RegistrationCatagoryRepository RegCatagoryRepo) :
            base(context)
        {
            this.regCatagoryRepo = RegCatagoryRepo;
        }

        public async Task<InvestorDTO> GetInvestor(int InvestorId)
        {
            Investor investor = null;
            Address add = null;
            ICollection<RegistrationCatagory> catagory = null;
            //            string[] cat =;
            List<int> cat = new List<int>();
            try
            {
                int id = InvestorId;
                investor = await Context.Investors
                    .FirstOrDefaultAsync(inv => inv.InvestorId == id);
                catagory = Context.RegistrationCatagorys.Where(inv => inv.InvestorId == id).ToList();
                //int m = (int)AddressType.eInvestor;

                add = await Context.Address
                    .FirstOrDefaultAsync(a => a.ParentId == id && a.AddressType == (int) AddressType.eInvestor);

                foreach (var item in catagory)
                {
                    cat.Add(System.Convert.ToInt32(item.MajorCatagoryCode));
                }
            }
            catch (InvalidOperationException ex)
            {
                SetError("Couldn't load Investor - invalid Investor id specified.");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }

            return InvestorHelper.GetInvestorDTO(investor, add, cat.ToArray());
        }

        public async Task<InvestorAuditDTO> GetInvestorAudit(int InvestorId)
        {
            InvestorAudit investor = null;
            Address add = null;
            ICollection<RegistrationCatagory> catagory = null;
            //            string[] cat =;
            List<int> cat = new List<int>();
            try
            {
                int id = InvestorId;
                investor = await Context.InvestorAudit
                    .FirstOrDefaultAsync(inv => inv.InvestorId == id);
                catagory = Context.RegistrationCatagorys.Where(inv => inv.InvestorId == id).ToList();
                //int m = (int)AddressType.eInvestor;

                add = await Context.Address
                    .FirstOrDefaultAsync(a => a.ParentId == id && a.AddressType == (int) AddressType.eInvestor);

                foreach (var item in catagory)
                {
                    cat.Add(System.Convert.ToInt32(item.MajorCatagoryCode));
                }
            }
            catch (InvalidOperationException ex)
            {
                SetError("Couldn't load Investor - invalid Investor id specified.");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }

            return InvestorHelper.GetInvestorAuditDTO(investor, add, cat.ToArray());
        }

        public async Task<InvestorDTO> SaveInvestorAsync(InvestorDTO postedInvestor, ApplicationUser appUser)
        {
            bool isUpdate = (postedInvestor.InvestorId > 0);
            Investor inv = InvestorHelper.GetInvestor(postedInvestor);

            ServiceApplication existingServiceApplication = null;
            //ServiceApplication serviceApplication = null;
            int ServiceId = (int)ServiceEnum.ProfileRegistration;
            var service = Context.Service.FirstOrDefault(s => s.ServiceId == ServiceId);
            using (var transaction = await Context.Database.BeginTransactionAsync())
            {
                try
                {
                    if (isUpdate)
                    {
                        existingServiceApplication = Context.ServiceApplication.FirstOrDefault(s =>
                            s.ServiceApplicationId == postedInvestor.ServiceApplicationId);
                        if(existingServiceApplication == null)
                        {
                            var squence = Context.Squences.FirstOrDefault();
                            var lastSe = squence.LastSquence + 1;
                            var perminumber = lastSe.ToString();
                            var sa = new ServiceApplication
                            {
                                InvestorId = inv.InvestorId,
                                CaseNumber = perminumber,
                                ServiceId = ServiceId,
                                CurrentStatusId = 44450,
                                IsSelfService = true,
                                StartDate = DateTime.Now,
                                EventDatetime = DateTime.Now,
                                IsPaid = true,
                                CreatedUserId = 1,
                                IsActive = false,
                                //ServiceNameAmharic = service.DisplayName,
                                //ServiceNameEnglish = service.DisplayNameEnglish,
                            };
                            Context.Add(sa);
                            Context.SaveChanges();
                        }
                        else
                        {
                            existingServiceApplication.UpdatedEventDatetime = DateTime.Now;
                            Context.Update(existingServiceApplication);
                        }
                      
                        postedInvestor.ServiceApplicationId = postedInvestor.ServiceApplicationId;
                        
                        Context.Update(inv);
                    }

                    else
                    {
                        inv.UserId = appUser.Id;
                        Context.Add(inv);
                        Context.SaveChanges();
                        var squence = Context.Squences.FirstOrDefault();
                        var lastSe = squence.LastSquence + 1;
                        var perminumber = lastSe.ToString();

                        var sa = new ServiceApplication
                        {
                            InvestorId = inv.InvestorId,
                            CaseNumber = perminumber,
                            ServiceId = ServiceId,
                            CurrentStatusId = 44450,
                            IsSelfService = true,
                            StartDate = DateTime.Now,
                            EventDatetime = DateTime.Now,
                            IsPaid = true,
                            CreatedUserId = 1,
                            IsActive = false,
                            //ServiceNameAmharic = service.DisplayName,
                            //ServiceNameEnglish = service.DisplayNameEnglish,
                        };
                        Context.Add(sa);
                        Context.SaveChanges();
                        postedInvestor.ServiceApplicationId = sa.ServiceApplicationId;
                    }


                    // Add/Update Address
                    postedInvestor.InvestorId = inv.InvestorId;
                    Address address = InvestorHelper.GetAddress(postedInvestor);
                    address.ParentId = inv.InvestorId;

                    if (isUpdate)
                    {
                        address.AddressId = postedInvestor.AddressId;
                        Context.Address.Update(address);
                        Context.SaveChanges();
                    }
                    else
                    {
                        Context.Address.Add(address);
                        Context.SaveChanges();
                    }

                    //regCatagoryRepo.DeleteRegistrationCatagoryByInvestorId(inv.InvestorId);
                    //foreach (var catagory in inv.RegistrationCatagories)
                    //{
                    //    RegistrationCatagory regCatagory = new RegistrationCatagory();
                    //    regCatagory.InvestorId = inv.InvestorId;
                    //    regCatagory.MajorCatagoryCode = catagory.ToString();
                    //    Context.RegistrationCatagorys.Add(regCatagory);
                    //    Context.SaveChanges();
                    //}
                    transaction.Commit();
                }
                catch (Exception ex)
                {
                    string s = ex.Message;
                    throw new Exception(ex.InnerException.ToString());
                    transaction.Rollback();
                }
            }

            return postedInvestor;
        }

        public override async Task<Investor> GetRecord(object InvestorId)
        {
            Investor investor = null;
            try
            {
                int id = (int) InvestorId;
                investor = await Context.Investors
                    //.Include(p => p.Associate)
                    .FirstOrDefaultAsync(inv => inv.InvestorId == id);
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

            return investor;
        }

        public async Task<ServiceApplication> GetUserServiceApplication(int investorId)
        {
            try
            {
                var serviceApplication = await Context.ServiceApplication
                    .FirstOrDefaultAsync(s => s.InvestorId == investorId && s.ServiceId == (int)ServiceEnum.ProfileRegistration);

                return serviceApplication;
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
        }

        public async Task<List<Investor>> GetRecordByUserId(object UserId)
        {
            List<Investor> investor = null;
            try
            {
                string id = (string) UserId;
                investor = await Context.Investors
                    .Where(inv => inv.UserId == id)
                    .ToListAsync();
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

            return investor;
        }

        public async Task<List<Investor>> GetRecordByTIN(object Tin)
        {
            List<Investor> investor = null;
            try
            {
                string id = (string) Tin;
                investor = await Context.Investors
                    .Where(inv => inv.Tin == id)
                    .ToListAsync();
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

            return investor;
        }


        public async Task<List<Investor>> FindInvestor(SearchInvestorDto searchInvestorDto)
        {
            List<Investor> investor = null;
            try
            {
                if (searchInvestorDto.Tin != null && searchInvestorDto.FirstNameEng != null &&
                    searchInvestorDto.FatherNameEng != null && searchInvestorDto.GrandNameEng != null)
                {
                    investor = await Context.Investors.Where(m =>
                            EF.Functions.Like(m.Tin, searchInvestorDto.Tin + "%") &&
                            EF.Functions.Like(m.FirstNameEng, searchInvestorDto.FirstNameEng + "%") &&
                            EF.Functions.Like(m.FatherNameEng, searchInvestorDto.FatherNameEng + "%") &&
                            EF.Functions.Like(m.GrandNameEng, searchInvestorDto.GrandNameEng + "%"))
                        .ToListAsync();
                }
                else if (searchInvestorDto.FirstNameEng != null && searchInvestorDto.FatherNameEng != null &&
                         searchInvestorDto.GrandNameEng != null)
                {
                    investor = await Context.Investors.Where(m =>
                            EF.Functions.Like(m.FirstNameEng, searchInvestorDto.FirstNameEng + "%") &&
                            EF.Functions.Like(m.FatherNameEng, searchInvestorDto.FatherNameEng + "%") &&
                            EF.Functions.Like(m.GrandNameEng, searchInvestorDto.GrandNameEng + "%"))
                        .ToListAsync();
                }
                else if (searchInvestorDto.FirstNameEng != null && searchInvestorDto.FatherNameEng != null)
                {
                    investor = await Context.Investors.Where(m =>
                            EF.Functions.Like(m.FirstNameEng, searchInvestorDto.FirstNameEng + "%") &&
                            EF.Functions.Like(m.FatherNameEng, searchInvestorDto.FatherNameEng + "%"))
                        .ToListAsync();
                }
                else if (searchInvestorDto.FirstNameEng != null)
                {
                    investor = await Context.Investors.Where(m =>
                            EF.Functions.Like(m.FirstNameEng, searchInvestorDto.FirstNameEng + "%"))
                        .ToListAsync();
                }
                else if (searchInvestorDto.Tin != null)
                {
                    investor = await Context.Investors.Where(m => EF.Functions.Like(m.Tin, searchInvestorDto.Tin + "%"))
                        .ToListAsync();
                }
                else
                {
                    investor = await Context.Investors
                        .ToListAsync();
                }

                //context.Customers.Where(c => EF.Functions.Like(c.Name, "a%"));
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

            return investor;
        }

        public async Task<List<Investor>> GetAllInvestors(int page = 0, int pageSize = 15)
        {
            IQueryable<Investor> investors = null;
            try
            {
                investors = Context.Investors;
                if (page > 0)
                {
                    investors = investors
                        .Skip((page - 1) * pageSize)
                        .Take(pageSize);
                }
                //foreach (Investor inv in Investors)
                //{
                //    string nm = inv.FirstName;
                //}

                int i = investors.ToList().Count;
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                SetError(ex);
            }

            return await investors.ToListAsync();
        }

        public async Task<ServiceApplication> CheckUserServiceApplicationStatus(int serviceApplicationId)
        {
            try
            {
                var serviceApplication =
                    await Context.ServiceApplication.FirstOrDefaultAsync(s =>
                        s.ServiceApplicationId == serviceApplicationId);
                return serviceApplication;
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
        }

        public async Task<ServiceApplication> finishProjectServiceApplication(int serviceApplicationId)
        {
            ServiceApplication existingServiceApplication = null;
            try
            {
                existingServiceApplication =
                    await Context.ServiceApplication.FirstOrDefaultAsync(s =>
                        s.ServiceApplicationId == serviceApplicationId);
                existingServiceApplication.UpdatedEventDatetime = DateTime.Now;
                existingServiceApplication.CurrentStep = 3;
                existingServiceApplication.IsActive = true;
                existingServiceApplication.CurrentStatusId = 44446;
                Context.Update(existingServiceApplication);
                Context.SaveChanges();
                return existingServiceApplication;
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
        }

        public async Task<bool> DeleteInvestor(int id)
        {
            using (var transaction = await Context.Database.BeginTransactionAsync())
            {
                try
                {
                    var investor = await Context.Investors
                        .FirstOrDefaultAsync(inv => inv.InvestorId == id);
                    if (investor == null)
                    {
                        transaction.Rollback();
                        SetError("Investor does not exist");
                        return false;
                    }

                    Context.Investors.Remove(investor);
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

        protected override bool OnValidate(Investor entity)
        {
            if (entity == null)
            {
                ValidationErrors.Add("No record was provided");
                return false;
            }

            if (string.IsNullOrEmpty(entity.FirstName))
                ValidationErrors.Add("Please enter first name of the Investor", "FirstName");
            else if (string.IsNullOrEmpty(entity.FirstName) || entity.FirstName.Length < 2)
                ValidationErrors.Add("First Name must be at least 2 charcters long");
            return ValidationErrors.Count < 1;
        }
    }
}