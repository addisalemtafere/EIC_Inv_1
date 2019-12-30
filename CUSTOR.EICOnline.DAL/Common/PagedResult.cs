using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using CUSTOR.EICOnline.DAL.EntityLayer;

namespace CUSTOR.EICOnline.DAL
{
    public class PagedResult<T>
    {
        public List<ServiceApplication> Items { get; set; }
        public List<ServiceAppDto> Item { get; set; }
       public int ItemsCount { get; set; }
    }
}