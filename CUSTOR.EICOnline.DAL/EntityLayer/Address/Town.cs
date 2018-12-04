using CUSTOR.EICOnline.DAL.EntityLayer;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CUSTOR.EICOnline.DAL
{
    public partial class Town
    {
        public string TownId { get; set; }
        public string RegionId { get; set; }
        public string Description { get; set; }
        public string DescriptionEnglish { get; set; }
        public string Username { get; set; }
        public DateTime EventDatetime { get; set; }
        public string UpdatedUsername { get; set; }
        public DateTime? UpdatedEventDatetime { get; set; }

        public Region Region { get; set; }
        public ICollection<Address> Address { get; set; }
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
