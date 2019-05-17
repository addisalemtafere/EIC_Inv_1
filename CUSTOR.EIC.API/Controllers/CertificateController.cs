using System;
using System.Linq;
using CUSTOR.API.ExceptionFilter;
using CUSTOR.EICOnline.DAL;
using CUSTOR.EICOnline.DAL.EntityLayer;
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
      try
      {
        var serviceApplication = _context.ServiceApplication.First(p => p.ServiceApplicationId == id);

        var project = _context.Project.First(p => p.ProjectId == serviceApplication.ProjectId);
        var squence = _context.Squences.FirstOrDefault();
        var lastSe = squence.LastSquence + 1;

        var perminumber = lastSe.ToString();
        squence.LastSquence = lastSe;

        if (project.InvestmentPermitNo == "" || project.InvestmentPermitNo == null)
        {
          _context.Entry(squence).State = EntityState.Modified;

          project.InvestmentPermitNo = perminumber;
          _context.Entry(project).State = EntityState.Modified;
          _context.SaveChanges();
        }

        return _context.ServiceApplication
          .Include(s => s.Investor)
          .Include(s => s.Project)
          .Include(s => s.Service)
          .SingleOrDefault(m => m.ServiceApplicationId == id);
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
      return _context.Kebeles.Include(w => w.Woreda)
        //.ThenInclude(z => z.Zone)
        //.ThenInclude(r => r.Region)
        .Where(x => x.KebeleId == address.KebeleId).FirstOrDefault();
      //.Include(In => In.Investor);
    }
  }
}
