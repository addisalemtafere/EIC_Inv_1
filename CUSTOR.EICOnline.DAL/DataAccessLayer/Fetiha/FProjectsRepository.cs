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
    public class FProjectsRepository : EFRepository<ApplicationDbContext, ProjectAudit>
    {
        public FProjectsRepository(ApplicationDbContext context) : base(context)
        {
        }

        public async Task <ProjectAuditAddressDTO> GetProjectProfileByServiceApplicationProjectId(int ProjectId ,int serviceApplicationId)
        {
            try
            {
                // return await Context.ProjectAudit.SingleOrDefaultAsync(m => m.ProjectId == ProjectId);
                var projectAuditWithAddress = await (from p in Context.ProjectAudit
                                                     join a in Context.AddressAudit
                                                     on p.ProjectId equals a.ParentId
                                                     join s in Context.ServiceApplication
                                                     on p.ServiceApplicationId equals s.ServiceApplicationId
                                                     where p.ProjectId == ProjectId && s.ServiceApplicationId == serviceApplicationId
                                                     select new ProjectAuditAddressDTO
                                                     {
                                                         ProjectName = p.ProjectName,
                                                         ProjectDescription = p.ProjectDescription,
                                                         StartDate = p.StartDate,

                                                         OperationDate = p.OperationDate,
                                                         TerminationDate = p.TerminationDate,
                                                         ProjectStatus = p.ProjectStatus,
                                                         ProjectStage = p.ProjectStage,
                                                         EndingDate = p.EndingDate,
                                                         Activity = p.Activity,
                                                         IsActive = p.IsActive,
                                                         IsDeleted = p.IsDeleted,
                                                         SectorId = p.SectorId,
                                                         SubSectorId = p.SubSectorId,
                                                         InvActivityId = p.InvActivityId,
                                                         EnvironmentalImpact = p.EnvironmentalImpact,
                                                         HasEnvironmentalImpact = p.HasEnvironmentalImpact,
                                                         IsOromiaSpecialZone = p.IsOromiaSpecialZone,

                                                         AddressId = a.AddressId,
                                                         IsMainOffice = a.IsMainOffice,
                                                         RegionId = a.RegionId,
                                                         ZoneId = a.ZoneId,
                                                         WoredaId = a.WoredaId,
                                                         KebeleId = a.KebeleId,
                                                         KebeleEngId = a.KebeleEngId,
                                                         WoredaEngId = a.WoredaEngId,
                                                         IndustrialParkId = a.IndustrialParkId,
                                                         IsIndustrialPark = a.IsIndustrialPark,
                                                         SpecificAreaName = a.SpecificAreaName,
                                                         IsAddressActive = a.IsActive,
                                                         IsAddressDeleted = a.IsDeleted
                                                     }
                                             ).FirstOrDefaultAsync();
                return projectAuditWithAddress;
            }
            catch (Exception ex)
            {
                SetError(ex);
                return null;
            }
        }
            
            public async Task<ProjectAuditAddressDTO> GetProjectProfileByProjectId(int ProjectId)
        {
            try
            {
                // return await Context.ProjectAudit.SingleOrDefaultAsync(m => m.ProjectId == ProjectId);
                var projectAuditWithAddress = await (from p in Context.ProjectAudit
                                            join a in Context.AddressAudit
                                            on p.ProjectId equals a.ParentId
                                            where p.ProjectId == ProjectId
                                            select new ProjectAuditAddressDTO
                                            {
                                                ProjectName = p.ProjectName,
                                                ProjectDescription = p.ProjectDescription,
                                                StartDate = p.StartDate,

                                                OperationDate = p.OperationDate,
                                                TerminationDate = p.TerminationDate,
                                                ProjectStatus = p.ProjectStatus,
                                                ProjectStage = p.ProjectStage,
                                                EndingDate = p.EndingDate,
                                                Activity = p.Activity,
                                                IsActive = p.IsActive,
                                                IsDeleted = p.IsDeleted,
                                                SectorId = p.SectorId,
                                                SubSectorId = p.SubSectorId,
                                                InvActivityId = p.InvActivityId,
                                                EnvironmentalImpact = p.EnvironmentalImpact,
                                                HasEnvironmentalImpact = p.HasEnvironmentalImpact,
                                                IsOromiaSpecialZone = p.IsOromiaSpecialZone,

                                                AddressId = a.AddressId,
                                                IsMainOffice = a.IsMainOffice,
                                                RegionId = a.RegionId,
                                                ZoneId = a.ZoneId,
                                                WoredaId = a.WoredaId,
                                                KebeleId = a.KebeleId,
                                                KebeleEngId = a.KebeleEngId,
                                                WoredaEngId = a.WoredaEngId,
                                                IndustrialParkId = a.IndustrialParkId,
                                                IsIndustrialPark = a.IsIndustrialPark,
                                                SpecificAreaName = a.SpecificAreaName,
                                                IsAddressActive = a.IsActive,
                                                IsAddressDeleted = a.IsDeleted
                                            }
                                             ).FirstOrDefaultAsync();
                return projectAuditWithAddress;
            }
            catch (Exception ex)
            {
                SetError(ex);
                return null;
            }
        }
        public async Task<ProjectRequirement> getProjectRequirementDetial(int ProjectId)
        {
            try
            {
                var projectInput = await Context.ProjectRequirement.SingleOrDefaultAsync(m => m.ProjectId == ProjectId);
                return projectInput;
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }

        }

        public async Task <ProjectInputAudit> getProjectRawMaterialAudit (int ProjectInputId)
        {
            try
            {
                var projectInputAudit = await Context.ProjectInputAudit.Where(p => p.ProjectInputId == ProjectInputId).FirstOrDefaultAsync();
                return projectInputAudit;
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }

        }
        public async Task <ProjectInputAudit> getProjectRawMaterialServiceApplicationAudit(int ProjectInputId , int serviceApplicationId)
        {
            try
            {
                var projectInputAudit = await (from p in Context.ProjectInputAudit
                                               join s in Context.ServiceApplication
                                               on p.ProjectId equals s.ProjectId
                                               where p.ProjectInputId == ProjectInputId && s.ServiceApplicationId == serviceApplicationId
                                               select new ProjectInputAudit
                                               {
                                                  id = p.id,
                                                  ProjectInputId = p.ProjectId,
                                                  ProjectId =p.ProjectId,
                                                  RawMaterialType = p.RawMaterialType,
                                                  IsForeign = p.IsForeign,
                                                  Remark = p.Remark,
                                                  IsActive = p.IsActive,
                                                  IsDeleted = p.IsDeleted,
                                                  ProjectStatus = p.ProjectStatus,
                                                  ServiceApplicationId = p.ServiceApplicationId
                                            }).FirstOrDefaultAsync();
                return projectInputAudit;
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }

        }
        public async Task<List<ProjectInput>> getProjectRawMaterial(int ProjectId)
        {
            try
            {
                var projectRawMaterial = await Context.ProjectInput.Where(p => p.ProjectId == ProjectId).ToListAsync();
                return projectRawMaterial;

            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }

        }
        public async Task<List<Project>> getPermitListByInvestorId(int InvesorId)
        {
            try
            {
                var projects = await Context.Project.Where(m => m.InvestorId == InvesorId && m.IsDeleted == false)
                                    .Include(s => s.ServiceApplication).ToListAsync();
                return projects;
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }

        }
        public async Task<ProjectOutputAudit> getProjectOutPutAudit(int ProjectOutputId, int serviceApplicationId)
        {
            try
            {
                if (serviceApplicationId == 0)
                {
                    var projectOutPutAudit = await Context.ProjectOutputAudit.FirstOrDefaultAsync(m => m.ProjectOutputId == ProjectOutputId);
                    return projectOutPutAudit;
                }
                else
                {
                    var projectOutPutAudit = await Context.ProjectOutputAudit.FirstOrDefaultAsync(m => m.ProjectOutputId == ProjectOutputId && m.ServiceApplicationId == serviceApplicationId);
                    return projectOutPutAudit;
                }
                
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }

        }
        public async Task<List<ProjectOutput>> getProjectOutPut(int ProjectId)
        {
            try
            {
                var projectOutPut = await Context.ProjectOutput.Where(m => m.ProjectId == ProjectId).ToListAsync();
                return projectOutPut;
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
        }
        public async Task<ProjectEmployment> getProjectEmployment(int ProjectId)
        {
            try
            {
                var projectEmployment = await Context.ProjectEmployment.SingleOrDefaultAsync(m => m.ProjectId == ProjectId);
                return projectEmployment;
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
        }
        public async Task<ProjectNationalityCompositionAudit> getProjectSharePercentAudit(int projectCompositionId, int serviceApplicationId)
        {
            try
            {
                if(serviceApplicationId == 0)
                {
                    var projectNationalityComposition = await Context.ProjectNationalityCompositionAudit.FirstOrDefaultAsync(m => m.ProjectNationalityCompositionId == projectCompositionId);
                    return projectNationalityComposition;
                }
                else
                {
                    var projectNationalityComposition = await Context.ProjectNationalityCompositionAudit.FirstOrDefaultAsync(m => m.ProjectNationalityCompositionId == projectCompositionId && m.ServiceApplicationId == serviceApplicationId);
                    return projectNationalityComposition;
                }
              
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
        }
        public async Task<List<ProjectNationalityComposition>> getProjectSharePercent(int ProjectId)
        {
            try
            {
                var projectSharePercent = await Context.ProjectNationalityComposition.Where(m => m.ProjectId == ProjectId).ToListAsync();
                return projectSharePercent;
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
        }
        public async Task<ProjectEmploymentAudit> getProjectEmploymentAudit(int ProjectId , int serviceApplicationId)
        {
            try
            {
                if(serviceApplicationId == 0)
                {
                    var projectEmploymentAudit = await Context.ProjectEmploymentAudit.SingleOrDefaultAsync(m => m.ProjectId == ProjectId);
                    return projectEmploymentAudit;
                }
                else
                {
                    var projectEmploymentAudit = await Context.ProjectEmploymentAudit.SingleOrDefaultAsync(m => m.ProjectId == ProjectId && m.ServiceApplicationId == serviceApplicationId);
                    return projectEmploymentAudit;
                }
                
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
        }
        public async Task<ProjectCostAudit> getProjectCostAudit(int ProjectId, int ServiceApplicationId)
        {
            try
            {
                if (ServiceApplicationId == 0)
                {
                    var projectCostAudit = await Context.ProjectCostAudit.SingleOrDefaultAsync(m => m.ProjectId == ProjectId);
                    return projectCostAudit;
                }
                else
                {
                    var projectCostAudit = await Context.ProjectCostAudit.SingleOrDefaultAsync(m => m.ProjectId == ProjectId && m.ServiceApplicationId== ServiceApplicationId);
                    return projectCostAudit;
                }
               
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
        }
        public async Task<ProjectCost> getProjectCost(int ProjectId)
        {
            try
            {
                var projectCost = await Context.ProjectCost.SingleOrDefaultAsync(m => m.ProjectId == ProjectId);
                return projectCost;
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }

        }
        public async Task<ProjectRequirementAudit>  getProjectRequirementServiceApplicationAudit(int ProjectId, int serviceApplicationId)
        {
            try
            {
                var projectInputService = await (from p in Context.ProjectRequirementAudit
                                                 join s in Context.ServiceApplication
                                                 on p.ProjectId equals s.ProjectId
                                                 where p.ProjectId == ProjectId && s.ServiceApplicationId == serviceApplicationId
                                                 select new ProjectRequirementServiceApplicationAudit
                                                 {
                                                     id = p.id,
                                                     ProjectRequirementId = p.ProjectRequirementId,
                                                     ProjectId = p.ProjectId,
                                                     ElectricPower = p.ElectricPower,
                                                     Water = p.Water,
                                                     OtherUtility = p.OtherUtility,
                                                     LandIndustrial = p.LandIndustrial,
                                                     LandAgricultural = p.LandAgricultural,
                                                     LandService = p.LandService,
                                                     OwnLand = p.OwnLand,
                                                     RentalLand = p.RentalLand,
                                                     LeaseLand = p.LeaseLand,
                                                     Remark = p.Remark,
                                                     IsActive = p.IsActive,
                                                     IsDeleted = p.IsDeleted
                                                 }).FirstOrDefaultAsync();
                return projectInputService;

            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }

        }
        public async Task<ProjectRequirementAudit> getProjectRequirementDetialAudit(int ProjectId)
        {
            try
            {
                var projectInput = await Context.ProjectRequirementAudit.SingleOrDefaultAsync(m => m.ProjectId == ProjectId);
                return projectInput;
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }

        }
        public async Task<ProjectAddressDTO> getProjectDetial(int projectId)
        {
            try
            {
                var projectAddress = await (from p in Context.Project
                                            join a in Context.Address
                                            on p.ProjectId equals a.ParentId
                                            where p.ProjectId == projectId
                                            select new ProjectAddressDTO
                                            {
                                                ProjectName = p.ProjectName,
                                                ProjectDescription = p.ProjectDescription,
                                                StartDate = p.StartDate,

                                                OperationDate = p.OperationDate,
                                                TerminationDate = p.TerminationDate,
                                                ProjectStatus = p.ProjectStatus,
                                                ProjectStage = p.ProjectStage,
                                                EndingDate = p.EndingDate,
                                                Activity = p.Activity,
                                                IsActive = p.IsActive,
                                                IsDeleted = p.IsDeleted,
                                                SectorId = p.SectorId,
                                                SubSectorId = p.SubSectorId,
                                                InvActivityId = p.InvActivityId,
                                                EnvironmentalImpact = p.EnvironmentalImpact,
                                                HasEnvironmentalImpact = p.HasEnvironmentalImpact,
                                                IsOromiaSpecialZone = p.IsOromiaSpecialZone,

                                                AddressId = a.AddressId,
                                                IsMainOffice = a.IsMainOffice,
                                                RegionId = a.RegionId,
                                                ZoneId = a.ZoneId,
                                                WoredaId = a.WoredaId,
                                                KebeleId = a.KebeleId,
                                                KebeleEngId = a.KebeleEngId,
                                                WoredaEngId = a.WoredaEngId,
                                                IndustrialParkId = a.IndustrialParkId,
                                                IsIndustrialPark = a.IsIndustrialPark,
                                                SpecificAreaName = a.SpecificAreaName,
                                                IsAddressActive = a.IsActive,
                                                IsAddressDeleted = a.IsDeleted
                                            }
                                            ).FirstOrDefaultAsync();
                return projectAddress;
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
                existingServiceApplication = await Context.ServiceApplication.FirstOrDefaultAsync(s => s.ServiceApplicationId == serviceApplicationId);
                existingServiceApplication.UpdatedEventDatetime = DateTime.Now;
                existingServiceApplication.CurrentStep = 7;
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
        public async Task <ProjectNationalityCompositionAudit> updateShareData(ProjectNationalityCompositionAudit postedData)
        {
            ServiceApplication existingServiceApplication = null;
            ProjectInputAudit projectInput = Mapper.Map<ProjectInputAudit>(postedData);
            using (var transaction = await Context.Database.BeginTransactionAsync())
            {
                try
                {
                    existingServiceApplication = await Context.ServiceApplication.FirstOrDefaultAsync(s => s.ServiceApplicationId == postedData.ServiceApplicationId);
                    existingServiceApplication.UpdatedEventDatetime = DateTime.Now;
                    existingServiceApplication.CurrentStep = 5;
                    Context.Update(existingServiceApplication);

                    var existing_share = await Context.ProjectNationalityCompositionAudit.Where(p => p.ProjectNationalityCompositionId == postedData.ProjectNationalityCompositionId).FirstOrDefaultAsync();
                    existing_share = Mapper.Map(postedData, existing_share);
                    Context.Update(existing_share);
                    Context.SaveChanges();
                    transaction.Commit();
                    return postedData;
                }
                catch (Exception ex)
                {
                    throw new Exception(ex.InnerException.ToString());
                }
            }
        }
        public async Task<ProjectInputAudit> updateRawMaterialData(ProjectInputAudit postedData)
        {
            ServiceApplication existingServiceApplication = null;
            ProjectInputAudit projectInput = Mapper.Map<ProjectInputAudit>(postedData);
            using (var transaction = await Context.Database.BeginTransactionAsync())
            {
                try
                {
                    existingServiceApplication = await Context.ServiceApplication.FirstOrDefaultAsync(s => s.ServiceApplicationId == postedData.ServiceApplicationId);
                    existingServiceApplication.UpdatedEventDatetime = DateTime.Now;
                    existingServiceApplication.CurrentStep = 5;
                    Context.Update(existingServiceApplication);

                    var existing_rawMaterial = await Context.ProjectInputAudit.Where(p => p.ProjectInputId == postedData.ProjectInputId).FirstOrDefaultAsync();
                    existing_rawMaterial = Mapper.Map(postedData, existing_rawMaterial);
                    Context.Update(existing_rawMaterial);
                    Context.SaveChanges();
                    transaction.Commit();
                    return postedData;
                }
                catch (Exception ex)
                {
                    throw new Exception(ex.InnerException.ToString());
                }
            }
        }
        public async Task <ProjectOutputAudit> updateOutPutData (ProjectOutputAudit postedData)
        {
            ServiceApplication existingServiceApplication = null;
            using (var transaction = await Context.Database.BeginTransactionAsync())
            {
                try
                {
                    existingServiceApplication = await Context.ServiceApplication.FirstOrDefaultAsync(s => s.ServiceApplicationId == postedData.ServiceApplicationId);
                    existingServiceApplication.UpdatedEventDatetime = DateTime.Now;
                    existingServiceApplication.CurrentStep = 5;
                    Context.Update(existingServiceApplication);
                    var existing_output = await Context.ProjectOutputAudit.Where(p => p.ProjectOutputId == postedData.ProjectOutputId).FirstOrDefaultAsync();
                    existing_output.EventDatetime = DateTime.Now;
                    var updated_output = Mapper.Map(postedData, existing_output);
                    Context.Update(updated_output);
                    Context.SaveChanges();
                    transaction.Commit();
                    return postedData;
                }
                catch (Exception ex)
                {
                    throw new Exception(ex.InnerException.ToString());
                }
            }
        }
        public async Task <ProjectEmploymentAudit> updateEmploymentData (ProjectEmploymentAudit postedData)
        {
             ServiceApplication existingServiceApplication = null;
            using (var transaction = await Context.Database.BeginTransactionAsync())
            {
                try
                {
                    existingServiceApplication = await Context.ServiceApplication.FirstOrDefaultAsync(s => s.ServiceApplicationId == postedData.ServiceApplicationId);
                    existingServiceApplication.UpdatedEventDatetime = DateTime.Now;
                    existingServiceApplication.CurrentStep = 5;
                    Context.Update(existingServiceApplication);
                    var existing_employment = await Context.ProjectEmploymentAudit.Where(p => p.ProjectEmploymentId == postedData.ProjectEmploymentId).FirstOrDefaultAsync();
                    existing_employment.EventDatetime = DateTime.Now;
                    var updated_employment = Mapper.Map(postedData, existing_employment);
                    Context.Update(updated_employment);
                    Context.SaveChanges();
                    transaction.Commit();
                    return postedData;
                }
                catch (Exception ex)
                {
                    throw new Exception(ex.InnerException.ToString());
                }
            }
        }
        public async Task<ProjectCostAudit> updateProjectCostData(ProjectCostAudit postedData)
        {
           // ServiceApplication existingServiceApplication = null;
            using (var transaction = await Context.Database.BeginTransactionAsync())
            {
                try
                {
                    //existingServiceApplication = await Context.ServiceApplication.FirstOrDefaultAsync(s => s.ServiceApplicationId == postedData.ServiceApplicationId);
                    //existingServiceApplication.UpdatedEventDatetime = DateTime.Now;
                    //existingServiceApplication.CurrentStep = 2;
                    //Context.Update(existingServiceApplication);
                    var existing_cost = await Context.ProjectCostAudit.Where(p => p.ProjectCostId == postedData.ProjectCostId).FirstOrDefaultAsync();
                    existing_cost.EventDatetime = DateTime.Now;
                    var updated_cost = Mapper.Map(postedData, existing_cost);
                    Context.Update(updated_cost);
                    Context.SaveChanges();
                    transaction.Commit();
                    return postedData;
                }
                catch (Exception ex)
                {
                    throw new Exception(ex.InnerException.ToString());
                }
            }
        }

        public async Task<ProjectRequirementServiceApplicationAudit> updateInputData(ProjectRequirementServiceApplicationAudit postedData)
        {
            ServiceApplication existingServiceApplication = null;
            ProjectRequirementAudit projectInput = Mapper.Map<ProjectRequirementAudit>(postedData);
            using (var transaction = await Context.Database.BeginTransactionAsync())
            {
                try
                {
                    existingServiceApplication = await Context.ServiceApplication.FirstOrDefaultAsync(s => s.ServiceApplicationId == postedData.ServiceApplicationId);
                    existingServiceApplication.UpdatedEventDatetime = DateTime.Now;
                    existingServiceApplication.CurrentStep = 2;
                    Context.Update(existingServiceApplication);
                    var existing_input = await Context.ProjectRequirementAudit.Where(p => p.ProjectRequirementId == postedData.ProjectRequirementId).FirstOrDefaultAsync();
                    existing_input = Mapper.Map(postedData, existing_input);
                    Context.Update(existing_input);
                    Context.SaveChanges();
                    transaction.Commit();
                    return postedData;
                }
                catch (Exception ex)
                {
                    throw new Exception(ex.InnerException.ToString());
                }
            }
        }
        public async Task<ProjectAddressDTO> updateProjectProfileData(ProjectAddressDTO postedProfile)
        {
            ServiceApplication existingServiceApplication = null;
            ProjectAddressDTO a = null;
            ProjectAudit project = Mapper.Map<ProjectAudit>(postedProfile);
            using (var transaction = await Context.Database.BeginTransactionAsync())
            {
                try
                {
                    existingServiceApplication = await Context.ServiceApplication.FirstOrDefaultAsync(s => s.ServiceApplicationId == postedProfile.ServiceApplicationId);
                    existingServiceApplication.UpdatedEventDatetime = DateTime.Now;
                    existingServiceApplication.CurrentStep = 2;
                    Context.Update(existingServiceApplication);
                    var existing_address = await Context.AddressAudit.FirstOrDefaultAsync(s => s.AddressId == postedProfile.AddressId);

                    existing_address.RegionId = postedProfile.RegionId;
                    existing_address.ZoneId = postedProfile.ZoneId;
                    existing_address.KebeleId = postedProfile.KebeleId;
                    existing_address.WoredaEngId = postedProfile.WoredaEngId;
                    existing_address.KebeleEngId = postedProfile.KebeleEngId;
                    existing_address.WoredaId = postedProfile.WoredaId;
                    existing_address.SpecificAreaName = postedProfile.SpecificAreaName;
                    Context.Update(existing_address);

                    var existing_project = await Context.ProjectAudit.Where(p => p.ProjectId == postedProfile.ProjectId).FirstOrDefaultAsync();
                  //  existing_project = Mapper.Map<ProjectAudit>(existing_project);
                    existing_project = Mapper.Map(postedProfile, existing_project);

                    Context.Update(existing_project);
                    Context.SaveChanges();
                    transaction.Commit();
                    return a;
                }
                catch (Exception ex)
                {
                    throw new Exception(ex.InnerException.ToString());
                }
            }
              

        }
        public async Task<ProjectInputInvestorAudit> saveRawMaterialData(ProjectInputInvestorAudit postedData)
        {
            ServiceApplication serviceApplication = null;
            ServiceApplication existingServiceApplication = null;
            ProjectInputAudit rawMaterial = Mapper.Map<ProjectInputAudit>(postedData);
            if (postedData.ServiceApplicationId != null)
            {
                existingServiceApplication = await Context.ServiceApplication.FirstOrDefaultAsync(s => s.ServiceApplicationId == postedData.ServiceApplicationId);
                existingServiceApplication.UpdatedEventDatetime = DateTime.Now;
                existingServiceApplication.CurrentStep = 4;
            }
            else
            {
               serviceApplication = new ServiceApplication
                {
                    InvestorId = postedData.InvestorId,
                    ProjectId = postedData.ProjectId,
                   CaseNumber = "0009998",
                    ServiceId = 1028,
                    StartDate = DateTime.Now,
                    EventDatetime = DateTime.Now,
                    ServiceNameAmharic = "",
                   ServiceNameEnglish = "",
                    CurrentStatusId = 44450,
                    CurrentStep = 4,
                };
            }
            using (var transaction = await Context.Database.BeginTransactionAsync())
            {
                try
                {
                    if (postedData.ServiceApplicationId != null)
                    {
                        Context.Update(existingServiceApplication);
                        Context.SaveChanges();
                    }
                    else
                    {
                        Context.Add(serviceApplication);
                        Context.SaveChanges();

                    }
                    if (postedData.ServiceApplicationId != null)
                    {
                        rawMaterial.ServiceApplicationId = postedData.ServiceApplicationId;
                    }
                    else
                    {
                        rawMaterial.ServiceApplicationId = serviceApplication.ServiceApplicationId;
                    }

                    var projectRawMaterial = new ProjectInputAudit
                    {
                        ProjectId = postedData.ProjectId,
                        ProjectInputId = postedData.ProjectInputId,
                        RawMaterialType = postedData.RawMaterialType,
                        IsForeign = postedData.IsForeign,
                        Remark = postedData.Remark,
                        IsActive = postedData.IsActive,
                        IsDeleted = postedData.IsDeleted,
                        ServiceApplicationId = rawMaterial.ServiceApplicationId
                    };
                    Context.ProjectInputAudit.Add(projectRawMaterial);
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
        public async Task <ProjectRequirementServiceApplicationAudit> saveProjectInputData(ProjectRequirementServiceApplicationAudit postedData)
        {
            ServiceApplication serviceApplication = null;
            ServiceApplication existingServiceApplication = null;
            ProjectRequirementAudit InputData = Mapper.Map<ProjectRequirementAudit>(postedData);
            if (postedData.ServiceApplicationId != null)
            {
                existingServiceApplication = await Context.ServiceApplication.FirstOrDefaultAsync(s => s.ServiceApplicationId == postedData.ServiceApplicationId);
                existingServiceApplication.UpdatedEventDatetime = DateTime.Now;
                existingServiceApplication.CurrentStep = 3;
            }
            else
            {
                serviceApplication = new ServiceApplication
                {
                    InvestorId = postedData.InvestorId,
                    ProjectId = postedData.ProjectId,
                    CaseNumber = "0009998",
                    ServiceId = 1028,
                    StartDate = DateTime.Now,
                    EventDatetime = DateTime.Now,
                    ServiceNameAmharic = "",
                    ServiceNameEnglish = "",
                    CurrentStatusId = 44450,
                    CurrentStep = 3,
                };
            }
            try {
                using (var transaction = await Context.Database.BeginTransactionAsync())
                {
                    if (postedData.ServiceApplicationId != null)
                    {
                        Context.Update(existingServiceApplication);
                        Context.SaveChanges();
                    }
                    else
                    {
                        Context.Add(serviceApplication);
                        Context.SaveChanges();

                    }
                    if (postedData.ServiceApplicationId != null)
                    {
                        InputData.ServiceApplicationId = postedData.ServiceApplicationId;
                    }
                    else
                    {
                        InputData.ServiceApplicationId = serviceApplication.ServiceApplicationId;
                    }

                    Context.ProjectRequirementAudit.Add(InputData);
                    Context.SaveChanges();
                    transaction.Commit();
                    return Mapper.Map<ProjectRequirementServiceApplicationAudit>(InputData);
                }


            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }

        }

        public async Task <ProjectOutputInvestorAudit> saveOutPutData(ProjectOutputInvestorAudit postedData)
        {
            ServiceApplication serviceApplication = null;
            ServiceApplication existingServiceApplication = null;
            ProjectOutputInvestorAudit projectOutPutData = Mapper.Map<ProjectOutputInvestorAudit>(postedData);
            if (postedData.ServiceApplicationId != null)
            {
                existingServiceApplication = await Context.ServiceApplication.FirstOrDefaultAsync(s => s.ServiceApplicationId == postedData.ServiceApplicationId);
                existingServiceApplication.UpdatedEventDatetime = DateTime.Now;
                existingServiceApplication.CurrentStep = 3;
            }
            else
            {
                serviceApplication = new ServiceApplication
                {
                    InvestorId = postedData.InvestorId,
                    ProjectId = postedData.ProjectId,
                    CaseNumber = "0009998",
                    ServiceId = 1028,
                    StartDate = DateTime.Now,
                    EventDatetime = DateTime.Now,
                    ServiceNameAmharic = "",
                    ServiceNameEnglish = "",
                    CurrentStatusId = 44450,
                    CurrentStep = 3,
                };
            }
            try
            {
                using (var transaction = await Context.Database.BeginTransactionAsync())
                {
                    if (postedData.ServiceApplicationId != null)
                    {
                        Context.Update(existingServiceApplication);
                        Context.SaveChanges();
                    }
                    else
                    {
                        Context.Add(serviceApplication);
                        Context.SaveChanges();

                    }
                    if (postedData.ServiceApplicationId != null)
                    {
                        projectOutPutData.ServiceApplicationId = postedData.ServiceApplicationId;
                    }
                    else
                    {
                        projectOutPutData.ServiceApplicationId = serviceApplication.ServiceApplicationId;
                    }
                    Context.ProjectOutputAudit.Add(projectOutPutData);
                    Context.SaveChanges();
                    transaction.Commit();
                    return postedData;
                }
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
        }
        public async Task <ProjectNationalityCompositionInvestorAudit> saveShareData(ProjectNationalityCompositionInvestorAudit postedData)
        {
            ServiceApplication serviceApplication = null;
            ServiceApplication existingServiceApplication = null;
            ProjectNationalityCompositionInvestorAudit shareData = Mapper.Map<ProjectNationalityCompositionInvestorAudit>(postedData);
            if (postedData.ServiceApplicationId != null)
            {
                existingServiceApplication = await Context.ServiceApplication.FirstOrDefaultAsync(s => s.ServiceApplicationId == postedData.ServiceApplicationId);
                existingServiceApplication.UpdatedEventDatetime = DateTime.Now;
                existingServiceApplication.CurrentStep = 3;
            }
            else
            {
                serviceApplication = new ServiceApplication
                {
                    InvestorId = postedData.InvestorId,
                    ProjectId = postedData.ProjectId,
                    CaseNumber = "0009998",
                    ServiceId = 1028,
                    StartDate = DateTime.Now,
                    EventDatetime = DateTime.Now,
                    ServiceNameAmharic = "",
                    ServiceNameEnglish = "",
                    CurrentStatusId = 44450,
                    CurrentStep = 3,
                };
            }
            try
            {
                using (var transaction = await Context.Database.BeginTransactionAsync())
                {
                    if (postedData.ServiceApplicationId != null)
                    {
                        Context.Update(existingServiceApplication);
                        Context.SaveChanges();
                    }
                    else
                    {
                        Context.Add(serviceApplication);
                        Context.SaveChanges();

                    }
                    if (postedData.ServiceApplicationId != null)
                    {
                        shareData.ServiceApplicationId = postedData.ServiceApplicationId;
                    }
                    else
                    {
                        shareData.ServiceApplicationId = serviceApplication.ServiceApplicationId;
                    }
                    Context.ProjectNationalityCompositionAudit.Add(shareData);
                    Context.SaveChanges();
                    transaction.Commit();
                    return postedData;
                }
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
        }

        public async Task <ProjectEmploymentInvestorAudit> saveEmploymentData(ProjectEmploymentInvestorAudit postedData)
        {
            ServiceApplication serviceApplication = null;
            ServiceApplication existingServiceApplication = null;
            ProjectEmploymentAudit EmployeeData = Mapper.Map<ProjectEmploymentAudit>(postedData);
            if (postedData.ServiceApplicationId != null)
            {
                existingServiceApplication = await Context.ServiceApplication.FirstOrDefaultAsync(s => s.ServiceApplicationId == postedData.ServiceApplicationId);
                existingServiceApplication.UpdatedEventDatetime = DateTime.Now;
                existingServiceApplication.CurrentStep = 3;
            }
            else
            {
                serviceApplication = new ServiceApplication
                {
                    InvestorId = postedData.InvestorId,
                    ProjectId = postedData.ProjectId,
                    CaseNumber = "0009998",
                    ServiceId = 1028,
                    StartDate = DateTime.Now,
                    EventDatetime = DateTime.Now,
                    ServiceNameAmharic = "",
                    ServiceNameEnglish = "",
                    CurrentStatusId = 44450,
                    CurrentStep = 3,
                };
            }
            try
            {
                using (var transaction = await Context.Database.BeginTransactionAsync())
                {
                    if (postedData.ServiceApplicationId != null)
                    {
                        Context.Update(existingServiceApplication);
                        Context.SaveChanges();
                    }
                    else
                    {
                        Context.Add(serviceApplication);
                        Context.SaveChanges();

                    }
                    if (postedData.ServiceApplicationId != null)
                    {
                        EmployeeData.ServiceApplicationId = postedData.ServiceApplicationId;
                    }
                    else
                    {
                        EmployeeData.ServiceApplicationId = serviceApplication.ServiceApplicationId;
                    }
                    Context.ProjectEmploymentAudit.Add(EmployeeData);
                    Context.SaveChanges();
                    transaction.Commit();
                    return postedData;
                }
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
        }
        public async Task<ProjectCostInvestorAudit> saveProjectCostData (ProjectCostInvestorAudit postedData)
        {
            ServiceApplication serviceApplication = null;
            ServiceApplication existingServiceApplication = null;
            ProjectCostAudit CostData = Mapper.Map<ProjectCostAudit>(postedData);
            if (postedData.ServiceApplicationId != null)
            {
                existingServiceApplication = await Context.ServiceApplication.FirstOrDefaultAsync(s => s.ServiceApplicationId == postedData.ServiceApplicationId);
                existingServiceApplication.UpdatedEventDatetime = DateTime.Now;
                existingServiceApplication.CurrentStep = 3;
            }
            else
            {
                serviceApplication = new ServiceApplication
                {
                    InvestorId = postedData.InvestorId,
                    ProjectId = postedData.ProjectId,
                    CaseNumber = "0009998",
                    ServiceId = 1028,
                    StartDate = DateTime.Now,
                    EventDatetime = DateTime.Now,
                    ServiceNameAmharic = "",
                    ServiceNameEnglish = "",
                    CurrentStatusId = 44450,
                    CurrentStep = 3,
                };
            }

            try
            {
                using (var transaction = await Context.Database.BeginTransactionAsync())
                {
                    if (postedData.ServiceApplicationId != null)
                    {
                        Context.Update(existingServiceApplication);
                        Context.SaveChanges();
                    }
                    else
                    {
                        Context.Add(serviceApplication);
                        Context.SaveChanges();

                    }
                    if (postedData.ServiceApplicationId != null)
                    {
                        CostData.ServiceApplicationId = postedData.ServiceApplicationId;
                    }
                    else
                    {
                        CostData.ServiceApplicationId = serviceApplication.ServiceApplicationId;
                    }
                    Context.ProjectCostAudit.Add(CostData);
                    Context.SaveChanges();
                    transaction.Commit();
                    return postedData;
                }
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
        }
        public async Task<ProjectAddressDTO> saveProjectProfileData(ProjectAddressDTO postedProfile)
        {
            ServiceApplication serviceApplication = null;
            AddressAudit address = null;
            ServiceApplication existingServiceApplication = null;
            ProjectAudit project = Mapper.Map<ProjectAudit>(postedProfile);
            ProjectAddressDTO a = null;
            try
            {
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
                        CaseNumber = "0009998",
                        ServiceId = 1028,
                        StartDate = DateTime.Now,
                        EventDatetime = DateTime.Now,
                        ServiceNameAmharic = "",
                        ServiceNameEnglish = "",
                    };
                }
                using (var transaction = await Context.Database.BeginTransactionAsync())
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
                    if (postedProfile.ServiceApplicationId != null)
                    {
                        project.ServiceApplicationId = postedProfile.ServiceApplicationId;
                    }
                    else
                    {
                        project.ServiceApplicationId = serviceApplication.ServiceApplicationId;
                    }
                    Context.ProjectAudit.Add(project);
                    address = new AddressAudit
                    {
                        AddressId = postedProfile.AddressId,
                        ParentId = postedProfile.ProjectId,
                        IsMainOffice = postedProfile.IsMainOffice,
                        RegionId = postedProfile.RegionId,
                        ZoneId = postedProfile.ZoneId,
                        KebeleId = postedProfile.KebeleId,
                        WoredaEngId = postedProfile.WoredaEngId,
                        KebeleEngId = postedProfile.KebeleEngId,
                        WoredaId = postedProfile.WoredaId,
                        HouseNo = postedProfile.HouseNo,
                        SpecificAreaName = postedProfile.SpecificAreaName,
                        TeleNo = postedProfile.TeleNo,
                        Pobox = postedProfile.Pobox,
                        Fax = postedProfile.Fax,
                        CellPhoneNo = postedProfile.CellPhoneNo,
                        Email = postedProfile.Email,
                        OtherAddress = postedProfile.OtherAddress,
                        IsActive = postedProfile.IsActive,
                        IsDeleted = postedProfile.IsDeleted,
                        CreatedUserId = postedProfile.CreatedUserId,
                        ServiceApplicationId = serviceApplication.ServiceApplicationId,
                    };
                    Context.AddressAudit.Add(address);
                    Context.SaveChanges();
                    transaction.Commit();
                }

                return a;
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
        }
    }
}
