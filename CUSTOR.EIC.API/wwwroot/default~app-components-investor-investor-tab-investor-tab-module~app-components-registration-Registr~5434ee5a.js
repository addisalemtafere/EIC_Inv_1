(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-components-investor-investor-tab-investor-tab-module~app-components-registration-Registr~5434ee5a"],{

/***/ "./src/app/Services/bussiness/bussiness.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/Services/bussiness/bussiness.service.ts ***!
  \*********************************************************/
/*! exports provided: BussinessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BussinessService", function() { return BussinessService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");






var BussinessService = /** @class */ (function () {
    function BussinessService(httpClient, config, errMsg) {
        this.httpClient = httpClient;
        this.config = config;
        this.errMsg = errMsg;
    }
    BussinessService.prototype.saveBussiness = function (bussiness) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('Bussiness'), bussiness).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (bussinessdata) { return _this.bussinessdata = bussinessdata; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BussinessService.prototype.saveBussinessLicense = function (bussinessLicense) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('SaveBussinessLicense'), bussinessLicense).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (bussinesslicenceData) { return _this.bussinesslicenceData = bussinesslicenceData; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BussinessService.prototype.getBussinessLicense = function (businessId) {
        return this.httpClient.get(this.config.urls.url('GetBusinessLicenseGroup', businessId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BussinessService.prototype.getRegistration = function () {
        return this.httpClient.get(this.config.urls.url('Registrations')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BussinessService.prototype.getRegistrationByTin = function (Tin) {
        return this.httpClient.get(this.config.urls.url('RegistrationByTin', Tin)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BussinessService.prototype.getRegistrationBranchByInvestorId = function (InvestorId) {
        return this.httpClient.get(this.config.urls.url('RegistrationBranchByInvestorId', InvestorId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BussinessService.prototype.saveBussinessBranch = function (bussinessbranch) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('SaveBussinessBranch'), bussinessbranch).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (bussinessBranchdata) { return _this.bussinessBranchdata = bussinessBranchdata; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BussinessService.prototype.getBussinessBranchByInvestorId = function (InvestorId) {
        return this.httpClient.get(this.config.urls.url('BussinessBranchByInvestorId', InvestorId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BussinessService.prototype.DeleteBussinessBranchByAddresId = function (bussinessbranch) {
        return this.httpClient.post(this.config.urls.url('DeleteBussinessBranch'), bussinessbranch).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BussinessService.prototype.getMajorDivisionByInvestorId = function (InvestorId) {
        return this.httpClient.get(this.config.urls.url('GetMajorDivisionsByInvestorID', InvestorId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BussinessService.prototype.getRegistrationByInvestorId = function (InvestorId) {
        return this.httpClient.get(this.config.urls.url('investor', InvestorId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BussinessService.prototype.getRegistrationCatagory = function (InvestorId) {
        return this.httpClient.get(this.config.urls.url('GetRegistrationCatagory', InvestorId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BussinessService.prototype.getBusiness = function (BusinessId) {
        return this.httpClient.get(this.config.urls.url('GetBusiness', BusinessId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BussinessService.prototype.getBussinessMajorCatagory = function (BussinessId) {
        return this.httpClient.get(this.config.urls.url('GetBussinessMajorCatagory', BussinessId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BussinessService.prototype.getBussinessCatagory = function (BussinessId) {
        return this.httpClient.get(this.config.urls.url('GetBussinessCatagory', BussinessId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    BussinessService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(
        // {
        //   providedIn: 'root'
        // }
        ),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_4__["AppConfiguration"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"]])
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

module.exports = "<mat-card class=\"margin-2 simple-card\">\r\n  <mat-card-header>\r\n    <mat-card-subtitle class=\"sub-title\"></mat-card-subtitle>\r\n    <button mat-raised-button=\"\" color=\"primary\" (click)=\"generateCertification()\">\r\n      Generate\r\n      Certificate\r\n    </button>\r\n    <!--<button style=\"margin-left: 20px;\" mat-raised-button=\"\" color=\"primary\" (click)=\"addMessage()\">-->\r\n    <!--Send Message-->\r\n    <!--</button>-->\r\n\r\n  </mat-card-header>\r\n</mat-card>\r\n<mat-card class=\"margin-2 margin-top-20\" *ngIf=\"viewCertificate\">\r\n  <mat-card-header>\r\n    <div fxFlex=\"70\"></div>\r\n    <div fxFlex=\"15\" style=\"float: right;\">\r\n      <button mat-raised-button=\"\" color=\"primary\" (click)=\"print()\">Print</button>\r\n    </div>\r\n    <div fxFlex=\"15\" style=\"float: right;\">\r\n      <button mat-raised-button=\"\" color=\"primary\" (click)=\"generatePDF()\">Export As Pdf</button>\r\n    </div>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <mat-card-title>\r\n    </mat-card-title>\r\n    <div id=\"reg-certificate\" class=\"c-container\">\r\n      <header class=\"clearfix\">\r\n\r\n        <!--<div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\">-->\r\n          <!--<div class=\"block\" fxFlex=\"20%\">-->\r\n            <!--<div id=\"company\" class=\"clearfix logo-image\">-->\r\n              <!--<img width=\"100\" src=\"/assets/logo/Trade.gif\">-->\r\n            <!--</div>-->\r\n          <!--</div>-->\r\n          <!--<div class=\"block\" fxFlex=\"60%\">-->\r\n            <!--<div id=\"logo\" class=\"full-width\">-->\r\n              <!--<div class=\"certificate-title\">ንግድና ኢንዱስትሪ ሚኒስቴር</div>-->\r\n              <!--<div class=\"certificate-titlet\">Ministry of Trade and Industry</div>-->\r\n              <!--<div style=\"margin-top: 5px\" class=\"c-subtitle\">የንግድ ምዝገባ</div>-->\r\n              <!--<div class=\"c-subtitle\">Commertial Registration</div>-->\r\n            <!--</div>-->\r\n          <!--</div>-->\r\n          <!--<div class=\"block\" fxFlex=\"20%\">-->\r\n            <!--<div class=\"logo-image\" id=\"project\">-->\r\n              <!--<img width=\"100\" src=\"/assets/images/et.png\">-->\r\n            <!--</div>-->\r\n          <!--</div>-->\r\n        <!--</div>-->\r\n\r\n        <div style=\"float: right;padding-top: 100px\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\">\r\n\r\n          <div id=\"sub-header\" class=\"block\" style=\"font-size: 13px\">\r\n            <table>\r\n              <tr>\r\n                <td class=\"s-head\">\r\n                  የመዝገብ ቁጥር/File No.\r\n                </td>\r\n                <td class=\"dta-head\">{{investor?.RegistrationNumber}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"s-head\">\r\n                  የግብር ከፋይ መለያ ቁጥር/TIN\r\n                </td>\r\n                <td class=\"dta-head\">{{investor?.Tin}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"s-head\">\r\n                  የንግድ ምዝገባ ቁጥር\r\n                </td>\r\n                <td class=\"dta-head\">MOT/{{investor.RegistrationNumber }}/10\r\n                </td>\r\n\r\n              </tr>\r\n              <tr>\r\n                <td class=\"s-head\">\r\n                  Principal Registration No\r\n                </td>\r\n                <td class=\"dta-head\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"s-head\">\r\n                  የቀድሞው የምዝገባ ቁጥር <br>\r\n                </td>\r\n                <td class=\"dta-head\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"s-head\">\r\n                  የቀድሞው የምዝገባ ቀን <br> Previous Registration Date\r\n                </td>\r\n                <td class=\"dta-head\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"s-head\">\r\n                  የቀድሞው መጀመሪያ የተመዘገበበት ቀን <br> First Registration Date\r\n                </td>\r\n                <td class=\"dta-head\"></td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </header>\r\n      <div class=\"main\" style=\"border-top: 1px dotted #4b4f56;margin-top: 10px;\">\r\n        <div style=\"margin: 20px;\" class=\"row1\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"1\">\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <div class=\"reg-title\">ንግድ ምዝገባ ምስክር ወረቀት</div>\r\n            <div class=\"reg-sm-title\">በንግድ ምዝገባና የፈቃድ አዋጅ ቁጥር 980/2008 መሰረት <br> የተሰጠ</div>\r\n          </div>\r\n\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <div class=\"reg-title\">Commercial Registration Certificate</div>\r\n            <div class=\"reg-sm-title\">Issued under  Commercial registration and Business <br>\r\n            License Proc No. 980/2008</div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div style=\"\" class=\"row1\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"1\">\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <span class=\"caption\">1.የግለሰቡ/የድርጅቱ ስም</span>\r\n          </div>\r\n          <div class=\"block full-width value\" fxFlex=\"\">\r\n            <span class=\"data\">\r\n             {{investor.FirstName}}\r\n                  {{investor.FatherName}}\r\n                  {{investor.GrandName}}\r\n            </span>\r\n          </div>\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <span class=\"caption\">1. Owner/ Company Name</span>\r\n          </div>\r\n          <div class=\"block full-width value\" fxFlex=\"\">\r\n            <span class=\"data\">\r\n                {{investor.FirstNameEng}}\r\n                  {{investor.FatherNameEng}}\r\n                  {{investor.GrandNameEng}}\r\n            </span>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"row1\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"1\">\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <span class=\"caption\">2. ዜግነት</span>\r\n          </div>\r\n          <div class=\"block full-width value\" fxFlex=\"\">\r\n            <span class=\"data\">\r\n              {{investor.Nationality}}\r\n            </span>\r\n\r\n          </div>\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <span class=\"caption\">2. Nationality</span>\r\n          </div>\r\n          <div class=\"block full-width value\" fxFlex=\"\">\r\n            <span class=\"data \">\r\n{{investor.Nationality }}\r\n            </span>\r\n\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"row1\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"1\">\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <span class=\"caption\">3. የሥራ አስክያጅ ስም</span>\r\n          </div>\r\n          <div class=\"block full-width value\" fxFlex=\"\">\r\n            <span class=\"data\">\r\n  {{manager[0].FirstName}}\r\n                  {{manager[0].FatherName}}\r\n                  {{manager[0].GrandName}}\r\n            </span>\r\n            <!--<span class=\"data\" *ngIf=\"investorDetailList?.Investor.TradeName==undefined\">-->\r\n            <!--&#45;&#45;-->\r\n            <!--</span>-->\r\n\r\n          </div>\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <span class=\"caption\">3. Name of General Manager</span>\r\n          </div>\r\n          <div class=\"block full-width value\" fxFlex=\"\">\r\n            <span class=\"data\">\r\n\r\n               {{manager[0].FirstNameEng}}\r\n                  {{manager[0].FatherNameEng}}\r\n                  {{manager[0].GrandNameEng}}\r\n            </span>\r\n            <!--<span class=\"data\" *ngIf=\"investorDetailList?.Investor.TradeName==undefined\">-->\r\n            <!--&#45;&#45;-->\r\n            <!--</span>-->\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"row1\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"1\">\r\n\r\n\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <table class=\"full-width\">\r\n              <caption class=\"caption\">4. የንግድ ድርጅቱ አድራሻ</caption>\r\n              <tbody>\r\n              <tr>\r\n                <td class=\"a-header\">ክልል</td>\r\n                <td class=\"data value\">{{investorAddressList?.Region.Description}}</td>\r\n                <td class=\"a-header\">ዞን</td>\r\n                <td class=\"data value\">{{investorAddressList?.Region.Zones[0].DescriptionEnglish }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"a-header\">ከተማ</td>\r\n                <td class=\"data value\">--</td>\r\n                <td class=\"a-header\">ክፍለ ከተማ</td>\r\n                <td class=\"data value\">--</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"a-header\">ቀበሌ/ወረዳ</td>\r\n                <td class=\"data value\">\r\n                  {{investorAddressList?.Region.Zones[0].Woredas[0].Kebeles[0].Description}}\r\n                  /\r\n                  {{investorAddressList?.Region.Zones[0].Woredas[0].Description}}\r\n                </td>\r\n                <td class=\"a-header\">የቤት ቁጥር</td>\r\n                <td class=\"data value\">{{investorAddressList?.HouseNo}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"a-header\">ፖ ሳ ቁ</td>\r\n                <td class=\"data value\">{{investorAddressList?.Pobox}}</td>\r\n                <td class=\"a-header\">ስልክ ቁጥር</td>\r\n                <td class=\"data value\">{{investorAddressList?.TeleNo}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"a-header\">ፋክስ</td>\r\n                <td class=\"data value\">{{investorAddressList?.Fax}}</td>\r\n                <td class=\"a-header\">ኢ-ሜይል</td>\r\n                <td class=\"data value\">{{investorAddressList?.Email}}</td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n          </div>\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <table class=\"full-width\">\r\n              <caption class=\"caption\">4. Business Address</caption>\r\n              <tbody>\r\n              <tr>\r\n                <td class=\"a-header\">Region</td>\r\n                <td class=\"data value\">{{investorAddressList?.Region.DescriptionEnglish}}</td>\r\n                <td class=\"a-header\">Zone</td>\r\n                <td class=\"data value\">{{investorAddressList?.Woreda.Zone.DescriptionEnglish }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"a-header\">City</td>\r\n                <td class=\"data value\">--</td>\r\n                <td class=\"a-header\">Sub City</td>\r\n                <td class=\"data value\">--</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td class=\"a-header\">Kebele/Woreda</td>\r\n                <td class=\"data value\">\r\n                  {{investorAddressList?.Region.Zones[0].Woredas[0].Kebeles[0].DescriptionEnglish}}\r\n                  /\r\n                  {{investorAddressList?.Region.Zones[0].Woredas[0].DescriptionEnglish}}\r\n                </td>\r\n                <td class=\"a-header\">House No.</td>\r\n                <td class=\"data value\">{{investorAddressList?.HouseNo}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"a-header\">P.O.Box</td>\r\n                <td class=\"data value\">{{investorAddressList?.Pobox}}</td>\r\n                <td class=\"a-header\">Tel.No</td>\r\n                <td class=\"data value\">{{investorAddressList?.TeleNo}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"a-header\">Fax</td>\r\n                <td class=\"data value\">{{investorAddressList?.Fax}}</td>\r\n                <td class=\"a-header\">E-mail</td>\r\n                <td class=\"data value\">{{investorAddressList?.Email}}</td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"row1\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"1\">\r\n\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <span class=\"caption\">5. ካፒታል በኢት ብር</span>\r\n          </div>\r\n          <div class=\"block full-width value\" fxFlex=\"\">\r\n            <span class=\"data \">{{investor?.PaidCapital}}</span>\r\n\r\n          </div>\r\n\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <span class=\"caption\">5. Amount of Capital</span>\r\n          </div>\r\n          <div class=\"block full-width value\" fxFlex=\"\">\r\n            <span class=\"data \">{{investor?.PaidCapital}}</span>\r\n\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"row1\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"1\">\r\n\r\n\r\n          <div class=\"block full-width value\" fxFlex=\"\">\r\n            <table class=\"full-width\">\r\n              <caption class=\"caption\">6. የተስማራባቸው የንግድ ሥራዎች</caption>\r\n              <tbody>\r\n\r\n              <tr *ngFor=\"let vv of MajorDivisionList\">\r\n\r\n                <td style=\"text-align: start !important;padding-left: 20px;\">\r\n                  {{vv.Description}}\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n          </div>\r\n\r\n          <div class=\"block full-width value\" fxFlex=\"\">\r\n            <table class=\"full-width\">\r\n              <caption class=\"caption\">6. Type of activities engaged</caption>\r\n              <tbody>\r\n\r\n              <tr *ngFor=\"let vv of MajorDivisionList\">\r\n\r\n                <td style=\"text-align: start !important;padding-left: 20px;\">\r\n                  {{vv.EnglishDescription}}\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div id=\"reDate\" class=\"row1\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"1\">\r\n\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <span class=\"t-header\">\r\n              <table class=\"full-width\">\r\n              <tr>\r\n                <td style=\"font-size: 14px\"> በግብር ከፋይ መለያ ቁጥር {{investor?.Tin}} የተመዘገበ መሆኑን እናረጋግጣለን ::\r\n                </td>\r\n              </tr>\r\n            </table>\r\n\r\n            <table class=\"full-width\">\r\n              <tr>\r\n                <td> ይህ የምዝገባ የምስክር ወረቀት ዛሬ {{date | date}} በአዲስ አበባ\r\n                  ተሰጠ ።\r\n                </td>\r\n              </tr>\r\n            </table>\r\n            </span>\r\n          </div>\r\n\r\n\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <span class=\"t-header\">\r\n              has duly been registered under TIN {{investor?.Tin}} <br>\r\n                  This Registration Certification is issued in {{date | date}} <br>\r\n                  on Addis Ababa\r\n            </span>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\" style=\"font-size: 12px;\">\r\n          <div id=\"notices\">\r\n            <div>ማሳሰቢያ/Notice:</div>\r\n            <!--<div>1. ይህ የንግድ ምዝገባ በአዋጅ ቁጥር 686/2002 መሠረት በየበጀት ዓመቱ ከሐምሌ 1 ቀን እስከ ታህሳስ 30 ቀን ድረስ ያለቅጣት የሚታደስ ሲሆን፤ ከጥር 1 ቀን-->\r\n            <!--እስከ ሰኔ 30 ቀን ድረስ በአዋጅ በተቀመጠው የሚታደስ ይሆናል።<br>-->\r\n            <!--This License Shall be renewed annually in accordance with Regulation no 686/2002 from 1 July to December-->\r\n            <!--30 E.C with out penalty and with penalty from first January to June 30 E.C-->\r\n            <!--</div>-->\r\n            <div style=\"margin-top: 10px !important;\">\r\n              1. ይህ የንግድ ምዝገባ የምስክር ወረቀት በዋስትና ወይም በእዳ ሊያዝ አይችልም።<br>\r\n              The holder of this License is forbidden for surety ship or debt.\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/registration/registration-certificate/registration-certificate.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/registration/registration-certificate/registration-certificate.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearfix:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.c-container {\n  background-color: white !important;\n  border: 1px solid #c4cbcc;\n  padding: 5px;\n  color: #000000 !important;\n  font-family: Nyala !important;\n  font-size: 12px !important;\n  font-weight: normal !important;\n  font-style: normal !important; }\n\nheader {\n  margin-bottom: 5px; }\n\n.logo-image {\n  width: 128px !important; }\n\n#logo {\n  text-align: center;\n  margin-bottom: 10px; }\n\n#logo img {\n  width: 90px; }\n\n#project {\n  float: left; }\n\n#Title1 {\n  text-align: Center; }\n\n#project span {\n  color: #5D6975;\n  text-align: right;\n  width: 52px;\n  margin-right: 10px;\n  display: inline-block;\n  font-size: 0.8em; }\n\n#sub-header span {\n  color: #5D6975;\n  text-align: right;\n  width: 52px;\n  margin-right: 10px;\n  display: inline-block;\n  font-size: 0.8em; }\n\n#sub-header {\n  float: right;\n  width: 350px;\n  padding-right: 5px !important; }\n\n#sub-header > table > tbody > tr > td {\n  text-align: left !important; }\n\n#sub-header > table > tbody > tr > td.dta-head {\n  border-bottom: 1px dotted rgba(3, 16, 11, 0.76) !important; }\n\ntable > tbody > tr > td.a-header {\n  color: #000000 !important;\n  font-family: Nyala !important;\n  font-size: 14px !important;\n  font-weight: normal !important;\n  font-style: normal !important; }\n\n.certificate-title {\n  font-size: 23px;\n  padding: 1px 4px;\n  font-size: 26px;\n  font-weight: bold;\n  font-family: monospace; }\n\n.c-subtitle {\n  font-size: 14px;\n  text-align: center;\n  padding: 2px; }\n\n#TIN {\n  font-weight: bold !important; }\n\n#company {\n  float: right;\n  text-align: right; }\n\n#project div,\n#company div {\n  white-space: nowrap; }\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin-bottom: 20px; }\n\ntable tr:nth-child(2n-1) td {\n  background: white; }\n\n.t-header {\n  text-align: left !important;\n  text-transform: capitalize !important;\n  font-family: Nyala !important;\n  font-size: 14px !important;\n  font-weight: bolder !important;\n  font-style: normal !important; }\n\ntable tr > td.data {\n  border-bottom: 1px dotted rgba(3, 16, 11, 0.76) !important;\n  font-size: 16px !important; }\n\ntable th,\ntable td {\n  text-align: center; }\n\ntable .service,\ntable .desc {\n  text-align: left; }\n\ntable td.unit,\ntable td.qty,\ntable td.total {\n  font-size: 13px; }\n\ntable td, table th {\n  border: none !important;\n  padding: 2px; }\n\n#notices {\n  margin: 0px 20px !important; }\n\n.notice {\n  color: #000000 !important;\n  font-family: Nyala !important;\n  font-size: 13px !important;\n  font-weight: lighter; }\n\n#investmentCapital .value {\n  width: 250px; }\n\n#investmentCapitalEn .value {\n  width: 250px; }\n\n#basic .value {\n  width: 250px;\n  text-transform: capitalize; }\n\n#basicEn .value {\n  width: 250px;\n  text-transform: capitalize; }\n\nnobr {\n  white-space: nowrap; }\n\ntable {\n  border: none !important;\n  border-spacing: 0px !important; }\n\n.value {\n  border-bottom: 1px dotted rgba(3, 16, 11, 0.76) !important;\n  text-transform: capitalize;\n  font-size: 16px !important;\n  font-family: Nyala !important;\n  text-align: center; }\n\n.caption {\n  text-align: left !important;\n  text-transform: capitalize !important;\n  font-family: Nyala !important;\n  font-size: 14px !important;\n  font-weight: bolder !important;\n  color: black; }\n\n.dta-head {\n  border-bottom: 1px dotted black !important;\n  color: #000000 !important;\n  font-family: Nyala !important;\n  font-size: 16px !important;\n  width: 60%; }\n\n#sub-header > table > tbody > tr > td.dta-head {\n  text-align: center !important; }\n\n.s-head {\n  color: #000000 !important;\n  font-family: Nyala !important;\n  font-size: 16px !important;\n  width: 40%; }\n\n.rowlast {\n  margin-bottom: 10px;\n  margin-top: 25px; }\n\n.row1 {\n  padding: 2px; }\n\n.renewDate {\n  font-size: 25px !important;\n  font-weight: bold !important; }\n\n.reg-title {\n  text-align: center;\n  font-size: 18px;\n  font-weight: bolder;\n  margin-bottom: 10px; }\n\n.reg-sm-title {\n  text-align: center;\n  font-size: 15px;\n  font-weight: bolder; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24tY2VydGlmaWNhdGUvQzpcXFVzZXJzXFxGZXRpaGEgS1xcRGVza3RvcFxcREVWXFxHaXRMYWJcXEludmVzdG1uZXRcXENVU1RPUi5FSUMuQVBJXFxzcmMvYXBwXFxjb21wb25lbnRzXFxyZWdpc3RyYXRpb25cXHJlZ2lzdHJhdGlvbi1jZXJ0aWZpY2F0ZVxccmVnaXN0cmF0aW9uLWNlcnRpZmljYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQ0FBa0M7RUFDbEMseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsNkJBQTZCLEVBQUE7O0FBSy9CO0VBRUUsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLDZCQUE2QixFQUFBOztBQU0vQjtFQUNFLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLDBEQUF1RCxFQUFBOztBQUd6RDtFQUNFLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5Qiw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsZUFBZTtFQUVmLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR25COztFQUVFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLDJCQUEyQjtFQUkzQixxQ0FBcUM7RUFFckMsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsMERBQXVEO0VBQ3ZELDBCQUEwQixFQUFBOztBQUk1Qjs7RUFFRSxrQkFBa0IsRUFBQTs7QUFHcEI7O0VBRUUsZ0JBQWdCLEVBQUE7O0FBR2xCOzs7RUFHRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVksRUFBQTs7QUFHZDtFQUNFLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLFlBQVk7RUFDWiwwQkFBMEIsRUFBQTs7QUFJNUI7RUFDRSxZQUFZO0VBQ1osMEJBQTBCLEVBQUE7O0FBSTVCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsdUJBQXVCO0VBQ3ZCLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLDBEQUEwRDtFQUMxRCwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixrQkFBa0IsRUFBQTs7QUFJcEI7RUFDRSwyQkFBMkI7RUFDM0IscUNBQXFDO0VBQ3JDLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLFlBQVksRUFBQTs7QUFHZDtFQUNFLDBDQUEwQztFQUMxQyx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixVQUFVLEVBQUE7O0FBSVo7RUFDRSw2QkFBNkIsRUFBQTs7QUFJL0I7RUFDRSx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixVQUFVLEVBQUE7O0FBR1o7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsMEJBQTBCO0VBQzFCLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUlyQjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CLEVBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi1jZXJ0aWZpY2F0ZS9yZWdpc3RyYXRpb24tY2VydGlmaWNhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xlYXJmaXg6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5jLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYzRjYmNjO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBOeWFsYSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcclxuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcclxuICAvL21hcmdpbi1yaWdodDogMTcwcHg7XHJcbiAgLy93aWR0aDogMjAwbW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICAvL3BhZGRpbmc6IDEwcHggMDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5sb2dvLWltYWdlIHtcclxuICB3aWR0aDogMTI4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuI2xvZ28ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4jbG9nbyBpbWcge1xyXG4gIHdpZHRoOiA5MHB4O1xyXG59XHJcblxyXG4jcHJvamVjdCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiNUaXRsZTEge1xyXG4gIHRleHQtYWxpZ246IENlbnRlcjtcclxufVxyXG5cclxuI3Byb2plY3Qgc3BhbiB7XHJcbiAgY29sb3I6ICM1RDY5NzU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgd2lkdGg6IDUycHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG59XHJcblxyXG4jc3ViLWhlYWRlciBzcGFuIHtcclxuICBjb2xvcjogIzVENjk3NTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB3aWR0aDogNTJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcbn1cclxuXHJcbiNzdWItaGVhZGVyIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jc3ViLWhlYWRlciA+IHNwYW4ge1xyXG59XHJcblxyXG4jc3ViLWhlYWRlciA+IHRhYmxlID4gdGJvZHkgPiB0ciA+IHRkIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNzdWItaGVhZGVyID4gdGFibGUgPiB0Ym9keSA+IHRyID4gdGQuZHRhLWhlYWQge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgcmdiYSgzLDE2LDExLDAuNzYpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkLmEtaGVhZGVyIHtcclxuICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBOeWFsYSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcclxuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNlcnRpZmljYXRlLXRpdGxlIHtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgcGFkZGluZzogMXB4IDRweDtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxufVxyXG5cclxuLmMtc3VidGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICAvL2ZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbiNUSU4ge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNjb21wYW55IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbiNwcm9qZWN0IGRpdixcclxuI2NvbXBhbnkgZGl2IHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBib3JkZXItc3BhY2luZzogMDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG50YWJsZSB0cjpudGgtY2hpbGQoMm4tMSkgdGQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4udC1oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAvL2NvbG9yOiAjMjIyZDMyO1xyXG4gIC8vZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgLy9mb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuXHJcbiAgZm9udC1mYW1pbHk6IE55YWxhICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlciAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50YWJsZSB0ciA+IHRkLmRhdGEge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgcmdiYSgzLDE2LDExLDAuNzYpICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG50YWJsZSB0aCxcclxudGFibGUgdGQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGFibGUgLnNlcnZpY2UsXHJcbnRhYmxlIC5kZXNjIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG50YWJsZSB0ZC51bml0LFxyXG50YWJsZSB0ZC5xdHksXHJcbnRhYmxlIHRkLnRvdGFsIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbnRhYmxlIHRkLCB0YWJsZSB0aCB7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMnB4O1xyXG59XHJcblxyXG4jbm90aWNlcyB7XHJcbiAgbWFyZ2luOiAwcHggMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubm90aWNlIHtcclxuICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBOeWFsYSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG59XHJcblxyXG4jaW52ZXN0bWVudENhcGl0YWwgLnZhbHVlIHtcclxuICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbiNpbnZlc3RtZW50Q2FwaXRhbEVuIC52YWx1ZSB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4jYmFzaWMgLnZhbHVlIHtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblxyXG59XHJcblxyXG4jYmFzaWNFbiAudmFsdWUge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuXHJcbn1cclxuXHJcbm5vYnIge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXItc3BhY2luZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52YWx1ZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCByZ2JhKDMsIDE2LCAxMSwgMC43NikgIWltcG9ydGFudDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogTnlhbGEgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4uY2FwdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IE55YWxhICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlciAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmR0YS1oZWFkIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogTnlhbGEgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICB3aWR0aDogNjAlO1xyXG5cclxufVxyXG5cclxuI3N1Yi1oZWFkZXIgPiB0YWJsZSA+IHRib2R5ID4gdHIgPiB0ZC5kdGEtaGVhZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4ucy1oZWFkIHtcclxuICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBOeWFsYSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbi5yb3dsYXN0IHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5yb3cxIHtcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbi5yZW5ld0RhdGUge1xyXG4gIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7O1xyXG59XHJcblxyXG4ucmVnLXRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbn1cclxuXHJcbi5yZWctc20tdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _Services_project_associate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Services/project-associate.service */ "./src/app/Services/project-associate.service.ts");
/* harmony import */ var _Services_certificate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Services/certificate.service */ "./src/app/Services/certificate.service.ts");
/* harmony import */ var _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Services/project-profile.service */ "./src/app/Services/project-profile.service.ts");
/* harmony import */ var _Services_service_application_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Services/service-application.service */ "./src/app/Services/service-application.service.ts");
/* harmony import */ var _Services_project_cost_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../Services/project-cost.service */ "./src/app/Services/project-cost.service.ts");
/* harmony import */ var _setting_category_tabs_InvActivity_invactivity_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../setting/category-tabs/InvActivity/invactivity.service */ "./src/app/components/setting/category-tabs/InvActivity/invactivity.service.ts");
/* harmony import */ var _Services_project_output_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../Services/project-output.service */ "./src/app/Services/project-output.service.ts");
/* harmony import */ var _Services_Address_address_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../Services/Address/address.service */ "./src/app/Services/Address/address.service.ts");
/* harmony import */ var _project_profile_notification_notification_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../project-profile/notification/notification.component */ "./src/app/components/project-profile/notification/notification.component.ts");
/* harmony import */ var _model_lookupData__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../model/lookupData */ "./src/app/model/lookupData.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_bussiness_bussiness_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../Services/bussiness/bussiness.service */ "./src/app/Services/bussiness/bussiness.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _Services_associate_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../Services/associate.service */ "./src/app/Services/associate.service.ts");
/* harmony import */ var _enum_enums__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../enum/enums */ "./src/app/enum/enums.ts");





















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
        this.lookup = new _model_lookupData__WEBPACK_IMPORTED_MODULE_15__["Lookup"]();
    }
    RegistrationCertificateComponent.prototype.ngOnInit = function () {
        this.getDate();
    };
    RegistrationCertificateComponent.prototype.getDate = function () {
        var today = new Date();
        this.date = today;
    };
    RegistrationCertificateComponent.prototype.addMessage = function () {
        this.dialog.open(_project_profile_notification_notification_component__WEBPACK_IMPORTED_MODULE_14__["NotificationComponent"]);
    };
    RegistrationCertificateComponent.prototype.generateCertification = function () {
        this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
        this.getInvestorDetail(this.ServiceApplicationId);
        this.viewCertificate = true;
        this.approve();
    };
    RegistrationCertificateComponent.prototype.generatePDF = function () {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_3__();
        var width = doc.internal.pageSize.width;
        var height = doc.internal.pageSize.height;
        html2canvas__WEBPACK_IMPORTED_MODULE_2__(document.getElementById('certificate')).then(function (canvas) {
            var img = canvas.toDataURL('image/png');
            doc.addImage(img, 'JPEG', 5, 5, 200, 287);
            doc.autoPrint();
            var filename = 'certificate.pdf';
            doc.save(filename);
            doc.output('dataurlnewwindow');
        });
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
        // this.lookup.Code = 44449;
        this.lookup.Code = _enum_enums__WEBPACK_IMPORTED_MODULE_20__["ApplicationStatusEnum"].Completed;
        var ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
        this.serviceApplication.changeInvestorApplicationStatus(this.lookup, ServiceApplicationId)
            .subscribe(function (result) {
            _this.toast.success('Customer and Commercial Registration approved successfully ', 'Success');
        });
    };
    RegistrationCertificateComponent.prototype.ngAfterViewChecked = function () {
    };
    RegistrationCertificateComponent.prototype.print = function () {
        var printContents, popupWin;
        printContents = document.getElementById('reg-certificate').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n\n      <html>\n        <head>\n          <title>EIC</title>\n          <style>\n          .clearfix:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n  .t-header {\n  text-align: left !important;\n  text-transform: capitalize !important;\n  font-size: 10px !important;\n  font-weight: bolder !important;\n  color: black;\n}\n\n.c-container {\n  background-color: white !important;\n  border: 1px solid #c4cbcc;\n  padding: 5px;\n  color: #000000 !important;\n  font-family: Nyala !important;\n  font-size: 11px !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n \n}\n.notice{\n color: #000000 !important;\n  font-family: Nyala !important;\n  font-size: 12px !important;\n}\nheader {\n  margin-bottom: 1px;\n}\n\n\n\n\n#project span {\n  color: #5D6975;\n  text-align: right;\n  width: 52px;\n  margin-right: 10px;\n  display: inline-block;\n  font-size: 12px;\n}\n\n#sub-header span {\n  color: #5D6975;\n  text-align: right;\n  width: 40px;\n  margin-right: 2px;\n  display: inline-block;\n  font-size: 12px;\n}\n\n#sub-header {\n  float: right;\n  width: 250px;\n  padding-right: 5px !important;\n}\n\n#sub-header > span {\n}\n\n#sub-header > table > tbody > tr > td {\n  text-align: left !important;\n}\n.dta-head {\n  border-bottom: 1px dotted rgba(3,16,11,0.76) !important;\n   color: #000000 !important;\n  font-family: Nyala !important;\n  font-size: 12px !important;\n  width: 60%;\n}\n#sub-header > table > tbody > tr > td.dta-head {\n  text-align: center !important;\n\n}\n.a-header {\n  color: #000000 !important;\n  font-family: Nyala !important;\n  font-size: 11px !important;\n  font-weight: bolder !important;\n}\n.s-head{\n  color: #000000 !important;\n  font-family: Nyala !important;\n  font-size: 12px !important;\n  width: 40%;\n}\n.c-subtitle {\n  font-size: 14px;\n  /*font-weight: bold;*/\n  text-align: center;\n  padding: 2px;\n}\n\n\n#project div,\n#company div {\n  white-space: nowrap;\n}\n#notices {\n  padding: 0px 20px !important;\n}\n .value {\n \n  border-bottom: 1px dotted rgba(3,16,11,0.76) !important;\n  text-transform: capitalize;\n  font-size: 12px !important;\n  font-family: Nyala !important;\n  text-align: center;\n\n}\n\n\n\nnobr {\n  white-space: nowrap;\n}\n.caption {\n  text-align: left !important;\n  text-transform: capitalize !important;\n  font-family: Nyala !important;\n  font-size: 12px !important;\n  font-weight: bolder !important;\n  color: black;\n}\n\n\n#sub-header span {\n  color: #5D6975;\n  text-align: right;\n  width: 350px;\n  margin-right: 10px;\n  display: inline-block;\n  font-size: 10px;\n}\n.row1{\n  padding: 2px;\n}\n.rowlast{\n  margin-bottom: 10px;\n  margin-top: 25px;\n}\n.renewDate{\n  font-size: 20px;\n}\n.renewDate {\n  font-size: 25px !important;\n  font-weight:bold ;\n}\n\n\n.reg-title {\n  text-align: center;\n  font-size: 18px;\n  font-weight: bolder;\n  margin-bottom: 10px;\n\n}\n\n.reg-sm-title {\n  text-align: center;\n  font-size: 15px;\n  font-weight: bolder;\n}\n          </style>\n        </head>\n    <body onload=\"window.print();window.close()\">" + printContents + "</body>\n      </html>\n");
        popupWin.document.close();
    };
    RegistrationCertificateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration-certificate',
            template: __webpack_require__(/*! ./registration-certificate.component.html */ "./src/app/components/registration/registration-certificate/registration-certificate.component.html"),
            styles: [__webpack_require__(/*! ./registration-certificate.component.scss */ "./src/app/components/registration/registration-certificate/registration-certificate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_certificate_service__WEBPACK_IMPORTED_MODULE_7__["CertificateService"],
            _Services_project_associate_service__WEBPACK_IMPORTED_MODULE_6__["ProjectAssociateService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"],
            _Services_associate_service__WEBPACK_IMPORTED_MODULE_19__["AssociateService"],
            _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_8__["ProjectProfileService"],
            _Services_service_application_service__WEBPACK_IMPORTED_MODULE_9__["ServiceApplicationService"],
            _Services_bussiness_bussiness_service__WEBPACK_IMPORTED_MODULE_17__["BussinessService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_18__["ToastrService"],
            _Services_project_cost_service__WEBPACK_IMPORTED_MODULE_10__["ProjectCostService"],
            _setting_category_tabs_InvActivity_invactivity_service__WEBPACK_IMPORTED_MODULE_11__["InvactivityService"],
            _Services_project_output_service__WEBPACK_IMPORTED_MODULE_12__["ProjectOutputService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"],
            _Services_Address_address_service__WEBPACK_IMPORTED_MODULE_13__["AddressService"]])
    ], RegistrationCertificateComponent);
    return RegistrationCertificateComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-components-investor-investor-tab-investor-tab-module~app-components-registration-Registr~5434ee5a.js.map