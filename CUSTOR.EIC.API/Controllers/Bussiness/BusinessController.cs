using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CUSTOR.EICOnline.DAL.DataAccessLayer.Bussiness;
using CUSTOR.EICOnline.DAL.EntityLayer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CUSTOR.EICOnline.API.Controllers.Bussiness
{
    [Produces("application/json")]
    [Route("api/Business")]
    public class BusinessController : Controller
    {
        private ApplicationDbContext context;
        public BusinessController(ApplicationDbContext ctx)
        {
            context = ctx;
        }
        [HttpGet("GetBussiness/{id:int}")]
        public async Task<DAL.EntityLayer.Business> GetBussiness(int id)
        {
            BusinessRepository
            businessRepo = new BusinessRepository(context);
            return await businessRepo.GetRecordsById(id);
        }

        [HttpGet("GetRegistration/{Tin:int}")]
        public async Task<Registration> GetRegistration(string Tin)
        {
            BusinessRepository
            businessRepo = new BusinessRepository(context);
            return await businessRepo.GetRegistrationByTin(Tin);
        }


        [HttpGet("GetRegistrationCatagory/{InvestorId:int}")]
        public List<MajorDivision> GetRegistrationcata(int InvestorId)
        {
            try
            {
                var catdatalist = context.RegistrationCatagorys.Where(param => param.InvestorId == InvestorId).ToList();
                List<MajorDivision> descriptionList = new List<MajorDivision>();
                for (int i = 0; i < catdatalist.Count; i++)
                {
                    MajorDivision description = new MajorDivision();
                    int code = Convert.ToInt16(catdatalist[i].MajorCatagoryCode);
                    var catdata = context.MajorDivision.SingleOrDefault(param => param.Code == code);
                    if (catdata != null)
                    {
                        description.EnglishDescription = catdata.EnglishDescription;
                        description.Description = catdata.Description;
                        descriptionList.Add(description);
                    }
                }
                return descriptionList;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        [HttpGet("GetBussinessCatagory/{BussinessId:int}")]
        public List<SubGroup> GetBussinesscata(int BussinessId)
        {
            try
            {
                var Bussinesslist = context.BusinessLicensingGroup.Where(param => param.BusinessId == BussinessId).ToList();
                List<SubGroup> descriptionList = new List<SubGroup>();
                for (int i = 0; i < Bussinesslist.Count; i++)
                {
                    SubGroup description = new SubGroup();
                    int code = Convert.ToInt16(Bussinesslist[i].SubGroup);
                    var catdata = context.SubGroup.SingleOrDefault(param => param.Id == code);
                    if (catdata != null)
                    {
                        description.EnglishDescription = catdata.EnglishDescription;
                        description.Description = catdata.Description;
                        descriptionList.Add(description);
                    }
                }
                return descriptionList;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        [HttpGet("GetBussinessMajorcata/{BussinessId:int}")]
        public Group GetBussinessMajorcata(int BussinessId)
        {
            try
            {
                var Bussinesslist = context.BusinessLicensingGroup.SingleOrDefault(param => param.BusinessId == BussinessId);
                Group description = new Group();
                int code = Convert.ToInt16(Bussinesslist.BGroup);
                var catdata = context.Group.SingleOrDefault(param => param.Id == code);
                if (catdata != null)
                {
                    description.EnglishDescription = catdata.EnglishDescription;
                    description.Description = catdata.Description;
                }

                return description;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        [HttpPost("Save")]
        public async Task<IActionResult> SaveBussiness([FromBody] DAL.EntityLayer.Business bussiness)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                if (bussiness.ID == 0)
                {
                    BusinessRepository businessRepo = new BusinessRepository(context);
                    await businessRepo.SaveBussiness(bussiness);
                }
            }
            catch (Exception ex)
            {

            }
            return CreatedAtAction("SaveBussiness", new { id = bussiness.ID }, bussiness);
        }

        //[HttpGet("api/GetBussiness")]
        //public async Task<IEnumerable<Business>> GetDivisions()
        //{
        //    BusinessRepository
        //    businessRepo = new BusinessRepository(context);
        //    return await businessRepo.GetRecordsById(id);
        //}
    }
}