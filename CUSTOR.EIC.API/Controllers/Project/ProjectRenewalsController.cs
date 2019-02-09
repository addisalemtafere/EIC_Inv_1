using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CUSTOR.API.ExceptionFilter;
using CUSTOR.EICOnline.DAL.EntityLayer;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CUSTOR.EICOnline.API.Controllers
{
  [ServiceFilter(typeof(ApiExceptionFilter))]
  [EnableCors("CorsPolicy")]
  [Produces("application/json")]
  [Route("api/ProjectRenewals")]
  public class ProjectRenewalsController : Controller
  {
    public ApplicationDbContext context;

    public ProjectRenewalsController(ApplicationDbContext ctx)
    {
      context = ctx;
    }

    [HttpGet]
    public IEnumerable<ProjectRenewal> GetProjectRenewals()
    {
      return context.ProjectRenewal;
    }

    [HttpPost]
    public async Task<IActionResult> PostProject([FromBody] ProjectRenewal projectRenewal)
    {
      var editProjectRenewal = projectRenewal;
      editProjectRenewal.ProjectStatus = 1;
      editProjectRenewal.ApprovedBy = 1;
      editProjectRenewal.SiteId = 3;
      editProjectRenewal.CreatedUserId = 1;
      editProjectRenewal.ApprovedDate = DateTime.Now;
      await context.SaveChangesAsync();
      context.ProjectRenewal.Add(editProjectRenewal);
      await context.SaveChangesAsync();
      return CreatedAtAction("GetProjectRenewals", new {id = projectRenewal.ProjectRenewalId}, projectRenewal);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateAsync([FromRoute] int id, [FromBody] ProjectRenewal projectRenewal)
    {
      var updated = context.ProjectRenewal.FirstOrDefault(t => t.ProjectRenewalId == id);
      updated.IsApproved = projectRenewal.IsApproved;
      updated.RenewedFrom = projectRenewal.RenewedFrom;
      updated.RenewedTo = projectRenewal.RenewedTo;
      context.Entry(updated).State = EntityState.Modified;
      try
      {
        await context.SaveChangesAsync();
        return CreatedAtAction("GetProjectRenewals", new {id = projectRenewal.ProjectRenewalId}, updated);
      }
      catch (DbUpdateConcurrencyException)
      {
        if (false)
          return NotFound();
        throw;
      }
    }
  }
}
