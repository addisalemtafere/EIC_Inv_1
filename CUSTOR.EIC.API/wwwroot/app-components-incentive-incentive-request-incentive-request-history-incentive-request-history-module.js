(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-incentive-incentive-request-incentive-request-history-incentive-request-history-module"],{

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

/***/ "./src/app/components/incentive/incentive-request/incentive-request-history/incentive-request-history-routing.module.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-request/incentive-request-history/incentive-request-history-routing.module.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: IncentiveRequestHistoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncentiveRequestHistoryRoutingModule", function() { return IncentiveRequestHistoryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _incentive_request_history_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./incentive-request-history.component */ "./src/app/components/incentive/incentive-request/incentive-request-history/incentive-request-history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _incentive_request_history_component__WEBPACK_IMPORTED_MODULE_2__["IncentiveRequestHistoryComponent"] }
];
var IncentiveRequestHistoryRoutingModule = /** @class */ (function () {
    function IncentiveRequestHistoryRoutingModule() {
    }
    IncentiveRequestHistoryRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], IncentiveRequestHistoryRoutingModule);
    return IncentiveRequestHistoryRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/incentive/incentive-request/incentive-request-history/incentive-request-history.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-request/incentive-request-history/incentive-request-history.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"margin-2\" style=\"box-shadow: none;border: 1px solid #dddddd\">\r\n\r\n  <mat-card-header>\r\n    <mat-card-subtitle class=\"sub-title\">Incentive Request History\r\n    </mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n  </mat-form-field>\r\n  <mat-card-content>\r\n    <div class=\"spinner-container\" *ngIf=\"loading \">\r\n      <mat-progress-bar mode=\"query\"></mat-progress-bar>\r\n    </div>\r\n    <mat-table #table [dataSource]=\"dataSource\">\r\n      <ng-container matColumnDef=\"CustomsSiteId\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"25\">Customs Branch</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let IncentiveRequestItemModes\" fxFlex=\"25\">\r\n          {{IncentiveRequestItemModes.CustomsSiteId | customsBranchPipe : 1}}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"IncentiveCategory\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"25\">Incentive Category</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let IncentiveRequestItemModes\" fxFlex=\"25\">\r\n          {{IncentiveRequestItemModes.IncentiveCategoryId | lookupTypePipe : 1}}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"RequestDate\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"8\"> RequestDate</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let IncentiveRequestItemModes\" fxFlex=\"8\"> {{IncentiveRequestItemModes.RequestDate |  date:'MM/dd/yyyy'}}\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"Amount\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"8\"> Amount</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let IncentiveRequestItemModes\" fxFlex=\"8\"> {{IncentiveRequestItemModes.Amount }}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Quantity\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"8\">Quantity</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let IncentiveRequestItemModes\" fxFlex=\"8\">{{IncentiveRequestItemModes.Quantity }}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"InvoiceNo\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"8\"> InvoiceNo</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let IncentiveRequestItemModes\" fxFlex=\"8\"> {{IncentiveRequestItemModes.InvoiceNo }}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\">\r\n      </mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/incentive/incentive-request/incentive-request-history/incentive-request-history.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-request/incentive-request-history/incentive-request-history.component.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/incentive/incentive-request/incentive-request-history/incentive-request-history.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-request/incentive-request-history/incentive-request-history.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: IncentiveRequestHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncentiveRequestHistoryComponent", function() { return IncentiveRequestHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _incentive_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../incentive-request.service */ "./src/app/components/incentive/incentive-request/incentive-request.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Services_lookup_type_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../Services/lookup-type.service */ "./src/app/Services/lookup-type.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _Services_application_setting_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../Services/application-setting.service */ "./src/app/Services/application-setting.service.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _Services_look_up_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../Services/look-up.service */ "./src/app/Services/look-up.service.ts");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../config/appconfig */ "./src/app/config/appconfig.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var IncentiveRequestHistoryComponent = /** @class */ (function () {
    function IncentiveRequestHistoryComponent(activatedRoute, router, route, http, snackbar, lookUpTypeService, lookUpsService, config, dialog, settingService, IncentiveRequestItemService, errMsg, toastr, fb) {
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
        this.IncentiveRequestItemService = IncentiveRequestItemService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.fb = fb;
        this.IncentiveRequestModels = [];
        this.editMode = false;
        this.loading = false;
        this.displayedColumns = [
            'CustomsSiteId', 'IncentiveCategory', 'Quantity', 'Amount', 'InvoiceNo', 'RequestDate'
        ];
        this.IncentiveRequestModel = {};
    }
    IncentiveRequestHistoryComponent.prototype.ngOnInit = function () {
        this.serviceId = this.route.snapshot.params['serviceId'];
        this.projectId = this.route.snapshot.params['projectId'];
        this.serviceApplicationId = this.route.snapshot.params['serviceApplicationId'];
        this.getIncentiveReaquestItmes(this.projectId, this.serviceApplicationId);
    };
    IncentiveRequestHistoryComponent.prototype.getIncentiveReaquestItmes = function (projectId, serviceApplicationId) {
        var _this = this;
        this.IncentiveRequestItemService.getIncentiveRequestslist(projectId, serviceApplicationId).subscribe(function (result) {
            if (result.length > 0) {
                _this.IncentiveRequestModels = result;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.IncentiveRequestModels);
                _this.loading = false;
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    IncentiveRequestHistoryComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue.replace(/[\W_]/g, '');
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    IncentiveRequestHistoryComponent.prototype.ngOnDestroy = function () {
        // this.IncentiveRequestItemSub.unsubscribe();
    };
    IncentiveRequestHistoryComponent.prototype.onBack = function () {
        // this.router.navigate(['IncentiveRequestItems/list']);
        window.history.back();
    };
    IncentiveRequestHistoryComponent.prototype.ngAfterContentChecked = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"])
    ], IncentiveRequestHistoryComponent.prototype, "incentiveRequestItemSub", void 0);
    IncentiveRequestHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-incentive-request-history',
            template: __webpack_require__(/*! ./incentive-request-history.component.html */ "./src/app/components/incentive/incentive-request/incentive-request-history/incentive-request-history.component.html"),
            styles: [__webpack_require__(/*! ./incentive-request-history.component.scss */ "./src/app/components/incentive/incentive-request/incentive-request-history/incentive-request-history.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _Services_lookup_type_service__WEBPACK_IMPORTED_MODULE_6__["LookupTypeService"],
            _Services_look_up_service__WEBPACK_IMPORTED_MODULE_11__["LookUpService"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_12__["AppConfiguration"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _Services_application_setting_service__WEBPACK_IMPORTED_MODULE_9__["ApplicationSettingService"],
            _incentive_request_service__WEBPACK_IMPORTED_MODULE_2__["IncentiveRequestService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_10__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], IncentiveRequestHistoryComponent);
    return IncentiveRequestHistoryComponent;
}());



/***/ }),

/***/ "./src/app/components/incentive/incentive-request/incentive-request-history/incentive-request-history.module.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-request/incentive-request-history/incentive-request-history.module.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: IncentiveRequestHistoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncentiveRequestHistoryModule", function() { return IncentiveRequestHistoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _incentive_request_history_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./incentive-request-history.component */ "./src/app/components/incentive/incentive-request/incentive-request-history/incentive-request-history.component.ts");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _incentive_request_history_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./incentive-request-history-routing.module */ "./src/app/components/incentive/incentive-request/incentive-request-history/incentive-request-history-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var IncentiveRequestHistoryModule = /** @class */ (function () {
    function IncentiveRequestHistoryModule() {
    }
    IncentiveRequestHistoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _incentive_request_history_routing_module__WEBPACK_IMPORTED_MODULE_4__["IncentiveRequestHistoryRoutingModule"]
            ],
            declarations: [_incentive_request_history_component__WEBPACK_IMPORTED_MODULE_2__["IncentiveRequestHistoryComponent"]],
            exports: [_incentive_request_history_component__WEBPACK_IMPORTED_MODULE_2__["IncentiveRequestHistoryComponent"]]
        })
    ], IncentiveRequestHistoryModule);
    return IncentiveRequestHistoryModule;
}());



/***/ }),

/***/ "./src/app/components/incentive/incentive-request/incentive-request.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-request/incentive-request.service.ts ***!
  \*************************************************************************************/
/*! exports provided: IncentiveRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncentiveRequestService", function() { return IncentiveRequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IncentiveRequestService = /** @class */ (function () {
    function IncentiveRequestService(httpClient, appConfig, config, errMsg) {
        this.httpClient = httpClient;
        this.appConfig = appConfig;
        this.config = config;
        this.errMsg = errMsg;
        this.incentiveRequestList = [];
    }
    IncentiveRequestService.prototype.getIncentiveRequests = function () {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('incentiveRequests')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (incentiveRequestList) { return _this.incentiveRequestList = incentiveRequestList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestService.prototype.getIncentiveRequestslists = function (id) {
        return this.httpClient.get(this.appConfig.urls.url('incentiveRequestsothers') + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestService.prototype.getIncentiveRequestslist = function (projectId, ServiceApplicationId) {
        return this.httpClient.get(this.appConfig.urls.url('incentiveRequests', projectId, ServiceApplicationId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestService.prototype.getIncentiveRequestslistByProjectId = function (id) {
        return this.httpClient.get(this.appConfig.urls.url('incentiveRequestsByProjectId') + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestService.prototype.getIncentiveRequestByServiceApplicationId = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('incentiveRequestByServiceAppId', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (incentiveRequestdata) {
            _this.incentiveRequestList = incentiveRequestdata;
            return _this.incentiveRequestList;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestService.prototype.getIncentiveRequest = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('incentiveRequest', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (incentiveRequestdata) {
            _this.incentiveRequestModel = incentiveRequestdata;
            return _this.incentiveRequestModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestService.prototype.saveIncentiveRequest = function (incentiveRequest) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('incentiveRequest'), incentiveRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (IncentiveRequest) {
            // console.log(this.incentiveRequestModel);
            _this.incentiveRequestModel = IncentiveRequest;
            return _this.incentiveRequestModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestService.prototype.deleteIncentiveRequest = function (id) {
        return this.httpClient.delete(this.config.urls.url('incentiveRequest', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parsePromiseResponseError));
    };
    IncentiveRequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_1__["AppConfiguration"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_1__["AppConfiguration"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"]])
    ], IncentiveRequestService);
    return IncentiveRequestService;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-incentive-incentive-request-incentive-request-history-incentive-request-history-module.js.map