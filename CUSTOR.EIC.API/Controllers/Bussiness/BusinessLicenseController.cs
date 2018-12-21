using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CUSTOR.EICOnline.API.ViewModels.Bussiness;
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
        //[HttpGet("GetBusinessLicensingGroup/{id}")]
        //public async Task<List<BussinessLicenseVM>> GetRecords(int id)
        //{
        //    List<BussinessLicenseVM> BusinessLicense = null;
        //    try
        //    {
        //        BusinessLicense = await context.BusinessLicensingGroup
        //            .Where(bg => bg.BusinessId == id).ToListAsync();
        //    }
        //    catch (InvalidOperationException)
        //    {
        //        //SetError("Couldn't load tblMajorDivisions");
        //        return null;
        //    }
        //    catch (Exception ex)
        //    {
        //        //SetError(ex);
        //    }
        //    return BusinessLicense;
        //}

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