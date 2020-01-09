using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace CUSTOR.EICOnline.DAL.EntityLayer
{
    public class BomError
    {
        [Key]
        public int Id { get; set; }
        public int ProjectId { get; set; }
        public string Description { get; set; }
        public int Row { get; set; }
        public int Phase { get; set; }
        public DateTime EventDatetime { get; set; }
        
    }
}
