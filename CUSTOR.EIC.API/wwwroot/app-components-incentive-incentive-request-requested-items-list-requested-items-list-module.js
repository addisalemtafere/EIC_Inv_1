(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-incentive-incentive-request-requested-items-list-requested-items-list-module"],{

/***/ "./src/app/Services/application-setting.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/Services/application-setting.service.ts ***!
  \*********************************************************/
/*! exports provided: ApplicationSettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationSettingService", function() { return ApplicationSettingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base.service */ "./src/app/Services/Base.service.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApplicationSettingService = /** @class */ (function (_super) {
    __extends(ApplicationSettingService, _super);
    function ApplicationSettingService(http, appConfig, errMsg) {
        var _this = _super.call(this, http, appConfig.urls.url('ApplicationSettings'), errMsg) || this;
        _this.http = http;
        _this.appConfig = appConfig;
        _this.errMsg = errMsg;
        return _this;
    }
    ApplicationSettingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"]])
    ], ApplicationSettingService);
    return ApplicationSettingService;
}(_Base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/components/incentive/incentive-request/requested-items-list/requested-items-list.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-request/requested-items-list/requested-items-list.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header title=\"RequestedItemsList\" icon=\"people\"></app-page-header>\r\n<div [@fadeInOut] class=\"page-content\">\r\n  <mat-card class=\"margin-2\" style=\"box-shadow: none;border: 1px solid #dddddd\">\r\n\r\n    <form #form=\"ngForm\" [formGroup]=\"incentiveRequestItemForm\" novalidate>\r\n\r\n      <mat-card-content>\r\n        <div>\r\n          <div fxLayout.xs=\"row wrap\" fxLayoutAlign.xs=\"start center\" fxLayoutGap=\"2em\">\r\n            <div class=\"block\" fxLayoutGap=\"2em\">\r\n              <!-- <span *ngIf=\"vehicleTypeShow\">\r\n                <mat-form-field  style=\"width: 150px\">\r\n                  <mat-label>Incentive Category</mat-label>\r\n                  <mat-select formControlName=\"IncentiveCategoryId\" style=\"font-family: Calibri\" type=\"text\"\r\n                              [compareWith]=\"compareIds\" required (selectionChange)=\"filterIncentiveCategory($event.value)\">\r\n                    <option value=\"0\">--Select--</option>\r\n                    <mat-option *ngFor=\"let IncentiveCat of IncentiveCategoryLookup\" [value]=\"IncentiveCat.LookUpTypeId\">\r\n                      <span>{{IncentiveCat.Description}}</span>\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </span> -->\r\n              <span *ngIf=\"!isBOMRequired\">\r\n            <mat-form-field style=\"width: 150px\">\r\n             <mat-label>{{'incentiverequestitem.IncentiveItem' | translate}}</mat-label>\r\n              <mat-select formControlName=\"IncentiveItemId\" [compareWith]=\"compareIds\" required\r\n                          (selectionChange)=\"incentiveItemSelected($event.value)\">\r\n                <option value=\"0\">--Select--</option>\r\n                <mat-option *ngFor=\"let IncentiveItem of filterLookups\" [value]=\"IncentiveItem.LookupId\">\r\n                  <span>{{IncentiveItem.English}}</span>\r\n                </mat-option>\r\n              </mat-select>\r\n              <mat-error *ngIf=\"incentiveItemId.hasError('required')\">\r\n              {{'common.validation.Required' | translate}}\r\n            </mat-error>\r\n            </mat-form-field>\r\n          </span>\r\n              <span *ngIf=\"isBOMRequired\">\r\n            <mat-form-field style=\"width: 150px\">\r\n              <mat-label>Incentive Item</mat-label>\r\n              <mat-select formControlName=\"BOMIncentiveItemId\" [compareWith]=\"compareIds\" required\r\n                          (selectionChange)=\"BOMIncentiveItemSelected($event.value)\">\r\n                <option value=\"0\">--Select--</option>\r\n                <mat-option *ngFor=\"let IncentiveItem of BOMItems\" [value]=\"IncentiveItem.IncentiveBoMRequestItemId\">\r\n                  <span>{{IncentiveItem.Description}}</span>\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n              <mat-form-field>\r\n                <mat-label>{{'incentiverequestitem.Description' | translate}}</mat-label>\r\n                <input type=\"text\" matInput required formControlName=\"Description\">\r\n                <mat-error *ngIf=\"description.hasError('required')\">\r\n                  {{'common.validation.Required' | translate}}\r\n                </mat-error>\r\n              </mat-form-field>\r\n              <span *ngIf=\"isBOMRequired\">\r\n          <mat-form-field>\r\n             <mat-label>{{'incentiverequestitem.MeasurementUnit' | translate}}</mat-label>\r\n            <input type=\"text\" matInput readonly formControlName=\"MeasurementUnit\">\r\n              <mat-error *ngIf=\"measurementUnit.hasError('required')\">\r\n                  {{'common.validation.Required' | translate}}\r\n                </mat-error>\r\n          </mat-form-field>\r\n          </span>\r\n              <span *ngIf=\"isBOMRequired\">\r\n            <mat-form-field>\r\n                <mat-label>Balance</mat-label>\r\n                <input type=\"text\" matInput readonly formControlName=\"Balance\">\r\n            </mat-form-field>\r\n          </span>\r\n              <span *ngIf=\"isVisibleShowBalance\">\r\n              <button color=\"primary\" mat-raised-button=\"\" (click)=\"showBalance()\">\r\n                Show Balance\r\n              </button>\r\n              </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div fxLayout.xs=\"row wrap\" fxLayoutAlign.xs=\"start center\" style=\"margin: 5px\" fxLayoutGap=\"2em\">\r\n            <div class=\"block\" fxLayoutGap=\"2em\">\r\n              <mat-form-field>\r\n                <mat-label>{{'incentiverequestitem.Quantity' | translate}}</mat-label>\r\n                <input type=\"text\" type=\"number\" matInput required formControlName=\"Quantity\" [disabled]=\"true\">\r\n                <mat-error *ngIf=\"quantity.hasError('required')\">\r\n                  {{'common.validation.Required' | translate}}\r\n                </mat-error>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <mat-label>{{'incentiverequestitem.ApprovedQty' | translate}}</mat-label>\r\n                <input type=\"text\" type=\"number\" matInput required formControlName=\"ApprovedQty\" [disabled]=\"true\">\r\n                <mat-error *ngIf=\"approvedQty.hasError('required')\">\r\n                  {{'common.validation.Required' | translate}}\r\n                </mat-error>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input placeholder=\"Request Date*\" required\r\n                       formControlName=\"RequestDate\"\r\n                       matInput\r\n                       [matDatepicker]=\"RequestDate\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"RequestDate\"></mat-datepicker-toggle>\r\n                <mat-datepicker #RequestDate>\r\n                </mat-datepicker>\r\n                <mat-error *ngIf=\"requestDate.hasError('required')\">\r\n                  {{'common.validation.Required' | translate}}\r\n                </mat-error>\r\n              </mat-form-field>\r\n              <span *ngIf=\"!isBOMRequired\">\r\n            <mat-form-field style=\"width: 200px\">\r\n              <mat-label>{{'incentiverequestitem.CurrencyType' | translate}}</mat-label>\r\n              <mat-select formControlName=\"CurrencyType\" [compareWith]=\"compareIds\" [disabled]=\"true\">\r\n                <option value=\"0\">--Select--</option>\r\n                <mat-option *ngFor=\"let currency of currencyTypes\" [value]=\"currency.Id\">\r\n                  <span>{{currency.DescriptionEnglish}}</span>\r\n                </mat-option>\r\n              </mat-select>\r\n               <mat-error *ngIf=\"currencyType.hasError('required')\">\r\n                  {{'common.validation.Required' | translate}}\r\n                </mat-error>\r\n            </mat-form-field>\r\n          </span>\r\n              <span *ngIf=\"!isBOMRequired\">\r\n              <mat-form-field style=\"width: 200px\">\r\n                <mat-label>Exchange rate</mat-label>\r\n                <input type=\"text\" type=\"number\" matInput formControlName=\"ExRate\">\r\n              </mat-form-field>\r\n          </span>\r\n              <mat-form-field [fxFlex]=\"21\">\r\n                <mat-label>{{'incentiverequest.Amount' | translate}}</mat-label>\r\n                <input type=\"number\" matInput required\r\n                       formControlName=\"Amount\">\r\n                <mat-error *ngIf=\"amount.hasError('required')\">\r\n                  {{'common.validation.Required' | translate}}\r\n                </mat-error>\r\n                <mat-error *ngIf=\"amount.hasError('maxlength')\">\r\n                  {{'common.validation.MaxLengthChar' | translate: {'max':'10'} }}\r\n                </mat-error>\r\n                <mat-error *ngIf=\"amount.hasError('pattern')\">\r\n                  {{'common.validation.NumberOnly' | translate}}\r\n                </mat-error>\r\n              </mat-form-field>\r\n              <span *ngIf=\"vehicleTypeShow\">\r\n            <mat-form-field style=\"width: 200px;\">\r\n              <mat-label>Chassis No *</mat-label>\r\n              <input type=\"text\" matInput formControlName=\"ChassisNo\">\r\n\r\n            </mat-form-field>\r\n          </span>\r\n              <span *ngIf=\"vehicleTypeShow\">\r\n            <mat-form-field style=\"width: 200px;\">\r\n              <mat-label>Motor No * :</mat-label>\r\n              <input type=\"text\" matInput formControlName=\"MotorNo\">\r\n            </mat-form-field>\r\n          </span>\r\n            </div>\r\n          </div>\r\n\r\n          <!--[disabled]=\"form.invalid\"-->\r\n          <div mat-dialog-actions style=\"text-align: center\" fxLayoutGap=\"1em\">\r\n            <button mat-raised-button (click)=\"onSubmit()\" color=\"primary\">\r\n              <!-- <mat-icon color=\"primary\" class=\"mat-18\">done</mat-icon> -->\r\n              <mat-icon class=\"mat-button-icon\">save</mat-icon>\r\n              {{editMode ? 'Update' : 'Add'}}\r\n            </button>\r\n            <span *ngIf=\"editMode\">\r\n              <button mat-raised-button (click)=\"onCancel()\" color=\"accent\">\r\n                Cancel\r\n              </button>\r\n          </span>\r\n          </div>\r\n        </div>\r\n      </mat-card-content>\r\n\r\n    </form>\r\n  </mat-card>\r\n\r\n  <!--*ngIf=\"items.length>0\"-->\r\n  <mat-card class=\"margin-2 padding-0\">\r\n    <div class=\"search-box\" style=\"width: 500px\">\r\n      <mat-form-field>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search requested item\">\r\n      </mat-form-field>\r\n    </div>\r\n    <!-- <mat-card-header>\r\n      <mat-card-subtitle class=\"sub-title\">List of Requested Items\r\n      </mat-card-subtitle>\r\n    </mat-card-header> -->\r\n    <mat-card-content>\r\n      <div class=\"spinner-container\" *ngIf=\"loading \">\r\n        <mat-progress-bar mode=\"query\"></mat-progress-bar>\r\n      </div>\r\n\r\n      <mat-table #table [dataSource]=\"dataSource\">\r\n        <!-- <ng-container matColumnDef=\"IncentiveCategory\">\r\n          <mat-header-cell *matHeaderCellDef fxFlex=\"35\">Incentive Category</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let items\" fxFlex=\"35\">\r\n            {{items.IncentiveCategoryId | lookupTypePipe : 1}}\r\n          </mat-cell>\r\n        </ng-container> -->\r\n        <ng-container matColumnDef=\"IncentiveItem\">\r\n          <mat-header-cell *matHeaderCellDef fxFlex=\"28\">Incentive Item</mat-header-cell>\r\n          <!-- <mat-cell *matCellDef=\"let items\" fxFlex=\"20\"> {{items.IncentiveItemId |\r\n            lookupPipe : 1 }}\r\n          </mat-cell> -->\r\n          <mat-cell *matCellDef=\"let items\" fxFlex=\"28\"> {{items.Description}}\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <!--<ng-container matColumnDef=\"Unit\">-->\r\n        <!--<mat-header-cell *matHeaderCellDef>Unit</mat-header-cell>-->\r\n        <!--<mat-cell *matCellDef=\"let items\"> {{items.UnitId }}</mat-cell>-->\r\n        <!--</ng-container>-->\r\n\r\n        <ng-container matColumnDef=\"Quantity\">\r\n          <mat-header-cell *matHeaderCellDef fxFlex=\"14\">Quantity</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let items\" fxFlex=\"14\">{{items.Quantity }}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"Amount\">\r\n          <mat-header-cell *matHeaderCellDef fxFlex=\"14\"> Amount</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let items\" fxFlex=\"14\"> {{items.Amount }}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"RequestDate\">\r\n          <mat-header-cell *matHeaderCellDef fxFlex=\"14\"> Request Date</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let items\" fxFlex=\"14\"> {{items.RequestDate |  date:'MM/dd/yyyy' }}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <!-- <ng-container matColumnDef=\"Balance\">\r\n          <mat-header-cell *matHeaderCellDef fxFlex=\"14\"> Balance</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let items\" fxFlex=\"14\"> {{items.Balance }}\r\n          </mat-cell>\r\n        </ng-container> -->\r\n        <ng-container matColumnDef=\"Action\">\r\n          <mat-header-cell fxFlex=\"22\" *matHeaderCellDef>Action</mat-header-cell>\r\n          <mat-cell fxFlex=\"18\" *matCellDef=\"let items;let i=index;\">\r\n            <div>\r\n              <a class=\"pointer\" mat-min-fab matTooltip=\"Click here to edit the incentive request\"\r\n                 (click)=\"onEditIncentiveItem(i)\">\r\n                <mat-icon color=\"primary\" class=\"mat-18\">edit</mat-icon>\r\n                Edit\r\n              </a>\r\n              <a class=\"pointer\" mat--mini-fab color=\"warn\" matTooltip=\"Click here to delete the incentive item\"\r\n                 (click)=\"deleteIncentiveItem(i,items.IncentiveRequestItemId)\">\r\n                <!-- <a class=\"pointer\" mat--mini-fab color=\"warn\" matTooltip=\"Click here to delete the incentive item\"\r\n                   (click)=\"deleteRecord(items.IncentiveRequestItemId)\"> -->\r\n                <mat-icon color=\"warn\">delete</mat-icon>\r\n                Delete\r\n              </a>\r\n            </div>\r\n          </mat-cell>\r\n        </ng-container>\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\">\r\n        </mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n        </mat-row>\r\n      </mat-table>\r\n      <mat-paginator [pageSizeOptions]=\"[5,10, 25, 100]\"></mat-paginator>\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/incentive/incentive-request/requested-items-list/requested-items-list.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-request/requested-items-list/requested-items-list.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 130px !important; }\n\nmat-header-row {\n  background-color: white;\n  border-top: 1px solid #f1f1f1;\n  border-bottom: 1px solid #f1f1f1 !important; }\n\n.mat-card-header {\n  min-height: 30px;\n  background-color: #fafafa; }\n\n.search-box {\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex; }\n\n.search-box .mat-form-field {\n  padding: 0 2em;\n  width: 600px; }\n"

/***/ }),

/***/ "./src/app/components/incentive/incentive-request/requested-items-list/requested-items-list.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-request/requested-items-list/requested-items-list.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: RequestedItemsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestedItemsListComponent", function() { return RequestedItemsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _custor_helpers_compare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/helpers/compare */ "./src/@custor/helpers/compare.ts");
/* harmony import */ var _incentive_incentive_request_requested_items_list_requested_items_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../incentive/incentive-request/requested-items-list/requested-items-list.service */ "./src/app/components/incentive/incentive-request/requested-items-list/requested-items-list.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _model_lookupData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../model/lookupData */ "./src/app/model/lookupData.ts");
/* harmony import */ var _custor_const_consts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @custor/const/consts */ "./src/@custor/const/consts.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Services_look_up_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../Services/look-up.service */ "./src/app/Services/look-up.service.ts");
/* harmony import */ var _Services_lookup_type_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../Services/lookup-type.service */ "./src/app/Services/lookup-type.service.ts");
/* harmony import */ var _Services_application_setting_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../Services/application-setting.service */ "./src/app/Services/application-setting.service.ts");
/* harmony import */ var _custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @custor/components/confirm-dialog/confirm-dialog.component */ "./src/@custor/components/confirm-dialog/confirm-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var RequestedItemsListComponent = /** @class */ (function () {
    function RequestedItemsListComponent(activatedRoute, router, route, http, snackbar, lookUpTypeService, settingService, lookUpsService, config, IncentiveRequestItemService, incentiveRequestDetailService, errMsg, toastr, dialog, fb) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.route = route;
        this.http = http;
        this.snackbar = snackbar;
        this.lookUpTypeService = lookUpTypeService;
        this.settingService = settingService;
        this.lookUpsService = lookUpsService;
        this.config = config;
        this.IncentiveRequestItemService = IncentiveRequestItemService;
        this.incentiveRequestDetailService = incentiveRequestDetailService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.dialog = dialog;
        this.fb = fb;
        this.isNewIncentiveRequestItem = true;
        this.items = [];
        this.BOMItems = [];
        this.editMode = false;
        this.vehicleTypeShow = false;
        this.loading = false;
        this.preEditApprovedBalance = 0;
        this.displayedColumns = [
            'IncentiveItem', 'Quantity', 'Amount', 'RequestDate', 'Action'
        ];
        this.formErrors = {
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
        this.incenticeCategoryLookuptypes = {
            CapitalGoods: '10774',
            MotorVehicles: '10775',
            WorkshopEquipment: '10776',
            SpareParts: '10777',
            ConstructionMaterials: '10778',
            LaboratoryEquipment: '10779',
            Others: '10771'
        };
        this.currencyTypes = [];
        this.unitTypes = [];
        this.incentiveRequestDetailModels = [];
        this.itemDetail = {};
        // initialize the form
        this.initForm();
        this.initStaticData('en');
    }
    Object.defineProperty(RequestedItemsListComponent.prototype, "bOMIncentiveItemId", {
        get: function () {
            return this.incentiveRequestItemForm.get('BOMIncentiveItemId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestedItemsListComponent.prototype, "incentiveItemId", {
        get: function () {
            return this.incentiveRequestItemForm.get('IncentiveItemId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestedItemsListComponent.prototype, "quantity", {
        get: function () {
            return this.incentiveRequestItemForm.get('Quantity');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestedItemsListComponent.prototype, "approvedQty", {
        get: function () {
            return this.incentiveRequestItemForm.get('ApprovedQty');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestedItemsListComponent.prototype, "amount", {
        get: function () {
            return this.incentiveRequestItemForm.get('Amount');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestedItemsListComponent.prototype, "currencyType", {
        get: function () {
            return this.incentiveRequestItemForm.get('CurrencyType');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestedItemsListComponent.prototype, "requestDate", {
        get: function () {
            return this.incentiveRequestItemForm.get('RequestDate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestedItemsListComponent.prototype, "exRate", {
        get: function () {
            return this.incentiveRequestItemForm.get('ExRate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestedItemsListComponent.prototype, "chassisNo", {
        get: function () {
            return this.incentiveRequestItemForm.get('ChassisNo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestedItemsListComponent.prototype, "motorNo", {
        get: function () {
            return this.incentiveRequestItemForm.get('MotorNo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestedItemsListComponent.prototype, "description", {
        get: function () {
            return this.incentiveRequestItemForm.get('Description');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestedItemsListComponent.prototype, "balance", {
        get: function () {
            return this.incentiveRequestItemForm.get('Balance');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestedItemsListComponent.prototype, "measurementUnit", {
        get: function () {
            return this.incentiveRequestItemForm.get('MeasurementUnit');
        },
        enumerable: true,
        configurable: true
    });
    RequestedItemsListComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue.replace(/[\W_]/g, '');
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    RequestedItemsListComponent.prototype.ngOnInit = function () {
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
        if (this.isBOMRequired) {
            this.getBOMItems(this.projectId, this.currentCategoryId, this.phaseId);
        }
        else {
            this.filterIncentiveCategory(this.currentCategoryId);
        }
        this.parentRequestId = this.activatedRoute.snapshot.params['requestId'];
        // bind items grid
        // console.log(this.parentRequestId);
        this.getIncentiveRequestItems(this.parentRequestId);
        if (this.currentCategoryId.toString() === this.incenticeCategoryLookuptypes.MotorVehicles) {
            this.vehicleTypeShow = true;
        }
        else {
            this.vehicleTypeShow = false;
        }
        this.incentiveRequestItemForm.get('Quantity').patchValue(this.activatedRoute.snapshot.params['Quantity']);
        this.incentiveRequestItemForm.get('CurrencyType').patchValue(this.activatedRoute.snapshot.params['CurrencyType']);
        this.incentiveRequestItemForm.get('ExRate').patchValue(this.activatedRoute.snapshot.params['CurrencyRate']);
        this.isNewIncentiveRequestItem = true;
    };
    RequestedItemsListComponent.prototype.getExchangeRate = function () {
        var _this = this;
        this.settingService.getOneById(1)
            .subscribe(function (result) {
            _this.ExchangeRate = result.Value;
        });
    };
    RequestedItemsListComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.incentiveRequestItemForm.patchValue({
            ExchangeRate: this.ExchangeRate,
            CuurencyType: this.CuurencyType
        });
    };
    RequestedItemsListComponent.prototype.onClear = function () {
        this.editMode = false;
        this.incentiveRequestItemForm.reset();
        this.incentiveRequestItemForm.get('Quantity').patchValue(this.activatedRoute.snapshot.params['Quantity']);
        this.incentiveRequestItemForm.get('CurrencyType').patchValue(this.activatedRoute.snapshot.params['CurrencyType']);
        this.incentiveRequestItemForm.get('ExRate').patchValue(this.activatedRoute.snapshot.params['CurrencyRate']);
        this.incentiveRequestItemForm.get('RequestDate').patchValue(new Date());
        this.preEditApprovedBalance = 0;
    };
    RequestedItemsListComponent.prototype.filterIncentiveCategory = function (categoryCode) {
        if (!categoryCode) {
            return;
        }
        this.getItemLookup(categoryCode);
        if (categoryCode === 10775) {
            this.vehicleTypeShow = true;
        }
        else {
            this.vehicleTypeShow = false;
        }
    };
    RequestedItemsListComponent.prototype.getBOMItems = function (pId, categoryId, Phase) {
        var _this = this;
        // to-do remove the hard coded value
        this.IncentiveRequestItemService.getIncentiveBoMRequestDetails(pId, categoryId, Phase)
            .subscribe(function (items) {
            _this.BOMItems = items;
            // console.log(items);
        });
    };
    RequestedItemsListComponent.prototype.BOMIncentiveItemSelected = function (id) {
        this.getBOMItem(id);
    };
    RequestedItemsListComponent.prototype.getBOMItem = function (id) {
        var _this = this;
        // to-do remove the hard coded value
        this.IncentiveRequestItemService.getIncentiveBoMRequestDetail(id)
            .subscribe(function (item) {
            _this.BOMItem = item;
            _this.incentiveRequestItemForm.get('MeasurementUnit').patchValue(item.MesurmentUnit);
            _this.incentiveRequestItemForm.get('Balance').patchValue(item.Balance);
            _this.incentiveRequestItemForm.get('Description').patchValue(item.Description);
            _this.currentBOMTableId = item.IncentiveBoMRequestItemId;
        });
    };
    RequestedItemsListComponent.prototype.incentiveItemSelected = function (val) {
        // let target = event.source.selected._element.nativeElement;
        // let selectedObj = {
        //   value: event.value,
        //   text: target.innerText.trim()
        // };
        // // console.log(selectedObj);
        // console.log(this.getLookupText(val));
        // to-do expensive code to be improved
        var desc;
        this.filterLookups.forEach(function (item) {
            // // console.log(item.English + ' ' + item.LookupId);
            if (item.LookupId === val) {
                // alert (item.English);
                desc = item.English;
            }
        });
        this.incentiveRequestItemForm.get('Description').patchValue(desc);
    };
    RequestedItemsListComponent.prototype.getItemLookup = function (categoryCode) {
        var _this = this;
        this.loadingIndicator = true;
        this.lookupSub = this.lookUpsService
            .getLookupByParentId(categoryCode)
            .subscribe(function (result) {
            _this.filterLookups = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    // }
    RequestedItemsListComponent.prototype.getLookupText = function (val) {
        // // console.log(val);
        this.filterLookups.forEach(function (item) {
            // // console.log(item.English + ' ' + item.LookupId);
            if (item.LookupId === val) {
                // alert (item.English);
                return item.English;
            }
        });
        // return '';
    };
    RequestedItemsListComponent.prototype.getIncentiveRequestItems = function (parentRequestId) {
        var _this = this;
        this.IncentiveRequestItemService.getIncentiveRequestItemslist(parentRequestId).subscribe(function (result) {
            if (result.length > 0) {
                _this.items = result;
                // console.log(this.items);
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"](_this.items);
                _this.loading = false;
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    RequestedItemsListComponent.prototype.initStaticData = function (currentLang) {
        var _this = this;
        var quan = new _model_lookupData__WEBPACK_IMPORTED_MODULE_9__["CurrencyType"]();
        _custor_const_consts__WEBPACK_IMPORTED_MODULE_10__["CurrencyTypes"].forEach(function (pair) {
            quan = { 'Id': pair.Id.toString(), 'DescriptionEnglish': pair.DescriptionEnglish, 'Description': pair.Description };
            _this.currencyTypes.push(quan);
        });
        var unit = new _model_lookupData__WEBPACK_IMPORTED_MODULE_9__["UnitType"]();
        _custor_const_consts__WEBPACK_IMPORTED_MODULE_10__["UnitTypes"].forEach(function (pair) {
            unit = { 'Id': pair.Id.toString(), 'DescriptionEnglish': pair.DescriptionEnglish, 'Description': pair.Description };
            _this.unitTypes.push(unit);
        });
    };
    RequestedItemsListComponent.prototype.getIncentiveRequestItem = function (id) {
        var _this = this;
        this.isNewIncentiveRequestItem = false;
        this.loadingIndicator = true;
        this.incentiveRequestItemSub = this.IncentiveRequestItemService
            .getIncentiveRequestItem(id)
            .subscribe(function (result) {
            _this.itemDetail = result;
            // this.getItemLookup();
            // this.filterIncentiveCategory(this.itemDetail.IncentiveCategoryId);
            // this.updateForm();
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
        this.loadingIndicator = false;
    };
    RequestedItemsListComponent.prototype.updateForm = function () {
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
    };
    RequestedItemsListComponent.prototype.initForm = function () {
        this.incentiveRequestItemForm = this.fb.group({
            IncentiveCategoryId: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            IncentiveItemId: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            RequestDate: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            MeasurementUnit: [''],
            Quantity: [''],
            ApprovedQty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[0-9]+$')])],
            Amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[0-9 .]+$')])],
            CurrencyType: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            ChassisNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            MotorNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            Description: [''],
            Balance: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            // ExRate: ['0', Validators.compose([Validators.required, Validators.pattern('^[0-9 .]+$')])],
            ExRate: [{ value: '', disabled: true }],
            BOMIncentiveItemId: ['0']
        });
    };
    RequestedItemsListComponent.prototype.compareIds = function (id1, id2) {
        var a1 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_4__["determineId"])(id1);
        var a2 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_4__["determineId"])(id2);
        return a1 === a2;
    };
    RequestedItemsListComponent.prototype.hasValidationErrors = function () {
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
        }
        else {
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
    };
    RequestedItemsListComponent.prototype.onCancel = function () {
        this.onClear();
    };
    RequestedItemsListComponent.prototype.getIncentiveReaquestItmes = function (projectId) {
        var _this = this;
        this.incentiveRequestDetailService.getIncentiveRequestslistByProjectId(projectId).subscribe(function (result) {
            if (result.length > 0) {
                _this.incentiveRequestDetailModels = result;
                _this.loading = false;
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    RequestedItemsListComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.hasValidationErrors()) {
            return;
        }
        else if (this.currentCategoryId == 10777) {
            this.getIncentiveReaquestItmes(this.projectId);
            if (this.incentiveRequestDetailModels[0].TotalAmount < this.incentiveRequestDetailModels[0].Amount + this.incentiveRequestItemForm.get('Amount').value) {
                this.toastr.error('You Cannot Save SparePart Request, Already Used 15% of Capital Goods');
                return;
            }
        }
        this.loadingIndicator = true;
        if (this.isNewIncentiveRequestItem) {
            this.IncentiveRequestItemService.saveIncentiveRequestItem(this.getEditedIncentiveItem()).subscribe(function (itemDetail) {
                _this.saveCompleted(itemDetail);
            }, function (err) { return _this.handleError(err); });
        }
        else {
            // console.log('updating...');
            return this.IncentiveRequestItemService.updateIncentiveRequestItem(this.getEditedIncentiveItem()).subscribe(function (itemDetail) {
                _this.saveCompleted(itemDetail);
            }, function (err) { return _this.handleError(err); });
        }
    };
    RequestedItemsListComponent.prototype.onEditIncentiveItem = function (index) {
        this.editMode = true;
        this.IncentiveItemtEditIndex = index;
        this.itemDetail = this.items[index];
        this.filterIncentiveCategory(this.itemDetail.IncentiveCategoryId);
        // this.incentiveRequestItemForm.patchValue(this.itemDetail);
        if (this.itemDetail.IncentiveCategoryId === 10775) {
            this.vehicleTypeShow = true;
        }
        else {
            this.vehicleTypeShow = false;
        }
        this.updateForm();
    };
    RequestedItemsListComponent.prototype.deleteIncentiveItem = function (index, id) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_15__["AngConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            _this.loadingIndicator = true;
            if (result) {
                _this.IncentiveItemtEditIndex = index;
                _this.itemDetail = _this.items[index];
                _this.IncentiveRequestItemService.deleteIncentiveRequestItem(_this.itemDetail.IncentiveRequestDetailId)
                    .subscribe(function () {
                    _this.toastr.info('Record was deleted successfully');
                    // reload grid
                    _this.getIncentiveRequestItems(_this.parentRequestId);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"](_this.items);
                });
            }
            _this.loadingIndicator = false;
        });
    };
    RequestedItemsListComponent.prototype.deleteRecord = function (index) {
        var _this = this;
        // console.log(index);
        this.IncentiveItemtEditIndex = index;
        this.itemDetail = this.items[index];
        // to-do show confirmation dialog
        this.IncentiveRequestItemService.deleteIncentiveRequestItem(this.itemDetail.IncentiveRequestDetailId)
            .subscribe(function () {
            _this.toastr.info('Record was deleted successfully');
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"](_this.items);
        });
    };
    RequestedItemsListComponent.prototype.notification = function (message) {
        this.loading = false;
        this.toastr.success(" Succesfully " + message + " Data.!", 'Success');
        this.snackbar.open(" Succesfully " + message + " Data.!", 'Close', {
            duration: 3000,
        });
    };
    RequestedItemsListComponent.prototype.ngOnDestroy = function () {
        // this.IncentiveRequestItemSub.unsubscribe();
    };
    RequestedItemsListComponent.prototype.onBack = function () {
        // this.router.navigate(['IncentiveRequestItems/list']);
        window.history.back();
    };
    RequestedItemsListComponent.prototype.getNewBalance = function (bal, qty) {
        if (!this.isBOMRequired) {
            return 0;
        }
        if (this.editMode) {
            return bal + (this.preEditApprovedBalance - qty);
        }
        // return bal - qty;
        return bal;
    };
    RequestedItemsListComponent.prototype.ngAfterContentChecked = function () {
    };
    RequestedItemsListComponent.prototype.showBalance = function () {
        // console.log(this.currentCategoryId);
        if (this.currentCategoryId == 10778 || this.currentCategoryId == 10782) {
            this.router.navigate(['bom-balance/' + this.projectId + '/' + this.serviceApplicationId + '/' + this.serviceId]);
        }
        else if (this.currentCategoryId == 10777) {
            this.router.navigate(['sparepart-balance/' + this.projectId + '/' + this.serviceApplicationId]);
        }
    };
    RequestedItemsListComponent.prototype.saveCompleted = function (incentiveRequestDetailModel) {
        this.getIncentiveRequestItems(this.parentRequestId);
        this.isNewIncentiveRequestItem = true;
        this.onClear();
        this.loadingIndicator = false;
        this.toastr.success('Record saved successfully!');
        // window.history.back();
    };
    // getIncentiveCategory() {
    //   this.lookUpTypeService.getLookupByParentId().subscribe(result => {
    //     this.IncentiveCategoryLookup = result;
    //   });
    RequestedItemsListComponent.prototype.handleError = function (err) {
        this.loadingIndicator = false;
        this.toastr.error(this.errMsg.getError(err));
        this.loadingIndicator = false;
    };
    RequestedItemsListComponent.prototype.getEditedIncentiveItem = function () {
        var formModel = this.incentiveRequestItemForm.value;
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
            ProjectId: +this.projectId,
            Balance: this.getNewBalance(formModel.Balance, formModel.ApprovedQty),
            MeasurementUnit: formModel.MeasurementUnit
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginator"])
    ], RequestedItemsListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSort"])
    ], RequestedItemsListComponent.prototype, "sort", void 0);
    RequestedItemsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-requested-items-list',
            template: __webpack_require__(/*! ./requested-items-list.component.html */ "./src/app/components/incentive/incentive-request/requested-items-list/requested-items-list.component.html"),
            styles: [__webpack_require__(/*! ./requested-items-list.component.scss */ "./src/app/components/incentive/incentive-request/requested-items-list/requested-items-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"],
            _Services_lookup_type_service__WEBPACK_IMPORTED_MODULE_13__["LookupTypeService"],
            _Services_application_setting_service__WEBPACK_IMPORTED_MODULE_14__["ApplicationSettingService"],
            _Services_look_up_service__WEBPACK_IMPORTED_MODULE_12__["LookUpService"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_1__["AppConfiguration"],
            _incentive_incentive_request_requested_items_list_requested_items_list_service__WEBPACK_IMPORTED_MODULE_5__["IncentiveRequestDetailService"],
            _incentive_incentive_request_requested_items_list_requested_items_list_service__WEBPACK_IMPORTED_MODULE_5__["IncentiveRequestDetailService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], RequestedItemsListComponent);
    return RequestedItemsListComponent;
}());



/***/ }),

/***/ "./src/app/components/incentive/incentive-request/requested-items-list/requested-items-list.module.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-request/requested-items-list/requested-items-list.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: RequestedItemsListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestedItemsListModule", function() { return RequestedItemsListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _requested_items_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./requested-items-list.component */ "./src/app/components/incentive/incentive-request/requested-items-list/requested-items-list.component.ts");
/* harmony import */ var _requested_items_list_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./requested-items-list.routing.module */ "./src/app/components/incentive/incentive-request/requested-items-list/requested-items-list.routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RequestedItemsListModule = /** @class */ (function () {
    function RequestedItemsListModule() {
    }
    RequestedItemsListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _requested_items_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["RequestedItemsListRoutingModule"]
            ],
            declarations: [_requested_items_list_component__WEBPACK_IMPORTED_MODULE_3__["RequestedItemsListComponent"]],
            exports: [_requested_items_list_component__WEBPACK_IMPORTED_MODULE_3__["RequestedItemsListComponent"]]
        })
    ], RequestedItemsListModule);
    return RequestedItemsListModule;
}());



/***/ }),

/***/ "./src/app/components/incentive/incentive-request/requested-items-list/requested-items-list.routing.module.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-request/requested-items-list/requested-items-list.routing.module.ts ***!
  \********************************************************************************************************************/
/*! exports provided: RequestedItemsListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestedItemsListRoutingModule", function() { return RequestedItemsListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _requested_items_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./requested-items-list.component */ "./src/app/components/incentive/incentive-request/requested-items-list/requested-items-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _requested_items_list_component__WEBPACK_IMPORTED_MODULE_2__["RequestedItemsListComponent"] }
];
var RequestedItemsListRoutingModule = /** @class */ (function () {
    function RequestedItemsListRoutingModule() {
    }
    RequestedItemsListRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RequestedItemsListRoutingModule);
    return RequestedItemsListRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-incentive-incentive-request-requested-items-list-requested-items-list-module.js.map