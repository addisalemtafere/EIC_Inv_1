(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-setting-othe-tabs-Site-site-module~app-components-setting-othe-tabs-other-module"],{

/***/ "./src/app/components/setting/othe-tabs/Site/edit/edit-site.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/setting/othe-tabs/Site/edit/edit-site.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containerX\">\r\n\r\n  <mat-card>\r\n    <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>\r\n    <mat-card-header>\r\n\r\n      <mat-card-title>\r\n        <!-- <mat-icon class=\"mat-button-icon\">person_add</mat-icon> Edit Customer -->\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <br />\r\n    <br />\r\n\r\n    <mat-card-content>\r\n      <form #form=\"ngForm\" [formGroup]=\"sitesForm\" novalidate (ngSubmit)=\"onSubmit()\" fxLayout=\"column\"\r\n            autocomplete=\"off\">\r\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n          <mat-form-field>\r\n            <mat-label > Name:</mat-label>\r\n            <input matInput formControlName=\"cName\"  required maxlength=\"50\" minlength=\"3\" />\r\n            <mat-error *ngIf=\"Name.hasError('required')\">\r\n              Please enter site name amharic\r\n            </mat-error>\r\n            <mat-error *ngIf=\"Name.hasError('pattern')\">\r\n              Only amharic alphabetic charcters are allowed!\r\n            </mat-error>\r\n            <mat-error *ngIf=\"!Name.hasError('minLength')\">\r\n              Minimum charcters length is 3!\r\n            </mat-error>\r\n            <mat-error *ngIf=\"!Name.hasError('maxlength')\">\r\n              Maximum charcters length is 50!\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <mat-label > Name English:</mat-label>\r\n            <input matInput formControlName=\"cNameEnglish\" required required maxlength=\"62\" minlength=\"3\" />\r\n            <mat-error *ngIf=\"NameEnglish.hasError('required')\">\r\n              Please enter site name english\r\n            </mat-error>\r\n            <mat-error *ngIf=\"NameEnglish.hasError('pattern')\">\r\n              Only alphabetic charcters are allowed!\r\n            </mat-error>\r\n            <mat-error *ngIf=\"!NameEnglish.hasError('minLength')\">\r\n              Minimum charcters length is 3!\r\n            </mat-error>\r\n            <mat-error *ngIf=\"!NameEnglish.hasError('maxlength')\">\r\n              Maximum charcters length is 60!\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n            <div fxFlex.gt-sm=\"0 1 calc(50% - 0.5em)\">\r\n              <mat-checkbox formControlName=\"cIsActive\">\r\n                IsActive?\r\n              </mat-checkbox>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div mat-dialog-actions>\r\n          <button [disabled]=\"form.invalid\" mat-raised-button type=\"submit\" color=\"primary\">\r\n            Save\r\n          </button>\r\n          <button mat-raised-button (click)=\"onBack()\" color=\"warn\" type=\"button\">\r\n            Cancel\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/components/setting/othe-tabs/Site/edit/edit-site.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/setting/othe-tabs/Site/edit/edit-site.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* div {\r\n  display: flex;\r\n} */\nmat-card {\n  max-width: 500px;\n  margin: 10px auto;\n  text-align: center; }\nmat-checkbox {\n  max-width: 500px;\n  margin: 2em auto;\n  text-align: left; }\nmat-form-field {\n  max-width: 200px;\n  margin-right: 10px;\n  font-size: 16px; }\n.row {\n  text-align: left;\n  margin-bottom: 15px; }\n.customer-radio-group {\n  display: inherit;\n  flex-direction: row; }\n.customer-radio-button {\n  margin: 5px; }\n"

/***/ }),

/***/ "./src/app/components/setting/othe-tabs/Site/edit/edit-site.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/setting/othe-tabs/Site/edit/edit-site.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditSiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSiteComponent", function() { return EditSiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _site_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../site.service */ "./src/app/components/setting/othe-tabs/Site/site.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EditSiteComponent = /** @class */ (function () {
    function EditSiteComponent(activatedRoute, router, http, config, sitesService, errMsg, toastr, fb) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.http = http;
        this.config = config;
        this.sitesService = sitesService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.fb = fb;
        /*siteId:number;*/
        this.isNewSite = false;
        this.sites = {};
        // initialize the form
        this.initForm();
        this.initStaticData('en');
    }
    EditSiteComponent.prototype.ngOnInit = function () {
        var id = this.activatedRoute.snapshot.params['id'];
        if (id < 1) {
            this.isNewSite = true;
            this.title = 'Create a new Site';
            /*this.getSite();*/
            return;
        }
        if (id) {
            // to-do
            // get the selected customer either through @Input or shared site
            this.getSites(id);
        }
    };
    EditSiteComponent.prototype.initStaticData = function (currentLang) {
    };
    EditSiteComponent.prototype.getSites = function (id) {
        var _this = this;
        this.isNewSite = false;
        this.loadingIndicator = true;
        this.sitesSub = this.sitesService
            .getSite(id)
            .subscribe(function (result) {
            _this.sites = result;
            _this.updateForm();
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
        this.loadingIndicator = false;
    };
    EditSiteComponent.prototype.updateForm = function () {
        this.sitesForm.setValue({
            cIsActive: this.sites.IsActive,
            cName: this.sites.Name == null ? '' : this.sites.Name.toString(),
            cNameEnglish: this.sites.NameEnglish == null ? '' : this.sites.NameEnglish.toString(),
        });
        // },4000);
        this.isNewSite = false;
    };
    EditSiteComponent.prototype.initForm = function () {
        this.sitesForm = this.fb.group({
            cIsActive: true,
            cName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^([ \u1200-\u137F])+$')])],
            cNameEnglish: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(62),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z /]+$')])]
        });
    };
    EditSiteComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.sitesForm.valid) {
            return;
        }
        if (this.isNewSite) {
            /* if (this.checkRecordExistance()) {
               this.toastr.show(
                 'Record Exist', 'message', {
                   closeButton: true
                 })
               return;
             }*/
            this.loadingIndicator = true;
        }
        return this.sitesService.saveSite(this.getEditedSite()).subscribe(function (sites) {
            _this.saveCompleted(sites);
        }, function (err) { return _this.handleError(err); });
    };
    /* checkRecordExistance(): boolean {
       const formModel = this.sitesForm.value;
       this.sitesSub = this.sitesService
         .getSites(formModel.cNameEnglish, formModel.cSiteType)
         .subscribe(result => {
           this.sites = result
         })
       if (this.sites.SiteId == null) {
         return false;
       } else {
         return true;
       }
     }*/
    EditSiteComponent.prototype.saveCompleted = function (sites) {
        if (sites) {
            this.sites = sites;
        }
        this.loadingIndicator = false;
        this.toastr.success('Record saved successfully!');
        // this.router.navigate(['sites/list']);
        window.history.back();
    };
    EditSiteComponent.prototype.handleError = function (err) {
        this.loadingIndicator = false;
        this.toastr.error(this.errMsg.getError(err));
        this.loadingIndicator = false;
    };
    EditSiteComponent.prototype.getEditedSite = function () {
        var formModel = this.sitesForm.value;
        return {
            SiteId: this.isNewSite ? null : this.sites.SiteId,
            Name: formModel.cName,
            NameEnglish: formModel.cNameEnglish,
            IsActive: formModel.cIsActive,
        };
    };
    EditSiteComponent.prototype.ngOnDestroy = function () {
        // this.sitesSub.unsubscribe();
    };
    EditSiteComponent.prototype.onBack = function () {
        // this.router.navigate(['sites/list']);
        window.history.back();
    };
    Object.defineProperty(EditSiteComponent.prototype, "Name", {
        get: function () { return this.sitesForm.get('cName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditSiteComponent.prototype, "NameEnglish", {
        get: function () { return this.sitesForm.get('cNameEnglish'); },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"])
    ], EditSiteComponent.prototype, "sitesSub", void 0);
    EditSiteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-site',
            template: __webpack_require__(/*! ./edit-site.component.html */ "./src/app/components/setting/othe-tabs/Site/edit/edit-site.component.html"),
            styles: [__webpack_require__(/*! ./edit-site.component.scss */ "./src/app/components/setting/othe-tabs/Site/edit/edit-site.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_7__["AppConfiguration"],
            _site_service__WEBPACK_IMPORTED_MODULE_5__["SitesService"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], EditSiteComponent);
    return EditSiteComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/othe-tabs/Site/list/list-site.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/setting/othe-tabs/Site/list/list-site.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:630px;\" class=\"margin-3\">\r\n  <!--<mat-toolbar color=\"primary\">-->\r\n  <!--<mat-toolbar-row>-->\r\n  <!--<span>Service Lookup</span>-->\r\n  <!--&lt;!&ndash; <span class=\"toolbar-spacer\"></span>&ndash;&gt;-->\r\n  <!--<div class=\"header-actions\" style=\"width: 100%;\">-->\r\n  <!--<mat-form-field>-->\r\n  <!--<input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">-->\r\n  <!--</mat-form-field>-->\r\n  <!--</div>-->\r\n  <!--</mat-toolbar-row>-->\r\n  <!--</mat-toolbar>-->\r\n  <div class=\"mat-elevation-z8\">\r\n    <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>\r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n      <ng-container matColumnDef=\"Id\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"60px\">Id</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxFlex=\"60px\"> {{row.SiteId}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Name\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"180px\">Site Name</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxFlex=\"180px\"> {{row.Name}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"NameEnglish\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"180px\">Site Name English</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxFlex=\"180px\"> {{row.NameEnglish}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"IsActive\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Status</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.IsActive}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"actions\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"100px\">\r\n          <button mat-button color=\"primary\" (click)=\"editSite()\">\r\n            <mat-icon class=\"mat-button-icon\">add</mat-icon>\r\n            {{'common.commands.Add' | translate}}\r\n          </button>\r\n        </mat-header-cell>\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"100px\">\r\n        </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let sites\" fxFlex=\"100px\">\r\n          <button mat-icon-button (click)=\"editSite(sites)\" type=\"button\">\r\n            <mat-icon>edit</mat-icon>\r\n          </button>\r\n          <button mat-icon-button (click)=\"confirmDelete(sites)\" type=\"button\">\r\n            <mat-icon color=\"warn\">delete</mat-icon>\r\n          </button>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/setting/othe-tabs/Site/list/list-site.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/setting/othe-tabs/Site/list/list-site.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/setting/othe-tabs/Site/list/list-site.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/setting/othe-tabs/Site/list/list-site.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ListSiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSiteComponent", function() { return ListSiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/components/confirm-dialog/confirm-dialog.component */ "./src/@custor/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @custor/helpers/utilities */ "./src/@custor/helpers/utilities.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _site_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../site.service */ "./src/app/components/setting/othe-tabs/Site/site.service.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ListSiteComponent = /** @class */ (function () {
    function ListSiteComponent(http, sitesSite, errMsg, toastr, dialog, router, route) {
        this.http = http;
        this.sitesSite = sitesSite;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.displayedColumns = ['Id', 'Name', 'NameEnglish', 'IsActive', 'actions'];
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    ListSiteComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListSiteComponent.prototype.ngOnInit = function () {
        this.getSites();
    };
    ListSiteComponent.prototype.getSites = function () {
        var _this = this;
        this.loadingIndicator = true;
        this.sitesSite.getSites()
            .subscribe(function (result) {
            _this.siteModels = result;
            if (!_this.siteModels) {
                _this.toastr.error('No records were found to list', 'Error', {
                    closeButton: true,
                });
            }
            else {
                _this.dataSource.data = _this.siteModels;
            }
        }, function (err) {
            if (!_this.errMsg.message) {
                _this.toastr.error('Error! Please check if the Web Sites is running');
            }
            else {
                _this.toastr.error(_this.errMsg.getError(err));
            }
        });
        this.loadingIndicator = false;
    };
    ListSiteComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ListSiteComponent.prototype.editSite = function (siteModel) {
        if (siteModel) {
            this.router.navigate(['/sites/edit', siteModel.SiteId], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['/sites/edit', 0]);
        }
    };
    ListSiteComponent.prototype.confirmDelete = function (siteModel) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["AngConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            _this.loadingIndicator = true;
            if (result) {
                _this.sitesSite.deleteSite(siteModel)
                    .subscribe(function (results) {
                    _this.loadingIndicator = false;
                    _this.dataSource.data = _this.dataSource.data.filter(function (item) { return item !== siteModel; });
                }, function (error) {
                    // tslint:disable-next-line:max-line-length
                    _this.toastr.error("An error occured whilst deleting the Site.\r\nError: \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_5__["Utilities"].getHttpResponseMessage(error) + "\"", 'Delete Error');
                });
            }
            _this.loadingIndicator = false;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ListSiteComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ListSiteComponent.prototype, "sort", void 0);
    ListSiteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-site',
            template: __webpack_require__(/*! ./list-site.component.html */ "./src/app/components/setting/othe-tabs/Site/list/list-site.component.html"),
            styles: [__webpack_require__(/*! ./list-site.component.scss */ "./src/app/components/setting/othe-tabs/Site/list/list-site.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _site_service__WEBPACK_IMPORTED_MODULE_7__["SitesService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ListSiteComponent);
    return ListSiteComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/othe-tabs/Site/site-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/setting/othe-tabs/Site/site-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: SiteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteRoutingModule", function() { return SiteRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _site_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./site.component */ "./src/app/components/setting/othe-tabs/Site/site.component.ts");
/* harmony import */ var _list_list_site_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list-site.component */ "./src/app/components/setting/othe-tabs/Site/list/list-site.component.ts");
/* harmony import */ var _edit_edit_site_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit-site.component */ "./src/app/components/setting/othe-tabs/Site/edit/edit-site.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '', component: _site_component__WEBPACK_IMPORTED_MODULE_2__["SiteComponent"], children: [
            { path: '', component: _list_list_site_component__WEBPACK_IMPORTED_MODULE_3__["ListSiteComponent"] },
            { path: 'list', component: _list_list_site_component__WEBPACK_IMPORTED_MODULE_3__["ListSiteComponent"] },
            { path: 'edit/:id', component: _edit_edit_site_component__WEBPACK_IMPORTED_MODULE_4__["EditSiteComponent"] }
        ]
    }];
var SiteRoutingModule = /** @class */ (function () {
    function SiteRoutingModule() {
    }
    SiteRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SiteRoutingModule);
    return SiteRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/setting/othe-tabs/Site/site.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/setting/othe-tabs/Site/site.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/setting/othe-tabs/Site/site.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/setting/othe-tabs/Site/site.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/setting/othe-tabs/Site/site.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/setting/othe-tabs/Site/site.component.ts ***!
  \*********************************************************************/
/*! exports provided: SiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteComponent", function() { return SiteComponent; });
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

var SiteComponent = /** @class */ (function () {
    function SiteComponent() {
    }
    SiteComponent.prototype.ngOnInit = function () {
    };
    SiteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-site',
            template: __webpack_require__(/*! ./site.component.html */ "./src/app/components/setting/othe-tabs/Site/site.component.html"),
            styles: [__webpack_require__(/*! ./site.component.scss */ "./src/app/components/setting/othe-tabs/Site/site.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SiteComponent);
    return SiteComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/othe-tabs/Site/site.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/setting/othe-tabs/Site/site.module.ts ***!
  \******************************************************************/
/*! exports provided: SiteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteModule", function() { return SiteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _site_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./site-routing.module */ "./src/app/components/setting/othe-tabs/Site/site-routing.module.ts");
/* harmony import */ var _list_list_site_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list-site.component */ "./src/app/components/setting/othe-tabs/Site/list/list-site.component.ts");
/* harmony import */ var _edit_edit_site_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit-site.component */ "./src/app/components/setting/othe-tabs/Site/edit/edit-site.component.ts");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _site_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./site.component */ "./src/app/components/setting/othe-tabs/Site/site.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SiteModule = /** @class */ (function () {
    function SiteModule() {
    }
    SiteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _site_routing_module__WEBPACK_IMPORTED_MODULE_2__["SiteRoutingModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_list_list_site_component__WEBPACK_IMPORTED_MODULE_3__["ListSiteComponent"], _edit_edit_site_component__WEBPACK_IMPORTED_MODULE_4__["EditSiteComponent"], _site_component__WEBPACK_IMPORTED_MODULE_6__["SiteComponent"]],
            exports: [_list_list_site_component__WEBPACK_IMPORTED_MODULE_3__["ListSiteComponent"], _edit_edit_site_component__WEBPACK_IMPORTED_MODULE_4__["EditSiteComponent"], _site_component__WEBPACK_IMPORTED_MODULE_6__["SiteComponent"]],
        })
    ], SiteModule);
    return SiteModule;
}());



/***/ }),

/***/ "./src/app/components/setting/othe-tabs/Site/site.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/setting/othe-tabs/Site/site.service.ts ***!
  \*******************************************************************/
/*! exports provided: SitesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitesService", function() { return SitesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _model_Site_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../model/Site.model */ "./src/app/model/Site.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SitesService = /** @class */ (function () {
    function SitesService(httpClient, config, errMsg) {
        this.httpClient = httpClient;
        this.config = config;
        this.errMsg = errMsg;
        this.siteModel = new _model_Site_model__WEBPACK_IMPORTED_MODULE_5__["SiteModel"]();
    }
    SitesService.prototype.getSite = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('site', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (sitePrereq) {
            _this.siteModel = sitePrereq;
            return _this.siteModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    SitesService.prototype.getSites = function () {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('sites')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (siteList) { return _this.siteList = siteList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    SitesService.prototype.saveSite = function (siteModel) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('site'), siteModel).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (SitePrereq) {
            _this.siteModel = SitePrereq;
            return _this.siteModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    SitesService.prototype.deleteSite = function (siteModel) {
        return this.httpClient.delete(this.config.urls.url('site', siteModel.SiteId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errMsg.parsePromiseResponseError));
    };
    SitesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_4__["AppConfiguration"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"]])
    ], SitesService);
    return SitesService;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-setting-othe-tabs-Site-site-module~app-components-setting-othe-tabs-other-module.js.map