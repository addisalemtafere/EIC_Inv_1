using System;
using System.ComponentModel.DataAnnotations;

namespace CUSTOR.EICOnline.DAL.EntityLayer
{
    public partial class BudgetYearType
    {
        public BudgetYearType()
        {
        }

        [Key]
        public string Code { get; set; }
        public string Description { get; set; }
        public string amDescription { get; set; }
        public bool IsActive { get; set; }
    }
}