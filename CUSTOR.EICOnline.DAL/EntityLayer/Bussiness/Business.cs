using System;
using System.Collections.Generic;
using System.Text;

namespace CUSTOR.EICOnline.DAL.EntityLayer
{
   public class Business
    {
        public int ID { get; set; }

        public Guid MainGuid { get; set; }
        public int ServiceApplicationId { get; set; }

        public string TradeNameAmh { get; set; }
        public string TradesName { get; set; }

        public string IsWaiting { get; set; }

        public string OwnerTIN { get; set; }

        public DateTime DateRegistered { get; set; }

        public string LicenceNumber { get; set; }

        public bool ? IsPrivouslyRegistered { get; set; }

        public string PrivouslicenceNumber { get; set; }

        public DateTime ? PrivousDateRegistered { get; set; }

        public string Status { get; set; }

        public DateTime ? TradeNameDate { get; set; }

        public bool ? IsTradeNameGiven { get; set; }

        public DateTime ? ExtensionFrom { get; set; }

        public DateTime ? ExtensionTo { get; set; }

        public decimal Capital { get; set; }

        public string SiteID { get; set; }

        public string  SiteName { get; set; }

        public bool ? IsReplaced { get; set; }

        public DateTime ? ReplacementDate { get; set; }

        public string ReplacementResion { get; set; }

        public Guid ? TradeNameGuid { get; set; }

        public DateTime ? CancellationDate { get; set; }

        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }

    }
}
