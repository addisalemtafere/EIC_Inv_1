(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-search-browser-search-browser-module"],{

/***/ "./src/app/components/search-browser/search-browser-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/search-browser/search-browser-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: SearchBrowserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBrowserRoutingModule", function() { return SearchBrowserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_browser_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-browser.component */ "./src/app/components/search-browser/search-browser.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _search_browser_component__WEBPACK_IMPORTED_MODULE_2__["SearchBrowserComponent"] }
];
var SearchBrowserRoutingModule = /** @class */ (function () {
    function SearchBrowserRoutingModule() {
    }
    SearchBrowserRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SearchBrowserRoutingModule);
    return SearchBrowserRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/search-browser/search-browser.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/search-browser/search-browser.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"0\">\r\n  <div class=\"block\" fxFlex=\"\">\r\n    <app-page-header title=\"search\" icon=\"view_list\"></app-page-header>\r\n\r\n  </div>\r\n  <div id=\"title1\" class=\"block\" fxFlex=\"50\">\r\n    <span class=\"page-title\">{{title}}</span>\r\n    <span class=\"slideBorder\">/</span>\r\n    <span class=\"page-title\">{{investorName}}</span>\r\n    <span class=\"slideBorder\">/</span>\r\n    <span class=\"page-title\">{{projectName}}</span>\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n<form *ngIf=\"investorShow\" style=\"background-color: white;border: 1px solid #cccccc;padding: 8px;border-radius: 6px;\"\r\n      class=\"margin-2 border\"\r\n      [formGroup]=\"searchForm\"\r\n      novalidate #costF>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\">\r\n\r\n    <mat-form-field fxFlex=\"16\">\r\n      <mat-label>TIN:</mat-label>\r\n      <input type=\"text\"\r\n             matInput=\"\"\r\n             formControlName=\"Tin\">\r\n\r\n    </mat-form-field>\r\n    <mat-form-field fxFlex=\"16\">\r\n      <mat-label>Name:</mat-label>\r\n      <input type=\"text\"\r\n             matInput=\"\"\r\n             formControlName=\"FirstNameEng\">\r\n\r\n    </mat-form-field>\r\n    <mat-form-field fxFlex=\"16\">\r\n      <mat-label>Father Name:</mat-label>\r\n      <input type=\"text\"\r\n             matInput=\"\"\r\n             formControlName=\"FatherNameEng\">\r\n\r\n    </mat-form-field>\r\n    <mat-form-field fxFlex=\"16\">\r\n      <mat-label>Grand Father Name:</mat-label>\r\n      <input type=\"text\"\r\n             matInput=\"\"\r\n             formControlName=\"GrandNameEng\">\r\n\r\n    </mat-form-field>\r\n\r\n\r\n    <button mat-raised-button=\"\" color=\"primary\" (click)=\"search()\">\r\n      <!--<mat-icon class=\"mat-18\">search</mat-icon>-->\r\n      <span>Search</span>\r\n    </button>\r\n  </div>\r\n\r\n</form>\r\n\r\n<mat-card id=\"InvestorList\" class=\"margin-2\" *ngIf=\"investorShow\">\r\n  <mat-card-content>\r\n    <div fxFlex=\"100%\">\r\n      <div class=\"spinner-container\" *ngIf=\"loadingIndicator\">\r\n        <mat-progress-bar mode=\"query\"></mat-progress-bar>\r\n      </div>\r\n      <mat-table #table [dataSource]=\"dataSource\">\r\n        <!--<ng-container matColumnDef=\"No\">-->\r\n        <!--<mat-header-cell [fxFlex]=\"6\" *matHeaderCellDef>No</mat-header-cell>-->\r\n        <!--<mat-cell [fxFlex]=\"6\" *matCellDef=\"let investors;let i=index;\">-->\r\n        <!--{{i+1}}-->\r\n        <!--</mat-cell>-->\r\n        <!--</ng-container>-->\r\n\r\n        <ng-container matColumnDef=\"FirstNameEng\">\r\n          <mat-header-cell *matHeaderCellDef>Name</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let investors\">\r\n            {{investors?.InvestorNameEng}}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"FatherNameEng\">\r\n          <mat-header-cell *matHeaderCellDef>የኢንቨስተሩ ስም</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let investors\">\r\n            {{investors?.InvestorName}}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"RegistrationNumber\">\r\n          <mat-header-cell *matHeaderCellDef>License No</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let investors\">\r\n            {{investors?.RegistrationNumber}}\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n\r\n        <ng-container matColumnDef=\"RegistrationDate\">\r\n          <mat-header-cell *matHeaderCellDef>Registration Date</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let investors\">\r\n            {{investors.RegistrationDate | date}}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"Tin\">\r\n          <mat-header-cell *matHeaderCellDef>Tin</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let investors\">\r\n            {{investors?.Tin}}\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n\r\n        <ng-container matColumnDef=\"Action\">\r\n          <mat-header-cell [fxFlex]=\"20\" *matHeaderCellDef>Action\r\n            <button *ngIf=\"canViewTasks\" style=\"margin-left: 50px;\" mat-button color=\"primary\" (click)=\"editInvestor()\">\r\n              <mat-icon class=\"mat-button-icon\">add</mat-icon>\r\n              {{'common.commands.Add' | translate}}\r\n            </button>\r\n          </mat-header-cell>\r\n          <mat-cell [fxFlex]=\"20\" *matCellDef=\"let investors; let i=index\">\r\n            <div>\r\n\r\n              <a class=\"margin-10 pointer\" matTooltip=\"Click her to for detail\"\r\n                 (click)=\"goToService(investors.InvestorId,investors.InvestorNameEng)\">\r\n                <mat-icon color=\"primary\">visibility</mat-icon>\r\n                View\r\n              </a>\r\n              <button color=\"primary\" mat-raised-button class=\"margin-10 pointer\"\r\n                      matTooltip=\"Click her to add project\"\r\n                      (click)=\"select(investors.InvestorId,investors.InvestorNameEng)\">\r\n                <span style=\"font-weight: bolder;\">Select </span>\r\n              </button>\r\n            </div>\r\n          </mat-cell>\r\n\r\n\r\n        </ng-container>\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\">\r\n        </mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n        </mat-row>\r\n      </mat-table>\r\n\r\n      <mat-paginator\r\n\r\n        #paginator\r\n        [pageSize]=\"4\"\r\n        [pageSizeOptions]=\"[5, 10, 20]\">\r\n      </mat-paginator>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n<mat-card class=\"margin-2\" *ngIf=\"!investorShow\">\r\n  <div style=\"background-color: white\" class=\"investor-name\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\r\n       fxLayoutGap=\"2em\">\r\n\r\n    <div fxFlex=\"80\">\r\n      <h5 style=\"color: cadetblue;font-weight: bolder;\"> Investor Name : {{invName}}</h5>\r\n      <!--<h5 style=\"text-transform: capitalize;\"> {{invName}}</h5>-->\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <!--<mat-divider></mat-divider>-->\r\n  <mat-card-content *ngIf=\"projectList.length>0\">\r\n    <div fxFlex=\"100%\">\r\n\r\n      <div class=\"spinner-container\" *ngIf=\"loadingIndicator\">\r\n        <mat-progress-bar mode=\"query\"></mat-progress-bar>\r\n      </div>\r\n      <mat-table #table [dataSource]=\"dataSource\">\r\n        <ng-container matColumnDef=\"ProjectName\">\r\n          <mat-header-cell fxFlex=\"15\" *matHeaderCellDef>Project Name</mat-header-cell>\r\n          <mat-cell fxFlex=\"15\" *matCellDef=\"let projectList\">\r\n            {{projectList?.ProjectName}}\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n\r\n        <!--<ng-container matColumnDef=\"startDate\">-->\r\n        <!--<mat-header-cell *matHeaderCellDef> Start Date</mat-header-cell>-->\r\n        <!--<mat-cell *matCellDef=\"let projectList\">-->\r\n        <!--{{projectList?.StartDate | date}}-->\r\n        <!--</mat-cell>-->\r\n        <!--</ng-container>-->\r\n        <!---->\r\n        <ng-container matColumnDef=\"InvActivity\">\r\n          <mat-header-cell *matHeaderCellDef> Investment Activity</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let projectList\">\r\n            {{projectList?.InvestmentActivity?.DescriptionEnglish }}\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"ProjectStage\">\r\n          <mat-header-cell fxFlex=\"12\" *matHeaderCellDef>Project Stage</mat-header-cell>\r\n          <mat-cell fxFlex=\"12\" *matCellDef=\"let projectList\">\r\n\r\n              <span style=\"color: #00bcd4;font-weight: bolder\" *ngIf=\"projectList?.ProjectStage===1\">\r\n                PreImplementation\r\n              </span>\r\n            <span style=\"color: green;font-weight: bolder;\" *ngIf=\"projectList?.ProjectStage===2\">\r\n               Implementation\r\n              </span>\r\n            <span style=\"color: green;font-weight: bolder;\" *ngIf=\"projectList?.ProjectStage===3\">\r\n               Operation\r\n              </span>\r\n\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"ProjectStatus\">\r\n          <mat-header-cell fxFlex=\"12\" *matHeaderCellDef>Project Status</mat-header-cell>\r\n          <mat-cell fxFlex=\"12\" *matCellDef=\"let projectList\">\r\n<span style=\"color: red;font-weight: bolder;\"\r\n      *ngIf=\"projectList?.ProjectStatus===4\">\r\n               Cancelled\r\n              </span>\r\n            <span style=\"color: #00bcd4;font-weight: bolder;\"\r\n                  *ngIf=\"projectList?.ProjectStatus===5\">\r\n               Injected\r\n              </span>\r\n            <span style=\"color: red;font-weight: bolder;\"\r\n                  *ngIf=\"projectList?.ProjectStatus===6\">\r\n               Closed\r\n              </span>\r\n            <span style=\"color: #00bcd4;font-weight: bolder;\"\r\n                  *ngIf=\"projectList?.ProjectStatus===7\">\r\n            </span>\r\n            <span style=\"color: #00bcd4;font-weight: bolder;\"\r\n                  *ngIf=\"projectList?.ProjectStatus===7\">\r\n               Transfer\r\n              </span>\r\n            <span style=\"color: red;font-weight: bolder;\"\r\n                  *ngIf=\"projectList?.ProjectStatus===8\">\r\n               Not Active\r\n              </span>\r\n            <span style=\"color: #0d804b;font-weight: bolder;\"\r\n                  *ngIf=\"projectList?.ProjectStatus===9\">\r\n              Active\r\n              </span>\r\n\r\n\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n\r\n        <ng-container matColumnDef=\"Action\">\r\n          <mat-header-cell [fxFlex]=\"33\" *matHeaderCellDef>Action\r\n\r\n          </mat-header-cell>\r\n\r\n          <mat-cell [fxFlex]=\"33\" *matCellDef=\"let projectList; let i=index\">\r\n\r\n            <div>\r\n\r\n              <a class=\"margin-10 pointer\"\r\n                 color=\"accent\"\r\n                 matTooltip=\"Click here for detail of the project\"\r\n                 (click)=\"projectDetail(projectList?.ProjectId)\">\r\n                <mat-icon color=\"primary\">visibility</mat-icon>\r\n                View\r\n              </a>\r\n              <button *ngIf=\"canViewTasks || canManageAftercareData || canManageManageIncentiveAssignedServices\"\r\n                      mat-raised-button\r\n                      [disabled]=\"!projectList.IsActive\"\r\n                      color=\"primary\"\r\n                      matTooltip=\"Click Here to Continue\"\r\n                      (click)=\"startApplication(projectList)\">\r\n                <!--<mat-icon color=\"primary\" class=\"mat-18\">done</mat-icon>-->\r\n\r\n                <span style=\"font-weight: bolder;\">Continue </span>\r\n              </button>\r\n              <button style=\"margin-left: 5px\" *ngIf=\"canManageManageIncentiveAssignedServices \"\r\n\r\n                      mat-raised-button\r\n                      [disabled]=\"!projectList.IsActive\"\r\n                      color=\"primary\"\r\n                      matTooltip=\"Click Here to Continue\"\r\n                      (click)=\"showIncentiveDetials(projectList?.ProjectId,\r\n                      projectList?.ServiceApplicationId,\r\n              projectList.ServiceId,\r\n              projectList?.ProjectStatus,\r\n              projectList?.ProjectName)\">\r\n                <span style=\"font-weight: bolder;\">Incentive Detail</span>\r\n              </button>\r\n            </div>\r\n          </mat-cell>\r\n        </ng-container>\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumnsProject\">\r\n        </mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumnsProject;\">\r\n        </mat-row>\r\n      </mat-table>\r\n\r\n      <mat-paginator\r\n        #paginator\r\n        [pageSize]=\"4\"\r\n        [pageSizeOptions]=\"[5, 10, 20]\">\r\n      </mat-paginator>\r\n\r\n\r\n      <div style=\"padding: 15px; border-top: 1px solid #ccc\">\r\n        <button style=\"margin-left: 30px\"\r\n                mat-raised-button=\"\" (click)=\"back()\"\r\n                color=\"primary\">\r\n          <mat-icon class=\"mat-18\">arrow_back</mat-icon>\r\n          Back\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/search-browser/search-browser.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/search-browser/search-browser.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  display: block;\n  position: relative;\n  padding: 0px !important;\n  border-radius: 2px; }\n\n.investor-name {\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  background-color: #f5f5f5;\n  border: 1px solid #ddd;\n  padding-left: 20px;\n  text-transform: capitalize;\n  color: #78a1a6;\n  font-size: 15px; }\n\n#InvestorList > mat-card-content > div > mat-table > mat-header-row {\n  min-height: 45px;\n  border: 1px solid #ccc;\n  border-top: none;\n  background-color: #f5f5f5;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  background-color: #f5f5f5; }\n\n#InvestorList > mat-card-content > div > mat-table > mat-header-row, th.mat-header-cell, td.mat-cell, td.mat-footer-cell {\n  border-bottom-color: #ccc !important; }\n\nmat-row {\n  font-size: 15px !important;\n  color: black !important;\n  text-align: justify !important;\n  font-weight: bolder !important;\n  text-transform: capitalize; }\n"

/***/ }),

/***/ "./src/app/components/search-browser/search-browser.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/search-browser/search-browser.component.ts ***!
  \***********************************************************************/
/*! exports provided: SearchBrowserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBrowserComponent", function() { return SearchBrowserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _investor_investor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../investor/investor.service */ "./src/app/components/investor/investor.service.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _custor_services_security_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @custor/services/security/auth.service */ "./src/@custor/services/security/auth.service.ts");
/* harmony import */ var _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @custor/helpers/utilities */ "./src/@custor/helpers/utilities.ts");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Services/project-profile.service */ "./src/app/Services/project-profile.service.ts");
/* harmony import */ var _custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @custor/components/confirm-dialog/confirm-dialog.component */ "./src/@custor/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _Services_incentive_log_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Services/incentive-log.service */ "./src/app/Services/incentive-log.service.ts");
/* harmony import */ var _model_ServiceApplication_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../model/ServiceApplication.model */ "./src/app/model/ServiceApplication.model.ts");
/* harmony import */ var _setting_services_tabs_serviceApplication_serviceapplication_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../setting/services-tabs/serviceApplication/serviceapplication.service */ "./src/app/components/setting/services-tabs/serviceApplication/serviceapplication.service.ts");
/* harmony import */ var _model_TodoTask_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../model/TodoTask.model */ "./src/app/model/TodoTask.model.ts");
/* harmony import */ var _model_security_permission_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../model/security/permission.model */ "./src/app/model/security/permission.model.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var SearchBrowserComponent = /** @class */ (function () {
    function SearchBrowserComponent(fb, http, invService, projectService, dataSharing, accountService, authService, errMsg, projectProfileService, serviceApplicationService, incentiveLogService, toastr, dialog, router, route) {
        this.fb = fb;
        this.http = http;
        this.invService = invService;
        this.projectService = projectService;
        this.dataSharing = dataSharing;
        this.accountService = accountService;
        this.authService = authService;
        this.errMsg = errMsg;
        this.projectProfileService = projectProfileService;
        this.serviceApplicationService = serviceApplicationService;
        this.incentiveLogService = incentiveLogService;
        this.toastr = toastr;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.investorShow = true;
        this.loading = true;
        this.serviceList = [];
        this.displayedColumns = [
            'FirstNameEng', 'FatherNameEng', 'RegistrationNumber', 'RegistrationDate', 'Tin', 'Action'
        ];
        this.displayedColumnsProject = [
            'ProjectName', 'InvActivity', 'ProjectStage', 'ProjectStatus', 'Action'
        ];
        this.serviceApplication = new _model_ServiceApplication_model__WEBPACK_IMPORTED_MODULE_14__["ServiceApplicationModel"]();
        this.todoTask = new _model_TodoTask_model__WEBPACK_IMPORTED_MODULE_16__["TodoTaskModel"]();
    }
    Object.defineProperty(SearchBrowserComponent.prototype, "canViewTasks", {
        get: function () {
            return this.accountService.userHasPermission(_model_security_permission_model__WEBPACK_IMPORTED_MODULE_17__["Permission"].viewServiceList);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchBrowserComponent.prototype, "canManageAftercareData", {
        get: function () {
            return this.accountService.userHasPermission(_model_security_permission_model__WEBPACK_IMPORTED_MODULE_17__["Permission"].ManageAftercareDataPermission);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchBrowserComponent.prototype, "canManageManageIncentiveAssignedServices", {
        get: function () {
            return this.accountService.userHasPermission(_model_security_permission_model__WEBPACK_IMPORTED_MODULE_17__["Permission"].ManageIncentiveAssignedServicesPermission);
        },
        enumerable: true,
        configurable: true
    });
    SearchBrowserComponent.prototype.ngOnInit = function () {
        this.ServiceId = this.route.snapshot.params['ServiceId'];
        this.initForm();
        this.getInvestors();
        this.title = localStorage.getItem('title');
        this.projectName = localStorage.getItem('projectName');
        this.investorName = localStorage.getItem('investorName');
    };
    SearchBrowserComponent.prototype.search = function () {
        var _this = this;
        this.loadingIndicator = true;
        this.invService.searchInvestor(this.searchForm.value)
            .subscribe(function (result) {
            // console.log(result);
            _this.investors = result;
            if (!_this.investors) {
                _this.loadingIndicator = false;
                _this.toastr.error('No records were found to list', 'Error', {
                    closeButton: true,
                });
            }
            else {
                _this.loadingIndicator = false;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](result);
                // console.log(result);
                _this.dataSource.paginator = _this.paginator;
            }
        }, function (error) {
            _this.toastr.error("Error: \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_9__["Utilities"].getHttpResponseMessage(error) + "\"");
        });
        this.loadingIndicator = false;
    };
    SearchBrowserComponent.prototype.initForm = function () {
        this.searchForm = this.fb.group({
            Tin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            FirstNameEng: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            FatherNameEng: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            GrandNameEng: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    };
    SearchBrowserComponent.prototype.getInvestors = function () {
        var _this = this;
        this.loadingIndicator = true;
        this.invService.getInvestors()
            .subscribe(function (result) {
            // console.log(result);
            _this.investors = result;
            if (!_this.investors) {
                _this.loadingIndicator = false;
                _this.toastr.error('No records were found to list', 'Error', {
                    closeButton: true,
                });
            }
            else {
                _this.loadingIndicator = false;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](result);
                // console.log(result);
                _this.dataSource.paginator = _this.paginator;
            }
        }, function (error) {
            _this.toastr.error("Error: \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_9__["Utilities"].getHttpResponseMessage(error) + "\"");
        });
        this.loadingIndicator = false;
    };
    SearchBrowserComponent.prototype.select = function (InvestorId, investorName) {
        var _this = this;
        this.projectList = [];
        if (this.ServiceId == 13) {
            this.InvestorId = InvestorId;
            this.router.navigate(['/pro/' + 0 + '/' + 0 + '/' + this.ServiceId + '/' + 0 + '/' + InvestorId]);
        }
        else {
            // localStorage.setItem('InvestorId', InvestorId);
            this.router.navigate(['/search-browser/' + this.ServiceId + '/' + InvestorId + '/' + 0]);
            this.invName = investorName;
            this.loadingIndicator = true;
            this.projectService.getProjectByInvestorId(InvestorId)
                .subscribe(function (result) {
                _this.projectList = result;
                _this.title = 'ProjectDetail';
                if (_this.projectList.length == 0) {
                    _this.loadingIndicator = false;
                    _this.toastr.error('No project records were found to list', 'Error', {
                        closeButton: true,
                    });
                }
                else {
                    _this.loadingIndicator = false;
                    _this.investorShow = false;
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](result);
                    // console.log(result);
                    _this.dataSource.paginator = _this.paginator;
                }
            }, function (error) {
                _this.toastr.error("Error: \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_9__["Utilities"].getHttpResponseMessage(error) + "\"");
            });
            this.loadingIndicator = false;
        }
    };
    SearchBrowserComponent.prototype.editInvestor = function (investor) {
        if (investor) {
            this.router.navigate(['/investor/edit', investor.InvestorId], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['/investor/edit', 0]);
        }
    };
    SearchBrowserComponent.prototype.confirmDelete = function (investor) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_12__["AngConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            _this.loadingIndicator = true;
            if (result) {
                _this.invService.deleteInvestor(investor.InvestorId)
                    .subscribe(function (results) {
                    _this.loadingIndicator = false;
                    _this.dataSource.data = _this.dataSource.data.filter(function (item) { return item !== investor; });
                }, function (error) {
                    _this.toastr.error("An error occured whilst deleting the investor.\r\nError: \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_9__["Utilities"].getHttpResponseMessage(error) + "\"", 'Delete Error');
                });
            }
            _this.loadingIndicator = false;
        });
    };
    SearchBrowserComponent.prototype.back = function () {
        this.title = 'search';
        this.investorShow = true;
        this.getInvestors();
    };
    SearchBrowserComponent.prototype.deleteProject = function (id) {
        var response = confirm('Do you want to Delete this Project ?');
        if (response === true) {
            this.projectService.delete(id)
                .subscribe(function () {
            });
            return true;
        }
        else {
            return false;
        }
    };
    SearchBrowserComponent.prototype.editProject = function (projectId, serviceApplicationId, serviceId) {
        var _this = this;
        setTimeout(function () { return _this.dataSharing.steeperIndex.next(1); }, 0);
        setTimeout(function () { return _this.dataSharing.isNew.next(true); }, 0);
        this.router.navigate(['pro/' + projectId + '/' + serviceApplicationId + '/' + serviceId + '/' + 0 + '/' + 0]);
    };
    SearchBrowserComponent.prototype.projectDetail = function (id) {
        // console.log(this.router.url);
        this.router.navigate(['/service-detail', id]);
    };
    // Todo Application must be Intiated
    SearchBrowserComponent.prototype.goToService = function (InvestorId, investorName) {
        var _this = this;
        localStorage.setItem('investorName', investorName);
        var serviceId = this.ServiceId;
        if (serviceId === 13) {
            setTimeout(function () { return _this.dataSharing.currentIndex.next(0); }, 0);
            localStorage.setItem('currentIndex', '0');
            this.router.navigate(['pro/' + 0 + '/' + 0 + '/' + serviceId + '/' + 0 + '/' + InvestorId]);
        }
        else {
            this.select(InvestorId, investorName);
            this.router.navigate(['/search-browser/' + serviceId + '/' + InvestorId + '/' + 0]);
        }
    };
    SearchBrowserComponent.prototype.nextService = function (InvestorId, projectId, ServiceApplicationId, ServiceId, projectStatus, workFlowId) {
        var serviceId = +ServiceId; //+localStorage.getItem('ServiceId');
        var investorId = this.route.snapshot.params['InvestorId']; //localStorage.getItem('InvestorId');
        // console.log(serviceId);
        switch (serviceId) {
            case 13:
                this.router.navigate(['/pro/0/0/0/0/0']); //Fire
                break;
            case 18:
                if (projectStatus !== 4) {
                    this.router.navigate(['/project-renewal/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
                }
                else {
                    this.toastr.error('you can not renew this project it already cancelled', 'Not Allowed');
                }
                break;
            case 19:
                if (projectStatus !== 4) {
                    this.router.navigate(['/project-cancellation/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
                    localStorage.setItem('ProjectId', projectId);
                }
                else {
                    this.toastr.error('you can not Cancelled  this project it already cancelled', 'Not Allowed');
                }
                break;
            case 1023:
                if (projectStatus !== 4) {
                    this.router.navigate(['pro/' + projectId + '/' + ServiceApplicationId + '/' + serviceId + '/' + 0 + '/' + 0]);
                    localStorage.setItem('ParentProjectId', projectId);
                }
                else {
                    this.toastr.error('you can not Expand  this project it already cancelled', 'Not Allowed');
                }
                break;
            case 1234:
                this.router.navigate(['/after-care/' + projectId]);
                break;
            case 1028:
                this.editProject(projectId, ServiceApplicationId, 13);
                break;
            case 1027:
                if (projectStatus !== 4) {
                    this.router.navigate(['/project-substitute/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
                    localStorage.setItem('ProjectId', projectId);
                }
                else {
                    this.toastr.error('you can not Cancelled  this project it already cancelled', 'Not Allowed');
                }
                break;
            case 1045:
                if (projectStatus !== 4) {
                    this.router.navigate(['/tax-exemption/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
                    localStorage.setItem('ParentProjectId', projectId);
                }
                else {
                    this.toastr.error('Project it already cancelled', 'Not Allowed');
                }
                break;
            case 1046:
                if (projectStatus !== 4) {
                    this.router.navigate(['/incentive-request-item/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
                    localStorage.setItem('ParentProjectId', projectId);
                }
                else {
                    this.toastr.error('Project it already cancelled', 'Not Allowed');
                }
                break;
            case 1047:
                if (projectStatus !== 4) {
                    this.router.navigate(['bill-of-material/1/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
                    localStorage.setItem('ParentProjectId', projectId);
                }
                else {
                    this.toastr.error('Project it already cancelled', 'Not Allowed');
                }
                break;
            case 1054:
                if (projectStatus !== 4) {
                    this.router.navigate(['bill-of-material/2/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
                    localStorage.setItem('ParentProjectId', projectId);
                }
                else {
                    this.toastr.error('Project it already cancelled', 'Not Allowed');
                }
                break;
            case 1001:
                if (projectStatus !== 4) {
                    this.router.navigate(['capital-registration/', projectId]);
                    localStorage.setItem('ParentProjectId', projectId);
                }
                else {
                    this.toastr.error('Project it already cancelled', 'Not Allowed');
                }
                break;
            case 1236:
                if (projectStatus !== 4) {
                    this.router.navigate(['business-tab/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId + '/' + 0]);
                    localStorage.setItem('ParentProjectId', projectId);
                }
                else {
                    this.toastr.error('Project it already cancelled', 'Not Allowed');
                }
                break;
            default:
                this.router.navigate(['/notfound'], { relativeTo: this.route });
                break;
        }
    };
    SearchBrowserComponent.prototype.startApplication = function (projectList) {
        var _this = this;
        var projectName = projectList.ProjectName;
        var projectId = projectList.ProjectId;
        var projectStatus = projectList.ProjectStatus;
        var ServiceId = this.ServiceId;
        this.InvestorId = projectList.InvestorId;
        if (projectStatus !== 9) {
            this.toastr.warning('Project Is Not Active');
        }
        else {
            this.todoTask.AssignedUserId = this.accountService.currentUser.Id;
            this.todoTask.CreatedUserId = this.accountService.currentUser.Id;
            this.todoTask.CreatedUserName = this.accountService.currentUser.UserName;
            this.todoTask.IsActive = false;
            this.serviceApplication.ProjectId = projectId;
            this.serviceApplication.ServiceId = this.ServiceId;
            this.serviceApplication.InvestorId = this.InvestorId;
            this.serviceApplication.CaseNumber = '1';
            this.serviceApplication.CurrentStatusId = 44450;
            this.serviceApplication.IsSelfService = true;
            this.serviceApplication.IsPaid = true;
            this.serviceApplication.CreatedUserId = 1;
            this.serviceApplication.IsActive = false;
            this.serviceApplication.todoTask = this.todoTask;
            console.log(this.ServiceId);
            if (this.ServiceId != 1237) {
                this.serviceApplicationService
                    .applicationStart(this.serviceApplication)
                    .subscribe(function (result) {
                    _this.nextService(_this.InvestorId, projectId, result.ServiceApplicationId, ServiceId, projectStatus, result.ServiceWorkflow[0].ServiceWorkflowId);
                });
            }
            else {
                this.router.navigate(['incentive-detail/' + projectId + '/' + 0 + '/' + 0 + '/' + 1]);
            }
            localStorage.setItem('projectName', projectName);
        }
    };
    SearchBrowserComponent.prototype.showIncentiveDetials = function (projectId, ServiceApplicationId, ServiceId, projectStatus, projectName) {
        if (projectStatus !== 9) {
            this.toastr.warning('Project Is Not Active');
        }
        else {
            localStorage.setItem('projectName', projectName);
            this.router.navigate(['incentive-detail/' + projectId + '/' + 0 + '/' + 0 + '/' + 1]);
        }
    };
    SearchBrowserComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue.replace(/[\W_]/g, '');
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    SearchBrowserComponent.prototype.ngAfterContentChecked = function () {
        this.serviceTitle = localStorage.getItem('title');
        this.title = localStorage.getItem('title');
        this.projectName = localStorage.getItem('projectName');
        this.investorName = localStorage.getItem('investorName');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], SearchBrowserComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], SearchBrowserComponent.prototype, "paginator2", void 0);
    SearchBrowserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-browser',
            template: __webpack_require__(/*! ./search-browser.component.html */ "./src/app/components/search-browser/search-browser.component.html"),
            styles: [__webpack_require__(/*! ./search-browser.component.scss */ "./src/app/components/search-browser/search-browser.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _investor_investor_service__WEBPACK_IMPORTED_MODULE_6__["InvestorService"],
            _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_11__["ProjectProfileService"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_10__["DataSharingService"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"],
            _custor_services_security_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_18__["ErrorMessage"],
            _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_11__["ProjectProfileService"],
            _setting_services_tabs_serviceApplication_serviceapplication_service__WEBPACK_IMPORTED_MODULE_15__["ServiceapplicationService"],
            _Services_incentive_log_service__WEBPACK_IMPORTED_MODULE_13__["IncentiveLogService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], SearchBrowserComponent);
    return SearchBrowserComponent;
}());



/***/ }),

/***/ "./src/app/components/search-browser/search-browser.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/search-browser/search-browser.module.ts ***!
  \********************************************************************/
/*! exports provided: SearchBrowserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBrowserModule", function() { return SearchBrowserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _search_browser_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-browser-routing.module */ "./src/app/components/search-browser/search-browser-routing.module.ts");
/* harmony import */ var _search_browser_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-browser.component */ "./src/app/components/search-browser/search-browser.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SearchBrowserModule = /** @class */ (function () {
    function SearchBrowserModule() {
    }
    SearchBrowserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _search_browser_routing_module__WEBPACK_IMPORTED_MODULE_3__["SearchBrowserRoutingModule"]
            ],
            declarations: [_search_browser_component__WEBPACK_IMPORTED_MODULE_4__["SearchBrowserComponent"]]
        })
    ], SearchBrowserModule);
    return SearchBrowserModule;
}());

console.log(undefined.ServiceApplicationId);


/***/ }),

/***/ "./src/app/model/TodoTask.model.ts":
/*!*****************************************!*\
  !*** ./src/app/model/TodoTask.model.ts ***!
  \*****************************************/
/*! exports provided: TodoTaskModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoTaskModel", function() { return TodoTaskModel; });
var TodoTaskModel = /** @class */ (function () {
    function TodoTaskModel() {
    }
    return TodoTaskModel;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-search-browser-search-browser-module.js.map