using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CUSTOR.EICOnline.DAL.EntityLayer
{
    public class ServiceApplicationAmendment
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public int ? ProfileUpdate { get; set; }
        public int ? InputUpdate { get; set; }
        public int ? RawMaterialUpdate { get; set; }
        public int ? CostUpdate { get; set; }
        public int ? EmploymentUpdate { get; set; }
        public int ? ShareUpdate { get; set; }
        public int ? ProductUpdate { get; set; }
        public int ? ServiceApplicationId { get; set; }

    }
}
