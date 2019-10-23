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
    public class FProjectOfficerRepository : EFRepository<ApplicationDbContext, ProjectAudit>
    {
        public FProjectOfficerRepository(ApplicationDbContext context) : base(context)
        {
        }
        public async Task <List<ProjectOutput>> approveProjectOutPutData (int projectId)
        {
            List<ProjectOutput> a = null;
            var project_outputs = await Context.ProjectOutputAudit.Where(p => p.ProjectId == projectId).ToListAsync();
            using (var transaction = await Context.Database.BeginTransactionAsync())
            {
                try
                {
                    foreach (var output in project_outputs)
                    {
                        var output_filtered = Context.ProjectOutput.Where(p => p.ProjectOutputId == output.ProjectOutputId).FirstOrDefault();
                        if (output_filtered != null)
                        {
                            output_filtered.ProductName = output.ProductName;
                            output_filtered.ProductQty = output.ProductQty;
                            output_filtered.ProductUnit = output.ProductUnit;
                            output_filtered.DomesticMarketShare = output.DomesticMarketShare;
                            output_filtered.ExportMarketShare = output.ExportMarketShare;
                            Context.Update(output_filtered);
                            Context.SaveChanges();
                        }
                    }
                    transaction.Commit();
                }
                catch (Exception ex)
                {
                    throw new Exception(ex.InnerException.ToString());
                }

            }
            return a;
        }
        public async Task<List<ProjectInputAudit>> approveProjectShareData(int projectId)
        {
            List<ProjectInputAudit> a = null;
            var project_shares = await Context.ProjectNationalityCompositionAudit.Where(p => p.ProjectId == projectId).ToListAsync();
            using (var transaction = await Context.Database.BeginTransactionAsync())
            {
                try
                {
                    foreach (var share in project_shares)
                    {
                        var share_filtered = Context.ProjectNationalityComposition.Where(p => p.ProjectNationalityCompositionId == share.ProjectNationalityCompositionId).FirstOrDefault();
                        if (share_filtered != null)
                        {
                            share_filtered.Nationality = share.Nationality;
                            share_filtered.Description = share.Description;
                            share_filtered.SharePercent = share.SharePercent;
                            share_filtered.Qty = share.Qty;
                            Context.Update(share_filtered);
                            Context.SaveChanges();
                        }
                    }
                    transaction.Commit();
                }
                catch (Exception ex)
                {
                    throw new Exception(ex.InnerException.ToString());
                }

            }

            return a;
        }
        public async Task<List<ProjectInputAudit>> approveProjectRawMaterialData(int projectId)
        {
            List<ProjectInputAudit> a = null;
            ProjectInput material_to_update = null;
            var raw_materials = await Context.ProjectInputAudit.Where(p => p.ProjectId == projectId).ToListAsync();
            using (var transaction = await Context.Database.BeginTransactionAsync())
            {
                try
                {
                foreach (var material in raw_materials)
                {
                    var material_filtered = Context.ProjectInput.Where(p => p.ProjectInputId == material.ProjectInputId).FirstOrDefault();
                    if (material_filtered != null)
                    {
                        material_filtered.RawMaterialType = material.RawMaterialType;
                        material_filtered.IsForeign = material.IsForeign;
                        material_filtered.Remark = material.Remark;
                        Context.Update(material_filtered);
                        Context.SaveChanges();
                    }
                }
                    transaction.Commit();
                }
                catch (Exception ex)
                {
                    throw new Exception(ex.InnerException.ToString());
                }
               
            }

            return a;
        }
        public async Task<ProjectEmploymentAudit> approveProjectEmployementData(ProjectEmploymentAudit postedData)
        {
            using (var transaction = await Context.Database.BeginTransactionAsync())
            {
                try
                {
                    var existingServiceApplication = await Context.ServiceApplication.FirstOrDefaultAsync(s => s.ServiceApplicationId == postedData.ServiceApplicationId);
                    existingServiceApplication.UpdatedEventDatetime = DateTime.Now;
                    existingServiceApplication.CurrentStep = 3;
                    Context.Update(existingServiceApplication);
                    var employment_to_update = await Context.ProjectEmployment.FirstOrDefaultAsync(s => s.ProjectEmploymentId == postedData.ProjectEmploymentId);
                    employment_to_update.PermanentFemale = postedData.PermanentFemale;
                    employment_to_update.PermanentMale = postedData.PermanentMale;
                    employment_to_update.TemporaryFemale = postedData.TemporaryFemale;
                    employment_to_update.TemporaryMale = postedData.TemporaryMale;
                    employment_to_update.PermanentForeignFemale = postedData.PermanentForeignFemale;
                    employment_to_update.PermanentForeignMale = postedData.PermanentForeignMale;
                    employment_to_update.TemporaryForeignFemale = postedData.TemporaryForeignFemale;
                    employment_to_update.TemporaryForeignMale = postedData.TemporaryForeignMale;
                    employment_to_update.Remark = postedData.Remark;
                    Context.Update(employment_to_update);
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

                public async Task<ProjectCostAudit> approveProjectCostData(ProjectCostAudit postedData)
        {
            using (var transaction = await Context.Database.BeginTransactionAsync())
            {
                try
                {
                    var existingServiceApplication = await Context.ServiceApplication.FirstOrDefaultAsync(s => s.ServiceApplicationId == postedData.ServiceApplicationId);
                    existingServiceApplication.UpdatedEventDatetime = DateTime.Now;
                    existingServiceApplication.CurrentStep = 3;
                    Context.Update(existingServiceApplication);

                    var cost_to_update = await Context.ProjectCost.FirstOrDefaultAsync(s => s.ProjectCostId == postedData.ProjectCostId);
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
                    Context.Update(cost_to_update);
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
        public async Task<ProjectRequirementAudit> approveProjectInputData(ProjectRequirementAudit postedData)
        {
            using (var transaction = await Context.Database.BeginTransactionAsync())
            {
                try
                {
                   var existingServiceApplication = await Context.ServiceApplication.FirstOrDefaultAsync(s => s.ServiceApplicationId == postedData.ServiceApplicationId);
                    existingServiceApplication.UpdatedEventDatetime = DateTime.Now;
                    existingServiceApplication.CurrentStep = 3;
                    Context.Update(existingServiceApplication);

                    var input_to_update = await Context.ProjectRequirement.FirstOrDefaultAsync(s => s.ProjectRequirementId == postedData.ProjectRequirementId);
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
                    Context.Update(input_to_update);
                    Context.SaveChanges();
                    transaction.Commit();
                    return Mapper.Map<ProjectRequirementAudit>(input_to_update);
                }
                catch (Exception ex)
                {
                    throw new Exception(ex.InnerException.ToString());
                }
            }
        }
    public async Task<ProjectAddressDTO> approveProjectProfileData(ProjectAddressDTO postedProfile)
    {
        ServiceApplication existingServiceApplication = null;
        using (var transaction = await Context.Database.BeginTransactionAsync())
        {
            try
            {
                existingServiceApplication = await Context.ServiceApplication.FirstOrDefaultAsync(s => s.ServiceApplicationId == postedProfile.ServiceApplicationId);
                existingServiceApplication.UpdatedEventDatetime = DateTime.Now;
                existingServiceApplication.CurrentStep = 2;
                Context.Update(existingServiceApplication);

                  var address_to_update = await Context.Address.FirstOrDefaultAsync(s => s.AddressId == postedProfile.AddressId);
                  address_to_update.RegionId = postedProfile.RegionId;
                  address_to_update.ZoneId = postedProfile.ZoneId;
                  address_to_update.KebeleId = postedProfile.KebeleId;
                  address_to_update.WoredaEngId = postedProfile.WoredaEngId;
                  address_to_update.KebeleEngId = postedProfile.KebeleEngId;
                  address_to_update.WoredaId = postedProfile.WoredaId;
                  address_to_update.SpecificAreaName = postedProfile.SpecificAreaName;
                  Context.Update(address_to_update);

                  var project_to_update = await Context.Project.Where(p => p.ProjectId == postedProfile.ProjectId).FirstOrDefaultAsync();
                    project_to_update.ProjectName = postedProfile.ProjectName;
                    project_to_update.ProjectDescription = postedProfile.ProjectDescription;
                    project_to_update.StartDate = postedProfile.StartDate;
                    project_to_update.OperationDate = postedProfile.OperationDate;
                    project_to_update.TerminationDate = postedProfile.TerminationDate;
                    project_to_update.SectorId = postedProfile.SectorId;
                    project_to_update.SubSectorId = postedProfile.SubSectorId;
                    project_to_update.ActivityId = postedProfile.ActivityId;
                    project_to_update.InvActivityId = postedProfile.InvActivityId;
                    project_to_update.EnvironmentalImpact = postedProfile.EnvironmentalImpact;

                   Context.Update(project_to_update);
                   Context.SaveChanges();
                   transaction.Commit();
                  return Mapper.Map<ProjectAddressDTO>(project_to_update);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.InnerException.ToString());
            }
        }


    }

}
}
