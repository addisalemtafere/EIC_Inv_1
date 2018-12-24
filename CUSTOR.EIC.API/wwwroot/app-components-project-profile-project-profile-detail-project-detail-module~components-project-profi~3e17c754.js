(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-project-profile-project-profile-detail-project-detail-module~components-project-profi~3e17c754"],{

/***/ "./src/app/components/project-profile/project-profile-detail/project-detail-routing.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-profile-detail/project-detail-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: ProjectDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailRoutingModule", function() { return ProjectDetailRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_profile_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-profile-detail.component */ "./src/app/components/project-profile/project-profile-detail/project-profile-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _project_profile_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProjectProfileDetailComponent"] }
];
var ProjectDetailRoutingModule = /** @class */ (function () {
    function ProjectDetailRoutingModule() {
    }
    ProjectDetailRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProjectDetailRoutingModule);
    return ProjectDetailRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-profile-detail/project-detail.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-profile-detail/project-detail.module.ts ***!
  \********************************************************************************************/
/*! exports provided: ProjectDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailModule", function() { return ProjectDetailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _project_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-detail-routing.module */ "./src/app/components/project-profile/project-profile-detail/project-detail-routing.module.ts");
/* harmony import */ var _project_profile_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-profile-detail.component */ "./src/app/components/project-profile/project-profile-detail/project-profile-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProjectDetailModule = /** @class */ (function () {
    function ProjectDetailModule() {
    }
    ProjectDetailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _project_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProjectDetailRoutingModule"]
            ],
            declarations: [_project_profile_detail_component__WEBPACK_IMPORTED_MODULE_4__["ProjectProfileDetailComponent"]],
            exports: [_project_profile_detail_component__WEBPACK_IMPORTED_MODULE_4__["ProjectProfileDetailComponent"]]
        })
    ], ProjectDetailModule);
    return ProjectDetailModule;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-profile-detail/project-profile-detail.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-profile-detail/project-profile-detail.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  color: #333;\r\n  font-family: Helvetica, Arial, sans-serif;\r\n  border-collapse: collapse;\r\n  border: 1px solid #f1f1f1;\r\n}\r\n\r\ntbody > tr > td:first-child {\r\n  /*background-color: whitesmoke !important;*/\r\n}\r\n\r\ntd, th {\r\n  height: 40px;\r\n  transition: all 0.3s; /* Simple transition for hover effect */\r\n}\r\n\r\nth {\r\n  background: #fafafa;\r\n  font-weight: bold;\r\n  font-size: 12px;\r\n\r\n}\r\n\r\ntd {\r\n  background: whitesmoke;\r\n  text-align: center;\r\n}\r\n\r\n/* Cells in even rows (2,4,6...) are one color */\r\n\r\ntr:nth-child(even) td {\r\n  background: #FEFEFE;\r\n}\r\n\r\n/* Cells in odd rows (1,3,5...) are another (excludes header cells)  */\r\n\r\ntr:nth-child(odd) td {\r\n  background: #FEFEFE;\r\n}\r\n\r\ntr td:hover {\r\n  background: #d8e9f9;\r\n  color: #FFF;\r\n}\r\n\r\n.caption {\r\n  color: cadetblue !important;\r\n  font-weight: bolder;\r\n  margin: 20px 6px 5px 6px;\r\n  text-decoration: underline;\r\n  -webkit-text-decoration-color: #f1f1f1;\r\n          text-decoration-color: #f1f1f1;\r\n  text-align: center;\r\n}\r\n\r\n.project_table_wdg {\r\n  border: 1px solid #f1f1f1;\r\n  border-radius: 4px;\r\n  -moz-border-radius: 4px;\r\n  -webkit-border-radius: 4px;\r\n  float: left;\r\n  /*margin-top: 25px;*/\r\n}\r\n\r\n.project_table_wdg ul {\r\n  list-style: none;\r\n  float: left;\r\n  width: 209px;\r\n  margin: 0;\r\n  border: 1px solid #f1f1f1;\r\n  padding: 2px;\r\n  /*text-align: center;*/\r\n  background-color: #FFF;\r\n}\r\n\r\n.project_table_wdg ul li {\r\n  border-bottom: 1px dashed #f1f1f1;\r\n  padding: 8px 0;\r\n}\r\n\r\n.project_table_wdg ul li:first-child {\r\n  color: cadetblue;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  background: whitesmoke;\r\n}\r\n\r\n.project_table_wdg ul li:nth-child(2) {\r\n  /*background: #FAFAFA;*/\r\n}\r\n\r\n.project_table_wdg ul li:nth-child(3) {\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n}\r\n\r\n.project_table_wdg ul li:nth-child(n+4) {\r\n  font-size: 12px;\r\n}\r\n\r\n.project_table_wdg ul li > .header {\r\n  font-weight: bold;\r\n  padding-left: 2px !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/project-profile-detail/project-profile-detail.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-profile-detail/project-profile-detail.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card style=\"margin-top: 20px;\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"0\">\r\n    <div class=\"block\" fxFlex=\"20\">\r\n      <app-page-header title=\"projectDetail\" icon=\"view_list\"></app-page-header>\r\n\r\n    </div>\r\n    <div id=\"title1\" class=\"block\" fxFlex=\"70\">\r\n\r\n      <span class=\"page-title\">Investor: {{investorName}}</span>\r\n      <span class=\"slideBorder\">/</span>\r\n      <span class=\"page-title\">Project : {{projectDetail?.ProjectName}}</span>\r\n      &nbsp;&nbsp;\r\n      <span class=\"page-title\">\r\n        Project Stage:\r\n        <span style=\"color: #08b34d;\">\r\n          {{projectStageItem.DescriptionEnglish}}\r\n        </span>\r\n      </span>\r\n\r\n      &nbsp;&nbsp;\r\n      <span class=\"page-title\">Project Status: <span\r\n        style=\"color: #08b34d;\">{{projectStatusItem.DescriptionEnglish}}</span></span>\r\n\r\n    </div>\r\n  </div>\r\n  <mat-card-content style=\"margin-bottom: 30px;\">\r\n    <div style=\"margin-bottom: 40px;\" fxLayout=\"margin-10 row wrap\">\r\n      <div class=\"project_table_wdg mat-elevation-z6\">\r\n\r\n        <ul>\r\n          <li>Address</li>\r\n          <!--<li></li>-->\r\n          <li><span class=\"header\">Specific Area Name :</span> {{addressList?.SpecificAreaName}}</li>\r\n          <li><span class=\"header\">Kebele :</span>{{addressList?.Kebele.DescriptionEnglish}}</li>\r\n          <li><span class=\"header\">Woreda :</span>{{addressList?.Woreda.DescriptionEnglish}}</li>\r\n          <li><span class=\"header\">Zone :</span>{{addressList?.Zone.DescriptionEnglish}}</li>\r\n          <li><span class=\"header\">RegionId :</span>{{addressList?.Region.DescriptionEnglish}}\r\n          </li>\r\n          <li><span class=\"header\">Remark :</span>{{addressList?.Remark}}</li>\r\n\r\n          <li></li>\r\n          <li></li>\r\n          <li></li>\r\n          <li></li>\r\n          <!--<li>-->\r\n          <!--<a (click)=\"editProject(0,projectDetail.ProjectId)\" mat-min-fab matTooltip=\"Edit Project\">-->\r\n          <!--<mat-icon color=\"primary\" class=\"mat-18\">edit</mat-icon>-->\r\n          <!--</a>-->\r\n          <!--<a mat&#45;&#45;mini-fab (click)=\"onDelete('address',1)\" color=\"accent\" matTooltip=\"Delete Project\">-->\r\n          <!--<mat-icon color=\"accent\">delete</mat-icon>-->\r\n          <!--</a>-->\r\n          <!--</li>-->\r\n        </ul>\r\n\r\n        <ul>\r\n          <li>Utility</li>\r\n          <li><span class=\"header\">Electric Power :</span>{{projectRequirement?.ElectricPower}}</li>\r\n          <li><span class=\"header\">Land Agricultural :</span>{{projectRequirement?.LandAgricultural}}</li>\r\n          <li><span class=\"header\">Land Industrial :</span>{{projectRequirement?.LandIndustrial}}</li>\r\n          <li><span class=\"header\">Land Service :</span>{{projectRequirement?.LandService}}</li>\r\n          <li><span class=\"header\">Other Utility :</span>{{projectRequirement?.OtherUtility}}</li>\r\n          <li><span class=\"header\">Water :</span>{{projectRequirement?.Water}}</li>\r\n          <li><span class=\"header\">Remark :</span>{{projectRequirement?.Remark}}</li>\r\n\r\n          <li></li>\r\n          <li></li>\r\n\r\n          <!--<li>-->\r\n          <!--<a (click)=\"editProject(1,projectDetail.ProjectId)\" mat-min-fab matTooltip=\"Edit Project\">-->\r\n          <!--<mat-icon color=\"primary\" class=\"mat-18\">edit</mat-icon>-->\r\n          <!--</a>-->\r\n          <!--<a mat&#45;&#45;mini-fab (click)=\"onDelete('Utility',projectRequirement?.ProjectRequirementId)\"-->\r\n          <!--color=\"accent\" matTooltip=\"Delete Project\">-->\r\n          <!--<mat-icon color=\"accent\">delete</mat-icon>-->\r\n          <!--</a>-->\r\n          <!--</li>-->\r\n        </ul>\r\n\r\n        <ul>\r\n          <li>Cost</li>\r\n          <li><span class=\"header\">Building Cost :</span>{{projectCost?.BuildingCost}}</li>\r\n          <li><span class=\"header\">Initial Working Capital Cost :</span>{{projectCost?.InitialWorkingCapitalCost}}</li>\r\n          <li><span class=\"header\">Land Cost :</span>{{projectCost?.LandCost}}</li>\r\n          <li><span class=\"header\">Machinery Cost :</span>{{projectCost?.MachineryCost}}</li>\r\n          <li><span class=\"header\">Office Equipment Cost :</span>{{projectCost?.OfficeEquipmentCost}}</li>\r\n          <li><span class=\"header\">Transport Cost :</span>{{projectCost?.TransportCost}}</li>\r\n          <li><span class=\"header\">Equity Finance : </span>{{projectCost?.EquityFinance}}</li>\r\n          <li><span class=\"header\">Loan Finance :</span>{{projectCost?.LoanFinance}}</li>\r\n          <!--<li>{{projectCost.OtherSourceFinance}}</li>-->\r\n          <!--<li>{{projectCost.OtherSourceDescription}}</li>-->\r\n\r\n          <!--<li>-->\r\n          <!--&lt;!&ndash;<a mat-min-fab (click)=\"editProject(2,projectDetail.ProjectId)\" matTooltip=\"Edit Project\">&ndash;&gt;-->\r\n          <!--&lt;!&ndash;<mat-icon color=\"primary\" class=\"mat-18\">edit</mat-icon>&ndash;&gt;-->\r\n          <!--&lt;!&ndash;</a>&ndash;&gt;-->\r\n          <!--&lt;!&ndash;<a (click)=\"onDelete('cost',projectCost?.ProjectCostId)\" color=\"accent\" matTooltip=\"Delete Project\">&ndash;&gt;-->\r\n          <!--&lt;!&ndash;<mat-icon color=\"accent\">delete</mat-icon>&ndash;&gt;-->\r\n          <!--&lt;!&ndash;</a>&ndash;&gt;-->\r\n          <!--</li>-->\r\n        </ul>\r\n\r\n        <ul>\r\n          <li>Employment</li>\r\n          <li><span class=\"header\">Permanent Female :</span>{{projectEmployement?.PermanentFemale}}</li>\r\n          <li><span class=\"header\">Permanent Male :</span>{{projectEmployement?.PermanentMale}}</li>\r\n          <li><span class=\"header\">Permanent Foreign Female :</span>{{projectEmployement?.PermanentForeignFemale}}</li>\r\n          <li><span class=\"header\">Permanent Female :</span>{{projectEmployement?.PermanentFemale}}</li>\r\n          <li><span class=\"header\">Temporary Female :</span>{{projectEmployement?.TemporaryFemale}}</li>\r\n          <li><span class=\"header\">Temporary Male :</span>{{projectEmployement?.TemporaryMale}}</li>\r\n          <li><span class=\"header\">Temporary Foreign Female :</span>{{projectEmployement?.TemporaryForeignFemale}}</li>\r\n          <li><span class=\"header\">Temporary Foreign Male :</span>{{projectEmployement?.TemporaryForeignMale}}</li>\r\n\r\n\r\n        </ul>\r\n\r\n\r\n      </div>\r\n    </div>\r\n    <label class=\"sub-label\">Project Output/Services</label>\r\n    <div class=\"margin-10\" fxFlex=\"87%\" fxLayout=\"row wrap\" fxLayoutGap=\"3em\">\r\n\r\n      <div class=\"block\" fxFlex=\"\">\r\n        <table class=\"full-width mat-elevation-z3\">\r\n          <!--<caption class=\"caption\">Project Output/Services</caption>-->\r\n          <thead>\r\n          <th>No</th>\r\n          <th>Product Name</th>\r\n          <th>Product Qty</th>\r\n          <th>Product Value</th>\r\n          <!--<th>Product Unit</th>-->\r\n          <th>Export Market Share</th>\r\n          <th>Domestic Market Share</th>\r\n          <th>Remark</th>\r\n\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let output of projectOutput;let i=index;\">\r\n            <td>{{i+1}}</td>\r\n            <td>{{output.ProductName}}</td>\r\n            <td>{{output.ProductQty}}</td>\r\n            <td>{{output.ProductValue}}</td>\r\n            <!--<td>{{output.ProductUnit}}</td>-->\r\n            <td>{{output.ExportMarketShare}} %</td>\r\n            <td>{{output.DomesticMarketShare}} %</td>\r\n            <td>{{output.Remark}}</td>\r\n\r\n\r\n            <!--<td>-->\r\n            <!--<a mat-min-fab (click)=\"editProject(4,projectDetail.ProjectId)\" matTooltip=\"Edit Project\">-->\r\n            <!--<mat-icon color=\"primary\" class=\"mat-18\">edit</mat-icon>-->\r\n            <!--</a>-->\r\n            <!--<a mat&#45;&#45;mini-fab (click)=\"onDelete('nationalityComposition',output.ProjectOutputId)\"-->\r\n            <!--color=\"accent\"-->\r\n            <!--matTooltip=\"Delete Project\">-->\r\n            <!--<mat-icon color=\"accent\">delete</mat-icon>-->\r\n            <!--</a>-->\r\n            <!--</td>-->\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n\r\n    <div style=\"margin-top: 50px !important;\"\r\n         fxFlex=\"87%\"\r\n         fxLayout=\"row wrap\"\r\n         fxLayoutGap=\"3em\">\r\n      <div class=\"block\" fxFlex=\"\">\r\n        <label class=\"sub-label\">Project Raw Material Input</label>\r\n      </div>\r\n      <div class=\"block\" fxFlex=\"\">\r\n        <label class=\"sub-label\">Project Nationality composition</label>\r\n      </div>\r\n    </div>\r\n    <div\r\n      class=\" mat-elevation-z2\"\r\n      fxFlex=\"87%\"\r\n      fxLayout=\"row wrap\"\r\n      fxLayoutGap=\"3em\">\r\n      <div class=\"block\" fxFlex=\"\">\r\n\r\n        <table class=\"full-width \">\r\n          <thead>\r\n          <th>No</th>\r\n          <th>Raw Material Type</th>\r\n          <th>Is Foreign</th>\r\n          <th>Remark</th>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let input of projectInputs;let i=index;\">\r\n            <td>{{i+1}}</td>\r\n            <td>{{input.RawMaterialType}}</td>\r\n            <td>{{input.IsForeign? 'yes':'no'}}</td>\r\n            <td>{{input.Remark}}</td>\r\n            <!--<td>-->\r\n            <!--<a mat-min-fab (click)=\"editProject(1,projectDetail.ProjectId)\" matTooltip=\"Edit Project\">-->\r\n            <!--<mat-icon color=\"primary\" class=\"mat-18\">edit</mat-icon>-->\r\n            <!--</a>-->\r\n            <!--<a mat&#45;&#45;mini-fab (click)=\"onDelete('Input',input.ProjectInputId)\" color=\"accent\"-->\r\n            <!--matTooltip=\"Delete Project\">-->\r\n            <!--<mat-icon color=\"accent\">delete</mat-icon>-->\r\n            <!--</a></td>-->\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"block\" fxFlex=\"\">\r\n\r\n        <table class=\"full-width\">\r\n          <thead>\r\n          <th>No</th>\r\n          <th>Nationality</th>\r\n          <th>Qty</th>\r\n          <th>SharePercent</th>\r\n          <th>Description</th>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let share of projectShare;let i=index;\">\r\n            <td>{{i+1}}</td>\r\n            <td>{{share.Nationality}}</td>\r\n            <td>{{share.Qty}}</td>\r\n            <td>{{share.SharePercent}}</td>\r\n            <td>{{share.Description}}</td>\r\n            <!--<td>-->\r\n            <!--<a mat-min-fab (click)=\"editProject(4,projectDetail.ProjectId)\" matTooltip=\"Edit Project\">-->\r\n            <!--<mat-icon color=\"primary\" class=\"mat-18\">edit</mat-icon>-->\r\n            <!--</a>-->\r\n            <!--<a mat&#45;&#45;mini-fab (click)=\"onDelete('nationalityComposition',share.ProjectNationalityCompositionId)\"-->\r\n            <!--color=\"accent\"-->\r\n            <!--matTooltip=\"Delete Project\">-->\r\n            <!--<mat-icon color=\"accent\">delete</mat-icon>-->\r\n            <!--</a></td>-->\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </mat-card-content>\r\n  <mat-divider></mat-divider>\r\n  <mat-card-actions>\r\n    <button color=\"primary\" mat-raised-button=\"\" (click)=\"back()\">\r\n      <mat-icon class=\"mat-18\">arrow_back</mat-icon>\r\n      Back\r\n    </button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/project-profile-detail/project-profile-detail.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-profile-detail/project-profile-detail.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ProjectProfileDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectProfileDetailComponent", function() { return ProjectProfileDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/project-profile.service */ "./src/app/Services/project-profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_project_cost_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services/project-cost.service */ "./src/app/Services/project-cost.service.ts");
/* harmony import */ var _Services_project_requirement_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/project-requirement.service */ "./src/app/Services/project-requirement.service.ts");
/* harmony import */ var _Services_project_input_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Services/project-input.service */ "./src/app/Services/project-input.service.ts");
/* harmony import */ var _Services_project_nationality_composition_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Services/project-nationality-composition.service */ "./src/app/Services/project-nationality-composition.service.ts");
/* harmony import */ var _Services_project_employment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Services/project-employment.service */ "./src/app/Services/project-employment.service.ts");
/* harmony import */ var _Services_project_output_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Services/project-output.service */ "./src/app/Services/project-output.service.ts");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _Services_Address_address_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../Services/Address/address.service */ "./src/app/Services/Address/address.service.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _model_lookupData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../model/lookupData */ "./src/app/model/lookupData.ts");
/* harmony import */ var _custor_const_consts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @custor/const/consts */ "./src/@custor/const/consts.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ProjectProfileDetailComponent = /** @class */ (function () {
    function ProjectProfileDetailComponent(projectProfileService, router, route, errMsg, addressService, dataSharingService, projectCostService, projectOutputService, projectInputService, projectEmploymentService, projectRequirementService, nationalityCompositionService) {
        this.projectProfileService = projectProfileService;
        this.router = router;
        this.route = route;
        this.errMsg = errMsg;
        this.addressService = addressService;
        this.dataSharingService = dataSharingService;
        this.projectCostService = projectCostService;
        this.projectOutputService = projectOutputService;
        this.projectInputService = projectInputService;
        this.projectEmploymentService = projectEmploymentService;
        this.projectRequirementService = projectRequirementService;
        this.nationalityCompositionService = nationalityCompositionService;
        this.projectShare = [];
        this.projectInputs = [];
        this.projectStatus = [];
        this.projectStage = [];
        this.projectStageItem = new _model_lookupData__WEBPACK_IMPORTED_MODULE_12__["ProjectStageModel"]();
        this.projectStatusItem = new _model_lookupData__WEBPACK_IMPORTED_MODULE_12__["ProjectStatusModel"]();
    }
    ProjectProfileDetailComponent.prototype.ngOnInit = function () {
        this.getProjectId();
        this.investorName = localStorage.getItem('investorName');
    };
    ProjectProfileDetailComponent.prototype.getProjectId = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.projectId = +params['id'];
            _this.getProjectDetail(_this.projectId);
            _this.getAddress(_this.projectId);
        });
    };
    ProjectProfileDetailComponent.prototype.getProjectStatus = function (id) {
        var _this = this;
        var projectStatus1 = new _model_lookupData__WEBPACK_IMPORTED_MODULE_12__["ProjectStatusModel"]();
        _custor_const_consts__WEBPACK_IMPORTED_MODULE_13__["ProjectStatus"].forEach(function (pair) {
            if (pair.Id == id) {
                projectStatus1 = {
                    'Id': pair.Id.toString(),
                    'DescriptionEnglish': pair.DescriptionEnglish,
                    'Description': pair.Description
                };
                _this.projectStatusItem = projectStatus1;
            }
        });
    };
    ProjectProfileDetailComponent.prototype.getProjectStage = function (id) {
        var _this = this;
        var projectSage = new _model_lookupData__WEBPACK_IMPORTED_MODULE_12__["ProjectStageModel"]();
        _custor_const_consts__WEBPACK_IMPORTED_MODULE_13__["ProjectStage"].forEach(function (pair) {
            if (pair.Id == id) {
                projectSage = {
                    'Id': pair.Id.toString(),
                    'DescriptionEnglish': pair.DescriptionEnglish,
                    'Description': pair.Description
                };
                _this.projectStageItem = projectSage;
            }
        });
    };
    ProjectProfileDetailComponent.prototype.getAddress = function (parent) {
        var _this = this;
        this.addressService.getAddress(parent)
            .subscribe(function (result) {
            _this.addressList = result;
            // console.log(this.addressList);
        }, function (error) { return _this.errMsg.getError(error); });
    };
    ProjectProfileDetailComponent.prototype.getProjectDetail = function (projectId) {
        var _this = this;
        this.projectProfileService.ProjectsDetail(projectId).subscribe(function (result) {
            _this.projectDetail = result;
            _this.projectCost = result.ProjectCost[0];
            _this.projectEmployement = result.ProjectEmployment[0];
            _this.projectOutput = result.ProjectOutput;
            _this.projectRequirement = result.ProjectRequirement[0];
            _this.projectShare = result.ProjectNationalityComposition;
            _this.projectInputs = result.ProjectInput;
            _this.getProjectStatus(result.ProjectStatus);
            _this.getProjectStage(result.ProjectStage);
        }, function (error) { return _this.errMsg.getError(error); });
    };
    ProjectProfileDetailComponent.prototype.onProjectList = function () {
        // console.log(this.router.url);
        this.router.navigate(['../../list'], { relativeTo: this.route });
    };
    ProjectProfileDetailComponent.prototype.onNewProject = function () {
        // console.log(this.router.url);
        this.router.navigate(['../../new'], { relativeTo: this.route });
    };
    ProjectProfileDetailComponent.prototype.onDelete = function (type, id) {
        var _this = this;
        var response = confirm("Do you want to Delete this " + type + " ?");
        if (response === true) {
            switch (type) {
                case 'cost':
                    this.projectCostService.delete(id)
                        .subscribe(function () {
                        _this.getProjectId();
                    });
                    break;
                case 'address':
                    this.projectCostService.delete(id)
                        .subscribe(function () {
                        _this.getProjectId();
                    });
                    break;
                case 'Utility':
                    this.projectRequirementService.delete(id)
                        .subscribe(function () {
                        _this.getProjectId();
                    });
                    break;
                case 'Employment':
                    this.projectEmploymentService.delete(id)
                        .subscribe(function () {
                        // this.getAllProject();
                    });
                    break;
                case 'Output':
                    this.projectOutputService.delete(id)
                        .subscribe(function () {
                        _this.getProjectId();
                    });
                    break;
                case 'Input':
                    this.projectInputService.delete(id)
                        .subscribe(function () {
                        // this.getAllProject();
                    });
                    break;
                case 'nationalityComposition':
                    this.nationalityCompositionService.delete(id)
                        .subscribe(function () {
                        _this.getProjectId();
                    });
                    break;
            }
            return true;
        }
        else {
            return false;
        }
    };
    ProjectProfileDetailComponent.prototype.editProject = function (stepperIndex, projectId) {
        var _this = this;
        setTimeout(function () { return _this.dataSharingService.startingEditingProject.next(_this.projectDetail); }, 0);
        setTimeout(function () { return _this.dataSharingService.steeperIndex.next(stepperIndex); }, 0);
        this.router.navigate(['/pro', projectId], { relativeTo: this.route });
    };
    ProjectProfileDetailComponent.prototype.back = function () {
        window.history.back();
    };
    ProjectProfileDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-profile-detail',
            template: __webpack_require__(/*! ./project-profile-detail.component.html */ "./src/app/components/project-profile/project-profile-detail/project-profile-detail.component.html"),
            styles: [__webpack_require__(/*! ./project-profile-detail.component.css */ "./src/app/components/project-profile/project-profile-detail/project-profile-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_project_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProjectProfileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_11__["ErrorMessage"],
            _Services_Address_address_service__WEBPACK_IMPORTED_MODULE_10__["AddressService"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_9__["DataSharingService"],
            _Services_project_cost_service__WEBPACK_IMPORTED_MODULE_3__["ProjectCostService"],
            _Services_project_output_service__WEBPACK_IMPORTED_MODULE_8__["ProjectOutputService"],
            _Services_project_input_service__WEBPACK_IMPORTED_MODULE_5__["ProjectInputService"],
            _Services_project_employment_service__WEBPACK_IMPORTED_MODULE_7__["ProjectEmploymentService"],
            _Services_project_requirement_service__WEBPACK_IMPORTED_MODULE_4__["ProjectRequirementService"],
            _Services_project_nationality_composition_service__WEBPACK_IMPORTED_MODULE_6__["ProjectNationalityCompositionService"]])
    ], ProjectProfileDetailComponent);
    return ProjectProfileDetailComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-project-profile-project-profile-detail-project-detail-module~components-project-profi~3e17c754.js.map