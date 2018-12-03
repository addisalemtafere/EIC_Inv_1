using System;
using System.Collections.Generic;
using System.Text;

namespace CUSTOR.EICOnline.DAL.EntityLayer
{
    public class RegistrationCatagory
    {
        public int ID { get; set; }
        //public Guid MainGuid { get; set; }
        public int InvestorId { get; set; }
        //public string Tin { get; set; }
        public string MajorCatagoryCode { get; set; }

    }
}
