(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-business-business-tab-business-tab-module"],{

/***/ "./src/app/Services/bussiness/bussiness.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/Services/bussiness/bussiness.service.ts ***!
  \*********************************************************/
/*! exports provided: BussinessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BussinessService", function() { return BussinessService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/appconfig */ "./src/app/config/appconfig.ts");
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





var BussinessService = /** @class */ (function () {
    function BussinessService(httpClient, config, errMsg) {
        this.httpClient = httpClient;
        this.config = config;
        this.errMsg = errMsg;
    }
    BussinessService.prototype.saveBussiness = function (bussiness) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('Bussiness'), bussiness).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (bussinessdata) { return _this.bussinessdata = bussinessdata; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BussinessService.prototype.saveBussinessLicense = function (bussinessLicense) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('SaveBussinessLicense'), bussinessLicense).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (bussinesslicenceData) { return _this.bussinesslicenceData = bussinesslicenceData; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BussinessService.prototype.getBussinessLicense = function (businessId) {
        return this.httpClient.get(this.config.urls.url('GetBusinessLicenseGroup', businessId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BussinessService.prototype.getRegistration = function () {
        return this.httpClient.get(this.config.urls.url('Registrations')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BussinessService.prototype.getRegistrationByTin = function (Tin) {
        return this.httpClient.get(this.config.urls.url('RegistrationByTin', Tin)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BussinessService.prototype.getRegistrationBranchByInvestorId = function (InvestorId) {
        return this.httpClient.get(this.config.urls.url('RegistrationBranchByInvestorId', InvestorId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BussinessService.prototype.saveBussinessBranch = function (bussinessbranch) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('SaveBussinessBranch'), bussinessbranch).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (bussinessBranchdata) { return _this.bussinessBranchdata = bussinessBranchdata; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BussinessService.prototype.getBussinessBranchByInvestorId = function (InvestorId) {
        return this.httpClient.get(this.config.urls.url('BussinessBranchByInvestorId', InvestorId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BussinessService.prototype.DeleteBussinessBranchByAddresId = function (bussinessbranch) {
        return this.httpClient.post(this.config.urls.url('DeleteBussinessBranch'), bussinessbranch).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BussinessService.prototype.getMajorDivisionByInvestorId = function (InvestorId) {
        return this.httpClient.get(this.config.urls.url('GetMajorDivisionsByInvestorID', InvestorId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BussinessService.prototype.getRegistrationByInvestorId = function (InvestorId) {
        return this.httpClient.get(this.config.urls.url('investor', InvestorId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BussinessService.prototype.getRegistrationCatagory = function (InvestorId) {
        return this.httpClient.get(this.config.urls.url('GetRegistrationCatagory', InvestorId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BussinessService.prototype.getBusiness = function (BusinessId) {
        return this.httpClient.get(this.config.urls.url('GetBusiness', BusinessId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BussinessService.prototype.getBussinessMajorCatagory = function (BussinessId) {
        return this.httpClient.get(this.config.urls.url('GetBussinessMajorCatagory', BussinessId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BussinessService.prototype.getBussinessCatagory = function (BussinessId) {
        return this.httpClient.get(this.config.urls.url('GetBussinessCatagory', BussinessId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BussinessService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"]])
    ], BussinessService);
    return BussinessService;
}());



/***/ }),

/***/ "./src/app/components/business/business-tab/business-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/business/business-tab/business-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: BusinessRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessRoutingModule", function() { return BusinessRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _business_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./business-tab.component */ "./src/app/components/business/business-tab/business-tab.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var route = [{
        path: '', component: _business_tab_component__WEBPACK_IMPORTED_MODULE_2__["BusinessTabComponent"]
    }
];
var BusinessRoutingModule = /** @class */ (function () {
    function BusinessRoutingModule() {
    }
    BusinessRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(route)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], BusinessRoutingModule);
    return BusinessRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/business/business-tab/business-tab.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/business/business-tab/business-tab.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"0\">\r\n  <div class=\"block\" fxFlex=\"\">\r\n    <app-page-header title=\"businessLicense\" icon=\"\"></app-page-header>\r\n\r\n  </div>\r\n  <div id=\"title1\" class=\"block\" fxFlex=\"50\">\r\n    <span class=\"page-title\">{{title}}</span>\r\n    <span class=\"slideBorder\">/</span>\r\n    <span class=\"page-title\">{{investorName}}</span>\r\n    <span class=\"slideBorder\">/</span>\r\n    <span class=\"page-title\">{{projectName}}</span>\r\n\r\n\r\n  </div>\r\n</div>\r\n<mat-tab-group>\r\n\r\n  <mat-tab label=\"Service Info\">\r\n    <ng-template matTabContent>\r\n      <app-service-info></app-service-info>\r\n    </ng-template>\r\n  </mat-tab>\r\n\r\n  <mat-tab label=\"Business License\">\r\n    <ng-template matTabContent>\r\n     <!-- <app-edit-investor></app-edit-investor>-->\r\n      <app-bussiness></app-bussiness>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <!--<mat-tab label=\"Category\">\r\n    <ng-template matTabContent>\r\n      <app-company-clearance-form></app-company-clearance-form>\r\n    </ng-template>\r\n  </mat-tab>-->\r\n  <mat-tab label=\"Bussiness Address\">\r\n    <ng-template matTabContent>\r\n      <app-bussiness-branch></app-bussiness-branch>\r\n    </ng-template>\r\n  </mat-tab>\r\n\r\n  <mat-tab label=\"Document\">\r\n    <ng-template matTabContent>\r\n      <mat-card *ngIf=\"!isInvestor\" class=\"margin-2 simple-card\">\r\n        <mat-card-header>\r\n          <mat-card-subtitle class=\"sub-title\"></mat-card-subtitle>\r\n          <button class=\"margin-10 certificate-title\" mat-raised-button=\"\"\r\n                  (click)=\"addMessage()\" color=\"primary\">\r\n            Add Message\r\n          </button>\r\n        </mat-card-header>\r\n      </mat-card>\r\n      <app-service-prerequisite></app-service-prerequisite>\r\n    </ng-template>\r\n  </mat-tab>\r\n\r\n  <mat-tab *ngIf=\"!isInvestor\" label=\"Payment\">\r\n    <ng-template matTabContent>\r\n      <app-payment></app-payment>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab *ngIf=\"!isInvestor\" label=\"Certificate\">\r\n    <ng-template matTabContent>\r\n      <app-bussiness-certificate></app-bussiness-certificate>\r\n     <!--<app-registration-certificate></app-registration-certificate>-->\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab *ngIf=\"isInvestor\" label=\"Confirmation\">\r\n    <ng-template matTabContent>\r\n      <app-service-confirmation></app-service-confirmation>\r\n    </ng-template>\r\n  </mat-tab>\r\n\r\n</mat-tab-group>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/business/business-tab/business-tab.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/business/business-tab/business-tab.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/business/business-tab/business-tab.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/business/business-tab/business-tab.component.ts ***!
  \****************************************************************************/
/*! exports provided: BusinessTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessTabComponent", function() { return BusinessTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _project_profile_notification_notification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../project-profile/notification/notification.component */ "./src/app/components/project-profile/notification/notification.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BusinessTabComponent = /** @class */ (function () {
    function BusinessTabComponent(accountService, router, dialog, dataSharing) {
        this.accountService = accountService;
        this.router = router;
        this.dialog = dialog;
        this.dataSharing = dataSharing;
        this.selectedIndex = 0;
    }
    BusinessTabComponent.prototype.ngOnInit = function () {
        this.getUserType();
        this.title = localStorage.getItem('title');
        this.projectName = localStorage.getItem('projectName');
        this.investorName = localStorage.getItem('investorName');
        this.userName = this.accountService.currentUser.FullName;
    };
    BusinessTabComponent.prototype.getUserType = function () {
        this.isInvestor = this.accountService.getUserType();
    };
    BusinessTabComponent.prototype.addMessage = function () {
        this.dialog.open(_project_profile_notification_notification_component__WEBPACK_IMPORTED_MODULE_5__["NotificationComponent"]);
    };
    BusinessTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-business-tab',
            template: __webpack_require__(/*! ./business-tab.component.html */ "./src/app/components/business/business-tab/business-tab.component.html"),
            styles: [__webpack_require__(/*! ./business-tab.component.scss */ "./src/app/components/business/business-tab/business-tab.component.scss")]
        }),
        __metadata("design:paramtypes", [_custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_4__["DataSharingService"]])
    ], BusinessTabComponent);
    return BusinessTabComponent;
}());



/***/ }),

/***/ "./src/app/components/business/business-tab/business-tab.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/business/business-tab/business-tab.module.ts ***!
  \*************************************************************************/
/*! exports provided: BusinessTabModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessTabModule", function() { return BusinessTabModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _investor_investor_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../investor/investor.module */ "./src/app/components/investor/investor.module.ts");
/* harmony import */ var _investor_associate_associate_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../investor/associate/associate.module */ "./src/app/components/investor/associate/associate.module.ts");
/* harmony import */ var _officer_Task_officer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../officer-Task/officer.module */ "./src/app/components/officer-Task/officer.module.ts");
/* harmony import */ var _project_profile_service_confirmation_ServiceConfirmation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../project-profile/service-confirmation/ServiceConfirmation.module */ "./src/app/components/project-profile/service-confirmation/ServiceConfirmation.module.ts");
/* harmony import */ var _project_profile_service_info_serviceInfo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../project-profile/service-info/serviceInfo.module */ "./src/app/components/project-profile/service-info/serviceInfo.module.ts");
/* harmony import */ var _business_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./business-routing.module */ "./src/app/components/business/business-tab/business-routing.module.ts");
/* harmony import */ var _bussiness_bussiness_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../bussiness/bussiness.module */ "./src/app/components/bussiness/bussiness.module.ts");
/* harmony import */ var _business_tab_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./business-tab.component */ "./src/app/components/business/business-tab/business-tab.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var BusinessTabModule = /** @class */ (function () {
    function BusinessTabModule() {
    }
    BusinessTabModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _business_routing_module__WEBPACK_IMPORTED_MODULE_8__["BusinessRoutingModule"],
                _investor_investor_module__WEBPACK_IMPORTED_MODULE_3__["InvestorModule"],
                _investor_associate_associate_module__WEBPACK_IMPORTED_MODULE_4__["AssociateModule"],
                _officer_Task_officer_module__WEBPACK_IMPORTED_MODULE_5__["OfficerModule"],
                _project_profile_service_confirmation_ServiceConfirmation_module__WEBPACK_IMPORTED_MODULE_6__["ServiceConfirmationModule"],
                _project_profile_service_info_serviceInfo_module__WEBPACK_IMPORTED_MODULE_7__["ServiceInfoModule"],
                _bussiness_bussiness_module__WEBPACK_IMPORTED_MODULE_9__["BussinessModule"],
            ],
            declarations: [
                _business_tab_component__WEBPACK_IMPORTED_MODULE_10__["BusinessTabComponent"]
            ],
            exports: [_business_tab_component__WEBPACK_IMPORTED_MODULE_10__["BusinessTabComponent"]]
        })
    ], BusinessTabModule);
    return BusinessTabModule;
}());



/***/ }),

/***/ "./src/app/components/bussiness/bussiness-branch/bussiness-branch.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/bussiness/bussiness-branch/bussiness-branch.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<mat-card style=\"margin: 20px;\" *ngIf=\"1==1\" class=\"dashboard-card\">\r\n\r\n  <mat-card-content class=\"dashboard-card-content\">-->\r\n\r\n    <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n    <mat-card class=\"border\" style=\"margin-top: 20px;\" *ngIf=\"selectedBranchList.length==0\">\r\n\r\n\r\n      <mat-card-subtitle class=\"sub-title\">Commertial Registration Branch\r\n        <mat-divider></mat-divider>\r\n      </mat-card-subtitle>\r\n\r\n    <mat-table #table [dataSource]=\"dataSource\" *ngIf=\"selectedBranchList.length==0\">\r\n\r\n      <ng-container matColumnDef=\"RegionID\">\r\n        <mat-header-cell *matHeaderCellDef>Region  </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let RegistrationBranchList\">\r\n          {{RegistrationBranchList?.RegionName}}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Zone\">\r\n        <mat-header-cell *matHeaderCellDef>Zone  </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let RegistrationBranchList\">\r\n       {{RegistrationBranchList?.ZoneName}}\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"WoredaID\">\r\n        <mat-header-cell *matHeaderCellDef>Subcity/Woreda </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let RegistrationBranchList\">\r\n          {{RegistrationBranchList?.WoredaName}}\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"HouseNo\">\r\n        <mat-header-cell *matHeaderCellDef>House No   </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let RegistrationBranchList\">\r\n            {{RegistrationBranchList.HouseNo }}\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n\r\n      <ng-container matColumnDef=\"actions\">\r\n        <mat-header-cell *matHeaderCellDef>\r\n        </mat-header-cell>\r\n\r\n        <mat-cell *matCellDef=\"let RegistrationBranchList\">\r\n\r\n          <mat-checkbox [value]=\"RegistrationBranchList?.AddressId\"\r\n                        [checked]=\"RegistrationBranchList.selected\"\r\n                        (change)=\"onBussinessBranchControlChanged($event,selectedBranchList)\">\r\n          </mat-checkbox>\r\n\r\n        </mat-cell>\r\n\r\n      </ng-container>\r\n\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\">\r\n      </mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n    </mat-card>\r\n<mat-card class=\"border\" style=\"margin-top: 20px;\" *ngIf=\"selectedBranchList.length\">\r\n<mat-card-subtitle class=\"sub-title\">Bussiness Registration Branch\r\n  <mat-divider></mat-divider>\r\n</mat-card-subtitle>\r\n\r\n    <mat-table #table [dataSource]=\"dataSourceBranch\" >\r\n\r\n      <ng-container matColumnDef=\"RegionID\">\r\n        <mat-header-cell *matHeaderCellDef>ክልል  </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let selectedBranchList\">\r\n          {{selectedBranchList?.RegionName}}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Zone\">\r\n        <mat-header-cell *matHeaderCellDef>ዞን  </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let selectedBranchList\">\r\n          {{selectedBranchList?.ZoneName}}\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"WoredaID\">\r\n        <mat-header-cell *matHeaderCellDef>ክፍለ ከተማ </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let selectedBranchList\">\r\n          {{selectedBranchList?.WoredaName}}\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"HouseNo\">\r\n        <mat-header-cell *matHeaderCellDef>የቤት ቁጥር   </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let selectedBranchList\">\r\n          {{selectedBranchList.HouseNo }}\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n\r\n     <ng-container matColumnDef=\"actions\">\r\n        <mat-header-cell *matHeaderCellDef>\r\n        </mat-header-cell>\r\n\r\n        <mat-cell *matCellDef=\"let selectedBranchList\">\r\n            <a class=\"margin-10 a-link pointer\" matTooltip=\"Delete Bussiness Branch\"\r\n             (click)=\"DeleteBussinessBranch(selectedBranchList.AddressId)\">\r\n              <mat-icon color=\"warn\"></mat-icon>\r\n            <!--<mat-icon color=\"primary\"></mat-icon>-->\r\n          <span>Delete</span>\r\n          </a>\r\n          <!--<mat-checkbox [value]=\"selectedBranchList?.MainGuid\"\r\n                        [checked]=\"selectedBranchList.selected\"\r\n                        (change)=\"onBussinessBranchControlChanged($event,selectedBranchList)\">\r\n          </mat-checkbox>-->\r\n\r\n        </mat-cell>\r\n\r\n      </ng-container>\r\n\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumnsBranch\">\r\n      </mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumnsBranch;\">\r\n      </mat-row>\r\n    </mat-table>\r\n</mat-card>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/bussiness/bussiness-branch/bussiness-branch.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/bussiness/bussiness-branch/bussiness-branch.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/bussiness/bussiness-branch/bussiness-branch.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/bussiness/bussiness-branch/bussiness-branch.component.ts ***!
  \*************************************************************************************/
/*! exports provided: BussinessBranchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BussinessBranchComponent", function() { return BussinessBranchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Services_bussiness_bussiness_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Services/bussiness/bussiness.service */ "./src/app/Services/bussiness/bussiness.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BussinessBranchComponent = /** @class */ (function () {
    function BussinessBranchComponent(http, toastr, bussinessServ, route, router) {
        this.http = http;
        this.toastr = toastr;
        this.bussinessServ = bussinessServ;
        this.route = route;
        this.router = router;
        this.RegistrationBranchList = [];
        this.selectedBranchList = [];
        this.loadingIndicator = false;
        this.displayedColumns = ['RegionID', 'Zone', 'WoredaID', 'HouseNo', 'actions'];
        this.displayedColumnsBranch = ['RegionID', 'Zone', 'WoredaID', 'HouseNo', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.dataSourceBranch = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    }
    BussinessBranchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingIndicator = true;
        this.InvestorId = this.route.snapshot.params['InvestorId'];
        this.bussinessServ.getRegistrationBranchByInvestorId(this.InvestorId).subscribe(function (result) {
            _this.RegistrationBranchList = result;
            _this.dataSource.data = _this.RegistrationBranchList;
            // console.log(this.RegistrationBranchList);
        });
        this.loadBussinessBranch();
    };
    BussinessBranchComponent.prototype.loadBussinessBranch = function () {
        var _this = this;
        this.InvestorId = this.route.snapshot.params['InvestorId'];
        this.bussinessServ.getBussinessBranchByInvestorId(this.InvestorId).subscribe(function (result) {
            _this.selectedBranchList = result;
            _this.dataSourceBranch.data = _this.selectedBranchList;
            // console.log(this.selectedBranchList);
            _this.loadingIndicator = false;
        });
    };
    BussinessBranchComponent.prototype.onBussinessBranchControlChanged = function ($event, data) {
        var _this = this;
        // console.log(data);
        var id = $event.source.value;
        this.selectedBussinessBranchList = {
            AddressId: id
        };
        if ($event.checked) {
            this.bussinessServ.saveBussinessBranch(this.selectedBussinessBranchList)
                .subscribe(function (result) {
                _this.loadBussinessBranch();
                _this.toastr.success('Record saved successfully!');
            });
            //this.projectAssociateService.create(this.projectAssForm.value)
            //  .subscribe(result => {
            //   this.projectAssForm.addControl('ProjectAssociateId', new FormControl(''));
            //   this.associateData.push(result);
            //   this.getAssociateByProject();
            //   this.notification('saved');
            //  this.onClear();
            // });
        }
        else if (!$event.checked) {
            //this.projectAssociateService.delete(data.projectAssociate.ProjectAssociateId)
            //  .subscribe(result => {
            //   this.getAssociateByProject();
            //  this.notification('deleted');
            //   this.onClear();
            // });
        }
        // // console.log($event.target);
        // console.log($event);
        //  this.associateIdList.push($event.source.value);
        //// console.log(this.associateIdList);
    };
    BussinessBranchComponent.prototype.DeleteBussinessBranch = function (AddressId) {
        var _this = this;
        this.selectedBussinessBranchList = {
            AddressId: AddressId
        };
        this.bussinessServ.DeleteBussinessBranchByAddresId(this.selectedBussinessBranchList).subscribe(function (result) {
            _this.loadBussinessBranch();
            _this.toastr.success('Record Deleted successfully!');
        });
    };
    BussinessBranchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bussiness-branch',
            template: __webpack_require__(/*! ./bussiness-branch.component.html */ "./src/app/components/bussiness/bussiness-branch/bussiness-branch.component.html"),
            styles: [__webpack_require__(/*! ./bussiness-branch.component.scss */ "./src/app/components/bussiness/bussiness-branch/bussiness-branch.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _Services_bussiness_bussiness_service__WEBPACK_IMPORTED_MODULE_5__["BussinessService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BussinessBranchComponent);
    return BussinessBranchComponent;
}());



/***/ }),

/***/ "./src/app/components/bussiness/bussiness-certificate/bussiness-certificate.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/bussiness/bussiness-certificate/bussiness-certificate.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"margin-2 simple-card\">\r\n  <mat-card-header>\r\n    <mat-card-subtitle class=\"sub-title\"></mat-card-subtitle>\r\n    <button class=\"custom-button\" (click)=\"generateCertification()\">\r\n      Generate\r\n      Certificate\r\n    </button>\r\n    <button class=\"custom-button\" (click)=\"addMessage()\">\r\n      Send Message\r\n    </button>\r\n  </mat-card-header>\r\n</mat-card>\r\n\r\n<mat-card class=\"margin-2 margin-top-20\" *ngIf=\"viewCertificate\">\r\n  <mat-card-header>\r\n    <div fxFlex=\"70\"></div>\r\n    <div fxFlex=\"25\" style=\"float: right;\">\r\n      <button class=\"custom-button \" (click)=\"generatePDF()\">Print</button>\r\n      <!--<button class=\"custom-button \" (click)=\"Print()\">Print</button>-->\r\n    </div>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <mat-card-title>\r\n    </mat-card-title>\r\n    <div id=\"certificate\" class=\"c-container\">\r\n      <header class=\"clearfix\">\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\">\r\n          <div class=\"block\" fxFlex=\"20%\">\r\n            <div id=\"company\" class=\"clearfix logo-image\">\r\n              <img width=\"100\"  src=\"/assets/logo/Trade.gif\">\r\n            </div>\r\n          </div>\r\n          <div class=\"block\" fxFlex=\"60%\">\r\n            <div id=\"logo\" class=\"full-width\">\r\n              <div class=\"certificate-title\">ንግድ ሚኒስቴር</div>\r\n              <div class=\"certificate-titlet\">Ministry of Trade</div>\r\n              <div style=\"margin-top: 5px\" class=\"c-subtitle\">የንግድ ፍቃድ  </div>\r\n              <div class=\"c-subtitle\">Bussines License </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"block\" fxFlex=\"20%\">\r\n            <div class=\"logo-image\" id=\"project\">\r\n              <img width=\"100\" src=\"/assets/images/et.png\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div style=\"float: right;\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\">\r\n          <div id=\"sub-header\" class=\"block\" style=\"font-size: 13px\">\r\n            <table>\r\n              <tr>\r\n                <td class=\"s-head\" width=\"140px\">\r\n                  የመዝገብ ቁጥር/File No.\r\n                </td>\r\n                <td class=\"dta-head\">{{investor?.RegistrationNumber}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"s-head\">\r\n                  የግብር ከፋይ መለያ ቁጥር/TIN\r\n                </td>\r\n                <td class=\"dta-head\">{{bussinessData?.OwnerTIN}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"s-head\">\r\n                  የንግድ ምዝገባ ቁጥር  <br>  Principal Registration No\r\n                </td>\r\n\r\n                <td class=\"dta-head\">MOT/{{investor?.RegistrationNumber }}/10\r\n\r\n                </td>\r\n\r\n              </tr>\r\n              <tr>\r\n                <td class=\"s-head\">\r\n                  የቀድሞው ፈቃድ ቁጥር <br> \t\tPrevious  License  No.\r\n                </td>\r\n                <td class=\"dta-head\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"s-head\">\r\n                  የንግድ ሥራ ፈቃድ ቁጥር <br> Business License  No\r\n                </td>\r\n                <td class=\"dta-head\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"s-head\">\r\n                  የቀድሞው  የምዝገባ ቀን\t <br> Previous Registration Date\r\n                </td>\r\n                <td class=\"dta-head\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"s-head\">\r\n                  ቀድሞ ተሰጠበት ቀን <br>\tPrevious  Date of issuance\r\n                </td>\r\n                <td class=\"dta-head\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"s-head\">\r\n                  የተሰጠበት ቀን <br>\tDate of issuance\r\n                </td>\r\n                <td class=\"dta-head\">{{date | date}}</td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </header>\r\n\r\n      <div class=\"main\" style=\"border-top: 1px solid #c4cbcc;margin-bottom: 10px; padding-top: 5px\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\">\r\n\r\n          <div id=\"amharic\" class=\"block\" fxFlex=\"45.5%\">\r\n            <table id=\"basic\" class=\"full-width\">\r\n              <tbody>\r\n              <tr>\r\n                <td class=\"t-header\" style=\"width: 100px\">1. የግለሰቡ/የድርጅቱ ስም</td>\r\n                <td class=\"data value\" style=\"width: 100px\">\r\n                  {{bussinessData.TradeNameAmh}}\r\n\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"t-header\">2. ዜግነት</td>\r\n                <td class=\"data value\">{{investor.Nationality | countryPipe : 0 }}</td>\r\n              </tr>\r\n              <tr>\r\n                 <td class=\"t-header\">3.የንግድ ስም</td>\r\n                 <td class=\"data value\">{{investorDetailList?.Investor.TradeName}}</td>\r\n               </tr>\r\n              <tr>\r\n                <td class=\"t-header\">4. የሥራ አስክያጅ ስም</td>\r\n                <td class=\"data value\">\r\n                  {{manager[0].FirstName}}\r\n                  {{manager[0].FatherName}}\r\n                  {{manager[0].FatherName}}\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table class=\"full-width\">\r\n              <caption class=\"caption\">5. የንግድ ድርጅቱ አድራሻ</caption>\r\n              <tbody>\r\n              <tr>\r\n                <td class=\"a-header\">ክልል</td>\r\n                <td class=\"data value\">{{investorAddressList?.Region.Description}}</td>\r\n                <td class=\"a-header\">ዞን</td>\r\n                <td class=\"data value\">{{investorAddressList?.Region.Zones[0].DescriptionEnglish }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"a-header\">ከተማ</td>\r\n                <td class=\"data value\">--</td>\r\n                <td class=\"a-header\">ክፍለ ከተማ</td>\r\n                <td class=\"data value\">--</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"a-header\">ቀበሌ/ወረዳ</td>\r\n                <td class=\"data value\">\r\n                  {{investorAddressList?.Region.Zones[0].Woredas[0].Kebeles[0].Description}}\r\n                  /\r\n                  {{investorAddressList?.Region.Zones[0].Woredas[0].Description}}\r\n                </td>\r\n                <td class=\"a-header\">የቤት ቁጥር</td>\r\n                <td class=\"data value\">{{investorAddressList?.HouseNo}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"a-header\">ፖ ሳ ቁ</td>\r\n                <td class=\"data value\">{{investorAddressList?.Pobox}}</td>\r\n                <td class=\"a-header\">ስልክ ቁጥር</td>\r\n                <td class=\"data value\">{{investorAddressList?.TeleNo}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"a-header\">ፋክስ</td>\r\n                <td class=\"data value\">{{investorAddressList?.Fax}}</td>\r\n                <td class=\"a-header\">ኢ-ሜይል</td>\r\n                <td class=\"data value\">{{investorAddressList?.Email}}</td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n\r\n            <table class=\"full-width\">\r\n              <caption class=\"caption\">6. የንግድ ስር ዘርፍ </caption>\r\n              <tbody>\r\n              <!--<tr>\r\n                <td class=\"data value\">\r\n                  {{investmentActivity?.Description}}</td>\r\n              </tr>-->\r\n              <tr>\r\n                <td class=\"data value\">\r\n                  {{MajorDivision?.Description}}\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n            <table class=\"full-width\">\r\n              <caption class=\"caption\">7. የንግድ ሥራ መስክ </caption>\r\n              <tbody>\r\n              <!--<tr>\r\n                <td class=\"data value\">\r\n                  {{investmentActivity?.Description}}</td>\r\n              </tr>-->\r\n              <tr>\r\n                <td >\r\n                  <div *ngFor=\"let vv of MajorDivisionList\">\r\n                    {{vv?.Description}}\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n            <table id=\"investmentCapital\" class=\"full-width\">\r\n              <tbody>\r\n              <tr>\r\n                <td class=\"t-header\">8. የተመዘገበ ካፒታል በኢት ብር</td>\r\n                <td class=\"data value\">{{investor?.PaidCapital}}</td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n\r\n\r\n            <table class=\"full-width\">\r\n              <tr>\r\n                <td style=\"font-size: 14px\"> በግብር ከፋይ መለያ ቁጥር {{investor?.Tin}} የተመዘገበ መሆኑን እናረጋግጣለን ::\r\n                </td>\r\n              </tr>\r\n            </table>\r\n\r\n            <table class=\"full-width\">\r\n              <tr>\r\n                <td> \tይህ የንግድ ፈቃድ ዛሬ {{date | date}} በ አዲስ አበባ\r\n                  ተሰጠ ።\r\n                </td>\r\n              </tr>\r\n            </table>\r\n\r\n            <table class=\"full-width\">\r\n              <tbody>\r\n              <tr>\r\n                <td class=\"t-header\">የሃላፊ ስም/Name of Official</td>\r\n                <td style=\"width: 300px\" class=\"data value\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"t-header\">ፊርማ/Signature</td>\r\n                <td style=\"width: 300px\" class=\"data value\"></td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <div id=\"english\" class=\"block\" fxFlex=\"48.5%\">\r\n            <table id=\"basicEn\" class=\"full-width\">\r\n              <tbody>\r\n              <tr>\r\n                <td class=\"t-header\" style=\"width: 80px\">1. Manager/ Company Name </td>\r\n                <td class=\"data value\"> {{investor.FirstNameEng}}\r\n                  {{investor.FatherNameEng}}\r\n                  {{investor.GrandNameEng}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"t-header\">2. Nationality</td>\r\n                <td class=\"data value\">{{investor.Nationality | countryPipe : 1}}</td>\r\n              </tr>\r\n               <tr>\r\n                 <td class=\"t-header\">3. Trade Name</td>\r\n                 <td class=\"data value\">{{investorDetailList?.Investor.TradeName}}</td>\r\n               </tr>\r\n              <tr>\r\n                <td class=\"t-header\">4. Name of General Manager</td>\r\n                <td class=\"data value\">\r\n                  {{manager[0].FatherNameEng}}\r\n                  {{manager[0].FatherNameEng}}\r\n                  {{manager[0].GrandNameEng}}\r\n                  <!-- {{manager[0].Associate?.FatherNameEng}}\r\n                   {{manager[0].Associate?.FatherNameEng}}\r\n                   {{manager[0].Associate?.GrandNameEng}}-->\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table class=\"full-width\">\r\n              <caption class=\"caption\">5. Business Address</caption>\r\n              <tbody>\r\n              <tr>\r\n                <td class=\"a-header\">Region</td>\r\n                <td class=\"data value\">{{investorAddressList?.Region.DescriptionEnglish}}</td>\r\n                <td class=\"a-header\">Zone</td>\r\n                <td class=\"data value\">{{investorAddressList?.Woreda.Zone.DescriptionEnglish }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"a-header\">City</td>\r\n                <td class=\"data value\">--</td>\r\n                <td class=\"a-header\">Sub City</td>\r\n                <td class=\"data value\">--</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td class=\"a-header\">Kebele/Woreda</td>\r\n                <td class=\"data value\">\r\n                  {{investorAddressList?.Region.Zones[0].Woredas[0].Kebeles[0].DescriptionEnglish}}\r\n                  /\r\n                  {{investorAddressList?.Region.Zones[0].Woredas[0].DescriptionEnglish}}\r\n                </td>\r\n                <td class=\"a-header\">House No.</td>\r\n                <td class=\"data value\">{{investorAddressList?.HouseNo}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"a-header\">P.O.Box</td>\r\n                <td class=\"data value\">{{investorAddressList?.Pobox}}</td>\r\n                <td class=\"a-header\">Tel.No</td>\r\n                <td class=\"data value\">{{investorAddressList?.TeleNo}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"a-header\">Fax</td>\r\n                <td class=\"data value\">{{investorAddressList?.Fax}}</td>\r\n                <td class=\"a-header\">E-mail</td>\r\n                <td class=\"data value\">{{investorAddressList?.Email}}</td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table class=\"full-width\">\r\n              <caption class=\"caption\">6. Sector of Business</caption>\r\n              <tbody>\r\n              <!-- <tr>\r\n                 <td class=\"data value\">{{investmentActivity?.DescriptionEnglish}}</td>\r\n               </tr>-->\r\n              <tr>\r\n                <td class=\"data value\">\r\n                  {{MajorDivision?.EnglishDescription}}\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n            <table class=\"full-width\">\r\n              <caption class=\"caption\">7. Field of Business</caption>\r\n              <tbody>\r\n              <!-- <tr>\r\n                 <td class=\"data value\">{{investmentActivity?.DescriptionEnglish}}</td>\r\n               </tr>-->\r\n              <tr>\r\n                <td >\r\n\r\n                  <div *ngFor=\"let vv of MajorDivisionList\">\r\n                    {{vv?.EnglishDescription}}\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n            <table id=\"investmentCapitalEn\" class=\"full-width\">\r\n              <tbody>\r\n              <tr>\r\n                <td class=\"t-header\"  style=\"width: 80px\">8. Registered Capital in ETB </td>\r\n                <td class=\"data value\">{{investor?.PaidCapital}}</td>\r\n              </tr>\r\n\r\n              <!--<tr>\r\n                <td class=\"t-header\">10. Planned Export in Percent</td>\r\n                <td class=\"data value\">{{exportMarketShare | percent}}</td>\r\n              </tr>-->\r\n              </tbody>\r\n            </table>\r\n\r\n            <table class=\"full-width\">\r\n              <tr>\r\n                <td> This Business License is issued in\t{{date | date}}  <br>\r\n                  on\tAddis Ababa\r\n                </td>\r\n              </tr>\r\n            </table>\r\n\r\n            <table class=\"full-width\">\r\n              <tbody>\r\n              <tr>\r\n                <td class=\"t-header\" style=\"width: 50px\">እስከ\r\n                </td>\r\n                <td class=\"data value\" width=\"90%\">{{ date | date}} ታድሷል</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"t-header\">Valid Until</td>\r\n                <td class=\"data value\">{{date | date}}</td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\" style=\"font-size: 12px;\">\r\n          <div id=\"notices\">\r\n            <div>ማሳሰቢያ/Notice:</div>\r\n            <div>1. ይህ የንግድ ፍቃድ ፍቃድ በአዋጅ ቁጥር 686/2002 መሠረት በየበጀት ዓመቱ ከሐምሌ 1 ቀን እስከ ታህሳስ 30 ቀን ድረስ ያለቅጣት የሚታደስ ሲሆን፤ ከጥር 1 ቀን እስከ ሰኔ 30 ቀን ድረስ በአዋጅ በተቀመጠው የሚታደስ ይሆናል።<br>\r\n              This License Shall be renewed annually in accordance with Regulation no 686/2002 from 1 July to December 30 E.C with out penalty and with penalty from first January to June 30 E.C\r\n            </div>\r\n            <div style=\"margin-top: 10px !important;\">\r\n              2. ይህ የንግድ ፍቃድ የምስክር ወረቀት በዋስትና ወይም በእዳ ሊያዝ አይችልም።<br>\r\n              The holder of this License is forbidden for surety ship or debt.\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/bussiness/bussiness-certificate/bussiness-certificate.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/bussiness/bussiness-certificate/bussiness-certificate.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearfix:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.c-container {\n  background-color: white !important;\n  border: 1px solid #c4cbcc;\n  padding: 5px;\n  color: #000000 !important;\n  font-family: Nyala !important;\n  font-size: 15px !important;\n  font-weight: normal !important;\n  font-style: normal !important; }\n\nheader {\n  margin-bottom: 5px; }\n\n.logo-image {\n  width: 128px !important; }\n\n#logo {\n  text-align: center;\n  margin-bottom: 10px; }\n\n#logo img {\n  width: 90px; }\n\n#project {\n  float: left; }\n\n#Title1 {\n  text-align: Center; }\n\n#project span {\n  color: #5D6975;\n  text-align: right;\n  width: 52px;\n  margin-right: 10px;\n  display: inline-block;\n  font-size: 0.8em; }\n\n#sub-header span {\n  color: #5D6975;\n  text-align: right;\n  width: 52px;\n  margin-right: 10px;\n  display: inline-block;\n  font-size: 0.8em; }\n\n#sub-header {\n  float: right;\n  width: 282px;\n  padding-right: 20px !important; }\n\n#sub-header > table > tbody > tr > td {\n  text-align: left !important; }\n\n#sub-header > table > tbody > tr > td.dta-head {\n  border-bottom: 1px solid black !important; }\n\ntable > tbody > tr > td.a-header {\n  color: #000000 !important;\n  font-family: Nyala !important;\n  font-size: 13px !important;\n  font-weight: normal !important;\n  font-style: normal !important; }\n\n.certificate-title {\n  font-size: 23px;\n  padding: 1px 4px;\n  font-size: 26px;\n  font-weight: bold;\n  font-family: monospace; }\n\n#TIN {\n  font-weight: bold !important; }\n\n#company {\n  float: right;\n  text-align: right; }\n\n#project div,\n#company div {\n  white-space: nowrap; }\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin-bottom: 20px; }\n\ntable tr:nth-child(2n-1) td {\n  background: white; }\n\ntable tr > td.t-header, .caption {\n  text-align: left !important;\n  text-transform: capitalize !important;\n  font-family: Nyala !important;\n  font-size: 15px !important;\n  font-weight: bold !important;\n  font-style: normal !important; }\n\ntable tr > td.data {\n  border-bottom: 1px solid #ccc !important; }\n\ntable th,\ntable td {\n  text-align: center; }\n\ntable .service,\ntable .desc {\n  text-align: left; }\n\ntable td.unit,\ntable td.qty,\ntable td.total {\n  font-size: 1.2em; }\n\ntable td, table th {\n  border: none !important;\n  padding: 2px; }\n\n#notices {\n  padding: 0px 20px !important; }\n\n#investmentCapital .value {\n  width: 250px; }\n\n#investmentCapitalEn .value {\n  width: 200px; }\n\n#basic .value {\n  width: 250px; }\n\n#basicEn .value {\n  width: 150px; }\n\nnobr {\n  white-space: nowrap; }\n\ntable {\n  border: none !important;\n  border-spacing: 0px !important; }\n"

/***/ }),

/***/ "./src/app/components/bussiness/bussiness-certificate/bussiness-certificate.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/bussiness/bussiness-certificate/bussiness-certificate.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: BussinessCertificateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BussinessCertificateComponent", function() { return BussinessCertificateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _Services_project_associate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Services/project-associate.service */ "./src/app/Services/project-associate.service.ts");
/* harmony import */ var _Services_certificate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Services/certificate.service */ "./src/app/Services/certificate.service.ts");
/* harmony import */ var _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Services/project-profile.service */ "./src/app/Services/project-profile.service.ts");
/* harmony import */ var _Services_service_application_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Services/service-application.service */ "./src/app/Services/service-application.service.ts");
/* harmony import */ var _Services_project_cost_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Services/project-cost.service */ "./src/app/Services/project-cost.service.ts");
/* harmony import */ var _setting_category_tabs_InvActivity_invactivity_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../setting/category-tabs/InvActivity/invactivity.service */ "./src/app/components/setting/category-tabs/InvActivity/invactivity.service.ts");
/* harmony import */ var _Services_project_output_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../Services/project-output.service */ "./src/app/Services/project-output.service.ts");
/* harmony import */ var _Services_Address_address_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../Services/Address/address.service */ "./src/app/Services/Address/address.service.ts");
/* harmony import */ var _project_profile_notification_notification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../project-profile/notification/notification.component */ "./src/app/components/project-profile/notification/notification.component.ts");
/* harmony import */ var _model_lookupData__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../model/lookupData */ "./src/app/model/lookupData.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_bussiness_bussiness_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../Services/bussiness/bussiness.service */ "./src/app/Services/bussiness/bussiness.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _Services_associate_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../Services/associate.service */ "./src/app/Services/associate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var BussinessCertificateComponent = /** @class */ (function () {
    function BussinessCertificateComponent(certificateService, projecAssService, errMsg, associateService, projectService, serviceApplication, bussnesServ, dialog, toast, projectCostService, invactivityService, projectOutputService, route, addressService) {
        this.certificateService = certificateService;
        this.projecAssService = projecAssService;
        this.errMsg = errMsg;
        this.associateService = associateService;
        this.projectService = projectService;
        this.serviceApplication = serviceApplication;
        this.bussnesServ = bussnesServ;
        this.dialog = dialog;
        this.toast = toast;
        this.projectCostService = projectCostService;
        this.invactivityService = invactivityService;
        this.projectOutputService = projectOutputService;
        this.route = route;
        this.addressService = addressService;
        this.viewCertificate = false;
        this.lookup = new _model_lookupData__WEBPACK_IMPORTED_MODULE_14__["Lookup"]();
    }
    BussinessCertificateComponent.prototype.ngOnInit = function () {
        this.getDate();
    };
    BussinessCertificateComponent.prototype.getDate = function () {
        var today = new Date();
        this.date = today;
    };
    BussinessCertificateComponent.prototype.addMessage = function () {
        this.dialog.open(_project_profile_notification_notification_component__WEBPACK_IMPORTED_MODULE_13__["NotificationComponent"]);
    };
    BussinessCertificateComponent.prototype.generateCertification = function () {
        this.BussinessId = this.route.snapshot.params['BusinessId'];
        this.getBussinessDetail(this.BussinessId);
        this.viewCertificate = true;
    };
    BussinessCertificateComponent.prototype.generatePDF = function () {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__();
        var width = doc.internal.pageSize.width;
        var height = doc.internal.pageSize.height;
        html2canvas__WEBPACK_IMPORTED_MODULE_1__(document.getElementById('certificate')).then(function (canvas) {
            var img = canvas.toDataURL('image/png');
            doc.addImage(img, 'JPEG', 5, 5, 200, 287);
            doc.autoPrint();
            var filename = 'certificate.pdf';
            doc.save(filename);
            doc.output('dataurlnewwindow');
        });
    };
    BussinessCertificateComponent.prototype.Print = function () {
        window.print();
    };
    BussinessCertificateComponent.prototype.getBussinessDetail = function (id) {
        var _this = this;
        this.BussinessId = this.route.snapshot.params['BusinessId'];
        this.InvestorId = this.route.snapshot.params['InvestorId'];
        this.bussnesServ.getBussinessMajorCatagory(this.BussinessId).subscribe(function (result) {
            _this.MajorDivision = result;
        });
        this.bussnesServ.getBussinessCatagory(this.BussinessId).subscribe(function (result) {
            _this.MajorDivisionList = result;
        });
        this.bussnesServ.getBusiness(this.BussinessId).subscribe(function (result) {
            _this.bussinessData = result;
        });
        this.bussnesServ.getRegistrationByInvestorId(this.InvestorId).subscribe(function (result) {
            _this.investor = result;
            _this.getInvestorAddress(_this.InvestorId);
            _this.getManager();
        });
    };
    BussinessCertificateComponent.prototype.getInvestmentLocation = function (parent) {
        var _this = this;
        this.addressService.getAddress(parent)
            .subscribe(function (result) {
            _this.investmentAddressList = result;
        }, function (error) { return _this.errMsg.getError(error); });
    };
    BussinessCertificateComponent.prototype.getProjectCost = function (projectId) {
        var _this = this;
        this.projectCostService.getCostByProjectId(projectId)
            .subscribe(function (result) {
            console.log(result);
            _this.projectCost = result;
            _this.projectCostTotal = result.LandCost + result.BuildingCost + result.MachineryCost + result.TransportCost +
                result.OfficeEquipmentCost + result.OtherCapitalCost + result.InitialWorkingCapitalCost;
        });
    };
    BussinessCertificateComponent.prototype.getExportPercent = function (projectId) {
        var _this = this;
        this.projectOutputService.getPOutPutByProject(projectId)
            .subscribe(function (result) {
            console.log(result);
            if (result == null) {
                _this.exportMarketShare = 0.00;
            }
            else {
                _this.exportMarketShare = result[0].ExportMarketShare;
            }
        });
    };
    BussinessCertificateComponent.prototype.getManager = function () {
        var _this = this;
        this.InvestorId = this.route.snapshot.params['InvestorId'];
        this.associateService.getAssociateByInvestorId(this.InvestorId)
            .subscribe(function (result) {
            _this.manager = result;
        });
    };
    BussinessCertificateComponent.prototype.getInvestorAddress = function (InvestorId) {
        var _this = this;
        this.addressService.getAddress(InvestorId)
            .subscribe(function (result) {
            _this.investorAddressList = result;
            console.log(result);
        }, function (error) { return _this.errMsg.getError(error); });
    };
    BussinessCertificateComponent.prototype.getInvactivity = function (id) {
        var _this = this;
        this.invactivityService.getInvActivity(id)
            .subscribe(function (result) {
            _this.investmentActivity = result;
        });
    };
    BussinessCertificateComponent.prototype.approve = function () {
        var _this = this;
        this.lookup.Code = 44449;
        this.serviceApplication.changeApplicationStatus(this.lookup, this.investorDetailList.ServiceApplicationId)
            .subscribe(function (result) {
            _this.toast.success('Project approved successfully ', 'Success');
        });
    };
    BussinessCertificateComponent.prototype.ngAfterViewChecked = function () {
    };
    BussinessCertificateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bussiness-certificate',
            template: __webpack_require__(/*! ./bussiness-certificate.component.html */ "./src/app/components/bussiness/bussiness-certificate/bussiness-certificate.component.html"),
            styles: [__webpack_require__(/*! ./bussiness-certificate.component.scss */ "./src/app/components/bussiness/bussiness-certificate/bussiness-certificate.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_certificate_service__WEBPACK_IMPORTED_MODULE_6__["CertificateService"],
            _Services_project_associate_service__WEBPACK_IMPORTED_MODULE_5__["ProjectAssociateService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"],
            _Services_associate_service__WEBPACK_IMPORTED_MODULE_18__["AssociateService"],
            _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProjectProfileService"],
            _Services_service_application_service__WEBPACK_IMPORTED_MODULE_8__["ServiceApplicationService"],
            _Services_bussiness_bussiness_service__WEBPACK_IMPORTED_MODULE_16__["BussinessService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrService"],
            _Services_project_cost_service__WEBPACK_IMPORTED_MODULE_9__["ProjectCostService"],
            _setting_category_tabs_InvActivity_invactivity_service__WEBPACK_IMPORTED_MODULE_10__["InvactivityService"],
            _Services_project_output_service__WEBPACK_IMPORTED_MODULE_11__["ProjectOutputService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"],
            _Services_Address_address_service__WEBPACK_IMPORTED_MODULE_12__["AddressService"]])
    ], BussinessCertificateComponent);
    return BussinessCertificateComponent;
}());



/***/ }),

/***/ "./src/app/components/bussiness/bussiness-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/bussiness/bussiness-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: BussinessRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BussinessRoutingModule", function() { return BussinessRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bussiness_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bussiness.component */ "./src/app/components/bussiness/bussiness.component.ts");
/* harmony import */ var _bussiness_tab_bussiness_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bussiness-tab/bussiness-tab.component */ "./src/app/components/bussiness/bussiness-tab/bussiness-tab.component.ts");
/* harmony import */ var _bussiness_branch_bussiness_branch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bussiness-branch/bussiness-branch.component */ "./src/app/components/bussiness/bussiness-branch/bussiness-branch.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _bussiness_component__WEBPACK_IMPORTED_MODULE_2__["BussinessComponent"]
    },
    {
        path: 'bussinesstab',
        component: _bussiness_tab_bussiness_tab_component__WEBPACK_IMPORTED_MODULE_3__["BussinessTabComponent"]
    },
    // {
    //   path: 'searchregistration',
    //   component: RegistrationListComponent
    // },
    {
        path: 'bussinessbranch',
        component: _bussiness_branch_bussiness_branch_component__WEBPACK_IMPORTED_MODULE_4__["BussinessBranchComponent"]
    }
];
var BussinessRoutingModule = /** @class */ (function () {
    function BussinessRoutingModule() {
    }
    BussinessRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BussinessRoutingModule);
    return BussinessRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/bussiness/bussiness-tab/bussiness-tab.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/bussiness/bussiness-tab/bussiness-tab.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group style=\"width: 900px;margin-top: 20px;margin-left: 50px\">\r\n  <mat-tab label=\"Bussiness info\">\r\n    <ng-template matTabContent=\"\">\r\n      <div>\r\n        <app-bussiness></app-bussiness>\r\n      </div>\r\n    </ng-template>\r\n    <div>\r\n    </div>\r\n  </mat-tab>\r\n\r\n  <mat-tab label=\"Bussiness Address\">\r\n    <ng-template matTabContent=\"\">\r\n      <div>\r\n      </div>\r\n    </ng-template>\r\n    <div>\r\n    </div>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n"

/***/ }),

/***/ "./src/app/components/bussiness/bussiness-tab/bussiness-tab.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/bussiness/bussiness-tab/bussiness-tab.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/bussiness/bussiness-tab/bussiness-tab.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/bussiness/bussiness-tab/bussiness-tab.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BussinessTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BussinessTabComponent", function() { return BussinessTabComponent; });
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

var BussinessTabComponent = /** @class */ (function () {
    function BussinessTabComponent() {
    }
    BussinessTabComponent.prototype.ngOnInit = function () {
    };
    BussinessTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bussiness-tab',
            template: __webpack_require__(/*! ./bussiness-tab.component.html */ "./src/app/components/bussiness/bussiness-tab/bussiness-tab.component.html"),
            styles: [__webpack_require__(/*! ./bussiness-tab.component.scss */ "./src/app/components/bussiness/bussiness-tab/bussiness-tab.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BussinessTabComponent);
    return BussinessTabComponent;
}());



/***/ }),

/***/ "./src/app/components/bussiness/bussiness.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/bussiness/bussiness.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-page-header title=\"Bussiness\" icon=\"Bussiness\"></app-page-header>-->\r\n<button mat-raised-button=\"\" (click)=\"back()\" class=\"next-button\" >\r\n  <!--<mat-icon class=\"button\">arrow_back</mat-icon>-->\r\n  Back\r\n</button>\r\n<!--ddd-->\r\n\r\n<form #form=\"ngForm\" [formGroup]=\"bussinessForm\" novalidate (ngSubmit)=\"onSubmit()\"\r\n      fxLayout=\"column\"\r\n      autocomplete=\"off\">\r\n  <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n  <mat-card class=\"border\" style=\"margin-top: 20px;\">\r\n\r\n\r\n    <mat-card-subtitle class=\"sub-title\">Investor Info\r\n      <mat-divider></mat-divider>\r\n    </mat-card-subtitle>\r\n\r\n  <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n    <mat-form-field fxFlex>\r\n      <mat-label>Investor Name</mat-label>\r\n      <input matInput formControlName=\"cBussinessName\" readonly  required/>\r\n        <mat-error *ngIf=\"BussinessName.hasError('required')\">\r\n          {{'common.validation.Required' | translate}}\r\n        </mat-error>\r\n\r\n        <mat-error *ngIf=\"BussinessName.hasError('minlength')\">\r\n          {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\r\n        </mat-error>\r\n        <mat-error *ngIf=\"!BussinessName.hasError('required') && !BussinessName.hasError('minlength')\r\n                              && BussinessName.hasError('pattern')\">\r\n          {{'common.validation.UseEthiopicOnly' | translate}}\r\n        </mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field fxFlex disabled>\r\n      <mat-label>Investor Name/English/</mat-label>\r\n      <input matInput formControlName=\"cBussinessNameEng\" readonly required/>\r\n      <mat-error *ngIf=\"BussinessNameEng.hasError('required')\">\r\n        {{'common.validation.Required' | translate}}\r\n      </mat-error>\r\n\r\n      <mat-error *ngIf=\"BussinessNameEng.hasError('minlength')\">\r\n        {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\r\n      </mat-error>\r\n      <mat-error *ngIf=\"!BussinessNameEng.hasError('required') && !BussinessNameEng.hasError('minlength')\r\n                              && BussinessNameEng.hasError('pattern')\">\r\n        {{'common.validation.UseLatinOnly' | translate}}\r\n      </mat-error>\r\n    </mat-form-field>\r\n  </div>\r\n  <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n    <mat-form-field fxFlex>\r\n      <mat-label>Business License No. </mat-label>\r\n      <input matInput formControlName=\"cLicenseNum\" required/>\r\n    </mat-form-field>\r\n    <mat-form-field fxFlex>\r\n      <mat-label>Registered Capital </mat-label>\r\n      <input matInput type=\"number\" formControlName=\"cCapital\" readonly required/>\r\n    </mat-form-field>\r\n    <mat-form-field fxFlex>\r\n      <mat-label>Status  </mat-label>\r\n      <mat-select formControlName=\"cStatus\">\r\n        <!--<mat-option value=\"0\">unknown</mat-option>-->\r\n        <mat-option *ngFor=\"let status of bussinessStatus\" [value]=\"status.Id\">\r\n          {{status.Desc}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n  <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n <!-- <mat-form-field fxFlex>\r\n\r\n    </mat-form-field>\r\n    <mat-checkbox formControlName=\"cIsActive\">\r\n      የቀድሞ ፍቃድ ነው ?\r\n    </mat-checkbox>-->\r\n  </div>\r\n  </mat-card>\r\n  <mat-card class=\"border\" style=\"margin-top: 20px;\">\r\n\r\n\r\n    <mat-card-subtitle class=\"sub-title\">Category\r\n      <mat-divider></mat-divider>\r\n    </mat-card-subtitle>\r\n    <div formGroupName=\"Catagory\">\r\n    <div>\r\n      <div class=\"block\" fxFlex=\"\">\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-label>Major Division *: </mat-label>\r\n          <mat-select formControlName=\"MajorDivision\"  (selectionChange)=\"filterDivision($event.value)\">\r\n            <mat-option value=\"0\">unknown</mat-option>\r\n            <mat-option *ngFor=\"let MajorDivision of MajorDivisionList\" [value]=\"MajorDivision.Id\">\r\n              {{MajorDivision.EnglishDescription}}\r\n            </mat-option>\r\n          </mat-select>\r\n\r\n          <!--  <mat-error align=\"start\" *ngIf=\"formErrors.Sector\">{{ formErrors.Sector }}</mat-error>-->\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start\" class=\"content\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"2em\">\r\n        <div class=\"block\" fxFlex=\"\">\r\n          <mat-form-field class=\"full-width\">\r\n            <mat-label>Division * :</mat-label>\r\n            <mat-select formControlName=\"Division\" (selectionChange)=\"filterMajorGroup($event.value)\">\r\n              <mat-option value=\"0\">unknown</mat-option>\r\n              <mat-option *ngFor=\"let Division of filterDivisionList\" [value]=\"Division.Id\">\r\n                {{Division.EnglishDescription}}\r\n              </mat-option>\r\n            </mat-select>\r\n\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start\" class=\"content\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"2em\">\r\n      <div class=\"block\" fxFlex=\"\">\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-label>Major Group *:</mat-label>\r\n          <mat-select formControlName=\"MajorGroup\" (selectionChange)=\"filterGroup($event.value)\">\r\n            <mat-option value=\"0\">unknown</mat-option>\r\n            <mat-option *ngFor=\"let MajorGroupList of filterMajorGroupList \" [value]=\"MajorGroupList.Id\">\r\n              {{MajorGroupList.EnglishDescription}}\r\n            </mat-option>\r\n          </mat-select>\r\n\r\n          <mat-error></mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start\" class=\"content\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"2em\">\r\n      <div class=\"block\" fxFlex>\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-label>Sub Group *:</mat-label>\r\n          <mat-select formControlName=\"Group\" (selectionChange)=\"filterSubGroup($event.value)\">\r\n            <mat-option value=\"0\">unknown</mat-option>\r\n            <mat-option *ngFor=\"let Group of filterGroupList\" [value]=\"Group.Id\">\r\n              {{Group.EnglishDescription}}\r\n            </mat-option>\r\n          </mat-select>\r\n\r\n            <mat-error></mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n    <mat-selection-list aria-colcount=\"2\" formControlName=\"SubGroup\" dense [required]=\"true\">\r\n        <h3 matSubheader>Business License Category *:</h3>\r\n        <mat-list-option [selected]=\"SubGroup?.selected\" class=\"width-400\" [checkboxPosition]=\"left\" *ngFor=\"let SubGroup of filterSubGroupList\" [value]=\"SubGroup.Id\">\r\n          {{SubGroup.EnglishDescription}}\r\n        </mat-list-option>\r\n      </mat-selection-list>\r\n    </div>\r\n      <mat-card-content>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  <div mat-dialog-actions style=\"margin: 15px; text-align: center\">\r\n    <button mat-raised-button type=\"submit\" [disabled]=\"!bussinessForm.valid\" color=\"primary\" style=\"margin-right: 10px\">\r\n     Save\r\n    </button>\r\n    <button mat-raised-button (click)=\"back()\"  color=\"warn\" type=\"button\">\r\n      Cancel\r\n    </button>\r\n  </div>\r\n  </form>\r\n"

/***/ }),

/***/ "./src/app/components/bussiness/bussiness.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/bussiness/bussiness.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*mat-progress-bar{\r\n  position: fixed;\r\n  top:65px;\r\n  z-index: 1200;\r\n\r\n}*/\n"

/***/ }),

/***/ "./src/app/components/bussiness/bussiness.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/bussiness/bussiness.component.ts ***!
  \*************************************************************/
/*! exports provided: BussinessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BussinessComponent", function() { return BussinessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _const_consts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../const/consts */ "./src/app/const/consts.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_Catagory_Catagory_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/Catagory/Catagory.service */ "./src/app/Services/Catagory/Catagory.service.ts");
/* harmony import */ var _Services_bussiness_bussiness_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Services/bussiness/bussiness.service */ "./src/app/Services/bussiness/bussiness.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BussinessComponent = /** @class */ (function () {
    // DivisionList = []
    function BussinessComponent(http, toastr, catagoryservice, bussinessService, router, route, fb) {
        this.http = http;
        this.toastr = toastr;
        this.catagoryservice = catagoryservice;
        this.bussinessService = bussinessService;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.loadingIndicator = false;
        this.MajorDivisionList = [];
        this.DivisionList = [];
        this.filterDivisionList = [];
        this.bussinessStatus = [];
        this.MajorGroupList = [];
        this.filterMajorGroupList = [];
        this.GroupList = [];
        this.filterGroupList = [];
        this.bussinessCatagoryList = [];
        this.SubGroupList = [];
        this.filterSubGroupList = [];
        /* this.bussinessForm = new FormGroup({
           BussinessName: new FormControl(),
           LicenseNum: new FormControl(),
           Status: new FormControl(),
           Capital: new FormControl(),
           MajorDivision: new FormControl(),
           Division: new FormControl(),
           MajorGroup: new FormControl(),
           BGroup: new FormControl(),
           SubGroup: new FormControl()
         });*/
        this.initForm();
    }
    Object.defineProperty(BussinessComponent.prototype, "BussinessName", {
        /* MajorDivision: formModel.Catagory.MajorDivision,
          Division: formModel.Catagory.Division,
          MajorGroup: formModel.Catagory.MajorGroup,
          BGroup: formModel.Catagory.BGroup,
          SubGroup: formModel.Catagory.SubGroup*/
        get: function () {
            return this.bussinessForm.get('cBussinessName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BussinessComponent.prototype, "BussinessNameEng", {
        get: function () {
            return this.bussinessForm.get('cBussinessNameEng');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BussinessComponent.prototype, "LicenseNum", {
        get: function () {
            return this.bussinessForm.get('cLicenseNum');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BussinessComponent.prototype, "Capital", {
        get: function () {
            return this.bussinessForm.get('cCapital');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BussinessComponent.prototype, "Status", {
        get: function () {
            return this.bussinessForm.get('cStatus');
        },
        enumerable: true,
        configurable: true
    });
    BussinessComponent.prototype.initForm = function () {
        this.bussinessForm = this.fb.group({
            cBussinessName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_const_consts__WEBPACK_IMPORTED_MODULE_4__["ET_ALPHABET_WITHSPACE_REGEX"])])]],
            cBussinessNameEng: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_const_consts__WEBPACK_IMPORTED_MODULE_4__["ALPHABET_WITHSPACE_REGEX"])])]],
            cCapital: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)])]],
            cLicenseNum: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)])]],
            cStatus: ['0'],
            'Catagory': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                MajorDivision: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                Division: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                MajorGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                Group: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                SubGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
            })
        });
    };
    BussinessComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initCategory();
        this.loadingIndicator = true;
        var Bussinessta = [];
        this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
        this.InvestorId = this.route.snapshot.params['InvestorId'];
        this.BussinessId = this.route.snapshot.params['BusinessId'];
        _const_consts__WEBPACK_IMPORTED_MODULE_4__["STATUS"].forEach(function (pair) {
            Bussinessta = { 'Id': pair.Id.toString(), 'Desc': pair.DescriptionEnglish };
            _this.bussinessStatus.push(Bussinessta);
            // console.log(pair);
        });
        console.log(this.BussinessId);
        this.bussinessService.getMajorDivisionByInvestorId(this.InvestorId).subscribe(function (result) {
            _this.MajorDivisionList = result;
        });
        if (this.BussinessId <= 0) {
            this.bussinessService.getRegistrationByInvestorId(this.InvestorId).subscribe(function (result) {
                if (result.LegalStatus === '1') {
                    _this.BussinessNeng = result.FirstNameEng + ' ' + result.FatherNameEng + ' ' + result.GrandNameEng;
                    _this.BussinessN = result.FirstName + ' ' + result.FatherName + ' ' + result.GrandName;
                }
                else {
                    _this.BussinessN = result.FirstName;
                    _this.BussinessNeng = result.FirstNameEng;
                }
                _this.bussinessForm.patchValue({
                    cBussinessName: _this.BussinessN,
                    cBussinessNameEng: _this.BussinessNeng,
                    cCapital: result.PaidCapital
                });
                _this.loadingIndicator = false;
            });
        }
        else {
            setTimeout(function () { return _this.bussinessService.getBusiness(_this.BussinessId).subscribe(function (result) {
                _this.bussinessForm.patchValue({
                    cBussinessName: result.TradeNameAmh,
                    cBussinessNameEng: result.TradesName,
                    cCapital: result.Capital,
                    cLicenseNum: result.LicenceNumber
                });
                _this.loadingIndicator = false;
                _this.doBindCategory(_this.BussinessId);
            }); }, 2000);
        }
    };
    BussinessComponent.prototype.initCategory = function () {
        var _this = this;
        this.catagoryservice.getDivision().subscribe(function (result) {
            _this.DivisionList = result;
        });
        this.catagoryservice.getMajorGroup().subscribe(function (result) {
            _this.MajorGroupList = result;
        });
        this.catagoryservice.getGroup().subscribe(function (result) {
            _this.GroupList = result;
        });
        this.catagoryservice.getsubGroup().subscribe(function (result) {
            _this.SubGroupList = result;
        });
    };
    BussinessComponent.prototype.filterDivision = function (id) {
        if (!id) {
            return;
        }
        this.filterDivisionList = this.DivisionList.filter(function (item) {
            return item.Parent === id;
        });
    };
    BussinessComponent.prototype.filterMajorGroup = function (id) {
        if (!id) {
            return;
        }
        this.filterMajorGroupList = this.MajorGroupList.filter(function (item) {
            return item.Parent === id;
        });
    };
    BussinessComponent.prototype.filterGroup = function (id) {
        console.log(id);
        if (!id) {
            return;
        }
        console.log(this.filterGroupList);
        console.log(this.GroupList);
        this.filterGroupList = this.GroupList.filter(function (item) {
            return item.Parent === id;
        });
    };
    BussinessComponent.prototype.filterSubGroup = function (id) {
        if (!id) {
            return;
        }
        this.filterSubGroupList = this.SubGroupList.filter(function (item) {
            return item.Parent === id;
        });
    };
    BussinessComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.bussinessForm.valid) {
            return;
        }
        this.loadingIndicator = true;
        this.bussinessService.saveBussiness(this.getEditedbussiness()).subscribe(function (bussiness) {
            localStorage.setItem('BussinesId', bussiness.ID.toString());
            localStorage.setItem('ServiceApplicationID', bussiness.ServiceApplicationId.toString());
            _this.router.navigate(['business-tab/1236/' + bussiness.InvestorId + '/' + bussiness.ServiceApplicationId + '/' + 0 + '/' + 0 + '/' + bussiness.ID]);
            _this.SaveCatagory();
            _this.saveComplete();
        });
    };
    BussinessComponent.prototype.back = function () {
        this.router.navigate(['/bussiness/searchregistration']);
    };
    BussinessComponent.prototype.saveComplete = function () {
        this.loadingIndicator = false;
        this.toastr.success('Record saved successfully!');
    };
    BussinessComponent.prototype.getEditedbussiness = function () {
        this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
        this.InvestorId = this.route.snapshot.params['InvestorId'];
        var formModel = this.bussinessForm.value;
        return {
            OwnerTIN: this.Tin,
            ServiceApplicationId: this.ServiceApplicationId,
            InvestorId: this.InvestorId,
            MainGuid: '00000000-0000-0000-0000-000000000000',
            TradeNameAmh: formModel.cBussinessName,
            TradesName: formModel.cBussinessNameEng,
            LicenceNumber: formModel.cLicenseNum,
            Capital: formModel.cCapital,
            Status: formModel.cStatus
        };
    };
    BussinessComponent.prototype.getCatagory = function () {
        this.bussinessCatagory = this.bussinessForm.get('Catagory').value;
        this.bussinessCatagory.BusinessId = localStorage.getItem('BussinesId');
        return this.bussinessCatagory;
    };
    BussinessComponent.prototype.SaveCatagory = function () {
        this.bussinessService.saveBussinessLicense(this.getCatagory()).subscribe(function (bussinessLicense) {
        });
    };
    BussinessComponent.prototype.doBindCategory = function (businessId) {
        var _this = this;
        this.bussinessService.getBussinessLicense(businessId).subscribe(function (result) {
            _this.bussinessCatagoryList = result;
            _this.filterDivision(+_this.bussinessCatagoryList[0].MajorDivision);
            _this.filterMajorGroup(+_this.bussinessCatagoryList[0].Division);
            _this.filterGroup(+_this.bussinessCatagoryList[0].MajorGroup);
            _this.filterSubGroup(+_this.bussinessCatagoryList[0].BGroup);
            _this.bussinessForm.get('Catagory').patchValue({
                MajorDivision: _this.bussinessCatagoryList[0].MajorDivision,
                Division: _this.bussinessCatagoryList[0].Division,
                MajorGroup: _this.bussinessCatagoryList[0].MajorGroup,
                Group: _this.bussinessCatagoryList[0].BGroup,
                SubGroup: _this.bussinessCatagoryList[0].SubGroup,
            });
            for (var i = 0; i < _this.filterSubGroupList.length; i++) {
                for (var j = 0; j < _this.bussinessCatagoryList.length; j++) {
                    if (_this.bussinessCatagoryList[j].SubGroup === _this.filterSubGroupList[i].Id) {
                        _this.filterSubGroupList[i].selected = true;
                        // // console.log(this.tariffModel[j]);
                    }
                    else {
                        if (_this.filterSubGroupList[i].selected !== true) {
                            _this.filterSubGroupList[i].selected = false;
                        }
                    }
                }
            }
            console.log(_this.bussinessCatagoryList);
        });
    };
    BussinessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bussiness',
            template: __webpack_require__(/*! ./bussiness.component.html */ "./src/app/components/bussiness/bussiness.component.html"),
            styles: [__webpack_require__(/*! ./bussiness.component.scss */ "./src/app/components/bussiness/bussiness.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _Services_Catagory_Catagory_service__WEBPACK_IMPORTED_MODULE_6__["CatagoryService"],
            _Services_bussiness_bussiness_service__WEBPACK_IMPORTED_MODULE_7__["BussinessService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], BussinessComponent);
    return BussinessComponent;
}());



/***/ }),

/***/ "./src/app/components/bussiness/bussiness.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/bussiness/bussiness.module.ts ***!
  \**********************************************************/
/*! exports provided: BussinessModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BussinessModule", function() { return BussinessModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _bussiness_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bussiness-routing.module */ "./src/app/components/bussiness/bussiness-routing.module.ts");
/* harmony import */ var _bussiness_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bussiness.component */ "./src/app/components/bussiness/bussiness.component.ts");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _bussiness_tab_bussiness_tab_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bussiness-tab/bussiness-tab.component */ "./src/app/components/bussiness/bussiness-tab/bussiness-tab.component.ts");
/* harmony import */ var _registration_list_registration_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration-list/registration-list.component */ "./src/app/components/bussiness/registration-list/registration-list.component.ts");
/* harmony import */ var _bussiness_branch_bussiness_branch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bussiness-branch/bussiness-branch.component */ "./src/app/components/bussiness/bussiness-branch/bussiness-branch.component.ts");
/* harmony import */ var _bussiness_certificate_bussiness_certificate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bussiness-certificate/bussiness-certificate.component */ "./src/app/components/bussiness/bussiness-certificate/bussiness-certificate.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var BussinessModule = /** @class */ (function () {
    function BussinessModule() {
    }
    BussinessModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _bussiness_routing_module__WEBPACK_IMPORTED_MODULE_2__["BussinessRoutingModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_bussiness_component__WEBPACK_IMPORTED_MODULE_3__["BussinessComponent"], _bussiness_tab_bussiness_tab_component__WEBPACK_IMPORTED_MODULE_5__["BussinessTabComponent"],
                _registration_list_registration_list_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationListComponent"],
                _bussiness_branch_bussiness_branch_component__WEBPACK_IMPORTED_MODULE_7__["BussinessBranchComponent"],
                _bussiness_certificate_bussiness_certificate_component__WEBPACK_IMPORTED_MODULE_8__["BussinessCertificateComponent"]],
            exports: [
                _bussiness_component__WEBPACK_IMPORTED_MODULE_3__["BussinessComponent"],
                _bussiness_branch_bussiness_branch_component__WEBPACK_IMPORTED_MODULE_7__["BussinessBranchComponent"],
                _bussiness_certificate_bussiness_certificate_component__WEBPACK_IMPORTED_MODULE_8__["BussinessCertificateComponent"]
            ]
        })
    ], BussinessModule);
    return BussinessModule;
}());



/***/ }),

/***/ "./src/app/components/bussiness/registration-list/registration-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/bussiness/registration-list/registration-list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-page-header title=\"customer-profile\" icon=\"people\"></app-page-header>-->\r\n\r\n<mat-card style=\"margin: 20px;\" *ngIf=\"1==1\" class=\"dashboard-card\">\r\n\r\n  <mat-card-content class=\"dashboard-card-content\">\r\n\r\n    <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n    <mat-table #table [dataSource]=\"dataSource\">\r\n\r\n      <ng-container matColumnDef=\"BusinessNameAmh\">\r\n        <mat-header-cell *matHeaderCellDef>የድርጅት/የግለሰብ ስም </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let selectedRegistrationList\">\r\n          {{selectedRegistrationList?.BusinessNameAmh}}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Tin\">\r\n        <mat-header-cell *matHeaderCellDef>ቲን </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let selectedRegistrationList\">\r\n          {{selectedRegistrationList?.Tin}}\r\n        </mat-cell>\r\n      </ng-container>\r\n     <!-- <ng-container matColumnDef=\"LicenceNumber\">\r\n        <mat-header-cell *matHeaderCellDef>License No</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let investors\">\r\n          {{selectedRegistrationList?.LicenceNumber}}\r\n        </mat-cell>\r\n      </ng-container>-->\r\n\r\n\r\n      <ng-container matColumnDef=\"RegDate\">\r\n        <mat-header-cell *matHeaderCellDef>የምዝገባ ቀን </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let selectedRegistrationList\">\r\n          {{selectedRegistrationList.RegDate | date}}\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n\r\n\r\n      <ng-container matColumnDef=\"actions\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"25%\">\r\n         <!-- <button mat-button color=\"primary\" (click)=\"editInvestor()\">\r\n            <mat-icon class=\"mat-button-icon\">add</mat-icon>\r\n            {{'common.commands.Add' | translate}}\r\n          </button>-->\r\n        </mat-header-cell>\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"28%\">\r\n        </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let selectedRegistrationList\" fxFlex=\"28%\">\r\n          <a class=\"margin-10 a-link pointer\" matTooltip=\"Click her to for detail\"\r\n             (click)=\"select(selectedRegistrationList.Tin)\">\r\n            <mat-icon color=\"primary\"></mat-icon>\r\n            <span>አዲስ ንግድ ፍቃድ</span>\r\n          </a>\r\n\r\n        </mat-cell>\r\n      </ng-container>\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\">\r\n      </mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card class=\"margin-2\" >\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\">\r\n\r\n    <div fxFlex=\"80\">\r\n      <!--<h5> Investor Name : {{invName}}</h5>-->\r\n      <!--<h5 style=\"text-transform: capitalize;\"> {{invName}}</h5>-->\r\n    </div>\r\n    <div fxFlex=\"18\">\r\n        </div>\r\n\r\n  </div>\r\n\r\n\r\n  <mat-divider></mat-divider>\r\n  <mat-card-content>\r\n   <!-- <div fxFlex=\"100%\">\r\n\r\n      <mat-card-actions class=\"margin-10\">\r\n        <button mat-raised-button=\"\" (click)=\"back()\" color=\"primary\">\r\n          <mat-icon class=\"mat-18\">arrow_back</mat-icon>\r\n          Back\r\n        </button>\r\n      </mat-card-actions>\r\n    </div>-->\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/bussiness/registration-list/registration-list.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/bussiness/registration-list/registration-list.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/bussiness/registration-list/registration-list.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/bussiness/registration-list/registration-list.component.ts ***!
  \***************************************************************************************/
/*! exports provided: RegistrationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationListComponent", function() { return RegistrationListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_Catagory_Catagory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Services/Catagory/Catagory.service */ "./src/app/Services/Catagory/Catagory.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegistrationListComponent = /** @class */ (function () {
    function RegistrationListComponent(http, toastr, catagoryservice, router) {
        this.http = http;
        this.toastr = toastr;
        this.catagoryservice = catagoryservice;
        this.router = router;
        this.selectedRegistrationList = [];
        this.loadingIndicator = false;
        this.displayedColumns = ['BusinessNameAmh', 'Tin', 'RegDate', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    RegistrationListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingIndicator = true;
        this.catagoryservice.getRegistration().subscribe(function (result) {
            _this.selectedRegistrationList = result;
            _this.dataSource.data = _this.selectedRegistrationList;
            // // console.log(this.selectedRegistrationList);
            _this.loadingIndicator = false;
        });
    };
    RegistrationListComponent.prototype.select = function (Tin) {
        localStorage.setItem('Tin', Tin);
        this.router.navigate(['/bussiness/bussinesstab']);
    };
    RegistrationListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration-list',
            template: __webpack_require__(/*! ./registration-list.component.html */ "./src/app/components/bussiness/registration-list/registration-list.component.html"),
            styles: [__webpack_require__(/*! ./registration-list.component.scss */ "./src/app/components/bussiness/registration-list/registration-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _Services_Catagory_Catagory_service__WEBPACK_IMPORTED_MODULE_5__["CatagoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegistrationListComponent);
    return RegistrationListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-business-business-tab-business-tab-module.js.map