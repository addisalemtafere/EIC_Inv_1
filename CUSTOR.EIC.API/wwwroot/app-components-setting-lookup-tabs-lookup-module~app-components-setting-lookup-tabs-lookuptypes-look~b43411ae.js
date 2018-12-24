(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-setting-lookup-tabs-lookup-module~app-components-setting-lookup-tabs-lookuptypes-look~b43411ae"],{

/***/ "./src/app/components/setting/lookup-tabs/lookuptypes/edit/edit-lookuptypes.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookuptypes/edit/edit-lookuptypes.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containerX\">\r\n\r\n  <mat-card>\r\n    <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>\r\n    <mat-card-header>\r\n      <mat-card-title>\r\n        <!-- <mat-icon class=\"mat-button-icon\">person_add</mat-icon> Edit Customer -->\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <br />\r\n    <br />\r\n\r\n    <mat-card-content>\r\n      <form #form=\"ngForm\" [formGroup]=\"lookuptypesForm\" novalidate (ngSubmit)=\"onSubmit()\" fxLayout=\"column\"\r\n            autocomplete=\"off\">\r\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n          <!--<mat-form-field>-->\r\n            <!--<mat-label>Id:</mat-label>-->\r\n            <!--<input matInput formControlName=\"cLookUpTypeId\"  required maxlength=\"10\" />-->\r\n          <!--</mat-form-field>-->\r\n          <mat-form-field>\r\n            <mat-label>Description:</mat-label>\r\n            <input matInput formControlName=\"cDescription\"  required maxlength=\"150\" />\r\n            <mat-error *ngIf=\"Description.hasError('required')\">\r\n              Please enter Description amharic\r\n            </mat-error>\r\n            <mat-error *ngIf=\"Description.hasError('pattern')\">\r\n              Only amharic alphabetic charcters are allowed!\r\n            </mat-error>\r\n            <mat-error *ngIf=\"!Description.hasError('maxlength')\">\r\n              Maximum charcters length is 150!\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <mat-label >Description English:</mat-label>\r\n            <input matInput formControlName=\"cDescriptionEnglish\" required maxlength=\"200\" />\r\n            <mat-error *ngIf=\"DescriptionEnglish.hasError('required')\">\r\n              Please enter service name english\r\n            </mat-error>\r\n            <mat-error *ngIf=\"DescriptionEnglish.hasError('pattern')\">\r\n              Only alphabetic charcters are allowed!\r\n            </mat-error>\r\n            <mat-error *ngIf=\"!DescriptionEnglish.hasError('maxlength')\">\r\n              Maximum charcters length is 200!\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div mat-dialog-actions>\r\n          <button [disabled]=\"form.invalid\" mat-raised-button type=\"submit\" color=\"primary\">\r\n            Save\r\n          </button>\r\n          <button mat-raised-button (click)=\"onBack()\" color=\"warn\" type=\"button\">\r\n            Cancel\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/lookuptypes/edit/edit-lookuptypes.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookuptypes/edit/edit-lookuptypes.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* div {\r\n  display: flex;\r\n} */\nmat-card {\n  max-width: 500px;\n  margin: 10px auto;\n  text-align: center; }\nmat-checkbox {\n  max-width: 500px;\n  margin: 2em auto;\n  text-align: left; }\n/*mat-form-field  {*/\n/*max-width: 400px;*/\n/*margin-right: 10px;*/\n/*font-size: 16px;*/\n/*}*/\n.row {\n  text-align: left;\n  margin-bottom: 15px; }\n"

/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/lookuptypes/edit/edit-lookuptypes.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookuptypes/edit/edit-lookuptypes.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: EditLookuptypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditLookuptypesComponent", function() { return EditLookuptypesComponent; });
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
/* harmony import */ var _lookuptypes_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lookuptypes.service */ "./src/app/components/setting/lookup-tabs/lookuptypes/lookuptypes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EditLookuptypesComponent = /** @class */ (function () {
    function EditLookuptypesComponent(activatedRoute, router, http, config, lookuptypesService, errMsg, toastr, fb) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.http = http;
        this.config = config;
        this.lookuptypesService = lookuptypesService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.fb = fb;
        /*serviceId:number;*/
        this.isNewLookuptypes = false;
        this.lookuptypes = {};
        // initialize the form
        this.initForm();
        this.initStaticData('en');
    }
    EditLookuptypesComponent.prototype.ngOnInit = function () {
        var id = this.activatedRoute.snapshot.params['id'];
        if (id < 1) {
            this.isNewLookuptypes = true;
            this.title = 'Create a new Lookup Types';
            /*this.getService();*/
            return;
        }
        if (id) {
            // to-do
            // get the selected customer either through @Input or shared service
            this.getLookuptypes(id);
        }
    };
    EditLookuptypesComponent.prototype.initStaticData = function (currentLang) {
        // let SecType: LookuptypesType = new LookuptypesType();
        // LookuptypesTypes.forEach(pair => {
        //   SecType = {
        //     'Id': pair.Id.toString(),
        //     'DescriptionEnglish': pair.DescriptionEnglish,
        //     'Description': pair.Description
        //   };
        //   this.sectorTypes.push(SecType);
        // });
    };
    EditLookuptypesComponent.prototype.getLookuptypes = function (id) {
        var _this = this;
        this.isNewLookuptypes = false;
        this.loadingIndicator = true;
        this.lookuptypesSub = this.lookuptypesService
            .getlookuptypes(id)
            .subscribe(function (result) {
            _this.lookuptypes = result;
            _this.updateForm();
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
        this.loadingIndicator = false;
    };
    EditLookuptypesComponent.prototype.updateForm = function () {
        this.lookuptypesForm.setValue({
            // cLookUpTypeId: this.lookuptypes.LookUpTypeId == null ? '' : this.lookuptypes.LookUpTypeId.toString(),
            cDescription: this.lookuptypes.Description == null ? '' : this.lookuptypes.Description.toString(),
            cDescriptionEnglish: this.lookuptypes.DescriptionEnglish == null ? '' : this.lookuptypes.DescriptionEnglish.toString(),
        });
        // },4000);
        this.isNewLookuptypes = false;
    };
    EditLookuptypesComponent.prototype.initForm = function () {
        this.lookuptypesForm = this.fb.group({
            cDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(150),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^([ \u1200-\u137F])+$')])],
            cDescriptionEnglish: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(200),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z /,]+$')])]
        });
    };
    EditLookuptypesComponent.prototype.compareIds = function (id1, id2) {
        var a1 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_5__["determineId"])(id1);
        var a2 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_5__["determineId"])(id2);
        return a1 === a2;
    };
    EditLookuptypesComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.lookuptypesForm.valid) {
            return;
        }
        if (this.isNewLookuptypes) {
            /* if (this.checkRecordExistance()) {
               this.toastr.show(
                 'Record Exist', 'message', {
                   closeButton: true
                 })
               return;
             }*/
            this.loadingIndicator = true;
        }
        return this.lookuptypesService.savelookuptypes(this.getEditedLookuptypes()).subscribe(function (lookuptypes) {
            _this.saveCompleted(lookuptypes);
        }, function (err) { return _this.handleError(err); });
    };
    /* checkRecordExistance(): boolean {
       const formModel = this.servicesForm.value;
       this.lookuptypesSub = this.lookuptypesService
         .getServices(formModel.cServiceNameEnglish, formModel.cServiceType)
         .subscribe(result => {
           this.lookuptypes = result
         })
       if (this.lookuptypes.ServiceId == null) {
         return false;
       } else {
         return true;
       }
     }*/
    EditLookuptypesComponent.prototype.saveCompleted = function (lookuptypes) {
        if (lookuptypes) {
            this.lookuptypes = lookuptypes;
        }
        this.loadingIndicator = false;
        this.toastr.success('Record saved successfully!');
        // this.router.navigate(['lookuptypes/list']);
        window.history.back();
    };
    EditLookuptypesComponent.prototype.handleError = function (err) {
        this.loadingIndicator = false;
        this.toastr.error(this.errMsg.getError(err));
        this.loadingIndicator = false;
    };
    EditLookuptypesComponent.prototype.getEditedLookuptypes = function () {
        var formModel = this.lookuptypesForm.value;
        return {
            LookUpTypeId: this.isNewLookuptypes ? 0 : this.lookuptypes.LookUpTypeId,
            Description: formModel.cDescription,
            DescriptionEnglish: formModel.cDescriptionEnglish,
        };
    };
    EditLookuptypesComponent.prototype.ngOnDestroy = function () {
        // this.lookuptypesSub.unsubscribe();
    };
    EditLookuptypesComponent.prototype.onBack = function () {
        window.history.back();
    };
    Object.defineProperty(EditLookuptypesComponent.prototype, "Description", {
        get: function () {
            return this.lookuptypesForm.get('cDescription');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditLookuptypesComponent.prototype, "DescriptionEnglish", {
        get: function () {
            return this.lookuptypesForm.get('cDescriptionEnglish');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_6__["Subscription"])
    ], EditLookuptypesComponent.prototype, "lookuptypesSub", void 0);
    EditLookuptypesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-lookuptypes',
            template: __webpack_require__(/*! ./edit-lookuptypes.component.html */ "./src/app/components/setting/lookup-tabs/lookuptypes/edit/edit-lookuptypes.component.html"),
            styles: [__webpack_require__(/*! ./edit-lookuptypes.component.scss */ "./src/app/components/setting/lookup-tabs/lookuptypes/edit/edit-lookuptypes.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_7__["AppConfiguration"],
            _lookuptypes_service__WEBPACK_IMPORTED_MODULE_9__["LookuptypesService"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EditLookuptypesComponent);
    return EditLookuptypesComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/lookuptypes/list/list-lookuptypes.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookuptypes/list/list-lookuptypes.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:600px;\" class=\"margin-3\">\r\n\r\n  <div class=\"mat-elevation-z8\">\r\n    <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>\r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n      <ng-container matColumnDef=\"LookUpTypeId\" >\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"100px\">Id</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxFlex=\"100px\"> {{row.LookUpTypeId}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Description\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"180px\">Description</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxFlex=\"180px\"> {{row.Description}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"DescriptionEnglish\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"180px\">Description English</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxFlex=\"180px\"> {{row.DescriptionEnglish}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"actions\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"100px\">\r\n          <button  mat-button color=\"primary\"  (click)=\"editLooluptypes()\">\r\n            <mat-icon class=\"mat-button-icon\">add</mat-icon>{{'common.commands.Add' | translate}}\r\n          </button>\r\n        </mat-header-cell>\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"100px\">\r\n        </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let lookuptypes\" fxFlex=\"100px\">\r\n          <button mat-icon-button (click)=\"editLooluptypes(lookuptypes)\" type=\"button\">\r\n            <mat-icon>edit</mat-icon>\r\n          </button>\r\n          <button mat-icon-button (click)=\"confirmDelete(lookuptypes)\" type=\"button\">\r\n            <mat-icon color=\"warn\">delete</mat-icon>\r\n          </button>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/lookuptypes/list/list-lookuptypes.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookuptypes/list/list-lookuptypes.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/lookuptypes/list/list-lookuptypes.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookuptypes/list/list-lookuptypes.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ListLookuptypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListLookuptypesComponent", function() { return ListLookuptypesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/helpers/utilities */ "./src/@custor/helpers/utilities.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @custor/components/confirm-dialog/confirm-dialog.component */ "./src/@custor/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _lookuptypes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lookuptypes.service */ "./src/app/components/setting/lookup-tabs/lookuptypes/lookuptypes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ListLookuptypesComponent = /** @class */ (function () {
    function ListLookuptypesComponent(http, lookuptypesService, errMsg, toastr, dialog, router, route) {
        this.http = http;
        this.lookuptypesService = lookuptypesService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.displayedColumns = ['LookUpTypeId', 'Description', 'DescriptionEnglish', 'actions'];
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    ListLookuptypesComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListLookuptypesComponent.prototype.ngOnInit = function () {
        this.getLookUpTypes();
    };
    ListLookuptypesComponent.prototype.getLookUpTypes = function () {
        var _this = this;
        this.loadingIndicator = true;
        this.lookuptypesService.getlookuptypess()
            .subscribe(function (result) {
            _this.lookuptypesModels = result;
            if (!_this.lookuptypesModels) {
                _this.toastr.error('No records were found to list', 'Error', {
                    closeButton: true,
                });
            }
            else {
                _this.dataSource.data = _this.lookuptypesModels;
            }
        }, function (err) {
            if (!_this.errMsg.message) {
                _this.toastr.error('Error! Please check if the Web Lookup Types is running');
            }
            else {
                _this.toastr.error(_this.errMsg.getError(err));
            }
        });
        this.loadingIndicator = false;
    };
    ListLookuptypesComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ListLookuptypesComponent.prototype.editLooluptypes = function (lookuptypesModel) {
        if (lookuptypesModel) {
            this.router.navigate(['/lookuptypes/edit', lookuptypesModel.LookUpTypeId], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['/lookuptypes/edit', 0]);
        }
    };
    ListLookuptypesComponent.prototype.confirmDelete = function (lookuptypesModel) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AngConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            _this.loadingIndicator = true;
            if (result) {
                _this.lookuptypesService.deletelookuptypes(lookuptypesModel)
                    .subscribe(function (results) {
                    _this.loadingIndicator = false;
                    _this.dataSource.data = _this.dataSource.data.filter(function (item) { return item !== lookuptypesModel; });
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
    ], ListLookuptypesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ListLookuptypesComponent.prototype, "sort", void 0);
    ListLookuptypesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-lookuptypes',
            template: __webpack_require__(/*! ./list-lookuptypes.component.html */ "./src/app/components/setting/lookup-tabs/lookuptypes/list/list-lookuptypes.component.html"),
            styles: [__webpack_require__(/*! ./list-lookuptypes.component.scss */ "./src/app/components/setting/lookup-tabs/lookuptypes/list/list-lookuptypes.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _lookuptypes_service__WEBPACK_IMPORTED_MODULE_8__["LookuptypesService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], ListLookuptypesComponent);
    return ListLookuptypesComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/lookuptypes/lookuptypes-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookuptypes/lookuptypes-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: LookuptypesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookuptypesRoutingModule", function() { return LookuptypesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_lookuptypes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list-lookuptypes.component */ "./src/app/components/setting/lookup-tabs/lookuptypes/list/list-lookuptypes.component.ts");
/* harmony import */ var _edit_edit_lookuptypes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit-lookuptypes.component */ "./src/app/components/setting/lookup-tabs/lookuptypes/edit/edit-lookuptypes.component.ts");
/* harmony import */ var _lookuptypes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lookuptypes.component */ "./src/app/components/setting/lookup-tabs/lookuptypes/lookuptypes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var lookupstypeRoutes = [
    {
        path: '', component: _lookuptypes_component__WEBPACK_IMPORTED_MODULE_4__["LookuptypesComponent"], children: [
            { path: 'list', component: _list_list_lookuptypes_component__WEBPACK_IMPORTED_MODULE_2__["ListLookuptypesComponent"] },
            { path: 'edit/:id', component: _edit_edit_lookuptypes_component__WEBPACK_IMPORTED_MODULE_3__["EditLookuptypesComponent"] }
        ]
    }
];
var LookuptypesRoutingModule = /** @class */ (function () {
    function LookuptypesRoutingModule() {
    }
    LookuptypesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(lookupstypeRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LookuptypesRoutingModule);
    return LookuptypesRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/lookuptypes/lookuptypes.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookuptypes/lookuptypes.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/lookuptypes/lookuptypes.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookuptypes/lookuptypes.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/lookuptypes/lookuptypes.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookuptypes/lookuptypes.component.ts ***!
  \*************************************************************************************/
/*! exports provided: LookuptypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookuptypesComponent", function() { return LookuptypesComponent; });
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

var LookuptypesComponent = /** @class */ (function () {
    function LookuptypesComponent() {
    }
    LookuptypesComponent.prototype.ngOnInit = function () {
    };
    LookuptypesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lookuptypes',
            template: __webpack_require__(/*! ./lookuptypes.component.html */ "./src/app/components/setting/lookup-tabs/lookuptypes/lookuptypes.component.html"),
            styles: [__webpack_require__(/*! ./lookuptypes.component.scss */ "./src/app/components/setting/lookup-tabs/lookuptypes/lookuptypes.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LookuptypesComponent);
    return LookuptypesComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/lookuptypes/lookuptypes.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookuptypes/lookuptypes.module.ts ***!
  \**********************************************************************************/
/*! exports provided: LookupTypesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupTypesModule", function() { return LookupTypesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _list_list_lookuptypes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list-lookuptypes.component */ "./src/app/components/setting/lookup-tabs/lookuptypes/list/list-lookuptypes.component.ts");
/* harmony import */ var _edit_edit_lookuptypes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit-lookuptypes.component */ "./src/app/components/setting/lookup-tabs/lookuptypes/edit/edit-lookuptypes.component.ts");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _lookuptypes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lookuptypes-routing.module */ "./src/app/components/setting/lookup-tabs/lookuptypes/lookuptypes-routing.module.ts");
/* harmony import */ var _lookuptypes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lookuptypes.component */ "./src/app/components/setting/lookup-tabs/lookuptypes/lookuptypes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LookupTypesModule = /** @class */ (function () {
    function LookupTypesModule() {
    }
    LookupTypesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _lookuptypes_routing_module__WEBPACK_IMPORTED_MODULE_5__["LookuptypesRoutingModule"]
            ],
            declarations: [_list_list_lookuptypes_component__WEBPACK_IMPORTED_MODULE_2__["ListLookuptypesComponent"], _edit_edit_lookuptypes_component__WEBPACK_IMPORTED_MODULE_3__["EditLookuptypesComponent"], _lookuptypes_component__WEBPACK_IMPORTED_MODULE_6__["LookuptypesComponent"]],
            exports: [_list_list_lookuptypes_component__WEBPACK_IMPORTED_MODULE_2__["ListLookuptypesComponent"], _edit_edit_lookuptypes_component__WEBPACK_IMPORTED_MODULE_3__["EditLookuptypesComponent"], _lookuptypes_component__WEBPACK_IMPORTED_MODULE_6__["LookuptypesComponent"]]
        })
    ], LookupTypesModule);
    return LookupTypesModule;
}());



/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/lookuptypes/lookuptypes.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookuptypes/lookuptypes.service.ts ***!
  \***********************************************************************************/
/*! exports provided: LookuptypesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookuptypesService", function() { return LookuptypesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _model_lookuptypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../model/lookuptypes */ "./src/app/model/lookuptypes.ts");
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






var LookuptypesService = /** @class */ (function () {
    function LookuptypesService(httpClient, config, errMsg) {
        this.httpClient = httpClient;
        this.config = config;
        this.errMsg = errMsg;
        this.lookuptypesList = [];
        this.lookuptypesModel = new _model_lookuptypes__WEBPACK_IMPORTED_MODULE_3__["LookuptypesModel"]();
    }
    /*getServicePrerequisiteForExistance(descEng,serviceId): Observable<LookuptypesModel> {
      return this.httpClient.get<LookuptypesModel>(this.config.urls.url('lookuptype', descEng,serviceId))
        .map(servicePrereq => {
          this.lookuptypesModel = servicePrereq;
          return this.lookuptypesModel;
        })
        .catch(this.errMsg.parseObservableResponseError);
    }*/
    LookuptypesService.prototype.getlookuptypes = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('lookuptypeById', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (lookuptypedata) {
            _this.lookuptypesModel = lookuptypedata;
            return _this.lookuptypesModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    LookuptypesService.prototype.getlookuptypess = function () {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('lookuptype')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (lookuptypesList) { return _this.lookuptypesList = lookuptypesList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    LookuptypesService.prototype.savelookuptypes = function (lookuptypesModel) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('lookuptype'), lookuptypesModel).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (lookuptypesData) {
            _this.lookuptypesModel = lookuptypesData;
            return _this.lookuptypesModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    LookuptypesService.prototype.deletelookuptypes = function (lookuptypesModel) {
        return this.httpClient.delete(this.config.urls.url('lookuptype', lookuptypesModel.LookUpTypeId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parsePromiseResponseError));
    };
    LookuptypesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_4__["AppConfiguration"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"]])
    ], LookuptypesService);
    return LookuptypesService;
}());



/***/ }),

/***/ "./src/app/model/lookuptypes.ts":
/*!**************************************!*\
  !*** ./src/app/model/lookuptypes.ts ***!
  \**************************************/
/*! exports provided: LookuptypesModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookuptypesModel", function() { return LookuptypesModel; });
var LookuptypesModel = /** @class */ (function () {
    function LookuptypesModel(LookUpTypeId, Description, DescriptionEnglish) {
        this.LookUpTypeId = LookUpTypeId;
        this.Description = Description;
        this.DescriptionEnglish = DescriptionEnglish;
    }
    return LookuptypesModel;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-setting-lookup-tabs-lookup-module~app-components-setting-lookup-tabs-lookuptypes-look~b43411ae.js.map