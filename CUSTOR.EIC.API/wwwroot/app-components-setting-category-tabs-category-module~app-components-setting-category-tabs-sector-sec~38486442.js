(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-setting-category-tabs-category-module~app-components-setting-category-tabs-sector-sec~38486442"],{

/***/ "./src/app/components/setting/category-tabs/sector/edit/edit-sector.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/setting/category-tabs/sector/edit/edit-sector.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* div {\r\n  display: flex;\r\n} */\r\n\r\nmat-card {\r\n  max-width: 500px;\r\n  margin: 10px auto;\r\n  text-align: center;\r\n}\r\n\r\nmat-checkbox {\r\n  max-width: 500px;\r\n  margin: 2em auto;\r\n  text-align: left;\r\n}\r\n\r\n/*mat-form-field  {*/\r\n\r\n/*max-width: 400px;*/\r\n\r\n/*margin-right: 10px;*/\r\n\r\n/*font-size: 16px;*/\r\n\r\n/*}*/\r\n\r\n.row\r\n{\r\n  text-align: left;\r\n  margin-bottom: 15px;\r\n}"

/***/ }),

/***/ "./src/app/components/setting/category-tabs/sector/edit/edit-sector.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/setting/category-tabs/sector/edit/edit-sector.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containerX\">\r\n\r\n  <mat-card>\r\n    <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>\r\n    <mat-card-header>\r\n      <mat-card-title>\r\n        <!-- <mat-icon class=\"mat-button-icon\">person_add</mat-icon> Edit Customer -->\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <br />\r\n    <br />\r\n\r\n    <mat-card-content>\r\n      <form #form=\"ngForm\" [formGroup]=\"sectorsForm\" novalidate (ngSubmit)=\"onSubmit()\" fxLayout=\"column\"\r\n            autocomplete=\"off\">\r\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n          <mat-form-field>\r\n            <mat-label>Description:</mat-label>\r\n            <input matInput formControlName=\"cDescription\"  required maxlength=\"150\" />\r\n            <mat-error *ngIf=\"Description.hasError('required')\">\r\n              Please enter Description amharic\r\n            </mat-error>\r\n            <mat-error *ngIf=\"Description.hasError('pattern')\">\r\n              Only amharic alphabetic charcters are allowed!\r\n            </mat-error>\r\n            <mat-error *ngIf=\"!Description.hasError('maxlength')\">\r\n              Maximum charcters length is 150!\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <mat-label>Description Alias:</mat-label>\r\n            <input matInput formControlName=\"cDescriptionAlias\"  required maxlength=\"20\" />\r\n            <mat-error *ngIf=\"DescriptionAlias.hasError('required')\">\r\n              Please enter Description Alias amharic\r\n            </mat-error>\r\n            <mat-error *ngIf=\"DescriptionAlias.hasError('pattern')\">\r\n              Only amharic alphabetic charcters are allowed!\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n          <mat-label >Description English:</mat-label>\r\n          <input matInput formControlName=\"cDescriptionEnglish\" required maxlength=\"200\" />\r\n          <mat-error *ngIf=\"DescriptionEnglish.hasError('required')\">\r\n            Please enter service name english\r\n          </mat-error>\r\n          <mat-error *ngIf=\"DescriptionEnglish.hasError('pattern')\">\r\n            Only alphabetic charcters are allowed!\r\n          </mat-error>\r\n          <mat-error *ngIf=\"!DescriptionEnglish.hasError('maxlength')\">\r\n            Maximum charcters length is 200!\r\n          </mat-error>\r\n        </mat-form-field>\r\n          <mat-form-field>\r\n            <mat-label >Description English Alias:</mat-label>\r\n            <input matInput formControlName=\"cDescriptionEnglishAlias\" required maxlength=\"20\" />\r\n            <mat-error *ngIf=\"DescriptionEnglishAlias.hasError('required')\">\r\n              Please enter service name english\r\n            </mat-error>\r\n            <mat-error *ngIf=\"DescriptionEnglishAlias.hasError('pattern')\">\r\n              Only alphabetic charcters are allowed!\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field  style=\"width: 150px\">\r\n            <mat-label>Economic Sector Code:</mat-label>\r\n            <mat-select formControlName=\"cEconomicSector\" [compareWith]=\"compareIds\" required>\r\n              <mat-option *ngFor=\"let economicSector of sectorTypes\" [value]=\"economicSector.Id\">\r\n                <span>{{economicSector.DescriptionEnglish}}</span>\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          </div>\r\n\r\n        <div mat-dialog-actions>\r\n          <button [disabled]=\"form.invalid\" mat-raised-button type=\"submit\" color=\"primary\">\r\n            Save\r\n          </button>\r\n          <button mat-raised-button (click)=\"onBack()\" color=\"warn\" type=\"button\">\r\n            Cancel\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/components/setting/category-tabs/sector/edit/edit-sector.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/setting/category-tabs/sector/edit/edit-sector.component.ts ***!
  \***************************************************************************************/
/*! exports provided: EditSectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSectorComponent", function() { return EditSectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _sector_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sector.service */ "./src/app/components/setting/category-tabs/sector/sector.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _custor_const_consts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../@custor/const/consts */ "./src/@custor/const/consts.ts");
/* harmony import */ var _custor_helpers_compare__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../@custor/helpers/compare */ "./src/@custor/helpers/compare.ts");
/* harmony import */ var _model_lookupData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../model/lookupData */ "./src/app/model/lookupData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var EditSectorComponent = /** @class */ (function () {
    function EditSectorComponent(activatedRoute, router, http, config, sectorsService, errMsg, toastr, fb) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.http = http;
        this.config = config;
        this.sectorsService = sectorsService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.fb = fb;
        /*serviceId:number;*/
        this.isNewSector = false;
        this.sectorTypes = [];
        this.sectors = {};
        // initialize the form
        this.initForm();
        this.initStaticData('en');
    }
    EditSectorComponent.prototype.ngOnInit = function () {
        var id = this.activatedRoute.snapshot.params['id'];
        if (id < 1) {
            this.isNewSector = true;
            this.title = 'Create a new Service';
            /*this.getService();*/
            return;
        }
        if (id) {
            this.getSectors(id);
        }
    };
    EditSectorComponent.prototype.initStaticData = function (currentLang) {
        var _this = this;
        var SecType = new _model_lookupData__WEBPACK_IMPORTED_MODULE_11__["SectorType"]();
        _custor_const_consts__WEBPACK_IMPORTED_MODULE_9__["SectorTypes"].forEach(function (pair) {
            SecType = {
                'Id': pair.Id.toString(),
                'DescriptionEnglish': pair.DescriptionEnglish,
                'Description': pair.Description
            };
            _this.sectorTypes.push(SecType);
        });
    };
    EditSectorComponent.prototype.getSectors = function (id) {
        var _this = this;
        this.isNewSector = false;
        this.loadingIndicator = true;
        this.sectorsSub = this.sectorsService
            .getSector(id)
            .subscribe(function (result) {
            _this.sectors = result;
            _this.updateForm();
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
        this.loadingIndicator = false;
    };
    EditSectorComponent.prototype.updateForm = function () {
        this.sectorsForm.setValue({
            cDescription: this.sectors.Description == null ? '' : this.sectors.Description.toString(),
            cDescriptionAlias: this.sectors.DescriptionAlias == null ? '' : this.sectors.DescriptionAlias.toString(),
            cDescriptionEnglish: this.sectors.DescriptionEnglish == null ? '' : this.sectors.DescriptionEnglish.toString(),
            cDescriptionEnglishAlias: this.sectors.DescriptionEnglishAlias == null ? '' : this.sectors.DescriptionEnglishAlias.toString(),
            cEconomicSector: this.sectors.EconomicSector == null ? '' : this.sectors.EconomicSector.toString()
        });
        // },4000);
        this.isNewSector = false;
    };
    EditSectorComponent.prototype.initForm = function () {
        this.sectorsForm = this.fb.group({
            cDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(150),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^([ \u1200-\u137F])+$')])],
            cDescriptionAlias: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^([ \u1200-\u137F])+$')],
            cDescriptionEnglish: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(200),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z /,]+$')])],
            cDescriptionEnglishAlias: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z /,]+$')],
            cEconomicSector: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    EditSectorComponent.prototype.compareIds = function (id1, id2) {
        var a1 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_10__["determineId"])(id1);
        var a2 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_10__["determineId"])(id2);
        return a1 === a2;
    };
    EditSectorComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.sectorsForm.valid) {
            return;
        }
        if (this.isNewSector) {
            /* if (this.checkRecordExistance()) {
               this.toastr.show(
                 'Record Exist', 'message', {
                   closeButton: true
                 })
               return;
             }*/
            this.loadingIndicator = true;
        }
        return this.sectorsService.saveSector(this.getEditedSector()).subscribe(function (sectors) {
            _this.saveCompleted(sectors);
        }, function (err) { return _this.handleError(err); });
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
    EditSectorComponent.prototype.saveCompleted = function (sectors) {
        if (sectors) {
            this.sectors = sectors;
        }
        this.loadingIndicator = false;
        this.toastr.success('Record saved successfully!');
        //this.router.navigate(['sectors/list']);
        this.router.navigate(['category']);
    };
    EditSectorComponent.prototype.handleError = function (err) {
        this.loadingIndicator = false;
        this.toastr.error(this.errMsg.getError(err));
        this.loadingIndicator = false;
    };
    EditSectorComponent.prototype.getEditedSector = function () {
        var formModel = this.sectorsForm.value;
        return {
            SectorId: this.isNewSector ? 0 : this.sectors.SectorId,
            Description: formModel.cDescription,
            DescriptionAlias: formModel.cDescriptionAlias,
            DescriptionEnglish: formModel.cDescriptionEnglish,
            DescriptionEnglishAlias: formModel.cDescriptionEnglishAlias,
            EconomicSector: formModel.cEconomicSector,
        };
    };
    EditSectorComponent.prototype.ngOnDestroy = function () {
        //  this.sectorsSub.unsubscribe();
    };
    EditSectorComponent.prototype.onBack = function () {
        //this.router.navigate(['sectors/list']);
        this.router.navigate(['category']);
    };
    Object.defineProperty(EditSectorComponent.prototype, "Description", {
        get: function () {
            return this.sectorsForm.get('cDescription');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditSectorComponent.prototype, "DescriptionAlias", {
        get: function () {
            return this.sectorsForm.get('cDescriptionAlias');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditSectorComponent.prototype, "DescriptionEnglish", {
        get: function () {
            return this.sectorsForm.get('cDescriptionEnglish');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditSectorComponent.prototype, "DescriptionEnglishAlias", {
        get: function () {
            return this.sectorsForm.get('cDescriptionEnglishAlias');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_4__["Subscription"])
    ], EditSectorComponent.prototype, "sectorsSub", void 0);
    EditSectorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-sector',
            template: __webpack_require__(/*! ./edit-sector.component.html */ "./src/app/components/setting/category-tabs/sector/edit/edit-sector.component.html"),
            styles: [__webpack_require__(/*! ./edit-sector.component.css */ "./src/app/components/setting/category-tabs/sector/edit/edit-sector.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_1__["AppConfiguration"],
            _sector_service__WEBPACK_IMPORTED_MODULE_6__["SectorService"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EditSectorComponent);
    return EditSectorComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/category-tabs/sector/list/list-sector.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/setting/category-tabs/sector/list/list-sector.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/setting/category-tabs/sector/list/list-sector.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/setting/category-tabs/sector/list/list-sector.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:660px; margin:auto\" class=\"border-2\">\r\n\r\n  <div class=\"mat-elevation-z8\">\r\n    <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>\r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n      <ng-container matColumnDef=\"SectorId\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"100px\">Id</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxFlex=\"100px\"> {{row.SectorId}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Description\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"180px\">Description</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxFlex=\"180px\"> {{row.DescriptionAlias}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"DescriptionEnglish\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"180px\">Description English</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxFlex=\"180px\"> {{row.DescriptionEnglishAlias}}</mat-cell>\r\n      </ng-container>\r\n      <!-- <ng-container matColumnDef=\"EconomicSector\">\r\n         <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"100px\">Economic Sector</mat-header-cell>\r\n         <mat-cell *matCellDef=\"let row\" fxFlex=\"100px\"> {{row.EconomicSector}}</mat-cell>\r\n       </ng-container>-->\r\n      <ng-container matColumnDef=\"actions\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"100px\">\r\n          <button mat-button color=\"primary\" (click)=\"editSector()\">\r\n            <mat-icon class=\"mat-button-icon\">add</mat-icon>\r\n            {{'common.commands.Add' | translate}}\r\n          </button>\r\n        </mat-header-cell>\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"100px\">\r\n        </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let sectors\" fxFlex=\"100px\">\r\n          <button mat-icon-button (click)=\"editSector(sectors)\" type=\"button\">\r\n            <mat-icon>edit</mat-icon>\r\n          </button>\r\n          <button mat-icon-button (click)=\"confirmDelete(sectors)\" type=\"button\">\r\n            <mat-icon color=\"warn\">delete</mat-icon>\r\n          </button>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/setting/category-tabs/sector/list/list-sector.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/setting/category-tabs/sector/list/list-sector.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ListSectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSectorComponent", function() { return ListSectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _sector_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sector.service */ "./src/app/components/setting/category-tabs/sector/sector.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../@custor/components/confirm-dialog/confirm-dialog.component */ "./src/@custor/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../@custor/helpers/utilities */ "./src/@custor/helpers/utilities.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ListSectorComponent = /** @class */ (function () {
    function ListSectorComponent(http, sectorService, errMsg, toastr, dialog, router, route) {
        this.http = http;
        this.sectorService = sectorService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.displayedColumns = ['SectorId', 'Description', 'DescriptionEnglish', 'actions'];
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    ListSectorComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListSectorComponent.prototype.ngOnInit = function () {
        this.getSectors();
    };
    ListSectorComponent.prototype.getSectors = function () {
        var _this = this;
        this.loadingIndicator = true;
        this.sectorService.getSectors()
            .subscribe(function (result) {
            _this.sectorModels = result;
            if (!_this.sectorModels) {
                _this.toastr.error('No records were found to list', 'Error', {
                    closeButton: true,
                });
            }
            else {
                _this.dataSource.data = _this.sectorModels;
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
    ListSectorComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ListSectorComponent.prototype.editSector = function (sectorModel) {
        if (sectorModel) {
            this.router.navigate(['/sectors/edit', sectorModel.SectorId], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['/sectors/edit', 0]);
        }
    };
    ListSectorComponent.prototype.confirmDelete = function (sectorModel) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AngConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            _this.loadingIndicator = true;
            if (result) {
                _this.sectorService.deleteSector(sectorModel)
                    .subscribe(function (results) {
                    _this.loadingIndicator = false;
                    _this.dataSource.data = _this.dataSource.data.filter(function (item) { return item !== sectorModel; });
                }, function (error) {
                    // tslint:disable-next-line:max-line-length
                    _this.toastr.error("An error occured whilst deleting the Service.\r\nError: \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_8__["Utilities"].getHttpResponseMessage(error) + "\"", 'Delete Error');
                });
            }
            _this.loadingIndicator = false;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ListSectorComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ListSectorComponent.prototype, "sort", void 0);
    ListSectorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-sector',
            template: __webpack_require__(/*! ./list-sector.component.html */ "./src/app/components/setting/category-tabs/sector/list/list-sector.component.html"),
            styles: [__webpack_require__(/*! ./list-sector.component.css */ "./src/app/components/setting/category-tabs/sector/list/list-sector.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _sector_service__WEBPACK_IMPORTED_MODULE_4__["SectorService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ListSectorComponent);
    return ListSectorComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/category-tabs/sector/sector-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/setting/category-tabs/sector/sector-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: SectorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectorRoutingModule", function() { return SectorRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_sector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list-sector.component */ "./src/app/components/setting/category-tabs/sector/list/list-sector.component.ts");
/* harmony import */ var _edit_edit_sector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit-sector.component */ "./src/app/components/setting/category-tabs/sector/edit/edit-sector.component.ts");
/* harmony import */ var _sector_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sector.component */ "./src/app/components/setting/category-tabs/sector/sector.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SectorRoutes = [
    {
        path: '', component: _sector_component__WEBPACK_IMPORTED_MODULE_4__["SectorComponent"], children: [
            { path: '', component: _list_list_sector_component__WEBPACK_IMPORTED_MODULE_2__["ListSectorComponent"] },
            { path: 'list', component: _list_list_sector_component__WEBPACK_IMPORTED_MODULE_2__["ListSectorComponent"] },
            { path: 'edit/:id', component: _edit_edit_sector_component__WEBPACK_IMPORTED_MODULE_3__["EditSectorComponent"] }
        ]
    }
];
var SectorRoutingModule = /** @class */ (function () {
    function SectorRoutingModule() {
    }
    SectorRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(SectorRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SectorRoutingModule);
    return SectorRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/setting/category-tabs/sector/sector.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/setting/category-tabs/sector/sector.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/setting/category-tabs/sector/sector.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/setting/category-tabs/sector/sector.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/setting/category-tabs/sector/sector.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/setting/category-tabs/sector/sector.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectorComponent", function() { return SectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SectorComponent = /** @class */ (function () {
    function SectorComponent() {
    }
    SectorComponent.prototype.ngOnInit = function () {
    };
    SectorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sector',
            template: __webpack_require__(/*! ./sector.component.html */ "./src/app/components/setting/category-tabs/sector/sector.component.html"),
            styles: [__webpack_require__(/*! ./sector.component.css */ "./src/app/components/setting/category-tabs/sector/sector.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SectorComponent);
    return SectorComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/category-tabs/sector/sector.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/setting/category-tabs/sector/sector.module.ts ***!
  \**************************************************************************/
/*! exports provided: SectorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectorModule", function() { return SectorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sector_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sector-routing.module */ "./src/app/components/setting/category-tabs/sector/sector-routing.module.ts");
/* harmony import */ var _list_list_sector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list-sector.component */ "./src/app/components/setting/category-tabs/sector/list/list-sector.component.ts");
/* harmony import */ var _edit_edit_sector_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit-sector.component */ "./src/app/components/setting/category-tabs/sector/edit/edit-sector.component.ts");
/* harmony import */ var _sector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sector.component */ "./src/app/components/setting/category-tabs/sector/sector.component.ts");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SectorModule = /** @class */ (function () {
    function SectorModule() {
    }
    SectorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _sector_routing_module__WEBPACK_IMPORTED_MODULE_2__["SectorRoutingModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: [_list_list_sector_component__WEBPACK_IMPORTED_MODULE_3__["ListSectorComponent"], _edit_edit_sector_component__WEBPACK_IMPORTED_MODULE_4__["EditSectorComponent"], _sector_component__WEBPACK_IMPORTED_MODULE_5__["SectorComponent"]],
            exports: [_list_list_sector_component__WEBPACK_IMPORTED_MODULE_3__["ListSectorComponent"], _edit_edit_sector_component__WEBPACK_IMPORTED_MODULE_4__["EditSectorComponent"], _sector_component__WEBPACK_IMPORTED_MODULE_5__["SectorComponent"]],
        })
    ], SectorModule);
    return SectorModule;
}());



/***/ }),

/***/ "./src/app/components/setting/category-tabs/sector/sector.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/setting/category-tabs/sector/sector.service.ts ***!
  \***************************************************************************/
/*! exports provided: SectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectorService", function() { return SectorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _model_sector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../model/sector */ "./src/app/model/sector.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SectorService = /** @class */ (function () {
    function SectorService(httpClient, config, errMsg) {
        this.httpClient = httpClient;
        this.config = config;
        this.errMsg = errMsg;
        this.sectorList = [];
        // sectorModel: SectorModel = new SectorModel();
        // sectorList: SectorModel[];
        this.sectorModel = new _model_sector__WEBPACK_IMPORTED_MODULE_4__["SectorModel"]();
    }
    /*getServicePrerequisiteForExistance(descEng,serviceId): Observable<SectorModel> {
      return this.httpClient.get<SectorModel>(this.config.urls.url('sector', descEng,serviceId))
        .map(servicePrereq => {
          this.sectorModel = servicePrereq;
          return this.sectorModel;
        })
        .catch(this.errMsg.parseObservableResponseError);
    }*/
    SectorService.prototype.getSector = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('sector', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (sectordata) {
            _this.sectorModel = sectordata;
            return _this.sectorModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    SectorService.prototype.getSectors = function () {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('sectors')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (sectorList) { return _this.sectorList = sectorList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    SectorService.prototype.saveSector = function (sectorModel) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('sector'), sectorModel).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (SectorData) {
            _this.sectorModel = SectorData;
            return _this.sectorModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    SectorService.prototype.deleteSector = function (sectorModel) {
        return this.httpClient.delete(this.config.urls.url('sector', sectorModel.SectorId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parsePromiseResponseError));
    };
    SectorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"]])
    ], SectorService);
    return SectorService;
}());



/***/ }),

/***/ "./src/app/model/sector.ts":
/*!*********************************!*\
  !*** ./src/app/model/sector.ts ***!
  \*********************************/
/*! exports provided: SectorModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectorModel", function() { return SectorModel; });
var SectorModel = /** @class */ (function () {
    function SectorModel(SectorId, Description, DescriptionAlias, DescriptionEnglish, DescriptionEnglishAlias, EconomicSector) {
        this.SectorId = SectorId;
        this.Description = Description;
        this.DescriptionAlias = DescriptionAlias;
        this.DescriptionEnglish = DescriptionEnglish;
        this.DescriptionEnglishAlias = DescriptionEnglishAlias;
        this.EconomicSector = EconomicSector;
    }
    return SectorModel;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-setting-category-tabs-category-module~app-components-setting-category-tabs-sector-sec~38486442.js.map