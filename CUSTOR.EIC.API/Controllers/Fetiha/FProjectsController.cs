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
    [HttpGet("getProjectAudit/{ProjectId}")]
    public async Task<ProjectAudit> ProjectById([FromRoute] int ProjectId)
    {

      return await projectsRepository.GetProfileByInvestorId(ProjectId);
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

    [HttpGet("getProjectRequirementAudit/{ProjectId}")]

    public async Task<ProjectRequirementAudit> getProjectRequirementAudit(int ProjectId)
    {
      return await projectsRepository.getProjectRequirementDetialAudit(ProjectId);
    }
    [HttpGet("getProjectRawMaterial/{ProjectId}")]

    public async Task<List<ProjectInput>> getProjectRawMaterial(int ProjectId)
    {
      return await projectsRepository.getProjectRawMaterial(ProjectId);
    }
    [HttpGet("getProjectCost/{ProjectId}")]

    public async Task<ProjectCost> getProjectCost(int ProjectId)
    {
      return await projectsRepository.getProjectCost(ProjectId);
    }

    [HttpGet("getProjectCostAudit/{ProjectId}")]
    public async Task<ProjectCostAudit> getProjectCostAudit(int ProjectId)
    {
      return await projectsRepository.getProjectCostAudit(ProjectId);
    }
    [HttpGet("getProjectEmployment/{ProjectId}")]
    public async Task<ProjectEmployment> getProjectEmployment(int ProjectId)
    {
      return await projectsRepository.getProjectEmployment(ProjectId);
    }


    [HttpGet("getProjectEmploymentAudit/{ProjectId}")]
    public async Task<ProjectEmploymentAudit> getProjectEmploymentAudit(int ProjectId)
    {
      return await projectsRepository.getProjectEmploymentAudit(ProjectId);
    }
    [HttpGet("getProjectSharePercent/{ProjectId}")]
    public async Task<List<ProjectNationalityComposition>> getProjectSharePercent(int ProjectId)
    {
      return await projectsRepository.getProjectSharePercent(ProjectId);
    }

    [HttpGet("getProjectSharePercentAudit/{projectCompositionId}")]
    public async Task<ProjectNationalityCompositionAudit> getProjectSharePercentAudit(int projectCompositionId)
    {
      return await projectsRepository.getProjectSharePercentAudit(projectCompositionId);
    }
    [HttpGet("getProjectOutPut/{ProjectId}")]
    public async Task<List<ProjectOutput>> getProjectOutPut(int ProjectId)
    {
      return await projectsRepository.getProjectOutPut(ProjectId);
    }

    [HttpGet("getProjectOutPutAudit/{ProjectOutputId}")]
    public async Task<ProjectOutputAudit> getProjectOutPutAudit(int ProjectOutputId)
    {
      return await projectsRepository.getProjectOutPutAudit(ProjectOutputId);
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


  }
}
