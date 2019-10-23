using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CUSTOR.EICOnline.DAL.EntityLayer.Fetiha
{
   public class ProjectAudit
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public ProjectAudit() { }
        public int ProjectId { get; set; }
        public int InvestorId { get; set; }
        public int? ParentProjectId { get; set; }
        public string ProjectName { get; set; }
        public string ProjectNameSort { get; set; }
        public string ProjectNameSoundX { get; set; }
        public string ProjectDescription { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime OperationDate { get; set; }
        public DateTime TerminationDate { get; set; }
        public int ProjectStatus { get; set; }
        public int? ProjectStage { get; set; }

        public int SectorId { get; set; }
        public int ActivityId { get; set; }
        public int SubSectorId { get; set; }
        public int InvActivityId { get; set; }

        public int InvestmentType { get; set; }
        public string InvestmentPermitNo { get; set; }
        public string InvestmentPermitNoSort { get; set; }
        public string InvestmentPermitNoSoundX { get; set; }
        public string PermitIssuedDate { get; set; }
        public string PreviousInvestmentPermitNo { get; set; }
        public DateTime PreviousPermitIssuedDate { get; set; }
        public DateTime PermitExpirationDate { get; set; }
        public bool HasBusinessLicense { get; set; }
        public string BusinessLicenseNo { get; set; }
        public DateTime BusinessLicenseStartDate { get; set; }
        public bool HasEnvironmentalImpact { get; set; }
        public string EnvironmentalImpact { get; set; }
        public int FormOfInvestment { get; set; }
        public DateTime? EndingDate { get; set; }

        public int ReportingPeriod { get; set; }
        public int SiteId { get; set; }
        public string InvestmentLocation { get; set; }
        public int InvestmentLocationCategory { get; set; }
        public decimal AnnualProductionValue { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime EventDatetime { get; set; }
        public string CreatedUserId { get; set; }
        public string CreatedUserName { get; set; }
        public DateTime? UpdatedEventDatetime { get; set; }
        public int? UpdatedUserId { get; set; }
        public string UpdatedUserName { get; set; }
        public Guid? ObjectId { get; set; }

        [NotMapped] public int? ServiceId { get; set; }
        [NotMapped] public bool IsSelfService { get; set; }

        public bool? IsOromiaSpecialZone { get; set; }
        public Investor Investor { get; set; }
        public Sector sector { get; set; }
        public Activity Activity { get; set; }
        public InvestmentActivity InvestmentActivity { get; set; }
        public Site Site { get; set; }
        public SubSector SubSector { get; set; }

        public int ? ServiceApplicationId { get; set; }

        //public ICollection<ProjectAssociate> ProjectAssociate { get; set; }
        //public ICollection<ProjectCancellation> ProjectCancellation { get; set; }
        //public ICollection<ProjectSubstitute> ProjectSubstitute { get; set; }
        //public ICollection<ProjectCost> ProjectCost { get; set; }
        //public ICollection<CapitalRegistration> CapitalRegistrations { get; set; }
        //public ICollection<ProjectEmployment> ProjectEmployment { get; set; }
        //public ICollection<ProjectImplementationPlan> ProjectImplementationPlan { get; set; }
        //public ICollection<ProjectInput> ProjectInput { get; set; }
        //public ICollection<ProjectNationalityComposition> ProjectNationalityComposition { get; set; }
        //public ICollection<ProjectOutput> ProjectOutput { get; set; }
        //public ICollection<ProjectRenewal> ProjectRenewal { get; set; }
        //public ICollection<ProjectRequirement> ProjectRequirement { get; set; }
        //public ICollection<ServiceApplication> ServiceApplication { get; set; }

    }
    
    public partial class ProjectAuditAddressDTO : Project
    {
        public int? AddressId { get; set; }
        public int? IndustrialParkId { get; set; }
        public bool? IsMainOffice { get; set; }
        public bool? IsIndustrialPark { get; set; }
        public bool? IsAddressActive { get; set; }
        public bool? IsAddressDeleted { get; set; }
        public string RegionId { get; set; }
        public string SpecificAreaName { get; set; }
        public string ZoneId { get; set; }
        public string WoredaId { get; set; }
        public string WoredaEngId { get; set; }
        public string KebeleId { get; set; }
        public string KebeleEngId { get; set; }
        public string HouseNo { get; set; }
        public string TeleNo { get; set; }
        public string Pobox { get; set; }
        public string Fax { get; set; }
        public string CellPhoneNo { get; set; }
        public string Email { get; set; }
        public string OtherAddress { get; set; }
        public int? ServiceApplicationId { get; set; }

    }


    public partial class ProjectRequirementAudit
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public int ProjectRequirementId { get; set; }
        public int ProjectId { get; set; }
        public decimal ElectricPower { get; set; }
        public decimal Water { get; set; }
        public decimal OtherUtility { get; set; }
        public decimal LandIndustrial { get; set; }
        public decimal LandAgricultural { get; set; }
        public decimal LandService { get; set; }
        public decimal? OwnLand { get; set; }
        public decimal? RentalLand { get; set; }
        public decimal? LeaseLand { get; set; }
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

        [NotMapped]
        public int? workFlowId { get; set; }

        public Project Project { get; set; }

        public int? ProjectStatus { get; set; }
        public int? Quarter { get; set; }
        public DateTime? RegistrationYear { get; set; }
        public int? ServiceApplicationId { get; set; }
    }
    public partial class ProjectRequirementServiceApplicationAudit : ProjectRequirementAudit
    {
        public int ? CurrentStatusId { get; set; }
        public int ? InvestorId { get; set; }
        

        public int ? CurrentStep { get; set; }
    }

    public partial class ProjectCostAudit
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public int ProjectCostId { get; set; }
        public int ProjectId { get; set; }
        public bool IsActual { get; set; }
        public decimal TransportCost { get; set; }
        public decimal LandCost { get; set; }
        public decimal LandCostInBirr { get; set; }
        public decimal BuildingCost { get; set; }
        public decimal BuildingCostInBirr { get; set; }
        public decimal MachineryCost { get; set; }
        public decimal MachineryCostInBirr { get; set; }
        public decimal TransportCostInBirr { get; set; }
        public decimal OfficeEquipmentCost { get; set; }
        public decimal OfficeEquipmentCostInBirr { get; set; }
        public decimal OtherCapitalCost { get; set; }
        public decimal OtherCapitalCostInBirr { get; set; }
        public decimal InitialWorkingCapitalCost { get; set; }
        public decimal InitialWorkingCapitalCostInBirr { get; set; }
        public decimal EquityFinance { get; set; }
        public decimal LoanFinance { get; set; }
        public decimal OtherSourceFinance { get; set; }
        public string OtherSourceDescription { get; set; }
        public decimal? ActualCostInForeign { get; set; }
        //    public decimal? ETBExchangeRate { get; set; }
        public int Unit { get; set; }
        public decimal ExchangeRate { get; set; }
        public string Remark { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime EventDatetime { get; set; }
        public int CreatedUserId { get; set; }
        public int? ProjectStatus { get; set; }
        public string CreatedUserName { get; set; }
        public DateTime? UpdatedEventDatetime { get; set; }
        public DateTime? CapitalRegistrationDatetime { get; set; }
        public int? Quarter { get; set; }
        public DateTime? ReagistrationYear { get; set; }
        public int? UpdatedUserId { get; set; }
        public int? ServiceApplicationId { get; set; }
        public string UpdatedUserName { get; set; }
        public Guid? ObjectId { get; set; }

        [NotMapped]
        public int? workFlowId { get; set; }

        public Project Project { get; set; }
    }
    public partial class ProjectCostInvestorAudit : ProjectCostAudit
    {
        public int ? InvestorId { get; set; }
    }

    public partial class ProjectEmploymentAudit
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public int? ProjectEmploymentId { get; set; }
        public int? ProjectId { get; set; }
        public bool IsActual { get; set; }
        public int PermanentFemale { get; set; }
        public int PermanentMale { get; set; }
        public int TemporaryFemale { get; set; }
        public int TemporaryMale { get; set; }
        public int PermanentForeignFemale { get; set; }
        public int PermanentForeignMale { get; set; }
        public int TemporaryForeignFemale { get; set; }
        public int TemporaryForeignMale { get; set; }

        public int? CurrentPermanentFemale { get; set; }
        public int? CurrentPermanentMale { get; set; }
        public int? CurrentTemporaryFemale { get; set; }
        public int? CurrentTemporaryMale { get; set; }
        public int? CurrentPermanentForeignFemale { get; set; }
        public int? CurrentPermanentForeignMale { get; set; }
        public int? CurrentTemporaryForeignFemale { get; set; }
        public int? CurrentTemporaryForeignMale { get; set; }

        public string Remark { get; set; }
        public bool? IsActive { get; set; }
        public bool? IsDeleted { get; set; }
        public DateTime EventDatetime { get; set; }
        public int? CreatedUserId { get; set; }
        public string CreatedUserName { get; set; }
        public DateTime? UpdatedEventDatetime { get; set; }
        public int? UpdatedUserId { get; set; }
        public string UpdatedUserName { get; set; }
        public Guid? ObjectId { get; set; }

        [NotMapped]
        public int? workFlowId { get; set; }
        public int? ServiceApplicationId { get; set; }

        public Project Project { get; set; }

        public int? ProjectStatus { get; set; }
        public int? Quarter { get; set; }
        public DateTime? RegistrationYear { get; set; }
    }
    public partial class ProjectEmploymentInvestorAudit : ProjectEmploymentAudit
    {
        public int ? InvestorId { get; set; }
    }
    public partial class ProjectNationalityCompositionAudit
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int  id { get; set; }
        public int? ProjectNationalityCompositionId { get; set; }
        public int? ProjectId { get; set; }
        public int Nationality { get; set; }
        public bool? IsActual { get; set; }
        public int Qty { get; set; }
        public decimal SharePercent { get; set; }
        public string Description { get; set; }
        public bool? IsActive { get; set; }
        public bool? IsDeleted { get; set; }
        public DateTime? EventDatetime { get; set; }
        public int? CreatedUserId { get; set; }
        public string CreatedUserName { get; set; }
        public DateTime? UpdatedEventDatetime { get; set; }
        public int? UpdatedUserId { get; set; }
        public int? ServiceApplicationId { get; set; }
        public string UpdatedUserName { get; set; }
        public Guid? ObjectId { get; set; }

        [NotMapped] public int? workFlowId { get; set; }

        public Project Project { get; set; }
    }
    public partial class ProjectNationalityCompositionInvestorAudit : ProjectNationalityCompositionAudit
    {
        public int? InvestorId { get; set; }
    }

    public partial class ProjectOutputAudit
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public int? ProjectOutputId { get; set; }

        public int? ProjectId { get; set; }
        public string ProductName { get; set; }
        public bool? IsActual { get; set; }
        public decimal  ProductQty { get; set; }
        public decimal? QuantityIncrease { get; set; }
        public string ProductUnit { get; set; }
        public decimal? ProductValue { get; set; }
        public decimal DomesticMarketShare { get; set; }
        public decimal ExportMarketShare { get; set; }
        public string Remark { get; set; }
        public bool? IsActive { get; set; }
        public bool? IsDeleted { get; set; }
        public DateTime ?EventDatetime { get; set; }
        public int CreatedUserId { get; set; }
        public string CreatedUserName { get; set; }
        public DateTime? UpdatedEventDatetime { get; set; }
        public int? UpdatedUserId { get; set; }
        public string UpdatedUserName { get; set; }
        public Guid? ObjectId { get; set; }

        [NotMapped]
        public int? workFlowId { get; set; }

        public Project Project { get; set; }

        public int? ProjectStatus { get; set; }
        public int? Quarter { get; set; }
        public int? ServiceApplicationId { get; set; }
        public DateTime? RegistrationYear { get; set; }
    }
    public partial class ProjectOutputInvestorAudit : ProjectOutputAudit
    {
        public int? InvestorId { get; set; }
    }
    public partial class ProjectInputAudit
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
      
        public int ProjectInputId { get; set; }
        public int ProjectId { get; set; }
        public string RawMaterialType { get; set; }
        public Boolean IsForeign { get; set; }
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

        public Project Project { get; set; }
        public int? ProjectStatus { get; set; }
        public int? Quarter { get; set; }
        public int? ServiceApplicationId { get; set; }
        public DateTime? RegistrationYear { get; set; }
    }
    public partial class ProjectInputInvestorAudit : ProjectInputAudit
    {
        public int? InvestorId { get; set; }
    }

}
