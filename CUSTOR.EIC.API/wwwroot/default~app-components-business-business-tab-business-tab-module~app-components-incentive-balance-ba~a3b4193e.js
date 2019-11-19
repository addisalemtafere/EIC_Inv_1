(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-components-business-business-tab-business-tab-module~app-components-incentive-balance-ba~a3b4193e"],{

/***/ "./src/app/Services/service-application.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/Services/service-application.service.ts ***!
  \*********************************************************/
/*! exports provided: ServiceApplicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceApplicationService", function() { return ServiceApplicationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base.service */ "./src/app/Services/Base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @custor/services/configuration.service */ "./src/@custor/services/configuration.service.ts");








var ServiceApplicationService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ServiceApplicationService, _super);
    function ServiceApplicationService(http, appConfig, errMsg, config) {
        var _this = _super.call(this, http, appConfig.urls.url('ServiceApplications'), errMsg) || this;
        _this.http = http;
        _this.appConfig = appConfig;
        _this.errMsg = errMsg;
        _this.config = config;
        return _this;
    }
    ServiceApplicationService.prototype.changeApplicationStatus = function (resource, id) {
        return this.httpClient.post(this.appConfig.urls.url('ChangeApplicationStatus', id), resource).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ServiceApplicationService.prototype.changeInvestorApplicationStatus = function (resource, id) {
        return this.httpClient.post(this.appConfig.urls.url('ChangeInvestorApplicationStatus', id), resource).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ServiceApplicationService.prototype.getApplicationGroupByServiceId = function () {
        return this.httpClient.get(this.appConfig.urls.url('ApplicationGroupByServiceId')).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ServiceApplicationService.prototype.getProjectsGroupBySectorId = function () {
        return this.httpClient.get(this.appConfig.urls.url('ProjectGroupByStage')).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ServiceApplicationService.prototype.getProjectsGroupByEconomicSector = function () {
        return this.httpClient.get(this.appConfig.urls.url('ProjectGroupByEconomicSector')).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ServiceApplicationService.prototype.getAllProjectsProjectStage = function () {
        return this.httpClient.get(this.appConfig.urls.url('AllProjectByProjectStage')).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ServiceApplicationService.prototype.getServiceApplicationWithInvestor = function (serviceApplicationId) {
        return this.httpClient.get(this.appConfig.urls.url('ServiceApplicationWithInvestor', serviceApplicationId)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ServiceApplicationService.prototype.getServiceApplicationById = function (serviceApplicationId) {
        return this.httpClient.get(this.appConfig.urls.url('ServiceApplicationById', serviceApplicationId)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ServiceApplicationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_4__["AppConfiguration"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"],
            _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_7__["ConfigurationService"]])
    ], ServiceApplicationService);
    return ServiceApplicationService;
}(_Base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));



/***/ }),

/***/ "./src/app/components/project-profile/notification/notification.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/project-profile/notification/notification.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-bottom: 20px;\">\r\n  <span class=\"sub-title\">Message</span>\r\n  <mat-divider></mat-divider>\r\n</div>\r\n<div>\r\n\r\n  <form [formGroup]=\"notificationForm\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\">\r\n      <div class=\"block  \" fxFlex=\"\">\r\n        <mat-form-field class=\"demo-full-width\">\r\n          <mat-label>Officer Name:</mat-label>\r\n          <input formControlName=\"FromUserId\" matInput>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"block\" fxFlex=\"\">\r\n        <mat-form-field class=\"demo-full-width\">\r\n          <mat-label>To:</mat-label>\r\n          <input formControlName=\"ToUserId\" matInput value=\"{{investorName}}\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\">\r\n      <mat-form-field fxFlex=\"45\">\r\n        <mat-select formControlName=\"CurrentStatus\"\r\n                    placeholder=\"Select Your Decision \">\r\n          <mat-option value=\"{{applicationStatusEnum.Pending}}\">In Complete</mat-option>\r\n          <mat-option value=\"{{applicationStatusEnum.approved}}\">Approve</mat-option>\r\n          <mat-option value=\"{{applicationStatusEnum.Rejected}}\">Reject</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <p>\r\n      <mat-form-field style=\"height: 50px;\"\r\n                      class=\"demo-full-width\">\r\n        <mat-label>Message</mat-label>\r\n        <textarea class=\"full-width message-body\"\r\n                  formControlName=\"Message\" matInput\r\n                  row=\"10\">\r\n\r\n        </textarea>\r\n      </mat-form-field>\r\n    </p>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\">\r\n      <div class=\"block\" fxFlex=\"\">\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </form>\r\n  <!--<mat-divider></mat-divider>-->\r\n\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"2em\">\r\n    <button style=\"margin-top: 20px;\" mat-raised-button\r\n            (click)=\"sendMessage()\"\r\n            color=\"primary\" mat-dialog-clos>\r\n      Send Message\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/notification/notification.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/project-profile/notification/notification.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo-full-width {\n  width: 100%; }\n\n.mat-dialog-container {\n  padding: 3px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Byb2plY3QtcHJvZmlsZS9ub3RpZmljYXRpb24vQzpcXFVzZXJzXFxGZXRpaGEgS1xcRGVza3RvcFxcREVWXFxHaXRMYWJcXEludmVzdG1uZXRcXENVU1RPUi5FSUMuQVBJXFxzcmMvYXBwXFxjb21wb25lbnRzXFxwcm9qZWN0LXByb2ZpbGVcXG5vdGlmaWNhdGlvblxcbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsdUJBQXVCLEVBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvcHJvamVjdC1wcm9maWxlL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVtby1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAzcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/project-profile/notification/notification.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/project-profile/notification/notification.component.ts ***!
  \***********************************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _Services_service_application_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services/service-application.service */ "./src/app/Services/service-application.service.ts");
/* harmony import */ var _Services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/notification.service */ "./src/app/Services/notification.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _Services_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Services/service.service */ "./src/app/Services/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _enum_enums__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../enum/enums */ "./src/app/enum/enums.ts");











var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(accountService, notificationService, fb, toast, route, router, serviceService, dialogRef, data, serviceApplicationService) {
        this.accountService = accountService;
        this.notificationService = notificationService;
        this.fb = fb;
        this.toast = toast;
        this.route = route;
        this.router = router;
        this.serviceService = serviceService;
        this.dialogRef = dialogRef;
        this.serviceApplicationService = serviceApplicationService;
        this.templateMessage = 'Message';
        this.applicationStatusEnum = _enum_enums__WEBPACK_IMPORTED_MODULE_10__["ApplicationStatusEnum"];
        this.ServiceApplicationId = data.ServiceApplicationId;
        // alert("here");
        // alert(this.ServiceApplicationId)
        console.log(this.ServiceApplicationId);
    }
    NotificationComponent.prototype.ngOnInit = function () {
        // this.ServiceId = this.route.snapshot.params['ServiceId'];
        // this.InvestorId = this.route.snapshot.params['InvestorId'];
        // this.workFlowId = this.route.snapshot.params['workFlowId'];
        // this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
        this.userName = this.accountService.currentUser.FullName;
        // this.getServiceApplication(this.ServiceApplicationId);
        this.initForm();
        this.getAllService();
    };
    NotificationComponent.prototype.getServiceApplication = function (id) {
        var _this = this;
        this.serviceApplicationService.getServiceApplicationWithInvestor(id)
            .subscribe(function (result) {
            console.log(result);
            _this.investorName = result.Investor.InvestorNameEng;
            // this.ServiceApplicationId = result.ServiceApplicationId;
            _this.UserId = result.Investor.UserId;
            console.log(result.Investor.UserId);
            console.log(_this.UserId);
            _this.InvestorId = result.InvestorId;
            _this.templateMessage = 'Dear ' +
                _this.investorName +
                ', We have already  received  your application request for ' +
                _this.getServiceName(result.ServiceId) + ' ' +
                '(case number ' + _this.ServiceApplicationId + ').' +
                ' Your Application has been reviewed by our officer  ';
            _this.notificationForm.patchValue({
                ToUserId: _this.UserId,
                UserId: _this.UserId,
                ServiceApplicationId: _this.ServiceApplicationId,
                Message: _this.templateMessage,
            });
            console.log(_this.notificationForm.value);
        });
    };
    NotificationComponent.prototype.initForm = function () {
        console.log(this.ServiceApplicationId);
        this.notificationForm = this.fb.group({
            Subject: 'EIC Notification',
            UserId: this.UserId,
            ServiceApplicationId: this.ServiceApplicationId,
            CurrentStatus: '',
            Message: '',
            ToUserId: this.UserId,
            FromUserId: this.accountService.currentUser.FullName
        });
    };
    NotificationComponent.prototype.sendMessage = function () {
        var _this = this;
        this.notificationService.create(this.notificationForm.value)
            .subscribe(function (result) {
            // console.log(result);
            // this.router.navigate(['/officer/' + serviceId + '/' + investorId + '/' + id + '/' + workFlowId + '/' + projectId]);
            _this.toast.success('message has been sent', 'Message');
            _this.router.navigate(['/officer-dashboard']);
        });
    };
    NotificationComponent.prototype.getAllService = function () {
        var _this = this;
        this.serviceService.getAll()
            .subscribe(function (result) {
            _this.allServices = result;
        });
    };
    NotificationComponent.prototype.getServiceName = function (serviceId) {
        for (var _i = 0, _a = this.allServices; _i < _a.length; _i++) {
            var services = _a[_i];
            if (services.ServiceId === serviceId) {
                return services.NameEnglish;
            }
        }
        return null;
    };
    NotificationComponent.prototype.ngAfterViewChecked = function () {
    };
    NotificationComponent.prototype.ngAfterContentChecked = function () {
        // console.log("notifications")
        // this.getServiceApplication(this.ServiceApplicationId);
    };
    NotificationComponent.prototype.ngAfterContentInit = function () {
        this.getServiceApplication(this.ServiceApplicationId);
    };
    NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/components/project-profile/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/components/project-profile/notification/notification.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_9__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"],
            _Services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _Services_service_service__WEBPACK_IMPORTED_MODULE_7__["ServiceService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogRef"], Object, _Services_service_application_service__WEBPACK_IMPORTED_MODULE_3__["ServiceApplicationService"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-components-business-business-tab-business-tab-module~app-components-incentive-balance-ba~a3b4193e.js.map