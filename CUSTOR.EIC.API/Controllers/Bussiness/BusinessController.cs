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
        public BusinessController (ApplicationDbContext ctx)
        {
            context = ctx;
        }
        [HttpGet("GetBussinessLicence/{id:int}")]
        public async Task<DAL.EntityLayer.Business> GetBussiness(int id)
        {
            BusinessRepository
            businessRepo = new BusinessRepository(context);
            return await businessRepo.GetRecordsById(id);
        }

        [HttpGet("GetBussiness/{id:int}")]
        public async Task<DAL.EntityLayer.Business> GetBussinessLicence(int id)
        {
                BusinessRepository
                businessRepo = new BusinessRepository(context);
                return await businessRepo.GetBussinessById(id);
        }

        [HttpGet("GetRegistration/{Tin:int}")]
        public async Task<Registration> GetRegistration(string Tin)
        {
            BusinessRepository
            businessRepo = new BusinessRepository(context);
            return await businessRepo.GetRegistrationByTin(Tin);
        }


        [HttpGet("GetRegistrationCatagory/{InvestorId:int}")]
        public List<tblMajorDivision> GetRegistrationcata(int InvestorId)
        {
            try
            {
                var catdatalist = context.RegistrationCatagorys.Where(param => param.InvestorId == InvestorId).ToList();
                List<tblMajorDivision> descriptionList = new List<tblMajorDivision>();
                for (int i = 0; i < catdatalist.Count; i++)
                {
                    tblMajorDivision description = new tblMajorDivision();
                    int code = Convert.ToInt16(catdatalist[i].MajorCatagoryCode);
                    var catdata = context.tblMajorDivision.SingleOrDefault(param => param.Code == code);
                    if (catdata != null)
                    {
                        description.EnglishDescription = catdata.EnglishDescription;
                        description.Description = catdata.Description;
                        descriptionList.Add(description);
                    }
                }
                return descriptionList;
            }
            catch(Exception ex)
            {
                return null;
            }
        }
        [HttpGet("GetBussinessCatagory/{BussinessId:int}")]
        public List<tblSubGroup> GetBussinesscata(int BussinessId)
        {
            try
            {
                var Bussinesslist = context.BusinessLicensingGroup.Where(param => param.BusinessId == BussinessId).ToList();
                List<tblSubGroup> descriptionList = new List<tblSubGroup>();
                for (int i = 0; i < Bussinesslist.Count; i++)
                {
                    tblSubGroup description = new tblSubGroup();
                    int code = Convert.ToInt16(Bussinesslist[i].SubGroup);
                    var catdata = context.tblSubGroup.SingleOrDefault(param => param.Id == code);
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
        public tblGroup GetBussinessMajorcata(int BussinessId)
        {
            try
            {
                var Bussinesslist = context.BusinessLicensingGroup.LastOrDefault(param => param.BusinessId == BussinessId);
                    tblGroup description = new tblGroup();
                    int code = Convert.ToInt16(Bussinesslist.BGroup);
                    var catdata = context.tblGroup.SingleOrDefault(param => param.Id == code);
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
                    BusinessRepository
               businessRepo = new BusinessRepository(context);
                    await businessRepo.SaveBussiness(bussiness);
                }
                else
                {
                    BusinessRepository
              businessRepo = new BusinessRepository(context);
                    await businessRepo.UpdateBussiness(bussiness);
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