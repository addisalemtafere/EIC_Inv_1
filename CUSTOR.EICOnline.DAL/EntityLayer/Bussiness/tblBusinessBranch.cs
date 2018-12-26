using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CUSTOR.EICOnline.DAL.EntityLayer
{
   public class tblBusinessBranch
    {
        public Guid MainGuid { get; set; }

        public Guid ParentGuid { get; set; }

        public string OwnerTIN { get; set; }

        public bool IsReg { get; set; }

        public bool IsMainOffice { get; set; }

        public string BranchName { get; set; }

        public string Zone { get; set; }

        public string City { get; set; }

        public string RegionID { get; set; }

        public string WoredaID { get; set; }

        public string KebeleID { get; set; }

        public string HouseNo { get; set; }

        public string Tel { get; set; }

        public string MobileNo { get; set; }

        public string Fax { get; set; }

        public string Pobox { get; set; }

        public string Email { get; set; }

        public string Username { get; set; }

        public DateTime EventDateTime { get; set; }

        public string UpdatedUsername { get; set; }

        public DateTime? UpdatedEventDatetime { get; set; }

        public int Location { get; set; }

        public bool IsAddisAbaba { get; set; }

        public int ID { get; set; }

        public string HouseNoSort { get; set; }

        [ForeignKey(nameof(RegionID))]
        public virtual Region Region { get; set; }

        [ForeignKey(nameof(WoredaID))]
        public virtual Woreda Woreda { get; set; }

        [ForeignKey(nameof(Zone))]
        public virtual Zone Zones { get; set; }
    }
}
