using System;
using System.Collections.Generic;
using CUSTOR.EICOnline.DAL.EntityLayer;
using System.ComponentModel.DataAnnotations;
namespace CUSTOR.EICOnline.DAL
{
  public partial class Town
  {
        [Key]
        public string TownId { get; set; }
        public string RegionId { get; set; }
        public string Description { get; set; }
        public string DescriptionEnglish { get; set; }
        public string CreatedUserName { get; set; }
        public Region Region { get; set; }
    }

    public partial class TownViewModel
    {
        public TownViewModel()
        {
        }

        [Key]
        public string TownId { get; set; }

        public string RegionId { get; set; }
        public string Description { get; set; }
        //public string DescriptionEnglish { get; set; }
    }
}