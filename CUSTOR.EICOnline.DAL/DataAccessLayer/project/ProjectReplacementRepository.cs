using CUSTOR.EICOnline.DAL.EntityLayer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CUSTOR.EICOnline.DAL.DataAccessLayer {
    public class ProjectReplacementRepository
    {
        ApplicationDbContext context;
        //IMapper mapper;
        //BusinessMainRepo _businessMainRepo;
        public ProjectReplacementRepository(ApplicationDbContext _context)
        {
            context = _context;
        }
        public IEnumerable<ProjectSubstitute> GetProjectSubstitute()
        {
            return context.ProjectSubstitute;
        }
        public async Task<ProjectSubstitute> GetProjectSubstitute(int id)
        {

            var projectSubstitute =
                await context.ProjectSubstitute.SingleOrDefaultAsync(m => m.ProjectSubstituteId == id);
            return projectSubstitute;
        }
        //public async Task<List<ProjectRenewal>> GetProjectRenewalsByProjectIdAsync(int id)
        //{
        //    List<ProjectRenewal> projectRenewal = await context.ProjectRenewal
        //     .Where(p => p.ProjectId == id).OrderByDescending(x => x.ProjectRenewalId).ToListAsync();
        //    // check the date for renewal
        //    //    projectRenewal[0].Remark = (DateTime.Compare((DateTime)(projectRenewal[0].RenewedTo), (DateTime.Now))).ToString();
        //    // check the project status
        //    var pro = context.Project.FirstOrDefault(pid => pid.ProjectId == id);
        //    try
        //    {
        //        if (projectRenewal.Count != 0 && pro.ProjectStatus == 9)
        //        {
        //            DateTime startDate = new DateTime(projectRenewal[0].RenewedTo.Year, projectRenewal[0].RenewedTo.Month, projectRenewal[0].RenewedTo.Day);
        //            DateTime endDate = DateTime.Now;
        //            var differ = (startDate - endDate).Days;
        //            if (differ <= 0)
        //            {
        //                projectRenewal[0].MajorProblems = "Valid";
        //                projectRenewal[0].ProjectStatus = pro.ProjectStatus;
        //            }
        //            else
        //            {
        //                projectRenewal[0].MajorProblems = "InValid";
        //                projectRenewal[0].ProjectStatus = pro.ProjectStatus;
        //            }
        //        }
        //        else
        //        {
        //            projectRenewal[0].ProjectStatus = pro.ProjectStatus;
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        throw new Exception(ex.Message);
        //    }
        //    return projectRenewal;
        //}
        public async Task<ProjectSubstitute> PostProjectSubstitute([FromBody] ProjectSubstitute projectSubstitute)
        {
            try
            {
                var postProjectSubstitute = projectSubstitute;
                postProjectSubstitute.CreatedUserId = 1;
                postProjectSubstitute.IsActive = false;
                postProjectSubstitute.IsApproved = false;
                postProjectSubstitute.EventDatetime = DateTime.Now;
                context.ProjectSubstitute.Add(postProjectSubstitute);
                await context.SaveChangesAsync();
                //update service application
                var sa = context.ServiceApplication.FirstOrDefault(r => r.ServiceApplicationId == projectSubstitute.ServiceApplicationId);
                sa.CurrentStep = 3;
                context.Entry(sa).State = EntityState.Modified;
                await context.SaveChangesAsync();
                // end of update service application
                return postProjectSubstitute;
            }
             
            catch (Exception ex)
            {
                string s = ex.Message;
                throw new Exception(ex.InnerException.ToString());
            }
        }
        public async Task<ProjectSubstitute> PutProjectSubstitute(int id, ProjectSubstitute projectSubstitute)
        {
            //if (id != projectSubstitute.ProjectSubstituteId) return BadRequest();
            var project = context.ProjectSubstitute.First(s => s.ProjectSubstituteId == id);
            project.IsApproved = true;
            context.Entry(project).State = EntityState.Modified;
            try
            {
                await context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            return project;
        }
    }

}
