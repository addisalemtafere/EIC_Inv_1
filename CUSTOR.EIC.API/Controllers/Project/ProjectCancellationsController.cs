using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CUSTOR.API.ExceptionFilter;
using CUSTOR.EICOnline.DAL.EntityLayer;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CUSTOR.EICOnline.API.Controllers.Project
{
    [ServiceFilter(typeof(ApiExceptionFilter))]
    [EnableCors("CorsPolicy")]
    [Produces("application/json")]
    [Route("api/ProjectCancellations")]
    public class ProjectCancellationsController : Controller
    {
        private readonly ApplicationDbContext _context;
        private  ApplicationDbContext context;

    public ProjectCancellationsController(ApplicationDbContext context)
        {
            _context = context;
        }


    // DELETE: api/ProjectCancellations/5
    [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProjectCancellation([FromRoute] int id)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var projectCancellation =
                await _context.ProjectCancellation.SingleOrDefaultAsync(m => m.ProjectCancellationId == id);
            if (projectCancellation == null) return NotFound();

            _context.ProjectCancellation.Remove(projectCancellation);
            await _context.SaveChangesAsync();

            return Ok(projectCancellation);
        }

        // GET: api/ProjectCancellations
        [HttpGet]
        public IEnumerable<ProjectCancellation> GetProjectCancellation()
        {
            return _context.ProjectCancellation;
        }

        // GET: api/ProjectCancellations/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProjectCancellation([FromRoute] int id)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var projectCancellation =
                await _context.ProjectCancellation.SingleOrDefaultAsync(m => m.ProjectCancellationId == id);

            if (projectCancellation == null) return NotFound();

            return Ok(projectCancellation);
        }

        // POST: api/ProjectCancellations
        [HttpPost]
        public async Task<IActionResult> PostProjectCancellation([FromBody] ProjectCancellation projectCancellation)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}
            var postProjectCancellation = projectCancellation;
            postProjectCancellation.CreatedUserId = 1;
            postProjectCancellation.ApprovedBy = 1;
            postProjectCancellation.CancellationType = 12;
            _context.ProjectCancellation.Add(postProjectCancellation);


            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProjectCancellation", new {id = postProjectCancellation.ProjectCancellationId},
                postProjectCancellation);
        }

        // PUT: api/ProjectCancellations/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProjectCancellationAsync([FromRoute] int id,
            [FromBody] ProjectCancellation projectCancellation)
        {

            var project = _context.ProjectCancellation.First(s => s.ProjectCancellationId== id);
            project.IsApproved = projectCancellation.IsApproved;
      project.ProjectId = projectCancellation.ProjectId;
            if (project.IsApproved == true)
            {
        var proStatus = _context.Project.First(e => e.ProjectId == project.ProjectId);
        proStatus.ProjectStatus=4;
        _context.Project.Update(proStatus);
        _context.SaveChanges();
        //_context.Entry(proStatus).State = EntityState.Modified;
      }
            project.CancellationDate = projectCancellation.CancellationDate;
            project.CancellationReason = projectCancellation.CancellationReason;
            _context.Entry(project).State = EntityState.Modified;
      try
      {
        await _context.SaveChangesAsync();



        //  return null;
        return CreatedAtAction("GetProjectCancellation", new { id = projectCancellation.ProjectCancellationId }, project);
    }
          catch (DbUpdateConcurrencyException)
          {
            if (false)
              return NotFound();
            throw;
          }
}


    private bool ProjectCancellationExists(int id)
        {
            return _context.ProjectCancellation.Any(e => e.ProjectCancellationId == id);
        }

    }
}
