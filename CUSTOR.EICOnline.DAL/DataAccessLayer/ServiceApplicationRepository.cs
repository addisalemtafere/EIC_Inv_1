using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CUSTOR.EICOnline.DAL.EntityLayer;
using CUSTOR.EntityFrameworkCommon;
using Microsoft.EntityFrameworkCore;
using CUSTOR.EICOnline.DAL.Enum;

namespace CUSTOR.EICOnline.DAL
{
    public class ServiceApplicationRepository : EFRepository<ApplicationDbContext, ServiceApplication>
    {
        public ServiceApplicationRepository(ApplicationDbContext context) : base(context)
        {
        }

        public ServiceApplication GetRecord(int ServiceApplicationId)
        {
            ServiceApplication order = null;
            try
            {
                int id = (int) ServiceApplicationId;

                order = Context.ServiceApplication
                    //.Include(p => p.Service)
                    .Where(serviceApp => serviceApp.ServiceApplicationId == id).FirstOrDefault();
            }
            catch (InvalidOperationException)
            {
                SetError("Couldn't load ServiceApplication - invalid ServiceApplication id specified.");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }

            return order;
        }

        public async Task<List<ServiceApplication>> GeServiceApplications(int page = 0, int pageSize = 15)
        {
            IQueryable<ServiceApplication> orders = Context.ServiceApplication
                //.Include(s => s.ServiceApplication)
                .OrderBy(order => order.ServiceApplicationId);
            if (page > 0)
            {
                orders = orders
                    .Skip((page - 1) * pageSize)
                    .Take(pageSize);
            }

            return await orders.ToListAsync();
        }

        public async Task<bool> DeleteServiceApplication(int id)
        {
            var ServiceApplication = await Context.ServiceApplication
                .FirstOrDefaultAsync(servicestep => servicestep.ServiceApplicationId == id);
            if (ServiceApplication == null)
            {
                SetError("ServiceApplication does not exist");
                return false;
            }

            Context.ServiceApplication.Remove(ServiceApplication);
            return await SaveAsync();
        }

        public async Task<PagedResult<ServiceApplication>> GetAllServiceApplicationByOfficerId(
            QueryParameters queryParameter, string UserId, int applicationStatus, int applicationStatus2,
            int applicationStatus3)
        {
            List<ServiceApplication> query = await Context.ServiceApplication
                .OrderByDescending(s => s.ServiceApplicationId)
                .Where(t => t.TodoTask.AssignedUserId == UserId && (t.CurrentStatusId == applicationStatus ||
                            t.CurrentStatusId == applicationStatus2 || t.CurrentStatusId == applicationStatus3))
                .Include(s => s.ServiceWorkflow)
                .Include(s => s.TodoTask)
                .Paging(queryParameter.PageCount, queryParameter.PageNumber)
                .ToListAsync();

            return new PagedResult<ServiceApplication>()
            {
                Items = query,
                ItemsCount = Context.ServiceApplication.Count(t =>
                    t.TodoTask.AssignedUserId == UserId && (t.CurrentStatusId == applicationStatus ||
                    t.CurrentStatusId == applicationStatus2 || t.CurrentStatusId == applicationStatus3))
            };
        }

        public async Task<PagedResult<ServiceApplication>> GetAllServiceApplication(QueryParameters queryParameter,
            int applicationStatus)
        {
            List<ServiceApplication> query = await Context.ServiceApplication
                .Include(s => s.ServiceWorkflow)
                .Include(s => s.TodoTask)
                .OrderByDescending(s => s.ServiceApplicationId)
                .Where(s => s.CurrentStatusId == applicationStatus)
                .Paging(queryParameter.PageCount, queryParameter.PageNumber)
                .ToListAsync();


            return new PagedResult<ServiceApplication>()
            {
                Items = query,
                ItemsCount = Context.ServiceApplication.Count(s => s.CurrentStatusId == applicationStatus)
            };
        }
    }
}