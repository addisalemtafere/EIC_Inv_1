using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CUSTOR.EICOnline.DAL.EntityLayer;
using CUSTOR.EICOnline.DAL.DataAccessLayer;
using CUSTOR.API.ExceptionFilter;
using IdentityServer4.Extensions;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Hosting;
using CUSTOR.Security;
using CUSTOR.EICOnline.DAL;

namespace CUSTOR.EICOnline.API.Controllers
{
    [Produces("application/json")]
    [Route("api/Associates")]
    [ServiceFilter(typeof(ApiExceptionFilter))]
    [EnableCors("CorsPolicy")]
    public class AssociatesController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly AssociateRepository Repository;
        private readonly IHostingEnvironment host;
        private readonly IAccountManager accountManager;
        public AssociatesController(ApplicationDbContext context, AssociateRepository associate, IHostingEnvironment host, IAccountManager accManager)
        {
            _context = context;
            Repository = associate;
            this.host = host;
            this.accountManager = accManager;
        }

        // GET: api/Associates
        [HttpGet]
        public IEnumerable<Associate> GetAssociate()
        {
            return Repository.GetAll();
        }

        [HttpGet("ByInvestorId/{id}")]
        public IEnumerable<Associate> GetAssociateByInvestorID([FromRoute] int id)
        {
            return _context.Associate
              .Where(p => p.InvestorId == id);
        }



        [HttpGet("GetOneAssociateByInvestorId/{id}")]
        public async Task<AssociateDTO> GetOneAssociateByInvestorID([FromRoute] int id)
        {
            return await Repository.GetAssociateByInvestorId(id);
            //var associate = await _context.Associate.FirstOrDefaultAsync(m => m.InvestorId == id);
            //return associate;
        }



        [HttpGet("{id:int}")]
        public async Task<AssociateDTO> GetAssociate(int id)
        {
            return await Repository.GetAssociate(id);
        }

        [HttpPost]
        public async Task<AssociateDTO> PostAssociate([FromBody] AssociateDTO associateDTO)
        {
            AssociateDTO mgr = null;

            ApplicationUser appUser = await accountManager.GetUserByUserNameAsync(associateDTO.UserName);
            // to-do check if appUser is valid
            try
            {
                mgr = await Repository.SaveAssociate(associateDTO, appUser);
            }
            catch (Exception ex)
            {
                throw new ApiException(ex.Message);
            }
            if (!string.IsNullOrEmpty(associateDTO.PhotoData))
            {
                // Create photo file
                var photoPath = Path.Combine(host.WebRootPath, "Photo");
                if (!Directory.Exists(photoPath))
                    Directory.CreateDirectory(photoPath);
                var fileName = "Mgr" + mgr.AssociateId.ToString() + ".jpg"; //put "Mgr" as constant in config file
                var filePath = Path.Combine(photoPath, fileName);

                using (FileStream fs = new FileStream(filePath, FileMode.Create))
                {
                    using (BinaryWriter bw = new BinaryWriter(fs))
                    {
                        byte[] data = Convert.FromBase64String(associateDTO.PhotoData);
                        bw.Write(data);
                        bw.Close();
                    }
                }

            }
            return mgr;
        }

        [HttpDelete("{assId}")]
        public async Task<IActionResult> DeleteAssociate([FromRoute] int assId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!await  Repository.DeleteAssociate(assId))
                throw new ApiException("Record could not be deleted");


            //Now delete the photo file
            var photoPath = Path.Combine(host.WebRootPath, "Photo");
            if (Directory.Exists(photoPath))
            {
                var fileName = "Mgr" + assId.ToString() + ".jpg"; //put "Mgr" as constant in config file
                var filePath = Path.Combine(photoPath, fileName);
                try
                {
                    if (System.IO.File.Exists(filePath))
                        System.IO.File.Delete(filePath);
                }
                catch { }

            }

            return Ok();
        }

        private bool AssociateExists(int id)
        {
            return _context.Associate.Any(e => e.AssociateId == id);
        }
    }
}
