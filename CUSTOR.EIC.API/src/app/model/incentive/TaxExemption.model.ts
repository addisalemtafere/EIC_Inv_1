export class TaxExemptionModel {
  public IncentiveTaxExemptionRequestID: number;
  public ProjectId?: any;
  public RequestDate: Date;
  public RequestBy?: string;
  public CreatedUserName?: string;
  public FileNo?: string;
  public ExemptionYearRequested: number;
  public RevenueBranch: number;
  public RevenueBranchDescription: string;
  public BusinessLicenseNo: string;
  public EffectiveStartDate?: Date;
  public IsApproved?: boolean;
}
