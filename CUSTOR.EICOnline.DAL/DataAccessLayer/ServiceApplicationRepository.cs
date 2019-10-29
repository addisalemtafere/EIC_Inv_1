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
        public ServiceApplicationAmendment GetServiceList(int projectId, int serviceApplicationId)
        {
            try
            {
                var serviceApplicationAmendList = Context.ServiceApplicationAmendment
                                                     .FirstOrDefault(m => m.ServiceApplicationId == serviceApplicationId);
                return serviceApplicationAmendList;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.InnerException.ToString());
            }

        }
        public  ServiceApplication CheckServiceApplicationApi(int investorId, int requestedServiceId)
        {
            ServiceApplication sa = null;
            try
            {
                sa = Context.ServiceApplication.OrderByDescending(m => m.UpdatedEventDatetime)
                    .FirstOrDefault(m => m.ServiceId == requestedServiceId && m.InvestorId == investorId && m.IsActive != true);  
            }
            catch (Exception ex)
            {
                throw new Exception(ex.InnerException.ToString());
            }
            
            return sa;
        }
        public  ServiceApplication CheckProjectServiceApplication(int projectId, int requestedServiceId)
        {
            ServiceApplication sa = null;
            try
            {
                sa = Context.ServiceApplication.OrderByDescending(m => m.UpdatedEventDatetime)
                     .FirstOrDefault(m => m.ServiceId == requestedServiceId && m.ProjectId == projectId && m.IsActive != true);  
            }
            catch (Exception ex)
            {
                throw new Exception(ex.InnerException.ToString());
            }
            
            return sa;
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
        public async Task <ServiceApplication> ManageServiceApplication(int ? ServiceApplicationId,int? InvestorId , int? ServiceId , int ? ProjectId, int? CurrentStep)
        {
            ServiceApplication existingServiceApplication = null;
            ServiceApplicationAmendment existingAmendmentServiceApplication = null;
            ServiceApplicationAmendment AmendmentServiceApplication = null;
            ServiceApplication serviceApplication = null;
                try
                {
                    if (ServiceApplicationId != 0)
                    {
                        existingServiceApplication = await Context.ServiceApplication.FirstOrDefaultAsync(s => s.ServiceApplicationId == ServiceApplicationId);
                        existingAmendmentServiceApplication = await Context.ServiceApplicationAmendment.FirstOrDefaultAsync(s => s.ServiceApplicationId == ServiceApplicationId);

                        if (existingServiceApplication != null)
                        {
                            existingServiceApplication.UpdatedEventDatetime = DateTime.Now;
                            existingServiceApplication.CurrentStep = CurrentStep;
                            Context.Update(existingServiceApplication);
                        }
                        if(existingAmendmentServiceApplication != null)
                        {
                            if (CurrentStep == 1)
                            {
                                existingAmendmentServiceApplication.ProfileUpdate = 1;
                            }
                            else if (CurrentStep == 2)
                            {
                                existingAmendmentServiceApplication.InputUpdate = 1;
                            }
                            else if (CurrentStep == 3)
                            {
                                existingAmendmentServiceApplication.RawMaterialUpdate = 1;
                            }
                            else if (CurrentStep == 4)
                            {
                                existingAmendmentServiceApplication.CostUpdate = 1;
                            }
                            else if (CurrentStep == 5)
                            {
                                existingAmendmentServiceApplication.EmploymentUpdate = 1;
                            }
                            else if (CurrentStep == 6)
                            {
                                existingAmendmentServiceApplication.ShareUpdate = 1;
                            }
                            else if (CurrentStep == 7)
                            {
                                existingAmendmentServiceApplication.ProfileUpdate = 1;
                            }
                            Context.Update(existingServiceApplication);
                        }

                        Context.SaveChanges();
                       // transaction.Commit();
                        return existingServiceApplication;
                    }
                    else
                    {
                        var service = Context.Service.FirstOrDefault(s => s.ServiceId == ServiceId);
                        var project = Context.Project.FirstOrDefault(p => p.ProjectId == ProjectId);
                        var squence = Context.Squences.FirstOrDefault();
                        var lastSe = squence.LastSquence + 1;
                        var perminumber = lastSe.ToString();
                        serviceApplication = new ServiceApplication
                        {
                            InvestorId = InvestorId,
                            ProjectId = ProjectId,
                            CaseNumber = perminumber,
                            ServiceId = ServiceId,
                            IsSelfService = true,
                            StartDate = DateTime.Now,
                            EventDatetime = DateTime.Now,
                            IsPaid = true,
                            CreatedUserId = 1,
                            IsActive = false,
                            ServiceNameAmharic = service.DisplayName,
                            ServiceNameEnglish = service.DisplayNameEnglish,
                            CurrentStatusId = (int)ApplicationStatus.Drafted,
                            ProjectNameEnglish = project.ProjectName,
                            ProjectNameAmharic = project.ProjectName,
                            CurrentStep = CurrentStep,
                        };
                        Context.Add(serviceApplication);
                        Context.SaveChanges();
                        
                        if (CurrentStep == 1)
                        {
                            AmendmentServiceApplication = new ServiceApplicationAmendment
                            {
                                ServiceApplicationId = serviceApplication.ServiceApplicationId,
                                ProfileUpdate = 1
                            };
                            Context.Add(AmendmentServiceApplication);
                        }
                        else if (CurrentStep == 2)
                        {
                            AmendmentServiceApplication = new ServiceApplicationAmendment
                            {
                                ServiceApplicationId = serviceApplication.ServiceApplicationId,
                                InputUpdate = 1
                            };
                            Context.Add(AmendmentServiceApplication);
                        }
                        else if (CurrentStep == 3)
                        {
                            AmendmentServiceApplication = new ServiceApplicationAmendment
                            {
                                ServiceApplicationId = serviceApplication.ServiceApplicationId,
                                RawMaterialUpdate = 1
                            };
                            Context.Add(AmendmentServiceApplication);
                        }
                        else if (CurrentStep == 4)
                        {
                            AmendmentServiceApplication = new ServiceApplicationAmendment
                            {
                                ServiceApplicationId = serviceApplication.ServiceApplicationId,
                                CostUpdate = 1
                            };
                            Context.Add(AmendmentServiceApplication);
                        }
                        else if (CurrentStep == 5)
                        {
                            AmendmentServiceApplication = new ServiceApplicationAmendment
                            {
                                ServiceApplicationId = serviceApplication.ServiceApplicationId,
                                EmploymentUpdate = 1
                            };
                            Context.Add(AmendmentServiceApplication);
                        }
                        else if (CurrentStep == 6)
                        {
                            AmendmentServiceApplication = new ServiceApplicationAmendment
                            {
                                ServiceApplicationId = serviceApplication.ServiceApplicationId,
                                ShareUpdate = 1
                            };
                            Context.Add(AmendmentServiceApplication);
                        }
                        else if (CurrentStep == 7)
                        {
                            AmendmentServiceApplication = new ServiceApplicationAmendment
                            {
                                ServiceApplicationId = serviceApplication.ServiceApplicationId,
                                ProfileUpdate = 1
                            };
                            Context.Add(AmendmentServiceApplication);
                        }
                       
                        Context.SaveChanges();
                       // transaction.Commit();
                        return serviceApplication;
                    }

                }
                catch (Exception ex)
                {
                    string s = ex.Message;
                    throw new Exception(ex.InnerException.ToString());
                }
            
        }
    }
    
}