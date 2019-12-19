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
  [Route("api/FAfterCare")]
  [EnableCors("CorsPolicy")]
  //[ApiController]
  public class FAfterCareController : Controller
  {
    private readonly FAfterCareRepository afterCareRepository;
    private readonly ApplicationDbContext _context;
    public FAfterCareController(ApplicationDbContext context, FAfterCareRepository _afterCarRepository)
    {
      _context = context;
      afterCareRepository = _afterCarRepository;
    }
    [HttpGet("getPermitList/{Id}")]
    public async Task<List<ProjectListDTO>> ProjectById([FromRoute] int Id)
    {
      return await afterCareRepository.GetProjectsById(Id);
    }

    [HttpGet("getEmploymentList/{ProjectId}")]
    public async Task<List<ProjectEmploymentAudit>> EmploymentListProjectById([FromRoute] int ProjectId)
    {
      return await afterCareRepository.GetEmploymentListByProjectId(ProjectId);
    }
    [HttpGet("getProductList/{ProjectId}")]
    public async Task<List<ProjectOutputAudit>> ProductListProjectById([FromRoute] int ProjectId)
    {
      return await afterCareRepository.GetProductListByProjectId(ProjectId);
    }
    [HttpGet("getRequirementList/{ProjectId}")]
    public async Task<List<ProjectRequirementAudit>> RequirmentListProjectById([FromRoute] int ProjectId)
    {
      return await afterCareRepository.GetRequirmentListByProjectId(ProjectId);
    }
    [HttpGet("getCostList/{ProjectId}")]
    public async Task<List<ProjectCostAudit>> CostListProjectById([FromRoute] int ProjectId)
    {
      return await afterCareRepository.GetCostListByProjectId(ProjectId);
    }


    [HttpGet("getEmploymentOriginalData/{ProjectId}")]
    public async Task<ProjectEmployment> getEmploymentOriginalData([FromRoute] int ProjectId)
    {
      return await afterCareRepository.GetEmploymentByProjectId(ProjectId);
    }
    [HttpGet("getRequirementOriginalData/{ProjectId}")]
    public async Task<ProjectRequirement> getRequirementOriginalData([FromRoute] int ProjectId)
    {
      return await afterCareRepository.GetRequirementByProjectId(ProjectId);
    }
    [HttpGet("getEmploymentData/{EmploymentId}")]
    public async Task<ProjectEmploymentAudit> EmploymentDataById([FromRoute] int EmploymentId)
    {
      return await afterCareRepository.GetEmploymentDataById(EmploymentId);
    }
    [HttpGet("getCostData/{CostId}")]
    public async Task<ProjectCostAudit> CostDataById([FromRoute] int CostId)
    {
      return await afterCareRepository.GetCostDataById(CostId);
    }
    [HttpGet("getProductOriginalData/{ProjectId}")]
    public async Task<List<ProjectOutput>> getProductOriginalData([FromRoute] int ProjectId)
    {
      return await afterCareRepository.GetInputOutPutById(ProjectId);
    }
    [HttpGet("getCostOriginalData/{ProjectId}")]
    public async Task<List<ProjectCost>> getCostOriginalData([FromRoute] int ProjectId)
    {
      return await afterCareRepository.GetCostById(ProjectId);
    }
    [HttpGet("getProductData/{InputOutPutId}")]
    public async Task<ProjectOutputAudit> getProductData([FromRoute] int InputOutPutId)
    {
      return await afterCareRepository.GetInputOutPutAuditById(InputOutPutId);
    }
    [HttpGet("getRequirementData/{ProjectRequirementId}")]
    public async Task<ProjectRequirementAudit> getRequirementData([FromRoute] int ProjectRequirementId)
    {
      return await afterCareRepository.GetRequirementDataAuditById(ProjectRequirementId);
    }

    [HttpPut("updateEmploymentData")]
    public async Task<ProjectEmploymentAudit> EmploymentDataById([FromBody] ProjectEmploymentAudit postedData)
    {
      return await afterCareRepository.updateEmploymentData(postedData);
    }
    [HttpPost("saveEmploymentData")]
    public async Task<ProjectEmploymentAudit> SaveEmploymentData([FromBody] ProjectEmploymentAudit postedData)
    {
      return await afterCareRepository.saveEmploymentData(postedData);
    }
    [HttpPut("updateProductData")]
    public async Task<ProjectOutputAudit> UpdateProductDataById([FromBody] ProjectOutputAudit postedData)
    {
      return await afterCareRepository.updateProductData(postedData);
    }
    [HttpPost("saveProductData")]
    public async Task<ProjectOutputAudit> saveProductData([FromBody] ProjectOutputAudit postedData)
    {
      return await afterCareRepository.saveProductData(postedData);
    }

    [HttpPut("updateRequirementData")]
    public async Task<ProjectRequirementAudit> UpdateRequirementDataById([FromBody] ProjectRequirementAudit postedData)
    {
      return await afterCareRepository.updateRequirementData(postedData);
    }
    [HttpPost("saveRequirementData")]
    public async Task<ProjectRequirementAudit> saveRequirementData([FromBody] ProjectRequirementAudit postedData)
    {
      return await afterCareRepository.saveRequirementData(postedData);
    }
    [HttpPut("updateCostData")]
    public async Task<ProjectCostAudit> UpdateCostDataById([FromBody] ProjectCostAudit postedData)
    {
      return await afterCareRepository.updateCostData(postedData);
    }
    [HttpPost("saveCostData")]
    public async Task<ProjectCostAudit> saveCostData([FromBody] ProjectCostAudit postedData)
    {
      return await afterCareRepository.saveCostData(postedData);
    }


  }
}
