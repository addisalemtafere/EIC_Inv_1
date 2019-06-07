using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace CUSTOR.EICOnline.DAL
{
    public class PagedResult<T>
    {
        public IEnumerable<T> Items { get; set; }

        public int ItemsCount { get; set; }
    }
}
