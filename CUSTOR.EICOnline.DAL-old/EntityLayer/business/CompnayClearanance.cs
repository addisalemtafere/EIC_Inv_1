﻿using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CUSTOR.EICOnline.DAL.EntityLayer.business
{
    public partial class CompanyClearance
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CompanyClearanceId { get; set; }

        public int InvestorId { get; set; }

        public string CompanyNameOneEnglish { get; set; }
        public string CompanyNameOneAmharic { get; set; }
        public bool IsCompanyNameOneApproved { get; set; }

        public string CompanyNameTwoEnglish { get; set; }
        public string CompanyNameTwoAmharic { get; set; }
        public bool IsCompanyNameTwoApproved { get; set; }


        public string CompanyNameThreeEnglish { get; set; }
        public string CompanyNameThreeAmharic { get; set; }
        public bool IsCompanyNameThreeApproved { get; set; }

        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
        public Guid ObjectId { get; set; }

        [NotMapped]
        public int? workFlowId { get; set; }
    }
}