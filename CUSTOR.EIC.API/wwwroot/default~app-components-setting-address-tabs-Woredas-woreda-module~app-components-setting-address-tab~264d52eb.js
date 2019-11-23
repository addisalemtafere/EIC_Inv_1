(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-components-setting-address-tabs-Woredas-woreda-module~app-components-setting-address-tab~264d52eb"],{

/***/ "./src/app/components/setting/address-tabs/Woredas/edit/edit-woreda.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/Woredas/edit/edit-woreda.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* div {\r\n  display: flex;\r\n} */\r\n\r\nmat-card {\r\n  max-width: 600px;\r\n  margin: 10px auto;\r\n  text-align: center;\r\n}\r\n\r\nmat-checkbox {\r\n  max-width: 500px;\r\n  margin: 2em auto;\r\n  text-align: left;\r\n}\r\n\r\n/*mat-form-field  {*/\r\n\r\n/*max-width: 400px;*/\r\n\r\n/*margin-right: 10px;*/\r\n\r\n/*font-size: 16px;*/\r\n\r\n/*}*/\r\n\r\n.row\r\n{\r\n  text-align: left;\r\n  margin-bottom: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3NldHRpbmcvYWRkcmVzcy10YWJzL1dvcmVkYXMvZWRpdC9lZGl0LXdvcmVkYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOztBQUVIO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFDQSxvQkFBb0I7O0FBQ3BCLG9CQUFvQjs7QUFDcEIsc0JBQXNCOztBQUN0QixtQkFBbUI7O0FBQ25CLElBQUk7O0FBQ0o7O0VBRUUsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9zZXR0aW5nL2FkZHJlc3MtdGFicy9Xb3JlZGFzL2VkaXQvZWRpdC13b3JlZGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufSAqL1xyXG5cclxubWF0LWNhcmQge1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbm1hdC1jaGVja2JveCB7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBtYXJnaW46IDJlbSBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLyptYXQtZm9ybS1maWVsZCAgeyovXHJcbi8qbWF4LXdpZHRoOiA0MDBweDsqL1xyXG4vKm1hcmdpbi1yaWdodDogMTBweDsqL1xyXG4vKmZvbnQtc2l6ZTogMTZweDsqL1xyXG4vKn0qL1xyXG4ucm93XHJcbntcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/setting/address-tabs/Woredas/edit/edit-woreda.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/Woredas/edit/edit-woreda.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div [@fadeInOut] class=\"page-content margin-2 mat-elevation-z8\" fxFlex=\"50\" style=\"padding: 15px\">-->\r\n<mat-toolbar mat-dialog-title>\r\n  <h1 mat-dialog-title>\r\n    <mat-icon>create</mat-icon>\r\n    {{('woreda.Header' | translate)}}\r\n  </h1>\r\n</mat-toolbar>\r\n\r\n<mat-card class=\"mat-elevation-z8\">\r\n  <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>\r\n  <!--<mat-card-header>-->\r\n    <!--<mat-card-title class=\"sub-title\">-->\r\n      <!--Edit Woreda-->\r\n      <!--<mat-divider></mat-divider>-->\r\n    <!--</mat-card-title>-->\r\n  <!--</mat-card-header>-->\r\n  <br/>\r\n  <mat-card-content>\r\n    <form #form=\"ngForm\" [formGroup]=\"woredaForm\" novalidate (ngSubmit)=\"onSubmit()\" fxLayout=\"column\"\r\n          autocomplete=\"off\">\r\n      <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n\r\n        <mat-form-field style=\"width: 200px\">\r\n          <mat-label>{{'woreda.Region' | translate}}</mat-label>\r\n          <mat-select formControlName=\"cRegion\" [compareWith]=\"compareIds\"\r\n                      (selectionChange)=\"filterRegion($event.value)\" required>\r\n            <mat-option *ngFor=\"let region of regionModels\" [value]=\"region.RegionId\">\r\n              <span>{{region.DescriptionEnglish}}</span>\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"Region.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field style=\"width: 200px\">\r\n          <mat-label>{{'woreda.Zone' | translate}}</mat-label>\r\n          <mat-select formControlName=\"cZone\" [compareWith]=\"compareIds\" required>\r\n            <mat-option *ngFor=\"let zones of fillterZoneModels\" [value]=\"zones.ZoneId\">\r\n              <span>{{zones.DescriptionEnglish}}</span>\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"Zone.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field style=\"width: 200px\">\r\n          <mat-label>{{'woreda.Code' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cCode\" required maxlength=\"20\" required/>\r\n          <mat-error *ngIf=\"Woreda.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"Woreda.hasError('maxlength')\">\r\n            {{'common.validation.MaxLengthChar' | translate: {'max':'15'} }}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"Woreda.hasError('pattern')\">\r\n            {{'common.validation.NumberOnly' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field style=\"width: 200px\">\r\n          <mat-label>{{'woreda.Description' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cDescription\" required maxlength=\"150\"/>\r\n          <mat-error *ngIf=\"Description.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"Description.hasError('maxlength')\">\r\n            {{'common.validation.MaxLengthChar' | translate: {'max':'15'} }}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"Description.hasError('pattern')\">\r\n            {{'common.validation.NumberOnly' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field style=\"width: 200px\">\r\n          <mat-label>{{'woreda.DescriptionEnglish' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cDescriptionEnglish\" required maxlength=\"200\"/>\r\n          <mat-error *ngIf=\"DescriptionEnglish.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"DescriptionEnglish.hasError('maxlength')\">\r\n            {{'common.validation.MaxLengthChar' | translate: {'max':'15'} }}\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div mat-dialog-actions style=\"margin: 15px; text-align: center\">\r\n        <button [disabled]=\"form.invalid\" mat-raised-button type=\"submit\" color=\"primary\" style=\"margin: 15px;\">\r\n          Save\r\n        </button>\r\n        <button mat-raised-button (click)=\"onBack()\" color=\"warn\" type=\"button\">\r\n          Cancel\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card>\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "./src/app/components/setting/address-tabs/Woredas/edit/edit-woreda.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/Woredas/edit/edit-woreda.component.ts ***!
  \***************************************************************************************/
/*! exports provided: EditWoredaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWoredaComponent", function() { return EditWoredaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _woreda_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../woreda.service */ "./src/app/components/setting/address-tabs/Woredas/woreda.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _custor_helpers_compare__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../@custor/helpers/compare */ "./src/@custor/helpers/compare.ts");

///<reference path="../../../../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>










var EditWoredaComponent = /** @class */ (function () {
    function EditWoredaComponent(activatedRoute, router, http, config, woredaService, errMsg, toastr, fb) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.http = http;
        this.config = config;
        this.woredaService = woredaService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.fb = fb;
        this.isNewWoreda = false;
        this.woredaModels = [];
        this.regionModels = [];
        this.zoneModels = [];
        this.fillterZoneModels = [];
        this.woreda = {};
        // initialize the form
        this.initForm();
        this.initStaticData('en');
    }
    Object.defineProperty(EditWoredaComponent.prototype, "Description", {
        get: function () {
            return this.woredaForm.get('cDescription');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditWoredaComponent.prototype, "DescriptionEnglish", {
        get: function () {
            return this.woredaForm.get('cDescriptionEnglish');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditWoredaComponent.prototype, "Woreda", {
        get: function () {
            return this.woredaForm.get('cCode');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditWoredaComponent.prototype, "Region", {
        get: function () {
            return this.woredaForm.get('cRegion');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditWoredaComponent.prototype, "Zone", {
        get: function () {
            return this.woredaForm.get('cZone');
        },
        enumerable: true,
        configurable: true
    });
    EditWoredaComponent.prototype.ngOnInit = function () {
        var id = this.activatedRoute.snapshot.params['id'];
        if (id < 1) {
            this.isNewWoreda = true;
            this.title = 'Create a new Woreda';
            this.getRegions();
            this.getAllZones();
            this.woredaForm.patchValue({
                cRegion: this.activatedRoute.snapshot.params['regionId'],
                cZone: this.activatedRoute.snapshot.params['zoneId']
            });
            return;
        }
        if (id) {
            this.getWoreda(id);
        }
    };
    EditWoredaComponent.prototype.getRegions = function () {
        var _this = this;
        this.woredaService.getRegions()
            .subscribe(function (result) {
            _this.regionModels = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    EditWoredaComponent.prototype.getAllZones = function () {
        var _this = this;
        this.woredaService.getZones()
            .subscribe(function (result) {
            _this.zoneModels = result;
            if (_this.isNewWoreda) {
                var formModel = _this.woredaForm.value;
                _this.filterRegion(formModel.cRegion);
            }
            else {
                _this.filterRegion(_this.woreda.Zone.RegionId);
            }
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    EditWoredaComponent.prototype.filterRegion = function (RegionCode) {
        if (!RegionCode) {
            return;
        }
        this.fillterZoneModels = null;
        this.fillterZoneModels = this.zoneModels.filter(function (item) {
            // // console.log(RegionCode + '==' + item.RegionId);
            return item.RegionId === RegionCode;
        });
    };
    EditWoredaComponent.prototype.initStaticData = function (currentLang) {
        /*let SecType: RegionType = new RegionType();
        RegionTypes.forEach(pair => {
          SecType = {
            'Id': pair.Id.toString(),
            'DescriptionEnglish': pair.DescriptionEnglish,
            'Description': pair.Description
          };
          this.sectorTypes.push(SecType);
        });*/
    };
    EditWoredaComponent.prototype.getWoreda = function (id) {
        var _this = this;
        this.isNewWoreda = false;
        this.loadingIndicator = true;
        this.woredaSub = this.woredaService
            .getWoreda(id)
            .subscribe(function (result) {
            _this.woreda = result;
            _this.getRegions();
            _this.getAllZones();
            _this.updateForm();
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
        this.loadingIndicator = false;
    };
    EditWoredaComponent.prototype.updateForm = function () {
        // console.log(this.woreda);
        this.woredaForm.patchValue({
            cDescription: this.woreda.Description == null ? '' : this.woreda.Description.toString(),
            cDescriptionEnglish: this.woreda.DescriptionEnglish == null ? '' : this.woreda.DescriptionEnglish.toString(),
            cRegion: this.woreda.Zone.RegionId,
            cZone: this.woreda.ZoneId,
            cCode: this.woreda.WoredaId,
        });
        // },4000);
        this.isNewWoreda = false;
    };
    EditWoredaComponent.prototype.initForm = function () {
        this.woredaForm = this.fb.group({
            cDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(150),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^([ \u1200-\u137F -/ 0-9])+$')])],
            cDescriptionEnglish: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(200),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z -/,0-9]+$')])],
            cRegion: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cZone: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20)])]
        });
    };
    /* checkRecordExistance(): boolean {
       const formModel = this.servicesForm.value;
       this.sectorsSub = this.sectorsService
         .getServices(formModel.cServiceNameEnglish, formModel.cServiceType)
         .subscribe(result => {
           this.sectors = result
         })
       if (this.sectors.ServiceId == null) {
         return false;
       } else {
         return true;
       }
     }*/
    EditWoredaComponent.prototype.compareIds = function (id1, id2) {
        var a1 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_10__["determineId"])(id1);
        var a2 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_10__["determineId"])(id2);
        return a1 === a2;
    };
    EditWoredaComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.woredaForm.valid) {
            return;
        }
        if (this.isNewWoreda) {
            /* if (this.checkRecordExistance()) {
               this.toastr.show(
                 'Record Exist', 'message', {
                   closeButton: true
                 })
               return;
             }*/
            this.loadingIndicator = true;
        }
        return this.woredaService.saveWoreda(this.getEditedWoreda()).subscribe(function (woreda) {
            _this.saveCompleted(woreda);
        }, function (err) { return _this.handleError(err); });
    };
    EditWoredaComponent.prototype.ngOnDestroy = function () {
        // this.woredaSub.unsubscribe();
    };
    EditWoredaComponent.prototype.onBack = function () {
        //this.router.navigate(['woredas/list']);
        this.router.navigate(['address']);
    };
    EditWoredaComponent.prototype.saveCompleted = function (woreda) {
        if (woreda) {
            this.woreda = woreda;
        }
        this.loadingIndicator = false;
        this.toastr.success('Record saved successfully!');
        this.router.navigate(['address']);
    };
    EditWoredaComponent.prototype.handleError = function (err) {
        this.loadingIndicator = false;
        this.toastr.error(this.errMsg.getError(err));
        this.loadingIndicator = false;
    };
    EditWoredaComponent.prototype.getEditedWoreda = function () {
        var formModel = this.woredaForm.value;
        return {
            isNew: this.isNewWoreda ? true : false,
            WoredaId: formModel.cCode,
            RegionId: formModel.cRegion,
            ZoneId: formModel.cZone,
            Description: formModel.cDescription,
            DescriptionEnglish: formModel.cDescriptionEnglish,
            Region: null,
            Zone: null,
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_5__["Subscription"])
    ], EditWoredaComponent.prototype, "woredaSub", void 0);
    EditWoredaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-woreda',
            template: __webpack_require__(/*! ./edit-woreda.component.html */ "./src/app/components/setting/address-tabs/Woredas/edit/edit-woreda.component.html"),
            styles: [__webpack_require__(/*! ./edit-woreda.component.css */ "./src/app/components/setting/address-tabs/Woredas/edit/edit-woreda.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"],
            _woreda_service__WEBPACK_IMPORTED_MODULE_7__["WoredaService"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_9__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], EditWoredaComponent);
    return EditWoredaComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/address-tabs/Woredas/list/list-woreda.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/Woredas/list/list-woreda.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9zZXR0aW5nL2FkZHJlc3MtdGFicy9Xb3JlZGFzL2xpc3QvbGlzdC13b3JlZGEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/setting/address-tabs/Woredas/list/list-woreda.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/Woredas/list/list-woreda.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\" style=\"margin: 15px;\">\r\n  <mat-form-field style=\"width: 150px;margin: 15px;\">\r\n    <mat-label>{{'zone.Region' | translate}}</mat-label>\r\n    <mat-select formControlName=\"cRegion\" [compareWith]=\"compareIds\" required #region\r\n                (selectionChange)=\"filterRegion($event.value)\">\r\n      <mat-option *ngFor=\"let region of regionModels\" [value]=\"region.RegionId\">\r\n        <span>{{region.DescriptionEnglish}}</span>\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <mat-form-field style=\"width: 150px;margin: 15px;\">\r\n    <mat-label>{{'kebele.Zone' | translate}}</mat-label>\r\n    <mat-select formControlName=\"cZone\" [compareWith]=\"compareIds\" (selectionChange)=\"filterZone($event.value)\" #zone\r\n                required>\r\n      <option value=\"0\">--Select--</option>\r\n      <mat-option *ngFor=\"let zone of fillterZoneModels\" [value]=\"zone.ZoneId\">\r\n        <span>{{zone.DescriptionEnglish}}</span>\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>\r\n  <mat-table [dataSource]=\"dataSource\" matSort>\r\n    <ng-container matColumnDef=\"Id\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"100px\">Id</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\" fxFlex=\"100px\"> {{row.WoredaId}}</mat-cell>\r\n    </ng-container>\r\n    <!--<ng-container matColumnDef=\"Zone\">-->\r\n    <!--<mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"100px\">Zone</mat-header-cell>-->\r\n    <!--<mat-cell *matCellDef=\"let row\" fxFlex=\"100px\"> {{row.Zone.Description}}</mat-cell>-->\r\n    <!--</ng-container>-->\r\n    <ng-container matColumnDef=\"Description\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"150px\">Description</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\" fxFlex=\"150px\"> {{row.Description}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"DescriptionEnglish\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"150px\">Description English</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\" fxFlex=\"150px\"> {{row.DescriptionEnglish}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"actions\">\r\n      <mat-header-cell *matHeaderCellDef fxFlex=\"100px\">\r\n        <button mat-button color=\"primary\" (click)=\"editWoreda()\">\r\n          <mat-icon class=\"mat-button-icon\">add</mat-icon>\r\n          {{'common.commands.Add' | translate}}\r\n        </button>\r\n      </mat-header-cell>\r\n      <mat-header-cell *matHeaderCellDef fxFlex=\"100px\">\r\n      </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let woredas\" fxFlex=\"100px\">\r\n        <button mat-icon-button (click)=\"editWoreda(woredas)\" type=\"button\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"confirmDelete(woredas)\" type=\"button\">\r\n          <mat-icon color=\"warn\">delete</mat-icon>\r\n        </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n    </mat-row>\r\n  </mat-table>\r\n\r\n  <mat-paginator\r\n\r\n    #paginator\r\n    [pageSize]=\"7\"\r\n    [pageSizeOptions]=\"[5, 7,10, 20]\">\r\n  </mat-paginator>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/setting/address-tabs/Woredas/list/list-woreda.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/Woredas/list/list-woreda.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ListWoredaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListWoredaComponent", function() { return ListWoredaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _woreda_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../woreda.service */ "./src/app/components/setting/address-tabs/Woredas/woreda.service.ts");
/* harmony import */ var _custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../@custor/components/confirm-dialog/confirm-dialog.component */ "./src/@custor/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../@custor/helpers/utilities */ "./src/@custor/helpers/utilities.ts");
/* harmony import */ var _custor_helpers_compare__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @custor/helpers/compare */ "./src/@custor/helpers/compare.ts");
/* harmony import */ var _zone_zone_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../zone/zone.service */ "./src/app/components/setting/address-tabs/zone/zone.service.ts");












var ListWoredaComponent = /** @class */ (function () {
    function ListWoredaComponent(http, woredaService, subZoneService, errMsg, toastr, dialog, router, route) {
        this.http = http;
        this.woredaService = woredaService;
        this.subZoneService = subZoneService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.displayedColumns = ['Id', 'Description', 'DescriptionEnglish', 'actions'];
        this.regionModels = [];
        this.fillterZoneModels = [];
        this.filltersWoredaModels = [];
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    ListWoredaComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListWoredaComponent.prototype.ngOnInit = function () {
        this.getRegions();
        // this.getAllZones();
        // this.getWoredas();
    };
    ListWoredaComponent.prototype.compareIds = function (id1, id2) {
        var a1 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_10__["determineId"])(id1);
        var a2 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_10__["determineId"])(id2);
        return a1 === a2;
    };
    ListWoredaComponent.prototype.filterRegion = function (RegionCode) {
        var _this = this;
        if (!RegionCode) {
            return;
        }
        this.region = RegionCode,
            this.subZoneService.getZonesbyParent(RegionCode)
                .subscribe(function (result) {
                _this.fillterZoneModels = result;
            });
    };
    ListWoredaComponent.prototype.filterZone = function (ZoneId) {
        var _this = this;
        if (!ZoneId) {
            return;
        }
        this.zone = ZoneId;
        this.woredaService.getWoredaByParent(ZoneId)
            .subscribe(function (result) {
            _this.woredaModels = result;
            _this.dataSource.data = _this.woredaModels;
        });
    };
    ListWoredaComponent.prototype.getRegions = function () {
        var _this = this;
        this.woredaService.getRegions()
            .subscribe(function (result) {
            _this.regionModels = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    ListWoredaComponent.prototype.getAllZones = function () {
        var _this = this;
        this.woredaService.getZones()
            .subscribe(function (result) {
            _this.zoneModels = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    ListWoredaComponent.prototype.getWoredas = function () {
        var _this = this;
        this.loadingIndicator = true;
        this.woredaService.getWoredas()
            .subscribe(function (result) {
            _this.woredaModels = result;
            if (!_this.woredaModels) {
                _this.toastr.error('No records were found to list', 'Error', {
                    closeButton: true,
                });
            }
            else {
                //this.dataSource.data = this.woredaModels;
            }
        }, function (err) {
            if (!_this.errMsg.message) {
                _this.toastr.error('Error! Please check if the Web Woreda is running');
            }
            else {
                _this.toastr.error(_this.errMsg.getError(err));
            }
        });
        this.loadingIndicator = false;
    };
    ListWoredaComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ListWoredaComponent.prototype.editWoreda = function (woredaModel) {
        if (woredaModel) {
            this.router.navigate(['/woredas/edit/' + woredaModel.WoredaId + '/' + 0 + '/' + 0], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['/woredas/edit/' + 0 + '/' + this.region + '/' + this.zone]);
        }
    };
    ListWoredaComponent.prototype.confirmDelete = function (woredaModel) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AngConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            _this.loadingIndicator = true;
            if (result) {
                _this.woredaService.deleteWoreda(woredaModel)
                    .subscribe(function (results) {
                    _this.loadingIndicator = false;
                    _this.dataSource.data = _this.dataSource.data.filter(function (item) { return item !== woredaModel; });
                }, function (error) {
                    // tslint:disable-next-line:max-line-length
                    _this.toastr.error("An error occured whilst deleting the Woreda.\r\nError: \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_9__["Utilities"].getHttpResponseMessage(error) + "\"", 'Delete Error');
                });
            }
            _this.loadingIndicator = false;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ListWoredaComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ListWoredaComponent.prototype, "sort", void 0);
    ListWoredaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-woreda',
            template: __webpack_require__(/*! ./list-woreda.component.html */ "./src/app/components/setting/address-tabs/Woredas/list/list-woreda.component.html"),
            styles: [__webpack_require__(/*! ./list-woreda.component.css */ "./src/app/components/setting/address-tabs/Woredas/list/list-woreda.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _woreda_service__WEBPACK_IMPORTED_MODULE_6__["WoredaService"], _zone_zone_service__WEBPACK_IMPORTED_MODULE_11__["ZoneService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ListWoredaComponent);
    return ListWoredaComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/address-tabs/Woredas/woreda-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/Woredas/woreda-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: WoredaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WoredaRoutingModule", function() { return WoredaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _woreda_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./woreda.component */ "./src/app/components/setting/address-tabs/Woredas/woreda.component.ts");
/* harmony import */ var _edit_edit_woreda_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit-woreda.component */ "./src/app/components/setting/address-tabs/Woredas/edit/edit-woreda.component.ts");
/* harmony import */ var _list_list_woreda_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list-woreda.component */ "./src/app/components/setting/address-tabs/Woredas/list/list-woreda.component.ts");






var routes = [{
        path: '', component: _woreda_component__WEBPACK_IMPORTED_MODULE_3__["WoredaComponent"], children: [
            { path: '', component: _list_list_woreda_component__WEBPACK_IMPORTED_MODULE_5__["ListWoredaComponent"] },
            { path: 'list', component: _list_list_woreda_component__WEBPACK_IMPORTED_MODULE_5__["ListWoredaComponent"] },
            { path: 'edit/:id/:regionId/:zoneId', component: _edit_edit_woreda_component__WEBPACK_IMPORTED_MODULE_4__["EditWoredaComponent"] }
        ]
    }];
var WoredaRoutingModule = /** @class */ (function () {
    function WoredaRoutingModule() {
    }
    WoredaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], WoredaRoutingModule);
    return WoredaRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/setting/address-tabs/Woredas/woreda.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/Woredas/woreda.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9zZXR0aW5nL2FkZHJlc3MtdGFicy9Xb3JlZGFzL3dvcmVkYS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/setting/address-tabs/Woredas/woreda.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/Woredas/woreda.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/setting/address-tabs/Woredas/woreda.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/Woredas/woreda.component.ts ***!
  \*****************************************************************************/
/*! exports provided: WoredaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WoredaComponent", function() { return WoredaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WoredaComponent = /** @class */ (function () {
    function WoredaComponent() {
    }
    WoredaComponent.prototype.ngOnInit = function () {
    };
    WoredaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-woreda',
            template: __webpack_require__(/*! ./woreda.component.html */ "./src/app/components/setting/address-tabs/Woredas/woreda.component.html"),
            styles: [__webpack_require__(/*! ./woreda.component.css */ "./src/app/components/setting/address-tabs/Woredas/woreda.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WoredaComponent);
    return WoredaComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/address-tabs/Woredas/woreda.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/Woredas/woreda.module.ts ***!
  \**************************************************************************/
/*! exports provided: WoredaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WoredaModule", function() { return WoredaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _woreda_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./woreda-routing.module */ "./src/app/components/setting/address-tabs/Woredas/woreda-routing.module.ts");
/* harmony import */ var _list_list_woreda_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list-woreda.component */ "./src/app/components/setting/address-tabs/Woredas/list/list-woreda.component.ts");
/* harmony import */ var _edit_edit_woreda_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit-woreda.component */ "./src/app/components/setting/address-tabs/Woredas/edit/edit-woreda.component.ts");
/* harmony import */ var _woreda_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./woreda.component */ "./src/app/components/setting/address-tabs/Woredas/woreda.component.ts");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../@custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _woreda_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./woreda.service */ "./src/app/components/setting/address-tabs/Woredas/woreda.service.ts");









var WoredaModule = /** @class */ (function () {
    function WoredaModule() {
    }
    WoredaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _woreda_routing_module__WEBPACK_IMPORTED_MODULE_3__["WoredaRoutingModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_list_list_woreda_component__WEBPACK_IMPORTED_MODULE_4__["ListWoredaComponent"], _edit_edit_woreda_component__WEBPACK_IMPORTED_MODULE_5__["EditWoredaComponent"], _woreda_component__WEBPACK_IMPORTED_MODULE_6__["WoredaComponent"]],
            exports: [_list_list_woreda_component__WEBPACK_IMPORTED_MODULE_4__["ListWoredaComponent"], _edit_edit_woreda_component__WEBPACK_IMPORTED_MODULE_5__["EditWoredaComponent"], _woreda_component__WEBPACK_IMPORTED_MODULE_6__["WoredaComponent"]],
            providers: [_woreda_service__WEBPACK_IMPORTED_MODULE_8__["WoredaService"]]
        })
    ], WoredaModule);
    return WoredaModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-components-setting-address-tabs-Woredas-woreda-module~app-components-setting-address-tab~264d52eb.js.map