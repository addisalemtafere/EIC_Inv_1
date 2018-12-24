(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-incentive-balance-sparepart-spare-part-module"],{

/***/ "./src/app/Services/application-setting.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/Services/application-setting.service.ts ***!
  \*********************************************************/
/*! exports provided: ApplicationSettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationSettingService", function() { return ApplicationSettingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base.service */ "./src/app/Services/Base.service.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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





var ApplicationSettingService = /** @class */ (function (_super) {
    __extends(ApplicationSettingService, _super);
    function ApplicationSettingService(http, appConfig, errMsg) {
        var _this = _super.call(this, http, appConfig.urls.url('ApplicationSettings'), errMsg) || this;
        _this.http = http;
        _this.appConfig = appConfig;
        _this.errMsg = errMsg;
        return _this;
    }
    ApplicationSettingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"]])
    ], ApplicationSettingService);
    return ApplicationSettingService;
}(_Base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/components/incentive/balance-sparepart/spare-part-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/incentive/balance-sparepart/spare-part-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: SparePartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparePartRoutingModule", function() { return SparePartRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _spare_part_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spare-part.component */ "./src/app/components/incentive/balance-sparepart/spare-part.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _spare_part_component__WEBPACK_IMPORTED_MODULE_2__["SparePartComponent"] }
];
var SparePartRoutingModule = /** @class */ (function () {
    function SparePartRoutingModule() {
    }
    SparePartRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SparePartRoutingModule);
    return SparePartRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/incentive/balance-sparepart/spare-part.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/incentive/balance-sparepart/spare-part.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"margin-2 padding-0\" fxFlex=\"80\">\r\n  <mat-card-header>\r\n    <mat-card-subtitle class=\"sub-title\">Spare Part Balance\r\n    </mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <div class=\"spinner-container\" *ngIf=\"loading \">\r\n      <mat-progress-bar mode=\"query\"></mat-progress-bar>\r\n    </div>\r\n    <mat-table #table [dataSource]=\"sparePartDataSource\">\r\n\r\n      <!--<ng-container matColumnDef=\"Description\">-->\r\n      <!--<mat-header-cell *matHeaderCellDef fxFlex=\"35\">Incentive Item</mat-header-cell>-->\r\n      <!--<mat-cell *matCellDef=\"let IncentiveRequestItemModes\" fxFlex=\"35\">-->\r\n      <!--{{IncentiveRequestItemModes.Description }}-->\r\n      <!--</mat-cell>-->\r\n      <!--</ng-container>-->\r\n      <ng-container matColumnDef=\"TotalAmount\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"15\">Total Amount</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let IncentiveRequestItemModes\" fxFlex=\"15\"> {{IncentiveRequestItemModes.TotalAmount }}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Amount\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"15\">Consumed Amount</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let IncentiveRequestItemModes\" fxFlex=\"15\">{{IncentiveRequestItemModes.Amount }}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Balance\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"10\">Balance</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let IncentiveRequestItemModes\" fxFlex=\"10\">{{IncentiveRequestItemModes.Balance }}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Action\">\r\n        <mat-header-cell fxFlex=\"\" *matHeaderCellDef>Action</mat-header-cell>\r\n        <mat-cell fxFlex=\"\" *matCellDef=\"let IncentiveRequestItemModes;let i=index;\">\r\n          <div>\r\n            <a class=\"pointer\" mat-min-fab matTooltip=\"Click here to view the incentive Spare part  Detail\"\r\n               (click)=\"onEditIncentiveItem(i)\">\r\n              <mat-icon color=\"primary\" class=\"mat-18\">view Detail</mat-icon>\r\n              View Detail\r\n            </a>\r\n          </div>\r\n        </mat-cell>\r\n      </ng-container>\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\">\r\n      </mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n  </mat-card-content>\r\n</mat-card>\r\n<span *ngIf=\"ShowDetail\">\r\n<mat-card class=\"margin-2 padding-0\" fxFlex=\"80\">\r\n  <!--<div class=\"search-box\" style=\"width: 500px\">-->\r\n  <!--<mat-form-field>-->\r\n  <!--<input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search requested item\">-->\r\n  <!--</mat-form-field>-->\r\n  <!--</div>-->\r\n  <mat-card-content>\r\n    <div class=\"spinner-container\" *ngIf=\"loading \">\r\n      <mat-progress-bar mode=\"query\"></mat-progress-bar>\r\n    </div>\r\n\r\n    <mat-table #table [dataSource]=\"dataSource\">\r\n      <ng-container matColumnDef=\"No\">\r\n        <mat-header-cell [fxFlex]=\"6\" *matHeaderCellDef>No</mat-header-cell>\r\n        <mat-cell [fxFlex]=\"6\" *matCellDef=\"let itemList;let i=index;\">\r\n          {{i+1}}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Description\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"15\">Incentive Item</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let items\" fxFlex=\"15\"> {{items.Description }}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"RequestDate\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"15\">Request Date</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let items\" fxFlex=\"15\"> {{items.RequestDate |  date:'MM/dd/yyyy'}}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Quantity\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"14\">Quantity</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let items\" fxFlex=\"14\">{{items.Quantity }}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Amount\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"14\"> Amount</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let items\" fxFlex=\"14\"> {{items.Amount }}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumnsDetail\">\r\n      </mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumnsDetail;\">\r\n      </mat-row>\r\n    </mat-table>\r\n    <mat-paginator [pageSizeOptions]=\"[5,10, 25, 100]\"></mat-paginator>\r\n  </mat-card-content>\r\n</mat-card>\r\n</span>\r\n"

/***/ }),

/***/ "./src/app/components/incentive/balance-sparepart/spare-part.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/incentive/balance-sparepart/spare-part.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/incentive/balance-sparepart/spare-part.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/incentive/balance-sparepart/spare-part.component.ts ***!
  \********************************************************************************/
/*! exports provided: SparePartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparePartComponent", function() { return SparePartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_look_up_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/look-up.service */ "./src/app/Services/look-up.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_application_setting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Services/application-setting.service */ "./src/app/Services/application-setting.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _Services_lookup_type_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../Services/lookup-type.service */ "./src/app/Services/lookup-type.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _incentive_request_requested_items_list_requested_items_list_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../incentive-request/requested-items-list/requested-items-list.service */ "./src/app/components/incentive/incentive-request/requested-items-list/requested-items-list.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var SparePartComponent = /** @class */ (function () {
    function SparePartComponent(activatedRoute, router, route, http, snackbar, lookUpTypeService, lookUpsService, config, dialog, settingService, incentiveRequestDetailService, errMsg, toastr, fb) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.route = route;
        this.http = http;
        this.snackbar = snackbar;
        this.lookUpTypeService = lookUpTypeService;
        this.lookUpsService = lookUpsService;
        this.config = config;
        this.dialog = dialog;
        this.settingService = settingService;
        this.incentiveRequestDetailService = incentiveRequestDetailService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.fb = fb;
        this.isNewIncentiveRequestItem = false;
        this.incentiveRequestDetailModels = [];
        this.editMode = false;
        this.loading = false;
        this.ShowDetail = false;
        //'Description',
        this.displayedColumns = [
            'TotalAmount', 'Amount', 'Balance', 'Action'
        ];
        this.displayedColumnsDetail = [
            'No', 'Description', 'RequestDate', 'Amount', 'Quantity'
        ];
        this.formErrors = {
            IncentiveCategoryId: '',
            Quantity: '',
            Amount: '',
            CurrencyType: '',
            CustomsSiteId: '',
            RequestDate: '',
            InvoiceNo: '',
        };
        this.currencyTypes = [];
        // initialize the form
        // this.initForm();
        // this.initStaticData('en');
    }
    SparePartComponent.prototype.ngOnInit = function () {
        this.projectId = this.route.snapshot.params['projectId'];
        this.serviceApplicationId = this.route.snapshot.params['serviceApplicationId'];
        this.getIncentiveReaquestItmes(this.projectId);
    };
    SparePartComponent.prototype.getIncentiveReaquestItmes = function (projectId) {
        var _this = this;
        this.incentiveRequestDetailService.getIncentiveRequestslistByProjectId(projectId).subscribe(function (result) {
            if (result.length > 0) {
                _this.incentiveRequestDetailModels = result;
                // console.log(this.incentiveRequestDetailModels);
                _this.sparePartDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.incentiveRequestDetailModels);
                _this.loading = false;
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    SparePartComponent.prototype.getIncentiveRequestDetailsByProjectId = function (projectId) {
        var _this = this;
        this.incentiveRequestDetailService.getIncentiveRequestsDetailByProjectId(projectId).subscribe(function (result) {
            if (result.length > 0) {
                _this.incentiveRequestDetailModels = result;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.incentiveRequestDetailModels);
                _this.loading = false;
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    SparePartComponent.prototype.ngAfterContentChecked = function () {
    };
    SparePartComponent.prototype.onEditIncentiveItem = function (index) {
        this.editMode = true;
        this.ShowDetail = true;
        this.IncentiveItemtEditIndex = index;
        this.incentiveRequestDetailModel = this.incentiveRequestDetailModels[index];
        this.getIncentiveRequestDetailsByProjectId(this.incentiveRequestDetailModel.ProjectId);
    };
    SparePartComponent.prototype.ngOnDestroy = function () {
        // this.IncentiveRequestItemSub.unsubscribe();
    };
    SparePartComponent.prototype.onBack = function () {
        // this.router.navigate(['IncentiveRequestItems/list']);
        window.history.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"])
    ], SparePartComponent.prototype, "incentiveRequestItemSub", void 0);
    SparePartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spare-part',
            template: __webpack_require__(/*! ./spare-part.component.html */ "./src/app/components/incentive/balance-sparepart/spare-part.component.html"),
            styles: [__webpack_require__(/*! ./spare-part.component.scss */ "./src/app/components/incentive/balance-sparepart/spare-part.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _Services_lookup_type_service__WEBPACK_IMPORTED_MODULE_10__["LookupTypeService"],
            _Services_look_up_service__WEBPACK_IMPORTED_MODULE_4__["LookUpService"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_2__["AppConfiguration"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _Services_application_setting_service__WEBPACK_IMPORTED_MODULE_7__["ApplicationSettingService"],
            _incentive_request_requested_items_list_requested_items_list_service__WEBPACK_IMPORTED_MODULE_12__["IncentiveRequestDetailService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_9__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], SparePartComponent);
    return SparePartComponent;
}());



/***/ }),

/***/ "./src/app/components/incentive/balance-sparepart/spare-part.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/incentive/balance-sparepart/spare-part.module.ts ***!
  \*****************************************************************************/
/*! exports provided: SparePartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparePartModule", function() { return SparePartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _spare_part_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spare-part-routing.module */ "./src/app/components/incentive/balance-sparepart/spare-part-routing.module.ts");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _spare_part_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spare-part.component */ "./src/app/components/incentive/balance-sparepart/spare-part.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SparePartModule = /** @class */ (function () {
    function SparePartModule() {
    }
    SparePartModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _spare_part_routing_module__WEBPACK_IMPORTED_MODULE_2__["SparePartRoutingModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            ],
            declarations: [
                _spare_part_component__WEBPACK_IMPORTED_MODULE_4__["SparePartComponent"]
            ],
            exports: [
                _spare_part_component__WEBPACK_IMPORTED_MODULE_4__["SparePartComponent"]
            ]
        })
    ], SparePartModule);
    return SparePartModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-incentive-balance-sparepart-spare-part-module.js.map