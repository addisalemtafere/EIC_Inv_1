(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-project-profile-project-substitute-ProjectSubstitute-module"],{

/***/ "./src/app/Services/project-substitute.service.ts":
/*!********************************************************!*\
  !*** ./src/app/Services/project-substitute.service.ts ***!
  \********************************************************/
/*! exports provided: ProjectSubstituteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectSubstituteService", function() { return ProjectSubstituteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _Base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Base.service */ "./src/app/Services/Base.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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






var ProjectSubstituteService = /** @class */ (function (_super) {
    __extends(ProjectSubstituteService, _super);
    function ProjectSubstituteService(http, appConfig, errMsg) {
        var _this = _super.call(this, http, appConfig.urls.url('ProjectSubstitutes'), errMsg) || this;
        _this.http = http;
        _this.appConfig = appConfig;
        _this.errMsg = errMsg;
        return _this;
    }
    ProjectSubstituteService.prototype.getSubstituteByServiceApplicationId = function (id) {
        return this.httpClient.get(this.appConfig.urls.url('ServiceApplicationSubstitute') + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ProjectSubstituteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_2__["AppConfiguration"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"]])
    ], ProjectSubstituteService);
    return ProjectSubstituteService;
}(_Base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ }),

/***/ "./src/app/components/project-profile/project-substitute/ProjectSubstitute.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-substitute/ProjectSubstitute.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProjectSubstituteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectSubstituteModule", function() { return ProjectSubstituteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _ProjectSusbtitute_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectSusbtitute-routing.module */ "./src/app/components/project-profile/project-substitute/ProjectSusbtitute-routing.module.ts");
/* harmony import */ var _project_substitute_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-substitute.component */ "./src/app/components/project-profile/project-substitute/project-substitute.component.ts");
/* harmony import */ var _substitute_tab_substitute_tab_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./substitute-tab/substitute-tab.component */ "./src/app/components/project-profile/project-substitute/substitute-tab/substitute-tab.component.ts");
/* harmony import */ var _service_info_serviceInfo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service-info/serviceInfo.module */ "./src/app/components/project-profile/service-info/serviceInfo.module.ts");
/* harmony import */ var _service_confirmation_ServiceConfirmation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service-confirmation/ServiceConfirmation.module */ "./src/app/components/project-profile/service-confirmation/ServiceConfirmation.module.ts");
/* harmony import */ var _officer_Task_officer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../officer-Task/officer.module */ "./src/app/components/officer-Task/officer.module.ts");
/* harmony import */ var _aftercare_recomendation_AftercareRecommModule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../aftercare-recomendation/AftercareRecommModule */ "./src/app/components/project-profile/aftercare-recomendation/AftercareRecommModule.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ProjectSubstituteModule = /** @class */ (function () {
    function ProjectSubstituteModule() {
    }
    ProjectSubstituteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _ProjectSusbtitute_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProjectSusbtituteRoutingModule"],
                _service_info_serviceInfo_module__WEBPACK_IMPORTED_MODULE_6__["ServiceInfoModule"],
                _service_confirmation_ServiceConfirmation_module__WEBPACK_IMPORTED_MODULE_7__["ServiceConfirmationModule"],
                // ServicePrerequisiteModule,
                _officer_Task_officer_module__WEBPACK_IMPORTED_MODULE_8__["OfficerModule"],
                _aftercare_recomendation_AftercareRecommModule__WEBPACK_IMPORTED_MODULE_9__["AftercareRecommModule"]
            ],
            declarations: [_project_substitute_component__WEBPACK_IMPORTED_MODULE_4__["ProjectSubstituteComponent"], _substitute_tab_substitute_tab_component__WEBPACK_IMPORTED_MODULE_5__["SubstituteTabComponent"]],
            exports: [_project_substitute_component__WEBPACK_IMPORTED_MODULE_4__["ProjectSubstituteComponent"]]
        })
    ], ProjectSubstituteModule);
    return ProjectSubstituteModule;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-substitute/ProjectSusbtitute-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-substitute/ProjectSusbtitute-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: ProjectSusbtituteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectSusbtituteRoutingModule", function() { return ProjectSusbtituteRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _substitute_tab_substitute_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./substitute-tab/substitute-tab.component */ "./src/app/components/project-profile/project-substitute/substitute-tab/substitute-tab.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _substitute_tab_substitute_tab_component__WEBPACK_IMPORTED_MODULE_2__["SubstituteTabComponent"] }
];
var ProjectSusbtituteRoutingModule = /** @class */ (function () {
    function ProjectSusbtituteRoutingModule() {
    }
    ProjectSusbtituteRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], ProjectSusbtituteRoutingModule);
    return ProjectSusbtituteRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-substitute/project-substitute.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-substitute/project-substitute.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form style=\"padding: 2px\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"projectsubstituteForm\" novalidate>\r\n\r\n  <mat-card>\r\n    <mat-card-subtitle class=\"sub-title\">\r\n      Project Substitute\r\n      <mat-divider></mat-divider>\r\n    </mat-card-subtitle>\r\n    <mat-card-content>\r\n\r\n      <div fxLayout=\"row wrap\"\r\n           fxLayoutAlign=\"start center\"\r\n           class=\"content\"\r\n           fxLayout.lt-sm=\"column\"\r\n           fxLayoutGap=\"2em\">\r\n\r\n\r\n        <div class=\"block\" fxFlex=\"\">\r\n          <mat-form-field>\r\n            <mat-label>Substitute Reason</mat-label>\r\n            <mat-select formControlName=\"Reason\">\r\n              <mat-option *ngFor=\"let data of CancellationReasonData;let i=index\" [value]=\"i\">\r\n                {{data.type}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n\r\n        <div class=\"blocks\" fxFlex=\"50\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput\r\n                   placeholder=\"Remark\"\r\n                   formControlName=\"SubstituteRemark\">\r\n            <!--<mat-error align=\"start\" *ngIf=\"formErrors.StartDate\">{{ formErrors.StartDate }}</mat-error>-->\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"blocks\">\r\n          <button\r\n            [disabled]=\"!projectsubstituteForm.valid\"\r\n            mat-raised-button=\"\"\r\n            type=\"submit\"\r\n            color=\"primary\">\r\n            <mat-icon class=\"mat-18\">done</mat-icon>\r\n            <!--<span class=\"agree\">Save</span>-->\r\n            {{editMode ? 'Approve' : 'Save'}}\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </mat-card-content>\r\n  </mat-card>\r\n</form>\r\n\r\n<div *ngIf=\"loading\" class=\"loadme-circleBounce\">\r\n  <div class=\"loadme-circleBounce1\"></div>\r\n  <div class=\"loadme-circleBounce2\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/project-substitute/project-substitute.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-substitute/project-substitute.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/project-profile/project-substitute/project-substitute.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-substitute/project-substitute.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ProjectSubstituteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectSubstituteComponent", function() { return ProjectSubstituteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Services/project-profile.service */ "./src/app/Services/project-profile.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Services_project_substitute_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Services/project-substitute.service */ "./src/app/Services/project-substitute.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ProjectSubstituteComponent = /** @class */ (function () {
    function ProjectSubstituteComponent(fb, projetServices, dataSharing, accountService, snackbar, route, errMsg, toast, substituteService) {
        this.fb = fb;
        this.projetServices = projetServices;
        this.dataSharing = dataSharing;
        this.accountService = accountService;
        this.snackbar = snackbar;
        this.route = route;
        this.errMsg = errMsg;
        this.toast = toast;
        this.substituteService = substituteService;
        this.loading = false;
        this.CancellationReasonData = [
            // {'type': 'Own Interest'},
            // {'type': 'by law'},
            { 'type': 'Lose' },
        ];
    }
    ProjectSubstituteComponent.prototype.ngOnInit = function () {
        this.ServiceId = this.route.snapshot.params['ServiceId'];
        this.InvestorId = this.route.snapshot.params['InvestorId'];
        this.ProjectId = this.route.snapshot.params['ProjectId'];
        this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
        this.initForm();
        this.editMode = false;
        this.getAllProjects();
        this.isInvestor = !this.accountService.getUserType();
        if (this.ServiceApplicationId > 1) {
            this.getServiceApplicationSubstitute();
        }
    };
    ProjectSubstituteComponent.prototype.initForm = function () {
        this.projectsubstituteForm = this.fb.group({
            ProjectId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.ProjectId),
            ServiceId: this.ServiceId,
            Reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            SubstituteRemark: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            InvestorId: this.InvestorId,
            ServiceApplicationId: this.ServiceApplicationId
        });
    };
    ProjectSubstituteComponent.prototype.onSubmit = function () {
        var _this = this;
        this.substituteService.create(this.projectsubstituteForm.value)
            .subscribe(function (result) {
            _this.dataSharing.renewalIndex.next(2);
            _this.toast.success('Request for substitute  has been sent', 'success!!');
        });
    };
    ProjectSubstituteComponent.prototype.getAllProjects = function () {
        var _this = this;
        this.projetServices.getProjectOnlyByInvestorId(this.InvestorId)
            .subscribe(function (result) {
            _this.projectList = result;
        });
    };
    ProjectSubstituteComponent.prototype.notification = function (message) {
        this.loading = false;
        this.toast.success(" Succesfully " + message + " Data.!", 'success!!');
        this.snackbar.open(" Succesfully " + message + " Data.!", 'Close', {
            duration: 3000,
        });
    };
    ProjectSubstituteComponent.prototype.ngAfterContentChecked = function () {
    };
    ProjectSubstituteComponent.prototype.getServiceApplicationSubstitute = function () {
        var _this = this;
        this.substituteService.getSubstituteByServiceApplicationId(this.ServiceApplicationId)
            .subscribe(function (result) {
            _this.editMode = true;
            _this.projectsubstituteForm.patchValue(result.ProjectSubstitute[0]);
        }, function (error) { return _this.errMsg.getError(error); });
    };
    ProjectSubstituteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-substitute',
            template: __webpack_require__(/*! ./project-substitute.component.html */ "./src/app/components/project-profile/project-substitute/project-substitute.component.html"),
            styles: [__webpack_require__(/*! ./project-substitute.component.scss */ "./src/app/components/project-profile/project-substitute/project-substitute.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProjectProfileService"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_1__["DataSharingService"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _Services_project_substitute_service__WEBPACK_IMPORTED_MODULE_8__["ProjectSubstituteService"]])
    ], ProjectSubstituteComponent);
    return ProjectSubstituteComponent;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-substitute/substitute-tab/substitute-tab.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-substitute/substitute-tab/substitute-tab.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"0\">\r\n  <div class=\"block\" fxFlex=\"\">\r\n    <app-page-header title=\"projectsubstitute\" icon=\"\"></app-page-header>\r\n\r\n  </div>\r\n  <div id=\"title1\" class=\"block\" fxFlex=\"50\">\r\n    <span class=\"page-title\">{{title}}</span>\r\n    <span class=\"slideBorder\">/</span>\r\n    <span class=\"page-title\">{{investorName}}</span>\r\n    <span class=\"slideBorder\">/</span>\r\n    <span class=\"page-title\">{{projectName}}</span>\r\n\r\n\r\n  </div>\r\n</div>\r\n<mat-tab-group [selectedIndex]=\"renewalIndex\">\r\n\r\n  <mat-tab label=\"Service Info\">\r\n    <ng-template matTabContent>\r\n      <app-service-info></app-service-info>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab *ngIf=\"!isInvestor\" label=\"After Care Recommendation\">\r\n    <ng-template matTabContent>\r\n      <app-aftercare-recommendation></app-aftercare-recommendation>\r\n    </ng-template>\r\n  </mat-tab>\r\n\r\n  <mat-tab label=\"Project Substitute\">\r\n    <ng-template matTabContent>\r\n      <app-project-substitute></app-project-substitute>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab label=\"Document\">\r\n    <ng-template matTabContent>\r\n      <mat-card *ngIf=\"!isInvestor\" class=\"margin-2 simple-card\">\r\n        <mat-card-header>\r\n          <mat-card-subtitle class=\"sub-title\"></mat-card-subtitle>\r\n          <button class=\"margin-10 certificate-title\" mat-raised-button=\"\"\r\n                  (click)=\"addMessage()\" color=\"primary\">\r\n            Add Message\r\n          </button>\r\n        </mat-card-header>\r\n      </mat-card>\r\n      <app-service-prerequisite></app-service-prerequisite>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab *ngIf=\"!isInvestor\" label=\"Payment\">\r\n    <ng-template matTabContent>\r\n      <app-payment></app-payment>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab *ngIf=\"!isInvestor\" label=\"Certificate\">\r\n    <ng-template matTabContent>\r\n      <app-certificate></app-certificate>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab *ngIf=\"isInvestor\" label=\"Confirmation\">\r\n    <ng-template matTabContent>\r\n      <app-service-confirmation></app-service-confirmation>\r\n    </ng-template>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/project-substitute/substitute-tab/substitute-tab.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-substitute/substitute-tab/substitute-tab.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/project-profile/project-substitute/substitute-tab/substitute-tab.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-substitute/substitute-tab/substitute-tab.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: SubstituteTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubstituteTabComponent", function() { return SubstituteTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../notification/notification.component */ "./src/app/components/project-profile/notification/notification.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SubstituteTabComponent = /** @class */ (function () {
    function SubstituteTabComponent(accountService, dialog, route, dataSharing) {
        this.accountService = accountService;
        this.dialog = dialog;
        this.route = route;
        this.dataSharing = dataSharing;
    }
    SubstituteTabComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUserType();
        this.subscription = this.dataSharing.renewalIndex
            .subscribe(function (index) {
            _this.renewalIndex = index;
        });
        this.title = localStorage.getItem('title');
        this.projectName = localStorage.getItem('projectName');
        this.investorName = localStorage.getItem('investorName');
        this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
        this.userName = this.accountService.currentUser.FullName;
    };
    SubstituteTabComponent.prototype.getUserType = function () {
        this.isInvestor = this.accountService.getUserType();
    };
    SubstituteTabComponent.prototype.addMessage = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.data = {
            ServiceApplicationId: this.ServiceApplicationId,
            title: 'Angular For Beginners'
        };
        this.dialog.open(_notification_notification_component__WEBPACK_IMPORTED_MODULE_3__["NotificationComponent"], dialogConfig);
    };
    SubstituteTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-substitute-tab',
            template: __webpack_require__(/*! ./substitute-tab.component.html */ "./src/app/components/project-profile/project-substitute/substitute-tab/substitute-tab.component.html"),
            styles: [__webpack_require__(/*! ./substitute-tab.component.scss */ "./src/app/components/project-profile/project-substitute/substitute-tab/substitute-tab.component.scss")]
        }),
        __metadata("design:paramtypes", [_custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_1__["DataSharingService"]])
    ], SubstituteTabComponent);
    return SubstituteTabComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-project-profile-project-substitute-ProjectSubstitute-module.js.map