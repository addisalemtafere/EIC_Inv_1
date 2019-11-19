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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _Base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Base.service */ "./src/app/Services/Base.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var ProjectSubstituteService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProjectSubstituteService, _super);
    function ProjectSubstituteService(http, appConfig, errMsg) {
        var _this = _super.call(this, http, appConfig.urls.url('ProjectSubstitutes'), errMsg) || this;
        _this.http = http;
        _this.appConfig = appConfig;
        _this.errMsg = errMsg;
        return _this;
    }
    ProjectSubstituteService.prototype.getSubstituteByServiceApplicationId = function (id) {
        return this.httpClient.get(this.appConfig.urls.url('ServiceApplicationSubstitute') + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ProjectSubstituteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(
        //   {
        //   providedIn: 'root'
        // }
        ),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"]])
    ], ProjectSubstituteService);
    return ProjectSubstituteService;
}(_Base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"]));



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _ProjectSusbtitute_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectSusbtitute-routing.module */ "./src/app/components/project-profile/project-substitute/ProjectSusbtitute-routing.module.ts");
/* harmony import */ var _project_substitute_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-substitute.component */ "./src/app/components/project-profile/project-substitute/project-substitute.component.ts");
/* harmony import */ var _substitute_tab_substitute_tab_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./substitute-tab/substitute-tab.component */ "./src/app/components/project-profile/project-substitute/substitute-tab/substitute-tab.component.ts");
/* harmony import */ var _service_info_serviceInfo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service-info/serviceInfo.module */ "./src/app/components/project-profile/service-info/serviceInfo.module.ts");
/* harmony import */ var _service_confirmation_ServiceConfirmation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service-confirmation/ServiceConfirmation.module */ "./src/app/components/project-profile/service-confirmation/ServiceConfirmation.module.ts");
/* harmony import */ var _officer_Task_officer_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../officer-Task/officer.module */ "./src/app/components/officer-Task/officer.module.ts");
/* harmony import */ var _aftercare_recomendation_AftercareRecommModule__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../aftercare-recomendation/AftercareRecommModule */ "./src/app/components/project-profile/aftercare-recomendation/AftercareRecommModule.ts");
/* harmony import */ var _Services_project_substitute_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../Services/project-substitute.service */ "./src/app/Services/project-substitute.service.ts");












var ProjectSubstituteModule = /** @class */ (function () {
    function ProjectSubstituteModule() {
    }
    ProjectSubstituteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _ProjectSusbtitute_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProjectSusbtituteRoutingModule"],
                _service_info_serviceInfo_module__WEBPACK_IMPORTED_MODULE_7__["ServiceInfoModule"],
                _service_confirmation_ServiceConfirmation_module__WEBPACK_IMPORTED_MODULE_8__["ServiceConfirmationModule"],
                // ServicePrerequisiteModule,
                _officer_Task_officer_module__WEBPACK_IMPORTED_MODULE_9__["OfficerModule"],
                _aftercare_recomendation_AftercareRecommModule__WEBPACK_IMPORTED_MODULE_10__["AftercareRecommModule"]
            ],
            declarations: [_project_substitute_component__WEBPACK_IMPORTED_MODULE_5__["ProjectSubstituteComponent"], _substitute_tab_substitute_tab_component__WEBPACK_IMPORTED_MODULE_6__["SubstituteTabComponent"]],
            exports: [_project_substitute_component__WEBPACK_IMPORTED_MODULE_5__["ProjectSubstituteComponent"]],
            providers: [_Services_project_substitute_service__WEBPACK_IMPORTED_MODULE_11__["ProjectSubstituteService"]]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _substitute_tab_substitute_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./substitute-tab/substitute-tab.component */ "./src/app/components/project-profile/project-substitute/substitute-tab/substitute-tab.component.ts");




var routes = [
    { path: '', component: _substitute_tab_substitute_tab_component__WEBPACK_IMPORTED_MODULE_3__["SubstituteTabComponent"] }
];
var ProjectSusbtituteRoutingModule = /** @class */ (function () {
    function ProjectSusbtituteRoutingModule() {
    }
    ProjectSusbtituteRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "<form style=\"padding: 2px\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"projectsubstituteForm\" novalidate>\r\n\r\n  <mat-card>\r\n    <mat-card-subtitle class=\"sub-title\">\r\n      Project Substitute\r\n      <mat-divider></mat-divider>\r\n    </mat-card-subtitle>\r\n    <mat-card-content>\r\n\r\n      <div fxLayout=\"row wrap\"\r\n           fxLayoutAlign=\"start center\"\r\n           class=\"content\"\r\n           fxLayout.lt-sm=\"column\"\r\n           fxLayoutGap=\"2em\">\r\n\r\n\r\n        <div class=\"block\" fxFlex=\"\">\r\n          <mat-form-field>\r\n            <mat-label>Substitute Reason</mat-label>\r\n            <mat-select formControlName=\"Reason\">\r\n              <mat-option *ngFor=\"let data of CancellationReasonData;let i=index\" [value]=\"i\">\r\n                {{data.type}}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error align=\"start\" *ngIf=\"formErrors.Reason\">{{ formErrors.Reason }}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n\r\n        <div class=\"blocks\" fxFlex=\"50\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput\r\n                   placeholder=\"Remark\"\r\n                   formControlName=\"SubstituteRemark\">\r\n            <!--<mat-error align=\"start\" *ngIf=\"formErrors.StartDate\">{{ formErrors.StartDate }}</mat-error>-->\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"blocks\">\r\n          <button *ngIf=\"isInvestor\"\r\n            [disabled]=\"!projectsubstituteForm.valid\"\r\n            mat-raised-button=\"\"\r\n            type=\"submit\"\r\n            color=\"primary\">\r\n            <mat-icon class=\"mat-18\">done</mat-icon>\r\n            <!--<span class=\"agree\">Save</span>-->\r\n            {{editMode ? 'Update' : 'Save'}}\r\n          </button> <button *ngIf=\"!isInvestor\"\r\n            [disabled]=\"!projectsubstituteForm.valid\"\r\n            mat-raised-button=\"\"\r\n            type=\"submit\"\r\n            color=\"primary\" (click)=\"approve()\">\r\n            <mat-icon class=\"mat-18\">done</mat-icon>\r\n            <span class=\"agree\">Approve</span>\r\n            <!--{{editMode ? 'Update' : 'Save'}}-->\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </mat-card-content>\r\n  </mat-card>\r\n</form>\r\n\r\n<div *ngIf=\"loading\" class=\"loadme-circleBounce\">\r\n  <div class=\"loadme-circleBounce1\"></div>\r\n  <div class=\"loadme-circleBounce2\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/project-substitute/project-substitute.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-substitute/project-substitute.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9wcm9qZWN0LXByb2ZpbGUvcHJvamVjdC1zdWJzdGl0dXRlL3Byb2plY3Qtc3Vic3RpdHV0ZS5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Services/project-profile.service */ "./src/app/Services/project-profile.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Services_project_substitute_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Services/project-substitute.service */ "./src/app/Services/project-substitute.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");











var ProjectSubstituteComponent = /** @class */ (function () {
    function ProjectSubstituteComponent(fb, projetServices, dataSharing, accountService, snackbar, route, errMsg, toast, toastr, substituteService) {
        this.fb = fb;
        this.projetServices = projetServices;
        this.dataSharing = dataSharing;
        this.accountService = accountService;
        this.snackbar = snackbar;
        this.route = route;
        this.errMsg = errMsg;
        this.toast = toast;
        this.toastr = toastr;
        this.substituteService = substituteService;
        this.loading = false;
        this.CancellationReasonData = [
            // {'type': 'Own Interest'},
            // {'type': 'by law'},
            { 'type': 'Lose' },
            { 'type': 'Damage' },
        ];
        this.formErrors = {
            Reason: 'Please select the reason for substitution!'
        };
    }
    ProjectSubstituteComponent.prototype.ngOnInit = function () {
        this.ServiceId = this.route.snapshot.params['ServiceId'];
        this.InvestorId = this.route.snapshot.params['InvestorId'];
        this.ProjectId = this.route.snapshot.params['ProjectId'];
        this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
        this.initForm();
        this.getAllProjects();
        this.isInvestor = this.accountService.getUserType();
        if (this.ServiceApplicationId > 1) {
            this.getServiceApplicationSubstitute();
        }
    };
    ProjectSubstituteComponent.prototype.initForm = function () {
        this.projectsubstituteForm = this.fb.group({
            ProjectId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.ProjectId),
            ServiceId: this.ServiceId,
            Reason: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            SubstituteRemark: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            InvestorId: this.InvestorId,
            ServiceApplicationId: this.ServiceApplicationId
        });
    };
    ProjectSubstituteComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('Submitted!');
        this.substituteService.create(this.projectsubstituteForm.value)
            .subscribe(function (result) {
            _this.dataSharing.renewalIndex.next(2);
            if (_this.isInvestor) {
                _this.toast.success('Request for substitute  has been saved.', 'success!!');
                setTimeout(function () { return _this.dataSharing.steeperIndex.next(3); }, 0);
                setTimeout(function () { return _this.dataSharing.currentIndex.next(3); }, 0);
            }
            else {
                _this.toast.success('Request for substitute  has been Approved', 'success!!');
            }
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
            _this.projectsubstituteForm.patchValue(result.ProjectSubstitute[0]);
            if (result.ProjectSubstitute[0] != null) {
                _this.editMode = true;
                localStorage.setItem('ProjectSubstituteId', result.ProjectSubstitute[0].ProjectSubstituteId.toString());
                console.log(result.ProjectSubstitute[0].ProjectSubstituteId.toString());
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    ProjectSubstituteComponent.prototype.approve = function () {
        var _this = this;
        var SubstituteData = this.mapApproval(this.projectsubstituteForm.value);
        var id = localStorage.getItem('ProjectSubstituteId').toString();
        console.log("Substitute ID=" + id);
        // console.log(SubstituteData);
        this.substituteService.update(SubstituteData, id)
            .subscribe(function (result) {
            console.log(result);
            _this.toastr.success('Substitution successfully Approved.', 'Success');
            // this.approveApplication(this.ServiceApplicationId);
        });
    };
    ProjectSubstituteComponent.prototype.mapApproval = function (approve) {
        approve.IsApproved = true;
        return approve;
    };
    ProjectSubstituteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-substitute',
            template: __webpack_require__(/*! ./project-substitute.component.html */ "./src/app/components/project-profile/project-substitute/project-substitute.component.html"),
            styles: [__webpack_require__(/*! ./project-substitute.component.scss */ "./src/app/components/project-profile/project-substitute/project-substitute.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProjectProfileService"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_2__["DataSharingService"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"],
            _Services_project_substitute_service__WEBPACK_IMPORTED_MODULE_9__["ProjectSubstituteService"]])
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

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"0\">\r\n  <div class=\"block\" fxFlex=\"\">\r\n    <app-page-header title=\"projectsubstitute\" icon=\"\"></app-page-header>\r\n\r\n  </div>\r\n  <div id=\"title1\" class=\"block\" fxFlex=\"50\">\r\n    <span class=\"page-title\">{{title}}</span>\r\n    <span class=\"slideBorder\">/</span>\r\n    <span class=\"page-title\">{{investorName}}</span>\r\n    <span class=\"slideBorder\">/</span>\r\n    <span class=\"page-title\">{{projectName}}</span>\r\n\r\n\r\n  </div>\r\n</div>\r\n<mat-tab-group #stepper>\r\n\r\n  <mat-tab label=\"Service Info\">\r\n    <ng-template matTabContent>\r\n      <app-service-info></app-service-info>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab *ngIf=\"!isInvestor\" label=\"After Care Recommendation\">\r\n    <ng-template matTabContent>\r\n      <app-aftercare-recommendation></app-aftercare-recommendation>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab label=\"Document\">\r\n    <ng-template matTabContent>\r\n      <mat-card *ngIf=\"!isInvestor\" class=\"margin-2 simple-card\">\r\n        <mat-card-header>\r\n          <mat-card-subtitle class=\"sub-title\"></mat-card-subtitle>\r\n          <button class=\"margin-10 certificate-title\" mat-raised-button=\"\"\r\n                  (click)=\"addMessage()\" color=\"primary\">\r\n            Add Message\r\n          </button>\r\n        </mat-card-header>\r\n      </mat-card>\r\n      <app-service-prerequisite></app-service-prerequisite>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab label=\"Project Substitute\">\r\n    <ng-template matTabContent>\r\n      <app-project-substitute></app-project-substitute>\r\n    </ng-template>\r\n  </mat-tab>\r\n\r\n  <mat-tab *ngIf=\"!isInvestor\" label=\"Payment\">\r\n    <ng-template matTabContent>\r\n      <app-payment></app-payment>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab *ngIf=\"!isInvestor\" label=\"Certificate\">\r\n    <ng-template matTabContent>\r\n      <app-certificate></app-certificate>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab *ngIf=\"isInvestor\" label=\"Confirmation\" [disabled]=\"nextIndex<3\">\r\n    <ng-template matTabContent>\r\n      <app-service-confirmation></app-service-confirmation>\r\n    </ng-template>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/project-substitute/substitute-tab/substitute-tab.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-substitute/substitute-tab/substitute-tab.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9wcm9qZWN0LXByb2ZpbGUvcHJvamVjdC1zdWJzdGl0dXRlL3N1YnN0aXR1dGUtdGFiL3N1YnN0aXR1dGUtdGFiLmNvbXBvbmVudC5zY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../notification/notification.component */ "./src/app/components/project-profile/notification/notification.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_service_application_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../Services/service-application.service */ "./src/app/Services/service-application.service.ts");








var SubstituteTabComponent = /** @class */ (function () {
    // end for navigation
    function SubstituteTabComponent(accountService, dialog, route, serviceApplicationservice, dataSharing) {
        this.accountService = accountService;
        this.dialog = dialog;
        this.route = route;
        this.serviceApplicationservice = serviceApplicationservice;
        this.dataSharing = dataSharing;
        this.steeperIndex = 0;
    }
    SubstituteTabComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.currentPosition = 'f';
        this.ServiceId = this.route.snapshot.params['ServiceId'];
        this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'] || this.route.snapshot.params['serviceApplicationId'];
        this.serviceApplicationservice.getOneById(this.ServiceApplicationId)
            .subscribe(function (r) {
            _this.upeerLimit = r.CurrentStep;
            console.log(_this.upeerLimit);
        });
        this.getUserType();
        // this.getUserType();
        // this.subscription = this.dataSharing.renewalIndex
        //   .subscribe(index => {
        //     this.renewalIndex = index;
        //
        //   });
        // this.title = localStorage.getItem('title');
        // this.projectName = localStorage.getItem('projectName');
        // this.investorName = localStorage.getItem('investorName');
        // this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
        this.userName = this.accountService.currentUser.FullName;
    };
    SubstituteTabComponent.prototype.getUserType = function () {
        this.isInvestor = this.accountService.getUserType();
    };
    SubstituteTabComponent.prototype.addMessage = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.data = {
            ServiceApplicationId: this.ServiceApplicationId,
            title: 'Angular For Beginners'
        };
        this.dialog.open(_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__["NotificationComponent"], dialogConfig);
    };
    SubstituteTabComponent.prototype.move = function (index) {
        this.stepper.selectedIndex = index;
    };
    SubstituteTabComponent.prototype.ngAfterViewInit = function () {
        this.move(this.steeperIndex);
    };
    SubstituteTabComponent.prototype.ngAfterContentChecked = function () {
        var _this = this;
        this.title = localStorage.getItem('title');
        this.projectName = localStorage.getItem('projectName');
        this.investorName = localStorage.getItem('investorName');
        this.subscription = this.dataSharing.steeperIndex
            .subscribe(function (index) {
            _this.steeperIndex = index;
            _this.move(_this.steeperIndex);
        });
        this.subscription = this.dataSharing.currentIndex
            .subscribe(function (index) {
            _this.nextIndex = _this.upeerLimit;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stepper'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepper"])
    ], SubstituteTabComponent.prototype, "stepper", void 0);
    SubstituteTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-substitute-tab',
            template: __webpack_require__(/*! ./substitute-tab.component.html */ "./src/app/components/project-profile/project-substitute/substitute-tab/substitute-tab.component.html"),
            styles: [__webpack_require__(/*! ./substitute-tab.component.scss */ "./src/app/components/project-profile/project-substitute/substitute-tab/substitute-tab.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _Services_service_application_service__WEBPACK_IMPORTED_MODULE_7__["ServiceApplicationService"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_2__["DataSharingService"]])
    ], SubstituteTabComponent);
    return SubstituteTabComponent;
}());



/***/ }),

/***/ "./src/app/model/lookupData.ts":
/*!*************************************!*\
  !*** ./src/app/model/lookupData.ts ***!
  \*************************************/
/*! exports provided: Lookup, LookupType, MaritalStatus, Gender, LegalStatus, Quantity, TariffMode, BusinessType, SectorType, CurrencyType, ProjectStatusModel, ProjectStageModel, ApplicationStatusModel, QuarterModel, UnitType, RegistrationStatus, Decisions, Services, ServiceType, CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lookup", function() { return Lookup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupType", function() { return LookupType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaritalStatus", function() { return MaritalStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gender", function() { return Gender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalStatus", function() { return LegalStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quantity", function() { return Quantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TariffMode", function() { return TariffMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessType", function() { return BusinessType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectorType", function() { return SectorType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyType", function() { return CurrencyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectStatusModel", function() { return ProjectStatusModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectStageModel", function() { return ProjectStageModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationStatusModel", function() { return ApplicationStatusModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuarterModel", function() { return QuarterModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitType", function() { return UnitType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationStatus", function() { return RegistrationStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Decisions", function() { return Decisions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return Services; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceType", function() { return ServiceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Lookup = /** @class */ (function () {
    function Lookup() {
    }
    Lookup = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Lookup);
    return Lookup;
}());

var LookupType = /** @class */ (function () {
    function LookupType() {
    }
    LookupType = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LookupType);
    return LookupType;
}());

var MaritalStatus = /** @class */ (function () {
    function MaritalStatus() {
    }
    MaritalStatus = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], MaritalStatus);
    return MaritalStatus;
}());

var Gender = /** @class */ (function () {
    function Gender() {
    }
    Gender = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Gender);
    return Gender;
}());

var LegalStatus = /** @class */ (function () {
    function LegalStatus() {
    }
    LegalStatus = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LegalStatus);
    return LegalStatus;
}());

var Quantity = /** @class */ (function () {
    function Quantity() {
    }
    Quantity = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Quantity);
    return Quantity;
}());

var TariffMode = /** @class */ (function () {
    function TariffMode() {
    }
    TariffMode = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TariffMode);
    return TariffMode;
}());

var BusinessType = /** @class */ (function () {
    function BusinessType() {
    }
    BusinessType = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], BusinessType);
    return BusinessType;
}());

var SectorType = /** @class */ (function () {
    function SectorType() {
    }
    SectorType = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SectorType);
    return SectorType;
}());

var CurrencyType = /** @class */ (function () {
    function CurrencyType() {
    }
    CurrencyType = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CurrencyType);
    return CurrencyType;
}());

var ProjectStatusModel = /** @class */ (function () {
    function ProjectStatusModel() {
    }
    ProjectStatusModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ProjectStatusModel);
    return ProjectStatusModel;
}());

var ProjectStageModel = /** @class */ (function () {
    function ProjectStageModel() {
    }
    ProjectStageModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ProjectStageModel);
    return ProjectStageModel;
}());

var ApplicationStatusModel = /** @class */ (function () {
    function ApplicationStatusModel() {
    }
    ApplicationStatusModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ApplicationStatusModel);
    return ApplicationStatusModel;
}());

var QuarterModel = /** @class */ (function () {
    function QuarterModel() {
    }
    QuarterModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], QuarterModel);
    return QuarterModel;
}());

var UnitType = /** @class */ (function () {
    function UnitType() {
    }
    UnitType = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], UnitType);
    return UnitType;
}());

var RegistrationStatus = /** @class */ (function () {
    function RegistrationStatus() {
    }
    RegistrationStatus = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], RegistrationStatus);
    return RegistrationStatus;
}());

var Decisions = /** @class */ (function () {
    function Decisions() {
    }
    Decisions = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Decisions);
    return Decisions;
}());

var Services = /** @class */ (function () {
    function Services() {
    }
    Services = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Services);
    return Services;
}());

var ServiceType = /** @class */ (function () {
    function ServiceType() {
    }
    ServiceType = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ServiceType);
    return ServiceType;
}());

var CustomerService = /** @class */ (function () {
    function CustomerService() {
    }
    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CustomerService);
    return CustomerService;
}());



/***/ })

}]);
//# sourceMappingURL=components-project-profile-project-substitute-ProjectSubstitute-module.js.map