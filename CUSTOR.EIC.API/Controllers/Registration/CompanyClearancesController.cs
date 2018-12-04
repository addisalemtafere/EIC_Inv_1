using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CUSTOR.API.ExceptionFilter;
using CUSTOR.EICOnline.DAL.EntityLayer;
using CUSTOR.EICOnline.DAL.EntityLayer.business;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CUSTOR.EICOnline.API.Controllers.Business
{
    [ServiceFilter(typeof(ApiExceptionFilter))]
    [EnableCors("CorsPolicy")]
    [Produces("application/json")]
    [Route("api/CompanyClearances")]
    public class CompanyClearancesController : Controller
    {
        private readonly ApplicationDbContext _context;
        public CompanyClearancesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCompanyNames([FromRoute] int id)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var capitalRegistration =
                await _context.CompanyClearances.SingleOrDefaultAsync(m => m.CompanyClearanceId == id);

            if (capitalRegistration == null) return NotFound();

            return Ok(capitalRegistration);
        }


        [HttpGet("getCompanyClearanceByInvestorId/{id}")]
        public async Task<CompanyClearance> getCompanyClearanceByInvestorId([FromRoute] int id)
        {
            var companyClearance = await _context.CompanyClearances.FirstOrDefaultAsync(m => m.InvestorId == id);
            return companyClearance;
        }

        // POST: api/CompanyClearances
        [HttpPost]
        public async Task<IActionResult> PostCompanyClearance([FromBody] CompanyClearance companyClearance)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            var editedCompanyClearance = companyClearance;
            editedCompanyClearance.IsActive = true;
            companyClearance.IsDeleted = false;
            companyClearance.ObjectId = new System.Guid();
            companyClearance.CreatedBy = "Aklile";
            companyClearance.CreatedDate = DateTime.Today;
            companyClearance.UpdatedBy = "Aklile";
            companyClearance.UpdatedDate = DateTime.Today;

            _context.CompanyClearances.Add(editedCompanyClearance);
            await _context.SaveChangesAsync();

            return CreatedAtAction("getCompanyClearanceByInvestorId", new { id = editedCompanyClearance.CompanyClearanceId },
                editedCompanyClearance);
        }


        // PUT: api/CompanyClearances/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCompanyClearance([FromRoute] int id,
            [FromBody] CompanyClearance companyClearance)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (id != companyClearance.CompanyClearanceId)
                return BadRequest();
            _context.Entry(companyClearance).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return CreatedAtAction("getCompanyClearanceByInvestorId", companyClearance);
        }



        [HttpPut("SaveFinalApprovedName")]
        public async Task<IActionResult> SaveFinalApprovedName([FromBody] CompanyClearance companyClearance)
        {
            CompanyClearance objCompanyClearance = await _context.CompanyClearances.SingleOrDefaultAsync(param => param.InvestorId == companyClearance.InvestorId);
            await _context.SaveChangesAsync();

            string CompnayNameAmharic = "";
            string CompnayNameEnglish = "";
            if (companyClearance.IsCompanyNameOneApproved)
            {
                CompnayNameAmharic = companyClearance.CompanyNameOneAmharic;
                CompnayNameEnglish = companyClearance.CompanyNameOneEnglish;
            }
            if (companyClearance.IsCompanyNameTwoApproved)
            {
                CompnayNameAmharic = companyClearance.CompanyNameTwoAmharic;
                CompnayNameEnglish = companyClearance.CompanyNameTwoEnglish;
            }
            if (companyClearance.IsCompanyNameThreeApproved)
            {
                CompnayNameAmharic = companyClearance.CompanyNameThreeAmharic;
                CompnayNameEnglish = companyClearance.CompanyNameThreeEnglish;
            }           
            await _context.SaveChangesAsync();


            Investor inv = await _context.Investors.SingleOrDefaultAsync(param => param.InvestorId == companyClearance.InvestorId);
            inv.FirstName = CompnayNameAmharic;
            inv.FirstNameEng = CompnayNameEnglish;
            await _context.SaveChangesAsync();

            return CreatedAtAction("getCompanyClearanceByInvestorId", companyClearance);
        }



        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}