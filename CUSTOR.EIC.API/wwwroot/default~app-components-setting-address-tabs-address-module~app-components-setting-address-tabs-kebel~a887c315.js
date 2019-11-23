(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-components-setting-address-tabs-address-module~app-components-setting-address-tabs-kebel~a887c315"],{

/***/ "./src/app/components/setting/address-tabs/Woredas/woreda.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/Woredas/woreda.service.ts ***!
  \***************************************************************************/
/*! exports provided: WoredaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WoredaService", function() { return WoredaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model_address__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../model/address */ "./src/app/model/address.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");







var WoredaService = /** @class */ (function () {
    function WoredaService(httpClient, config, errMsg) {
        this.httpClient = httpClient;
        this.config = config;
        this.errMsg = errMsg;
        this.woredaList = [];
        this.woredaModel = new _model_address__WEBPACK_IMPORTED_MODULE_5__["Woreda"]();
        this.regionList = [];
        this.zoneList = [];
    }
    /*getServicePrerequisiteForExistance(descEng,serviceId): Observable<Woreda> {
      return this.httpClient.get<Woreda>(this.config.urls.url('sector', descEng,serviceId))
        .map(servicePrereq => {
          this.woredaModel = servicePrereq;
          return this.woredaModel;
        })
        .catch(this.errMsg.parseObservableResponseError);
    }*/
    WoredaService.prototype.getWoreda = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('woreda', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (woredaData) {
            _this.woredaModel = woredaData;
            return _this.woredaModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    WoredaService.prototype.getWoredaByParent = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('woredaByParent', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (woredaData) {
            _this.woredaList = woredaData;
            return _this.woredaList;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    WoredaService.prototype.getWoredas = function () {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('woredas')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (woredaList) { return _this.woredaList = woredaList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    WoredaService.prototype.saveWoreda = function (woredaModel) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('woreda'), woredaModel).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (woredaData) {
            _this.woredaModel = woredaData;
            return _this.woredaModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    WoredaService.prototype.deleteWoreda = function (woredaModel) {
        return this.httpClient.delete(this.config.urls.url('woreda', woredaModel.WoredaId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parsePromiseResponseError));
    };
    WoredaService.prototype.getRegions = function () {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('regions')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (regionList) {
            _this.regionList = regionList;
            return _this.regionList;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    WoredaService.prototype.getZones = function () {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('zones')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (zones) {
            _this.zoneList = zones;
            return _this.zoneList;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    WoredaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"]])
    ], WoredaService);
    return WoredaService;
}());



/***/ }),

/***/ "./src/app/components/setting/address-tabs/kebele/edit/edit-kebele.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/kebele/edit/edit-kebele.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* div {\r\n  display: flex;\r\n} */\r\n\r\nmat-card {\r\n  max-width: 600px;\r\n  margin: 10px auto;\r\n  text-align: center;\r\n}\r\n\r\nmat-checkbox {\r\n  max-width: 500px;\r\n  margin: 2em auto;\r\n  text-align: left;\r\n}\r\n\r\n/*mat-form-field  {*/\r\n\r\n/*max-width: 400px;*/\r\n\r\n/*margin-right: 10px;*/\r\n\r\n/*font-size: 16px;*/\r\n\r\n/*}*/\r\n\r\n.row\r\n{\r\n  text-align: left;\r\n  margin-bottom: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3NldHRpbmcvYWRkcmVzcy10YWJzL2tlYmVsZS9lZGl0L2VkaXQta2ViZWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7O0FBRUg7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUNBLG9CQUFvQjs7QUFDcEIsb0JBQW9COztBQUNwQixzQkFBc0I7O0FBQ3RCLG1CQUFtQjs7QUFDbkIsSUFBSTs7QUFDSjs7RUFFRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3NldHRpbmcvYWRkcmVzcy10YWJzL2tlYmVsZS9lZGl0L2VkaXQta2ViZWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBkaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn0gKi9cclxuXHJcbm1hdC1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5tYXQtY2hlY2tib3gge1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgbWFyZ2luOiAyZW0gYXV0bztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi8qbWF0LWZvcm0tZmllbGQgIHsqL1xyXG4vKm1heC13aWR0aDogNDAwcHg7Ki9cclxuLyptYXJnaW4tcmlnaHQ6IDEwcHg7Ki9cclxuLypmb250LXNpemU6IDE2cHg7Ki9cclxuLyp9Ki9cclxuLnJvd1xyXG57XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/setting/address-tabs/kebele/edit/edit-kebele.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/kebele/edit/edit-kebele.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div [@fadeInOut] class=\"page-content margin-2 mat-elevation-z8\" fxFlex=\"50\" style=\"padding: 15px\">-->\r\n<mat-toolbar mat-dialog-title>\r\n  <h1 mat-dialog-title>\r\n    <mat-icon>create</mat-icon>\r\n    {{('kebele.Header' | translate)}}\r\n  </h1>\r\n</mat-toolbar>\r\n<mat-card class=\"mat-elevation-z8\">\r\n  <br/>\r\n  <mat-card-content>\r\n  <form #form=\"ngForm\" [formGroup]=\"kebeleForm\" novalidate (ngSubmit)=\"onSubmit()\" fxLayout=\"column\"\r\n        autocomplete=\"off\">\r\n    <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n      <mat-form-field style=\"width: 100px\">\r\n        <mat-label>{{'kebele.Region' | translate}}</mat-label>\r\n        <mat-select formControlName=\"cRegion\" [compareWith]=\"compareIds\"\r\n                    (selectionChange)=\"filterRegion($event.value)\" required>\r\n          <option value=\"0\">--Select--</option>\r\n          <mat-option *ngFor=\"let region of regionModels\" [value]=\"region.RegionId\">\r\n            <span>{{region.DescriptionEnglish}}</span>\r\n          </mat-option>\r\n        </mat-select>\r\n        <mat-error *ngIf=\"Region.hasError('required')\">\r\n          {{'common.validation.Required' | translate}}\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field style=\"width: 100px\">\r\n        <mat-label>{{'kebele.Zone' | translate}}</mat-label>\r\n        <mat-select formControlName=\"cZone\" [compareWith]=\"compareIds\" (selectionChange)=\"filterZone($event.value)\"\r\n                    required>\r\n          <option value=\"0\">--Select--</option>\r\n          <mat-option *ngFor=\"let zone of fillterszoneModels\" [value]=\"zone.ZoneId\">\r\n            <span>{{zone.DescriptionEnglish}}</span>\r\n          </mat-option>\r\n        </mat-select>\r\n        <mat-error *ngIf=\"Zone.hasError('required')\">\r\n          {{'common.validation.Required' | translate}}\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field style=\"width: 100px\">\r\n        <mat-label>{{'kebele.Woreda' | translate}}</mat-label>\r\n        <mat-select formControlName=\"cWoreda\" [compareWith]=\"compareIds\" required>\r\n          <option value=\"0\">--Select--</option>\r\n          <mat-option *ngFor=\"let woreda of filltersWoredaModels\" [value]=\"woreda.WoredaId\">\r\n            <span>{{woreda.DescriptionEnglish}}</span>\r\n          </mat-option>\r\n        </mat-select>\r\n        <mat-error *ngIf=\"Woreda.hasError('required')\">\r\n          {{'common.validation.Required' | translate}}\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field style=\"width: 100px\">\r\n        <mat-label>{{'kebele.KebeleCode' | translate}}</mat-label>\r\n        <input matInput formControlName=\"cKebele\" required maxlength=\"20\" required/>\r\n        <mat-error *ngIf=\"Kebele.hasError('required')\">\r\n          {{'common.validation.Required' | translate}}\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field style=\"width: 200px\">\r\n        <mat-label>{{'kebele.Description' | translate}}</mat-label>\r\n        <input matInput formControlName=\"cDescription\" required maxlength=\"30\"/>\r\n        <mat-error *ngIf=\"Description.hasError('required')\">\r\n          {{'common.validation.Required' | translate}}\r\n        </mat-error>\r\n        <mat-error *ngIf=\"Description.hasError('maxlength')\">\r\n          {{'common.validation.MaxLengthChar' | translate: {'max':'30'} }}\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field style=\"width: 200px\">\r\n        <mat-label>{{'kebele.DescriptionEnglish' | translate}}</mat-label>\r\n        <input matInput formControlName=\"cDescriptionEnglish\" required maxlength=\"15\"/>\r\n        <mat-error *ngIf=\"DescriptionEnglish.hasError('required')\">\r\n          {{'common.validation.Required' | translate}}\r\n        </mat-error>\r\n        <mat-error *ngIf=\"DescriptionEnglish.hasError('maxlength')\">\r\n          {{'common.validation.MaxLengthChar' | translate: {'max':'15'} }}\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div mat-dialog-actions style=\"margin: 15px; text-align: center\">\r\n      <button [disabled]=\"form.invalid\" mat-raised-button type=\"submit\" color=\"primary\" style=\"margin: 15px;\">\r\n        Save\r\n      </button>\r\n      <button mat-raised-button (click)=\"onBack()\" color=\"warn\" type=\"button\">\r\n        Cancel\r\n      </button>\r\n    </div>\r\n  </form>\r\n  </mat-card-content>\r\n  </mat-card>\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "./src/app/components/setting/address-tabs/kebele/edit/edit-kebele.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/kebele/edit/edit-kebele.component.ts ***!
  \**************************************************************************************/
/*! exports provided: EditKebeleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditKebeleComponent", function() { return EditKebeleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _kebele_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../kebele.service */ "./src/app/components/setting/address-tabs/kebele/kebele.service.ts");
/* harmony import */ var _model_address__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../model/address */ "./src/app/model/address.ts");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _custor_helpers_compare__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../@custor/helpers/compare */ "./src/@custor/helpers/compare.ts");












var EditKebeleComponent = /** @class */ (function () {
    function EditKebeleComponent(activatedRoute, router, http, config, kebeleService, errMsg, toastr, fb) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.http = http;
        this.config = config;
        this.kebeleService = kebeleService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.fb = fb;
        /*serviceId:number;*/
        this.isNewKebele = false;
        this.kebele = new _model_address__WEBPACK_IMPORTED_MODULE_8__["Kebele"]();
        this.regionModels = [];
        this.zoneModels = [];
        this.fillterszoneModels = [];
        this.woredaModels = [];
        this.filltersWoredaModels = [];
        this.kebele = {};
        // initialize the form
        this.initForm();
        this.initStaticData('en');
    }
    Object.defineProperty(EditKebeleComponent.prototype, "Description", {
        get: function () {
            return this.kebeleForm.get('cDescription');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditKebeleComponent.prototype, "DescriptionEnglish", {
        get: function () {
            return this.kebeleForm.get('cDescriptionEnglish');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditKebeleComponent.prototype, "Kebele", {
        get: function () {
            return this.kebeleForm.get('cKebele');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditKebeleComponent.prototype, "Region", {
        get: function () {
            return this.kebeleForm.get('cRegion');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditKebeleComponent.prototype, "Zone", {
        get: function () {
            return this.kebeleForm.get('cZone');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditKebeleComponent.prototype, "Woreda", {
        get: function () {
            return this.kebeleForm.get('cWoreda');
        },
        enumerable: true,
        configurable: true
    });
    EditKebeleComponent.prototype.ngOnInit = function () {
        var id = this.activatedRoute.snapshot.params['id'];
        if (id < 1) {
            this.isNewKebele = true;
            this.title = 'Create a new Kebele';
            this.getRegions();
            this.getZones();
            this.getWoredas();
            this.kebeleForm.patchValue({
                cRegion: this.activatedRoute.snapshot.params['regionId'],
                cZone: this.activatedRoute.snapshot.params['zoneId'],
                cWoreda: this.activatedRoute.snapshot.params['woredaId']
            });
            return;
        }
        if (id) {
            this.getKebele(id);
        }
    };
    EditKebeleComponent.prototype.getKebele = function (id) {
        var _this = this;
        this.isNewKebele = false;
        this.loadingIndicator = true;
        this.kebeleSub = this.kebeleService
            .getKebele(id)
            .subscribe(function (result) {
            _this.kebele = result;
            _this.getRegions();
            _this.getZones();
            _this.getWoredas();
            _this.updateForm();
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
        this.loadingIndicator = false;
    };
    EditKebeleComponent.prototype.initStaticData = function (currentLang) {
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
    EditKebeleComponent.prototype.updateForm = function () {
        // console.log(this.kebele.Woreda.Zone);
        // console.log(this.kebele.Woreda.Zone.RegionId);
        this.kebeleForm.patchValue({
            cDescription: this.kebele.Description == null ? '' : this.kebele.Description.toString(),
            cDescriptionEnglish: this.kebele.DescriptionEnglish == null ? '' : this.kebele.DescriptionEnglish.toString(),
            cRegion: this.kebele.Woreda.Zone.RegionId,
            cZone: this.kebele.Woreda.ZoneId,
            cWoreda: this.kebele.WoredaId,
            cKebele: this.kebele.KebeleId,
        });
        // },4000);
        this.isNewKebele = false;
    };
    EditKebeleComponent.prototype.initForm = function () {
        this.kebeleForm = this.fb.group({
            cDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)])],
            cDescriptionEnglish: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)])],
            cKebele: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cRegion: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cZone: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cWoreda: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    EditKebeleComponent.prototype.compareIds = function (id1, id2) {
        var a1 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_11__["determineId"])(id1);
        var a2 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_11__["determineId"])(id2);
        return a1 === a2;
    };
    EditKebeleComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.kebeleForm.valid) {
            return;
        }
        if (this.isNewKebele) {
            /* if (this.checkRecordExistance()) {
               this.toastr.show(
                 'Record Exist', 'message', {
                   closeButton: true
                 })
               return;
             }*/
            this.loadingIndicator = true;
        }
        return this.kebeleService.saveKebele(this.getEditedKebele()).subscribe(function (kebele) {
            _this.saveCompleted(kebele);
        }, function (err) { return _this.handleError(err); });
    };
    EditKebeleComponent.prototype.ngOnDestroy = function () {
        //  this.kebeleSub.unsubscribe;
    };
    EditKebeleComponent.prototype.getRegions = function () {
        var _this = this;
        this.kebeleService.getRegions()
            .subscribe(function (result) {
            _this.regionModels = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    EditKebeleComponent.prototype.getZones = function () {
        var _this = this;
        this.kebeleService.getZones()
            .subscribe(function (result) {
            _this.zoneModels = result;
            if (_this.isNewKebele) {
                var formModel = _this.kebeleForm.value;
                _this.filterRegion(formModel.cRegion);
            }
            else {
                //// console.log(this.kebele.Woreda.Zone.RegionId);
                _this.filterRegion(_this.kebele.Woreda.Zone.RegionId);
            }
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    EditKebeleComponent.prototype.filterRegion = function (regionCode) {
        if (!regionCode) {
            return;
        }
        this.fillterszoneModels = null;
        // this.filltersWoredaModels = null;
        this.fillterszoneModels = this.zoneModels.filter(function (item) {
            return item.RegionId === regionCode;
        });
    };
    EditKebeleComponent.prototype.getWoredas = function () {
        var _this = this;
        this.kebeleService.getWoredas()
            .subscribe(function (result) {
            _this.woredaModels = result;
            if (_this.isNewKebele) {
                var formModel = _this.kebeleForm.value;
                _this.filterZone(formModel.cZone);
            }
            else {
                _this.filterZone(_this.kebele.Woreda.ZoneId);
            }
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    EditKebeleComponent.prototype.filterZone = function (ZoneId) {
        if (!ZoneId) {
            return;
        }
        // console.log(this.woredaModels);
        this.filltersWoredaModels = null;
        this.filltersWoredaModels = this.woredaModels.filter(function (item) {
            return item.ZoneId === ZoneId;
        });
    };
    EditKebeleComponent.prototype.onBack = function () {
        //this.router.navigate(['kebeles/list']);
        this.router.navigate(['address']);
    };
    EditKebeleComponent.prototype.saveCompleted = function (kebele) {
        if (kebele) {
            this.kebele = kebele;
        }
        this.loadingIndicator = false;
        this.toastr.success('Record saved successfully!');
        this.router.navigate(['address']);
    };
    EditKebeleComponent.prototype.handleError = function (err) {
        this.loadingIndicator = false;
        this.toastr.error(this.errMsg.getError(err));
        this.loadingIndicator = false;
    };
    EditKebeleComponent.prototype.getEditedKebele = function () {
        var formModel = this.kebeleForm.value;
        // // console.log(this.kebele.InvKebeleId);
        return {
            isNew: this.isNewKebele ? true : false,
            KebeleId: formModel.cKebele,
            WoredaId: formModel.cWoreda,
            RegionId: formModel.cRegion,
            ZoneId: formModel.cZone,
            Description: formModel.cDescription,
            DescriptionEnglish: formModel.cDescriptionEnglish,
            Region: null,
            Zone: null,
            Woreda: null,
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_4__["Subscription"])
    ], EditKebeleComponent.prototype, "kebeleSub", void 0);
    EditKebeleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-kebele',
            template: __webpack_require__(/*! ./edit-kebele.component.html */ "./src/app/components/setting/address-tabs/kebele/edit/edit-kebele.component.html"),
            styles: [__webpack_require__(/*! ./edit-kebele.component.css */ "./src/app/components/setting/address-tabs/kebele/edit/edit-kebele.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_9__["AppConfiguration"],
            _kebele_service__WEBPACK_IMPORTED_MODULE_7__["KebeleService"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_10__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EditKebeleComponent);
    return EditKebeleComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/address-tabs/kebele/kebele-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/kebele/kebele-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: KebeleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KebeleRoutingModule", function() { return KebeleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _kebele_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kebele.component */ "./src/app/components/setting/address-tabs/kebele/kebele.component.ts");
/* harmony import */ var _list_list_kebele_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list-kebele.component */ "./src/app/components/setting/address-tabs/kebele/list/list-kebele.component.ts");
/* harmony import */ var _edit_edit_kebele_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit-kebele.component */ "./src/app/components/setting/address-tabs/kebele/edit/edit-kebele.component.ts");






var routes = [
    {
        path: '', component: _kebele_component__WEBPACK_IMPORTED_MODULE_3__["KebeleComponent"],
        children: [
            { path: '', component: _list_list_kebele_component__WEBPACK_IMPORTED_MODULE_4__["ListKebeleComponent"] },
            { path: 'list', component: _list_list_kebele_component__WEBPACK_IMPORTED_MODULE_4__["ListKebeleComponent"] },
            { path: 'edit/:id/:regionId/:zoneId/:woredaId', component: _edit_edit_kebele_component__WEBPACK_IMPORTED_MODULE_5__["EditKebeleComponent"] }
        ]
    }
];
var KebeleRoutingModule = /** @class */ (function () {
    function KebeleRoutingModule() {
    }
    KebeleRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], KebeleRoutingModule);
    return KebeleRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/setting/address-tabs/kebele/kebele.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/kebele/kebele.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9zZXR0aW5nL2FkZHJlc3MtdGFicy9rZWJlbGUva2ViZWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/setting/address-tabs/kebele/kebele.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/kebele/kebele.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/setting/address-tabs/kebele/kebele.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/kebele/kebele.component.ts ***!
  \****************************************************************************/
/*! exports provided: KebeleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KebeleComponent", function() { return KebeleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KebeleComponent = /** @class */ (function () {
    function KebeleComponent() {
    }
    KebeleComponent.prototype.ngOnInit = function () {
    };
    KebeleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kebele',
            template: __webpack_require__(/*! ./kebele.component.html */ "./src/app/components/setting/address-tabs/kebele/kebele.component.html"),
            styles: [__webpack_require__(/*! ./kebele.component.css */ "./src/app/components/setting/address-tabs/kebele/kebele.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], KebeleComponent);
    return KebeleComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/address-tabs/kebele/kebele.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/kebele/kebele.module.ts ***!
  \*************************************************************************/
/*! exports provided: KebeleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KebeleModule", function() { return KebeleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _kebele_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kebele-routing.module */ "./src/app/components/setting/address-tabs/kebele/kebele-routing.module.ts");
/* harmony import */ var _list_list_kebele_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list-kebele.component */ "./src/app/components/setting/address-tabs/kebele/list/list-kebele.component.ts");
/* harmony import */ var _edit_edit_kebele_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit-kebele.component */ "./src/app/components/setting/address-tabs/kebele/edit/edit-kebele.component.ts");
/* harmony import */ var _kebele_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kebele.component */ "./src/app/components/setting/address-tabs/kebele/kebele.component.ts");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../@custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _kebele_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./kebele.service */ "./src/app/components/setting/address-tabs/kebele/kebele.service.ts");









var KebeleModule = /** @class */ (function () {
    function KebeleModule() {
    }
    KebeleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _kebele_routing_module__WEBPACK_IMPORTED_MODULE_3__["KebeleRoutingModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_list_list_kebele_component__WEBPACK_IMPORTED_MODULE_4__["ListKebeleComponent"], _edit_edit_kebele_component__WEBPACK_IMPORTED_MODULE_5__["EditKebeleComponent"], _kebele_component__WEBPACK_IMPORTED_MODULE_6__["KebeleComponent"]],
            exports: [_list_list_kebele_component__WEBPACK_IMPORTED_MODULE_4__["ListKebeleComponent"], _edit_edit_kebele_component__WEBPACK_IMPORTED_MODULE_5__["EditKebeleComponent"], _kebele_component__WEBPACK_IMPORTED_MODULE_6__["KebeleComponent"]],
            providers: [_kebele_service__WEBPACK_IMPORTED_MODULE_8__["KebeleService"]]
        })
    ], KebeleModule);
    return KebeleModule;
}());



/***/ }),

/***/ "./src/app/components/setting/address-tabs/kebele/kebele.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/kebele/kebele.service.ts ***!
  \**************************************************************************/
/*! exports provided: KebeleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KebeleService", function() { return KebeleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _model_address__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../model/address */ "./src/app/model/address.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");







var KebeleService = /** @class */ (function () {
    function KebeleService(httpClient, config, errMsg) {
        this.httpClient = httpClient;
        this.config = config;
        this.errMsg = errMsg;
        this.kebeleModel = new _model_address__WEBPACK_IMPORTED_MODULE_5__["Kebele"]();
        this.kebeleModelList = [];
        this.woredaLIst = [];
        this.regionLIst = [];
        this.zoneLIst = [];
    }
    /*getServicePrerequisiteForExistance(descEng,serviceId): Observable<Woreda> {
      return this.httpClient.get<Woreda>(this.config.urls.url('sector', descEng,serviceId))
        .map(servicePrereq => {
          this.activityModel = servicePrereq;
          return this.activityModel;
        })
        .catch(this.errMsg.parseObservableResponseError);
    }*/
    KebeleService.prototype.getKebele = function (id) {
        return this.httpClient.get(this.config.urls.url('kebeleById', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (kebeleData) {
            // this.kebeleModel = kebeleData;
            return kebeleData;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    KebeleService.prototype.getKebeleByParent = function (id) {
        return this.httpClient.get(this.config.urls.url('kebeleByByParentId', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (kebeleData) {
            // this.kebeleModel = kebeleData;
            return kebeleData;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    KebeleService.prototype.getKebeles = function () {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('kebeles')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (kebeleList) { return _this.kebeleModelList = kebeleList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    KebeleService.prototype.saveKebele = function (kebeleModel) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('kebele'), kebeleModel).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (keb) {
            _this.kebeleModel = keb;
            return _this.kebeleModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    KebeleService.prototype.deleteKebele = function (kebeleModel) {
        return this.httpClient.delete(this.config.urls.url('kebele', kebeleModel.KebeleId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errMsg.parsePromiseResponseError));
    };
    KebeleService.prototype.getRegions = function () {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('regions')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (regionList) {
            _this.regionLIst = regionList;
            return _this.regionLIst;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    KebeleService.prototype.getZones = function () {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('zones')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (subsector) {
            _this.zoneLIst = subsector;
            return _this.zoneLIst;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    KebeleService.prototype.getWoredas = function () {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('woredas')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (act) {
            _this.woredaLIst = act;
            return _this.woredaLIst;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    KebeleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_2__["AppConfiguration"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"]])
    ], KebeleService);
    return KebeleService;
}());



/***/ }),

/***/ "./src/app/components/setting/address-tabs/kebele/list/list-kebele.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/kebele/list/list-kebele.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9zZXR0aW5nL2FkZHJlc3MtdGFicy9rZWJlbGUvbGlzdC9saXN0LWtlYmVsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/setting/address-tabs/kebele/list/list-kebele.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/kebele/list/list-kebele.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\" style=\"margin: 15px;\">\r\n  <mat-form-field style=\"margin: 15px;width: 100px\">\r\n    <mat-label>{{'kebele.Region' | translate}}</mat-label>\r\n    <mat-select formControlName=\"cRegion\" [compareWith]=\"compareIds\"\r\n                (selectionChange)=\"filterRegion($event.value)\" required>\r\n      <option value=\"0\">--Select--</option>\r\n      <mat-option *ngFor=\"let region of regionModels\" [value]=\"region.RegionId\">\r\n        <span>{{region.DescriptionEnglish}}</span>\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <mat-form-field style=\"margin: 15px;width: 100px\">\r\n    <mat-label>{{'kebele.Zone' | translate}}</mat-label>\r\n    <mat-select formControlName=\"cZone\" [compareWith]=\"compareIds\" (selectionChange)=\"filterZone($event.value)\"\r\n                required>\r\n      <option value=\"0\">--Select--</option>\r\n      <mat-option *ngFor=\"let zone of fillterszoneModels\" [value]=\"zone.ZoneId\">\r\n        <span>{{zone.DescriptionEnglish}}</span>\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <mat-form-field style=\"margin: 15px;width: 100px\">\r\n    <mat-label>{{'kebele.Woreda' | translate}}</mat-label>\r\n    <mat-select formControlName=\"cWoreda\" [compareWith]=\"compareIds\" required (selectionChange)=\"filterWoreda($event.value)\">\r\n      <option value=\"0\">--Select--</option>\r\n      <mat-option *ngFor=\"let woreda of filltersWoredaModels\" [value]=\"woreda.WoredaId\">\r\n        <span>{{woreda.DescriptionEnglish}}</span>\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <div class=\"mat-elevation-z8\">\r\n    <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>\r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n      <ng-container matColumnDef=\"Id\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"100px\">No</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxFlex=\"100px\"> --</mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"Description\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"150px\">Description</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxFlex=\"150px\"> {{row.Description}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"DescriptionEnglish\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"150px\">Description English</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxFlex=\"150px\"> {{row.DescriptionEnglish}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"actions\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"100px\">\r\n          <button mat-button color=\"primary\" (click)=\"editKebele()\">\r\n            <mat-icon class=\"mat-button-icon\">add</mat-icon>\r\n            {{'common.commands.Add' | translate}}\r\n          </button>\r\n        </mat-header-cell>\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"100px\">\r\n        </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let kebeles\" fxFlex=\"100px\">\r\n          <button mat-icon-button (click)=\"editKebele(kebeles)\" type=\"button\">\r\n            <mat-icon>edit</mat-icon>\r\n          </button>\r\n          <button mat-icon-button (click)=\"confirmDelete(kebeles)\" type=\"button\">\r\n            <mat-icon color=\"warn\">delete</mat-icon>\r\n          </button>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n\r\n    <mat-paginator\r\n\r\n      #paginator\r\n      [pageSize]=\"7\"\r\n      [pageSizeOptions]=\"[5,7, 10, 20]\">\r\n    </mat-paginator>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/setting/address-tabs/kebele/list/list-kebele.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/kebele/list/list-kebele.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ListKebeleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListKebeleComponent", function() { return ListKebeleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model_address__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../model/address */ "./src/app/model/address.ts");
/* harmony import */ var _kebele_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../kebele.service */ "./src/app/components/setting/address-tabs/kebele/kebele.service.ts");
/* harmony import */ var _custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @custor/components/confirm-dialog/confirm-dialog.component */ "./src/@custor/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @custor/helpers/utilities */ "./src/@custor/helpers/utilities.ts");
/* harmony import */ var _investor_investor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../investor/investor.service */ "./src/app/components/investor/investor.service.ts");
/* harmony import */ var _custor_helpers_compare__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @custor/helpers/compare */ "./src/@custor/helpers/compare.ts");
/* harmony import */ var _Woredas_woreda_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Woredas/woreda.service */ "./src/app/components/setting/address-tabs/Woredas/woreda.service.ts");
/* harmony import */ var _zone_zone_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../zone/zone.service */ "./src/app/components/setting/address-tabs/zone/zone.service.ts");















var ListKebeleComponent = /** @class */ (function () {
    function ListKebeleComponent(http, subKebeleService, woredaService, subZoneService, errMsg, investorKebeleAddress, toastr, dialog, router, route) {
        this.http = http;
        this.subKebeleService = subKebeleService;
        this.woredaService = woredaService;
        this.subZoneService = subZoneService;
        this.errMsg = errMsg;
        this.investorKebeleAddress = investorKebeleAddress;
        this.toastr = toastr;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.kebeleModel = new _model_address__WEBPACK_IMPORTED_MODULE_6__["Kebele"]();
        this.regionModels = [];
        this.zoneModels = [];
        this.fillterszoneModels = [];
        this.filltersWoredaModels = [];
        this.filltersKebeleModels = [];
        this.displayedColumns = ['Id', 'Description', 'DescriptionEnglish', 'actions'];
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
    }
    ListKebeleComponent.prototype.ngOnInit = function () {
        this.getRegions();
        // this.getZones();
        // this.getWoredas();
        // this.getKebeles();
    };
    ListKebeleComponent.prototype.getRegions = function () {
        var _this = this;
        this.subKebeleService.getRegions()
            .subscribe(function (result) {
            _this.regionModels = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    ListKebeleComponent.prototype.getZones = function () {
        var _this = this;
        this.subKebeleService.getZones()
            .subscribe(function (result) {
            _this.zoneModels = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    ListKebeleComponent.prototype.getWoredas = function () {
        var _this = this;
        this.subKebeleService.getWoredas()
            .subscribe(function (result) {
            _this.woredaModels = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    ListKebeleComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListKebeleComponent.prototype.filterRegion = function (RegionCode) {
        var _this = this;
        if (!RegionCode) {
            return;
        }
        this.region = RegionCode,
            this.subZoneService.getZonesbyParent(RegionCode)
                .subscribe(function (result) {
                _this.fillterszoneModels = result;
            });
    };
    ListKebeleComponent.prototype.filterZone = function (ZoneId) {
        var _this = this;
        if (!ZoneId) {
            return;
        }
        this.zone = ZoneId;
        this.woredaService.getWoredaByParent(ZoneId)
            .subscribe(function (result) {
            _this.filltersWoredaModels = result;
        });
    };
    ListKebeleComponent.prototype.compareIds = function (id1, id2) {
        var a1 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_12__["determineId"])(id1);
        var a2 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_12__["determineId"])(id2);
        return a1 === a2;
    };
    // filterZone(ZoneId: string) {
    //   if (!ZoneId) {
    //     return;
    //   }
    //   this.zone = ZondId;
    //   this.filltersWoredaModels = null;
    //   this.filltersWoredaModels = this.woredaModels.filter((item) => {
    //     return item.ZoneId === ZoneId;
    //   });
    // }
    ListKebeleComponent.prototype.filterWoreda = function (wordeaId) {
        var _this = this;
        if (!wordeaId) {
            return;
        }
        this.woreda = wordeaId;
        this.subKebeleService.getKebeleByParent(this.woreda)
            .subscribe(function (result) {
            _this.dataSource.data = result;
        });
    };
    /*getKebeles() {
      this.loadingIndicator = true;
      this.investorKebeleAddress.getAllKebelesByLang('et')
        .subscribe(result => {
          this.kebeleModels = result;
          if (!this.kebeleModels) {
            this.toastr.error('No records were found to list', 'Error', {
              closeButton: true,
            });
          } else {
            this.dataSource.data = this.kebeleModels;
          }
        },
          err => {
            if (!this.errMsg.message) {
              this.toastr.error('Error! Please check if the Web serviceprerequistie is running');
            } else {
              this.toastr.error(this.errMsg.getError(err));
            }
          });
      this.loadingIndicator = false;
    }*/
    ListKebeleComponent.prototype.getKebeles = function () {
        var _this = this;
        this.loadingIndicator = true;
        this.subKebeleService.getKebeles()
            .subscribe(function (result) {
            _this.kebeleModels = result;
            if (!_this.kebeleModels) {
                _this.toastr.error('No records were found to list', 'Error', {
                    closeButton: true,
                });
            }
            else {
                //this.dataSource.data = this.kebeleModels;
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
    ListKebeleComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ListKebeleComponent.prototype.editKebele = function (kebeleModel) {
        if (kebeleModel) {
            this.router.navigate(['/kebeles/edit/' + kebeleModel.KebeleId + '/' + 0 + '/' + 0 + '/' + 0], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['/kebeles/edit/' + 0 + '/' + this.region + '/' + this.zone + '/' + this.woreda]);
        }
    };
    ListKebeleComponent.prototype.confirmDelete = function (kebeleModel) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__["AngConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            _this.loadingIndicator = true;
            if (result) {
                _this.subKebeleService.deleteKebele(kebeleModel)
                    .subscribe(function (results) {
                    _this.loadingIndicator = false;
                    _this.dataSource.data = _this.dataSource.data.filter(function (item) { return item !== kebeleModel; });
                }, function (error) {
                    // tslint:disable-next-line:max-line-length
                    _this.toastr.error("An error occured whilst deleting the kebele .\r\nError: \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_10__["Utilities"].getHttpResponseMessage(error) + "\"", 'Delete Error');
                });
            }
            _this.loadingIndicator = false;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ListKebeleComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ListKebeleComponent.prototype, "sort", void 0);
    ListKebeleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-kebele',
            template: __webpack_require__(/*! ./list-kebele.component.html */ "./src/app/components/setting/address-tabs/kebele/list/list-kebele.component.html"),
            styles: [__webpack_require__(/*! ./list-kebele.component.css */ "./src/app/components/setting/address-tabs/kebele/list/list-kebele.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _kebele_service__WEBPACK_IMPORTED_MODULE_7__["KebeleService"],
            _Woredas_woreda_service__WEBPACK_IMPORTED_MODULE_13__["WoredaService"], _zone_zone_service__WEBPACK_IMPORTED_MODULE_14__["ZoneService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_9__["ErrorMessage"],
            _investor_investor_service__WEBPACK_IMPORTED_MODULE_11__["InvestorService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ListKebeleComponent);
    return ListKebeleComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/address-tabs/zone/zone.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/zone/zone.service.ts ***!
  \**********************************************************************/
/*! exports provided: ZoneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneService", function() { return ZoneService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model_address__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../model/address */ "./src/app/model/address.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");







var ZoneService = /** @class */ (function () {
    function ZoneService(httpClient, config, errMsg) {
        this.httpClient = httpClient;
        this.config = config;
        this.errMsg = errMsg;
        this.zoneList = [];
        this.zoneModel = new _model_address__WEBPACK_IMPORTED_MODULE_5__["Zone"]();
        this.regonModelList = [];
    }
    /*getServicePrerequisiteForExistance(descEng,serviceId): Observable<Zone> {
      return this.httpClient.get<Zone>(this.config.urls.url('sector', descEng,serviceId))
        .map(servicePrereq => {
          this.zoneModel = servicePrereq;
          return this.zoneModel;
        })
        .catch(this.errMsg.parseObservableResponseError);
    }*/
    ZoneService.prototype.getZone = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('zoneById', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (zonedata) {
            _this.zoneModel = zonedata;
            return _this.zoneModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ZoneService.prototype.getZonesbyParent = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('zoneByParentId', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (zonedata) {
            _this.zoneList = zonedata;
            return _this.zoneList;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ZoneService.prototype.getZones = function () {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('zones')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (zoneList) { return _this.zoneList = zoneList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ZoneService.prototype.saveZone = function (zoneModel) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('zone'), zoneModel).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (ZoneData) {
            _this.zoneModel = ZoneData;
            return _this.zoneModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ZoneService.prototype.deleteZone = function (zoneModel) {
        return this.httpClient.delete(this.config.urls.url('zone', zoneModel.ZoneId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parsePromiseResponseError));
    };
    ZoneService.prototype.getRegions = function () {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('regions')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (regionList) {
            _this.regonModelList = regionList;
            return _this.regonModelList;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ZoneService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"]])
    ], ZoneService);
    return ZoneService;
}());



/***/ }),

/***/ "./src/app/model/address.ts":
/*!**********************************!*\
  !*** ./src/app/model/address.ts ***!
  \**********************************/
/*! exports provided: Region, Zone, Woreda, Kebele */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Region", function() { return Region; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zone", function() { return Zone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Woreda", function() { return Woreda; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kebele", function() { return Kebele; });
var Region = /** @class */ (function () {
    function Region(RegionId, Description, DescriptionEnglish) {
        this.RegionId = RegionId;
        this.Description = Description;
        this.DescriptionEnglish = DescriptionEnglish;
    }
    return Region;
}());

var Zone = /** @class */ (function () {
    function Zone(ZoneId, RegionId, Description, DescriptionEnglish, RegionName) {
        this.ZoneId = ZoneId;
        this.RegionId = RegionId;
        this.Description = Description;
        this.DescriptionEnglish = DescriptionEnglish;
        this.Region = RegionName;
    }
    return Zone;
}());

var Woreda = /** @class */ (function () {
    function Woreda(RegionId, ZoneId, WoredaId, Description, DescriptionEnglish, RegionName, ZoneName) {
        this.RegionId = RegionId;
        this.ZoneId = ZoneId;
        this.WoredaId = WoredaId;
        this.Description = Description;
        this.DescriptionEnglish = DescriptionEnglish;
        this.Region = RegionName;
        this.Zone = ZoneName;
    }
    return Woreda;
}());

var Kebele = /** @class */ (function () {
    function Kebele(RegionId, ZoneId, KebeleId, WoredaId, Description, DescriptionEnglish, RegionName, ZoneName, WoredaName) {
        this.RegionId = RegionId;
        this.ZoneId = ZoneId;
        this.KebeleId = KebeleId;
        this.WoredaId = WoredaId;
        this.Description = Description;
        this.DescriptionEnglish = DescriptionEnglish;
        this.Region = RegionName;
        this.Zone = ZoneName;
        this.Woreda = WoredaName;
    }
    return Kebele;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-components-setting-address-tabs-address-module~app-components-setting-address-tabs-kebel~a887c315.js.map