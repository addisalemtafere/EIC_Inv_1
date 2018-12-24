(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-my-dashboard-dashboard-module"],{

/***/ "./src/app/components/my-dashboard/dashboard-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/my-dashboard/dashboard-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _my_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-dashboard.component */ "./src/app/components/my-dashboard/my-dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var route = [
    { path: '', component: _my_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["MyDashboardComponent"] }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/my-dashboard/dashboard.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/my-dashboard/dashboard.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/components/my-dashboard/dashboard-routing.module.ts");
/* harmony import */ var _my_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-dashboard.component */ "./src/app/components/my-dashboard/my-dashboard.component.ts");
/* harmony import */ var _appointment_appointment_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../appointment/appointment.module */ "./src/app/components/appointment/appointment.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
                _appointment_appointment_module__WEBPACK_IMPORTED_MODULE_5__["AppointmentModule"]
            ],
            declarations: [
                _my_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["MyDashboardComponent"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/components/my-dashboard/my-dashboard.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/my-dashboard/my-dashboard.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"0\">\r\n  <div class=\"block\" fxFlex=\"84\">\r\n    <app-page-header title=\"dashboard\" icon=\"dashboard\"></app-page-header>\r\n\r\n  </div>\r\n  <div class=\"block\" fxFlex=\"15\">\r\n    <button (click)=\"toServiceList()\"\r\n            style=\"margin-left: 2px;\"\r\n            color=\"primary\"\r\n            mat-raised-button>\r\n      Request Service\r\n    </button>\r\n  </div>\r\n</div>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"0\">\r\n  <div class=\"mini-label\">All Applications</div>\r\n</div>\r\n\r\n<mat-sidenav-container>\r\n\r\n  <mat-sidenav class=\"sidenav left-sidenav\" position=\"start\" opened=\"false\" mode=\"over\">\r\n  </mat-sidenav>\r\n  <!-- CENTER -->\r\n  <div class=\"center\" fxFlex>\r\n    <div class=\"grid-container\">\r\n      <!-- <h1 class=\"mat-h1\">Dashboard</h1> -->\r\n      <mat-grid-list cols=\"2\" *ngIf=\"serviceApplicationList.length>0;else serviceList;\" rowHeight=\"300px\">\r\n\r\n        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\r\n\r\n          <mat-card class=\"dashboard-card padding-0 box\" style=\"overflow: auto;\">\r\n            <!--<mat-card-header style=\" background-color: whitesmoke\">-->\r\n            <!--<mat-checkbox (change)=\"search()\" [checked]=\"isChecked\" color=\"primary\">Not completed Only-->\r\n            <!--</mat-checkbox>-->\r\n            <!--</mat-card-header>-->\r\n            <mat-card-content style=\"top: 0px !important;\" class=\"dashboard-card-content\">\r\n              <div fxFlex=\"100%\">\r\n                <div class=\"spinner-container\" *ngIf=\"loading \">\r\n                  <mat-progress-bar mode=\"query\"></mat-progress-bar>\r\n                </div>\r\n                <mat-table #table [dataSource]=\"dataSource\">\r\n                  <ng-container matColumnDef=\"CaseNumber\">\r\n                    <mat-header-cell *matHeaderCellDef>CaseNumber</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let serviceApplicationList\">\r\n                      {{serviceApplicationList?.CaseNumber}}\r\n                    </mat-cell>\r\n                  </ng-container>\r\n                  <ng-container matColumnDef=\"ServiceName\">\r\n                    <mat-header-cell *matHeaderCellDef>Service Name</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let serviceApplicationList\">\r\n                      {{serviceApplicationList?.ServiceNameEnglish | filterPipe: 20}}\r\n                    </mat-cell>\r\n                  </ng-container>\r\n                  <ng-container matColumnDef=\"ProjectName\">\r\n                    <mat-header-cell *matHeaderCellDef>Project Name</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let serviceApplicationList\">\r\n\r\n                      {{serviceApplicationList?.ProjectNameEnglish}}\r\n                    </mat-cell>\r\n                  </ng-container>\r\n\r\n\r\n                  <ng-container matColumnDef=\"currentStatus\">\r\n                    <mat-header-cell *matHeaderCellDef>Current Status</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let serviceApplicationList\">\r\n                     <span class=\"common-button-status drafted\"\r\n                           *ngIf=\"serviceApplicationList?.CurrentStatusId===44450\">\r\n             Drafted\r\n                      </span>\r\n                      <span class=\"common-button-status Submitted\"\r\n                            *ngIf=\"serviceApplicationList?.CurrentStatusId===44446\">\r\n             Submitted\r\n                      </span>\r\n                      <span class=\"common-button-status Approved\"\r\n                            *ngIf=\"serviceApplicationList?.CurrentStatusId===44447\">\r\n            Approved\r\n                      </span>\r\n                      <span class=\"common-button-status Pending\"\r\n                            *ngIf=\"serviceApplicationList?.CurrentStatusId===44448\">\r\n              Pending\r\n                      </span>\r\n                      <span class=\"common-button-status Completed\"\r\n                            *ngIf=\"serviceApplicationList?.CurrentStatusId===44449\">\r\n           Completed\r\n                      </span>\r\n                    </mat-cell>\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"NextStep\">\r\n                    <mat-header-cell fxFlex=\"20\" *matHeaderCellDef>Next Step</mat-header-cell>\r\n                    <mat-cell fxFlex=\"20\" *matCellDef=\"let serviceApplicationList\">\r\n                      <a class=\"pointer\" style=\"color: #00bcd4;\"\r\n                         *ngIf=\"serviceApplicationList?.CurrentStatusId===44450\"\r\n                         (click)=\"nextStep(serviceApplicationList?.ServiceWorkflow[0]?.NextStepId,\r\n            serviceApplicationList.ProjectId,\r\n            serviceApplicationList.ServiceApplicationId,\r\n            serviceApplicationList.ServiceId,\r\n            serviceApplicationList?.ServiceNameEnglish,\r\n             serviceApplicationList?.ServiceWorkflow[0].ServiceWorkflowId,\r\n             serviceApplicationList.InvestorNameEnglish,\r\n             serviceApplicationList.ProjectNameEnglish)\">\r\n                        {{serviceApplicationList?.ServiceWorkflow[0]?.NextStepId | serviceStepPipe}}\r\n                        <!--<mat-icon color=\"primary\" class=\"mat-18\">navigate_next</mat-icon>-->\r\n                      </a>\r\n                      <!--<a class=\"pointer\" style=\"color: #00bcd4;\"-->\r\n                      <!--(click)=\"nextStep(18,-->\r\n                      <!--serviceApplicationList.ProjectId,-->\r\n                      <!--serviceApplicationList.ServiceApplicationId,-->\r\n                      <!--serviceApplicationList.ServiceId,-->\r\n                      <!--serviceApplicationList?.ServiceNameEnglish,-->\r\n                      <!--serviceApplicationList?.ServiceWorkflow[0]?.ServiceWorkflowId,-->\r\n                      <!--serviceApplicationList.InvestorNameEnglish,-->\r\n                      <!--serviceApplicationList.ProjectNameEnglish)\"-->\r\n                      <!--*ngIf=\"serviceApplicationList?.CurrentStatusId!==44450 ||-->\r\n                      <!--serviceApplicationList.ServiceId===1045 ||-->\r\n                      <!--serviceApplicationList.ServiceId===1046 ||-->\r\n                      <!--serviceApplicationList.ServiceId===1047\">-->\r\n                      <!--Next-->\r\n                      <!--</a>-->\r\n\r\n\r\n                    </mat-cell>\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"Action\">\r\n                    <mat-header-cell *matHeaderCellDef>Action\r\n\r\n                    </mat-header-cell>\r\n                    <!--<mat-header-cell *matHeaderCellDef> </mat-header-cell>-->\r\n                    <mat-cell *matCellDef=\"let serviceApplicationList; let i=index\">\r\n\r\n\r\n                      <button style=\"margin: 4px;\" mat-raised-button=\"\" class=\"pointer\" color=\"primary\"\r\n                              matTooltip=\"Click here for detail of the project\"\r\n                              (click)=\"projectDetail(serviceApplicationList)\">\r\n                        <mat-icon>visibility</mat-icon>\r\n                        <span>View</span>\r\n                      </button>\r\n\r\n                    </mat-cell>\r\n                  </ng-container>\r\n                  <mat-header-row *matHeaderRowDef=\"displayedColumns\">\r\n                  </mat-header-row>\r\n                  <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n                  </mat-row>\r\n                </mat-table>\r\n\r\n                <mat-paginator\r\n                  #paginator\r\n                  [pageSize]=\"3\"\r\n                  [pageSizeOptions]=\"[3, 10, 20]\">\r\n                </mat-paginator>\r\n              </div>\r\n\r\n\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </mat-grid-tile>\r\n\r\n\r\n        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\r\n\r\n          <div class=\"padding-0\">\r\n\r\n            <mat-card style=\"overflow: auto; background-color: white\" class=\"padding-0 dashboard-card\">\r\n\r\n\r\n              <mat-card-content class=\"dashboard-card-content\">\r\n\r\n                <div style=\"background-color: rgb(250, 250, 250);\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\r\n                     fxLayoutGap=\"0\">\r\n                  <div class=\"mini-label\">All Notifications</div>\r\n                </div>\r\n\r\n                <div class=\"spinner-container\" *ngIf=\"loading \">\r\n                  <mat-progress-bar mode=\"query\"></mat-progress-bar>\r\n                </div>\r\n                <mat-table #table [dataSource]=\"dataSourceNotitification\">\r\n\r\n\r\n                  <ng-container matColumnDef=\"subject\">\r\n                    <mat-header-cell fxFlex=\"13\" fxFlexAlign=\"center\" *matHeaderCellDef>Subject</mat-header-cell>\r\n                    <mat-cell fxFlex=\"13\" fxFlexAlign=\"center center\" *matCellDef=\"let notitficationList\">\r\n                      <span style=\"font-weight: bolder;text-decoration: underline;\">{{notitficationList.Subject}}</span>\r\n                    </mat-cell>\r\n                  </ng-container>\r\n\r\n\r\n                  <ng-container matColumnDef=\"date\">\r\n                    <mat-header-cell fxFlex=\"15\" fxFlexAlign=\"center\" *matHeaderCellDef> Date</mat-header-cell>\r\n                    <mat-cell fxFlex=\"15\" fxFlexAlign=\"center center \" *matCellDef=\"let notitficationList\">\r\n                      {{notitficationList.CreatedDate | date}}\r\n                    </mat-cell>\r\n                  </ng-container>\r\n                  <ng-container matColumnDef=\"message\">\r\n                    <mat-header-cell fxFlex=\"60\" *matHeaderCellDef>Message</mat-header-cell>\r\n                    <mat-cell style=\"font-size: 15px !important;\r\n  color: black !important;\r\n  text-align: justify !important;\r\n  font-weight: bolder !important;\r\n}\" class=\"mess-body\" fxFlex=\"60\" *matCellDef=\"let notitficationList\">\r\n                      {{notitficationList.Message | filterPipe : 70}}\r\n                    </mat-cell>\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"Action\">\r\n                    <mat-header-cell fxFlex=\"9\" fxFlexAlign=\"center center\" *matHeaderCellDef>Action</mat-header-cell>\r\n                    <mat-cell fxFlex=\"9\" fxLayoutAlign=\"center center\" *matCellDef=\"let notitficationList; let i=index\">\r\n                      <div>\r\n\r\n                        <a fxFlexAlign=\"center\" (click)=\"viewNotificationDetail()\" class=\"custom-button pointer\"\r\n                           color=\"warn\"\r\n                           matTooltip=\"Click here for project\">\r\n                          Detail\r\n                        </a>\r\n                      </div>\r\n                    </mat-cell>\r\n                  </ng-container>\r\n                  <mat-header-row *matHeaderRowDef=\"displayedColumnsNotification\">\r\n                  </mat-header-row>\r\n                  <mat-row *matRowDef=\"let row; columns: displayedColumnsNotification;\">\r\n                  </mat-row>\r\n                </mat-table>\r\n\r\n                <mat-paginator\r\n\r\n                  #paginator\r\n                  [pageSize]=\"3\"\r\n                  [pageSizeOptions]=\"[3, 10, 20]\">\r\n                </mat-paginator>\r\n              </mat-card-content>\r\n            </mat-card>\r\n\r\n\r\n          </div>\r\n        </mat-grid-tile>\r\n      </mat-grid-list>\r\n    </div>\r\n\r\n\r\n    <!--Close CENTER -->\r\n  </div>\r\n\r\n\r\n</mat-sidenav-container>\r\n<ng-template #serviceList>\r\n\r\n  <app-customer-service-list></app-customer-service-list>\r\n\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/components/my-dashboard/my-dashboard.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/my-dashboard/my-dashboard.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 15px; }\n\n.dashboard-card {\n  position: absolute;\n  top: 0px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px; }\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px; }\n\n.dashboard-card-content {\n  text-align: center; }\n\n.content {\n  flex: 1; }\n\nmat-cell {\n  font-family: \"Segoe UI\", Frutiger, \"Frutiger Linotype\", \"Dejavu Sans\", \"Helvetica Neue\", Arial, sans-serif !important;\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n  color: black; }\n"

/***/ }),

/***/ "./src/app/components/my-dashboard/my-dashboard.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/my-dashboard/my-dashboard.component.ts ***!
  \*******************************************************************/
/*! exports provided: MyDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDashboardComponent", function() { return MyDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/service.service */ "./src/app/Services/service.service.ts");
/* harmony import */ var _setting_services_tabs_serviceApplication_serviceapplication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../setting/services-tabs/serviceApplication/serviceapplication.service */ "./src/app/components/setting/services-tabs/serviceApplication/serviceapplication.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/project-profile.service */ "./src/app/Services/project-profile.service.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _custor_validation_custom_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @custor/validation/custom/form */ "./src/@custor/validation/custom/form.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _Services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Services/notification.service */ "./src/app/Services/notification.service.ts");
/* harmony import */ var _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @custor/helpers/utilities */ "./src/@custor/helpers/utilities.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _investor_investor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../investor/investor.service */ "./src/app/components/investor/investor.service.ts");
/* harmony import */ var _model_security_permission_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../model/security/permission.model */ "./src/app/model/security/permission.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var MyDashboardComponent = /** @class */ (function () {
    function MyDashboardComponent(projectProfileService, errMsg, router, toastr, invService, dataSharing, route, dialog, accountService, service, formBuilder, formService, notifificationService, serviceApplication) {
        this.projectProfileService = projectProfileService;
        this.errMsg = errMsg;
        this.router = router;
        this.toastr = toastr;
        this.invService = invService;
        this.dataSharing = dataSharing;
        this.route = route;
        this.dialog = dialog;
        this.accountService = accountService;
        this.service = service;
        this.formBuilder = formBuilder;
        this.formService = formService;
        this.notifificationService = notifificationService;
        this.serviceApplication = serviceApplication;
        this.isChecked = false;
        this.loading = true;
        this.serviceList = [];
        this.displayedColumns = ['CaseNumber', 'ServiceName', 'ProjectName', 'currentStatus', 'NextStep', 'Action'];
        this.displayedColumnsNotification = ['subject', 'date', 'message', 'Action'];
    }
    Object.defineProperty(MyDashboardComponent.prototype, "canManageTask", {
        get: function () {
            return this.accountService.userHasPermission(_model_security_permission_model__WEBPACK_IMPORTED_MODULE_15__["Permission"].manageTasks);
        },
        enumerable: true,
        configurable: true
    });
    MyDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkAuthorization();
        setTimeout(function () { return _this.dataSource.paginator = _this.paginator; });
        this.getAllNotification(this.accountService.currentUser.Id);
        this.checkInvestor();
    };
    MyDashboardComponent.prototype.toServiceList = function () {
        this.router.navigate(['/service-list']);
    };
    MyDashboardComponent.prototype.getServiceApplication = function () {
        var _this = this;
        this.serviceApplication.getServiceApplicationsByInvestorId(localStorage.getItem('InvestorId'))
            .subscribe(function (result) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](result);
            _this.loading = false;
            _this.serviceApplicationList = result;
        }, function (error) { return _this.errMsg.getError(error); });
    };
    MyDashboardComponent.prototype.nextStep = function (step, projectId, serviceApplicationId, serviceId, title, workFlowId, investorName, projectName) {
        var _this = this;
        var stepIndex;
        localStorage.setItem('title', 'New Ip');
        var investorId = localStorage.getItem('InvestorId');
        if (serviceId === 1045) {
            this.router.navigate(['/tax-exemption/' + serviceId + '/' + investorId + '/' + serviceApplicationId + '/' + projectId + '/' + workFlowId]);
        }
        else if (serviceId === 1046) {
            this.router.navigate(['/incentive-request-item/' + serviceId + '/' + investorId + '/' + serviceApplicationId + '/' + projectId + '/' + workFlowId]);
        }
        if (serviceId === 1047) {
            this.router.navigate(['/bill-of-material/1/' + serviceId + '/' + investorId + '/' + serviceApplicationId + '/' + projectId + '/' + workFlowId]);
        }
        if (serviceId === 1054) {
            this.router.navigate(['/bill-of-material/2' + serviceId + '/' + investorId + '/' + serviceApplicationId + '/' + projectId + '/' + workFlowId]);
        }
        else if (serviceId === 13 || serviceId == 1023) {
            switch (step) {
                case 8:
                    stepIndex = 1;
                    break;
                case 9:
                    stepIndex = 4;
                    break;
                case 10:
                    stepIndex = 5;
                    break;
                case 11:
                    stepIndex = 2;
                    break;
                case 12:
                    stepIndex = 7;
                    break;
                case 13:
                    stepIndex = 2;
                    break;
                case 14:
                    stepIndex = 6;
                    break;
                case 18:
                    stepIndex = 8;
                    break;
            }
            this.router.navigate(['pro/' + projectId + '/' + serviceApplicationId + '/' + serviceId + '/' + workFlowId + '/' + investorId]);
        }
        localStorage.setItem('investorName', investorName);
        localStorage.setItem('projectName', projectName);
        setTimeout(function () { return _this.dataSharing.steeperIndex.next(stepIndex); }, 0);
        setTimeout(function () { return _this.dataSharing.currentIndex.next(stepIndex); }, 0);
        localStorage.setItem('CurrentIndex', stepIndex.toString());
    };
    MyDashboardComponent.prototype.getAllNotification = function (userId) {
        var _this = this;
        this.notifificationService.getAllById(userId)
            .subscribe(function (result) {
            _this.dataSourceNotitification = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](result);
            _this.loading = false;
            _this.notitficationList = result;
        }, function (error) { return _this.errMsg.getError(error); });
    };
    MyDashboardComponent.prototype.deleteServiceApplication = function (id) {
        var _this = this;
        // console.log(id);
        var response = confirm('Do you want to Delete this ServiceApplication ?');
        if (response === true) {
            this.serviceApplication.delete(id).subscribe(function (result) {
                // console.log(result);
                _this.getServiceApplication();
            });
            return true;
        }
        else {
            return false;
        }
    };
    MyDashboardComponent.prototype.deleteProject = function (id) {
        var _this = this;
        // console.log(id);
        var response = confirm('Do you want to Delete this Project ?');
        if (response === true) {
            this.projectProfileService.delete(id)
                .subscribe(function () {
                _this.getServiceApplication();
            });
            return true;
        }
        else {
            return false;
        }
    };
    MyDashboardComponent.prototype.editProject = function (projectId, serviceApplicationId, serviceId) {
        var _this = this;
        setTimeout(function () { return _this.dataSharing.isNew.next(true); }, 0);
        this.router.navigate(['pro/' + projectId + '/' + serviceApplicationId + '/' + serviceId + '/' + 0 + '/' + 0]);
    };
    MyDashboardComponent.prototype.projectDetail = function (serviceApplication) {
        console.log(serviceApplication);
        var projectId = serviceApplication.ProjectId;
        var ServiceApplicationId = serviceApplication.ServiceApplicationId;
        var serviceId = serviceApplication.ServiceId;
        var workFlowId = serviceApplication.ServiceWorkflow[0].ServiceWorkflowId;
        var investorId = localStorage.getItem('InvestorId');
        // console.log(workFlowId)
        switch (serviceId) {
            case 13:
            case 1023:
                this.router.navigate(['/service-detail', projectId]);
                break;
            case 18:
                this.router.navigate(['/project-renewal/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
                break;
            case 19:
                this.router.navigate(['/project-cancellation/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
                break;
            case 1027:
                this.router.navigate(['/project-substitute/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
                break;
            case 1045:
                this.router.navigate(['tax-exemption/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
                break;
            case 1046:
                this.router.navigate(['incentive-request-item/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
                break;
            case 1047:
                this.router.navigate(['/bill-of-material/1/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
                break;
            case 1054:
                this.router.navigate(['/bill-of-material/2/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
                break;
            case 1235:
                this.router.navigate(['investor-tab/' + serviceId + '/' + ServiceApplicationId + '/' + investorId + '/' + 0]);
                break;
            case 1236:
                this.router.navigate(['business-tab/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId + '/' + 0]);
                break;
            default:
                this.router.navigate(['/notfound'], { relativeTo: this.route });
                break;
        }
    };
    MyDashboardComponent.prototype.search = function () {
        // alert(this.isChecked);
        this.isChecked = !this.isChecked;
        if (this.isChecked) {
            this.filterData(this.serviceApplicationList);
        }
        else {
            this.getServiceApplication();
        }
    };
    MyDashboardComponent.prototype.filterData = function (data) {
        // console.log(data);
        this.serviceApplicationList = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i].IsActive === false) {
                this.serviceApplicationList.push(data[i]);
            }
        }
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.serviceApplicationList);
        this.loading = false;
        // console.log(this.serviceApplicationList);
        // this.dataSource.paginator = this.paginator;
    };
    MyDashboardComponent.prototype.checkInvestor = function () {
        // // console.log(this.accountService.currentUser.Tin);
        if (this.accountService.currentUser.Tin !== null) {
            this.getInvestorsByUserId();
        }
        else {
            this.getInvestorsByUserId();
        }
    };
    MyDashboardComponent.prototype.getInvestorsByUserId = function () {
        var _this = this;
        // if (!this.canViewInvestors) {
        //     this.router.navigate(['denied']);
        // }
        // console.log(this.accountService.currentUser.Id);
        this.invService.getInvestorByUserId(this.accountService.currentUser.Id)
            .subscribe(function (result) {
            // console.log(result);
            _this.investors = result;
            // console.log(result);
            if (_this.investors.length === 0) {
                _this.router.navigate(['investor-tab/1235/0/0/0']);
                localStorage.setItem('ServiceId', '1235');
                _this.toastr.success('Dear customer Please complete your Profile', 'Well Come !!!', {
                    closeButton: true,
                });
            }
            else {
                localStorage.setItem('InvestorId', _this.investors[0].InvestorId.toString());
                localStorage.setItem('InvestorId', _this.investors[0].InvestorId.toString());
                _this.getServiceApplication();
            }
        }, function (error) {
            _this.toastr.error("Error: \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_12__["Utilities"].getHttpResponseMessage(error) + "\"");
        });
    };
    MyDashboardComponent.prototype.getInvestorsByTin = function () {
        var _this = this;
        this.invService.getInvestorByUserId(this.accountService.currentUser.Tin)
            .subscribe(function (result) {
            // console.log(result);
            _this.investors = result;
            // console.log(result);
            if (!_this.investors) {
                _this.toastr.error('No records were found to list', 'Error', {
                    closeButton: true,
                });
            }
            else {
                localStorage.setItem('InvestorId', _this.investors[0].InvestorId.toString());
            }
        }, function (error) {
            _this.toastr.error("Error: \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_12__["Utilities"].getHttpResponseMessage(error) + "\"");
        });
    };
    MyDashboardComponent.prototype.viewNotificationDetail = function () {
        this.router.navigate(['appointment']);
    };
    MyDashboardComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    MyDashboardComponent.prototype.checkAuthorization = function () {
        if (this.canManageTask) {
            // this.alertService.error('You are not allowed to access this page');
            this.router.navigate(['denied']);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], MyDashboardComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], MyDashboardComponent.prototype, "paginator2", void 0);
    MyDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-dashboard',
            template: __webpack_require__(/*! ./my-dashboard.component.html */ "./src/app/components/my-dashboard/my-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./my-dashboard.component.scss */ "./src/app/components/my-dashboard/my-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_project_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProjectProfileService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_10__["ErrorMessage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"],
            _investor_investor_service__WEBPACK_IMPORTED_MODULE_14__["InvestorService"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_8__["DataSharingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"],
            _Services_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _custor_validation_custom_form__WEBPACK_IMPORTED_MODULE_9__["FormService"],
            _Services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"],
            _setting_services_tabs_serviceApplication_serviceapplication_service__WEBPACK_IMPORTED_MODULE_2__["ServiceapplicationService"]])
    ], MyDashboardComponent);
    return MyDashboardComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-my-dashboard-dashboard-module.js.map