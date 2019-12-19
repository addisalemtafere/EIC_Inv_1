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
using CUSTOR.EICOnline.DAL.EntityLayer.Fetiha;

namespace CUSTOR.EICOnline.DAL.DataAccessLayer.Fetiha
{
    public class FAfterCareRepository
    {
        private readonly ApplicationDbContext Context;
        private readonly ServiceApplicationRepository serviceAppRepo;
        public FAfterCareRepository(ApplicationDbContext _context, ServiceApplicationRepository _serviceAppRepo) 
        {
            Context = _context;
            serviceAppRepo = _serviceAppRepo;
        }
        public async Task <ProjectEmployment> GetEmploymentByProjectId (int ProjectId)
        {
            try
            {
                var employment = await Context.ProjectEmployment
                    .Where(e => e.ProjectId == ProjectId).FirstOrDefaultAsync();
                return employment;

            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
        }
        public async Task <ProjectRequirement> GetRequirementByProjectId(int ProjectId)
        {
            try
            {
                var requirement = await Context.ProjectRequirement
                    .Where(e => e.ProjectId == ProjectId).FirstOrDefaultAsync();
                return requirement;

            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
        }
        public async Task<List<ProjectEmploymentAudit>> GetEmploymentListByProjectId (int ProjectId)
        {

            try
            {
                var employment = await Context.ProjectEmploymentAudit
                    .Where(e => e.ProjectId == ProjectId && e.ServiceType == (int)ServiceEnum.AfterCare).ToListAsync();
                return employment;
                                     
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
        }
        public async Task<List<ProjectOutputAudit>> GetProductListByProjectId (int ProjectId)
        {
            try
            {
                var products = await Context.ProjectOutputAudit.Where(e => e.ProjectId == ProjectId && e.ServiceType == (int)ServiceEnum.AfterCare).ToListAsync();
                return products;

            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
        }
        public async Task <List<ProjectRequirementAudit>> GetRequirmentListByProjectId (int ProjectId)
        {
            try
            {
                var requirment = await Context.ProjectRequirementAudit
                    .Where(e => e.ProjectId == ProjectId && e.ServiceType == (int)ServiceEnum.AfterCare).ToListAsync();
                return requirment;

            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
        }
        public async Task <List<ProjectCostAudit>> GetCostListByProjectId(int ProjectId)
        {
            try
            {
                var cost = await Context.ProjectCostAudit
                    .Where(e => e.ProjectId == ProjectId && e.ServiceType == (int)ServiceEnum.AfterCare).ToListAsync();
                return cost;

            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
        }
        public async Task <List<ProjectOutput>> GetInputOutPutById (int ProjectId)
        {
            try
            {
                var output = await Context.ProjectOutput
                    .Where(e => e.ProjectId == ProjectId).ToListAsync();
                return output;

            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
        }
        public async Task <List<ProjectCost>> GetCostById(int ProjectId)
        {
            try
            {
                var cost = await Context.ProjectCost
                    .Where(e => e.ProjectId == ProjectId).ToListAsync();
                return cost;

            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
        }
        public async Task <ProjectOutputAudit> GetInputOutPutAuditById(int OutPutId)
        {
            try
            {
                var output = await Context.ProjectOutputAudit
                    .Where(e => e.ProjectOutputId == OutPutId).FirstOrDefaultAsync();
                return output;

            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
        }
        public async Task <ProjectRequirementAudit> GetRequirementDataAuditById(int ProjectRequirementId)
        {
            try
            {
                var requirement = await Context.ProjectRequirementAudit
                    .Where(e => e.ProjectRequirementId == ProjectRequirementId).FirstOrDefaultAsync();
                return requirement;

            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
        }
        public async Task<ProjectEmploymentAudit> GetEmploymentDataById(int EmploymentId)
        {

            try
            {
                var employment = await Context.ProjectEmploymentAudit
                    .Where(e => e.ProjectEmploymentId == EmploymentId).FirstOrDefaultAsync();
                return employment;
                                     
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
        }
        public async Task<ProjectCostAudit> GetCostDataById(int CostId)
        {

            try
            {
                var cost = await Context.ProjectCostAudit
                    .Where(e => e.ProjectCostId == CostId).FirstOrDefaultAsync();
                return cost;
                                     
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
        }
        public async Task <ProjectEmploymentAudit> updateEmploymentData (ProjectEmploymentAudit postedData)
        {
            using (var transaction = await Context.Database.BeginTransactionAsync())
            {
                try
                {
                    var employment_to_update = await Context.ProjectEmploymentAudit.Where(p => p.ProjectEmploymentId == postedData.ProjectEmploymentId).FirstOrDefaultAsync();
                    employment_to_update.PermanentFemale = postedData.PermanentFemale;
                    employment_to_update.PermanentMale = postedData.PermanentMale;
                    employment_to_update.TemporaryFemale = postedData.TemporaryFemale;
                    employment_to_update.TemporaryMale = postedData.TemporaryMale;
                    employment_to_update.PermanentForeignFemale = postedData.PermanentForeignFemale;
                    employment_to_update.PermanentForeignMale = postedData.PermanentForeignMale;
                    employment_to_update.TemporaryForeignFemale = postedData.TemporaryForeignFemale;
                    employment_to_update.TemporaryForeignMale = postedData.TemporaryForeignMale;
                    employment_to_update.Remark = postedData.Remark;
                    employment_to_update.Decision = postedData.Decision;
                    employment_to_update.Quarter = postedData.Quarter;
                    employment_to_update.RegistrationYear = postedData.RegistrationYear;
                    employment_to_update.ProjectStatus = postedData.ProjectStatus;
                    employment_to_update.UpdatedEventDatetime = DateTime.Now;
                    Context.Update(employment_to_update);
                    Context.SaveChanges();
                    transaction.Commit();
                    return postedData;
                }
                catch (Exception ex)
                {
                    string s = ex.Message;
                    throw new Exception(ex.InnerException.ToString());
                }
            }
        }
        public async Task <ProjectOutputAudit> updateProductData(ProjectOutputAudit postedData)
        {
            using (var transaction = await Context.Database.BeginTransactionAsync())
            {
                try
                {
                    var output_filtered = Context.ProjectOutputAudit.Where(p => p.ProjectOutputId == postedData.ProjectOutputId).FirstOrDefault();
                    output_filtered.ProductName = postedData.ProductName;
                    output_filtered.ProductQty = postedData.ProductQty;
                    output_filtered.ProductUnit = postedData.ProductUnit;
                    output_filtered.DomesticMarketShare = postedData.DomesticMarketShare;
                    output_filtered.ExportMarketShare = postedData.ExportMarketShare;
                    Context.Update(output_filtered);
                    Context.SaveChanges();
                    transaction.Commit();
                    return output_filtered;
                }
                catch (Exception ex)
                {
                    string s = ex.Message;
                    throw new Exception(ex.InnerException.ToString());
                }
            }
        }
        public async Task<ProjectCostAudit> updateCostData(ProjectCostAudit postedData)
        {
            using (var transaction = await Context.Database.BeginTransactionAsync())
            {
                try
                {
                    var cost_to_update = await Context.ProjectCostAudit.FirstOrDefaultAsync(s => s.ProjectCostId == postedData.ProjectCostId);
                    cost_to_update.LandCost = postedData.LandCost;
                    cost_to_update.LandCostInBirr = postedData.LandCostInBirr;
                    cost_to_update.MachineryCost = postedData.MachineryCost;
                    cost_to_update.MachineryCostInBirr = postedData.MachineryCostInBirr;
                    cost_to_update.BuildingCost = postedData.BuildingCost;
                    cost_to_update.BuildingCostInBirr = postedData.BuildingCostInBirr;
                    cost_to_update.OfficeEquipmentCost = postedData.OfficeEquipmentCost;
                    cost_to_update.OfficeEquipmentCostInBirr = postedData.OfficeEquipmentCostInBirr;
                    cost_to_update.OtherCapitalCost = postedData.OtherCapitalCost;
                    cost_to_update.OtherCapitalCostInBirr = postedData.OtherCapitalCostInBirr;
                    cost_to_update.EquityFinance = postedData.EquityFinance;
                    cost_to_update.LoanFinance = postedData.LoanFinance;
                    cost_to_update.OtherSourceFinance = postedData.OtherSourceFinance;
                    cost_to_update.OtherSourceDescription = postedData.OtherSourceDescription;
                    cost_to_update.Remark = postedData.Remark;
                    cost_to_update.Dicision = postedData.Dicision;
                    cost_to_update.Quarter = postedData.Quarter;
                    cost_to_update.ReagistrationYear = postedData.ReagistrationYear;
                    cost_to_update.ProjectStatus = postedData.ProjectStatus;
                    cost_to_update.UpdatedEventDatetime = DateTime.Now;
                    Context.Update(cost_to_update);
                    Context.SaveChanges();
                    transaction.Commit();
                    return postedData;
                }
                catch (Exception ex)
                {
                    string s = ex.Message;
                    throw new Exception(ex.InnerException.ToString());
                }
            }
        }
        public async Task <ProjectRequirementAudit> updateRequirementData(ProjectRequirementAudit postedData)
        {
            using (var transaction = await Context.Database.BeginTransactionAsync())
            {
                try
                {
                    var input_to_update = Context.ProjectRequirementAudit.Where(p => p.ProjectRequirementId == postedData.ProjectRequirementId).FirstOrDefault();
                    input_to_update.ElectricPower = postedData.ElectricPower;
                    input_to_update.Water = postedData.Water;
                    input_to_update.OtherUtility = postedData.OtherUtility;
                    input_to_update.LandAgricultural = postedData.LandAgricultural;
                    input_to_update.LandIndustrial = postedData.LandIndustrial;
                    input_to_update.LandService = postedData.LandService;
                    input_to_update.RentalLand = postedData.RentalLand;
                    input_to_update.OwnLand = postedData.OwnLand;
                    input_to_update.LeaseLand = postedData.LeaseLand;
                    input_to_update.Remark = postedData.Remark;
                    input_to_update.Decision = postedData.Decision;
                    input_to_update.Quarter = postedData.Quarter;
                    input_to_update.RegistrationYear = postedData.RegistrationYear;
                    input_to_update.ProjectStatus = postedData.ProjectStatus;
                    input_to_update.UpdatedEventDatetime = DateTime.Now;
                    Context.Update(input_to_update);
                    Context.SaveChanges();
                    transaction.Commit();
                    return input_to_update;
                }
                catch (Exception ex)
                {
                    string s = ex.Message;
                    throw new Exception(ex.InnerException.ToString());
                }
            }
        }
        public async Task<ProjectOutputAudit> saveProductData(ProjectOutputAudit postedData)
        {
            ProjectOutputAudit output = Mapper.Map<ProjectOutputAudit>(postedData);
            var squence = Context.Squences.FirstOrDefault();
            var lastSe = squence.LastSquence + 1;
            using (var transaction = await Context.Database.BeginTransactionAsync())
            {
                try
                {
                    output.ServiceType = (int)ServiceEnum.AfterCare;
                    output.IsActual = true;
                    output.IsActive = true;
                    output.IsDeleted = false;
                    output.EventDatetime = DateTime.Now;
                    output.ProjectOutputId = lastSe;
                    Context.ProjectOutputAudit.Add(output);
                    Context.SaveChanges();
                    transaction.Commit();
                    return output;
                }
                catch (Exception ex)
                {
                    string s = ex.Message;
                    throw new Exception(ex.InnerException.ToString());
                }
            }
        }
        public async Task<ProjectRequirementAudit> saveRequirementData(ProjectRequirementAudit postedData)
        {
            ProjectRequirementAudit requirement = Mapper.Map<ProjectRequirementAudit>(postedData);
            var squence = Context.Squences.FirstOrDefault();
            var lastSe = squence.LastSquence + 1;
            using (var transaction = await Context.Database.BeginTransactionAsync())
            {
                try
                {
                    requirement.ServiceType = (int)ServiceEnum.AfterCare;
                    //requirement.IsActual = true;
                    requirement.IsActive = true;
                    requirement.IsDeleted = false;
                    requirement.EventDatetime = DateTime.Now;
                    requirement.ProjectRequirementId = lastSe;
                    Context.ProjectRequirementAudit.Add(requirement);
                    Context.SaveChanges();
                    transaction.Commit();
                    return requirement;
                }
                catch (Exception ex)
                {
                    string s = ex.Message;
                    throw new Exception(ex.InnerException.ToString());
                }
            }
        }
        public async Task<ProjectCostAudit> saveCostData(ProjectCostAudit postedData)
        {
            ProjectCostAudit cost = Mapper.Map<ProjectCostAudit>(postedData);
            var squence = Context.Squences.FirstOrDefault();
            var lastSe = squence.LastSquence + 1;
            using (var transaction = await Context.Database.BeginTransactionAsync())
            {
                try
                {
                    cost.ServiceType = (int)ServiceEnum.AfterCare;
                    cost.IsActual = true;
                    cost.IsActive = true;
                    cost.IsDeleted = false;
                    cost.EventDatetime = DateTime.Now;
                    cost.ProjectCostId = lastSe;
                    Context.ProjectCostAudit.Add(cost);
                    Context.SaveChanges();
                    transaction.Commit();
                    return cost;
                }
                catch (Exception ex)
                {
                    string s = ex.Message;
                    throw new Exception(ex.InnerException.ToString());
                }
            }
        }
            public async Task<ProjectEmploymentAudit> saveEmploymentData(ProjectEmploymentAudit postedData)
        {
            ProjectEmploymentAudit employment = Mapper.Map<ProjectEmploymentAudit>(postedData);
            var squence = Context.Squences.FirstOrDefault();
            var lastSe = squence.LastSquence + 1;
            //var perminumber = lastSe.ToString();
            using (var transaction = await Context.Database.BeginTransactionAsync())
            {
                try
                {
                    employment.ServiceType = (int)ServiceEnum.AfterCare;
                    employment.IsActual = true;
                    employment.IsActive = true;
                    employment.IsDeleted = false;
                    employment.EventDatetime = DateTime.Now;
                    employment.ProjectEmploymentId = lastSe;
                    Context.ProjectEmploymentAudit.Add(employment);
                    Context.SaveChanges();
                    transaction.Commit();
                    return employment;
                }
                catch (Exception ex)
                {
                    string s = ex.Message;
                    throw new Exception(ex.InnerException.ToString());
                }
            }
        }
                public async Task<List <ProjectListDTO>> GetProjectsById(int Id )
        {
            try
            {
                var projects = await (from p in Context.Project
                                      join s in Context.ServiceApplication
                                      on p.ProjectId equals s.ProjectId
                                      where p.InvestorId == Id && s.CurrentStatusId == 44449
                                      && s.ServiceId == 13
                                      select new ProjectListDTO
                                      {
                                          ProjectId = p.ProjectId,
                                          ProjectName = p.ProjectName,
                                          InvestorId = p.InvestorId,

                                      }).ToListAsync();
                return projects;
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }

        }

    }
}
