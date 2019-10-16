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

        public async Task<ProjectAudit> GetProfileByInvestorId(int ProjectId)
        {
            try
            {
                return await Context.ProjectAudit.SingleOrDefaultAsync(m => m.ProjectId == ProjectId);
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
        public async Task<ProjectOutputAudit> getProjectOutPutAudit(int ProjectOutputId)
        {
            try
            {
                var projectOutPutAudit = await Context.ProjectOutputAudit.FirstOrDefaultAsync(m => m.ProjectOutputId == ProjectOutputId);
                return projectOutPutAudit;
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
        public async Task<ProjectNationalityCompositionAudit> getProjectSharePercentAudit(int projectCompositionId)
        {
            try
            {
                var projectNationalityComposition = await Context.ProjectNationalityCompositionAudit.FirstOrDefaultAsync(m => m.ProjectNationalityCompositionId == projectCompositionId);
                return projectNationalityComposition;
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
        public async Task<ProjectEmploymentAudit> getProjectEmploymentAudit(int ProjectId)
        {
            try
            {
                var projectEmploymentAudit = await Context.ProjectEmploymentAudit.SingleOrDefaultAsync(m => m.ProjectId == ProjectId);
                return projectEmploymentAudit;
            }
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
        }
        public async Task<ProjectCostAudit> getProjectCostAudit(int ProjectId)
        {
            try
            {
                var projectCostAudit = await Context.ProjectCostAudit.SingleOrDefaultAsync(m => m.ProjectId == ProjectId);
                return projectCostAudit;
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
                        CaseNumber = "0009990",
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
                        ParentId = postedProfile.InvestorId,
                        IsMainOffice = postedProfile.IsMainOffice,
                        RegionId = postedProfile.RegionId,
                        ZoneId = postedProfile.ZoneId,
                        KebeleId = postedProfile.KebeleId,
                        WoredaId = postedProfile.WoredaId,
                        HouseNo = postedProfile.HouseNo,
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
