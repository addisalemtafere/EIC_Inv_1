using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CUSTOR.EICOnline.DAL.EntityLayer
{
    public class BussinessBranchVM
    {
        public int AddressId { get; set; }
        public string ParentId { get; set; }

        public string RegionName { get; set; }

        public string ZoneName { get; set; }

        public string WoredaName { get; set; }

        public string HouseNo { get; set; }
    }
}
