(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-setting-address-tabs-address-module~app-components-setting-address-tabs-region-region~c004adf2"],{

/***/ "./src/app/components/setting/address-tabs/region/edit/edit-region.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/region/edit/edit-region.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* div {\r\n  display: flex;\r\n} */\r\n\r\nmat-card {\r\n  max-width: 500px;\r\n  margin: 10px auto;\r\n  text-align: center;\r\n}\r\n\r\nmat-checkbox {\r\n  max-width: 500px;\r\n  margin: 2em auto;\r\n  text-align: left;\r\n}\r\n\r\n/*mat-form-field  {*/\r\n\r\n/*max-width: 400px;*/\r\n\r\n/*margin-right: 10px;*/\r\n\r\n/*font-size: 16px;*/\r\n\r\n/*}*/\r\n\r\n.row\r\n{\r\n  text-align: left;\r\n  margin-bottom: 15px;\r\n}"

/***/ }),

/***/ "./src/app/components/setting/address-tabs/region/edit/edit-region.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/region/edit/edit-region.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@fadeInOut] class=\"border\">\r\n\r\n  <mat-card>\r\n    <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>\r\n    <mat-card-header>\r\n      <mat-card-title>\r\n        <!-- <mat-icon class=\"mat-button-icon\">person_add</mat-icon> Edit Customer -->\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <br/>\r\n    <br/>\r\n\r\n    <mat-card-content>\r\n      <form #form=\"ngForm\" [formGroup]=\"regionsForm\" novalidate (ngSubmit)=\"onSubmit()\" fxLayout=\"column\"\r\n            autocomplete=\"off\">\r\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n          <mat-form-field style=\"width: 150px\">\r\n            <mat-label>{{'region.Code' | translate}}</mat-label>\r\n            <input matInput formControlName=\"cRegionId\" required maxlength=\"2\" required/>\r\n            <mat-error *ngIf=\"Code.hasError('required')\">\r\n              {{'common.validation.Required' | translate}}\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <mat-label>{{'region.Description' | translate}}</mat-label>\r\n            <input matInput formControlName=\"cDescription\" required maxlength=\"15\"/>\r\n            <mat-error *ngIf=\"Description.hasError('required')\">\r\n              {{'common.validation.Required' | translate}}\r\n            </mat-error>\r\n            <mat-error *ngIf=\"Description.hasError('maxlength')\">\r\n              {{'common.validation.MaxLengthChar' | translate: {'max':'15'} }}\r\n            </mat-error>\r\n            <mat-error *ngIf=\"Description.hasError('pattern')\">\r\n              {{'common.validation.UseEthiopicOnly' | translate}}\r\n            </mat-error>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field>\r\n            <mat-label>{{'region.DescriptionEnglish' | translate}}</mat-label>\r\n            <input matInput formControlName=\"cDescriptionEnglish\" required maxlength=\"20\"/>\r\n            <mat-error *ngIf=\"DescriptionEnglish.hasError('required')\">\r\n              {{'common.validation.Required' | translate}}\r\n            </mat-error>\r\n            <mat-error *ngIf=\"DescriptionEnglish.hasError('maxlength')\">\r\n              {{'common.validation.MaxLengthChar' | translate: {'max':'20'} }}\r\n            </mat-error>\r\n            <mat-error *ngIf=\"DescriptionEnglish.hasError('pattern')\">\r\n              {{'common.validation.UseLatinOnly' | translate}}\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div mat-dialog-actions>\r\n          <button [disabled]=\"form.invalid\" mat-raised-button type=\"submit\" color=\"primary\">\r\n            Save\r\n          </button>\r\n          <button mat-raised-button (click)=\"onBack()\" color=\"warn\" type=\"button\">\r\n            Cancel\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/setting/address-tabs/region/edit/edit-region.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/region/edit/edit-region.component.ts ***!
  \**************************************************************************************/
/*! exports provided: EditRegionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRegionComponent", function() { return EditRegionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _region_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../region.service */ "./src/app/components/setting/address-tabs/region/region.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _custor_helpers_compare__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../@custor/helpers/compare */ "./src/@custor/helpers/compare.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EditRegionComponent = /** @class */ (function () {
    function EditRegionComponent(activatedRoute, router, http, config, regionsService, errMsg, toastr, fb) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.http = http;
        this.config = config;
        this.regionsService = regionsService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.fb = fb;
        /*serviceId:number;*/
        this.isNewRegion = false;
        this.regions = {};
        // initialize the form
        this.initForm();
        this.initStaticData('en');
    }
    Object.defineProperty(EditRegionComponent.prototype, "Description", {
        get: function () {
            return this.regionsForm.get('cDescription');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditRegionComponent.prototype, "Code", {
        get: function () {
            return this.regionsForm.get('cRegionId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditRegionComponent.prototype, "DescriptionEnglish", {
        get: function () {
            return this.regionsForm.get('cDescriptionEnglish');
        },
        enumerable: true,
        configurable: true
    });
    EditRegionComponent.prototype.ngOnInit = function () {
        var id = this.activatedRoute.snapshot.params['id'];
        if (id < 1) {
            this.isNewRegion = true;
            this.title = 'Create a new Region';
            /*this.getService();*/
            return;
        }
        if (id) {
            this.getRegion(id);
        }
    };
    EditRegionComponent.prototype.initStaticData = function (currentLang) {
        /*let SecType: RegionType = new RegionType();
        RegionTypes.forEach(pair => {
          SecType = {
            'Id': pair.Id.toString(),
            'DescriptionEnglish': pair.DescriptionEnglish,
            'Description': pair.Description
          };
          this.regionTypes.push(SecType);
        });*/
    };
    EditRegionComponent.prototype.getRegion = function (id) {
        var _this = this;
        this.isNewRegion = false;
        this.loadingIndicator = true;
        this.regionsSub = this.regionsService
            .getRegion(id)
            .subscribe(function (result) {
            _this.regions = result;
            // console.log(this.regions);
            _this.updateForm();
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
        this.loadingIndicator = false;
    };
    EditRegionComponent.prototype.updateForm = function () {
        this.regionsForm.setValue({
            cRegionId: this.regions.RegionId == null ? '' : this.regions.RegionId.toString(),
            cDescription: this.regions.Description == null ? '' : this.regions.Description.toString(),
            cDescriptionEnglish: this.regions.DescriptionEnglish == null ? '' : this.regions.DescriptionEnglish.toString()
        });
        // },4000);
        this.isNewRegion = false;
    };
    EditRegionComponent.prototype.initForm = function () {
        this.regionsForm = this.fb.group({
            cRegionId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^([ \u1200-\u137F])+$')])],
            cDescriptionEnglish: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z /,]+$')])]
        });
    };
    /* checkRecordExistance(): boolean {
       const formModel = this.servicesForm.value;
       this.regionsSub = this.regionsService
         .getServices(formModel.cServiceNameEnglish, formModel.cServiceType)
         .subscribe(result => {
           this.regions = result
         })
       if (this.regions.ServiceId == null) {
         return false;
       } else {
         return true;
       }
     }*/
    EditRegionComponent.prototype.compareIds = function (id1, id2) {
        var a1 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_8__["determineId"])(id1);
        var a2 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_8__["determineId"])(id2);
        return a1 === a2;
    };
    EditRegionComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.regionsForm.valid) {
            return;
        }
        if (this.isNewRegion) {
            /* if (this.checkRecordExistance()) {
               this.toastr.show(
                 'Record Exist', 'message', {
                   closeButton: true
                 })
               return;
             }*/
            this.loadingIndicator = true;
        }
        return this.regionsService.saveRegion(this.getEditedRegion()).subscribe(function (regions) {
            _this.saveCompleted(regions);
        }, function (err) { return _this.handleError(err); });
    };
    EditRegionComponent.prototype.ngOnDestroy = function () {
        //  this.regionsSub.unsubscribe();
    };
    EditRegionComponent.prototype.onBack = function () {
        //this.router.navigate(['regions/list']);
        this.router.navigate(['address']);
    };
    EditRegionComponent.prototype.saveCompleted = function (regions) {
        if (regions) {
            this.regions = regions;
        }
        this.loadingIndicator = false;
        this.toastr.success('Record saved successfully!');
        //this.router.navigate(['regions/list']);
        this.router.navigate(['address']);
    };
    EditRegionComponent.prototype.handleError = function (err) {
        this.loadingIndicator = false;
        this.toastr.error(this.errMsg.getError(err));
        this.loadingIndicator = false;
    };
    EditRegionComponent.prototype.getEditedRegion = function () {
        var formModel = this.regionsForm.value;
        return {
            RegionId: this.isNewRegion ? '0' : this.regions.RegionId,
            Description: formModel.cDescription,
            DescriptionEnglish: formModel.cDescriptionEnglish,
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_4__["Subscription"])
    ], EditRegionComponent.prototype, "regionsSub", void 0);
    EditRegionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-region',
            template: __webpack_require__(/*! ./edit-region.component.html */ "./src/app/components/setting/address-tabs/region/edit/edit-region.component.html"),
            styles: [__webpack_require__(/*! ./edit-region.component.css */ "./src/app/components/setting/address-tabs/region/edit/edit-region.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_2__["AppConfiguration"],
            _region_service__WEBPACK_IMPORTED_MODULE_5__["RegionService"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_9__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EditRegionComponent);
    return EditRegionComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/address-tabs/region/list/list-region.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/region/list/list-region.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border {\r\n//border: 1px solid rgb(250, 250, 250);\r\n  border: 1px solid #ccc;\r\n  border-top-left-radius: 6px;\r\n  border-top-right-radius: 6px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/setting/address-tabs/region/list/list-region.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/region/list/list-region.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@fadeInOut] class=\"border\">\r\n  <div>\r\n    <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>\r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n      <ng-container matColumnDef=\"RegionId\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"80px\">Id</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxFlex=\"80px\"> {{row.RegionId}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Description\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"180px\">Description</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxFlex=\"180px\"> {{row.Description}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"DescriptionEnglish\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"180px\">Description English</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxFlex=\"180px\"> {{row.DescriptionEnglish}}</mat-cell>\r\n      </ng-container>\r\n      <!-- <ng-container matColumnDef=\"EconomicRegion\">\r\n         <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"100px\">Economic Region</mat-header-cell>\r\n         <mat-cell *matCellDef=\"let row\" fxFlex=\"100px\"> {{row.EconomicRegion}}</mat-cell>\r\n       </ng-container>-->\r\n      <ng-container matColumnDef=\"actions\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"100px\">\r\n          <button mat-button color=\"primary\" (click)=\"editRegion()\">\r\n            <mat-icon class=\"mat-button-icon\">add</mat-icon>\r\n            {{'common.commands.Add' | translate}}\r\n          </button>\r\n        </mat-header-cell>\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"100px\">\r\n        </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let Regions\" fxFlex=\"100px\">\r\n          <button mat-icon-button (click)=\"editRegion(Regions)\" type=\"button\">\r\n            <mat-icon>edit</mat-icon>\r\n          </button>\r\n          <button mat-icon-button (click)=\"confirmDelete(Regions)\" type=\"button\">\r\n            <mat-icon color=\"warn\">delete</mat-icon>\r\n          </button>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n    <mat-paginator\r\n\r\n      #paginator\r\n      [pageSize]=\"7\"\r\n      [pageSizeOptions]=\"[5, 7,10, 20]\">\r\n    </mat-paginator>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/setting/address-tabs/region/list/list-region.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/region/list/list-region.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ListRegionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRegionComponent", function() { return ListRegionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _region_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../region.service */ "./src/app/components/setting/address-tabs/region/region.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @custor/components/confirm-dialog/confirm-dialog.component */ "./src/@custor/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @custor/helpers/utilities */ "./src/@custor/helpers/utilities.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ListRegionComponent = /** @class */ (function () {
    function ListRegionComponent(http, regionService, errMsg, toastr, dialog, router, route) {
        this.http = http;
        this.regionService = regionService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.displayedColumns = ['RegionId', 'Description', 'DescriptionEnglish', 'actions'];
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    ListRegionComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListRegionComponent.prototype.ngOnInit = function () {
        this.getRegions();
    };
    ListRegionComponent.prototype.getRegions = function () {
        var _this = this;
        this.loadingIndicator = true;
        this.regionService.getRegions()
            .subscribe(function (result) {
            _this.regionModels = result;
            if (!_this.regionModels) {
                _this.toastr.error('No records were found to list', 'Error', {
                    closeButton: true,
                });
            }
            else {
                _this.dataSource.data = _this.regionModels;
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
    ListRegionComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ListRegionComponent.prototype.editRegion = function (regionModel) {
        if (regionModel) {
            this.router.navigate(['/regions/edit', regionModel.RegionId], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['/regions/edit', 0]);
        }
    };
    ListRegionComponent.prototype.confirmDelete = function (regionModel) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AngConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            _this.loadingIndicator = true;
            if (result) {
                _this.regionService.deleteRegion(regionModel)
                    .subscribe(function (results) {
                    _this.loadingIndicator = false;
                    _this.dataSource.data = _this.dataSource.data.filter(function (item) { return item !== regionModel; });
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
    ], ListRegionComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ListRegionComponent.prototype, "sort", void 0);
    ListRegionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-region',
            template: __webpack_require__(/*! ./list-region.component.html */ "./src/app/components/setting/address-tabs/region/list/list-region.component.html"),
            styles: [__webpack_require__(/*! ./list-region.component.css */ "./src/app/components/setting/address-tabs/region/list/list-region.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _region_service__WEBPACK_IMPORTED_MODULE_3__["RegionService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ListRegionComponent);
    return ListRegionComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/address-tabs/region/region-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/region/region-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: RegionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionRoutingModule", function() { return RegionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _region_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./region.component */ "./src/app/components/setting/address-tabs/region/region.component.ts");
/* harmony import */ var _edit_edit_region_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit-region.component */ "./src/app/components/setting/address-tabs/region/edit/edit-region.component.ts");
/* harmony import */ var _list_list_region_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list-region.component */ "./src/app/components/setting/address-tabs/region/list/list-region.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '', component: _region_component__WEBPACK_IMPORTED_MODULE_2__["RegionComponent"], children: [
            { path: '', component: _list_list_region_component__WEBPACK_IMPORTED_MODULE_4__["ListRegionComponent"] },
            { path: 'list', component: _list_list_region_component__WEBPACK_IMPORTED_MODULE_4__["ListRegionComponent"] },
            { path: 'edit/:id', component: _edit_edit_region_component__WEBPACK_IMPORTED_MODULE_3__["EditRegionComponent"] }
        ]
    }
];
var RegionRoutingModule = /** @class */ (function () {
    function RegionRoutingModule() {
    }
    RegionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RegionRoutingModule);
    return RegionRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/setting/address-tabs/region/region.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/region/region.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/setting/address-tabs/region/region.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/region/region.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/setting/address-tabs/region/region.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/region/region.component.ts ***!
  \****************************************************************************/
/*! exports provided: RegionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionComponent", function() { return RegionComponent; });
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

var RegionComponent = /** @class */ (function () {
    function RegionComponent() {
    }
    RegionComponent.prototype.ngOnInit = function () {
    };
    RegionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-region',
            template: __webpack_require__(/*! ./region.component.html */ "./src/app/components/setting/address-tabs/region/region.component.html"),
            styles: [__webpack_require__(/*! ./region.component.css */ "./src/app/components/setting/address-tabs/region/region.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegionComponent);
    return RegionComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/address-tabs/region/region.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/region/region.module.ts ***!
  \*************************************************************************/
/*! exports provided: RegionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionModule", function() { return RegionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _region_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./region-routing.module */ "./src/app/components/setting/address-tabs/region/region-routing.module.ts");
/* harmony import */ var _list_list_region_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list-region.component */ "./src/app/components/setting/address-tabs/region/list/list-region.component.ts");
/* harmony import */ var _edit_edit_region_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit-region.component */ "./src/app/components/setting/address-tabs/region/edit/edit-region.component.ts");
/* harmony import */ var _region_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./region.component */ "./src/app/components/setting/address-tabs/region/region.component.ts");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RegionModule = /** @class */ (function () {
    function RegionModule() {
    }
    RegionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _region_routing_module__WEBPACK_IMPORTED_MODULE_1__["RegionRoutingModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_list_list_region_component__WEBPACK_IMPORTED_MODULE_2__["ListRegionComponent"], _edit_edit_region_component__WEBPACK_IMPORTED_MODULE_3__["EditRegionComponent"], _region_component__WEBPACK_IMPORTED_MODULE_4__["RegionComponent"]],
            exports: [_list_list_region_component__WEBPACK_IMPORTED_MODULE_2__["ListRegionComponent"], _edit_edit_region_component__WEBPACK_IMPORTED_MODULE_3__["EditRegionComponent"], _region_component__WEBPACK_IMPORTED_MODULE_4__["RegionComponent"]]
        })
    ], RegionModule);
    return RegionModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-setting-address-tabs-address-module~app-components-setting-address-tabs-region-region~c004adf2.js.map