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
        [HttpGet("RegistrationBranchByTin/{Tin:int}")]
        public async Task<List<BussinessBranchVM>> GetRegistrationBranch(string Tin)
        {
           BusinessBranchRepository
            businessBranRepo = new BusinessBranchRepository(context);
            return await businessBranRepo.GetRecordsByTin(Tin);
        }

        [HttpGet("BussinessBranchByTin/{Tin:int}")]
        public async Task<List<BussinessBranchVM>> GetBusinessBranch(string Tin)
        {
            BusinessBranchRepository
             businessBranRepo = new BusinessBranchRepository(context);
            return await businessBranRepo.GetBussinessBranchByTin(Tin);
        }

        [HttpPost("Save")]
        public async Task<IActionResult> SaveBussiness([FromBody] tblBusinessBranch BusinessBranch)
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
            return CreatedAtAction("SaveBussiness", new { id = BusinessBranch.ID }, BusinessBranch);
        }

        [HttpPost("Delete")]
        public async Task<IActionResult> DeleteBussinessBranch([FromBody] tblBusinessBranch BusinessBranch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                BusinessBranchRepository
           businessRepo = new BusinessBranchRepository(context);
                await businessRepo.DeleteRecord(BusinessBranch.MainGuid.ToString());
            }
            catch (Exception ex)
            {

            }
            return CreatedAtAction("DeleteBussinessBranch", BusinessBranch);
        }


    }
}