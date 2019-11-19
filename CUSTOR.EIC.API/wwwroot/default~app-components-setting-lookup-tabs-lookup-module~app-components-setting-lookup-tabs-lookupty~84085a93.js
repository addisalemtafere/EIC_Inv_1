(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-components-setting-lookup-tabs-lookup-module~app-components-setting-lookup-tabs-lookupty~84085a93"],{

/***/ "./src/app/components/setting/lookup-tabs/lookuptypes/edit/edit-lookuptypes.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookuptypes/edit/edit-lookuptypes.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar mat-dialog-title>\r\n  <h1 mat-dialog-title>\r\n    <mat-icon>create</mat-icon>\r\n    {{('lookupTypes.Header' | translate)}}\r\n  </h1>\r\n</mat-toolbar>\r\n<mat-card class=\"mat-elevation-z8\">\r\n  <br/>\r\n    <mat-card-content>\r\n      <form #form=\"ngForm\" [formGroup]=\"lookuptypesForm\" novalidate (ngSubmit)=\"onSubmit()\" fxLayout=\"column\"\r\n            autocomplete=\"off\">\r\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n          <!--<mat-form-field>-->\r\n            <!--<mat-label>Id:</mat-label>-->\r\n            <!--<input matInput formControlName=\"cLookUpTypeId\"  required maxlength=\"10\" />-->\r\n          <!--</mat-form-field>-->\r\n          <mat-form-field>\r\n            <mat-label>{{'lookupTypes.Description' | translate}}</mat-label>\r\n            <input matInput formControlName=\"cDescription\" required maxlength=\"150\"/>\r\n            <mat-error *ngIf=\"Description.hasError('required')\">\r\n              {{'common.validation.Required' | translate}}\r\n            </mat-error>\r\n            <mat-error *ngIf=\"Description.hasError('maxlength')\">\r\n              {{'common.validation.MaxLengthChar' | translate: {'max':'150'} }}\r\n            </mat-error>\r\n            <mat-error *ngIf=\"Description.hasError('pattern')\">\r\n              {{'common.validation.UseEthiopicOnly' | translate}}\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <mat-label>{{'lookupTypes.DescriptionEnglish' | translate}}</mat-label>\r\n            <input matInput formControlName=\"cDescriptionEnglish\" required maxlength=\"200\"/>\r\n            <mat-error *ngIf=\"DescriptionEnglish.hasError('required')\">\r\n              {{'common.validation.Required' | translate}}\r\n            </mat-error>\r\n            <mat-error *ngIf=\"DescriptionEnglish.hasError('maxlength')\">\r\n              {{'common.validation.MaxLengthChar' | translate: {'max':'200'} }}\r\n            </mat-error>\r\n            <mat-error *ngIf=\"DescriptionEnglish.hasError('pattern')\">\r\n              {{'common.validation.UseLatinOnly' | translate}}\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div mat-dialog-actions>\r\n          <button [disabled]=\"form.invalid\" mat-raised-button type=\"submit\" color=\"primary\" style=\"margin: 15px;\">\r\n            Save\r\n          </button>\r\n          <button mat-raised-button (click)=\"onBack()\" color=\"warn\" type=\"button\">\r\n            Cancel\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/lookuptypes/edit/edit-lookuptypes.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookuptypes/edit/edit-lookuptypes.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* div {\r\n  display: flex;\r\n} */\nmat-card {\n  max-width: 500px;\n  margin: 10px auto;\n  text-align: center; }\nmat-checkbox {\n  max-width: 500px;\n  margin: 2em auto;\n  text-align: left; }\n/*mat-form-field  {*/\n/*max-width: 400px;*/\n/*margin-right: 10px;*/\n/*font-size: 16px;*/\n/*}*/\n.row {\n  text-align: left;\n  margin-bottom: 15px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3NldHRpbmcvbG9va3VwLXRhYnMvbG9va3VwdHlwZXMvZWRpdC9DOlxcVXNlcnNcXEZldGloYSBLXFxEZXNrdG9wXFxERVZcXEdpdExhYlxcSW52ZXN0bW5ldFxcQ1VTVE9SLkVJQy5BUElcXHNyYy9hcHBcXGNvbXBvbmVudHNcXHNldHRpbmdcXGxvb2t1cC10YWJzXFxsb29rdXB0eXBlc1xcZWRpdFxcZWRpdC1sb29rdXB0eXBlcy5jb21wb25lbnQuc2NzcyIsImFwcC9jb21wb25lbnRzL3NldHRpbmcvbG9va3VwLXRhYnMvbG9va3VwdHlwZXMvZWRpdC9lZGl0LWxvb2t1cHR5cGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQ0VHO0FERUg7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0FBRXBCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTtBQUVsQixvQkFBQTtBQUNBLG9CQUFBO0FBQ0Esc0JBQUE7QUFDQSxtQkFBQTtBQUNBLElBQUE7QUFDQTtFQUVFLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9zZXR0aW5nL2xvb2t1cC10YWJzL2xvb2t1cHR5cGVzL2VkaXQvZWRpdC1sb29rdXB0eXBlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufSAqL1xyXG5cclxubWF0LWNhcmQge1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbm1hdC1jaGVja2JveCB7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBtYXJnaW46IDJlbSBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLyptYXQtZm9ybS1maWVsZCAgeyovXHJcbi8qbWF4LXdpZHRoOiA0MDBweDsqL1xyXG4vKm1hcmdpbi1yaWdodDogMTBweDsqL1xyXG4vKmZvbnQtc2l6ZTogMTZweDsqL1xyXG4vKn0qL1xyXG4ucm93XHJcbntcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuIiwiLyogZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59ICovXG5tYXQtY2FyZCB7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxubWF0LWNoZWNrYm94IHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiAyZW0gYXV0bztcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxuXG4vKm1hdC1mb3JtLWZpZWxkICB7Ki9cbi8qbWF4LXdpZHRoOiA0MDBweDsqL1xuLyptYXJnaW4tcmlnaHQ6IDEwcHg7Ki9cbi8qZm9udC1zaXplOiAxNnB4OyovXG4vKn0qL1xuLnJvdyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custor_helpers_compare__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @custor/helpers/compare */ "./src/@custor/helpers/compare.ts");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _lookuptypes_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lookuptypes.service */ "./src/app/components/setting/lookup-tabs/lookuptypes/lookuptypes.service.ts");











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
            cDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(150),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^([ \u1200-\u137F])+$')])],
            cDescriptionEnglish: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(200),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z /,]+$')])]
        });
    };
    EditLookuptypesComponent.prototype.compareIds = function (id1, id2) {
        var a1 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_6__["determineId"])(id1);
        var a2 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_6__["determineId"])(id2);
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_7__["Subscription"])
    ], EditLookuptypesComponent.prototype, "lookuptypesSub", void 0);
    EditLookuptypesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-lookuptypes',
            template: __webpack_require__(/*! ./edit-lookuptypes.component.html */ "./src/app/components/setting/lookup-tabs/lookuptypes/edit/edit-lookuptypes.component.html"),
            styles: [__webpack_require__(/*! ./edit-lookuptypes.component.scss */ "./src/app/components/setting/lookup-tabs/lookuptypes/edit/edit-lookuptypes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_8__["AppConfiguration"],
            _lookuptypes_service__WEBPACK_IMPORTED_MODULE_10__["LookuptypesService"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
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

module.exports = "<div class=\"mat-elevation-z8\" style=\"margin: 15px;\">\r\n  <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>\r\n  <mat-table [dataSource]=\"dataSource\" matSort>\r\n    <ng-container matColumnDef=\"LookUpTypeId\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"100px\">Id</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\" fxFlex=\"100px\"> {{row.LookUpTypeId}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"Description\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"180px\">Description</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\" fxFlex=\"180px\"> {{row.Description}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"DescriptionEnglish\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"180px\">Description English</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\" fxFlex=\"180px\"> {{row.DescriptionEnglish}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"actions\">\r\n      <mat-header-cell *matHeaderCellDef fxFlex=\"100px\">\r\n        <button mat-button color=\"primary\" (click)=\"editLooluptypes()\">\r\n          <mat-icon class=\"mat-button-icon\">add</mat-icon>\r\n          {{'common.commands.Add' | translate}}\r\n        </button>\r\n      </mat-header-cell>\r\n      <mat-header-cell *matHeaderCellDef fxFlex=\"100px\">\r\n      </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let lookuptypes\" fxFlex=\"100px\">\r\n        <button mat-icon-button (click)=\"editLooluptypes(lookuptypes)\" type=\"button\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"confirmDelete(lookuptypes)\" type=\"button\">\r\n          <mat-icon color=\"warn\">delete</mat-icon>\r\n        </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n    </mat-row>\r\n  </mat-table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/lookuptypes/list/list-lookuptypes.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookuptypes/list/list-lookuptypes.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9zZXR0aW5nL2xvb2t1cC10YWJzL2xvb2t1cHR5cGVzL2xpc3QvbGlzdC1sb29rdXB0eXBlcy5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @custor/helpers/utilities */ "./src/@custor/helpers/utilities.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @custor/components/confirm-dialog/confirm-dialog.component */ "./src/@custor/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _lookuptypes_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lookuptypes.service */ "./src/app/components/setting/lookup-tabs/lookuptypes/lookuptypes.service.ts");










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
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
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
        this.confirmDialogRef = this.dialog.open(_custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AngConfirmDialogComponent"], {
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
                    _this.toastr.error("An error occured whilst deleting the Service.\r\nError: \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_5__["Utilities"].getHttpResponseMessage(error) + "\"", 'Delete Error');
                });
            }
            _this.loadingIndicator = false;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ListLookuptypesComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ListLookuptypesComponent.prototype, "sort", void 0);
    ListLookuptypesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-lookuptypes',
            template: __webpack_require__(/*! ./list-lookuptypes.component.html */ "./src/app/components/setting/lookup-tabs/lookuptypes/list/list-lookuptypes.component.html"),
            styles: [__webpack_require__(/*! ./list-lookuptypes.component.scss */ "./src/app/components/setting/lookup-tabs/lookuptypes/list/list-lookuptypes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _lookuptypes_service__WEBPACK_IMPORTED_MODULE_9__["LookuptypesService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_lookuptypes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list-lookuptypes.component */ "./src/app/components/setting/lookup-tabs/lookuptypes/list/list-lookuptypes.component.ts");
/* harmony import */ var _edit_edit_lookuptypes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit-lookuptypes.component */ "./src/app/components/setting/lookup-tabs/lookuptypes/edit/edit-lookuptypes.component.ts");
/* harmony import */ var _lookuptypes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lookuptypes.component */ "./src/app/components/setting/lookup-tabs/lookuptypes/lookuptypes.component.ts");






var lookupstypeRoutes = [
    {
        path: '', component: _lookuptypes_component__WEBPACK_IMPORTED_MODULE_5__["LookuptypesComponent"], children: [
            { path: 'list', component: _list_list_lookuptypes_component__WEBPACK_IMPORTED_MODULE_3__["ListLookuptypesComponent"] },
            { path: 'edit/:id', component: _edit_edit_lookuptypes_component__WEBPACK_IMPORTED_MODULE_4__["EditLookuptypesComponent"] }
        ]
    }
];
var LookuptypesRoutingModule = /** @class */ (function () {
    function LookuptypesRoutingModule() {
    }
    LookuptypesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(lookupstypeRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9zZXR0aW5nL2xvb2t1cC10YWJzL2xvb2t1cHR5cGVzL2xvb2t1cHR5cGVzLmNvbXBvbmVudC5zY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LookuptypesComponent = /** @class */ (function () {
    function LookuptypesComponent() {
    }
    LookuptypesComponent.prototype.ngOnInit = function () {
    };
    LookuptypesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lookuptypes',
            template: __webpack_require__(/*! ./lookuptypes.component.html */ "./src/app/components/setting/lookup-tabs/lookuptypes/lookuptypes.component.html"),
            styles: [__webpack_require__(/*! ./lookuptypes.component.scss */ "./src/app/components/setting/lookup-tabs/lookuptypes/lookuptypes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _list_list_lookuptypes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list-lookuptypes.component */ "./src/app/components/setting/lookup-tabs/lookuptypes/list/list-lookuptypes.component.ts");
/* harmony import */ var _edit_edit_lookuptypes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit-lookuptypes.component */ "./src/app/components/setting/lookup-tabs/lookuptypes/edit/edit-lookuptypes.component.ts");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _lookuptypes_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lookuptypes-routing.module */ "./src/app/components/setting/lookup-tabs/lookuptypes/lookuptypes-routing.module.ts");
/* harmony import */ var _lookuptypes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lookuptypes.component */ "./src/app/components/setting/lookup-tabs/lookuptypes/lookuptypes.component.ts");








var LookupTypesModule = /** @class */ (function () {
    function LookupTypesModule() {
    }
    LookupTypesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _lookuptypes_routing_module__WEBPACK_IMPORTED_MODULE_6__["LookuptypesRoutingModule"]
            ],
            declarations: [_list_list_lookuptypes_component__WEBPACK_IMPORTED_MODULE_3__["ListLookuptypesComponent"], _edit_edit_lookuptypes_component__WEBPACK_IMPORTED_MODULE_4__["EditLookuptypesComponent"], _lookuptypes_component__WEBPACK_IMPORTED_MODULE_7__["LookuptypesComponent"]],
            exports: [_list_list_lookuptypes_component__WEBPACK_IMPORTED_MODULE_3__["ListLookuptypesComponent"], _edit_edit_lookuptypes_component__WEBPACK_IMPORTED_MODULE_4__["EditLookuptypesComponent"], _lookuptypes_component__WEBPACK_IMPORTED_MODULE_7__["LookuptypesComponent"]]
        })
    ], LookupTypesModule);
    return LookupTypesModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-components-setting-lookup-tabs-lookup-module~app-components-setting-lookup-tabs-lookupty~84085a93.js.map