(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-components-setting-othe-tabs-tariff-tariff-module~app-components-setting-services-tabs-s~30c0187e"],{

/***/ "./src/app/components/setting/othe-tabs/tariff/edit/edit-tariff.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/setting/othe-tabs/tariff/edit/edit-tariff.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* div {\r\n  display: flex;\r\n} */\r\n\r\nmat-card {\r\n  max-width: 500px;\r\n  margin: 10px auto;\r\n  text-align: center;\r\n}\r\n\r\nmat-checkbox {\r\n  max-width: 500px;\r\n  margin: 2em auto;\r\n  text-align: left;\r\n}\r\n\r\n.mat-radio-button {\r\n  display: inline-flex;\r\n  flex-direction: row;\r\n}\r\n\r\n/*.mat-radio-group {\r\n  margin: 15px;\r\n}\r\n\r\n.mat-radio-group {\r\n  margin: 15px 0;\r\n}*/\r\n\r\n/*mat-form-field  {\r\n  max-width: 100px;\r\n  margin-right: 5px;\r\n  font-size: 16px;\r\n}*/\r\n\r\n.row\r\n{\r\n  text-align: left;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.customer-radio-group {\r\n  display: inherit;\r\n  flex-direction: row;\r\n}\r\n\r\n.customer-radio-button {\r\n  margin: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3NldHRpbmcvb3RoZS10YWJzL3RhcmlmZi9lZGl0L2VkaXQtdGFyaWZmLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7O0FBRUg7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFDQTs7Ozs7O0VBTUU7O0FBQ0Y7Ozs7RUFJRTs7QUFDRjs7RUFFRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9zZXR0aW5nL290aGUtdGFicy90YXJpZmYvZWRpdC9lZGl0LXRhcmlmZi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59ICovXHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxubWF0LWNoZWNrYm94IHtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIG1hcmdpbjogMmVtIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4ubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG4vKi5tYXQtcmFkaW8tZ3JvdXAge1xyXG4gIG1hcmdpbjogMTVweDtcclxufVxyXG5cclxuLm1hdC1yYWRpby1ncm91cCB7XHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcbn0qL1xyXG4vKm1hdC1mb3JtLWZpZWxkICB7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn0qL1xyXG4ucm93XHJcbntcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5jdXN0b21lci1yYWRpby1ncm91cCB7XHJcbiAgZGlzcGxheTogaW5oZXJpdDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uY3VzdG9tZXItcmFkaW8tYnV0dG9uIHtcclxuICBtYXJnaW46IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/setting/othe-tabs/tariff/edit/edit-tariff.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/setting/othe-tabs/tariff/edit/edit-tariff.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar mat-dialog-title>\r\n  <h1 mat-dialog-title>\r\n    <mat-icon>create</mat-icon>\r\n    {{('tariff.Header' | translate)}}\r\n  </h1>\r\n</mat-toolbar>\r\n<mat-card class=\"mat-elevation-z8\" fxFlex=\"70\">\r\n  <br/>\r\n  <mat-card-content>\r\n    <form #form=\"ngForm\" [formGroup]=\"tariffForm\" novalidate (ngSubmit)=\"onSubmit()\" fxLayout=\"column\"\r\n          style=\"font-family: Calibri;font-size: 14px\"\r\n          autocomplete=\"off\">\r\n      <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n        <mat-form-field>\r\n          <mat-label>{{'tariff.AccountCode' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cAccCode\" required maxlength=\"4\"/>\r\n          <mat-error *ngIf=\"AccCode.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"AccCode.hasError('pattern')\">\r\n            {{'common.validation.NumberOnly' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <mat-label>{{'tariff.TariffName' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cName\" required/>\r\n          <mat-error *ngIf=\"Name.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"Name.hasError('maxlength')\">\r\n            {{'common.validation.MaxLengthChar' | translate: {'max':'20'} }}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"Name.hasError('pattern')\">\r\n            {{'common.validation.UseEthiopicOnly' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <mat-label>{{'tariff.TariffNameEnglish' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cNameEnglish\"/>\r\n          <mat-error *ngIf=\"NameEnglish.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"NameEnglish.hasError('maxlength')\">\r\n            {{'common.validation.MaxLengthChar' | translate: {'max':'200'} }}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"NameEnglish.hasError('pattern')\">\r\n            {{'common.validation.UseLatinOnly' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <mat-label>{{'tariff.Fee' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cFee\" maxlength=\"4\"/>\r\n          <mat-error *ngIf=\"Fee.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"Fee.hasError('pattern')\">\r\n            {{'common.validation.NumberOnly' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <br>\r\n      <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n        <mat-form-field>\r\n          <mat-label>{{'tariff.IncrementalFee' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cIncrementalFee\" maxlength=\"4\"/>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <mat-label>{{'tariff.Quantity' | translate}}</mat-label>\r\n          <mat-select formControlName=\"cQuantity\" [compareWith]=\"compareIds\" required>\r\n            <option value=\"0\">--Select--</option>\r\n            <mat-option *ngFor=\"let quantity of quantitys\" [value]=\"quantity.Id\">\r\n              <span>{{quantity.DescriptionEnglish}}</span>\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"Quantity.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <mat-label>{{'tariff.TariffMode' | translate}}</mat-label>\r\n          <mat-select formControlName=\"cTariffModeId\" [compareWith]=\"compareIds\" required>\r\n            <mat-option *ngFor=\"let tariffMOde of tariffModes\" [value]=\"tariffMOde.Id\">\r\n              <span>{{tariffMOde.DescriptionEnglish}}</span>\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"TariffMode.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <div fxFlex.gt-sm=\"0 1 calc(50% - 0.5em)\">\r\n          <mat-checkbox formControlName=\"cIsActive\">\r\n            Is Active?\r\n          </mat-checkbox>\r\n        </div>\r\n      </div>\r\n      <div class=\"separator\" style=\"width: 500px\"></div>\r\n      <div mat-dialog-actions fxLayoutGap=\".5em\">\r\n        <button [disabled]=\"form.invalid\" mat-raised-button type=\"submit\" color=\"primary\" style=\"margin: 15px;\">\r\n          Save\r\n        </button>\r\n        <button mat-raised-button (click)=\"onBack()\" color=\"warn\" type=\"button\">\r\n          Cancel\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/setting/othe-tabs/tariff/edit/edit-tariff.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/setting/othe-tabs/tariff/edit/edit-tariff.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EditTariffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTariffComponent", function() { return EditTariffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _tariff_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tariff.service */ "./src/app/components/setting/othe-tabs/tariff/tariff.service.ts");
/* harmony import */ var _custor_const_consts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @custor/const/consts */ "./src/@custor/const/consts.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _custor_helpers_compare__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @custor/helpers/compare */ "./src/@custor/helpers/compare.ts");
/* harmony import */ var _model_lookupData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../model/lookupData */ "./src/app/model/lookupData.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../config/appconfig */ "./src/app/config/appconfig.ts");













var EditTariffComponent = /** @class */ (function () {
    function EditTariffComponent(activatedRoute, router, http, config, tariffService, errMsg, toastr, fb) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.http = http;
        this.config = config;
        this.tariffService = tariffService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.fb = fb;
        this.isNewTariff = false;
        this.tariffsModel = [];
        this.quantitys = [];
        this.tariffModes = [];
        this.tariffModel = {};
        // initialize the form
        this.initForm();
        this.initStaticData('en');
    }
    EditTariffComponent.prototype.ngOnInit = function () {
        var id = this.activatedRoute.snapshot.params['id'];
        if (id < 1) {
            this.isNewTariff = true;
            this.title = 'Create a new tariff';
            return;
        }
        if (id) {
            this.gettariff(id);
        }
    };
    EditTariffComponent.prototype.initStaticData = function (currentLang) {
        var _this = this;
        var quan = new _model_lookupData__WEBPACK_IMPORTED_MODULE_10__["Quantity"]();
        _custor_const_consts__WEBPACK_IMPORTED_MODULE_7__["Quantitys"].forEach(function (pair) {
            quan = { 'Id': pair.Id.toString(), 'DescriptionEnglish': pair.DescriptionEnglish, 'Description': pair.Description };
            _this.quantitys.push(quan);
        });
        var Tariff = new _model_lookupData__WEBPACK_IMPORTED_MODULE_10__["TariffMode"]();
        _custor_const_consts__WEBPACK_IMPORTED_MODULE_7__["TariffModes"].forEach(function (pair) {
            Tariff = {
                'Id': pair.Id.toString(),
                'DescriptionEnglish': pair.DescriptionEnglish,
                'Description': pair.Description
            };
            _this.tariffModes.push(Tariff);
        });
    };
    EditTariffComponent.prototype.gettariff = function (id) {
        var _this = this;
        this.isNewTariff = false;
        this.loadingIndicator = true;
        this.tariffSub = this.tariffService
            .getTariff(id)
            .subscribe(function (result) {
            _this.tariffModel = result;
            _this.updateForm();
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
        this.loadingIndicator = false;
    };
    EditTariffComponent.prototype.updateForm = function () {
        this.tariffForm.setValue({
            cIsActive: this.tariffModel.IsActive,
            cTariffModeId: this.tariffModel.TariffModeId == null ? 1 : this.tariffModel.TariffModeId,
            cName: this.tariffModel.Name == null ? '' : this.tariffModel.Name.toString(),
            cNameEnglish: this.tariffModel.NameEnglish == null ? '' : this.tariffModel.NameEnglish.toString(),
            cAccCode: this.tariffModel.AccCode == null ? '' : this.tariffModel.AccCode.toString(),
            cIncrementalFee: this.tariffModel.IncrementalFee,
            cQuantity: this.tariffModel.Quantity == null ? '' : this.tariffModel.Quantity,
            cFee: this.tariffModel.Fee == null ? '' : this.tariffModel.Fee
        });
        // console.log(this.tariffModel);
        // },4000);
        this.isNewTariff = false;
    };
    EditTariffComponent.prototype.initForm = function () {
        this.tariffForm = this.fb.group({
            cName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^([ \u1200-\u137F])+$')])],
            cNameEnglish: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z ]+$')])],
            cTariffModeId: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cIsActive: true,
            cAccCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')])],
            cIncrementalFee: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')])],
            cQuantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cFee: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')])]
        });
    };
    EditTariffComponent.prototype.compareIds = function (id1, id2) {
        var a1 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_9__["determineId"])(id1);
        var a2 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_9__["determineId"])(id2);
        return a1 === a2;
    };
    EditTariffComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.tariffForm.valid) {
            return;
        }
        /*if (this.isNewTariff)
          if (this.checkRecordExistance()) {
            this.toastr.show(
              'Record Exist', 'message', {
                closeButton: true
              })
            return;
          }*/
        this.loadingIndicator = true;
        return this.tariffService.saveTariff(this.getEditedTraiff()).subscribe(function (tariffModel) {
            _this.saveCompleted(tariffModel);
        }, function (err) { return _this.handleError(err); });
    };
    /*checkRecordExistance(): boolean {
      const formModel = this.tariffForm.value;
      this.servicePrerequisiteSub = this.tariffService
        .getServicePrerequisiteForExistance(formModel.cDescriptionEnglish, formModel.cServiceType)
        .subscribe(result => {
          this.servicePrerequisite = result
        })
      if (this.servicePrerequisite.ServiceId == null) {
        return false;
      } else {
        return true;
      }
    }*/
    EditTariffComponent.prototype.saveCompleted = function (tariffModel) {
        if (tariffModel) {
            this.tariffModel = tariffModel;
        }
        this.loadingIndicator = false;
        this.toastr.success('Record saved successfully!');
        // this.router.navigate(['tariffs/list']);
        window.history.back();
    };
    EditTariffComponent.prototype.handleError = function (err) {
        this.loadingIndicator = false;
        this.toastr.error(this.errMsg.getError(err));
        this.loadingIndicator = false;
    };
    EditTariffComponent.prototype.getEditedTraiff = function () {
        var formModel = this.tariffForm.value;
        return {
            TariffId: this.isNewTariff ? null : this.tariffModel.TariffId,
            Name: formModel.cName,
            NameEnglish: formModel.cNameEnglish,
            IsActive: formModel.cIsActive,
            TariffModeId: formModel.cTariffModeId,
            AccCode: formModel.cAccCode,
            IncrementalFee: formModel.cIncrementalFee,
            Quantity: formModel.cQuantity,
            Fee: formModel.cFee,
        };
    };
    EditTariffComponent.prototype.ngOnDestroy = function () {
        // this.tariffSub.unsubscribe();
    };
    /*
      getService() {
        this.tariffService.getService()
          .subscribe(result => {
              this.servicesModel = result;
            },
            error => this.toastr.error(this.errMsg.getError(error)));
      }*/
    EditTariffComponent.prototype.onBack = function () {
        // this.router.navigate(['tariffs/list']);
        window.history.back();
    };
    Object.defineProperty(EditTariffComponent.prototype, "AccCode", {
        get: function () {
            return this.tariffForm.get('cAccCode');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditTariffComponent.prototype, "Name", {
        get: function () {
            return this.tariffForm.get('cName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditTariffComponent.prototype, "NameEnglish", {
        get: function () {
            return this.tariffForm.get('cNameEnglish');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditTariffComponent.prototype, "Fee", {
        get: function () {
            return this.tariffForm.get('cFee');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditTariffComponent.prototype, "Quantity", {
        get: function () {
            return this.tariffForm.get('cQuantity');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditTariffComponent.prototype, "TariffMode", {
        get: function () {
            return this.tariffForm.get('cTariffModeId');
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_11__["Subscription"])
    ], EditTariffComponent.prototype, "tariffSub", void 0);
    EditTariffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-tariff',
            template: __webpack_require__(/*! ./edit-tariff.component.html */ "./src/app/components/setting/othe-tabs/tariff/edit/edit-tariff.component.html"),
            providers: [_tariff_service__WEBPACK_IMPORTED_MODULE_6__["TariffService"]],
            styles: [__webpack_require__(/*! ./edit-tariff.component.css */ "./src/app/components/setting/othe-tabs/tariff/edit/edit-tariff.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_12__["AppConfiguration"],
            _tariff_service__WEBPACK_IMPORTED_MODULE_6__["TariffService"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], EditTariffComponent);
    return EditTariffComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/othe-tabs/tariff/list/list-tariff.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/setting/othe-tabs/tariff/list/list-tariff.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9zZXR0aW5nL290aGUtdGFicy90YXJpZmYvbGlzdC9saXN0LXRhcmlmZi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/setting/othe-tabs/tariff/list/list-tariff.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/setting/othe-tabs/tariff/list/list-tariff.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\" style=\"margin: 10px;\">\r\n  <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>\r\n  <mat-table [dataSource]=\"dataSource\" matSort>\r\n    <ng-container matColumnDef=\"AccountCode\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"100px\">Account Code</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\" fxFlex=\"100px\"> {{row.AccCode}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"Name\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"260px\">Name</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\" fxFlex=\"260px\"> {{row.Name}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"NameEnglish\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"260px\">Name English</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\" fxFlex=\"260px\"> {{row.NameEnglish}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"Fee\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"80px\">Fee</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\" fxFlex=\"80px\"> {{row.Fee}}</mat-cell>\r\n    </ng-container>\r\n    <!--<ng-container matColumnDef=\"TariffModeId\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"180px\">Tariff Mode</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\" fxFlex=\"180px\"> {{row.TariffModeId}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"IncrementalFee\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"180px\">Incremental Fee</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\" fxFlex=\"180px\"> {{row.IncrementalFee}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"Quantity\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"180px\">Quantity</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\" fxFlex=\"180px\"> {{row.Quantity}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"IsActive\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Status</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.IsActive}}</mat-cell>\r\n    </ng-container>-->\r\n    <ng-container matColumnDef=\"actions\">\r\n      <mat-header-cell *matHeaderCellDef fxFlex=\"100px\">\r\n        <button mat-button color=\"primary\" (click)=\"editTariff()\">\r\n          <mat-icon class=\"mat-button-icon\">add</mat-icon>\r\n          {{'common.commands.Add' | translate}}\r\n        </button>\r\n      </mat-header-cell>\r\n      <mat-header-cell *matHeaderCellDef fxFlex=\"80px\">\r\n      </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let tariffs\" fxFlex=\"80px\">\r\n        <button mat-icon-button (click)=\"editTariff(tariffs)\" type=\"button\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"confirmDelete(tariffs)\" type=\"button\">\r\n          <mat-icon color=\"warn\">delete</mat-icon>\r\n        </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n    </mat-row>\r\n  </mat-table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/setting/othe-tabs/tariff/list/list-tariff.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/setting/othe-tabs/tariff/list/list-tariff.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ListTariffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTariffComponent", function() { return ListTariffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _tariff_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tariff.service */ "./src/app/components/setting/othe-tabs/tariff/tariff.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../@custor/components/confirm-dialog/confirm-dialog.component */ "./src/@custor/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../@custor/helpers/utilities */ "./src/@custor/helpers/utilities.ts");










var ListTariffComponent = /** @class */ (function () {
    function ListTariffComponent(http, tariffService, errMsg, toastr, dialog, router, route) {
        this.http = http;
        this.tariffService = tariffService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.displayedColumns = ['AccountCode', 'Name', 'NameEnglish', 'Fee', 'actions'];
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    ListTariffComponent.prototype.ngOnInit = function () {
        this.getTariffs();
    };
    ListTariffComponent.prototype.getTariffs = function () {
        var _this = this;
        this.loadingIndicator = true;
        this.tariffService.getTariffs()
            .subscribe(function (result) {
            _this.tariffs = result;
            if (!_this.tariffs) {
                _this.toastr.error('No records were found to list', 'Error', {
                    closeButton: true,
                });
            }
            else {
                _this.dataSource.data = _this.tariffs;
            }
        }, function (err) {
            if (!_this.errMsg.message) {
                _this.toastr.error('Error! Please check if the Web tariff is running');
            }
            else {
                _this.toastr.error(_this.errMsg.getError(err));
            }
        });
        this.loadingIndicator = false;
    };
    ListTariffComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ListTariffComponent.prototype.editTariff = function (tariff) {
        if (tariff) {
            this.router.navigate(['/tariffs/edit', tariff.TariffId], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['/tariffs/edit', 0]);
        }
    };
    ListTariffComponent.prototype.confirmDelete = function (tariff) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AngConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            _this.loadingIndicator = true;
            if (result) {
                _this.tariffService.deleteTariff(tariff)
                    .subscribe(function (results) {
                    _this.loadingIndicator = false;
                    _this.dataSource.data = _this.dataSource.data.filter(function (item) { return item !== tariff; });
                }, function (error) {
                    // tslint:disable-next-line:max-line-length
                    _this.toastr.error("An error occured whilst deleting the tariff.\r\nError: \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_9__["Utilities"].getHttpResponseMessage(error) + "\"", 'Delete Error');
                });
            }
            _this.loadingIndicator = false;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ListTariffComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ListTariffComponent.prototype, "sort", void 0);
    ListTariffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-tariff',
            template: __webpack_require__(/*! ./list-tariff.component.html */ "./src/app/components/setting/othe-tabs/tariff/list/list-tariff.component.html"),
            providers: [_tariff_service__WEBPACK_IMPORTED_MODULE_3__["TariffService"]],
            styles: [__webpack_require__(/*! ./list-tariff.component.css */ "./src/app/components/setting/othe-tabs/tariff/list/list-tariff.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _tariff_service__WEBPACK_IMPORTED_MODULE_3__["TariffService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], ListTariffComponent);
    return ListTariffComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/othe-tabs/tariff/tariff-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/setting/othe-tabs/tariff/tariff-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: TariffRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TariffRoutingModule", function() { return TariffRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_edit_tariff_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit-tariff.component */ "./src/app/components/setting/othe-tabs/tariff/edit/edit-tariff.component.ts");
/* harmony import */ var _list_list_tariff_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list-tariff.component */ "./src/app/components/setting/othe-tabs/tariff/list/list-tariff.component.ts");
/* harmony import */ var _tariff_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tariff.component */ "./src/app/components/setting/othe-tabs/tariff/tariff.component.ts");






var routes = [{
        path: '', component: _tariff_component__WEBPACK_IMPORTED_MODULE_5__["TariffComponent"], children: [
            { path: '', component: _list_list_tariff_component__WEBPACK_IMPORTED_MODULE_4__["ListTariffComponent"] },
            { path: 'list', component: _list_list_tariff_component__WEBPACK_IMPORTED_MODULE_4__["ListTariffComponent"] },
            { path: 'edit/:id', component: _edit_edit_tariff_component__WEBPACK_IMPORTED_MODULE_3__["EditTariffComponent"] }
        ]
    }
];
var TariffRoutingModule = /** @class */ (function () {
    function TariffRoutingModule() {
    }
    TariffRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TariffRoutingModule);
    return TariffRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/setting/othe-tabs/tariff/tariff.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/setting/othe-tabs/tariff/tariff.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9zZXR0aW5nL290aGUtdGFicy90YXJpZmYvdGFyaWZmLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/setting/othe-tabs/tariff/tariff.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/setting/othe-tabs/tariff/tariff.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/setting/othe-tabs/tariff/tariff.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/setting/othe-tabs/tariff/tariff.component.ts ***!
  \*************************************************************************/
/*! exports provided: TariffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TariffComponent", function() { return TariffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TariffComponent = /** @class */ (function () {
    function TariffComponent() {
    }
    TariffComponent.prototype.ngOnInit = function () {
    };
    TariffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tariff',
            template: __webpack_require__(/*! ./tariff.component.html */ "./src/app/components/setting/othe-tabs/tariff/tariff.component.html"),
            styles: [__webpack_require__(/*! ./tariff.component.css */ "./src/app/components/setting/othe-tabs/tariff/tariff.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TariffComponent);
    return TariffComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/othe-tabs/tariff/tariff.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/setting/othe-tabs/tariff/tariff.module.ts ***!
  \**********************************************************************/
/*! exports provided: TariffModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TariffModule", function() { return TariffModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tariff_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tariff-routing.module */ "./src/app/components/setting/othe-tabs/tariff/tariff-routing.module.ts");
/* harmony import */ var _edit_edit_tariff_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit-tariff.component */ "./src/app/components/setting/othe-tabs/tariff/edit/edit-tariff.component.ts");
/* harmony import */ var _list_list_tariff_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list-tariff.component */ "./src/app/components/setting/othe-tabs/tariff/list/list-tariff.component.ts");
/* harmony import */ var _tariff_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tariff.component */ "./src/app/components/setting/othe-tabs/tariff/tariff.component.ts");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../@custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");








var TariffModule = /** @class */ (function () {
    function TariffModule() {
    }
    TariffModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _tariff_component__WEBPACK_IMPORTED_MODULE_6__["TariffComponent"],
                _edit_edit_tariff_component__WEBPACK_IMPORTED_MODULE_4__["EditTariffComponent"],
                _list_list_tariff_component__WEBPACK_IMPORTED_MODULE_5__["ListTariffComponent"]
            ],
            exports: [
                _tariff_component__WEBPACK_IMPORTED_MODULE_6__["TariffComponent"],
                _edit_edit_tariff_component__WEBPACK_IMPORTED_MODULE_4__["EditTariffComponent"],
                _list_list_tariff_component__WEBPACK_IMPORTED_MODULE_5__["ListTariffComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _tariff_routing_module__WEBPACK_IMPORTED_MODULE_3__["TariffRoutingModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
        })
    ], TariffModule);
    return TariffModule;
}());



/***/ }),

/***/ "./src/app/components/setting/othe-tabs/tariff/tariff.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/setting/othe-tabs/tariff/tariff.service.ts ***!
  \***********************************************************************/
/*! exports provided: TariffService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TariffService", function() { return TariffService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");






var TariffService = /** @class */ (function () {
    function TariffService(httpClient, config, errMsg) {
        this.httpClient = httpClient;
        this.config = config;
        this.errMsg = errMsg;
        this.tariffList = [];
    }
    TariffService.prototype.getTariffs = function () {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('tariffs')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (tariffList) { return _this.tariffList = tariffList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    /*  getTariffForExistance(descEng, serviceId): Observable<Tariff> {
        return this.httpClient.get<tariffModel>(this.config.urls.url('tariff', descEng, serviceId)).pipe(
          map(servicePrereq => {
            this.tariffModel = servicePrereq;
            return this.tariffModel;
          }),
          catchError(this.errMsg.parseObservableResponseError), );
      }*/
    TariffService.prototype.getTariff = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('tariff', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (tariffdata) {
            _this.tariffModel = tariffdata;
            return _this.tariffModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    TariffService.prototype.saveTariff = function (tariff) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('tariff'), tariff).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (Taruff) {
            _this.tariffModel = Taruff;
            return _this.tariffModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    TariffService.prototype.deleteTariff = function (tariff) {
        return this.httpClient.delete(this.config.urls.url('tariff', tariff.TariffId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errMsg.parsePromiseResponseError));
    };
    TariffService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"]])
    ], TariffService);
    return TariffService;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-components-setting-othe-tabs-tariff-tariff-module~app-components-setting-services-tabs-s~30c0187e.js.map