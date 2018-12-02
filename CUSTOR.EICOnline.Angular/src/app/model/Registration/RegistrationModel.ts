export class RegistrationModel {
  public ID: Number;
  public MainGuid: string;
  public ParentGuid : string;
  public Tin : string;
  public RegNo : string;
  public LegalCondtion : number;
  public BusinessName : string;
  public BusinessNameAmh : string;
  public BusinessNameRegional : string;
  public RegDate : Date;
  //public IsPrivouslyRegistered: Number;
  //public PreviousRegDate : Date;
  //public PrivousRegNumber : string;
  public Status: Number;
  //public MainCancilationReason : string;
  //public FileNumber : string;
  public PaidUpCapital: Number;
  public SignedCapital: Number;
  //public ApprovedCapital: Number;
  public SingleShareAmount: Number;
  public IsSharedWithForeigner : boolean;
  public LocalPersonCapital: Number;
  public BudgetYearCode : string;
  public GrantorName : string;
  public GrantorNameEng : string;
  public GrantorNameRegional : string;

  public GrantorCountry : string;
  public GrantorCountryEng : string;
  public GrantorCountryRegional : string;

  public GrantorManagerName : string;
  public GrantorManagerNameEng : string;
  public GrantorManagerNameRegional : string;

  public GrantorMainAddress : string;
  public GrantorMainAddressEng : string;
  public GrantorMainAddressRegional : string;

  public RegistrationCatagories : string[];
  public Username : string;
  //public EventDateTime : Date;
  public UpdatedUsername : string;
  //public UpdatedEventDatetime: Date;

/*  public TransferReason: Number;
  public Remark : string;
  public TradeNameAmh : string;
  public TradeNameSort : string;
  public TradeNameSoundex : string;
  public TradesName : string;
  public TradeNameRegional : string;
  public TradeNameRegionalSort : string;
  public TradeNameRegionalSoundeX : string;
  public DateRegistered: Date;
  public TradeNameStatus : string;
  public CancilationReason : string;
  public PersonCanceldRegistration : string;
  public CancilationDate: Date;
  public SiteID : string*/

  constructor() {

  }
}
