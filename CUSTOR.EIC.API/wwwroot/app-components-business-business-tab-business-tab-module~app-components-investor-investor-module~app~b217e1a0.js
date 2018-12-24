(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-business-business-tab-business-tab-module~app-components-investor-investor-module~app~b217e1a0"],{

/***/ "./src/app/Services/Catagory/Catagory.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/Services/Catagory/Catagory.service.ts ***!
  \*******************************************************/
/*! exports provided: CatagoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatagoryService", function() { return CatagoryService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/appconfig */ "./src/app/config/appconfig.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CatagoryService = /** @class */ (function () {
    function CatagoryService(httpClient, config, errMsg) {
        this.httpClient = httpClient;
        this.config = config;
        this.errMsg = errMsg;
    }
    CatagoryService.prototype.getMajorDivisionByTin = function (Tin) {
        return this.httpClient.get(this.config.urls.url('MajorDivisions', Tin)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    CatagoryService.prototype.getMajorDivision = function () {
        return this.httpClient.get(this.config.urls.url('MajorDivisions')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    CatagoryService.prototype.getDivision = function () {
        return this.httpClient.get(this.config.urls.url('Divisions')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    CatagoryService.prototype.getMajorGroup = function () {
        return this.httpClient.get(this.config.urls.url('MajorGroup')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    CatagoryService.prototype.getGroup = function () {
        return this.httpClient.get(this.config.urls.url('Groups')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    CatagoryService.prototype.getsubGroup = function () {
        return this.httpClient.get(this.config.urls.url('SubGroups')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    CatagoryService.prototype.saveBussiness = function (bussiness) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('Bussiness'), bussiness).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (bussinessdata) { return _this.bussinessdata = bussinessdata; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    CatagoryService.prototype.saveBussinessLicense = function (bussinessLicense) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('SaveBussinessLicense'), bussinessLicense).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (bussinesslicenceData) { return _this.bussinesslicenceData = bussinesslicenceData; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    CatagoryService.prototype.getRegistration = function () {
        return this.httpClient.get(this.config.urls.url('Registrations')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    CatagoryService.prototype.getRegistrationByTin = function (Tin) {
        return this.httpClient.get(this.config.urls.url('GetRegistration', Tin)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    CatagoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_4__["AppConfiguration"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"]])
    ], CatagoryService);
    return CatagoryService;
}());



/***/ }),

/***/ "./src/app/Services/Registration/RegistrationCatagory.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Services/Registration/RegistrationCatagory.service.ts ***!
  \***********************************************************************/
/*! exports provided: RegistrationCatagoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationCatagoryService", function() { return RegistrationCatagoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _Base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Base.service */ "./src/app/Services/Base.service.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
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






;
var RegistrationCatagoryService = /** @class */ (function (_super) {
    __extends(RegistrationCatagoryService, _super);
    function RegistrationCatagoryService(http, appConfig, errMsg) {
        var _this = _super.call(this, http, appConfig.urls.url('registrationCatagory'), errMsg) || this;
        _this.http = http;
        _this.appConfig = appConfig;
        _this.errMsg = errMsg;
        return _this;
    }
    RegistrationCatagoryService.prototype.getRegistrationCatagoriesByInvestorId = function (InvestorId) {
        return this.httpClient.get(this.appConfig.urls.url('GetRegistrationCatagoryByInvestorId', InvestorId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    RegistrationCatagoryService.prototype.getRegistrationCatagoriesByTin = function (Tin) {
        return this.httpClient.get(this.appConfig.urls.url('GetRegistrationCatagoryByTin', Tin)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    /*saveRegistrationCatagory(registrationCatagory: RegistrationCatagory): Observable<RegistrationCatagory> {
      return this.httpClient.post<RegistrationModel>(this.config.urls.url('SaveRegistration'), registrationInfo).pipe(
        map(Reg => {
          // console.log(this.registrationMoedl);
          this.registrationMoedl = registrationInfo;
          return this.registrationMoedl;
        }),
        catchError(this.errMsg.parseObservableResponseError));
    }*/
    RegistrationCatagoryService.prototype.saveRegistrationCatagory = function (registrationCatagory) {
        return this.httpClient.post(this.appConfig.urls.url('SaveRegistrationCatagory'), registrationCatagory).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    RegistrationCatagoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"]])
    ], RegistrationCatagoryService);
    return RegistrationCatagoryService;
}(_Base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ }),

/***/ "./src/app/components/investor/investor-editor.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/investor/investor-editor.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header title=\"Investor\" icon=\"person\"></app-page-header>\r\n<div [@fadeInOut] class=\"page-content margin-2 mat-elevation-z8\">\r\n  <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>\r\n  <form #form=\"ngForm\" [formGroup]=\"investorForm\" novalidate (ngSubmit)=\"onSubmit()\"\r\n        fxLayout=\"column\"\r\n        autocomplete=\"off\">\r\n    <div class=\"error-bar\" style=\"width:100%; \" *ngIf=\"errors.length > 0\">\r\n      <ul>\r\n        <li *ngFor=\"let error of errors\">\r\n          {{ error }}\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div fxLayout=\"row\" style=\"margin:20px 0px\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n      <div [fxFlex]=\"128\">\r\n        <mat-checkbox formControlName=\"IsExistingCustomer\" color=\"primary\">\r\n          <strong>I am existing customer?</strong>\r\n        </mat-checkbox>\r\n      </div>\r\n    </div>\r\n    <div style=\"margin-top: 10px\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n      <mat-form-field fxLayoutGap=\"4em\" [fxFlex]=\"30\">\r\n        <mat-label>{{'investors.editor.LegalStatus' | translate}}</mat-label>\r\n        <mat-select formControlName=\"cLegalStatus\" [compareWith]=\"compareIds\"\r\n                    (selectionChange)=\"statusChanged($event.value)\" required>\r\n          <mat-option *ngFor=\"let lstatus of legalStatuses\" [value]=\"lstatus.Id\">\r\n            <span>{{lstatus.Desc}}</span>\r\n          </mat-option>\r\n        </mat-select>\r\n        <mat-error *ngIf=\"legalStatus.hasError('required')\">\r\n          {{'common.validation.Required' | translate}}\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <!-- <div  > -->\r\n      <mat-form-field fxLayoutGap=\"4em\" [fxFlex]=\"30\">\r\n        <mat-label>{{'investors.editor.FormOfOwnership' | translate}}</mat-label>\r\n        <mat-select (selectionChange)=\"onFormOfOwnershipChanged($event.value)\"\r\n                    formControlName=\"FormOfOwnership\" required>\r\n          <!-- <mat-option value=\"0\">--</mat-option> -->\r\n          <mat-option *ngFor=\"let item of formOfOwnershipList;\" [value]=\"item.Id\">\r\n            {{item.Desc}}\r\n          </mat-option>\r\n        </mat-select>\r\n        <mat-error *ngIf=\"FormOfOwnershipV.hasError('required')\">\r\n          {{'common.validation.Required' | translate}}\r\n        </mat-error>\r\n\r\n      </mat-form-field>\r\n      <!-- </div> -->\r\n      <!-- <span  *ngIf=\"branch\"> -->\r\n      <!-- <div *ngIf=\"branch\"> -->\r\n      <mat-form-field fxLayoutGap=\"4em\" [fxFlex]=\"30\" *ngIf=\"branch\">\r\n        <mat-label>{{'investors.editor.NationalityCompany' | translate}}</mat-label>\r\n        <mat-select formControlName=\"cNationalityCompany\" [compareWith]=\"compareIds\">\r\n          <mat-option value=\"0\">--</mat-option>\r\n          <mat-option *ngFor=\"let country of countryListWithOutEthipia\" [value]=\"country.LookupId\">\r\n            <span>{{country.English}}</span>\r\n          </mat-option>\r\n        </mat-select>\r\n        <mat-error *ngIf=\"nationalityCompany.hasError('required')\">\r\n          {{'common.validation.Required' | translate}}\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <!-- </div> -->\r\n\r\n    </div>\r\n    <h4>{{'investors.editor.InvestorProfileCaption' | translate}}</h4>\r\n    <mat-divider></mat-divider>\r\n    <div id=\"divSole\" *ngIf=\"!isCompany\">\r\n      <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n        <mat-form-field fxFlex>\r\n          <mat-label>{{'investors.editor.FirstNameEng' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cFirstNameEng\" required/>\r\n          <mat-error *ngIf=\"firstNameEng.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"firstNameEng.hasError('minlength')\">\r\n            {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"!firstNameEng.hasError('required') && !firstNameEng.hasError('minlength')\r\n                            && firstNameEng.hasError('pattern')\">\r\n            {{'common.validation.UseLatinOnly' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field fxFlex>\r\n          <mat-label>{{'investors.editor.FatherNameEng' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cFatherNameEng\" required/>\r\n          <mat-error *ngIf=\"fatherNameEng.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"!fatherNameEng.hasError('required') && fatherNameEng.hasError('minlength')\">\r\n            {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"!fatherNameEng.hasError('required') && !fatherNameEng.hasError('minlength')\r\n                                && firstNameEng.hasError('pattern')\">\r\n            {{'common.validation.UseLatinOnly' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field fxFlex>\r\n          <mat-label>{{'investors.editor.GrandNameEng' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cGrandNameEng\" required/>\r\n          <mat-error *ngIf=\"grandNameEng.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"!grandNameEng.hasError('required') && grandNameEng.hasError('minlength')\">\r\n            {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-error *ngIf=\"!grandNameEng.hasError('required') && !grandNameEng.hasError('minlength')\r\n                            && grandNameEng.hasError('pattern')\">\r\n          {{'common.validation.UseLatinOnly' | translate}}\r\n        </mat-error>\r\n\r\n        <mat-form-field fxFlex>\r\n          <mat-label>{{'investors.editor.FirstName' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cFirstName\"/>\r\n          <mat-error *ngIf=\"firstName.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"!firstName.hasError('required') && firstName.hasError('minlength')\">\r\n            {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"!firstName.hasError('required') && !firstName.hasError('minlength')\r\n                            && firstName.hasError('pattern')\">\r\n            {{'common.validation.UseEthiopicOnly' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field fxFlex>\r\n          <mat-label>{{'investors.editor.FatherName' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cFatherName\"/>\r\n          <mat-error *ngIf=\"fatherName.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"!fatherName.hasError('required') && fatherName.hasError('minlength')\">\r\n            {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"!fatherName.hasError('required') && !fatherName.hasError('minlength')\r\n                                && fatherName.hasError('pattern')\">\r\n            {{'common.validation.UseEthiopicOnly' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field fxFlex>\r\n          <mat-label>{{'investors.editor.GrandName' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cGrandName\"/>\r\n          <mat-error *ngIf=\"grandName.hasError('required')\">\r\n            {{'common.validation.Required' | translate }}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"!grandName.hasError('required') && grandName.hasError('minlength')\">\r\n            {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"!grandName.hasError('required') && !grandName.hasError('minlength')\r\n                            && grandName.hasError('pattern')\">\r\n            {{'common.validation.UseEthiopicOnly' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n        <mat-form-field fxLayoutGap=\"4em\" class=\"col4\">\r\n          <mat-label>{{'investors.editor.Title' | translate}}</mat-label>\r\n          <mat-select formControlName=\"Title\">\r\n            <mat-option *ngFor=\"let title of TitleLookup\" [value]=\"title.LookupId\">\r\n              {{title.English}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field fxLayoutGap=\"4em\" class=\"col4\">\r\n          <mat-label>{{'investors.editor.Gender' | translate}}</mat-label>\r\n          <mat-select formControlName=\"cGender\" required>\r\n            <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.Id\">\r\n              {{gender.Desc}}\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"gender.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field fxLayoutGap=\"4em\">\r\n          <mat-label>{{'investors.editor.Nationality' | translate}}</mat-label>\r\n          <mat-select #contry (selectionChange)=\"checkCountry($event.value)\"\r\n                      formControlName=\"cNationality\" [compareWith]=\"compareIds\">\r\n            <mat-option *ngFor=\"let country of nationList\" [value]=\"country.id\">\r\n              <span>{{country.descriptionEnglish}}</span>\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"nationality.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <!--<div class=\"container\" fxLayoutGap=\"4em\">-->\r\n        <!--<mat-checkbox formControlName=\"cIsDiaspora\">{{'investors.editor.IsDiaspora' | translate}}</mat-checkbox>-->\r\n        <!--</div>-->\r\n        <div class=\"container\" fxLayoutGap=\"4em\" *ngIf=\"contry.value*1!==19\">\r\n          <mat-checkbox formControlName=\"cIsEthiopianOrigin\">{{'investors.editor.IsEthiopianOrigin' | translate}}\r\n          </mat-checkbox>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"divCompany\" *ngIf=\"isCompany\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n      <mat-form-field [fxFlex]=\"32\">\r\n        <mat-label>{{'investors.editor.CompanyNameEng' | translate}}</mat-label>\r\n        <input matInput formControlName=\"cCompanyNameEng\" required/>\r\n        <mat-error *ngIf=\"companyNameEng.hasError('required')\">\r\n          {{'common.validation.Required' | translate}}\r\n        </mat-error>\r\n        <mat-error *ngIf=\"!companyNameEng.hasError('required') && companyNameEng.hasError('minlength')\">\r\n          Name should be at least 2 characters long\r\n        </mat-error>\r\n        <mat-error *ngIf=\"!companyNameEng.hasError('required') && !companyNameEng.hasError('minlength')\">\r\n          {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\r\n        </mat-error>\r\n        <mat-error *ngIf=\"!companyNameEng.hasError('required') && !companyNameEng.hasError('minlength')\r\n                            && companyNameEng.hasError('pattern')\">\r\n          {{'common.validation.UseLatinOnly' | translate}}\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field [fxFlex]=\"32\">\r\n        <mat-label>{{'investors.editor.CompanyName' | translate}}</mat-label>\r\n        <input matInput formControlName=\"cCompanyName\"/>\r\n        <mat-error *ngIf=\"companyName.hasError('required')\">\r\n          {{'common.validation.Required' | translate}}\r\n        </mat-error>\r\n        <mat-error *ngIf=\"!companyName.hasError('required') && companyName.hasError('minlength')\">\r\n          {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\r\n        </mat-error>\r\n        <mat-error *ngIf=\"!companyName.hasError('required') && !companyName.hasError('minlength')\r\n                         && companyName.hasError('pattern')\">\r\n          {{'common.validation.UseEthiopicOnly' | translate}}\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <h4>{{'investors.editor.AddressCaption' | translate}}</h4>\r\n    <mat-divider></mat-divider>\r\n    <div formGroupName=\"address\">\r\n      <div id=\"divAddress\">\r\n        <div id=\"divAddress1\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n          <mat-form-field fxLayoutGap=\"4em\">\r\n            <mat-label>{{'investors.editor.Region' | translate}}</mat-label>\r\n            <mat-select formControlName=\"RegionId\" (selectionChange)=\"filterRegion($event.value)\"\r\n                        [compareWith]=\"compareIds\" required>\r\n              <!-- <option value=\"0\">--Select--</option> -->\r\n              <mat-option value=\"0\">--</mat-option>\r\n              <mat-option *ngFor=\"let region of regions\" [value]=\"region.RegionId\">\r\n                <span>{{region.Description}}</span>\r\n              </mat-option>\r\n            </mat-select>\r\n\r\n            <!--<mat-error *ngIf=\"region.hasError('required')\">-->\r\n            <!--{{'common.validation.Required' | translate}}-->\r\n            <!--</mat-error>-->\r\n          </mat-form-field>\r\n          <mat-form-field fxLayoutGap=\"4em\">\r\n            <mat-label>{{'investors.editor.Zone' | translate}}</mat-label>\r\n            <mat-select formControlName=\"ZoneId\" (selectionChange)=\"filterZone($event.value)\" [compareWith]=\"compareIds\"\r\n            >\r\n              <!-- <option value=\"0\">--Select--</option> -->\r\n              <mat-option value=\"0\">--</mat-option>\r\n              <mat-option *ngFor=\"let zone of filteredZones\" [value]=\"zone.ZoneId\">\r\n                <span>{{zone.Description}}</span>\r\n              </mat-option>\r\n            </mat-select>\r\n\r\n            <!--<mat-error *ngIf=\"zone.hasError('required')\">-->\r\n            <!--{{'common.validation.Required' | translate}}-->\r\n            <!--</mat-error>-->\r\n          </mat-form-field>\r\n          <mat-form-field fxLayoutGap=\"4em\">\r\n            <mat-label>{{'investors.editor.Woreda' | translate}}</mat-label>\r\n            <mat-select formControlName=\"WoredaId\" (selectionChange)=\"filterWoreda($event.value)\"\r\n                        [compareWith]=\"compareIds\">\r\n              <!-- <option value=\"0\">--Select--</option> -->\r\n              <mat-option *ngFor=\"let w of filteredWoredas\" [value]=\"w.WoredaId\">\r\n                <span>{{w.Description}}</span>\r\n              </mat-option>\r\n            </mat-select>\r\n\r\n            <!--<mat-error *ngIf=\"woreda.hasError('required')\">-->\r\n            <!--{{'common.validation.Required' | translate}}-->\r\n            <!--</mat-error>-->\r\n          </mat-form-field>\r\n          <mat-form-field fxLayoutGap=\"4em\">\r\n            <mat-label>{{'investors.editor.Kebele' | translate}}</mat-label>\r\n            <mat-select formControlName=\"KebeleId\" [compareWith]=\"compareIds\">\r\n              <!-- <option value=\"0\">--Select--</option> -->\r\n              <mat-option value=\"0\">--</mat-option>\r\n              <mat-option *ngFor=\"let keb of filteredKebeles\" [value]=\"keb.KebeleId\">\r\n                <span>{{keb.Description}}</span>\r\n              </mat-option>\r\n            </mat-select>\r\n\r\n            <!--<mat-error *ngIf=\"kebele.hasError('required')\">-->\r\n            <!--{{'common.validation.Required' | translate}}-->\r\n            <!--</mat-error>-->\r\n          </mat-form-field>\r\n          <mat-form-field fxLayoutGap=\"4em\">\r\n            <mat-label>{{'investors.editor.HouseNo' | translate}}</mat-label>\r\n            <input matInput formControlName=\"HouseNo\"/>\r\n\r\n            <!--<mat-error *ngIf=\"houseNo.hasError('required')\">-->\r\n            <!--{{'common.validation.Required' | translate}}-->\r\n            <!--</mat-error>-->\r\n          </mat-form-field>\r\n        </div>\r\n        <div id=\"divAddress2\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n          <mat-form-field fxLayoutGap=\"4em\">\r\n            <mat-label>{{'investors.editor.Email' | translate}}</mat-label>\r\n            <input matInput formControlName=\"Email\"/>\r\n            <!--<mat-error *ngIf=\"email.hasError('required')\">-->\r\n            <!--{{'common.validation.Required' | translate}}-->\r\n            <!--</mat-error>-->\r\n            <!--<mat-error *ngIf=\"!email.hasError('required') && email.hasError('email')\">-->\r\n            <!--{{'common.validation.InvalidEmail' | translate}}-->\r\n            <!--</mat-error>-->\r\n          </mat-form-field>\r\n          <mat-form-field fxLayoutGap=\"4em\">\r\n            <mat-label>{{'investors.editor.PhoneDirect' | translate}}</mat-label>\r\n            <input matInput formControlName=\"TeleNo\"/>\r\n          </mat-form-field>\r\n          <mat-form-field fxLayoutGap=\"4em\">\r\n            <mat-label>{{'investors.editor.PhoneMobile' | translate}}</mat-label>\r\n            <input matInput formControlName=\"CellPhoneNo\"/>\r\n          </mat-form-field>\r\n          <mat-form-field fxLayoutGap=\"4em\">\r\n            <mat-label>{{'investors.editor.Fax' | translate}}</mat-label>\r\n            <input matInput formControlName=\"Fax\"/>\r\n          </mat-form-field>\r\n          <mat-form-field fxLayoutGap=\"4em\">\r\n            <mat-label>{{'investors.editor.Pobox' | translate}}</mat-label>\r\n            <input matInput formControlName=\"Pobox\"/>\r\n          </mat-form-field>\r\n          <div></div>\r\n        </div>\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n        <mat-form-field [fxFlex]=\"128\">\r\n          <mat-label>{{'investors.editor.OtherAddress' | translate}}</mat-label>\r\n          <input matInput formControlName=\"OtherAddress\" width=\"800px\"/>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n      <h4>{{'investors.editor.BusinessDataCaption' | translate}}</h4></div>\r\n    <mat-divider></mat-divider>\r\n    <div id=\"divTradeReg\">\r\n\r\n\r\n      <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n        <mat-form-field fxFlex>\r\n          <mat-label name=\"lblTIN\">{{'users.editor.TIN' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cTin\" number maxlength=\"10\"/>\r\n          <mat-error *ngIf=\"tin.hasError('maxlength')\">\r\n            {{'common.validation.MaxLengthChar' | translate: {'max':'10'} }}\r\n          </mat-error>\r\n          <!-- // to-do apply server side validation -->\r\n        </mat-form-field>\r\n        <mat-form-field fxFlex *ngIf=\"isNewCustomer\">\r\n          <mat-label name=\"lblRegNumber\">{{'investors.editor.RegNumber' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cRegNumber\" NaturalNumberOnlyDir/>\r\n        </mat-form-field>\r\n        <mat-form-field fxFlex *ngIf=\"isNewCustomer\">\r\n          <mat-label name=\"lblRegDate\">{{'investors.editor.RegDate' | translate}}</mat-label>\r\n          <input [matDatepicker]=\"cRegDate\" matInput formControlName=\"cRegDate\"/>\r\n          <mat-datepicker-toggle matSuffix [for]=\"cRegDate\"></mat-datepicker-toggle>\r\n          <mat-datepicker #cRegDate></mat-datepicker>\r\n        </mat-form-field>\r\n        <mat-form-field fxFlex fxFlex=\"14\" *ngIf=\"isNewCustomer\">\r\n          <mat-label name=\"lblPaidCapital\">{{'investors.editor.PaidCapital' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cPaidCapital\"/>\r\n        </mat-form-field>\r\n        <mat-form-field fxFlex fxFlex=\"15\" *ngIf=\"isNewCustomer\">\r\n          <mat-label name=\"lblSighnedCapital\">{{'investors.editor.SighnedCapital' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cSighnedCapital\"/>\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\">\r\n        <mat-form-field fxFlex fxFlex=\"100\">\r\n\r\n          <mat-select placeholder=\"Category *\" formControlName=\"cMajorDivision\" multiple>\r\n\r\n            <mat-option *ngFor=\"let MajorDivision of majorDivisions\" [value]=\"MajorDivision.Id\">\r\n              {{MajorDivision.EnglishDescription}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div mat-dialog-actions style=\"margin: 15px; text-align: center\">\r\n      <button mat-raised-button type=\"submit\" color=\"primary\" style=\"margin-right: 10px\">\r\n        {{'common.commands.Save' | translate}}\r\n      </button>\r\n      <button mat-raised-button (click)=\"onBack()\" color=\"warn\" type=\"button\">\r\n        {{'common.commands.Cancel' | translate}}\r\n      </button>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!-- </div> -->\r\n"

/***/ }),

/***/ "./src/app/components/investor/investor-editor.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/investor/investor-editor.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* div {\r\n  display: flex;\r\n} */\n.page-content {\n  margin-bottom: 30px;\n  background-color: white; }\nmat-card {\n  max-width: 100%;\n  margin: 10px auto;\n  text-align: center; }\nmat-checkbox {\n  max-width: 500px;\n  text-align: left;\n  margin-top: -40px;\n  font-size: small;\n  vertical-align: bottom; }\nmat-label {\n  font-size: smaller; }\nmat-form-field {\n  max-width: 130px;\n  margin-right: 10px;\n  font-size: small; }\nmat-divider {\n  margin-bottom: 10px;\n  border-top-color: #00bcd4; }\nh4 {\n  margin-bottom: 0px;\n  font-size: medium;\n  color: #00bcd4;\n  margin-top: 10px; }\n.row {\n  text-align: left;\n  margin-bottom: 15px; }\n.customer-radio-group {\n  display: inherit;\n  flex-direction: row; }\n.customer-radio-button {\n  margin: 5px; }\n"

/***/ }),

/***/ "./src/app/components/investor/investor-editor.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/investor/investor-editor.component.ts ***!
  \******************************************************************/
/*! exports provided: EditInvestorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditInvestorComponent", function() { return EditInvestorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _custor_services_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/services/animations */ "./src/@custor/services/animations.ts");
/* harmony import */ var _investor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./investor.service */ "./src/app/components/investor/investor.service.ts");
/* harmony import */ var _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @custor/helpers/utilities */ "./src/@custor/helpers/utilities.ts");
/* harmony import */ var _model_lookupData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/lookupData */ "./src/app/model/lookupData.ts");
/* harmony import */ var _const_consts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../const/consts */ "./src/app/const/consts.ts");
/* harmony import */ var _custor_helpers_compare__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @custor/helpers/compare */ "./src/@custor/helpers/compare.ts");
/* harmony import */ var _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @custor/services/configuration.service */ "./src/@custor/services/configuration.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _custor_services_security_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @custor/services/security/auth.service */ "./src/@custor/services/security/auth.service.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _model_security_permission_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../model/security/permission.model */ "./src/app/model/security/permission.model.ts");
/* harmony import */ var _Services_Address_address_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../Services/Address/address.service */ "./src/app/Services/Address/address.service.ts");
/* harmony import */ var _Services_look_up_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../Services/look-up.service */ "./src/app/Services/look-up.service.ts");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _model_EnumModel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../model/EnumModel */ "./src/app/model/EnumModel.ts");
/* harmony import */ var _custor_const_consts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @custor/const/consts */ "./src/@custor/const/consts.ts");
/* harmony import */ var _Services_Catagory_Catagory_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../Services/Catagory/Catagory.service */ "./src/app/Services/Catagory/Catagory.service.ts");
/* harmony import */ var _Services_Registration_RegistrationCatagory_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../Services/Registration/RegistrationCatagory.service */ "./src/app/Services/Registration/RegistrationCatagory.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var EditInvestorComponent = /** @class */ (function () {
    function EditInvestorComponent(route, router, dataSharing, lookUpService, addressService, registrationCatagoryService, http, accountService, authService, custService, catagoryService, configService, toastr, fb) {
        this.route = route;
        this.router = router;
        this.dataSharing = dataSharing;
        this.lookUpService = lookUpService;
        this.addressService = addressService;
        this.registrationCatagoryService = registrationCatagoryService;
        this.http = http;
        this.accountService = accountService;
        this.authService = authService;
        this.custService = custService;
        this.catagoryService = catagoryService;
        this.configService = configService;
        this.toastr = toastr;
        this.fb = fb;
        this.formOfOwnershipList = [];
        this.isNewInvestor = false;
        this.countries = [];
        this.lookups = [];
        this.regions = [];
        this.zones = [];
        this.filteredZones = [];
        this.woredas = [];
        this.filteredWoredas = [];
        this.kebeles = [];
        this.filteredKebeles = [];
        this.majorDivisions = [];
        this.registrationCatagoryList = [];
        this.genders = [];
        this.legalStatuses = [];
        this.currentLang = '';
        this.countryLookupType = 1;
        this.allPermissions = [];
        this.originFlag = true;
        this.branch = false;
        this.AllowCascading = true;
        this.errors = [];
        this.checkAuthoriation();
        // create an empty object from the Investor model
        this.investor = {};
        // initialize the form
        this.initForm();
        // // console.log(this.accountService.currentUser.Roles);
    }
    EditInvestorComponent.prototype.checkAuthoriation = function () {
        // if (!this.canManageInvestors) {
        //   this.toastr.error('You are not allowed to access this page');
        //   this.router.navigate(['denied']);
        // }
    };
    EditInvestorComponent.prototype.ngAfterContentChecked = function () {
        this.investorForm.patchValue({
            UserId: this.accountService.currentUser.Id
        });
    };
    EditInvestorComponent.prototype.ngOnInit = function () {
        this.ServiceId = this.route.snapshot.params['ServiceId'];
        this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
        this.loadingIndicator = false;
        this.currentLang = this.configService.language;
        this.initStaticData('this.currentLang');
        this.initStaticDataOwnerShip(this.currentLang);
        this.fillAddressLookups();
        this.formControlValueChanged();
        this.getMajorDivisions();
        var id = this.route.snapshot.params['InvestorId'];
        // console.debug(id);
        if (id < 1) {
            this.isNewInvestor = true;
            this.isCompany = false;
            this.title = 'Create a new Investor';
            return;
        }
        if (id) {
            // to-do
            // get the selected investor either through @Input or shared service
            this.getInvestor(id);
        }
    };
    EditInvestorComponent.prototype.getMajorDivisions = function () {
        var _this = this;
        this.catagoryService.getMajorDivision()
            .subscribe(function (result) {
            _this.majorDivisions = result;
            _this.majorDivisions = result;
        }, function (error) { return _this.toastr.error(error); });
    };
    EditInvestorComponent.prototype.formControlValueChanged = function () {
        var _this = this;
        var cFather = this.investorForm.get('cFatherName');
        this.legalStatus.valueChanges.subscribe(function (intLegal) {
            if (intLegal === 1) {
                // // console.log(intLegal);
                _this.ClearCompanyValidators();
                _this.firstNameEng.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_const_consts__WEBPACK_IMPORTED_MODULE_8__["ALPHABET_WITHSPACE_REGEX"])])]);
                _this.fatherNameEng.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_const_consts__WEBPACK_IMPORTED_MODULE_8__["ALPHABET_WITHSPACE_REGEX"])])]);
                _this.grandNameEng.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_const_consts__WEBPACK_IMPORTED_MODULE_8__["ALPHABET_WITHSPACE_REGEX"])])]);
                _this.nationality.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
                _this.gender.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
                _this.isCompany = false;
            }
            else {
                _this.ClearSoleValidators();
                _this.companyNameEng.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
                cFather.updateValueAndValidity();
                _this.isCompany = true;
            }
        });
        this.isExistingCustomer.valueChanges.subscribe(function (isNewCustomer) {
            if (isNewCustomer && _this.legalStatus.value !== 1) {
                _this.sighnedCapital.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)])]);
                _this.paidCapital.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)])]);
                _this.isNewCustomer = true;
            }
            else {
                _this.isNewCustomer = false;
                _this.sighnedCapital.clearAsyncValidators();
                _this.paidCapital.clearAsyncValidators();
            }
        });
    };
    EditInvestorComponent.prototype.ClearSoleValidators = function () {
        this.firstNameEng.clearValidators();
        this.fatherNameEng.clearValidators();
        this.grandNameEng.clearValidators();
        this.nationality.clearValidators();
        this.gender.clearValidators();
    };
    EditInvestorComponent.prototype.ClearCompanyValidators = function () {
        // this.nationalityCompany.clearValidators();
        this.companyNameEng.clearValidators();
    };
    EditInvestorComponent.prototype.getAllNation = function () {
        var _this = this;
        this.addressService.getNationality()
            .subscribe(function (result) {
            _this.nationList = result;
        });
    };
    EditInvestorComponent.prototype.initStaticDataOwnerShip = function (currentLang) {
        var _this = this;
        this.formOfOwnershipList = [];
        var formOfOwnership = new _model_EnumModel__WEBPACK_IMPORTED_MODULE_18__["FormOfOwnershipModel"]();
        _custor_const_consts__WEBPACK_IMPORTED_MODULE_19__["FormOfOwnership"].forEach(function (pair) {
            formOfOwnership = {
                'Id': pair.Id.toString(),
                'Desc': (currentLang === 'et' ? pair.Description : pair.DescriptionEng)
            };
            // // console.log(formOfOwnership);
            _this.formOfOwnershipList.push(formOfOwnership);
        });
    };
    EditInvestorComponent.prototype.initStaticData = function (currentLang) {
        var _this = this;
        var gender = new _model_lookupData__WEBPACK_IMPORTED_MODULE_7__["Gender"]();
        _const_consts__WEBPACK_IMPORTED_MODULE_8__["GENDERS"].forEach(function (pair) {
            gender = { 'Id': pair.Id.toString(), 'Desc': (currentLang === 'et' ? pair.Description : pair.DescriptionEnglish) };
            _this.genders.push(gender);
            // // console.log(pair);
        });
        var legalS = new _model_lookupData__WEBPACK_IMPORTED_MODULE_7__["LegalStatus"]();
        _const_consts__WEBPACK_IMPORTED_MODULE_8__["LEGAL_STATUS"].forEach(function (pair) {
            legalS = { 'Id': pair.Id.toString(), 'Desc': (currentLang === 'et' ? pair.Description : pair.DescriptionEnglish) };
            _this.legalStatuses.push(legalS);
        });
        // Fill data from Lookup table
        this.getLookups();
    };
    EditInvestorComponent.prototype.getPermissions = function () {
        var _this = this;
        this.loadingIndicator = true;
        this.accountService.getPermissions()
            .subscribe(function (result) {
            _this.allPermissions = result;
            _this.loadingIndicator = false;
        }, function (error) {
            _this.loadingIndicator = false;
            _this.toastr.error("Unable to retrieve permissions from the server.\r\nErrors:\n              \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_6__["Utilities"].getHttpResponseMessage(error) + "\"", 'Get Permissions Error');
        });
    };
    Object.defineProperty(EditInvestorComponent.prototype, "canManageInvestors", {
        get: function () {
            return this.accountService.userHasPermission(_model_security_permission_model__WEBPACK_IMPORTED_MODULE_14__["Permission"].manageInvestorsPermission);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "canViewInvestors", {
        get: function () {
            return this.accountService.userHasPermission(_model_security_permission_model__WEBPACK_IMPORTED_MODULE_14__["Permission"].viewInvestorsPermission);
        },
        enumerable: true,
        configurable: true
    });
    EditInvestorComponent.prototype.ngOnDestroy = function () {
        // this.investorSub.unsubscribe();
    };
    EditInvestorComponent.prototype.getInvestor = function (id) {
        var _this = this;
        this.isNewInvestor = false;
        // this.loadingIndicator = true;
        this.investorSub = this.custService
            .getInvestor(id)
            .subscribe(function (result) {
            _this.investor = result;
            _this.fillAddressLookups();
            _this.updateForm();
            console.log(_this.investor.RegistrationCatagories);
            _this.investorForm.patchValue({
                cMajorDivision: _this.investor.RegistrationCatagories
            });
        }, function (error) { return _this.toastr.error(error); });
        this.loadingIndicator = false;
    };
    EditInvestorComponent.prototype.getAddressData = function (parent) {
        var _this = this;
        this.addressService.getAddress(parent)
            .subscribe(function (result) {
            _this.addressList = result;
            // // console.log(result);
            _this.getKebeleByWoredaId(result.WoredaId);
            _this.addressId = result.AddressId;
            _this.investorForm.get('address').patchValue(result);
        }, function (error) { return _this.toastr.error(error); });
    };
    // getInvestorTitle() {
    //   this.lookUpService.getAll().subscribe(result => {
    //     // console.log(result);
    //     this.investorTitle = result;
    //   });
    // }
    EditInvestorComponent.prototype.fillAddressLookups = function () {
        // to-do
        // bring all in one go
        // caching
        this.getRegions();
        this.getAllZones();
        this.getAllWoredas();
        this.getInvestorTitle(89);
        this.getCountryTitle(31);
        this.getAllNation();
        // this.getAllKebeles();
        // this.getInvestorTitle();
    };
    EditInvestorComponent.prototype.getLookups = function () {
        var _this = this;
        this.custService.getLookupsByLang(this.currentLang)
            .subscribe(function (result) {
            _this.countries = result;
            // // console.log(result);
            // // console.log (this.lookups.length + ' countries');
            // if (this.lookups) {
            //   this.countries = this.lookups.filter((item) => item.LookupTypeId === this.countryLookupType);
            //   // console.log(this.countries);
            //   // filter more lookups
            // }
        }, function (error) { return _this.toastr.error(error); });
    };
    EditInvestorComponent.prototype.getRegions = function () {
        var _this = this;
        this.custService.getRegionsByLang(this.currentLang)
            .subscribe(function (result) {
            _this.regions = result;
        }, function (error) { return _this.toastr.error(error); });
    };
    EditInvestorComponent.prototype.getAllZones = function () {
        var _this = this;
        this.custService.getAllZonesByLang(this.currentLang)
            .subscribe(function (z) {
            _this.zones = z;
            if (_this.zones) {
                // // console.log('Region ' + this.investor.RegionId);
                // this.filterRegion(this.investor.RegionId);
            }
        }, function (error) { return _this.toastr.error(error); });
    };
    EditInvestorComponent.prototype.getAllWoredas = function () {
        var _this = this;
        this.custService.getAllWoredasByLang(this.currentLang)
            .subscribe(function (result) {
            _this.woredas = result;
        }, function (error) { return _this.toastr.error(error); });
    };
    // very expensive!
    EditInvestorComponent.prototype.getAllKebeles = function () {
        var _this = this;
        this.custService.getAllKebelesByLang(this.currentLang)
            .subscribe(function (result) {
            _this.kebeles = result;
            if (_this.kebeles) {
                _this.filterWoreda(_this.investor.WoredaId);
            }
        }, function (error) { return _this.toastr.error(error); });
    };
    EditInvestorComponent.prototype.initForm = function () {
        this.investorForm = this.fb.group({
            cLegalStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cFirstNameEng: [''],
            cFatherNameEng: [''],
            cGrandNameEng: [''],
            cFirstName: [''],
            cFatherName: [''],
            cGrandName: [''],
            cNationality: ['1'],
            cNationalityCompany: [''],
            cCompanyName: [''],
            cCompanyNameEng: [''],
            cGender: [''],
            Title: [''],
            FormOfOwnership: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cIsEthiopianOrigin: [false],
            cTin: [''],
            IsExistingCustomer: [false],
            cRegNumber: [''],
            cRegDate: [''],
            cPaidCapital: [''],
            cSighnedCapital: [''],
            cMajorDivision: [],
            'address': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                ParentId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                RegionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                ZoneId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                WoredaId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                KebeleId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                OtherAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                CellPhoneNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                // SpecificAreaName: new FormControl(),
                HouseNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                TeleNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                Fax: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                Pobox: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                Remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
            })
        });
    };
    EditInvestorComponent.prototype.updateForm = function () {
        var _this = this;
        // const _shortDate = 'dd/MM/yyyy';
        this.investorForm.patchValue({
            cLegalStatus: this.investor.LegalStatus,
            cFirstName: this.investor.FirstName || '',
            cFatherName: this.investor.FatherName || '',
            cGrandName: this.investor.GrandName || '',
            cFirstNameEng: this.investor.FirstNameEng || '',
            cFatherNameEng: this.investor.FatherNameEng || '',
            cGrandNameEng: this.investor.GrandNameEng || '',
            cNationality: this.investor.Nationality == null ? '' : this.investor.Nationality.toString(),
            cNationalityCompany: this.investor.Nationality == null ? '' : this.investor.Nationality.toString(),
            cGender: this.investor.Gender == null ? '' : this.investor.Gender.toString(),
            cCompanyName: this.investor.FirstName || '',
            cCompanyNameEng: this.investor.FirstNameEng || '',
            cTin: this.investor.Tin || '',
            cRegNumber: this.investor.RegistrationNumber || '',
            cRegDate: this.investor.RegistrationDate || '',
            cPaidCapital: this.investor.PaidCapital || '',
            cSighnedCapital: this.investor.SighnedCapital || '',
            IsExistingCustomer: this.investor.IsExistingCustomer || '',
            cMajorDivision: this.investor.RegistrationCatagories || '',
            /*  cTradeNameEng: this.investor.TradeNameEnglish || '',
              cTradeName: this.investor.TradeName || '',*/
            Title: this.investor.Title || '',
            FormOfOwnership: this.investor.FormOfOwnership == null ? '' : this.investor.FormOfOwnership.toString(),
            cIsEthiopianOrigin: this.investor.IsEthiopianOrigin,
        });
        if (this.investor.LegalStatus > 1) {
            this.isCompany = true;
        }
        else {
            this.isCompany = false;
        }
        this.isNewInvestor = false;
        // Set dropdown values
        setTimeout(function () {
            _this.AllowCascading = false;
            if (_this.investor.ZoneId != null) {
                _this.filteredWoredas = _this.woredas.filter(function (item) { return item.ZoneId === _this.investor.ZoneId; });
            }
            if (_this.investor.RegionId != null) {
                _this.filteredZones = _this.zones.filter(function (item) { return item.RegionId === _this.investor.RegionId; });
            }
            if (_this.investor.WoredaId != null) {
                _this.getKebeleByWoredaId(_this.investor.WoredaId);
            }
        }, 200);
        this.investorForm.get('address').patchValue({
            RegionId: this.investor.RegionId == null ? '' : this.investor.RegionId.toString(),
            ZoneId: this.investor.ZoneId == null ? '' : this.investor.ZoneId.toString(),
            WoredaId: this.investor.WoredaId == null ? '' : this.investor.WoredaId.toString(),
            KebeleId: this.investor.KebeleId == null ? '' : this.investor.KebeleId.toString(),
            HouseNo: this.investor.HouseNo || '',
            TeleNo: this.investor.TeleNo || '',
            Pobox: this.investor.Pobox || '',
            Fax: this.investor.Fax || '',
            CellPhoneNo: this.investor.CellPhoneNo || '',
            Email: this.investor.Email || '',
            OtherAddress: this.investor.OtherAddress || ''
        });
        this.branch = (this.investor.FormOfOwnership.toString() === '5');
        this.AllowCascading = true;
    };
    EditInvestorComponent.prototype.compareIds = function (id1, id2) {
        var a1 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_9__["determineId"])(id1);
        var a2 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_9__["determineId"])(id2);
        return a1 === a2;
    };
    EditInvestorComponent.prototype.onSubmit = function () {
        var _this = this;
        // put dummy values to avoid conditional validation issues
        if (this.isCompany) {
            this.investorForm.get('cFirstNameEng').patchValue('NA');
            this.investorForm.get('cFatherNameEng').patchValue('NA');
            this.investorForm.get('cGrandNameEng').patchValue('NA');
            this.investorForm.get('cGender').patchValue('1');
        }
        if (!this.branch) {
            this.investorForm.get('cNationalityCompany').patchValue('0');
        }
        if (!this.investorForm.valid) {
            // // console.log('error!!');
            return;
        }
        var lStatus = this.legalStatus.value;
        var fOwnership = this.FormOfOwnershipV.value;
        var natCompany = this.investorForm.get('cNationalityCompany').value;
        if (fOwnership.toString() === '5' && natCompany < 1) {
            this.toastr.error('Please select the country of incorporation of the parent company');
            return;
        }
        if (lStatus.toString() === '1' && fOwnership.toString() === '4') {
            this.toastr.error('The form of ownership can not be Joint Venture when the Legal Status is Sole');
            return;
        }
        if (fOwnership < 1) {
            this.toastr.error('Please select form of ownership');
            return;
        }
        var t = this.tin.value;
        if (t.replace(' ', '').trim().length > 0 && t.replace(' ', '').trim().length !== 10) {
            this.toastr.error('TIN must be 10 digits long');
            return;
        }
        this.loadingIndicator = true;
        return this.custService.saveInvestor(this.getEditedInvestor())
            .subscribe(function (investor) {
            _this.isNew = _this.getEditedInvestor().IsExistingCustomer == true ? 1 : 0;
            // const IsExistingCustomer = this.route.snapshot.params['IsExistingCustomer'];
            // this.router.navigateByUrl(this.router.url.replace(IsExistingCustomer, this.isNew));
            if (investor == null) {
                var ServiceApplicationId1 = _this.route.snapshot.params['ServiceApplicationId'];
                var InvestorId1 = _this.route.snapshot.params['InvestorId'] || _this.route.snapshot.params['investorId'];
                _this.router.navigate(['investor-tab/1235/' + ServiceApplicationId1 + '/' + InvestorId1 + '/' + _this.isNew]);
            }
            if (investor != null) {
                _this.router.navigate(['investor-tab/1235/' + investor.ServiceApplicationId + '/' + investor.InvestorId + '/' + _this.isNew]);
                _this.saveCompleted(investor);
                localStorage.setItem('InvestorId', investor.InvestorId.toString());
            }
        }, function (err) { return _this.handleError(err); });
    };
    EditInvestorComponent.prototype.getRegistrationCatagoryData = function (Tin) {
        var _this = this;
        this.registrationCatagoryService.getRegistrationCatagoriesByTin(Tin)
            .subscribe(function (result) {
            _this.registrationCatagoryList = result;
            _this.investorForm.get('cMajorDivision').patchValue(result);
        }, function (error) { return _this.toastr.error(error); });
    };
    EditInvestorComponent.prototype.saveCompleted = function (investor) {
        if (investor) {
            this.investor = investor;
        }
        else {
            this.toastr.success('Error. Record was not saved!');
            return;
        }
        this.loadingIndicator = false;
        // clear the dummy values uaed to avoid conditional validation issues
        if (this.isCompany) {
            this.investorForm.get('cFirstNameEng').patchValue('');
            this.investorForm.get('cFatherNameEng').patchValue('');
            this.investorForm.get('cGrandNameEng').patchValue('');
            this.investorForm.get('cGender').patchValue('');
        }
        this.toastr.success('Record saved successfully!');
        // if (this.accountService.getUserType()) {
        //   this.router.navigate(['investor']);
        // } else {
        //   this.router.navigate(['search-browser']);
        // }
    };
    EditInvestorComponent.prototype.handleError = function (error) {
        this.loadingIndicator = false;
        var errList = _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_6__["Utilities"].getHttpResponseMessage(error);
        if (error.status === 400) {
            this.errors = errList;
            this.toastr.error('Please fix the listed errors', 'Error');
        }
        else {
            this.errors = [];
            this.toastr.error(error.status + ':' + errList[0].toString(), 'Error');
        }
    };
    EditInvestorComponent.prototype.getEditedInvestor = function () {
        var formModel = this.investorForm.value;
        var add = this.investorForm.get('address').value;
        // // console.log(add);
        return {
            InvestorId: this.isNewInvestor ? 0 : this.investor.InvestorId,
            FirstName: this.isCompany ? formModel.cCompanyName : formModel.cFirstName,
            FatherName: this.isCompany ? '' : formModel.cFatherName,
            GrandName: this.isCompany ? '' : formModel.cGrandName,
            FirstNameEng: this.isCompany ? formModel.cCompanyNameEng : formModel.cFirstNameEng,
            FatherNameEng: this.isCompany ? '' : formModel.cFatherNameEng,
            GrandNameEng: this.isCompany ? '' : formModel.cGrandNameEng,
            Nationality: this.isCompany ? formModel.cNationalityCompany : formModel.cNationality,
            Gender: this.isCompany ? null : formModel.cGender,
            Tin: formModel.cTin,
            RegistrationDate: formModel.cRegDate,
            RegistrationNumber: formModel.cRegNumber,
            /*TradeName: formModel.cTradeName,
            TradeNameEnglish: formModel.cTradeNameEng,*/
            PaidCapital: formModel.cPaidCapital,
            SighnedCapital: formModel.cSighnedCapital,
            LegalStatus: formModel.cLegalStatus,
            IsEthiopianOrigin: formModel.cIsEthiopianOrigin,
            RegistrationCatagories: formModel.cMajorDivision,
            UserId: this.accountService.currentUser.Id,
            IsExistingCustomer: formModel.IsExistingCustomer,
            // SiteCode: this.accountService.currentUser.SiteCode,
            IsActive: true,
            IsDeleted: false,
            Title: this.isCompany ? null : formModel.Title,
            FormOfOwnership: formModel.FormOfOwnership,
            RegionId: add.RegionId,
            ZoneId: add.ZoneId,
            WoredaId: add.WoredaId,
            KebeleId: add.KebeleId,
            HouseNo: add.HouseNo,
            TeleNo: add.TeleNo,
            Pobox: add.Pobox,
            Fax: add.Fax,
            CellPhoneNo: add.CellPhoneNo,
            Email: add.Email,
            OtherAddress: add.OtherAddress,
            UserName: this.accountService.currentUser.UserName,
            AddressId: this.isNewInvestor ? 0 : this.investor.AddressId
        };
    };
    EditInvestorComponent.prototype.getKebeleByWoredaId = function (wordaId) {
        var _this = this;
        this.addressService.getKebelesByWoreda(wordaId)
            .subscribe(function (result) {
            // this.kebeles = result;
            // // console.log(result);
            _this.filteredKebeles = result;
        });
    };
    EditInvestorComponent.prototype.filterRegion = function (regionCode) {
        if (!regionCode || !this.AllowCascading) {
            return;
        }
        this.filteredKebeles = null;
        this.filteredWoredas = null;
        if (!this.zones) {
            return;
        }
        this.filteredZones = this.zones.filter(function (item) {
            return item.RegionId === regionCode;
        });
    };
    EditInvestorComponent.prototype.filterZone = function (zoneCode) {
        if (!zoneCode || !this.AllowCascading) {
            return;
        }
        this.filteredKebeles = null;
        this.filteredWoredas = this.woredas.filter(function (item) {
            return item.ZoneId === zoneCode;
        });
    };
    EditInvestorComponent.prototype.filterWoreda = function (woredaCode) {
        if (!woredaCode || !this.AllowCascading) {
            return;
        }
        this.getKebeleByWoredaId(woredaCode);
    };
    EditInvestorComponent.prototype.getInvestorTitle = function (id) {
        var _this = this;
        this.lookUpService.getLookupByParentId(id).subscribe(function (result) {
            // // console.log(result);
            _this.TitleLookup = result;
        });
    };
    EditInvestorComponent.prototype.getCountryTitle = function (id) {
        var _this = this;
        this.lookUpService.getLookupByParentId(id)
            .subscribe(function (result) {
            // // console.log(result);
            _this.countryListWithOutEthipia = result.filter(function (item) {
                return item.English !== 'ETHIOPIA';
            });
        });
    };
    EditInvestorComponent.prototype.statusChanged = function (legalS) {
        if (legalS > 1) {
            this.isCompany = true;
            this.initStaticDataOwnerShip(this.currentLang);
        }
        else {
            this.isCompany = false;
            this.formOfOwnershipList.splice(3, 1);
            // // console.log(this.formOfOwnershipList);
        }
    };
    EditInvestorComponent.prototype.onBack = function () {
        window.history.back();
    };
    Object.defineProperty(EditInvestorComponent.prototype, "firstName", {
        get: function () {
            return this.investorForm.get('cFirstName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "fatherName", {
        get: function () {
            return this.investorForm.get('cFatherName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "Title", {
        get: function () {
            return this.investorForm.get('Title');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "grandName", {
        get: function () {
            return this.investorForm.get('cGrandName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "firstNameEng", {
        get: function () {
            return this.investorForm.get('cFirstNameEng');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "fatherNameEng", {
        get: function () {
            return this.investorForm.get('cFatherNameEng');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "grandNameEng", {
        get: function () {
            return this.investorForm.get('cGrandNameEng');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "nationality", {
        get: function () {
            return this.investorForm.get('cNationality');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "gender", {
        get: function () {
            return this.investorForm.get('cGender');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "isEthiopianOrigin", {
        // get isDiaspora() {
        //   return this.investorForm.get('cIsDiaspora');
        // }
        get: function () {
            return this.investorForm.get('cIsEthiopianOrigin');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "region", {
        get: function () {
            return this.investorForm.get('RegionId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "zone", {
        get: function () {
            return this.investorForm.get('ZoneId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "woreda", {
        get: function () {
            return this.investorForm.get('WoredaId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "kebele", {
        get: function () {
            return this.investorForm.get('KebeleId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "houseNumber", {
        get: function () {
            return this.investorForm.get('HouseNo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "phoneDirect", {
        get: function () {
            return this.investorForm.get('PhoneDirect');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "CellPhoneNo", {
        get: function () {
            return this.investorForm.get('CellPhoneNo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "fax", {
        get: function () {
            return this.investorForm.get('Fax');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "pobox", {
        get: function () {
            return this.investorForm.get('POBox');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "legalStatus", {
        get: function () {
            return this.investorForm.get('cLegalStatus');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "FormOfOwnershipV", {
        get: function () {
            return this.investorForm.get('FormOfOwnership');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "isExistingCustomer", {
        get: function () {
            return this.investorForm.get('IsExistingCustomer');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "sighnedCapital", {
        /*get tradeName() {
          return this.investorForm.get('cTradeName');
        }
      
        get tradeNameEng() {
          return this.investorForm.get('cTradeNameEng');
        }*/
        get: function () {
            return this.investorForm.get('cSighnedCapital');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "paidCapital", {
        get: function () {
            return this.investorForm.get('cPaidCapital');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "regDate", {
        get: function () {
            return this.investorForm.get('cRegDate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "regNumber", {
        get: function () {
            return this.investorForm.get('cRegNumber');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "tin", {
        get: function () {
            return this.investorForm.get('cTin');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "otherAddress", {
        get: function () {
            return this.investorForm.get('OtherAddress');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "companyName", {
        get: function () {
            return this.investorForm.get('cCompanyName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "companyNameEng", {
        get: function () {
            return this.investorForm.get('cCompanyNameEng');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "nationalityCompany", {
        get: function () {
            return this.investorForm.get('cNationalityCompany');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "email", {
        get: function () {
            return this.investorForm.get('Email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "houseNo", {
        get: function () {
            return this.investorForm.get('HouseNo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "ct", {
        // another getter for easy access to form fields
        get: function () {
            return this.investorForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInvestorComponent.prototype, "floatLabels", {
        // use it as 'ct.controlName.errors.required'
        get: function () {
            return 'auto';
        },
        enumerable: true,
        configurable: true
    });
    EditInvestorComponent.prototype.ngAfterViewInit = function () {
        // this.fillAddressLookups();
    };
    EditInvestorComponent.prototype.checkCountry = function (id) {
        if (id === 19) {
            this.originFlag = false;
        }
    };
    EditInvestorComponent.prototype.onFormOfOwnershipChanged = function (id) {
        this.branch = (id === '5');
        if (this.branch) {
            this.nationalityCompany.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        }
        else {
            this.nationalityCompany.clearValidators();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", Array)
    ], EditInvestorComponent.prototype, "formOfOwnershipList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditInvestorComponent.prototype, "errors", void 0);
    EditInvestorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-investor',
            template: __webpack_require__(/*! ./investor-editor.component.html */ "./src/app/components/investor/investor-editor.component.html"),
            styles: [__webpack_require__(/*! ./investor-editor.component.scss */ "./src/app/components/investor/investor-editor.component.scss")],
            providers: [_investor_service__WEBPACK_IMPORTED_MODULE_5__["InvestorService"]],
            animations: [_custor_services_animations__WEBPACK_IMPORTED_MODULE_4__["fadeInOut"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_17__["DataSharingService"],
            _Services_look_up_service__WEBPACK_IMPORTED_MODULE_16__["LookUpService"],
            _Services_Address_address_service__WEBPACK_IMPORTED_MODULE_15__["AddressService"],
            _Services_Registration_RegistrationCatagory_service__WEBPACK_IMPORTED_MODULE_21__["RegistrationCatagoryService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_13__["AccountService"],
            _custor_services_security_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
            _investor_service__WEBPACK_IMPORTED_MODULE_5__["InvestorService"],
            _Services_Catagory_Catagory_service__WEBPACK_IMPORTED_MODULE_20__["CatagoryService"],
            _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_10__["ConfigurationService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EditInvestorComponent);
    return EditInvestorComponent;
}());



/***/ }),

/***/ "./src/app/components/investor/investor-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/investor/investor-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header title=\"customer-profile\" icon=\"people\"></app-page-header>\r\n\r\n<mat-card style=\"margin: 20px;\" *ngIf=\"investorShow\" class=\"dashboard-card\">\r\n\r\n  <mat-card-content class=\"dashboard-card-content\">\r\n\r\n    <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>\r\n\r\n    <mat-table #table [dataSource]=\"dataSource\">\r\n\r\n      <ng-container matColumnDef=\"FirstNameEng\">\r\n        <mat-header-cell *matHeaderCellDef>Name</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let investors\">\r\n          {{investors?.InvestorNameEng}}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"FatherNameEng\">\r\n        <mat-header-cell *matHeaderCellDef>የኢንቨስተሩ ስም</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let investors\">\r\n          {{investors?.InvestorName}}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"RegistrationNumber\">\r\n        <mat-header-cell *matHeaderCellDef>License No</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let investors\">\r\n          {{investors?.RegistrationNumber}}\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n\r\n      <ng-container matColumnDef=\"RegistrationDate\">\r\n        <mat-header-cell *matHeaderCellDef>Registration Date</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let investors\">\r\n          {{investors.RegistrationDate | date}}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Tin\">\r\n        <mat-header-cell *matHeaderCellDef>Tin</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let investors\">\r\n          {{investors?.Tin}}\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n\r\n      <ng-container matColumnDef=\"actions\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"25%\">\r\n          <button mat-button color=\"primary\" (click)=\"editInvestor()\">\r\n            <mat-icon class=\"mat-button-icon\">add</mat-icon>\r\n            {{'common.commands.Add' | translate}}\r\n          </button>\r\n        </mat-header-cell>\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"28%\">\r\n        </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let investor\" fxFlex=\"28%\">\r\n          <a class=\"margin-10 a-link pointer\" matTooltip=\"Click her to for detail\"\r\n             (click)=\"select(investor.InvestorId)\">\r\n            <mat-icon color=\"primary\">visibility</mat-icon>\r\n            <span>My Project</span>\r\n          </a>\r\n          <a class=\"a-link\" (click)=\"editInvestor(investor)\" type=\"button\">\r\n            <mat-icon>edit</mat-icon>\r\n            <span>edit</span>\r\n          </a>\r\n          <a class=\"a-link\" (click)=\"confirmDelete(investor)\">\r\n            <mat-icon color=\"warn\">delete</mat-icon>\r\n            <span>Delete</span>\r\n          </a>\r\n        </mat-cell>\r\n      </ng-container>\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\">\r\n      </mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card class=\"margin-2\" *ngIf=\"!investorShow\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\">\r\n\r\n    <div fxFlex=\"80\">\r\n      <!--<h5> Investor Name : {{invName}}</h5>-->\r\n      <!--<h5 style=\"text-transform: capitalize;\"> {{invName}}</h5>-->\r\n    </div>\r\n    <div fxFlex=\"18\">\r\n      <button class=\"margin-10 custom-button\"\r\n              matTooltip=\"Click her to add project\"\r\n              (click)=\"addProject()\">\r\n\r\n        <span>Add manger</span>\r\n      </button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <mat-divider></mat-divider>\r\n  <mat-card-content>\r\n    <div fxFlex=\"100%\">\r\n\r\n      <div class=\"spinner-container\" *ngIf=\"loadingIndicator\">\r\n        <mat-progress-bar mode=\"query\"></mat-progress-bar>\r\n      </div>\r\n      <mat-table #table [dataSource]=\"dataSource2\">\r\n        <ng-container matColumnDef=\"No\">\r\n          <mat-header-cell [fxFlex]=\"6\" *matHeaderCellDef>No</mat-header-cell>\r\n          <mat-cell [fxFlex]=\"6\" *matCellDef=\"let projectList;let i=index;\">\r\n            {{i+1}}\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"ProjectName\">\r\n          <mat-header-cell *matHeaderCellDef>Project Name</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let projectList\">\r\n            {{projectList?.ProjectName}}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"ProjectDescription\">\r\n          <mat-header-cell *matHeaderCellDef>Project Description</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let projectList\">\r\n\r\n            {{(projectList.ProjectDescription!=null) ? (projectList.ProjectDescription |\r\n            filterPipe:10): ''}}\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"startDate\">\r\n          <mat-header-cell *matHeaderCellDef> Start Date</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let projectList\">\r\n            {{projectList?.StartDate | date}}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"InvestmentActivity\">\r\n          <mat-header-cell *matHeaderCellDef> Investment Activity</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let projectList\">\r\n            {{projectList?.InvestmentActivity?.DescriptionEnglish}}\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"status\">\r\n          <mat-header-cell *matHeaderCellDef>Status</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let projectList\">\r\n            <a style=\"color: #00bcd4;\" *ngIf=\"!projectList?.IsActive;\">\r\n              Pre-Implementation\r\n              <!--<mat-icon color=\"primary\" class=\"mat-18\">navigate_next</mat-icon>-->\r\n            </a>\r\n\r\n\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"Action\">\r\n\r\n          <mat-header-cell [fxFlex]=\"30\" *matHeaderCellDef>Action\r\n\r\n          </mat-header-cell>\r\n\r\n          <mat-cell [fxFlex]=\"30\" *matCellDef=\"let projectList; let i=index\">\r\n            <div>\r\n              <!--<a class=\"a-link  pointer\" mat-min-fab matTooltip=\"Click here to edit the project\"-->\r\n              <!--(click)=\"editProject(projectList?.ProjectId,-->\r\n              <!--projectList?.ServiceApplicationId,-->\r\n              <!--projectList.ServiceId)\">-->\r\n              <!--<mat-icon color=\"primary\" class=\"mat-18\">edit</mat-icon>-->\r\n              <!--Edit-->\r\n              <!--</a>-->\r\n              <!--<a class=\" a-link pointer\" mat&#45;&#45;mini-fab color=\"warn\"-->\r\n              <!--matTooltip=\"Click here to delete the project\"-->\r\n              <!--(click)=\"deleteProject(projectList?.ProjectId)\">-->\r\n              <!--<mat-icon color=\"warn\">delete</mat-icon>-->\r\n              <!--Delete-->\r\n              <!--</a>-->\r\n              <a class=\" a-link pointer\" color=\"accent\" matTooltip=\"Click here for detail of the project\"\r\n                 (click)=\"projectDetail(projectList?.ProjectId)\">\r\n                <mat-icon color=\"primary\">visibility</mat-icon>\r\n                View\r\n              </a>\r\n\r\n            </div>\r\n          </mat-cell>\r\n        </ng-container>\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumnsProject\">\r\n        </mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumnsProject;\">\r\n        </mat-row>\r\n      </mat-table>\r\n\r\n      <mat-paginator\r\n\r\n        #paginator\r\n        [pageSize]=\"4\"\r\n        [pageSizeOptions]=\"[5, 10, 20]\">\r\n      </mat-paginator>\r\n      <mat-divider></mat-divider>\r\n      <mat-card-actions class=\"margin-10\">\r\n        <button mat-raised-button=\"\" (click)=\"back()\" color=\"primary\">\r\n          <mat-icon class=\"mat-18\">arrow_back</mat-icon>\r\n          Back\r\n        </button>\r\n      </mat-card-actions>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/investor/investor-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/investor/investor-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar-icon {\n  padding: 0 14px; }\n\n.toolbar-spacer {\n  flex: 1 1 auto; }\n\n.toollbar-color {\n  color: green; }\n\nmat-card {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  display: block;\n  position: relative;\n  padding: 0px !important;\n  border-radius: 2px; }\n"

/***/ }),

/***/ "./src/app/components/investor/investor-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/investor/investor-list.component.ts ***!
  \****************************************************************/
/*! exports provided: InvestorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestorListComponent", function() { return InvestorListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _investor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./investor.service */ "./src/app/components/investor/investor.service.ts");
/* harmony import */ var _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @custor/helpers/utilities */ "./src/@custor/helpers/utilities.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _custor_services_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @custor/services/animations */ "./src/@custor/services/animations.ts");
/* harmony import */ var _custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @custor/components/confirm-dialog/confirm-dialog.component */ "./src/@custor/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _custor_services_security_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @custor/services/security/auth.service */ "./src/@custor/services/security/auth.service.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _model_security_permission_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../model/security/permission.model */ "./src/app/model/security/permission.model.ts");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Services/project-profile.service */ "./src/app/Services/project-profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// tslint:disable-next-line:max-line-length


// import { SharedModule } from "../../@custor/modules/shared.module";





// import {ErrorMessage} from '../../../@custor/services/errMessageService';






var InvestorListComponent = /** @class */ (function () {
    function InvestorListComponent(http, invService, projectService, accountService, authService, dataSharing, toastr, dialog, router, route) {
        this.http = http;
        this.invService = invService;
        this.projectService = projectService;
        this.accountService = accountService;
        this.authService = authService;
        this.dataSharing = dataSharing;
        this.toastr = toastr;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.displayedColumns = ['FirstNameEng', 'FatherNameEng', 'RegistrationNumber', 'RegistrationDate', 'Tin', 'actions'];
        this.displayedColumnsProject = ['No', 'ProjectName', 'startDate', 'InvestmentActivity', 'status', 'Action'];
        this.investorShow = true;
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    InvestorListComponent.prototype.ngOnInit = function () {
        if (this.accountService.getUserType()) {
            // console.log(this.accountService.currentUser.Tin);
            this.isInvestor = this.accountService.getUserType();
            if (this.accountService.currentUser.Tin !== 'null' && this.accountService.currentUser.Tin !== '') {
                this.getInvestorsByUserId();
            }
            else {
                this.getInvestorsByUserId();
            }
        }
        else {
            this.getInvestorsByUserId();
        }
    };
    InvestorListComponent.prototype.addProject = function () {
        var _this = this;
        localStorage.setItem('ServiceId', '13');
        setTimeout(function () { return _this.dataSharing.steeperIndex.next(1); }, 0);
        setTimeout(function () { return _this.dataSharing.isNew.next(true); }, 0);
        this.router.navigate(['pro/', 0]);
    };
    InvestorListComponent.prototype.getInvestorsByTin = function () {
        var _this = this;
        // if (!this.canViewInvestors) {
        //     this.router.navigate(['denied']);
        // }
        this.loadingIndicator = true;
        this.invService.getInvestorByTIN(this.accountService.currentUser.Tin)
            .subscribe(function (result) {
            // console.log(result);
            _this.investors = result;
            if (!_this.investors) {
                _this.toastr.error('No records were found to list', 'Error', {
                    closeButton: true,
                });
            }
            else {
                _this.dataSource.data = _this.investors;
            }
        }, function (error) {
            _this.toastr.error("Error: \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_5__["Utilities"].getHttpResponseMessage(error) + "\"");
        });
        this.loadingIndicator = false;
    };
    InvestorListComponent.prototype.getInvestorsByUserId = function () {
        var _this = this;
        // if (!this.canViewInvestors) {
        //     this.router.navigate(['denied']);
        // }
        this.loadingIndicator = true;
        this.invService.getInvestorByUserId(this.accountService.currentUser.Id)
            .subscribe(function (result) {
            // console.log(result);
            _this.investors = result;
            if (!_this.investors) {
                _this.toastr.error('No records were found to list', 'Error', {
                    closeButton: true,
                });
            }
            else {
                _this.dataSource.data = _this.investors;
            }
        }, function (error) {
            _this.toastr.error("Error: \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_5__["Utilities"].getHttpResponseMessage(error) + "\"");
        });
        this.loadingIndicator = false;
    };
    Object.defineProperty(InvestorListComponent.prototype, "canViewInvestors", {
        get: function () {
            return this.accountService.userHasPermission(_model_security_permission_model__WEBPACK_IMPORTED_MODULE_11__["Permission"].viewInvestorsPermission);
        },
        enumerable: true,
        configurable: true
    });
    InvestorListComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    InvestorListComponent.prototype.editInvestor = function (investor) {
        // console.log(this.investors);
        if (investor) {
            this.router.navigate(['/investor-tab/1235/' + investor.InvestorId + '/' + 0 + '/' + 0], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['/investor-tab/1235/0/0/0']);
        }
    };
    InvestorListComponent.prototype.confirmDelete = function (investor) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__["AngConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            _this.loadingIndicator = true;
            if (result) {
                _this.invService.deleteInvestor(investor)
                    .subscribe(function (results) {
                    _this.loadingIndicator = false;
                    _this.dataSource.data = _this.dataSource.data.filter(function (item) { return item !== investor; });
                }, function (error) {
                    // tslint:disable-next-line:max-line-length
                    _this.toastr.error("An error occured whilst deleting the investor.\r\nError: \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_5__["Utilities"].getHttpResponseMessage(error) + "\"", 'Delete Error');
                });
            }
            _this.loadingIndicator = false;
        });
    };
    InvestorListComponent.prototype.select = function (InvestorId) {
        var _this = this;
        localStorage.setItem('InvestorId', InvestorId);
        this.loadingIndicator = true;
        this.projectService.getProjectByInvestorId(InvestorId)
            .subscribe(function (result) {
            _this.projectList = result;
            // console.log(result);
            _this.title = 'ProjectDetail';
            _this.investorShow = false;
            if (!_this.projectList) {
                _this.loadingIndicator = false;
                _this.toastr.error('No records were found to list', 'Error', {
                    closeButton: true,
                });
            }
            else {
                _this.loadingIndicator = false;
                _this.dataSource2 = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](result);
                // console.log(result);
                _this.dataSource2.paginator = _this.paginator;
            }
        }, function (error) {
            _this.toastr.error("Error: \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_5__["Utilities"].getHttpResponseMessage(error) + "\"");
        });
        this.loadingIndicator = false;
    };
    InvestorListComponent.prototype.editProject = function (projectId, serviceApplicationId, serviceId) {
        var _this = this;
        localStorage.setItem('ServiceApplicationId', serviceApplicationId);
        localStorage.setItem('ServiceId', serviceId);
        // localStorage.setItem('title', title);
        setTimeout(function () { return _this.dataSharing.steeperIndex.next(1); }, 0);
        setTimeout(function () { return _this.dataSharing.isNew.next(true); }, 0);
        this.router.navigate(['pro/', projectId]);
    };
    InvestorListComponent.prototype.projectDetail = function (id) {
        // console.log(this.router.url);
        this.router.navigate(['/service-detail', id]);
    };
    InvestorListComponent.prototype.deleteProject = function (id) {
        // console.log(id);
        var response = confirm('Do you want to Delete this Project ?');
        if (response === true) {
            this.projectService.delete(id)
                .subscribe(function () {
                // this.getAllServiceApplication();
            });
            return true;
        }
        else {
            return false;
        }
    };
    InvestorListComponent.prototype.back = function () {
        this.title = 'search';
        this.investorShow = true;
        this.getInvestorsByUserId();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], InvestorListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], InvestorListComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], InvestorListComponent.prototype, "paginator2", void 0);
    InvestorListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-investor-list',
            template: __webpack_require__(/*! ./investor-list.component.html */ "./src/app/components/investor/investor-list.component.html"),
            styles: [__webpack_require__(/*! ./investor-list.component.scss */ "./src/app/components/investor/investor-list.component.scss")],
            animations: [_custor_services_animations__WEBPACK_IMPORTED_MODULE_7__["fadeInOut"]]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _investor_service__WEBPACK_IMPORTED_MODULE_4__["InvestorService"],
            _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_13__["ProjectProfileService"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_10__["AccountService"],
            _custor_services_security_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_12__["DataSharingService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], InvestorListComponent);
    return InvestorListComponent;
}());



/***/ }),

/***/ "./src/app/components/investor/investor-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/investor/investor-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: InvestorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestorRoutingModule", function() { return InvestorRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _investor_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./investor-editor.component */ "./src/app/components/investor/investor-editor.component.ts");
/* harmony import */ var _investor_investor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./investor/investor.component */ "./src/app/components/investor/investor/investor.component.ts");
/* harmony import */ var _investor_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./investor-list.component */ "./src/app/components/investor/investor-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var route = [
    {
        path: '', component: _investor_investor_component__WEBPACK_IMPORTED_MODULE_3__["InvestorComponent"], children: [
            { path: '', component: _investor_list_component__WEBPACK_IMPORTED_MODULE_4__["InvestorListComponent"] },
            { path: 'list', component: _investor_list_component__WEBPACK_IMPORTED_MODULE_4__["InvestorListComponent"] },
            { path: 'edit/:InvestorId', component: _investor_editor_component__WEBPACK_IMPORTED_MODULE_2__["EditInvestorComponent"] },
        ]
    }
];
var InvestorRoutingModule = /** @class */ (function () {
    function InvestorRoutingModule() {
    }
    InvestorRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], InvestorRoutingModule);
    return InvestorRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/investor/investor.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/investor/investor.module.ts ***!
  \********************************************************/
/*! exports provided: InvestorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestorModule", function() { return InvestorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _investor_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./investor-list.component */ "./src/app/components/investor/investor-list.component.ts");
/* harmony import */ var _investor_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./investor-editor.component */ "./src/app/components/investor/investor-editor.component.ts");
/* harmony import */ var _investor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./investor-routing.module */ "./src/app/components/investor/investor-routing.module.ts");
/* harmony import */ var _investor_investor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./investor/investor.component */ "./src/app/components/investor/investor/investor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var InvestorModule = /** @class */ (function () {
    function InvestorModule() {
    }
    InvestorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _investor_routing_module__WEBPACK_IMPORTED_MODULE_5__["InvestorRoutingModule"]
            ],
            declarations: [
                _investor_list_component__WEBPACK_IMPORTED_MODULE_3__["InvestorListComponent"],
                _investor_editor_component__WEBPACK_IMPORTED_MODULE_4__["EditInvestorComponent"],
                _investor_investor_component__WEBPACK_IMPORTED_MODULE_6__["InvestorComponent"]
            ],
            exports: [
                _investor_list_component__WEBPACK_IMPORTED_MODULE_3__["InvestorListComponent"],
                _investor_editor_component__WEBPACK_IMPORTED_MODULE_4__["EditInvestorComponent"],
                _investor_investor_component__WEBPACK_IMPORTED_MODULE_6__["InvestorComponent"]
            ]
        })
    ], InvestorModule);
    return InvestorModule;
}());



/***/ }),

/***/ "./src/app/components/investor/investor/investor.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/investor/investor/investor.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/investor/investor/investor.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/investor/investor/investor.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/investor/investor/investor.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/investor/investor/investor.component.ts ***!
  \********************************************************************/
/*! exports provided: InvestorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestorComponent", function() { return InvestorComponent; });
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

var InvestorComponent = /** @class */ (function () {
    function InvestorComponent() {
    }
    InvestorComponent.prototype.ngOnInit = function () {
    };
    InvestorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-investor',
            template: __webpack_require__(/*! ./investor.component.html */ "./src/app/components/investor/investor/investor.component.html"),
            styles: [__webpack_require__(/*! ./investor.component.scss */ "./src/app/components/investor/investor/investor.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InvestorComponent);
    return InvestorComponent;
}());



/***/ }),

/***/ "./src/app/model/EnumModel.ts":
/*!************************************!*\
  !*** ./src/app/model/EnumModel.ts ***!
  \************************************/
/*! exports provided: FormOfOwnershipModel, CancellationReasonModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormOfOwnershipModel", function() { return FormOfOwnershipModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancellationReasonModel", function() { return CancellationReasonModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormOfOwnershipModel = /** @class */ (function () {
    function FormOfOwnershipModel() {
    }
    FormOfOwnershipModel = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], FormOfOwnershipModel);
    return FormOfOwnershipModel;
}());

var CancellationReasonModel = /** @class */ (function () {
    function CancellationReasonModel() {
    }
    CancellationReasonModel = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CancellationReasonModel);
    return CancellationReasonModel;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-business-business-tab-business-tab-module~app-components-investor-investor-module~app~b217e1a0.js.map