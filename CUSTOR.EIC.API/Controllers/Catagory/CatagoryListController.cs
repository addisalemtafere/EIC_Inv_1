using CUSTOR.API.ExceptionFilter;
using CUSTOR.EICOnline.DAL.DataAccessLayer;
using CUSTOR.EICOnline.DAL.EntityLayer;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CUSTOR.EICOnline.API.Controllers
{
    [EnableCors("CorsPolicy")]
    public class CatagoryListController: Controller
    {
       
        private ApplicationDbContext context;
        private tblMajorDivisionRepository MajorDivisionRepo;
        private tblDivisionRepository DivisionRepo;
        private tblGroupRepository GroupRepo;
        private tblSubGroupRepository SubGroupRepo;
        public CatagoryListController(ApplicationDbContext ctx, tblMajorDivisionRepository MajorDivisionRepo)
        {
            context = ctx;
            this.MajorDivisionRepo = MajorDivisionRepo;
        }
        [HttpGet]
        [Route("api/MajorDivisions")]
        //[Authorize(Authorization.Policies.ViewAllInvestorsPolicy)]
        public async Task<IEnumerable<tblMajorDivision>> GetMajorDivisions()
        {
            MajorDivisionRepo = new tblMajorDivisionRepository(context);
            return await MajorDivisionRepo.GetRecords();
        }       

        [HttpGet("api/Divisions/{id:int}")]
        public async Task<IEnumerable<tblDivision>> GetDivisions(int id)
        {
            DivisionRepo = new tblDivisionRepository(context);
            return await DivisionRepo.GetRecordsById(id);
        }

        [HttpGet("api/Divisions")]
        public async Task<IEnumerable<tblDivision>> GetDivisions()
        {
            DivisionRepo = new tblDivisionRepository(context);
            return await DivisionRepo.GetRecords();
        }

        //[HttpGet]
        //[Route("api/MajorDivisions/{Tin:int}")]
        ////[Authorize(Authorization.Policies.ViewAllInvestorsPolicy)]
        //public async Task<IEnumerable<tblMajorDivision>> GetMajorDivisions(string Tin)
        //{
        //    MajorDivisionRepo = new tblMajorDivisionRepository(context);
        //    return await MajorDivisionRepo.GetRecordsByTin(Tin);
        //}

        [HttpGet]
        [Route("api/GetMajorDivisionsByInvestorID/{InvestorId:int}")]
        //[Authorize(Authorization.Policies.ViewAllInvestorsPolicy)]
        public async Task<IEnumerable<tblMajorDivision>> GetMajorDivisionsByInvestorID(int InvestorId)
        {
            MajorDivisionRepo = new tblMajorDivisionRepository(context);
            return await MajorDivisionRepo.GetMajorDivisionsByInvestorID(InvestorId);
        }


        [HttpGet("api/MajorGroup")]
        public async Task<IEnumerable<tblMajorGroup>> GetMajorGroups()
        {
            tblMajorGroupRepository tblMajorGroupRepo  = new tblMajorGroupRepository(context);
            return await tblMajorGroupRepo.GetRecords();
        }

        [HttpGet("api/Groups")]
        public async Task<IEnumerable<tblGroup>> GetGroups()
        {
            GroupRepo = new tblGroupRepository(context);
            return await GroupRepo.GetRecords();
        }

        [HttpGet("api/SubGroups")]
        public async Task<IEnumerable<tblSubGroup>> GetSubGroups()
        {
            SubGroupRepo = new tblSubGroupRepository(context);
            return await SubGroupRepo.GetRecords();
        }
        
    }
}
