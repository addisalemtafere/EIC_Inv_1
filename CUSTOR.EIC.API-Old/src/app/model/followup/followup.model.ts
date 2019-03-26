export class FollowUpModel {
  public Id: any;
  public ProjectId : number;
  public InvestorName : string;
  public ServiceId:number;
  public FollowupDate : string;
  public DecisionMade : number;
  public FollowupFinding : string;
  public OfficerRemark : string;
  public EventDateTime: string;
  public CreatedUserId?:number;
  public CreatedUserName ?:string;
  public UpdatedEventDatetime?:string;
  public  UpdatedUserId ?:number;
  public UpdatedUserName?: string;

}
