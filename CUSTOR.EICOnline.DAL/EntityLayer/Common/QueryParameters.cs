using System;
using System.Collections.Generic;
using System.Text;

namespace CUSTOR.EICOnline.DAL.EntityLayer
{
    public class QueryParameters
    {
        public int PageNumber { get; set; } = 1;
//        public int CustomerId { get; set; } = 1;
        public int PageCount  { get; set; } = 5;
        public string Lang { get; set; }
    }
}
