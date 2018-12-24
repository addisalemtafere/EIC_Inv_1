(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-project-profile-project-cancellation-tab-project-cancellation-tab-module"],{

/***/ "./src/app/Services/project-cancellation.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/Services/project-cancellation.service.ts ***!
  \**********************************************************/
/*! exports provided: ProjectCancellationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCancellationService", function() { return ProjectCancellationService; });
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






var ProjectCancellationService = /** @class */ (function (_super) {
    __extends(ProjectCancellationService, _super);
    function ProjectCancellationService(http, appConfig, errMsg) {
        var _this = _super.call(this, http, appConfig.urls.url('ProjectCancellations'), errMsg) || this;
        _this.http = http;
        _this.appConfig = appConfig;
        _this.errMsg = errMsg;
        return _this;
    }
    ProjectCancellationService.prototype.getCancellationByServiceApplicationId = function (id) {
        return this.httpClient.get(this.appConfig.urls.url('ServiceApplicationCancellation') + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ProjectCancellationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"]])
    ], ProjectCancellationService);
    return ProjectCancellationService;
}(_Base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/components/project-profile/project-cancellation-tab/project-cancellation-routing.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-cancellation-tab/project-cancellation-routing.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ProjectCancellationRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCancellationRouting", function() { return ProjectCancellationRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_cancellation_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-cancellation-tab.component */ "./src/app/components/project-profile/project-cancellation-tab/project-cancellation-tab.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _project_cancellation_tab_component__WEBPACK_IMPORTED_MODULE_2__["ProjectCancellationTabComponent"] },
    { path: ':id', component: _project_cancellation_tab_component__WEBPACK_IMPORTED_MODULE_2__["ProjectCancellationTabComponent"] },
];
var ProjectCancellationRouting = /** @class */ (function () {
    function ProjectCancellationRouting() {
    }
    ProjectCancellationRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProjectCancellationRouting);
    return ProjectCancellationRouting;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-cancellation-tab/project-cancellation-tab.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-cancellation-tab/project-cancellation-tab.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"0\">\r\n  <div class=\"block\" fxFlex=\"\">\r\n    <app-page-header title=\"projectCancellation\" icon=\"\"></app-page-header>\r\n\r\n  </div>\r\n  <div id=\"title1\" class=\"block\" fxFlex=\"50\">\r\n    <span class=\"page-title\">{{title}}</span>\r\n    <span class=\"slideBorder\">/</span>\r\n    <span class=\"page-title\">{{investorName}}</span>\r\n    <span class=\"slideBorder\">/</span>\r\n    <span class=\"page-title\">{{projectName}}</span>\r\n\r\n\r\n  </div>\r\n</div>\r\n<mat-tab-group [selectedIndex]=\"renewalIndex\">\r\n\r\n  <mat-tab label=\"Service Info\">\r\n    <ng-template matTabContent>\r\n      <app-service-info></app-service-info>\r\n    </ng-template>\r\n  </mat-tab>\r\n\r\n  <mat-tab *ngIf=\"!isInvestor\" label=\"After Care Recommendation\">\r\n    <ng-template matTabContent>\r\n      <app-aftercare-recommendation></app-aftercare-recommendation>\r\n    </ng-template>\r\n  </mat-tab>\r\n\r\n  <mat-tab label=\"Project Cancellation\">\r\n    <ng-template matTabContent>\r\n      <app-project-cancellation></app-project-cancellation>\r\n    </ng-template>\r\n  </mat-tab>\r\n\r\n  <mat-tab *ngIf=\"!isInvestor\" label=\"Message\">\r\n    <ng-template matTabContent>\r\n      <mat-card class=\"margin-2 simple-card\">\r\n        <mat-card-header>\r\n          <mat-card-subtitle class=\"sub-title\"></mat-card-subtitle>\r\n          <button class=\"margin-10 certificate-title\" mat-raised-button=\"\"\r\n                  (click)=\"addMessage()\" color=\"primary\">\r\n            Add Message\r\n          </button>\r\n        </mat-card-header>\r\n      </mat-card>\r\n      <!--<app-service-prerequisite></app-service-prerequisite>-->\r\n    </ng-template>\r\n  </mat-tab>\r\n\r\n  <!--<mat-tab *ngIf=\"!isInvestor\" label=\"Payment\">-->\r\n  <!--<ng-template matTabContent>-->\r\n  <!--<app-payment></app-payment>-->\r\n  <!--</ng-template>-->\r\n  <!--</mat-tab>-->\r\n  <!--<mat-tab *ngIf=\"!isInvestor\" label=\"Certificate\">-->\r\n  <!--<ng-template matTabContent>-->\r\n  <!--<app-certificate></app-certificate>-->\r\n  <!--</ng-template>-->\r\n  <!--</mat-tab>-->\r\n\r\n  <mat-tab *ngIf=\"isInvestor\" label=\"Confirmation\">\r\n    <ng-template matTabContent>\r\n      <app-service-confirmation></app-service-confirmation>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab *ngIf=\"!isInvestor\" label=\"Letter\">\r\n    <ng-template matTabContent>\r\n      <app-letter></app-letter>\r\n    </ng-template>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/project-cancellation-tab/project-cancellation-tab.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-cancellation-tab/project-cancellation-tab.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/project-profile/project-cancellation-tab/project-cancellation-tab.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-cancellation-tab/project-cancellation-tab.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ProjectCancellationTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCancellationTabComponent", function() { return ProjectCancellationTabComponent; });
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






var ProjectCancellationTabComponent = /** @class */ (function () {
    function ProjectCancellationTabComponent(accountService, dialog, route, dataSharing) {
        this.accountService = accountService;
        this.dialog = dialog;
        this.route = route;
        this.dataSharing = dataSharing;
    }
    ProjectCancellationTabComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUserType();
        this.subscription = this.dataSharing.renewalIndex
            .subscribe(function (index) {
            _this.renewalIndex = index;
        });
        this.title = localStorage.getItem('title');
        this.projectName = localStorage.getItem('projectName');
        this.investorName = localStorage.getItem('investorName');
        this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
        this.userName = this.accountService.currentUser.FullName;
    };
    ProjectCancellationTabComponent.prototype.getUserType = function () {
        this.isInvestor = this.accountService.getUserType();
    };
    ProjectCancellationTabComponent.prototype.addMessage = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.data = {
            ServiceApplicationId: this.ServiceApplicationId,
            title: 'Angular For Beginners'
        };
        this.dialog.open(_notification_notification_component__WEBPACK_IMPORTED_MODULE_3__["NotificationComponent"], dialogConfig);
    };
    ProjectCancellationTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-cancellation-tab',
            template: __webpack_require__(/*! ./project-cancellation-tab.component.html */ "./src/app/components/project-profile/project-cancellation-tab/project-cancellation-tab.component.html"),
            styles: [__webpack_require__(/*! ./project-cancellation-tab.component.scss */ "./src/app/components/project-profile/project-cancellation-tab/project-cancellation-tab.component.scss")]
        }),
        __metadata("design:paramtypes", [_custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_2__["DataSharingService"]])
    ], ProjectCancellationTabComponent);
    return ProjectCancellationTabComponent;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-cancellation-tab/project-cancellation-tab.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-cancellation-tab/project-cancellation-tab.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: ProjectCancellationTabModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCancellationTabModule", function() { return ProjectCancellationTabModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _project_cancellation_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-cancellation-routing */ "./src/app/components/project-profile/project-cancellation-tab/project-cancellation-routing.ts");
/* harmony import */ var _service_info_serviceInfo_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-info/serviceInfo.module */ "./src/app/components/project-profile/service-info/serviceInfo.module.ts");
/* harmony import */ var _officer_Task_officer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../officer-Task/officer.module */ "./src/app/components/officer-Task/officer.module.ts");
/* harmony import */ var _service_confirmation_ServiceConfirmation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service-confirmation/ServiceConfirmation.module */ "./src/app/components/project-profile/service-confirmation/ServiceConfirmation.module.ts");
/* harmony import */ var _project_cancellation_tab_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project-cancellation-tab.component */ "./src/app/components/project-profile/project-cancellation-tab/project-cancellation-tab.component.ts");
/* harmony import */ var _project_cancellation_project_cancellation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project-cancellation/project-cancellation.component */ "./src/app/components/project-profile/project-cancellation-tab/project-cancellation/project-cancellation.component.ts");
/* harmony import */ var _letter_letter_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../letter/letter.module */ "./src/app/components/project-profile/letter/letter.module.ts");
/* harmony import */ var _aftercare_recomendation_AftercareRecommModule__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../aftercare-recomendation/AftercareRecommModule */ "./src/app/components/project-profile/aftercare-recomendation/AftercareRecommModule.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ProjectCancellationTabModule = /** @class */ (function () {
    function ProjectCancellationTabModule() {
    }
    ProjectCancellationTabModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _project_cancellation_routing__WEBPACK_IMPORTED_MODULE_3__["ProjectCancellationRouting"],
                _officer_Task_officer_module__WEBPACK_IMPORTED_MODULE_5__["OfficerModule"],
                _service_confirmation_ServiceConfirmation_module__WEBPACK_IMPORTED_MODULE_6__["ServiceConfirmationModule"],
                _service_info_serviceInfo_module__WEBPACK_IMPORTED_MODULE_4__["ServiceInfoModule"],
                _letter_letter_module__WEBPACK_IMPORTED_MODULE_9__["LetterModule"],
                _aftercare_recomendation_AftercareRecommModule__WEBPACK_IMPORTED_MODULE_10__["AftercareRecommModule"]
                // ServicePrerequisiteModule
            ],
            declarations: [
                _project_cancellation_tab_component__WEBPACK_IMPORTED_MODULE_7__["ProjectCancellationTabComponent"],
                _project_cancellation_project_cancellation_component__WEBPACK_IMPORTED_MODULE_8__["ProjectCancellationComponent"]
            ]
        })
    ], ProjectCancellationTabModule);
    return ProjectCancellationTabModule;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-cancellation-tab/project-cancellation/project-cancellation.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-cancellation-tab/project-cancellation/project-cancellation.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form style=\"padding: 2px\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"projectCancellationForm\" novalidate>\r\n\r\n  <mat-card>\r\n    <mat-card-subtitle class=\"sub-title\">\r\n      Project Cancellation\r\n      <mat-divider></mat-divider>\r\n    </mat-card-subtitle>\r\n    <mat-card-content>\r\n\r\n      <div fxLayout=\"row wrap\"\r\n           fxLayoutAlign=\"start center\"\r\n           class=\"content\"\r\n           fxLayout.lt-sm=\"column\"\r\n           fxLayoutGap=\"2em\">\r\n        <!--<div class=\"block\" fxFlex=\"\" *ngIf=\"!isInvestor\">-->\r\n          <!--<mat-form-field class=\"full-width\">-->\r\n            <!--<mat-label>Project Name</mat-label>-->\r\n            <!--<mat-select formControlName=\"ProjectId\">-->\r\n              <!--<mat-option *ngFor=\"let project of projectList\" [value]=\"project.ProjectId\">-->\r\n                <!--{{project.ProjectName}}-->\r\n              <!--</mat-option>-->\r\n            <!--</mat-select>-->\r\n          <!--</mat-form-field>-->\r\n        <!--</div>-->\r\n\r\n        <div class=\"block\" fxFlex=\"\">\r\n          <mat-form-field>\r\n            <mat-label>Cancellation Reason</mat-label>\r\n            <mat-select formControlName=\"CancellationReason\">\r\n              <mat-option *ngFor=\"let data of projectCancellationReasonList;let i=index\" [value]=\"data.Id\">\r\n                {{data.Desc}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"block\" fxFlex>\r\n          <mat-form-field>\r\n            <input placeholder=\"Cancellation Date * :\"\r\n                   matInput\r\n                   formControlName=\"CancellationDate\"\r\n                   [matDatepicker]=\"CancellationDate\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"CancellationDate\">\r\n            </mat-datepicker-toggle>\r\n            <mat-datepicker #CancellationDate></mat-datepicker>\r\n            <!--<mat-error align=\"start\" *ngIf=\"formErrors.terminationDate\">{{ formErrors.terminationDate }}</mat-error>-->\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"blocks\" fxFlex=\"80%\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput\r\n                   placeholder=\"Remark\"\r\n                   formControlName=\"CancellationRemark\">\r\n            <!--<mat-error align=\"start\" *ngIf=\"formErrors.StartDate\">{{ formErrors.StartDate }}</mat-error>-->\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n        <div mat-dialog-actions fxLayoutGap=\"3em\">\r\n          <button\r\n                  [disabled]=\"!projectCancellationForm.valid\"\r\n                  mat-raised-button=\"\"\r\n                  type=\"submit\"\r\n                  color=\"primary\">\r\n            <mat-icon class=\"mat-18\">done</mat-icon>\r\n            <span class=\"agree\">Save</span>\r\n            <!--{{editMode ? 'Update' : 'Save'}}-->\r\n          </button>\r\n          <!--<button *ngIf=\"editMode\" mat-raised-button (click)=\"approve()\" color=\"primary\" type=\"button\">-->\r\n          <!--<mat-icon class=\"mat-18\">done</mat-icon>-->\r\n          <!--<span>Approve</span>-->\r\n          <!--</button>-->\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</form>\r\n\r\n<div *ngIf=\"loading\" class=\"loadme-circleBounce\">\r\n  <div class=\"loadme-circleBounce1\"></div>\r\n  <div class=\"loadme-circleBounce2\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/project-cancellation-tab/project-cancellation/project-cancellation.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-cancellation-tab/project-cancellation/project-cancellation.component.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/project-profile/project-cancellation-tab/project-cancellation/project-cancellation.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-cancellation-tab/project-cancellation/project-cancellation.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: ProjectCancellationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCancellationComponent", function() { return ProjectCancellationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_project_cancellation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Services/project-cancellation.service */ "./src/app/Services/project-cancellation.service.ts");
/* harmony import */ var _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Services/project-profile.service */ "./src/app/Services/project-profile.service.ts");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _custor_const_consts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @custor/const/consts */ "./src/@custor/const/consts.ts");
/* harmony import */ var _model_EnumModel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../model/EnumModel */ "./src/app/model/EnumModel.ts");
/* harmony import */ var _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @custor/services/configuration.service */ "./src/@custor/services/configuration.service.ts");
/* harmony import */ var _model_lookupData__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../model/lookupData */ "./src/app/model/lookupData.ts");
/* harmony import */ var _Services_service_application_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../Services/service-application.service */ "./src/app/Services/service-application.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var ProjectCancellationComponent = /** @class */ (function () {
    function ProjectCancellationComponent(fb, projetServices, dataSharing, accountService, serviceApplication, snackbar, route, errMsg, toastr, configService, projectCancellationServices) {
        this.fb = fb;
        this.projetServices = projetServices;
        this.dataSharing = dataSharing;
        this.accountService = accountService;
        this.serviceApplication = serviceApplication;
        this.snackbar = snackbar;
        this.route = route;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.configService = configService;
        this.projectCancellationServices = projectCancellationServices;
        this.loading = false;
        this.approval = false;
        this.lookup = new _model_lookupData__WEBPACK_IMPORTED_MODULE_13__["Lookup"]();
    }
    ProjectCancellationComponent.prototype.ngOnInit = function () {
        this.currentLang = this.configService.language;
        this.initStaticDataOwnerShip(this.currentLang);
        this.ServiceId = this.route.snapshot.params['ServiceId'] || this.route.snapshot.params['serviceId'];
        this.InvestorId = this.route.snapshot.params['InvestorId'] || this.route.snapshot.params['investorId'];
        this.ProjectId = this.route.snapshot.params['ProjectId'] || this.route.snapshot.params['projectId'];
        this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'] || this.route.snapshot.params['serviceApplicationId'];
        this.initForm();
        this.editMode = false;
        this.getAllProjects();
        this.isInvestor = !this.accountService.getUserType();
        if (this.ServiceApplicationId > 1) {
            this.approval = true;
            this.getServiceApplicationCancellation();
        }
    };
    ProjectCancellationComponent.prototype.initStaticDataOwnerShip = function (currentLang) {
        var _this = this;
        this.projectCancellationReasonList = [];
        var cancellationReason = new _model_EnumModel__WEBPACK_IMPORTED_MODULE_11__["CancellationReasonModel"]();
        _custor_const_consts__WEBPACK_IMPORTED_MODULE_10__["CancellationReason"].forEach(function (pair) {
            cancellationReason = {
                'Id': pair.Id.toString(),
                'Desc': (currentLang === 'am' ? pair.Description : pair.DescriptionEng)
            };
            _this.projectCancellationReasonList.push(cancellationReason);
        });
        // // console.log(this.formOfOwnershipList);
    };
    ProjectCancellationComponent.prototype.initForm = function () {
        this.projectCancellationForm = this.fb.group({
            ProjectId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.ProjectId),
            ServiceId: this.ServiceId,
            CancellationReason: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            CancellationDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            CancellationRemark: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            InvestorId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.InvestorId),
            ServiceApplicationId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.ServiceApplicationId)
        });
    };
    ProjectCancellationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.projectCancellationServices.create(this.projectCancellationForm.value)
            .subscribe(function (result) {
            // console.log(result);
            _this.dataSharing.renewalIndex.next(2);
            _this.notification('Project cancellation saved');
        });
    };
    ProjectCancellationComponent.prototype.getAllProjects = function () {
        var _this = this;
        this.projetServices.getProjectOnlyByInvestorId(this.InvestorId)
            .subscribe(function (result) {
            _this.projectList = result;
            // console.log(this.projectList);
        });
    };
    ProjectCancellationComponent.prototype.notification = function (message) {
        this.toastr.success(" Succesfully " + message + " .!", 'Success');
        this.loading = false;
        this.snackbar.open(" Succesfully " + message + " .!", 'Close', {
            duration: 3000,
        });
    };
    ProjectCancellationComponent.prototype.getServiceApplicationCancellation = function () {
        var _this = this;
        this.projectCancellationServices.getCancellationByServiceApplicationId(this.ServiceApplicationId)
            .subscribe(function (result) {
            // console.log(result.ProjectCancellation);
            _this.editMode = true;
            _this.projectCancellationForm.patchValue(result.ProjectCancellation[0]);
        }, function (error) { return _this.errMsg.getError(error); });
    };
    ProjectCancellationComponent.prototype.approve = function () {
        var _this = this;
        if (this.approval) {
            // this.approveApplication(this.ServiceApplicationId);
            this.projectCancellationServices.update(this.projectCancellationForm.value, this.ProjectId)
                .subscribe(function (result) {
                _this.toastr.success('cancellation successfully approved', 'Success');
                _this.approveApplication(_this.ServiceApplicationId);
            });
        }
    };
    ProjectCancellationComponent.prototype.approveApplication = function (id) {
        var _this = this;
        this.lookup.Code = 44449;
        this.serviceApplication.changeApplicationStatus(this.lookup, id)
            .subscribe(function (result) {
            _this.toastr.success('Application Completed successfully ', 'Success');
        });
    };
    ProjectCancellationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-cancellation',
            template: __webpack_require__(/*! ./project-cancellation.component.html */ "./src/app/components/project-profile/project-cancellation-tab/project-cancellation/project-cancellation.component.html"),
            styles: [__webpack_require__(/*! ./project-cancellation.component.scss */ "./src/app/components/project-profile/project-cancellation-tab/project-cancellation/project-cancellation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProjectProfileService"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_4__["DataSharingService"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"],
            _Services_service_application_service__WEBPACK_IMPORTED_MODULE_14__["ServiceApplicationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_12__["ConfigurationService"],
            _Services_project_cancellation_service__WEBPACK_IMPORTED_MODULE_2__["ProjectCancellationService"]])
    ], ProjectCancellationComponent);
    return ProjectCancellationComponent;
}());



/***/ }),

/***/ "./src/app/model/EnumModel.ts":
/*!************************************!*\
  !*** ./src/app/model/EnumModel.ts ***!
  \************************************/
/*! exports provided: FormOfOwnershipModel, CancellationReasonModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormOfOwnershipModel", function() { return FormOfOwnershipModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancellationReasonModel", function() { return CancellationReasonModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormOfOwnershipModel = /** @class */ (function () {
    function FormOfOwnershipModel() {
    }
    FormOfOwnershipModel = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], FormOfOwnershipModel);
    return FormOfOwnershipModel;
}());

var CancellationReasonModel = /** @class */ (function () {
    function CancellationReasonModel() {
    }
    CancellationReasonModel = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CancellationReasonModel);
    return CancellationReasonModel;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-project-profile-project-cancellation-tab-project-cancellation-tab-module.js.map