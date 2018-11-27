using System;
using System.Collections.Generic;
using System.Text;

namespace CUSTOR.EICOnline.DAL.EntityLayer
{
    public class IncentiveBomDto
    {
        public int ServiceApplicationId { get; set; }
        public int ProjectId { get; set; }
        public string Description { get; set; }
        public int Quantity { get; set; }
        public DateTime? UploadDate { get; set; }
    }
}
