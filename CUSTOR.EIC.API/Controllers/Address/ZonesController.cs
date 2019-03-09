using System.Collections.Generic;
using System.Threading.Tasks;
using CUSTOR.API.ExceptionFilter;
using CUSTOR.EICOnline.DAL;
using CUSTOR.EICOnline.DAL.DataAccessLayer.Address;
using CUSTOR.EICOnline.DAL.EntityLayer;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace CUSTOR.EICOnline.API.Controllers.Address
{
  [ServiceFilter(typeof(ApiExceptionFilter))]
  [EnableCors("CorsPolicy")]
  [Produces("application/json")]
  // [Route("api/Zones")]
  public class ZonesController
  {
    private readonly ZoneRepo _ZoneRepo;
    private readonly ApplicationDbContext _context;

    public ZonesController(ApplicationDbContext context,ZoneRepo zoneRepo)
    {
      _context = context;
      _ZoneRepo = zoneRepo;
    }

    [HttpGet]
    [Route("api/Zones/{Lang}")]
    public async Task<IEnumerable<ZoneViewModel>> GetAllZones(string lang)
    {
      return await _ZoneRepo.GetAllZones(lang);
    }

    [HttpGet]
    [Route("api/Zones/ByParentId/{id}")]
    public async Task<IEnumerable<Zone>> GetZonesByParent(string id, int page = -1, int pageSize = 10)
    {
      return await _ZoneRepo.GetZonesByParent(id,page, pageSize);
    }

    [HttpGet]
    [Route("api/Zones")]
    public async Task<IEnumerable<Zone>> GetZones(int page = -1, int pageSize = 10)
    {
      return await _ZoneRepo.GetZones(page, pageSize);
    }

    [HttpGet]
    [Route("api/Zones/ById/{id}")]
    public Zone GetZone(string id)
    {
      return _ZoneRepo.GetZone(id);
    }

    [HttpPost("api/zone")]
    public async Task<Zone> saveZone([FromBody] Zone postedZone)
    {
      //if (!ModelState.IsValid)
      //   throw new ApiException("Model binding failed.", 500);
      //if (!_ZoneRepo.Validate(postedZone))
      //    throw new ApiException(_ZoneRepo.ErrorMessage, 500, _ZoneRepo.ValidationErrors);
      _context.Zones.Add(postedZone);
      if (!await _ZoneRepo.SaveAsync(postedZone))
        throw new ApiException(_ZoneRepo.ErrorMessage);
      return postedZone;
    }

    [HttpDelete("api/Zone/{id}")]
    public async Task<bool> DeleteZone(string id)
    {
      return await _ZoneRepo.DeleteZone(id);
    }
  }
}
