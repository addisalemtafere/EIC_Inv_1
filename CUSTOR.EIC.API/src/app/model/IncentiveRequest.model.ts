import {IncentiveRequestItemModel} from './incentive/IncentiveRequestItem.model';

export class IncentiveRequestModel {
  public IncentiveRequestId: number;
  public ProjectId?: any;
  public ServiceApplicationId?: any;
  public IncentiveCategoryId: number;
  public IncentiveCategory?: string;
  public Amount: number;
  public CurrencyType: number;
  public CurrencyRate?: any;
  public UnitId?: number;
  public Quantity: number;
  public CustomsSiteId?: number;
  public CustomsSite?: string;
  public RequestDate?: Date;
  public InvoiceNo: string;
  public FileNo: string;
  public ChassisNo? : any;
  public IsExporter: boolean;
  public IsBankPermit: boolean;
  public Phase: number;
  public IncentiveItemRequest?: IncentiveRequestItemModel[];

}
