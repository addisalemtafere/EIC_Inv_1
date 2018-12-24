using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CUSTOR.EICOnline.API.ViewModels.Bussiness;
using CUSTOR.EICOnline.DAL.DataAccessLayer.Bussiness;
using CUSTOR.EICOnline.DAL.EntityLayer;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CUSTOR.EICOnline.API.Controllers.Bussiness
{
    [Produces("application/json")]
    [Route("api")]
    public class BusinessLicenseController : Controller
    {
        private ApplicationDbContext context;
        public BusinessLicenseController(ApplicationDbContext ctx)
        {
            context = ctx;
        }

        [HttpGet("GetBusinessLicenseGroup/{businessId:int}")]
        public async Task<List<BusinessLicensingGroup>> GetBusinessLicenseGroup(int businessId)
        {
            BusinessLicensingGroupRepository businessLicenseGroupRepo = new BusinessLicensingGroupRepository(context);
            return await businessLicenseGroupRepo.GetRecords(businessId);
        }

        [HttpPost("SaveBussinessLicense")]
        public async Task<IActionResult> SaveBussinessLicense([FromBody] BussinessLicenseVM bussinesslicense)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                BusinessLicensingGroup BusinessLicens = new BusinessLicensingGroup();
                List<BusinessLicensingGroup> businessLicenseDel = context.BusinessLicensingGroup.Where(param => param.BusinessId == bussinesslicense.BusinessId && bussinesslicense.Group == param.BGroup.ToString()).ToList();
                foreach (BusinessLicensingGroup bussinesslicens in businessLicenseDel)
                {
                    context.BusinessLicensingGroup.Remove(bussinesslicens);
                }
                for (int i = 0; bussinesslicense.SubGroup.Count > i; i++)
                {
                    BusinessLicens = new BusinessLicensingGroup();
                    BusinessLicens.BusinessId = bussinesslicense.BusinessId;
                    BusinessLicens.BGroup = Convert.ToInt16(bussinesslicense.Group);
                    BusinessLicens.Division = Convert.ToInt16(bussinesslicense.Division);
                    BusinessLicens.MajorDivision = Convert.ToInt16(bussinesslicense.MajorDivision);
                    BusinessLicens.MajorGroup = Convert.ToInt16(bussinesslicense.MajorGroup);
                    BusinessLicens.SubGroup = Convert.ToInt16(bussinesslicense.SubGroup[i]);
                    context.BusinessLicensingGroup.Add(BusinessLicens);
                }
                await context.SaveChangesAsync();
            }
            catch (Exception ex)
            { }
            return CreatedAtAction("SaveBussinessLicense", new { id = bussinesslicense.Group }, bussinesslicense);
        }
    }
}