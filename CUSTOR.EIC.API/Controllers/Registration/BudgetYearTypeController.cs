using CUSTOR.API.ExceptionFilter;
using CUSTOR.EICOnline.DAL.EntityLayer;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CUSTOR.EICOnline.API.Controllers
{
    [ServiceFilter(typeof(ApiExceptionFilter))]
    [EnableCors("CorsPolicy")]
    [Produces("application/json")]
   
    public class BudgetYearTypeController : Controller
    {
        private BudgetYearTypeRepository _BudgetYearTypeRepo;

        public BudgetYearTypeController(BudgetYearTypeRepository _budgetYearTypeRepo)
        {
            _BudgetYearTypeRepo = _budgetYearTypeRepo;
        }
        

        [HttpGet]
        [Route("api/GetAllBudgetYearTypes/{Lang}")]
        public async Task<IEnumerable<BudgetYearType>> GetAllBudgetYearTypes(string lang)
        {
            return await _BudgetYearTypeRepo.GetAllBudgetYearTypesByLang(lang);
        }

        
        [HttpGet]
        [Route("api/GetAllBudgetYearTypes")]
        public async Task<IEnumerable<BudgetYearType>> GetAllBudgetYearTypes()
        {
            return await _BudgetYearTypeRepo.GetAllBudgetYearTypes();
        }
        
    }
}