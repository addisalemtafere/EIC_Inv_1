using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using CUSTOR.EICOnline.API.ViewModels.enums;
using CUSTOR.EICOnline.DAL.DataAccessLayer;
using CUSTOR.EICOnline.DAL.EntityLayer;
using CUSTOR.Security;
using EICOnline.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;

namespace CUSTOR.EICOnline.API.Controllers
{
  [Produces("application/json")]
  [Route("api/Notifications")]
  public class NotificationsController : Controller
  {
    private readonly IAccountManager _accountManager;
    private readonly IOptions<SmtpConfig> _smtpConfig;
    private readonly ApplicationDbContext _context;
    private readonly IConfiguration _config;


    public NotificationsController(ApplicationDbContext context, IAccountManager accountManager,
      IOptions<SmtpConfig> smtpConfig,
      IConfiguration config)
    {
      _context = context;
      _accountManager = accountManager;
      _config = config;
      _smtpConfig = smtpConfig;
    }

    // GET: api/Notifications
    [HttpGet]
    public IEnumerable<Notification> GetNotifications()
    {
      return _context.Notifications;
    }

    // GET: api/Notifications/5
    [HttpGet("{id}")]
    public IEnumerable<Notification> GetNotification([FromRoute] string id)
    {
      var notification = _context.Notifications.Where(m => m.ToUserId == id).AsEnumerable()
        .OrderByDescending(m => m.NotitficationId);


      return notification;
    }

    // PUT: api/Notifications/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutNotification([FromRoute] int id, [FromBody] Notification notification)
    {
      if (!ModelState.IsValid) return BadRequest(ModelState);

      if (id != notification.NotitficationId) return BadRequest();

      _context.Entry(notification).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!NotificationExists(id))
          return NotFound();
        throw;
      }

      return NoContent();
    }

    [HttpGet("ChangeStatus/{id}")]
    public async Task<IActionResult> NotificationStatus([FromRoute] int id)
    {
      var notification = _context.Notifications.First(s => s.NotitficationId == id);
      notification.isActive = false;
      _context.Entry(notification).State = EntityState.Modified;
      await _context.SaveChangesAsync();

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!NotificationExists(id))
          return NotFound();
        throw;
      }

      return NoContent();
    }


    [HttpGet("CountNotification/{id}")]
    public async Task<int> CountNotification([FromRoute] string id)
    {
      var notification = _context.Notifications.Where(m => m.ToUserId == id && m.isActive).Count();


      return notification;
    }

    // POST: api/Notifications
    [HttpPost]
    public async Task<IActionResult> PostNotification([FromBody] Notification notification)
    {
      if (!ModelState.IsValid) return BadRequest(ModelState);

      try
      {
        var user = await _accountManager.GetUserByIdAsync(notification.UserId);
        var email = user.Email;
        using (var client = new WebClient())
        using (client.OpenRead("http://clients3.google.com/generate_204"))
        {
          await PostSendGmailAsync(email, notification.Message);
        }
      }
      catch
      {
      }


      var edtitedNotification = notification;
      edtitedNotification.isActive = true;
      edtitedNotification.CreatedDate = DateTime.Now;


      var serviceApplication =
        _context.ServiceApplication.First(p => p.ServiceApplicationId == notification.ServiceApplicationId);
      serviceApplication.IsActive = true;
      serviceApplication.CurrentStatusId = Convert.ToInt32(notification.CurrentStatus);
      if ((int) ApplicationStatus.approved == Convert.ToInt32(notification.CurrentStatus))
      {
//        serviceApplication.IsApproved = true; //Todo
      }
      if ((int)ApplicationStatus.Pending == Convert.ToInt32(notification.CurrentStatus))
      {
        serviceApplication.CurrentStatusId = (int)ApplicationStatus.Drafted;
      }
      _context.Entry(serviceApplication).State = EntityState.Modified;

      _context.Notifications.Add(edtitedNotification);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetNotification", new {id = edtitedNotification.NotitficationId},
        edtitedNotification);
    }


    // DELETE: api/Notifications/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteNotification([FromRoute] int id)
    {
      if (!ModelState.IsValid) return BadRequest(ModelState);

      var notification = await _context.Notifications.SingleOrDefaultAsync(m => m.NotitficationId == id);
      if (notification == null) return NotFound();

      _context.Notifications.Remove(notification);
      await _context.SaveChangesAsync();

      return Ok(notification);
    }

    private bool NotificationExists(int id)
    {
      return _context.Notifications.Any(e => e.NotitficationId == id);
    }


//    public async Task<IActionResult> PostSendGmailAsync(string destinationEmail, string message)
//    {
//
//
//      var _emailSender = new EmailSendGrid(_config);
//      var strMessage = EmailTemplates.GetTestEmail("test", new DateTime());
//      await _emailSender.SendEmailAsync(destinationEmail, "Confirm your account", message);
//      return Ok();
//
//    }


    public async Task<string> PostSendGmailAsync(string destinationEmail, string message)
    {
      var client = new SmtpClient();
      client.DeliveryMethod = SmtpDeliveryMethod.Network;
      client.EnableSsl = _smtpConfig.Value.UseSSL;
      client.Host = _smtpConfig.Value.Host;
      client.Port = _smtpConfig.Value.Port;
      // setup Smtp authentication
      var credentials = new NetworkCredential(_smtpConfig.Value.Username, _smtpConfig.Value.Password);
      client.UseDefaultCredentials = false;
      client.Credentials = credentials;
      //can be obtained from your model
      var msg = new MailMessage();
      msg.From = new MailAddress(_smtpConfig.Value.EmailAddress);
      msg.To.Add(new MailAddress(destinationEmail));

      msg.Subject = "EIC Notifications";
      msg.IsBodyHtml = true;
      msg.Body = string.Format("<html><head></head><body>" +
                               "<b>Dear   Customer,</b><br>" +
                               "<p>" + message + "<p/><br><br><br>" +
                               "I want to thank you for reading and wish you an awesome weekend <br><br> Kind Regards,<br><br>" +
                               "<b>Tel:  (+251) 11 5507131 </b><br><br>" +
                               "<b>E-mail: ethioinvest@ethio-invest.com </b><br><br>" +
                               "<b>website: www.investethiopia.gov.et or www.theiguides.org/ethiopia </b><br><br>" +
                               "<h3>Ethiopian Investment Commission Licensing Team </h3>" +
                               "<h3>Ethiopian Investment Commission Ethiopia</h3>" +
                               "<a href='http://www.invest-ethiopia.com/login'>Ethiopian Investment<a>" +
                               "</body>");
      try
      {
        await client.SendMailAsync(msg);
        return "OK";
      }
      catch (Exception ex)
      {
        return "error:" + ex;
      }
    }
  }
}
