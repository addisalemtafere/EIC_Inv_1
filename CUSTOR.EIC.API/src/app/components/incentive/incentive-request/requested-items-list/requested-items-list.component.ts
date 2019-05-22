import {AfterContentChecked, AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AppConfiguration} from '../../../../config/appconfig';
import {HttpClient} from '@angular/common/http';
import {ErrorMessage} from '@custor/services/errMessageService';
import {determineId} from '@custor/helpers/compare';
import {IncentiveRequestDetailService} from '../../../incentive/incentive-request/requested-items-list/requested-items-list.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Subscription} from 'rxjs/index';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {CurrencyType, UnitType} from '../../../../model/lookupData';
import {CurrencyTypes, UnitTypes} from '@custor/const/consts';
import {MatDialog, MatDialogRef, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {LookUpService} from '../../../../Services/look-up.service';
import {LookupsModel} from '../../../../model/lookups';
import {LookupTypeService} from '../../../../Services/lookup-type.service';
import {LookuptypesModel} from '../../../../model/lookuptypes';
import {IncentiveRequestDetailModel} from '../../../../model/IncentiveRequestDetail.Model';
import {IncentiveBoMRequestItemModel} from '../../../../model/incentive/IncentiveBoMRequestItem.model';
import {ApplicationSettingService} from '../../../../Services/application-setting.service';
import {AngConfirmDialogComponent} from '@custor/components/confirm-dialog/confirm-dialog.component';
import {ConfigurationService} from "@custor/services/configuration.service";


@Component({
  selector: 'app-requested-items-list',
  templateUrl: './requested-items-list.component.html',
  styleUrls: ['./requested-items-list.component.scss']
})
export class RequestedItemsListComponent implements OnInit, OnDestroy, AfterContentChecked, AfterViewInit {
  @ViewChild('form')
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  incentiveRequestItemSub: Subscription;
  lookupSub: Subscription;
  title: string;
  isNewIncentiveRequestItem = true;
  itemDetail: IncentiveRequestDetailModel;
  items: IncentiveRequestDetailModel[] = [];
  BOMItems: IncentiveBoMRequestItemModel[] = [];
  BOMItem: IncentiveBoMRequestItemModel;
  incentiveRequestItemForm: FormGroup;
  editMode = false;
  vehicleTypeShow = false;
  loading = false;
  projectId: any;
  dataSource: any;
  IncentiveItemtEditIndex: number;
  // showCategoryDropdown = false;
  currentCategoryId: number;
  serviceId: any;
  serviceApplicationId: any;
  phaseId: any;
  parentRequestId: number;
  isBOMRequired: boolean;
  isVisibleShowBalance: boolean;
  currentBOMTableId: number;
  preEditApprovedBalance = 0;
  displayedColumns = [
    'IncentiveItem', 'Quantity', 'Amount', 'RequestDate', 'Action'
  ];
  subscription: Subscription;
  formErrors = {
    IncentiveCategory: '',
    IncentiveItem: '',
    Quantity: '',
    Unit: '',
    Amount: '',
    CurrencyType: '',
    ChassisNo: '',
    MotorNo: '',
    Description: '',
  };

  incenticeCategoryLookuptypes = {
    CapitalGoods: '10774',
    MotorVehicles: '10775',
    WorkshopEquipment: '10776',
    SpareParts: '10777',
    ConstructionMaterials: '10778',
    LaboratoryEquipment: '10779',
    Others: '10771'
  };

  loadingIndicator: boolean;
  currencyTypes: CurrencyType[] = [];
  unitTypes: UnitType[] = [];
  IncentiveCategoryLookup: LookuptypesModel[];
  Lookups: LookupsModel[];
  filterLookups: LookupsModel[];
  confirmDialogRef: MatDialogRef<AngConfirmDialogComponent>;
  incentiveRequestDetailModels: IncentiveRequestDetailModel[] = [];
  private form: NgForm;
  private ExchangeRate: string;
  private CuurencyType: number;
  currentLang = '';
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              public route: ActivatedRoute,
              private http: HttpClient,
              private snackbar: MatSnackBar,
              private lookUpTypeService: LookupTypeService,
              public settingService: ApplicationSettingService,
              private lookUpsService: LookUpService,
              private config: AppConfiguration,
              private IncentiveRequestItemService: IncentiveRequestDetailService,
              private incentiveRequestDetailService: IncentiveRequestDetailService,
              private errMsg: ErrorMessage,
              private toastr: ToastrService,
              public dialog: MatDialog,
              private configService: ConfigurationService,
              private fb: FormBuilder) {
    this.currentLang = this.configService.language;
    this.itemDetail = <IncentiveRequestDetailModel>{};
    // initialize the form
    this.initForm();
    this.initStaticData('en');
  }

  get bOMIncentiveItemId() {
    return this.incentiveRequestItemForm.get('BOMIncentiveItemId');
  }

  get incentiveItemId() {
    return this.incentiveRequestItemForm.get('IncentiveItemId');
  }

  get quantity() {
    return this.incentiveRequestItemForm.get('Quantity');
  }

  get approvedQty() {
    return this.incentiveRequestItemForm.get('ApprovedQty');
  }

  get amount() {
    return this.incentiveRequestItemForm.get('Amount');
  }

  get currencyType() {
    return this.incentiveRequestItemForm.get('CurrencyType');
  }

  get requestDate() {
    return this.incentiveRequestItemForm.get('RequestDate');
  }

  get exRate() {
    return this.incentiveRequestItemForm.get('ExRate');
  }

  get chassisNo() {
    return this.incentiveRequestItemForm.get('ChassisNo');
  }

  get motorNo() {
    return this.incentiveRequestItemForm.get('MotorNo');
  }

  get description() {
    return this.incentiveRequestItemForm.get('Description');
  }

  get balance() {
    return this.incentiveRequestItemForm.get('Balance');
  }

  get measurementUnit() {
    return this.incentiveRequestItemForm.get('MeasurementUnit');
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue.replace(/[\W_]/g, '');
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {
    this.initForm();
    this.getExchangeRate();
    // to-do
    //  Disallow Edit/Delete if the parent record is alreday approved
    //  Protected one BoM item to be added in the same installmnet
    // to-do get Currency Deatils from the parent record
    this.currentCategoryId = this.activatedRoute.snapshot.params['categoryId'];
    this.serviceApplicationId = this.activatedRoute.snapshot.params['ServiceApplicationId'];
    this.projectId = this.activatedRoute.snapshot.params['projectId'];
    this.serviceId = this.activatedRoute.snapshot.params['serviceId'];
    this.phaseId = this.activatedRoute.snapshot.params['Phase'];
    if (this.currentCategoryId == 10778 || this.currentCategoryId == 10782 || this.currentCategoryId == 10777) {
      this.isVisibleShowBalance = true;
    }
    this.isBOMRequired = (this.currentCategoryId.toString() === this.incenticeCategoryLookuptypes.ConstructionMaterials ||
      this.currentCategoryId.toString() === this.incenticeCategoryLookuptypes.LaboratoryEquipment);

    if (this.isBOMRequired) { // get items from BOM table

      this.getBOMItems(this.projectId, this.currentCategoryId, this.phaseId);
    } else { // get items from lookup table
      this.filterIncentiveCategory(this.currentCategoryId);
    }

    this.parentRequestId = this.activatedRoute.snapshot.params['requestId'];
    // bind items grid
    // console.log(this.parentRequestId);
    this.getIncentiveRequestItems(this.parentRequestId);

    if (this.currentCategoryId.toString() === this.incenticeCategoryLookuptypes.MotorVehicles) {
      this.vehicleTypeShow = true;
    } else {
      this.vehicleTypeShow = false;
    }
    this.incentiveRequestItemForm.get('Quantity').patchValue(this.activatedRoute.snapshot.params['Quantity']);
    this.incentiveRequestItemForm.get('CurrencyType').patchValue(this.activatedRoute.snapshot.params['CurrencyType']);
    this.incentiveRequestItemForm.get('ExRate').patchValue(this.activatedRoute.snapshot.params['CurrencyRate']);
    this.isNewIncentiveRequestItem = true;
  }

  getExchangeRate() {
    this.settingService.getOneById(1)
      .subscribe(result => {
        this.ExchangeRate = result.Value;

      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.incentiveRequestItemForm.patchValue({
      ExchangeRate: this.ExchangeRate,
      CuurencyType: this.CuurencyType
    });
  }

  onClear() {
    this.editMode = false;
    this.incentiveRequestItemForm.reset();
    this.incentiveRequestItemForm.get('Quantity').patchValue(this.activatedRoute.snapshot.params['Quantity']);
    this.incentiveRequestItemForm.get('CurrencyType').patchValue(this.activatedRoute.snapshot.params['CurrencyType']);
    this.incentiveRequestItemForm.get('ExRate').patchValue(this.activatedRoute.snapshot.params['CurrencyRate']);
    this.incentiveRequestItemForm.get('RequestDate').patchValue(new Date());
    this.preEditApprovedBalance = 0;
  }

  filterIncentiveCategory(categoryCode: number) {
    if (!categoryCode) {
      return;
    }
    this.getItemLookup(categoryCode);
    if (categoryCode === 10775) {
      this.vehicleTypeShow = true;
    } else {
      this.vehicleTypeShow = false;
    }
  }

  getBOMItems(pId: any, categoryId: any, Phase: any) {
    // to-do remove the hard coded value
    this.IncentiveRequestItemService.getIncentiveBoMRequestDetails(pId, categoryId, Phase)
      .subscribe((items) => {
        this.BOMItems = items;
        // console.log(items);
      });
  }

  BOMIncentiveItemSelected(id: number) {
    this.getBOMItem(id);
  }

  getBOMItem(id: number) {
    // to-do remove the hard coded value
    this.IncentiveRequestItemService.getIncentiveBoMRequestDetail(id)
      .subscribe((item) => {
        this.BOMItem = item;
        this.incentiveRequestItemForm.get('MeasurementUnit').patchValue(item.MesurmentUnit);
        this.incentiveRequestItemForm.get('Balance').patchValue(item.Balance);
        this.incentiveRequestItemForm.get('Description').patchValue(item.Description);
        this.currentBOMTableId = item.IncentiveBoMRequestItemId;
      });
  }

  incentiveItemSelected(val: number) {
    // let target = event.source.selected._element.nativeElement;
    // let selectedObj = {
    //   value: event.value,
    //   text: target.innerText.trim()
    // };
    // // console.log(selectedObj);
    // console.log(this.getLookupText(val));
    // to-do expensive code to be improved
    let desc;
    this.filterLookups.forEach(item => {
      // // console.log(item.English + ' ' + item.LookupId);
      if (item.LookupId === val) {
        // alert (item.English);
        desc = item.English;
      }
    });
    this.incentiveRequestItemForm.get('Description').patchValue(desc);
  }

  getItemLookup(categoryCode: any) {
    this.loadingIndicator = true;
    this.lookupSub = this.lookUpsService
      .getLookupByParentId(this.currentLang,categoryCode)
      .subscribe(result => {
          this.filterLookups = result;
        },
        error => this.toastr.error(this.errMsg.getError(error)));
  }

  // }
  getLookupText(val: number) {
    // // console.log(val);
    this.filterLookups.forEach(item => {
      // // console.log(item.English + ' ' + item.LookupId);
      if (item.LookupId === val) {
        // alert (item.English);
        return item.English;
      }
    });
    // return '';
  }

  getIncentiveRequestItems(parentRequestId) {
    this.IncentiveRequestItemService.getIncentiveRequestItemslist(parentRequestId).subscribe(result => {
      if (result.length > 0) {
        this.items = result;
        // console.log(this.items);
        this.dataSource = new MatTableDataSource<IncentiveRequestDetailModel>(this.items);
        this.loading = false;
      }
    }, error => this.errMsg.getError(error));
  }

  initStaticData(currentLang) {
    let quan: CurrencyType = new CurrencyType();
    CurrencyTypes.forEach(pair => {
      quan = {'Id': pair.Id.toString(), 'DescriptionEnglish': pair.DescriptionEnglish, 'Description': pair.Description};
      this.currencyTypes.push(quan);
    });
    let unit: UnitType = new UnitType();
    UnitTypes.forEach(pair => {
      unit = {'Id': pair.Id.toString(), 'DescriptionEnglish': pair.DescriptionEnglish, 'Description': pair.Description};
      this.unitTypes.push(unit);
    });
  }

  getIncentiveRequestItem(id) {
    this.isNewIncentiveRequestItem = false;
    this.loadingIndicator = true;
    this.incentiveRequestItemSub = this.IncentiveRequestItemService
      .getIncentiveRequestItem(id)
      .subscribe(result => {
          this.itemDetail = result;
          // this.getItemLookup();
          // this.filterIncentiveCategory(this.itemDetail.IncentiveCategoryId);
          // this.updateForm();
        },
        error => this.toastr.error(this.errMsg.getError(error)));
    this.loadingIndicator = false;
  }

  updateForm() {
    // console.log(this.itemDetail);
    this.incentiveRequestItemForm.setValue({
      IncentiveCategoryId: this.itemDetail.IncentiveCategoryId == null ? '' : this.itemDetail.IncentiveCategoryId,
      IncentiveItemId: this.itemDetail.IncentiveItemId,
      MeasurementUnit: this.itemDetail.MeasurementUnit || '',
      Amount: this.itemDetail.Amount,
      //CurrencyType: this.itemDetail.CurrencyType,
      RequestDate: this.itemDetail.RequestDate,
      ChassisNo: this.itemDetail.ChassisNo,
      MotorNo: this.itemDetail.MotorNo,
      Description: this.itemDetail.Description == null ? '' : this.itemDetail.Description,
      Quantity: this.itemDetail.Quantity == null ? 0 : this.itemDetail.Quantity,
      ApprovedQty: this.itemDetail.ApprovedQty == null ? 0 : this.itemDetail.ApprovedQty,
      Balance: this.itemDetail.Balance,
      // ExRate: this.itemDetail.CurrencyRate,
      BOMIncentiveItemId: this.itemDetail.IncentiveItemId,
    });
    // // console.log(this.IncentiveRequestDetailModel);
    // },4000);
    this.isNewIncentiveRequestItem = false;
  }

  initForm() {
    this.incentiveRequestItemForm = this.fb.group({
      IncentiveCategoryId: ['0', Validators.required],
      IncentiveItemId: ['0', Validators.required],
      RequestDate: [new Date(), Validators.required],
      MeasurementUnit: [''],
      Quantity: [''],
      ApprovedQty: ['', Validators.compose([Validators.required, Validators.maxLength(4), Validators.pattern('^[0-9]+$')])],
      Amount: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9 .]+$')])],
      CurrencyType: [{value: '', disabled: true}, Validators.required],
      ChassisNo: ['', Validators.required],
      MotorNo: ['', Validators.required],
      Description: [''],
      Balance: ['0', Validators.required],
      // ExRate: ['0', Validators.compose([Validators.required, Validators.pattern('^[0-9 .]+$')])],
      ExRate: [{value: '', disabled: true}],
      BOMIncentiveItemId: ['0']
    });
  }

  compareIds(id1: any, id2: any): boolean {
    const a1 = determineId(id1);
    const a2 = determineId(id2);
    return a1 === a2;
  }

  hasValidationErrors() {
    if (this.quantity.value === 0 || this.quantity.value === null) {
      this.toastr.error(' Requested quantity can not be 0');
      return true;
    }
    if (this.approvedQty.value === 0 || this.approvedQty.value === null) {
      this.toastr.error(' Approved quantity can not be 0');
      return true;
    }

    if (this.vehicleTypeShow) {
      if (this.chassisNo.value === null || this.chassisNo.value.length === 0) {
        this.toastr.error(' Chasis Number can not be 0');
        return true;
      }
      if (this.motorNo.value === null || this.motorNo.value.length === 0) {
        this.toastr.error(' Motor Number can not be 0');
        return true;
      }
    }
    if (!this.isBOMRequired) {
      if (this.exRate.value === 0 || this.exRate.value === null) {
        this.toastr.error(' Error - Exchange rate can not be 0');
        return true;
      }
      if (this.currencyType.value === null) {
        this.toastr.error(' Error - Currency Type  can not be 0');
        return true;
      }
      if (this.incentiveItemId.value === null) {
        this.toastr.error(' Incentive item can not be 0');
        return true;
      }
    } else {
      if (this.balance.value === 0 || this.balance.value === null) {
        this.toastr.error(' Balance can not be 0');
        return true;
      }
      // if (this.quantity.value >  this.balance.value)   {
      //   this.toastr.error(' Requested quantity can not be greater that available balance');
      //   return true;
      // }

      if (this.approvedQty.value > this.quantity.value) {
        this.toastr.error(' Approved quantity can not be greater than Requested quantity');
        return true;
      }
      if (this.approvedQty.value > this.balance.value) {
        this.toastr.error(' Approved quantity can not be greater that available balance');
        return true;
      }
      if (this.bOMIncentiveItemId.value === null) {
        this.toastr.error(' Incentive item can not be 0');
        return true;
      }
    }
  }

  public onCancel() {
    this.onClear();
  }

  getIncentiveReaquestItmes(projectId) {
    this.incentiveRequestDetailService.getIncentiveRequestslistByProjectId(projectId).subscribe(result => {
      if (result.length > 0) {
        this.incentiveRequestDetailModels = result;
        this.loading = false;
      }
    }, error => this.errMsg.getError(error));
  }

  public onSubmit() {
    if (this.hasValidationErrors()) {
      return;
    } else if (this.currentCategoryId == 10777) {
      this.getIncentiveReaquestItmes(this.projectId);
      if (this.incentiveRequestDetailModels[0].TotalAmount < this.incentiveRequestDetailModels[0].Amount + this.incentiveRequestItemForm.get('Amount').value) {
        this.toastr.error('You Cannot Save SparePart Request, Already Used 15% of Capital Goods');
        return;
      }
    }
    this.loadingIndicator = true;
    if (this.isNewIncentiveRequestItem) {
      this.IncentiveRequestItemService.saveIncentiveRequestItem(
        this.getEditedIncentiveItem()).subscribe((itemDetail: IncentiveRequestDetailModel) => {
          this.saveCompleted(itemDetail);
        },
        err => this.handleError(err));
    } else {
      // console.log('updating...');
      return this.IncentiveRequestItemService.updateIncentiveRequestItem(
        this.getEditedIncentiveItem()).subscribe((itemDetail: IncentiveRequestDetailModel) => {
          this.saveCompleted(itemDetail);
        },
        err => this.handleError(err));
    }
  }

  onEditIncentiveItem(index: number) {
    this.editMode = true;
    this.IncentiveItemtEditIndex = index;
    this.itemDetail = this.items[index];
    this.filterIncentiveCategory(this.itemDetail.IncentiveCategoryId);
    // this.incentiveRequestItemForm.patchValue(this.itemDetail);

    if (this.itemDetail.IncentiveCategoryId === 10775) {
      this.vehicleTypeShow = true;
    } else {
      this.vehicleTypeShow = false;
    }
    this.updateForm();
  }

  deleteIncentiveItem(index: number, id: number) {
    this.confirmDialogRef = this.dialog.open(AngConfirmDialogComponent,
      {
        disableClose: false
      });

    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      this.loadingIndicator = true;
      if (result) {
        this.IncentiveItemtEditIndex = index;
        this.itemDetail = this.items[index];

        this.IncentiveRequestItemService.deleteIncentiveRequestItem(this.itemDetail.IncentiveRequestDetailId)
          .subscribe(() => {
            this.toastr.info('Record was deleted successfully');
            // reload grid
            this.getIncentiveRequestItems(this.parentRequestId);
            this.dataSource = new MatTableDataSource<IncentiveRequestDetailModel>(this.items);
          });
      }
      this.loadingIndicator = false;
    });
  }

  deleteRecord(index: number) {
    // console.log(index);
    this.IncentiveItemtEditIndex = index;
    this.itemDetail = this.items[index];
    // to-do show confirmation dialog
    this.IncentiveRequestItemService.deleteIncentiveRequestItem(this.itemDetail.IncentiveRequestDetailId)
      .subscribe(() => {
        this.toastr.info('Record was deleted successfully');
        this.dataSource = new MatTableDataSource<IncentiveRequestDetailModel>(this.items);
      });
  }

  notification(message: string) {
    this.loading = false;
    this.toastr.success(` Succesfully ${message} Data.!`, 'Success');

    this.snackbar.open(` Succesfully ${message} Data.!`, 'Close', {
      duration: 3000,
    });
  }

  ngOnDestroy() {
    // this.IncentiveRequestItemSub.unsubscribe();
  }

  onBack() {
    // this.router.navigate(['IncentiveRequestItems/list']);
    window.history.back();
  }

  getNewBalance(bal: number, qty: number) {
    if (!this.isBOMRequired) {
      return 0;
    }
    if (this.editMode) {
      return bal + (this.preEditApprovedBalance - qty);
    }
    // return bal - qty;
    return bal;
  }

  ngAfterContentChecked(): void {
  }

  showBalance() {
    // console.log(this.currentCategoryId);
    if (this.currentCategoryId == 10778 || this.currentCategoryId == 10782) {
      this.router.navigate(['bom-balance/' + this.projectId + '/' + this.serviceApplicationId + '/' + this.serviceId]);
    } else if (this.currentCategoryId == 10777) {
      this.router.navigate(['sparepart-balance/' + this.projectId + '/' + this.serviceApplicationId]);
    }
  }

  private saveCompleted(incentiveRequestDetailModel?: IncentiveRequestDetailModel) {

    this.getIncentiveRequestItems(this.parentRequestId);
    this.isNewIncentiveRequestItem = true;
    this.onClear();
    this.loadingIndicator = false;
    this.toastr.success('Record saved successfully!');

    // window.history.back();
  }

  // getIncentiveCategory() {
  //   this.lookUpTypeService.getLookupByParentId().subscribe(result => {
  //     this.IncentiveCategoryLookup = result;
  //   });

  private handleError(err) {
    this.loadingIndicator = false;
    this.toastr.error(this.errMsg.getError(err));
    this.loadingIndicator = false;
  }

  private getEditedIncentiveItem(): IncentiveRequestDetailModel {
    const formModel = this.incentiveRequestItemForm.value;
    return {
      IncentiveRequestDetailId: this.isNewIncentiveRequestItem ? 0 : this.itemDetail.IncentiveRequestDetailId,
      IncentiveRequestId: this.parentRequestId,
      IncentiveCategoryId: this.currentCategoryId,
      IncentiveItemId: this.isBOMRequired ? formModel.BOMIncentiveItemId : formModel.IncentiveItemId,
      Quantity: formModel.Quantity,
      ApprovedQty: formModel.ApprovedQty,
      Amount: formModel.Amount,
      RequestDate: formModel.RequestDate,
      CurrencyType: formModel.CurrencyType,
      CurrencyRate: formModel.ExRate,
      ChassisNo: formModel.ChassisNo,
      MotorNo: formModel.MotorNo,
      Description: formModel.Description,
      ProjectId: +this.projectId, // formModel.ProjectId,
      Balance: this.getNewBalance(formModel.Balance, formModel.ApprovedQty),
      MeasurementUnit: formModel.MeasurementUnit
    };
  }
}
