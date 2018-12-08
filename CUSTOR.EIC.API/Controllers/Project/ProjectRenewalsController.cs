using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CUSTOR.API.ExceptionFilter;
using CUSTOR.EICOnline.DAL.EntityLayer;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

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
            //if (!ModelState.IsValid)
            //{
            //  return BadRequest(ModelState);
            //}

            var editProjectRenewal = projectRenewal;
            //editProjectRenewal.ServiceApplicationId = projectRenewal.ServiceApplicationId;
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
    }
}