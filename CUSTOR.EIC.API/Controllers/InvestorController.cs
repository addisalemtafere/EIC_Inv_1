using CUSTOR.API.ExceptionFilter;
using CUSTOR.EICOnline.DAL;
using CUSTOR.EICOnline.DAL.DataAccessLayer.dto;
using CUSTOR.EICOnline.DAL.EntityLayer;
using IdentityServer4.AccessTokenValidation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CUSTOR.API.ModelValidationAttribute;
using Microsoft.AspNetCore.Identity;
using CUSTOR.Security;
using CUSTOR.EICOnline.DAL.Enum;

namespace EICOnline.Controllers
{
  //[Authorize(AuthenticationSchemes = IdentityServerAuthenticationDefaults.AuthenticationScheme)]
  [ServiceFilter(typeof(ApiExceptionFilter), Order = 2)]
  [EnableCors("CorsPolicy")]
  [ServiceFilter(typeof(ModelValidationAttribute), Order = 1)]
  public class InvestorController : Controller
  {
    private readonly ApplicationDbContext context;
    private readonly InvestorRepository InvestorRepo;
    private RegistrationCatagoryRepository regCatagoryRepo;
    private IAccountManager accountManager;

    public InvestorController(ApplicationDbContext ctx, IAccountManager accManager, InvestorRepository investorRepo,
      RegistrationCatagoryRepository RegCatagoryRepo)
    {
      context = ctx;
      InvestorRepo = investorRepo;
      regCatagoryRepo = RegCatagoryRepo;
      accountManager = accManager;
    }

    [HttpGet]
    [Route("api/throw")]
    public object Throw()
    {
      throw new InvalidOperationException("This is an unhandled exception");
    }

    [HttpGet]
    [Route("api/investors")]
    //[Authorize(Authorization.Policies.ViewAllInvestorsPolicy)]
    public async Task<IEnumerable<Investor>> GetInvestors(int page = -1, int pageSize = 10)
    {
      //throw new ApiException("Model binding failed.");
      return await InvestorRepo.GetAllInvestors(page, pageSize);
    }

    [HttpGet("api/investor/{id:int}")]
    public async Task<InvestorDTO> GetInvestor(int id)
    {
      return await InvestorRepo.GetInvestor(id);
    }

    [HttpGet("api/investorAudit/{id:int}")]
    public async Task<InvestorAuditDTO> GetInvestorAudit(int id)
    {
      return await InvestorRepo.GetInvestorAudit(id);
    }




    [HttpGet("api/InvestorByUserId/{id}")]
    public async Task<IEnumerable<Investor>> GetInvestorByUserId(string id)
    {
      return await InvestorRepo.GetRecordByUserId(id);
    }

    [HttpGet("api/InvestorByTIN/{id}")]
    public async Task<IEnumerable<Investor>> GetInvestorByTIN(string id)
    {
      return await InvestorRepo.GetRecordByTIN(id);
    }

    [HttpPost("api/SearchInvestor")]
    public async Task<IEnumerable<Investor>> GetSearchedInvestor([FromBody] SearchInvestorDto searchInvestorDto)
    {
      return await InvestorRepo.FindInvestor(searchInvestorDto);
    }


    [HttpPost("api/investor")]
    public async Task<IActionResult> SaveInvestor([FromBody] InvestorDTO postedInvestor)
    {
      bool isUpdate = (postedInvestor.InvestorId > 0);
      if (!ModelState.IsValid)
        throw new ApiException("Model binding failed.", 500);

      ApplicationUser appUser = await accountManager.GetUserByUserNameAsync(postedInvestor.UserName);
      // to-do check if appUser is valid
      InvestorDTO inv = InvestorRepo.SaveInvestor(postedInvestor, appUser);

      return CreatedAtAction("GetInvestor", inv);
    }


    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteInvestor(int id)
    {
      if (!await InvestorRepo.DeleteInvestor(id))
        throw new ApiException("Record could not be deleted");
      return Ok();
    }
  }
}
