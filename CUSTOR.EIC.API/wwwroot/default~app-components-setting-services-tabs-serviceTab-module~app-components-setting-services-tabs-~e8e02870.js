(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-components-setting-services-tabs-serviceTab-module~app-components-setting-services-tabs-~e8e02870"],{

/***/ "./src/app/components/setting/services-tabs/serviceprerequistie/edit/edit-service.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/serviceprerequistie/edit/edit-service.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* div {\r\n  display: flex;\r\n} */\r\n\r\nmat-card {\r\n  max-width: 500px;\r\n  margin: 10px auto;\r\n  text-align: center;\r\n}\r\n\r\nmat-checkbox {\r\n  max-width: 500px;\r\n  margin: 2em auto;\r\n  text-align: left;\r\n}\r\n\r\n/*mat-form-field  {*/\r\n\r\n/*max-width: 400px;*/\r\n\r\n/*margin-right: 10px;*/\r\n\r\n/*font-size: 16px;*/\r\n\r\n/*}*/\r\n\r\n.row\r\n{\r\n  text-align: left;\r\n  margin-bottom: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3NldHRpbmcvc2VydmljZXMtdGFicy9zZXJ2aWNlcHJlcmVxdWlzdGllL2VkaXQvZWRpdC1zZXJ2aWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7O0FBRUg7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUNBLG9CQUFvQjs7QUFDbEIsb0JBQW9COztBQUNwQixzQkFBc0I7O0FBQ3RCLG1CQUFtQjs7QUFDckIsSUFBSTs7QUFDSjs7RUFFRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3NldHRpbmcvc2VydmljZXMtdGFicy9zZXJ2aWNlcHJlcmVxdWlzdGllL2VkaXQvZWRpdC1zZXJ2aWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBkaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn0gKi9cclxuXHJcbm1hdC1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5tYXQtY2hlY2tib3gge1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgbWFyZ2luOiAyZW0gYXV0bztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi8qbWF0LWZvcm0tZmllbGQgIHsqL1xyXG4gIC8qbWF4LXdpZHRoOiA0MDBweDsqL1xyXG4gIC8qbWFyZ2luLXJpZ2h0OiAxMHB4OyovXHJcbiAgLypmb250LXNpemU6IDE2cHg7Ki9cclxuLyp9Ki9cclxuLnJvd1xyXG57XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/setting/services-tabs/serviceprerequistie/edit/edit-service.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/serviceprerequistie/edit/edit-service.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar mat-dialog-title>\r\n  <h1 mat-dialog-title>\r\n    <mat-icon>create</mat-icon>\r\n    {{('servicePrerequsite.Header' | translate)}}\r\n  </h1>\r\n</mat-toolbar>\r\n<mat-card class=\"mat-elevation-z8\">\r\n  <br/>\r\n  <br/>\r\n\r\n  <mat-card-content>\r\n    <form #form=\"ngForm\" [formGroup]=\"servicePrerequisiteForm\" novalidate (ngSubmit)=\"onSubmit()\" fxLayout=\"column\"\r\n          autocomplete=\"off\">\r\n      <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"0.5em\">\r\n        <mat-form-field fxLayoutGap=\"1em\" style=\"width: 250px\">\r\n          <mat-label>{{'servicePrerequsite.ServiceType' | translate}}</mat-label>\r\n          <mat-select formControlName=\"cServiceType\" [compareWith]=\"compareIds\" style=\"width: 250px\" required>\r\n            <option value=\"0\">--Select--</option>\r\n            <mat-option *ngFor=\"let service of servicesModel\" [value]=\"service.ServiceId\">\r\n              <span>{{service.DisplayNameEnglish}}</span>\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"ServiceId.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field fxFlex>\r\n          <mat-label>{{'servicePrerequsite.DescriptionAmharic' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cDescription\" required/>\r\n          <mat-error *ngIf=\"Description.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"Description.hasError('maxlength')\">\r\n            {{'common.validation.MaxLengthChar' | translate: {'max':'150'} }}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"Description.hasError('minlength')\">\r\n            {{'common.validation.MinLengthChar' | translate: {'min':'3'} }}\r\n          </mat-error>\r\n          <!--<mat-error *ngIf=\"DisplayName.hasError('pattern')\">-->\r\n            <!--{{'common.validation.UseEthiopicOnly' | translate}}-->\r\n          <!--</mat-error>-->\r\n        </mat-form-field>\r\n        <div class=\"block\" fxFlex=\"70%\">\r\n          <mat-form-field style=\"width: 100%!important;\">\r\n            <mat-label>{{'servicePrerequsite.DescriptionEnglish' | translate}}</mat-label>\r\n            <input matInput formControlName=\"cDescriptionEnglish\" style=\"width: 100%\" required/>\r\n            <mat-error *ngIf=\"DescriptionEnglish.hasError('required')\">\r\n              {{'common.validation.Required' | translate}}\r\n            </mat-error>\r\n            <mat-error *ngIf=\"DescriptionEnglish.hasError('maxlength')\">\r\n              {{'common.validation.MaxLengthChar' | translate: {'max':'150'} }}\r\n            </mat-error>\r\n            <mat-error *ngIf=\"DescriptionEnglish.hasError('minlength')\">\r\n              {{'common.validation.MinLengthChar' | translate: {'min':'3'} }}\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <mat-form-field style=\"width: 150px\">\r\n          <mat-label>{{'servicePrerequsite.BusinessType' | translate}}</mat-label>\r\n          <mat-select formControlName=\"cBusinessType\" [compareWith]=\"compareIds\" required>\r\n            <mat-option *ngFor=\"let businessType of businessTypes\" [value]=\"businessType.Id\">\r\n              <span>{{businessType.DescriptionEnglish}}</span>\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"BusinessType.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n          <div fxFlex.gt-sm=\"0 1 calc(50% - 0.5em)\">\r\n            <mat-checkbox formControlName=\"cIsActive\">\r\n              IsActive?\r\n            </mat-checkbox>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div mat-dialog-actions>\r\n        <button [disabled]=\"form.invalid\" mat-raised-button type=\"submit\" color=\"primary\" style=\"margin: 15px;\">\r\n          Save\r\n        </button>\r\n        <button mat-raised-button (click)=\"onBack()\" color=\"warn\" type=\"button\">\r\n          Cancel\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/setting/services-tabs/serviceprerequistie/edit/edit-service.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/serviceprerequistie/edit/edit-service.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: EditServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditServiceComponent", function() { return EditServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _servicePrerequisite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../servicePrerequisite.service */ "./src/app/components/setting/services-tabs/serviceprerequistie/servicePrerequisite.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _custor_const_consts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../@custor/const/consts */ "./src/@custor/const/consts.ts");
/* harmony import */ var _custor_helpers_compare__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../@custor/helpers/compare */ "./src/@custor/helpers/compare.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _model_lookupData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../model/lookupData */ "./src/app/model/lookupData.ts");

///<reference path="../../../../../../../node_modules/rxjs/Observable.d.ts"/>












var EditServiceComponent = /** @class */ (function () {
    function EditServiceComponent(activatedRoute, router, http, config, servicePrerequisiteService, errMsg, toastr, fb) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.http = http;
        this.config = config;
        this.servicePrerequisiteService = servicePrerequisiteService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.fb = fb;
        this.isNewServicePrerequisite = false;
        this.businessTypes = [];
        this.servicesModel = [];
        this.servicePrerequisite = {};
        // initialize the form
        this.initForm();
        this.initStaticData('en');
    }
    EditServiceComponent.prototype.ngOnInit = function () {
        var id = this.activatedRoute.snapshot.params['id'];
        if (id < 1) {
            this.isNewServicePrerequisite = true;
            this.title = 'Create a new Service Prerequisite';
            this.getService();
            this.servicePrerequisiteForm.patchValue({
                cServiceType: this.activatedRoute.snapshot.params['serviceId']
            });
            return;
        }
        if (id) {
            // to-do
            // get the selected customer either through @Input or shared service
            this.getServicePrerequisite(id);
        }
    };
    EditServiceComponent.prototype.initStaticData = function (currentLang) {
        var _this = this;
        var BusType = new _model_lookupData__WEBPACK_IMPORTED_MODULE_12__["BusinessType"]();
        _custor_const_consts__WEBPACK_IMPORTED_MODULE_9__["BusinessTypes"].forEach(function (pair) {
            BusType = {
                'Id': pair.Id.toString(),
                'DescriptionEnglish': pair.DescriptionEnglish,
                'Description': pair.Description
            };
            _this.businessTypes.push(BusType);
        });
    };
    EditServiceComponent.prototype.getServicePrerequisite = function (id) {
        var _this = this;
        this.isNewServicePrerequisite = false;
        this.loadingIndicator = true;
        this.servicePrerequisiteSub = this.servicePrerequisiteService
            .getServicePrerequisite(id)
            .subscribe(function (result) {
            _this.servicePrerequisite = result;
            _this.getService();
            _this.updateForm();
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
        this.loadingIndicator = false;
    };
    EditServiceComponent.prototype.updateForm = function () {
        this.servicePrerequisiteForm.patchValue({
            cIsActive: this.servicePrerequisite.IsActive == null ? false : this.servicePrerequisite.IsActive,
            cServiceType: this.servicePrerequisite.ServiceId == null ? 1 : this.servicePrerequisite.ServiceId,
            cBusinessType: this.servicePrerequisite.BusinessType == null ? 1 : this.servicePrerequisite.BusinessType,
            cDescription: this.servicePrerequisite.Description == null ? '' : this.servicePrerequisite.Description.toString(),
            cDescriptionEnglish: this.servicePrerequisite.DescriptionEnglish == null ? '' : this.servicePrerequisite.DescriptionEnglish.toString()
        });
        // },4000);
        this.isNewServicePrerequisite = false;
    };
    EditServiceComponent.prototype.initForm = function () {
        this.servicePrerequisiteForm = this.fb.group({
            cDescriptionEnglish: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])],
            /* Validators.pattern('^[a-zA-Z ]+$')])],*/
            cServiceType: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cBusinessType: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cIsActive: true,
            cDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    EditServiceComponent.prototype.compareIds = function (id1, id2) {
        var a1 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_10__["determineId"])(id1);
        var a2 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_10__["determineId"])(id2);
        return a1 === a2;
    };
    EditServiceComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.servicePrerequisiteForm.valid) {
            return;
        }
        if (this.isNewServicePrerequisite) {
            if (this.checkRecordExistance()) {
                this.toastr.show('Record Exist', 'message', {
                    closeButton: true
                });
                return;
            }
        }
        this.loadingIndicator = true;
        return this.servicePrerequisiteService.saveServicePrerequisite(this.getEditedServicePrerequistie()).subscribe(function (servicePrerequisite) {
            _this.saveCompleted(servicePrerequisite);
        }, function (err) { return _this.handleError(err); });
    };
    EditServiceComponent.prototype.checkRecordExistance = function () {
        var _this = this;
        var formModel = this.servicePrerequisiteForm.value;
        this.servicePrerequisiteSub = this.servicePrerequisiteService
            .getServicePrerequisiteForExistance(formModel.cDescriptionEnglish, formModel.cServiceType)
            .subscribe(function (result) {
            _this.servicePrerequisite = result;
        });
        if (this.servicePrerequisite.ServiceId == null) {
            return false;
        }
        else {
            return true;
        }
    };
    EditServiceComponent.prototype.saveCompleted = function (servicePrerequisite) {
        if (servicePrerequisite) {
            this.servicePrerequisite = servicePrerequisite;
        }
        this.loadingIndicator = false;
        this.toastr.success('Record saved successfully!');
        //this.router.navigate(['serviceprerequisites/list']);
        this.router.navigate(['services-tab']);
    };
    EditServiceComponent.prototype.handleError = function (err) {
        this.loadingIndicator = false;
        this.toastr.error(this.errMsg.getError(err));
        this.loadingIndicator = false;
    };
    EditServiceComponent.prototype.getEditedServicePrerequistie = function () {
        var formModel = this.servicePrerequisiteForm.value;
        return {
            ServicePrerequisiteId: this.isNewServicePrerequisite ? 0 : this.servicePrerequisite.ServicePrerequisiteId,
            Description: formModel.cDescription,
            DescriptionEnglish: formModel.cDescriptionEnglish,
            IsActive: formModel.cIsActive,
            ServiceId: formModel.cServiceType,
            ServiceNameEnglish: null,
            BusinessType: formModel.cBusinessType,
        };
    };
    EditServiceComponent.prototype.ngOnDestroy = function () {
        // this.servicePrerequisiteSub.unsubscribe();
    };
    EditServiceComponent.prototype.getService = function () {
        var _this = this;
        this.servicePrerequisiteService.getService()
            .subscribe(function (result) {
            _this.servicesModel = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    EditServiceComponent.prototype.onBack = function () {
        this.router.navigate(['services-tab']);
        // this.router.navigate(['serviceprerequisites/list']);
    };
    Object.defineProperty(EditServiceComponent.prototype, "Description", {
        get: function () { return this.servicePrerequisiteForm.get('cDescription'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditServiceComponent.prototype, "DescriptionEnglish", {
        get: function () { return this.servicePrerequisiteForm.get('cDescriptionEnglish'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditServiceComponent.prototype, "BusinessType", {
        get: function () { return this.servicePrerequisiteForm.get('cBusinessType'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditServiceComponent.prototype, "ServiceId", {
        get: function () { return this.servicePrerequisiteForm.get('cServiceType'); },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"])
    ], EditServiceComponent.prototype, "servicePrerequisiteSub", void 0);
    EditServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-service',
            template: __webpack_require__(/*! ./edit-service.component.html */ "./src/app/components/setting/services-tabs/serviceprerequistie/edit/edit-service.component.html"),
            providers: [_servicePrerequisite_service__WEBPACK_IMPORTED_MODULE_5__["ServicePrerequisiteService"]],
            styles: [__webpack_require__(/*! ./edit-service.component.css */ "./src/app/components/setting/services-tabs/serviceprerequistie/edit/edit-service.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_8__["AppConfiguration"],
            _servicePrerequisite_service__WEBPACK_IMPORTED_MODULE_5__["ServicePrerequisiteService"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_11__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], EditServiceComponent);
    return EditServiceComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/services-tabs/serviceprerequistie/list/list-service.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/serviceprerequistie/list/list-service.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9zZXR0aW5nL3NlcnZpY2VzLXRhYnMvc2VydmljZXByZXJlcXVpc3RpZS9saXN0L2xpc3Qtc2VydmljZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/setting/services-tabs/serviceprerequistie/list/list-service.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/serviceprerequistie/list/list-service.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\" style=\"margin: 10px;\">\r\n  <mat-form-field fxLayoutGap=\"1em\" style=\"margin: 10px;width: 250px\">\r\n    <mat-label>{{'servicePrerequsite.ServiceType' | translate}}</mat-label>\r\n    <mat-select [compareWith]=\"compareIds\" style=\"width: 250px\" required (selectionChange)=\"filterPrerequsite($event.value)\">\r\n      <option value=\"0\">--Select--</option>\r\n      <mat-option *ngFor=\"let service of servicesModel\" [value]=\"service.ServiceId\">\r\n        <span>{{service.DisplayNameEnglish}}</span>\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>\r\n  <mat-table [dataSource]=\"dataSource\" matSort>\r\n    <!--<ng-container matColumnDef=\"Service Name\">-->\r\n      <!--<mat-header-cell *matHeaderCellDef flex=\"100px\">Service Name</mat-header-cell>-->\r\n      <!--<mat-cell *matCellDef=\"let row\" flex=\"100px\">{{row.ServiceNameEnglish}}</mat-cell>-->\r\n    <!--</ng-container>-->\r\n    <ng-container matColumnDef=\"Description\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Description</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.Description}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"DescriptionEnglish\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Description English</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.DescriptionEnglish}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"BusinessType\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Business Type</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.BusinessType}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"IsActive\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"50px\">IsActive</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\" fxFlex=\"50px\"> {{row.IsActive}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"actions\">\r\n      <mat-header-cell *matHeaderCellDef fxFlex=\"100px\">\r\n        <button mat-button color=\"primary\" (click)=\"editServicePrerequisite()\">\r\n          <mat-icon class=\"mat-button-icon\">add</mat-icon>\r\n          {{'common.commands.Add' | translate}}\r\n        </button>\r\n      </mat-header-cell>\r\n      <mat-header-cell *matHeaderCellDef fxFlex=\"100px\">\r\n      </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let serviceprerequiste\" fxFlex=\"100px\">\r\n        <button mat-icon-button (click)=\"editServicePrerequisite(serviceprerequiste)\" type=\"button\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"confirmDelete(serviceprerequiste)\" type=\"button\">\r\n          <mat-icon color=\"warn\">delete</mat-icon>\r\n        </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n    </mat-row>\r\n  </mat-table>\r\n\r\n  <mat-paginator pageSize=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/setting/services-tabs/serviceprerequistie/list/list-service.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/serviceprerequistie/list/list-service.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ListServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListServiceComponent", function() { return ListServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _servicePrerequisite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../servicePrerequisite.service */ "./src/app/components/setting/services-tabs/serviceprerequistie/servicePrerequisite.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../@custor/components/confirm-dialog/confirm-dialog.component */ "./src/@custor/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../@custor/helpers/utilities */ "./src/@custor/helpers/utilities.ts");
/* harmony import */ var _custor_helpers_compare__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @custor/helpers/compare */ "./src/@custor/helpers/compare.ts");











var ListServiceComponent = /** @class */ (function () {
    function ListServiceComponent(http, servicePrerequisiteService, errMsg, toastr, dialog, router, route) {
        this.http = http;
        this.servicePrerequisiteService = servicePrerequisiteService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.servicesModel = [];
        this.displayedColumns = ['Description', 'DescriptionEnglish', 'IsActive', 'actions'];
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    ListServiceComponent.prototype.ngOnInit = function () {
        this.getService();
        //this.getServicePrerequisites();
    };
    ListServiceComponent.prototype.getService = function () {
        var _this = this;
        this.servicePrerequisiteService.getService()
            .subscribe(function (result) {
            _this.servicesModel = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    ListServiceComponent.prototype.compareIds = function (id1, id2) {
        var a1 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_10__["determineId"])(id1);
        var a2 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_10__["determineId"])(id2);
        return a1 === a2;
    };
    ListServiceComponent.prototype.filterPrerequsite = function (serviceCode) {
        var _this = this;
        if (!serviceCode) {
            return;
        }
        this.serviceId = serviceCode;
        this.servicePrerequisiteService.getServicePrerequisiteByparent(serviceCode)
            .subscribe(function (result) {
            _this.dataSource.data = result;
        });
    };
    ListServiceComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListServiceComponent.prototype.getServicePrerequisites = function () {
        var _this = this;
        this.loadingIndicator = true;
        this.servicePrerequisiteService.getServicePrerequisites()
            .subscribe(function (result) {
            _this.serviceprerequisites = result;
            if (!_this.serviceprerequisites) {
                _this.toastr.error('No records were found to list', 'Error', {
                    closeButton: true,
                });
            }
            else {
                _this.dataSource.data = _this.serviceprerequisites;
            }
        }, function (err) {
            if (!_this.errMsg.message) {
                _this.toastr.error('Error! Please check if the Web serviceprerequistie is running');
            }
            else {
                _this.toastr.error(_this.errMsg.getError(err));
            }
        });
        this.loadingIndicator = false;
    };
    ListServiceComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ListServiceComponent.prototype.editServicePrerequisite = function (servicePrerequisite) {
        if (servicePrerequisite) {
            this.router.navigate(['/serviceprerequisites/edit/' + servicePrerequisite.ServicePrerequisiteId + '/' + 0], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['/serviceprerequisites/edit/' + 0 + '/' + this.serviceId]);
        }
    };
    ListServiceComponent.prototype.confirmDelete = function (servicePrerequisite) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AngConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            _this.loadingIndicator = true;
            if (result) {
                _this.servicePrerequisiteService.deleteServicePrerequisite(servicePrerequisite)
                    .subscribe(function (results) {
                    _this.loadingIndicator = false;
                    _this.dataSource.data = _this.dataSource.data.filter(function (item) { return item !== servicePrerequisite; });
                }, function (error) {
                    // tslint:disable-next-line:max-line-length
                    _this.toastr.error("An error occured whilst deleting the ServicePrerequisite.\r\nError: \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_9__["Utilities"].getHttpResponseMessage(error) + "\"", 'Delete Error');
                });
            }
            _this.loadingIndicator = false;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ListServiceComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ListServiceComponent.prototype, "sort", void 0);
    ListServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-serviceprerequiste-list',
            template: __webpack_require__(/*! ./list-service.component.html */ "./src/app/components/setting/services-tabs/serviceprerequistie/list/list-service.component.html"),
            providers: [_servicePrerequisite_service__WEBPACK_IMPORTED_MODULE_5__["ServicePrerequisiteService"]],
            styles: [__webpack_require__(/*! ./list-service.component.css */ "./src/app/components/setting/services-tabs/serviceprerequistie/list/list-service.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _servicePrerequisite_service__WEBPACK_IMPORTED_MODULE_5__["ServicePrerequisiteService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ListServiceComponent);
    return ListServiceComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/services-tabs/serviceprerequistie/service-routing.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/serviceprerequistie/service-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: ServicePrerequsiteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicePrerequsiteRoutingModule", function() { return ServicePrerequsiteRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_service_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list-service.component */ "./src/app/components/setting/services-tabs/serviceprerequistie/list/list-service.component.ts");
/* harmony import */ var _edit_edit_service_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit-service.component */ "./src/app/components/setting/services-tabs/serviceprerequistie/edit/edit-service.component.ts");
/* harmony import */ var _service_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service.component */ "./src/app/components/setting/services-tabs/serviceprerequistie/service.component.ts");






var ServiceRoutes = [
    {
        path: '', component: _service_component__WEBPACK_IMPORTED_MODULE_5__["ServicePreRequisiteComponent"],
        children: [
            { path: 'edit/:id/:serviceId', component: _edit_edit_service_component__WEBPACK_IMPORTED_MODULE_4__["EditServiceComponent"] },
            { path: 'list', component: _list_list_service_component__WEBPACK_IMPORTED_MODULE_3__["ListServiceComponent"] }
            /* ,      {path: 'edit/:descEng/:serviceId', component: EditServiceComponent}*/
        ]
    }
];
var ServicePrerequsiteRoutingModule = /** @class */ (function () {
    function ServicePrerequsiteRoutingModule() {
    }
    ServicePrerequsiteRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ServiceRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ServicePrerequsiteRoutingModule);
    return ServicePrerequsiteRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/setting/services-tabs/serviceprerequistie/service.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/serviceprerequistie/service.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9zZXR0aW5nL3NlcnZpY2VzLXRhYnMvc2VydmljZXByZXJlcXVpc3RpZS9zZXJ2aWNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/setting/services-tabs/serviceprerequistie/service.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/serviceprerequistie/service.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/setting/services-tabs/serviceprerequistie/service.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/serviceprerequistie/service.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ServicePreRequisiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicePreRequisiteComponent", function() { return ServicePreRequisiteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicePreRequisiteComponent = /** @class */ (function () {
    function ServicePreRequisiteComponent() {
    }
    ServicePreRequisiteComponent.prototype.ngOnInit = function () {
    };
    ServicePreRequisiteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-servicePreRequisite',
            template: __webpack_require__(/*! ./service.component.html */ "./src/app/components/setting/services-tabs/serviceprerequistie/service.component.html"),
            styles: [__webpack_require__(/*! ./service.component.css */ "./src/app/components/setting/services-tabs/serviceprerequistie/service.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicePreRequisiteComponent);
    return ServicePreRequisiteComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/services-tabs/serviceprerequistie/serviceprerequiste.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/serviceprerequistie/serviceprerequiste.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: ServicePrerequsiteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicePrerequsiteModule", function() { return ServicePrerequsiteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-routing.module */ "./src/app/components/setting/services-tabs/serviceprerequistie/service-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service.component */ "./src/app/components/setting/services-tabs/serviceprerequistie/service.component.ts");
/* harmony import */ var _list_list_service_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list-service.component */ "./src/app/components/setting/services-tabs/serviceprerequistie/list/list-service.component.ts");
/* harmony import */ var _edit_edit_service_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit-service.component */ "./src/app/components/setting/services-tabs/serviceprerequistie/edit/edit-service.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _servicePrerequisite_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./servicePrerequisite.service */ "./src/app/components/setting/services-tabs/serviceprerequistie/servicePrerequisite.service.ts");
/* harmony import */ var _Services_pre_requisite_document_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../Services/pre-requisite-document.service */ "./src/app/Services/pre-requisite-document.service.ts");











var ServicePrerequsiteModule = /** @class */ (function () {
    function ServicePrerequsiteModule() {
    }
    ServicePrerequsiteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_service_component__WEBPACK_IMPORTED_MODULE_4__["ServicePreRequisiteComponent"], _list_list_service_component__WEBPACK_IMPORTED_MODULE_5__["ListServiceComponent"], _edit_edit_service_component__WEBPACK_IMPORTED_MODULE_6__["EditServiceComponent"]],
            exports: [_service_component__WEBPACK_IMPORTED_MODULE_4__["ServicePreRequisiteComponent"], _list_list_service_component__WEBPACK_IMPORTED_MODULE_5__["ListServiceComponent"], _edit_edit_service_component__WEBPACK_IMPORTED_MODULE_6__["EditServiceComponent"]],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _service_routing_module__WEBPACK_IMPORTED_MODULE_2__["ServicePrerequsiteRoutingModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"],
                _servicePrerequisite_service__WEBPACK_IMPORTED_MODULE_9__["ServicePrerequisiteService"],
                _Services_pre_requisite_document_service__WEBPACK_IMPORTED_MODULE_10__["PreRequisiteDocumentService"]
            ],
        })
    ], ServicePrerequsiteModule);
    return ServicePrerequsiteModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-components-setting-services-tabs-serviceTab-module~app-components-setting-services-tabs-~e8e02870.js.map