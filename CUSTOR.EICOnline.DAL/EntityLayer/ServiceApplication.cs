using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using OfficeOpenXml.FormulaParsing.Excel.Functions.DateTime;

namespace CUSTOR.EICOnline.DAL.EntityLayer
{
    public partial class ServiceApplication
    {
        public ServiceApplication()
        {
            DataChangeRequest = new HashSet<DataChangeRequest>();
            IncentiveRequest = new HashSet<IncentiveRequest>();
            IncentiveBoMRequestItem = new HashSet<IncentiveBoMRequestItem>();
            Order = new HashSet<Order>();
            ProjectCancellation = new HashSet<ProjectCancellation>();
            ProjectRenewal = new HashSet<ProjectRenewal>();
            ServiceWorkflow = new HashSet<ServiceWorkflow>();
            ServiceWorkflowHistories = new HashSet<ServiceWorkflowHistory>();
            Document = new HashSet<Document>();
            Service = new Service();
        }

        public int ServiceApplicationId { get; set; }
        public int? ProjectId { get; set; }
        public int InvestorId { get; set; }
        public int? ServiceId { get; set; }
        public int? TodoTaskId { get; set; }
        public string CaseNumber { get; set; }
        public string ServiceNameEnglish { get; set; }
        public string ServiceNameAmharic { get; set; }
        public string InvestorNameEnglish { get; set; }
        public string InvestorNameAmharic { get; set; }
        public string ProjectNameAmharic { get; set; }
        public string ProjectNameEnglish { get; set; }
        public DateTime StartDate { get; set; }
        //public string StartTime { get; set; }
        public DateTime? EndDate { get; set; }
        //public string EndTime { get; set; }
        public int CurrentStatusId { get; set; }
        public bool IsSelfService { get; set; }
        public bool IsPaid { get; set; }

//        public bool IsApproved { get; set; }
        public string WindowNumber { get; set; }
        public string Remark { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime EventDatetime { get; set; }
        public int CreatedUserId { get; set; }
        public string CreatedUserName { get; set; }
        public DateTime? UpdatedEventDatetime { get; set; }
        public int? UpdatedUserId { get; set; }
        public string UpdatedUserName { get; set; }
        public Guid? ObjectId { get; set; }

        public Lookup CurrentStatus { get; set; }
        public Investor Investor { get; set; }

        public Project Project { get; set; }

        //public IncentiveBoMRequestItem IncentiveBoMRequestItem { get; set; }
        public Service Service { get; set; }
        public TodoTask TodoTask { get; set; }
        public ICollection<DataChangeRequest> DataChangeRequest { get; set; }
        public ICollection<IncentiveRequest> IncentiveRequest { get; set; }
        public ICollection<IncentiveBoMRequestItem> IncentiveBoMRequestItem { get; set; }
        public ICollection<Order> Order { get; set; }
        public ICollection<ProjectCancellation> ProjectCancellation { get; set; }
        public ICollection<ProjectSubstitute> ProjectSubstitute { get; set; }
        public ICollection<ProjectRenewal> ProjectRenewal { get; set; }
        public ICollection<ServiceWorkflow> ServiceWorkflow { get; set; }
        public ICollection<ServiceWorkflowHistory> ServiceWorkflowHistories { get; set; }
        public ICollection<Document> Document { get; set; }

        public static implicit operator int(ServiceApplication v)
        {
            throw new NotImplementedException();
        }

        public static implicit operator ServiceApplication(int v)
        {
            throw new NotImplementedException();
        }
    }


    public partial class ServiceApplicationDto
    {
        public int ServiceApplicationId { get; set; }
        public int? ProjectId { get; set; }
        public int InvestorId { get; set; }
        public int? ServiceId { get; set; }
        public int? TodoTaskId { get; set; }
        public string CaseNumber { get; set; }
        public string ServiceNameEnglish { get; set; }
        public string ServiceNameAmharic { get; set; }
        public string InvestorNameEnglish { get; set; }
        public string InvestorNameAmharic { get; set; }
        public string ProjectNameAmharic { get; set; }

        public string ProjectNameEnglish { get; set; }
//                public bool IsApproved { get; set; }

        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
    }

    public partial class ServiceAppDto
    {
        [Key] public int IncentiveBoMRequestItemId { get; set; }
        public int ServiceApplicationId { get; set; }
        public int? ProjectId { get; set; }
        public int? Phase { get; set; }
        public string Description { get; set; }
        public string HsCode { get; set; }
        public decimal Quantity { get; set; }
        public decimal Balance { get; set; }
        public string MesurmentUnit { get; set; }
        public string RejectionReason { get; set; }
        public bool IsApproved { get; set; }
    }
}