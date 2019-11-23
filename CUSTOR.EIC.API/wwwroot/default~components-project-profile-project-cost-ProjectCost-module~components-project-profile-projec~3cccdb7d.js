(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-project-profile-project-cost-ProjectCost-module~components-project-profile-projec~3cccdb7d"],{

/***/ "./src/app/Services/application-setting.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/Services/application-setting.service.ts ***!
  \*********************************************************/
/*! exports provided: ApplicationSettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationSettingService", function() { return ApplicationSettingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base.service */ "./src/app/Services/Base.service.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var ApplicationSettingService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ApplicationSettingService, _super);
    function ApplicationSettingService(http, appConfig, errMsg) {
        var _this = _super.call(this, http, appConfig.urls.url('ApplicationSettings'), errMsg) || this;
        _this.http = http;
        _this.appConfig = appConfig;
        _this.errMsg = errMsg;
        return _this;
    }
    ApplicationSettingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(
        // {
        //   providedIn: 'root'
        // }
        ),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_4__["AppConfiguration"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"]])
    ], ApplicationSettingService);
    return ApplicationSettingService;
}(_Base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));



/***/ }),

/***/ "./src/app/components/project-profile/project-cost/ProjectCost.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/project-profile/project-cost/ProjectCost.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ProjectCostModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCostModule", function() { return ProjectCostModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _ProjectCostModuleRouting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectCostModuleRouting */ "./src/app/components/project-profile/project-cost/ProjectCostModuleRouting.ts");
/* harmony import */ var _project_cost_list_project_cost_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-cost-list/project-cost-list.component */ "./src/app/components/project-profile/project-cost/project-cost-list/project-cost-list.component.ts");
/* harmony import */ var _project_cost_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-cost.component */ "./src/app/components/project-profile/project-cost/project-cost.component.ts");
/* harmony import */ var _Services_application_setting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Services/application-setting.service */ "./src/app/Services/application-setting.service.ts");








var ProjectCostModule = /** @class */ (function () {
    function ProjectCostModule() {
    }
    ProjectCostModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _ProjectCostModuleRouting__WEBPACK_IMPORTED_MODULE_4__["ProjectCostModuleRouting"]
            ],
            declarations: [_project_cost_list_project_cost_list_component__WEBPACK_IMPORTED_MODULE_5__["ProjectCostListComponent"],
                _project_cost_component__WEBPACK_IMPORTED_MODULE_6__["ProjectCostComponent"]],
            exports: [_project_cost_list_project_cost_list_component__WEBPACK_IMPORTED_MODULE_5__["ProjectCostListComponent"], _project_cost_component__WEBPACK_IMPORTED_MODULE_6__["ProjectCostComponent"]],
            providers: [_Services_application_setting_service__WEBPACK_IMPORTED_MODULE_7__["ApplicationSettingService"]]
        })
    ], ProjectCostModule);
    return ProjectCostModule;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-cost/ProjectCostModuleRouting.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-cost/ProjectCostModuleRouting.ts ***!
  \*************************************************************************************/
/*! exports provided: ProjectCostModuleRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCostModuleRouting", function() { return ProjectCostModuleRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_cost_list_project_cost_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-cost-list/project-cost-list.component */ "./src/app/components/project-profile/project-cost/project-cost-list/project-cost-list.component.ts");
/* harmony import */ var _project_cost_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-cost.component */ "./src/app/components/project-profile/project-cost/project-cost.component.ts");





var costRoute = [
    { path: '', component: _project_cost_list_project_cost_list_component__WEBPACK_IMPORTED_MODULE_3__["ProjectCostListComponent"] },
    { path: ':id', component: _project_cost_component__WEBPACK_IMPORTED_MODULE_4__["ProjectCostComponent"] },
];
var ProjectCostModuleRouting = /** @class */ (function () {
    function ProjectCostModuleRouting() {
    }
    ProjectCostModuleRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(costRoute)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProjectCostModuleRouting);
    return ProjectCostModuleRouting;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-cost/project-cost-list/project-cost-list.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-cost/project-cost-list/project-cost-list.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table style=\"height: 320px;display: block;overflow: auto;\" class=\"scrollbar table full-width\">\r\n  <thead>\r\n  <th>No</th>\r\n  <th>Land Cost</th>\r\n  <th>Building Cost</th>\r\n  <th>Machinery Cost</th>\r\n  <th>Transport Cost</th>\r\n  <th>Office Equipment Cost</th>\r\n  <th>Other Capital Cost</th>\r\n  <th>Initial WorkingCapital Cost</th>\r\n  <th>EquityFinance</th>\r\n  <th>Loan Finance</th>\r\n  <th>Other Source Finance</th>\r\n  <th>Other Source Description</th>\r\n  <th>Unit</th>\r\n  <th>Actual Cost In Foreign</th>\r\n  <th>Remark</th>\r\n  <th>Action</th>\r\n\r\n  </thead>\r\n  <tbody style=\"overflow: auto;\">\r\n  <tr matTooltip=\"Planned cost\" class=\"planned\">\r\n    <td></td>\r\n    <td>{{plannedCost?.LandCost}}</td>\r\n    <td>{{plannedCost?.BuildingCost}}</td>\r\n    <td>{{plannedCost?.MachineryCost}}</td>\r\n    <td>{{plannedCost?.TransportCost}}</td>\r\n    <td>{{plannedCost?.OfficeEquipmentCost}}</td>\r\n    <td>{{plannedCost?.OtherCapitalCost}}</td>\r\n    <td>{{plannedCost?.InitialWorkingCapitalCost}}</td>\r\n    <td>{{plannedCost?.EquityFinance}}</td>\r\n    <td>{{plannedCost?.LoanFinance}}</td>\r\n    <td>{{plannedCost?.OtherSourceFinance}}</td>\r\n    <td>{{plannedCost?.OtherSourceDescription}}</td>\r\n    <td>{{plannedCost?.Unit}}</td>\r\n    <td>{{plannedCost?.ActualCostInForeign}}</td>\r\n    <td>{{plannedCost?.Remark}}</td>\r\n    <!--<td><a (click)=\"edit(plannedCost.ProjectCostId)\">-->\r\n    <!--<mat-icon class=\"mat-18\">edit</mat-icon>-->\r\n    <!--</a></td>-->\r\n  </tr>\r\n  <tr matTooltip=\"Actual Cost\" *ngFor=\"let cost of costList;let i=index;\">\r\n    <td>{{i+1}}</td>\r\n    <td>{{cost.LandCost}}</td>\r\n    <td>{{cost.BuildingCost}}</td>\r\n    <td>{{cost.MachineryCost}}</td>\r\n    <td>{{cost.TransportCost}}</td>\r\n    <td>{{cost.OfficeEquipmentCost}}</td>\r\n    <td>{{cost.OtherCapitalCost}}</td>\r\n    <td>{{cost.InitialWorkingCapitalCost}}</td>\r\n    <td>{{cost.EquityFinance}}</td>\r\n    <td>{{cost.LoanFinance}}</td>\r\n    <td>{{cost.OtherSourceFinance}}</td>\r\n    <td>{{cost.OtherSourceDescription}}</td>\r\n    <td>{{cost.Unit}}</td>\r\n    <td>{{cost.ActualCostInForeign}}</td>\r\n    <td>{{cost.Remark}}</td>\r\n    <td>\r\n      <a (click)=\"edit(cost.ProjectCostId)\">\r\n        <mat-icon class=\"mat-18\">edit</mat-icon>\r\n        <!--Compare-->\r\n      </a>\r\n      <!--<a (click)=\"edit(cost.ProjectCostId)\">-->\r\n        <!--<mat-icon class=\"mat-18\">edit</mat-icon>-->\r\n        <!--Compare-->\r\n      <!--</a>-->\r\n\r\n    </td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/project-cost/project-cost-list/project-cost-list.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-cost/project-cost-list/project-cost-list.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table td {\n  padding: 4px 7px 4px 5px;\n  font-size: 13px;\n  border-top: 1px solid #FAFAFA; }\n\n.table th {\n  padding: 4px 7px 4px 5px;\n  font-size: 13px;\n  border-top: 1px solid #FAFAFA; }\n\ntable tbody tr:nth-child(2) td {\n  border: 1px solid #0d8055;\n  background-color: #0d8055;\n  color: white;\n  font-weight: bolder; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Byb2plY3QtcHJvZmlsZS9wcm9qZWN0LWNvc3QvcHJvamVjdC1jb3N0LWxpc3QvQzpcXFVzZXJzXFxGZXRpaGEgS1xcRGVza3RvcFxcREVWXFxHaXRMYWJcXEludmVzdG1uZXRcXENVU1RPUi5FSUMuQVBJXFxzcmMvYXBwXFxjb21wb25lbnRzXFxwcm9qZWN0LXByb2ZpbGVcXHByb2plY3QtY29zdFxccHJvamVjdC1jb3N0LWxpc3RcXHByb2plY3QtY29zdC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZiw2QkFBNkIsRUFBQTs7QUFLL0I7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLDZCQUE2QixFQUFBOztBQUkvQjtFQUVFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQixFQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3Byb2plY3QtcHJvZmlsZS9wcm9qZWN0LWNvc3QvcHJvamVjdC1jb3N0LWxpc3QvcHJvamVjdC1jb3N0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRhYmxlIHRkIHtcclxuICBwYWRkaW5nOiA0cHggN3B4IDRweCA1cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRkFGQUZBO1xyXG4gIC8vYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcblxyXG59XHJcblxyXG4udGFibGUgdGgge1xyXG4gIHBhZGRpbmc6IDRweCA3cHggNHB4IDVweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNGQUZBRkE7XHJcbiAgLy9ib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxufVxyXG5cclxudGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKDIpIHRkIHtcclxuXHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzBkODA1NTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ4MDU1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/project-profile/project-cost/project-cost-list/project-cost-list.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-cost/project-cost-list/project-cost-list.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ProjectCostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCostListComponent", function() { return ProjectCostListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_project_cost_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Services/project-cost.service */ "./src/app/Services/project-cost.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProjectCostListComponent = /** @class */ (function () {
    function ProjectCostListComponent(projectCostService, route, router) {
        this.projectCostService = projectCostService;
        this.route = route;
        this.router = router;
    }
    ProjectCostListComponent.prototype.ngOnInit = function () {
        this.ProjectId = this.route.snapshot.params['ProjectId'];
        // this.ProjectId1 = this.route.snapshot.params['projectId'];
        // this.ServiceId = this.route.snapshot.params['ServiceId'];
        // this.InvestorId = this.route.snapshot.params['InvestorId'];
        console.log(this.ProjectId);
        // console.log(this.ProjectId1)
        this.getAllCostByProjectId();
        this.getPlannedCostByProjectId();
    };
    ProjectCostListComponent.prototype.getAllCostByProjectId = function () {
        var _this = this;
        this.projectCostService.getAllActualCost(this.ProjectId)
            .subscribe(function (cost) {
            _this.costList = cost;
        });
    };
    ProjectCostListComponent.prototype.getPlannedCostByProjectId = function () {
        var _this = this;
        this.projectCostService.getCostByProjectId(this.ProjectId)
            .subscribe(function (cost) {
            // console.log(cost);
            _this.plannedCost = cost;
        });
    };
    ProjectCostListComponent.prototype.edit = function (costId) {
        this.router.navigate(['/project-cost/new', costId]);
    };
    ProjectCostListComponent.prototype.back = function () {
        window.history.back();
    };
    ProjectCostListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-cost-list',
            template: __webpack_require__(/*! ./project-cost-list.component.html */ "./src/app/components/project-profile/project-cost/project-cost-list/project-cost-list.component.html"),
            styles: [__webpack_require__(/*! ./project-cost-list.component.scss */ "./src/app/components/project-profile/project-cost/project-cost-list/project-cost-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_project_cost_service__WEBPACK_IMPORTED_MODULE_2__["ProjectCostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProjectCostListComponent);
    return ProjectCostListComponent;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-cost/project-cost.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-cost/project-cost.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9wcm9qZWN0LXByb2ZpbGUvcHJvamVjdC1jb3N0L3Byb2plY3QtY29zdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/project-profile/project-cost/project-cost.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-cost/project-cost.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"margin-2\">\r\n  <form [formGroup]=\"projectCostForm\" countryCity novalidate #costF>\r\n    <input type=\"number\" formControlName=\"ProjectId\" hidden>\r\n    <mat-card-subtitle class=\"sub-title\">\r\n      Project cost\r\n      <mat-divider></mat-divider>\r\n    </mat-card-subtitle>\r\n    <!--<div class=\"block\">{{projectCostForm.value | json}}</div>-->\r\n\r\n    <mat-card-content>\r\n\r\n      <div style=\"margin-bottom: 40px;\" *ngIf=\"ServiceId=='1234'\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\r\n           fxLayoutGap=\"2em\">\r\n        <div class=\"block\" fxFlex=\"\">\r\n          <mat-form-field>\r\n            <mat-label>Quarter</mat-label>\r\n            <mat-select formControlName=\"Quarter\" [compareWith]=\"compareIds\" required>\r\n              <mat-option *ngFor=\"let row of Quarter\" [value]=\"row.Id\">\r\n                <span>{{row.DescriptionEnglish}}</span>\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n        </div>\r\n        <!--<div class=\"block\" fxFlex=\"\">-->\r\n        <!--<mat-form-field>-->\r\n        <!--<input formControlName=\"ExchangeRate\"-->\r\n        <!--type=\"number\"-->\r\n        <!--matInput placeholder=\"Exchange Rate  :\">-->\r\n        <!--<mat-error align=\"start\" *ngIf=\"formErrors.ExchangeRate\" class=\"form__error\">{{ formErrors.ExchangeRate }}-->\r\n        <!--</mat-error>-->\r\n        <!--</mat-form-field>-->\r\n        <!--</div>-->\r\n        <div class=\"block\" fxFlex>\r\n          <mat-form-field>\r\n            <input placeholder=\"Registration Year* :\"\r\n                   matInput\r\n                   formControlName=\"ReagistrationYear\"\r\n                   [matDatepicker]=\"ReagistrationYear\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"ReagistrationYear\"></mat-datepicker-toggle>\r\n            <mat-datepicker #ReagistrationYear></mat-datepicker>\r\n            <mat-error align=\"start\" *ngIf=\"formErrors.ReagistrationYear\" class=\"form__error\">\r\n              {{ formErrors.ReagistrationYear }}\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <!--<div class=\"block\" fxFlex=\"\">-->\r\n        <!---->\r\n        <!--<mat-form-field>-->\r\n        <!--<input #OSF type=\"number\" formControlName=\"CapitalRegistrationDatetime\" matInput-->\r\n        <!--placeholder=\"Capital Registration Datetime * :\">-->\r\n        <!---->\r\n        <!--</mat-form-field>-->\r\n        <!--</div>-->\r\n        <div class=\"block\" fxFlex=\"\">\r\n\r\n          <mat-form-field>\r\n            <mat-select [disabled]=\"true\" formControlName=\"ProjectStatus\" [compareWith]=\"compareIds\" required>\r\n              <option value=\"0\">--Select--</option>\r\n              <label>Project Status</label>\r\n              <mat-option *ngFor=\"let status of projectStatus\" [value]=\"status.Id\">\r\n                <span>{{status.DescriptionEnglish}}</span>\r\n              </mat-option>\r\n            </mat-select>\r\n\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <mat-card-subtitle class=\"sub-title\" *ngIf=\"!(ServiceId=='1234' && (ServiceId=='1234' && editMode))\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"start Left\" [fxFlex]=\"50\" >\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start Left\" fxLayoutGap=\"2em\">\r\n            <div class=\"block\" fxFlex=\"\">\r\n              Cost Break Down\r\n            </div>\r\n          </div>\r\n        </div>\r\n          <div fxLayout=\"column\" fxLayoutAlign=\"start Left\" [fxFlex]=\"200\" >\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start Left\" fxLayoutGap=\"2em\">\r\n              <div class=\"block\" fxFlex=\"\">\r\n                Source of Finance\r\n              </div>\r\n            </div>\r\n        </div>\r\n      </mat-card-subtitle>\r\n      <mat-divider></mat-divider>\r\n      <div style=\"margin-top: 2em\" *ngIf=\"!(ServiceId=='1234' && editMode)\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"start Left\" [fxFlex]=\"50\" >\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start Left\" fxLayoutGap=\"2em\">\r\n            <div class=\"block\" fxFlex=\"\">\r\n              <mat-form-field>\r\n                <input formControlName=\"LandCost\" #LC matInput type=\"number\" placeholder=\"Land Cost (US Dollar) * :\">\r\n                <mat-error align=\"start\" *ngIf=\"formErrors.LandCost\" class=\"form__error\">{{ formErrors.LandCost }}\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"block\" fxFlex=\"\">\r\n              <mat-form-field>\r\n                <input formControlName=\"LandCostInBirr\" #LCInBirr matInput type=\"number\" placeholder=\"Land Cost/Birr/ * :\">\r\n                <mat-error *ngIf=\"formErrors.LandCostInBirr\" class=\"form__error\">{{ formErrors.LandCostInBirr }}\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start Left\" fxLayoutGap=\"2em\">\r\n            <div class=\"block\" fxFlex=\"\">\r\n              <mat-form-field>\r\n                <input formControlName=\"BuildingCost\" #BC matInput type=\"number\" placeholder=\"Building Cost  (US Dollar) * :\">\r\n                <mat-error align=\"start\" *ngIf=\"formErrors.BuildingCost\" class=\"form__error\">{{ formErrors.BuildingCost\r\n                  }}\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"block\" fxFlex=\"\">\r\n              <mat-form-field>\r\n                <input formControlName=\"BuildingCostInBirr\" #BCInBirr matInput type=\"number\" placeholder=\"Building Cost/Birr/ * :\">\r\n                <mat-error align=\"start\" *ngIf=\"formErrors.BuildingCostInBirr\" class=\"form__error\">{{ formErrors.BuildingCostInBirr\r\n                  }}\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start Left\" fxLayoutGap=\"2em\">\r\n            <div class=\"block\" fxFlex=\"\">\r\n              <mat-form-field>\r\n                <input formControlName=\"MachineryCost\" #MC matInput type=\"number\" placeholder=\"Machinery Cost  (US Dollar) * :\">\r\n                <mat-error align=\"start\" *ngIf=\"formErrors.MachineryCost\" class=\"form__error\">\r\n                  {{ formErrors.MachineryCost }}\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"block\" fxFlex=\"\">\r\n              <mat-form-field>\r\n                <input formControlName=\"MachineryCostInBirr\" #MCInBirr matInput type=\"number\" placeholder=\"Machinery Cost/Birr/ * :\">\r\n                <mat-error align=\"start\" *ngIf=\"formErrors.MachineryCostInBirr\" class=\"form__error\">\r\n                  {{ formErrors.MachineryCostInBirr }}\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start Left\" fxLayoutGap=\"2em\">\r\n            <div class=\"block\" fxFlex=\"\">\r\n              <mat-form-field>\r\n                <input matInput formControlName=\"TransportCost\" type=\"number\" #TC placeholder=\"TransportCost  (US Dollar) * :\">\r\n                <mat-error align=\"start\" *ngIf=\"formErrors.TransportCost\" class=\"form__error\">\r\n                  {{ formErrors.TransportCost }}\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"block\" fxFlex=\"\">\r\n              <mat-form-field>\r\n                <input matInput formControlName=\"TransportCostInBirr\" type=\"number\" #TCInBirr placeholder=\"TransportCost/Birr/ * :\">\r\n                <mat-error align=\"start\" *ngIf=\"formErrors.TransportCostInBirr\" class=\"form__error\">\r\n                  {{ formErrors.TransportCostInBirr }}\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start Left\" fxLayoutGap=\"2em\">\r\n            <div class=\"block\" fxFlex=\"\">\r\n              <mat-form-field>\r\n                <input formControlName=\"OfficeEquipmentCost\" type=\"number\" #OEC matInput\r\n                       placeholder=\"Office Equipment Cost  (US Dollar) * :\">\r\n                <mat-error align=\"start\" *ngIf=\"formErrors.OfficeEquipmentCost\" class=\"form__error\">{{\r\n                  formErrors.OfficeEquipmentCost }}\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"block\" fxFlex=\"\">\r\n              <mat-form-field>\r\n                <input formControlName=\"OfficeEquipmentCostInBirr\" type=\"number\" #OECInBirr matInput\r\n                       placeholder=\"Office Equipment Cost/Birr/ * :\">\r\n                <mat-error align=\"start\" *ngIf=\"formErrors.OfficeEquipmentCostInBirr\" class=\"form__error\">{{\r\n                  formErrors.OfficeEquipmentCostInBirr }}\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start Left\" fxLayoutGap=\"2em\">\r\n            <div class=\"block\" fxFlex=\"\">\r\n              <mat-form-field>\r\n                <input formControlName=\"OtherCapitalCost\" type=\"number\" #OCC matInput\r\n                       placeholder=\"Other Capital Cost (US Dollar)* :\">\r\n                <mat-error align=\"start\" *ngIf=\"formErrors.OtherCapitalCost\" class=\"form__error\">{{\r\n                  formErrors.OtherCapitalCost }}\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"block\" fxFlex=\"\">\r\n              <mat-form-field>\r\n                <input formControlName=\"OtherCapitalCostInBirr\" type=\"number\" #OCCInBirr matInput\r\n                       placeholder=\"Other Capital Cost/Birr/ * :\">\r\n                <mat-error align=\"start\" *ngIf=\"formErrors.OtherCapitalCostInBirr\" class=\"form__error\">{{\r\n                  formErrors.OtherCapitalCostInBirr }}\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start Left\" fxLayoutGap=\"2em\">\r\n            <div class=\"block\" fxFlex=\"\">\r\n              <mat-form-field>\r\n                <input formControlName=\"InitialWorkingCapitalCost\"\r\n                       type=\"number\" matInput #IWCC placeholder=\"Initial Working Capital Cost (US Dollar)* :\">\r\n                <mat-error align=\"start\" *ngIf=\"formErrors.InitialWorkingCapitalCost\" class=\"form__error\">{{\r\n                  formErrors.InitialWorkingCapitalCost }}\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"block\" fxFlex=\"\">\r\n              <mat-form-field>\r\n                <input formControlName=\"InitialWorkingCapitalCostInBirr\"\r\n                       type=\"number\" matInput #IWCCInBirr placeholder=\"Initial Working Capital Cost/Birr/ * :\">\r\n                <mat-error align=\"start\" *ngIf=\"formErrors.InitialWorkingCapitalCostInBirr\" class=\"form__error\">{{\r\n                  formErrors.InitialWorkingCapitalCostInBirr }}\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start Left\" fxLayoutGap=\"2em\" >\r\n            <div class=\"block\" fxFlex=\"\">\r\n              <mat-form-field>\r\n                <input\r\n                  type=\"number\"\r\n                  #TotalCost\r\n                  matInput formControlName=\"Total\" placeholder=\"Total\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"block\" fxFlex=\"\">\r\n              <mat-form-field>\r\n                <input\r\n                  type=\"number\"\r\n                  #TotalCostInBirr\r\n                  matInput formControlName=\"TotalInBirr\" placeholder=\"Total/Birr/\">\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!--<mat-card-subtitle class=\"sub-title\">-->\r\n          <!--Source of Finance-->\r\n          <!--&lt;!&ndash;<mat-divider></mat-divider>&ndash;&gt;-->\r\n        <!--</mat-card-subtitle>-->\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"start Left\" [fxFlex]=\"50\" >\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start Left\" fxLayoutGap=\"2em\">\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <mat-form-field>\r\n              <input formControlName=\"EquityFinance\"\r\n                     type=\"number\"\r\n                     #EF\r\n                     matInput placeholder=\"Equity Finance\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <mat-form-field>\r\n              <input formControlName=\"LoanFinance\"\r\n                     type=\"number\"\r\n                     #LF\r\n                     matInput placeholder=\"Loan Finance * :\">\r\n              <mat-error align=\"start\" *ngIf=\"formErrors.LoanFinance\" class=\"form__error\">{{ formErrors.LoanFinance }}\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <!--<div class=\"block\" fxFlex=\"\">-->\r\n            <!--<mat-form-field>-->\r\n              <!--<input #OSF type=\"number\" formControlName=\"OtherSourceFinance\" matInput-->\r\n                     <!--placeholder=\"Other Source Finance * :\">-->\r\n              <!--<mat-error align=\"start\" *ngIf=\"formErrors.OtherSourceFinance\" class=\"form__error\">-->\r\n                <!--{{ formErrors.OtherSourceFinance }}-->\r\n              <!--</mat-error>-->\r\n            <!--</mat-form-field>-->\r\n          <!--</div>-->\r\n          <!--<div class=\"block\" fxFlex=\"\">-->\r\n            <!--<mat-form-field>-->\r\n              <!--<input formControlName=\"OtherSourceDescription\" matInput placeholder=\"Other Source Description  :\">-->\r\n              <!--<mat-error align=\"start\" *ngIf=\"formErrors.OtherSourceDescription\" class=\"form__error\">-->\r\n                <!--{{ formErrors.OtherSourceDescription }}-->\r\n              <!--</mat-error>-->\r\n            <!--</mat-form-field>-->\r\n          <!--</div>-->\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start Left\" fxLayoutGap=\"2em\">\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <mat-form-field>\r\n              <input #OSF type=\"number\" formControlName=\"OtherSourceFinance\" matInput\r\n                     placeholder=\"Other Source Finance * :\">\r\n              <mat-error align=\"start\" *ngIf=\"formErrors.OtherSourceFinance\" class=\"form__error\">\r\n                {{ formErrors.OtherSourceFinance }}\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <mat-form-field>\r\n              <input formControlName=\"OtherSourceDescription\" matInput placeholder=\"Other Source Description  :\">\r\n              <mat-error align=\"start\" *ngIf=\"formErrors.OtherSourceDescription\" class=\"form__error\">\r\n                {{ formErrors.OtherSourceDescription }}\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start Left\" fxLayoutGap=\"2em\">\r\n          <mat-error\r\n            *ngIf=\"projectCostForm.hasError('sumIsNotEqual') && (projectCostForm.touched || projectCostForm.dirty)\"\r\n            class=\"error\">\r\n            The cost break down and sum of source of finance must be equal!\r\n          </mat-error>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start Left\" fxLayoutGap=\"2em\">\r\n          <!--<div fxLayout=\"column\" class=\"block\" fxFlex=\"25\">-->\r\n\r\n            <div class=\"block\" fxFlex=\"\">\r\n              <mat-form-field>\r\n\r\n                <mat-label>Currency Type</mat-label>\r\n                <mat-select [disabled]=\"true\" formControlName=\"Unit\" [compareWith]=\"compareIds\" required>\r\n                  <option value=\"0\">--Select--</option>\r\n                  <mat-option *ngFor=\"let currency of currencyTypes\" [value]=\"currency.Id\">\r\n                    <span>{{currency.DescriptionEnglish}}</span>\r\n                  </mat-option>\r\n                </mat-select>\r\n\r\n                <!--<mat-label>Unit :</mat-label>-->\r\n                <!--<input matInput formControlName=\"Unit\" type=\"text\" required placeholder=\"\">-->\r\n                <mat-error align=\"start\" *ngIf=\"formErrors.Unit\" class=\"form__error\">{{ formErrors.Unit }}\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n          <!--</div>-->\r\n          <!--<div  fxLayout=\"column\" class=\"block\" fxFlex=\"25\">-->\r\n            <div class=\"block\" fxFlex=\"\">\r\n              <mat-form-field>\r\n                <input\r\n                  formControlName=\"ActualCostInForeign\"\r\n                  type=\"number\"\r\n                  matInput\r\n                  placeholder=\"Actual Cost In Foreign\"\r\n                />\r\n                <!--<mat-error align=\"start\" *ngIf=\"formErrors.EquityFinance\" class=\"form__error\">-->\r\n                <!--{{ formErrors.EquityFinance }}-->\r\n                <!--</mat-error>-->\r\n              </mat-form-field>\r\n            </div>\r\n          <!--</div>-->\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start Left\" fxLayoutGap=\"2em\">\r\n          <!--<div fxLayout=\"column\" class=\"block\" fxFlex=\"25\">-->\r\n            <div class=\"block\" fxFlex=\"\">\r\n              <mat-form-field>\r\n                <input\r\n                  formControlName=\"ExchangeRate\"\r\n                  type=\"number\"\r\n                  matInput\r\n                  placeholder=\"ETB Exchange Rate\"\r\n                />\r\n                <mat-error align=\"start\" *ngIf=\"projectCostForm.get('ExchangeRate').hasError('min')\"\r\n                           class=\"form__error\">\r\n                  Minimum currency Rate must be 26\r\n                </mat-error>\r\n                <mat-error align=\"start\" *ngIf=\"projectCostForm.get('ExchangeRate').hasError('max')\"\r\n                           class=\"form__error\">\r\n                  Maximum currency Rate must be 35\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n          <!--</div>-->\r\n\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start Left\" fxLayoutGap=\"2em\">\r\n            <div class=\"block\" fxFlex=\"\">\r\n              <mat-form-field class=\"full-width\">\r\n                <mat-label>Remark :</mat-label>\r\n                <textarea matInput formControlName=\"Remark\" rows=\"4\"></textarea>\r\n                <!--<mat-error align=\"start\" *ngIf=\"formErrors?.Remark\" class=\"form__error\">-->\r\n                <!--{{ formErrors.Remark }}-->\r\n                <!--</mat-error>-->\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        </div>\r\n      <!--</div>-->\r\n\r\n\r\n    </mat-card-content>\r\n\r\n    <mat-divider></mat-divider>\r\n\r\n    <div style=\"padding-top: 20px\" align=\"center\">\r\n\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"2em\">\r\n\r\n        <div fxFlex=\"15\">\r\n\r\n        </div>\r\n        <div style=\"text-align: center\" fxFlex=\"67\" fxFlexAlign=\"center\">\r\n          <button [disabled]=\"!projectCostForm.valid\" mat-raised-button=\"\" color=\"primary\" (click)=\"onSubmit()\">\r\n            <mat-icon class=\"mat-18\">done</mat-icon>\r\n            <span class=\"agree\">{{editMode ? 'update' : 'Save'}}</span>\r\n          </button>\r\n\r\n        </div>\r\n        <div fxFlex=\"15\">\r\n\r\n          <!--<button class=\"custom-button\" (click)=\"next()\" color=\"warn\" type=\"button\">-->\r\n          <!--Next-->\r\n          <!--</button>-->\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <!--<app-show-errors [control]=\"projectCostForm\"></app-show-errors>-->\r\n    <!--<pre>{{projectCostForm.value | json}}</pre>-->\r\n  </form>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/project-cost/project-cost.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/project-profile/project-cost/project-cost.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProjectCostComponent, sumOfSourceFinanceValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCostComponent", function() { return ProjectCostComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sumOfSourceFinanceValidator", function() { return sumOfSourceFinanceValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Services_project_cost_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/project-cost.service */ "./src/app/Services/project-cost.service.ts");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _custor_validation_custom_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @custor/validation/custom/form */ "./src/@custor/validation/custom/form.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Services/project-profile.service */ "./src/app/Services/project-profile.service.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _model_lookupData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../model/lookupData */ "./src/app/model/lookupData.ts");
/* harmony import */ var _custor_const_consts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @custor/const/consts */ "./src/@custor/const/consts.ts");
/* harmony import */ var _custor_helpers_compare__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @custor/helpers/compare */ "./src/@custor/helpers/compare.ts");
/* harmony import */ var _Services_application_setting_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../Services/application-setting.service */ "./src/app/Services/application-setting.service.ts");
/* harmony import */ var app_model_security_permission_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/model/security/permission.model */ "./src/app/model/security/permission.model.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../@custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");

















var ProjectCostComponent = /** @class */ (function () {
    function ProjectCostComponent(formBuilder, formService, settingService, toastr, route, snackbar, errMsg, accountService, projectProfileService, projectCostService, dataSharing) {
        this.formBuilder = formBuilder;
        this.formService = formService;
        this.settingService = settingService;
        this.toastr = toastr;
        this.route = route;
        this.snackbar = snackbar;
        this.errMsg = errMsg;
        this.accountService = accountService;
        this.projectProfileService = projectProfileService;
        this.projectCostService = projectCostService;
        this.dataSharing = dataSharing;
        this.editMode = false;
        this.loading = false;
        this.formErrors = {
            LandCost: '',
            LandCostInBirr: '',
            BuildingCost: '',
            BuildingCostInBirr: '',
            MachineryCost: '',
            MachineryCostInBirr: '',
            TransportCost: '',
            TransportCostInBirr: '',
            OfficeEquipmentCost: '',
            OfficeEquipmentCostInBirr: '',
            OtherCapitalCost: '',
            OtherCapitalCostInBirr: '',
            InitialWorkingCapitalCost: '',
            InitialWorkingCapitalCostInBirr: '',
            EquityFinance: '',
            LoanFinance: '',
            OtherSourceFinance: '',
            OtherSourceDescription: '',
            Unit: '',
            ExchangeRate: '',
            CapitalRegistrationDatetime: '',
            ActualCostInForeign: '',
            Quarter: '',
            ReagistrationYear: '',
            Remark: ''
        };
        this.currencyTypes = [];
        this.projectStatus = [];
        this.Quarter = [];
        this.projectCost = {};
    }
    ProjectCostComponent.prototype.ngOnInit = function () {
        this.ServiceId = this.route.snapshot.params['ServiceId'];
        this.InvestorId = this.route.snapshot.params['InvestorId'];
        this.workFlowId = this.route.snapshot.params['workFlowId'];
        this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
        this.projectId = this.route.snapshot.params['ProjectId'];
        if (this.ServiceId == '1234') {
            // this.projectId = this.route.snapshot.params['ProjectId']
            this.getProjectStatus(this.projectId);
        }
        if (this.projectId > 1 && this.ServiceId == '13') {
            this.getProjectCost();
        }
        this.initStaticData('en');
        this.formBuild();
        this.getExchangeRate();
        this.formControlValueChanged();
    };
    ProjectCostComponent.prototype.getProjectCost = function () {
        var _this = this;
        this.projectCostService.getCostByProjectId(this.projectId).subscribe(function (result) {
            if (typeof result !== 'undefined') {
                _this.editMode = true;
                _this.costId = result.ProjectCostId;
                _this.projectCostForm.patchValue(result);
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    ProjectCostComponent.prototype.initStaticData = function (currentLang) {
        var _this = this;
        var quan = new _model_lookupData__WEBPACK_IMPORTED_MODULE_11__["CurrencyType"]();
        _custor_const_consts__WEBPACK_IMPORTED_MODULE_12__["CurrencyTypes"].forEach(function (pair) {
            quan = {
                Id: pair.Id.toString(),
                DescriptionEnglish: pair.DescriptionEnglish,
                Description: pair.Description
            };
            _this.currencyTypes.push(quan);
        });
        var projectStatus1 = new _model_lookupData__WEBPACK_IMPORTED_MODULE_11__["ProjectStatusModel"]();
        _custor_const_consts__WEBPACK_IMPORTED_MODULE_12__["ProjectStatus"].forEach(function (pair) {
            projectStatus1 = {
                Id: pair.Id.toString(),
                DescriptionEnglish: pair.DescriptionEnglish,
                Description: pair.Description
            };
            _this.projectStatus.push(projectStatus1);
        });
        var Quarter1 = new _model_lookupData__WEBPACK_IMPORTED_MODULE_11__["QuarterModel"]();
        _custor_const_consts__WEBPACK_IMPORTED_MODULE_12__["Quarter"].forEach(function (pair) {
            Quarter1 = {
                Id: pair.Id.toString(),
                DescriptionEnglish: pair.DescriptionEnglish,
                Description: pair.Description
            };
            _this.Quarter.push(Quarter1);
        });
    };
    ProjectCostComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formService.markFormGroupTouched(this.projectCostForm);
        if (this.projectCostForm.valid) {
            if (!this.editMode) {
                this.projectCostService
                    .create(this.projectCostForm.value)
                    .subscribe(function (result) {
                    setTimeout(function () { return _this.dataSharing.steeperIndex.next(5); }, 0);
                    setTimeout(function () { return _this.dataSharing.currentIndex.next(5); }, 0);
                    _this.notification('saved');
                });
            }
            else {
                this.projectCostService
                    .update(this.projectCostForm.value, this.costId)
                    .subscribe(function (result) {
                    _this.notification('updated');
                    setTimeout(function () { return _this.dataSharing.steeperIndex.next(5); }, 0);
                    setTimeout(function () { return _this.dataSharing.currentIndex.next(5); }, 0);
                });
            }
        }
        else {
            this.formErrors = this.formService.validateForm(this.projectCostForm, this.formErrors, false);
        }
    };
    ProjectCostComponent.prototype.onClear = function () {
        this.projectCostForm.reset();
    };
    ProjectCostComponent.prototype.formBuild = function () {
        var _this = this;
        this.projectCostForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            ProjectId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.projectId),
            workFlowId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.workFlowId),
            LandCost: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)])),
            LandCostInBirr: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)])),
            BuildingCost: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)])),
            BuildingCostInBirr: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)])),
            MachineryCost: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)])),
            MachineryCostInBirr: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)])),
            TransportCost: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)])),
            TransportCostInBirr: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)])),
            OfficeEquipmentCost: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)])),
            OfficeEquipmentCostInBirr: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)])),
            OtherCapitalCost: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)])),
            OtherCapitalCostInBirr: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)])),
            InitialWorkingCapitalCost: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)])),
            InitialWorkingCapitalCostInBirr: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)])),
            EquityFinance: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            LoanFinance: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)])),
            OtherSourceFinance: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            OtherSourceDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            ActualCostInForeign: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            ExchangeRate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](28.5, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(26),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(35)
            ])),
            Unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('1'),
            Quarter: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            CapitalRegistrationDatetime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            ReagistrationYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            ProjectStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            // ExchangeRate: new FormControl(""),
            Remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Total: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            TotalInBirr: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        }, { validators: sumOfSourceFinanceValidator });
        this.projectCostForm.valueChanges.subscribe(function (data) {
            _this.formErrors = _this.formService.validateForm(_this.projectCostForm, _this.formErrors, true);
        });
        this.projectCostForm
            .get('Total')
            .valueChanges.subscribe(function (intLegal) {
            _this.sumOfPlan = intLegal;
        });
    };
    ProjectCostComponent.prototype.getProjectCostData = function () {
        var formModel = this.projectCostForm.value;
        return {
            ProjectId: this.projectId,
            workFlowId: this.workFlowId,
            LandCost: formModel.LandCost,
            LandCostInBirr: formModel.LandCostInBirr,
            BuildingCost: formModel.BuildingCost,
            BuildingCostInBirr: formModel.BuildingCostInBirr,
            MachineryCost: formModel.MachineryCost,
            MachineryCostInBirr: formModel.MachineryCostInBirr,
            TransportCost: formModel.TransportCost,
            TransportCostInBirr: formModel.TransportCostInBirr,
            OfficeEquipmentCost: formModel.OfficeEquipmentCost,
            OfficeEquipmentCostInBirr: formModel.OfficeEquipmentCostInBirr,
            ActualCostInForeign: formModel.ActualCostInForeign,
            // ETBExchangeRate: formModel.ETBExchangeRate,
            OtherCapitalCost: formModel.OtherCapitalCost,
            OtherCapitalCostInBirr: formModel.OtherCapitalCostInBirr,
            InitialWorkingCapitalCost: formModel.InitialWorkingCapitalCost,
            InitialWorkingCapitalCostInBirr: formModel.InitialWorkingCapitalCostInBirr,
            EquityFinance: formModel.sourceOfFinance.EquityFinance,
            LoanFinance: formModel.sourceOfFinance.LoanFinance,
            OtherSourceFinance: formModel.sourceOfFinance.OtherSourceFinance,
            OtherSourceDescription: formModel.OtherSourceDescription,
            Unit: formModel.Unit,
            Quarter: formModel.Quarter,
            CapitalRegistrationDatetime: formModel.CapitalRegistrationDatetime,
            RegistrationYear: formModel.RegistrationYear,
            ProjectStatus: formModel.ProjectStatus,
            ExchangeRate: formModel.ExchangeRate,
            Remark: formModel.Remark
        };
    };
    ProjectCostComponent.prototype.compareIds = function (id1, id2) {
        var a1 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_13__["determineId"])(id1);
        var a2 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_13__["determineId"])(id2);
        return a1 === a2;
    };
    ProjectCostComponent.prototype.ngOnDestroy = function () {
        // this.subscription.unsubscribe();
    };
    ProjectCostComponent.prototype.notification = function (message) {
        this.toastr.success(" Succesfully " + message + " Data.!", 'Success');
        this.loading = false;
        this.snackbar.open(" Succesfully " + message + " Data.!", 'Close', {
            duration: 3000
        });
    };
    ProjectCostComponent.prototype.getExchangeRate = function () {
        var _this = this;
        this.settingService.getOneById(1).subscribe(function (result) {
            _this.ExchangeRate = result.Value;
        });
    };
    ProjectCostComponent.prototype.ngAfterContentChecked = function () {
        // this.projectCostForm.patchValue({
        //   ProjectId: localStorage.getItem('ProjectId')
        // });
        // this.projectCostForm.patchValue({
        //   workFlowId: localStorage.getItem('workFlowId')
        // });
        // this.projectCostForm.patchValue({
        //   ExchangeRate: this.ExchangeRate
        // });
        this.sumAll();
        this.sumAllInBirr();
    };
    ProjectCostComponent.prototype.next = function () {
        this.dataSharing.steeperIndex.next(4);
    };
    ProjectCostComponent.prototype.getProjectStatus = function (projectId) {
        var _this = this;
        this.projectProfileService.getProjectStatus(projectId).subscribe(function (result) {
            _this.projectCostForm.patchValue({
                ProjectStatus: result.toString()
            });
        });
    };
    ProjectCostComponent.prototype.formControlValueChanged = function () {
    };
    ProjectCostComponent.prototype.sumAllInBirr = function () {
        var totalInBirr = this.projectCostForm.get('LandCostInBirr').value +
            this.projectCostForm.get('BuildingCostInBirr').value +
            this.projectCostForm.get('MachineryCostInBirr').value +
            this.projectCostForm.get('TransportCostInBirr').value +
            this.projectCostForm.get('OfficeEquipmentCostInBirr').value +
            this.projectCostForm.get('OtherCapitalCostInBirr').value +
            this.projectCostForm.get('InitialWorkingCapitalCostInBirr').value;
        this.projectCostForm.patchValue({
            TotalInBirr: totalInBirr
        });
    };
    ProjectCostComponent.prototype.sumAll = function () {
        var total = this.projectCostForm.get('LandCost').value +
            this.projectCostForm.get('BuildingCost').value +
            this.projectCostForm.get('MachineryCost').value +
            this.projectCostForm.get('TransportCost').value +
            this.projectCostForm.get('OfficeEquipmentCost').value +
            this.projectCostForm.get('OtherCapitalCost').value +
            this.projectCostForm.get('InitialWorkingCapitalCost').value;
        this.projectCostForm.patchValue({
            Total: total
        });
    };
    Object.defineProperty(ProjectCostComponent.prototype, "canViewTasks", {
        get: function () {
            return this.accountService.userHasPermission(app_model_security_permission_model__WEBPACK_IMPORTED_MODULE_15__["Permission"].viewServiceList);
        },
        enumerable: true,
        configurable: true
    });
    ProjectCostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-cost',
            template: __webpack_require__(/*! ./project-cost.component.html */ "./src/app/components/project-profile/project-cost/project-cost.component.html"),
            styles: [__webpack_require__(/*! ./project-cost.component.css */ "./src/app/components/project-profile/project-cost/project-cost.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _custor_validation_custom_form__WEBPACK_IMPORTED_MODULE_6__["FormService"],
            _Services_application_setting_service__WEBPACK_IMPORTED_MODULE_14__["ApplicationSettingService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_9__["ErrorMessage"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_16__["AccountService"],
            _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_8__["ProjectProfileService"],
            _Services_project_cost_service__WEBPACK_IMPORTED_MODULE_4__["ProjectCostService"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_5__["DataSharingService"]])
    ], ProjectCostComponent);
    return ProjectCostComponent;
}());

var sumOfSourceFinanceValidator = function (control) {
    var loanFinance = control.get('LoanFinance');
    var equityFinance = control.get('EquityFinance');
    var otherSourceFinance = control.get('OtherSourceFinance');
    var total = control.get('Total');
    var sourceTotal = loanFinance.value + equityFinance.value + otherSourceFinance.value;
    return sourceTotal !== total.value ? { sumIsNotEqual: true } : null;
};


/***/ })

}]);
//# sourceMappingURL=default~components-project-profile-project-cost-ProjectCost-module~components-project-profile-projec~3cccdb7d.js.map