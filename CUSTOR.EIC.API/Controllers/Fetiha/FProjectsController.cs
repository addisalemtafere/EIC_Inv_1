using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CUSTOR.EICOnline.DAL;
using CUSTOR.EICOnline.DAL.EntityLayer;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using CUSTOR.EICOnline.DAL.DataAccessLayer.Fetiha;
using CUSTOR.EICOnline.DAL.EntityLayer.Fetiha;

namespace EIC.Investment.API.Controllers
{
  [Produces("application/json")]
  [Route("api/FProjects")]
  [EnableCors("CorsPolicy")]
  //[ApiController]
  public class FProjectsController : Controller
  {
    private readonly FProjectsRepository projectsRepository;
    private readonly ApplicationDbContext _context;
    public FProjectsController(ApplicationDbContext context, FProjectsRepository _projectsRepository) {
      _context = context;
      projectsRepository = _projectsRepository;
    }
    [HttpGet("getProjectAudit/{ProjectId}/{serviceApplicationId}")]
    public async Task<ProjectAuditAddressDTO> ProjectById([FromRoute] int ProjectId, int serviceApplicationId)
    {
      if(serviceApplicationId == null)
      {
        return await projectsRepository.GetProjectProfileByProjectId(ProjectId);

      }
      else
      {
        return await projectsRepository.GetProjectProfileByServiceApplicationProjectId(ProjectId, serviceApplicationId);
      }
    }

    [HttpGet("getProjectDetail/{ProjectId}")]

    public async Task <ProjectAddressDTO> getProjectByProjectId(int ProjectId)
    {
      return await projectsRepository.getProjectDetial(ProjectId);
    }

    [HttpGet("getProjectRequirement/{ProjectId}")]

    public async Task<ProjectRequirement> getProjectInputByProjectId(int ProjectId)
    {
      return await projectsRepository.getProjectRequirementDetial(ProjectId);
    }

    [HttpGet("getProjectRequirementAudit/{ProjectRquirementId}/{serviceApplicationId}")]

    public async Task<ProjectRequirementAudit> getProjectRequirementAudit(int ProjectRquirementId, int serviceApplicationId)
    {
      if(serviceApplicationId == 0)
      {
        return await projectsRepository.getProjectRequirementDetialAudit(ProjectRquirementId);
      }
      else
      {
        return await projectsRepository.getProjectRequirementServiceApplicationAudit(ProjectRquirementId, serviceApplicationId);
      }
     
    }
    [HttpGet("getProjectRawMaterial/{ProjectId}")]

    public async Task<List<ProjectInput>> getProjectRawMaterial(int ProjectId)
    {
      return await projectsRepository.getProjectRawMaterial(ProjectId);
    }
    [HttpGet("getProjectRawMaterialAudit/{ProjectInputId}/{serviceApplicationId}")]

    public async Task<ProjectInputAudit> getProjectRawMaterialAudit(int ProjectInputId, int serviceApplicationId)
    {
      if (serviceApplicationId == 0)
      {
        return await projectsRepository.getProjectRawMaterialAudit(ProjectInputId);

      }
      else
      {
        return await projectsRepository.getProjectRawMaterialServiceApplicationAudit(ProjectInputId, serviceApplicationId);
      }
    }


    [HttpGet("getProjectCost/{ProjectId}")]

    public async Task<ProjectCost> getProjectCost(int ProjectId)
    {
      return await projectsRepository.getProjectCost(ProjectId);
    }

    [HttpGet("getProjectCostAudit/{ProjectId}/{serviceApplicationId}")]
    public async Task<ProjectCostAudit> getProjectCostAudit(int ProjectId, int serviceApplicationId)
    {
      return await projectsRepository.getProjectCostAudit(ProjectId, serviceApplicationId);
    }
    [HttpGet("getProjectEmployment/{ProjectId}")]
    public async Task<ProjectEmployment> getProjectEmployment(int ProjectId)
    {
      return await projectsRepository.getProjectEmployment(ProjectId);
    }


    [HttpGet("getProjectEmploymentAudit/{ProjectId}/{serviceApplicationId}")]
    public async Task<ProjectEmploymentAudit> getProjectEmploymentAudit(int ProjectId, int serviceApplicationId)
    {
      return await projectsRepository.getProjectEmploymentAudit(ProjectId , serviceApplicationId);
    }
    [HttpGet("getProjectSharePercent/{ProjectId}")]
    public async Task<List<ProjectNationalityComposition>> getProjectSharePercent(int ProjectId)
    {
      return await projectsRepository.getProjectSharePercent(ProjectId);
    }

    [HttpGet("getProjectSharePercentAudit/{projectCompositionId}/{serviceApplicationId}")]
    public async Task<ProjectNationalityCompositionAudit> getProjectSharePercentAudit(int projectCompositionId, int serviceApplicationId)
    {
      return await projectsRepository.getProjectSharePercentAudit(projectCompositionId, serviceApplicationId);
    }
    [HttpGet("getProjectOutPut/{ProjectId}")]
    public async Task<List<ProjectOutput>> getProjectOutPut(int ProjectId)
    {
      return await projectsRepository.getProjectOutPut(ProjectId);
    }

    [HttpGet("getProjectOutPutAudit/{ProjectOutputId}/{serviceApplicationId}")]
    public async Task<ProjectOutputAudit> getProjectOutPutAudit(int ProjectOutputId, int serviceApplicationId)
    {
      return await projectsRepository.getProjectOutPutAudit(ProjectOutputId, serviceApplicationId);
    }

    [HttpGet("getPermitList/{InvestorId}")]
    public async Task<List<Project>> getPermitList(int InvestorId)
    {
      return await projectsRepository.getPermitListByInvestorId(InvestorId);
    }
    [HttpPost("saveProjectProfileData")]
    public async Task<ProjectAddressDTO> saveProjectProfileData([FromBody] ProjectAddressDTO postedProjectProfile)
    {
      return await projectsRepository.saveProjectProfileData(postedProjectProfile);
    }
    [HttpPost("saveCostData")]
    public async Task<ProjectCostInvestorAudit> saveCostData([FromBody] ProjectCostInvestorAudit postedProjectProfile)
    {
      return await projectsRepository.saveProjectCostData(postedProjectProfile);
    }
    [HttpPost("saveEmploymentData")]
    public async Task<ProjectEmploymentInvestorAudit> saveEmploymentData([FromBody] ProjectEmploymentInvestorAudit postedProjectProfile)
    {
      return await projectsRepository.saveEmploymentData(postedProjectProfile);
    }
    [HttpPost("saveShareData")]
    public async Task<ProjectNationalityCompositionInvestorAudit> saveShareData([FromBody] ProjectNationalityCompositionInvestorAudit postedData)
    {
      return await projectsRepository.saveShareData(postedData);
    }
    [HttpPost("saveOutPutData")]
    public async Task<ProjectOutputInvestorAudit> saveOutPutData([FromBody] ProjectOutputInvestorAudit postedData)
    {
      return await projectsRepository.saveOutPutData(postedData);
    }


    [HttpPut("updateProjectProfileData")]
    public async Task<ProjectAddressDTO> updateProjectProfileData([FromBody] ProjectAddressDTO postedProjectProfile)
    {
      return await projectsRepository.updateProjectProfileData(postedProjectProfile);
    }
    [HttpPut("updateInputData")]
    public async Task<ProjectRequirementServiceApplicationAudit> updateInputData([FromBody] ProjectRequirementServiceApplicationAudit postedData)
    {
      return await projectsRepository.updateInputData(postedData);
    }
    [HttpPut("updateCostData")]
    public async Task<ProjectCostAudit> updateCostData([FromBody] ProjectCostAudit postedData)
    {
      return await projectsRepository.updateProjectCostData(postedData);
    }
    [HttpPut("updateRawMaterialData")]
    public async Task<ProjectInputAudit> updateRawMaterialData([FromBody] ProjectInputAudit postedData)
    {
      return await projectsRepository.updateRawMaterialData(postedData);
    }
    [HttpPut("updateShareData")]
    public async Task<ProjectNationalityCompositionAudit> updateShareData([FromBody] ProjectNationalityCompositionAudit postedData)
    {
      return await projectsRepository.updateShareData(postedData);
    }

    [HttpPut("updateEmploymentData")]
    public async Task<ProjectEmploymentAudit> updateEmploymentData([FromBody] ProjectEmploymentAudit postedData)
    {
      return await projectsRepository.updateEmploymentData(postedData);
    }
    [HttpPut("updateOutPutData")]
    public async Task<ProjectOutputAudit> updateOutPutData([FromBody] ProjectOutputAudit postedData)
    {
      return await projectsRepository.updateOutPutData(postedData);
    }
    




    [HttpPut("finishServiceApplication/{serviceApplicationId}")]
    public async Task<ServiceApplication> finishProjectServiceApplication(int serviceApplicationId)
    {
      return await projectsRepository.finishProjectServiceApplication(serviceApplicationId);
    }
    //saveInputData
    [HttpPost("saveInputData")]
    public async Task<ProjectRequirementServiceApplicationAudit> saveProjectInputData([FromBody] ProjectRequirementServiceApplicationAudit postedData)
    {
      return await projectsRepository.saveProjectInputData(postedData);
    }
    [HttpPost("saveRawMaterialData")]
    public async Task<ProjectInputInvestorAudit> saveRawMaterialData([FromBody] ProjectInputInvestorAudit postedData)
    {
      return await projectsRepository.saveRawMaterialData(postedData);
    }

  }
}
