(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-components-setting-services-tabs-serviceTab-module~app-components-setting-services-tabs-~04a836c5"],{

/***/ "./src/app/components/setting/services-tabs/servicetariff/edit/edit-servicetariff.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/servicetariff/edit/edit-servicetariff.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* div {\r\n  display: flex;\r\n} */\r\n\r\nmat-card {\r\n  max-width: 500px;\r\n  margin: 10px auto;\r\n  text-align: center;\r\n}\r\n\r\nmat-checkbox {\r\n  max-width: 500px;\r\n  margin: 2em auto;\r\n  text-align: left;\r\n}\r\n\r\n/*mat-form-field  {*/\r\n\r\n/*max-width: 400px;*/\r\n\r\n/*margin-right: 10px;*/\r\n\r\n/*font-size: 16px;*/\r\n\r\n/*}*/\r\n\r\n.row\r\n{\r\n  text-align: left;\r\n  margin-bottom: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3NldHRpbmcvc2VydmljZXMtdGFicy9zZXJ2aWNldGFyaWZmL2VkaXQvZWRpdC1zZXJ2aWNldGFyaWZmLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7O0FBRUg7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUNBLG9CQUFvQjs7QUFDcEIsb0JBQW9COztBQUNwQixzQkFBc0I7O0FBQ3RCLG1CQUFtQjs7QUFDbkIsSUFBSTs7QUFDSjs7RUFFRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3NldHRpbmcvc2VydmljZXMtdGFicy9zZXJ2aWNldGFyaWZmL2VkaXQvZWRpdC1zZXJ2aWNldGFyaWZmLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBkaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn0gKi9cclxuXHJcbm1hdC1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5tYXQtY2hlY2tib3gge1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgbWFyZ2luOiAyZW0gYXV0bztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi8qbWF0LWZvcm0tZmllbGQgIHsqL1xyXG4vKm1heC13aWR0aDogNDAwcHg7Ki9cclxuLyptYXJnaW4tcmlnaHQ6IDEwcHg7Ki9cclxuLypmb250LXNpemU6IDE2cHg7Ki9cclxuLyp9Ki9cclxuLnJvd1xyXG57XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/setting/services-tabs/servicetariff/edit/edit-servicetariff.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/servicetariff/edit/edit-servicetariff.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar mat-dialog-title>\r\n  <h1 mat-dialog-title>\r\n    <mat-icon>create</mat-icon>\r\n    {{('servicesTariff.Header' | translate)}}\r\n  </h1>\r\n</mat-toolbar>\r\n<mat-card class=\"mat-elevation-z8\">\r\n  <br/>\r\n  <mat-card-content>\r\n    <form #form=\"ngForm\" [formGroup]=\"serviceTariffForm\" novalidate (ngSubmit)=\"onSubmit()\" fxLayout=\"column\"\r\n          autocomplete=\"off\">\r\n      <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n        <mat-form-field fxLayoutGap=\"1em\" style=\"width: 250px\">\r\n          <mat-label>{{'servicesTariff.ServiceType' | translate}}</mat-label>\r\n          <mat-select formControlName=\"cServiceType\" [compareWith]=\"compareIds\" required>\r\n            <option value=\"0\">--Select--</option>\r\n            <mat-option *ngFor=\"let servicePrerequisites of serviceModel\" [value]=\"servicePrerequisites.ServiceId\">\r\n              <span>{{servicePrerequisites.NameEnglish}}</span>\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <!--   [compareWith]=\"compareIds\"    required-->\r\n        <mat-label>{{'servicesTariff.TariffType' | translate}}</mat-label>\r\n        <mat-selection-list formControlName=\"cTariffType\">\r\n          <mat-list-option *ngFor=\"let tariffModels of tariffModel\"\r\n                           [selected]=\"tariffModels?.selected\"\r\n                           [value]=\"tariffModels?.TariffId\"\r\n                           (click)=\"onTariffListControlChanged(tariffModels?.TariffId)\">\r\n            <span>{{tariffModels?.NameEnglish}} -- {{tariffModels?.Fee}}</span>\r\n          </mat-list-option>\r\n        </mat-selection-list>\r\n      </div>\r\n      <div mat-dialog-actions>\r\n        <button mat-raised-button type=\"submit\" color=\"primary\" style=\"margin: 15px;\">\r\n          Save\r\n        </button>\r\n        <button mat-raised-button (click)=\"onBack()\" color=\"warn\" type=\"button\">\r\n          Cancel\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/setting/services-tabs/servicetariff/edit/edit-servicetariff.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/servicetariff/edit/edit-servicetariff.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: EditServicetariffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditServicetariffComponent", function() { return EditServicetariffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _servicetariff_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../servicetariff.service */ "./src/app/components/setting/services-tabs/servicetariff/servicetariff.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _custor_helpers_compare__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @custor/helpers/compare */ "./src/@custor/helpers/compare.ts");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../config/appconfig */ "./src/app/config/appconfig.ts");











var EditServicetariffComponent = /** @class */ (function () {
    function EditServicetariffComponent(activatedRoute, router, http, config, servicetariffService, errMsg, toastr, fb) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.http = http;
        this.config = config;
        this.servicetariffService = servicetariffService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.fb = fb;
        this.isNewServiceTariff = false;
        this.serviceTariffLists = [];
        this.serviceModel = [];
        this.tariffModel = [];
        this.TariffIds = [];
        this.serviceTariffs = {};
        // initialize the form
        this.initForm();
        this.initStaticData('en');
    }
    EditServicetariffComponent.prototype.ngOnInit = function () {
        this.getService();
        var id = this.activatedRoute.snapshot.params['id'];
        if (id < 1) {
            this.isNewServiceTariff = true;
            this.getTariff();
            return;
        }
        if (id) {
            this.getServiceTariff(id);
        }
    };
    EditServicetariffComponent.prototype.initStaticData = function (currentLang) {
    };
    // ngAfterViewInit() {
    //   this.updateSelectList();
    // }
    //
    // updateSelectList() {
    //   const options = this.selectElRef.nativeElement.options;
    //   for (let i = 0; i < options.length; i++) {
    //     options[i].selected = this.TariffIds.indexOf(options[i].value) > -1;
    //   }
    // }
    EditServicetariffComponent.prototype.getServiceTariff = function (id) {
        var _this = this;
        this.isNewServiceTariff = false;
        this.loadingIndicator = true;
        this.serviceTariffsSub =
            this.servicetariffService
                .getServiceTariff(id)
                .subscribe(function (result) {
                _this.serviceTariffLists = result;
                _this.updateForm();
                _this.getTariff();
            }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
        this.loadingIndicator = false;
    };
    EditServicetariffComponent.prototype.updateForm = function () {
        //// console.log('i ma here');
        this.serviceTariffForm.patchValue({
            cServiceType: this.serviceTariffLists[0].ServiceId,
        });
        // },4000);
        this.isNewServiceTariff = false;
    };
    EditServicetariffComponent.prototype.getService = function () {
        var _this = this;
        this.servicetariffService.getService()
            .subscribe(function (result) {
            _this.serviceModel = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    EditServicetariffComponent.prototype.getTariff = function () {
        var _this = this;
        this.servicetariffService.getTariff()
            .subscribe(function (result) {
            _this.checkIfSelected(result);
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    EditServicetariffComponent.prototype.checkIfSelected = function (result) {
        this.tariffModel = result;
        for (var i = 0; i < this.serviceTariffLists.length; i++) {
            for (var j = 0; j < this.tariffModel.length; j++) {
                if (this.tariffModel[j].TariffId === this.serviceTariffLists[i].TariffId) {
                    this.tariffModel[j].selected = true;
                    // // console.log(this.tariffModel[j]);
                }
                else {
                    if (this.tariffModel[j].selected !== true) {
                        this.tariffModel[j].selected = false;
                    }
                }
            }
        }
        //// console.log(this.tariffModel);
    };
    EditServicetariffComponent.prototype.initForm = function () {
        this.serviceTariffForm = this.fb.group({
            cTariffType: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cServiceType: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    EditServicetariffComponent.prototype.onTariffListControlChanged = function (list) {
        this.TariffIds.push(list);
    };
    /* checkRecordExistance(): boolean {
       const formModel = this.serviceTariffForm.value;
       this.servicesSub = this.servicesService
         .getServices(formModel.cServiceNameEnglish, formModel.cServiceType)
         .subscribe(result => {
           this.serviceTariffs = result
         })
       if (this.serviceTariffs.ServiceId == null) {
         return false;
       } else {
         return true;
       }
     }*/
    EditServicetariffComponent.prototype.onSubmit = function () {
        // if (!this.serviceTariffForm.valid) {
        //   return;
        // }
        var _this = this;
        // if (this.isNewServiceTariff) {
        //   /* if (this.checkRecordExistance()) {
        //      this.toastr.show(
        //        'Record Exist', 'message', {
        //          closeButton: true
        //        })
        //      return;
        //    }*/
        //   this.loadingIndicator = true;
        // }
        return this.servicetariffService.saveServiceTariff(this.getEditedServiceTariff()).subscribe(function (servicetariffs) {
            //// console.log(servicetariffs);
            _this.saveCompleted(servicetariffs);
        }, function (err) { return _this.handleError(err); });
    };
    EditServicetariffComponent.prototype.compareIds = function (id1, id2) {
        var a1 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_9__["determineId"])(id1);
        var a2 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_9__["determineId"])(id2);
        return a1 === a2;
    };
    EditServicetariffComponent.prototype.ngOnDestroy = function () {
        // this.serviceTariffsSub.unsubscribe();
    };
    EditServicetariffComponent.prototype.onBack = function () {
        //this.router.navigate(['servicetariffs/list']);
        this.router.navigate(['services-tab']);
    };
    EditServicetariffComponent.prototype.saveCompleted = function (services) {
        if (services) {
            this.serviceTariffs = services;
        }
        this.loadingIndicator = false;
        this.toastr.success('Record saved successfully!');
        // this.router.navigate(['servicetariffs/list']);
        this.router.navigate(['services-tab']);
    };
    EditServicetariffComponent.prototype.handleError = function (err) {
        this.loadingIndicator = false;
        this.toastr.error(this.errMsg.getError(err));
        this.loadingIndicator = false;
    };
    EditServicetariffComponent.prototype.getEditedServiceTariff = function () {
        var formModel = this.serviceTariffForm.value;
        return {
            ServiceTariffId: this.isNewServiceTariff ? 0 : this.serviceTariffs.ServiceTariffId,
            ServiceId: formModel.cServiceType,
            TariffId: this.TariffIds,
            NameEnglish: null,
            Fee: null
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"])
    ], EditServicetariffComponent.prototype, "serviceTariffsSub", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cTariffType'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditServicetariffComponent.prototype, "selectElRef", void 0);
    EditServicetariffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit.servicetariff',
            template: __webpack_require__(/*! ./edit-servicetariff.component.html */ "./src/app/components/setting/services-tabs/servicetariff/edit/edit-servicetariff.component.html"),
            providers: [_servicetariff_service__WEBPACK_IMPORTED_MODULE_5__["ServicetariffService"]],
            styles: [__webpack_require__(/*! ./edit-servicetariff.component.css */ "./src/app/components/setting/services-tabs/servicetariff/edit/edit-servicetariff.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_10__["AppConfiguration"],
            _servicetariff_service__WEBPACK_IMPORTED_MODULE_5__["ServicetariffService"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], EditServicetariffComponent);
    return EditServicetariffComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/services-tabs/servicetariff/list/list-servicetariff.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/servicetariff/list/list-servicetariff.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9zZXR0aW5nL3NlcnZpY2VzLXRhYnMvc2VydmljZXRhcmlmZi9saXN0L2xpc3Qtc2VydmljZXRhcmlmZi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/setting/services-tabs/servicetariff/list/list-servicetariff.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/servicetariff/list/list-servicetariff.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\" style=\"margin: 10px;\" fxFlex=\"65\">\r\n    <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>\r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n      <ng-container matColumnDef=\"ServiceId\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"150px\">Service Id</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxFlex=\"150px\"> {{row.ServiceId}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"ServiceNameEnglish\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"250px\">Service Name</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxFlex=\"250px\"> {{row.DisplayNameEnglish}}</mat-cell>\r\n      </ng-container>\r\n      <!--<ng-container matColumnDef=\"Fee\" >-->\r\n      <!--<mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"180px\">Fee</mat-header-cell>-->\r\n      <!--<mat-cell *matCellDef=\"let row\" fxFlex=\"180px\"> {{row.Fee}}</mat-cell>-->\r\n      <!--</ng-container>-->\r\n      <ng-container matColumnDef=\"actions\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"100px\">\r\n          <button mat-button color=\"primary\" (click)=\"editServiceTariff()\">\r\n            <mat-icon class=\"mat-button-icon\">add</mat-icon>\r\n            {{'common.commands.Add' | translate}}\r\n          </button>\r\n        </mat-header-cell>\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"100px\">\r\n        </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let serviceTariffModels\" fxFlex=\"100px\">\r\n          <button mat-icon-button (click)=\"editServiceTariff(serviceTariffModels)\" type=\"button\">\r\n            <mat-icon>edit</mat-icon>\r\n          </button>\r\n          <!--<button mat-icon-button (click)=\"confirmDelete(serviceTariffModels)\" type=\"button\">-->\r\n          <!--<mat-icon color=\"warn\">delete</mat-icon>-->\r\n          <!--</button>-->\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/setting/services-tabs/servicetariff/list/list-servicetariff.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/servicetariff/list/list-servicetariff.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ListServicetariffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListServicetariffComponent", function() { return ListServicetariffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _servicetariff_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../servicetariff.service */ "./src/app/components/setting/services-tabs/servicetariff/servicetariff.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");








var ListServicetariffComponent = /** @class */ (function () {
    function ListServicetariffComponent(http, servicesService, errMsg, toastr, dialog, router, route) {
        this.http = http;
        this.servicesService = servicesService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.service = [];
        this.displayedColumns = ['ServiceId', 'ServiceNameEnglish', 'actions'];
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    ListServicetariffComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListServicetariffComponent.prototype.ngOnInit = function () {
        this.getServiceTariffs();
    };
    ListServicetariffComponent.prototype.getServiceTariffs = function () {
        var _this = this;
        this.loadingIndicator = true;
        this.servicesService.getService()
            .subscribe(function (result) {
            // console.log(result);
            _this.service = result;
            if (!_this.service) {
                _this.toastr.error('No records were found to list', 'Error', {
                    closeButton: true,
                });
            }
            else {
                _this.dataSource.data = _this.service;
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
    ListServicetariffComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ListServicetariffComponent.prototype.editServiceTariff = function (serviceTariffModel) {
        // console.log(serviceTariffModel);
        if (serviceTariffModel) {
            this.router.navigate(['/servicetariffs/edit', serviceTariffModel.ServiceId], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['/servicetariffs/edit', 0]);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ListServicetariffComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ListServicetariffComponent.prototype, "sort", void 0);
    ListServicetariffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-servicetariff',
            template: __webpack_require__(/*! ./list-servicetariff.component.html */ "./src/app/components/setting/services-tabs/servicetariff/list/list-servicetariff.component.html"),
            providers: [_servicetariff_service__WEBPACK_IMPORTED_MODULE_5__["ServicetariffService"]],
            styles: [__webpack_require__(/*! ./list-servicetariff.component.css */ "./src/app/components/setting/services-tabs/servicetariff/list/list-servicetariff.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _servicetariff_service__WEBPACK_IMPORTED_MODULE_5__["ServicetariffService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ListServicetariffComponent);
    return ListServicetariffComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/services-tabs/servicetariff/servicetariff-routing.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/servicetariff/servicetariff-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: ServicetariffRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicetariffRoutingModule", function() { return ServicetariffRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_edit_servicetariff_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit-servicetariff.component */ "./src/app/components/setting/services-tabs/servicetariff/edit/edit-servicetariff.component.ts");
/* harmony import */ var _list_list_servicetariff_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list-servicetariff.component */ "./src/app/components/setting/services-tabs/servicetariff/list/list-servicetariff.component.ts");
/* harmony import */ var _servicetariff_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./servicetariff.component */ "./src/app/components/setting/services-tabs/servicetariff/servicetariff.component.ts");






var ServiceTariffRoutes = [
    {
        path: '', component: _servicetariff_component__WEBPACK_IMPORTED_MODULE_5__["ServicetariffComponent"],
        children: [
            { path: '', component: _list_list_servicetariff_component__WEBPACK_IMPORTED_MODULE_4__["ListServicetariffComponent"] },
            { path: 'list', component: _list_list_servicetariff_component__WEBPACK_IMPORTED_MODULE_4__["ListServicetariffComponent"] },
            { path: 'edit/:id', component: _edit_edit_servicetariff_component__WEBPACK_IMPORTED_MODULE_3__["EditServicetariffComponent"] }
        ]
    }
];
var ServicetariffRoutingModule = /** @class */ (function () {
    function ServicetariffRoutingModule() {
    }
    ServicetariffRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ServiceTariffRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ServicetariffRoutingModule);
    return ServicetariffRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/setting/services-tabs/servicetariff/servicetariff.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/servicetariff/servicetariff.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9zZXR0aW5nL3NlcnZpY2VzLXRhYnMvc2VydmljZXRhcmlmZi9zZXJ2aWNldGFyaWZmLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/setting/services-tabs/servicetariff/servicetariff.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/servicetariff/servicetariff.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/setting/services-tabs/servicetariff/servicetariff.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/servicetariff/servicetariff.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ServicetariffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicetariffComponent", function() { return ServicetariffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicetariffComponent = /** @class */ (function () {
    function ServicetariffComponent() {
    }
    ServicetariffComponent.prototype.ngOnInit = function () {
    };
    ServicetariffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-servicetariff',
            template: __webpack_require__(/*! ./servicetariff.component.html */ "./src/app/components/setting/services-tabs/servicetariff/servicetariff.component.html"),
            styles: [__webpack_require__(/*! ./servicetariff.component.css */ "./src/app/components/setting/services-tabs/servicetariff/servicetariff.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicetariffComponent);
    return ServicetariffComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/services-tabs/servicetariff/servicetariff.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/servicetariff/servicetariff.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ServicetariffModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicetariffModule", function() { return ServicetariffModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _servicetariff_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./servicetariff-routing.module */ "./src/app/components/setting/services-tabs/servicetariff/servicetariff-routing.module.ts");
/* harmony import */ var _edit_edit_servicetariff_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit-servicetariff.component */ "./src/app/components/setting/services-tabs/servicetariff/edit/edit-servicetariff.component.ts");
/* harmony import */ var _list_list_servicetariff_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list-servicetariff.component */ "./src/app/components/setting/services-tabs/servicetariff/list/list-servicetariff.component.ts");
/* harmony import */ var _servicetariff_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicetariff.component */ "./src/app/components/setting/services-tabs/servicetariff/servicetariff.component.ts");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");








var ServicetariffModule = /** @class */ (function () {
    function ServicetariffModule() {
    }
    ServicetariffModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _servicetariff_routing_module__WEBPACK_IMPORTED_MODULE_3__["ServicetariffRoutingModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_servicetariff_component__WEBPACK_IMPORTED_MODULE_6__["ServicetariffComponent"], _edit_edit_servicetariff_component__WEBPACK_IMPORTED_MODULE_4__["EditServicetariffComponent"], _list_list_servicetariff_component__WEBPACK_IMPORTED_MODULE_5__["ListServicetariffComponent"]],
            exports: [_servicetariff_component__WEBPACK_IMPORTED_MODULE_6__["ServicetariffComponent"], _edit_edit_servicetariff_component__WEBPACK_IMPORTED_MODULE_4__["EditServicetariffComponent"], _list_list_servicetariff_component__WEBPACK_IMPORTED_MODULE_5__["ListServicetariffComponent"]]
        })
    ], ServicetariffModule);
    return ServicetariffModule;
}());



/***/ }),

/***/ "./src/app/components/setting/services-tabs/servicetariff/servicetariff.service.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/servicetariff/servicetariff.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: ServicetariffService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicetariffService", function() { return ServicetariffService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _model_servicetariff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../model/servicetariff */ "./src/app/model/servicetariff.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");







var ServicetariffService = /** @class */ (function () {
    function ServicetariffService(httpClient, config, errMsg) {
        this.httpClient = httpClient;
        this.config = config;
        this.errMsg = errMsg;
        this.serviceTariffModel = new _model_servicetariff__WEBPACK_IMPORTED_MODULE_4__["ServiceTariffModel"]();
        this.serviceTariffList = [];
        this.tariffModels = [];
        this.servicePrerequisiteModels = [];
    }
    /*getServicePrerequisiteForExistance(descEng,serviceId): Observable<ServicePrerequisiteModel> {
      return this.httpClient.get<ServicePrerequisiteModel>(this.config.urls.url('service', descEng,serviceId))
        .map(servicePrereq => {
          this.servicePrerequisiteModel = servicePrereq;
          return this.servicePrerequisiteModel;
        })
        .catch(this.errMsg.parseObservableResponseError);
    }*/
    ServicetariffService.prototype.getTariff = function () {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('tariffs')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (tariffdata) {
            _this.tariffModels = tariffdata;
            return _this.tariffModels;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ServicetariffService.prototype.getService = function () {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('services')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (serviceList) {
            _this.servicePrerequisiteModels = serviceList;
            return _this.servicePrerequisiteModels;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    /* getService(): Observable<ServicePrerequisiteModel[]> {
       return this.httpClient.get<ServicePrerequisiteModel[]>(this.config.urls.url('services')).pipe(
         map(servicePrereq => {
           this.servicePrerequisiteModels = servicePrereq;
           return this.servicePrerequisiteModels;
         }),
         catchError(this.errMsg.parseObservableResponseError),);
     }*/
    ServicetariffService.prototype.getServiceTariff = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('servicetariff', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (servicePrereq) {
            _this.serviceTariffList = servicePrereq;
            return _this.serviceTariffList;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ServicetariffService.prototype.getServiceTariffs = function () {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('servicetariffs')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (serviceTariffsList) { return _this.serviceTariffList = serviceTariffsList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ServicetariffService.prototype.saveServiceTariff = function (serviceTariffModel) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('servicetariff'), serviceTariffModel).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (ServicePrereq) {
            _this.serviceTariffModel = ServicePrereq;
            return _this.serviceTariffModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ServicetariffService.prototype.deleteServiceTariff = function (serviceTariffModel) {
        return this.httpClient.delete(this.config.urls.url('servicetariff', serviceTariffModel.ServiceTariffId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parsePromiseResponseError));
    };
    ServicetariffService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"]])
    ], ServicetariffService);
    return ServicetariffService;
}());



/***/ }),

/***/ "./src/app/model/servicetariff.ts":
/*!****************************************!*\
  !*** ./src/app/model/servicetariff.ts ***!
  \****************************************/
/*! exports provided: ServiceTariffModel, ServiceTariffViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceTariffModel", function() { return ServiceTariffModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceTariffViewModel", function() { return ServiceTariffViewModel; });
var ServiceTariffModel = /** @class */ (function () {
    function ServiceTariffModel(serviceTariffId, serviceId, TariffId, NameEnglish, fee, TariffIdName) {
        this.ServiceTariffId = serviceTariffId;
        this.ServiceId = serviceId;
        this.TariffId = TariffId;
        this.NameEnglish = NameEnglish;
        this.Fee = fee;
        //this.Tariff = TariffIdName;
    }
    return ServiceTariffModel;
}());

var ServiceTariffViewModel = /** @class */ (function () {
    function ServiceTariffViewModel() {
    }
    return ServiceTariffViewModel;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-components-setting-services-tabs-serviceTab-module~app-components-setting-services-tabs-~04a836c5.js.map