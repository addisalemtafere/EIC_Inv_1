using CUSTOR.API.ExceptionFilter;
using CUSTOR.EICOnline.DAL;
using CUSTOR.EICOnline.DAL.DataAccessLayer.dto;
using CUSTOR.EICOnline.DAL.EntityLayer;
using IdentityServer4.AccessTokenValidation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace EICOnline.Controllers
{
    //[Authorize(AuthenticationSchemes = IdentityServerAuthenticationDefaults.AuthenticationScheme)]
    [ServiceFilter(typeof(ApiExceptionFilter))]
    [EnableCors("CorsPolicy")]
    public class RegistrationController : Controller
    {
        private ApplicationDbContext context;
        private RegistrationRepository RegistrationRepo;
        private RegistrationCatagoryRepository regCatagoryRepo;

        public RegistrationController(ApplicationDbContext ctx, RegistrationRepository registrationRepo, RegistrationCatagoryRepository RegCatagoryRepo)
        {
            context = ctx;
            RegistrationRepo = registrationRepo;
            regCatagoryRepo = RegCatagoryRepo;
        }

        [HttpGet]
        [Route("api/throw")]
        public object Throw()
        {
            throw new InvalidOperationException("This is an unhandled exception");
        }


        [HttpGet("api/registration/{id:int}")]
        public async Task<Registration> GetRegistration(int id)
        {
            return await RegistrationRepo.GetRecord(id);
        }
        [HttpGet("api/RegistrationByUserId/{id}")]
        public async Task<IEnumerable<Registration>> GetRegistrationByUserId(string id)
        {
            return await RegistrationRepo.GetRecordByUserId(id);
        }

        [HttpGet("api/RegistrationByTin/{Tin}")]
        public async Task<IEnumerable<Registration>> GetRegistrationByTIN(string Tin)
        {
            return await RegistrationRepo.GetRecordByTIN(Tin);
        }


        [HttpPost("api/saveregistration")]
        public async Task<Registration> SaveRegistration([FromBody] Registration postedRegistration)
        {


            using (var transaction = context.Database.BeginTransaction())
            {
                try
                {
                    if (!ModelState.IsValid)
                        throw new ApiException("Model binding failed.", 500);
                    //if (!RegistrationRepo.Validate(postedRegistration))
                    //    throw new ApiException(RegistrationRepo.ErrorMessage, 500, RegistrationRepo.ValidationErrors);
                    postedRegistration.DateRegistered = DateTime.Now;
                    postedRegistration.CancilationDate = DateTime.Now;
                    postedRegistration.EventDateTime = DateTime.Now;
                    postedRegistration.PreviousRegDate = DateTime.Now;
                    postedRegistration.RegDate = DateTime.Now;
                    postedRegistration.UpdatedEventDatetime = DateTime.Now;
                    

                    if (!await RegistrationRepo.SaveAsync(postedRegistration))
                        throw new ApiException(RegistrationRepo.ErrorMessage);


                    //await regCatagoryRepo.DeleteRegistrationCatagoryByInvestorId(postedRegistration.Tin);
                    //foreach (var catagory in postedRegistration.RegistrationCatagories)
                    //{
                    //    RegistrationCatagory regCatagory = new RegistrationCatagory();
                    //    regCatagory.Tin = postedRegistration.Tin;
                    //    regCatagory.MajorCatagoryCode = catagory;
                    //    regCatagory.MainGuid = Guid.NewGuid();
                    //    context.RegistrationCatagorys.Add(regCatagory);
                    //    context.SaveChanges();
                    //}
                    //transaction.Commit();
                    return postedRegistration;
                }

                catch (Exception ex)
                {
                    transaction.Rollback();
                    string s = ex.Message;
                    throw new Exception(ex.Message);
                }
            }
        }



        [HttpPut("api/UpdateRegistration")]
        public async Task<Registration>UpdateRegistration([FromBody] Registration editedRegistration)
        {
            using (var transaction = context.Database.BeginTransaction())
            {
                try
                {
                    if (!ModelState.IsValid)
                        throw new ApiException("Model binding failed.", 500);
                    CVGeez objGeez = new CVGeez();
                    //if (!RegistrationRepo.Validate(postedRegistration))
                    //    throw new ApiException(RegistrationRepo.ErrorMessage, 500, RegistrationRepo.ValidationErrors);

                    editedRegistration.TradeNameSort = objGeez.GetSortValueU(editedRegistration.TradeNameAmh);
                    editedRegistration.TradeNameRegionalSort = objGeez.GetSortValueU(editedRegistration.TradeNameRegional);

                    editedRegistration.BusinessNameSort = objGeez.GetSortValueU(editedRegistration.BusinessNameAmh);
                    editedRegistration.BusinessNameRegionalSort = objGeez.GetSortValueU(editedRegistration.BusinessNameRegional);

                    editedRegistration.DateRegistered = DateTime.Now;
                    editedRegistration.CancilationDate = DateTime.Now;
                    editedRegistration.EventDateTime = DateTime.Now;
                    editedRegistration.PreviousRegDate = DateTime.Now;
                    editedRegistration.RegDate = DateTime.Now;
                    editedRegistration.UpdatedEventDatetime = DateTime.Now;
                    
                    //Aklile
                    context.Entry(editedRegistration).State = EntityState.Modified;

                    if (!await RegistrationRepo.SaveAsync(editedRegistration))
                        throw new ApiException(RegistrationRepo.ErrorMessage);


                    //await regCatagoryRepo.DeleteRegistrationCatagory(editedRegistration.Tin);
                    //foreach (var catagory in editedRegistration.RegistrationCatagories)
                    //{
                    //    RegistrationCatagory regCatagory = new RegistrationCatagory();
                    //    regCatagory.Tin = editedRegistration.Tin;
                    //    regCatagory.MajorCatagoryCode = catagory;
                    //    regCatagory.MainGuid = Guid.NewGuid();
                    //    context.RegistrationCatagorys.Add(regCatagory);
                    //    context.SaveChanges();
                    //}
                    transaction.Commit();
                    return editedRegistration;
                }

                catch (Exception ex)
                {
                    transaction.Rollback();
                    string s = ex.Message;
                    throw new Exception(ex.Message);
                }
            }
        }


        [HttpDelete("api/registration/{id:int}")]
        public async Task<bool> DeleteRegistration(string Tin)
        {
            //if (!HttpContext.User.Identity.IsAuthenticated)
            //    throw new ApiException("You have to be logged in first", 401);

            return await RegistrationRepo.DeleteRegistration(Tin);
        }
    }
}