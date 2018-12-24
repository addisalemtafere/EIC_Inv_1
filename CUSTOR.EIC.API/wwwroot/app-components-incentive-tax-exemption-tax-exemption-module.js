(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-incentive-tax-exemption-tax-exemption-module"],{

/***/ "./src/app/components/incentive/tax-exemption/tax-exemption-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/incentive/tax-exemption/tax-exemption-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: TaxExemptionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxExemptionRoutingModule", function() { return TaxExemptionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tax_exemption_tab_tax_exemption_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tax-exemption-tab/tax-exemption-tab.component */ "./src/app/components/incentive/tax-exemption/tax-exemption-tab/tax-exemption-tab.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _tax_exemption_tab_tax_exemption_tab_component__WEBPACK_IMPORTED_MODULE_2__["TaxExemptionTabComponent"] }
];
var TaxExemptionRoutingModule = /** @class */ (function () {
    function TaxExemptionRoutingModule() {
    }
    TaxExemptionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TaxExemptionRoutingModule);
    return TaxExemptionRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/incentive/tax-exemption/tax-exemption-tab/tax-exemption-tab.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/incentive/tax-exemption/tax-exemption-tab/tax-exemption-tab.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header title=\"TaxExemption\" icon=\"view_list\"></app-page-header>\r\n<mat-tab-group>\r\n  <mat-tab label=\"Documents\">\r\n    <ng-template matTabContent=\"\">\r\n      <mat-card *ngIf=\"!isInvestor\" class=\"margin-2 simple-card\">\r\n        <mat-card-header>\r\n          <mat-card-subtitle class=\"sub-title\"></mat-card-subtitle>\r\n          <button class=\"margin-10 certificate-title\" mat-raised-button=\"\"\r\n                  (click)=\"addMessage()\" color=\"primary\">\r\n            Add Message\r\n          </button>\r\n        </mat-card-header>\r\n      </mat-card>\r\n      <!--<mat-card *ngIf=\"isInvestor\" style=\"overflow: hidden;\" class=\"margin-2 padding-0\">-->\r\n      <!--&lt;!&ndash;<mat-card-header>&ndash;&gt;-->\r\n      <!--&lt;!&ndash;<mat-card-subtitle class=\"sub-title\">List of Associate&ndash;&gt;-->\r\n      <!--&lt;!&ndash;&lt;!&ndash;<mat-divider></mat-divider>&ndash;&gt;&ndash;&gt;-->\r\n      <!--&lt;!&ndash;</mat-card-subtitle>&ndash;&gt;-->\r\n      <!--&lt;!&ndash;</mat-card-header>&ndash;&gt;-->\r\n      <!--<mat-card-content>-->\r\n      <!--<mat-card-actions align=\"center\">-->\r\n      <!--&lt;!&ndash;<button mat-raised-button=\"\" color=\"primary\" (click)=\"onSubmit()\">Save</button>&ndash;&gt;-->\r\n      <!--<div fxLayoutGap=\"3em\" align=\"center\">-->\r\n      <!--<div style=\"padding: 20px\" fxLayout=\"row\" fxLayoutAlign=\"center right\" fxLayoutGap=\"2em\">-->\r\n      <!--<button style=\"margin-left: 10px\" (click)=\"UpdateServiceApplication()\" mat-raised-button=\"\"-->\r\n      <!--class=\"mr-16\"-->\r\n      <!--color=\"primary\">-->\r\n      <!--<mat-icon color=\"primary\">done</mat-icon>-->\r\n      <!--<span>Submit </span>-->\r\n      <!--</button>-->\r\n      <!--&lt;!&ndash;<div fxFlex=\"15\">&ndash;&gt;-->\r\n\r\n      <!--&lt;!&ndash;&lt;!&ndash;<button class=\"custom-button\" (click)=\"next()\" color=\"warn\" type=\"button\">&ndash;&gt;&ndash;&gt;-->\r\n      <!--&lt;!&ndash;&lt;!&ndash;Back&ndash;&gt;&ndash;&gt;-->\r\n      <!--&lt;!&ndash;&lt;!&ndash;</button>&ndash;&gt;&ndash;&gt;-->\r\n      <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n      <!--&lt;!&ndash;<div style=\"text-align: center\" fxFlex=\"67\" fxFlexAlign=\"center\">&ndash;&gt;-->\r\n      <!--&lt;!&ndash;&lt;!&ndash;<button mat-raised-button=\"\" color=\"primary\">&ndash;&gt;&ndash;&gt;-->\r\n      <!--&lt;!&ndash;&lt;!&ndash;<mat-icon class=\"mat-18\">done</mat-icon>&ndash;&gt;&ndash;&gt;-->\r\n      <!--&lt;!&ndash;&lt;!&ndash;<span>Save as Draft</span>&ndash;&gt;&ndash;&gt;-->\r\n      <!--&lt;!&ndash;&lt;!&ndash;</button>&ndash;&gt;&ndash;&gt;-->\r\n\r\n      <!--&lt;!&ndash;&ndash;&gt;-->\r\n      <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n      <!--&lt;!&ndash;<div fxFlex=\"15\">&ndash;&gt;-->\r\n\r\n      <!--&lt;!&ndash;&lt;!&ndash;<button class=\"custom-button\" (click)=\"next()\" color=\"warn\" type=\"button\">&ndash;&gt;&ndash;&gt;-->\r\n      <!--&lt;!&ndash;&lt;!&ndash;Next&ndash;&gt;&ndash;&gt;-->\r\n      <!--&lt;!&ndash;&lt;!&ndash;</button>&ndash;&gt;&ndash;&gt;-->\r\n      <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n      <!--</div>-->\r\n      <!--</div>-->\r\n      <!--</mat-card-actions>-->\r\n      <!--</mat-card-content>-->\r\n      <!--</mat-card>-->\r\n      <app-service-prerequisite></app-service-prerequisite>\r\n\r\n    </ng-template>\r\n    <div>\r\n    </div>\r\n  </mat-tab>\r\n  <mat-tab label=\"Request Form\">\r\n    <ng-template matTabContent=\"\">\r\n      <app-tax-exemption></app-tax-exemption>\r\n    </ng-template>\r\n    <div>\r\n    </div>\r\n  </mat-tab>\r\n  <mat-tab *ngIf=\"isInvestor\" label=\"Confirmation\">\r\n    <ng-template matTabContent>\r\n      <app-service-confirmation></app-service-confirmation>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab *ngIf=\"!isInvestor\" label=\"Letter\">\r\n    <ng-template matTabContent>\r\n      <app-letter></app-letter>\r\n    </ng-template>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n"

/***/ }),

/***/ "./src/app/components/incentive/tax-exemption/tax-exemption-tab/tax-exemption-tab.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/incentive/tax-exemption/tax-exemption-tab/tax-exemption-tab.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/incentive/tax-exemption/tax-exemption-tab/tax-exemption-tab.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/incentive/tax-exemption/tax-exemption-tab/tax-exemption-tab.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: TaxExemptionTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxExemptionTabComponent", function() { return TaxExemptionTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _project_profile_notification_notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../project-profile/notification/notification.component */ "./src/app/components/project-profile/notification/notification.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _setting_services_tabs_serviceApplication_serviceapplication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../setting/services-tabs/serviceApplication/serviceapplication.service */ "./src/app/components/setting/services-tabs/serviceApplication/serviceapplication.service.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
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







var TaxExemptionTabComponent = /** @class */ (function () {
    function TaxExemptionTabComponent(serviceApplicationsServices, accountService, dialog, route, toastr) {
        this.serviceApplicationsServices = serviceApplicationsServices;
        this.accountService = accountService;
        this.dialog = dialog;
        this.route = route;
        this.toastr = toastr;
    }
    TaxExemptionTabComponent.prototype.ngOnInit = function () {
        this.getUserType();
        this.title = localStorage.getItem('title');
        this.projectName = localStorage.getItem('projectName');
        this.investorName = localStorage.getItem('investorName');
        this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
        this.userName = this.accountService.currentUser.FullName;
    };
    TaxExemptionTabComponent.prototype.getUserType = function () {
        this.isInvestor = this.accountService.getUserType();
    };
    TaxExemptionTabComponent.prototype.addMessage = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.data = {
            ServiceApplicationId: this.ServiceApplicationId
        };
        // this.dialog.open(NotificationComponent);
        this.dialog.open(_project_profile_notification_notification_component__WEBPACK_IMPORTED_MODULE_1__["NotificationComponent"], dialogConfig);
    };
    TaxExemptionTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tax-exemption-tab',
            template: __webpack_require__(/*! ./tax-exemption-tab.component.html */ "./src/app/components/incentive/tax-exemption/tax-exemption-tab/tax-exemption-tab.component.html"),
            styles: [__webpack_require__(/*! ./tax-exemption-tab.component.scss */ "./src/app/components/incentive/tax-exemption/tax-exemption-tab/tax-exemption-tab.component.scss")]
        }),
        __metadata("design:paramtypes", [_setting_services_tabs_serviceApplication_serviceapplication_service__WEBPACK_IMPORTED_MODULE_3__["ServiceapplicationService"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], TaxExemptionTabComponent);
    return TaxExemptionTabComponent;
}());



/***/ }),

/***/ "./src/app/components/incentive/tax-exemption/tax-exemption.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/incentive/tax-exemption/tax-exemption.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"margin-2\" style=\"box-shadow: none;border: 1px solid #dddddd\" xmlns=\"http://www.w3.org/1999/html\">\r\n\r\n  <form #form=\"ngForm\" [formGroup]=\"taxexemptionForm\" novalidate>\r\n    <mat-card-content>\r\n      <div fxLayout.xs=\"row wrap\" fxLayoutAlign.xs=\"start center\" fxLayoutGap=\"2em\">\r\n        <div class=\"block\" fxLayoutGap=\"2em\">\r\n          <mat-form-field fxFlex=\"40\">\r\n            <mat-label>{{'taxexemption.RevenueBranch' | translate}}</mat-label>\r\n            <mat-select formControlName=\"RevenueBranch\" style=\"font-family: Calibri\" type=\"text\"\r\n                        (selectionChange)=\"setSelectedText($event.value)\"\r\n                        [compareWith]=\"compareIds\" required>\r\n              <option value=\"0\">--Select--</option>\r\n              <mat-option *ngFor=\"let revenuebranch of Lookups\"\r\n                          [value]=\"revenuebranch.LookupId\">\r\n                <span> {{revenuebranch.Amharic}}</span>\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"RevenueBranch.hasError('required')\">\r\n              {{'common.validation.Required' | translate}}\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input placeholder=\"Request Date * :\" required\r\n                   formControlName=\"RequestDate\"\r\n                   matInput\r\n                   [matDatepicker]=\"RequestDate\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"RequestDate\"></mat-datepicker-toggle>\r\n            <mat-datepicker #RequestDate>\r\n            </mat-datepicker>\r\n          </mat-form-field>\r\n          <mat-form-field [fxFlex]=\"20\">\r\n           <mat-label>{{'taxexemption.ExemptionYear' | translate}}</mat-label>\r\n            <input type=\"text\" matInput required\r\n                   formControlName=\"ExemptionYearRequested\">\r\n            <mat-error *ngIf=\"ExemptionYearRequested.hasError('pattern')\">\r\n              Only neumbric charcters are allowed!\r\n            </mat-error>\r\n            <mat-error *ngIf=\"!ExemptionYearRequested.hasError('maxlength')\">\r\n              Maximum charcters length is 1!\r\n            </mat-error>\r\n          </mat-form-field>\r\n\r\n          <button [disabled]=\"form.invalid\" class=\"custom-button\" (click)=\"onSubmit()\">\r\n            <mat-icon color=\"accent\" class=\"mat-18\">done</mat-icon>\r\n            {{editMode ? 'Save' : 'Add'}}\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n\r\n  </form>\r\n</mat-card>\r\n<!--*ngIf=\"tax-exemptionModels.length>0\"-->\r\n<mat-card class=\"margin-2 padding-0\">\r\n  <!--<mat-card-header>-->\r\n  <!--<mat-card-subtitle class=\"sub-title\">List of Tax Exemption-->\r\n  <!--</mat-card-subtitle>-->\r\n  <!--</mat-card-header>-->\r\n  <mat-card-content>\r\n    <div class=\"spinner-container\" *ngIf=\"loading \">\r\n      <mat-progress-bar mode=\"query\"></mat-progress-bar>\r\n    </div>\r\n    <mat-table #table [dataSource]=\"dataSource\">\r\n      <ng-container matColumnDef=\"RevenueBranch\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"30\">Revenue Branch</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let TaxExemptionModels\" fxFlex=\"30\"> {{TaxExemptionModels.RevenueBranchDescription }}\r\n          <!--| letterlookupPipe : 1-->\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"RequestDate\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"20\">Request Date</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let TaxExemptionModels\" fxFlex=\"20\"> {{TaxExemptionModels.RequestDate |  date:'MM/dd/yyyy'}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"ExemptionYearRequested\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"8\"> Exemption Year</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let TaxExemptionModels\" fxFlex=\"8\"> {{TaxExemptionModels.ExemptionYearRequested }}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Action\">\r\n        <mat-header-cell fxFlex=\"18\" *matHeaderCellDef>Action</mat-header-cell>\r\n        <mat-cell fxFlex=\"18\" *matCellDef=\"let TaxExemptionModels;let i=index;\">\r\n          <div>\r\n            <a class=\"pointer\" mat-min-fab matTooltip=\"Click here to edit the tax exemption\"\r\n               (click)=\"onEditTaxExemption(i)\">\r\n              <mat-icon color=\"primary\" class=\"mat-18\">edit</mat-icon>\r\n              Edit\r\n            </a>\r\n            <a class=\"pointer\" mat--mini-fab color=\"warn\" matTooltip=\"Click here to delete the tax exemption\"\r\n               (click)=\"deleteTaxExemption(i,TaxExemptionModels.TaxExemptionID)\">\r\n              <mat-icon color=\"warn\">delete</mat-icon>\r\n              Delete\r\n            </a>\r\n          </div>\r\n        </mat-cell>\r\n      </ng-container>\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\">\r\n      </mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/incentive/tax-exemption/tax-exemption.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/incentive/tax-exemption/tax-exemption.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/incentive/tax-exemption/tax-exemption.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/incentive/tax-exemption/tax-exemption.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TaxExemptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxExemptionComponent", function() { return TaxExemptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _Services_look_up_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/look-up.service */ "./src/app/Services/look-up.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _custor_helpers_compare__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @custor/helpers/compare */ "./src/@custor/helpers/compare.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _incentive_tax_exemption_tax_exemption_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../incentive/tax-exemption/tax-exemption.service */ "./src/app/components/incentive/tax-exemption/tax-exemption.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _setting_category_tabs_InvActivity_invactivity_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../setting/category-tabs/InvActivity/invactivity.service */ "./src/app/components/setting/category-tabs/InvActivity/invactivity.service.ts");
/* harmony import */ var _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../Services/project-profile.service */ "./src/app/Services/project-profile.service.ts");
/* harmony import */ var _custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @custor/components/confirm-dialog/confirm-dialog.component */ "./src/@custor/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _setting_lookup_tabs_lookups_lookups_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../setting/lookup-tabs/lookups/lookups.service */ "./src/app/components/setting/lookup-tabs/lookups/lookups.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var TaxExemptionComponent = /** @class */ (function () {
    function TaxExemptionComponent(activatedRoute, router, route, http, snackbar, lookUpsService, lookUpService, config, taxExemptionService, projectProfileService, invactivityService, errMsg, dialog, toastr, fb) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.route = route;
        this.http = http;
        this.snackbar = snackbar;
        this.lookUpsService = lookUpsService;
        this.lookUpService = lookUpService;
        this.config = config;
        this.taxExemptionService = taxExemptionService;
        this.projectProfileService = projectProfileService;
        this.invactivityService = invactivityService;
        this.errMsg = errMsg;
        this.dialog = dialog;
        this.toastr = toastr;
        this.fb = fb;
        this.isNewTaxExemption = false;
        this.TaxExemptionModels = [];
        this.editMode = false;
        this.loading = false;
        this.displayedColumns = [
            'RevenueBranch', 'RequestDate', 'ExemptionYearRequested', 'Action'
        ];
        this.TaxExemptionModel = {};
        // initialize the form
        this.initForm();
    }
    Object.defineProperty(TaxExemptionComponent.prototype, "ExemptionYearRequested", {
        get: function () {
            return this.taxexemptionForm.get('ExemptionYearRequested');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaxExemptionComponent.prototype, "RevenueBranch", {
        get: function () {
            return this.taxexemptionForm.get('RevenueBranch');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaxExemptionComponent.prototype, "RequestDate", {
        get: function () {
            return this.taxexemptionForm.get('RequestDate');
        },
        enumerable: true,
        configurable: true
    });
    // private getServiceApplicationRenewal() {
    //   this.projectRenewalService.getRenewalByServiceApplicationId(this.ServiceApplicationId).subscribe(result => {
    //     // console.log(result.ProjectRenewal[0]);
    //     this.editMode = true;
    //     this.projectRenewalForm.patchValue(result.ProjectRenewal[0]);
    //     this.projectId = result.ProjectId;
    //     this.InvestorId = result.InvestorId;
    //   }, error => this.errMsg.getError(error));
    // }
    // initStaticData(currentLang) {
    // }
    TaxExemptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ProjectId = this.route.snapshot.params['projectId'];
        this.getTaxExemptionList(this.ProjectId);
        //this.getTaxExemptionYear(this.ProjectId);
        this.getProjectDetails(this.ProjectId);
        this.initForm();
        this.getItemLookup();
        this.isNewTaxExemption = true;
        this.route.params
            .subscribe(function (params) {
            _this.ServiceApplicationId = +params['id'];
            // this.projectId = this.route.snapshot.params['id'];
            if (_this.ServiceApplicationId > 1) {
                // // console.log(this.ServiceApplicationId);
                // this.getServiceApplicationRenewal();
                // this.approval = true;
            }
        });
    };
    TaxExemptionComponent.prototype.setSelectedText = function (id) {
        var _this = this;
        this.loadingIndicator = true;
        this.lookupSub = this.lookUpsService
            .getLookup(id)
            .subscribe(function (result) {
            // console.log(result);
            _this.setSelectedValue = result.Amharic;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    TaxExemptionComponent.prototype.onClear = function () {
        this.editMode = false;
        this.taxexemptionForm.reset();
        this.isNewTaxExemption = true;
    };
    TaxExemptionComponent.prototype.getProjectDetails = function (ProjectId) {
        var _this = this;
        this.projectProfileService.projectsDetailForLetter(ProjectId)
            .subscribe(function (result) {
            if (result) {
                _this.projectModel = result;
                _this.taxexemptionForm.patchValue({
                    ExemptionYearRequested: _this.projectModel.IsOromiaSpecialZone ? _this.projectModel.InvestmentActivity.InAddisOromiaAreas.toString() : _this.projectModel.InvestmentActivity.InOtherAreas.toString()
                });
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    TaxExemptionComponent.prototype.getTaxExemptionYear = function (ProjectId) {
        var _this = this;
        this.invactivityService.getTaxExemptionYear(ProjectId).subscribe(function (result) {
            _this.InvActivityModel = result;
            _this.ExemptionYear = _this.InvActivityModel.InAddisOromiaAreas;
            _this.taxexemptionForm.patchValue({
                ExemptionYearRequested: _this.InvActivityModel.InAddisOromiaAreas
            });
            _this.loading = false;
        }, function (error) { return _this.errMsg.getError(error); });
    };
    TaxExemptionComponent.prototype.getTaxExemptionList = function (ProjectId) {
        var _this = this;
        this.taxExemptionService.getTaxExemptionList(ProjectId).subscribe(function (result) {
            if (result.length > 0) {
                _this.TaxExemptionModels = result;
                // console.log(this.TaxExemptionModels);
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.TaxExemptionModels);
                _this.loading = false;
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    TaxExemptionComponent.prototype.getItemLookup = function () {
        var _this = this;
        this.loadingIndicator = true;
        this.lookupSub = this.lookUpService
            .getLookupByParentId(22)
            .subscribe(function (result) {
            _this.Lookups = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    TaxExemptionComponent.prototype.initForm = function () {
        this.taxexemptionForm = this.fb.group({
            RevenueBranch: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            ExemptionYearRequested: [{
                    value: '',
                    disabled: true
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[0-9 .]+$')])],
            RequestDate: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    };
    TaxExemptionComponent.prototype.compareIds = function (id1, id2) {
        var a1 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_8__["determineId"])(id1);
        var a2 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_8__["determineId"])(id2);
        return a1 === a2;
    };
    TaxExemptionComponent.prototype.hasValidationErrors = function () {
        if (this.RevenueBranch.value == 0 || this.RevenueBranch.value == null || this.RevenueBranch.value == undefined) {
            this.toastr.error('Please Select Revenue Branch');
            return true;
        }
        if (this.RequestDate.value == 0 || this.RequestDate.value == null || this.RequestDate.value == undefined) {
            this.toastr.error('Please Select Request Date');
            return true;
        }
    };
    TaxExemptionComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.hasValidationErrors()) {
            return;
        }
        else {
            if (this.editMode === false) {
                this.projectProfileService.ProjectsDetail(+this.ProjectId).subscribe(function (result) {
                    if (result.BusinessLicenseNo == null) {
                        _this.existanceNotification('The Project Does not Have Business License');
                        return;
                    }
                    else if (_this.TaxExemptionModels.length > 0 && _this.isNewTaxExemption) {
                        _this.existanceNotification('Tax Exemption Incentive Already Given');
                        return;
                    }
                    else {
                        _this.doSaveExemption();
                    }
                }, function (error) { return _this.errMsg.getError(error); });
            } //TODO  Jumped Validators
            this.loadingIndicator = true;
        }
    };
    TaxExemptionComponent.prototype.onEditTaxExemption = function (index) {
        this.editMode = true;
        this.TaxexemptiontEditIndex = index;
        this.TaxExemptionModel = this.TaxExemptionModels[index];
        this.taxexemptionForm.patchValue(this.TaxExemptionModel);
        this.isNewTaxExemption = false;
    };
    TaxExemptionComponent.prototype.deleteTaxExemption = function (index, id) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_14__["AngConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            _this.loadingIndicator = true;
            if (result) {
                _this.TaxexemptiontEditIndex = index;
                _this.TaxExemptionModel = _this.TaxExemptionModels[index];
                // console.log(this.TaxExemptionModel);
                _this.taxExemptionService.deleteTaxExemption(_this.TaxExemptionModel.IncentiveTaxExemptionRequestID)
                    .subscribe(function () {
                    _this.notification('Deleted');
                    _this.TaxExemptionModels.splice(index, 1);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.TaxExemptionModels);
                });
            }
            _this.loadingIndicator = false;
        });
    };
    TaxExemptionComponent.prototype.ngAfterContentChecked = function () {
        this.taxexemptionForm.patchValue({
            ServiceId: localStorage.getItem('ServiceId'),
            InvestorId: localStorage.getItem('InvestorId'),
            ProjectId: this.ProjectId,
        });
    };
    TaxExemptionComponent.prototype.notification = function (message) {
        this.loading = false;
        this.toastr.success(" Succesfully " + message + " Data.!", 'Success');
        this.snackbar.open(" Succesfully " + message + " Data.!", 'Close', {
            duration: 3000,
        });
    };
    TaxExemptionComponent.prototype.existanceNotification = function (message) {
        this.loading = false;
        this.toastr.info(message, 'Info');
        this.snackbar.open(message, 'Close', {
            duration: 3000,
        });
    };
    TaxExemptionComponent.prototype.ngOnDestroy = function () {
        // this.TaxExemptionSub.unsubscribe();
    };
    TaxExemptionComponent.prototype.onBack = function () {
        // this.router.navigate(['TaxExemptions/list']);
        window.history.back();
    };
    TaxExemptionComponent.prototype.doSaveExemption = function () {
        var _this = this;
        this.taxExemptionService.saveTaxExemption(this.getEditedTaxExemption()).subscribe(function (taxExemptionModel) {
            _this.saveCompleted(taxExemptionModel);
        }, function (err) { return _this.handleError(err); });
    };
    TaxExemptionComponent.prototype.saveCompleted = function (taxExemptionModel) {
        if (taxExemptionModel) {
            this.TaxExemptionModel = taxExemptionModel;
            localStorage.setItem('IncentiveTaxExemptionRequestID', this.TaxExemptionModel.IncentiveTaxExemptionRequestID.toString());
            this.getTaxExemptionList(this.ProjectId);
        }
        this.onClear();
        this.loadingIndicator = false;
        this.toastr.success('Record saved successfully!');
    };
    TaxExemptionComponent.prototype.handleError = function (err) {
        this.loadingIndicator = false;
        this.toastr.error(this.errMsg.getError(err));
        this.loadingIndicator = false;
    };
    TaxExemptionComponent.prototype.getEditedTaxExemption = function () {
        var formModel = this.taxexemptionForm.value;
        return {
            IncentiveTaxExemptionRequestID: this.isNewTaxExemption ? 0 : this.TaxExemptionModel.IncentiveTaxExemptionRequestID,
            RevenueBranch: formModel.RevenueBranch,
            RevenueBranchDescription: this.setSelectedValue,
            RequestDate: formModel.RequestDate,
            ExemptionYearRequested: this.ExemptionYear,
            ProjectId: +this.ProjectId
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_7__["Subscription"])
    ], TaxExemptionComponent.prototype, "taxExemptionSub", void 0);
    TaxExemptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tax-exemption',
            template: __webpack_require__(/*! ./tax-exemption.component.html */ "./src/app/components/incentive/tax-exemption/tax-exemption.component.html"),
            styles: [__webpack_require__(/*! ./tax-exemption.component.scss */ "./src/app/components/incentive/tax-exemption/tax-exemption.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _setting_lookup_tabs_lookups_lookups_service__WEBPACK_IMPORTED_MODULE_15__["LookupsService"],
            _Services_look_up_service__WEBPACK_IMPORTED_MODULE_4__["LookUpService"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_1__["AppConfiguration"],
            _incentive_tax_exemption_tax_exemption_service__WEBPACK_IMPORTED_MODULE_10__["TaxExemptionService"],
            _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_13__["ProjectProfileService"],
            _setting_category_tabs_InvActivity_invactivity_service__WEBPACK_IMPORTED_MODULE_12__["InvactivityService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], TaxExemptionComponent);
    return TaxExemptionComponent;
}());



/***/ }),

/***/ "./src/app/components/incentive/tax-exemption/tax-exemption.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/incentive/tax-exemption/tax-exemption.module.ts ***!
  \****************************************************************************/
/*! exports provided: TaxExemptionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxExemptionModule", function() { return TaxExemptionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tax_exemption_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tax-exemption-routing.module */ "./src/app/components/incentive/tax-exemption/tax-exemption-routing.module.ts");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _tax_exemption_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tax-exemption.component */ "./src/app/components/incentive/tax-exemption/tax-exemption.component.ts");
/* harmony import */ var _tax_exemption_tab_tax_exemption_tab_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tax-exemption-tab/tax-exemption-tab.component */ "./src/app/components/incentive/tax-exemption/tax-exemption-tab/tax-exemption-tab.component.ts");
/* harmony import */ var _project_profile_letter_letter_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../project-profile/letter/letter.module */ "./src/app/components/project-profile/letter/letter.module.ts");
/* harmony import */ var _project_profile_service_confirmation_ServiceConfirmation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../project-profile/service-confirmation/ServiceConfirmation.module */ "./src/app/components/project-profile/service-confirmation/ServiceConfirmation.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TaxExemptionModule = /** @class */ (function () {
    function TaxExemptionModule() {
    }
    TaxExemptionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _tax_exemption_routing_module__WEBPACK_IMPORTED_MODULE_2__["TaxExemptionRoutingModule"],
                _project_profile_letter_letter_module__WEBPACK_IMPORTED_MODULE_6__["LetterModule"],
                _project_profile_service_confirmation_ServiceConfirmation_module__WEBPACK_IMPORTED_MODULE_7__["ServiceConfirmationModule"],
            ],
            declarations: [_tax_exemption_component__WEBPACK_IMPORTED_MODULE_4__["TaxExemptionComponent"], _tax_exemption_tab_tax_exemption_tab_component__WEBPACK_IMPORTED_MODULE_5__["TaxExemptionTabComponent"]],
            exports: [_tax_exemption_component__WEBPACK_IMPORTED_MODULE_4__["TaxExemptionComponent"], _tax_exemption_tab_tax_exemption_tab_component__WEBPACK_IMPORTED_MODULE_5__["TaxExemptionTabComponent"]]
        })
    ], TaxExemptionModule);
    return TaxExemptionModule;
}());



/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/lookups/lookups.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookups/lookups.service.ts ***!
  \***************************************************************************/
/*! exports provided: LookupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupsService", function() { return LookupsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _model_lookups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../model/lookups */ "./src/app/model/lookups.ts");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LookupsService = /** @class */ (function () {
    function LookupsService(httpClient, config, errMsg) {
        this.httpClient = httpClient;
        this.config = config;
        this.errMsg = errMsg;
        this.lookupsList = [];
        this.subLookuptypesModel = new _model_lookups__WEBPACK_IMPORTED_MODULE_3__["LookupsModel"]();
        this.lookuptypesModelList = [];
    }
    LookupsService.prototype.getLookup = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('lookupById', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (lookuprdata) {
            _this.subLookuptypesModel = lookuprdata;
            return _this.subLookuptypesModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    LookupsService.prototype.getLookups = function () {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('lookup')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (lookupsList) { return _this.lookupsList = lookupsList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    LookupsService.prototype.saveLookups = function (subLookuptypesModel) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('lookup'), subLookuptypesModel).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (LookupsData) {
            _this.subLookuptypesModel = LookupsData;
            return _this.subLookuptypesModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    LookupsService.prototype.deleteLookups = function (subLookuptypesModel) {
        return this.httpClient.delete(this.config.urls.url('lookup', subLookuptypesModel.LookupId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parsePromiseResponseError));
    };
    LookupsService.prototype.getLookuptype = function () {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('lookuptype')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (lookuptypesList) {
            _this.lookuptypesModelList = lookuptypesList;
            return _this.lookuptypesModelList;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    LookupsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_4__["AppConfiguration"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"]])
    ], LookupsService);
    return LookupsService;
}());



/***/ }),

/***/ "./src/app/model/lookups.ts":
/*!**********************************!*\
  !*** ./src/app/model/lookups.ts ***!
  \**********************************/
/*! exports provided: LookupsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupsModel", function() { return LookupsModel; });
var LookupsModel = /** @class */ (function () {
    function LookupsModel(LookupId, LookUpTypeId, Amharic, English, DescriptionEnglish) {
        this.LookupId = LookupId;
        this.LookUpTypeId = LookUpTypeId;
        this.Amharic = Amharic;
        this.English = English;
        this.DescriptionEnglish = DescriptionEnglish;
    }
    return LookupsModel;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-incentive-tax-exemption-tax-exemption-module.js.map