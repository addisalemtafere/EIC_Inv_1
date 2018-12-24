(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-incentive-incentive-detail-incentive-detail-module"],{

/***/ "./src/app/Services/application-setting.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/Services/application-setting.service.ts ***!
  \*********************************************************/
/*! exports provided: ApplicationSettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationSettingService", function() { return ApplicationSettingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base.service */ "./src/app/Services/Base.service.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApplicationSettingService = /** @class */ (function (_super) {
    __extends(ApplicationSettingService, _super);
    function ApplicationSettingService(http, appConfig, errMsg) {
        var _this = _super.call(this, http, appConfig.urls.url('ApplicationSettings'), errMsg) || this;
        _this.http = http;
        _this.appConfig = appConfig;
        _this.errMsg = errMsg;
        return _this;
    }
    ApplicationSettingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"]])
    ], ApplicationSettingService);
    return ApplicationSettingService;
}(_Base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/components/incentive/incentive-detail/incentive-detail-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-detail/incentive-detail-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: IncentiveDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncentiveDetailRoutingModule", function() { return IncentiveDetailRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _incentive_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./incentive-detail.component */ "./src/app/components/incentive/incentive-detail/incentive-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _incentive_detail_component__WEBPACK_IMPORTED_MODULE_2__["IncentiveDetailComponent"] }
];
var IncentiveDetailRoutingModule = /** @class */ (function () {
    function IncentiveDetailRoutingModule() {
    }
    IncentiveDetailRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], IncentiveDetailRoutingModule);
    return IncentiveDetailRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/incentive/incentive-detail/incentive-detail.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-detail/incentive-detail.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form formGroup=\"incentiveDetailForm\">\r\n  <div fxLayout.xs=\"row wrap\" fxLayoutAlign.xs=\"start center\" fxLayoutGap=\"2em\">\r\n    <!--<div class=\"block\" fxLayoutGap=\"2em\">-->\r\n    <div style=\"padding: 10px\">\r\n      <mat-form-field style=\"width: 150px\">\r\n        <mat-label>{{'incentiverequest.IncentiveCategory' | translate}}</mat-label>\r\n        <mat-select formControlName=\"IncentiveCategoryId\" style=\"font-family: Calibri\" type=\"text\"\r\n                    (selectionChange)=\"filterIncentiveCategory($event.value)\"\r\n                    [compareWith]=\"compareIds\" required>\r\n          <option value=\"0\">--Select--</option>\r\n          <mat-option *ngFor=\"let IncentiveCate of IncentiveCategoryLookup\" [value]=\"IncentiveCate.LookUpTypeId\">\r\n            <span>{{IncentiveCate.Description}}</span>\r\n          </mat-option>\r\n        </mat-select>\r\n        <!--<mat-error *ngIf=\"IncentiveCategoryId.hasError('required')\">-->\r\n        <!--{{'common.validation.Required' | translate}}-->\r\n        <!--</mat-error>-->\r\n      </mat-form-field>\r\n    </div>\r\n    <div style=\"padding: 10px\">\r\n      <button color=\"primary\" mat-raised-button=\"\" (click)=\"showLetter()\">\r\n        Show Letter\r\n      </button>\r\n    </div>\r\n    <div style=\"padding: 10px\">\r\n        <span *ngIf=\"isVisibleShowBalance\">\r\n        <button color=\"primary\" mat-raised-button=\"\" (click)=\"showBalance()\">\r\n          Show Balance\r\n        </button>\r\n          <!--</div>-->\r\n          </span>\r\n    </div>\r\n  </div>\r\n\r\n  <!--<span ngif=\"ShowItemDetails\">-->\r\n</form>\r\n<mat-card class=\"margin-2 padding-0\">\r\n  <div class=\"search-box\" style=\"width: 500px\">\r\n    <mat-form-field>\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search requested item\">\r\n    </mat-form-field>\r\n  </div>\r\n  <!-- <mat-card-header>\r\n    <mat-card-subtitle class=\"sub-title\">List of Requested Items\r\n    </mat-card-subtitle>\r\n  </mat-card-header> -->\r\n  <mat-card-content>\r\n    <div class=\"spinner-container\" *ngIf=\"loading \">\r\n      <mat-progress-bar mode=\"query\"></mat-progress-bar>\r\n    </div>\r\n\r\n    <mat-table #table [dataSource]=\"dataSource\">\r\n      <ng-container matColumnDef=\"No\">\r\n        <mat-header-cell [fxFlex]=\"6\" *matHeaderCellDef>No</mat-header-cell>\r\n        <mat-cell [fxFlex]=\"6\" *matCellDef=\"let itemList;let i=index;\">\r\n          {{i+1}}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"IncentiveItem\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"28\">Incentive Item</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let items\" fxFlex=\"28\"> {{items.Description}}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Quantity\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"14\">Quantity</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let items\" fxFlex=\"14\">{{items.Quantity }}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Amount\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"14\"> Amount</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let items\" fxFlex=\"14\"> {{items.Amount }}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"RequestDate\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"14\"> Request Date</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let items\" fxFlex=\"14\"> {{items.RequestDate | date:'MM/dd/yyyy' }}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\">\r\n      </mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n    <mat-paginator [pageSizeOptions]=\"[5,10, 25, 100]\"></mat-paginator>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/incentive/incentive-detail/incentive-detail.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-detail/incentive-detail.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/incentive/incentive-detail/incentive-detail.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-detail/incentive-detail.component.ts ***!
  \*************************************************************************************/
/*! exports provided: IncentiveDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncentiveDetailComponent", function() { return IncentiveDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_lookup_type_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/lookup-type.service */ "./src/app/Services/lookup-type.service.ts");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_look_up_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Services/look-up.service */ "./src/app/Services/look-up.service.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _Services_application_setting_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../Services/application-setting.service */ "./src/app/Services/application-setting.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _project_profile_letter_letter_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../project-profile/letter/letter.service */ "./src/app/components/project-profile/letter/letter.service.ts");
/* harmony import */ var _custor_helpers_compare__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @custor/helpers/compare */ "./src/@custor/helpers/compare.ts");
/* harmony import */ var _incentive_request_requested_items_list_requested_items_list_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../incentive-request/requested-items-list/requested-items-list.service */ "./src/app/components/incentive/incentive-request/requested-items-list/requested-items-list.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var IncentiveDetailComponent = /** @class */ (function () {
    function IncentiveDetailComponent(activatedRoute, router, letterService, lookUpTypeService, route, http, snackbar, lookUpsService, config, dialog, accountService, settingService, IncentiveRequestItemService, errMsg, toastr, fb) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.letterService = letterService;
        this.lookUpTypeService = lookUpTypeService;
        this.route = route;
        this.http = http;
        this.snackbar = snackbar;
        this.lookUpsService = lookUpsService;
        this.config = config;
        this.dialog = dialog;
        this.accountService = accountService;
        this.settingService = settingService;
        this.IncentiveRequestItemService = IncentiveRequestItemService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.fb = fb;
        this.isNewIncentiveRequestItem = false;
        this.IncentiveRequestModels = [];
        this.items = [];
        this.editMode = false;
        this.loading = false;
        this.letterModelList = [];
        this.isForDetail = 1;
        this.displayedColumns = [
            'No', 'IncentiveItem', 'Quantity', 'Amount', 'RequestDate'
        ];
        this.isVisibleShowBalance = false;
        this.IncentiveRequestModel = {};
        // initialize the form
    }
    IncentiveDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.serviceId = this.activatedRoute.snapshot.params['serviceId'] || this.activatedRoute.snapshot.params['ServiceId'];
        this.serviceApplicationId = this.activatedRoute.snapshot.params['serviceApplicationId'] || this.activatedRoute.snapshot.params['ServiceApplicationId'];
        this.projectId = this.activatedRoute.snapshot.params['projectId'] || this.activatedRoute.snapshot.params['ProjectId'];
        //// console.log(this.serviceId);
        this.route.params
            .subscribe(function (params) {
            _this.getIncentiveRequestItems(_this.projectId);
            // this.getLetters();
            _this.getIncentiveCategory();
            // }
        });
    };
    IncentiveDetailComponent.prototype.initForm = function () {
        this.incentiveDetailForm = this.fb.group({});
    };
    IncentiveDetailComponent.prototype.getLetters = function () {
        var _this = this;
        this.letterService.getLetterLists(this.projectId)
            .subscribe(function (result) {
            if (result) {
                _this.letterModelList = result;
                // console.log(this.letterModelList);
                _this.dataSourceLetter = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.letterModelList);
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    IncentiveDetailComponent.prototype.getIncentiveRequestItems = function (projectId) {
        var _this = this;
        this.IncentiveRequestItemService.getIncentiveRequestDetailsByProjectId(projectId).subscribe(function (result) {
            if (result.length > 0) {
                _this.items = result;
                // console.log(this.items);
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.items);
                _this.loading = false;
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    IncentiveDetailComponent.prototype.getIncentiveRequestItemsBytCategoryCode = function (projectId, categoryId) {
        var _this = this;
        this.IncentiveRequestItemService.getIncentiveRequestDetailsBytCategoryCode(this.activatedRoute.snapshot.params['projectId'], categoryId).subscribe(function (result) {
            if (result.length > 0) {
                _this.items = result;
                // console.log(this.items);
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.items);
                _this.loading = false;
            }
            else {
                if (categoryId == 10778 || categoryId == 10782) {
                    _this.isVisibleShowBalance = false;
                }
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](result);
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    IncentiveDetailComponent.prototype.filterIncentiveCategory = function (categoryCode) {
        if (!categoryCode) {
            return;
        }
        this.currentCategoryId = categoryCode;
        console.log(this.currentCategoryId);
        if (categoryCode === 10778 || categoryCode === 10782 || categoryCode === 10777) {
            this.isVisibleShowBalance = true;
        }
        else {
            this.isVisibleShowBalance = false;
        }
        this.getIncentiveRequestItemsBytCategoryCode(this.projectId, categoryCode);
    };
    IncentiveDetailComponent.prototype.getIncentiveCategory = function () {
        var _this = this;
        this.lookUpTypeService.getLookupByParentId().subscribe(function (result) {
            _this.IncentiveCategoryLookup = result;
        });
    };
    IncentiveDetailComponent.prototype.showBalance = function () {
        console.log(this.currentCategoryId);
        if (this.currentCategoryId == 10778 || this.currentCategoryId == 10782) {
            this.router.navigate(['bom-balance/' + this.projectId + '/' + 0 + '/' + 0]);
        }
        else if (this.currentCategoryId == 10777) {
            this.router.navigate(['sparepart-balance/' + this.projectId + '/' + 0]);
        }
    };
    IncentiveDetailComponent.prototype.showLetter = function () {
        this.serviceId = 0;
        this.serviceApplicationId = 0;
        this.router.navigate(['letter/' + this.projectId + '/' + this.serviceId + '/' + this.serviceApplicationId + '/' + this.isForDetail]);
    };
    IncentiveDetailComponent.prototype.compareIds = function (id1, id2) {
        var a1 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_14__["determineId"])(id1);
        var a2 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_14__["determineId"])(id2);
        return a1 === a2;
    };
    IncentiveDetailComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue.replace(/[\W_]/g, '');
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"])
    ], IncentiveDetailComponent.prototype, "incentiveRequestItemSub", void 0);
    IncentiveDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-incentive-detail',
            template: __webpack_require__(/*! ./incentive-detail.component.html */ "./src/app/components/incentive/incentive-detail/incentive-detail.component.html"),
            styles: [__webpack_require__(/*! ./incentive-detail.component.scss */ "./src/app/components/incentive/incentive-detail/incentive-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _project_profile_letter_letter_service__WEBPACK_IMPORTED_MODULE_13__["LetterService"],
            _Services_lookup_type_service__WEBPACK_IMPORTED_MODULE_1__["LookupTypeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _Services_look_up_service__WEBPACK_IMPORTED_MODULE_7__["LookUpService"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_2__["AppConfiguration"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"],
            _Services_application_setting_service__WEBPACK_IMPORTED_MODULE_11__["ApplicationSettingService"],
            _incentive_request_requested_items_list_requested_items_list_service__WEBPACK_IMPORTED_MODULE_15__["IncentiveRequestDetailService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_10__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], IncentiveDetailComponent);
    return IncentiveDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/incentive/incentive-detail/incentive-detail.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-detail/incentive-detail.module.ts ***!
  \**********************************************************************************/
/*! exports provided: IncentiveDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncentiveDetailModule", function() { return IncentiveDetailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _incentive_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./incentive-detail-routing.module */ "./src/app/components/incentive/incentive-detail/incentive-detail-routing.module.ts");
/* harmony import */ var _incentive_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./incentive-detail.component */ "./src/app/components/incentive/incentive-detail/incentive-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var IncentiveDetailModule = /** @class */ (function () {
    function IncentiveDetailModule() {
    }
    IncentiveDetailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _incentive_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__["IncentiveDetailRoutingModule"]
            ],
            declarations: [_incentive_detail_component__WEBPACK_IMPORTED_MODULE_4__["IncentiveDetailComponent"]],
            exports: [_incentive_detail_component__WEBPACK_IMPORTED_MODULE_4__["IncentiveDetailComponent"]],
        })
    ], IncentiveDetailModule);
    return IncentiveDetailModule;
}());



/***/ }),

/***/ "./src/app/components/project-profile/letter/letter.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/project-profile/letter/letter.service.ts ***!
  \*********************************************************************/
/*! exports provided: LetterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterService", function() { return LetterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LetterService = /** @class */ (function () {
    function LetterService(httpClient, appConfig, config, errMsg) {
        this.httpClient = httpClient;
        this.appConfig = appConfig;
        this.config = config;
        this.errMsg = errMsg;
        this.letterModelList = [];
    }
    LetterService.prototype.getLetterList = function (projectId, LetterType, LetterType1) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('letters', projectId, LetterType, LetterType1)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (letterModelList) { return _this.letterModelList = letterModelList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    LetterService.prototype.getLetterLists = function (projectId) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('lettersByProjectId', projectId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (letterModelList) { return _this.letterModelList = letterModelList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    LetterService.prototype.getletter = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('letter', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (letterModeldata) {
            _this.letterModel = letterModeldata;
            return _this.letterModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    LetterService.prototype.saveletter = function (data) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('letter'), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (letterModel) {
            _this.letterModel = letterModel;
            // // console.log(this.letterModel);
            return _this.letterModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    LetterService.prototype.deleteletter = function (id) {
        return this.httpClient.delete(this.config.urls.url('letter', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errMsg.parsePromiseResponseError));
    };
    LetterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"]])
    ], LetterService);
    return LetterService;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-incentive-incentive-detail-incentive-detail-module.js.map