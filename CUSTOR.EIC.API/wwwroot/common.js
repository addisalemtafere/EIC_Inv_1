(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/Services/incentive/bill-of-material.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/Services/incentive/bill-of-material.service.ts ***!
  \****************************************************************/
/*! exports provided: BillOfMaterialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillOfMaterialService", function() { return BillOfMaterialService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _Base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Base.service */ "./src/app/Services/Base.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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






var BillOfMaterialService = /** @class */ (function (_super) {
    __extends(BillOfMaterialService, _super);
    function BillOfMaterialService(http, appConfig, errMsg) {
        var _this = _super.call(this, http, appConfig.urls.url('IncentiveBoMImportItems'), errMsg) || this;
        _this.http = http;
        _this.appConfig = appConfig;
        _this.errMsg = errMsg;
        return _this;
    }
    BillOfMaterialService.prototype.uploadDocument = function (resource) {
        return this.httpClient.post(this.appConfig.urls.url('IncentiveBoMImportItem'), resource).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BillOfMaterialService.prototype.finalForApprovalBillOfMaterial = function (id) {
        return this.httpClient.get(this.appConfig.urls.url('IncentiveBoMImportItemsFinalForApproval', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BillOfMaterialService.prototype.getBillOfMaterialByProjectId = function (id) {
        return this.httpClient.get(this.appConfig.urls.url('IncentiveBoMImportItemByProjectId') + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    // getBillOfMaterialByProjectId(id: number): Observable<IncentiveBoMRequestItemModel[]> {
    //   return this.httpClient.get<IncentiveBoMRequestItemModel>(this.appConfig.urls.url('IncentiveBoMImportItemByProjectId') + '/' + id).pipe(
    //     catchError(this.errMsg.parseObservableResponseError));
    // }
    BillOfMaterialService.prototype.getBillOfMaterialByServiceApplicationId = function (id) {
        return this.httpClient.get(this.appConfig.urls.url('ServiceApplicationBillOfMaterial') + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BillOfMaterialService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_2__["AppConfiguration"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"]])
    ], BillOfMaterialService);
    return BillOfMaterialService;
}(_Base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ }),

/***/ "./src/app/components/appointment/appointment-routing.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/appointment/appointment-routing.ts ***!
  \***************************************************************/
/*! exports provided: AppointmentRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentRouting", function() { return AppointmentRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _appointment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appointment.component */ "./src/app/components/appointment/appointment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _appointment_component__WEBPACK_IMPORTED_MODULE_2__["AppointmentComponent"] }
];
var AppointmentRouting = /** @class */ (function () {
    function AppointmentRouting() {
    }
    AppointmentRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppointmentRouting);
    return AppointmentRouting;
}());



/***/ }),

/***/ "./src/app/components/appointment/appointment.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/appointment/appointment.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header title=\"appointment\" icon=\"announcement\"></app-page-header>\r\n\r\n\r\n<mat-card style=\"margin-bottom: 50px;\" class=\"dashboard-card\">\r\n\r\n  <mat-card-content class=\"dashboard-card-content\">\r\n    <div class=\"spinner-container\" *ngIf=\"loading \">\r\n      <mat-progress-bar mode=\"query\"></mat-progress-bar>\r\n    </div>\r\n    <mat-table #table [dataSource]=\"dataSourceNotitification\">\r\n\r\n      <ng-container matColumnDef=\"date\">\r\n        <mat-header-cell fxFlex=\"10\" *matHeaderCellDef> Date</mat-header-cell>\r\n        <mat-cell fxFlex=\"10\" *matCellDef=\"let notitficationList\">\r\n          {{notitficationList.CreatedDate | date}}\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"subject\">\r\n        <mat-header-cell fxFlex=\"20\" *matHeaderCellDef>subject</mat-header-cell>\r\n        <mat-cell class=\"message-subject\" fxFlex=\"20\" *matCellDef=\"let notitficationList\">\r\n          {{notitficationList.Subject | filterPipe: 20}}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"message\">\r\n        <mat-header-cell fxFlex=\"70\" *matHeaderCellDef>Message</mat-header-cell>\r\n        <mat-cell class=\"mess-body\" fxFlex=\"70\" *matCellDef=\"let notitficationList\">\r\n          {{notitficationList.Message}}\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumnsNotification\">\r\n      </mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumnsNotification;\">\r\n      </mat-row>\r\n    </mat-table>\r\n\r\n    <mat-paginator\r\n\r\n      #paginator2\r\n      [pageSize]=\"6\"\r\n      [pageSizeOptions]=\"[6, 10, 20]\">\r\n    </mat-paginator>\r\n\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/appointment/appointment.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/appointment/appointment.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mess-body {\n  padding: 20px;\n  line-height: 1.428571429;\n  color: #333;\n  font-size: 15px;\n  padding: 10px;\n  line-height: 20px !important;\n  text-align: justify !important;\n  font-weight: bolder !important; }\n\nmat-card {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  display: block;\n  position: relative;\n  padding: 0px !important;\n  border-radius: 2px; }\n"

/***/ }),

/***/ "./src/app/components/appointment/appointment.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/appointment/appointment.component.ts ***!
  \*****************************************************************/
/*! exports provided: AppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentComponent", function() { return AppointmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _Services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/notification.service */ "./src/app/Services/notification.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _custor_validation_custom_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @custor/validation/custom/form */ "./src/@custor/validation/custom/form.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _Services_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Services/service.service */ "./src/app/Services/service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppointmentComponent = /** @class */ (function () {
    function AppointmentComponent(errMsg, router, dataSharing, route, accountService, service, formBuilder, formService, notifificationService) {
        this.errMsg = errMsg;
        this.router = router;
        this.dataSharing = dataSharing;
        this.route = route;
        this.accountService = accountService;
        this.service = service;
        this.formBuilder = formBuilder;
        this.formService = formService;
        this.notifificationService = notifificationService;
        this.loading = false;
        this.displayedColumnsNotification = [
            'date', 'subject', 'message'
        ];
    }
    AppointmentComponent.prototype.ngOnInit = function () {
        this.getAllNotification(this.accountService.currentUser.Id);
    };
    AppointmentComponent.prototype.getAllNotification = function (investorId) {
        var _this = this;
        this.notifificationService.getAllById(investorId)
            .subscribe(function (result) {
            _this.dataSourceNotitification = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](result);
            _this.loading = false;
            _this.notitficationList = result;
            // console.log(this.notitficationList);
            _this.dataSourceNotitification.paginator = _this.paginator2;
        }, function (error) { return _this.errMsg.getError(error); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], AppointmentComponent.prototype, "paginator2", void 0);
    AppointmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-appointment',
            template: __webpack_require__(/*! ./appointment.component.html */ "./src/app/components/appointment/appointment.component.html"),
            styles: [__webpack_require__(/*! ./appointment.component.scss */ "./src/app/components/appointment/appointment.component.scss")]
        }),
        __metadata("design:paramtypes", [_custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_6__["DataSharingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"],
            _Services_service_service__WEBPACK_IMPORTED_MODULE_9__["ServiceService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _custor_validation_custom_form__WEBPACK_IMPORTED_MODULE_7__["FormService"],
            _Services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], AppointmentComponent);
    return AppointmentComponent;
}());



/***/ }),

/***/ "./src/app/components/appointment/appointment.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/appointment/appointment.module.ts ***!
  \**************************************************************/
/*! exports provided: AppointmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentModule", function() { return AppointmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _appointment_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appointment-routing */ "./src/app/components/appointment/appointment-routing.ts");
/* harmony import */ var _appointment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./appointment.component */ "./src/app/components/appointment/appointment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppointmentModule = /** @class */ (function () {
    function AppointmentModule() {
    }
    AppointmentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _appointment_routing__WEBPACK_IMPORTED_MODULE_3__["AppointmentRouting"]
            ],
            declarations: [_appointment_component__WEBPACK_IMPORTED_MODULE_4__["AppointmentComponent"]],
            exports: [_appointment_component__WEBPACK_IMPORTED_MODULE_4__["AppointmentComponent"]]
        })
    ], AppointmentModule);
    return AppointmentModule;
}());



/***/ }),

/***/ "./src/app/components/incentive/incentive-request/requested-items-list/requested-items-list.service.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-request/requested-items-list/requested-items-list.service.ts ***!
  \*************************************************************************************************************/
/*! exports provided: IncentiveRequestDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncentiveRequestDetailService", function() { return IncentiveRequestDetailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IncentiveRequestDetailService = /** @class */ (function () {
    function IncentiveRequestDetailService(httpClient, appConfig, config, errMsg) {
        this.httpClient = httpClient;
        this.appConfig = appConfig;
        this.config = config;
        this.errMsg = errMsg;
        this.incentiveRequestItemList = [];
        this.incentiveBoMRequestItemList = [];
    }
    IncentiveRequestDetailService.prototype.getIncentiveRequestItems = function () {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('IncentiveRequestDetail')).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (incentiveRequestItemList) { return _this.incentiveRequestItemList = incentiveRequestItemList; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestDetailService.prototype.getIncentiveRequestItemslist = function (id) {
        return this.httpClient.get(this.appConfig.urls.url('IncentiveRequestDetail') + "/" + id).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestDetailService.prototype.getIncentiveRequestDetails = function (projectId) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('IncentiveRequestDetails', projectId)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (incentiveRequestItemList) { return _this.incentiveRequestItemList = incentiveRequestItemList; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestDetailService.prototype.getIncentiveRequestDetailsBytCategoryCode = function (projectId, categoryId) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('IncentiveRequestDetailsByCategoryId', projectId, categoryId)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (incentiveRequestItemList) { return _this.incentiveRequestItemList = incentiveRequestItemList; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestDetailService.prototype.getIncentiveRequestDetailsByProjectId = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('IncentiveRequestDetailsByProjectId', id)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (incentiveRequestItemList) { return _this.incentiveRequestItemList = incentiveRequestItemList; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestDetailService.prototype.getIncentiveRequestslistByProjectId = function (projectId) {
        return this.httpClient.get(this.appConfig.urls.url('IncentiveRequestDetailofSparePart', projectId)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestDetailService.prototype.getIncentiveRequestsDetailByProjectId = function (projectId) {
        return this.httpClient.get(this.appConfig.urls.url('incentiveRequestsDetailByProjectId', projectId)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestDetailService.prototype.getIncentiveRequestItem = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('IncentiveRequestDetail', id)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (incentiveRequestItemdata) {
            _this.incentiveRequestDetailModel = incentiveRequestItemdata;
            return _this.incentiveRequestDetailModel;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestDetailService.prototype.getIncentiveBoMRequestDetails = function (projectId, incentiveCategoryId, Phase) {
        var _this = this;
        // tslint:disable-next-line:max-line-length
        return this.httpClient.get(this.config.urls.url('IncentiveBoMRequestItems', projectId, incentiveCategoryId, Phase)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (incentiveBoMRequestItemList) { return _this.incentiveBoMRequestItemList = incentiveBoMRequestItemList; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestDetailService.prototype.getIncentiveBoMRequestDetail = function (id) {
        var _this = this;
        // tslint:disable-next-line:max-line-length
        return this.httpClient.get(this.config.urls.url('IncentiveBoMRequestItems', id)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (incentiveBoMRequestItem) { return _this.incentiveBoMRequestDetailModel = incentiveBoMRequestItem; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestDetailService.prototype.saveIncentiveRequestItem = function (incentiveRequestItem) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('IncentiveRequestDetail'), incentiveRequestItem).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (IncentiveRequestItem) {
            _this.incentiveRequestDetailModel = IncentiveRequestItem;
            return _this.incentiveRequestDetailModel;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestDetailService.prototype.addIncentiveRequestItem = function (incentiveRequestItem, bOMTableId) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('IncentiveRequestDetail'), incentiveRequestItem).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (IncentiveRequestItem) {
            _this.incentiveRequestDetailModel = IncentiveRequestItem;
            return _this.incentiveRequestDetailModel;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestDetailService.prototype.updateIncentiveRequestItem = function (incentiveRequestItem) {
        var _this = this;
        return this.httpClient.put(this.config.urls.url('IncentiveRequestDetail'), incentiveRequestItem).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (IncentiveRequestItem) {
            _this.incentiveRequestDetailModel = IncentiveRequestItem;
            return _this.incentiveRequestDetailModel;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestDetailService.prototype.deleteIncentiveRequestItem = function (id) {
        return this.httpClient.delete(this.config.urls.url('IncentiveRequestDetail', id)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            return result;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errMsg.parsePromiseResponseError));
    };
    IncentiveRequestDetailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_2__["AppConfiguration"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_2__["AppConfiguration"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"]])
    ], IncentiveRequestDetailService);
    return IncentiveRequestDetailService;
}());



/***/ }),

/***/ "./src/app/components/project-profile/aftercare-recomendation/AftercareRecommModule.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/project-profile/aftercare-recomendation/AftercareRecommModule.ts ***!
  \*********************************************************************************************/
/*! exports provided: AftercareRecommModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AftercareRecommModule", function() { return AftercareRecommModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _aftercare_recommendation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aftercare-recommendation.component */ "./src/app/components/project-profile/aftercare-recomendation/aftercare-recommendation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AftercareRecommModule = /** @class */ (function () {
    function AftercareRecommModule() {
    }
    AftercareRecommModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            declarations: [_aftercare_recommendation_component__WEBPACK_IMPORTED_MODULE_3__["AftercareRecommendationComponent"]],
            exports: [_aftercare_recommendation_component__WEBPACK_IMPORTED_MODULE_3__["AftercareRecommendationComponent"]]
        })
    ], AftercareRecommModule);
    return AftercareRecommModule;
}());



/***/ }),

/***/ "./src/app/components/project-profile/aftercare-recomendation/aftercare-recommendation.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/aftercare-recomendation/aftercare-recommendation.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card style=\"margin-top: 20px;\">\r\n\r\n  <mat-card-content style=\"margin-bottom: 30px;\">\r\n    <div style=\"margin-bottom: 40px;\" fxLayout=\"margin-10 row wrap\">\r\n      <div class=\"project_table_wdg mat-elevation-z6\">\r\n\r\n        <ul>\r\n          <li>Recommendation</li>\r\n\r\n          <li style=\"padding: 12px 12px;\" class=\"afterBody\">\r\n            This report has only investigated the commercial viability of the method of production;\r\n            it has not made an assessment of the market demand or marketability of this product.\r\n            It is recommended that these factors be assessed. Market demand should be quantified\r\n            and analysed against production and set-up costs in order to establish the optimal\r\n            scale of production. Further research is required to establish the validity of the\r\n            claim that the smaller grain sizes resulting from the short,\r\n            rapid cycle of the microwave sintering process are mechanically superior\r\n            to conventionally-sintered ceramics as this will impact on the demand and marketability of this product.\r\n          </li>\r\n\r\n\r\n        </ul>\r\n\r\n        <ul style=\"margin-left: 10%\">\r\n          <li>Detail</li>\r\n          <li><span class=\"header\">Date :</span>Nov 12 2018</li>\r\n          <li><span class=\"header\">BY :</span>User</li>\r\n\r\n\r\n        </ul>\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/aftercare-recomendation/aftercare-recommendation.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/aftercare-recomendation/aftercare-recommendation.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  color: #333;\n  font-family: Helvetica, Arial, sans-serif;\n  border-collapse: collapse;\n  border: 1px solid #f1f1f1; }\n\ntbody > tr > td:first-child {\n  /*background-color: whitesmoke !important;*/ }\n\ntd, th {\n  height: 40px;\n  transition: all 0.3s;\n  /* Simple transition for hover effect */ }\n\nth {\n  background: #fafafa;\n  font-weight: bold;\n  font-size: 12px; }\n\ntd {\n  background: whitesmoke;\n  text-align: center; }\n\n/* Cells in even rows (2,4,6...) are one color */\n\ntr:nth-child(even) td {\n  background: #FEFEFE; }\n\n/* Cells in odd rows (1,3,5...) are another (excludes header cells)  */\n\ntr:nth-child(odd) td {\n  background: #FEFEFE; }\n\ntr td:hover {\n  background: #d8e9f9;\n  color: #FFF; }\n\n.caption {\n  color: cadetblue !important;\n  font-weight: bolder;\n  margin: 20px 6px 5px 6px;\n  text-decoration: underline;\n  -webkit-text-decoration-color: #f1f1f1;\n          text-decoration-color: #f1f1f1;\n  text-align: center; }\n\n.project_table_wdg {\n  border: 1px solid #f1f1f1;\n  border-radius: 4px;\n  -moz-border-radius: 4px;\n  -webkit-border-radius: 4px;\n  float: left;\n  /*margin-top: 25px;*/ }\n\n.project_table_wdg ul {\n  list-style: none;\n  float: left;\n  width: 400px;\n  margin: 0;\n  border: 1px solid #f1f1f1;\n  padding: 2px;\n  /*text-align: center;*/\n  background-color: #FFF; }\n\n.project_table_wdg ul li {\n  border-bottom: 1px dashed #f1f1f1;\n  padding: 8px 0; }\n\n.project_table_wdg ul li:first-child {\n  color: cadetblue;\n  font-size: 18px;\n  font-weight: bold;\n  background: whitesmoke; }\n\n.project_table_wdg ul li:nth-child(2) {\n  /*background: #FAFAFA;*/ }\n\n.project_table_wdg ul li:nth-child(3) {\n  font-size: 12px;\n  font-weight: bold; }\n\n.project_table_wdg ul li:nth-child(n+4) {\n  font-size: 12px; }\n\n.project_table_wdg ul li > .header {\n  font-weight: bold;\n  padding-left: 2px !important; }\n"

/***/ }),

/***/ "./src/app/components/project-profile/aftercare-recomendation/aftercare-recommendation.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/project-profile/aftercare-recomendation/aftercare-recommendation.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AftercareRecommendationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AftercareRecommendationComponent", function() { return AftercareRecommendationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AftercareRecommendationComponent = /** @class */ (function () {
    function AftercareRecommendationComponent() {
    }
    AftercareRecommendationComponent.prototype.ngOnInit = function () {
    };
    AftercareRecommendationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aftercare-recommendation',
            template: __webpack_require__(/*! ./aftercare-recommendation.component.html */ "./src/app/components/project-profile/aftercare-recomendation/aftercare-recommendation.component.html"),
            styles: [__webpack_require__(/*! ./aftercare-recommendation.component.scss */ "./src/app/components/project-profile/aftercare-recomendation/aftercare-recommendation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AftercareRecommendationComponent);
    return AftercareRecommendationComponent;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map