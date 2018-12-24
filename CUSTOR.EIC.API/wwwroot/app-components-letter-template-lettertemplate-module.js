(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-letter-template-lettertemplate-module"],{

/***/ "./src/app/components/letter-template/lettertempalte-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/letter-template/lettertempalte-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: LettertempalteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LettertempalteRoutingModule", function() { return LettertempalteRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lettertemplate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lettertemplate.component */ "./src/app/components/letter-template/lettertemplate.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _lettertemplate_component__WEBPACK_IMPORTED_MODULE_2__["LettertemplateComponent"] }
];
var LettertempalteRoutingModule = /** @class */ (function () {
    function LettertempalteRoutingModule() {
    }
    LettertempalteRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LettertempalteRoutingModule);
    return LettertempalteRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/letter-template/lettertemplate.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/letter-template/lettertemplate.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"margin-2\" style=\"box-shadow: none;border: 1px solid #dddddd\" xmlns=\"http://www.w3.org/1999/html\">\r\n\r\n  <form [formGroup]=\"letterTemplateForm\" novalidate>\r\n    <mat-card-content>\r\n      <div fxLayout.xs=\"row wrap\" fxLayoutAlign.xs=\"start center\" fxLayoutGap=\"2em\">\r\n        <div class=\"block\" fxLayoutGap=\"2em\">\r\n          <mat-form-field style=\"width: 150px\">\r\n            <mat-label>Letter Type</mat-label>\r\n            <mat-select formControlName=\"LetterType\" style=\"font-family: Calibri\" type=\"text\" [compareWith]=\"compareIds\"\r\n                        required>\r\n              <option value=\"0\">--Select--</option>\r\n              <mat-option *ngFor=\"let LetterType of Lookups\" [value]=\"LetterType.LookupId\">\r\n                <span>{{LetterType.English}}</span>\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div fxFlex.gt-sm=\"0 1 calc(50% - 0.5em)\">\r\n            <mat-checkbox formControlName=\"IsActive\">\r\n              IsActive?\r\n            </mat-checkbox>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"75\" fxLayout.xs=\"row wrap\" fxLayoutAlign.xs=\"start center\" fxLayoutGap=\"2em\">\r\n        <editor id=\"letterContent\"\r\n                apiKey=\"4yzxfc219romk1dtk7h8c9q8zci4aj73ls684uxob669uvo4\"\r\n                class=\"full-width\"\r\n                formControlName=\"LetterContent\"\r\n                [init]=\"{plugins: 'print',\r\n            height : 600,\r\n            theme: 'modern',\r\ntoolbar_items_size: 'small'}\">\r\n\r\n        </editor>\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n\r\n        <div class=\"block\" fxFlex=\"10%\">\r\n          <button class=\"custom-button\" (click)=\"onSubmit()\">\r\n            <mat-icon color=\"accent\" class=\"mat-18\">done</mat-icon>\r\n            {{editMode ? 'Save' : 'Add'}}\r\n          </button>\r\n        </div>\r\n\r\n      </div>\r\n    </mat-card-content>\r\n\r\n  </form>\r\n</mat-card>\r\n<!--*ngIf=\"LetterTemplateModels.length>0\"-->\r\n<mat-card class=\"margin-2 padding-0\" style=\"width: 920px\">\r\n  <mat-card-header>\r\n    <mat-card-subtitle class=\"sub-title\">List of Letter Template\r\n    </mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <div class=\"spinner-container\" *ngIf=\"loading \">\r\n      <mat-progress-bar mode=\"query\"></mat-progress-bar>\r\n    </div>\r\n    <mat-table #table [dataSource]=\"dataSource\">\r\n      <ng-container matColumnDef=\"LetterType\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"35\">Letter Type</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let LetterTemplateModels\" fxFlex=\"35\"> {{LetterTemplateModels.LetterType | lookupPipe :\r\n          1}}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <!--<ng-container matColumnDef=\"Title\" >-->\r\n      <!--<mat-header-cell *matHeaderCellDef fxFlex=\"20\" >Title</mat-header-cell>-->\r\n      <!--<mat-cell *matCellDef=\"let LetterTemplateModels\" fxFlex=\"20\"> {{LetterTemplateModels.Title  }}</mat-cell>-->\r\n      <!--</ng-container>-->\r\n      <!--<ng-container matColumnDef=\"ToOrg\" >-->\r\n      <!--<mat-header-cell *matHeaderCellDef fxFlex=\"8\"> ToOrg</mat-header-cell>-->\r\n      <!--<mat-cell *matCellDef=\"let LetterTemplateModels\" fxFlex=\"8\"> {{LetterTemplateModels.ToOrg }}</mat-cell>-->\r\n      <!--</ng-container>-->\r\n      <ng-container matColumnDef=\"Action\">\r\n        <mat-header-cell fxFlex=\"18\" *matHeaderCellDef>Action</mat-header-cell>\r\n        <mat-cell fxFlex=\"18\" *matCellDef=\"let LetterTemplateModels;let i=index;\">\r\n          <div>\r\n            <a class=\"pointer\" mat-min-fab matTooltip=\"Click here to edit the product\"\r\n               (click)=\"onEditLetterTemplate(i)\">\r\n              <mat-icon color=\"primary\" class=\"mat-18\">edit</mat-icon>\r\n              Edit\r\n            </a>\r\n            <a class=\"pointer\" mat--mini-fab color=\"warn\" matTooltip=\"Click here to delete the product\"\r\n               (click)=\"deleteLetterTemplate(i,LetterTemplateModels.IncentiveRequestItemId)\">\r\n              <mat-icon color=\"warn\">delete</mat-icon>\r\n              Delete\r\n            </a>\r\n          </div>\r\n        </mat-cell>\r\n      </ng-container>\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\">\r\n      </mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/letter-template/lettertemplate.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/letter-template/lettertemplate.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.mce-edit-area {\n  background: #FFF;\n  -webkit-filter: none;\n          filter: none;\n  height: 500px !important; }\n\n.mce-edit-area {\n  background: #FFF;\n  -webkit-filter: none;\n          filter: none;\n  min-height: 600px; }\n\n.mceEditor td.mceIframeContainer iframe {\n  min-height: 550px !important; }\n\n.mceEditor table {\n  height: auto !important; }\n"

/***/ }),

/***/ "./src/app/components/letter-template/lettertemplate.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/letter-template/lettertemplate.component.ts ***!
  \************************************************************************/
/*! exports provided: LettertemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LettertemplateComponent", function() { return LettertemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _custor_helpers_compare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/helpers/compare */ "./src/@custor/helpers/compare.ts");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _Services_look_up_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/look-up.service */ "./src/app/Services/look-up.service.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lettertepmlate_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lettertepmlate.service */ "./src/app/components/letter-template/lettertepmlate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var LettertemplateComponent = /** @class */ (function () {
    function LettertemplateComponent(activatedRoute, router, route, http, snackbar, lookUpsService, config, LettertepmlateService, errMsg, toastr, fb) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.route = route;
        this.http = http;
        this.snackbar = snackbar;
        this.lookUpsService = lookUpsService;
        this.config = config;
        this.LettertepmlateService = LettertepmlateService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.fb = fb;
        this.isNewIncentiveRequestItem = false;
        this.LetterTemplateModels = [];
        this.editMode = false;
        this.loading = false;
        this.displayedColumns = [
            'LetterType', 'Action'
        ];
        this.LetterTemplateModel = {};
        // initialize the form
        this.initForm();
        this.initStaticData('en');
    }
    LettertemplateComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getIncentiveReaquestItmes();
        this.getItemLookup();
    };
    LettertemplateComponent.prototype.onClear = function () {
        this.editMode = false;
        this.letterTemplateForm.reset();
    };
    LettertemplateComponent.prototype.getIncentiveReaquestItmes = function () {
        var _this = this;
        this.LettertepmlateService.getLetterTemplateList().subscribe(function (result) {
            if (result.length > 0) {
                _this.LetterTemplateModels = result;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.LetterTemplateModels);
                _this.loading = false;
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    LettertemplateComponent.prototype.getItemLookup = function () {
        var _this = this;
        this.loadingIndicator = true;
        this.lookupSub = this.lookUpsService
            .getLookupByParentId(707)
            .subscribe(function (result) {
            _this.Lookups = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    LettertemplateComponent.prototype.initStaticData = function (currentLang) {
    };
    LettertemplateComponent.prototype.initForm = function () {
        this.letterTemplateForm = this.fb.group({
            //IncentiveRequestItemId: ['0', Validators.required],
            LetterType: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            // Title: ['0', Validators.required],
            // ToOrg: ['', Validators.compose([Validators.required, Validators.maxLength(4), Validators.pattern('^[0-9]+$')])],
            LetterContent: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            IsActive: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    LettertemplateComponent.prototype.compareIds = function (id1, id2) {
        var a1 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_2__["determineId"])(id1);
        var a2 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_2__["determineId"])(id2);
        return a1 === a2;
    };
    LettertemplateComponent.prototype.onSubmit = function () {
        // if (!this.letterTemplateForm.valid) {
        //   return;
        // }
        var _this = this;
        this.loadingIndicator = true;
        return this.LettertepmlateService.saveletterTemplate(this.getEditedLetterTemplate()).subscribe(function (LetterTemplateModel) {
            _this.saveCompleted(LetterTemplateModel);
        }, function (err) { return _this.handleError(err); });
    };
    LettertemplateComponent.prototype.onEditLetterTemplate = function (index) {
        this.editMode = true;
        this.letterTemplateItemtEditIndex = index;
        this.LetterTemplateModel = this.LetterTemplateModels[index];
        // this.LetterContent = this.LetterTemplateModel.LetterContent.replace(/{{FullName}}/g, 'http://mydomain.com');
        // this.LetterTemplateModel.LetterContent = this.LetterContent;
        this.letterTemplateForm.patchValue(this.LetterTemplateModel);
        // console.log(this.LetterTemplateModel);
    };
    LettertemplateComponent.prototype.deleteLetterTemplate = function (index, id) {
        var _this = this;
        this.LettertepmlateService.deleteletterTemplate(id)
            .subscribe(function () {
            _this.notification('Deleted');
            _this.LetterTemplateModels.splice(index, 1);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.LetterTemplateModels);
        });
    };
    LettertemplateComponent.prototype.notification = function (message) {
        this.loading = false;
        this.toastr.success(" Succesfully " + message + " Data.!", 'Success');
        this.snackbar.open(" Succesfully " + message + " Data.!", 'Close', {
            duration: 3000,
        });
    };
    LettertemplateComponent.prototype.ngOnDestroy = function () {
        // this.IncentiveRequestItemSub.unsubscribe();
    };
    LettertemplateComponent.prototype.onBack = function () {
        // this.router.navigate(['IncentiveRequestItems/list']);
        window.history.back();
    };
    LettertemplateComponent.prototype.saveCompleted = function (LetterTemplateModel) {
        if (LetterTemplateModel) {
            this.LetterTemplateModel = LetterTemplateModel;
            //this.dataSource = new MatTableDataSource<LetterTemplateModel>(this.LetterTemplateModels);
            this.getIncentiveReaquestItmes();
        }
        this.onClear();
        this.loadingIndicator = false;
        this.toastr.success('Record saved successfully!');
        // this.router.navigate(['IncentiveRequestItems/list']);
        //window.history.back();
    };
    LettertemplateComponent.prototype.handleError = function (err) {
        this.loadingIndicator = false;
        this.toastr.error(this.errMsg.getError(err));
        this.loadingIndicator = false;
    };
    LettertemplateComponent.prototype.getEditedLetterTemplate = function () {
        var formModel = this.letterTemplateForm.value;
        return {
            LetterTemplateId: this.isNewIncentiveRequestItem ? 0 : this.LetterTemplateModel.LetterTemplateId,
            LetterType: formModel.LetterType,
            LetterContent: formModel.LetterContent,
            IsActive: true,
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_10__["Subscription"])
    ], LettertemplateComponent.prototype, "incentiveRequestItemSub", void 0);
    LettertemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lettertemplate',
            template: __webpack_require__(/*! ./lettertemplate.component.html */ "./src/app/components/letter-template/lettertemplate.component.html"),
            styles: [__webpack_require__(/*! ./lettertemplate.component.scss */ "./src/app/components/letter-template/lettertemplate.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _Services_look_up_service__WEBPACK_IMPORTED_MODULE_6__["LookUpService"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"],
            _lettertepmlate_service__WEBPACK_IMPORTED_MODULE_11__["LettertepmlateService"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], LettertemplateComponent);
    return LettertemplateComponent;
}());



/***/ }),

/***/ "./src/app/components/letter-template/lettertemplate.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/letter-template/lettertemplate.module.ts ***!
  \*********************************************************************/
/*! exports provided: LettertemplateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LettertemplateModule", function() { return LettertemplateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _lettertempalte_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lettertempalte-routing.module */ "./src/app/components/letter-template/lettertempalte-routing.module.ts");
/* harmony import */ var _lettertemplate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lettertemplate.component */ "./src/app/components/letter-template/lettertemplate.component.ts");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "./node_modules/@tinymce/tinymce-angular/esm5/tinymce-tinymce-angular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LettertemplateModule = /** @class */ (function () {
    function LettertemplateModule() {
    }
    LettertemplateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _lettertempalte_routing_module__WEBPACK_IMPORTED_MODULE_3__["LettertempalteRoutingModule"],
                _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_5__["EditorModule"]
            ],
            declarations: [_lettertemplate_component__WEBPACK_IMPORTED_MODULE_4__["LettertemplateComponent"]],
            exports: [_lettertemplate_component__WEBPACK_IMPORTED_MODULE_4__["LettertemplateComponent"]]
        })
    ], LettertemplateModule);
    return LettertemplateModule;
}());



/***/ }),

/***/ "./src/app/components/letter-template/lettertepmlate.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/letter-template/lettertepmlate.service.ts ***!
  \**********************************************************************/
/*! exports provided: LettertepmlateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LettertepmlateService", function() { return LettertepmlateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/appconfig */ "./src/app/config/appconfig.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LettertepmlateService = /** @class */ (function () {
    function LettertepmlateService(httpClient, appConfig, config, errMsg) {
        this.httpClient = httpClient;
        this.appConfig = appConfig;
        this.config = config;
        this.errMsg = errMsg;
        this.letterTemplateList = [];
    }
    LettertepmlateService.prototype.getLetterTemplateList = function () {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('letterTemplates')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (letterTemplateList) { return _this.letterTemplateList = letterTemplateList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    LettertepmlateService.prototype.getletterTemplate = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('letterTemplate', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (letterTemplatedata) {
            _this.LetterTemplateModel = letterTemplatedata;
            return _this.LetterTemplateModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    LettertepmlateService.prototype.saveletterTemplate = function (data) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('letterTemplate'), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (letterTemplate) {
            _this.LetterTemplateModel = letterTemplate;
            // console.log(this.LetterTemplateModel);
            return _this.LetterTemplateModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    LettertepmlateService.prototype.deleteletterTemplate = function (id) {
        return this.httpClient.delete(this.config.urls.url('letterTemplate', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parsePromiseResponseError));
    };
    LettertepmlateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_4__["AppConfiguration"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_4__["AppConfiguration"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"]])
    ], LettertepmlateService);
    return LettertepmlateService;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-letter-template-lettertemplate-module.js.map