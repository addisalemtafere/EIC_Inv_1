using CUSTOR.EICOnline.DAL.EntityLayer.Incentive;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CUSTOR.EICOnline.DAL.EntityLayer
{
    public partial class IncentiveRequest
    {
        public IncentiveRequest()
        {
            //IncentiveRequestDocument = new HashSet<IncentiveRequestDocument>();
            IncentiveRequestItem = new HashSet<IncentiveRequestItem>();
        }

        public int IncentiveRequestId { get; set; }
        public int ServiceApplicationId { get; set; }
        public int CustomsSiteId { get; set; }
        public int? RequestTypeId { get; set; }
        public int? ProjectId { get; set; }
        public int? IncentiveCategoryId { get; set; }
        public int? CurrencyType { get; set; }
        public decimal? CurrencyRate { get; set; }
        public DateTime? RequestDate { get; set; }
        public decimal? Amount { get; set; }

        public int? Quantity { get; set; }

        //public int? UnitId { get; set; }
        //public int? RequestBatchNo { get; set; }
        public string InvoiceNo { get; set; }
        public bool? IsApproved { get; set; }
        public bool? IsBankPermit { get; set; }
        public bool? IsExporter { get; set; }
        public string FileNo { get; set; }
        public int? Status { get; set; }

        public int? Phase { get; set; }

        //public DateTime? ApprovedDate { get; set; }
        //public DateTime? EffectiveDate { get; set; }
        //public DateTime? ExpirationDate { get; set; }
        public string Remark { get; set; }
        public bool? IsActive { get; set; }
        public bool? IsDeleted { get; set; }
        public DateTime? EventDatetime { get; set; }
        public int? CreatedUserId { get; set; }
        public string CreatedUserName { get; set; }
        public DateTime? UpdatedEventDatetime { get; set; }
        public int? UpdatedUserId { get; set; }
        public string UpdatedUserName { get; set; }
        public Guid? ObjectId { get; set; }

        //public Lookup CustomsSite { get; set; }
        //public Lookup RequestType { get; set; }
        public ServiceApplication ServiceApplication { get; set; }

        // public ICollection<IncentiveRequestDocument> IncentiveRequestDocument { get; set; }
        public ICollection<IncentiveRequestItem> IncentiveRequestItem { get; set; }
    }

    public class IncentiveRequestDTO
    {
        public IncentiveRequestDTO()
        {
        }

        [Key] public int IncentiveRequestId { get; set; }
        public int ServiceApplicationId { get; set; }
        public int? ProjectId { get; set; }
        public string IncentiveCategory { get; set; }
        public int IncentiveCategoryId { get; set; }
        public decimal? Amount { get; set; }
        public int? Quantity { get; set; }
        public string InvoiceNo { get; set; }
        public int CustomsSiteId { get; set; }
        public string CustomsSite { get; set; }
        public DateTime? RequestDate { get; set; }
        public decimal? CurrencyRate { get; set; }
        public int? CurrencyType { get; set; }
        public bool? IsBankPermit { get; set; }
        public bool? IsExporter { get; set; }
        public string FileNo { get; set; }
        public string ChassisNo { get; set; }
        public int? Phase { get; set; }
    }

    public class IncentiveRequestsDTO
    {
        public IncentiveRequestsDTO()
        {
        }

        [Key] public int IncentiveRequestId { get; set; }
        public int ServiceApplicationId { get; set; }
        public int? ProjectId { get; set; }
        public string IncentiveCategory { get; set; }
        public int IncentiveCategoryId { get; set; }
        public decimal? Amount { get; set; }
        public int? Quantity { get; set; }
        public string InvoiceNo { get; set; }
        public int CustomsSiteId { get; set; }
        public string CustomsSite { get; set; }
        public DateTime? RequestDate { get; set; }
        public decimal? CurrencyRate { get; set; }
        public int? CurrencyType { get; set; }
        public bool? IsBankPermit { get; set; }
        public bool? IsExporter { get; set; }
        public string FileNo { get; set; }
        public int? Phase { get; set; }
    }
}