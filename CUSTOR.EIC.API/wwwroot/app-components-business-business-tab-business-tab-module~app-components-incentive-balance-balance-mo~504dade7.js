(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-business-business-tab-business-tab-module~app-components-incentive-balance-balance-mo~504dade7"],{

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



/***/ }),

/***/ "./src/app/components/incentive/tax-exemption/tax-exemption.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/incentive/tax-exemption/tax-exemption.service.ts ***!
  \*****************************************************************************/
/*! exports provided: TaxExemptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxExemptionService", function() { return TaxExemptionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config/appconfig */ "./src/app/config/appconfig.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TaxExemptionService = /** @class */ (function () {
    function TaxExemptionService(httpClient, appConfig, config, errMsg) {
        this.httpClient = httpClient;
        this.appConfig = appConfig;
        this.config = config;
        this.errMsg = errMsg;
        this.taxExemptionList = [];
    }
    TaxExemptionService.prototype.getTaxExemptionList = function (ProjectId) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('taxexemptions', ProjectId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (taxExemptionList) { return _this.taxExemptionList = taxExemptionList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    TaxExemptionService.prototype.getTaxExemptionYear = function (ProjectId) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('taxexemptionyear', ProjectId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (taxExemptionList) { return _this.taxExemptionList = taxExemptionList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    TaxExemptionService.prototype.getTaxExemption = function (id) {
        return this.httpClient.get(this.appConfig.urls.url('taxexemption') + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    // getTaxExemption(id): Observable<TaxExemptionModel> {
    //   return this.httpClient.get<TaxExemptionModel>(this.config.urls.url('taxExemption', id)).pipe(
    //     map(taxExemptiondata => {
    //       this.taxExemptionModel = taxExemptiondata;
    //       return this.taxExemptionModel;
    //     }),
    //     catchError(this.errMsg.parseObservableResponseError));
    // }
    TaxExemptionService.prototype.saveTaxExemption = function (taxExemption) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('taxexemption'), taxExemption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (TaxExemptionItem) {
            _this.taxExemptionModel = TaxExemptionItem;
            // console.log(this.taxExemptionModel);
            return _this.taxExemptionModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    TaxExemptionService.prototype.deleteTaxExemption = function (id) {
        return this.httpClient.delete(this.config.urls.url('taxexemption', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parsePromiseResponseError));
    };
    TaxExemptionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_4__["AppConfiguration"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_4__["AppConfiguration"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"]])
    ], TaxExemptionService);
    return TaxExemptionService;
}());



/***/ }),

/***/ "./src/app/components/letter-template/lettertepmlate.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/letter-template/lettertepmlate.service.ts ***!
  \**********************************************************************/
/*! exports provided: LettertepmlateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LettertepmlateService", function() { return LettertepmlateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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





var LettertepmlateService = /** @class */ (function () {
    function LettertepmlateService(httpClient, appConfig, config, errMsg) {
        this.httpClient = httpClient;
        this.appConfig = appConfig;
        this.config = config;
        this.errMsg = errMsg;
        this.letterTemplateList = [];
    }
    LettertepmlateService.prototype.getLetterTemplateList = function () {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('letterTemplates')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (letterTemplateList) { return _this.letterTemplateList = letterTemplateList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    LettertepmlateService.prototype.getletterTemplate = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('letterTemplate', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (letterTemplatedata) {
            _this.LetterTemplateModel = letterTemplatedata;
            return _this.LetterTemplateModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    LettertepmlateService.prototype.saveletterTemplate = function (data) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('letterTemplate'), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (letterTemplate) {
            _this.LetterTemplateModel = letterTemplate;
            // console.log(this.LetterTemplateModel);
            return _this.LetterTemplateModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    LettertepmlateService.prototype.deleteletterTemplate = function (id) {
        return this.httpClient.delete(this.config.urls.url('letterTemplate', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parsePromiseResponseError));
    };
    LettertepmlateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_4__["AppConfiguration"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_4__["AppConfiguration"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"]])
    ], LettertepmlateService);
    return LettertepmlateService;
}());



/***/ }),

/***/ "./src/app/components/project-profile/letter/letter-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/project-profile/letter/letter-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: LetterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterRoutingModule", function() { return LetterRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _letter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./letter.component */ "./src/app/components/project-profile/letter/letter.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _letter_component__WEBPACK_IMPORTED_MODULE_1__["LetterComponent"] }
];
var LetterRoutingModule = /** @class */ (function () {
    function LetterRoutingModule() {
    }
    LetterRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], LetterRoutingModule);
    return LetterRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/project-profile/letter/letter.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/project-profile/letter/letter.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"letterForm\" novalidate>\r\n  <mat-card class=\"margin-2 margin-top-20\">\r\n\r\n\r\n    <div fxFlex=\"25\" style=\"float: right;\">\r\n      <div fxFlex=\"25\" style=\"float: right;\">\r\n        <span *ngIf=\"ShowSave\">\r\n        <button class=\"custom-button \" (click)=\"onSubmit()\">Save</button>\r\n        <mat-divider></mat-divider>\r\n          </span>\r\n      </div>\r\n      <span *ngIf=\"isForDetails\">\r\n      <button class=\"custom-button\" *ngIf=\"enableButtonGenerate\" (click)=\"generatePDF()\">Generate Letter</button>\r\n        </span>\r\n      <mat-divider></mat-divider>\r\n    </div>\r\n\r\n    <div fxLayout.xs=\"row wrap\" fxLayoutAlign.xs=\"start center\" fxLayoutGap=\"2em\">\r\n      <div class=\"block\" fxLayoutGap=\"2em\">\r\n        <mat-form-field style=\"width: 150px\">\r\n          <mat-label>Letter Type</mat-label>\r\n          <mat-select formControlName=\"LetterType\" style=\"font-family: Calibri\" type=\"text\" [compareWith]=\"compareIds\"\r\n                      (selectionChange)=\"SetControls($event.value)\"\r\n                      required>\r\n            <option value=\"0\">--Select--</option>\r\n            <mat-option *ngFor=\"let LetterType of Lookups\" [value]=\"LetterType.LookupId\">\r\n              <span>{{LetterType.English}}</span>\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <span *ngIf=\"revenueBranchu\">\r\n        <mat-form-field fxFlex=\"40\">\r\n          <mat-label>Revenue Branch</mat-label>\r\n          <mat-select formControlName=\"RevenueBranch\" style=\"font-family: Calibri\" type=\"text\"\r\n                      [compareWith]=\"compareIds\" required>\r\n            <option value=\"0\">--Select--</option>\r\n            <mat-option *ngFor=\"let revenuebranch of Lookuprevenues\" [value]=\"revenuebranch.Amharic\">\r\n              <span>{{revenuebranch.Amharic}}</span>\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n          </span>\r\n        <mat-form-field *ngIf=\"RequestedDate\">\r\n          <input placeholder=\"Request Date * :\" required\r\n                 formControlName=\"RequestDate\"\r\n                 matInput\r\n                 [matDatepicker]=\"RequestDate\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"RequestDate\"></mat-datepicker-toggle>\r\n          <mat-datepicker #RequestDate>\r\n          </mat-datepicker>\r\n        </mat-form-field>\r\n        <span *ngIf=\"attachment\">\r\n        <mat-form-field [fxFlex]=\"20\">\r\n          <mat-label>Attachment</mat-label>\r\n          <input type=\"text\" matInput required\r\n                 formControlName=\"Attachment\">\r\n          <mat-error *ngIf=\"Attachment.hasError('pattern')\">\r\n            Only neumbric charcters are allowed!\r\n          </mat-error>\r\n          <mat-error *ngIf=\"!Attachment.hasError('maxlength')\">\r\n            Maximum charcters length is 2!\r\n          </mat-error>\r\n        </mat-form-field>\r\n        </span>\r\n        <span *ngIf=\"inoviceNo\">\r\n        <mat-form-field [fxFlex]=\"20\">\r\n          <mat-label>Invoice No</mat-label>\r\n          <input type=\"text\" matInput required\r\n                 formControlName=\"InvoiceNo\">\r\n        </mat-form-field>\r\n          </span>\r\n        <span *ngIf=\"categoryCode\">\r\n        <mat-form-field [fxFlex]=\"20\">\r\n          <mat-label>Category Code</mat-label>\r\n          <input type=\"text\" matInput required\r\n                 formControlName=\"CategoryCode\">\r\n          <!--<mat-error *ngIf=\"CategoryCode.hasError('pattern')\">-->\r\n          <!--Only neumbric charcters are allowed!-->\r\n          <!--</mat-error>-->\r\n          <!--<mat-error *ngIf=\"!CategoryCode.hasError('maxlength')\">-->\r\n          <!--Maximum charcters length is 10!-->\r\n          <!--</mat-error>-->\r\n        </mat-form-field>\r\n          </span>\r\n\r\n        <span *ngIf=\"chassisNo\">\r\n        <mat-form-field [fxFlex]=\"20\">\r\n          <mat-label>Chassis No</mat-label>\r\n          <input type=\"text\" matInput required\r\n                 formControlName=\"ChassisNo\">\r\n        </mat-form-field>\r\n          </span>\r\n      </div>\r\n\r\n    </div>\r\n    <editor id=\"letterContent\"\r\n            apiKey=\"4yzxfc219romk1dtk7h8c9q8zci4aj73ls684uxob669uvo4\"\r\n            class=\"full-width\"\r\n            formControlName=\"LetterContent\"\r\n            [init]=\"{plugins: 'print',\r\n            height : 600,\r\n            theme: 'modern',\r\ntoolbar_items_size: 'small'}\">\r\n\r\n    </editor>\r\n\r\n  </mat-card>\r\n\r\n</form>\r\n<mat-card class=\"margin-2 padding-0\" style=\"width: 920px\">\r\n  <mat-card-header>\r\n    <mat-card-subtitle class=\"sub-title\">List of Letters\r\n    </mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <div class=\"spinner-container\" *ngIf=\"loading \">\r\n      <mat-progress-bar mode=\"query\"></mat-progress-bar>\r\n    </div>\r\n    <mat-table #table [dataSource]=\"dataSource\">\r\n      <ng-container matColumnDef=\"LetterType\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"35\">Letter Type</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let LetterModels\" fxFlex=\"35\">\r\n          {{LetterModels.LetterType | lookupPipe : 1}}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"RequestDate\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"25\">Request Date</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let LetterModels\" fxFlex=\"25\">\r\n          {{LetterModels.RequestDate | date:'MM/dd/yyyy'}}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Action\">\r\n        <mat-header-cell fxFlex=\"18\" *matHeaderCellDef>Action</mat-header-cell>\r\n        <mat-cell fxFlex=\"18\" *matCellDef=\"let LetterModels;let i=index;\">\r\n          <div>\r\n            <a class=\"pointer\" mat-min-fab matTooltip=\"Click here to edit the product\"\r\n               (click)=\"onEditLetter(i)\">\r\n              <mat-icon color=\"primary\" class=\"mat-18\">edit</mat-icon>\r\n              Edit\r\n            </a>\r\n            <a class=\"pointer\" mat--mini-fab color=\"warn\" matTooltip=\"Click here to delete the product\"\r\n               (click)=\"deleteLetter(i,LetterModels.LetterId)\">\r\n              <mat-icon color=\"warn\">delete</mat-icon>\r\n              Delete\r\n            </a>\r\n          </div>\r\n        </mat-cell>\r\n      </ng-container>\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\">\r\n      </mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/letter/letter.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/project-profile/letter/letter.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#notices {\n  margin-top: 10px; }\n\n.clearfix:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.l-container {\n  background-color: white !important;\n  border: 1px solid #f1f1f1;\n  padding: 42px 100px 50px 94px;\n  margin: 10px 20px 20px 20px;\n  color: #000000 !important;\n  font-family: Nyala !important;\n  font-size: 15px !important;\n  font-weight: normal !important;\n  font-style: normal !important; }\n"

/***/ }),

/***/ "./src/app/components/project-profile/letter/letter.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/project-profile/letter/letter.component.ts ***!
  \***********************************************************************/
/*! exports provided: LetterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterComponent", function() { return LetterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _letter_template_lettertepmlate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../letter-template/lettertepmlate.service */ "./src/app/components/letter-template/lettertepmlate.service.ts");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Services/project-profile.service */ "./src/app/Services/project-profile.service.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _letter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./letter.service */ "./src/app/components/project-profile/letter/letter.service.ts");
/* harmony import */ var _custor_helpers_compare__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @custor/helpers/compare */ "./src/@custor/helpers/compare.ts");
/* harmony import */ var _Services_look_up_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../Services/look-up.service */ "./src/app/Services/look-up.service.ts");
/* harmony import */ var _incentive_incentive_request_incentive_request_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../incentive/incentive-request/incentive-request.service */ "./src/app/components/incentive/incentive-request/incentive-request.service.ts");
/* harmony import */ var _incentive_tax_exemption_tax_exemption_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../incentive/tax-exemption/tax-exemption.service */ "./src/app/components/incentive/tax-exemption/tax-exemption.service.ts");
/* harmony import */ var _Services_Address_address_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../Services/Address/address.service */ "./src/app/Services/Address/address.service.ts");
/* harmony import */ var _custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @custor/components/confirm-dialog/confirm-dialog.component */ "./src/@custor/components/confirm-dialog/confirm-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var LetterComponent = /** @class */ (function () {
    function LetterComponent(lettertepmlateService, letterService, projectProfileService, incentiveRequestService, taxExemptionService, addressService, config, activatedRoute, router, route, http, snackbar, toastr, dialog, errMsg, lookUpsService, fb) {
        this.lettertepmlateService = lettertepmlateService;
        this.letterService = letterService;
        this.projectProfileService = projectProfileService;
        this.incentiveRequestService = incentiveRequestService;
        this.taxExemptionService = taxExemptionService;
        this.addressService = addressService;
        this.config = config;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.route = route;
        this.http = http;
        this.snackbar = snackbar;
        this.toastr = toastr;
        this.dialog = dialog;
        this.errMsg = errMsg;
        this.lookUpsService = lookUpsService;
        this.fb = fb;
        this.letterModelList = [];
        this.incentiveRequestModelList = [];
        this.content2 = '<p>some content</p>';
        this.isNewLetter = true;
        this.editMode = false;
        this.loading = false;
        this.ShowSave = false;
        this.isForDetails = true;
        this.revenueBranchu = false;
        this.RequestedDate = false;
        this.attachment = false;
        this.inoviceNo = false;
        this.categoryCode = false;
        this.chassisNo = false;
        this.enableButtonGenerate = false;
        this.displayedColumns = ['LetterType', 'RequestDate', 'Action'];
        this.letterModel = {};
        this.initForm();
    }
    Object.defineProperty(LetterComponent.prototype, "Attachment", {
        get: function () {
            return this.letterForm.get('Attachment');
        },
        enumerable: true,
        configurable: true
    });
    LetterComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.ProjectId = this.route.snapshot.params['projectId'] || this.route.snapshot.params['ProjectId'];
        if (this.route.snapshot.params['isForDetail'] == 1) {
            this.getLetter();
            this.getLookups();
            this.isForDetails = false;
        }
        else {
            this.ServiceId = this.route.snapshot.params['ServiceId'] || this.route.snapshot.params['serviceId'];
            this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'] || this.route.snapshot.params['serviceApplicationId'];
            this.getProjectDetails();
            this.getIncentiveDetails();
            //this.getLetterTempalte();
            this.getTaxExemptionDetails();
            if (this.ServiceId == '1045') {
                this.getItemLookup(2846, 100);
                this.getLetters(2846, 100);
            }
            else if (this.ServiceId == '1046' || this.ServiceId == '1047' || this.ServiceId == '1054') {
                this.getItemLookup(2845, 2847);
                this.getLetters(2845, 2847);
            }
            else if (this.ServiceId == '13') {
                this.getItemLookup(2851, 2854);
                this.getLetters(2851, 2854);
            }
            this.getReveuneLookup();
            this.getAddressData(this.ProjectId);
        }
        // else if (this.ServiceId === '1046') {
        //
        // }else if (this.ServiceId === '1047') {
        //
        // }
    };
    LetterComponent.prototype.getLetter = function () {
        var _this = this;
        this.letterService.getLetterLists(this.ProjectId)
            .subscribe(function (result) {
            if (result) {
                _this.letterModelList = result;
                // console.log(this.letterModelList);
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.letterModelList);
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    LetterComponent.prototype.getTaxExemptionDetails = function () {
        var _this = this;
        this.taxExemptionService.getTaxExemption(this.ProjectId)
            .subscribe(function (result) {
            if (result) {
                // console.log(result);
                _this.taxExemptionModel = result;
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    LetterComponent.prototype.getReveuneLookup = function () {
        var _this = this;
        this.loadingIndicator = true;
        this.lookupSub = this.lookUpsService
            .getLookupByParentId(22)
            .subscribe(function (result) {
            _this.Lookuprevenues = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    LetterComponent.prototype.getItemLookup = function (code, code1) {
        var _this = this;
        this.loadingIndicator = true;
        this.lookupSub = this.lookUpsService
            .getLookupByParentIdandCode(707, code, code1)
            .subscribe(function (result) {
            _this.Lookups = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    LetterComponent.prototype.getLookups = function () {
        var _this = this;
        this.loadingIndicator = true;
        this.lookupSub = this.lookUpsService
            .getLookupByParentId(707)
            .subscribe(function (result) {
            _this.Lookups = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    LetterComponent.prototype.getLetters = function (LetterType, LetterType1) {
        var _this = this;
        this.letterService.getLetterList(this.ProjectId, LetterType, LetterType1)
            .subscribe(function (result) {
            if (result) {
                _this.letterModelList = result;
                // console.log(this.letterModelList);
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.letterModelList);
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    LetterComponent.prototype.getIncentiveDetails = function () {
        var _this = this;
        this.incentiveRequestService.getIncentiveRequestByServiceApplicationId(this.ServiceApplicationId) //34517
            .subscribe(function (result) {
            if (result) {
                // console.log(this.incentiveRequestModelList);
                _this.incentiveRequestModelList = result;
                // console.log(result);
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    LetterComponent.prototype.getAddressData = function (parent) {
        var _this = this;
        this.addressService.getAddress(parent)
            .subscribe(function (result) {
            _this.addressList = result;
            // console.log(result);
        }, function (error) { return _this.errMsg.getError(error); });
    };
    LetterComponent.prototype.getProjectDetails = function () {
        var _this = this;
        this.projectProfileService.projectsDetailForLetter(this.ProjectId)
            .subscribe(function (result) {
            if (result) {
                _this.projectModel = result;
                console.log(result);
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    LetterComponent.prototype.SetControls = function (letterType) {
        if (!letterType) {
            return;
        }
        if (letterType === 2845) {
            this.inoviceNo = false;
            this.attachment = true;
            this.revenueBranchu = false;
            this.categoryCode = false;
            this.chassisNo = false;
        }
        else if (letterType === 2846) {
            this.inoviceNo = false;
            this.attachment = true;
            this.revenueBranchu = false;
            this.categoryCode = false;
            this.chassisNo = false;
        }
        else if (letterType === 2847) {
            this.inoviceNo = false;
            this.attachment = true;
            this.revenueBranchu = false;
            this.categoryCode = false;
            this.chassisNo = false;
        }
        this.enableButtonGenerate = true;
        this.getLetterTempalte(letterType);
    };
    LetterComponent.prototype.getLetterTempalte = function (letterType) {
        var _this = this;
        this.lettertepmlateService.getletterTemplate(letterType).subscribe(function (result) {
            if (result) {
                _this.letterTempalteModel = result;
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    LetterComponent.prototype.initForm = function () {
        this.letterForm = this.fb.group({
            LetterContent: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            LetterType: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            RevenueBranch: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            InvoiceNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            Attachment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[0-9 .]+$')])],
            CategoryCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[0-9 .]+$')])],
            RequestDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
        });
    };
    LetterComponent.prototype.compareIds = function (id1, id2) {
        var a1 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_11__["determineId"])(id1);
        var a2 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_11__["determineId"])(id2);
        return a1 === a2;
    };
    LetterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loadingIndicator = true;
        return this.letterService.saveletter(this.getEditedLetter()).subscribe(function (letterModel) {
            _this.saveCompleted(letterModel);
        }, function (err) { return _this.handleError(err); });
    };
    LetterComponent.prototype.onEditLetter = function (index) {
        this.ShowSave = true;
        this.editMode = true;
        this.letterEditIndex = index;
        this.letterModel = this.letterModelList[index];
        this.letterForm.patchValue(this.letterModel);
        this.isNewLetter = false;
    };
    LetterComponent.prototype.onClear = function () {
        this.editMode = false;
        this.letterForm.reset();
        this.isNewLetter = true;
    };
    LetterComponent.prototype.generatePDF = function () {
        this.ShowSave = true;
        this.LetterContent = this.letterTempalteModel.LetterContent.replace(/{{FullName}}/g, this.projectModel.Investor.FirstNameEng.toUpperCase() +
            ' ' + this.projectModel.Investor.FatherNameEng.toUpperCase() +
            ' ' + this.projectModel.Investor.GrandNameEng.toUpperCase());
        this.LetterContent = this.LetterContent.replace(/{{StartDate}}/g, new Date(this.projectModel.StartDate).getMonth() +
            '/' + new Date(this.projectModel.StartDate).getDay() + '/' + new Date(this.projectModel.StartDate).getFullYear());
        this.LetterContent = this.LetterContent.replace(/{{InvActivity}}/g, this.projectModel.InvestmentActivity.DescriptionEnglish.toUpperCase());
        this.LetterContent = this.LetterContent.replace(/{{InvestmentPermitNo}}/g, this.projectModel.InvestmentPermitNo);
        this.LetterContent = this.LetterContent.replace(/{{ExemptionYear}}/g, this.projectModel.IsOromiaSpecialZone ? this.projectModel.InvestmentActivity.InAddisOromiaAreas.toString() : this.projectModel.InvestmentActivity.InOtherAreas.toString());
        var formModel = this.letterForm.value;
        this.LetterContent = this.LetterContent.replace(/{{Num}}/g, formModel.Attachment);
        this.LetterContent = this.LetterContent.replace(/{{CategoryCode}}/g, this.projectModel.InvestmentActivity.Code);
        this.LetterContent = this.LetterContent.replace(/{{ChassisNo}}/g, formModel.ChassisNo);
        this.LetterContent = this.LetterContent.replace(/{{Capital}}/g, (this.projectModel.ProjectCost[0].OtherCapitalCost + this.projectModel.ProjectCost[0].EquityFinance + this.projectModel.ProjectCost[0].LoanFinance).toString());
        if (this.ServiceId == '1045') {
            this.LetterContent = this.LetterContent.replace(/{{OrgName}}/g, this.taxExemptionModel.RevenueBranchDescription);
        }
        else if (this.ServiceId == '1046') {
            // this.InoviceNo = this.incentiveRequestModelList[0].InvoiceNo;
        }
        else {
            // this.InoviceNo = this.incentiveRequestModelList[0].InvoiceNo;
        }
        this.LetterContent = this.LetterContent.replace(/{{ReqDate}}/g, new Date().toDateString());
        // this.RequestDate);
        if (this.ServiceId !== '1045' && this.ServiceId !== '13') {
            this.LetterContent = this.LetterContent.replace(/{{InvoiceNo}}/g, this.InoviceNo = this.incentiveRequestModelList[0].InvoiceNo
            //'n343en7'
            );
        }
        this.LetterContent = this.LetterContent.replace(/{{TeleNo}}/g, this.addressList.TeleNo);
        this.LetterContent = this.LetterContent.replace(/{{Region}}/g, this.addressList.Region.Description);
        this.LetterContent = this.LetterContent.replace(/{{RegionEng}}/g, this.addressList.Region.DescriptionEnglish);
        this.letterTempalteModel.LetterContent = this.LetterContent;
        this.letterForm.patchValue({
            LetterContent: this.LetterContent
        });
    };
    LetterComponent.prototype.deleteLetter = function (index, id) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_16__["AngConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            _this.loadingIndicator = true;
            if (result) {
                _this.letterService.deleteletter(id)
                    .subscribe(function () {
                    _this.notification('Deleted');
                    _this.letterModelList.splice(index, 1);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.letterModelList);
                });
            }
            _this.loadingIndicator = false;
        });
    };
    LetterComponent.prototype.notification = function (message) {
        this.loading = false;
        this.toastr.success(" Succesfully " + message + " Data.!", 'Success');
        this.snackbar.open(" Succesfully " + message + " Data.!", 'Close', {
            duration: 3000,
        });
    };
    LetterComponent.prototype.toConvertString = function (value) {
        if (value !== null) {
            return value.toString();
        }
        else {
            return value;
        }
    };
    LetterComponent.prototype.getCategoryCode = function () {
        return this.letterForm.get('CategoryCode');
    };
    LetterComponent.prototype.saveCompleted = function (letter) {
        if (letter) {
            this.letterModel = letter;
            if (this.ServiceId === '1045') {
                this.getLetters(2846, 100);
            }
            else if (this.ServiceId === '1046' || this.ServiceId === '1047' || this.ServiceId === '1054') {
                this.getLetters(2845, 2847);
            }
            else if (this.ServiceId === '13') {
                this.getLetters(2851, 2854);
            }
        }
        this.onClear();
        this.loadingIndicator = false;
        this.toastr.success('Record saved successfully!');
    };
    LetterComponent.prototype.getEditedLetter = function () {
        var formModel = this.letterForm.value;
        return {
            LetterId: this.isNewLetter ? 0 : this.letterModel.LetterId,
            LetterType: formModel.LetterType,
            LetterContent: formModel.LetterContent,
            // Attachment: formModel.Attachment,
            RequestDate: new Date(),
            ProjectId: this.ProjectId
        };
    };
    LetterComponent.prototype.handleError = function (err) {
        this.loadingIndicator = false;
        this.toastr.error(this.errMsg.getError(err));
        this.loadingIndicator = false;
    };
    LetterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-letter',
            template: __webpack_require__(/*! ./letter.component.html */ "./src/app/components/project-profile/letter/letter.component.html"),
            styles: [__webpack_require__(/*! ./letter.component.scss */ "./src/app/components/project-profile/letter/letter.component.scss")]
        }),
        __metadata("design:paramtypes", [_letter_template_lettertepmlate_service__WEBPACK_IMPORTED_MODULE_1__["LettertepmlateService"],
            _letter_service__WEBPACK_IMPORTED_MODULE_10__["LetterService"],
            _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_8__["ProjectProfileService"],
            _incentive_incentive_request_incentive_request_service__WEBPACK_IMPORTED_MODULE_13__["IncentiveRequestService"],
            _incentive_tax_exemption_tax_exemption_service__WEBPACK_IMPORTED_MODULE_14__["TaxExemptionService"],
            _Services_Address_address_service__WEBPACK_IMPORTED_MODULE_15__["AddressService"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_2__["AppConfiguration"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_9__["ErrorMessage"],
            _Services_look_up_service__WEBPACK_IMPORTED_MODULE_12__["LookUpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], LetterComponent);
    return LetterComponent;
}());



/***/ }),

/***/ "./src/app/components/project-profile/letter/letter.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/project-profile/letter/letter.module.ts ***!
  \********************************************************************/
/*! exports provided: LetterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterModule", function() { return LetterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _letter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./letter.component */ "./src/app/components/project-profile/letter/letter.component.ts");
/* harmony import */ var _letter_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./letter-routing.module */ "./src/app/components/project-profile/letter/letter-routing.module.ts");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "./node_modules/@tinymce/tinymce-angular/esm5/tinymce-tinymce-angular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LetterModule = /** @class */ (function () {
    function LetterModule() {
    }
    LetterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _letter_routing_module__WEBPACK_IMPORTED_MODULE_3__["LetterRoutingModule"],
                _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_5__["EditorModule"]
            ],
            declarations: [_letter_component__WEBPACK_IMPORTED_MODULE_2__["LetterComponent"]],
            exports: [_letter_component__WEBPACK_IMPORTED_MODULE_2__["LetterComponent"]]
        })
    ], LetterModule);
    return LetterModule;
}());



/***/ }),

/***/ "./src/app/components/project-profile/letter/letter.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/project-profile/letter/letter.service.ts ***!
  \*********************************************************************/
/*! exports provided: LetterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterService", function() { return LetterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LetterService = /** @class */ (function () {
    function LetterService(httpClient, appConfig, config, errMsg) {
        this.httpClient = httpClient;
        this.appConfig = appConfig;
        this.config = config;
        this.errMsg = errMsg;
        this.letterModelList = [];
    }
    LetterService.prototype.getLetterList = function (projectId, LetterType, LetterType1) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('letters', projectId, LetterType, LetterType1)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (letterModelList) { return _this.letterModelList = letterModelList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    LetterService.prototype.getLetterLists = function (projectId) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('lettersByProjectId', projectId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (letterModelList) { return _this.letterModelList = letterModelList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    LetterService.prototype.getletter = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('letter', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (letterModeldata) {
            _this.letterModel = letterModeldata;
            return _this.letterModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    LetterService.prototype.saveletter = function (data) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('letter'), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (letterModel) {
            _this.letterModel = letterModel;
            // // console.log(this.letterModel);
            return _this.letterModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    LetterService.prototype.deleteletter = function (id) {
        return this.httpClient.delete(this.config.urls.url('letter', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parsePromiseResponseError));
    };
    LetterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"]])
    ], LetterService);
    return LetterService;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-business-business-tab-business-tab-module~app-components-incentive-balance-balance-mo~504dade7.js.map