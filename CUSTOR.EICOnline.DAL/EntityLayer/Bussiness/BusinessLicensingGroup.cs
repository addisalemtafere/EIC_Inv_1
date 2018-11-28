using CUSTOR.EntityFrameworkCommon;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CUSTOR.EICOnline.DAL.EntityLayer
{
   public class BusinessLicensingGroup
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid MainGuid { get; set; }

        public Guid BusinessMainGuid { get; set; }

        public int MajorDivision { get; set; }

        public int Division { get; set; }

        public int MajorGroup { get; set; }

        public int BGroup { get; set; }

        public int SubGroup { get; set; }

        public int LicensingCategoryCode { get; set; }

        public int Location { get; set; }

        public bool IsAddisAbaba { get; set; }
    }
}
