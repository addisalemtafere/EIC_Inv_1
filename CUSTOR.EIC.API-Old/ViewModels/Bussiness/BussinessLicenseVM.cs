using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CUSTOR.EICOnline.API.ViewModels.Bussiness
{
    public class BussinessLicenseVM
    {
        public int BusinessId { get; set; }
        public string MajorDivision { get; set; }
        public string Division { get; set; }
        public string MajorGroup { get; set; }
        public string Group { get; set; }
        public List<string> SubGroup { get; set; }

    }
}
