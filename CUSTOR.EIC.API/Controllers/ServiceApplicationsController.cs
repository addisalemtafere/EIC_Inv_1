using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using CUSTOR.API.ExceptionFilter;
using CUSTOR.EICOnline.API.ViewModels.enums;
using CUSTOR.EICOnline.DAL;
using CUSTOR.EICOnline.DAL.EntityLayer;
using EIC.Investment.API.ViewModels.Dto;
using IdentityServer4.Extensions;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;

namespace EIC.Investment.API.Controllers
{
  [Produces("application/json")]
  [Route("api/ServiceApplications")]
  [ServiceFilter(typeof(ApiExceptionFilter))]
  [EnableCors("CorsPolicy")]
  public class ServiceApplicationsController : Controller
  {
    private readonly ApplicationDbContext _context;
    private readonly ServiceApplicationRepository _repository;


    public ServiceApplicationsController(ApplicationDbContext context, ServiceApplicationRepository repository)
    {
      _context = context;
      _repository = repository;
    }

    // GET: api/ServiceApplications
    [HttpGet]
    public async Task<PagedResult<ServiceApplication>> GetApplication([FromQuery] QueryParameters queryParameters)
    {
      return await _repository.GetAllServiceApplication(queryParameters, (int) ApplicationStatus.Submitted);
    }


    [HttpGet("{id}")]
    public async Task<ServiceApplication> GetServiceApplication([FromRoute] int id)
    {
      var serviceApplication = await _context.ServiceApplication
        .Include(s => s.Document)
        .Include(s => s.Service)
        .ThenInclude(s => s.ServiceTariff)
        .ThenInclude(s => s.Tariff)
        .SingleOrDefaultAsync(m => m.ServiceApplicationId == id);
      return serviceApplication;
    }

    [HttpGet("ServiceAndPayment/{id}")]
    public async Task<ServiceApplication> GetServiceAndPayment([FromRoute] int id)
    {
      var serviceApplication = await _context.ServiceApplication
        .Include(s => s.Service)
        .ThenInclude(s => s.ServiceTariff)
        .ThenInclude(s => s.Tariff)
        .SingleOrDefaultAsync(m => m.ServiceApplicationId == id);
      return serviceApplication;
    }

    [HttpGet("ServiceApplicationWithRenewal/{id}")]
    public async Task<ServiceApplication> GetServiceApplicationWithRenewal([FromRoute] int id)
    {
      var serviceApplication = await _context.ServiceApplication
        .Include(pre => pre.ProjectRenewal)
        .SingleOrDefaultAsync(m => m.ServiceApplicationId == id);
      return serviceApplication;
    }

    [HttpGet("ServiceApplicationWithProjectId/{id}/{invId}/{serviceId}")]
    public IEnumerable<ServiceApplication> GetServiceApplicationWithProjectId([FromRoute] int id, [FromRoute] int invId,
      [FromRoute] int serviceId)
    {
      IEnumerable<ServiceApplication> project = _context.ServiceApplication
        .Where(s => s.InvestorId == invId && s.ProjectId == id && s.ServiceId == serviceId &&
                    s.CurrentStatusId != 44449)
        .Include(p => p.ServiceWorkflow)
        .AsEnumerable()
        .OrderByDescending(s => s.ServiceApplicationId);
      return project;
      //List<ServiceApplication> serviceApplication = await _context.ServiceApplication
      //  .Where(m => m.ProjectId == id).OrderByDescending(a=>a.ServiceApplicationId).ToListAsync();
      //return serviceApplication;
    }

    [HttpGet("ServiceApplicationBillOfMaterial/{id}/{lang}")]
    public async Task<IEnumerable<ServiceAppDto>> GetServiceApplicationBillOfMaterial([FromRoute] int id, string lang)
    {
      string FieldName = StaticDataHelper.GetFieldName(lang);
      string query1 =
        $@"(select IncentiveBoMRequestItemId,(Select {FieldName} from Lookup Where LookUpTypeId='10780' AND Lookup.LookupId=IncentiveBoMRequestItem.RejectionReason) as RejectionReason,Balance,Phase
						   ,IncentiveBoMRequestItem.ServiceApplicationId,IncentiveBoMRequestItem.ProjectId,Description,HsCode,Quantity,MesurmentUnit,IsApproved from ServiceApplication
						   Inner Join IncentiveBoMRequestItem ON IncentiveBoMRequestItem.ServiceApplicationId=ServiceApplication.ServiceApplicationId)";
      IQueryable<ServiceAppDto> ServiceAppDto = _context.ServiceAppDto
        .Where(m => m.ServiceApplicationId == id)
        .FromSql(query1);
      return ServiceAppDto;
    }

    [HttpGet("BillOfMaterialByProjectId/{id}/{phase}/{lang}")]
    public IEnumerable<ServiceAppDto1> GetBillOfMaterialByProjectId([FromRoute] int id,
      int phase, string lang)
    {
      //string FieldName = StaticDataHelper.GetFieldName(lang);
      var ProjectId = new SqlParameter("@ProjectId", id);
      var Phase = new SqlParameter("@Phase", phase);
      IEnumerable<ServiceAppDto1> series = _context.Query<ServiceAppDto1>().FromSql(
          "(select  IncentiveBoMRequestItem.Description,IncentiveBoMRequestItem.Quantity,IncentiveBoMRequestItem.Balance,HSCode,MesurmentUnit,IncentiveBoMRequestItem.ProjectId,IncentiveBoMRequestItem.IsApproved,Phase from IncentiveBoMRequestItem"
          + " WHERE IsApproved=1 " + " AND ProjectId=" + id + " AND Phase=" + phase + " )",
          id, phase)
        .ToList();
      return series;
    }

    [HttpGet("ServiceApplicationCancellation/{id}")]
    public async Task<ServiceApplication> GetServiceApplicationWithCancellation([FromRoute] int id)
    {
      var serviceApplication = await _context.ServiceApplication
        .Include(pre => pre.ProjectCancellation)
        .SingleOrDefaultAsync(m => m.ServiceApplicationId == id);
      return serviceApplication;
    }

    [HttpGet("ServiceApplicationSubstitute/{id}")]
    public async Task<ServiceApplication> GetServiceApplicationWithSubstitute([FromRoute] int id)
    {
      var serviceApplication = await _context.ServiceApplication
        .Include(pre => pre.ProjectSubstitute)
        .SingleOrDefaultAsync(m => m.ServiceApplicationId == id);
      return serviceApplication;
    }
    [HttpGet("CheckServiceApplication/{investorId}/{requestedServiceId}")]
    public ServiceApplication CheckServiceApplication(int investorId, int requestedServiceId)
    {
      return _repository.CheckServiceApplicationApi(investorId, requestedServiceId);
    }
    [HttpGet("GetServiceList/{projectId}/{serviceApplicationId}")]
    public ServiceApplicationAmendment GetServiceList(int projectId, int serviceApplicationId)
    {
      return _repository.GetServiceList(projectId, serviceApplicationId);
    }

    [HttpGet("CheckProjectServiceApplication/{projectId}/{requestedServiceId}")]
    public ServiceApplication CheckProjectServiceApplication(int projectId, int requestedServiceId)
    {
      return _repository.CheckProjectServiceApplication(projectId, requestedServiceId);
    }
    [HttpGet("ByInvestorId/{id}")]
    public IEnumerable<ServiceApplication> GetServiceApplicationByInvestorId([FromRoute] int id)
    {
      var project = _context.ServiceApplication
        .Where(s => s.InvestorId == id)
        .Include(p => p.ServiceWorkflow)
        .AsEnumerable()
        .OrderByDescending(s => s.ServiceApplicationId);
      return project;
    }

    [HttpGet("ByOfficerId/{officerId}")]
    public IEnumerable<ServiceApplication> GetServiceApplicationByOfficerId([FromRoute] string officerId)
    {
      var project = _context.ServiceApplication
        .Where(t => t.TodoTask.AssignedUserId == officerId)
        .Include(s => s.ServiceWorkflow)
        .AsEnumerable()
        .OrderByDescending(s => s.ServiceApplicationId);
      return project;
    }


    [HttpGet("finalForApproval/{id}")]
    public async Task<IActionResult> GetServiceApplicationAndFinalizeAsync([FromRoute] int id)
    {
      var serviceApplication =
        _context.ServiceApplication.First(p => p.ServiceApplicationId == id);
      serviceApplication.IsActive = true;
      serviceApplication.EndDate = DateTime.Now;
      //serviceApplication.EndTime = DateTime.Now.ToLongTimeString();
      serviceApplication.CurrentStatusId = (int) ApplicationStatus.Submitted;
      _context.Entry(serviceApplication).State = EntityState.Modified;

      var serviceWorkflowHistory = new ServiceWorkflowHistory();
      serviceWorkflowHistory.ActionId = 3;
      serviceWorkflowHistory.StepId = 8;
      serviceWorkflowHistory.FromStatusId = 3;
      serviceWorkflowHistory.ToStatusId = 3;
      serviceWorkflowHistory.PerformedByRoleId = 3;
      serviceWorkflowHistory.NextStepId = 9;
      serviceWorkflowHistory.ServiceId = (int) ServiceEnum.NewIP;
      serviceWorkflowHistory.LegalStatusId = 3;
      serviceWorkflowHistory.CreatedUserId = 1;
      serviceWorkflowHistory.IsActive = true;
      serviceWorkflowHistory.ServiceApplicationId = id;
      _context.ServiceWorkflowHistories.Add(serviceWorkflowHistory);


//            var toDoTask = _context.TodoTask.First(p => p.ServiceApplicationId == id);
//            toDoTask.CurrentStatusId = 44446;
//            _context.Entry(toDoTask).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
        return CreatedAtAction("GetServiceApplication", serviceApplication);
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!ServiceApplicationExists(id))
          return NotFound();
        throw;
      }
    }


    [HttpPost("ChangeApplicationStatus/{id}")]
    public async Task<IActionResult> ChangeApplicationStatus([FromRoute] int id, [FromBody] Lookup lookup)
    {
      var serviceApplication =
        _context.ServiceApplication.First(p => p.ServiceApplicationId == id);
      serviceApplication.IsActive = true;
      serviceApplication.CurrentStatusId = Convert.ToInt32(lookup.Code);
      _context.Entry(serviceApplication).State = EntityState.Modified;

      var toDoTask = _context.TodoTask.FirstOrDefault(p => p.ServiceApplicationId == id);

      if (toDoTask != null)
      {
        toDoTask.CurrentStatusId = Int32.Parse(lookup.Code);
        _context.Entry(toDoTask).State = EntityState.Modified;
      }

      if ((int) ApplicationStatus.approved == Convert.ToInt32(lookup.Code))
      {
//        serviceApplication.IsApproved = true;  //Todo
        _context.Entry(serviceApplication).State = EntityState.Modified;
      }

      if (Convert.ToInt32(lookup.Code) == (int) ApplicationStatus.Completed)
      {
        var project = _context.Project.First(p => p.ProjectId == serviceApplication.ProjectId);
        project.IsActive = true;
        _context.Entry(project).State = EntityState.Modified;
      }

      try
      {
        await _context.SaveChangesAsync();
        return CreatedAtAction("GetServiceApplication", serviceApplication);
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!ServiceApplicationExists(id))
          return NotFound();
        throw;
      }
    }

    [HttpPost("ChangeInvestorApplicationStatus/{id}")]
    public async Task<IActionResult> ChangeInvestorApplicationStatus([FromRoute] int id, [FromBody] Lookup lookup)
    {
      var serviceApplication =
        _context.ServiceApplication.First(p => p.ServiceApplicationId == id);
      serviceApplication.IsActive = true;
      serviceApplication.CurrentStatusId = Convert.ToInt32(lookup.Code);
      _context.Entry(serviceApplication).State = EntityState.Modified;
      if (Convert.ToInt32(lookup.Code) == (int) ApplicationStatus.Completed)
      {
        var investor = _context.Investors.First(p => p.InvestorId == serviceApplication.InvestorId);
        investor.IsActive = true;
        _context.Entry(investor).State = EntityState.Modified;
      }

      try
      {
        await _context.SaveChangesAsync();
        return CreatedAtAction("GetServiceApplication", serviceApplication);
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!ServiceApplicationExists(id))
          return NotFound();
        throw;
      }
    }

    // PUT: api/ServiceApplications/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutServiceApplication([FromRoute] int id,
      [FromBody] ServiceApplication serviceApplication)
    {
      //if (!ModelState.IsValid)
      //{
      //  return BadRequest(ModelState);
      //}

      var serviceApplicationEdited = serviceApplication;
      serviceApplicationEdited.IsActive = true;
      serviceApplicationEdited.CurrentStep = serviceApplication.CurrentStep;
      if (id != serviceApplicationEdited.ServiceApplicationId) return BadRequest();

      _context.Entry(serviceApplicationEdited).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!ServiceApplicationExists(id))
          return NotFound();
        throw;
      }

      return NoContent();
    }

    // POST: api/ServiceApplications
    [HttpPost]
    public async Task<IActionResult> PostServiceApplication([FromBody] ServiceApplication serviceApplication)
    {
      if (!ModelState.IsValid) return BadRequest(ModelState);
      Project project = null;
      var investor =
        _context.Investors.FirstOrDefault(inv => inv.InvestorId == serviceApplication.InvestorId);

      var service = _context.Service.FirstOrDefault(inv => inv.ServiceId == serviceApplication.ServiceId);


      var squence = _context.Squences.FirstOrDefault();
      var lastSe = squence.LastSquence + 1;

      var perminumber = lastSe.ToString();

      ServiceApplication editServiceApplication;


      if (serviceApplication.ProjectId > 0)
      {
        project = _context.Project.FirstOrDefault(inv => inv.ProjectId == serviceApplication.ProjectId);
        editServiceApplication = new ServiceApplication
        {
          InvestorId = serviceApplication.InvestorId,
          CaseNumber = perminumber,
          ProjectId = serviceApplication.ProjectId,
          CurrentStep = serviceApplication.CurrentStep,
          ServiceId = serviceApplication.ServiceId,
          CurrentStatusId = (int) ApplicationStatus.Drafted,
          IsSelfService = true,
          IsPaid = true,
          StartDate = DateTime.Now,
          //StartTime = DateTime.Now.ToLongTimeString(),

          CreatedUserId = 1,
          IsActive = false,
          CreatedUserName = serviceApplication.CreatedUserName,
          InvestorNameAmharic = investor.InvestorName,
          InvestorNameEnglish = investor.InvestorNameEng,
          ServiceNameAmharic = service.DisplayName,
          ServiceNameEnglish = service.DisplayNameEnglish,
          ProjectNameEnglish = project.ProjectName,
          ProjectNameAmharic = project.ProjectName
        };
      }
      else
      {
        editServiceApplication = new ServiceApplication
        {
          InvestorId = serviceApplication.InvestorId,
          CurrentStep = serviceApplication.CurrentStep,
          CaseNumber = perminumber,
//          ServiceId = 1235,
          ServiceId = (int) ServiceEnum.CommercialRegistration,
          CurrentStatusId = (int) ApplicationStatus.Drafted,
          IsSelfService = true,
          IsPaid = true,
          StartDate = DateTime.Now,
          //StartTime = DateTime.Now.ToLongTimeString(),

          CreatedUserId = 1,
          IsActive = false,
          CreatedUserName = serviceApplication.CreatedUserName,
          InvestorNameAmharic = investor.InvestorName,
          InvestorNameEnglish = investor.InvestorNameEng,
          ServiceNameAmharic = "Customer Registration",
          ServiceNameEnglish = "Customer Registration",
          ProjectNameEnglish = "",
          ProjectNameAmharic = ""
        };
      }

      var serviceWorkflow = new ServiceWorkflow
      {
        StepId = 9,
        ActionId = 3,
        FromStatusId = 3,
        ToStatusId = 5,
        PerformedByRoleId = 1,
        NextStepId = 1015,
        GenerateEmail = true,
        GenerateLetter = true,
        IsDocumentRequired = true,
        ServiceId = serviceApplication.ServiceId,
        LegalStatusId = 3,
        CreatedUserId = 1,
        IsActive = false
      };

      editServiceApplication.ServiceWorkflow.Add(serviceWorkflow);
      _context.ServiceApplication.Add(editServiceApplication);
      await _context.SaveChangesAsync();
      return CreatedAtAction("GetServiceApplication", new {id = serviceApplication.ServiceApplicationId},
        editServiceApplication);
    }


    [HttpPost("ApplicationStart")]
    public async Task<IActionResult> PostServiceApplicationOfficer([FromBody] ServiceApplication serviceApplication)
    {
      if (!ModelState.IsValid) return BadRequest(ModelState);

      var editeTodoTask = serviceApplication.TodoTask;
      editeTodoTask.IsActive = false;


      var investor =
        _context.Investors.FirstOrDefault(inv => inv.InvestorId == serviceApplication.InvestorId);

      var service = _context.Service.FirstOrDefault(inv => inv.ServiceId == serviceApplication.ServiceId);

      var project = _context.Project.FirstOrDefault(inv => inv.ProjectId == serviceApplication.ProjectId);

      var squence = _context.Squences.FirstOrDefault();
      var lastSe = squence.LastSquence + 1;

      var perminumber = lastSe.ToString();


      var editServiceApplication = new ServiceApplication
      {
        InvestorId = serviceApplication.InvestorId,
        CaseNumber = perminumber,
        ServiceId = serviceApplication.ServiceId,
        CurrentStep = serviceApplication.CurrentStep,
        //CurrentStatusId = 44446,
        CurrentStatusId = (int) ApplicationStatus.Submitted,
        IsSelfService = true,
        IsPaid = true,
        StartDate = DateTime.Now,
        //StartTime = DateTime.Now.ToLongTimeString(),

        CreatedUserId = 1,
        IsActive = false,
        CreatedUserName = serviceApplication.CreatedUserName,
        InvestorNameAmharic = investor.InvestorName,
        InvestorNameEnglish = investor.InvestorNameEng,
        ServiceNameAmharic = service.DisplayName,
        ServiceNameEnglish = service.DisplayNameEnglish,
        ProjectNameEnglish = project.ProjectName,
        ProjectNameAmharic = project.ProjectName
      };


      var serviceWorkflow = new ServiceWorkflow
      {
        StepId = 9,
        ActionId = 3,
        FromStatusId = 3,
        ToStatusId = 5,
        PerformedByRoleId = 1,
        NextStepId = 1015,
        GenerateEmail = true,
        GenerateLetter = true,
        IsDocumentRequired = true,
        ServiceId = serviceApplication.ServiceId,
        LegalStatusId = 3,
        CreatedUserId = 1,
        IsActive = false
      };
      editServiceApplication.ServiceWorkflow.Add(serviceWorkflow);
      editServiceApplication.TodoTask = editeTodoTask;
      _context.ServiceApplication.Add(editServiceApplication);
      editeTodoTask.ServiceApplication.Add(editServiceApplication);
      _context.TodoTask.Add(editeTodoTask);

      await _context.SaveChangesAsync();


      return CreatedAtAction("GetServiceApplication", new {id = serviceApplication.ServiceApplicationId},
        editServiceApplication);
    }


    [HttpPost("Api/Search")]
    public PagedResult<ServiceApplication> SearchProject([FromQuery] QueryParameters queryParameters,
      [FromBody] SearchDto searchDto)
    {
      var query = _context.ServiceApplication as IQueryable<ServiceApplication>;

      if (!string.IsNullOrEmpty(searchDto.Tin))
      {
        var investor = _context.Investors.Where(s => s.Tin == searchDto.Tin)
          .Select(s => new Investor
          {
            InvestorId = s.InvestorId
          }).FirstOrDefault();
        if (investor != null)
        {
          query = query.Where(x => x.InvestorId == investor.InvestorId);
        }

        if (investor == null)
        {
          var project = _context.Project.Where(s => s.InvestmentPermitNo == searchDto.Tin)
            .Select(s => new Project
            {
              ProjectId = s.ProjectId
            }).FirstOrDefault();
          if (project != null)
          {
            query = query.Where(x => x.ProjectId == project.ProjectId);
          }
          else
          {
            return null;
          }
        }
      }


      if (searchDto.ServiceId.HasValue)
        query = query.Where(x => x.ServiceId == searchDto.ServiceId);

      if (searchDto.status.HasValue)
        query = query.Where(x => x.CurrentStatusId == searchDto.status);

      if (searchDto.FromDate.HasValue && searchDto.ToDate.HasValue)
        query = query.Where(x => x.StartDate < searchDto.ToDate && x.StartDate > searchDto.FromDate);

      if (searchDto.SpecDate.HasValue)
        query = query.Where(x => x.StartDate == searchDto.SpecDate);

      List<ServiceApplication> result = query.Include(s => s.ServiceWorkflow)
        .OrderByDescending(s => s.ServiceApplicationId)
        .Paging(queryParameters.PageCount, queryParameters.PageNumber)
        .ToList();


      return new PagedResult<ServiceApplication>()
      {
        Items = result,
        ItemsCount = query.Count()
      };
    }


    // DELETE: api/ServiceApplications/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteServiceApplication([FromRoute] int id)
    {
      if (!ModelState.IsValid) return BadRequest(ModelState);

      var serviceApplication =
        await _context.ServiceApplication.SingleOrDefaultAsync(m => m.ServiceApplicationId == id);
      if (serviceApplication == null) return NotFound();

      _context.ServiceApplication.Remove(serviceApplication);
      await _context.SaveChangesAsync();

      return Ok(serviceApplication);
    }

    [
      HttpGet("submitedForApproval/{id}")]
    public async Task<IActionResult> ApproveApplication([FromRoute] int id)
    {
      var application = _context.ServiceApplication.First(s => s.ServiceApplicationId == id);


      if (application == null)
      {
        return NotFound();
      }

      application.IsActive = true;
      _context.Entry(application).State = EntityState.Modified;

      await _context.SaveChangesAsync();

      return Ok(application);
    }

    [
      HttpGet("ApplicationGroupByServiceId")]
    public IEnumerable<ServiceGroup> Result()
    {
      var serviceGroup = new List<ServiceGroup>();

      var services = _context.Service
        .Where(c => c.IsActive == true && c.TypeOfService == "3" || c.TypeOfService == "4")
        .ToList();
      foreach (var service in services)
      {
        var status = new ServiceGroup();
        IEnumerable<series> ip = _context.Query<series>()
          .FromSql("sp_get_application_group_by_current_statusId @p0", service.ServiceId)
          .ToList();
        status.name = service.Abbreviation;
        status.series = ip;
        serviceGroup.Add(status);
      }

      return serviceGroup;
    }

    [
      HttpGet("ProjectGroupByStage")]
    public IEnumerable<ServiceGroup> AllProjectStatusBySector()
    {
      var serviceGroup = new List<ServiceGroup>();

      var sectors = _context.Sector
        .ToList();
      foreach (var sector in sectors)
      {
        var status = new ServiceGroup();
        IEnumerable<series> series = _context.Query<series>()
          .FromSql("sp_get_project_group_by_current_statusId @p0", sector.SectorId)
          .ToList();
        status.name = sector.DescriptionEnglishAlias;
        status.series = series;
        serviceGroup.Add(status);
      }

      return serviceGroup;
    }

    [
      HttpGet("ProjectGroupByEconomicSector")]
    public IEnumerable<series> AllProjectByEconomicSector()
    {
      IEnumerable<series> series = _context.Query<series>().FromSql("sp_get_all_project_group_by_economic_sector")
        .ToList();

      return series;
    }

    [
      HttpGet("AllProjectByProjectStage")]
    public IEnumerable<series> AllProjectByProjectStage()
    {
      IEnumerable<series> series = _context.Query<series>().FromSql("sp_get_all_project_group_by_project_stage")
        .ToList();
      return series;
    }

    [
      HttpGet("ServiceApplicationWithInvestor/{id}")]
    public async Task<ServiceApplication> GetServiceApplicationWithInvestor([FromRoute] int id)
    {
      var serviceApplication = await _context.ServiceApplication
        .Include(pre => pre.Investor)
        .SingleOrDefaultAsync(m => m.ServiceApplicationId == id);
      return serviceApplication;
    }

    [
      HttpGet("ServiceApplicationById/{id}")]
    public async Task<ServiceApplication> GetServiceApplicationById([FromRoute] int id)
    {
      var serviceApplication = await
        _context.ServiceApplication
          .SingleOrDefaultAsync(m => m.ServiceApplicationId == id);
      return serviceApplication;
    }

    private bool ServiceApplicationExists(int id)
    {
      return _context.ServiceApplication.Any(e => e.ServiceApplicationId == id);
    }

    //optimization
//      [HttpGet("ByOfficerId2/{officerId}")]
//      public IEnumerable<ServiceApplication> GetServiceApplicationByOfficerId2([FromRoute] string officerId)
//      {
//        var project = _context.ServiceApplication
//          .Where(t => t.TodoTask.AssignedUserId == officerId)
//          .Include(s => s.ServiceWorkflow)
//          .AsEnumerable()
//          .OrderByDescending(s => s.ServiceApplicationId);
//        return project;
//      }
    [
      HttpGet("ByOfficerId2/{officerId}")]
    public async Task<PagedResult<ServiceApplication>> GetServiceApplicationByOfficerId2(
      [FromQuery] QueryParameters queryParameters, [FromRoute] string officerId)
    {
      return await _repository.GetAllServiceApplicationByOfficerId(queryParameters, officerId,
        (int) ApplicationStatus.Submitted, (int) ApplicationStatus.Completed, (int) ApplicationStatus.approved);
    }
  }
}
