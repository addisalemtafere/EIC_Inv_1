(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/@custor/models/pagination.model.ts":
/*!************************************************!*\
  !*** ./src/@custor/models/pagination.model.ts ***!
  \************************************************/
/*! exports provided: PaginationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationModel", function() { return PaginationModel; });
var PaginationModel = /** @class */ (function () {
    function PaginationModel() {
        this.selectItemsPerPage = [2, 3, 4, 5, 10, 25, 100];
        this.pageSize = this.selectItemsPerPage[2];
        this.pageIndex = 1;
        this.allItemsLength = 0;
    }
    return PaginationModel;
}());



/***/ }),

/***/ "./src/@custor/services/pagination.service.ts":
/*!****************************************************!*\
  !*** ./src/@custor/services/pagination.service.ts ***!
  \****************************************************/
/*! exports provided: PaginationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_pagination_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/pagination.model */ "./src/@custor/models/pagination.model.ts");



var PaginationService = /** @class */ (function () {
    function PaginationService() {
        this.paginationModel = new _models_pagination_model__WEBPACK_IMPORTED_MODULE_2__["PaginationModel"]();
    }
    Object.defineProperty(PaginationService.prototype, "page", {
        get: function () {
            return this.paginationModel.pageIndex;
        },
        enumerable: true,
        configurable: true
    });
    PaginationService.prototype.Page = function (index) {
        this.paginationModel.pageIndex = index;
    };
    Object.defineProperty(PaginationService.prototype, "selectItemsPerPage", {
        get: function () {
            return this.paginationModel.selectItemsPerPage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationService.prototype, "pageCount", {
        get: function () {
            return this.paginationModel.pageSize;
        },
        enumerable: true,
        configurable: true
    });
    PaginationService.prototype.change = function (pageEvent) {
        this.paginationModel.pageIndex = pageEvent.pageIndex + 1;
        this.paginationModel.pageSize = pageEvent.pageSize;
        this.paginationModel.allItemsLength = pageEvent.length;
    };
    PaginationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaginationService);
    return PaginationService;
}());



/***/ }),

/***/ "./src/@custor/validation/custom/custom_validators.ts":
/*!************************************************************!*\
  !*** ./src/@custor/validation/custom/custom_validators.ts ***!
  \************************************************************/
/*! exports provided: CustomValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidators", function() { return CustomValidators; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


// setup simple regex for white listed characters
var validCharacters = /[^\s\w,.:&\/()+%'`@-]/;
// create your class that extends the angular validator class
var CustomValidators = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CustomValidators, _super);
    function CustomValidators() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // create a static method for your validation
    CustomValidators.validateCharacters = function (control) {
        // first check if the control has a value
        if (control.value && control.value.length > 0) {
            // match the control value against the regular expression
            var matches = control.value.match(validCharacters);
            // if there are matches return an object, else return null.
            return matches && matches.length ? { invalid_characters: matches } : null;
        }
        else {
            return null;
        }
    };
    CustomValidators.equityFinance = function (control) {
        // first check if the control has a value
        if (control.value && control.value.length > 0) {
            // match the control value against the regular expression
            var matches = control.value.match(validCharacters);
            // if there are matches return an object, else return null.
            return matches && matches.length ? { invalid_characters: matches } : null;
        }
        else {
            return null;
        }
    };
    CustomValidators.sumOfSourceFinanceValidator = function (control) {
        var loanFinance = control.get('LoanFinance');
        var equityFinance = control.get('EquityFinance');
        var otherSourceFinance = control.get('OtherSourceFinance');
        var total = control.get('Total');
        var sourceTotal = loanFinance.value + equityFinance.value + otherSourceFinance.value;
        // console.log(total.value);
        // console.log(sourceTotal.value);
        return total.value !== sourceTotal ? { 'sumIsNotEqual': true } : null;
    };
    return CustomValidators;
}(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]));



/***/ }),

/***/ "./src/app/Services/Sector.service.ts":
/*!********************************************!*\
  !*** ./src/app/Services/Sector.service.ts ***!
  \********************************************/
/*! exports provided: SectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectorService", function() { return SectorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");






var SectorService = /** @class */ (function () {
    function SectorService(httpClient, config, errMsg) {
        this.httpClient = httpClient;
        this.config = config;
        this.errMsg = errMsg;
    }
    SectorService.prototype.getSector = function () {
        return this.httpClient.get(this.config.urls.url('sectors')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    SectorService.prototype.getAllSubSector = function () {
        return this.httpClient.get(this.config.urls.url('subsectors')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (subSector) {
            return subSector;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    SectorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"]])
    ], SectorService);
    return SectorService;
}());



/***/ }),

/***/ "./src/app/Services/incentive/bill-of-material.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/Services/incentive/bill-of-material.service.ts ***!
  \****************************************************************/
/*! exports provided: BillOfMaterialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillOfMaterialService", function() { return BillOfMaterialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _Base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Base.service */ "./src/app/Services/Base.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var BillOfMaterialService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BillOfMaterialService, _super);
    function BillOfMaterialService(http, appConfig, errMsg) {
        var _this = _super.call(this, http, appConfig.urls.url('IncentiveBoMImportItems'), errMsg) || this;
        _this.http = http;
        _this.appConfig = appConfig;
        _this.errMsg = errMsg;
        return _this;
    }
    BillOfMaterialService.prototype.uploadDocument = function (resource) {
        return this.httpClient.post(this.appConfig.urls.url('IncentiveBoMImportItem'), resource).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BillOfMaterialService.prototype.finalForApprovalBillOfMaterial = function (id) {
        return this.httpClient.get(this.appConfig.urls.url('IncentiveBoMImportItemsFinalForApproval', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BillOfMaterialService.prototype.getBillOfMaterialByProjectId = function (id, lang) {
        return this.httpClient.get(this.appConfig.urls.url('IncentiveBoMImportItemByProjectId') + '/' + id + '/' + lang).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    // getBillOfMaterialByProjectId(id: number): Observable<IncentiveBoMRequestItemModel[]> {
    //   return this.httpClient.get<IncentiveBoMRequestItemModel>(this.appConfig.urls.url('IncentiveBoMImportItemByProjectId') + '/' + id).pipe(
    //     catchError(this.errMsg.parseObservableResponseError));
    // }
    BillOfMaterialService.prototype.getBillOfMaterialByServiceApplicationId = function (id, lang) {
        return this.httpClient.get(this.appConfig.urls.url('ServiceApplicationBillOfMaterial') + '/' + id + '/' + lang).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BillOfMaterialService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(
        //   {
        //   providedIn: 'root'
        // }
        ),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"]])
    ], BillOfMaterialService);
    return BillOfMaterialService;
}(_Base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"]));



/***/ }),

/***/ "./src/app/Services/lookup-type.service.ts":
/*!*************************************************!*\
  !*** ./src/app/Services/lookup-type.service.ts ***!
  \*************************************************/
/*! exports provided: LookupTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupTypeService", function() { return LookupTypeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _Base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Base.service */ "./src/app/Services/Base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var LookupTypeService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LookupTypeService, _super);
    function LookupTypeService(http, appConfig, errMsg) {
        var _this = _super.call(this, http, appConfig.urls.url('InvestorTitle'), errMsg) || this;
        _this.http = http;
        _this.appConfig = appConfig;
        _this.errMsg = errMsg;
        return _this;
    }
    LookupTypeService.prototype.getLookupByParentId = function () {
        return this.httpClient.get(this.appConfig.urls.url('incentivecategorylookup')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    LookupTypeService.prototype.getAllLookup = function () {
        return this.httpClient.get(this.appConfig.urls.url('lookuptype')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    LookupTypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"]])
    ], LookupTypeService);
    return LookupTypeService;
}(_Base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ }),

/***/ "./src/app/Services/site.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/site.service.ts ***!
  \******************************************/
/*! exports provided: SiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteService", function() { return SiteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _Base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Base.service */ "./src/app/Services/Base.service.ts");







var SiteService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SiteService, _super);
    function SiteService(http, appConfig, errMsg) {
        var _this = _super.call(this, http, appConfig.urls.url('sites'), errMsg) || this;
        _this.http = http;
        _this.appConfig = appConfig;
        _this.errMsg = errMsg;
        return _this;
    }
    SiteService.prototype.getAllSite = function () {
        return this.httpClient.get(this.appConfig.urls.url('site')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    SiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"]])
    ], SiteService);
    return SiteService;
}(_Base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"]));



/***/ }),

/***/ "./src/app/components/home/customer-service.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/home/customer-service.service.ts ***!
  \*************************************************************/
/*! exports provided: CustomerServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerServicesService", function() { return CustomerServicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@custor/services/configuration.service */ "./src/@custor/services/configuration.service.ts");
/* harmony import */ var _model_Service_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/Service.model */ "./src/app/model/Service.model.ts");
/* harmony import */ var _model_service_prerequisite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/service-prerequisite */ "./src/app/model/service-prerequisite.ts");







var CustomerServicesService = /** @class */ (function () {
    function CustomerServicesService(httpClient, config) {
        this.httpClient = httpClient;
        this.config = config;
        this._servicesUrl = 'api/services/en';
        this._serviceUrl = 'api/service/';
        this._incentiveServiceUrl = 'api/incentiveServices/en';
        this._presUrl = 'api/servicePrerequisiteByServiceId';
        // Declarations
        this.serviceList = [];
        this.service = new _model_Service_model__WEBPACK_IMPORTED_MODULE_5__["ServiceModel"]();
        this.checkList = new _model_service_prerequisite__WEBPACK_IMPORTED_MODULE_6__["ServicePrerequisite"]();
        this.checkLists = [];
    }
    Object.defineProperty(CustomerServicesService.prototype, "servicesUrl", {
        get: function () {
            return this.config.baseUrl + this._servicesUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerServicesService.prototype, "incentiveServiceUrl", {
        get: function () {
            return this.config.baseUrl + this._incentiveServiceUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerServicesService.prototype, "presUrl", {
        get: function () {
            return this.config.baseUrl + this._presUrl;
        },
        enumerable: true,
        configurable: true
    });
    CustomerServicesService.prototype.getServices = function () {
        var _this = this;
        return this.httpClient.get(this.servicesUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (serviceList) {
            _this.serviceList = serviceList;
            // // console.log(serviceListPre);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return _this.handleError(error);
        }));
    };
    CustomerServicesService.prototype.getServices2 = function () {
        var _this = this;
        return this.httpClient.get(this.servicesUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (serviceList) {
            _this.serviceList = serviceList;
            return _this.serviceList;
            // // console.log(serviceListPre);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return _this.handleError(error);
        }));
    };
    CustomerServicesService.prototype.getIncentiveServices = function () {
        var _this = this;
        return this.httpClient.get(this.incentiveServiceUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (serviceList) {
            _this.serviceList = serviceList;
            return _this.serviceList;
            // // console.log(serviceListPre);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return _this.handleError(error);
        }));
    };
    CustomerServicesService.prototype.getService = function (id) {
        var _this = this;
        var endpointUrl = this._serviceUrl + "/" + id;
        return this.httpClient.get(endpointUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (cust) {
            _this.service = cust;
            return _this.service;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return _this.handleError(error);
        }));
    };
    CustomerServicesService.prototype.getPrerequisites = function (id) {
        var _this = this;
        var endpointUrl = this.presUrl + "/" + id;
        // // console.log (endpointUrl);
        return this.httpClient.get(endpointUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (pre) {
            _this.checkLists = pre;
            // console.log(this.checkList);
            return _this.checkLists;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return _this.handleError(error);
        }));
    };
    CustomerServicesService.prototype.handleError = function (error) {
        var applicationError = error.headers.get('Application-Error');
        var serverError = error.json();
        var modelStateErrors = '';
        if (!serverError.type) {
            // console.log(serverError);
            for (var key in serverError) {
                if (serverError[key]) {
                    modelStateErrors += serverError[key] + '\n';
                }
            }
        }
        modelStateErrors = modelStateErrors = '' ? undefined : modelStateErrors;
        // return observableThrowError(applicationError || modelStateErrors || 'Server error');
        return applicationError || modelStateErrors || 'Server error';
    };
    CustomerServicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"]])
    ], CustomerServicesService);
    return CustomerServicesService;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__);






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
        return this.httpClient.get(this.config.urls.url('IncentiveRequestDetail')).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (incentiveRequestItemList) { return _this.incentiveRequestItemList = incentiveRequestItemList; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestDetailService.prototype.getIncentiveRequestItemslist = function (id) {
        return this.httpClient.get(this.appConfig.urls.url('IncentiveRequestDetail') + "/" + id).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) { return data; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestDetailService.prototype.getIncentiveRequestDetails = function (projectId) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('IncentiveRequestDetails', projectId)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (incentiveRequestItemList) { return _this.incentiveRequestItemList = incentiveRequestItemList; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestDetailService.prototype.getIncentiveRequestDetailsBytCategoryCode = function (projectId, categoryId) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('IncentiveRequestDetailsByCategoryId', projectId, categoryId)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (incentiveRequestItemList) { return _this.incentiveRequestItemList = incentiveRequestItemList; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestDetailService.prototype.getIncentiveRequestDetailsByProjectId = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('IncentiveRequestDetailsByProjectId', id)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (incentiveRequestItemList) { return _this.incentiveRequestItemList = incentiveRequestItemList; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestDetailService.prototype.getIncentiveRequestslistByProjectId = function (projectId) {
        return this.httpClient.get(this.appConfig.urls.url('IncentiveRequestDetailofSparePart', projectId)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) { return data; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestDetailService.prototype.getIncentiveRequestsDetailByProjectId = function (projectId) {
        return this.httpClient.get(this.appConfig.urls.url('incentiveRequestsDetailByProjectId', projectId)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) { return data; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestDetailService.prototype.getIncentiveRequestItem = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('IncentiveRequestDetail', id)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (incentiveRequestItemdata) {
            _this.incentiveRequestDetailModel = incentiveRequestItemdata;
            return _this.incentiveRequestDetailModel;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestDetailService.prototype.getIncentiveBoMRequestDetails = function (projectId, incentiveCategoryId, Phase) {
        var _this = this;
        // tslint:disable-next-line:max-line-length
        return this.httpClient.get(this.config.urls.url('IncentiveBoMRequestItems', projectId, incentiveCategoryId, Phase)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (incentiveBoMRequestItemList) { return _this.incentiveBoMRequestItemList = incentiveBoMRequestItemList; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestDetailService.prototype.getIncentiveBoMRequestDetail = function (id) {
        var _this = this;
        // tslint:disable-next-line:max-line-length
        return this.httpClient.get(this.config.urls.url('IncentiveBoMRequestItems', id)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (incentiveBoMRequestItem) { return _this.incentiveBoMRequestDetailModel = incentiveBoMRequestItem; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestDetailService.prototype.saveIncentiveRequestItem = function (incentiveRequestItem) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('IncentiveRequestDetail'), incentiveRequestItem).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (IncentiveRequestItem) {
            _this.incentiveRequestDetailModel = IncentiveRequestItem;
            return _this.incentiveRequestDetailModel;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestDetailService.prototype.addIncentiveRequestItem = function (incentiveRequestItem, bOMTableId) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('IncentiveRequestDetail'), incentiveRequestItem).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (IncentiveRequestItem) {
            _this.incentiveRequestDetailModel = IncentiveRequestItem;
            return _this.incentiveRequestDetailModel;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestDetailService.prototype.updateIncentiveRequestItem = function (incentiveRequestItem) {
        var _this = this;
        return this.httpClient.put(this.config.urls.url('IncentiveRequestDetail'), incentiveRequestItem).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (IncentiveRequestItem) {
            _this.incentiveRequestDetailModel = IncentiveRequestItem;
            return _this.incentiveRequestDetailModel;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestDetailService.prototype.deleteIncentiveRequestItem = function (id) {
        return this.httpClient.delete(this.config.urls.url('IncentiveRequestDetail', id)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            return result;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parsePromiseResponseError));
    };
    IncentiveRequestDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"]])
    ], IncentiveRequestDetailService);
    return IncentiveRequestDetailService;
}());



/***/ }),

/***/ "./src/app/components/profile-amendment/service/manager.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/profile-amendment/service/manager.service.ts ***!
  \*************************************************************************/
/*! exports provided: ManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerService", function() { return ManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@custor/services/configuration.service */ "./src/@custor/services/configuration.service.ts");
/* harmony import */ var _custor_services_security_endpoint_factory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/services/security/endpoint-factory.service */ "./src/@custor/services/security/endpoint-factory.service.ts");





var ManagerService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ManagerService, _super);
    function ManagerService(httpClient, config, injector) {
        var _this = _super.call(this, httpClient, config, injector) || this;
        _this.httpClient = httpClient;
        _this.config = config;
        _this._managersAuditListUrl = "api/FAssociate/ManagerListAudit";
        _this._managersListUrl = "api/FAssociate/ManagersList";
        _this._newManagersListUrl = "api/FAssociate/NewManagersList";
        _this._newManagerUrl = "api/FAssociate/NewManagerById";
        _this._managerAuditUrl = "api/FAssociate/ManagerAuditByInvestorId";
        _this._managerUrl = "api/FAssociate/ManagerByInvestorId";
        _this._managerByAssociateIdUrl = "api/FAssociate/ManagerByAssociateId";
        _this._managerAuditByAssociateIdUrl = "api/FAssociate/ManagerAuditByAssociateId";
        _this._saveManagerDataUrl = "api/FAssociate/SaveManager";
        _this._updateManagerDataUrl = "api/FAssociate/UpdateManager";
        return _this;
    }
    Object.defineProperty(ManagerService.prototype, "managersAuditListUrl", {
        get: function () {
            return this.config.baseUrl + this._managersAuditListUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerService.prototype, "managersListUrl", {
        get: function () {
            return this.config.baseUrl + this._managersListUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerService.prototype, "newManagersListUrl", {
        get: function () {
            return this.config.baseUrl + this._newManagersListUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerService.prototype, "newManagerUrl", {
        get: function () {
            return this.config.baseUrl + this._newManagerUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerService.prototype, "managerAuditUrl", {
        get: function () {
            return this.config.baseUrl + this._managerAuditUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerService.prototype, "managerByAssociateIdUrl", {
        get: function () {
            return this.config.baseUrl + this._managerByAssociateIdUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerService.prototype, "managerAuditByAssociateIdUrl", {
        get: function () {
            return this.config.baseUrl + this._managerAuditByAssociateIdUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerService.prototype, "managerUrl", {
        get: function () {
            return this.config.baseUrl + this._managerUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerService.prototype, "saveManagerDataUrl", {
        get: function () {
            return this.config.baseUrl + this._saveManagerDataUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerService.prototype, "updateManagerDataUrl", {
        get: function () {
            return this.config.baseUrl + this._updateManagerDataUrl;
        },
        enumerable: true,
        configurable: true
    });
    ManagerService.prototype.getNewManagerById = function (id) {
        var endPointUrl = this.newManagerUrl + "/" + id;
        return this.httpClient.get(endPointUrl);
    };
    ManagerService.prototype.getAssociateAuditListByInvestorId = function (investorId) {
        var endPointUrl = this.managersAuditListUrl + "/" + investorId;
        return this.httpClient.get(endPointUrl);
    };
    ManagerService.prototype.getAssociateListByInvestorId = function (investorId) {
        var endPointUrl = this.managersListUrl + "/" + investorId;
        return this.httpClient.get(endPointUrl);
    };
    ManagerService.prototype.getNewAssociateListByInvestorId = function (investorId, serviceApplicationId) {
        var endPointUrl = this.newManagersListUrl + "/" + investorId + "/" + serviceApplicationId;
        return this.httpClient.get(endPointUrl);
    };
    ManagerService.prototype.getManagerAuditByInvestorId = function (investorId) {
        var endPointUrl = this.managerAuditUrl + "/" + investorId;
        return this.httpClient.get(endPointUrl);
    };
    ManagerService.prototype.getManagerByInvestorId = function (investorId) {
        var endPointUrl = this.managerUrl + "/" + investorId;
        return this.httpClient.get(endPointUrl);
    };
    ManagerService.prototype.getManagerAuditByAssociateId = function (investorId) {
        var endPointUrl = this.managerAuditByAssociateIdUrl + "/" + investorId;
        return this.httpClient.get(endPointUrl);
    };
    ManagerService.prototype.getManagerByAssociateId = function (investorId) {
        var endPointUrl = this.managerByAssociateIdUrl + "/" + investorId;
        return this.httpClient.get(endPointUrl);
    };
    ManagerService.prototype.saveManagerData = function (data) {
        var endpointUrl = "" + this.saveManagerDataUrl;
        return this.httpClient.post(endpointUrl, data);
    };
    ManagerService.prototype.updateManagerData = function (data) {
        var endpointUrl = "" + this.updateManagerDataUrl;
        return this.httpClient.put(endpointUrl, data);
    };
    ManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], ManagerService);
    return ManagerService;
}(_custor_services_security_endpoint_factory_service__WEBPACK_IMPORTED_MODULE_4__["EndpointFactory"]));



/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/currency-setting/currency-form/currency-form.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/currency-setting/currency-form/currency-form.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  currency-form works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/currency-setting/currency-form/currency-form.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/currency-setting/currency-form/currency-form.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9zZXR0aW5nL2xvb2t1cC10YWJzL2N1cnJlbmN5LXNldHRpbmcvY3VycmVuY3ktZm9ybS9jdXJyZW5jeS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/currency-setting/currency-form/currency-form.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/currency-setting/currency-form/currency-form.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CurrencyFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyFormComponent", function() { return CurrencyFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CurrencyFormComponent = /** @class */ (function () {
    function CurrencyFormComponent() {
    }
    CurrencyFormComponent.prototype.ngOnInit = function () {
    };
    CurrencyFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-currency-form',
            template: __webpack_require__(/*! ./currency-form.component.html */ "./src/app/components/setting/lookup-tabs/currency-setting/currency-form/currency-form.component.html"),
            styles: [__webpack_require__(/*! ./currency-form.component.scss */ "./src/app/components/setting/lookup-tabs/currency-setting/currency-form/currency-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CurrencyFormComponent);
    return CurrencyFormComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/currency-setting/currency-list/currency-list.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/currency-setting/currency-list/currency-list.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"mat-elevation-z8\" style=\"margin: 15px;\">-->\r\n\r\n  <!--<mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>-->\r\n  <!--<mat-table [dataSource]=\"dataSource\" matSort>-->\r\n    <!--<ng-container matColumnDef=\"Key\">-->\r\n      <!--<mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"100px\">Currency  Type</mat-header-cell>-->\r\n      <!--<mat-cell *matCellDef=\"let row\" fxFlex=\"100px\"> {{row.Key}}</mat-cell>-->\r\n    <!--</ng-container>-->\r\n    <!--<ng-container matColumnDef=\"Value\">-->\r\n      <!--<mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"100px\">Value  </mat-header-cell>-->\r\n      <!--<mat-cell *matCellDef=\"let row\" fxFlex=\"100px\"> {{row.Value}}</mat-cell>-->\r\n    <!--</ng-container>-->\r\n\r\n\r\n\r\n    <!--<ng-container matColumnDef=\"actions\">-->\r\n      <!--<mat-header-cell *matHeaderCellDef fxFlex=\"100px\">-->\r\n        <!--<button mat-button color=\"primary\" (click)=\"edit()\">-->\r\n          <!--<mat-icon class=\"mat-button-icon\">add</mat-icon>-->\r\n          <!--{{'common.commands.Add' | translate}}-->\r\n        <!--</button>-->\r\n      <!--</mat-header-cell>-->\r\n\r\n    <!--</ng-container>-->\r\n    <!--<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>-->\r\n    <!--<mat-row *matRowDef=\"let row; columns: displayedColumns;\">-->\r\n    <!--</mat-row>-->\r\n  <!--</mat-table>-->\r\n\r\n  <!--<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>-->\r\n<!--</div>-->\r\n\r\n\r\n<p>djnfd</p>\r\n"

/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/currency-setting/currency-list/currency-list.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/currency-setting/currency-list/currency-list.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9zZXR0aW5nL2xvb2t1cC10YWJzL2N1cnJlbmN5LXNldHRpbmcvY3VycmVuY3ktbGlzdC9jdXJyZW5jeS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/currency-setting/currency-list/currency-list.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/currency-setting/currency-list/currency-list.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CurrencyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyListComponent", function() { return CurrencyListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _currency_setting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../currency-setting.service */ "./src/app/components/setting/lookup-tabs/currency-setting/currency-setting.service.ts");








var CurrencyListComponent = /** @class */ (function () {
    function CurrencyListComponent(http, settingService, errMsg, toastr, dialog, router, route) {
        this.http = http;
        this.settingService = settingService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.displayedColumns = ['Key', 'Value', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    CurrencyListComponent.prototype.ngOnInit = function () {
        this.getExchangeRate();
    };
    CurrencyListComponent.prototype.getCurrency = function () {
    };
    CurrencyListComponent.prototype.getExchangeRate = function () {
        var _this = this;
        this.settingService.getAll().subscribe(function (result) {
            _this.dataSource.data = result;
        });
    };
    CurrencyListComponent.prototype.edit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], CurrencyListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], CurrencyListComponent.prototype, "sort", void 0);
    CurrencyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-currency-list',
            template: __webpack_require__(/*! ./currency-list.component.html */ "./src/app/components/setting/lookup-tabs/currency-setting/currency-list/currency-list.component.html"),
            styles: [__webpack_require__(/*! ./currency-list.component.scss */ "./src/app/components/setting/lookup-tabs/currency-setting/currency-list/currency-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _currency_setting_service__WEBPACK_IMPORTED_MODULE_7__["CurrencySettingService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], CurrencyListComponent);
    return CurrencyListComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/currency-setting/currency-setting-routing.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/currency-setting/currency-setting-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: CurrencySettingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencySettingRoutingModule", function() { return CurrencySettingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _currency_form_currency_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./currency-form/currency-form.component */ "./src/app/components/setting/lookup-tabs/currency-setting/currency-form/currency-form.component.ts");




var route = [
    { path: 'list', component: _currency_form_currency_form_component__WEBPACK_IMPORTED_MODULE_3__["CurrencyFormComponent"] },
    { path: 'edit/:id', component: _currency_form_currency_form_component__WEBPACK_IMPORTED_MODULE_3__["CurrencyFormComponent"] }
];
var CurrencySettingRoutingModule = /** @class */ (function () {
    function CurrencySettingRoutingModule() {
    }
    CurrencySettingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(route)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CurrencySettingRoutingModule);
    return CurrencySettingRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/currency-setting/currency-setting.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/currency-setting/currency-setting.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/currency-setting/currency-setting.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/currency-setting/currency-setting.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9zZXR0aW5nL2xvb2t1cC10YWJzL2N1cnJlbmN5LXNldHRpbmcvY3VycmVuY3ktc2V0dGluZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/currency-setting/currency-setting.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/currency-setting/currency-setting.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CurrencySettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencySettingComponent", function() { return CurrencySettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CurrencySettingComponent = /** @class */ (function () {
    function CurrencySettingComponent() {
    }
    CurrencySettingComponent.prototype.ngOnInit = function () {
    };
    CurrencySettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-currency-setting',
            template: __webpack_require__(/*! ./currency-setting.component.html */ "./src/app/components/setting/lookup-tabs/currency-setting/currency-setting.component.html"),
            styles: [__webpack_require__(/*! ./currency-setting.component.scss */ "./src/app/components/setting/lookup-tabs/currency-setting/currency-setting.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CurrencySettingComponent);
    return CurrencySettingComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/currency-setting/currency-setting.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/currency-setting/currency-setting.module.ts ***!
  \********************************************************************************************/
/*! exports provided: CurrencySettingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencySettingModule", function() { return CurrencySettingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _currency_form_currency_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./currency-form/currency-form.component */ "./src/app/components/setting/lookup-tabs/currency-setting/currency-form/currency-form.component.ts");
/* harmony import */ var _currency_list_currency_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./currency-list/currency-list.component */ "./src/app/components/setting/lookup-tabs/currency-setting/currency-list/currency-list.component.ts");
/* harmony import */ var _currency_setting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./currency-setting.component */ "./src/app/components/setting/lookup-tabs/currency-setting/currency-setting.component.ts");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _currency_setting_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./currency-setting-routing.module */ "./src/app/components/setting/lookup-tabs/currency-setting/currency-setting-routing.module.ts");








var CurrencySettingModule = /** @class */ (function () {
    function CurrencySettingModule() {
    }
    CurrencySettingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _currency_setting_routing_module__WEBPACK_IMPORTED_MODULE_7__["CurrencySettingRoutingModule"]
            ],
            declarations: [
                _currency_list_currency_list_component__WEBPACK_IMPORTED_MODULE_4__["CurrencyListComponent"],
                _currency_form_currency_form_component__WEBPACK_IMPORTED_MODULE_3__["CurrencyFormComponent"],
                _currency_setting_component__WEBPACK_IMPORTED_MODULE_5__["CurrencySettingComponent"]
            ],
            exports: [
                _currency_list_currency_list_component__WEBPACK_IMPORTED_MODULE_4__["CurrencyListComponent"],
                _currency_form_currency_form_component__WEBPACK_IMPORTED_MODULE_3__["CurrencyFormComponent"],
                _currency_setting_component__WEBPACK_IMPORTED_MODULE_5__["CurrencySettingComponent"]
            ]
        })
    ], CurrencySettingModule);
    return CurrencySettingModule;
}());



/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/currency-setting/currency-setting.service.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/currency-setting/currency-setting.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: CurrencySettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencySettingService", function() { return CurrencySettingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../config/appconfig */ "./src/app/config/appconfig.ts");






var CurrencySettingService = /** @class */ (function () {
    function CurrencySettingService(httpClient, errMsg, appConfig) {
        this.httpClient = httpClient;
        this.errMsg = errMsg;
        this.appConfig = appConfig;
    }
    CurrencySettingService.prototype.getOneById = function (id) {
        return this.httpClient.get(this.appConfig.urls.url('ApplicationSettings') + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    CurrencySettingService.prototype.getAll = function () {
        return this.httpClient.get(this.appConfig.urls.url('ApplicationSettings')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    CurrencySettingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_5__["AppConfiguration"]])
    ], CurrencySettingService);
    return CurrencySettingService;
}());



/***/ }),

/***/ "./src/app/model/QueryParameters.model.ts":
/*!************************************************!*\
  !*** ./src/app/model/QueryParameters.model.ts ***!
  \************************************************/
/*! exports provided: QueryParametersModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryParametersModel", function() { return QueryParametersModel; });
var QueryParametersModel = /** @class */ (function () {
    function QueryParametersModel() {
    }
    return QueryParametersModel;
}());



/***/ }),

/***/ "./src/app/model/Service.model.ts":
/*!****************************************!*\
  !*** ./src/app/model/Service.model.ts ***!
  \****************************************/
/*! exports provided: ServiceModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceModel", function() { return ServiceModel; });
var ServiceModel = /** @class */ (function () {
    function ServiceModel() {
    }
    return ServiceModel;
}());



/***/ }),

/***/ "./src/app/model/TodoTask.model.ts":
/*!*****************************************!*\
  !*** ./src/app/model/TodoTask.model.ts ***!
  \*****************************************/
/*! exports provided: TodoTaskModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoTaskModel", function() { return TodoTaskModel; });
var TodoTaskModel = /** @class */ (function () {
    function TodoTaskModel() {
    }
    return TodoTaskModel;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map