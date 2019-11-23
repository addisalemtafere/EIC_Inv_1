using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using CUSTOR.API.ExceptionFilter;
using CUSTOR.EICOnline.DAL.DataAccessLayer;
using CUSTOR.EICOnline.DAL.EntityLayer;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Hosting;
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
        private readonly IHostingEnvironment host;
        private readonly ProjectRenewalRepository RenewalRepository;

    public ProjectRenewalsController(ProjectRenewalRepository _RenewalRepository,ApplicationDbContext ctx, IHostingEnvironment _host)
        {
            context = ctx;
            host = _host;
            RenewalRepository = _RenewalRepository;
    }

    [HttpGet]
    public IEnumerable<ProjectRenewal> GetProjectRenewals()
    {
      return RenewalRepository.GetProjectRenewals();
      //return context.ProjectRenewal;
    }
    // By Gebre
    [HttpGet("{id}")]
    public IEnumerable<ProjectRenewal> GetProjectRenewalsById([FromRoute] int id)
    {
      return RenewalRepository.GetProjectRenewalsById(id);
      //var projectRenewal = context.ProjectRenewal
      //  .Where(p => p.ProjectId == id).OrderByDescending(x => x.ProjectRenewalId).AsEnumerable();
      //int num = projectRenewal.Count();
      //return projectRenewal;

    }
    [HttpGet("ServiceAppWithRenewal/{id}")]
    public ProjectRenewal GetServiceAppWithRenewal([FromRoute] int id)
    {
      return RenewalRepository.GetServiceAppWithRenewal(id);
      //var projectRenewal = context.ProjectRenewal
      //  .Where(p => p.ProjectId == id).OrderByDescending(x => x.ProjectRenewalId).AsEnumerable();
      //int num = projectRenewal.Count();
      //return projectRenewal;

    }
    [HttpGet("ByProjectId/{id}")]
    public async Task<List<ProjectRenewal>> GetProjectRenewalsByProjectIdAsync([FromRoute] int id)
    {
      return await RenewalRepository.GetProjectRenewalsByProjectIdAsync(id);
      //      List<ProjectRenewal> projectRenewal =await context.ProjectRenewal
      //  .Where(p => p.ProjectId == id).OrderByDescending(x => x.ProjectRenewalId).ToListAsync();
      //// check the date for renewal
      ////    projectRenewal[0].Remark = (DateTime.Compare((DateTime)(projectRenewal[0].RenewedTo), (DateTime.Now))).ToString();
      //// check the project status
      //var pro =  context.Project.FirstOrDefault(pid => pid.ProjectId == id);
      //try
      //{
      //  if(projectRenewal.Count != 0 && pro.ProjectStatus == 9) { 
      //  DateTime startDate = new DateTime(projectRenewal[0].RenewedTo.Year, projectRenewal[0].RenewedTo.Month, projectRenewal[0].RenewedTo.Day);
      //  DateTime endDate = DateTime.Now;
      //  var differ = (startDate - endDate).Days;
      //    if (differ <= 0)
      //    {
      //      projectRenewal[0].MajorProblems = "Valid";
      //      projectRenewal[0].ProjectStatus = pro.ProjectStatus;
      //    }
      //    else
      //    {
      //      projectRenewal[0].MajorProblems = "InValid";
      //      projectRenewal[0].ProjectStatus = pro.ProjectStatus;
      //    }
      //  }
      //  else
      //  {
      //    projectRenewal[0].ProjectStatus = pro.ProjectStatus;
      //  }
      //}
      //catch (Exception ex)
      //{
      //  throw new Exception(ex.Message);
      //}
      //      return projectRenewal;

    }

    [HttpPost]
        public async Task<ProjectRenewal> PostProject([FromBody] ProjectRenewal projectRenewal)
        {
      return  await RenewalRepository.PostProject(projectRenewal);
            //var editProjectRenewal = projectRenewal;
            ////editProjectRenewal.RenewedFrom = DateTime.Now;
            //editProjectRenewal.ProjectStatus = 9;
            //editProjectRenewal.ApprovedBy = 1;
            //editProjectRenewal.SiteId = 3;
            //editProjectRenewal.CreatedUserId = 1;
            //editProjectRenewal.RenewalDate = DateTime.Now;
            //editProjectRenewal.Remark = projectRenewal.Remark;
            //context.ProjectRenewal.Add(editProjectRenewal);
            //await context.SaveChangesAsync();
            ////update service application
            //        var sa = context.ServiceApplication.FirstOrDefault(r=>r.ServiceApplicationId == projectRenewal.ServiceApplicationId);
            //        sa.CurrentStep = 3;
            //        context.Entry(sa).State = EntityState.Modified;
            //        await context.SaveChangesAsync();
            //// end of update service application
            //return CreatedAtAction("GetProjectRenewals", new {id = projectRenewal.ProjectRenewalId}, projectRenewal);
        }
    [HttpPut("{id}")]
    public async Task<ProjectRenewal> UpdateAsync([FromRoute] int id,[FromBody] ProjectRenewal projectRenewal)
      {
      return await RenewalRepository.UpdateAsync(id, projectRenewal);
      //  var updated = context.ProjectRenewal.FirstOrDefault(t => t.ProjectRenewalId == id);
      //      updated.IsApproved =projectRenewal.IsApproved;
      //      //updated.RenewalDate = DateTime.Now;
      //      updated.ApprovedDate = DateTime.Now;
      //      updated.Remark = projectRenewal.Remark;
      //      context.Entry(updated).State = EntityState.Modified;
      //try
      //{
      //  await context.SaveChangesAsync();
      //  if (projectRenewal.IsApproved)
      //  {
      //    //update service application
      //    var sa = context.ServiceApplication.FirstOrDefault(r => r.ServiceApplicationId == projectRenewal.ServiceApplicationId);
      //    sa.CurrentStep = 5;
      //    context.Entry(sa).State = EntityState.Modified;
      //    await context.SaveChangesAsync();
      //    // end of update service application
      //  }
      //  return CreatedAtAction("GetProjectRenewals", new { id = projectRenewal.ProjectRenewalId }, updated);
      //}
      //catch (DbUpdateConcurrencyException)
      //{
      //  if (false)
      //    return NotFound();
      //  throw;
      //}
    }

  }
}
