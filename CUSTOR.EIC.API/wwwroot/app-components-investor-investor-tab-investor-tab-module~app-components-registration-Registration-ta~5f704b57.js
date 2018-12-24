(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-investor-investor-tab-investor-tab-module~app-components-registration-Registration-ta~5f704b57"],{

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

/***/ "./src/app/components/registration/registration-certificate/registration-certificate.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/registration/registration-certificate/registration-certificate.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"margin-2 simple-card\">\r\n  <mat-card-header>\r\n    <mat-card-subtitle class=\"sub-title\"></mat-card-subtitle>\r\n    <button class=\"custom-button\" (click)=\"generateCertification()\">\r\n      Generate\r\n      Certificate\r\n    </button>\r\n    <button class=\"custom-button\" (click)=\"addMessage()\">\r\n      Send Message\r\n    </button>\r\n  </mat-card-header>\r\n</mat-card>\r\n\r\n<mat-card class=\"margin-2 margin-top-20\" *ngIf=\"viewCertificate\">\r\n  <mat-card-header>\r\n    <div fxFlex=\"70\"></div>\r\n    <div fxFlex=\"25\" style=\"float: right;\">\r\n      <button class=\"custom-button \" (click)=\"generatePDF()\">Print</button>\r\n      <!--<button class=\"custom-button \" (click)=\"Print()\">Print</button>-->\r\n    </div>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <mat-card-title>\r\n    </mat-card-title>\r\n    <div id=\"certificate\" class=\"c-container\">\r\n      <header class=\"clearfix\">\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\">\r\n          <div class=\"block\" fxFlex=\"20%\">\r\n            <div id=\"company\" class=\"clearfix logo-image\">\r\n              <img width=\"100\"  src=\"/assets/logo/Trade.gif\">\r\n            </div>\r\n          </div>\r\n          <div class=\"block\" fxFlex=\"60%\">\r\n            <div id=\"logo\" class=\"full-width\">\r\n              <div class=\"certificate-title\">ንግድ ሚኒስቴር</div>\r\n              <div class=\"certificate-titlet\">Ministry of Trade</div>\r\n              <div style=\"margin-top: 5px\" class=\"c-subtitle\">የንግድ ምዝገባ </div>\r\n              <div class=\"c-subtitle\">Commertial Registration</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"block\" fxFlex=\"20%\">\r\n            <div class=\"logo-image\" id=\"project\">\r\n              <img width=\"100\" src=\"/assets/images/et.png\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div style=\"float: right;\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\">\r\n          <div id=\"sub-header\" class=\"block\" style=\"font-size: 13px\">\r\n            <table>\r\n              <tr>\r\n                <td class=\"s-head\">\r\n                  የመዝገብ ቁጥር/File No.\r\n                </td>\r\n                <td class=\"dta-head\">{{investor?.RegistrationNumber}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"s-head\">\r\n                  የግብር ከፋይ መለያ ቁጥር/TIN\r\n                </td>\r\n                <td class=\"dta-head\">{{investor?.Tin}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"s-head\">\r\n                  የንግድ ምዝገባ ቁጥር\r\n                </td>\r\n                <td class=\"dta-head\">MOT/{{investor.RegistrationNumber }}/10\r\n                </td>\r\n\r\n              </tr>\r\n              <tr>\r\n                <td class=\"s-head\">\r\n                  Principal Registration No\r\n                </td>\r\n                <td class=\"dta-head\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"s-head\">\r\n                  የቀድሞው የምዝገባ ቁጥር <br>\r\n                </td>\r\n                <td class=\"dta-head\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"s-head\">\r\n                  የቀድሞው  የምዝገባ ቀን\t <br> Previous Registration Date\r\n                </td>\r\n                <td class=\"dta-head\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"s-head\">\r\n                  የቀድሞው  መጀመሪያ የተመዘገበበት ቀን <br> First Registration Date\r\n                </td>\r\n                <td class=\"dta-head\"></td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </header>\r\n\r\n      <div class=\"main\" style=\"border-top: 1px solid #c4cbcc;margin-bottom: 10px; padding-top: 5px\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\">\r\n\r\n          <div id=\"amharic\" class=\"block\" fxFlex=\"45.5%\">\r\n            <table id=\"basic\" class=\"full-width\">\r\n              <tbody>\r\n              <tr>\r\n                <td class=\"t-header\" style=\"width: 100px\">1. የግለሰቡ/የድርጅቱ ስም</td>\r\n                <td class=\"data value\" style=\"width: 100px\">\r\n                  {{investor.FirstName}}\r\n                  {{investor.FatherName}}\r\n                  {{investor.GrandName}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"t-header\">2. ዜግነት</td>\r\n               <td class=\"data value\">{{investor.Nationality | countryPipe : 0 }}</td>\r\n              </tr>\r\n             <!-- <tr>\r\n                <td class=\"t-header\">3.የንግድ ስም</td>\r\n                <td class=\"data value\">{{investorDetailList?.Investor.TradeName}}</td>\r\n              </tr>-->\r\n              <tr>\r\n                <td class=\"t-header\">3. የሥራ አስክያጅ ስም</td>\r\n                <td class=\"data value\">\r\n                  {{manager[0].FirstName}}\r\n                  {{manager[0].FatherName}}\r\n                  {{manager[0].FatherName}}\r\n                 <!-- {{manager[0].Associate?.FatherName}}\r\n                  {{manager[0].Associate?.FatherName}}\r\n                  {{manager[0].Associate?.GrandName}}-->\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table class=\"full-width\">\r\n              <caption class=\"caption\">4. የንግድ ድርጅቱ አድራሻ</caption>\r\n              <tbody>\r\n              <tr>\r\n                <td class=\"a-header\">ክልል</td>\r\n                <td class=\"data value\">{{investorAddressList?.Region.Description}}</td>\r\n                <td class=\"a-header\">ዞን</td>\r\n               <td class=\"data value\">{{investorAddressList?.Region.Zones[0].DescriptionEnglish }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"a-header\">ከተማ</td>\r\n                <td class=\"data value\">--</td>\r\n                <td class=\"a-header\">ክፍለ ከተማ</td>\r\n                <td class=\"data value\">--</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"a-header\">ቀበሌ/ወረዳ</td>\r\n                <td class=\"data value\">\r\n                  {{investorAddressList?.Region.Zones[0].Woredas[0].Kebeles[0].Description}}\r\n                  /\r\n                  {{investorAddressList?.Region.Zones[0].Woredas[0].Description}}\r\n                </td>\r\n                <td class=\"a-header\">የቤት ቁጥር</td>\r\n                <td class=\"data value\">{{investorAddressList?.HouseNo}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"a-header\">ፖ ሳ ቁ</td>\r\n                <td class=\"data value\">{{investorAddressList?.Pobox}}</td>\r\n                <td class=\"a-header\">ስልክ ቁጥር</td>\r\n                <td class=\"data value\">{{investorAddressList?.TeleNo}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"a-header\">ፋክስ</td>\r\n                <td class=\"data value\">{{investorAddressList?.Fax}}</td>\r\n                <td class=\"a-header\">ኢ-ሜይል</td>\r\n                <td class=\"data value\">{{investorAddressList?.Email}}</td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <!--<table class=\"full-width\">\r\n              <caption class=\"caption\">6.የኢንቨስትመንቱ አድራሻ</caption>\r\n              <tbody>\r\n              <tr>\r\n                <td class=\"a-header\">ክልል</td>\r\n                <td class=\"data value\">{{investmentAddressList?.Region.Description}}</td>\r\n                <td class=\"a-header\">ዞን</td>\r\n                <td class=\"data value\">{{investmentAddressList?.Region.Zones[0].Description}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"a-header\">ከተማ</td>\r\n                <td class=\"data value\">---</td>\r\n                <td class=\"a-header\">ክፍለ ከተማ</td>\r\n                <td class=\"data value\">---</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"a-header\">ቀበሌ/ወረዳ</td>\r\n                <td class=\"data value\">\r\n                  {{investmentAddressList?.Region.Zones[0].Woredas[0].Kebeles[0].Description}}\r\n                  /\r\n                  {{investmentAddressList?.Region.Zones[0].Woredas[0].Description}}\r\n                </td>\r\n                <td class=\"a-header\">የቤት ቁጥር</td>\r\n                <td class=\"data value\">---</td>\r\n              </tr>\r\n              </tbody>\r\n            </table>-->\r\n            <table id=\"investmentCapital\" class=\"full-width\">\r\n              <tbody>\r\n              <tr>\r\n                <td class=\"t-header\">5. ካፒታል በኢት ብር</td>\r\n                <td class=\"data value\">{{investor?.PaidCapital}}</td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table class=\"full-width\">\r\n              <caption class=\"caption\">7. የተስማራባቸው የንግድ ሥራዎች</caption>\r\n              <tbody>\r\n              <!--<tr>\r\n                <td class=\"data value\">\r\n                  {{investmentActivity?.Description}}</td>\r\n              </tr>-->\r\n              <tr>\r\n                <td >\r\n                  <div *ngFor=\"let vv of MajorDivisionList\">\r\n                    {{vv.Description}}\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table class=\"full-width\">\r\n              <tr>\r\n                <td style=\"font-size: 14px\"> በግብር ከፋይ መለያ ቁጥር {{investor?.Tin}} የተመዘገበ መሆኑን እናረጋግጣለን ::\r\n                </td>\r\n              </tr>\r\n            </table>\r\n\r\n            <table class=\"full-width\">\r\n              <tr>\r\n                <td> ይህ የምዝገባ የምስክር ወረቀት ዛሬ {{date | date}} አዲስ አበባ\r\n                  ተሰጠ ።\r\n                </td>\r\n              </tr>\r\n            </table>\r\n\r\n            <table class=\"full-width\">\r\n              <tbody>\r\n              <tr>\r\n                <td class=\"t-header\">የሃላፊ ስም/Name of Official</td>\r\n                <td style=\"width: 300px\" class=\"data value\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"t-header\">ፊርማ/Signature</td>\r\n                <td style=\"width: 300px\" class=\"data value\"></td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <div id=\"english\" class=\"block\" fxFlex=\"48.5%\">\r\n            <table id=\"basicEn\" class=\"full-width\">\r\n              <tbody>\r\n              <tr>\r\n                <td class=\"t-header\" style=\"width: 80px\">1. Owner/ Company Name </td>\r\n                <td class=\"data value\"> {{investor.FirstNameEng}}\r\n                  {{investor.FatherNameEng}}\r\n                  {{investor.GrandNameEng}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"t-header\">2. Nationality</td>\r\n                <td class=\"data value\">{{investor.Nationality | countryPipe : 1}}</td>\r\n              </tr>\r\n             <!-- <tr>\r\n                <td class=\"t-header\">3. Trade Name</td>\r\n                <td class=\"data value\">{{investorDetailList?.Investor.TradeName}}</td>\r\n              </tr>-->\r\n              <tr>\r\n                <td class=\"t-header\">3. Name of General Manager</td>\r\n               <td class=\"data value\">\r\n                 {{manager[0].FatherNameEng}}\r\n                 {{manager[0].FatherNameEng}}\r\n                 {{manager[0].GrandNameEng}}\r\n                 <!-- {{manager[0].Associate?.FatherNameEng}}\r\n                  {{manager[0].Associate?.FatherNameEng}}\r\n                  {{manager[0].Associate?.GrandNameEng}}-->\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table class=\"full-width\">\r\n              <caption class=\"caption\">4. Business Address</caption>\r\n              <tbody>\r\n              <tr>\r\n                <td class=\"a-header\">Region</td>\r\n                <td class=\"data value\">{{investorAddressList?.Region.DescriptionEnglish}}</td>\r\n                <td class=\"a-header\">Zone</td>\r\n                <td class=\"data value\">{{investorAddressList?.Woreda.Zone.DescriptionEnglish }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"a-header\">City</td>\r\n                <td class=\"data value\">--</td>\r\n                <td class=\"a-header\">Sub City</td>\r\n                <td class=\"data value\">--</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td class=\"a-header\">Kebele/Woreda</td>\r\n                <td class=\"data value\">\r\n                  {{investorAddressList?.Region.Zones[0].Woredas[0].Kebeles[0].DescriptionEnglish}}\r\n                  /\r\n                  {{investorAddressList?.Region.Zones[0].Woredas[0].DescriptionEnglish}}\r\n                </td>\r\n                <td class=\"a-header\">House No.</td>\r\n                <td class=\"data value\">{{investorAddressList?.HouseNo}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"a-header\">P.O.Box</td>\r\n                <td class=\"data value\">{{investorAddressList?.Pobox}}</td>\r\n                <td class=\"a-header\">Tel.No</td>\r\n                <td class=\"data value\">{{investorAddressList?.TeleNo}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"a-header\">Fax</td>\r\n                <td class=\"data value\">{{investorAddressList?.Fax}}</td>\r\n                <td class=\"a-header\">E-mail</td>\r\n                <td class=\"data value\">{{investorAddressList?.Email}}</td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table id=\"investmentCapitalEn\" class=\"full-width\">\r\n              <tbody>\r\n              <tr>\r\n                <td class=\"t-header\">5. Amount of Capital </td>\r\n                <td class=\"data value\">{{investor?.PaidCapital}}</td>\r\n              </tr>\r\n\r\n              <!--<tr>\r\n                <td class=\"t-header\">10. Planned Export in Percent</td>\r\n                <td class=\"data value\">{{exportMarketShare | percent}}</td>\r\n              </tr>-->\r\n              </tbody>\r\n            </table>\r\n\r\n\r\n            <!-- <table class=\"full-width\">\r\n               <caption class=\"caption\">6. Investment Location</caption>\r\n               <tbody>\r\n               <tr>\r\n                 <td class=\"a-header\">Region</td>\r\n                 <td class=\"data value\">{{investmentAddressList?.Region.DescriptionEnglish}}</td>\r\n                 <td class=\"a-header\">Zone</td>\r\n                 <td class=\"data value\">{{investmentAddressList?.Region.Zones[0].DescriptionEnglish}}</td>\r\n               </tr>\r\n               <tr>\r\n                 <td class=\"a-header\">City</td>\r\n                 <td class=\"data value\">--</td>\r\n                 <td class=\"a-header\">sub city</td>\r\n                 <td class=\"data value\">--</td>\r\n               </tr>\r\n               <tr>\r\n                 <td class=\"a-header\">Kebele/Woreda</td>\r\n                 <td class=\"data value\">\r\n                   {{investmentAddressList?.Region.Zones[0].Woredas[0].Kebeles[0].DescriptionEnglish}}\r\n                   /\r\n                   {{investmentAddressList?.Region.Zones[0].Woredas[0].DescriptionEnglish}}\r\n                 </td>\r\n                 <td class=\"a-header\">House No.</td>\r\n                 <td class=\"data value\">{{investmentAddressList?.HouseNo}}</td>\r\n               </tr>\r\n               </tbody>\r\n             </table>-->\r\n\r\n            <table class=\"full-width\">\r\n              <caption class=\"caption\">7. Type of activities engaged</caption>\r\n              <tbody>\r\n             <!-- <tr>\r\n                <td class=\"data value\">{{investmentActivity?.DescriptionEnglish}}</td>\r\n              </tr>-->\r\n              <tr>\r\n                <td >\r\n                  <div *ngFor=\"let vv of MajorDivisionList\">\r\n                  {{vv.EnglishDescription}}\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n\r\n            <table class=\"full-width\">\r\n              <tr>\r\n                <td> has duly been registered under TIN\t{{investor?.Tin}} <br>\r\n                  This Registration Certification is issued in\t{{date | date}}  <br>\r\n                  on\tAddis Ababa\r\n                </td>\r\n              </tr>\r\n            </table>\r\n\r\n            <table class=\"full-width\">\r\n              <tbody>\r\n              <tr>\r\n                <td class=\"t-header\" style=\"width: 50px\">እስከ\r\n                </td>\r\n                <td class=\"data value\" width=\"90%\">{{ date | date}} ታድሷል</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"t-header\">Valid Until</td>\r\n                <td class=\"data value\">{{date | date}}</td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\" style=\"font-size: 12px;\">\r\n          <div id=\"notices\">\r\n            <div>ማሳሰቢያ/Notice:</div>\r\n            <div>1. ይህ የንግድ ምዝገባ በአዋጅ ቁጥር 686/2002 መሠረት በየበጀት ዓመቱ ከሐምሌ 1 ቀን እስከ ታህሳስ 30 ቀን ድረስ ያለቅጣት የሚታደስ ሲሆን፤ ከጥር 1 ቀን እስከ ሰኔ 30 ቀን ድረስ በአዋጅ በተቀመጠው የሚታደስ ይሆናል።<br>\r\n              This License Shall be renewed annually in accordance with Regulation no 686/2002 from 1 July to December 30 E.C with out penalty and with penalty from first January to June 30 E.C\r\n            </div>\r\n            <div style=\"margin-top: 10px !important;\">\r\n              2. ይህ የንግድ ምዝገባ የምስክር ወረቀት በዋስትና ወይም በእዳ ሊያዝ አይችልም።<br>\r\n              The holder of this License is forbidden for surety ship or debt.\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/registration/registration-certificate/registration-certificate.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/registration/registration-certificate/registration-certificate.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearfix:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.c-container {\n  background-color: white !important;\n  border: 1px solid #c4cbcc;\n  padding: 5px;\n  color: #000000 !important;\n  font-family: Nyala !important;\n  font-size: 15px !important;\n  font-weight: normal !important;\n  font-style: normal !important; }\n\nheader {\n  margin-bottom: 5px; }\n\n.logo-image {\n  width: 128px !important; }\n\n#logo {\n  text-align: center;\n  margin-bottom: 10px; }\n\n#logo img {\n  width: 90px; }\n\n#project {\n  float: left; }\n\n#Title1 {\n  text-align: Center; }\n\n#project span {\n  color: #5D6975;\n  text-align: right;\n  width: 52px;\n  margin-right: 10px;\n  display: inline-block;\n  font-size: 0.8em; }\n\n#sub-header span {\n  color: #5D6975;\n  text-align: right;\n  width: 52px;\n  margin-right: 10px;\n  display: inline-block;\n  font-size: 0.8em; }\n\n#sub-header {\n  float: right;\n  width: 282px;\n  padding-right: 20px !important; }\n\n#sub-header > table > tbody > tr > td {\n  text-align: left !important; }\n\n#sub-header > table > tbody > tr > td.dta-head {\n  border-bottom: 1px solid black !important; }\n\ntable > tbody > tr > td.a-header {\n  color: #000000 !important;\n  font-family: Nyala !important;\n  font-size: 13px !important;\n  font-weight: normal !important;\n  font-style: normal !important; }\n\n.certificate-title {\n  font-size: 23px;\n  padding: 1px 4px;\n  font-size: 26px;\n  font-weight: bold;\n  font-family: monospace; }\n\n#TIN {\n  font-weight: bold !important; }\n\n#company {\n  float: right;\n  text-align: right; }\n\n#project div,\n#company div {\n  white-space: nowrap; }\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin-bottom: 20px; }\n\ntable tr:nth-child(2n-1) td {\n  background: white; }\n\ntable tr > td.t-header, .caption {\n  text-align: left !important;\n  text-transform: capitalize !important;\n  font-family: Nyala !important;\n  font-size: 15px !important;\n  font-weight: bold !important;\n  font-style: normal !important; }\n\ntable tr > td.data {\n  border-bottom: 1px solid #ccc !important; }\n\ntable th,\ntable td {\n  text-align: center; }\n\ntable .service,\ntable .desc {\n  text-align: left; }\n\ntable td.unit,\ntable td.qty,\ntable td.total {\n  font-size: 1.2em; }\n\ntable td, table th {\n  border: none !important;\n  padding: 2px; }\n\n#notices {\n  padding: 0px 20px !important; }\n\n#investmentCapital .value {\n  width: 250px; }\n\n#investmentCapitalEn .value {\n  width: 200px; }\n\n#basic .value {\n  width: 250px; }\n\n#basicEn .value {\n  width: 150px; }\n\nnobr {\n  white-space: nowrap; }\n\ntable {\n  border: none !important;\n  border-spacing: 0px !important; }\n"

/***/ }),

/***/ "./src/app/components/registration/registration-certificate/registration-certificate.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/registration/registration-certificate/registration-certificate.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: RegistrationCertificateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationCertificateComponent", function() { return RegistrationCertificateComponent; });
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



















var RegistrationCertificateComponent = /** @class */ (function () {
    function RegistrationCertificateComponent(certificateService, projecAssService, errMsg, associateService, projectService, serviceApplication, bussnesServ, dialog, toast, projectCostService, invactivityService, projectOutputService, route, addressService) {
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
    RegistrationCertificateComponent.prototype.ngOnInit = function () {
        this.getDate();
    };
    RegistrationCertificateComponent.prototype.getDate = function () {
        var today = new Date();
        this.date = today;
    };
    RegistrationCertificateComponent.prototype.addMessage = function () {
        this.dialog.open(_project_profile_notification_notification_component__WEBPACK_IMPORTED_MODULE_13__["NotificationComponent"]);
    };
    RegistrationCertificateComponent.prototype.generateCertification = function () {
        this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
        this.getInvestorDetail(this.ServiceApplicationId);
        this.viewCertificate = true;
    };
    RegistrationCertificateComponent.prototype.generatePDF = function () {
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
    RegistrationCertificateComponent.prototype.Print = function () {
        window.print();
    };
    RegistrationCertificateComponent.prototype.getInvestorDetail = function (id) {
        var _this = this;
        this.InvestorId = this.route.snapshot.params['InvestorId'];
        this.bussnesServ.getRegistrationCatagory(this.InvestorId).subscribe(function (result) {
            _this.MajorDivisionList = result;
        });
        this.bussnesServ.getRegistrationByInvestorId(this.InvestorId).subscribe(function (result) {
            _this.investor = result;
            _this.getInvestorAddress(_this.InvestorId);
            _this.getManager();
        });
        //this.certificateService.getOneById(id)
        // .subscribe((result: ServiceApplicationModel) => {
        // this.investorDetailList = result;
        //this.getInvestmentLocation(this.investorDetailList.ProjectId);
        //this.getProjectCost(this.investorDetailList.ProjectId);
        //this.getExportPercent(this.investorDetailList.ProjectId);
        //// console.log(result);
        //this.getInvestorAddress(this.investorDetailList.InvestorId);
        //this.getManager(this.investorDetailList.ProjectId);
        //this.getInvactivity(this.investorDetailList.Project.InvActivityId);
        // this.approve();
        //});
    };
    RegistrationCertificateComponent.prototype.getInvestmentLocation = function (parent) {
        var _this = this;
        this.addressService.getAddress(parent)
            .subscribe(function (result) {
            _this.investmentAddressList = result;
        }, function (error) { return _this.errMsg.getError(error); });
    };
    RegistrationCertificateComponent.prototype.getProjectCost = function (projectId) {
        var _this = this;
        this.projectCostService.getCostByProjectId(projectId)
            .subscribe(function (result) {
            // console.log(result);
            _this.projectCost = result;
            _this.projectCostTotal = result.LandCost + result.BuildingCost + result.MachineryCost + result.TransportCost +
                result.OfficeEquipmentCost + result.OtherCapitalCost + result.InitialWorkingCapitalCost;
        });
    };
    RegistrationCertificateComponent.prototype.getExportPercent = function (projectId) {
        var _this = this;
        this.projectOutputService.getPOutPutByProject(projectId)
            .subscribe(function (result) {
            // console.log(result);
            if (result == null) {
                _this.exportMarketShare = 0.00;
            }
            else {
                _this.exportMarketShare = result[0].ExportMarketShare;
            }
        });
    };
    RegistrationCertificateComponent.prototype.getManager = function () {
        var _this = this;
        this.InvestorId = this.route.snapshot.params['InvestorId'];
        this.associateService.getAssociateByInvestorId(this.InvestorId)
            .subscribe(function (result) {
            _this.manager = result;
        });
    };
    RegistrationCertificateComponent.prototype.getInvestorAddress = function (InvestorId) {
        var _this = this;
        this.addressService.getAddress(InvestorId)
            .subscribe(function (result) {
            _this.investorAddressList = result;
            // console.log(result);
        }, function (error) { return _this.errMsg.getError(error); });
    };
    RegistrationCertificateComponent.prototype.getInvactivity = function (id) {
        var _this = this;
        this.invactivityService.getInvActivity(id)
            .subscribe(function (result) {
            _this.investmentActivity = result;
        });
    };
    RegistrationCertificateComponent.prototype.approve = function () {
        var _this = this;
        this.lookup.Code = 44449;
        this.serviceApplication.changeApplicationStatus(this.lookup, this.investorDetailList.ServiceApplicationId)
            .subscribe(function (result) {
            _this.toast.success('Project approved successfully ', 'Success');
        });
    };
    RegistrationCertificateComponent.prototype.ngAfterViewChecked = function () {
    };
    RegistrationCertificateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration-certificate',
            template: __webpack_require__(/*! ./registration-certificate.component.html */ "./src/app/components/registration/registration-certificate/registration-certificate.component.html"),
            styles: [__webpack_require__(/*! ./registration-certificate.component.scss */ "./src/app/components/registration/registration-certificate/registration-certificate.component.scss")]
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
    ], RegistrationCertificateComponent);
    return RegistrationCertificateComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-investor-investor-tab-investor-tab-module~app-components-registration-Registration-ta~5f704b57.js.map