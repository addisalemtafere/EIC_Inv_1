using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using OfficeOpenXml.FormulaParsing.Excel.Functions.DateTime;

namespace CUSTOR.EICOnline.DAL.EntityLayer
{
    public class ServiceAppDto1
    {
        public int? ProjectId { get; set; }
        public int? Phase { get; set; }
        public string Description { get; set; }
        public string HsCode { get; set; }
        public decimal Quantity { get; set; }
        public decimal Balance { get; set; }
        public string MesurmentUnit { get; set; }
        public bool? IsApproved { get; set; }
    }
}