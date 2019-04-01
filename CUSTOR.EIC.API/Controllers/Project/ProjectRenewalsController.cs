using System;
using System.Collections.Generic;
using System.Data.SqlClient;
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
    // By Gebre
    [HttpGet("{id}")]
    public  IEnumerable<ProjectRenewal> GetProjectRenewalsByProjectId([FromRoute] int id)
    {
      var projectRenewal = context.ProjectRenewal
        .Where(p => p.ProjectId == id).OrderByDescending(x => x.ProjectRenewalId).AsEnumerable();
        int num = projectRenewal.Count();
      return projectRenewal;
      // && p.IsApproved == true
    }

    [HttpPost]
        public async Task<IActionResult> PostProject([FromBody] ProjectRenewal projectRenewal)
        {
            var editProjectRenewal = projectRenewal;
            //editProjectRenewal.RenewedFrom = DateTime.Now;
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
    public async Task<IActionResult> UpdateAsync([FromRoute] int id,[FromBody] ProjectRenewal projectRenewal)
      {
        var updated = context.ProjectRenewal.FirstOrDefault(t => t.ProjectRenewalId == id);
        updated.IsApproved =projectRenewal.IsApproved;
      updated.RenewalDate = DateTime.Now;
      updated.ApprovedDate = DateTime.Now;
        //updated.RenewedFrom = projectRenewal.RenewedFrom;
        //updated.RenewedTo = projectRenewal.RenewedTo;
          context.Entry(updated).State = EntityState.Modified;
      try
      {
        await context.SaveChangesAsync();
        return CreatedAtAction("GetProjectRenewals", new { id = projectRenewal.ProjectRenewalId }, updated);
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
