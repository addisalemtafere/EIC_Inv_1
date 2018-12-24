(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-incentive-balance-balance-module"],{

/***/ "./src/app/components/incentive/balance/balance-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/incentive/balance/balance-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: BalanceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceRoutingModule", function() { return BalanceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _balance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./balance.component */ "./src/app/components/incentive/balance/balance.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _balance_component__WEBPACK_IMPORTED_MODULE_2__["BalanceComponent"] }
];
var BalanceRoutingModule = /** @class */ (function () {
    function BalanceRoutingModule() {
    }
    BalanceRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BalanceRoutingModule);
    return BalanceRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/incentive/balance/balance.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/incentive/balance/balance.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-page-header icon=\"dashboard\" title=\"dashboard\"></app-page-header>-->\r\n\r\n<div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\">\r\n  <div *ngIf=\"errors.length>0\" class=\"alert-info\" fxLayout=\" row wrap\" fxLayoutAlign=\"center\">\r\n    <ol type=\"i\">\r\n      <li class=\"mat-error\" *ngFor=\"let error of errors;\">{{error}}</li>\r\n    </ol>\r\n  </div>\r\n</div>\r\n<mat-card class=\"margin-2 padding-0\" fxFlex=\"80\">\r\n  <mat-card-header>\r\n    <mat-card-subtitle class=\"sub-title\">List of Incentive Request\r\n    </mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <div class=\"spinner-container\" *ngIf=\"loading \">\r\n      <mat-progress-bar mode=\"query\"></mat-progress-bar>\r\n    </div>\r\n    <mat-table #table [dataSource]=\"bomListDataSource\">\r\n      <ng-container matColumnDef=\"No\">\r\n        <mat-header-cell [fxFlex]=\"6\" *matHeaderCellDef>No</mat-header-cell>\r\n        <mat-cell [fxFlex]=\"6\" *matCellDef=\"let itemList;let i=index;\">\r\n          {{i+1}}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"IncentiveCategory\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"20\">Incentive Category</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let IncentiveRequestItemModes\" fxFlex=\"20\">\r\n          {{IncentiveRequestItemModes.Description }}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"UploadDate\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"8\">Upload Date</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let IncentiveRequestItemModes\" fxFlex=\"8\"> {{IncentiveRequestItemModes.UploadDate |\r\n          date:'MM/dd/yyyy'}}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"UploadQuantity\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"8\">Upload Quantity</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let IncentiveRequestItemModes\" fxFlex=\"8\">{{IncentiveRequestItemModes.Quantity }}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Phase\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"8\">Phase</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let IncentiveRequestItemModes\" fxFlex=\"8\">{{IncentiveRequestItemModes.Phase |  lookupPhasePipe:1}}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Action\">\r\n        <mat-header-cell fxFlex=\"\" *matHeaderCellDef>Action</mat-header-cell>\r\n        <mat-cell fxFlex=\"\" *matCellDef=\"let IncentiveRequestItemModes;let i=index;\">\r\n          <!--<span *ngIf=\"!isInvestor\">-->\r\n          <a class=\"pointer custom-button\" matTooltip=\"Click here to show detail the incentive request\"\r\n             (click)=\"showDetails(IncentiveRequestItemModes)\">\r\n            Show Balance\r\n          </a>\r\n          <!--</span>-->\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <mat-header-row *matHeaderRowDef=\"displayedGroupedColumns\">\r\n      </mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedGroupedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<span *ngIf=\"showDetail\">\r\n<mat-card class=\"margin-2\" style=\"box-shadow: none;padding: 15px !important;border: 1px solid #dddddd\"\r\n          *ngIf=\"addshow || editMode\">\r\n  <form [formGroup]=\"billOfMaterialForm\" novalidate>\r\n    <mat-card-content>\r\n      <div fxLayout.xs=\"row wrap\"\r\n           fxLayoutAlign.xs=\"start center\"\r\n           fxLayoutGap=\"2em\">\r\n        <div class=\"block\" fxLayoutGap=\"2em\">\r\n          <mat-form-field [fxFlex]=\"20\">\r\n            <mat-label>{{'balalnce.Description' | translate}}</mat-label>\r\n            <input type=\"text\" matInput required\r\n                   formControlName=\"Description\">\r\n          </mat-form-field>\r\n          <mat-form-field [fxFlex]=\"20\">\r\n            <mat-label>{{'balalnce.HsCode' | translate}}</mat-label>\r\n            <input type=\"text\" matInput required\r\n                   formControlName=\"HsCode\">\r\n\r\n          </mat-form-field>\r\n          <mat-form-field [fxFlex]=\"20\">\r\n            <mat-label>{{'balalnce.Quantity' | translate}}</mat-label>\r\n            <input type=\"text\" matInput required\r\n                   formControlName=\"Quantity\">\r\n          </mat-form-field>\r\n          <mat-form-field [fxFlex]=\"20\">\r\n            <mat-label>{{'balalnce.MesurmentUnit' | translate}}</mat-label>\r\n            <mat-select formControlName=\"MesurmentUnit\" required>\r\n              <option value=\"0\">--Select--</option>\r\n              <mat-option *ngFor=\"let unit of unitTypes\" [value]=\"unit.Id\">\r\n                <span>{{unit.DescriptionEnglish}}</span>\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n      </div>\r\n    </mat-card-content>\r\n  </form>\r\n</mat-card>\r\n<mat-card class=\"margin-2\">\r\n\r\n  <mat-card-content>\r\n      <div style=\"margin-left: 40px\">\r\n          <h2>Duty Free Items Balance</h2>\r\n        </div>\r\n\r\n    <div fxFlex=\"100%\" *ngIf=\"itemList.length>0\">\r\n\r\n      <mat-form-field>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n      </mat-form-field>\r\n      <div class=\"spinner-container\" *ngIf=\"loading\">\r\n        <mat-progress-bar mode=\"query\"></mat-progress-bar>\r\n      </div>\r\n      <mat-table #table [dataSource]=\"dataSource\">\r\n        <ng-container matColumnDef=\"No\">\r\n          <mat-header-cell [fxFlex]=\"6\" *matHeaderCellDef>No</mat-header-cell>\r\n          <mat-cell [fxFlex]=\"6\" *matCellDef=\"let itemList;let i=index;\">\r\n            {{i+1}}\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"Description\">\r\n          <mat-header-cell fxFlex=\"30\" *matHeaderCellDef>Description</mat-header-cell>\r\n          <mat-cell fxFlex=\"30\" *matCellDef=\"let itemList\">\r\n            {{itemList?.Description}}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"HsCode\">\r\n          <mat-header-cell *matHeaderCellDef>HsCode</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let itemList\">\r\n            {{itemList?.HsCode }}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"Quantity\">\r\n          <mat-header-cell *matHeaderCellDef>Quantity</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let itemList\"> {{itemList?.Quantity }}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"MesurmentUnit\">\r\n          <mat-header-cell *matHeaderCellDef>Measurment Unit</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let itemList\"> {{itemList?.MesurmentUnit |\r\n            filterPipe: 10}}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"Balance\">\r\n          <mat-header-cell *matHeaderCellDef>\r\n            <span> Balance</span>\r\n          </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let itemList\">\r\n            {{itemList?.Balance }}\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\">\r\n        </mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n        </mat-row>\r\n      </mat-table>\r\n\r\n      <mat-paginator\r\n\r\n        #paginator\r\n        [pageSize]=\"8\"\r\n        [pageSizeOptions]=\"[8, 10, 20]\">\r\n      </mat-paginator>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n</span>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/incentive/balance/balance.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/incentive/balance/balance.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-header-row {\n  min-height: 42px; }\n\na {\n  cursor: pointer !important; }\n\nmat-card {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  display: block;\n  position: relative;\n  padding: 0px !important;\n  border-radius: 2px; }\n"

/***/ }),

/***/ "./src/app/components/incentive/balance/balance.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/incentive/balance/balance.component.ts ***!
  \*******************************************************************/
/*! exports provided: BalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceComponent", function() { return BalanceComponent; });
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var BalanceComponent = /** @class */ (function () {
    function BalanceComponent(billOfMaterilService, errMsg, serviceApplicationsServices, router, dialog, serviceApplication, dataSharing, route, accountService, service, toast, configService, formBuilder, formService) {
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
        this.toast = toast;
        this.configService = configService;
        this.formBuilder = formBuilder;
        this.formService = formService;
        this.serviceList = [];
        this.displayedColumns = [
            'No', 'Description', 'HsCode', 'Quantity', 'MesurmentUnit', 'Balance'
        ];
        this.displayedGroupedColumns = [
            'No', 'IncentiveCategory', 'UploadDate', 'UploadQuantity', 'Phase', 'Action'
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
        this.showDetail = false;
    }
    BalanceComponent.prototype.ngOnInit = function () {
        this.currentLang = this.configService.language;
        this.getUserType();
        this.initForm();
        this.addForm();
        // this.currentCategoryId = this.route.snapshot.params['type'];
        this.ServiceId = this.route.snapshot.params['serviceId'];
        this.ServiceApplicationId = this.route.snapshot.params['serviceApplicationId'];
        this.ProjectId = this.route.snapshot.params['projectId'];
        // if (this.currentCategoryId === '10778') {
        // this.getBillOfMaterial(this.ServiceApplicationId);
        this.getBillOfMaterial(this.ProjectId);
        // }
        this.initStaticData(this.currentLang);
    };
    BalanceComponent.prototype.onMangerControlChanged = function ($event, data) {
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
    BalanceComponent.prototype.onSubmit = function () {
        var _this = this;
        this.billOfMaterialForm.removeControl('IncentiveBoMRequestItemId');
        this.formService.markFormGroupTouched(this.billOfMaterialForm);
        if (this.billOfMaterialForm.valid) {
            if (!this.editMode) {
                this.billOfMaterilService.create(this.billOfMaterialForm.value)
                    .subscribe(function (result) {
                    _this.billOfMaterialForm.addControl('IncentiveBoMRequestItemId', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''));
                    _this.notification('saved');
                    _this.getBillOfMaterial(_this.ServiceApplicationId);
                    _this.itemList.push(result);
                    // this.dataSource = new MatTableDataSource<IncentiveBoMRequestItemModel>(this.itemList);
                    // this.getBillOfMaterial();
                }, function (error) { return _this.toast.error(_this.errMsg.getError(error)); });
            }
            else {
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
    BalanceComponent.prototype.onClear = function () {
        this.billOfMaterialForm.reset();
    };
    BalanceComponent.prototype.onEdit = function (index) {
        this.editMode = true;
        // console.log(index);
        this.productEditIndex = index;
        this.productEdit = this.itemList[index];
        this.billOfMaterialForm.patchValue(this.productEdit);
    };
    BalanceComponent.prototype.showDetails = function (incentiveRequestItemModes) {
        this.getBillOfMaterialByServiceApplicationId(incentiveRequestItemModes.ServiceApplicationId);
    };
    BalanceComponent.prototype.addItem = function () {
        this.addshow = true;
    };
    BalanceComponent.prototype.delete = function (index, id) {
        var _this = this;
        this.billOfMaterilService.delete(id)
            .subscribe(function () {
            _this.notification('Deleted');
            _this.itemList.splice(index, 1);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.itemList);
        });
    };
    BalanceComponent.prototype.getBillOfMaterial = function (ProjectId) {
        var _this = this;
        this.loading = true;
        this.billOfMaterilService.getBillOfMaterialByProjectId(ProjectId)
            .subscribe(function (result) {
            _this.itemList = result;
            _this.bomListDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.itemList);
            _this.loading = false;
            _this.bomListDataSource.paginator = _this.paginator;
        }, function (error) { return _this.errMsg.getError(error); });
    };
    // getBillOfMaterial(ProjectId: any) {
    //     this.loading = true;
    //     this.billOfMaterilService.getBillOfMaterialByProjectId(ProjectId)
    //       .subscribe(result => {
    //         this.itemList = result;
    //         this.dataSource = new MatTableDataSource<IncentiveBoMRequestItemModel>(this.itemList);
    //         this.loading = false;
    //         this.dataSource.paginator = this.paginator;
    //       }, error => this.errMsg.getError(error));
    //   }
    BalanceComponent.prototype.getBillOfMaterialByServiceApplicationId = function (ServiceApplicationId) {
        var _this = this;
        this.loading = true;
        this.billOfMaterilService.getBillOfMaterialByServiceApplicationId(ServiceApplicationId)
            .subscribe(function (result) {
            _this.itemList = result.IncentiveBoMRequestItem;
            if (_this.itemList.length > 0) {
                _this.showDetail = true;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](result.IncentiveBoMRequestItem);
                _this.loading = false;
                _this.dataSource.paginator = _this.paginator;
            }
            else {
                _this.showDetail = false;
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    BalanceComponent.prototype.upload = function (i, files) {
        var _this = this;
        // this.loading = true;
        this.errors = []; // Clear error
        // Validate file size and allowed extensions
        // console.log((!this.isValidFiles(files)));
        if (files && files[0].size > 0 && (this.isValidFiles(files))) {
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
        }
    };
    BalanceComponent.prototype.prepareSaveUser = function () {
        var formModel = this.documentForm.value;
        var formData = new FormData();
        // console.log(formModel.workFlowId);
        formData.append('Name', formModel.Name);
        formData.append('ServiceApplicationId', this.ServiceApplicationId);
        formData.append('KeyWords', formModel.KeyWords);
        formData.append('ProjectId', this.ProjectId);
        formData.append('IncentiveCategoryId', this.currentCategoryId);
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
    BalanceComponent.prototype.ngAfterViewInit = function () {
        // this.dataSource.paginator = this.paginator;
    };
    BalanceComponent.prototype.clear = function () {
        this.billOfMaterialForm.reset();
    };
    BalanceComponent.prototype.UpdateServiceApplication = function () {
        var _this = this;
        this.serviceApplicationsServices.finalForApprovalServiceApplications(this.ServiceApplicationId)
            .subscribe(function (result) {
            // console.log(result);
            _this.toast.success('Application submitted successfully we will revise soon as well as  we will notify for any action required');
        });
    };
    BalanceComponent.prototype.notification = function (message) {
        this.loading = false;
        this.toast.success(" Succesfully " + message + " Data.!", 'Success');
    };
    // ngAfterContentChecked(): void {
    //
    //
    BalanceComponent.prototype.getUserType = function () {
        this.isInvestor = this.accountService.getUserType();
    };
    BalanceComponent.prototype.initStaticData = function (currentLang) {
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
    BalanceComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue.replace(/[\W_]/g, '');
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    BalanceComponent.prototype.initForm = function () {
        this.documentForm = this.formBuilder.group({
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            KeyWords: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null)
        });
    };
    BalanceComponent.prototype.isValidFiles = function (files) {
        // Check Number of files
        if (files.length > this.maxFiles) {
            this.errors.push('Error: At a time you can upload only ' + this.maxFiles + ' files');
            // this.toast.error('Error: At a time you can upload only ' + this.maxFiles + ' files', 'Error');
            return;
        }
        this.isValidFileExtension(files);
        return this.errors.length === 0;
    };
    BalanceComponent.prototype.isValidFileExtension = function (files) {
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
    BalanceComponent.prototype.isValidFileSize = function (file) {
        var fileSizeinMB = file.size / (1024 * 100);
        var size = Math.round(fileSizeinMB * 100) / 100; // convert upto 2 decimal place
        if (size > this.maxSize) {
            this.errors.push('Error (File Size): ' +
                file.name + ': exceed file size limit of ' +
                this.maxSize + 'MB ( ' + size + 'MB )');
            // this.toast.error('Error (File Size): ' + file.name + ': exceed file size limit of ' + this.maxSize + 'MB ( ' + size + 'MB )');
        }
    };
    BalanceComponent.prototype.addForm = function () {
        this.billOfMaterialForm = this.formBuilder.group({
            IncentiveBoMRequestItemId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            IncentiveRequestId: 1,
            ProjectId: this.ProjectId,
            ServiceApplicationId: this.ServiceApplicationId,
            Description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            HsCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            Quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            MesurmentUnit: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], BalanceComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BalanceComponent.prototype, "projectId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BalanceComponent.prototype, "sectionId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BalanceComponent.prototype, "fileExt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BalanceComponent.prototype, "maxFiles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BalanceComponent.prototype, "maxSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BalanceComponent.prototype, "uploadStatus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BalanceComponent.prototype, "fileInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BalanceComponent.prototype, "content", void 0);
    BalanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-balance',
            template: __webpack_require__(/*! ./balance.component.html */ "./src/app/components/incentive/balance/balance.component.html"),
            styles: [__webpack_require__(/*! ./balance.component.scss */ "./src/app/components/incentive/balance/balance.component.scss")]
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
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_14__["ConfigurationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _custor_validation_custom_form__WEBPACK_IMPORTED_MODULE_5__["FormService"]])
    ], BalanceComponent);
    return BalanceComponent;
}());



/***/ }),

/***/ "./src/app/components/incentive/balance/balance.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/incentive/balance/balance.module.ts ***!
  \****************************************************************/
/*! exports provided: BalanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceModule", function() { return BalanceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _balance_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./balance-routing.module */ "./src/app/components/incentive/balance/balance-routing.module.ts");
/* harmony import */ var _balance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./balance.component */ "./src/app/components/incentive/balance/balance.component.ts");
/* harmony import */ var _project_profile_service_confirmation_ServiceConfirmation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../project-profile/service-confirmation/ServiceConfirmation.module */ "./src/app/components/project-profile/service-confirmation/ServiceConfirmation.module.ts");
/* harmony import */ var _project_profile_letter_letter_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../project-profile/letter/letter.module */ "./src/app/components/project-profile/letter/letter.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var BalanceModule = /** @class */ (function () {
    function BalanceModule() {
    }
    BalanceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _balance_routing_module__WEBPACK_IMPORTED_MODULE_3__["BalanceRoutingModule"],
                _project_profile_service_confirmation_ServiceConfirmation_module__WEBPACK_IMPORTED_MODULE_5__["ServiceConfirmationModule"],
                _project_profile_letter_letter_module__WEBPACK_IMPORTED_MODULE_6__["LetterModule"]
            ],
            declarations: [
                _balance_component__WEBPACK_IMPORTED_MODULE_4__["BalanceComponent"]
            ],
            exports: [
                _balance_component__WEBPACK_IMPORTED_MODULE_4__["BalanceComponent"]
            ]
        })
    ], BalanceModule);
    return BalanceModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-incentive-balance-balance-module.js.map