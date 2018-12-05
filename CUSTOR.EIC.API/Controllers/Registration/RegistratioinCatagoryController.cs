using CUSTOR.API.ExceptionFilter;
using CUSTOR.EICOnline.DAL.EntityLayer;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EIC.Investment.API.Controllers
{
    [ServiceFilter(typeof(ApiExceptionFilter))]
    [EnableCors("CorsPolicy")]
    [Produces("application/json")]
    public class RegistrationCatagoryController : Controller
    {
        private readonly ApplicationDbContext _context;
        public RegistrationCatagoryController(ApplicationDbContext context)
        {
            _context = context;
        }


        //[HttpGet]
        //[Route("api/GetRegistrationCatagory/{Tin}")]
        //public async Task<IActionResult> GetRegistrationCatagoryController([FromRoute] string Tin)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    var registrationcatagory = await _context.RegistrationCatagorys.
        //      Include(a => a.Tin).
        //      Include(a => a.MainGuid).
        //      Include(a => a.MajorCatagoryCode).
        //    FirstAsync(m => m.Tin == Tin);

        //    if (registrationcatagory == null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(registrationcatagory);
        //}


        //[HttpPost("api/registrationcatagory")]
        //public async Task<IActionResult> PostRegistraionCatagory([FromBody] RegistrationCatagory registrationCatagory)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }
        //    _context.RegistrationCatagorys.Add(registrationCatagory);
        //    await _context.SaveChangesAsync();
        //    return CreatedAtAction("PostRegistrationCatagory", new { Tin = registrationCatagory.Tin }, registrationCatagory);
        //}


        //// DELETE: api/RegistrationCatagory/5
        //[HttpDelete("api/DeleteRegistrationCatagory/{Tin}")]
        //public async Task<IActionResult> DeleteRegistration([FromRoute] string Tin)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    var registration = await _context.RegistrationCatagorys.SingleOrDefaultAsync(m => m.Tin == Tin);
        //    if (registration == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.RegistrationCatagorys.Remove(registration);
        //    await _context.SaveChangesAsync();

        //    return Ok(registration);
        //}


    }
}