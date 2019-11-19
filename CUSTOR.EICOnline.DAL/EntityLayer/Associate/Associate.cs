﻿using System;
using System.Collections.Generic;
using CUSTOR.EICOnline.DAL.EntityLayer.AllAddress;

namespace CUSTOR.EICOnline.DAL.EntityLayer
{
    public partial class Associate : IAuditableEntity
    {
        public Associate()
        {
            //ProjectAssociate = new HashSet<ProjectAssociate>();
        }

        public int AssociateId { get; set; }
        public string Tin { get; set; }
        public int Title { get; set; }
        public int InvestorId { get; set; }
        public string FirstName { get; set; }
        public string FirstNameSort { get; set; }
        public string FirstNameSoundx { get; set; }
        public string FirstNameEng { get; set; }
        public string FatherName { get; set; }
        public string FatherNameSort { get; set; }
        public string FatherNameSoundx { get; set; }
        public string FatherNameEng { get; set; }
        public string GrandName { get; set; }
        public string GrandNameSort { get; set; }
        public string GrandNameSoundx { get; set; }
        public string GrandNameEng { get; set; }
        public DateTime DateOfBirth { get; set; }
        public int Gender { get; set; }
        public int Nationality { get; set; }
        public int Origin { get; set; }
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

        public ICollection<ProjectAssociate> ProjectAssociate { get; set; }
    }
    public partial class AssociateAddressDTO
    {

        public int AssociateId { get; set; }
        public string Tin { get; set; }
        public int Title { get; set; }
        public int InvestorId { get; set; }
        public string FirstName { get; set; }
        public string FirstNameEng { get; set; }
        public string FatherName { get; set; }
        public string FatherNameEng { get; set; }
        public string GrandName { get; set; }
        public string GrandNameEng { get; set; }
        public DateTime DateOfBirth { get; set; }
        public int Gender { get; set; }
        public int Nationality { get; set; }
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

        public byte[] Photo { get; set; }
    public string Origin { get; set; }
    public string MobilePhone { get; set; }
    public string RegularPhone { get; set; }
    public string RegionId { get; set; }
    public string ZoneId { get; set; }
    public string WoredaId { get; set; }
    public string KebeleId { get; set; }
    public string HouseNo { get; set; }
    public string Pobox { get; set; }
    public string FaxNo { get; set; }
    public string Email { get; set; }
    public string OtherAddress { get; set; }
    public string Tele { get; set; }
    public bool ? IsMainOffice { get; set; }
}

}