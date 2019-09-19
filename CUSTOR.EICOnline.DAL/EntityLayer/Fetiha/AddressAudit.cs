using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CUSTOR.EICOnline.DAL.EntityLayer
{

//=======
  public partial class AddressAudit: IAuditableEntity
  {
    public AddressAudit()
    {
      //Associate = new HashSet<Associate>();
      //Investor = new HashSet<Investor>();
    }
        [Key]
        public int AddressId { get; set; }
    public int ParentId { get; set; }
    public int AddressType { get; set; }
    public bool IsMainOffice { get; set; }
    public string SpecificAreaName { get; set; }
    public string RegionId { get; set; }
    public string TownId { get; set; }
    public string ZoneId { get; set; }
    public string WoredaId { get; set; }
    public string WoredaEngId { get; set; }
    public string KebeleId { get; set; }
    public string KebeleEngId { get; set; }
    public string HouseNo { get; set; }
    public string TeleNo { get; set; }
    public string Pobox { get; set; }
    public string Fax { get; set; }
    public string CellPhoneNo { get; set; }
    public string Email { get; set; }
    public string OtherAddress { get; set; }
    public bool? IsIndustrialPark { get; set; }
    public int? IndustrialParkId { get; set; }
    public string Remark { get; set; }
    public bool? IsActive { get; set; }
    public bool IsDeleted { get; set; }
    public string CreatedUserId { get; set; }
    public string UpdatedUserId { get; set; }
    public DateTime? CreatedDate { get; set; }
    public string CreatedBy { get; set; }
    public DateTime? UpdatedDate { get; set; }
    public string UpdatedBy { get; set; }
    public Guid? ObjectId { get; set; }
    //public Kebele Kebele { get; set; }
    public Region Region { get; set; }
    public Town Town { get; set; }
    //public Woreda Woreda { get; set; }
    public Zone Zone { get; set; }
    //public ICollection<Associate> Associate { get; set; }
    //public ICollection<Investor> Investor { get; set; }
  }
//>>>>>>> 762bf64ab2d44d1ac3e49efdbea16147bb995aaa:CUSTOR.EICOnline.DAL/EntityLayer/Address/Address.cs
}