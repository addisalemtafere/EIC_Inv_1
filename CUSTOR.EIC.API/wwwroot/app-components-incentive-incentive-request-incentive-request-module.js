(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-incentive-incentive-request-incentive-request-module"],{

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

/***/ "./src/app/components/incentive/incentive-request/incentive-request-tab/incentive-request-tab.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-request/incentive-request-tab/incentive-request-tab.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header title=\"IncentiveRequest\" icon=\"view_list\"></app-page-header>\r\n\r\n<mat-tab-group>\r\n  <mat-tab label=\"Documents\">\r\n    <ng-template matTabContent>\r\n      <mat-card *ngIf=\"!isInvestor\" class=\"margin-2 simple-card\">\r\n        <mat-card-header>\r\n          <mat-card-subtitle class=\"sub-title\"></mat-card-subtitle>\r\n          <button class=\"margin-10 certificate-title\" mat-raised-button=\"\"\r\n                  (click)=\"addMessage()\" color=\"primary\">\r\n            Add Message\r\n          </button>\r\n        </mat-card-header>\r\n      </mat-card>\r\n\r\n      <app-service-prerequisite></app-service-prerequisite>\r\n    </ng-template>\r\n    <div>\r\n    </div>\r\n  </mat-tab>\r\n  <mat-tab label=\"Request Form\">\r\n    <ng-template matTabContent=\"\">\r\n      <app-incentive-request></app-incentive-request>\r\n    </ng-template>\r\n    <div>\r\n    </div>\r\n  </mat-tab>\r\n  <mat-tab *ngIf=\"isInvestor\" label=\"Confirmation\">\r\n    <ng-template matTabContent>\r\n      <app-service-confirmation></app-service-confirmation>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab *ngIf=\"!isInvestor\" label=\"Letter\">\r\n    <ng-template matTabContent>\r\n      <app-letter></app-letter>\r\n    </ng-template>\r\n  </mat-tab>\r\n\r\n</mat-tab-group>\r\n"

/***/ }),

/***/ "./src/app/components/incentive/incentive-request/incentive-request-tab/incentive-request-tab.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-request/incentive-request-tab/incentive-request-tab.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/incentive/incentive-request/incentive-request-tab/incentive-request-tab.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-request/incentive-request-tab/incentive-request-tab.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: IncentiveRequestTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncentiveRequestTabComponent", function() { return IncentiveRequestTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _setting_services_tabs_serviceApplication_serviceapplication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../setting/services-tabs/serviceApplication/serviceapplication.service */ "./src/app/components/setting/services-tabs/serviceApplication/serviceapplication.service.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _project_profile_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../project-profile/notification/notification.component */ "./src/app/components/project-profile/notification/notification.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var IncentiveRequestTabComponent = /** @class */ (function () {
    function IncentiveRequestTabComponent(serviceApplicationsServices, accountService, dialog, route, toastr) {
        this.serviceApplicationsServices = serviceApplicationsServices;
        this.accountService = accountService;
        this.dialog = dialog;
        this.route = route;
        this.toastr = toastr;
    }
    IncentiveRequestTabComponent.prototype.ngOnInit = function () {
        this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'] || this.route.snapshot.params['serviceApplicationId'];
        this.ProjectId = this.route.snapshot.params['ProjectId'] || this.route.snapshot.params['projectId'];
        this.getUserType();
        this.title = localStorage.getItem('title');
        this.projectName = localStorage.getItem('projectName');
        this.investorName = localStorage.getItem('investorName');
        this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
        this.userName = this.accountService.currentUser.FullName;
    };
    IncentiveRequestTabComponent.prototype.getUserType = function () {
        this.isInvestor = this.accountService.getUserType();
    };
    IncentiveRequestTabComponent.prototype.addMessage = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.data = {
            ServiceApplicationId: this.ServiceApplicationId
        };
        // this.dialog.open(NotificationComponent);
        this.dialog.open(_project_profile_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__["NotificationComponent"], dialogConfig);
    };
    IncentiveRequestTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-incentive-request-tab',
            template: __webpack_require__(/*! ./incentive-request-tab.component.html */ "./src/app/components/incentive/incentive-request/incentive-request-tab/incentive-request-tab.component.html"),
            styles: [__webpack_require__(/*! ./incentive-request-tab.component.scss */ "./src/app/components/incentive/incentive-request/incentive-request-tab/incentive-request-tab.component.scss")]
        }),
        __metadata("design:paramtypes", [_setting_services_tabs_serviceApplication_serviceapplication_service__WEBPACK_IMPORTED_MODULE_2__["ServiceapplicationService"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], IncentiveRequestTabComponent);
    return IncentiveRequestTabComponent;
}());



/***/ }),

/***/ "./src/app/components/incentive/incentive-request/incentive-request.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-request/incentive-request.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"margin-2\" style=\"box-shadow: none;border: 1px solid #dddddd\">\r\n\r\n  <form #form=\"ngForm\" [formGroup]=\"incentiveRequestItemForm\" novalidate>\r\n    <mat-card-content>\r\n      <!--<div fxLayout.xs=\"row wrap\" fxLayoutAlign.xs=\"start center\" fxLayoutGap=\"2em\">-->\r\n\r\n      <span *ngIf=\"hasManyDetial\" style=\"float: right\">\r\n             <button class=\"custom-button\" (click)=\"viewDetail()\">\r\n                <mat-icon color=\"accent\" class=\"mat-18\">done</mat-icon>\r\n              View Detail\r\n             </button>\r\n              </span>\r\n      <!--</div>-->\r\n      <div fxLayout.xs=\"row wrap\" fxLayoutAlign.xs=\"start center\" fxLayoutGap=\"2em\">\r\n        <div class=\"block\" fxLayoutGap=\"2em\">\r\n          <mat-form-field style=\"width: 150px\">\r\n            <mat-label>{{'incentiverequest.CustomsBranch' | translate}}</mat-label>\r\n            <mat-select formControlName=\"CustomsSiteId\" style=\"font-family: Calibri\" type=\"text\"\r\n                        [compareWith]=\"compareIds\" required>\r\n              <option value=\"0\">--Select--</option>\r\n              <mat-option *ngFor=\"let customs of CustomsLookups\" [value]=\"customs.LookupId\">\r\n                <span>{{customs.English}}</span>\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"CustomsSiteId.hasError('required')\">\r\n              {{'common.validation.Required' | translate}}\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field style=\"width: 150px\">\r\n            <mat-label>{{'incentiverequest.IncentiveCategory' | translate}}</mat-label>\r\n            <mat-select formControlName=\"IncentiveCategoryId\" style=\"font-family: Calibri\" type=\"text\"\r\n                        (selectionChange)=\"filterIncentiveCategory($event.value)\"\r\n                        [compareWith]=\"compareIds\" required>\r\n              <option value=\"0\">--Select--</option>\r\n              <mat-option *ngFor=\"let IncentiveCate of IncentiveCategoryLookup\" [value]=\"IncentiveCate.LookUpTypeId\">\r\n                <span>{{IncentiveCate.Description}}</span>\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"IncentiveCategoryId.hasError('required')\">\r\n              {{'common.validation.Required' | translate}}\r\n            </mat-error>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field [fxFlex]=\"19\">\r\n            <mat-label>{{'incentiverequest.Quantity' | translate}}</mat-label>\r\n            <input type=\"number\" matInput required\r\n                   formControlName=\"Quantity\">\r\n            <mat-error *ngIf=\"Quantity.hasError('required')\">\r\n              {{'common.validation.Required' | translate}}\r\n            </mat-error>\r\n            <mat-error *ngIf=\"Quantity.hasError('maxlength')\">\r\n              {{'common.validation.MaxLengthChar' | translate: {'max':'6'} }}\r\n            </mat-error>\r\n            <mat-error *ngIf=\"Quantity.hasError('pattern')\">\r\n              {{'common.validation.NumberOnly' | translate}}\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n          <input placeholder=\"Request Date*\" required\r\n                 formControlName=\"RequestDate\"\r\n                 matInput\r\n                 [matDatepicker]=\"RequestDate\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"RequestDate\"></mat-datepicker-toggle>\r\n          <mat-datepicker #RequestDate>\r\n          </mat-datepicker>\r\n          <mat-error align=\"start\" *ngIf=\"formErrors.RequestDate\">{{ formErrors.RequestDate }}</mat-error>\r\n        </mat-form-field>\r\n          <mat-form-field style=\"width: 200px\">\r\n            <mat-label>{{'incentiverequest.CurrencyType' | translate}}</mat-label>\r\n            <mat-select formControlName=\"CurrencyType\" [compareWith]=\"compareIds\" required>\r\n              <option value=\"0\">--Select--</option>\r\n              <mat-option *ngFor=\"let currency of currencyTypes\" [value]=\"currency.Id\">\r\n                <span>{{currency.DescriptionEnglish}}</span>\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"CurrencyType.hasError('required')\">\r\n              {{'common.validation.Required' | translate}}\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field [fxFlex]=\"21\">\r\n            <mat-label>{{'incentiverequest.Amount' | translate}}</mat-label>\r\n            <input type=\"number\" matInput required\r\n                   formControlName=\"Amount\">\r\n            <mat-error *ngIf=\"Amount.hasError('required')\">\r\n              {{'common.validation.Required' | translate}}\r\n            </mat-error>\r\n            <mat-error *ngIf=\"Amount.hasError('maxlength')\">\r\n              {{'common.validation.MaxLengthChar' | translate: {'max':'10'} }}\r\n            </mat-error>\r\n            <mat-error *ngIf=\"Amount.hasError('pattern')\">\r\n              {{'common.validation.NumberOnly' | translate}}\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input formControlName=\"ExchangeRate\"\r\n                   type=\"text\"\r\n                   matInput placeholder=\"Exchange Rate  :\">\r\n            <!--<mat-error align=\"start\" *ngIf=\"formErrors.ExchangeRate\" class=\"form__error\">{{ formErrors.ExchangeRate }}-->\r\n            <!--</mat-error>-->\r\n          </mat-form-field>\r\n          <mat-form-field style=\"width: 200px\">\r\n            <mat-label>{{'incentiverequest.InvoiceNo' | translate}}</mat-label>\r\n            <input type=\"text\" matInput\r\n                   formControlName=\"InvoiceNo\">\r\n            <mat-error *ngIf=\"InvoiceNo.hasError('required')\">\r\n              {{'common.validation.Required' | translate}}\r\n            </mat-error>\r\n            <mat-error *ngIf=\"InvoiceNo.hasError('maxlength')\">\r\n              {{'common.validation.MaxLengthChar' | translate: {'max':'15'} }}\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <span *ngIf=\"showPhase\">\r\n          <mat-form-field>\r\n          <mat-label>{{'incentiverequest.Phase' | translate}}</mat-label>\r\n            <mat-select formControlName=\"Phase\" style=\"font-family: Calibri\" type=\"text\"\r\n                        [compareWith]=\"compareIds\">\r\n              <option value=\"0\">--Select--</option>\r\n              <mat-option *ngFor=\"let Phase of PhaseLookups\" [value]=\"Phase.LookupId\">\r\n                <span>{{Phase.English}}</span>\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n            </span>\r\n          <button class=\"custom-button\" (click)=\"onSubmit()\">\r\n            <mat-icon color=\"accent\" class=\"mat-18\">done</mat-icon>\r\n            {{editMode ? 'Save' : 'Add'}}\r\n          </button>\r\n\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n  </form>\r\n</mat-card>\r\n<!--*ngIf=\"IncentiveRequestItemModes.length>0\"-->\r\n<mat-card class=\"margin-2 padding-0\">\r\n  <mat-card-header>\r\n    <mat-card-subtitle class=\"sub-title\">List of Incentive Request\r\n    </mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <div class=\"spinner-container\" *ngIf=\"loading \">\r\n      <mat-progress-bar mode=\"query\"></mat-progress-bar>\r\n    </div>\r\n    <mat-table #table [dataSource]=\"dataSource\">\r\n      <ng-container matColumnDef=\"IncentiveCategory\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"35\">Incentive Category</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let IncentiveRequestItemModes\" fxFlex=\"35\">\r\n          {{IncentiveRequestItemModes.IncentiveCategoryId | lookupTypePipe : 1}}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Amount\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"8\"> Amount</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let IncentiveRequestItemModes\" fxFlex=\"8\"> {{IncentiveRequestItemModes.Amount }}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Quantity\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"8\">Quantity</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let IncentiveRequestItemModes\" fxFlex=\"8\">{{IncentiveRequestItemModes.Quantity }}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Action\">\r\n        <mat-header-cell fxFlex=\"\" *matHeaderCellDef>Action</mat-header-cell>\r\n        <mat-cell fxFlex=\"\" *matCellDef=\"let IncentiveRequestItemModes;let i=index;\">\r\n          <div>\r\n            <a class=\"pointer\" mat-min-fab matTooltip=\"Click here to edit the incentive request\"\r\n               (click)=\"onEditIncentiveItem(i)\">\r\n              <mat-icon color=\"primary\" class=\"mat-18\">edit</mat-icon>\r\n              Edit\r\n            </a>\r\n            <a class=\"pointer\" color=\"warn\" matTooltip=\"Click here to delete the incentive request\"\r\n               (click)=\"deleteIncentiveItem(i,IncentiveRequestItemModes.IncentiveRequestId)\">\r\n              <mat-icon color=\"warn\">delete</mat-icon>\r\n              Delete\r\n            </a>\r\n            <span *ngIf=\"!isInvestor\">\r\n            <a class=\"pointer custom-button\" matTooltip=\"Click here to add detail the incentive request\"\r\n               (click)=\"addDetail(IncentiveRequestItemModes)\">\r\n              Add Detail\r\n            </a>\r\n            </span>\r\n          </div>\r\n        </mat-cell>\r\n      </ng-container>\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\">\r\n      </mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/incentive/incentive-request/incentive-request.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-request/incentive-request.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 130px !important; }\n\nmat-header-row {\n  background-color: white;\n  border-top: 1px solid #f1f1f1;\n  border-bottom: 1px solid #f1f1f1 !important; }\n\n.mat-card-header {\n  min-height: 30px;\n  background-color: #fafafa; }\n"

/***/ }),

/***/ "./src/app/components/incentive/incentive-request/incentive-request.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-request/incentive-request.component.ts ***!
  \***************************************************************************************/
/*! exports provided: IncentiveRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncentiveRequestComponent", function() { return IncentiveRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _custor_helpers_compare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/helpers/compare */ "./src/@custor/helpers/compare.ts");
/* harmony import */ var _incentive_incentive_request_incentive_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../incentive/incentive-request/incentive-request.service */ "./src/app/components/incentive/incentive-request/incentive-request.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _model_lookupData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../model/lookupData */ "./src/app/model/lookupData.ts");
/* harmony import */ var _custor_const_consts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @custor/const/consts */ "./src/@custor/const/consts.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Services_look_up_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../Services/look-up.service */ "./src/app/Services/look-up.service.ts");
/* harmony import */ var _Services_lookup_type_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../Services/lookup-type.service */ "./src/app/Services/lookup-type.service.ts");
/* harmony import */ var _Services_application_setting_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../Services/application-setting.service */ "./src/app/Services/application-setting.service.ts");
/* harmony import */ var _custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @custor/components/confirm-dialog/confirm-dialog.component */ "./src/@custor/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _requested_items_list_requested_items_list_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./requested-items-list/requested-items-list.service */ "./src/app/components/incentive/incentive-request/requested-items-list/requested-items-list.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var IncentiveRequestComponent = /** @class */ (function () {
    function IncentiveRequestComponent(activatedRoute, router, route, http, snackbar, lookUpTypeService, lookUpsService, config, dialog, accountService, settingService, IncentiveRequestItemService, IncentiveRequestService, errMsg, toastr, fb) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.route = route;
        this.http = http;
        this.snackbar = snackbar;
        this.lookUpTypeService = lookUpTypeService;
        this.lookUpsService = lookUpsService;
        this.config = config;
        this.dialog = dialog;
        this.accountService = accountService;
        this.settingService = settingService;
        this.IncentiveRequestItemService = IncentiveRequestItemService;
        this.IncentiveRequestService = IncentiveRequestService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.fb = fb;
        this.isNewIncentiveRequestItem = false;
        this.IncentiveRequestModels = [];
        this.editMode = false;
        this.loading = false;
        this.displayedColumns = [
            'IncentiveCategory', 'Quantity', 'Amount', 'Action'
        ];
        this.formErrors = {
            IncentiveCategoryId: '',
            Quantity: '',
            Amount: '',
            CurrencyType: '',
            CustomsSiteId: '',
            RequestDate: '',
            InvoiceNo: '',
        };
        this.currencyTypes = [];
        this.unitTypes = [];
        this.hasManyDetial = false;
        this.showPhase = false;
        this.BOMItems = [];
        this.IncentiveRequestModel = {};
        // initialize the form
        this.initForm();
        this.initStaticData('en');
    }
    Object.defineProperty(IncentiveRequestComponent.prototype, "quantity", {
        get: function () {
            return this.incentiveRequestItemForm.get('Quantity');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IncentiveRequestComponent.prototype, "CustomsSiteId", {
        get: function () {
            return this.incentiveRequestItemForm.get('CustomsSiteId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IncentiveRequestComponent.prototype, "amount", {
        get: function () {
            return this.incentiveRequestItemForm.get('Amount');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IncentiveRequestComponent.prototype, "currencyType", {
        get: function () {
            return this.incentiveRequestItemForm.get('CurrencyType');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IncentiveRequestComponent.prototype, "RequestDate", {
        get: function () {
            return this.incentiveRequestItemForm.get('RequestDate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IncentiveRequestComponent.prototype, "Quantity", {
        get: function () {
            return this.incentiveRequestItemForm.get('Quantity');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IncentiveRequestComponent.prototype, "Amount", {
        get: function () {
            return this.incentiveRequestItemForm.get('Amount');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IncentiveRequestComponent.prototype, "CurrencyType", {
        get: function () {
            return this.incentiveRequestItemForm.get('CurrencyType');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IncentiveRequestComponent.prototype, "InvoiceNo", {
        get: function () {
            return this.incentiveRequestItemForm.get('InvoiceNo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IncentiveRequestComponent.prototype, "Phase", {
        get: function () {
            return this.incentiveRequestItemForm.get('Phase');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IncentiveRequestComponent.prototype, "IncentiveCategoryId", {
        get: function () {
            return this.incentiveRequestItemForm.get('IncentiveCategoryId');
        },
        enumerable: true,
        configurable: true
    });
    IncentiveRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.getIncentiveCategory();
        this.getCustomsLookup();
        this.getExchangeRate();
        this.getLookup();
        this.getUserType();
        var id = this.activatedRoute.snapshot.params['id'];
        this.ServiceApplicationId = this.activatedRoute.snapshot.params['ServiceApplicationId'];
        this.ServiceId = this.activatedRoute.snapshot.params['ServiceId'];
        this.ProjectId = this.activatedRoute.snapshot.params['ProjectId'];
        this.route.params
            .subscribe(function (params) {
            // this.projectId = +params['id'];
            // if (16107 > 1) {
            _this.getIncentiveReaquestItmes(_this.ProjectId, _this.ServiceApplicationId);
            _this.getIncentiveReaquestItmesByServiceAppId(_this.ServiceApplicationId);
            // }
        });
    };
    IncentiveRequestComponent.prototype.getLookup = function () {
        var _this = this;
        this.lookupSub = this.lookUpsService
            .getLookupByParentId(10781)
            .subscribe(function (result) {
            _this.PhaseLookups = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    IncentiveRequestComponent.prototype.getExchangeRate = function () {
        var _this = this;
        this.settingService.getOneById(1)
            .subscribe(function (result) {
            _this.ExchangeRate = result.Value;
        });
    };
    IncentiveRequestComponent.prototype.onClear = function () {
        this.editMode = false;
        this.incentiveRequestItemForm.reset();
        this.incentiveRequestItemForm.patchValue({
            ExchangeRate: this.ExchangeRate,
            RequestDate: new Date()
        });
        this.isNewIncentiveRequestItem = true;
    };
    IncentiveRequestComponent.prototype.getCustomsLookup = function () {
        var _this = this;
        this.loadingIndicator = true;
        this.lookupSub = this.lookUpsService
            .getLookupByParentId(10783)
            .subscribe(function (result) {
            _this.CustomsLookups = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    IncentiveRequestComponent.prototype.getIncentiveCategory = function () {
        var _this = this;
        this.lookUpTypeService.getLookupByParentId().subscribe(function (result) {
            _this.IncentiveCategoryLookup = result;
        });
    };
    IncentiveRequestComponent.prototype.getIncentiveReaquestItmesByServiceAppId = function (ServiceApplicationId) {
        var _this = this;
        this.IncentiveRequestService.getIncentiveRequestByServiceApplicationId(ServiceApplicationId).subscribe(function (result) {
            if (result.length > 0) {
                _this.IncentiveRequestModels = result;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTableDataSource"](_this.IncentiveRequestModels);
                _this.loading = false;
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    IncentiveRequestComponent.prototype.getIncentiveReaquestItmes = function (projectId, serviceApplicationId) {
        var _this = this;
        this.IncentiveRequestService.getIncentiveRequestslist(projectId, serviceApplicationId).subscribe(function (result) {
            if (result.length > 1) {
                _this.hasManyDetial = true;
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    IncentiveRequestComponent.prototype.initStaticData = function (currentLang) {
        var _this = this;
        var quan = new _model_lookupData__WEBPACK_IMPORTED_MODULE_10__["CurrencyType"]();
        _custor_const_consts__WEBPACK_IMPORTED_MODULE_11__["CurrencyTypes"].forEach(function (pair) {
            quan = { 'Id': pair.Id.toString(), 'DescriptionEnglish': pair.DescriptionEnglish, 'Description': pair.Description };
            _this.currencyTypes.push(quan);
        });
        // let unit: UnitType = new UnitType();
        // UnitTypes.forEach(pair => {
        //   unit = {'Id': pair.Id.toString(), 'DescriptionEnglish': pair.DescriptionEnglish, 'Description': pair.Description};
        //   this.unitTypes.push(unit);
        // });
    };
    IncentiveRequestComponent.prototype.getIncentiveRequestItem = function (id) {
        var _this = this;
        this.isNewIncentiveRequestItem = false;
        this.loadingIndicator = true;
        this.incentiveRequestSub = this.IncentiveRequestService
            .getIncentiveRequest(id)
            .subscribe(function (result) {
            _this.IncentiveRequestModel = result;
            // this.getItemLookup();
            // this.filterIncentiveCategory(this.IncentiveRequestModel.IncentiveCategoryId);
            _this.updateForm();
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
        this.loadingIndicator = false;
    };
    IncentiveRequestComponent.prototype.updateForm = function () {
        this.incentiveRequestItemForm.setValue({
            IncentiveCategory: this.IncentiveRequestModel.IncentiveCategoryId == null ? '' : this.IncentiveRequestModel.IncentiveCategoryId,
            //  IncentiveItem: this.IncentiveRequestModel.IncentiveItemId,
            // UnitId: this.IncentiveRequestModel.UnitId,
            Amount: this.IncentiveRequestModel.Amount,
            CurrencyType: this.IncentiveRequestModel.CurrencyType,
            RequestDate: this.IncentiveRequestModel.RequestDate,
            // MotorNo: this.IncentiveRequestModel.MotorNo,
            InvoiceNo: this.IncentiveRequestModel.InvoiceNo == null ? '' : this.IncentiveRequestModel.InvoiceNo,
            Quantity: this.IncentiveRequestModel.Quantity == null ? 0 : this.IncentiveRequestModel.Quantity,
            CustomsSiteId: this.IncentiveRequestModel.CustomsSiteId == null ? 0 : this.IncentiveRequestModel.CustomsSiteId,
            Phase: this.IncentiveRequestModel.Phase == null ? 0 : this.IncentiveRequestModel.Phase,
        });
        // // console.log(this.IncentiveRequestModel);
        // },4000);
        this.isNewIncentiveRequestItem = false;
    };
    IncentiveRequestComponent.prototype.initForm = function () {
        this.incentiveRequestItemForm = this.fb.group({
            IncentiveCategoryId: [this.IncentiveRequestModel.IncentiveCategoryId, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            Quantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[0-9]+$')])],
            CustomsSiteId: [this.IncentiveRequestModel.CustomsSiteId, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            Amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[0-9 ,.]+$')])],
            CurrencyType: [this.IncentiveRequestModel.CurrencyType, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            Phase: [this.IncentiveRequestModel.Phase],
            RequestDate: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            MotorNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            InvoiceNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15)])],
            ExchangeRate: [{ value: '', disabled: true }],
        });
    };
    IncentiveRequestComponent.prototype.compareIds = function (id1, id2) {
        var a1 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_4__["determineId"])(id1);
        var a2 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_4__["determineId"])(id2);
        return a1 === a2;
    };
    IncentiveRequestComponent.prototype.onSubmit = function () {
        // if (!this.incentiveRequestItemForm.valid) {
        //   return;
        // }
        var _this = this;
        if (this.hasValidationErrors()) {
            return;
        }
        else if (this.CheckExistance()) {
            return;
        }
        else {
            this.loadingIndicator = true;
            return this.IncentiveRequestService.saveIncentiveRequest(this.getEditedIncentiveItem()).subscribe(function (incentiveRequestModel) {
                _this.saveCompleted(incentiveRequestModel);
            }, function (err) { return _this.handleError(err); });
        }
    };
    IncentiveRequestComponent.prototype.CheckExistance = function () {
        var _this = this;
        if (this.incentiveRequestItemForm.get('IncentiveCategoryId').value == '10778') {
            this.IncentiveRequestItemService
                .getIncentiveBoMRequestDetails(this.ProjectId, this.incentiveRequestItemForm.get('IncentiveCategoryId').value, this.incentiveRequestItemForm.get('Phase').value)
                .subscribe(function (items) {
                // console.log(this.BOMItems);
                _this.BOMItems = items;
                if (_this.BOMItems.length === 0) {
                    _this.toastr.error('You Cannot Save Incentive Request, Because there is no Uploaded Construction Materials in this Batch  ');
                    return true;
                }
                else {
                    return false;
                }
            }); //TODO Validation Jump
        }
    };
    IncentiveRequestComponent.prototype.onEditIncentiveItem = function (index) {
        this.editMode = true;
        this.IncentiveItemtEditIndex = index;
        this.IncentiveRequestModel = this.IncentiveRequestModels[index];
        this.incentiveRequestItemForm.patchValue(this.IncentiveRequestModel);
        this.isNewIncentiveRequestItem = true;
    };
    IncentiveRequestComponent.prototype.hasValidationErrors = function () {
        if (this.quantity.value === 0 || this.quantity.value === null) {
            this.toastr.error(' Requested quantity can not be 0');
            return true;
        }
        if (this.CustomsSiteId.value === 0 || this.CustomsSiteId.value === null || this.CustomsSiteId.value === undefined) {
            this.toastr.error('Please Select Customs Site');
            return true;
        }
        if (this.IncentiveCategoryId.value === 0 || this.IncentiveCategoryId.value === null) {
            this.toastr.error('Please Select Incentive Category');
            return true;
        }
        if (this.RequestDate.value === 0 || this.RequestDate.value === null) {
            this.toastr.error('Please Select Request Date');
            return true;
        }
        if (this.CurrencyType.value === 0 || this.CurrencyType.value === null) {
            this.toastr.error('Please Select Currency Type');
            return true;
        }
        if (this.Amount.value === 0 || this.Amount.value === null) {
            this.toastr.error('Please Enter Amount');
            return true;
        }
        if (this.incentiveRequestItemForm.get('IncentiveCategoryId').value == '10778' || this.incentiveRequestItemForm.get('IncentiveCategoryId').value == '10782') {
            if (this.Phase.value == 0 || this.Phase.value == null) {
                this.toastr.error('Please Enter Incentive Request Batch Number');
                return true;
            }
        }
    };
    IncentiveRequestComponent.prototype.deleteIncentiveItem = function (index, id) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_16__["AngConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            _this.loadingIndicator = true;
            if (result) {
                _this.IncentiveRequestService.deleteIncentiveRequest(id)
                    .subscribe(function () {
                    _this.notification('Deleted');
                    _this.IncentiveRequestModels.splice(index, 1);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTableDataSource"](_this.IncentiveRequestModels);
                });
            }
            _this.loadingIndicator = false;
        });
    };
    // getItemLookup(categoryCode: any) {
    //   this.loadingIndicator = true;
    //   this.lookupSub = this.lookUpsService
    //     .getLookupByParentId(categoryCode)
    //     .subscribe(result => {
    //         this.filterLookups = result;
    //         // this.filterIncentiveCategory(this.IncentiveRequestModel.IncentiveCategoryId);
    //       },
    //       error => this.toastr.error(this.errMsg.getError(error)));
    // }
    IncentiveRequestComponent.prototype.notification = function (message) {
        this.loading = false;
        this.toastr.success(" Succesfully " + message + " Data.!", 'Success');
        this.snackbar.open(" Succesfully " + message + " Data.!", 'Close', {
            duration: 3000,
        });
    };
    IncentiveRequestComponent.prototype.ngOnDestroy = function () {
        // this.IncentiveRequestItemSub.unsubscribe();
    };
    IncentiveRequestComponent.prototype.onBack = function () {
        // this.router.navigate(['IncentiveRequestItems/list']);
        window.history.back();
    };
    IncentiveRequestComponent.prototype.ngAfterContentChecked = function () {
        this.incentiveRequestItemForm.patchValue({
            ExchangeRate: this.ExchangeRate
        });
    };
    IncentiveRequestComponent.prototype.addDetail = function (inRequest) {
        // console.log(inRequest);
        this.router.navigate(['/requested-items-list/' +
                inRequest.IncentiveCategoryId + '/' + inRequest.ProjectId + '/' +
                inRequest.IncentiveRequestId + '/' + inRequest.Quantity + '/' + inRequest.CurrencyType + '/' + inRequest.CurrencyRate + '/' + inRequest.Phase + '/' + this.ServiceApplicationId + '/' + this.ServiceId]);
    };
    IncentiveRequestComponent.prototype.viewDetail = function () {
        this.router.navigate(['/incentive-request-history/' + this.ProjectId + '/' + this.ServiceApplicationId + '/' + this.ServiceId]);
    };
    IncentiveRequestComponent.prototype.getUserType = function () {
        this.isInvestor = this.accountService.getUserType();
    };
    IncentiveRequestComponent.prototype.filterIncentiveCategory = function (categoryCode) {
        if (!categoryCode) {
            return;
        }
        if (categoryCode === 10778 || categoryCode === 10782) {
            this.showPhase = true;
        }
        else {
            this.showPhase = false;
        }
    };
    IncentiveRequestComponent.prototype.saveCompleted = function (incentiveRequestModel) {
        if (incentiveRequestModel) {
            this.IncentiveRequestModel = incentiveRequestModel;
            // this.getIncentiveReaquestItmes(this.ProjectId);
            this.getIncentiveReaquestItmesByServiceAppId(this.ServiceApplicationId);
        }
        this.onClear();
        this.loadingIndicator = false;
        this.toastr.success('Record saved successfully!');
    };
    IncentiveRequestComponent.prototype.handleError = function (err) {
        this.loadingIndicator = false;
        this.toastr.error(this.errMsg.getError(err));
        this.loadingIndicator = false;
    };
    IncentiveRequestComponent.prototype.getEditedIncentiveItem = function () {
        var formModel = this.incentiveRequestItemForm.value;
        return {
            IncentiveRequestId: this.isNewIncentiveRequestItem ? 0 : this.IncentiveRequestModel.IncentiveRequestId,
            IncentiveCategoryId: formModel.IncentiveCategoryId,
            Quantity: formModel.Quantity,
            CustomsSiteId: formModel.CustomsSiteId,
            Amount: formModel.Amount,
            CurrencyType: formModel.CurrencyType,
            CurrencyRate: this.ExchangeRate,
            RequestDate: formModel.RequestDate,
            InvoiceNo: formModel.InvoiceNo,
            Phase: formModel.Phase,
            ProjectId: this.ProjectId,
            ServiceApplicationId: this.ServiceApplicationId
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_7__["Subscription"])
    ], IncentiveRequestComponent.prototype, "incentiveRequestSub", void 0);
    IncentiveRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-incentive-request',
            template: __webpack_require__(/*! ./incentive-request.component.html */ "./src/app/components/incentive/incentive-request/incentive-request.component.html"),
            styles: [__webpack_require__(/*! ./incentive-request.component.scss */ "./src/app/components/incentive/incentive-request/incentive-request.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSnackBar"],
            _Services_lookup_type_service__WEBPACK_IMPORTED_MODULE_14__["LookupTypeService"],
            _Services_look_up_service__WEBPACK_IMPORTED_MODULE_13__["LookUpService"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_1__["AppConfiguration"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialog"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_17__["AccountService"],
            _Services_application_setting_service__WEBPACK_IMPORTED_MODULE_15__["ApplicationSettingService"],
            _requested_items_list_requested_items_list_service__WEBPACK_IMPORTED_MODULE_18__["IncentiveRequestDetailService"],
            _incentive_incentive_request_incentive_request_service__WEBPACK_IMPORTED_MODULE_5__["IncentiveRequestService"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], IncentiveRequestComponent);
    return IncentiveRequestComponent;
}());



/***/ }),

/***/ "./src/app/components/incentive/incentive-request/incentive-request.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-request/incentive-request.module.ts ***!
  \************************************************************************************/
/*! exports provided: IncentiveRequestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncentiveRequestModule", function() { return IncentiveRequestModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _incentive_request_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./incentive-request.routing.module */ "./src/app/components/incentive/incentive-request/incentive-request.routing.module.ts");
/* harmony import */ var _incentive_request_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./incentive-request.component */ "./src/app/components/incentive/incentive-request/incentive-request.component.ts");
/* harmony import */ var _incentive_request_tab_incentive_request_tab_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./incentive-request-tab/incentive-request-tab.component */ "./src/app/components/incentive/incentive-request/incentive-request-tab/incentive-request-tab.component.ts");
/* harmony import */ var _project_profile_letter_letter_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../project-profile/letter/letter.module */ "./src/app/components/project-profile/letter/letter.module.ts");
/* harmony import */ var _project_profile_service_confirmation_ServiceConfirmation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../project-profile/service-confirmation/ServiceConfirmation.module */ "./src/app/components/project-profile/service-confirmation/ServiceConfirmation.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var IncentiveRequestModule = /** @class */ (function () {
    function IncentiveRequestModule() {
    }
    IncentiveRequestModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _incentive_request_routing_module__WEBPACK_IMPORTED_MODULE_3__["IncentiveRequestRoutingModule"],
                _project_profile_service_confirmation_ServiceConfirmation_module__WEBPACK_IMPORTED_MODULE_7__["ServiceConfirmationModule"],
                _project_profile_letter_letter_module__WEBPACK_IMPORTED_MODULE_6__["LetterModule"]
            ],
            declarations: [_incentive_request_component__WEBPACK_IMPORTED_MODULE_4__["IncentiveRequestComponent"], _incentive_request_tab_incentive_request_tab_component__WEBPACK_IMPORTED_MODULE_5__["IncentiveRequestTabComponent"]],
            exports: [_incentive_request_component__WEBPACK_IMPORTED_MODULE_4__["IncentiveRequestComponent"], _incentive_request_tab_incentive_request_tab_component__WEBPACK_IMPORTED_MODULE_5__["IncentiveRequestTabComponent"]]
        })
    ], IncentiveRequestModule);
    return IncentiveRequestModule;
}());



/***/ }),

/***/ "./src/app/components/incentive/incentive-request/incentive-request.routing.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-request/incentive-request.routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: IncentiveRequestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncentiveRequestRoutingModule", function() { return IncentiveRequestRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _incentive_request_tab_incentive_request_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./incentive-request-tab/incentive-request-tab.component */ "./src/app/components/incentive/incentive-request/incentive-request-tab/incentive-request-tab.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _incentive_request_tab_incentive_request_tab_component__WEBPACK_IMPORTED_MODULE_2__["IncentiveRequestTabComponent"] }
];
var IncentiveRequestRoutingModule = /** @class */ (function () {
    function IncentiveRequestRoutingModule() {
    }
    IncentiveRequestRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], IncentiveRequestRoutingModule);
    return IncentiveRequestRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-incentive-incentive-request-incentive-request-module.js.map