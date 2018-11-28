using AutoMapper;
using IdentityServer4.AccessTokenValidation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using CUSTOR.EICOnline.DAL.EntityLayer;
using CUSTOR.EICOnline.DAL.DataAccessLayer;
using Microsoft.AspNetCore.Cors;

namespace CUSTOR.EICOnline.API.Controllers.Bussiness
{
    [EnableCors("CorsPolicy")]
    public class BussinessCatagoryListController: Controller
    {
        private ApplicationDbContext context;
        private tblMajorDivisionRepository MajorDivisionRepo;
        private tblDivisionRepository DivisionRepo;
        private tblGroupRepository GroupRepo;
        private tblSubGroupRepository SubGroupRepo;
        public BussinessCatagoryListController(ApplicationDbContext ctx, tblMajorDivisionRepository MajorDivisionRepo)
        {
            context = ctx;
            MajorDivisionRepo = MajorDivisionRepo;
        }
        [HttpGet]
        [Route("api/MajorDivisions")]
        //[Authorize(Authorization.Policies.ViewAllInvestorsPolicy)]
        public async Task<IEnumerable<tblMajorDivision>> GetMajorDivisions()
        {
            MajorDivisionRepo = new tblMajorDivisionRepository(context);
            return await MajorDivisionRepo.GetRecords();
        }

        [HttpGet]
        [Route("api/MajorDivisions/{Tin:int}")]
        //[Authorize(Authorization.Policies.ViewAllInvestorsPolicy)]
        public async Task<IEnumerable<tblMajorDivision>> GetMajorDivisions(string Tin)
        {
            MajorDivisionRepo = new tblMajorDivisionRepository(context);
            return await MajorDivisionRepo.GetRecordsByTin(Tin);
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
        public async Task<IEnumerable<tblSubGroup>> GettblSubGroups()
        {
            SubGroupRepo = new tblSubGroupRepository(context);
            return await SubGroupRepo.GetRecords();
        }
       
    }
}
