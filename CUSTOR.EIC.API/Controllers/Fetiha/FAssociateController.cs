using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CUSTOR.EICOnline.DAL;
using CUSTOR.EICOnline.DAL.EntityLayer;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CUSTOR.EICOnline.API.Controllers
{
  [Produces("application/json")]
  [Route("api/FAssociate")]
  [EnableCors("CorsPolicy")]
  //[ApiController]
  public class FAssociateController : Controller
  {
    private readonly FAssociateRepository associateRepository;
    private readonly ApplicationDbContext _context;
    public FAssociateController(ApplicationDbContext context, FAssociateRepository associate) {
      _context = context;
      associateRepository = associate;
    }
    [HttpGet("ManagerByInvestorId/{InvestorId}")]
    public async Task<Associate> ManagerByInvestorId([FromRoute] int InvestorId)
    {

      return await associateRepository.GetManagerByIvestorId(InvestorId);
    }

    [HttpGet("ManagerAuditByInvestorId/{InvestorId}")]
    public async Task<AssociateAudit> ManagerAuditByInvestorId([FromRoute] int InvestorId)
    {

      return await associateRepository.GetManagerAuditByIvestorId(InvestorId);
    }

    [HttpGet("ManagerListAudit/{InvestorId}")]
    public Task<List<AssociateAuditDTO>> GetManagersListFromAuditByInvestorID([FromRoute] int InvestorId)
    {
      return associateRepository.GetManagersFromAudit(InvestorId);
    }

    [HttpGet("ManagersList/{InvestorId}")]
    public Task<List<AssociateListDTO>> GetManagersListByInvestorID([FromRoute] int InvestorId)
    {
      return associateRepository.GetManagers(InvestorId);
    }

    [HttpGet("ManagerByAssociateId/{AssociateId}")]
    public Task<AssociateAddressDTO> GetManagerByAssociateId([FromRoute] int AssociateId)
    {
      return associateRepository.GetAssociate(AssociateId);
    }

    [HttpGet("ManagerAuditByAssociateId/{AssociateId}")]
    public Task<AssociateAuditAddressDTO> GetManagerAuditByAssociateId([FromRoute] int AssociateId)
    {
      return associateRepository.GetAssociateAudit(AssociateId);
    }


}
}
