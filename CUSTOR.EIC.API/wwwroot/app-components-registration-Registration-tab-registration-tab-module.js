(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-registration-Registration-tab-registration-tab-module"],{

/***/ "./src/app/Services/Registration/BudgetYearType.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Services/Registration/BudgetYearType.service.ts ***!
  \*****************************************************************/
/*! exports provided: BudgetYearTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetYearTypeService", function() { return BudgetYearTypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _Base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Base.service */ "./src/app/Services/Base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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






var BudgetYearTypeService = /** @class */ (function (_super) {
    __extends(BudgetYearTypeService, _super);
    function BudgetYearTypeService(http, appConfig, errMsg) {
        var _this = _super.call(this, http, appConfig.urls.url('RegistrationTitle'), errMsg) || this;
        _this.http = http;
        _this.appConfig = appConfig;
        _this.errMsg = errMsg;
        return _this;
    }
    BudgetYearTypeService.prototype.getAllBugetYearTypes = function () {
        return this.httpClient.get(this.appConfig.urls.url('GetAllBudgetYearTypes')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BudgetYearTypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_2__["AppConfiguration"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"]])
    ], BudgetYearTypeService);
    return BudgetYearTypeService;
}(_Base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/Services/Registration/Registration.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/Services/Registration/Registration.service.ts ***!
  \***************************************************************/
/*! exports provided: RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return RegistrationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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





var RegistrationService = /** @class */ (function () {
    function RegistrationService(httpClient, appConfig, config, errMsg) {
        this.httpClient = httpClient;
        this.appConfig = appConfig;
        this.config = config;
        this.errMsg = errMsg;
    }
    /* getRegistrationByTin(Tin: any): Observable<Registration> {
       return this.httpClient.get<Registration>(this.appConfig.urls.url('GetRegistrationByTin') + '/' + Tin).pipe(
         map((data: any) => data as Registration),
         catchError(this.errMsg.parseObservableResponseError)
       );
     }*/
    RegistrationService.prototype.getRegistrationByTin = function (Tin) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('GetRegistrationByTin', Tin)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (registrationInfo) {
            _this.registrationMoedl = registrationInfo;
            return _this.registrationMoedl;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    RegistrationService.prototype.saveRegistration = function (registrationInfo) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('SaveRegistration'), registrationInfo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Reg) {
            // console.log(this.registrationMoedl);
            _this.registrationMoedl = registrationInfo;
            return _this.registrationMoedl;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    RegistrationService.prototype.UpdateRegistration = function (registrationInfo) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('UpdateRegistration'), registrationInfo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Reg) {
            // console.log(this.registrationMoedl);
            _this.registrationMoedl = registrationInfo;
            return _this.registrationMoedl;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    RegistrationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"]])
    ], RegistrationService);
    return RegistrationService;
}());



/***/ }),

/***/ "./src/app/components/registration/Registration-tab/registration-tab-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/registration/Registration-tab/registration-tab-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: RegistrationTabRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationTabRoutingModule", function() { return RegistrationTabRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _registration_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration-tab.component */ "./src/app/components/registration/Registration-tab/registration-tab.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var route = [{
        path: '', component: _registration_tab_component__WEBPACK_IMPORTED_MODULE_2__["RegistratioinTabComponent"]
    }
];
var RegistrationTabRoutingModule = /** @class */ (function () {
    function RegistrationTabRoutingModule() {
    }
    RegistrationTabRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(route)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], RegistrationTabRoutingModule);
    return RegistrationTabRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/registration/Registration-tab/registration-tab.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/registration/Registration-tab/registration-tab.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"0\">\r\n  <div class=\"block\" fxFlex=\"\">\r\n    <app-page-header title=\"CommercialRegistration\" icon=\"\"></app-page-header>\r\n\r\n  </div>\r\n  <div id=\"title1\" class=\"block\" fxFlex=\"50\">\r\n    <span class=\"page-title\">{{title}}</span>\r\n    <span class=\"slideBorder\">/</span>\r\n    <span class=\"page-title\">{{investorName}}</span>\r\n    <span class=\"slideBorder\">/</span>\r\n    <span class=\"page-title\">{{projectName}}</span>\r\n\r\n\r\n  </div>\r\n</div>\r\n<mat-tab-group>\r\n\r\n  <mat-tab label=\"Service Info\">\r\n    <ng-template matTabContent>\r\n      <app-service-info></app-service-info>\r\n    </ng-template>\r\n  </mat-tab>\r\n\r\n  <mat-tab label=\"Registration Information\">\r\n    <ng-template matTabContent>\r\n    <!--<app-registration></app-registration>-->\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab label=\"Address\">\r\n    <ng-template matTabContent>\r\n     <app-registration-address></app-registration-address>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab label=\"Manger\">\r\n    <ng-template matTabContent>\r\n      <app-associate-form></app-associate-form>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab label=\"Document\">\r\n    <ng-template matTabContent>\r\n      <mat-card *ngIf=\"!isInvestor\" class=\"margin-2 simple-card\">\r\n        <mat-card-header>\r\n          <mat-card-subtitle class=\"sub-title\"></mat-card-subtitle>\r\n          <button class=\"margin-10 certificate-title\" mat-raised-button=\"\"\r\n                  (click)=\"addMessage()\" color=\"primary\">\r\n            Add Message\r\n          </button>\r\n        </mat-card-header>\r\n      </mat-card>\r\n      <app-service-prerequisite></app-service-prerequisite>\r\n    </ng-template>\r\n  </mat-tab>\r\n\r\n  <mat-tab *ngIf=\"!isInvestor\" label=\"Payment\">\r\n    <ng-template matTabContent>\r\n      <app-payment></app-payment>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab *ngIf=\"!isInvestor\" label=\"Certificate\">\r\n    <ng-template matTabContent>\r\n      <!--<app-registration-certificate></app-registration-certificate>-->\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab *ngIf=\"isInvestor\" label=\"Confirmation\">\r\n    <ng-template matTabContent>\r\n      <app-service-confirmation></app-service-confirmation>\r\n    </ng-template>\r\n  </mat-tab>\r\n\r\n</mat-tab-group>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/registration/Registration-tab/registration-tab.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/components/registration/Registration-tab/registration-tab.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/registration/Registration-tab/registration-tab.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/registration/Registration-tab/registration-tab.component.ts ***!
  \****************************************************************************************/
/*! exports provided: RegistratioinTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistratioinTabComponent", function() { return RegistratioinTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _project_profile_notification_notification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../project-profile/notification/notification.component */ "./src/app/components/project-profile/notification/notification.component.ts");
/* harmony import */ var _investor_investor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../investor/investor.service */ "./src/app/components/investor/investor.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RegistratioinTabComponent = /** @class */ (function () {
    function RegistratioinTabComponent(accountService, router, dialog, toastr, errMsg, investorService, dataSharing) {
        this.accountService = accountService;
        this.router = router;
        this.dialog = dialog;
        this.toastr = toastr;
        this.errMsg = errMsg;
        this.investorService = investorService;
        this.dataSharing = dataSharing;
        this.selectedIndex = 0;
    }
    RegistratioinTabComponent.prototype.ngOnInit = function () {
        this.getInvsetorInformation();
        this.getUserType();
        this.title = localStorage.getItem('title');
        this.projectName = localStorage.getItem('projectName');
        this.investorName = localStorage.getItem('investorName');
        this.userName = this.accountService.currentUser.FullName;
        this.tin = localStorage.getItem('tin');
        //this.legalStatus = localStorage.getItem('LegalStatus');
    };
    RegistratioinTabComponent.prototype.getInvsetorInformation = function () {
        var _this = this;
        this.investorService.getInvestor(localStorage.getItem('InvestorId'))
            .subscribe(function (result) {
            _this.investor = result;
            // console.log(this.investor.Tin);
            if (_this.investor.Tin.trim() == "") {
                _this.toastr.warning('Please  complete investor profile before request any service!!', 'Info');
                _this.router.navigate(['investor-tab/0/', 0]);
            }
            else {
                localStorage.setItem('Tin', _this.investor.Tin.toString());
                localStorage.setItem('LegalStatus', _this.investor.LegalStatus.toString());
                /* localStorage.setItem('TradeName', this.investor.TradeName.toString());
                 localStorage.setItem('TradeNameEnglish', this.investor.TradeNameEnglish.toString());*/
            }
        }, function (error) { return _this.toastr.error(error); });
    };
    RegistratioinTabComponent.prototype.getUserType = function () {
        this.isInvestor = this.accountService.getUserType();
    };
    RegistratioinTabComponent.prototype.addMessage = function () {
        this.dialog.open(_project_profile_notification_notification_component__WEBPACK_IMPORTED_MODULE_5__["NotificationComponent"]);
    };
    RegistratioinTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration-tab',
            template: __webpack_require__(/*! ./registration-tab.component.html */ "./src/app/components/registration/Registration-tab/registration-tab.component.html"),
            styles: [__webpack_require__(/*! ./registration-tab.component.scss */ "./src/app/components/registration/Registration-tab/registration-tab.component.scss")]
        }),
        __metadata("design:paramtypes", [_custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__["ErrorMessage"],
            _investor_investor_service__WEBPACK_IMPORTED_MODULE_6__["InvestorService"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_4__["DataSharingService"]])
    ], RegistratioinTabComponent);
    return RegistratioinTabComponent;
}());



/***/ }),

/***/ "./src/app/components/registration/Registration-tab/registration-tab.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/registration/Registration-tab/registration-tab.module.ts ***!
  \*************************************************************************************/
/*! exports provided: RegistrationTabModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationTabModule", function() { return RegistrationTabModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _investor_investor_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../investor/investor.module */ "./src/app/components/investor/investor.module.ts");
/* harmony import */ var _investor_associate_associate_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../investor/associate/associate.module */ "./src/app/components/investor/associate/associate.module.ts");
/* harmony import */ var _officer_Task_officer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../officer-Task/officer.module */ "./src/app/components/officer-Task/officer.module.ts");
/* harmony import */ var _project_profile_service_confirmation_ServiceConfirmation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../project-profile/service-confirmation/ServiceConfirmation.module */ "./src/app/components/project-profile/service-confirmation/ServiceConfirmation.module.ts");
/* harmony import */ var _project_profile_service_info_serviceInfo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../project-profile/service-info/serviceInfo.module */ "./src/app/components/project-profile/service-info/serviceInfo.module.ts");
/* harmony import */ var _registration_tab_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./registration-tab.component */ "./src/app/components/registration/Registration-tab/registration-tab.component.ts");
/* harmony import */ var _registration_tab_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./registration-tab-routing.module */ "./src/app/components/registration/Registration-tab/registration-tab-routing.module.ts");
/* harmony import */ var _registration_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../registration.module */ "./src/app/components/registration/registration.module.ts");
/* harmony import */ var _registration_address_registration_address_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../registration-address/registration-address.component */ "./src/app/components/registration/registration-address/registration-address.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var RegistrationTabModule = /** @class */ (function () {
    function RegistrationTabModule() {
    }
    RegistrationTabModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _registration_tab_routing_module__WEBPACK_IMPORTED_MODULE_9__["RegistrationTabRoutingModule"],
                _investor_investor_module__WEBPACK_IMPORTED_MODULE_3__["InvestorModule"],
                _investor_associate_associate_module__WEBPACK_IMPORTED_MODULE_4__["AssociateModule"],
                _officer_Task_officer_module__WEBPACK_IMPORTED_MODULE_5__["OfficerModule"],
                _project_profile_service_confirmation_ServiceConfirmation_module__WEBPACK_IMPORTED_MODULE_6__["ServiceConfirmationModule"],
                _project_profile_service_info_serviceInfo_module__WEBPACK_IMPORTED_MODULE_7__["ServiceInfoModule"],
                _registration_module__WEBPACK_IMPORTED_MODULE_10__["RegistrationModule"]
            ],
            declarations: [
                _registration_tab_component__WEBPACK_IMPORTED_MODULE_8__["RegistratioinTabComponent"],
                _registration_address_registration_address_component__WEBPACK_IMPORTED_MODULE_11__["RegistrationAddressComponent"]
            ],
            exports: [_registration_tab_component__WEBPACK_IMPORTED_MODULE_8__["RegistratioinTabComponent"]]
        })
    ], RegistrationTabModule);
    return RegistrationTabModule;
}());



/***/ }),

/***/ "./src/app/components/registration/registration-address/registration-address.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/registration/registration-address/registration-address.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header title=\"address\" icon=\"address\"></app-page-header>\r\n\r\n<form class=\"margin-2\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"registrationAddressForm\" novalidate>\r\n\r\n  <mat-card class=\"border\">\r\n    <mat-card-content>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"content\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"2em\">\r\n          <mat-form-field  fxFlex  fxFlex=\"15\">\r\n            <mat-label>{{'registrationAddress.editor.Region' | translate}}</mat-label>\r\n            <mat-select formControlName=\"RegionId\"\r\n                        (selectionChange)=\"filterRegion($event.value)\">\r\n              <mat-option value=\"0\">-</mat-option>\r\n              <mat-option *ngFor=\"let region of regions\" [value]=\"region.RegionId\">\r\n                {{region.Description}}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error align=\"start\" *ngIf=\"formErrors.Region\">{{ formErrors.Region }}</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field  fxFlex  fxFlex=\"15\">\r\n            <mat-label>{{'registrationAddress.editor.Town' | translate}}</mat-label>\r\n            <mat-select formControlName=\"TownId\">\r\n              <mat-option value=\"0\">-</mat-option>\r\n              <mat-option *ngFor=\"let town of filteredTowns\" [value]=\"town.TownId\">\r\n                {{town.Description}}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error align=\"start\" *ngIf=\"formErrors.Town\">{{ formErrors.Town }}</mat-error>\r\n          </mat-form-field>\r\n         <mat-form-field  fxFlex  fxFlex=\"15\">\r\n            <mat-label>{{'registrationAddress.editor.Zone' | translate}}</mat-label>\r\n            <mat-select formControlName=\"ZoneId\" (selectionChange)=\"filterZone($event.value)\">\r\n              <mat-option value=\"0\">-</mat-option>\r\n              <mat-option *ngFor=\"let zone of filteredZones\" [value]=\"zone.ZoneId\">\r\n                {{zone.Description}}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error align=\"start\" *ngIf=\"formErrors.Zone\">{{ formErrors.Zone }}</mat-error>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field  fxFlex  fxFlex=\"15\">\r\n            <mat-label>{{'registrationAddress.editor.Woreda' | translate}}</mat-label>\r\n            <mat-select formControlName=\"WoredaId\" (selectionChange)=\"getKebeleByWoredaId($event.value)\">\r\n              <mat-option value=\"0\">-</mat-option>\r\n              <mat-option *ngFor=\"let w of filteredWoredas\" [value]=\"w.WoredaId\">\r\n                {{w.Description}}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error align=\"start\" *ngIf=\"formErrors.Woreda\">{{ formErrors.Woreda }}</mat-error>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlex  fxFlex=\"15\">\r\n            <mat-label>{{'registrationAddress.editor.Kebele' | translate}}</mat-label>\r\n            <mat-select formControlName=\"KebeleId\">\r\n              <mat-option value=\"0\">-</mat-option>\r\n              <mat-option *ngFor=\"let k of filteredKebeles\" [value]=\"k.KebeleId\">\r\n                {{k.Description}}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error align=\"start\" *ngIf=\"formErrors.Kebele\">{{ formErrors.Kebele }}</mat-error>\r\n          </mat-form-field>\r\n        <mat-form-field  fxFlex  fxFlex=\"15\">\r\n          <mat-label>{{'registrationAddress.editor.HouseNo' | translate}}</mat-label>\r\n          <input matInput formControlName=\"HouseNo\" required/>\r\n          <!--<mat-error align=\"start\" *ngIf=\"formErrors.HouseNo\">{{ formErrors.HouseNo }}</mat-error>-->\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"content\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"2em\">\r\n\r\n        <mat-form-field   fxFlex  fxFlex=\"15\">\r\n          <mat-label>{{'registrationAddress.editor.PhoneDirect' | translate}}</mat-label>\r\n          <input matInput formControlName=\"DirectTeleNo\"/>\r\n        <!--  <mat-error align=\"start\" *ngIf=\"formErrors.DirectTeleNo\">{{ formErrors.DirectTeleNo }}</mat-error>-->\r\n        </mat-form-field>\r\n\r\n\r\n        <mat-form-field   fxFlex  fxFlex=\"15\">\r\n          <mat-label>{{'registrationAddress.editor.PhoneMobile' | translate}}</mat-label>\r\n          <input matInput formControlName=\"CellPhoneNumber\"/>\r\n          <!--<mat-error align=\"start\" *ngIf=\"formErrors.CellPhoneNumber\">{{ formErrors.CellPhoneNumber }}</mat-error>-->\r\n        </mat-form-field>\r\n\r\n        <mat-form-field   fxFlex  fxFlex=\"15\">\r\n          <mat-label>{{'registrationAddress.editor.Fax' | translate}}</mat-label>\r\n          <input matInput formControlName=\"Fax\"/>\r\n        </mat-form-field>\r\n\r\n\r\n        <mat-form-field   fxFlex  fxFlex=\"15\">\r\n          <mat-label>{{'registrationAddress.editor.Pobox' | translate}}</mat-label>\r\n          <input matInput formControlName=\"Pobox\"/>\r\n        </mat-form-field>\r\n\r\n          <mat-form-field  fxFlex  fxFlex=\"15\">\r\n            <mat-label>{{'registrationAddress.editor.SpecificAreaName' | translate}}</mat-label>\r\n            <input formControlName=\"SpecificAreaName\" matInput type=\"text\">\r\n            <!--<mat-error align=\"start\" *ngIf=\"formErrors.SpecificAreaName\">{{ formErrors.SpecificAreaName }}</mat-error>-->\r\n          </mat-form-field>\r\n\r\n        <mat-checkbox formControlName=\"IsMainOffice\">{{'registrationAddress.editor.IsMainOffice' | translate}}\r\n        </mat-checkbox>\r\n\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n        <div style=\"text-align: center\" fxFlex=\"67\" fxFlexAlign=\"center\">\r\n          <button\r\n            mat-raised-button=\"\"\r\n            type=\"submit\"\r\n            color=\"primary\">\r\n            <mat-icon class=\"mat-18\">done</mat-icon>\r\n            <span class=\"agree\">{{editMode ? 'update' : 'Save'}}</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n  <!--<mat-card class=\"border\" style=\"border-top: 0px;margin-bottom: 40px; \">\r\n    <mat-card-content>\r\n      <mat-table #table [dataSource]=\"dataSource\">\r\n        <ng-container matColumnDef=\"Region\">\r\n          <mat-header-cell *matHeaderCellDef fxFlex=\"15\">{{'registrationAddress.editor.Region' | translate}}</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let items\" fxFlex=\"15\"> {{items.Region }}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"Zone\">\r\n          <mat-header-cell *matHeaderCellDef fxFlex=\"15\">{{'registrationAddress.editor.Zone' | translate}}</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let items\" fxFlex=\"15\"> {{items.Zone }}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"Woreda\">\r\n          <mat-header-cell *matHeaderCellDef fxFlex=\"15\">{{'registrationAddress.editor.Woreda' | translate}}</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let items\" fxFlex=\"15\"> {{items.Woreda }}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"Kebele\">\r\n          <mat-header-cell *matHeaderCellDef fxFlex=\"15\">{{'registrationAddress.editor.Kebele' | translate}}</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let items\" fxFlex=\"15\"> {{items.Kebele }}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"HouseNo\">\r\n          <mat-header-cell *matHeaderCellDef fxFlex=\"15\">{{'registrationAddress.editor.HouseNo' | translate}}</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let items\" fxFlex=\"15\"> {{items.HouseNo }}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"PhoneMobile\">\r\n          <mat-header-cell *matHeaderCellDef fxFlex=\"15\">{{'registrationAddress.editor.PhoneMobile' | translate}}</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let items\" fxFlex=\"15\"> {{items.PhoneMobile }}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"IsMainOffice\">\r\n          <mat-header-cell *matHeaderCellDef fxFlex=\"14\">{{'registrationAddress.editor.IsMainOffice' | translate}}</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let items\" fxFlex=\"14\"> {{items.IsMainOffice }}\r\n          </mat-cell>\r\n        </ng-container>\r\n      </mat-table>\r\n    </mat-card-content>\r\n  </mat-card>-->\r\n</form>\r\n\r\n<div *ngIf=\"loading\" class=\"loadme-circleBounce\">\r\n  <div class=\"loadme-circleBounce1\"></div>\r\n  <div class=\"loadme-circleBounce2\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/registration/registration-address/registration-address.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/registration/registration-address/registration-address.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/registration/registration-address/registration-address.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/registration/registration-address/registration-address.component.ts ***!
  \************************************************************************************************/
/*! exports provided: RegistrationAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationAddressComponent", function() { return RegistrationAddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _Services_Address_address_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/Address/address.service */ "./src/app/Services/Address/address.service.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _custor_validation_custom_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @custor/validation/custom/form */ "./src/@custor/validation/custom/form.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_user_detail_user_detail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../admin/user-detail/user-detail.service */ "./src/app/admin/user-detail/user-detail.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var RegistrationAddressComponent = /** @class */ (function () {
    function RegistrationAddressComponent(route, router, activityDataServices, accountServices, formBuilder, toastr, addressService, errMsg, formService, snackbar, dataSharing) {
        this.route = route;
        this.router = router;
        this.activityDataServices = activityDataServices;
        this.accountServices = accountServices;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.addressService = addressService;
        this.errMsg = errMsg;
        this.formService = formService;
        this.snackbar = snackbar;
        this.dataSharing = dataSharing;
        this.regions = [];
        this.zones = [];
        this.filteredZones = [];
        this.towns = [];
        this.filteredTowns = [];
        this.woredas = [];
        this.filteredWoredas = [];
        this.kebeles = [];
        this.filteredKebeles = [];
        this.displayedColumns = [
            'Region', 'Zone', 'Town', 'Woreda', 'Kebele', 'HouseNo', 'PhoneMobile', 'IsMainOffice'
        ];
        this.formErrors = {
            Region: '',
            Zone: '',
            Town: '',
            Woreda: '',
            Kebele: '',
            HouseNo: '',
            /*DirectTeleNo: '',
            CellPhoneNumber: '',
            Fax: '',
            Pobox: '',
            IsMainOffice: false,
            SpecificAreaName: '',*/
            Remark: '',
            EnvironmentalImpact: ''
        };
        this.editMode = false;
    }
    RegistrationAddressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fillAddressLookups();
        this.formBuild();
        this.route.params
            .subscribe(function (params) {
            _this.projectId = +params['id'];
            // this.projectId = this.route.snapshot.params['id'];
            if (_this.projectId > 1) {
                // console.log(this.projectId);
                _this.getAddressData(_this.projectId);
                _this.editMode = true;
            }
        });
    };
    RegistrationAddressComponent.prototype.getAddressData = function (parent) {
        var _this = this;
        this.addressService.getAddress(parent)
            .subscribe(function (result) {
            _this.registrationAddressList = result;
            // // console.log(result)
            _this.getKebeleByWoredaId(result.WoredaId);
            _this.addressId = result.AddressId;
            _this.registrationAddressForm.patchValue(result);
        }, function (error) { return _this.errMsg.getError(error); });
    };
    RegistrationAddressComponent.prototype.ngOnDestroy = function () {
        // this.subscription.unsubscribe();
    };
    RegistrationAddressComponent.prototype.fillAddressLookups = function () {
        // To-do bring all in one go caching
        this.loading = true;
        this.getRegions();
        this.getAllTowns();
        this.getAllZones();
        this.getAllWoredas();
        // this.getAllKebeles();
        // this.getAllSite();
    };
    RegistrationAddressComponent.prototype.getRegions = function () {
        var _this = this;
        this.addressService.getRegions()
            .subscribe(function (result) {
            _this.regions = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    RegistrationAddressComponent.prototype.getAllZones = function () {
        var _this = this;
        this.addressService.getAllZones()
            .subscribe(function (result) {
            _this.zones = result;
            _this.filteredZones = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    RegistrationAddressComponent.prototype.getAllTowns = function () {
        var _this = this;
        this.addressService.getAllTowns()
            .subscribe(function (result) {
            _this.towns = result;
            _this.filteredTowns = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    RegistrationAddressComponent.prototype.getAllWoredas = function () {
        var _this = this;
        this.addressService.getAllWoredas()
            .subscribe(function (result) {
            _this.woredas = result;
            _this.filteredWoredas = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    RegistrationAddressComponent.prototype.getKebeleByWoredaId = function (wordaId) {
        var _this = this;
        this.addressService.getKebelesByWoreda(wordaId)
            .subscribe(function (result) {
            _this.kebeles = result;
            // // console.log(result);
            _this.loading = false;
            _this.filteredKebeles = result;
        });
    };
    RegistrationAddressComponent.prototype.filterRegion = function (regionCode) {
        // console.log(regionCode);
        if (!regionCode) {
            return;
        }
        this.filteredZones = null;
        this.filteredTowns = null;
        this.filteredKebeles = null;
        this.filteredWoredas = null;
        this.filteredZones = this.zones.filter(function (item) {
            return item.RegionId === regionCode;
        });
        this.filteredTowns = this.towns.filter(function (item) {
            return item.RegionId === regionCode;
        });
    };
    RegistrationAddressComponent.prototype.filterTown = function (regionCode) {
        if (!regionCode) {
            return;
        }
        this.filteredTowns = null;
        this.filteredTowns = this.towns.filter(function (item) {
            return item.RegionId === regionCode;
        });
    };
    RegistrationAddressComponent.prototype.filterZone = function (zoneCode) {
        if (!zoneCode) {
            return;
        }
        this.filteredKebeles = null;
        this.filteredWoredas = null;
        this.filteredWoredas = this.woredas.filter(function (item) {
            return item.ZoneId === zoneCode;
        });
    };
    RegistrationAddressComponent.prototype.filterWoreda = function (woredaCode) {
        if (!woredaCode) {
            return;
        }
        // console.log(woredaCode);
    };
    // onClear() {
    //   this.addressForm.reset();
    // }
    RegistrationAddressComponent.prototype.onSubmit = function () {
        var _this = this;
        this.registrationAddressForm.patchValue({
            ParentId: localStorage.getItem('Tin')
        });
        if (this.editMode && typeof (this.addressId) !== 'undefined') {
            this.addressService.updateAddress(this.registrationAddressForm.value, this.addressId)
                .subscribe(function (result) {
                _this.notification('address updated');
                // this.onClear();
            });
        }
        else {
            this.addressService.saveAddress(this.registrationAddressForm.value)
                .subscribe(function (result) {
                setTimeout(function () { return _this.dataSharing.projectId.next(_this.projectId); }, 0);
                _this.notification('address saved');
                // this.onClear();
            });
        }
    };
    /* public AddressId?: number;
     public ParentId?: number;
     public AddressType?: number;
     public IsMainOffice?: boolean;
     public SpecificAreaName?: string;
     public RegionId: string;
     public TownId?: string;
     public ZoneId: string;
     public WoredaId: string;
     public KebeleId: string;
     public HouseNo?: string;
     public TeleNo?: string;
     public Pobox?: string;
     public Fax?: string;
     public CellPhoneNo?: string;
     public Email?: string;
     public IsIndustrialPark?: boolean;
     public IndustrialParkId?: number;
     public OtherAddress?: string;
     public Remark?: string;
     public Kebele?: KebeleModel;
     public Woreda?: WoredaModel;
     public Zone?: ZoneModel;
     public Region?: RegionModel;
     */
    RegistrationAddressComponent.prototype.formBuild = function () {
        var _this = this;
        this.registrationAddressForm = this.formBuilder.group({
            ParentId: '',
            RegionId: '',
            ZoneId: '',
            TownId: '',
            WoredaId: '',
            KebeleId: '',
            HouseNo: '',
            DirectTeleNo: '',
            CellPhoneNumber: '',
            Fax: '',
            Pobox: '',
            IsMainOffice: false,
            SpecificAreaName: '',
            Remark: ''
        });
        this.registrationAddressForm.valueChanges.subscribe(function (data) {
            _this.formErrors = _this.formService.validateForm(_this.registrationAddressForm, _this.formErrors, true);
        });
    };
    RegistrationAddressComponent.prototype.notification = function (message) {
        this.loading = false;
        this.toastr.success(" Succesfully " + message + " Data.!", 'Success');
        this.snackbar.open(" Succesfully " + message + " Data.!", 'Close', {
            duration: 3000,
        });
    };
    RegistrationAddressComponent.prototype.ngAfterContentChecked = function () {
    };
    RegistrationAddressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration-address',
            template: __webpack_require__(/*! ./registration-address.component.html */ "./src/app/components/registration/registration-address/registration-address.component.html"),
            styles: [__webpack_require__(/*! ./registration-address.component.scss */ "./src/app/components/registration/registration-address/registration-address.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _admin_user_detail_user_detail_service__WEBPACK_IMPORTED_MODULE_8__["UserActivityDataServices"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _Services_Address_address_service__WEBPACK_IMPORTED_MODULE_2__["AddressService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"],
            _custor_validation_custom_form__WEBPACK_IMPORTED_MODULE_6__["FormService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_10__["DataSharingService"]])
    ], RegistrationAddressComponent);
    return RegistrationAddressComponent;
}());



/***/ }),

/***/ "./src/app/components/registration/registration-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/registration/registration-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: RegistrationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationRoutingModule", function() { return RegistrationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration.component */ "./src/app/components/registration/registration.component.ts");
/* harmony import */ var _registration_certificate_registration_certificate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration-certificate/registration-certificate.component */ "./src/app/components/registration/registration-certificate/registration-certificate.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var route = [
    {
        path: '', component: _registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"], children: [
            { path: '', component: _registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"] },
            { path: 'list', component: _registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"] },
            { path: 'edit/:id', component: _registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"] },
            { path: 'RegistrationCertificate', component: _registration_certificate_registration_certificate_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationCertificateComponent"] }
        ]
    }
];
var RegistrationRoutingModule = /** @class */ (function () {
    function RegistrationRoutingModule() {
    }
    RegistrationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RegistrationRoutingModule);
    return RegistrationRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/registration/registration.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/registration/registration.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header title=\"Registration\" icon=\"person\"></app-page-header>\r\n<div [@fadeInOut] class=\"page-content mat-elevation-z8\">\r\n  <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>\r\n  <form #form=\"ngForm\" [formGroup]=\"registrationForm\" novalidate (ngSubmit)=\"onSubmit()\"\r\n        fxLayout=\"column\"\r\n        autocomplete=\"off\">\r\n\r\n    <div id=\"divRegistrationInfo\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n      <mat-form-field [fxFlex] [fxFlex]=\"32\">\r\n        <mat-label>{{'registration.editor.CompanyNameAmharic' | translate}}</mat-label>\r\n        <input matInput formControlName=\"cCompanyNameAmharic\" required/>\r\n        <mat-error *ngIf=\"companyNameAmharic.hasError('required')\">\r\n          {{'common.validation.Required' | translate}}\r\n        </mat-error>\r\n        <mat-error *ngIf=\"!companyNameAmharic.hasError('required') && companyNameAmharic.hasError('minlength')\">\r\n          Name should be at least 2 characters long\r\n        </mat-error>\r\n        <mat-error *ngIf=\"!companyNameAmharic.hasError('required') && !companyNameAmharic.hasError('minlength')\">\r\n          {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\r\n        </mat-error>\r\n        <mat-error *ngIf=\"!companyNameAmharic.hasError('required') && !companyNameAmharic.hasError('minlength')\r\n                            && companyNameAmharic.hasError('pattern')\">\r\n          {{'common.validation.UseEthiopicOnly' | translate}}\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field [fxFlex] [fxFlex]=\"32\">\r\n        <mat-label>{{'registration.editor.CompanyNameEnglish' | translate}}</mat-label>\r\n        <input matInput formControlName=\"cCompanyNameEnglish\" required/>\r\n        <mat-error *ngIf=\"companyNameEnglish.hasError('required')\">\r\n          {{'common.validation.Required' | translate}}\r\n        </mat-error>\r\n        <mat-error *ngIf=\"!companyNameEnglish.hasError('required') && companyNameEnglish.hasError('minlength')\">\r\n          {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\r\n        </mat-error>\r\n        <mat-error *ngIf=\"!companyNameEnglish.hasError('required') && !companyNameEnglish.hasError('minlength')\r\n                         && companyNameEnglish.hasError('pattern')\">\r\n          {{'common.validation.UseLatinOnly' | translate}}\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field [fxFlex] [fxFlex]=\"32\">\r\n        <mat-label>{{'registration.editor.CompanyNameRegional' | translate}}</mat-label>\r\n        <input matInput formControlName=\"cCompanyNameRegional\" required/>\r\n        <mat-error *ngIf=\"companyNameRegional.hasError('required')\">\r\n          {{'common.validation.Required' | translate}}\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\">\r\n      <mat-form-field fxFlex=\"14\">\r\n        <mat-label name=\"lblTIN\">{{'users.editor.TIN' | translate}}</mat-label>\r\n        <input matInput formControlName=\"cTin\" NaturalNumberOnlyDir/>\r\n        <mat-error *ngIf=\"tin.hasError('maxlength')\">\r\n          {{'common.validation.MinLengthChar' | translate: {'min':'10'} }}\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field fxFlex fxFlex=\"14\">\r\n        <mat-label name=\"lblRegNumber\">{{'registration.editor.RegNumber' | translate}}</mat-label>\r\n        <input matInput formControlName=\"cRegNumber\"/>\r\n        <mat-error *ngIf=\"regNumber.hasError('minlength')\">\r\n          {{'common.validation.MinLengthChar' | translate: {'min':'10'} }}\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field fxFlex fxFlex=\"15\">\r\n        <mat-label name=\"lblRegDate\">{{'registration.editor.RegDate' | translate}}</mat-label>\r\n        <input [matDatepicker]=\"cRegDate\" matInput formControlName=\"cRegDate\"/>\r\n        <mat-datepicker-toggle matSuffix [for]=\"cRegDate\"></mat-datepicker-toggle>\r\n        <mat-datepicker #cRegDate></mat-datepicker>\r\n      </mat-form-field>\r\n      <mat-form-field fxFlex fxFlex=\"14\">\r\n        <mat-label name=\"lblPaidCapital\">{{'registration.editor.PaidCapital' | translate}}</mat-label>\r\n        <input matInput formControlName=\"cPaidCapital\"/>\r\n      </mat-form-field>\r\n      <mat-form-field fxFlex fxFlex=\"15\">\r\n        <mat-label name=\"lblSighnedCapital\">{{'registration.editor.SighnedCapital' | translate}}</mat-label>\r\n        <input matInput formControlName=\"cSighnedCapital\" />\r\n      </mat-form-field>\r\n      <mat-form-field fxFlex fxFlex=\"14\">\r\n        <mat-label name=\"lblSingleShareValue\">{{'registration.editor.SingleShareValue' | translate}}</mat-label>\r\n        <input matInput formControlName=\"cSingleShareValue\"/>\r\n      </mat-form-field>\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n\r\n      <mat-checkbox formControlName=\"cWithForighners\">{{'registration.editor.IsWithForighner' | translate}}\r\n      </mat-checkbox>\r\n\r\n      <mat-form-field fxFlex  fxFlex=\"16\">\r\n        <mat-label name=\"lblEthiopiansShare\">{{'registration.editor.EthiopiansShare' | translate}}</mat-label>\r\n        <input matInput formControlName=\"cEthiopiansShare\" />\r\n      </mat-form-field>\r\n      <mat-form-field fxFlex  fxFlex=\"32\">\r\n        <mat-label>{{'registration.editor.BudgetCatagory' | translate}}</mat-label>\r\n        <mat-select formControlName=\"cBudgetYearCatagory\">\r\n          <mat-option *ngFor=\"let budgetYearType of budgetYearTypes\" [value]=\"budgetYearType.Code\">\r\n            {{budgetYearType.Description}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <mat-form-field fxFlex>\r\n        <mat-label>{{'registration.editor.RegistrationStatus' | translate}}</mat-label>\r\n        <mat-select formControlName=\"cRegistrationStatus\">\r\n          <mat-option *ngFor=\"let status of regStatus\" [value]=\"status.Id\">\r\n            {{status.Desc}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div id=\"divCommercialRepresentative\" *ngIf=\"isCommercialRepresentative\">\r\n      <div id=\"divRepresentativeName\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n        <mat-form-field [fxFlex]=\"32\">\r\n          <mat-label>{{'registration.editor.RepresentativeNameAmharic' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cRepresentativeNameAmharic\" required/>\r\n          <mat-error *ngIf=\"representativeNameAmharic.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n          <mat-error\r\n            *ngIf=\"!representativeNameAmharic.hasError('required') && representativeNameAmharic.hasError('minlength')\">\r\n            {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"!representativeNameAmharic.hasError('required') && !representativeNameAmharic.hasError('minlength')\r\n                         && representativeNameAmharic.hasError('pattern')\">\r\n            {{'common.validation.UseEthiopicOnly' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field [fxFlex]=\"32\">\r\n          <mat-label>{{'registration.editor.RepresentativeNameEnglish' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cRepresentativeNameEnglish\" required/>\r\n          <mat-error *ngIf=\"representativeNameEnglish.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n          <mat-error\r\n            *ngIf=\"!representativeNameEnglish.hasError('required') && representativeNameEnglish.hasError('minlength')\">\r\n            Name should be at least 2 characters long\r\n          </mat-error>\r\n          <mat-error\r\n            *ngIf=\"!representativeNameEnglish.hasError('required') && !representativeNameEnglish.hasError('minlength')\">\r\n            {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"!representativeNameEnglish.hasError('required') && !representativeNameEnglish.hasError('minlength')\r\n                            && representativeNameEnglish.hasError('pattern')\">\r\n            {{'common.validation.UseLatinOnly' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field [fxFlex]=\"32\">\r\n          <mat-label>{{'registration.editor.RepresentativeNameRegional' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cRepresentativeNameRegional\" required/>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div id=\"divRepresentativeManagerName\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n\r\n        <mat-form-field [fxFlex]=\"32\">\r\n          <mat-label>{{'registration.editor.RepresentativeManagerNameAmharic' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cRepresentativeManagerNameAmharic\" required/>\r\n          <mat-error *ngIf=\"representativeManagerNameAmharic.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n          <mat-error\r\n            *ngIf=\"!representativeManagerNameAmharic.hasError('required') && representativeManagerNameAmharic.hasError('minlength')\">\r\n            {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"!representativeManagerNameAmharic.hasError('required') && !representativeManagerNameAmharic.hasError('minlength')\r\n                         && representativeManagerNameAmharic.hasError('pattern')\">\r\n            {{'common.validation.UseEthiopicOnly' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field [fxFlex]=\"32\">\r\n          <mat-label>{{'registration.editor.RepresentativeManagerNameEnglish' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cRepresentativeManagerNameEnglish\" required/>\r\n          <mat-error *ngIf=\"representativeManagerNameEnglish.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n          <mat-error\r\n            *ngIf=\"!representativeManagerNameEnglish.hasError('required') && representativeManagerNameEnglish.hasError('minlength')\">\r\n            Name should be at least 2 characters long\r\n          </mat-error>\r\n          <mat-error\r\n            *ngIf=\"!representativeManagerNameEnglish.hasError('required') && !representativeManagerNameEnglish.hasError('minlength')\">\r\n            {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"!representativeManagerNameEnglish.hasError('required') && !representativeManagerNameEnglish.hasError('minlength')\r\n                            && representativeNameEnglish.hasError('pattern')\">\r\n            {{'common.validation.UseLatinOnly' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field [fxFlex]=\"32\">\r\n          <mat-label>{{'registration.editor.RepresentativeManagerNameRegional' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cRepresentativeManagerNameRegional\" required/>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n      <div id=\"divMainOfficeCountry\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n\r\n        <mat-form-field [fxFlex]=\"32\">\r\n          <mat-label>{{'registration.editor.MainOfficeCountryNameAmharic' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cMainOfficeCountryNameAmharic\" required/>\r\n          <mat-error *ngIf=\"mainOfficeCountryNameAmharic.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n          <mat-error\r\n            *ngIf=\"!mainOfficeCountryNameAmharic.hasError('required') && mainOfficeCountryNameAmharic.hasError('minlength')\">\r\n            {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"!mainOfficeCountryNameAmharic.hasError('required') && !mainOfficeCountryNameAmharic.hasError('minlength')\r\n                         && mainOfficeCountryNameAmharic.hasError('pattern')\">\r\n            {{'common.validation.UseEthiopicOnly' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field [fxFlex]=\"32\">\r\n          <mat-label>{{'registration.editor.MainOfficeCountryNameEnglish' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cMainOfficeCountryNameEnglish\" required/>\r\n          <mat-error *ngIf=\"mainOfficeCountryNameEnglish.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n          <mat-error\r\n            *ngIf=\"!mainOfficeCountryNameEnglish.hasError('required') && mainOfficeCountryNameEnglish.hasError('minlength')\">\r\n            Name should be at least 2 characters long\r\n          </mat-error>\r\n          <mat-error\r\n            *ngIf=\"!mainOfficeCountryNameEnglish.hasError('required') && !mainOfficeCountryNameEnglish.hasError('minlength')\">\r\n            {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"!mainOfficeCountryNameEnglish.hasError('required') && !mainOfficeCountryNameEnglish.hasError('minlength')\r\n                            && representativeNameEnglish.hasError('pattern')\">\r\n            {{'common.validation.UseLatinOnly' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field [fxFlex]=\"32\">\r\n          <mat-label>{{'registration.editor.MainOfficeCountryNameRegional' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cMainOfficeCountryNameRegional\" required/>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n      <div id=\"divMainOfficeAddress\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n        <mat-form-field [fxFlex]=\"32\">\r\n          <mat-label>{{'registration.editor.MainOfficeAddressAmharic' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cMainOfficeAddressAmharic\" required/>\r\n          <mat-error *ngIf=\"mainOfficeAddressAmharic.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n          <mat-error\r\n            *ngIf=\"!mainOfficeAddressAmharic.hasError('required') && mainOfficeAddressAmharic.hasError('minlength')\">\r\n            {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"!mainOfficeAddressAmharic.hasError('required') && !mainOfficeAddressAmharic.hasError('minlength')\r\n                         && mainOfficeAddressAmharic.hasError('pattern')\">\r\n            {{'common.validation.UseEthiopicOnly' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field [fxFlex]=\"32\">\r\n          <mat-label>{{'registration.editor.MainOfficeAddressEnglish' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cMainOfficeAddressEnglish\" required/>\r\n          <mat-error *ngIf=\"mainOfficeAddressEnglish.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n          <mat-error\r\n            *ngIf=\"!mainOfficeAddressEnglish.hasError('required') && mainOfficeAddressEnglish.hasError('minlength')\">\r\n            Name should be at least 2 characters long\r\n          </mat-error>\r\n          <mat-error\r\n            *ngIf=\"!mainOfficeAddressEnglish.hasError('required') && !mainOfficeAddressEnglish.hasError('minlength')\">\r\n            {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"!mainOfficeAddressEnglish.hasError('required') && !mainOfficeAddressEnglish.hasError('minlength')\r\n                            && mainOfficeAddressEnglish.hasError('pattern')\">\r\n            {{'common.validation.UseLatinOnly' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field [fxFlex]=\"32\">\r\n          <mat-label>{{'registration.editor.MainOfficeAddressRegional' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cMainOfficeAddressRegional\" required/>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n\r\n        <div  fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\">\r\n          <mat-form-field fxFlex fxFlex=\"100\">\r\n            <mat-select placeholder=\"ዘርፍ *\" formControlName=\"cMajorDivision\" multiple>\r\n              <mat-option *ngFor=\"let MajorDivision of majorDivisions\" [value]=\"MajorDivision.Id\">{{MajorDivision.Description}}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n    <!--<mat-card class=\"border\" style=\"margin-top: 20px;\">-->\r\n      <!--<mat-card-subtitle class=\"sub-title\">{{RegistrationName.Value}} የተሰማራባቸው መስኮች-->\r\n        <!--<mat-divider></mat-divider>-->\r\n      <!--</mat-card-subtitle>-->\r\n\r\n      <!--<div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">-->\r\n\r\n\r\n          <!--<div formGroupName=\"Catagory\">-->\r\n            <!--<mat-selection-list aria-colcount=\"2\" formControlName=\"cMajorDivision\" dense [required]=\"true\">-->\r\n              <!--<h3 matSubheader>ዘርፍ *:</h3>-->\r\n              <!--<mat-list-option aria-colcount=\"2\" [checkboxPosition]=\"left\" *ngFor=\"let MajorDivision of majorDivisions\"-->\r\n                               <!--[value]=\"MajorDivision.Id\">-->\r\n                <!--{{MajorDivision.Description}}-->\r\n              <!--</mat-list-option>-->\r\n            <!--</mat-selection-list>-->\r\n\r\n           <!-- <mat-form-field>\r\n              <mat-select placeholder=\"ዘርፍ *\" [formControl]=\"majorDivisions\"multiple>\r\n                <mat-select-trigger>\r\n                  {{majorDivisions.value ? majorDivisions.value[0] : ''}}\r\n                  <span *ngIf=\"majorDivisions.value?.length > 1\" class=\"additional-selection\">\r\n                      (+{{majorDivisions.value.length - 1}} {{majorDivisions.value?.length === 2 ? 'other' : 'others'}})\r\n                  </span>\r\n                </mat-select-trigger>\r\n                <mat-option *ngFor=\"let MajorDivision of majorDivisions\" [value]=\"MajorDivision.Id\">{{MajorDivision.Description}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>-->\r\n      <!--</div>-->\r\n      <!--<mat-card-content>-->\r\n      <!--</mat-card-content>-->\r\n    <!--</mat-card>-->\r\n\r\n\r\n    <div mat-dialog-actions style=\"margin: 15px; text-align: center\">\r\n      <button mat-raised-button type=\"submit\" color=\"primary\" style=\"margin-right: 10px\">\r\n        {{'common.commands.Save' | translate}}\r\n      </button>\r\n      <button mat-raised-button (click)=\"onBack()\" color=\"warn\" type=\"button\">\r\n        {{'common.commands.Cancel' | translate}}\r\n      </button>\r\n    </div>\r\n\r\n    <!--<pre>\r\n      {{registrationForm.value | json}}\r\n    </pre>-->\r\n  </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/registration/registration.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/registration/registration.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".additional-selection {\n  opacity: 0.75;\n  font-size: 0.75em; }\n"

/***/ }),

/***/ "./src/app/components/registration/registration.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/registration/registration.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _custor_services_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @custor/services/animations */ "./src/@custor/services/animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _const_consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../const/consts */ "./src/app/const/consts.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _Services_Registration_BudgetYearType_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/Registration/BudgetYearType.service */ "./src/app/Services/Registration/BudgetYearType.service.ts");
/* harmony import */ var _model_lookupData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/lookupData */ "./src/app/model/lookupData.ts");
/* harmony import */ var _Services_Catagory_Catagory_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Services/Catagory/Catagory.service */ "./src/app/Services/Catagory/Catagory.service.ts");
/* harmony import */ var _Services_Registration_Registration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Services/Registration/Registration.service */ "./src/app/Services/Registration/Registration.service.ts");
/* harmony import */ var _Services_Registration_RegistrationCatagory_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Services/Registration/RegistrationCatagory.service */ "./src/app/Services/Registration/RegistrationCatagory.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(budgetYearTypeService, registrationCatagoryService, catagoryService, toastr, registrationService, fb) {
        this.budgetYearTypeService = budgetYearTypeService;
        this.registrationCatagoryService = registrationCatagoryService;
        this.catagoryService = catagoryService;
        this.toastr = toastr;
        this.registrationService = registrationService;
        this.fb = fb;
        this.budgetYearTypes = [];
        this.regStatus = [];
        this.majorDivisions = [];
        this.registrationCatagoryList = [];
        this.isNewRegistration = true;
        this.initForm();
        this.initStaticData('am');
    }
    RegistrationComponent.prototype.initForm = function () {
        this.registrationForm = this.fb.group({
            cCompanyNameRegional: [''],
            cCompanyNameEnglish: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_const_consts__WEBPACK_IMPORTED_MODULE_3__["ALPHABET_WITHSPACE_REGEX"])])]],
            cCompanyNameAmharic: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_const_consts__WEBPACK_IMPORTED_MODULE_3__["ET_ALPHABET_WITHSPACE_REGEX"])])]],
            cTin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),])]],
            cRegNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),])]],
            cRegDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),])]],
            cPaidCapital: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),])]],
            cSighnedCapital: [''],
            cSingleShareValue: [''],
            cWithForighners: false,
            cEthiopiansShare: [''],
            cBudgetYearCatagory: [''],
            cRegistrationStatus: [''],
            cRepresentativeNameAmharic: [''],
            cRepresentativeNameEnglish: [''],
            cRepresentativeNameRegional: [''],
            cRepresentativeManagerNameAmharic: [''],
            cRepresentativeManagerNameEnglish: [''],
            cRepresentativeManagerNameRegional: [''],
            cMainOfficeAddressAmharic: [''],
            cMainOfficeAddressEnglish: [''],
            cMainOfficeAddressRegional: [''],
            cMainOfficeCountryNameAmharic: [''],
            cMainOfficeCountryNameEnglish: [''],
            cMainOfficeCountryNameRegional: [''],
            cMajorDivision: []
        });
    };
    RegistrationComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('LegalStatus') != "999")
            this.isCommercialRepresentative = false;
        this.getMajorDivisions();
        if (localStorage.getItem('LegalStatus') == null || localStorage.getItem('LegalStatus') == "4") {
            this.ClearCommercialRepresentativeValidators();
        }
        if (localStorage.getItem('LegalStatus') == "2" || localStorage.getItem('LegalStatus') == "3") {
        }
        else {
            //Do Something
        }
    };
    RegistrationComponent.prototype.ngAfterViewInit = function () {
        this.fillAllLookups();
    };
    RegistrationComponent.prototype.fillAllLookups = function () {
        this.getBudgetYearTypes();
        //this.getAllNation();
    };
    RegistrationComponent.prototype.getBudgetYearTypes = function () {
        var _this = this;
        this.budgetYearTypeService.getAllBugetYearTypes()
            .subscribe(function (result) {
            _this.budgetYearTypes = result;
        }, function (error) { return _this.toastr.error(error); });
    };
    RegistrationComponent.prototype.getMajorDivisions = function () {
        var _this = this;
        this.catagoryService.getMajorDivision()
            .subscribe(function (result) {
            _this.majorDivisions = result;
        }, function (error) { return _this.toastr.error(error); });
    };
    RegistrationComponent.prototype.initStaticData = function (currentLang) {
        var _this = this;
        var registration_Status = new _model_lookupData__WEBPACK_IMPORTED_MODULE_6__["RegistrationStatus"]();
        _const_consts__WEBPACK_IMPORTED_MODULE_3__["STATUS"].forEach(function (pair) {
            registration_Status = { 'Id': pair.Id.toString(), 'Desc': (currentLang === 'am' ? pair.Description : pair.DescriptionEnglish) };
            _this.regStatus.push(registration_Status);
        });
    };
    RegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.registrationForm.valid) {
            return;
        }
        if (this.isNewRegistration) {
            this.loadingIndicator = true;
            return this.registrationService.saveRegistration(this.getEditedRegistration())
                .subscribe(function (registrationModel) {
                _this.saveCompleted(registrationModel);
                localStorage.setItem('Tin', registrationModel.Tin.toString());
            }, function (error) { return _this.toastr.error(error); });
        }
        else {
            this.loadingIndicator = true;
            return this.registrationService.UpdateRegistration(this.getEditedRegistration())
                .subscribe(function (registrationModel) {
                _this.saveCompleted(registrationModel);
                localStorage.setItem('Tin', registrationModel.Tin.toString());
            }, function (error) { return _this.toastr.error(error); });
        }
    };
    RegistrationComponent.prototype.getRegistrationDetail = function () {
        var _this = this;
        var OwnerTin = localStorage.getItem('Tin');
        if (OwnerTin === null)
            return;
        this.registrationService.getRegistrationByTin(OwnerTin).subscribe(function (registration) {
            _this.isNewRegistration = true;
            _this.registrationForm.patchValue(registration);
            _this.getRegistrationCatagoryData(registration.Tin);
        }, function (error) { return _this.toastr.error(error); });
    };
    RegistrationComponent.prototype.getRegistrationCatagoryData = function (Tin) {
        var _this = this;
        this.registrationCatagoryService.getRegistrationCatagoriesByTin(Tin)
            .subscribe(function (result) {
            _this.registrationCatagoryList = result;
            _this.registrationForm.get('cMajorDivision').patchValue(result);
        }, function (error) { return _this.toastr.error(error); });
    };
    RegistrationComponent.prototype.saveCompleted = function (registrationModel) {
        if (registrationModel) {
            this.registrationModel = registrationModel;
        }
        this.loadingIndicator = false;
        this.toastr.success('Record saved successfully!');
    };
    RegistrationComponent.prototype.getEditedRegistration = function () {
        var formModel = this.registrationForm.value;
        return {
            ID: this.isNewRegistration ? 0 : this.registrationModel.ID,
            Tin: formModel.cTin,
            MainGuid: '65197b05-8787-4859-b6dd-000014e63a72',
            ParentGuid: '93c39239-5c2f-4347-95d1-0000527f5339',
            LegalCondtion: 1,
            BusinessNameAmh: formModel.cCompanyNameAmharic,
            BusinessName: formModel.cCompanyNameEnglish,
            BusinessNameRegional: formModel.cCompanyNameRegional,
            RegNo: formModel.cRegNumber,
            RegDate: formModel.cRegDate,
            PaidUpCapital: formModel.cPaidCapital,
            SignedCapital: formModel.cSighnedCapital,
            SingleShareAmount: formModel.cSingleShareValue,
            IsSharedWithForeigner: formModel.cWithForighners,
            LocalPersonCapital: formModel.cEthiopiansShare,
            BudgetYearCode: formModel.cBudgetYearCatagory,
            Status: formModel.cRegistrationStatus,
            GrantorName: formModel.cRepresentativeNameAmharic,
            GrantorNameEng: formModel.cRepresentativeNameEnglish,
            GrantorNameRegional: formModel.cRepresentativeNameRegional,
            GrantorCountry: formModel.cMainOfficeCountryNameAmharic,
            GrantorCountryEng: formModel.cMainOfficeCountryNameEnglish,
            GrantorCountryRegional: formModel.cMainOfficeCountryNameRegional,
            GrantorManagerName: formModel.cRepresentativeManagerNameAmharic,
            GrantorManagerNameEng: formModel.cRepresentativeManagerNameEnglish,
            GrantorManagerNameRegional: formModel.cRepresentativeManagerNameRegional,
            GrantorMainAddress: formModel.cMainOfficeAddressAmharic,
            GrantorMainAddressEng: formModel.cMainOfficeAddressEnglish,
            GrantorMainAddressRegional: formModel.cMainOfficeAddressRegional,
            RegistrationCatagories: formModel.cMajorDivision,
            Username: '',
            //EventDateTime: Date.Now.to,
            UpdatedUsername: '',
        };
    };
    RegistrationComponent.prototype.ClearCommercialRepresentativeValidators = function () {
        /*alert('Clear Commerical registration validation');*/
        this.representativeManagerNameAmharic.clearValidators();
        this.registrationForm.get('cRepresentativeManagerNameAmharic').updateValueAndValidity();
        this.representativeManagerNameEnglish.clearValidators();
        this.representativeManagerNameRegional.clearValidators();
        this.representativeNameAmharic.clearValidators();
        this.representativeNameEnglish.clearValidators();
        this.representativeNameRegional.clearValidators();
        this.mainOfficeCountryNameAmharic.clearValidators();
        this.mainOfficeCountryNameEnglish.clearValidators();
        this.mainOfficeCountryNameRegional.clearValidators();
        this.mainOfficeAddressAmharic.clearValidators();
        this.mainOfficeAddressEnglish.clearValidators();
        this.mainOfficeAddressRegional.clearValidators();
    };
    /*  saveRegistrationCatagory() {
        this.registrationForm.patchValue({
          cTin: localStorage.getItem('Tin')
        });
        // // console.log(this.registrationForm.get('cMajorDivisions').value);
    
        return this.registrationCatagoryService.saveRegistrationCatagory(
          this.getEditedRegistrationCatagory()).subscribe(
          (registrationcatagory: RegistrationCatagory) => {
            // console.log(registrationcatagory);
          },
          error => this.toastr.error(error));
      }*/
    /* private getEditedRegistrationCatagory(): RegistrationCatagory {
       const formModel = this.registrationForm.value;
       return {
         ID: 0,
         Tin: localStorage.getItem('Tin'),
         MainGuid: null,
         MajorCatagoryCode: formModel.cMajorDivision
       };
     }*/
    RegistrationComponent.prototype.onBack = function () {
        window.history.back();
    };
    Object.defineProperty(RegistrationComponent.prototype, "companyNameAmharic", {
        get: function () {
            return this.registrationForm.get('cCompanyNameAmharic');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "companyNameEnglish", {
        get: function () {
            return this.registrationForm.get('cCompanyNameEnglish');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "companyNameRegional", {
        get: function () {
            return this.registrationForm.get('cCompanyNameRegional');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "representativeNameAmharic", {
        get: function () {
            return this.registrationForm.get('cRepresentativeNameAmharic');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "representativeNameEnglish", {
        get: function () {
            return this.registrationForm.get('cRepresentativeNameEnglish');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "representativeNameRegional", {
        get: function () {
            return this.registrationForm.get('cRepresentativeNameRegional');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "representativeManagerNameAmharic", {
        get: function () {
            return this.registrationForm.get('cRepresentativeManagerNameAmharic');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "representativeManagerNameEnglish", {
        get: function () {
            return this.registrationForm.get('cRepresentativeManagerNameEnglish');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "representativeManagerNameRegional", {
        get: function () {
            return this.registrationForm.get('cRepresentativeManagerNameRegional');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "mainOfficeAddressAmharic", {
        get: function () {
            return this.registrationForm.get('cMainOfficeAddressAmharic');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "mainOfficeAddressEnglish", {
        get: function () {
            return this.registrationForm.get('cMainOfficeAddressEnglish');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "mainOfficeAddressRegional", {
        get: function () {
            return this.registrationForm.get('cMainOfficeAddressRegional');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "mainOfficeCountryNameAmharic", {
        get: function () {
            return this.registrationForm.get('cMainOfficeCountryNameAmharic');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "mainOfficeCountryNameEnglish", {
        get: function () {
            return this.registrationForm.get('cMainOfficeCountryNameEnglish');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "mainOfficeCountryNameRegional", {
        get: function () {
            return this.registrationForm.get('cMainOfficeCountryNameRegional');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "tin", {
        get: function () {
            return this.registrationForm.get('cTin');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "regNumber", {
        get: function () {
            return this.registrationForm.get('cRegNumber');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "regDate", {
        get: function () {
            return this.registrationForm.get('cRegDate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "singleShareValue", {
        get: function () {
            return this.registrationForm.get('cSingleShareValue');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "sighnedCapital", {
        get: function () {
            return this.registrationForm.get('cSighnedCapital');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "paidCapital", {
        get: function () {
            return this.registrationForm.get('cPaidCapital');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "withForighners", {
        get: function () {
            return this.registrationForm.get('cWithForighners');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "ethiopiansShare", {
        get: function () {
            return this.registrationForm.get('cEthiopiansShare');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "budgetYearCatagory", {
        get: function () {
            return this.registrationForm.get('cBudgetYearCatagory');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "registrationStatus", {
        get: function () {
            return this.registrationForm.get('cRegistrationStatus');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "RegistrationName", {
        get: function () {
            return this.registrationForm.get('cCompanyNameAmharic');
        },
        enumerable: true,
        configurable: true
    });
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/components/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.scss */ "./src/app/components/registration/registration.component.scss")],
            animations: [_custor_services_animations__WEBPACK_IMPORTED_MODULE_0__["fadeInOut"]]
        }),
        __metadata("design:paramtypes", [_Services_Registration_BudgetYearType_service__WEBPACK_IMPORTED_MODULE_5__["BudgetYearTypeService"],
            _Services_Registration_RegistrationCatagory_service__WEBPACK_IMPORTED_MODULE_9__["RegistrationCatagoryService"],
            _Services_Catagory_Catagory_service__WEBPACK_IMPORTED_MODULE_7__["CatagoryService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _Services_Registration_Registration_service__WEBPACK_IMPORTED_MODULE_8__["RegistrationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/components/registration/registration.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/registration/registration.module.ts ***!
  \****************************************************************/
/*! exports provided: RegistrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationModule", function() { return RegistrationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration.component */ "./src/app/components/registration/registration.component.ts");
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration-routing.module */ "./src/app/components/registration/registration-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RegistrationModule = /** @class */ (function () {
    function RegistrationModule() {
    }
    RegistrationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _registration_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegistrationRoutingModule"]
            ],
            declarations: [
                _registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"],
            ],
            exports: []
        })
    ], RegistrationModule);
    return RegistrationModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-registration-Registration-tab-registration-tab-module.js.map