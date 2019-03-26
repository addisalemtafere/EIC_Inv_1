using System.Collections.Generic;
using System.Threading.Tasks;
using CUSTOR.API.ExceptionFilter;
using CUSTOR.EICOnline.DAL;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using CUSTOR.EICOnline.DAL.DataAccessLayer.Address;

namespace CUSTOR.EICOnline.API.Controllers.Address
{
    [ServiceFilter(typeof(ApiExceptionFilter))]
    [EnableCors("CorsPolicy")]
    [Produces("application/json")]
    // [Route("api/Towns")]
    public class TownsController
    {
        private readonly TownRepo _TownRepo;
        public TownsController(TownRepo townRepo)
        {
            _TownRepo = townRepo;
        }

        [HttpGet]
        [Route("api/Towns/{Lang}")]
        public async Task<IEnumerable<TownViewModel>> GetAllTowns(string lang)
        {
            return await _TownRepo.GetAllTowns(lang);
        }

        [HttpGet]
        [Route("api/Towns")]
        public async Task<IEnumerable<Town>> GetTowns(int page = -1, int pageSize = 10)
        {
            return await _TownRepo.GetTowns(page, pageSize);
        }

        [HttpGet]
        [Route("api/Towns/ById/{id}")]
        public Town GetTown(string id)
        {
            return _TownRepo.GetTown(id);
        }

        [HttpPost("api/Town")]
        public async Task<Town> saveTown([FromBody] Town postedTown)
        {
            //if (!ModelState.IsValid)
            //   throw new ApiException("Model binding failed.", 500);
            //if (!_TownRepo.Validate(postedTown))
            //    throw new ApiException(_TownRepo.ErrorMessage, 500, _TownRepo.ValidationErrors);

            if (!await _TownRepo.SaveAsync(postedTown))
                throw new ApiException(_TownRepo.ErrorMessage);
            return postedTown;
        }

        [HttpDelete("api/Town/{id}")]
        public async Task<bool> DeleteTown(string id)
        {
            return await _TownRepo.DeleteTown(id);
        }
    }
}