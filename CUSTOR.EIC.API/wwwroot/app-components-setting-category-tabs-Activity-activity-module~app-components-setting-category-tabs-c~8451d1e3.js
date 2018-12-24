(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-setting-category-tabs-Activity-activity-module~app-components-setting-category-tabs-c~8451d1e3"],{

/***/ "./src/app/components/setting/category-tabs/Activity/activity-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/setting/category-tabs/Activity/activity-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ActivityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityRoutingModule", function() { return ActivityRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _activity_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activity.component */ "./src/app/components/setting/category-tabs/Activity/activity.component.ts");
/* harmony import */ var _edit_edit_activity_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit-activity.component */ "./src/app/components/setting/category-tabs/Activity/edit/edit-activity.component.ts");
/* harmony import */ var _list_list_activity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list-activity.component */ "./src/app/components/setting/category-tabs/Activity/list/list-activity.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '', component: _activity_component__WEBPACK_IMPORTED_MODULE_2__["ActivityComponent"], children: [
            { path: '', component: _list_list_activity_component__WEBPACK_IMPORTED_MODULE_4__["ListActivityComponent"] },
            { path: 'list', component: _list_list_activity_component__WEBPACK_IMPORTED_MODULE_4__["ListActivityComponent"] },
            { path: 'edit/:id', component: _edit_edit_activity_component__WEBPACK_IMPORTED_MODULE_3__["EditActivityComponent"] }
        ]
    }
];
var ActivityRoutingModule = /** @class */ (function () {
    function ActivityRoutingModule() {
    }
    ActivityRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ActivityRoutingModule);
    return ActivityRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/setting/category-tabs/Activity/activity.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/setting/category-tabs/Activity/activity.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/setting/category-tabs/Activity/activity.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/setting/category-tabs/Activity/activity.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/setting/category-tabs/Activity/activity.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/setting/category-tabs/Activity/activity.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
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

var ActivityComponent = /** @class */ (function () {
    function ActivityComponent() {
    }
    ActivityComponent.prototype.ngOnInit = function () {
    };
    ActivityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activity',
            template: __webpack_require__(/*! ./activity.component.html */ "./src/app/components/setting/category-tabs/Activity/activity.component.html"),
            styles: [__webpack_require__(/*! ./activity.component.css */ "./src/app/components/setting/category-tabs/Activity/activity.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ActivityComponent);
    return ActivityComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/category-tabs/Activity/activity.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/setting/category-tabs/Activity/activity.module.ts ***!
  \******************************************************************************/
/*! exports provided: ActivityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityModule", function() { return ActivityModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _activity_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activity-routing.module */ "./src/app/components/setting/category-tabs/Activity/activity-routing.module.ts");
/* harmony import */ var _list_list_activity_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list-activity.component */ "./src/app/components/setting/category-tabs/Activity/list/list-activity.component.ts");
/* harmony import */ var _edit_edit_activity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit-activity.component */ "./src/app/components/setting/category-tabs/Activity/edit/edit-activity.component.ts");
/* harmony import */ var _activity_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./activity.component */ "./src/app/components/setting/category-tabs/Activity/activity.component.ts");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ActivityModule = /** @class */ (function () {
    function ActivityModule() {
    }
    ActivityModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _activity_routing_module__WEBPACK_IMPORTED_MODULE_2__["ActivityRoutingModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: [_list_list_activity_component__WEBPACK_IMPORTED_MODULE_3__["ListActivityComponent"], _edit_edit_activity_component__WEBPACK_IMPORTED_MODULE_4__["EditActivityComponent"], _activity_component__WEBPACK_IMPORTED_MODULE_5__["ActivityComponent"]],
            exports: [_list_list_activity_component__WEBPACK_IMPORTED_MODULE_3__["ListActivityComponent"], _edit_edit_activity_component__WEBPACK_IMPORTED_MODULE_4__["EditActivityComponent"], _activity_component__WEBPACK_IMPORTED_MODULE_5__["ActivityComponent"]],
        })
    ], ActivityModule);
    return ActivityModule;
}());



/***/ }),

/***/ "./src/app/components/setting/category-tabs/Activity/edit/edit-activity.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/setting/category-tabs/Activity/edit/edit-activity.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* div {\r\n  display: flex;\r\n} */\r\n\r\nmat-card {\r\n  max-width: 500px;\r\n  margin: 10px auto;\r\n  text-align: center;\r\n}\r\n\r\nmat-checkbox {\r\n  max-width: 500px;\r\n  margin: 2em auto;\r\n  text-align: left;\r\n}\r\n\r\n/*mat-form-field  {*/\r\n\r\n/*max-width: 400px;*/\r\n\r\n/*margin-right: 10px;*/\r\n\r\n/*font-size: 16px;*/\r\n\r\n/*}*/\r\n\r\n.row\r\n{\r\n  text-align: left;\r\n  margin-bottom: 15px;\r\n}"

/***/ }),

/***/ "./src/app/components/setting/category-tabs/Activity/edit/edit-activity.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/setting/category-tabs/Activity/edit/edit-activity.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containerX\">\r\n  <mat-card>\r\n    <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>\r\n    <mat-card-header>\r\n      <mat-card-title>\r\n        <!-- <mat-icon class=\"mat-button-icon\">person_add</mat-icon> Edit Customer -->\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <br />\r\n    <mat-card-content>\r\n      <form #form=\"ngForm\" [formGroup]=\"activityForm\" novalidate (ngSubmit)=\"onSubmit()\" fxLayout=\"column\"\r\n            autocomplete=\"off\">\r\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n          <mat-form-field  style=\"width: 150px\">\r\n            <mat-label>Sector:</mat-label>\r\n            <mat-select formControlName=\"cSector\" [compareWith]=\"compareIds\" (selectionChange)=\"filterSector($event.value)\" required>\r\n              <mat-option *ngFor=\"let sector of sectorModels\" [value]=\"sector.SectorId\">\r\n                <span>{{sector.DescriptionEnglishAlias}}</span>\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <mat-form-field  style=\"width: 150px\">\r\n            <mat-label>Sub Sector:</mat-label>\r\n            <mat-select formControlName=\"cSubSector\" [compareWith]=\"compareIds\" required>\r\n              <mat-option *ngFor=\"let subsector of fillterssubsectorModels\" [value]=\"subsector.SubSectorId\">\r\n                <span>{{subsector.DescriptionEnglishAlias}}</span>\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <mat-label>Description:</mat-label>\r\n            <input matInput formControlName=\"cDescription\"  required maxlength=\"150\" />\r\n            <mat-error *ngIf=\"Description.hasError('required')\">\r\n              Please enter Description amharic\r\n            </mat-error>\r\n            <mat-error *ngIf=\"Description.hasError('pattern')\">\r\n              Only amharic alphabetic charcters are allowed!\r\n            </mat-error>\r\n            <mat-error *ngIf=\"!Description.hasError('maxlength')\">\r\n              Maximum charcters length is 150!\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <mat-label>Description Alias:</mat-label>\r\n            <input matInput formControlName=\"cDescriptionAlias\"  required maxlength=\"20\" />\r\n            <mat-error *ngIf=\"DescriptionAlias.hasError('required')\">\r\n              Please enter Description Alias amharic\r\n            </mat-error>\r\n            <mat-error *ngIf=\"DescriptionAlias.hasError('pattern')\">\r\n              Only amharic alphabetic charcters are allowed!\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <mat-label >Description English:</mat-label>\r\n            <input matInput formControlName=\"cDescriptionEnglish\" required maxlength=\"200\" />\r\n            <mat-error *ngIf=\"DescriptionEnglish.hasError('required')\">\r\n              Please enter service name english\r\n            </mat-error>\r\n            <mat-error *ngIf=\"DescriptionEnglish.hasError('pattern')\">\r\n              Only alphabetic charcters are allowed!\r\n            </mat-error>\r\n            <mat-error *ngIf=\"!DescriptionEnglish.hasError('maxlength')\">\r\n              Maximum charcters length is 200!\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <mat-label >Description English Alias:</mat-label>\r\n            <input matInput formControlName=\"cDescriptionEnglishAlias\" required maxlength=\"30\" />\r\n            <mat-error *ngIf=\"DescriptionEnglishAlias.hasError('required')\">\r\n              Please enter service name english\r\n            </mat-error>\r\n            <mat-error *ngIf=\"DescriptionEnglishAlias.hasError('pattern')\">\r\n              Only alphabetic charcters are allowed!\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div mat-dialog-actions>\r\n          <button [disabled]=\"form.invalid\" mat-raised-button type=\"submit\" color=\"primary\">\r\n            Save\r\n          </button>\r\n          <button mat-raised-button (click)=\"onBack()\" color=\"warn\" type=\"button\">\r\n            Cancel\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/components/setting/category-tabs/Activity/edit/edit-activity.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/setting/category-tabs/Activity/edit/edit-activity.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: EditActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditActivityComponent", function() { return EditActivityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _activity_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../activity.service */ "./src/app/components/setting/category-tabs/Activity/activity.service.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _custor_helpers_compare__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../@custor/helpers/compare */ "./src/@custor/helpers/compare.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EditActivityComponent = /** @class */ (function () {
    function EditActivityComponent(activatedRoute, router, http, config, activityService, errMsg, toastr, fb) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.http = http;
        this.config = config;
        this.activityService = activityService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.fb = fb;
        /*serviceId:number;*/
        this.isNewActivity = false;
        this.activityModels = [];
        this.sectorModels = [];
        this.subsectorModels = [];
        this.fillterssubsectorModels = [];
        this.activity = {};
        // initialize the form
        this.initForm();
        this.initStaticData('en');
    }
    EditActivityComponent.prototype.ngOnInit = function () {
        var id = this.activatedRoute.snapshot.params['id'];
        if (id < 1) {
            this.isNewActivity = true;
            this.title = 'Create a new Service';
            /*this.getService();*/
            this.getSector();
            this.getSubSector();
            return;
        }
        if (id) {
            this.getActivity(id);
        }
    };
    EditActivityComponent.prototype.getSector = function () {
        var _this = this;
        this.activityService.getSector()
            .subscribe(function (result) {
            _this.sectorModels = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    EditActivityComponent.prototype.getSubSector = function () {
        var _this = this;
        this.activityService.getSubSector()
            .subscribe(function (result) {
            _this.subsectorModels = result;
            _this.filterSector(_this.activity.SubSector.SectorId);
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    EditActivityComponent.prototype.initStaticData = function (currentLang) {
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
    EditActivityComponent.prototype.getActivity = function (id) {
        var _this = this;
        this.isNewActivity = false;
        this.loadingIndicator = true;
        this.activitySub = this.activityService
            .getActivity(id)
            .subscribe(function (result) {
            _this.activity = result;
            _this.getSector();
            _this.getSubSector();
            _this.updateForm();
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
        this.loadingIndicator = false;
    };
    EditActivityComponent.prototype.updateForm = function () {
        // console.log(this.activity);
        this.activityForm.patchValue({
            cDescription: this.activity.Description == null ? '' : this.activity.Description.toString(),
            cDescriptionAlias: this.activity.DescriptionAlias == null ? '' : this.activity.DescriptionAlias.toString(),
            cDescriptionEnglish: this.activity.DescriptionEnglish == null ? '' : this.activity.DescriptionEnglish.toString(),
            cDescriptionEnglishAlias: this.activity.DescriptionEnglishAlias == null ? '' : this.activity.DescriptionEnglishAlias.toString(),
            cSector: this.activity.SubSector.SectorId,
            cSubSector: this.activity.SubSectorId,
        });
        // },4000);
        this.isNewActivity = false;
    };
    EditActivityComponent.prototype.initForm = function () {
        this.activityForm = this.fb.group({
            cDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(150),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^([ \u1200-\u137F])+$')])],
            cDescriptionAlias: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^([ \u1200-\u137F])+$')],
            cDescriptionEnglish: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(200),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z /,]+$')])],
            cDescriptionEnglishAlias: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z /,]+$')],
            cSector: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cSubSector: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    EditActivityComponent.prototype.compareIds = function (id1, id2) {
        var a1 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_9__["determineId"])(id1);
        var a2 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_9__["determineId"])(id2);
        return a1 === a2;
    };
    EditActivityComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.activityForm.valid) {
            return;
        }
        if (this.isNewActivity) {
            /* if (this.checkRecordExistance()) {
               this.toastr.show(
                 'Record Exist', 'message', {
                   closeButton: true
                 })
               return;
             }*/
            this.loadingIndicator = true;
        }
        return this.activityService.saveAcitivity(this.getEditedActivity()).subscribe(function (activity) {
            _this.saveCompleted(activity);
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
    EditActivityComponent.prototype.saveCompleted = function (activity) {
        if (activity) {
            this.activity = activity;
        }
        this.loadingIndicator = false;
        this.toastr.success('Record saved successfully!');
        //this.router.navigate(['activitys/list']);
        this.router.navigate(['category']);
    };
    EditActivityComponent.prototype.handleError = function (err) {
        this.loadingIndicator = false;
        this.toastr.error(this.errMsg.getError(err));
        this.loadingIndicator = false;
    };
    EditActivityComponent.prototype.getEditedActivity = function () {
        var formModel = this.activityForm.value;
        return {
            ActivityId: this.isNewActivity ? 0 : this.activity.ActivityId,
            SectorId: formModel.cSector,
            SubSectorId: formModel.cSubSector,
            Description: formModel.cDescription,
            DescriptionAlias: formModel.cDescriptionAlias,
            DescriptionEnglish: formModel.cDescriptionEnglish,
            DescriptionEnglishAlias: formModel.cDescriptionEnglishAlias,
            Sector: null,
            SubSector: null,
        };
    };
    EditActivityComponent.prototype.filterSector = function (sectorCode) {
        if (!sectorCode) {
            return;
        }
        this.fillterssubsectorModels = null;
        this.fillterssubsectorModels = this.subsectorModels.filter(function (item) {
            return item.SectorId === sectorCode;
        });
    };
    EditActivityComponent.prototype.ngOnDestroy = function () {
        //  this.activitySub.unsubscribe();
    };
    EditActivityComponent.prototype.onBack = function () {
        //this.router.navigate(['activitys/list']);
        this.router.navigate(['category']);
    };
    Object.defineProperty(EditActivityComponent.prototype, "Description", {
        get: function () {
            return this.activityForm.get('cDescription');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditActivityComponent.prototype, "DescriptionAlias", {
        get: function () {
            return this.activityForm.get('cDescriptionAlias');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditActivityComponent.prototype, "DescriptionEnglish", {
        get: function () {
            return this.activityForm.get('cDescriptionEnglish');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditActivityComponent.prototype, "DescriptionEnglishAlias", {
        get: function () {
            return this.activityForm.get('cDescriptionEnglishAlias');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_3__["Subscription"])
    ], EditActivityComponent.prototype, "activitySub", void 0);
    EditActivityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-activity',
            template: __webpack_require__(/*! ./edit-activity.component.html */ "./src/app/components/setting/category-tabs/Activity/edit/edit-activity.component.html"),
            styles: [__webpack_require__(/*! ./edit-activity.component.css */ "./src/app/components/setting/category-tabs/Activity/edit/edit-activity.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_5__["AppConfiguration"],
            _activity_service__WEBPACK_IMPORTED_MODULE_7__["ActivityService"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], EditActivityComponent);
    return EditActivityComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/category-tabs/Activity/list/list-activity.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/setting/category-tabs/Activity/list/list-activity.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/setting/category-tabs/Activity/list/list-activity.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/setting/category-tabs/Activity/list/list-activity.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:600px\">\r\n  <!--<mat-toolbar color=\"primary\">-->\r\n  <!--<mat-toolbar-row>-->\r\n  <!--<span>Activity Maintainace</span>-->\r\n  <!--&lt;!&ndash; <span class=\"toolbar-spacer\"></span>&ndash;&gt;-->\r\n  <!--<div class=\"header-actions\" style=\"width: 100%;\">-->\r\n  <!--<mat-form-field>-->\r\n  <!--<input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">-->\r\n  <!--</mat-form-field>-->\r\n\r\n  <!--<button mat-icon-button [routerLink]=\"['/activitys/edit/', 0]\">-->\r\n  <!--<mat-icon class=\"mat-button-icon\">add</mat-icon>-->\r\n  <!--Add-->\r\n  <!--</button>-->\r\n  <!--<button mat-icon-button>-->\r\n  <!--<mat-icon>more_vertical</mat-icon>-->\r\n  <!--</button>-->\r\n\r\n  <!--</div>-->\r\n  <!--</mat-toolbar-row>-->\r\n  <!--</mat-toolbar>-->\r\n  <div class=\"mat-elevation-z8\">\r\n    <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>\r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n      <ng-container matColumnDef=\"Id\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"50px\">Id</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxFlex=\"50px\"> {{row.ActivityId}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"SubSector\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"100px\">SubSector</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxFlex=\"100px\"> {{row.SubSector.DescriptionEnglishAlias}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Description\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"180px\">Description</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxFlex=\"180px\"> {{row.DescriptionAlias}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"DescriptionEnglish\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"180px\">Description English</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxFlex=\"180px\"> {{row.DescriptionEnglishAlias}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"actions\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"100px\">\r\n        </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let activitys\" fxFlex=\"100px\">\r\n          <button mat-icon-button (click)=\"editActivity(activitys)\" type=\"button\">\r\n            <mat-icon>edit</mat-icon>\r\n          </button>\r\n          <button mat-icon-button (click)=\"confirmDelete(activitys)\" type=\"button\">\r\n            <mat-icon color=\"warn\">delete</mat-icon>\r\n          </button>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/setting/category-tabs/Activity/list/list-activity.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/setting/category-tabs/Activity/list/list-activity.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ListActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListActivityComponent", function() { return ListActivityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _activity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../activity.service */ "./src/app/components/setting/category-tabs/Activity/activity.service.ts");
/* harmony import */ var _custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../@custor/components/confirm-dialog/confirm-dialog.component */ "./src/@custor/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../@custor/helpers/utilities */ "./src/@custor/helpers/utilities.ts");
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









var ListActivityComponent = /** @class */ (function () {
    function ListActivityComponent(http, subActivityService, errMsg, toastr, dialog, router, route) {
        this.http = http;
        this.subActivityService = subActivityService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.displayedColumns = ['Id', 'SubSector', 'Description', 'DescriptionEnglish', 'actions'];
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    ListActivityComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListActivityComponent.prototype.ngOnInit = function () {
        this.getActivitys();
    };
    ListActivityComponent.prototype.getActivitys = function () {
        var _this = this;
        this.loadingIndicator = true;
        this.subActivityService.getActivitys()
            .subscribe(function (result) {
            _this.activityModels = result;
            if (!_this.activityModels) {
                _this.toastr.error('No records were found to list', 'Error', {
                    closeButton: true,
                });
            }
            else {
                _this.dataSource.data = _this.activityModels;
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
    ListActivityComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ListActivityComponent.prototype.editActivity = function (activityModel) {
        if (activityModel) {
            this.router.navigate(['/activitys/edit', activityModel.ActivityId], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['/activitys/edit', 0]);
        }
    };
    ListActivityComponent.prototype.confirmDelete = function (activityModel) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AngConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            _this.loadingIndicator = true;
            if (result) {
                _this.subActivityService.deleteAcitivity(activityModel)
                    .subscribe(function (results) {
                    _this.loadingIndicator = false;
                    _this.dataSource.data = _this.dataSource.data.filter(function (item) { return item !== activityModel; });
                }, function (error) {
                    // tslint:disable-next-line:max-line-length
                    _this.toastr.error("An error occured whilst deleting the activity.\r\nError: \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_7__["Utilities"].getHttpResponseMessage(error) + "\"", 'Delete Error');
                });
            }
            _this.loadingIndicator = false;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ListActivityComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ListActivityComponent.prototype, "sort", void 0);
    ListActivityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list-activity.component.html */ "./src/app/components/setting/category-tabs/Activity/list/list-activity.component.html"),
            styles: [__webpack_require__(/*! ./list-activity.component.css */ "./src/app/components/setting/category-tabs/Activity/list/list-activity.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _activity_service__WEBPACK_IMPORTED_MODULE_5__["ActivityService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ListActivityComponent);
    return ListActivityComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-setting-category-tabs-Activity-activity-module~app-components-setting-category-tabs-c~8451d1e3.js.map