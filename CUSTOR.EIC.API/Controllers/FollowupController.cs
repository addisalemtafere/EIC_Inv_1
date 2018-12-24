using System;
using System.Collections.Generic;
using System.Linq;
using CUSTOR.EICOnline.DAL.EntityLayer;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
namespace CUSTOR.EICOnline.API.Controllers
{
	[Route("api/followup")]
	[Produces("application/json")]
//	[EnableCors("CorsPolicy")]
    public class FollowupController : Controller
    {
		private readonly ApplicationDbContext _context;

		// initiate database context
		public FollowupController(ApplicationDbContext context)
		{
			_context = context;
		}
	    
	    [HttpGet]
	    public IEnumerable<Followup>  GetAll()
	    {
		    return _context.Followups.ToList();
	    }

		[HttpGet("{id}")]
		public IActionResult GetById(long id)
		{
			// filter contact records by contact id
			var item = _context.Followups.FirstOrDefault(t => t.Id == id);
			if (item == null)
			{
				return NotFound();
			}
			return new ObjectResult(item);
		}

		[HttpPost]
		//[Route("addContact")]
		public IActionResult saveFollowup([FromBody] Followup followup)
		{
			followup.EventDateTime=DateTime.Now;
//			followup.ServiceId = 2;
//			followup.CreatedUserId=this.
			_context.Followups.Add(followup);
			_context.SaveChanges();

			return Ok(new { message = "Contact is added successfully." });
		}

	    [HttpDelete("{id}")]
//	    [Route("delete/followup")]
	    public IActionResult Delete(long id)
	    {
		    var contact = _context.Followups.FirstOrDefault(t => t.Id == id);
		    if (contact == null)
		    {
			    return NotFound();
		    }

		    _context.Followups.Remove(contact);
		    _context.SaveChanges();
		    return Ok( new { message= "Follow Up is deleted successfully."});
	    } 
	}
}