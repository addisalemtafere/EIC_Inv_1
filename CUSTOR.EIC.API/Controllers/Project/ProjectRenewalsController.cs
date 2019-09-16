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
    public IEnumerable<ProjectRenewal> GetProjectRenewalsById([FromRoute] int id)
    {
      var projectRenewal = context.ProjectRenewal
        .Where(p => p.ProjectId == id).OrderByDescending(x => x.ProjectRenewalId).AsEnumerable();
      int num = projectRenewal.Count();
      return projectRenewal;

    }
    [HttpGet("ByProjectId/{id}")]
    public async Task<List<ProjectRenewal>> GetProjectRenewalsByProjectIdAsync([FromRoute] int id)
    {
            List<ProjectRenewal> projectRenewal =await context.ProjectRenewal
        .Where(p => p.ProjectId == id).OrderByDescending(x => x.ProjectRenewalId).ToListAsync();
      // check the date for renewal
      //    projectRenewal[0].Remark = (DateTime.Compare((DateTime)(projectRenewal[0].RenewedTo), (DateTime.Now))).ToString();
      // check the project status
      var pro =  context.Project.FirstOrDefault(pid => pid.ProjectId == id);
      try
      {
        if(projectRenewal.Count != 0 && pro.ProjectStatus == 9) { 
        DateTime startDate = new DateTime(projectRenewal[0].RenewedTo.Year, projectRenewal[0].RenewedTo.Month, projectRenewal[0].RenewedTo.Day);
        DateTime endDate = DateTime.Now;
        var differ = (startDate - endDate).Days;
          if (differ <= 0)
          {
            projectRenewal[0].MajorProblems = "Valid";
            projectRenewal[0].ProjectStatus = pro.ProjectStatus;
          }
          else
          {
            projectRenewal[0].MajorProblems = "InValid";
            projectRenewal[0].ProjectStatus = pro.ProjectStatus;
          }
        }
        else
        {
          projectRenewal[0].ProjectStatus = pro.ProjectStatus;
        }
      }
      catch (Exception ex)
      {
        throw new Exception(ex.Message);
      }
            return projectRenewal;

    }

    [HttpPost]
        public async Task<IActionResult> PostProject([FromBody] ProjectRenewal projectRenewal)
        {
            var editProjectRenewal = projectRenewal;
            //editProjectRenewal.RenewedFrom = DateTime.Now;
            editProjectRenewal.ProjectStatus = 9;
            editProjectRenewal.ApprovedBy = 1;
            editProjectRenewal.SiteId = 3;
            editProjectRenewal.CreatedUserId = 1;
            editProjectRenewal.ApprovedDate = DateTime.Now;
            editProjectRenewal.Remark = projectRenewal.Remark;
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
            updated.Remark = projectRenewal.Remark;
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
