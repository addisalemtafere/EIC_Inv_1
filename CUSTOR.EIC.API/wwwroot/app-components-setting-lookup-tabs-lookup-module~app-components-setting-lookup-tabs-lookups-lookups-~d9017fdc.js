(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-setting-lookup-tabs-lookup-module~app-components-setting-lookup-tabs-lookups-lookups-~d9017fdc"],{

/***/ "./src/app/components/setting/lookup-tabs/lookups/edit/edit-lookups.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookups/edit/edit-lookups.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containerX\">\r\n  <mat-card>\r\n    <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>\r\n    <mat-card-header>\r\n      <mat-card-title>\r\n          Lookups\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <br />\r\n    <mat-card-content>\r\n      <form #form=\"ngForm\" [formGroup]=\"subLookupsForm\" novalidate (ngSubmit)=\"onSubmit()\" fxLayout=\"column\"\r\n            autocomplete=\"off\">\r\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n          <mat-form-field  style=\"width: 150px\">\r\n            <mat-label>Lookup Type:</mat-label>\r\n            <mat-select formControlName=\"cLookUpTypeId\" [compareWith]=\"compareIds\" required>\r\n              <mat-option *ngFor=\"let lookuptypes of lookuptypesModels\" [value]=\"lookuptypes.LookUpTypeId\">\r\n                <span>{{lookuptypes.DescriptionEnglish}}</span>\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <mat-label>LookupId:</mat-label>\r\n            <input matInput formControlName=\"cLookupId\"  required maxlength=\"10\" />\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <mat-label>Amharic:</mat-label>\r\n            <input matInput formControlName=\"cAmharic\"  required maxlength=\"150\" />\r\n            <mat-error *ngIf=\"Amharic.hasError('required')\">\r\n              Please enter Description amharic\r\n            </mat-error>\r\n            <mat-error *ngIf=\"Amharic.hasError('pattern')\">\r\n              Only amharic alphabetic charcters are allowed!\r\n            </mat-error>\r\n            <mat-error *ngIf=\"!Amharic.hasError('maxlength')\">\r\n              Maximum charcters length is 150!\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <mat-label >English:</mat-label>\r\n            <input matInput formControlName=\"cEnglish\" required maxlength=\"200\" />\r\n            <mat-error *ngIf=\"English.hasError('required')\">\r\n              Please enter service name english\r\n            </mat-error>\r\n            <mat-error *ngIf=\"English.hasError('pattern')\">\r\n              Only alphabetic charcters are allowed!\r\n            </mat-error>\r\n            <mat-error *ngIf=\"!English.hasError('maxlength')\">\r\n              Maximum charcters length is 200!\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div mat-dialog-actions>\r\n          <button [disabled]=\"form.invalid\" mat-raised-button type=\"submit\" color=\"primary\">\r\n            Save\r\n          </button>\r\n          <button mat-raised-button (click)=\"onBack()\" color=\"warn\" type=\"button\">\r\n            Cancel\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/lookups/edit/edit-lookups.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookups/edit/edit-lookups.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* div {\r\n  display: flex;\r\n} */\nmat-card {\n  max-width: 500px;\n  margin: 10px auto;\n  text-align: center; }\nmat-checkbox {\n  max-width: 500px;\n  margin: 2em auto;\n  text-align: left; }\n/*mat-form-field  {*/\n/*max-width: 400px;*/\n/*margin-right: 10px;*/\n/*font-size: 16px;*/\n/*}*/\n.row {\n  text-align: left;\n  margin-bottom: 15px; }\n"

/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/lookups/edit/edit-lookups.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookups/edit/edit-lookups.component.ts ***!
  \***************************************************************************************/
/*! exports provided: EditLookupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditLookupsComponent", function() { return EditLookupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custor_helpers_compare__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @custor/helpers/compare */ "./src/@custor/helpers/compare.ts");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _lookups_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lookups.service */ "./src/app/components/setting/lookup-tabs/lookups/lookups.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EditLookupsComponent = /** @class */ (function () {
    function EditLookupsComponent(activatedRoute, router, http, config, sublookupsService, errMsg, toastr, fb) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.http = http;
        this.config = config;
        this.sublookupsService = sublookupsService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.fb = fb;
        this.isNewSubLookups = false;
        this.lookuptypesModels = [];
        this.sublookups = {};
        // initialize the form
        this.initForm();
        this.initStaticData('en');
    }
    EditLookupsComponent.prototype.ngOnInit = function () {
        this.getLookupstype();
        var id = this.activatedRoute.snapshot.params['id'];
        if (id < 1) {
            this.isNewSubLookups = true;
            this.title = 'Create a new Lookup';
            /*this.getService();*/
            return;
        }
        if (id) {
            this.getLookup(id);
        }
    };
    EditLookupsComponent.prototype.getLookupstype = function () {
        var _this = this;
        this.sublookupsService.getLookuptype()
            .subscribe(function (result) {
            _this.lookuptypesModels = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    EditLookupsComponent.prototype.initStaticData = function (currentLang) {
        /*let SecType: SectorType = new SectorType();
        SectorTypes.forEach(pair => {
          SecType = {
            'Id': pair.Id.toString(),
            'DescriptionEnglish': pair.DescriptionEnglish,
            'Amharic': pair.Amharic
          };
          this.sectorTypes.push(SecType);
        });*/
    };
    EditLookupsComponent.prototype.getLookup = function (id) {
        var _this = this;
        this.isNewSubLookups = false;
        this.loadingIndicator = true;
        this.sublookupsSub = this.sublookupsService
            .getLookup(id)
            .subscribe(function (result) {
            _this.sublookups = result;
            _this.updateForm();
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
        this.loadingIndicator = false;
    };
    EditLookupsComponent.prototype.updateForm = function () {
        // console.log(this.sublookups);
        this.subLookupsForm.patchValue({
            cAmharic: this.sublookups.Amharic == null ? '' : this.sublookups.Amharic.toString(),
            cEnglish: this.sublookups.English == null ? '' : this.sublookups.English.toString(),
            cLookUpTypeId: this.sublookups.LookUpTypeId,
            cLookupId: this.sublookups.LookupId,
        });
        // },4000);
        this.isNewSubLookups = false;
    };
    EditLookupsComponent.prototype.initForm = function () {
        this.subLookupsForm = this.fb.group({
            cAmharic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(150),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^([ \u1200-\u137F])+$')])],
            cEnglish: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(200),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z /,]+$')])],
            cLookUpTypeId: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cLookupId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    EditLookupsComponent.prototype.compareIds = function (id1, id2) {
        var a1 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_5__["determineId"])(id1);
        var a2 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_5__["determineId"])(id2);
        return a1 === a2;
    };
    EditLookupsComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.subLookupsForm.valid) {
            return;
        }
        if (this.isNewSubLookups) {
            /* if (this.checkRecordExistance()) {
               this.toastr.show(
                 'Record Exist', 'message', {
                   closeButton: true
                 })
               return;
             }*/
            this.loadingIndicator = true;
        }
        return this.sublookupsService.saveLookups(this.getEditedLookups()).subscribe(function (sublookups) {
            _this.saveCompleted(sublookups);
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
    EditLookupsComponent.prototype.saveCompleted = function (sublookups) {
        if (sublookups) {
            this.sublookups = sublookups;
        }
        this.loadingIndicator = false;
        this.toastr.success('Record saved successfully!');
        //this.router.navigate(['sublookups/list']);
        window.history.back();
    };
    EditLookupsComponent.prototype.handleError = function (err) {
        this.loadingIndicator = false;
        this.toastr.error(this.errMsg.getError(err));
        this.loadingIndicator = false;
    };
    EditLookupsComponent.prototype.getEditedLookups = function () {
        var formModel = this.subLookupsForm.value;
        return {
            LookupId: this.isNewSubLookups ? null : this.sublookups.LookupId,
            LookUpTypeId: formModel.cLookUpTypeId,
            Amharic: formModel.cAmharic,
            English: formModel.cEnglish,
            DescriptionEnglish: null
        };
    };
    EditLookupsComponent.prototype.ngOnDestroy = function () {
        // this.sublookupsSub.unsubscribe();
    };
    EditLookupsComponent.prototype.onBack = function () {
        window.history.back();
    };
    Object.defineProperty(EditLookupsComponent.prototype, "Amharic", {
        get: function () {
            return this.subLookupsForm.get('cAmharic');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditLookupsComponent.prototype, "English", {
        get: function () {
            return this.subLookupsForm.get('cEnglish');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_6__["Subscription"])
    ], EditLookupsComponent.prototype, "sublookupsSub", void 0);
    EditLookupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-lookups',
            template: __webpack_require__(/*! ./edit-lookups.component.html */ "./src/app/components/setting/lookup-tabs/lookups/edit/edit-lookups.component.html"),
            styles: [__webpack_require__(/*! ./edit-lookups.component.scss */ "./src/app/components/setting/lookup-tabs/lookups/edit/edit-lookups.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_7__["AppConfiguration"],
            _lookups_service__WEBPACK_IMPORTED_MODULE_9__["LookupsService"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EditLookupsComponent);
    return EditLookupsComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/lookups/list/list-lookups.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookups/list/list-lookups.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:700px\" class=\"margin-3\">\r\n  <div class=\"mat-elevation-z8\">\r\n    <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>\r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n      <ng-container matColumnDef=\"LookupTypes\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"100px\">Lookup Type</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxFlex=\"100px\"> {{row.DescriptionEnglish}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"LookupId\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"50px\">Id</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxFlex=\"50px\"> {{row.LookupId}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Amharic\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"180px\">Amharic</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxFlex=\"180px\"> {{row.Amharic}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"English\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"180px\">English</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxFlex=\"180px\"> {{row.English}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"actions\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"100px\">\r\n          <button  mat-button color=\"primary\"  (click)=\"editLookups()\">\r\n            <mat-icon class=\"mat-button-icon\">add</mat-icon>{{'common.commands.Add' | translate}}\r\n          </button>\r\n        </mat-header-cell>\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"100px\">\r\n        </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let Lookups\" fxFlex=\"100px\">\r\n          <button mat-icon-button (click)=\"editLookups(Lookups)\" type=\"button\">\r\n            <mat-icon>edit</mat-icon>\r\n          </button>\r\n          <button mat-icon-button (click)=\"confirmDelete(Lookups)\" type=\"button\">\r\n            <mat-icon color=\"warn\">delete</mat-icon>\r\n          </button>\r\n        </mat-cell>\r\n      </ng-container>\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/lookups/list/list-lookups.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookups/list/list-lookups.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/lookups/list/list-lookups.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookups/list/list-lookups.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ListLookupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListLookupsComponent", function() { return ListLookupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/helpers/utilities */ "./src/@custor/helpers/utilities.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @custor/components/confirm-dialog/confirm-dialog.component */ "./src/@custor/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _lookups_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lookups.service */ "./src/app/components/setting/lookup-tabs/lookups/lookups.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ListLookupsComponent = /** @class */ (function () {
    function ListLookupsComponent(http, subLookupsService, errMsg, toastr, dialog, router, route) {
        this.http = http;
        this.subLookupsService = subLookupsService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.displayedColumns = ['LookupId', 'LookupTypes', 'Amharic', 'English', 'actions'];
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    ListLookupsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListLookupsComponent.prototype.ngOnInit = function () {
        this.getLookups();
    };
    ListLookupsComponent.prototype.getLookups = function () {
        var _this = this;
        this.loadingIndicator = true;
        this.subLookupsService.getLookups()
            .subscribe(function (result) {
            _this.subLookupsModels = result;
            // console.log(this.subLookupsModels);
            if (!_this.subLookupsModels) {
                _this.toastr.error('No records were found to list', 'Error', {
                    closeButton: true,
                });
            }
            else {
                _this.dataSource.data = _this.subLookupsModels;
            }
        }, function (err) {
            if (!_this.errMsg.message) {
                _this.toastr.error('Error! Please check if the Web lookups is running');
            }
            else {
                _this.toastr.error(_this.errMsg.getError(err));
            }
        });
        this.loadingIndicator = false;
    };
    ListLookupsComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ListLookupsComponent.prototype.editLookups = function (subLookupsModel) {
        if (subLookupsModel) {
            this.router.navigate(['/lookups/edit', subLookupsModel.LookupId], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['/lookups/edit', 0]);
        }
    };
    ListLookupsComponent.prototype.confirmDelete = function (subLookupsModel) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AngConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            _this.loadingIndicator = true;
            if (result) {
                _this.subLookupsService.deleteLookups(subLookupsModel)
                    .subscribe(function (results) {
                    _this.loadingIndicator = false;
                    _this.dataSource.data = _this.dataSource.data.filter(function (item) { return item !== subLookupsModel; });
                }, function (error) {
                    // tslint:disable-next-line:max-line-length
                    _this.toastr.error("An error occured whilst deleting the Service.\r\nError: \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_4__["Utilities"].getHttpResponseMessage(error) + "\"", 'Delete Error');
                });
            }
            _this.loadingIndicator = false;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ListLookupsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ListLookupsComponent.prototype, "sort", void 0);
    ListLookupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-lookups',
            template: __webpack_require__(/*! ./list-lookups.component.html */ "./src/app/components/setting/lookup-tabs/lookups/list/list-lookups.component.html"),
            styles: [__webpack_require__(/*! ./list-lookups.component.scss */ "./src/app/components/setting/lookup-tabs/lookups/list/list-lookups.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _lookups_service__WEBPACK_IMPORTED_MODULE_8__["LookupsService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], ListLookupsComponent);
    return ListLookupsComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/lookups/lookups-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookups/lookups-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: LookupsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupsRoutingModule", function() { return LookupsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_lookups_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list-lookups.component */ "./src/app/components/setting/lookup-tabs/lookups/list/list-lookups.component.ts");
/* harmony import */ var _edit_edit_lookups_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit-lookups.component */ "./src/app/components/setting/lookup-tabs/lookups/edit/edit-lookups.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LookupsRoute = [
    { path: 'list', component: _list_list_lookups_component__WEBPACK_IMPORTED_MODULE_2__["ListLookupsComponent"] },
    { path: 'edit/:id', component: _edit_edit_lookups_component__WEBPACK_IMPORTED_MODULE_3__["EditLookupsComponent"] }
];
var LookupsRoutingModule = /** @class */ (function () {
    function LookupsRoutingModule() {
    }
    LookupsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(LookupsRoute)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LookupsRoutingModule);
    return LookupsRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/lookups/lookups.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookups/lookups.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/lookups/lookups.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookups/lookups.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/lookups/lookups.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookups/lookups.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LookupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupsComponent", function() { return LookupsComponent; });
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

var LookupsComponent = /** @class */ (function () {
    function LookupsComponent() {
    }
    LookupsComponent.prototype.ngOnInit = function () {
    };
    LookupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lookups',
            template: __webpack_require__(/*! ./lookups.component.html */ "./src/app/components/setting/lookup-tabs/lookups/lookups.component.html"),
            styles: [__webpack_require__(/*! ./lookups.component.scss */ "./src/app/components/setting/lookup-tabs/lookups/lookups.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LookupsComponent);
    return LookupsComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/lookups/lookups.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookups/lookups.module.ts ***!
  \**************************************************************************/
/*! exports provided: LookupsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupsModule", function() { return LookupsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _list_list_lookups_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list-lookups.component */ "./src/app/components/setting/lookup-tabs/lookups/list/list-lookups.component.ts");
/* harmony import */ var _edit_edit_lookups_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit-lookups.component */ "./src/app/components/setting/lookup-tabs/lookups/edit/edit-lookups.component.ts");
/* harmony import */ var _lookups_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lookups.component */ "./src/app/components/setting/lookup-tabs/lookups/lookups.component.ts");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _lookups_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lookups-routing.module */ "./src/app/components/setting/lookup-tabs/lookups/lookups-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LookupsModule = /** @class */ (function () {
    function LookupsModule() {
    }
    LookupsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _lookups_routing_module__WEBPACK_IMPORTED_MODULE_6__["LookupsRoutingModule"]
            ],
            declarations: [_list_list_lookups_component__WEBPACK_IMPORTED_MODULE_2__["ListLookupsComponent"], _edit_edit_lookups_component__WEBPACK_IMPORTED_MODULE_3__["EditLookupsComponent"], _lookups_component__WEBPACK_IMPORTED_MODULE_4__["LookupsComponent"]],
            exports: [_list_list_lookups_component__WEBPACK_IMPORTED_MODULE_2__["ListLookupsComponent"], _edit_edit_lookups_component__WEBPACK_IMPORTED_MODULE_3__["EditLookupsComponent"], _lookups_component__WEBPACK_IMPORTED_MODULE_4__["LookupsComponent"]]
        })
    ], LookupsModule);
    return LookupsModule;
}());



/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/lookups/lookups.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookups/lookups.service.ts ***!
  \***************************************************************************/
/*! exports provided: LookupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupsService", function() { return LookupsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _model_lookups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../model/lookups */ "./src/app/model/lookups.ts");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LookupsService = /** @class */ (function () {
    function LookupsService(httpClient, config, errMsg) {
        this.httpClient = httpClient;
        this.config = config;
        this.errMsg = errMsg;
        this.lookupsList = [];
        this.subLookuptypesModel = new _model_lookups__WEBPACK_IMPORTED_MODULE_3__["LookupsModel"]();
        this.lookuptypesModelList = [];
    }
    LookupsService.prototype.getLookup = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('lookupById', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (lookuprdata) {
            _this.subLookuptypesModel = lookuprdata;
            return _this.subLookuptypesModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    LookupsService.prototype.getLookups = function () {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('lookup')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (lookupsList) { return _this.lookupsList = lookupsList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    LookupsService.prototype.saveLookups = function (subLookuptypesModel) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('lookup'), subLookuptypesModel).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (LookupsData) {
            _this.subLookuptypesModel = LookupsData;
            return _this.subLookuptypesModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    LookupsService.prototype.deleteLookups = function (subLookuptypesModel) {
        return this.httpClient.delete(this.config.urls.url('lookup', subLookuptypesModel.LookupId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parsePromiseResponseError));
    };
    LookupsService.prototype.getLookuptype = function () {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('lookuptype')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (lookuptypesList) {
            _this.lookuptypesModelList = lookuptypesList;
            return _this.lookuptypesModelList;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    LookupsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_4__["AppConfiguration"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"]])
    ], LookupsService);
    return LookupsService;
}());



/***/ }),

/***/ "./src/app/model/lookups.ts":
/*!**********************************!*\
  !*** ./src/app/model/lookups.ts ***!
  \**********************************/
/*! exports provided: LookupsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupsModel", function() { return LookupsModel; });
var LookupsModel = /** @class */ (function () {
    function LookupsModel(LookupId, LookUpTypeId, Amharic, English, DescriptionEnglish) {
        this.LookupId = LookupId;
        this.LookUpTypeId = LookUpTypeId;
        this.Amharic = Amharic;
        this.English = English;
        this.DescriptionEnglish = DescriptionEnglish;
    }
    return LookupsModel;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-setting-lookup-tabs-lookup-module~app-components-setting-lookup-tabs-lookups-lookups-~d9017fdc.js.map