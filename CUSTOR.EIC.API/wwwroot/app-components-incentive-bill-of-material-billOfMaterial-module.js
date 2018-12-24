(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-incentive-bill-of-material-billOfMaterial-module"],{

/***/ "./src/app/components/incentive/bill-of-material/BillOfMaterialRouting.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/incentive/bill-of-material/BillOfMaterialRouting.module.ts ***!
  \***************************************************************************************/
/*! exports provided: BillOfMaterialRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillOfMaterialRoutingModule", function() { return BillOfMaterialRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bill_of_material_tab_bill_of_material_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bill-of-material-tab/bill-of-material-tab.component */ "./src/app/components/incentive/bill-of-material/bill-of-material-tab/bill-of-material-tab.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _bill_of_material_tab_bill_of_material_tab_component__WEBPACK_IMPORTED_MODULE_2__["BillOfMaterialTabComponent"] },
    { path: 'bill-of-material-tab', component: _bill_of_material_tab_bill_of_material_tab_component__WEBPACK_IMPORTED_MODULE_2__["BillOfMaterialTabComponent"] }
];
var BillOfMaterialRoutingModule = /** @class */ (function () {
    function BillOfMaterialRoutingModule() {
    }
    BillOfMaterialRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BillOfMaterialRoutingModule);
    return BillOfMaterialRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/incentive/bill-of-material/bill-of-material-tab/bill-of-material-tab.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/incentive/bill-of-material/bill-of-material-tab/bill-of-material-tab.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group class=\"margin-2\">\r\n  <mat-tab label=\"Bill Of Material\">\r\n    <ng-template matTabContent=\"\">\r\n      <mat-card *ngIf=\"!isInvestor\" class=\"margin-2 simple-card\">\r\n        <mat-card-header>\r\n          <mat-card-subtitle class=\"sub-title\"></mat-card-subtitle>\r\n          <button class=\"margin-10 certificate-title\" mat-raised-button=\"\"\r\n                  (click)=\"addMessage()\" color=\"primary\">\r\n            Add Message\r\n          </button>\r\n        </mat-card-header>\r\n      </mat-card>\r\n      <app-bill-of-material></app-bill-of-material>\r\n    </ng-template>\r\n    <div>\r\n    </div>\r\n  </mat-tab>\r\n  <!--<mat-tab *ngIf=\"!isInvestor\" label=\"Letter\">-->\r\n  <!--<ng-template matTabContent>-->\r\n    <!--<app-letter></app-letter>-->\r\n  <!--</ng-template>-->\r\n<!--</mat-tab>-->\r\n  <mat-tab label=\"Confirmation\">\r\n    <ng-template matTabContent>\r\n      <app-service-confirmation></app-service-confirmation>\r\n    </ng-template>\r\n  </mat-tab>\r\n\r\n</mat-tab-group>\r\n"

/***/ }),

/***/ "./src/app/components/incentive/bill-of-material/bill-of-material-tab/bill-of-material-tab.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/incentive/bill-of-material/bill-of-material-tab/bill-of-material-tab.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/incentive/bill-of-material/bill-of-material-tab/bill-of-material-tab.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/incentive/bill-of-material/bill-of-material-tab/bill-of-material-tab.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: BillOfMaterialTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillOfMaterialTabComponent", function() { return BillOfMaterialTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _project_profile_notification_notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../project-profile/notification/notification.component */ "./src/app/components/project-profile/notification/notification.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _setting_services_tabs_serviceApplication_serviceapplication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../setting/services-tabs/serviceApplication/serviceapplication.service */ "./src/app/components/setting/services-tabs/serviceApplication/serviceapplication.service.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
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







var BillOfMaterialTabComponent = /** @class */ (function () {
    function BillOfMaterialTabComponent(serviceApplicationsServices, accountService, route, dialog, toastr) {
        this.serviceApplicationsServices = serviceApplicationsServices;
        this.accountService = accountService;
        this.route = route;
        this.dialog = dialog;
        this.toastr = toastr;
    }
    BillOfMaterialTabComponent.prototype.ngOnInit = function () {
        this.getUserType();
        this.title = localStorage.getItem('title');
        this.projectName = localStorage.getItem('projectName');
        this.investorName = localStorage.getItem('investorName');
        this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
        this.userName = this.accountService.currentUser.FullName;
    };
    BillOfMaterialTabComponent.prototype.getUserType = function () {
        this.isInvestor = this.accountService.getUserType();
    };
    BillOfMaterialTabComponent.prototype.addMessage = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.data = {
            ServiceApplicationId: this.ServiceApplicationId
        };
        // this.dialog.open(NotificationComponent);
        this.dialog.open(_project_profile_notification_notification_component__WEBPACK_IMPORTED_MODULE_1__["NotificationComponent"], dialogConfig);
    };
    BillOfMaterialTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bill-of-material-tab',
            template: __webpack_require__(/*! ./bill-of-material-tab.component.html */ "./src/app/components/incentive/bill-of-material/bill-of-material-tab/bill-of-material-tab.component.html"),
            styles: [__webpack_require__(/*! ./bill-of-material-tab.component.scss */ "./src/app/components/incentive/bill-of-material/bill-of-material-tab/bill-of-material-tab.component.scss")]
        }),
        __metadata("design:paramtypes", [_setting_services_tabs_serviceApplication_serviceapplication_service__WEBPACK_IMPORTED_MODULE_4__["ServiceapplicationService"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], BillOfMaterialTabComponent);
    return BillOfMaterialTabComponent;
}());



/***/ }),

/***/ "./src/app/components/incentive/bill-of-material/bill-of-material.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/incentive/bill-of-material/bill-of-material.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-page-header icon=\"dashboard\" title=\"dashboard\"></app-page-header>-->\r\n\r\n<div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\">\r\n  <div *ngIf=\"errors.length>0\" class=\"alert-info\" fxLayout=\" row wrap\" fxLayoutAlign=\"center\">\r\n    <ol type=\"i\">\r\n      <li class=\"mat-error\" *ngFor=\"let error of errors;\">{{error}}</li>\r\n    </ol>\r\n  </div>\r\n\r\n\r\n</div>\r\n<mat-card class=\"margin-2\" style=\"background-color: #fafafa;\">\r\n  <mat-card-content>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\">\r\n      <form *ngIf=\"itemList.length<=0\" formGroup=\"documentForm\">\r\n\r\n        <div class=\"block\" style=\"margin: 20px;padding: 15px;float:left\">\r\n          <mat-form-field>\r\n            <mat-label>{{'billofmaterrial.Phase' | translate}}</mat-label>\r\n            <mat-select formControlName=\"Phase\" style=\"font-family: Calibri\" type=\"text\"\r\n                        (selectionChange)=\"getPhaseId($event.value)\"\r\n                        [compareWith]=\"compareIds\" required>\r\n              <option value=\"0\">--Select--</option>\r\n              <mat-option *ngFor=\"let Phase of PhaseLookups\" [value]=\"Phase.LookupId\">\r\n                <span>{{Phase.English}}</span>\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <a class=\"pointer\"\r\n             (click)=\"file.click()\">\r\n            <span class=\"custom-button\" style=\"padding: 10px\">Attach Item List</span>\r\n          </a>\r\n          <input #file hidden type=\"file\" multiple (change)=\"upload(i,file.files)\"/>\r\n        </div>\r\n        <!--</div>-->\r\n      </form>\r\n      <div class=\"block\" fxFlex=\"\">\r\n        <button *ngIf=\"itemList.length>0\"\r\n                style=\"margin: 10px\" (click)=\"UpdateServiceApplication()\"\r\n                mat-raised-button=\"\" class=\"mr-16\"\r\n                color=\"primary\">\r\n          <mat-icon color=\"primary\">done</mat-icon>\r\n          <span>Submit Application</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"block\" fxFlex=\"\">\r\n\r\n        <a\r\n          *ngIf=\"itemList.length<=0\"\r\n          style=\"margin-left: 10px\"\r\n          mat-raised-button=\"\" class=\"mr-16\"\r\n          color=\"primary\">\r\n          <mat-icon class=\"mat-18\">file_download</mat-icon>\r\n          <span>Click Here To Download Sample  </span>\r\n        </a>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </mat-card-content>\r\n\r\n</mat-card>\r\n<mat-card class=\"margin-2\" style=\"box-shadow: none;padding: 15px !important;border: 1px solid #dddddd\"\r\n          *ngIf=\"addshow || editMode\">\r\n\r\n  <form [formGroup]=\"billOfMaterialForm\" novalidate>\r\n    <mat-card-content>\r\n\r\n      <div fxLayout.xs=\"row wrap\"\r\n           fxLayoutAlign.xs=\"start center\"\r\n           fxLayoutGap=\"2em\">\r\n        <div class=\"block\" fxLayoutGap=\"2em\">\r\n          <mat-form-field [fxFlex]=\"20\">\r\n            <mat-label>{{'billofmaterrial.Description' | translate}}</mat-label>\r\n            <input type=\"text\" matInput\r\n                   formControlName=\"Description\">\r\n          </mat-form-field>\r\n          <mat-form-field [fxFlex]=\"20\">\r\n            <mat-label>{{'billofmaterrial.HsCode' | translate}}</mat-label>\r\n            <input type=\"text\" matInput\r\n                   formControlName=\"HsCode\">\r\n\r\n          </mat-form-field>\r\n          <mat-form-field [fxFlex]=\"20\">\r\n            <mat-label>{{'billofmaterrial.Quantity' | translate}}</mat-label>\r\n            <input type=\"text\" matInput\r\n                   formControlName=\"Quantity\">\r\n          </mat-form-field>\r\n          <mat-form-field [fxFlex]=\"20\">\r\n            <mat-label>{{'billofmaterrial.MesurmentUnit' | translate}}</mat-label>\r\n            <mat-select formControlName=\"MesurmentUnit\" required>\r\n              <option value=\"0\">--Select--</option>\r\n              <mat-option *ngFor=\"let unit of unitTypes\" [value]=\"unit.DescriptionEnglish\">\r\n                <span>{{unit.DescriptionEnglish}}</span>\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <span *ngIf=\"!isInvestor\">\r\n          <mat-form-field [fxFlex]=\"20\">\r\n            <mat-label>{{'billofmaterrial.RejectionReason' | translate}}</mat-label>\r\n            <mat-select formControlName=\"RejectionReason\" required>\r\n              <option value=\"0\">--Select--</option>\r\n              <mat-option *ngFor=\"let RejectionReason of Lookups\"\r\n                          [value]=\"RejectionReason.LookupId\">\r\n                <span>{{RejectionReason.English}}</span>\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          </span>\r\n        </div>\r\n\r\n        <div class=\"block\" fxFlex=\"15%\">\r\n          <button [disabled]=\"!billOfMaterialForm.valid\" class=\"custom-button\" (click)=\"onSubmit()\">\r\n            <mat-icon color=\"accent\" class=\"mat-18\">done</mat-icon>\r\n            {{editMode ? 'Update' : 'Add'}}\r\n          </button>\r\n          <!--<a style=\"margin-left: 2px;\" mat-raised-button class=\"pointer\" (click)=\"onClear()\" matTooltip=\"Clear Form\">-->\r\n          <!--<mat-icon color=\"accent\" class=\"mat-18\">clear_all</mat-icon>-->\r\n          <!--Clear-->\r\n          <!--</a>-->\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n  </form>\r\n</mat-card>\r\n<mat-card class=\"margin-2\">\r\n\r\n  <mat-card-content>\r\n\r\n\r\n    <div fxFlex=\"100%\" *ngIf=\"itemList.length>0\">\r\n\r\n      <div class=\"spinner-container\" *ngIf=\"loading\">\r\n        <mat-progress-bar mode=\"query\"></mat-progress-bar>\r\n      </div>\r\n      <mat-table #table [dataSource]=\"dataSource\">\r\n        <ng-container matColumnDef=\"No\">\r\n          <mat-header-cell [fxFlex]=\"6\" *matHeaderCellDef>No</mat-header-cell>\r\n          <mat-cell [fxFlex]=\"6\" *matCellDef=\"let itemList;let i=index;\">\r\n            {{i+1}}\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"Description\">\r\n          <mat-header-cell fxFlex=\"30\" *matHeaderCellDef>Description</mat-header-cell>\r\n          <mat-cell fxFlex=\"30\" *matCellDef=\"let itemList\">\r\n            {{itemList?.Description}}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"HsCode\">\r\n          <mat-header-cell *matHeaderCellDef>HsCode</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let itemList\">\r\n            {{itemList?.HsCode }}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"Quantity\">\r\n          <mat-header-cell *matHeaderCellDef>Quantity</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let itemList\"> {{itemList?.Quantity }}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"MesurmentUnit\">\r\n          <mat-header-cell *matHeaderCellDef>Measurment Unit</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let itemList\"> {{itemList?.MesurmentUnit |\r\n            filterPipe: 10}}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"RejectionReason\">\r\n          <mat-header-cell *matHeaderCellDef>Rejection Reason</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let itemList\"> {{itemList?.RejectionReason | lookupReasonPipe : 1}}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"approval\">\r\n          <mat-header-cell *matHeaderCellDef>\r\n            <span *ngIf=\"isInvestor\"> Is Approved</span>\r\n            <span *ngIf=\"!isInvestor\">\r\n              <mat-checkbox></mat-checkbox>\r\n            Approve All</span>\r\n          </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let itemList\">\r\n            <!--<mat-checkbox checked=\"false\">approve</mat-checkbox>-->\r\n            <mat-checkbox [disabled]=\"isInvestor\" [value]=\"itemList?.IncentiveBoMRequestItemId\"\r\n                          [checked]=\"itemList.IsApproved\"\r\n                          (change)=\"onMangerControlChanged($event,itemList)\">\r\n            </mat-checkbox>\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"Action\">\r\n          <mat-header-cell fxFlex=\"15\" *matHeaderCellDef>Action\r\n            <button (click)=\"addItem()\" style=\"margin-left: 12px;\" color=\"primary\" mat-raised-button=\"\"\r\n                    type=\"button\">add\r\n\r\n            </button>\r\n          </mat-header-cell>\r\n\r\n          <mat-cell fxFlex=\"15\" *matCellDef=\"let itemList;let i=index;\">\r\n            <div>\r\n              <a class=\"pointer\" mat-min-fab matTooltip=\"Click here to edit the product\"\r\n                 (click)=\"onEdit(i)\">\r\n                <mat-icon color=\"primary\" class=\"mat-18\">edit</mat-icon>\r\n                Edit\r\n              </a>\r\n              <a class=\"pointer\" mat--mini-fab color=\"warn\" matTooltip=\"Click here to delete the product\"\r\n                 (click)=\"delete(i,itemList.IncentiveBoMRequestItemId)\">\r\n                <mat-icon color=\"warn\">delete</mat-icon>\r\n                Delete\r\n              </a>\r\n            </div>\r\n          </mat-cell>\r\n        </ng-container>\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\">\r\n        </mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n        </mat-row>\r\n      </mat-table>\r\n\r\n      <mat-paginator\r\n\r\n        #paginator\r\n        [pageSize]=\"8\"\r\n        [pageSizeOptions]=\"[8, 10, 20]\">\r\n      </mat-paginator>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/incentive/bill-of-material/bill-of-material.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/incentive/bill-of-material/bill-of-material.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-header-row {\n  min-height: 42px; }\n\na {\n  cursor: pointer !important; }\n\nmat-card {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  display: block;\n  position: relative;\n  padding: 0px !important;\n  border-radius: 2px; }\n"

/***/ }),

/***/ "./src/app/components/incentive/bill-of-material/bill-of-material.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/incentive/bill-of-material/bill-of-material.component.ts ***!
  \*************************************************************************************/
/*! exports provided: BillOfMaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillOfMaterialComponent", function() { return BillOfMaterialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _custor_validation_custom_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @custor/validation/custom/form */ "./src/@custor/validation/custom/form.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _Services_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Services/service.service */ "./src/app/Services/service.service.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _setting_services_tabs_serviceApplication_serviceapplication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../setting/services-tabs/serviceApplication/serviceapplication.service */ "./src/app/components/setting/services-tabs/serviceApplication/serviceapplication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_incentive_bill_of_material_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../Services/incentive/bill-of-material.service */ "./src/app/Services/incentive/bill-of-material.service.ts");
/* harmony import */ var _model_lookupData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../model/lookupData */ "./src/app/model/lookupData.ts");
/* harmony import */ var _custor_const_consts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @custor/const/consts */ "./src/@custor/const/consts.ts");
/* harmony import */ var _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @custor/services/configuration.service */ "./src/@custor/services/configuration.service.ts");
/* harmony import */ var _Services_look_up_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../Services/look-up.service */ "./src/app/Services/look-up.service.ts");
/* harmony import */ var _custor_helpers_compare__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @custor/helpers/compare */ "./src/@custor/helpers/compare.ts");
/* harmony import */ var _incentive_request_requested_items_list_requested_items_list_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../incentive-request/requested-items-list/requested-items-list.service */ "./src/app/components/incentive/incentive-request/requested-items-list/requested-items-list.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var BillOfMaterialComponent = /** @class */ (function () {
    function BillOfMaterialComponent(billOfMaterilService, errMsg, serviceApplicationsServices, router, dialog, serviceApplication, dataSharing, route, accountService, service, lookUpsService, toast, configService, IncentiveRequestItemService, toastr, formBuilder, formService) {
        this.billOfMaterilService = billOfMaterilService;
        this.errMsg = errMsg;
        this.serviceApplicationsServices = serviceApplicationsServices;
        this.router = router;
        this.dialog = dialog;
        this.serviceApplication = serviceApplication;
        this.dataSharing = dataSharing;
        this.route = route;
        this.accountService = accountService;
        this.service = service;
        this.lookUpsService = lookUpsService;
        this.toast = toast;
        this.configService = configService;
        this.IncentiveRequestItemService = IncentiveRequestItemService;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.formService = formService;
        this.serviceList = [];
        this.displayedColumns = [
            'No', 'Description', 'HsCode', 'Quantity', 'MesurmentUnit', 'RejectionReason', 'approval', 'Action'
        ];
        this.errors = [];
        // @Input() fileExt = 'JPG, GIF, PNG,Pdf';
        this.fileExt = 'xlsx,xls';
        this.maxFiles = 5;
        this.maxSize = 2; // 5MB
        this.uploadStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isOfficer = false;
        this.itemList = [];
        this.editMode = false;
        this.addshow = false;
        this.isInvestor = false;
        this.unitTypes = [];
        this.BOMItems = [];
    }
    Object.defineProperty(BillOfMaterialComponent.prototype, "Phase", {
        get: function () {
            return this.documentForm.get('Phase');
        },
        enumerable: true,
        configurable: true
    });
    BillOfMaterialComponent.prototype.getPhaseId = function (value) {
        this.phaseId = value;
    };
    BillOfMaterialComponent.prototype.ngOnInit = function () {
        this.currentLang = this.configService.language;
        this.getUserType();
        this.initForm();
        this.addForm();
        this.getItemLookup();
        this.getLookup();
        this.currentCategoryId = this.route.snapshot.params['type'];
        if (this.currentCategoryId == 1) {
            this.IncentiveCategoryId = 10778;
        }
        if (this.currentCategoryId == 2) {
            this.IncentiveCategoryId = 10779;
        }
        this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
        this.ProjectId = this.route.snapshot.params['ProjectId'];
        this.getBillOfMaterial(this.ServiceApplicationId);
        // this.getBillOfMaterial(this.ProjectId);
        this.initStaticData(this.currentLang);
    };
    BillOfMaterialComponent.prototype.getUserType = function () {
        this.isInvestor = this.accountService.getUserType();
    };
    BillOfMaterialComponent.prototype.getItemLookup = function () {
        var _this = this;
        this.lookupSub = this.lookUpsService
            .getLookupByParentId(10780)
            .subscribe(function (result) {
            _this.Lookups = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    BillOfMaterialComponent.prototype.onMangerControlChanged = function ($event, data) {
        // console.log(data);
        var id = $event.source.value;
        this.billOfMaterilService.finalForApprovalBillOfMaterial(data.IncentiveBoMRequestItemId)
            .subscribe(function (result) {
            // console.log(result);
        });
        if ($event.checked) {
            this.toast.success('Item approved  successfully');
        }
        else if (!$event.checked) {
            this.toast.success('Item approved cancelled successfully');
        }
    };
    BillOfMaterialComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formService.markFormGroupTouched(this.billOfMaterialForm);
        if (this.billOfMaterialForm.valid) {
            if (!this.editMode) {
                this.billOfMaterialForm.removeControl('IncentiveBoMRequestItemId');
                this.billOfMaterilService.create(this.billOfMaterialForm.value)
                    .subscribe(function (result) {
                    _this.notification('saved');
                    _this.getBillOfMaterial(_this.ServiceApplicationId);
                    _this.itemList.push(result);
                    // this.dataSource = new MatTableDataSource<IncentiveBoMRequestItemModel>(this.itemList);
                    // this.getBillOfMaterial();
                }, function (error) { return _this.toast.error(_this.errMsg.getError(error)); });
                this.billOfMaterialForm.addControl('IncentiveBoMRequestItemId', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''));
                this.onClear();
            }
            else {
                // console.log(this.billOfMaterialForm.value);
                this.billOfMaterilService.update(this.billOfMaterialForm.value, this.itemList[this.productEditIndex].IncentiveBoMRequestItemId)
                    .subscribe(function (result) {
                    _this.notification('updated');
                    _this.itemList[_this.productEditIndex] = result;
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.itemList);
                    _this.onClear();
                }, function (error) { return _this.toast.error(_this.errMsg.getError(error)); });
            }
        }
        else {
            this.formErrors = this.formService.validateForm(this.billOfMaterialForm, this.formErrors, false);
        }
    };
    BillOfMaterialComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue.replace(/[\W_]/g, '');
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    BillOfMaterialComponent.prototype.onClear = function () {
        this.billOfMaterialForm.reset();
    };
    BillOfMaterialComponent.prototype.onEdit = function (index) {
        this.editMode = true;
        // console.log(index);
        this.productEditIndex = index;
        this.productEdit = this.itemList[index];
        this.billOfMaterialForm.patchValue(this.productEdit);
    };
    BillOfMaterialComponent.prototype.addItem = function () {
        this.addshow = true;
    };
    BillOfMaterialComponent.prototype.delete = function (index, id) {
        var _this = this;
        this.billOfMaterilService.delete(id)
            .subscribe(function () {
            _this.notification('Deleted');
            _this.itemList.splice(index, 1);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.itemList);
        });
    };
    BillOfMaterialComponent.prototype.getBillOfMaterial = function (ServiceApplicationId) {
        var _this = this;
        this.loading = true;
        this.billOfMaterilService.getBillOfMaterialByServiceApplicationId(ServiceApplicationId)
            .subscribe(function (result) {
            _this.itemList = result.IncentiveBoMRequestItem;
            // console.log(result);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](result.IncentiveBoMRequestItem);
            _this.loading = false;
            _this.dataSource.paginator = _this.paginator;
        }, function (error) { return _this.errMsg.getError(error); });
    };
    BillOfMaterialComponent.prototype.upload = function (i, files) {
        var _this = this;
        // console.log(this.phaseId);
        if (this.phaseId == 0 || this.phaseId == null || this.phaseId == undefined) {
            this.toastr.error('Please Select Batch of Construction Materials Incentive');
            return true;
        }
        else if (this.CheckExistance()) {
            return true;
        }
        else {
            // this.loading = true;
            this.errors = []; // Clear error
            // Validate file size and allowed extensions
            // console.log((!this.isValidFiles(files)));
            if (files && files[0].size > 0 && (this.isValidFiles(files))) {
                var formModel = this.documentForm.value;
                this.documentForm.patchValue({
                    Name: files[0].name,
                    KeyWords: files[0],
                });
                this.billOfMaterilService
                    .uploadDocument(this.prepareSaveUser())
                    .subscribe(function (result) {
                    _this.itemList = result;
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](result);
                    _this.loading = false;
                    // this.dataSource.paginator = this.paginator;
                    _this.itemList = result;
                    _this.loading = false;
                }, function (error) { return _this.toast.error(_this.errMsg.getError(error)); });
                // this.getServicePrerequisite(localStorage.getItem('ServiceId'));
            }
            else {
                this.toast.error('Error Occurred Please ', 'Error');
            } //TODO BillofQuantity
        }
    };
    BillOfMaterialComponent.prototype.CheckExistance = function () {
        var _this = this;
        this.IncentiveRequestItemService
            .getIncentiveBoMRequestDetails(this.ProjectId, 10778, this.phaseId)
            .subscribe(function (items) {
            _this.BOMItems = items;
            if (_this.BOMItems.length > 0) {
                _this.toastr.error('You Cannot Import Construction Materials, Because there is Uploaded data in this Batch');
                return true;
            }
        });
    };
    BillOfMaterialComponent.prototype.prepareSaveUser = function () {
        var formModel = this.documentForm.value;
        var formData = new FormData();
        // console.log(formModel.workFlowId);
        // // console.log(this.documentForm.value);
        formData.append('Name', formModel.Name);
        formData.append('ServiceApplicationId', this.ServiceApplicationId);
        formData.append('KeyWords', formModel.KeyWords);
        formData.append('ProjectId', this.ProjectId);
        formData.append('IncentiveCategoryId', this.IncentiveCategoryId.toString());
        formData.append('PhaseId', this.phaseId.toString()); //formModel.Phase
        // console.log(this.phaseId);
        return formData;
    };
    // uploadData(ServiceApplicationId: any) {
    //   this.loading = true;
    //   this.billOfMaterilService.getBillOfMaterialByServiceApplicationId(ServiceApplicationId).subscribe(result => {
    //     this.itemList = result;
    //     this.dataSource = new MatTableDataSource<IncentiveBoMRequestItemModel>(result);
    //     this.loading = false;
    //
    //
    //   });
    // }
    // }
    BillOfMaterialComponent.prototype.ngAfterViewInit = function () {
        // this.dataSource.paginator = this.paginator;
    };
    BillOfMaterialComponent.prototype.clear = function () {
        this.billOfMaterialForm.reset();
    };
    BillOfMaterialComponent.prototype.UpdateServiceApplication = function () {
        var _this = this;
        this.serviceApplicationsServices.finalForApprovalServiceApplications(this.ServiceApplicationId)
            .subscribe(function (result) {
            _this.toast.success('Application submitted successfully we will revise soon as well as  we will notify for any action required');
        });
    };
    BillOfMaterialComponent.prototype.notification = function (message) {
        this.loading = false;
        this.toast.success(" Succesfully " + message + " Data.!", 'Success');
    };
    // ngAfterContentChecked(): void {
    //
    //
    BillOfMaterialComponent.prototype.initStaticData = function (currentLang) {
        var _this = this;
        var unit = new _model_lookupData__WEBPACK_IMPORTED_MODULE_12__["UnitType"]();
        _custor_const_consts__WEBPACK_IMPORTED_MODULE_13__["UnitTypes"].forEach(function (pair) {
            unit = {
                'Id': pair.Id.toString(),
                'DescriptionEnglish': pair.DescriptionEnglish,
                'Description': pair.Description
            };
            _this.unitTypes.push(unit);
        });
    };
    BillOfMaterialComponent.prototype.getLookup = function () {
        var _this = this;
        this.lookupSub = this.lookUpsService
            .getLookupByParentId(10781)
            .subscribe(function (result) {
            _this.PhaseLookups = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    BillOfMaterialComponent.prototype.compareIds = function (id1, id2) {
        var a1 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_16__["determineId"])(id1);
        var a2 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_16__["determineId"])(id2);
        return a1 === a2;
    };
    BillOfMaterialComponent.prototype.initForm = function () {
        this.documentForm = this.formBuilder.group({
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            KeyWords: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
        });
    };
    BillOfMaterialComponent.prototype.isValidFiles = function (files) {
        // Check Number of files
        if (files.length > this.maxFiles) {
            this.errors.push('Error: At a time you can upload only ' + this.maxFiles + ' files');
            // this.toast.error('Error: At a time you can upload only ' + this.maxFiles + ' files', 'Error');
            return;
        }
        this.isValidFileExtension(files);
        return this.errors.length === 0;
    };
    BillOfMaterialComponent.prototype.isValidFileExtension = function (files) {
        // Make array of file extensions
        var extensions = (this.fileExt.split(','))
            .map(function (x) {
            return x.toLocaleUpperCase().trim();
        });
        for (var i = 0; i < files.length; i++) {
            // Get file extension
            var ext = files[i].name.toUpperCase().split('.').pop() || files[i].name;
            // Check the extension exists
            var exists = extensions.includes(ext);
            if (!exists) {
                this.errors.push('Error ,Pdf Extension Only allowed to attach : ' + files[i].name);
                // this.toast.error('Error ,Pdf Extension Only allowed to attach :' + files[i].name, 'Error');
            }
            // Check file size
            this.isValidFileSize(files[i]);
        }
    };
    BillOfMaterialComponent.prototype.isValidFileSize = function (file) {
        var fileSizeinMB = file.size / (1024 * 100);
        var size = Math.round(fileSizeinMB * 100) / 100; // convert upto 2 decimal place
        if (size > this.maxSize) {
            this.errors.push('Error (File Size): ' +
                file.name + ': exceed file size limit of ' +
                this.maxSize + 'MB ( ' + size + 'MB )');
            // this.toast.error('Error (File Size): ' + file.name + ': exceed file size limit of ' + this.maxSize + 'MB ( ' + size + 'MB )');
        }
    };
    BillOfMaterialComponent.prototype.addForm = function () {
        this.billOfMaterialForm = this.formBuilder.group({
            IncentiveBoMRequestItemId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            IncentiveRequestId: 1,
            ProjectId: this.ProjectId,
            ServiceApplicationId: this.ServiceApplicationId,
            Description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            RejectionReason: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            HsCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            Quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            MesurmentUnit: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            IsApproved: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], BillOfMaterialComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BillOfMaterialComponent.prototype, "projectId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BillOfMaterialComponent.prototype, "sectionId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BillOfMaterialComponent.prototype, "fileExt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BillOfMaterialComponent.prototype, "maxFiles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BillOfMaterialComponent.prototype, "maxSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BillOfMaterialComponent.prototype, "uploadStatus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BillOfMaterialComponent.prototype, "fileInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BillOfMaterialComponent.prototype, "content", void 0);
    BillOfMaterialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bill-of-material',
            template: __webpack_require__(/*! ./bill-of-material.component.html */ "./src/app/components/incentive/bill-of-material/bill-of-material.component.html"),
            styles: [__webpack_require__(/*! ./bill-of-material.component.scss */ "./src/app/components/incentive/bill-of-material/bill-of-material.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_incentive_bill_of_material_service__WEBPACK_IMPORTED_MODULE_11__["BillOfMaterialService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__["ErrorMessage"],
            _setting_services_tabs_serviceApplication_serviceapplication_service__WEBPACK_IMPORTED_MODULE_9__["ServiceapplicationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _setting_services_tabs_serviceApplication_serviceapplication_service__WEBPACK_IMPORTED_MODULE_9__["ServiceapplicationService"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_1__["DataSharingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"],
            _Services_service_service__WEBPACK_IMPORTED_MODULE_7__["ServiceService"],
            _Services_look_up_service__WEBPACK_IMPORTED_MODULE_15__["LookUpService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_14__["ConfigurationService"],
            _incentive_request_requested_items_list_requested_items_list_service__WEBPACK_IMPORTED_MODULE_17__["IncentiveRequestDetailService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _custor_validation_custom_form__WEBPACK_IMPORTED_MODULE_5__["FormService"]])
    ], BillOfMaterialComponent);
    return BillOfMaterialComponent;
}());



/***/ }),

/***/ "./src/app/components/incentive/bill-of-material/billOfMaterial.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/incentive/bill-of-material/billOfMaterial.module.ts ***!
  \********************************************************************************/
/*! exports provided: BillOfMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillOfMaterialModule", function() { return BillOfMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _BillOfMaterialRouting_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BillOfMaterialRouting.module */ "./src/app/components/incentive/bill-of-material/BillOfMaterialRouting.module.ts");
/* harmony import */ var _bill_of_material_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bill-of-material.component */ "./src/app/components/incentive/bill-of-material/bill-of-material.component.ts");
/* harmony import */ var _bill_of_material_tab_bill_of_material_tab_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bill-of-material-tab/bill-of-material-tab.component */ "./src/app/components/incentive/bill-of-material/bill-of-material-tab/bill-of-material-tab.component.ts");
/* harmony import */ var _project_profile_service_confirmation_ServiceConfirmation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../project-profile/service-confirmation/ServiceConfirmation.module */ "./src/app/components/project-profile/service-confirmation/ServiceConfirmation.module.ts");
/* harmony import */ var _project_profile_letter_letter_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../project-profile/letter/letter.module */ "./src/app/components/project-profile/letter/letter.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var BillOfMaterialModule = /** @class */ (function () {
    function BillOfMaterialModule() {
    }
    BillOfMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _BillOfMaterialRouting_module__WEBPACK_IMPORTED_MODULE_3__["BillOfMaterialRoutingModule"],
                _project_profile_service_confirmation_ServiceConfirmation_module__WEBPACK_IMPORTED_MODULE_6__["ServiceConfirmationModule"],
                _project_profile_letter_letter_module__WEBPACK_IMPORTED_MODULE_7__["LetterModule"]
            ],
            declarations: [
                _bill_of_material_component__WEBPACK_IMPORTED_MODULE_4__["BillOfMaterialComponent"],
                _bill_of_material_tab_bill_of_material_tab_component__WEBPACK_IMPORTED_MODULE_5__["BillOfMaterialTabComponent"]
            ],
            exports: [
                _bill_of_material_component__WEBPACK_IMPORTED_MODULE_4__["BillOfMaterialComponent"],
                _bill_of_material_tab_bill_of_material_tab_component__WEBPACK_IMPORTED_MODULE_5__["BillOfMaterialTabComponent"]
            ]
        })
    ], BillOfMaterialModule);
    return BillOfMaterialModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-incentive-bill-of-material-billOfMaterial-module.js.map