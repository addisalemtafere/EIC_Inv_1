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
  public class CountryController : Controller
  {
    private readonly CountryRepository _CountryRepo;
    private ApplicationDbContext context;

    public CountryController(ApplicationDbContext ctx, CountryRepository CountryRepo)
    {
      context = ctx;
      _CountryRepo = CountryRepo;
    }

    [HttpGet]
    [Route("api/throw")]
    public object Throw()
    {
      throw new InvalidOperationException("This is an unhandled exception");
    }


    [HttpGet]
    [Route("api/Countrys/{lang}")]
    public async Task<IEnumerable<CountryDTO>> GetCountry(string lang, int page = -1, int pageSize = 10)
    {
      return await _CountryRepo.GetCountrys(lang, page, pageSize);
    }

    [HttpGet("api/Country/{id:int}")]
    public async Task<CountryDTO> GetCountry(int id)
    {
      return await _CountryRepo.GetRecord(id);
    }

    [HttpPost("api/Country")]
    public async Task<Country> SaveCountry([FromBody] Country PostedCountry)
    {
      if (!ModelState.IsValid)
        throw new ApiException("Model binding failed.", 500);
//      if (!_CountryRepo.Validate(PostedCountry))
      //throw new ApiException(_CountryRepo.ErrorMessage, 500, _CountryRepo.ValidationErrors);

      if (!await _CountryRepo.SaveAsync(PostedCountry))
        throw new ApiException(_CountryRepo.ErrorMessage);
      return PostedCountry;
    }

    [HttpDelete("api/Country/{id:int}")]
    public async Task<bool> DeleteCountry(int id)
    {
      return await _CountryRepo.DeleteCountry(id);
    }
  }
}
