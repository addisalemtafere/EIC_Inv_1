(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-project-profile-project-renewal-tab-projectRenewal-module"],{

/***/ "./src/app/Services/project-renewal.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/Services/project-renewal.service.ts ***!
  \*****************************************************/
/*! exports provided: ProjectRenewalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectRenewalService", function() { return ProjectRenewalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base.service */ "./src/app/Services/Base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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






var ProjectRenewalService = /** @class */ (function (_super) {
    __extends(ProjectRenewalService, _super);
    function ProjectRenewalService(http, appConfig, errMsg) {
        var _this = _super.call(this, http, appConfig.urls.url('projectRenewals'), errMsg) || this;
        _this.http = http;
        _this.appConfig = appConfig;
        _this.errMsg = errMsg;
        return _this;
    }
    ProjectRenewalService.prototype.getRenewalByServiceApplicationId = function (id) {
        return this.httpClient.get(this.appConfig.urls.url('ServiceApplicationWithRenewal') + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ProjectRenewalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"]])
    ], ProjectRenewalService);
    return ProjectRenewalService;
}(_Base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/components/project-profile/project-renewal-tab/project-renewal-tab.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-renewal-tab/project-renewal-tab.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"0\">\r\n  <div class=\"block\" fxFlex=\"\">\r\n    <app-page-header title=\"projectrenewal\" icon=\"\"></app-page-header>\r\n\r\n  </div>\r\n  <div id=\"title1\" class=\"block\" fxFlex=\"50\">\r\n    <span class=\"page-title\">{{title}}</span>\r\n    <span class=\"slideBorder\">/</span>\r\n    <span class=\"page-title\">{{investorName}}</span>\r\n    <span class=\"slideBorder\">/</span>\r\n    <span class=\"page-title\">{{projectName}}</span>\r\n\r\n\r\n  </div>\r\n</div>\r\n<mat-tab-group [selectedIndex]=\"renewalIndex\">\r\n  <!--<mat-tab label=\"Service List\" *ngIf=\"isInvestor\">-->\r\n  <!--<ng-template matTabContent >-->\r\n  <!--<app-project-list></app-project-list>-->\r\n  <!--</ng-template>-->\r\n  <!--</mat-tab>-->\r\n  <mat-tab label=\"Service Info\">\r\n    <ng-template matTabContent>\r\n      <app-service-info></app-service-info>\r\n    </ng-template>\r\n  </mat-tab>\r\n\r\n  <mat-tab *ngIf=\"!isInvestor\" label=\"After Care Recommendation\">\r\n    <ng-template matTabContent>\r\n      <app-aftercare-recommendation></app-aftercare-recommendation>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab label=\"Project Renewal\">\r\n    <ng-template matTabContent>\r\n      <app-project-renewal></app-project-renewal>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab label=\"Document\">\r\n    <ng-template matTabContent>\r\n      <mat-card *ngIf=\"!isInvestor\" class=\"margin-2 simple-card\">\r\n        <mat-card-header>\r\n          <mat-card-subtitle class=\"sub-title\"></mat-card-subtitle>\r\n          <button class=\"margin-10 certificate-title\" mat-raised-button=\"\"\r\n                  (click)=\"addMessage()\" color=\"primary\">\r\n            Add Message\r\n          </button>\r\n        </mat-card-header>\r\n      </mat-card>\r\n      <app-service-prerequisite></app-service-prerequisite>\r\n    </ng-template>\r\n  </mat-tab>\r\n\r\n  <mat-tab *ngIf=\"!isInvestor\" label=\"Payment\">\r\n    <ng-template matTabContent>\r\n      <app-payment></app-payment>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab *ngIf=\"!isInvestor\" label=\"Certificate\">\r\n    <ng-template matTabContent>\r\n      <app-certificate></app-certificate>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab *ngIf=\"isInvestor\" label=\"Confirmation\">\r\n    <ng-template matTabContent>\r\n      <app-service-confirmation></app-service-confirmation>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <!--Fire Make this Comment-->\r\n  <!--<mat-tab *ngIf=\"!isInvestor\" label=\"Letter\">-->\r\n  <!--<ng-template matTabContent>-->\r\n  <!--<app-letter></app-letter>-->\r\n  <!--</ng-template>-->\r\n  <!--</mat-tab>-->\r\n</mat-tab-group>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/project-renewal-tab/project-renewal-tab.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-renewal-tab/project-renewal-tab.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/project-profile/project-renewal-tab/project-renewal-tab.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-renewal-tab/project-renewal-tab.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ProjectRenewalTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectRenewalTabComponent", function() { return ProjectRenewalTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../notification/notification.component */ "./src/app/components/project-profile/notification/notification.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProjectRenewalTabComponent = /** @class */ (function () {
    function ProjectRenewalTabComponent(accountService, dialog, route, dataSharing) {
        this.accountService = accountService;
        this.dialog = dialog;
        this.route = route;
        this.dataSharing = dataSharing;
    }
    ProjectRenewalTabComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUserType();
        this.subscription = this.dataSharing.renewalIndex
            .subscribe(function (index) {
            _this.renewalIndex = index;
            // // console.log(index)
            // this.move(this.steeperIndex);
        });
        this.title = localStorage.getItem('title');
        this.projectName = localStorage.getItem('projectName');
        this.investorName = localStorage.getItem('investorName');
        this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
        this.userName = this.accountService.currentUser.FullName;
    };
    ProjectRenewalTabComponent.prototype.getUserType = function () {
        this.isInvestor = this.accountService.getUserType();
    };
    ProjectRenewalTabComponent.prototype.addMessage = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.data = {
            ServiceApplicationId: this.ServiceApplicationId,
            title: 'Angular For Beginners'
        };
        // this.dialog.open(NotificationComponent);
        this.dialog.open(_notification_notification_component__WEBPACK_IMPORTED_MODULE_3__["NotificationComponent"], dialogConfig);
    };
    ProjectRenewalTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-renewal-tab',
            template: __webpack_require__(/*! ./project-renewal-tab.component.html */ "./src/app/components/project-profile/project-renewal-tab/project-renewal-tab.component.html"),
            styles: [__webpack_require__(/*! ./project-renewal-tab.component.scss */ "./src/app/components/project-profile/project-renewal-tab/project-renewal-tab.component.scss")]
        }),
        __metadata("design:paramtypes", [_custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_2__["DataSharingService"]])
    ], ProjectRenewalTabComponent);
    return ProjectRenewalTabComponent;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-renewal-tab/project-renewal/project-renewal.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-renewal-tab/project-renewal/project-renewal.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form style=\"padding: 2px\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"projectRenewalForm\" novalidate>\r\n\r\n  <mat-card>\r\n    <mat-card-subtitle class=\"sub-title\">\r\n      Project Renewal\r\n      <mat-divider></mat-divider>\r\n    </mat-card-subtitle>\r\n    <mat-card-content>\r\n      <div fxLayout=\"row wrap\"\r\n           fxLayoutAlign=\"start center\"\r\n           class=\"content\"\r\n           fxLayout.lt-sm=\"column\"\r\n           fxLayoutGap=\"2em\">\r\n\r\n        <!--<div class=\"block\" fxFlex=\"\" *ngIf=\"!isInvestor\">-->\r\n        <!--<mat-form-field class=\"full-width\">-->\r\n        <!--<mat-label>Project Name</mat-label>-->\r\n        <!--<mat-select formControlName=\"ProjectId\">-->\r\n        <!--<mat-option *ngFor=\"let project of projectList\" [value]=\"project.ProjectId\">-->\r\n        <!--{{project.ProjectName}}-->\r\n        <!--</mat-option>-->\r\n        <!--</mat-select>-->\r\n        <!--</mat-form-field>-->\r\n        <!--</div>-->\r\n\r\n        <div class=\"blocks\" fxFlex>\r\n          <mat-form-field>\r\n            <input placeholder=\"Renewal Date * :\"\r\n                   formControlName=\"RenewalDate\"\r\n                   matInput\r\n                   [matDatepicker]=\"RenewalDate\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"RenewalDate\"></mat-datepicker-toggle>\r\n            <mat-datepicker #RenewalDate>\r\n            </mat-datepicker>\r\n            <!--<mat-error align=\"start\" *ngIf=\"formErrors.StartDate\">{{ formErrors.StartDate }}</mat-error>-->\r\n          </mat-form-field>\r\n        </div>\r\n        <!--<div class=\"block\" fxFlex>-->\r\n        <!--<mat-form-field>-->\r\n        <!--<input placeholder=\"Expected Start Date * :\"-->\r\n        <!--matInput-->\r\n        <!--formControlName=\"ExpectedStartDate\"-->\r\n        <!--[matDatepicker]=\"ExpectedStartDate\">-->\r\n        <!--<mat-datepicker-toggle matSuffix [for]=\"ExpectedStartDate\">-->\r\n        <!--</mat-datepicker-toggle>-->\r\n        <!--<mat-datepicker #ExpectedStartDate></mat-datepicker>-->\r\n        <!--&lt;!&ndash;<mat-error align=\"start\" *ngIf=\"formErrors.terminationDate\">{{ formErrors.terminationDate }}</mat-error>&ndash;&gt;-->\r\n        <!--</mat-form-field>-->\r\n        <!--</div>-->\r\n        <!--<div class=\"blocks\" fxFlex>-->\r\n        <!--&lt;!&ndash;<mat-label>Start Date :</mat-label>&ndash;&gt;-->\r\n        <!--<mat-form-field>-->\r\n        <!--<input formControlName=\"ApprovedDate\"-->\r\n        <!--matInput-->\r\n        <!--placeholder=\"Approved Date * :\"-->\r\n        <!--[matDatepicker]=\"ApprovedDate\">-->\r\n        <!--<mat-datepicker-toggle matSuffix [for]=\"ApprovedDate\">-->\r\n        <!--</mat-datepicker-toggle>-->\r\n        <!--<mat-datepicker #ApprovedDate></mat-datepicker>-->\r\n        <!--&lt;!&ndash;<mat-error align=\"start\" *ngIf=\"formErrors.operationDate\">{{ formErrors.operationDate }}</mat-error>&ndash;&gt;-->\r\n        <!--</mat-form-field>-->\r\n        <!--</div>-->\r\n        <div class=\"blocks\" fxFlex>\r\n          <mat-form-field>\r\n            <input placeholder=\"Renewed From * :\"\r\n                   formControlName=\"RenewedFrom\"\r\n                   matInput\r\n                   RenewedFrom\r\n                   [matDatepicker]=\"RenewedFrom\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"RenewedFrom\"></mat-datepicker-toggle>\r\n            <mat-datepicker #RenewedFrom></mat-datepicker>\r\n            <!--<mat-error align=\"start\" *ngIf=\"formErrors.StartDate\">{{ formErrors.StartDate }}</mat-error>-->\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"block\" fxFlex>\r\n          <mat-form-field>\r\n            <input placeholder=\"Renewed To * :\"\r\n                   matInput\r\n                   formControlName=\"RenewedTo\"\r\n                   [matDatepicker]=\"RenewedTo\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"RenewedTo\"></mat-datepicker-toggle>\r\n            <mat-datepicker #RenewedTo></mat-datepicker>\r\n            <!--<mat-error align=\"start\" *ngIf=\"formErrors.terminationDate\">{{ formErrors.terminationDate }}</mat-error>-->\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" class=\"content\"\r\n           fxLayout.lt-sm=\"column\" fxLayoutGap=\"2em\">\r\n\r\n        <!--<div class=\"blocks\" fxFlex>-->\r\n        <!--<mat-form-field>-->\r\n        <!--<input placeholder=\"Renewed From * :\"-->\r\n        <!--formControlName=\"RenewedFrom\"-->\r\n        <!--matInput-->\r\n        <!--RenewedFrom-->\r\n        <!--[matDatepicker]=\"RenewedFrom\">-->\r\n        <!--<mat-datepicker-toggle matSuffix [for]=\"RenewedFrom\"></mat-datepicker-toggle>-->\r\n        <!--<mat-datepicker #RenewedFrom></mat-datepicker>-->\r\n        <!--&lt;!&ndash;<mat-error align=\"start\" *ngIf=\"formErrors.StartDate\">{{ formErrors.StartDate }}</mat-error>&ndash;&gt;-->\r\n        <!--</mat-form-field>-->\r\n        <!--</div>-->\r\n\r\n        <div class=\"block\" fxFlex=\"50\">\r\n          <mat-form-field class=\"full-width\" floatPlaceholder=\"auto\">\r\n            <input matInput\r\n                   placeholder=\"Remark\"\r\n                   type=\"text\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n        <div mat-dialog-actions fxLayoutGap=\"3em\">\r\n          <button\r\n            [disabled]=\"!projectRenewalForm.valid\"\r\n            type=\"submit\"\r\n            mat-raised-button=\"\"\r\n            color=\"primary\">\r\n            <mat-icon class=\"mat-18\">done</mat-icon>\r\n            <!--<span class=\"agree\">Save</span>-->\r\n\r\n            {{editMode ? 'Update' : 'Save'}}\r\n          </button>\r\n          <button *ngIf=\"isInvestor\" mat-raised-button (click)=\"approve()\" color=\"primary\" type=\"button\">\r\n            <mat-icon class=\"mat-18\">done_all</mat-icon>\r\n            <span>Save</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n  <!--<pre>-->\r\n  <!--{{projectRenewalForm.value | json}}-->\r\n  <!--</pre>-->\r\n</form>\r\n\r\n<div *ngIf=\"loading\" class=\"loadme-circleBounce\">\r\n  <div class=\"loadme-circleBounce1\"></div>\r\n  <div class=\"loadme-circleBounce2\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/project-renewal-tab/project-renewal/project-renewal.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-renewal-tab/project-renewal/project-renewal.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/project-profile/project-renewal-tab/project-renewal/project-renewal.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-renewal-tab/project-renewal/project-renewal.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ProjectRenewalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectRenewalComponent", function() { return ProjectRenewalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_project_renewal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Services/project-renewal.service */ "./src/app/Services/project-renewal.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../Services/project-profile.service */ "./src/app/Services/project-profile.service.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ProjectRenewalComponent = /** @class */ (function () {
    function ProjectRenewalComponent(fb, snackbar, accountService, projetServices, dataSharing, route, errMsg, toastr, projectRenewalService) {
        this.fb = fb;
        this.snackbar = snackbar;
        this.accountService = accountService;
        this.projetServices = projetServices;
        this.dataSharing = dataSharing;
        this.route = route;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.projectRenewalService = projectRenewalService;
        this.loading = false;
        this.editMode = false;
        this.approval = false;
    }
    ProjectRenewalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ServiceId = this.route.snapshot.params['ServiceId'] || this.route.snapshot.params['serviceId'];
        this.InvestorId = this.route.snapshot.params['InvestorId'] || this.route.snapshot.params['investorId'];
        this.ProjectId = this.route.snapshot.params['ProjectId'] || this.route.snapshot.params['projectId'];
        this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'] || this.route.snapshot.params['serviceApplicationId'];
        this.initForm();
        this.getAllProjects();
        this.isInvestor = !this.accountService.getUserType();
        this.route.params
            .subscribe(function (params) {
            // console.log(this.ServiceApplicationId);
            if (_this.ServiceApplicationId > 1) {
                _this.getServiceApplicationRenewal();
                _this.approval = true;
            }
        });
    };
    ProjectRenewalComponent.prototype.initForm = function () {
        this.projectRenewalForm = this.fb.group({
            RenewalDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            RenewedTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            RenewedFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            ProjectId: this.ProjectId,
            InvestorId: this.InvestorId,
            ServiceId: this.ServiceId,
            ServiceApplicationId: this.ServiceApplicationId
        });
    };
    ProjectRenewalComponent.prototype.getAllProjects = function () {
        var _this = this;
        this.projetServices
            .getProjectOnlyByInvestorId(this.InvestorId)
            .subscribe(function (result) {
            _this.projectList = result;
        });
    };
    ProjectRenewalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.projectRenewalService
            .create(this.projectRenewalForm.value)
            .subscribe(function (response) {
            _this.dataSharing.renewalIndex.next(2);
        });
    };
    ProjectRenewalComponent.prototype.notification = function (message) {
        this.toastr.success(" Succesfully " + message + " Data.!", 'Success');
        this.loading = false;
        this.snackbar.open(" Succesfully " + message + " Data.!", 'Close', {
            duration: 3000,
        });
    };
    ProjectRenewalComponent.prototype.approve = function () {
        var _this = this;
        this.projectRenewalService
            .create(this.projectRenewalForm.value)
            .subscribe(function (result) {
            _this.toastr.success('Renewal  successfully approved', 'Success');
        });
    };
    ProjectRenewalComponent.prototype.getServiceApplicationRenewal = function () {
        var _this = this;
        this.projectRenewalService
            .getRenewalByServiceApplicationId(this.ServiceApplicationId)
            .subscribe(function (result) {
            _this.editMode = true;
            _this.projectRenewalForm.patchValue(result.ProjectRenewal[0]);
        }, function (error) { return _this.errMsg.getError(error); });
    };
    ProjectRenewalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-renewal',
            template: __webpack_require__(/*! ./project-renewal.component.html */ "./src/app/components/project-profile/project-renewal-tab/project-renewal/project-renewal.component.html"),
            styles: [__webpack_require__(/*! ./project-renewal.component.scss */ "./src/app/components/project-profile/project-renewal-tab/project-renewal/project-renewal.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"],
            _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProjectProfileService"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_4__["DataSharingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _Services_project_renewal_service__WEBPACK_IMPORTED_MODULE_2__["ProjectRenewalService"]])
    ], ProjectRenewalComponent);
    return ProjectRenewalComponent;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-renewal-tab/projectRenewal-routing.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-renewal-tab/projectRenewal-routing.ts ***!
  \******************************************************************************************/
/*! exports provided: ProjectRenewalRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectRenewalRouting", function() { return ProjectRenewalRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_renewal_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-renewal-tab.component */ "./src/app/components/project-profile/project-renewal-tab/project-renewal-tab.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var route = [
    { path: '', component: _project_renewal_tab_component__WEBPACK_IMPORTED_MODULE_2__["ProjectRenewalTabComponent"] }
];
var ProjectRenewalRouting = /** @class */ (function () {
    function ProjectRenewalRouting() {
    }
    ProjectRenewalRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProjectRenewalRouting);
    return ProjectRenewalRouting;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-renewal-tab/projectRenewal.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-renewal-tab/projectRenewal.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ProjectRenewalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectRenewalModule", function() { return ProjectRenewalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _project_renewal_project_renewal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-renewal/project-renewal.component */ "./src/app/components/project-profile/project-renewal-tab/project-renewal/project-renewal.component.ts");
/* harmony import */ var _projectRenewal_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectRenewal-routing */ "./src/app/components/project-profile/project-renewal-tab/projectRenewal-routing.ts");
/* harmony import */ var _officer_Task_officer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../officer-Task/officer.module */ "./src/app/components/officer-Task/officer.module.ts");
/* harmony import */ var _project_renewal_tab_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-renewal-tab.component */ "./src/app/components/project-profile/project-renewal-tab/project-renewal-tab.component.ts");
/* harmony import */ var _service_confirmation_ServiceConfirmation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service-confirmation/ServiceConfirmation.module */ "./src/app/components/project-profile/service-confirmation/ServiceConfirmation.module.ts");
/* harmony import */ var _service_info_serviceInfo_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service-info/serviceInfo.module */ "./src/app/components/project-profile/service-info/serviceInfo.module.ts");
/* harmony import */ var _letter_letter_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../letter/letter.module */ "./src/app/components/project-profile/letter/letter.module.ts");
/* harmony import */ var _aftercare_recomendation_AftercareRecommModule__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../aftercare-recomendation/AftercareRecommModule */ "./src/app/components/project-profile/aftercare-recomendation/AftercareRecommModule.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ProjectRenewalModule = /** @class */ (function () {
    function ProjectRenewalModule() {
    }
    ProjectRenewalModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _projectRenewal_routing__WEBPACK_IMPORTED_MODULE_4__["ProjectRenewalRouting"],
                _officer_Task_officer_module__WEBPACK_IMPORTED_MODULE_5__["OfficerModule"],
                _service_confirmation_ServiceConfirmation_module__WEBPACK_IMPORTED_MODULE_7__["ServiceConfirmationModule"],
                _service_info_serviceInfo_module__WEBPACK_IMPORTED_MODULE_8__["ServiceInfoModule"],
                _letter_letter_module__WEBPACK_IMPORTED_MODULE_9__["LetterModule"],
                _aftercare_recomendation_AftercareRecommModule__WEBPACK_IMPORTED_MODULE_10__["AftercareRecommModule"]
            ],
            declarations: [
                _project_renewal_project_renewal_component__WEBPACK_IMPORTED_MODULE_3__["ProjectRenewalComponent"],
                _project_renewal_tab_component__WEBPACK_IMPORTED_MODULE_6__["ProjectRenewalTabComponent"]
            ],
            exports: [_project_renewal_project_renewal_component__WEBPACK_IMPORTED_MODULE_3__["ProjectRenewalComponent"]]
        })
    ], ProjectRenewalModule);
    return ProjectRenewalModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-project-profile-project-renewal-tab-projectRenewal-module.js.map