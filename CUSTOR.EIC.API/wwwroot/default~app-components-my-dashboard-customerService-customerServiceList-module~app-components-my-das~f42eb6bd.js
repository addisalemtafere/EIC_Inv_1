(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-components-my-dashboard-customerService-customerServiceList-module~app-components-my-das~f42eb6bd"],{

/***/ "./src/@custor/services/animations.ts":
/*!********************************************!*\
  !*** ./src/@custor/services/animations.ts ***!
  \********************************************/
/*! exports provided: fadeInOut, flyInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInOut", function() { return fadeInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flyInOut", function() { return flyInOut; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeInOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.4s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.4s 10ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))])
]);
function flyInOut(duration) {
    if (duration === void 0) { duration = 0.2; }
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(-100%)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(duration + "s ease-in")]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(duration + "s 10ms ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(100%)' }))])
    ]);
}


/***/ }),

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

/***/ "./src/app/components/confirm-dialog2/confirm-dialog2.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/confirm-dialog2/confirm-dialog2.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 300px\">\r\n  <h1 matDialogTitle style=\"color: steelblue;\">{{confirmMessage}}</h1>\r\n  <mat-divider>\r\n  </mat-divider>\r\n  <div mat-dialog-content style=\"color: #ff6c31;font-size: 17px;margin: 10px;\"></div>\r\n  <mat-divider></mat-divider>\r\n  <div mat-dialog-actions class=\"pt-24\">\r\n    <button mat-raised-button class=\"mat-accent mr-16\" (click)=\"dialogRef.close(true)\">Yes</button>\r\n    <button mat-raised-button color=\"warn\" (click)=\"dialogRef.close(false)\">NO</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/confirm-dialog2/confirm-dialog2.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/confirm-dialog2/confirm-dialog2.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9jb25maXJtLWRpYWxvZzIvY29uZmlybS1kaWFsb2cyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/confirm-dialog2/confirm-dialog2.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/confirm-dialog2/confirm-dialog2.component.ts ***!
  \*************************************************************************/
/*! exports provided: ConfirmDialog2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialog2Component", function() { return ConfirmDialog2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ConfirmDialog2Component = /** @class */ (function () {
    function ConfirmDialog2Component(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.confirmMessage = "Do you have existing record on Investment commission ?";
    }
    ConfirmDialog2Component.prototype.ngOnInit = function () {
        // alert("i am here");
    };
    ConfirmDialog2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-dialog2',
            template: __webpack_require__(/*! ./confirm-dialog2.component.html */ "./src/app/components/confirm-dialog2/confirm-dialog2.component.html"),
            styles: [__webpack_require__(/*! ./confirm-dialog2.component.scss */ "./src/app/components/confirm-dialog2/confirm-dialog2.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], ConfirmDialog2Component);
    return ConfirmDialog2Component;
}());



/***/ }),

/***/ "./src/app/components/my-dashboard/customerService/customerServiceList.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/my-dashboard/customerService/customerServiceList.module.ts ***!
  \***************************************************************************************/
/*! exports provided: CustomerServiceListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerServiceListModule", function() { return CustomerServiceListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _customerServices_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customerServices.component */ "./src/app/components/my-dashboard/customerService/customerServices.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _confirm_dialog2_confirm_dialog2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../confirm-dialog2/confirm-dialog2.component */ "./src/app/components/confirm-dialog2/confirm-dialog2.component.ts");







var route = [
    { path: '', component: _customerServices_component__WEBPACK_IMPORTED_MODULE_4__["CustomerServiceStarterComponent"] }
];
var CustomerServiceListModule = /** @class */ (function () {
    function CustomerServiceListModule() {
    }
    CustomerServiceListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(route)
            ],
            declarations: [
                _customerServices_component__WEBPACK_IMPORTED_MODULE_4__["CustomerServiceStarterComponent"],
                _confirm_dialog2_confirm_dialog2_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialog2Component"]
            ],
            entryComponents: [_confirm_dialog2_confirm_dialog2_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialog2Component"],],
            exports: [
                _customerServices_component__WEBPACK_IMPORTED_MODULE_4__["CustomerServiceStarterComponent"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ]
        })
    ], CustomerServiceListModule);
    return CustomerServiceListModule;
}());



/***/ }),

/***/ "./src/app/components/my-dashboard/customerService/customerServices.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/my-dashboard/customerService/customerServices.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-page-header title=\"Service\" icon=\"view_list\"></app-page-header>-->\r\n\r\n<mat-card fxFlex=\"50\" style=\"margin-bottom: 50px;\">\r\n\r\n  <mat-card-content>\r\n    <div>\r\n      <div style=\"border-bottom: 1px solid #f2f3f3;\r\n\" class=\" mat-accent-bg p-24\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\r\n        <div style=\"background-color: #fafafa;\">\r\n          <div class=\"sub-title\"><h4> Choose Service</h4></div>\r\n          <!--<mat-divider></mat-divider>-->\r\n        </div>\r\n      </div>\r\n      <div class=\"service-list\" class=\"\" fxLayout=\"column\">\r\n        <a mat-button class=\"service\" *ngFor=\"let customerService of customerServices;let i=index\"\r\n           (click)=\"startService(customerService.ServiceId,customerService.NameEnglish)\"\r\n           matRipple>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n            <div class=\"image-wrapper\" fxFlex=\"0 1 auto\" fxLayoutAlign=\"center center\">\r\n              <!-- <img [src]=\"\"  class=\"image\" alt=\"{{customerService.serviceNameEnglish}}\" /> -->\r\n              <div class=\"side-blt\">{{i+1}}</div>\r\n            </div>\r\n\r\n            <div fxLayout=\"row\" fxFlex>\r\n\r\n              <div class=\"\" fxFlex fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                <div class=\" service-name \">\r\n                  {{customerService.NameEnglish | filterPipe: 35}}\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </a>\r\n      </div>\r\n      <mat-divider></mat-divider>\r\n      <div style=\"margin-top: 5px;padding-top: 5px;padding-bottom:5px;border-top:  1px solid #fafafa\" fxLayout=\"row\"\r\n           fxLayoutAlign=\"center center\" fxLayoutGap=\"2em\">\r\n        <button color=\"primary\" mat-raised-button=\"\" a mat-button\r\n                (click)=\"close()\">Back\r\n        </button>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </mat-card-content>\r\n\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/my-dashboard/customerService/customerServices.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/my-dashboard/customerService/customerServices.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-content {\n  overflow: auto; }\n  .sidenav-content .service-list .mat-subheader, .sidenav-content .chat-list .mat-subheader {\n    padding-left: 16px;\n    font-size: 20px;\n    font-weight: 300;\n    height: 88px;\n    line-height: 88px; }\n  .sidenav-content .service-list .service, .sidenav-content .chat-list .service {\n    white-space: normal;\n    text-align: left;\n    letter-spacing: .010em;\n    min-height: 88px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    padding: 16px;\n    font-weight: 400; }\n  .sidenav-content .service-list .service .image-wrapper .image, .sidenav-content .chat-list .service .image-wrapper .image {\n      margin-right: 16px; }\n  .sidenav-content .service-list .service .service-name, .sidenav-content .chat-list .service .service-name {\n      font-size: 16px;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n  .sidenav-content .no-results-message {\n    position: absolute;\n    width: 100%;\n    height: 88px;\n    padding: 16px;\n    background: #FFFFFF;\n    font-size: 15px;\n    font-weight: 400; }\n  .header {\n  flex: 0 1 auto;\n  height: 80px;\n  min-height: 80px;\n  max-height: 160px; }\n  .title {\n  padding: 16px 0;\n  margin-left: 4px;\n  margin-top: 10px; }\n  mat-divider {\n  margin-bottom: 90px; }\n  h4 {\n  margin-bottom: 0px;\n  font-size: medium;\n  margin-top: 10px;\n  margin-left: 30px;\n  margin-bottom: -10px; }\n  .mat-card {\n  padding: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL215LWRhc2hib2FyZC9jdXN0b21lclNlcnZpY2UvQzpcXFVzZXJzXFxGZXRpaGEgS1xcRGVza3RvcFxcREVWXFxHaXRMYWJcXEludmVzdG1uZXRcXENVU1RPUi5FSUMuQVBJXFxzcmMvYXBwXFxjb21wb25lbnRzXFxteS1kYXNoYm9hcmRcXGN1c3RvbWVyU2VydmljZVxcY3VzdG9tZXJTZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWMsRUFBQTtFQURoQjtJQUtNLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixpQkFBaUIsRUFBQTtFQVR2QjtJQWNNLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQiw0Q0FBNEM7SUFDNUMsYUFBYTtJQUNiLGdCQUFnQixFQUFBO0VBcEJ0QjtNQXdCVSxrQkFBa0IsRUFBQTtFQXhCNUI7TUE2QlEsZUFBZTtNQUNmLG1CQUFtQjtNQUNuQix1QkFBdUIsRUFBQTtFQS9CL0I7SUFxQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7RUFJcEI7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTtFQUduQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7RUFHbEI7RUFDRSxtQkFBbUIsRUFBQTtFQUlyQjtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFFakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvQkFBb0IsRUFBQTtFQUd0QjtFQUNFLFlBQVksRUFBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9teS1kYXNoYm9hcmQvY3VzdG9tZXJTZXJ2aWNlL2N1c3RvbWVyU2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250ZW50IHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgLnNlcnZpY2UtbGlzdCwgLmNoYXQtbGlzdCB7XHJcbiAgICAubWF0LXN1YmhlYWRlciB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBoZWlnaHQ6IDg4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA4OHB4O1xyXG4gICAgICAvLyBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZXJ2aWNlIHtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC4wMTBlbTtcclxuICAgICAgbWluLWhlaWdodDogODhweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG4gICAgICAuaW1hZ2Utd3JhcHBlciB7XHJcbiAgICAgICAgLmltYWdlIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zZXJ2aWNlLW5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubm8tcmVzdWx0cy1tZXNzYWdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4OHB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgZmxleDogMCAxIGF1dG87XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDgwcHg7XHJcbiAgbWF4LWhlaWdodDogMTYwcHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgcGFkZGluZzogMTZweCAwO1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxubWF0LWRpdmlkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDkwcHg7XHJcbiAgLy8gYm9yZGVyLXRvcC1jb2xvcjogIzAwYmNkNDtcclxufVxyXG5cclxuaDQge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxuICAvLyBjb2xvcjogIzAwYmNkNDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQge1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/my-dashboard/customerService/customerServices.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/my-dashboard/customerService/customerServices.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CustomerServiceStarterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerServiceStarterComponent", function() { return CustomerServiceStarterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _confirm_dialog2_confirm_dialog2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../confirm-dialog2/confirm-dialog2.component */ "./src/app/components/confirm-dialog2/confirm-dialog2.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _custor_services_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@custor/services/animations */ "./src/@custor/services/animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Services_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Services/service.service */ "./src/app/Services/service.service.ts");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _model_IncentiveLog_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../model/IncentiveLog.model */ "./src/app/model/IncentiveLog.model.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _project_list_modal_project_list_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../project-list-modal/project-list-modal.component */ "./src/app/components/project-list-modal/project-list-modal.component.ts");
/* harmony import */ var _model_ServiceApplication_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../model/ServiceApplication.model */ "./src/app/model/ServiceApplication.model.ts");
/* harmony import */ var _Services_service_application_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../Services/service-application.service */ "./src/app/Services/service-application.service.ts");
/* harmony import */ var _enum_enums__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../enum/enums */ "./src/app/enum/enums.ts");















var CustomerServiceStarterComponent = /** @class */ (function () {
    function CustomerServiceStarterComponent(router, dialog, dataSharing, serviceService, accountService, snackbar, serviceapplicationService, route, toastr) {
        this.router = router;
        this.dialog = dialog;
        this.dataSharing = dataSharing;
        this.serviceService = serviceService;
        this.accountService = accountService;
        this.snackbar = snackbar;
        this.serviceapplicationService = serviceapplicationService;
        this.route = route;
        this.toastr = toastr;
        this.m = new _model_IncentiveLog_model__WEBPACK_IMPORTED_MODULE_9__["IncentiveLogModel"]();
        this.serviceApplication = new _model_ServiceApplication_model__WEBPACK_IMPORTED_MODULE_12__["ServiceApplicationModel"]();
    }
    CustomerServiceStarterComponent.prototype.ngOnInit = function () {
        this.getServices();
    };
    CustomerServiceStarterComponent.prototype.getServices = function () {
        var _this = this;
        this.serviceService.getAll().subscribe(function (result) {
            _this.customerServices = result;
        });
    };
    CustomerServiceStarterComponent.prototype.startService = function (serviceId, title) {
        var _this = this;
        if (localStorage.getItem('InvestorId') !== null) {
            localStorage.setItem('title', title);
            setTimeout(function () { return _this.dataSharing.currentIndex.next(0); }, 0);
            localStorage.setItem('currentIndex', '0');
            var investorId = +localStorage.getItem('InvestorId');
            switch (serviceId) {
                case _enum_enums__WEBPACK_IMPORTED_MODULE_14__["ServiceEnum"].NewIP:
                    this.router.navigate(['pro/' + 0 + '/' + 0 + '/' + serviceId + '/' + 0 + '/' + investorId]);
                    break;
                case _enum_enums__WEBPACK_IMPORTED_MODULE_14__["ServiceEnum"].TaxHolidayIncentive:
                case _enum_enums__WEBPACK_IMPORTED_MODULE_14__["ServiceEnum"].UploadingOfRawMaterial:
                case _enum_enums__WEBPACK_IMPORTED_MODULE_14__["ServiceEnum"].DutyFreeIncentive:
                case _enum_enums__WEBPACK_IMPORTED_MODULE_14__["ServiceEnum"].UploadingOfConstructionMaterial:
                case _enum_enums__WEBPACK_IMPORTED_MODULE_14__["ServiceEnum"].Renewal:
                case _enum_enums__WEBPACK_IMPORTED_MODULE_14__["ServiceEnum"].CancellationOfIP:
                case _enum_enums__WEBPACK_IMPORTED_MODULE_14__["ServiceEnum"].SubstituteIP:
                case _enum_enums__WEBPACK_IMPORTED_MODULE_14__["ServiceEnum"].AmendmentOfIP:
                case 1237:
                    this.router.navigate(['/investor-project-list/' + serviceId]);
                    break;
                case _enum_enums__WEBPACK_IMPORTED_MODULE_14__["ServiceEnum"].BusinessLicense:
                    this.router.navigate(['/business-tab/' + serviceId + '/' + investorId + '/' + 0 + '/' + 0 + '/' + 0 + '/' + 0]);
                    break;
                case _enum_enums__WEBPACK_IMPORTED_MODULE_14__["ServiceEnum"].CommercialRegistration:
                    this.startCustomerRegistrationService(serviceId, investorId);
                    break;
                case _enum_enums__WEBPACK_IMPORTED_MODULE_14__["ServiceEnum"].Expansion:
                    if (this.checkType()) {
                        this.router.navigate(['/investor-project-list/' + serviceId]);
                    }
                    else {
                        this.router.navigate(['pro/' + 0 + '/' + 0 + '/' + serviceId + '/' + 0 + '/' + investorId]);
                    }
                    break;
                default:
                    this.router.navigate(['/notfound'], { relativeTo: this.route });
                    break;
            }
            this.dialog.closeAll();
        }
        else {
            this.notification('Your Profile Must be completed');
            this.router.navigate(['/investor-tab/1235/0/0/0/0']);
        }
    };
    CustomerServiceStarterComponent.prototype.checkType = function () {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_confirm_dialog2_confirm_dialog2_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialog2Component"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (data) {
            _this.result = data;
        });
        return this.result;
    };
    CustomerServiceStarterComponent.prototype.notification = function (message) {
        this.snackbar.open("  " + message + " .!", 'Close', {
            duration: 3000
        });
    };
    CustomerServiceStarterComponent.prototype.selectProject = function (serviceId) {
        this.dialog.open(_project_list_modal_project_list_modal_component__WEBPACK_IMPORTED_MODULE_11__["ProjectListModalComponent"]);
    };
    CustomerServiceStarterComponent.prototype.startCustomerRegistrationService = function (serviceId, investorId) {
        var _this = this;
        this.serviceApplication.ProjectId = 0;
        this.serviceApplication.ServiceId = serviceId;
        this.serviceApplication.InvestorId = investorId;
        this.serviceApplication.CaseNumber = '1';
        this.serviceApplication.CurrentStatusId = _enum_enums__WEBPACK_IMPORTED_MODULE_14__["ApplicationStatusEnum"].Drafted;
        this.serviceApplication.IsSelfService = true;
        this.serviceApplication.IsPaid = true;
        this.serviceApplication.CreatedUserId = 1;
        this.serviceApplication.IsActive = false;
        this.serviceapplicationService
            .create(this.serviceApplication)
            .subscribe(function (result) {
            _this.router.navigate(['/investor-tab/' + serviceId + '/' + result.ServiceApplicationId + '/' + investorId + '/' + 0 + '/' + result.ServiceWorkflow[0].ServiceWorkflowId]);
        });
    };
    CustomerServiceStarterComponent.prototype.close = function () {
        window.history.back();
    };
    CustomerServiceStarterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-customer-service-list',
            template: __webpack_require__(/*! ./customerServices.component.html */ "./src/app/components/my-dashboard/customerService/customerServices.component.html"),
            animations: [_custor_services_animations__WEBPACK_IMPORTED_MODULE_4__["fadeInOut"]],
            styles: [__webpack_require__(/*! ./customerServices.component.scss */ "./src/app/components/my-dashboard/customerService/customerServices.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_8__["DataSharingService"],
            _Services_service_service__WEBPACK_IMPORTED_MODULE_7__["ServiceService"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_10__["AccountService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _Services_service_application_service__WEBPACK_IMPORTED_MODULE_13__["ServiceApplicationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], CustomerServiceStarterComponent);
    return CustomerServiceStarterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-components-my-dashboard-customerService-customerServiceList-module~app-components-my-das~f42eb6bd.js.map