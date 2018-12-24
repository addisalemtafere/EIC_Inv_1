(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-project-profile-project-module~components-project-profile-project-share-Share-module"],{

/***/ "./src/app/components/project-profile/project-share/Share.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/project-profile/project-share/Share.module.ts ***!
  \**************************************************************************/
/*! exports provided: ShareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareModule", function() { return ShareModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _share_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./share-routing.module */ "./src/app/components/project-profile/project-share/share-routing.module.ts");
/* harmony import */ var _project_share_list_project_share_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-share-list/project-share-list.component */ "./src/app/components/project-profile/project-share/project-share-list/project-share-list.component.ts");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _project_share_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-share.component */ "./src/app/components/project-profile/project-share/project-share.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ShareModule = /** @class */ (function () {
    function ShareModule() {
    }
    ShareModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _share_routing_module__WEBPACK_IMPORTED_MODULE_2__["ShareRoutingModule"]
            ],
            declarations: [_project_share_list_project_share_list_component__WEBPACK_IMPORTED_MODULE_3__["ProjectShareListComponent"], _project_share_component__WEBPACK_IMPORTED_MODULE_5__["ProjectShareComponent"]],
            exports: [_project_share_list_project_share_list_component__WEBPACK_IMPORTED_MODULE_3__["ProjectShareListComponent"], _project_share_component__WEBPACK_IMPORTED_MODULE_5__["ProjectShareComponent"]]
        })
    ], ShareModule);
    return ShareModule;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-share/project-share-list/project-share-list.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-share/project-share-list/project-share-list.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table style=\"height: 320px;display: block;overflow: auto;\" class=\"scrollbar table full-width\">\r\n  <thead>\r\n  <th>No</th>\r\n  <th>Nationality</th>\r\n  <th>quantity</th>\r\n  <th>SharePercent</th>\r\n  <th>Description</th>\r\n\r\n  </thead>\r\n  <tbody style=\"overflow: auto;\">\r\n  <tr class=\"planned\">\r\n    <td></td>\r\n    <td>{{plannedShareList?.Nationality | countryPipe}}</td>\r\n    <td>{{plannedShareList?.Qty}}</td>\r\n    <td>{{plannedShareList?.SharePercent}}</td>\r\n    <td>{{plannedShareList?.Description}}</td>\r\n  </tr>\r\n  <tr *ngFor=\"let share of shareList;let i=index;\">\r\n    <td>{{i+1}}</td>\r\n    <td>{{share.Nationality | countryPipe}}</td>\r\n    <td>{{share.Qty}}</td>\r\n    <td>{{share.SharePercent}}</td>\r\n    <td>{{share.Description}}</td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/project-share/project-share-list/project-share-list.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-share/project-share-list/project-share-list.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table td {\n  padding: 4px 90px 4px 5px;\n  font-size: 13px;\n  border-top: 1px solid #FAFAFA; }\n\n.table th {\n  padding: 4px 90px 4px 5px;\n  font-size: 13px;\n  border-top: 1px solid #FAFAFA; }\n\ntable tbody tr:nth-child(2) td {\n  border: 1px solid #0d8055;\n  background-color: #0d8055;\n  color: white;\n  font-weight: bolder; }\n"

/***/ }),

/***/ "./src/app/components/project-profile/project-share/project-share-list/project-share-list.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-share/project-share-list/project-share-list.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ProjectShareListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectShareListComponent", function() { return ProjectShareListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_project_nationality_composition_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Services/project-nationality-composition.service */ "./src/app/Services/project-nationality-composition.service.ts");
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



var ProjectShareListComponent = /** @class */ (function () {
    function ProjectShareListComponent(shareService, route) {
        this.shareService = shareService;
        this.route = route;
    }
    ProjectShareListComponent.prototype.ngOnInit = function () {
        this.ProjectId = this.route.snapshot.params['ProjectId'];
        this.getShareAfterCare();
        this.getPlannedShareAfterCare();
    };
    ProjectShareListComponent.prototype.getShareAfterCare = function () {
        var _this = this;
        this.shareService.getAll()
            .subscribe(function (result) {
            _this.shareList = result;
        });
    };
    ProjectShareListComponent.prototype.getPlannedShareAfterCare = function () {
        var _this = this;
        this.shareService.getAll()
            .subscribe(function (result) {
            _this.plannedShareList = result[0];
        });
    };
    ProjectShareListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-share-list',
            template: __webpack_require__(/*! ./project-share-list.component.html */ "./src/app/components/project-profile/project-share/project-share-list/project-share-list.component.html"),
            styles: [__webpack_require__(/*! ./project-share-list.component.scss */ "./src/app/components/project-profile/project-share/project-share-list/project-share-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_project_nationality_composition_service__WEBPACK_IMPORTED_MODULE_1__["ProjectNationalityCompositionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProjectShareListComponent);
    return ProjectShareListComponent;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-share/project-share.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-share/project-share.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-header-row {\r\n  background-color: white;\r\n  border-top: 1px solid #f1f1f1;\r\n  border-bottom: 1px solid #f1f1f1 !important;\r\n}\r\n\r\n.mat-card-header {\r\n  min-height: 30px;\r\n  background-color: #fafafa;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/project-share/project-share.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-share/project-share.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"margin-2\" style=\"box-shadow: none;border: 1px solid #dddddd\" *ngIf=\"!isSol\">\r\n  <!--<mat-card-subtitle class=\"sub-title\">-->\r\n  <!--<mat-icon color=\"primary\" class=\"mat-18\">add</mat-icon>-->\r\n  <!--Add Share-->\r\n  <!--<mat-divider></mat-divider>-->\r\n  <!--</mat-card-subtitle>-->\r\n\r\n  <mat-card-content>\r\n    <form [formGroup]=\"projectShareForm\" novalidate>\r\n\r\n      <div fxLayout=\"row\"\r\n           fxLayoutAlign=\"start center\"\r\n           class=\"content\"\r\n           fxLayout.lt-sm=\"column\"\r\n           fxLayoutGap=\"2em\">\r\n\r\n        <div class=\"block\" fxLayoutGap=\"2em\">\r\n          <mat-form-field fxLayoutGap=\"4em\" [fxFlex]=\"20\">\r\n            <mat-label>Nationality * :</mat-label>\r\n            <mat-select formControlName=\"Nationality\">\r\n              <mat-option *ngFor=\"let nation of nationList\" [value]=\"nation.id\">\r\n                {{nation.descriptionEnglish}}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error align=\"start\" *ngIf=\"formErrors.Nationality\" class=\"form__error\">{{ formErrors.Nationality }}\r\n            </mat-error>\r\n            <mat-error align=\"start\" *ngIf=\"projectShareForm.get('Nationality').hasError('value')\" class=\"form__error\">\r\n              Redundant nation is not allowed\r\n            </mat-error>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxLayoutGap=\"4em\" [fxFlex]=\"20\">\r\n            <mat-label>Quantity *:</mat-label>\r\n            <input type=\"number\" formControlName=\"Qty\" matInput>\r\n            <mat-error align=\"start\" *ngIf=\"formErrors.Qty\" class=\"form__error\">{{ formErrors.Qty }}\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field fxLayoutGap=\"4em\" [fxFlex]=\"20\">\r\n            <mat-label>Share Percent % *:</mat-label>\r\n            <input type=\"number\"\r\n                   pattern=\"^([0-9]{1,2}){1}(\\.[0-9]{1,2})?$\"\r\n                   formControlName=\"SharePercent\"\r\n                   matInput>\r\n            <mat-error align=\"start\" *ngIf=\"formErrors.SharePercent\" class=\"form__error\">{{ formErrors.SharePercent }}\r\n            </mat-error>\r\n            <mat-error align=\"start\" *ngIf=\"projectShareForm.get('SharePercent').hasError('value')\" class=\"form__error\">\r\n              Sum of all share percent is exceeded 100\r\n            </mat-error>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"full-width\" fxLayoutGap=\"4em\" [fxFlex]=\"30\">\r\n            <mat-label>Description :</mat-label>\r\n            <textarea formControlName=\"Description\" matInput>\r\n                 </textarea>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <!--<div class=\"block\" fxFlex=\"40%\">-->\r\n\r\n        <!--&lt;!&ndash;Total:{{totalShare}}&ndash;&gt;-->\r\n        <!--</div>-->\r\n        <div class=\"block\" fxFlex=\"10%\">\r\n          <button class=\"custom-button \" [disabled]=\"!projectShareForm.valid\"\r\n                  (click)=\"onSubmit()\"\r\n                  matTooltip=\"Add Share\">\r\n            <mat-icon color=\"accent\" class=\" mat-18\">done</mat-icon>\r\n            {{editMode ? 'Update' : 'Add'}}\r\n          </button>\r\n          <!--<a style=\"margin-left: 4px\" mat-raised-button class=\"pointer\" (click)=\"onClear()\" matTooltip=\"Clear Form\">-->\r\n          <!--<mat-icon color=\"accent\" class=\"mat-18\">clear_all</mat-icon>-->\r\n          <!--clear-->\r\n          <!--</a>-->\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card class=\"margin-2 padding-0\" *ngIf=\"nationalityCompositionData.length>0 && !isSol\">\r\n  <mat-card-header>\r\n    <mat-card-subtitle class=\"sub-title\">List of Share\r\n      <!--<mat-divider></mat-divider>-->\r\n    </mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"center \">\r\n\r\n      <mat-table class=\"full-width\" #table [dataSource]=\"dataSource\">\r\n        <ng-container style=\"width: 10px !important;\" matColumnDef=\"No\">\r\n          <mat-header-cell style=\"width: 10px !important;\" *matHeaderCellDef>No</mat-header-cell>\r\n          <mat-cell style=\"width: 10px !important;\" *matCellDef=\"let nationalityCompositionData;let i=index;\">{{i+1}}\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"Nationality\">\r\n          <mat-header-cell *matHeaderCellDef>Nationality</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let nationalityCompositionData\"> {{nationalityCompositionData.Nationality | countryPipe\r\n            : 1\r\n            }}\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"Qty\">\r\n          <mat-header-cell *matHeaderCellDef>Quantity</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let nationalityCompositionData\"> {{nationalityCompositionData.Qty}}\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"SharePercent\">\r\n          <mat-header-cell *matHeaderCellDef> Share Percent</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let nationalityCompositionData\"> {{nationalityCompositionData.SharePercent }}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"Description\">\r\n          <mat-header-cell *matHeaderCellDef>Description</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let nationalityCompositionData\">{{nationalityCompositionData.Description }}</mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"Action\">\r\n          <mat-header-cell *matHeaderCellDef>Action</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let nationalityCompositionData;let i=index;\">\r\n            <div>\r\n              <a class=\"pointer\" mat-min-fab matTooltip=\"Click here to edit the Share\"\r\n                 (click)=\"onEditShare(i,nationalityCompositionData.ProjectNationalityCompositionId)\">\r\n                <mat-icon color=\"primary\" class=\"mat-18\">edit</mat-icon>\r\n                Edit\r\n              </a>\r\n              <a class=\"pointer\" mat-min-fab color=\"warn\" matTooltip=\"Click here to delete the dhare\"\r\n                 (click)=\"deleteShare(i,nationalityCompositionData.ProjectNationalityCompositionId)\">\r\n                <mat-icon color=\"warn\">delete</mat-icon>\r\n                Delete\r\n              </a>\r\n            </div>\r\n          </mat-cell>\r\n        </ng-container>\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\">\r\n        </mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n        </mat-row>\r\n      </mat-table>\r\n    </div>\r\n  </mat-card-content>\r\n\r\n  <div align=\"center\">\r\n    <div style=\"padding: 20px\" fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"2em\">\r\n\r\n      <div fxFlex=\"15\">\r\n\r\n        <!--<button class=\"custom-button\" (click)=\"next()\" color=\"warn\" type=\"button\">-->\r\n        <!--Back-->\r\n        <!--</button>-->\r\n      </div>\r\n      <div style=\"text-align: center\" fxFlex=\"67\" fxFlexAlign=\"center\">\r\n\r\n      </div>\r\n      <div fxFlex=\"15\">\r\n\r\n        <!--<button class=\"custom-button\" (click)=\"next()\" color=\"warn\" type=\"button\">-->\r\n        <!--Next-->\r\n        <!--</button>-->\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</mat-card>\r\n\r\n<mat-card class=\"margin-2\" style=\"box-shadow: none;border: 1px solid #dddddd\" *ngIf=\"isSol\">\r\n  <!--<mat-card-subtitle class=\"sub-title\">-->\r\n  <!--<mat-icon color=\"primary\" class=\"mat-18\">add</mat-icon>-->\r\n  <!--Add Share-->\r\n  <!--<mat-divider></mat-divider>-->\r\n  <!--</mat-card-subtitle>-->\r\n  <mat-card-content>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\">\r\n      <div class=\"block\" fxFlex=\"\">\r\n        <span style=\"font-weight: bolder;font-size: 14px;\">Full Name : </span>{{InvestorDetial?.InvestorNameEng}}\r\n      </div>\r\n      <div class=\"block\" fxFlex=\"\">\r\n        <span style=\"font-size: 14px;font-weight: bolder;\">Share Percent </span>100 %\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/project-share/project-share.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-share/project-share.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProjectShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectShareComponent", function() { return ProjectShareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_project_nationality_composition_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/project-nationality-composition.service */ "./src/app/Services/project-nationality-composition.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _Services_Address_address_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/Address/address.service */ "./src/app/Services/Address/address.service.ts");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _custor_validation_custom_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @custor/validation/custom/form */ "./src/@custor/validation/custom/form.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../Services/project-profile.service */ "./src/app/Services/project-profile.service.ts");
/* harmony import */ var _investor_investor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../investor/investor.service */ "./src/app/components/investor/investor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ProjectShareComponent = /** @class */ (function () {
    function ProjectShareComponent(formBuilder, snackbar, route, invService, projectProfileService, errMsg, toastr, dataSharing, formService, addressService, nationalityCompositionService) {
        this.formBuilder = formBuilder;
        this.snackbar = snackbar;
        this.route = route;
        this.invService = invService;
        this.projectProfileService = projectProfileService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.dataSharing = dataSharing;
        this.formService = formService;
        this.addressService = addressService;
        this.nationalityCompositionService = nationalityCompositionService;
        this.formErrors = {
            Nationality: '',
            Qty: '',
            SharePercent: ''
        };
        this.nationList = [];
        this.editMode = false;
        this.loading = false;
        this.nationalityCompositionData = [];
        this.displayedColumns = ['No', 'Nationality', 'Qty', 'SharePercent', 'Description', 'Action'];
    }
    ProjectShareComponent.prototype.ngOnInit = function () {
        this.ServiceId = this.route.snapshot.params['ServiceId'];
        this.InvestorId = this.route.snapshot.params['InvestorId'];
        this.workFlowId = this.route.snapshot.params['workFlowId'];
        this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
        this.projectId = this.route.snapshot.params['ProjectId'];
        this.getAllNation();
        this.getInvestorType();
        if (this.projectId > 1) {
            this.getNationalityCompositionsByProject();
        }
        this.formBuild();
    };
    ProjectShareComponent.prototype.getNationalityCompositionsByProject = function () {
        var _this = this;
        this.nationalityCompositionService.NationalityCompositionsByProject(this.projectId).subscribe(function (result) {
            if (result.length > 0) {
                _this.nationalityCompositionData = result;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this.nationalityCompositionData);
                _this.loading = false;
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    ProjectShareComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formService.markFormGroupTouched(this.projectShareForm);
        this.projectShareForm.removeControl('ProjectNationalityCompositionId');
        if (this.projectShareForm.valid) {
            if (!this.editMode) {
                this.nationalityCompositionService.create(this.projectShareForm.value)
                    .subscribe(function (result) {
                    if (_this.nationalityCompositionData.length < 1) {
                        setTimeout(function () { return _this.dataSharing.currentIndex.next(7); }, 0);
                    }
                    _this.projectShareForm.addControl('ProjectNationalityCompositionId', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''));
                    _this.nationalityCompositionData.push(result);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this.nationalityCompositionData);
                    _this.notification('saved');
                    _this.onClear();
                });
            }
            else {
                this.nationalityCompositionService.update(this.projectShareForm.value, this.ProjectNationalityCompositionId)
                    .subscribe(function (result) {
                    _this.notification('updated');
                    _this.nationalityCompositionData[_this.shareEditIndex] = result;
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this.nationalityCompositionData);
                    _this.onClear();
                }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
            }
        }
        else {
            this.formErrors = this.formService.validateForm(this.projectShareForm, this.formErrors, false);
        }
    };
    ProjectShareComponent.prototype.formBuild = function () {
        var _this = this;
        this.projectShareForm = this.formBuilder.group({
            ProjectId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.projectId),
            ProjectNationalityCompositionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            workFlowId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.workFlowId),
            Nationality: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.checkNationality.bind(this)]),
            Qty: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            SharePercent: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.validateTotal.bind(this)]),
            Description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2))
        });
        this.projectShareForm.valueChanges.subscribe(function (data) {
            _this.formErrors = _this.formService.validateForm(_this.projectShareForm, _this.formErrors, true);
        });
    };
    ProjectShareComponent.prototype.deleteShare = function (index, id) {
        var _this = this;
        this.nationalityCompositionService.delete(id)
            .subscribe(function () {
            _this.notification('Deleted');
            _this.nationalityCompositionData.splice(index, 1);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this.nationalityCompositionData);
        });
    };
    ProjectShareComponent.prototype.getAllNation = function () {
        var _this = this;
        this.addressService.getNationality()
            .subscribe(function (result) {
            _this.nationList = result;
        });
    };
    ProjectShareComponent.prototype.onClear = function () {
        this.editMode = false;
        this.projectShareForm.reset();
        this.projectShareForm.patchValue({
            ProjectId: this.projectId
        });
        this.projectShareForm.patchValue({
            workFlowId: this.workFlowId
        });
    };
    ProjectShareComponent.prototype.ngOnDestroy = function () {
        // this.subscription.unsubscribe();
    };
    ProjectShareComponent.prototype.notification = function (message) {
        this.toastr.success(" Succesfully " + message + " Data.!", 'Success');
        this.loading = false;
        this.snackbar.open("Succesfully " + message + " Data.!", 'Close', {
            duration: 3000,
        });
    };
    ProjectShareComponent.prototype.onEditShare = function (index, id) {
        this.editMode = true;
        this.ProjectNationalityCompositionId = id;
        this.shareEditIndex = index;
        this.productShare = this.nationalityCompositionData[index];
        this.projectShareForm.patchValue(this.productShare);
    };
    ProjectShareComponent.prototype.checkNationality = function (input) {
        if (typeof (this.nationalityCompositionData) !== 'undefined' && !this.editMode) {
            for (var _i = 0, _a = this.nationalityCompositionData; _i < _a.length; _i++) {
                var nation = _a[_i];
                if (input.value === nation.Nationality) {
                    return { value: true };
                }
            }
        }
        return null;
    };
    ProjectShareComponent.prototype.validateTotal = function (input) {
        var total = 0;
        if (typeof (this.nationalityCompositionData) !== 'undefined') {
            for (var _i = 0, _a = this.nationalityCompositionData; _i < _a.length; _i++) {
                var nation = _a[_i];
                total = total + nation.SharePercent + input.value;
            }
            if (total > 100) {
                return { value: true };
            }
        }
        return null;
    };
    ProjectShareComponent.prototype.getInvestorType = function () {
        var _this = this;
        this.invService.getInvestor(localStorage.getItem('InvestorId'))
            .subscribe(function (result) {
            _this.InvestorDetial = result;
            if (result.LegalStatus === 1) {
                _this.isSol = true;
            }
            else {
                _this.isSol = false;
            }
            if (!_this.isSol && _this.projectId < 1) {
                setTimeout(function () { return _this.dataSharing.currentIndex.next(7); }, 0);
            }
        });
    };
    ProjectShareComponent.prototype.ngAfterContentChecked = function () {
        // this.projectShareForm.patchValue({
        //   ProjectId: localStorage.getItem('ProjectId')
        // });
        // this.projectShareForm.patchValue({
        //   workFlowId: localStorage.getItem('workFlowId')
        // });
    };
    ProjectShareComponent.prototype.next = function () {
        this.dataSharing.steeperIndex.next(6);
    };
    ProjectShareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-share',
            template: __webpack_require__(/*! ./project-share.component.html */ "./src/app/components/project-profile/project-share/project-share.component.html"),
            styles: [__webpack_require__(/*! ./project-share.component.css */ "./src/app/components/project-profile/project-share/project-share.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            _investor_investor_service__WEBPACK_IMPORTED_MODULE_12__["InvestorService"],
            _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_11__["ProjectProfileService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_5__["DataSharingService"],
            _custor_validation_custom_form__WEBPACK_IMPORTED_MODULE_9__["FormService"],
            _Services_Address_address_service__WEBPACK_IMPORTED_MODULE_4__["AddressService"],
            _Services_project_nationality_composition_service__WEBPACK_IMPORTED_MODULE_2__["ProjectNationalityCompositionService"]])
    ], ProjectShareComponent);
    return ProjectShareComponent;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-share/share-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/project-profile/project-share/share-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ShareRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareRoutingModule", function() { return ShareRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_share_list_project_share_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-share-list/project-share-list.component */ "./src/app/components/project-profile/project-share/project-share-list/project-share-list.component.ts");
/* harmony import */ var _project_share_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-share.component */ "./src/app/components/project-profile/project-share/project-share.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var shareRoutes = [
    { path: '', component: _project_share_list_project_share_list_component__WEBPACK_IMPORTED_MODULE_2__["ProjectShareListComponent"] },
    { path: ':id', component: _project_share_component__WEBPACK_IMPORTED_MODULE_3__["ProjectShareComponent"] }
];
var ShareRoutingModule = /** @class */ (function () {
    function ShareRoutingModule() {
    }
    ShareRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(shareRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ShareRoutingModule);
    return ShareRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-project-profile-project-module~components-project-profile-project-share-Share-module.js.map