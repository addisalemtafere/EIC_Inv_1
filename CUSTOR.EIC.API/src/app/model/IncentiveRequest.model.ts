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
  public RequestDate?: Date;
  public InvoiceNo: string;
  public Phase: number;
  public IsBankPermit: boolean;
  public IsExporter: boolean;
  public FileNo: string;
  public CustomsSite?: string;
  public ChassisNo?: string;
  public IncentiveItemRequest?: IncentiveRequestItemModel[];

}
