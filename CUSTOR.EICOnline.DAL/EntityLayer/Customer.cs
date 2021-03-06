using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CUSTOR.EICOnline.DAL.EntityLayer
{
  public partial class Customer : AuditableEntity
  {
    public Customer()
    {
    }

    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int? CustomerId { get; set; }

    public bool IsCompany { get; set; }

    public string Title { get; set; }

    public string FirstName { get; set; }

    //public string FirstNameSort { get; set; }

    //public string FirstNameSoundx { get; set; }

    public string FatherName { get; set; }

    //public string FatherNameSort { get; set; }

    //public string FatherNameSoundx { get; set; }

    public string GrandName { get; set; }

    //public string GrandNameSort { get; set; }

    //public string GrandNameSoundx { get; set; }

    public int? Gender { get; set; }

    public DateTime? BirthDate { get; set; }

    //public string IdNumber { get; set; }

    //public string IDGivingBody { get; set; }

    public string Region { get; set; }

    //public string City { get; set; }

    public string Zone { get; set; }

    public string Woreda { get; set; }

    public string Kebele { get; set; }

    //public string HouseNo { get; set; }

    //public string TeleOffice { get; set; }

    //public string TeleResidence { get; set; }

    //public string MobileNo { get; set; }

    //public string POBox { get; set; }

    //public string Fax { get; set; }

    //public string Email { get; set; }
    public int? MaritalStatus { get; set; }

    public int? Nationality { get; set; }

    //public Byte[]? Photo { get; set; }

    //public string SiteCode { get; set; }

    //public string UserName { get; set; }

    //public DateTime? EventDatetime { get; set; }

    //public string UpdatedUsername { get; set; }

    //public DateTime? UpdatedEventDatetime { get; set; }

    //public string Remark { get; set; }

    //public Collection<Order> Orders { get; set; }
  }
}