using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace CUSTOR.EICOnline.DAL.EntityLayer
{
    public class RegistrationCatagoryAudit
    {
        [Key]
        public int RegistrationCatagoryId { get; set; }
        public int InvestorId { get; set; }
//        public string Tin { get; set; }
        public string MajorCatagoryCode { get; set; }

    }
}
