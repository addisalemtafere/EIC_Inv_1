(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-components-setting-address-tabs-address-module~app-components-setting-address-tabs-zone-~9de82906"],{

/***/ "./src/app/components/setting/address-tabs/zone/edit/edit-zone.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/zone/edit/edit-zone.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* div {\r\n  display: flex;\r\n} */\r\n\r\nmat-card {\r\n  max-width: 500px;\r\n  margin: 10px auto;\r\n  text-align: center;\r\n}\r\n\r\nmat-checkbox {\r\n  max-width: 500px;\r\n  margin: 2em auto;\r\n  text-align: left;\r\n}\r\n\r\n/*mat-form-field  {*/\r\n\r\n/*max-width: 400px;*/\r\n\r\n/*margin-right: 10px;*/\r\n\r\n/*font-size: 16px;*/\r\n\r\n/*}*/\r\n\r\n.row\r\n{\r\n  text-align: left;\r\n  margin-bottom: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3NldHRpbmcvYWRkcmVzcy10YWJzL3pvbmUvZWRpdC9lZGl0LXpvbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7QUFFSDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBQ0Esb0JBQW9COztBQUNwQixvQkFBb0I7O0FBQ3BCLHNCQUFzQjs7QUFDdEIsbUJBQW1COztBQUNuQixJQUFJOztBQUNKOztFQUVFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckIiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvc2V0dGluZy9hZGRyZXNzLXRhYnMvem9uZS9lZGl0L2VkaXQtem9uZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59ICovXHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxubWF0LWNoZWNrYm94IHtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIG1hcmdpbjogMmVtIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4vKm1hdC1mb3JtLWZpZWxkICB7Ki9cclxuLyptYXgtd2lkdGg6IDQwMHB4OyovXHJcbi8qbWFyZ2luLXJpZ2h0OiAxMHB4OyovXHJcbi8qZm9udC1zaXplOiAxNnB4OyovXHJcbi8qfSovXHJcbi5yb3dcclxue1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/setting/address-tabs/zone/edit/edit-zone.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/zone/edit/edit-zone.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div [@fadeInOut] class=\"page-content margin-2 mat-elevation-z8\" fxFlex=\"50\" style=\"padding: 15px\">-->\r\n<mat-toolbar mat-dialog-title>\r\n  <h1 mat-dialog-title>\r\n    <mat-icon>create</mat-icon>\r\n    {{('zone.Header' | translate)}}\r\n  </h1>\r\n</mat-toolbar>\r\n\r\n<mat-card class=\"mat-elevation-z8\">\r\n  <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>\r\n  <!--<mat-card-header>-->\r\n    <!--<mat-card-title class=\"sub-title\">-->\r\n       <!--Edit Zone-->\r\n      <!--<mat-divider></mat-divider>-->\r\n    <!--</mat-card-title>-->\r\n  <!--</mat-card-header>-->\r\n  <br/>\r\n  <mat-card-content>\r\n    <form #form=\"ngForm\" [formGroup]=\"zoneForm\" novalidate (ngSubmit)=\"onSubmit()\" fxLayout=\"column\"\r\n          autocomplete=\"off\">\r\n      <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n        <mat-form-field style=\"width: 100px\">\r\n          <mat-label>{{'zone.Region' | translate}}</mat-label>\r\n          <mat-select formControlName=\"cRegion\" [compareWith]=\"compareIds\" required>\r\n            <mat-option *ngFor=\"let region of regionModels\" [value]=\"region.RegionId\">\r\n              <span>{{region.DescriptionEnglish}}</span>\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"RegionId.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field style=\"width: 100px\">\r\n          <mat-label>{{'zone.Code' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cId\" required maxlength=\"15\"/>\r\n          <mat-error *ngIf=\"Id.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"Id.hasError('maxlength')\">\r\n            {{'common.validation.MaxLengthChar' | translate: {'max':'15'} }}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"Id.hasError('pattern')\">\r\n            {{'common.validation.NumberOnly' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field style=\"width: 200px\">\r\n          <mat-label>{{'zone.Description' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cDescription\" required maxlength=\"20\"/>\r\n          <mat-error *ngIf=\"Description.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"Description.hasError('maxlength')\">\r\n            {{'common.validation.MaxLengthChar' | translate: {'max':'15'} }}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"Id.hasError('pattern')\">\r\n            {{'common.validation.NumberOnly' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field style=\"width: 200px\">\r\n          <mat-label>{{'zone.DescriptionEnglish' | translate}}</mat-label>\r\n          <input matInput formControlName=\"cDescriptionEnglish\" required maxlength=\"30\"/>\r\n          <mat-error *ngIf=\"DescriptionEnglish.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"DescriptionEnglish.hasError('maxlength')\">\r\n            {{'common.validation.MaxLengthChar' | translate: {'max':'15'} }}\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div mat-dialog-actions style=\"margin: 15px; text-align: center\">\r\n        <button [disabled]=\"form.invalid\" mat-raised-button type=\"submit\" color=\"primary\" style=\"margin: 15px;\">\r\n          Save\r\n        </button>\r\n        <button mat-raised-button (click)=\"onBack()\" color=\"warn\" type=\"button\">\r\n          Cancel\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card>\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "./src/app/components/setting/address-tabs/zone/edit/edit-zone.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/zone/edit/edit-zone.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EditZoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditZoneComponent", function() { return EditZoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _zone_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../zone.service */ "./src/app/components/setting/address-tabs/zone/zone.service.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _custor_helpers_compare__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../@custor/helpers/compare */ "./src/@custor/helpers/compare.ts");











var EditZoneComponent = /** @class */ (function () {
    function EditZoneComponent(activatedRoute, router, http, config, zonesService, errMsg, toastr, fb) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.http = http;
        this.config = config;
        this.zonesService = zonesService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.fb = fb;
        this.isNewZone = false;
        this.regionModels = [];
        this.zones = {};
        // initialize the form
        this.initForm();
        this.initStaticData('en');
    }
    Object.defineProperty(EditZoneComponent.prototype, "Id", {
        get: function () {
            return this.zoneForm.get('cId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditZoneComponent.prototype, "RegionId", {
        get: function () {
            return this.zoneForm.get('cRegion');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditZoneComponent.prototype, "Description", {
        get: function () {
            return this.zoneForm.get('cDescription');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditZoneComponent.prototype, "DescriptionEnglish", {
        get: function () {
            return this.zoneForm.get('cDescriptionEnglish');
        },
        enumerable: true,
        configurable: true
    });
    EditZoneComponent.prototype.ngOnInit = function () {
        this.getRegions();
        var id = this.activatedRoute.snapshot.params['id'];
        if (id < 1) {
            this.isNewZone = true;
            this.title = 'Create a new Zone';
            this.zoneForm.patchValue({
                cRegion: this.activatedRoute.snapshot.params['regionId']
            });
            return;
        }
        if (id) {
            this.getZone(id);
        }
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
    EditZoneComponent.prototype.getRegions = function () {
        var _this = this;
        this.zonesService.getRegions()
            .subscribe(function (result) {
            _this.regionModels = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    EditZoneComponent.prototype.initStaticData = function (currentLang) {
        /*let SecType: SectorType = new SectorType();
        SectorTypes.forEach(pair => {
          SecType = {
            'Id': pair.Id.toString(),
            'DescriptionEnglish': pair.DescriptionEnglish,
            'Description': pair.Description
          };
          this.sectorTypes.push(SecType);
        });*/
    };
    EditZoneComponent.prototype.getZone = function (id) {
        var _this = this;
        this.isNewZone = false;
        this.loadingIndicator = true;
        this.zonesSub = this.zonesService
            .getZone(id)
            .subscribe(function (result) {
            _this.zones = result;
            _this.updateForm();
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
        this.loadingIndicator = false;
    };
    EditZoneComponent.prototype.updateForm = function () {
        this.zoneForm.patchValue({
            cDescription: this.zones.Description == null ? '' : this.zones.Description.toString(),
            cDescriptionEnglish: this.zones.DescriptionEnglish == null ? '' : this.zones.DescriptionEnglish.toString(),
            cRegion: this.zones.RegionId,
            cId: this.zones.ZoneId,
        });
        // },4000);
        this.isNewZone = false;
    };
    EditZoneComponent.prototype.initForm = function () {
        this.zoneForm = this.fb.group({
            cDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^([ \u1200-\u137F 0-9 -])+$')])],
            cDescriptionEnglish: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(30),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z -/,0-9]+$')])],
            cRegion: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')])]
        });
    };
    EditZoneComponent.prototype.compareIds = function (id1, id2) {
        var a1 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_10__["determineId"])(id1);
        var a2 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_10__["determineId"])(id2);
        return a1 === a2;
    };
    EditZoneComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.zoneForm.valid) {
            return;
        }
        if (this.isNewZone) {
            /* if (this.checkRecordExistance()) {
               this.toastr.show(
                 'Record Exist', 'message', {
                   closeButton: true
                 })
               return;
             }*/
            this.loadingIndicator = true;
        }
        return this.zonesService.saveZone(this.getEditedZone()).subscribe(function (zones) {
            _this.saveCompleted(zones);
        }, function (err) { return _this.handleError(err); });
    };
    EditZoneComponent.prototype.ngOnDestroy = function () {
        //  this.zonesSub.unsubscribe;
    };
    EditZoneComponent.prototype.onBack = function () {
        //this.router.navigate(['zones/list']);
        this.router.navigate(['address']);
    };
    EditZoneComponent.prototype.saveCompleted = function (zones) {
        if (zones) {
            this.zones = zones;
        }
        this.loadingIndicator = false;
        this.toastr.success('Record saved successfully!');
        //this.router.navigate(['zones/list']);
        this.router.navigate(['address']);
    };
    EditZoneComponent.prototype.handleError = function (err) {
        this.loadingIndicator = false;
        this.toastr.error(this.errMsg.getError(err));
        this.loadingIndicator = false;
    };
    EditZoneComponent.prototype.getEditedZone = function () {
        var formModel = this.zoneForm.value;
        return {
            isNew: this.isNewZone ? true : false,
            ZoneId: formModel.cId,
            RegionId: formModel.cRegion,
            Description: formModel.cDescription,
            DescriptionEnglish: formModel.cDescriptionEnglish,
            Region: null,
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_5__["Subscription"])
    ], EditZoneComponent.prototype, "zonesSub", void 0);
    EditZoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-zone',
            template: __webpack_require__(/*! ./edit-zone.component.html */ "./src/app/components/setting/address-tabs/zone/edit/edit-zone.component.html"),
            styles: [__webpack_require__(/*! ./edit-zone.component.css */ "./src/app/components/setting/address-tabs/zone/edit/edit-zone.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"],
            _zone_service__WEBPACK_IMPORTED_MODULE_8__["ZoneService"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_9__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], EditZoneComponent);
    return EditZoneComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/address-tabs/zone/list/list-zone.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/zone/list/list-zone.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* div {\r\n  display: flex;\r\n} */\r\n\r\nmat-card {\r\n  max-width: 650px;\r\n  margin: 10px auto;\r\n  text-align: center;\r\n}\r\n\r\nmat-checkbox {\r\n  max-width: 500px;\r\n  margin: 2em auto;\r\n  text-align: left;\r\n}\r\n\r\n/*mat-form-field  {*/\r\n\r\n/*max-width: 400px;*/\r\n\r\n/*margin-right: 10px;*/\r\n\r\n/*font-size: 16px;*/\r\n\r\n/*}*/\r\n\r\n.row\r\n{\r\n  text-align: left;\r\n  margin-bottom: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3NldHRpbmcvYWRkcmVzcy10YWJzL3pvbmUvbGlzdC9saXN0LXpvbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7QUFFSDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBQ0Esb0JBQW9COztBQUNwQixvQkFBb0I7O0FBQ3BCLHNCQUFzQjs7QUFDdEIsbUJBQW1COztBQUNuQixJQUFJOztBQUNKOztFQUVFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckIiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvc2V0dGluZy9hZGRyZXNzLXRhYnMvem9uZS9saXN0L2xpc3Qtem9uZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59ICovXHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA2NTBweDtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxubWF0LWNoZWNrYm94IHtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIG1hcmdpbjogMmVtIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4vKm1hdC1mb3JtLWZpZWxkICB7Ki9cclxuLyptYXgtd2lkdGg6IDQwMHB4OyovXHJcbi8qbWFyZ2luLXJpZ2h0OiAxMHB4OyovXHJcbi8qZm9udC1zaXplOiAxNnB4OyovXHJcbi8qfSovXHJcbi5yb3dcclxue1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/setting/address-tabs/zone/list/list-zone.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/zone/list/list-zone.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\" style=\"margin: 15px;\">\r\n    <mat-form-field style=\"width: 150px;margin: 15px;\">\r\n      <mat-label>{{'zone.Region' | translate}}</mat-label>\r\n      <mat-select  [compareWith]=\"compareIds\" required #region\r\n                  (selectionChange)=\"filterRegion($event.value)\">\r\n        <mat-option *ngFor=\"let region of regionModels\" [value]=\"region.RegionId\">\r\n          <span>{{region.DescriptionEnglish}}</span>\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>\r\n  <mat-table [dataSource]=\"dataSource\" matSort>\r\n    <ng-container matColumnDef=\"Id\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"80px\">Id</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\" fxFlex=\"80px\"> {{row.ZoneId}}</mat-cell>\r\n    </ng-container>\r\n    <!--<ng-container matColumnDef=\"Region\">-->\r\n    <!--<mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"90px\">Region</mat-header-cell>-->\r\n    <!--<mat-cell *matCellDef=\"let row\" fxFlex=\"90px\"> {{row.Region.DescriptionEnglish}}</mat-cell>-->\r\n    <!--</ng-container>-->\r\n    <ng-container matColumnDef=\"Description\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"160px\">Description</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\" fxFlex=\"160px\"> {{row.Description}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"DescriptionEnglish\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"180px\">Description English</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\" fxFlex=\"180px\"> {{row.DescriptionEnglish}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"actions\">\r\n      <mat-header-cell *matHeaderCellDef fxFlex=\"100px\">\r\n        <button mat-button color=\"primary\" (click)=\"editZone()\">\r\n          <mat-icon class=\"mat-button-icon\">add</mat-icon>\r\n          {{'common.commands.Add' | translate}}\r\n        </button>\r\n      </mat-header-cell>\r\n      <mat-header-cell *matHeaderCellDef fxFlex=\"100px\">\r\n      </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let zones\" fxFlex=\"100px\">\r\n        <button mat-icon-button (click)=\"editZone(zones)\" type=\"button\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"confirmDelete(zones)\" type=\"button\">\r\n          <mat-icon color=\"warn\">delete</mat-icon>\r\n        </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n    </mat-row>\r\n  </mat-table>\r\n\r\n  <mat-paginator #paginator\r\n                 [pageSize]=\"7\"\r\n                 [pageSizeOptions]=\"[7, 10, 25, 100]\"></mat-paginator>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/setting/address-tabs/zone/list/list-zone.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/zone/list/list-zone.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ListZoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListZoneComponent", function() { return ListZoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _zone_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../zone.service */ "./src/app/components/setting/address-tabs/zone/zone.service.ts");
/* harmony import */ var _custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../@custor/components/confirm-dialog/confirm-dialog.component */ "./src/@custor/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../@custor/helpers/utilities */ "./src/@custor/helpers/utilities.ts");
/* harmony import */ var _custor_helpers_compare__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @custor/helpers/compare */ "./src/@custor/helpers/compare.ts");











var ListZoneComponent = /** @class */ (function () {
    function ListZoneComponent(http, subZoneService, errMsg, zonesService, toastr, dialog, router, route) {
        this.http = http;
        this.subZoneService = subZoneService;
        this.errMsg = errMsg;
        this.zonesService = zonesService;
        this.toastr = toastr;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.zoneLists = [];
        this.displayedColumns = ['Id', 'Description', 'DescriptionEnglish', 'actions'];
        this.regionModels = [];
        this.fillterZoneModels = [];
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    ListZoneComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListZoneComponent.prototype.ngOnInit = function () {
        this.getZones();
        this.getRegions();
    };
    ListZoneComponent.prototype.getRegions = function () {
        var _this = this;
        this.zonesService.getRegions()
            .subscribe(function (result) {
            _this.regionModels = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    ListZoneComponent.prototype.compareIds = function (id1, id2) {
        var a1 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_10__["determineId"])(id1);
        var a2 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_10__["determineId"])(id2);
        return a1 === a2;
    };
    ListZoneComponent.prototype.getZones = function () {
        var _this = this;
        this.loadingIndicator = true;
        this.subZoneService.getZones()
            .subscribe(function (result) {
            _this.zoneModels = result;
            if (!_this.zoneModels) {
                _this.toastr.error('No records were found to list', 'Error', {
                    closeButton: true,
                });
            }
            else {
                // // console.log(this.zoneModels);
                //this.dataSource.data = this.zoneModels;
            }
        }, function (err) {
            if (!_this.errMsg.message) {
                _this.toastr.error('Error! Please check if the Web zone is running');
            }
            else {
                _this.toastr.error(_this.errMsg.getError(err));
            }
        });
        this.loadingIndicator = false;
    };
    ListZoneComponent.prototype.filterRegion = function (RegionCode) {
        var _this = this;
        if (!RegionCode) {
            return;
        }
        this.region = RegionCode,
            this.subZoneService.getZonesbyParent(RegionCode)
                .subscribe(function (result) {
                _this.fillterZoneModels = result;
                _this.dataSource.data = _this.fillterZoneModels;
            });
        // this.region = RegionCode;
        // this.fillterZoneModels = null;
        // this.fillterZoneModels = this.zoneModels.filter((item) => {
        //   return item.RegionId === RegionCode;
        // });
    };
    ListZoneComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ListZoneComponent.prototype.editZone = function (zoneModel) {
        if (zoneModel) {
            this.router.navigate(['/zones/edit/' + zoneModel.ZoneId + '/' + 0], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['/zones/edit/' + 0 + '/' + this.region]);
        }
    };
    ListZoneComponent.prototype.confirmDelete = function (zoneModel) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AngConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            _this.loadingIndicator = true;
            if (result) {
                _this.subZoneService.deleteZone(zoneModel)
                    .subscribe(function (results) {
                    _this.loadingIndicator = false;
                    _this.dataSource.data = _this.dataSource.data.filter(function (item) { return item !== zoneModel; });
                }, function (error) {
                    // tslint:disable-next-line:max-line-length
                    _this.toastr.error("An error occured whilst deleting the Service.\r\nError: \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_9__["Utilities"].getHttpResponseMessage(error) + "\"", 'Delete Error');
                });
            }
            _this.loadingIndicator = false;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ListZoneComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ListZoneComponent.prototype, "sort", void 0);
    ListZoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-zone',
            template: __webpack_require__(/*! ./list-zone.component.html */ "./src/app/components/setting/address-tabs/zone/list/list-zone.component.html"),
            styles: [__webpack_require__(/*! ./list-zone.component.css */ "./src/app/components/setting/address-tabs/zone/list/list-zone.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _zone_service__WEBPACK_IMPORTED_MODULE_6__["ZoneService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__["ErrorMessage"], _zone_service__WEBPACK_IMPORTED_MODULE_6__["ZoneService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ListZoneComponent);
    return ListZoneComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/address-tabs/zone/zone-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/zone/zone-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ZoneRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneRoutingModule", function() { return ZoneRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _zone_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zone.component */ "./src/app/components/setting/address-tabs/zone/zone.component.ts");
/* harmony import */ var _list_list_zone_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list-zone.component */ "./src/app/components/setting/address-tabs/zone/list/list-zone.component.ts");
/* harmony import */ var _edit_edit_zone_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit-zone.component */ "./src/app/components/setting/address-tabs/zone/edit/edit-zone.component.ts");






var routes = [{
        path: '', component: _zone_component__WEBPACK_IMPORTED_MODULE_3__["ZoneComponent"], children: [
            { path: '', component: _list_list_zone_component__WEBPACK_IMPORTED_MODULE_4__["ListZoneComponent"] },
            { path: 'list', component: _list_list_zone_component__WEBPACK_IMPORTED_MODULE_4__["ListZoneComponent"] },
            { path: 'edit/:id/:regionId', component: _edit_edit_zone_component__WEBPACK_IMPORTED_MODULE_5__["EditZoneComponent"] }
        ]
    }];
var ZoneRoutingModule = /** @class */ (function () {
    function ZoneRoutingModule() {
    }
    ZoneRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ZoneRoutingModule);
    return ZoneRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/setting/address-tabs/zone/zone.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/zone/zone.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9zZXR0aW5nL2FkZHJlc3MtdGFicy96b25lL3pvbmUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/setting/address-tabs/zone/zone.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/zone/zone.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/setting/address-tabs/zone/zone.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/zone/zone.component.ts ***!
  \************************************************************************/
/*! exports provided: ZoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneComponent", function() { return ZoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ZoneComponent = /** @class */ (function () {
    function ZoneComponent() {
    }
    ZoneComponent.prototype.ngOnInit = function () {
    };
    ZoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-zone',
            template: __webpack_require__(/*! ./zone.component.html */ "./src/app/components/setting/address-tabs/zone/zone.component.html"),
            styles: [__webpack_require__(/*! ./zone.component.css */ "./src/app/components/setting/address-tabs/zone/zone.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ZoneComponent);
    return ZoneComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/address-tabs/zone/zone.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/zone/zone.module.ts ***!
  \*********************************************************************/
/*! exports provided: ZoneModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneModule", function() { return ZoneModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _zone_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zone-routing.module */ "./src/app/components/setting/address-tabs/zone/zone-routing.module.ts");
/* harmony import */ var _list_list_zone_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list-zone.component */ "./src/app/components/setting/address-tabs/zone/list/list-zone.component.ts");
/* harmony import */ var _edit_edit_zone_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit-zone.component */ "./src/app/components/setting/address-tabs/zone/edit/edit-zone.component.ts");
/* harmony import */ var _zone_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zone.component */ "./src/app/components/setting/address-tabs/zone/zone.component.ts");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../@custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _zone_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./zone.service */ "./src/app/components/setting/address-tabs/zone/zone.service.ts");









var ZoneModule = /** @class */ (function () {
    function ZoneModule() {
    }
    ZoneModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _zone_routing_module__WEBPACK_IMPORTED_MODULE_3__["ZoneRoutingModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_list_list_zone_component__WEBPACK_IMPORTED_MODULE_4__["ListZoneComponent"], _edit_edit_zone_component__WEBPACK_IMPORTED_MODULE_5__["EditZoneComponent"], _zone_component__WEBPACK_IMPORTED_MODULE_6__["ZoneComponent"]],
            exports: [_list_list_zone_component__WEBPACK_IMPORTED_MODULE_4__["ListZoneComponent"], _edit_edit_zone_component__WEBPACK_IMPORTED_MODULE_5__["EditZoneComponent"], _zone_component__WEBPACK_IMPORTED_MODULE_6__["ZoneComponent"]],
            providers: [_zone_service__WEBPACK_IMPORTED_MODULE_8__["ZoneService"]]
        })
    ], ZoneModule);
    return ZoneModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-components-setting-address-tabs-address-module~app-components-setting-address-tabs-zone-~9de82906.js.map