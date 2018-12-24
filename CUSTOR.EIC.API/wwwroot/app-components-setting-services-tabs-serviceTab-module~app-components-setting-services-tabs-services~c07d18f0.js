(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-setting-services-tabs-serviceTab-module~app-components-setting-services-tabs-services~c07d18f0"],{

/***/ "./src/app/components/setting/services-tabs/servicestepper/edit/edit-servicestepper.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/servicestepper/edit/edit-servicestepper.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containerX\">\r\n\r\n  <mat-card>\r\n    <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>\r\n    <mat-card-header>\r\n\r\n      <mat-card-title>\r\n        <!-- <mat-icon class=\"mat-button-icon\">person_add</mat-icon> Edit Customer -->\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <br />\r\n    <br />\r\n\r\n    <mat-card-content>\r\n      <form #form=\"ngForm\" [formGroup]=\"serviceStepperForm\" novalidate (ngSubmit)=\"onSubmit()\" fxLayout=\"column\"\r\n            autocomplete=\"off\">\r\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"0.5em\">\r\n          <mat-form-field  fxLayoutGap=\"1em\" style=\"width: 250px\">\r\n            <mat-label style=\"font-family: Calibri\">Service Type</mat-label>\r\n            <mat-select formControlName=\"cServiceType\" [compareWith]=\"compareIds\" style=\"width: 250px\" required>\r\n              <option value=\"0\">--Select--</option>\r\n              <mat-option *ngFor=\"let servicePrerequisite of servicesModel\" [value]=\"servicePrerequisite.ServiceId\">\r\n                <span>{{servicePrerequisite.DisplayNameEnglish}}</span>\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <mat-form-field  fxFlex>\r\n            <mat-label>Name Amharic:</mat-label>\r\n            <input matInput formControlName=\"cName\" required />\r\n          </mat-form-field>\r\n          <mat-form-field fxLayoutGap=\"1em\" style=\"width: 250px\">\r\n            <mat-label>Name English:</mat-label>\r\n            <input matInput formControlName=\"cNameEnglish\" style=\"width: 100%\" required /></mat-form-field>\r\n\r\n          <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n            <div fxFlex.gt-sm=\"0 1 calc(50% - 0.5em)\">\r\n              <mat-checkbox formControlName=\"cIsActive\">\r\n                IsActive?\r\n              </mat-checkbox>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div mat-dialog-actions>\r\n          <button [disabled]=\"form.invalid\" mat-raised-button type=\"submit\" color=\"primary\">\r\n            Save\r\n          </button>\r\n          <button mat-raised-button (click)=\"onBack()\" color=\"warn\" type=\"button\">\r\n            Cancel\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/components/setting/services-tabs/servicestepper/edit/edit-servicestepper.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/servicestepper/edit/edit-servicestepper.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* div {\r\n  display: flex;\r\n} */\nmat-card {\n  max-width: 500px;\n  margin: 10px auto;\n  text-align: center; }\nmat-checkbox {\n  max-width: 500px;\n  margin: 2em auto;\n  text-align: left; }\nmat-form-field {\n  max-width: 200px;\n  margin-right: 10px;\n  font-size: 16px; }\n.row {\n  text-align: left;\n  margin-bottom: 15px; }\n.customer-radio-button {\n  margin: 5px; }\n"

/***/ }),

/***/ "./src/app/components/setting/services-tabs/servicestepper/edit/edit-servicestepper.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/servicestepper/edit/edit-servicestepper.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: EditServicestepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditServicestepperComponent", function() { return EditServicestepperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicestepper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../servicestepper.service */ "./src/app/components/setting/services-tabs/servicestepper/servicestepper.service.ts");
/* harmony import */ var _custor_helpers_compare__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @custor/helpers/compare */ "./src/@custor/helpers/compare.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../config/appconfig */ "./src/app/config/appconfig.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EditServicestepperComponent = /** @class */ (function () {
    function EditServicestepperComponent(activatedRoute, router, http, config, serviceStepperService, errMsg, toastr, fb) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.http = http;
        this.config = config;
        this.serviceStepperService = serviceStepperService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.fb = fb;
        this.isNewServiceStepperSub = false;
        this.serviceSteppersModel = [];
        this.servicesModel = [];
        this.serviceStepper = {};
        // initialize the form
        this.initForm();
        this.initStaticData('en');
    }
    EditServicestepperComponent.prototype.ngOnInit = function () {
        var id = this.activatedRoute.snapshot.params['id'];
        if (id < 1) {
            this.isNewServiceStepperSub = true;
            this.title = 'Create a new Service Prerequisite';
            this.getService();
            return;
        }
        if (id) {
            // to-do
            // get the selected customer either through @Input or shared service
            this.getServiceStepper(id);
        }
    };
    EditServicestepperComponent.prototype.initStaticData = function (currentLang) {
    };
    EditServicestepperComponent.prototype.getServiceStepper = function (id) {
        var _this = this;
        this.isNewServiceStepperSub = false;
        this.loadingIndicator = true;
        this.serviceStepperSub = this.serviceStepperService
            .getServiceStep(id)
            .subscribe(function (result) {
            _this.serviceStepper = result;
            // console.log(this.serviceStepper);
            _this.getService();
            _this.updateForm();
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
        this.loadingIndicator = false;
    };
    EditServicestepperComponent.prototype.updateForm = function () {
        this.serviceStepperForm.patchValue({
            cServiceType: this.serviceStepper.ServiceId == null ? 1 : this.serviceStepper.ServiceId,
            cName: this.serviceStepper.Name == null ? '' : this.serviceStepper.Name.toString(),
            cNameEnglish: this.serviceStepper.NameEnglish == null ? '' : this.serviceStepper.NameEnglish.toString(),
            cIsActive: this.serviceStepper.IsActive == null ? false : this.serviceStepper.IsActive
        });
        // },4000);
        this.isNewServiceStepperSub = false;
    };
    EditServicestepperComponent.prototype.initForm = function () {
        this.serviceStepperForm = this.fb.group({
            cNameEnglish: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])],
            /* Validators.pattern('^[a-zA-Z ]+$')])],*/
            cServiceType: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cIsActive: true,
            cName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    EditServicestepperComponent.prototype.compareIds = function (id1, id2) {
        var a1 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_7__["determineId"])(id1);
        var a2 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_7__["determineId"])(id2);
        return a1 === a2;
    };
    EditServicestepperComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.serviceStepperForm.valid) {
            return;
        }
        // if (this.isNewServiceStepperSub) {
        //   if (this.checkRecordExistance()) {
        //     this.toastr.show(
        //       'Record Exist', 'message', {
        //         closeButton: true
        //       });
        //     return;
        //   }
        // }
        this.loadingIndicator = true;
        return this.serviceStepperService.saveServiceStep(this.getEditedServiceStepper()).subscribe(function (serviceStepper) {
            _this.saveCompleted(serviceStepper);
        }, function (err) { return _this.handleError(err); });
    };
    // checkRecordExistance(): boolean {
    //   const formModel = this.serviceStepperForm.value;
    //   this.serviceStepperSub = this.serviceStepperService
    //     .subscribe(result => {
    //       this.serviceStepper = result;
    //     });
    //   if (this.serviceStepper.ServiceId == null) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    //
    // }
    EditServicestepperComponent.prototype.ngOnDestroy = function () {
        // this.serviceStepperSub.unsubscribe();
    };
    EditServicestepperComponent.prototype.getService = function () {
        var _this = this;
        this.serviceStepperService.getService()
            .subscribe(function (result) {
            _this.servicesModel = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    EditServicestepperComponent.prototype.onBack = function () {
        //this.router.navigate(['servicesteppers/list']);
        this.router.navigate(['services-tab']);
    };
    EditServicestepperComponent.prototype.saveCompleted = function (serviceStepper) {
        if (serviceStepper) {
            this.serviceStepper = serviceStepper;
        }
        this.loadingIndicator = false;
        this.toastr.success('Record saved successfully!');
        //this.router.navigate(['servicesteppers/list']);
        this.router.navigate(['services-tab']);
    };
    EditServicestepperComponent.prototype.handleError = function (err) {
        this.loadingIndicator = false;
        this.toastr.error(this.errMsg.getError(err));
        this.loadingIndicator = false;
    };
    EditServicestepperComponent.prototype.getEditedServiceStepper = function () {
        var formModel = this.serviceStepperForm.value;
        return {
            ServiceStepId: this.isNewServiceStepperSub ? 0 : this.serviceStepper.ServiceStepId,
            Name: formModel.cName,
            NameEnglish: formModel.cNameEnglish,
            IsActive: formModel.cIsActive === null ? false : formModel.cIsActive,
            ServiceId: formModel.cServiceType,
            LegalStatusId: null,
            Service: null,
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"])
    ], EditServicestepperComponent.prototype, "serviceStepperSub", void 0);
    EditServicestepperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-servicestepper',
            template: __webpack_require__(/*! ./edit-servicestepper.component.html */ "./src/app/components/setting/services-tabs/servicestepper/edit/edit-servicestepper.component.html"),
            styles: [__webpack_require__(/*! ./edit-servicestepper.component.scss */ "./src/app/components/setting/services-tabs/servicestepper/edit/edit-servicestepper.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_9__["AppConfiguration"],
            _servicestepper_service__WEBPACK_IMPORTED_MODULE_6__["ServicestepperService"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], EditServicestepperComponent);
    return EditServicestepperComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/services-tabs/servicestepper/list/list-servicestepper.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/servicestepper/list/list-servicestepper.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:800px\" class=\"margin-3\">\r\n  <!--<mat-toolbar color=\"primary\">-->\r\n    <!--<mat-toolbar-row>-->\r\n      <!--<span>Service Step List</span>-->\r\n      <!--<span class=\"toolbar-spacer\"></span>-->\r\n      <!--<div class=\"header-actions\">-->\r\n        <!--<button mat-icon-button>-->\r\n          <!--<mat-icon>search</mat-icon>-->\r\n        <!--</button>-->\r\n        <!--<mat-form-field>-->\r\n          <!--<input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">-->\r\n        <!--</mat-form-field>-->\r\n        <!--<button mat-icon-button [routerLink]=\"['/servicesteppers/edit/', 0]\">-->\r\n          <!--<mat-icon class=\"mat-button-icon\">add</mat-icon>-->\r\n          <!--Add-->\r\n        <!--</button>-->\r\n        <!--<button mat-icon-button>-->\r\n          <!--<mat-icon>more_vertical</mat-icon>-->\r\n        <!--</button>-->\r\n      <!--</div>-->\r\n    <!--</mat-toolbar-row>-->\r\n  <!--</mat-toolbar>-->\r\n  <div class=\"mat-elevation-z8\">\r\n    <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>\r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n      <ng-container matColumnDef=\"ServiceName\">\r\n        <mat-header-cell *matHeaderCellDef flex=\"250px\">Service Name</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\">{{row.Service.DisplayNameEnglish}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Name\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Description</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.Name}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"NameEnglish\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Description English</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.NameEnglish}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"IsActive\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"50px\">IsActive</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxFlex=\"50px\"> {{row.IsActive}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"actions\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"100px\">\r\n          <button  mat-button color=\"primary\"  (click)=\"editServiceStep()\">\r\n            <mat-icon class=\"mat-button-icon\">add</mat-icon>{{'common.commands.Add' | translate}}\r\n          </button>\r\n        </mat-header-cell>\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"100px\">\r\n        </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let servicestepper\" fxFlex=\"100px\">\r\n          <button mat-icon-button (click)=\"editServiceStep(servicestepper)\" type=\"button\">\r\n            <mat-icon>edit</mat-icon>\r\n          </button>\r\n          <button mat-icon-button (click)=\"confirmDelete(servicestepper)\" type=\"button\">\r\n            <mat-icon color=\"warn\">delete</mat-icon>\r\n          </button>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n\r\n    <mat-paginator pageSize=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/setting/services-tabs/servicestepper/list/list-servicestepper.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/servicestepper/list/list-servicestepper.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/setting/services-tabs/servicestepper/list/list-servicestepper.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/servicestepper/list/list-servicestepper.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ListServicestepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListServicestepperComponent", function() { return ListServicestepperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../@custor/components/confirm-dialog/confirm-dialog.component */ "./src/@custor/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _servicestepper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../servicestepper.service */ "./src/app/components/setting/services-tabs/servicestepper/servicestepper.service.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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









var ListServicestepperComponent = /** @class */ (function () {
    function ListServicestepperComponent(http, serviceStepperService, errMsg, toastr, dialog, router, route) {
        this.http = http;
        this.serviceStepperService = serviceStepperService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.displayedColumns = ['ServiceName', 'Name', 'NameEnglish', 'IsActive', 'actions'];
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    ListServicestepperComponent.prototype.ngOnInit = function () {
        this.getServiceStepModels();
    };
    ListServicestepperComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListServicestepperComponent.prototype.getServiceStepModels = function () {
        var _this = this;
        this.loadingIndicator = true;
        this.serviceStepperService.getServiceSteps()
            .subscribe(function (result) {
            _this.servicestepmodels = result;
            if (!_this.servicestepmodels) {
                _this.toastr.error('No records were found to list', 'Error', {
                    closeButton: true,
                });
            }
            else {
                _this.dataSource.data = _this.servicestepmodels;
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
    ListServicestepperComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ListServicestepperComponent.prototype.editServiceStep = function (serviceStepper) {
        if (serviceStepper) {
            this.router.navigate(['/servicesteppers/edit', serviceStepper.ServiceStepId], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['/servicesteppers/edit', 0]);
        }
    };
    ListServicestepperComponent.prototype.confirmDelete = function (serviceStepper) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AngConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            _this.loadingIndicator = true;
            if (result) {
                _this.serviceStepperService.deleteServiceStep(serviceStepper)
                    .subscribe(function (results) {
                    _this.loadingIndicator = false;
                    _this.dataSource.data = _this.dataSource.data.filter(function (item) { return item !== serviceStepper; });
                }, function (error) {
                    // tslint:disable-next-line:max-line-length
                    _this.toastr.error("An error occured whilst deleting the ServiceStepModel.\r\nError: \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_8__["Utilities"].getHttpResponseMessage(error) + "\"", 'Delete Error');
                });
            }
            _this.loadingIndicator = false;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ListServicestepperComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ListServicestepperComponent.prototype, "sort", void 0);
    ListServicestepperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-servicestepper',
            template: __webpack_require__(/*! ./list-servicestepper.component.html */ "./src/app/components/setting/services-tabs/servicestepper/list/list-servicestepper.component.html"),
            styles: [__webpack_require__(/*! ./list-servicestepper.component.scss */ "./src/app/components/setting/services-tabs/servicestepper/list/list-servicestepper.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _servicestepper_service__WEBPACK_IMPORTED_MODULE_5__["ServicestepperService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], ListServicestepperComponent);
    return ListServicestepperComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/services-tabs/servicestepper/servicestepper-routing.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/servicestepper/servicestepper-routing.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: ServicestepperRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicestepperRoutingModule", function() { return ServicestepperRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicestepper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servicestepper.component */ "./src/app/components/setting/services-tabs/servicestepper/servicestepper.component.ts");
/* harmony import */ var _list_list_servicestepper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list-servicestepper.component */ "./src/app/components/setting/services-tabs/servicestepper/list/list-servicestepper.component.ts");
/* harmony import */ var _edit_edit_servicestepper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit-servicestepper.component */ "./src/app/components/setting/services-tabs/servicestepper/edit/edit-servicestepper.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '', component: _servicestepper_component__WEBPACK_IMPORTED_MODULE_2__["ServicestepperComponent"], children: [
            { path: '', component: _list_list_servicestepper_component__WEBPACK_IMPORTED_MODULE_3__["ListServicestepperComponent"] },
            { path: 'list', component: _list_list_servicestepper_component__WEBPACK_IMPORTED_MODULE_3__["ListServicestepperComponent"] },
            { path: 'edit/:id', component: _edit_edit_servicestepper_component__WEBPACK_IMPORTED_MODULE_4__["EditServicestepperComponent"] }
        ]
    }];
var ServicestepperRoutingModule = /** @class */ (function () {
    function ServicestepperRoutingModule() {
    }
    ServicestepperRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ServicestepperRoutingModule);
    return ServicestepperRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/setting/services-tabs/servicestepper/servicestepper.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/servicestepper/servicestepper.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/setting/services-tabs/servicestepper/servicestepper.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/servicestepper/servicestepper.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/setting/services-tabs/servicestepper/servicestepper.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/servicestepper/servicestepper.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ServicestepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicestepperComponent", function() { return ServicestepperComponent; });
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

var ServicestepperComponent = /** @class */ (function () {
    function ServicestepperComponent() {
    }
    ServicestepperComponent.prototype.ngOnInit = function () {
    };
    ServicestepperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-servicestepper',
            template: __webpack_require__(/*! ./servicestepper.component.html */ "./src/app/components/setting/services-tabs/servicestepper/servicestepper.component.html"),
            styles: [__webpack_require__(/*! ./servicestepper.component.scss */ "./src/app/components/setting/services-tabs/servicestepper/servicestepper.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicestepperComponent);
    return ServicestepperComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/services-tabs/servicestepper/servicestepper.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/servicestepper/servicestepper.module.ts ***!
  \******************************************************************************************/
/*! exports provided: ServicestepperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicestepperModule", function() { return ServicestepperModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _servicestepper_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servicestepper-routing.module */ "./src/app/components/setting/services-tabs/servicestepper/servicestepper-routing.module.ts");
/* harmony import */ var _list_list_servicestepper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list-servicestepper.component */ "./src/app/components/setting/services-tabs/servicestepper/list/list-servicestepper.component.ts");
/* harmony import */ var _edit_edit_servicestepper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit-servicestepper.component */ "./src/app/components/setting/services-tabs/servicestepper/edit/edit-servicestepper.component.ts");
/* harmony import */ var _servicestepper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./servicestepper.component */ "./src/app/components/setting/services-tabs/servicestepper/servicestepper.component.ts");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ServicestepperModule = /** @class */ (function () {
    function ServicestepperModule() {
    }
    ServicestepperModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _servicestepper_routing_module__WEBPACK_IMPORTED_MODULE_2__["ServicestepperRoutingModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: [_list_list_servicestepper_component__WEBPACK_IMPORTED_MODULE_3__["ListServicestepperComponent"], _edit_edit_servicestepper_component__WEBPACK_IMPORTED_MODULE_4__["EditServicestepperComponent"], _servicestepper_component__WEBPACK_IMPORTED_MODULE_5__["ServicestepperComponent"]],
            exports: [_list_list_servicestepper_component__WEBPACK_IMPORTED_MODULE_3__["ListServicestepperComponent"], _edit_edit_servicestepper_component__WEBPACK_IMPORTED_MODULE_4__["EditServicestepperComponent"], _servicestepper_component__WEBPACK_IMPORTED_MODULE_5__["ServicestepperComponent"]]
        })
    ], ServicestepperModule);
    return ServicestepperModule;
}());



/***/ }),

/***/ "./src/app/components/setting/services-tabs/servicestepper/servicestepper.service.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/setting/services-tabs/servicestepper/servicestepper.service.ts ***!
  \*******************************************************************************************/
/*! exports provided: ServicestepperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicestepperService", function() { return ServicestepperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _model_ServiceStep_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../model/ServiceStep.model */ "./src/app/model/ServiceStep.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ServicestepperService = /** @class */ (function () {
    function ServicestepperService(httpClient, config, errMsg) {
        this.httpClient = httpClient;
        this.config = config;
        this.errMsg = errMsg;
        this.serviceStepModelList = [];
        this.serviceStepModel = new _model_ServiceStep_model__WEBPACK_IMPORTED_MODULE_5__["ServiceStepModel"]();
        // super(httpClient, config.urls.url('servicestepper'), errMsg);
    }
    ServicestepperService.prototype.getServiceSteps = function () {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('servicesteppers')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (serviceStepModelList) { return _this.serviceStepModelList = serviceStepModelList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ServicestepperService.prototype.getServiceStep = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('servicestepper', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (servicePrereq) {
            _this.serviceStepModel = servicePrereq;
            return _this.serviceStepModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ServicestepperService.prototype.getService = function () {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('services')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (serviceList) { return _this.serviceList = serviceList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ServicestepperService.prototype.saveServiceStep = function (serviceStepModel) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('servicestepper'), serviceStepModel).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (ServicePrereq) {
            _this.serviceStepModel = ServicePrereq;
            return _this.serviceStepModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ServicestepperService.prototype.deleteServiceStep = function (serviceStepModel) {
        return this.httpClient.delete(this.config.urls.url('servicestepper', serviceStepModel.ServiceStepId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errMsg.parsePromiseResponseError));
    };
    ServicestepperService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"]])
    ], ServicestepperService);
    return ServicestepperService;
}());



/***/ }),

/***/ "./src/app/model/ServiceStep.model.ts":
/*!********************************************!*\
  !*** ./src/app/model/ServiceStep.model.ts ***!
  \********************************************/
/*! exports provided: ServiceStepModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceStepModel", function() { return ServiceStepModel; });
var ServiceStepModel = /** @class */ (function () {
    function ServiceStepModel() {
    }
    return ServiceStepModel;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-setting-services-tabs-serviceTab-module~app-components-setting-services-tabs-services~c07d18f0.js.map