export class CompanyClearanceModel {
  /*[Key]
[DatabaseGenerated(DatabaseGeneratedOption.Identity)]*/
  public CompanyClearanceId: number;
  public InvestorId: number;
  public CompanyNameOneEnglish: string;
  public CompanyNameOneAmharic: string;
  public IsCompanyNameOneApproved: boolean;
  public CompanyNameTwoEnglish: string;
  public CompanyNameTwoAmharic: string;
  public IsCompanyNameTwoApproved: boolean;
  public CompanyNameThreeEnglish: string;
  public CompanyNameThreeAmharic: string;
  public IsCompanyNameThreeApproved: boolean;
  public IsActive: boolean;
  public workFlowId: any;
  /*public IsDeleted: boolean;
  public CreatedDate: Date;
  public CreatedBy: string;
  public UpdatedDate: Date;
  public UpdatedBy: string;*/
}
