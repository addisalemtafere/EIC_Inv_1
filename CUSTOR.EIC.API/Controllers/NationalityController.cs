using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CUSTOR.API.ExceptionFilter;
using CUSTOR.EICOnline.DAL;
using CUSTOR.EICOnline.DAL.EntityLayer;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace CUSTOR.EICOnline.API.Controllers
{
  [ServiceFilter(typeof(ApiExceptionFilter))]
  [EnableCors("CorsPolicy")]
  public class NationalityController : Controller
  {
    private readonly NationalityRepository _NationalityRepo;
    private ApplicationDbContext context;

    public NationalityController(ApplicationDbContext ctx, NationalityRepository NationalityRepo)
    {
      context = ctx;
      _NationalityRepo = NationalityRepo;
    }

    [HttpGet]
    [Route("api/throw")]
    public object Throw()
    {
      throw new InvalidOperationException("This is an unhandled exception");
    }


    [HttpGet]
    [Route("api/Nationalitys")]
    public async Task<IEnumerable<Nationality>> GetNationality(int page = -1, int pageSize = 10)
    {
      return await _NationalityRepo.GetNationalitys(page, pageSize);
    }

    [HttpGet("api/Nationality/{id:int}")]
    public async Task<NationalityDTO> GetNationality(int id)
    {
      return await _NationalityRepo.GetRecord(id);
    }

    [HttpPost("api/Nationality")]
    public async Task<Nationality> SaveNationality([FromBody] Nationality PostedNationality)
    {
      if (!ModelState.IsValid)
        throw new ApiException("Model binding failed.", 500);
//      if (!_NationalityRepo.Validate(PostedNationality))
      //throw new ApiException(_NationalityRepo.ErrorMessage, 500, _NationalityRepo.ValidationErrors);

      if (!await _NationalityRepo.SaveAsync(PostedNationality))
        throw new ApiException(_NationalityRepo.ErrorMessage);
      return PostedNationality;
    }

    [HttpDelete("api/Nationality/{id:int}")]
    public async Task<bool> DeleteNationality(int id)
    {
      return await _NationalityRepo.DeleteNationality(id);
    }
  }
}
