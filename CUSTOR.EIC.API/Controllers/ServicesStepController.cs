﻿using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using CUSTOR.API.ExceptionFilter;
using CUSTOR.EICOnline.DAL;
using CUSTOR.EICOnline.DAL.EntityLayer;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EIC.Investment.API.Controllers
{
  [ServiceFilter(typeof(ApiExceptionFilter))]
  [EnableCors("CorsPolicy")]
  [Produces("application/json")]
  public class ServicesStepController : Controller
  {
    private readonly IMapper _mapper;
    private readonly ApplicationDbContext _context;
    private readonly ServiceStepperRepository _serviceStepperRepo;

    public ServicesStepController(ApplicationDbContext context,
      ServiceStepperRepository ServiceStepperRepo,
      IMapper mapper)
    {
      _context = context;
      _serviceStepperRepo = ServiceStepperRepo;
      _mapper = mapper;
    }

    [HttpGet]
    [Route("api/servicestepper")]
    [Produces(typeof(List<ServiceStepViewModel>))]
    public async Task<IActionResult> GetServiceApplicationWorkflow()
    {
      var serviceStep = _context.ServiceStep;
      var result = _mapper.Map<ICollection<ServiceStepViewModel>>(serviceStep);
      return Ok(result);
    }

    [HttpGet]
    [Route("api/servicesteppers")]
    public async Task<IEnumerable<ServiceStep>> GetServiceStep(int page = -1, int pageSize = 10)
    {
      return await _serviceStepperRepo.GeServiceSteps(page, pageSize);
    }

    [HttpGet]
    [Route("api/servicestepper/ByParentId/{id}")]
    public async Task<IEnumerable<ServiceStep>> GetServiceStepByParentId(int id, int page = -1, int pageSize = 10)
    {
      return await _serviceStepperRepo.GeServiceStepsByParentId(id, page, pageSize);
    }

    [HttpGet("api/servicestepper/{id:int}")]
    public ServiceStep GetServiceStep(int id)
    {
      ServiceStep steppers = null;
      // int id = (int)id;
      return steppers = _serviceStepperRepo.GetRecord(id);
    }

    [HttpPost("api/servicestepper")]
    public async Task<ServiceStep> SaveServiceStep([FromBody] ServiceStep PostedServiceStep)
    {
      if (!ModelState.IsValid)
        throw new ApiException("Model binding failed.", 500);
      //if (!_serviceStepperRepo.Validate(PostedServiceStep))
      //    throw new ApiException(_serviceStepperRepo.ErrorMessage, 500, _serviceStepperRepo.ValidationErrors);
      if (!await _serviceStepperRepo.SaveAsync(PostedServiceStep))
        throw new ApiException(_serviceStepperRepo.ErrorMessage);

      return PostedServiceStep;
    }

    [HttpDelete("api/servicestepper/{id:int}")]
    public async Task<bool> DeleteServiceStep(int id)
    {
      //if (!HttpContext.User.Identity.IsAuthenticated)
      //    throw new ApiException("You have to be logged in first", 401);

      return await _serviceStepperRepo.DeleteServiceStep(id);
    }
  }
}
