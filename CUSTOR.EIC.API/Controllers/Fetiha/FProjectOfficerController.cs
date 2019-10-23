using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CUSTOR.EICOnline.DAL;
using CUSTOR.EICOnline.DAL.DataAccessLayer.Fetiha;
using CUSTOR.EICOnline.DAL.EntityLayer;
using CUSTOR.EICOnline.DAL.EntityLayer.Fetiha;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CUSTOR.EICOnline.API.Controllers
{
  [Produces("application/json")]
  [Route("api/FProjectOfficer")]
  [EnableCors("CorsPolicy")]
  //[ApiController]
  public class FProjectOfficerController : Controller
  {
    private readonly FProjectOfficerRepository projectOfficerRepository;
    private readonly ApplicationDbContext _context;
    public FProjectOfficerController(ApplicationDbContext context, FProjectOfficerRepository project) {
      _context = context;
      projectOfficerRepository = project;
    }

    [HttpPut("approveProjectProfileData")]
    public async Task<ProjectAddressDTO> updateProjectProfileData([FromBody] ProjectAddressDTO postedProjectProfile)
    {
      return await projectOfficerRepository.approveProjectProfileData(postedProjectProfile);
    }
    [HttpPut("approveProjectInputData")]
    public async Task<ProjectRequirementAudit> updateProjectInputData([FromBody] ProjectRequirementAudit postedProjectInput)
    {
      return await projectOfficerRepository.approveProjectInputData(postedProjectInput);
    }
    [HttpPut("approveProjectCostData")]
    public async Task<ProjectCostAudit> updateProjectCostData([FromBody] ProjectCostAudit postedProjectInput)
    {
      return await projectOfficerRepository.approveProjectCostData(postedProjectInput);
    }

    [HttpPut("approveProjectEmployementData")]
    public async Task<ProjectEmploymentAudit> updateProjectEmploymentData([FromBody] ProjectEmploymentAudit postedProjectInput)
    {
      return await projectOfficerRepository.approveProjectEmployementData(postedProjectInput);
    }
    [HttpGet("approveProjectRawMaterialData/{projectId}")]
    public async Task<List<ProjectInputAudit>> updateProjectRawMaterialData(int projectId)
    {
      return await projectOfficerRepository.approveProjectRawMaterialData(projectId);
    }
    [HttpGet("approveProjectShareData/{projectId}")]
    public async Task<List<ProjectInputAudit>> updateProjectShareData(int projectId)
    {
      return await projectOfficerRepository.approveProjectShareData(projectId);
    }
    [HttpGet("approveProjectOutPutData/{projectId}")]
    public async Task<List<ProjectOutput>> updateProjectOutPutData(int projectId)
    {
      return await projectOfficerRepository.approveProjectOutPutData(projectId);
    }
    

  }
}
