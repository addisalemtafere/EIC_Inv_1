using CUSTOR.EICOnline.DAL.EntityLayer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CUSTOR.EICOnline.DAL.DataAccessLayer {
    public class ProjectRenewalRepository
    {
        ApplicationDbContext context;
        //IMapper mapper;
        //BusinessMainRepo _businessMainRepo;
        public ProjectRenewalRepository(ApplicationDbContext _context)
        {
            context = _context;
        }
        public IEnumerable<ProjectRenewal> GetProjectRenewals()
        {
            return context.ProjectRenewal;
        }
        public IEnumerable<ProjectRenewal> GetProjectRenewalsById(int id)
        {
            try
            {
                var projectRenewal = context.ProjectRenewal
                  .Where(p => p.ProjectId == id).OrderByDescending(x => x.ProjectRenewalId).AsEnumerable();
                int num = projectRenewal.Count();
                return projectRenewal;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        public async Task<List<ProjectRenewal>> GetProjectRenewalsByProjectIdAsync(int id)
        {
            List<ProjectRenewal> projectRenewal = await context.ProjectRenewal
             .Where(p => p.ProjectId == id).OrderByDescending(x => x.ProjectRenewalId).ToListAsync();
            // check the date for renewal
            //    projectRenewal[0].Remark = (DateTime.Compare((DateTime)(projectRenewal[0].RenewedTo), (DateTime.Now))).ToString();
            // check the project status
            var pro = context.Project.FirstOrDefault(pid => pid.ProjectId == id);
            try
            {
                if (projectRenewal.Count != 0 && pro.ProjectStatus == 9)
                {
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
        public async Task<ProjectRenewal> PostProject(ProjectRenewal projectRenewal)
        {
            var editProjectRenewal = projectRenewal;
            editProjectRenewal.ProjectStatus = 9;
            editProjectRenewal.ApprovedBy = 1;
            editProjectRenewal.SiteId = 3;
            editProjectRenewal.CreatedUserId = 1;
            editProjectRenewal.RenewalDate = DateTime.Now;
            editProjectRenewal.Remark = projectRenewal.Remark;
            context.ProjectRenewal.Add(editProjectRenewal);
            await context.SaveChangesAsync();
            //update service application
            var sa = context.ServiceApplication.FirstOrDefault(r => r.ServiceApplicationId == projectRenewal.ServiceApplicationId);
            sa.CurrentStep = 3;
            context.Entry(sa).State = EntityState.Modified;
            await context.SaveChangesAsync();
            // end of update service application
            return projectRenewal;
        }
        public async Task<ProjectRenewal> UpdateAsync(int id, ProjectRenewal projectRenewal)
        {
            var updated = context.ProjectRenewal.FirstOrDefault(t => t.ProjectRenewalId == id);
            updated.IsApproved = projectRenewal.IsApproved;
            //updated.RenewalDate = DateTime.Now;
            updated.ApprovedDate = DateTime.Now;
            updated.Remark = projectRenewal.Remark;
            context.Entry(updated).State = EntityState.Modified;
            try
            {
                await context.SaveChangesAsync();
                if (projectRenewal.IsApproved)
                {
                    //update service application
                    var sa = context.ServiceApplication.FirstOrDefault(r => r.ServiceApplicationId == projectRenewal.ServiceApplicationId);
                    sa.CurrentStep = 5;
                    context.Entry(sa).State = EntityState.Modified;
                    await context.SaveChangesAsync();
                    // end of update service application
                }
                return updated;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }
    }

}
