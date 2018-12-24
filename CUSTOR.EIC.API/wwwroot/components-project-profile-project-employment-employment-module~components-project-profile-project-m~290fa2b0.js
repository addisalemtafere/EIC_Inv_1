(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-project-profile-project-employment-employment-module~components-project-profile-project-m~290fa2b0"],{

/***/ "./src/app/components/project-profile/project-employment/employment-routing.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-employment/employment-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: EmploymentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmploymentRoutingModule", function() { return EmploymentRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_employment_list_project_employment_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-employment-list/project-employment-list.component */ "./src/app/components/project-profile/project-employment/project-employment-list/project-employment-list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _project_employment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-employment.component */ "./src/app/components/project-profile/project-employment/project-employment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var emRoutes = [
    { path: '', component: _project_employment_list_project_employment_list_component__WEBPACK_IMPORTED_MODULE_1__["ProjectEmploymentListComponent"] },
    { path: ':id', component: _project_employment_component__WEBPACK_IMPORTED_MODULE_3__["ProjectEmploymentComponent"] },
];
var EmploymentRoutingModule = /** @class */ (function () {
    function EmploymentRoutingModule() {
    }
    EmploymentRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(emRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], EmploymentRoutingModule);
    return EmploymentRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-employment/employment.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-employment/employment.module.ts ***!
  \************************************************************************************/
/*! exports provided: EmploymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmploymentModule", function() { return EmploymentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _employment_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employment-routing.module */ "./src/app/components/project-profile/project-employment/employment-routing.module.ts");
/* harmony import */ var _project_employment_list_project_employment_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-employment-list/project-employment-list.component */ "./src/app/components/project-profile/project-employment/project-employment-list/project-employment-list.component.ts");
/* harmony import */ var _project_employment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-employment.component */ "./src/app/components/project-profile/project-employment/project-employment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var EmploymentModule = /** @class */ (function () {
    function EmploymentModule() {
    }
    EmploymentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _employment_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmploymentRoutingModule"]
            ],
            declarations: [_project_employment_list_project_employment_list_component__WEBPACK_IMPORTED_MODULE_4__["ProjectEmploymentListComponent"], _project_employment_component__WEBPACK_IMPORTED_MODULE_5__["ProjectEmploymentComponent"]],
            exports: [_project_employment_list_project_employment_list_component__WEBPACK_IMPORTED_MODULE_4__["ProjectEmploymentListComponent"], _project_employment_component__WEBPACK_IMPORTED_MODULE_5__["ProjectEmploymentComponent"]]
        })
    ], EmploymentModule);
    return EmploymentModule;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-employment/project-employment-list/project-employment-list.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-employment/project-employment-list/project-employment-list.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table style=\"height: 320px;display: block;overflow: auto;\" class=\"scrollbar table full-width\">\r\n  <thead>\r\n  <th>No</th>\r\n  <th>Permanent Female</th>\r\n  <th>Permanent Male</th>\r\n  <th>Permanent Foreign Female</th>\r\n  <th>Permanent Foreign Male</th>\r\n  <th>Temporary Female</th>\r\n  <th>Temporary Male</th>\r\n  <th>Temporary Foreign Female</th>\r\n  <th>Temporary Foreign Male</th>\r\n  <th>Remark</th>\r\n\r\n  </thead>\r\n\r\n  <tbody style=\"overflow: auto;\">\r\n  <tr class=\"planned\">\r\n    <td></td>\r\n    <td>{{plannedEmploymentList?.PermanentFemale}}</td>\r\n    <td>{{plannedEmploymentList?.PermanentMale}}</td>\r\n    <td>{{plannedEmploymentList?.PermanentForeignFemale}}</td>\r\n    <td>{{plannedEmploymentList?.PermanentForeignMale}}</td>\r\n    <td>{{plannedEmploymentList?.TemporaryFemale}}</td>\r\n    <td>{{plannedEmploymentList?.TemporaryMale}}</td>\r\n    <td>{{plannedEmploymentList?.TemporaryForeignFemale}}</td>\r\n    <td>{{plannedEmploymentList?.TemporaryForeignMale}}</td>\r\n    <td>{{plannedEmploymentList?.Remark}}</td>\r\n  </tr>\r\n  <tr *ngFor=\"let employment of employmentList;let i=index;\">\r\n    <td>{{i+1}}</td>\r\n    <td>{{employment.PermanentFemale}}</td>\r\n    <td>{{employment.PermanentMale}}</td>\r\n    <td>{{employment.PermanentForeignFemale}}</td>\r\n    <td>{{employment.PermanentForeignMale}}</td>\r\n    <td>{{employment.TemporaryFemale}}</td>\r\n    <td>{{employment.TemporaryMale}}</td>\r\n    <td>{{employment.TemporaryForeignFemale}}</td>\r\n    <td>{{employment.TemporaryForeignMale}}</td>\r\n    <td>{{employment.Remark}}</td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/project-employment/project-employment-list/project-employment-list.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-employment/project-employment-list/project-employment-list.component.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table td {\n  padding: 4px 7px 4px 5px;\n  font-size: 13px;\n  border-top: 1px solid #FAFAFA; }\n\n.table th {\n  padding: 4px 7px 4px 5px;\n  font-size: 13px;\n  border-top: 1px solid #FAFAFA; }\n\ntable tbody tr:nth-child(2) td {\n  border: 1px solid #0d8055;\n  background-color: #0d8055;\n  color: white;\n  font-weight: bolder; }\n"

/***/ }),

/***/ "./src/app/components/project-profile/project-employment/project-employment-list/project-employment-list.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-employment/project-employment-list/project-employment-list.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: ProjectEmploymentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectEmploymentListComponent", function() { return ProjectEmploymentListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_project_employment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Services/project-employment.service */ "./src/app/Services/project-employment.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectEmploymentListComponent = /** @class */ (function () {
    function ProjectEmploymentListComponent(employmentService, route) {
        this.employmentService = employmentService;
        this.route = route;
    }
    ProjectEmploymentListComponent.prototype.ngOnInit = function () {
        this.ProjectId = this.route.snapshot.params['ProjectId'];
        // console.log(this.ProjectId)
        this.getEmploymentAfterCare();
        this.getPlannedEmployment();
    };
    ProjectEmploymentListComponent.prototype.getEmploymentAfterCare = function () {
        var _this = this;
        this.employmentService.getAllActualEmployment(this.ProjectId)
            .subscribe(function (result) {
            _this.employmentList = result;
        });
    };
    ProjectEmploymentListComponent.prototype.getPlannedEmployment = function () {
        var _this = this;
        this.employmentService.employmentByProject(this.ProjectId)
            .subscribe(function (result) {
            _this.plannedEmploymentList = result;
        });
    };
    ProjectEmploymentListComponent.prototype.ngAfterContentChecked = function () {
    };
    ProjectEmploymentListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-employment-list',
            template: __webpack_require__(/*! ./project-employment-list.component.html */ "./src/app/components/project-profile/project-employment/project-employment-list/project-employment-list.component.html"),
            styles: [__webpack_require__(/*! ./project-employment-list.component.scss */ "./src/app/components/project-profile/project-employment/project-employment-list/project-employment-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_project_employment_service__WEBPACK_IMPORTED_MODULE_1__["ProjectEmploymentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProjectEmploymentListComponent);
    return ProjectEmploymentListComponent;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-employment/project-employment.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-employment/project-employment.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/project-profile/project-employment/project-employment.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-employment/project-employment.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"margin-2\">\r\n  <mat-card-subtitle class=\"sub-title\">\r\n    Project Employment\r\n    <mat-divider></mat-divider>\r\n  </mat-card-subtitle>\r\n  <form [formGroup]=\"employmetForm\" novalidate>\r\n    <mat-card-content>\r\n      <div style=\"margin-bottom: 40px;\" *ngIf=\"ServiceId=='1234'\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\r\n           fxLayoutGap=\"2em\">\r\n        <div class=\"block\" fxFlex=\"\" style=\"margin-left: 20px\">\r\n          <mat-form-field>\r\n            <mat-label>Quarter</mat-label>\r\n            <mat-select formControlName=\"Quarter\" required>\r\n              <mat-option *ngFor=\"let row of Quarter\" [value]=\"row.Id\">\r\n                <span>{{row.DescriptionEnglish}}</span>\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n        </div>\r\n        <div class=\"block\" fxFlex>\r\n          <mat-form-field>\r\n            <input placeholder=\"Registration Year* :\"\r\n                   matInput\r\n                   formControlName=\"RegistrationYear\"\r\n                   [matDatepicker]=\"RegistrationYear\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"RegistrationYear\"></mat-datepicker-toggle>\r\n            <mat-datepicker #RegistrationYear></mat-datepicker>\r\n            <mat-error align=\"start\" *ngIf=\"formErrors.RegistrationYear\" class=\"form__error\">\r\n              {{ formErrors.RegistrationYear }}\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <!--<div class=\"block\" fxFlex=\"\">-->\r\n        <!---->\r\n        <!--<mat-form-field>-->\r\n        <!--<input #OSF type=\"number\" formControlName=\"CapitalRegistrationDatetime\" matInput-->\r\n        <!--placeholder=\"Capital Registration Datetime * :\">-->\r\n        <!---->\r\n        <!--</mat-form-field>-->\r\n        <!--</div>-->\r\n        <div class=\"block\" fxFlex=\"\">\r\n\r\n          <mat-form-field>\r\n            <mat-select [disabled]=\"true\" formControlName=\"ProjectStatus\" required>\r\n              <option value=\"0\">--Select--</option>\r\n              <label>Project Status</label>\r\n              <mat-option *ngFor=\"let status of projectStatus\" [value]=\"status.Id\">\r\n                <span>{{status.DescriptionEnglish}}</span>\r\n              </mat-option>\r\n            </mat-select>\r\n\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <mat-card-subtitle *ngIf=\"ServiceId=='1234'\" class=\"sub-title\">\r\n        Detail\r\n        <mat-divider></mat-divider>\r\n      </mat-card-subtitle>\r\n      <span>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\">\r\n\r\n        <div fxLayout=\"row wrap\">\r\n          <span class=\"padding-10\">Permanent</span>\r\n          <div class=\"block\" fxFlex>\r\n            <mat-form-field>\r\n              <input name=\"PermanentFemale\"\r\n                     matInput formControlName=\"PermanentFemale\"\r\n                     type=\"number\"\r\n                     #pf\r\n                     placeholder=\"Female * :\">\r\n              <mat-error align=\"start\" *ngIf=\"formErrors.PermanentFemale\" class=\"form__error\">{{\r\n                formErrors.PermanentFemale }}\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"block\" fxFlex>\r\n            <mat-form-field>\r\n              <input name=\"PermanentMale\"\r\n                     matInput formControlName=\"PermanentMale\"\r\n                     placeholder=\"Male * :\"\r\n                     #pm\r\n                     type=\"number\">\r\n              <mat-error align=\"start\" *ngIf=\"formErrors.PermanentMale\" class=\"form__error\">{{\r\n                formErrors.PermanentMale\r\n                }}\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <mat-form-field>\r\n              <input formControlName=\"PermanentForeignFemale\"\r\n                     type=\"number\"\r\n                     matInput\r\n                     #pff\r\n                     placeholder=\"Foreign Female * :\">\r\n\r\n              <mat-error align=\"start\" *ngIf=\"formErrors.PermanentForeignFemale\" class=\"form__error\">\r\n                {{ formErrors.PermanentForeignFemale}}\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <mat-form-field>\r\n              <input formControlName=\"PermanentForeignMale\"\r\n                     matInput\r\n                     type=\"number\"\r\n                     #pfm\r\n                     placeholder=\"Foreign Male * :\">\r\n              <mat-error align=\"start\" *ngIf=\"formErrors.PermanentForeignMale\" class=\"form__error\">{{\r\n                formErrors.PermanentForeignMale}}\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <mat-form-field style=\"width: 50px!important;\">\r\n              <input formControlName=\"TotalPermanent\"\r\n                     value=\"{{pf.value*1+pff.value*1+pm.value*1+pfm.value*1}}\"\r\n                     type=\"number\"\r\n                     #totalPermanent\r\n                     matInput placeholder=\"Total\">\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\">\r\n\r\n        <div fxLayout=\"row wrap\">\r\n          <div class=\"padding-10\">Temporary</div>\r\n          <div class=\"block\" fxFlex>\r\n            <mat-form-field>\r\n              <input name=\"TemporaryFemale\"\r\n                     matInput\r\n                     #Tf\r\n                     formControlName=\"TemporaryFemale\"\r\n                     placeholder=\"Female * :\"\r\n                     type=\"number\">\r\n              <mat-error align=\"start\" *ngIf=\"formErrors.TemporaryFemale\" class=\"form__error\">{{\r\n                formErrors.TemporaryFemale }}\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <mat-form-field>\r\n              <input formControlName=\"TemporaryMale\"\r\n                     #TM\r\n                     type=\"number\"\r\n                     matInput placeholder=\"male * :\">\r\n              <mat-error align=\"start\" *ngIf=\"formErrors.TemporaryMale\" class=\"form__error\">{{\r\n                formErrors.TemporaryMale}}\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <mat-form-field>\r\n              <input formControlName=\"TemporaryForeignFemale\"\r\n                     #TFF\r\n                     type=\"number\"\r\n                     matInput placeholder=\"Foreign Female * :\">\r\n              <mat-error align=\"start\"\r\n                         *ngIf=\"formErrors.TemporaryForeignFemale\"\r\n                         class=\"form__error\">{{\r\n                formErrors.TemporaryForeignFemale}}\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <mat-form-field>\r\n              <input formControlName=\"TemporaryForeignMale\"\r\n                     #TFM\r\n                     type=\"number\"\r\n                     matInput placeholder=\"Foreign Male * :\">\r\n              <mat-error align=\"start\" *ngIf=\"formErrors.TemporaryForeignMale\"\r\n                         class=\"form__error\">{{\r\n                formErrors.TemporaryForeignMale}}\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <mat-form-field style=\"width: 50px!important;\">\r\n              <input formControlName=\"TotalTempo\"\r\n                     type=\"number\"\r\n                     #TotalTempo\r\n                     value=\"{{Tf.value*1+TM.value*1+TFF.value*1+TFM.value*1}}\"\r\n                     matInput placeholder=\"Total\">\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"end\" fxLayoutGap=\"2em\">\r\n        <div class=\"block\" fxFlexAlign=\"end\">\r\n          <mat-form-field>\r\n            <mat-label>Total Employee</mat-label>\r\n            <input matInput\r\n                   value=\"{{TotalTempo.value*1+totalPermanent.value*1}}\"\r\n                   formControlName=\"totalEmployee\"\r\n                   type=\"number\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      </span>\r\n\r\n      <span *ngIf=\"ServiceId=='1023'\">\r\n       <mat-card-subtitle>\r\n        Current\r\n        <mat-divider></mat-divider>\r\n        </mat-card-subtitle>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\">\r\n\r\n        <div fxLayout=\"row wrap\">\r\n          <span class=\"padding-10\">Permanent</span>\r\n          <div class=\"block\" fxFlex>\r\n            <mat-form-field>\r\n              <input name=\"PermanentFemale\"\r\n                     matInput formControlName=\"PermanentFemale\"\r\n                     type=\"number\"\r\n                     #pf\r\n                     placeholder=\"Female * :\">\r\n              <mat-error align=\"start\" *ngIf=\"formErrors.PermanentFemale\" class=\"form__error\">{{\r\n                formErrors.PermanentFemale }}\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"block\" fxFlex>\r\n            <mat-form-field>\r\n              <input name=\"PermanentMale\"\r\n                     matInput formControlName=\"PermanentMale\"\r\n                     placeholder=\"Male * :\"\r\n                     #pm\r\n                     type=\"number\">\r\n              <mat-error align=\"start\" *ngIf=\"formErrors.PermanentMale\" class=\"form__error\">{{\r\n                formErrors.PermanentMale\r\n                }}\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <mat-form-field>\r\n              <input formControlName=\"PermanentForeignFemale\"\r\n                     type=\"number\"\r\n                     matInput\r\n                     #pff\r\n                     placeholder=\"Foreign Female * :\">\r\n\r\n              <mat-error align=\"start\" *ngIf=\"formErrors.PermanentForeignFemale\" class=\"form__error\">\r\n                {{ formErrors.PermanentForeignFemale}}\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <mat-form-field>\r\n              <input formControlName=\"PermanentForeignMale\"\r\n                     matInput\r\n                     type=\"number\"\r\n                     #pfm\r\n                     placeholder=\"Foreign Male * :\">\r\n              <mat-error align=\"start\" *ngIf=\"formErrors.PermanentForeignMale\" class=\"form__error\">{{\r\n                formErrors.PermanentForeignMale}}\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <mat-form-field style=\"width: 50px!important;\">\r\n              <input formControlName=\"TotalPermanent\"\r\n                     value=\"{{pf.value*1+pff.value*1+pm.value*1+pfm.value*1}}\"\r\n                     type=\"number\"\r\n                     #totalPermanent\r\n                     matInput placeholder=\"Total\">\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\">\r\n\r\n        <div fxLayout=\"row wrap\">\r\n          <div class=\"padding-10\">Temporary</div>\r\n          <div class=\"block\" fxFlex>\r\n            <mat-form-field>\r\n              <input name=\"TemporaryFemale\"\r\n                     matInput\r\n                     #Tf\r\n                     formControlName=\"TemporaryFemale\"\r\n                     placeholder=\"Female * :\"\r\n                     type=\"number\">\r\n              <mat-error align=\"start\" *ngIf=\"formErrors.TemporaryFemale\" class=\"form__error\">{{\r\n                formErrors.TemporaryFemale }}\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <mat-form-field>\r\n              <input formControlName=\"TemporaryMale\"\r\n                     #TM\r\n                     type=\"number\"\r\n                     matInput placeholder=\"male * :\">\r\n              <mat-error align=\"start\" *ngIf=\"formErrors.TemporaryMale\" class=\"form__error\">{{\r\n                formErrors.TemporaryMale}}\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <mat-form-field>\r\n              <input formControlName=\"TemporaryForeignFemale\"\r\n                     #TFF\r\n                     type=\"number\"\r\n                     matInput placeholder=\"Foreign Female * :\">\r\n              <mat-error align=\"start\"\r\n                         *ngIf=\"formErrors.TemporaryForeignFemale\"\r\n                         class=\"form__error\">{{\r\n                formErrors.TemporaryForeignFemale}}\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <mat-form-field>\r\n              <input formControlName=\"TemporaryForeignMale\"\r\n                     #TFM\r\n                     type=\"number\"\r\n                     matInput placeholder=\"Foreign Male * :\">\r\n              <mat-error align=\"start\" *ngIf=\"formErrors.TemporaryForeignMale\"\r\n                         class=\"form__error\">{{\r\n                formErrors.TemporaryForeignMale}}\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <mat-form-field style=\"width: 50px!important;\">\r\n              <input formControlName=\"TotalTempo\"\r\n                     type=\"number\"\r\n                     #TotalTempo\r\n                     value=\"{{Tf.value*1+TM.value*1+TFF.value*1+TFM.value*1}}\"\r\n                     matInput placeholder=\"Total\">\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"end\" fxLayoutGap=\"2em\">\r\n        <div class=\"block\" fxFlexAlign=\"end\">\r\n          <mat-form-field>\r\n            <mat-label>Total Employee</mat-label>\r\n            <input matInput\r\n                   value=\"{{TotalTempo.value*1+totalPermanent.value*1}}\"\r\n                   formControlName=\"totalEmployee\"\r\n                   type=\"number\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      </span>\r\n\r\n    </mat-card-content>\r\n    <mat-divider></mat-divider>\r\n    <div fxLayoutGap=\"3em\" align=\"center\">\r\n      <div style=\"padding: 20px\" fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"2em\">\r\n\r\n        <div fxFlex=\"15\">\r\n\r\n          <!--<button class=\"custom-button\" (click)=\"next()\" color=\"warn\" type=\"button\">-->\r\n          <!--Back-->\r\n          <!--</button>-->\r\n        </div>\r\n        <div style=\"text-align: center\" fxFlex=\"67\" fxFlexAlign=\"center\">\r\n          <button [disabled]=\"!employmetForm.valid\"\r\n                  mat-raised-button=\"\"\r\n                  color=\"primary\"\r\n                  mat-button (click)=\"onSubmit()\">\r\n            <mat-icon class=\"mat-18\">done</mat-icon>\r\n            <span class=\"agree\">{{editMode ? 'update' : 'Save'}}</span>\r\n          </button>\r\n          <!--<button style=\"margin-left: 10px\" mat-raised-button=\"\" color=\"warn\" (click)=\"onClear()\" type=\"button\">-->\r\n          <!--<mat-icon class=\"mat-18\">clear_all</mat-icon>-->\r\n          <!--</button>-->\r\n        </div>\r\n        <div fxFlex=\"15\">\r\n\r\n          <!--<button class=\"custom-button\" (click)=\"next()\" color=\"warn\" type=\"button\">-->\r\n          <!--Next-->\r\n          <!--</button>-->\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </form>\r\n</mat-card>\r\n<button class=\"custom-button\" (click)=\"back()\" color=\"warn\" type=\"button\">\r\n  back\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/project-employment/project-employment.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-employment/project-employment.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ProjectEmploymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectEmploymentComponent", function() { return ProjectEmploymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_project_employment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/project-employment.service */ "./src/app/Services/project-employment.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _custor_validation_custom_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @custor/validation/custom/form */ "./src/@custor/validation/custom/form.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Services/project-profile.service */ "./src/app/Services/project-profile.service.ts");
/* harmony import */ var _model_lookupData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../model/lookupData */ "./src/app/model/lookupData.ts");
/* harmony import */ var _custor_const_consts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @custor/const/consts */ "./src/@custor/const/consts.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ProjectEmploymentComponent = /** @class */ (function () {
    function ProjectEmploymentComponent(formBuilder, formService, errMsg, route, projectProfileService, snackbar, dataSharingService, toastr, dataSharing, employmentService) {
        this.formBuilder = formBuilder;
        this.formService = formService;
        this.errMsg = errMsg;
        this.route = route;
        this.projectProfileService = projectProfileService;
        this.snackbar = snackbar;
        this.dataSharingService = dataSharingService;
        this.toastr = toastr;
        this.dataSharing = dataSharing;
        this.employmentService = employmentService;
        this.editMode = false;
        this.loading = false;
        this.formErrors = {
            PermanentFemale: 'Must be positive number!',
            PermanentMale: '',
            TemporaryFemale: '',
            TemporaryMale: '',
            PermanentForeignFemale: '',
            PermanentForeignMale: '',
            TemporaryForeignFemale: '',
            TemporaryForeignMale: '',
            Quarter: '',
            RegistrationYear: '',
        };
        this.projectStatus = [];
        this.Quarter = [];
        this.employmentData = {};
    }
    ProjectEmploymentComponent.prototype.ngOnInit = function () {
        this.ServiceId = this.route.snapshot.params['ServiceId'];
        this.InvestorId = this.route.snapshot.params['InvestorId'];
        this.workFlowId = this.route.snapshot.params['workFlowId'];
        this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
        this.projectId = this.route.snapshot.params['ProjectId'];
        if (this.ServiceId === '1234') {
            this.getProjectStatus(this.projectId);
        }
        this.initStaticData('en');
        if (this.projectId > 1 && this.ServiceId == '13') {
            this.getEmployment();
        }
        this.formBuild();
    };
    ProjectEmploymentComponent.prototype.getEmployment = function () {
        var _this = this;
        this.employmentService.employmentByProject(this.projectId).subscribe(function (result) {
            if (typeof (result) !== 'undefined') {
                _this.editMode = true;
                _this.empId = result.ProjectEmploymentId;
                _this.employmetForm.patchValue(result);
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    ProjectEmploymentComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formService.markFormGroupTouched(this.employmetForm);
        if (this.employmetForm.valid) {
            if (!this.editMode) {
                this.employmentService.create(this.employmetForm.value)
                    .subscribe(function (result) {
                    setTimeout(function () { return _this.dataSharing.steeperIndex.next(6); }, 0);
                    setTimeout(function () { return _this.dataSharing.currentIndex.next(6); }, 0);
                    _this.notification('saved');
                }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
            }
            else {
                this.employmentService.update(this.employmetForm.value, this.empId)
                    .subscribe(function (result) {
                    _this.notification('updated');
                }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
            }
        }
        else {
            this.formErrors = this.formService.validateForm(this.employmetForm, this.formErrors, false);
        }
    };
    ProjectEmploymentComponent.prototype.formBuild = function () {
        var _this = this;
        this.employmetForm = this.formBuilder.group({
            ProjectId: [this.projectId],
            workFlowId: [this.workFlowId],
            PermanentFemale: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]],
            PermanentMale: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]],
            TemporaryFemale: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]],
            TemporaryMale: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]],
            PermanentForeignFemale: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]],
            PermanentForeignMale: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]],
            TemporaryForeignFemale: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]],
            TemporaryForeignMale: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]],
            TotalPermanent: [{ value: '', disabled: true }],
            TotalTempo: [{ value: '', disabled: true }],
            Remark: [''],
            Quarter: [''],
            RegistrationYear: [''],
            ProjectStatus: [''],
            totalEmployee: [{ value: '', disabled: true }]
        });
        this.employmetForm.valueChanges.subscribe(function (data) {
            _this.formErrors = _this.formService.validateForm(_this.employmetForm, _this.formErrors, true);
        });
    };
    ProjectEmploymentComponent.prototype.notification = function (message) {
        this.toastr.success(" Succesfully " + message + " Data.!", 'Success');
        this.loading = false;
        this.snackbar.open(" Succesfully " + message + " Data.!", 'Close', {
            duration: 3000,
        });
    };
    ProjectEmploymentComponent.prototype.onClear = function () {
        this.employmetForm.reset();
    };
    ProjectEmploymentComponent.prototype.ngAfterContentChecked = function () {
        // this.employmetForm.patchValue({
        //   ProjectId: localStorage.getItem('ProjectId'),
        //   workFlowId: localStorage.getItem('workFlowId')
        // });
    };
    ProjectEmploymentComponent.prototype.next = function () {
        this.dataSharing.steeperIndex.next(5);
    };
    ProjectEmploymentComponent.prototype.back = function () {
        window.history.back();
    };
    ProjectEmploymentComponent.prototype.initStaticData = function (currentLang) {
        var _this = this;
        var projectStatus1 = new _model_lookupData__WEBPACK_IMPORTED_MODULE_10__["ProjectStatusModel"]();
        _custor_const_consts__WEBPACK_IMPORTED_MODULE_11__["ProjectStatus"].forEach(function (pair) {
            projectStatus1 = {
                'Id': pair.Id.toString(),
                'DescriptionEnglish': pair.DescriptionEnglish,
                'Description': pair.Description
            };
            _this.projectStatus.push(projectStatus1);
        });
        var Quarter1 = new _model_lookupData__WEBPACK_IMPORTED_MODULE_10__["QuarterModel"]();
        _custor_const_consts__WEBPACK_IMPORTED_MODULE_11__["Quarter"].forEach(function (pair) {
            Quarter1 = {
                'Id': pair.Id.toString(),
                'DescriptionEnglish': pair.DescriptionEnglish,
                'Description': pair.Description
            };
            _this.Quarter.push(Quarter1);
        });
    };
    ProjectEmploymentComponent.prototype.getProjectStatus = function (projectId) {
        var _this = this;
        this.projectProfileService.getProjectStatus(projectId)
            .subscribe(function (result) {
            _this.employmetForm.patchValue({
                ProjectStatus: result.toString()
            });
        });
    };
    ProjectEmploymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-employment',
            template: __webpack_require__(/*! ./project-employment.component.html */ "./src/app/components/project-profile/project-employment/project-employment.component.html"),
            styles: [__webpack_require__(/*! ./project-employment.component.css */ "./src/app/components/project-profile/project-employment/project-employment.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _custor_validation_custom_form__WEBPACK_IMPORTED_MODULE_6__["FormService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_9__["ProjectProfileService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_4__["DataSharingService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_4__["DataSharingService"],
            _Services_project_employment_service__WEBPACK_IMPORTED_MODULE_2__["ProjectEmploymentService"]])
    ], ProjectEmploymentComponent);
    return ProjectEmploymentComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-project-profile-project-employment-employment-module~components-project-profile-project-m~290fa2b0.js.map