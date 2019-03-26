using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CUSTOR.EICOnline.API.ViewModels.Bussiness;
using CUSTOR.EICOnline.DAL.DataAccessLayer.Bussiness;
using CUSTOR.EICOnline.DAL.EntityLayer;
using CUSTOR.EICOnline.DAL.EntityLayer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CUSTOR.EICOnline.API.Controllers.Bussiness
{
    [Produces("application/json")]
    [Route("api/BusinessBranch")]
    public class BusinessBranchController : Controller
    {
        private ApplicationDbContext context;
        public BusinessBranchController(ApplicationDbContext ctx)
        {
            context = ctx;
        }
        [HttpGet("RegistrationBranchByInvestorId/{InvestorId:int}")]
        public async Task<List<BussinessBranchVM>> GetRegistrationBranch(int InvestorId)
        {
           BusinessBranchRepository
            businessBranRepo = new BusinessBranchRepository(context);
            return await businessBranRepo.GetRecordsByinvestorId(InvestorId);
        }

        [HttpGet("BussinessBranchByInvestorId/{InvestorId:int}")]
        public async Task<List<BussinessBranchVM>> GetBusinessBranch(int InvestorId)
        {
            BusinessBranchRepository
             businessBranRepo = new BusinessBranchRepository(context);
            return await businessBranRepo.GetBussinessBranchById(InvestorId);
        }

        [HttpPost("Save")]
        public async Task<IActionResult> SaveBussiness([FromBody] CUSTOR.EICOnline.DAL.EntityLayer.Address BusinessBranch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                BusinessBranchRepository
           businessRepo = new BusinessBranchRepository(context);
                await businessRepo.SaveBussinessBranch(BusinessBranch);
            }
            catch (Exception ex)
            {

            }
            return CreatedAtAction("SaveBussiness", new { id = BusinessBranch.AddressId }, BusinessBranch);
        }

        [HttpPost("Delete")]
        public async Task<IActionResult> DeleteBussinessBranch([FromBody] CUSTOR.EICOnline.DAL.EntityLayer.Address BusinessBranch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                BusinessBranchRepository
           businessRepo = new BusinessBranchRepository(context);
                await businessRepo.DeleteRecord(BusinessBranch.AddressId);
            }
            catch (Exception ex)
            {

            }
            return CreatedAtAction("DeleteBussinessBranch", BusinessBranch);
        }


    }
}