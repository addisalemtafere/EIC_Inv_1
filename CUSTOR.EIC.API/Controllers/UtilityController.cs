using System;
using System.Collections.Generic;
using CUSTOR.API.ExceptionFilter;
using CUSTOR.EICOnline.DAL.EntityLayer;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using OfficeOpenXml.FormulaParsing.Excel.Functions.DateTime;

namespace CUSTOR.EICOnline.API.Controllers
{
  [ServiceFilter(typeof(ApiExceptionFilter))]
  [EnableCors("CorsPolicy")]
  [Produces("application/json")]
  [Route("api/EthiopianDate")]
  public class UtilityController : Controller
  {
    [HttpGet]
    public string GetEthiopianDateNow()
    {
      DateTime now = DateTime.Now;
      Console.WriteLine("Now = " + now);
      string eDate = EthiopicDateTime.GetEthiopicDate(now.Day, now.Month, now.Year);
      return eDate;
    }
    [HttpGet("{day}/{month}/{year}")]
    public string GetEthiopianDate([FromRoute] int day, int month, int year)
    {
      string eDate = EthiopicDateTime.GetEthiopicDate(day, month, year);
      return eDate;
    }
  }
}
