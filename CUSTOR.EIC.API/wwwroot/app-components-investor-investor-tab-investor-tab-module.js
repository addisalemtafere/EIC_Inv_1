(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-investor-investor-tab-investor-tab-module"],{

/***/ "./src/app/components/investor/company-clearance-form/company-clearance-form.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/investor/company-clearance-form/company-clearance-form.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@fadeInOut] class=\"page-content margin-2 mat-elevation-z8\">\r\n  <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>\r\n  <form #form=\"ngForm\" [formGroup]=\"companyClearanceForm\" novalidate (ngSubmit)=\"onSubmit()\" fxLayout=\"column\"\r\n        autocomplete=\"off\">\r\n\r\n\r\n    <mat-divider></mat-divider>\r\n    <div id=\"divSole\" style=\"margin-top: 40px\">\r\n\r\n      <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n        <div class=\"block full-width\">\r\n          <mat-form-field fxFlex=\"100\" class=\"full-width\">\r\n            <mat-label>Company Name English Option One</mat-label>\r\n            <input required matInput=\"\" formControlName=\"CompanyNameOneEnglish\">\r\n            <mat-error *ngIf=\"companyNameOneEnglish.hasError('required')\">\r\n              {{'common.validation.Required' | translate}}\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"block full-width\">\r\n          <mat-form-field fxFlex=\"100\" class=\"full-width\">\r\n            <mat-label>Company Name Amharic Option One</mat-label>\r\n            <input required matInput=\"\" formControlName=\"CompanyNameOneAmharic\">\r\n            <mat-error *ngIf=\"companyNameOneAmharic.hasError('required')\">\r\n              {{'common.validation.Required' | translate}}\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"block full-width\" *ngIf=\"canViewTasks\">\r\n          <div mat-dialog-actions>\r\n\r\n            <button mat-raised-button (click)=\"onApproveNameOptionOne()\" color=\"primary\" type=\"button\">\r\n              {{'common.commands.Approve' | translate}}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n        <div class=\"block full-width\">\r\n          <mat-form-field fxFlex=\"100\" class=\"full-width\">\r\n            <mat-label>Company NameEnglish Option Two</mat-label>\r\n            <input required matInput=\"\" formControlName=\"CompanyNameTwoEnglish\">\r\n            <mat-error *ngIf=\"companyNameTwoEnglish.hasError('required')\">\r\n              {{'common.validation.Required' | translate}}\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"block full-width\">\r\n          <mat-form-field fxFlex=\"100\" class=\"full-width\">\r\n            <mat-label>Company Name Amharic Option Two</mat-label>\r\n            <input required matInput=\"\" formControlName=\"CompanyNameTwoAmharic\">\r\n            <mat-error *ngIf=\"companyNameTwoAmharic.hasError('required')\">\r\n              {{'common.validation.Required' | translate}}\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"block full-width\" *ngIf=\"canViewTasks\">\r\n\r\n          <div mat-dialog-actions>\r\n            <button mat-raised-button (click)=\"onApproveNameOptionTwo()\" color=\"primary\" type=\"button\">\r\n              {{'common.commands.Approve' | translate}}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n        <div class=\"block full-width\">\r\n          <mat-form-field fxFlex=\"100\" class=\"full-width\">\r\n            <mat-label>Company NameEnglish Option Three</mat-label>\r\n            <input required matInput=\"\" formControlName=\"CompanyNameThreeEnglish\">\r\n            <mat-error *ngIf=\"companyNameThreeEnglish.hasError('required')\">\r\n              {{'common.validation.Required' | translate}}\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"block full-width\">\r\n          <mat-form-field fxFlex=\"100\" class=\"full-width\">\r\n            <mat-label>Company Name Amharic Option Three</mat-label>\r\n            <input required matInput=\"\" formControlName=\"CompanyNameThreeAmharic\">\r\n            <mat-error *ngIf=\"companyNameThreeAmharic.hasError('required')\">\r\n              {{'common.validation.Required' | translate}}\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"block full-width\" *ngIf=\"canViewTasks\">\r\n\r\n          <button mat-raised-button (click)=\"onApproveNameOptionThree()\" color=\"primary\" type=\"button\">\r\n            {{'common.commands.Approve' | translate}}\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <mat-divider></mat-divider>\r\n    <div mat-dialog-actions style=\"margin: 20px; text-align: center\">\r\n      <button mat-raised-button type=\"submit\" color=\"primary\" style=\"margin-right: 10px\">\r\n        {{'common.commands.Save' | translate}}\r\n      </button>\r\n      <button mat-raised-button (click)=\"onBack()\" color=\"warn\" type=\"button\">\r\n        {{'common.commands.Cancel' | translate}}\r\n      </button>\r\n    </div>\r\n    <!--<pre>{{companyClearanceForm.value | json}}</pre>-->\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/investor/company-clearance-form/company-clearance-form.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/investor/company-clearance-form/company-clearance-form.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* div {\r\n  display: flex;\r\n} */\n.page-content {\n  margin-bottom: 30px;\n  background-color: white; }\nmat-card {\n  max-width: 100%;\n  margin: 10px auto;\n  text-align: center; }\nmat-checkbox {\n  max-width: 500px;\n  text-align: left;\n  margin-top: -40px;\n  font-size: small;\n  vertical-align: bottom; }\nmat-label {\n  font-size: smaller; }\nmat-form-field {\n  max-width: 130px;\n  margin-right: 10px;\n  font-size: small; }\nmat-divider {\n  margin-bottom: 10px;\n  border-top-color: #00bcd4; }\nh4 {\n  margin-bottom: 0px;\n  font-size: medium;\n  color: #00bcd4;\n  margin-top: 10px; }\n.row {\n  text-align: left;\n  margin-bottom: 15px; }\n.customer-radio-group {\n  display: inherit;\n  flex-direction: row; }\n.customer-radio-button {\n  margin: 5px; }\n.inputfile {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1; }\n.inputfile + label {\n  font-size: 12px;\n  color: steelblue;\n  background-color: white;\n  display: inline-block;\n  cursor: pointer; }\n.inputfile:focus + label,\n.inputfile + label:hover {\n  color: goldenrod; }\n"

/***/ }),

/***/ "./src/app/components/investor/company-clearance-form/company-clearance-form.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/investor/company-clearance-form/company-clearance-form.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CompanyClearanceFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyClearanceFormComponent", function() { return CompanyClearanceFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/services/configuration.service */ "./src/@custor/services/configuration.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _company_clearance_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./company-clearance.service */ "./src/app/components/investor/company-clearance-form/company-clearance.service.ts");
/* harmony import */ var _custor_validation_custom_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @custor/validation/custom/form */ "./src/@custor/validation/custom/form.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _custor_services_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @custor/services/animations */ "./src/@custor/services/animations.ts");
/* harmony import */ var _investor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../investor.service */ "./src/app/components/investor/investor.service.ts");
/* harmony import */ var _model_security_permission_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../model/security/permission.model */ "./src/app/model/security/permission.model.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var CompanyClearanceFormComponent = /** @class */ (function () {
    function CompanyClearanceFormComponent(activatedRoute, router, errMsg, accountService, formService, dataSharing, companyClearanceService, investorService, configService, toastr, appConfig, fb) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.errMsg = errMsg;
        this.accountService = accountService;
        this.formService = formService;
        this.dataSharing = dataSharing;
        this.companyClearanceService = companyClearanceService;
        this.investorService = investorService;
        this.configService = configService;
        this.toastr = toastr;
        this.appConfig = appConfig;
        this.fb = fb;
    }
    Object.defineProperty(CompanyClearanceFormComponent.prototype, "companyNameOneEnglish", {
        get: function () {
            return this.companyClearanceForm.get('CompanyNameOneEnglish');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompanyClearanceFormComponent.prototype, "companyNameOneAmharic", {
        get: function () {
            return this.companyClearanceForm.get('CompanyNameOneAmharic');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompanyClearanceFormComponent.prototype, "companyNameTwoEnglish", {
        get: function () {
            return this.companyClearanceForm.get('CompanyNameTwoEnglish');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompanyClearanceFormComponent.prototype, "companyNameTwoAmharic", {
        get: function () {
            return this.companyClearanceForm.get('CompanyNameTwoAmharic');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompanyClearanceFormComponent.prototype, "companyNameThreeEnglish", {
        get: function () {
            return this.companyClearanceForm.get('CompanyNameThreeEnglish');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompanyClearanceFormComponent.prototype, "companyNameThreeAmharic", {
        get: function () {
            return this.companyClearanceForm.get('CompanyNameThreeAmharic');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompanyClearanceFormComponent.prototype, "canViewTasks", {
        get: function () {
            return this.accountService.userHasPermission(_model_security_permission_model__WEBPACK_IMPORTED_MODULE_12__["Permission"].viewServiceList);
        },
        enumerable: true,
        configurable: true
    });
    CompanyClearanceFormComponent.prototype.ngOnInit = function () {
        this.InvestorId = this.activatedRoute.snapshot.params['InvestorId'];
        this.initForm();
        if (this.InvestorId < 1) {
            this.editMode = false;
            return;
        }
        if (this.InvestorId) {
            this.getCompanyClearance(this.InvestorId);
        }
    };
    CompanyClearanceFormComponent.prototype.initForm = function () {
        this.companyClearanceForm = this.fb.group({
            CompanyClearanceId: [''],
            InvestorId: this.InvestorId,
            CompanyNameOneEnglish: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            CompanyNameOneAmharic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            CompanyNameTwoEnglish: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            CompanyNameTwoAmharic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            CompanyNameThreeEnglish: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            CompanyNameThreeAmharic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    CompanyClearanceFormComponent.prototype.getCompanyClearance = function (id) {
        var _this = this;
        this.loadingIndicator = true;
        this.companyClearanceSub = this.companyClearanceService
            .getCompanyClearanceByInvestorId(id)
            .subscribe(function (result) {
            _this.companyClearance = result;
            if (result == null) {
                _this.editMode = false;
            }
            else {
                _this.editMode = true;
                _this.updateForm();
            }
        }, function (error) { return _this.toastr.error(error); });
        this.loadingIndicator = false;
    };
    CompanyClearanceFormComponent.prototype.updateForm = function () {
        this.companyClearanceForm.patchValue({
            CompanyNameOneEnglish: this.companyClearance.CompanyNameOneEnglish || '',
            CompanyNameOneAmharic: this.companyClearance.CompanyNameOneAmharic || '',
            CompanyNameTwoEnglish: this.companyClearance.CompanyNameTwoEnglish || '',
            CompanyNameTwoAmharic: this.companyClearance.CompanyNameTwoAmharic || '',
            CompanyNameThreeEnglish: this.companyClearance.CompanyNameThreeEnglish || '',
            CompanyNameThreeAmharic: this.companyClearance.CompanyNameThreeAmharic || ''
        });
    };
    CompanyClearanceFormComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.companyClearanceForm.valid) {
            // console.log('error!!');
            return;
        }
        this.loadingIndicator = true;
        if (!this.editMode) {
            return this.companyClearanceService.create(this.getEditedCompanyNames())
                .subscribe(function (result) {
                _this.toastr.success("successfully saved");
            }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
        }
        else {
            // Todo  Id is correct
            this.companyClearanceService.update(this.companyClearanceForm.value, 1)
                .subscribe(function (result) {
            }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
        }
        this.editMode = true;
    };
    CompanyClearanceFormComponent.prototype.onBack = function () {
        window.history.back();
    };
    CompanyClearanceFormComponent.prototype.onApproveNameOptionOne = function () {
        var _this = this;
        if (this.companyNameOneAmharic.value == '' && this.companyNameOneEnglish.value == '') {
            this.toastr.error('Name must be inserted');
            return;
        }
        this.companyClearance = this.getEditedCompanyNames();
        this.companyClearance.IsCompanyNameOneApproved = true;
        this.companyClearance.IsCompanyNameTwoApproved = false;
        this.companyClearance.IsCompanyNameThreeApproved = false;
        this.loadingIndicator = true;
        return this.companyClearanceService.saveFinalApprovedName(this.companyClearance)
            .subscribe(function (comp) {
            //this.saveCompleted();
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    CompanyClearanceFormComponent.prototype.onApproveNameOptionTwo = function () {
        var _this = this;
        if (this.companyNameTwoAmharic.value == '' && this.companyNameTwoEnglish.value == '') {
            this.toastr.error('Name must be inserted');
            return;
        }
        this.companyClearance = this.getEditedCompanyNames();
        this.companyClearance.IsCompanyNameOneApproved = false;
        this.companyClearance.IsCompanyNameTwoApproved = true;
        this.companyClearance.IsCompanyNameThreeApproved = false;
        this.loadingIndicator = true;
        return this.companyClearanceService.saveFinalApprovedName(this.companyClearance)
            .subscribe(function (comp) {
            //this.saveCompleted();
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    CompanyClearanceFormComponent.prototype.onApproveNameOptionThree = function () {
        var _this = this;
        if (this.companyNameThreeAmharic.value == '' && this.companyNameThreeEnglish.value == '') {
            this.toastr.error('Name must be inserted');
            return;
        }
        this.companyClearance = this.getEditedCompanyNames();
        this.companyClearance.IsCompanyNameThreeApproved = false;
        this.companyClearance.IsCompanyNameThreeApproved = false;
        this.companyClearance.IsCompanyNameThreeApproved = true;
        this.loadingIndicator = true;
        return this.companyClearanceService.saveFinalApprovedName(this.companyClearance)
            .subscribe(function (comp) {
            //this.saveCompleted();
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    CompanyClearanceFormComponent.prototype.ngAfterContentChecked = function () {
    };
    CompanyClearanceFormComponent.prototype.ngAfterViewInit = function () {
    };
    CompanyClearanceFormComponent.prototype.ngOnDestroy = function () {
    };
    CompanyClearanceFormComponent.prototype.getEditedCompanyNames = function () {
        var formModel = this.companyClearanceForm.value;
        return {
            CompanyClearanceId: 0,
            InvestorId: this.activatedRoute.snapshot.params['InvestorId'],
            CompanyNameOneAmharic: formModel.CompanyNameOneAmharic,
            CompanyNameOneEnglish: formModel.CompanyNameOneEnglish,
            CompanyNameTwoEnglish: formModel.CompanyNameOneEnglish,
            CompanyNameTwoAmharic: formModel.CompanyNameTwoAmharic,
            CompanyNameThreeEnglish: formModel.CompanyNameThreeEnglish,
            CompanyNameThreeAmharic: formModel.CompanyNameThreeAmharic,
            IsCompanyNameOneApproved: false,
            IsCompanyNameTwoApproved: false,
            IsCompanyNameThreeApproved: false,
            IsActive: true
        };
    };
    CompanyClearanceFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-clearance-form',
            template: __webpack_require__(/*! ./company-clearance-form.component.html */ "./src/app/components/investor/company-clearance-form/company-clearance-form.component.html"),
            styles: [__webpack_require__(/*! ./company-clearance-form.component.scss */ "./src/app/components/investor/company-clearance-form/company-clearance-form.component.scss")],
            animations: [_custor_services_animations__WEBPACK_IMPORTED_MODULE_10__["fadeInOut"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_9__["ErrorMessage"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_13__["AccountService"],
            _custor_validation_custom_form__WEBPACK_IMPORTED_MODULE_8__["FormService"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_3__["DataSharingService"],
            _company_clearance_service__WEBPACK_IMPORTED_MODULE_7__["CompanyClearanceService"],
            _investor_service__WEBPACK_IMPORTED_MODULE_11__["InvestorService"],
            _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_6__["AppConfiguration"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CompanyClearanceFormComponent);
    return CompanyClearanceFormComponent;
}());



/***/ }),

/***/ "./src/app/components/investor/company-clearance-form/company-clearance.service.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/investor/company-clearance-form/company-clearance.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: CompanyClearanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyClearanceService", function() { return CompanyClearanceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_Base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/Base.service */ "./src/app/Services/Base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
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






var CompanyClearanceService = /** @class */ (function (_super) {
    __extends(CompanyClearanceService, _super);
    function CompanyClearanceService(http, appConfig, errMsg) {
        var _this = _super.call(this, http, appConfig.urls.url('CompanyClearances'), errMsg) || this;
        _this.http = http;
        _this.appConfig = appConfig;
        _this.errMsg = errMsg;
        return _this;
    }
    CompanyClearanceService.prototype.getCompanyClearanceByInvestorId = function (id) {
        return this.httpClient.get(this.appConfig.urls.url('CompanyClearanceByInvestorId') + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    CompanyClearanceService.prototype.saveFinalApprovedName = function (resource) {
        return this.httpClient.put(this.appConfig.urls.url('SaveFinalApprovedName'), resource).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    CompanyClearanceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"]])
    ], CompanyClearanceService);
    return CompanyClearanceService;
}(_Services_Base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/components/investor/investor-tab/investor-tab-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/investor/investor-tab/investor-tab-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: InvestorTabRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestorTabRoutingModule", function() { return InvestorTabRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _investor_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./investor-tab.component */ "./src/app/components/investor/investor-tab/investor-tab.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var route = [
    {
        path: '',
        component: _investor_tab_component__WEBPACK_IMPORTED_MODULE_2__["InvestorTabComponent"]
    }
];
var InvestorTabRoutingModule = /** @class */ (function () {
    function InvestorTabRoutingModule() {
    }
    InvestorTabRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], InvestorTabRoutingModule);
    return InvestorTabRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/investor/investor-tab/investor-tab.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/investor/investor-tab/investor-tab.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"0\">\r\n  <div class=\"block\" fxFlex=\"\">\r\n    <app-page-header title=\"customerRegistration\" icon=\"people\"></app-page-header>\r\n\r\n  </div>\r\n  <div id=\"title1\" class=\"block\" fxFlex=\"50\">\r\n    <span style=\"text-transform: capitalize;\" class=\"page-title\">User Name: {{userName}}</span>\r\n\r\n\r\n  </div>\r\n</div>\r\n<mat-tab-group [selectedIndex]=\"registrationIndex\">\r\n\r\n  <!--<mat-tab label=\"Service Info\">-->\r\n  <!--<ng-template matTabContent>-->\r\n  <!--<mat-card class=\"margin-2\">-->\r\n\r\n  <!--<mat-card-content>-->\r\n  <!--<mat-checkbox (change)=\"isExisting()\" color=\"primary\">are You existing customer?</mat-checkbox>-->\r\n  <!--</mat-card-content>-->\r\n\r\n  <!--</mat-card>-->\r\n  <!--</ng-template>-->\r\n  <!--</mat-tab>-->\r\n  <mat-tab label=\"Service Info\">\r\n\r\n    <ng-template matTabContent>\r\n      <!--<mat-card class=\"margin-2\">-->\r\n\r\n      <!--<mat-card-content>-->\r\n      <!--<mat-checkbox (change)=\"isExisting()\" color=\"primary\">are You existing customer?</mat-checkbox>-->\r\n      <!--</mat-card-content>-->\r\n\r\n      <!--</mat-card>-->\r\n\r\n      <app-service-info></app-service-info>\r\n    </ng-template>\r\n  </mat-tab>\r\n\r\n  <mat-tab label=\"Investor\">\r\n    <ng-template matTabContent>\r\n      <app-edit-investor></app-edit-investor>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab label=\"Manager\" [disabled]=\"investor.InvestorId==0\">\r\n    <ng-template matTabContent>\r\n      <app-associate-form></app-associate-form>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab label=\"Company Clearance\" [disabled]=\"investor.InvestorId==0\"\r\n           *ngIf=\"!isNew\">\r\n    <ng-template matTabContent>\r\n      <app-company-clearance-form></app-company-clearance-form>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab label=\"Document\" [disabled]=\"investor.InvestorId==0\" *ngIf=\"isNew\">\r\n    <ng-template matTabContent>\r\n      <mat-card *ngIf=\"!isInvestor\" class=\"margin-2 simple-card\">\r\n        <mat-card-header>\r\n          <mat-card-subtitle class=\"sub-title\"></mat-card-subtitle>\r\n          <button class=\"margin-10 certificate-title\" mat-raised-button=\"\"\r\n                  (click)=\"addMessage()\" color=\"primary\">\r\n            Add Message\r\n          </button>\r\n        </mat-card-header>\r\n      </mat-card>\r\n      <app-service-prerequisite></app-service-prerequisite>\r\n    </ng-template>\r\n  </mat-tab>\r\n\r\n  <mat-tab *ngIf=\"!isInvestor\" [disabled]=\"investor.InvestorId==0\"\r\n           label=\"Payment\">\r\n    <ng-template matTabContent>\r\n      <app-payment></app-payment>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab *ngIf=\"!isInvestor\" [disabled]=\"investor.InvestorId==0\"\r\n           label=\"Certificate\">\r\n    <ng-template matTabContent>\r\n      <app-registration-certificate></app-registration-certificate>\r\n\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab *ngIf=\"isInvestor\" [disabled]=\"investor.InvestorId==0\"\r\n           label=\"Confirmation\">\r\n    <ng-template matTabContent>\r\n      <app-service-confirmation></app-service-confirmation>\r\n    </ng-template>\r\n  </mat-tab>\r\n\r\n</mat-tab-group>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/investor/investor-tab/investor-tab.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/investor/investor-tab/investor-tab.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-horizontal-stepper-header-container {\n  background-color: whitesmoke !important; }\n\n.alert-success {\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n  color: #3c763d; }\n\n.border {\n  border: 1px solid #ccc;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px; }\n\n.appGuid > ol, li, .alert-info {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif, \"Noto Sans Ethiopic\";\n  font-size: 13px;\n  line-height: 1.428571429;\n  color: #333;\n  padding: 10px;\n  text-align: justify !important; }\n\n.service > ol > li, span {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif, \"Noto Sans Ethiopic\";\n  font-size: 13px;\n  line-height: 1.428571429;\n  color: #333;\n  padding: 10px;\n  text-align: justify !important; }\n\n.footerButton {\n  border-bottom-left-radius: 6px;\n  border: 1px solid #ccc;\n  border-top: none;\n  border-bottom-right-radius: 6px;\n  background-color: #fafafa; }\n\n.agree {\n  color: white;\n  font-weight: bold; }\n\n.alert-info {\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n  color: #31708f;\n  margin: 20px; }\n\n.header-description {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif, \"Noto Sans Ethiopic\";\n  font-size: 13px;\n  line-height: 32px;\n  color: #333;\n  padding: 10px;\n  text-align: justify !important; }\n\n.hdr-brk {\n  padding: 5px 0;\n  background: #fff;\n  border-bottom: 1px solid #ccc;\n  line-height: 1; }\n\n.hdr-brk, .hm-bg-cnt .hm-bg-slick .lbl {\n  font-size: 16px; }\n\n.bld {\n  font-weight: 700; }\n\n.hdr-brk {\n  padding: 5px 0;\n  background: #fff;\n  border-bottom: 1px solid #ccc;\n  line-height: 1; }\n"

/***/ }),

/***/ "./src/app/components/investor/investor-tab/investor-tab.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/investor/investor-tab/investor-tab.component.ts ***!
  \****************************************************************************/
/*! exports provided: InvestorTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestorTabComponent", function() { return InvestorTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_profile_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../project-profile/notification/notification.component */ "./src/app/components/project-profile/notification/notification.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _model_investor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../model/investor */ "./src/app/model/investor.ts");
/* harmony import */ var _investor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../investor.service */ "./src/app/components/investor/investor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var InvestorTabComponent = /** @class */ (function () {
    function InvestorTabComponent(accountService, router, investorService, dialog, route, dataSharing) {
        this.accountService = accountService;
        this.router = router;
        this.investorService = investorService;
        this.dialog = dialog;
        this.route = route;
        this.dataSharing = dataSharing;
        this.isLinear = false;
        this.isEditable = false;
        this.selectedIndex = 0;
        this.isNew = false;
        this.investor = new _model_investor__WEBPACK_IMPORTED_MODULE_6__["Investor"]();
    }
    InvestorTabComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.investor);
        this.subscription = this.dataSharing.steeperIndex
            .subscribe(function (index) {
            _this.registrationIndex = index;
        });
        this.getUserType();
        this.title = localStorage.getItem('title');
        this.projectName = localStorage.getItem('projectName');
        this.investorName = localStorage.getItem('investorName');
        this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
        this.InvestorId = this.route.snapshot.params['InvestorId'] || this.route.snapshot.params['investorId'];
        if (this.InvestorId != 0) {
            this.getInvestor();
        }
        this.userName = this.accountService.currentUser.FullName;
        // this.isNewFirst = this.route.snapshot.params['IsExistingCustomer'];
        this.isNewListener = this.route.snapshot.params['IsExistingCustomer'];
    };
    InvestorTabComponent.prototype.getUserType = function () {
        this.isInvestor = this.accountService.getUserType();
    };
    InvestorTabComponent.prototype.addMessage = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.data = {
            ServiceApplicationId: this.ServiceApplicationId,
        };
        this.dialog.open(_project_profile_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__["NotificationComponent"], dialogConfig);
    };
    InvestorTabComponent.prototype.getInvestor = function () {
        var _this = this;
        this.InvestorId = this.route.snapshot.params['InvestorId'] || this.route.snapshot.params['investorId'];
        this.investorService.getInvestor(this.InvestorId)
            .subscribe(function (result) {
            _this.investor = result;
            _this.isNew = result.IsExistingCustomer;
            _this.isNewListener = (_this.isNew == true) ? 1 : 0;
            var ServiceApplicationId1 = _this.route.snapshot.params['ServiceApplicationId'];
            var InvestorId1 = _this.route.snapshot.params['InvestorId'] || _this.route.snapshot.params['investorId'];
            _this.router.navigate(['investor-tab/1235/' + ServiceApplicationId1 + '/' + InvestorId1 + '/' + _this.isNewListener]);
        });
    };
    InvestorTabComponent.prototype.ngAfterContentChecked = function () {
        this.isNewFirst = this.route.snapshot.params['IsExistingCustomer'];
        if (this.isNewListener != this.isNewFirst) {
            // this.isNewFirst = this.isNewListener;
            this.isNewListener = this.isNewFirst;
            this.getInvestor();
        }
    };
    InvestorTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-investor-tab',
            template: __webpack_require__(/*! ./investor-tab.component.html */ "./src/app/components/investor/investor-tab/investor-tab.component.html"),
            styles: [__webpack_require__(/*! ./investor-tab.component.scss */ "./src/app/components/investor/investor-tab/investor-tab.component.scss")]
        }),
        __metadata("design:paramtypes", [_custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _investor_service__WEBPACK_IMPORTED_MODULE_7__["InvestorService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_1__["DataSharingService"]])
    ], InvestorTabComponent);
    return InvestorTabComponent;
}());



/***/ }),

/***/ "./src/app/components/investor/investor-tab/investor-tab.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/investor/investor-tab/investor-tab.module.ts ***!
  \*************************************************************************/
/*! exports provided: InvestorTabModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestorTabModule", function() { return InvestorTabModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _investor_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./investor-tab.component */ "./src/app/components/investor/investor-tab/investor-tab.component.ts");
/* harmony import */ var _investor_tab_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./investor-tab-routing.module */ "./src/app/components/investor/investor-tab/investor-tab-routing.module.ts");
/* harmony import */ var _investor_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../investor.module */ "./src/app/components/investor/investor.module.ts");
/* harmony import */ var _associate_associate_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../associate/associate.module */ "./src/app/components/investor/associate/associate.module.ts");
/* harmony import */ var _project_profile_service_info_serviceInfo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../project-profile/service-info/serviceInfo.module */ "./src/app/components/project-profile/service-info/serviceInfo.module.ts");
/* harmony import */ var _officer_Task_officer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../officer-Task/officer.module */ "./src/app/components/officer-Task/officer.module.ts");
/* harmony import */ var _project_profile_service_confirmation_ServiceConfirmation_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../project-profile/service-confirmation/ServiceConfirmation.module */ "./src/app/components/project-profile/service-confirmation/ServiceConfirmation.module.ts");
/* harmony import */ var _company_clearance_form_company_clearance_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../company-clearance-form/company-clearance-form.component */ "./src/app/components/investor/company-clearance-form/company-clearance-form.component.ts");
/* harmony import */ var _registration_registration_certificate_registration_certificate_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../registration/registration-certificate/registration-certificate.component */ "./src/app/components/registration/registration-certificate/registration-certificate.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var InvestorTabModule = /** @class */ (function () {
    function InvestorTabModule() {
    }
    InvestorTabModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _investor_tab_routing_module__WEBPACK_IMPORTED_MODULE_4__["InvestorTabRoutingModule"],
                _investor_module__WEBPACK_IMPORTED_MODULE_5__["InvestorModule"],
                _associate_associate_module__WEBPACK_IMPORTED_MODULE_6__["AssociateModule"],
                _officer_Task_officer_module__WEBPACK_IMPORTED_MODULE_8__["OfficerModule"],
                _project_profile_service_confirmation_ServiceConfirmation_module__WEBPACK_IMPORTED_MODULE_9__["ServiceConfirmationModule"],
                _project_profile_service_info_serviceInfo_module__WEBPACK_IMPORTED_MODULE_7__["ServiceInfoModule"],
            ],
            declarations: [
                _investor_tab_component__WEBPACK_IMPORTED_MODULE_3__["InvestorTabComponent"],
                _company_clearance_form_company_clearance_form_component__WEBPACK_IMPORTED_MODULE_10__["CompanyClearanceFormComponent"],
                _registration_registration_certificate_registration_certificate_component__WEBPACK_IMPORTED_MODULE_11__["RegistrationCertificateComponent"]
            ],
            exports: [_investor_tab_component__WEBPACK_IMPORTED_MODULE_3__["InvestorTabComponent"]]
        })
    ], InvestorTabModule);
    return InvestorTabModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-investor-investor-tab-investor-tab-module.js.map