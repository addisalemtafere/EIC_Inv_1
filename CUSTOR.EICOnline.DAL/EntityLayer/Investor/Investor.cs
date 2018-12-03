using CUSTOR.EICOnline.DAL.Enum;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CUSTOR.EICOnline.DAL.EntityLayer
{
    public partial class Investor : IAuditableEntity
    {
        public Investor()
        {
            //Associate = new HashSet<Associate>();

        }

        public virtual string InvestorName
        {
            get
            {
                string investorName = FirstName + ' ' + FatherName + ' ' + GrandName;
                return investorName;
            }
        }

        public virtual string InvestorNameEng
        {
            get
            {
                string investorName = FirstNameEng + ' ' + FatherNameEng + ' ' + GrandNameEng;
                return investorName;
            }
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int InvestorId { get; set; }
        //public int AddressId { get; set; }
        public int LegalStatus { get; set; }

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
        public bool IsDiaspora { get; set; }
        public bool IsEthiopianOrigin { get; set; }

        //public byte?[] Photo { get; set; }
        public string Tin { get; set; }

        public string RegistrationNumber { get; set; }
        public DateTime? RegistrationDate { get; set; }
        public string TradeName { get; set; }
        public string TradeNameSort { get; set; }
        public string TradeNameSoundX { get; set; }
        public string TradeNameEnglish { get; set; }
        public string UserId { get; set; }
        //public string SiteCode { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedUserId { get; set; }
        public string UpdatedUserId { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }

        public Guid ObjectId { get; set; }

    }
}