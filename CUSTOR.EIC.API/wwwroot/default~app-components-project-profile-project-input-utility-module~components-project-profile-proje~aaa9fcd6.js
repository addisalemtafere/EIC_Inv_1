(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-components-project-profile-project-input-utility-module~components-project-profile-proje~aaa9fcd6"],{

/***/ "./src/app/components/project-profile/project-input/project-utility-list/project-utility-list.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-input/project-utility-list/project-utility-list.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table style=\"height: 320px;display: block;overflow: auto;\" class=\"scrollbar table full-width\">\r\n  <thead>\r\n  <th>No</th>\r\n  <th>Electric Power</th>\r\n  <th>Water</th>\r\n  <th>Other Utility</th>\r\n  <th>Land Industrial</th>\r\n  <th>Land Agricultural</th>\r\n  <th>Land Service</th>\r\n  <th>Remark</th>\r\n\r\n  </thead>\r\n  <tbody style=\"overflow: auto;\">\r\n  <tr class=\"planned\" >\r\n    <td></td>\r\n    <td>{{plannedUtilityList?.ElectricPower}}</td>\r\n    <td>{{plannedUtilityList?.Water}}</td>\r\n    <td>{{plannedUtilityList?.OtherUtility}}</td>\r\n    <td>{{plannedUtilityList?.LandIndustrial}}</td>\r\n    <td>{{plannedUtilityList?.LandAgricultural}}</td>\r\n    <td>{{plannedUtilityList?.LandService}}</td>\r\n    <td>{{plannedUtilityList?.Remark}}</td>\r\n  </tr>\r\n  <tr *ngFor=\"let utility of utilityList;let i=index;\">\r\n    <td>{{i+1}}</td>\r\n    <td>{{utility.ElectricPower}}</td>\r\n    <td>{{utility.Water}}</td>\r\n    <td>{{utility.OtherUtility}}</td>\r\n    <td>{{utility.LandIndustrial}}</td>\r\n    <td>{{utility.LandAgricultural}}</td>\r\n    <td>{{utility.LandService}}</td>\r\n    <td>{{utility.Remark}}</td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/project-input/project-utility-list/project-utility-list.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-input/project-utility-list/project-utility-list.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table td {\n  padding: 4px 25px 4px 5px;\n  font-size: 13px;\n  border-top: 1px solid #FAFAFA; }\n\n.table th {\n  padding: 4px 25px 4px 5px;\n  font-size: 13px;\n  border-top: 1px solid #FAFAFA; }\n\ntable tbody tr:nth-child(2) td {\n  border: 1px solid #0d8055;\n  background-color: #0d8055;\n  color: white;\n  font-weight: bolder; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Byb2plY3QtcHJvZmlsZS9wcm9qZWN0LWlucHV0L3Byb2plY3QtdXRpbGl0eS1saXN0L0M6XFxVc2Vyc1xcRmV0aWhhIEtcXERlc2t0b3BcXERFVlxcR2l0TGFiXFxJbnZlc3RtbmV0XFxDVVNUT1IuRUlDLkFQSVxcc3JjL2FwcFxcY29tcG9uZW50c1xccHJvamVjdC1wcm9maWxlXFxwcm9qZWN0LWlucHV0XFxwcm9qZWN0LXV0aWxpdHktbGlzdFxccHJvamVjdC11dGlsaXR5LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsNkJBQTZCLEVBQUE7O0FBRS9CO0VBRUUseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CLEVBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvcHJvamVjdC1wcm9maWxlL3Byb2plY3QtaW5wdXQvcHJvamVjdC11dGlsaXR5LWxpc3QvcHJvamVjdC11dGlsaXR5LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi50YWJsZSB0ZHtcclxuICBwYWRkaW5nOiA0cHggMjVweCA0cHggNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI0ZBRkFGQTtcclxuXHJcbn1cclxuLnRhYmxlIHRoIHtcclxuICBwYWRkaW5nOiA0cHggMjVweCA0cHggNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI0ZBRkFGQTtcclxufVxyXG50YWJsZSB0Ym9keSB0cjpudGgtY2hpbGQoMikgdGQge1xyXG5cclxuICBib3JkZXI6IDFweCBzb2xpZCAjMGQ4MDU1O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDgwNTU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/project-profile/project-input/project-utility-list/project-utility-list.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-input/project-utility-list/project-utility-list.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ProjectUtilityListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectUtilityListComponent", function() { return ProjectUtilityListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_project_requirement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Services/project-requirement.service */ "./src/app/Services/project-requirement.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProjectUtilityListComponent = /** @class */ (function () {
    function ProjectUtilityListComponent(utilityService, route) {
        this.utilityService = utilityService;
        this.route = route;
    }
    ProjectUtilityListComponent.prototype.ngOnInit = function () {
        this.ProjectId = this.route.snapshot.params['ProjectId'];
        this.getUtility();
        this.getPlannedUtility();
    };
    ProjectUtilityListComponent.prototype.getUtility = function () {
        var _this = this;
        this.utilityService.getAll()
            .subscribe(function (result) {
            _this.utilityList = result;
        });
    };
    ProjectUtilityListComponent.prototype.getPlannedUtility = function () {
        var _this = this;
        this.utilityService.RequirementByProject(this.ProjectId)
            .subscribe(function (result) {
            _this.plannedUtilityList = result[0];
        });
    };
    ProjectUtilityListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-utility-list',
            template: __webpack_require__(/*! ./project-utility-list.component.html */ "./src/app/components/project-profile/project-input/project-utility-list/project-utility-list.component.html"),
            styles: [__webpack_require__(/*! ./project-utility-list.component.scss */ "./src/app/components/project-profile/project-input/project-utility-list/project-utility-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_project_requirement_service__WEBPACK_IMPORTED_MODULE_2__["ProjectRequirementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProjectUtilityListComponent);
    return ProjectUtilityListComponent;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-input/raw-material-form/raw-material-form.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-input/raw-material-form/raw-material-form.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<mat-card-subtitle class=\"sub-title\">-->\r\n<!--Project Raw Material-->\r\n<!--<mat-divider></mat-divider>-->\r\n<!--</mat-card-subtitle>-->\r\n<mat-card class=\"margin-2\">\r\n  <form [formGroup]=\"pRawMaterialForm\" novalidate>\r\n    <div style=\"margin-bottom: 40px;\" *ngIf=\"ServiceId=='1234'\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\r\n         fxLayoutGap=\"2em\">\r\n      <div class=\"block\" fxFlex=\"\" style=\"margin-left: 20px\">\r\n        <mat-form-field>\r\n          <mat-label>Quarter</mat-label>\r\n          <mat-select formControlName=\"Quarter\" required>\r\n            <mat-option *ngFor=\"let row of Quarter\" [value]=\"row.Id\">\r\n              <span>{{row.DescriptionEnglish}}</span>\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n      </div>\r\n      <div class=\"block\" fxFlex>\r\n        <mat-form-field>\r\n          <input placeholder=\"Registration Year* :\"\r\n                 matInput\r\n                 formControlName=\"RegistrationYear\"\r\n                 [matDatepicker]=\"RegistrationYear\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"RegistrationYear\"></mat-datepicker-toggle>\r\n          <mat-datepicker #RegistrationYear></mat-datepicker>\r\n          <!--<mat-error align=\"start\" *ngIf=\"formErrors.RegistrationYear\" class=\"form__error\">-->\r\n            <!--{{ formErrors.RegistrationYear }}-->\r\n          <!--</mat-error>-->\r\n        </mat-form-field>\r\n      </div>\r\n      <!--<div class=\"block\" fxFlex=\"\">-->\r\n      <!---->\r\n      <!--<mat-form-field>-->\r\n      <!--<input #OSF type=\"number\" formControlName=\"CapitalRegistrationDatetime\" matInput-->\r\n      <!--placeholder=\"Capital Registration Datetime * :\">-->\r\n      <!---->\r\n      <!--</mat-form-field>-->\r\n      <!--</div>-->\r\n      <div class=\"block\" fxFlex=\"\">\r\n\r\n        <mat-form-field>\r\n          <mat-select [disabled]=\"true\" formControlName=\"ProjectStatus\" required>\r\n            <option value=\"0\">--Select--</option>\r\n            <label>Project Status</label>\r\n            <mat-option *ngFor=\"let status of projectStatus\" [value]=\"status.Id\">\r\n              <span>{{status.DescriptionEnglish}}</span>\r\n            </mat-option>\r\n          </mat-select>\r\n\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <mat-card-subtitle class=\"sub-title\">\r\n      Detail\r\n      <mat-divider></mat-divider>\r\n    </mat-card-subtitle>\r\n\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\">\r\n      <mat-card style=\"    border: none;box-shadow: none!important;\" class=\"padding-0\" fxFlex=\"90%\">\r\n        <mat-card-content>\r\n          <div fxLayout=\"row\">\r\n\r\n\r\n            <div fxFlex=\"\" class=\"block\">\r\n              <mat-form-field>\r\n                <mat-label>Raw Material Type * :</mat-label>\r\n                <input id=\"\" type=\"text\" matInput formControlName=\"RawMaterialType\">\r\n                <mat-error align=\"start\" *ngIf=\"formErrors.RawMaterialType\">{{ formErrors.RawMaterialType }}</mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"block\" fxFlex=\"30%\">\r\n\r\n              <mat-radio-group formControlName=\"IsForeign\" align=\"center\">\r\n                <mat-radio-button value=\"false\">Local</mat-radio-button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                <mat-radio-button value=\"true\">Foreign</mat-radio-button>\r\n              </mat-radio-group>\r\n\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"block\" fxFlex=\"\">\r\n              <mat-form-field class=\"full-width\">\r\n                      <textarea placeholder=\"Remark :\" formControlName=\"Remark\" matInput rows=\"2\">\r\n                </textarea>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n\r\n            <div fxFlex=\"15\" class=\"block\">\r\n              <button mat-raised-button=\"\" color=\"primary\"\r\n                [disabled]=\"!pRawMaterialForm.valid\"\r\n                 (click)=\"onSubmitRawMaterial()\">\r\n                <mat-icon color=\"primary\" class=\"mat-18\">done</mat-icon>\r\n                <!--<span>Add</span>-->\r\n                <span class=\"agree\">{{editModeInput ? 'update' : 'Add'}}</span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n        </mat-card-content>\r\n      </mat-card>\r\n\r\n    </div>\r\n  </form>\r\n</mat-card>\r\n\r\n\r\n<mat-card class=\"margin-2 padding-0\">\r\n  <!--<mat-card-header>-->\r\n  <!--<mat-card-subtitle class=\"sub-title\">-->\r\n  <!--List of Raw Material-->\r\n  <!--&lt;!&ndash;<mat-divider></mat-divider>&ndash;&gt;-->\r\n  <!--</mat-card-subtitle>-->\r\n  <!--</mat-card-header>-->\r\n  <mat-card-content *ngIf=\"projectInputData.length>0\">\r\n    <div class=\"spinner-container\" *ngIf=\"loading \">\r\n      <mat-progress-bar mode=\"query\"></mat-progress-bar>\r\n    </div>\r\n    <mat-table style=\"border:1px solid #f1f1f1;\"\r\n               class=\"full-width\" #table [dataSource]=\"dataSource\">\r\n      <ng-container style=\"width: 10px !important;\" matColumnDef=\"No\">\r\n        <mat-header-cell style=\"width: 10px !important;\" *matHeaderCellDef>#</mat-header-cell>\r\n        <mat-cell style=\"width: 10px !important;\" *matCellDef=\"let projectInputData;let i=index;\">\r\n          {{i+1}}\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"RawMaterialType\">\r\n        <mat-header-cell *matHeaderCellDef>Raw Material Type</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let projectInputData\"> {{projectInputData.RawMaterialType}}\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"IsForeign\">\r\n        <mat-header-cell *matHeaderCellDef>IsForeign</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let projectInputData\"> {{projectInputData.IsForeign}}\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"Remark\">\r\n        <mat-header-cell *matHeaderCellDef> Remark</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let projectInputData\"> {{projectInputData.Remark }}\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"Action\">\r\n        <mat-header-cell *matHeaderCellDef>Action</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let projectInputData;let i=index;\">\r\n          <div>\r\n            <a class=\"pointer\" mat-min-fab matTooltip=\"Click here to edit the Share\"\r\n               (click)=\"onEditInput(i,projectInputData.ProjectInputId)\">\r\n              <mat-icon color=\"primary\" class=\"mat-18\">edit</mat-icon>\r\n              Edit\r\n            </a>\r\n            <a class=\"pointer\" mat-min-fab color=\"warn\" matTooltip=\"Click here to delete the dhare\"\r\n               (click)=\"deleteInput(i,projectInputData.ProjectInputId)\">\r\n              <mat-icon color=\"warn\">delete</mat-icon>\r\n              Delete\r\n            </a>\r\n          </div>\r\n        </mat-cell>\r\n      </ng-container>\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\">\r\n      </mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n  </mat-card-content>\r\n\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/project-input/raw-material-form/raw-material-form.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-input/raw-material-form/raw-material-form.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-header-row {\n  background-color: whitesmoke;\n  border-top: 1px solid #f1f1f1;\n  border-bottom: 1px solid #f1f1f1 !important; }\n\nmat-radio-button {\n  margin-top: 20px !important; }\n\nmat-header-row {\n  min-height: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Byb2plY3QtcHJvZmlsZS9wcm9qZWN0LWlucHV0L3Jhdy1tYXRlcmlhbC1mb3JtL0M6XFxVc2Vyc1xcRmV0aWhhIEtcXERlc2t0b3BcXERFVlxcR2l0TGFiXFxJbnZlc3RtbmV0XFxDVVNUT1IuRUlDLkFQSVxcc3JjL2FwcFxcY29tcG9uZW50c1xccHJvamVjdC1wcm9maWxlXFxwcm9qZWN0LWlucHV0XFxyYXctbWF0ZXJpYWwtZm9ybVxccmF3LW1hdGVyaWFsLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLDJDQUEyQyxFQUFBOztBQUc3QztFQUNFLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLGdCQUFnQixFQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3Byb2plY3QtcHJvZmlsZS9wcm9qZWN0LWlucHV0L3Jhdy1tYXRlcmlhbC1mb3JtL3Jhdy1tYXRlcmlhbC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWhlYWRlci1yb3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjEgIWltcG9ydGFudDtcclxufVxyXG5cclxubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tYXQtaGVhZGVyLXJvdyB7XHJcbiAgbWluLWhlaWdodDogMzBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/project-profile/project-input/raw-material-form/raw-material-form.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-input/raw-material-form/raw-material-form.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: RawMaterialFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawMaterialFormComponent", function() { return RawMaterialFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _custor_validation_custom_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/validation/custom/form */ "./src/@custor/validation/custom/form.ts");
/* harmony import */ var _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../Services/project-profile.service */ "./src/app/Services/project-profile.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Services_project_input_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../Services/project-input.service */ "./src/app/Services/project-input.service.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _Services_project_requirement_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../Services/project-requirement.service */ "./src/app/Services/project-requirement.service.ts");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _model_lookupData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../model/lookupData */ "./src/app/model/lookupData.ts");
/* harmony import */ var _custor_const_consts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @custor/const/consts */ "./src/@custor/const/consts.ts");














var RawMaterialFormComponent = /** @class */ (function () {
    function RawMaterialFormComponent(formBuilder, errMsg, route, projectProfileService, toastr, snackbar, formService, dataSharing, dataSharingService, pRequirementService, pInputService) {
        this.formBuilder = formBuilder;
        this.errMsg = errMsg;
        this.route = route;
        this.projectProfileService = projectProfileService;
        this.toastr = toastr;
        this.snackbar = snackbar;
        this.formService = formService;
        this.dataSharing = dataSharing;
        this.dataSharingService = dataSharingService;
        this.pRequirementService = pRequirementService;
        this.pInputService = pInputService;
        this.editModeInput = false;
        this.loading = false;
        this.projectInputData = [];
        this.displayedColumns = ['No', 'RawMaterialType', 'Remark', 'Action'];
        this.projectStatus = [];
        this.Quarter = [];
        this.formErrors = {
            RawMaterialType: 'Minimum 2 Maximum 100 characters!',
        };
    }
    RawMaterialFormComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.ServiceId = this.route.snapshot.params['ServiceId'];
        this.InvestorId = this.route.snapshot.params['InvestorId'];
        this.workFlowId = this.route.snapshot.params['workFlowId'];
        this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
        this.projectId = this.route.snapshot.params['ProjectId'];
        if (this.ServiceId === '1234') {
            this.getProjectStatus(this.route.snapshot.params['ProjectId']);
        }
        if (this.projectId > 1) {
            this.getProjectRawMaterial();
        }
        this.initStaticData('en');
        // this.route.params
        //   .subscribe((params: Params) => {
        //     this.projectId = +params['id'];
        //
        //   });
    };
    RawMaterialFormComponent.prototype.getProjectRawMaterial = function () {
        var _this = this;
        this.pInputService.InputsByProject(this.projectId).subscribe(function (result) {
            if (typeof (result) !== 'undefined') {
                _this.projectInputData = result;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.projectInputData);
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    RawMaterialFormComponent.prototype.onSubmit = function () {
        this.formService.markFormGroupTouched(this.pRawMaterialForm);
    };
    RawMaterialFormComponent.prototype.initForm = function () {
        this.pRawMaterialForm = this.formBuilder.group({
            ProjectInputId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            ProjectId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.projectId),
            RawMaterialType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)])),
            IsForeign: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            Remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]),
            Quarter: [''],
            RegistrationYear: [''],
            ProjectStatus: [''],
        });
    };
    RawMaterialFormComponent.prototype.onSubmitRawMaterial = function () {
        var _this = this;
        if (!this.editModeInput) {
            this.pInputService.create(this.getInputData())
                .subscribe(function (result) {
                _this.notification('Saved');
                // setTimeout(() => this.dataSharing.steeperIndex.next(3), 0);
                setTimeout(function () { return _this.dataSharing.currentIndex.next(4); }, 0);
                _this.projectInputData.push(result);
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.projectInputData);
                _this.pRawMaterialForm.reset();
                if (_this.ServiceId === '1234') {
                    _this.getProjectStatus(_this.route.snapshot.params['ProjectId']);
                }
            }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
        }
        else {
            this.pInputService.update(this.pRawMaterialForm.value, this.projectInputData[this.inputEditIndex].ProjectInputId)
                .subscribe(function (result) {
                _this.toastr.success('Successfully Updated', 'Sucess');
                _this.projectInputData[_this.inputEditIndex] = result;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.projectInputData);
                _this.pRawMaterialForm.reset();
            }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
        }
    };
    RawMaterialFormComponent.prototype.notification = function (message) {
        this.toastr.success(" Succesfully " + message + " Data.!", 'Success');
    };
    RawMaterialFormComponent.prototype.deleteInput = function (index, id) {
        var _this = this;
        this.pInputService.delete(id)
            .subscribe(function () {
            _this.notification('Deleted');
            _this.projectInputData.splice(index, 1);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.projectInputData);
        });
    };
    RawMaterialFormComponent.prototype.onEditInput = function (index) {
        this.editModeInput = true;
        this.inputEditIndex = index;
        this.pRawMaterialForm.patchValue(this.projectInputData[index]);
        this.pRawMaterialForm.patchValue({
            IsForeign: this.projectInputData[index].IsForeign.toString()
        });
    };
    RawMaterialFormComponent.prototype.getInputData = function () {
        return {
            ProjectId: this.projectId,
            RawMaterialType: this.pRawMaterialForm.get('RawMaterialType').value,
            IsForeign: this.pRawMaterialForm.get('IsForeign').value,
            Remark: this.pRawMaterialForm.get('Remark').value,
            Quarter: this.pRawMaterialForm.get('Quarter').value,
            RegistrationYear: this.pRawMaterialForm.get('RegistrationYear').value,
            ProjectStatus: this.pRawMaterialForm.get('ProjectStatus').value,
        };
    };
    RawMaterialFormComponent.prototype.ngAfterContentChecked = function () {
        // this.pRawMaterialForm.patchValue({
        //   ProjectId: localStorage.getItem('ProjectId')
        // });
        // this.pRawMaterialForm.patchValue({
        //   workFlowId: localStorage.getItem('workFlowId')
        // });
    };
    RawMaterialFormComponent.prototype.next = function () {
        this.dataSharing.steeperIndex.next(this.stepperIndex);
        this.dataSharing.steeperIndex.next(4);
    };
    RawMaterialFormComponent.prototype.initStaticData = function (currentLang) {
        var _this = this;
        var projectStatus1 = new _model_lookupData__WEBPACK_IMPORTED_MODULE_12__["ProjectStatusModel"]();
        _custor_const_consts__WEBPACK_IMPORTED_MODULE_13__["ProjectStatus"].forEach(function (pair) {
            projectStatus1 = {
                'Id': pair.Id.toString(),
                'DescriptionEnglish': pair.DescriptionEnglish,
                'Description': pair.Description
            };
            _this.projectStatus.push(projectStatus1);
        });
        var Quarter1 = new _model_lookupData__WEBPACK_IMPORTED_MODULE_12__["QuarterModel"]();
        _custor_const_consts__WEBPACK_IMPORTED_MODULE_13__["Quarter"].forEach(function (pair) {
            Quarter1 = {
                'Id': pair.Id.toString(),
                'DescriptionEnglish': pair.DescriptionEnglish,
                'Description': pair.Description
            };
            _this.Quarter.push(Quarter1);
        });
    };
    RawMaterialFormComponent.prototype.getProjectStatus = function (projectId) {
        var _this = this;
        this.projectProfileService.getProjectStatus(projectId)
            .subscribe(function (result) {
            _this.pRawMaterialForm.patchValue({
                ProjectStatus: result.toString()
            });
        });
    };
    RawMaterialFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-raw-material-form',
            template: __webpack_require__(/*! ./raw-material-form.component.html */ "./src/app/components/project-profile/project-input/raw-material-form/raw-material-form.component.html"),
            styles: [__webpack_require__(/*! ./raw-material-form.component.scss */ "./src/app/components/project-profile/project-input/raw-material-form/raw-material-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_9__["ErrorMessage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProjectProfileService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _custor_validation_custom_form__WEBPACK_IMPORTED_MODULE_4__["FormService"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_11__["DataSharingService"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_11__["DataSharingService"],
            _Services_project_requirement_service__WEBPACK_IMPORTED_MODULE_10__["ProjectRequirementService"],
            _Services_project_input_service__WEBPACK_IMPORTED_MODULE_8__["ProjectInputService"]])
    ], RawMaterialFormComponent);
    return RawMaterialFormComponent;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-input/utility-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-input/utility-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: UtilityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityRoutingModule", function() { return UtilityRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_utility_list_project_utility_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-utility-list/project-utility-list.component */ "./src/app/components/project-profile/project-input/project-utility-list/project-utility-list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var utilityRoute = [
    { path: '', component: _project_utility_list_project_utility_list_component__WEBPACK_IMPORTED_MODULE_2__["ProjectUtilityListComponent"] }
];
var UtilityRoutingModule = /** @class */ (function () {
    function UtilityRoutingModule() {
    }
    UtilityRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(utilityRoute)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UtilityRoutingModule);
    return UtilityRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-input/utility.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/project-profile/project-input/utility.module.ts ***!
  \****************************************************************************/
/*! exports provided: UtilityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityModule", function() { return UtilityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _utility_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utility-routing.module */ "./src/app/components/project-profile/project-input/utility-routing.module.ts");
/* harmony import */ var _project_utility_list_project_utility_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-utility-list/project-utility-list.component */ "./src/app/components/project-profile/project-input/project-utility-list/project-utility-list.component.ts");
/* harmony import */ var _raw_material_form_raw_material_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./raw-material-form/raw-material-form.component */ "./src/app/components/project-profile/project-input/raw-material-form/raw-material-form.component.ts");
/* harmony import */ var _Services_project_input_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Services/project-input.service */ "./src/app/Services/project-input.service.ts");
/* harmony import */ var _Services_project_requirement_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Services/project-requirement.service */ "./src/app/Services/project-requirement.service.ts");









var UtilityModule = /** @class */ (function () {
    function UtilityModule() {
    }
    UtilityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _utility_routing_module__WEBPACK_IMPORTED_MODULE_4__["UtilityRoutingModule"]
            ],
            declarations: [_project_utility_list_project_utility_list_component__WEBPACK_IMPORTED_MODULE_5__["ProjectUtilityListComponent"], _raw_material_form_raw_material_form_component__WEBPACK_IMPORTED_MODULE_6__["RawMaterialFormComponent"]],
            exports: [_project_utility_list_project_utility_list_component__WEBPACK_IMPORTED_MODULE_5__["ProjectUtilityListComponent"], _raw_material_form_raw_material_form_component__WEBPACK_IMPORTED_MODULE_6__["RawMaterialFormComponent"]],
            providers: [_Services_project_input_service__WEBPACK_IMPORTED_MODULE_7__["ProjectInputService"], _Services_project_requirement_service__WEBPACK_IMPORTED_MODULE_8__["ProjectRequirementService"]]
        })
    ], UtilityModule);
    return UtilityModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-components-project-profile-project-input-utility-module~components-project-profile-proje~aaa9fcd6.js.map