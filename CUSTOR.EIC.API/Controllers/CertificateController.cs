using System;
using System.Linq;
using System.Text.RegularExpressions;
using CUSTOR.API.ExceptionFilter;
using CUSTOR.EICOnline.DAL;
using CUSTOR.EICOnline.DAL.EntityLayer;
using IdentityServer4.Extensions;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CUSTOR.EICOnline.API.Controllers
{
  [ServiceFilter(typeof(ApiExceptionFilter))]
  [EnableCors("CorsPolicy")]
  [Produces("application/json")]
  [Route("api/Certificate")]
  public class CertificateController : Controller
  {
    private readonly ApplicationDbContext _context;

    public CertificateController(ApplicationDbContext context)
    {
      _context = context;
    }

    [HttpGet("{id}")]
    public ServiceApplication GetServiceApplication([FromRoute] int id)
    {
      ServiceApplication serviceApplicationCertificate = null;

      try
      {
        var serviceApplication = _context.ServiceApplication.First(p => p.ServiceApplicationId == id);
        var project = _context.Project.First(p => p.ProjectId == serviceApplication.ProjectId);
        var squence = _context.Squences.First();
        var lastSe = squence.LastSquence + 1;

        var perminumber = lastSe.ToString();
        squence.LastSquence = lastSe;
        // get the current ethiopian year
        DateTime now = DateTime.Now;
        int eDate = EthiopicDateTime.GetEthiopicYear(now.Day, now.Month, now.Year);
        var lastDigitOfYear = eDate.ToString().Substring(eDate.ToString().Length - 2);
        //var res2 = Regex.Match(eDate.ToString(), @"(.{2})\s*$");
        if (project.InvestmentPermitNo.IsNullOrEmpty())
        {
          _context.Entry(squence).State = EntityState.Modified;
          _context.SaveChanges();

          project.InvestmentPermitNo = "EIC-IP/"+perminumber+"/"+ lastDigitOfYear;
          _context.Entry(project).State = EntityState.Modified;
          _context.SaveChanges();


//          serviceApplication.CurrentStatusId = 44449;
//          _context.Entry(serviceApplication).State = EntityState.Modified;
//          _context.SaveChanges();
        }

        serviceApplicationCertificate = _context.ServiceApplication
          .Include(s => s.Investor)
          .Include(s => s.Project)
          .Include(s => s.Service)
          .SingleOrDefault(m => m.ServiceApplicationId == id);


        return serviceApplicationCertificate;
      }
      catch (Exception ex)
      {
        return null;
      }

      //.Include(In => In.Investor);
    }

    [HttpGet("investorAdress/{id}")]
    public Kebele GetInvestorAdress([FromRoute] int id)
    {
      var address = _context.Address.FirstOrDefault(a => a.ParentId == id);
      return _context.Kebeles
        .Include(w => w.Woreda).FirstOrDefault(x => x.KebeleId == address.KebeleId);
    }
  }
}
