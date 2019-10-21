using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CUSTOR.API.ExceptionFilter;
using CUSTOR.EICOnline.DAL.DataAccessLayer;
using CUSTOR.EICOnline.DAL.EntityLayer;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CUSTOR.EICOnline.API.Controllers.Project
{
  [ServiceFilter(typeof(ApiExceptionFilter))]
  [EnableCors("CorsPolicy")]
  [Produces("application/json")]
    [Route("api/ProjectSubstitutes")]
    public class ProjectSubstitutesController : Controller
    {
        private readonly ApplicationDbContext _context;
    public ApplicationDbContext context;
    private readonly IHostingEnvironment host;
    private readonly ProjectReplacementRepository ReplacementRepository;

    public ProjectSubstitutesController(ProjectReplacementRepository _ReplacementRepository, ApplicationDbContext ctx, IHostingEnvironment _host)
    {
      context = ctx;
      host = _host;
      ReplacementRepository = _ReplacementRepository;
    }

    //public ProjectSubstitutesController(ApplicationDbContext context)
    //    {
    //        _context = context;
    //    }

        // GET: api/ProjectSubstitutes
        [HttpGet]
        public IEnumerable<ProjectSubstitute> GetProjectSubstitute()
        {
          return ReplacementRepository.GetProjectSubstitute();
            //return _context.ProjectSubstitute;
        }

        // GET: api/ProjectSubstitutes/5
        [HttpGet("{id}")]
        public async Task<ProjectSubstitute> GetProjectSubstitute([FromRoute] int id)
        {
            return  await ReplacementRepository.GetProjectSubstitute(id);
            //if (!ModelState.IsValid) return BadRequest(ModelState);

            //var projectSubstitute =
            //    await _context.ProjectSubstitute.SingleOrDefaultAsync(m => m.ProjectSubstituteId == id);

            //if (projectSubstitute == null) return NotFound();

            //return Ok(projectSubstitute);
        }

        // PUT: api/ProjectSubstitutes/5
        [HttpPut("{id}")]
        public async Task<ProjectSubstitute> PutProjectSubstitute([FromRoute] int id,
            [FromBody] ProjectSubstitute projectSubstitute)
        {

      return await ReplacementRepository.PutProjectSubstitute(id, projectSubstitute); 
            //if (!ModelState.IsValid) return BadRequest(ModelState);
            //var project = _context.ProjectSubstitute.First(s => s.ProjectSubstituteId == id);
            //project.IsApproved = true;
            //_context.Entry(project).State = EntityState.Modified;
            //try
            //{
            //    await _context.SaveChangesAsync();
            //}
            //catch (DbUpdateConcurrencyException)
            //{
            //    if (!ProjectSubstituteExists(id))
            //        return NotFound();
            //    throw;
            //}

            //return NoContent();
        }

        // POST: api/ProjectSubstitutes
        [HttpPost]
        public async Task<ProjectSubstitute> PostProjectSubstitute([FromBody] ProjectSubstitute projectSubstitute)
        {
      return await ReplacementRepository.PostProjectSubstitute(projectSubstitute);
      //if (!ModelState.IsValid)
      //{
      //  return BadRequest(ModelState);
      //}
      //try { 
      //      var postProjectSubstitute = projectSubstitute;
      //      postProjectSubstitute.CreatedUserId = 1;
      //      postProjectSubstitute.IsActive = false;
      //      postProjectSubstitute.IsApproved = false;
      //      postProjectSubstitute.EventDatetime = DateTime.Now;
      //      _context.ProjectSubstitute.Add(postProjectSubstitute);
      //       await _context.SaveChangesAsync();
      //  //update service application
      //        var sa = _context.ServiceApplication.FirstOrDefault(r => r.ServiceApplicationId == projectSubstitute.ServiceApplicationId);
      //              sa.CurrentStep = 3;
      //             _context.Entry(sa).State = EntityState.Modified;
      //        await _context.SaveChangesAsync();
      //  // end of update service application
      //  return postProjectSubstitute;
      //}
      //catch(Exception ex)
      //{
      //  throw new Exception(ex.Message);
      //}
        }

        // DELETE: api/ProjectSubstitutes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProjectSubstitute([FromRoute] int id)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var projectSubstitute =
                await _context.ProjectSubstitute.SingleOrDefaultAsync(m => m.ProjectSubstituteId == id);
            if (projectSubstitute == null) return NotFound();

            _context.ProjectSubstitute.Remove(projectSubstitute);
            await _context.SaveChangesAsync();

            return Ok(projectSubstitute);
        }

        private bool ProjectSubstituteExists(int id)
        {
            return _context.ProjectSubstitute.Any(e => e.ProjectSubstituteId == id);
        }
    }
}
