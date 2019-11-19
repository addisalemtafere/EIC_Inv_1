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
namespace CUSTOR.EICOnline.API.Controllers
{
  [Produces("application/json")]
  [Route("api/FInvestor")]
  [EnableCors("CorsPolicy")]
  //[ApiController]
  public class FInvesorController : Controller
  {
    private readonly FInvestorRepository investorRepository;
    private readonly ApplicationDbContext _context;
    public FInvesorController(ApplicationDbContext context, FInvestorRepository _investorRepository) {
      _context = context;
      investorRepository = _investorRepository;
    }
    [HttpGet("ProfileByInvestorId/{InvestorId}")]
    public async Task<InvestorAddressDTO> ProfileByInvestorId([FromRoute] int InvestorId)
    {

      return await investorRepository.GetProfileByInvestorId(InvestorId);
    }

    [HttpGet("ProfileAuditByInvestorId/{InvestorId}")]
    public async Task<InvestorAuditDTO> ProfileAuditByInvestorId([FromRoute] int InvestorId)
    {

      return await investorRepository.GetProfileAuditByInvestorId(InvestorId);
    }

    [HttpPost("SaveProfile")]
    public async Task<InvestorAuditDTO> SaveProfile([FromBody] InvestorAuditDTO postedProfile)
    {
      return await investorRepository.SaveProfileWithServiceApplication(postedProfile);
    }

    [HttpPut("UpdateProfile")]
    public async Task<InvestorAuditDTO> UpdateProfile([FromBody] InvestorAuditDTO postedProfile)
    {
      return await investorRepository.UpdateProfileWithServiceApplication(postedProfile);
    }

    //[HttpGet("ManagerListAudit/{InvestorId}")]
    //public Task<List<AssociateAuditDTO>> GetManagersListFromAuditByInvestorID([FromRoute] int InvestorId)
    //{
    //  return associateRepository.GetManagersFromAudit(InvestorId);
    //}

    //[HttpGet("ManagersList/{InvestorId}")]
    //public Task<List<AssociateListDTO>> GetManagersListByInvestorID([FromRoute] int InvestorId)
    //{
    //  return associateRepository.GetManagers(InvestorId);
    //}

    //[HttpGet("ManagerByAssociateId/{AssociateId}")]
    //public Task<AssociateAddressDTO> GetManagerByAssociateId([FromRoute] int AssociateId)
    //{
    //  return associateRepository.GetAssociate(AssociateId);
    //}

    //[HttpGet("ManagerAuditByAssociateId/{AssociateId}")]
    //public Task<AssociateAuditAddressDTO> GetManagerAuditByAssociateId([FromRoute] int AssociateId)
    //{
    //  return associateRepository.GetAssociateAudit(AssociateId);
    //}


  }
}
