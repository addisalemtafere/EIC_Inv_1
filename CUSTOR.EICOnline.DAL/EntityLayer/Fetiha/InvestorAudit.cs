﻿using CUSTOR.EICOnline.DAL.Enum;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CUSTOR.EICOnline.DAL.EntityLayer
{
    public partial class InvestorAudit : IAuditableEntity
    {
        public InvestorAudit()
        {
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public int ? InvestorId { get; set; }
        public int ? LegalStatus { get; set; }

        public int? Title { get; set; }
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

        //public DateTime? DateOfBirth { get; set; }
        public int? Gender { get; set; }
        public int? FormOfOwnership { get; set; }
        public int? Nationality { get; set; }
        public int? BranchCountry { get; set; }
        public bool ?IsDiaspora { get; set; }
        public bool ?IsEthiopianOrigin { get; set; }

        //public byte?[] Photo { get; set; }
        public string Tin { get; set; }

        public string RegistrationNumber { get; set; }
        public DateTime? RegistrationDate { get; set; }

        public decimal? PaidCapital { get; set; }
        public decimal? SighnedCapital { get; set; }

        [NotMapped]
        public int[] RegistrationCatagories { get; set; }

        public string UserId { get; set; }
        //public string SiteCode { get; set; }
        public bool? IsExistingCustomer { get; set; }        
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedUserId { get; set; }
        public string UpdatedUserId { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }

        public Guid ? ObjectId { get; set; }

        public int ? ServiceApplicationId { get; set; }


    }
    public class InvestorAuditDTO
    {
        public InvestorAuditDTO()
        {
        }
        public int? InvestorId { get; set; }
        public int ? AddressId { get; set; }
        public int? LegalStatus { get; set; }

        public int? Title { get; set; }
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
        public int? Gender { get; set; }
        public int? FormOfOwnership { get; set; }
        public int? Nationality { get; set; }
        public int? BranchCountry { get; set; }
        public bool? IsDiaspora { get; set; }
        public bool? IsEthiopianOrigin { get; set; }
        public string Tin { get; set; }
        public string RegistrationNumber { get; set; }
        public DateTime? RegistrationDate { get; set; }


        public decimal? PaidCapital { get; set; }
        public decimal? SighnedCapital { get; set; }

        [NotMapped]
        public int[] RegistrationCatagories { get; set; }

        public string UserId { get; set; }
        //public string SiteCode { get; set; }
        public bool? IsExistingCustomer { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public bool? IsMainOffice { get; set; }
        public Guid? ObjectId { get; set; }
        public string RegionId { get; set; }
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
        public string UserName { get; set; }
        public int ? ServiceApplicationId { get; set; } 

        public string FaxNo { get; set; }
        public string Tele { get; set; }
        public string MobilePhone { get; set; }
        public int  ProjectId { get; set; }
        public string CreatedUserId { get; set; }
        public DateTime ? UpdatedDate { get; set; }

        public bool ? IsNew { get; set; }

    }
}