(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-business-business-tab-business-tab-module~app-components-incentive-balance-balance-mo~62d259d6"],{

/***/ "./src/app/components/project-profile/service-confirmation/ServiceConfirmation-routing.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/project-profile/service-confirmation/ServiceConfirmation-routing.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ServiceConfirmationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceConfirmationRoutingModule", function() { return ServiceConfirmationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_confirmation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-confirmation.component */ "./src/app/components/project-profile/service-confirmation/service-confirmation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _service_confirmation_component__WEBPACK_IMPORTED_MODULE_2__["ServiceConfirmationComponent"] }
];
var ServiceConfirmationRoutingModule = /** @class */ (function () {
    function ServiceConfirmationRoutingModule() {
    }
    ServiceConfirmationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ServiceConfirmationRoutingModule);
    return ServiceConfirmationRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/project-profile/service-confirmation/ServiceConfirmation.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/project-profile/service-confirmation/ServiceConfirmation.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: ServiceConfirmationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceConfirmationModule", function() { return ServiceConfirmationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _service_confirmation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-confirmation.component */ "./src/app/components/project-profile/service-confirmation/service-confirmation.component.ts");
/* harmony import */ var _ServiceConfirmation_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ServiceConfirmation-routing.module */ "./src/app/components/project-profile/service-confirmation/ServiceConfirmation-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ServiceConfirmationModule = /** @class */ (function () {
    function ServiceConfirmationModule() {
    }
    ServiceConfirmationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _ServiceConfirmation_routing_module__WEBPACK_IMPORTED_MODULE_4__["ServiceConfirmationRoutingModule"]
            ],
            exports: [_service_confirmation_component__WEBPACK_IMPORTED_MODULE_3__["ServiceConfirmationComponent"]],
            declarations: [_service_confirmation_component__WEBPACK_IMPORTED_MODULE_3__["ServiceConfirmationComponent"]]
        })
    ], ServiceConfirmationModule);
    return ServiceConfirmationModule;
}());



/***/ }),

/***/ "./src/app/components/project-profile/service-confirmation/service-confirmation.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/project-profile/service-confirmation/service-confirmation.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"margin-2\" fxLayoutAlign=\"center center \">\r\n  <!--<mat-card-header>-->\r\n  <!--<button mat-icon-button class=\"mr-16\" (click)=\"back()\" color=\"primary\">-->\r\n  <!--<mat-icon>arrow_back</mat-icon>-->\r\n  <!--<span>Back</span>-->\r\n  <!--</button>-->\r\n  <!--</mat-card-header>-->\r\n  <!--<mat-divider></mat-divider>-->\r\n\r\n  <mat-card-content>\r\n\r\n\r\n    <div style=\"font-weight: bold;\" *ngIf=\"confirm\" fxLayout=\"row\" fxLayoutAlign=\"center left \" fxLayoutGap=\"2em\">\r\n      <div class=\"  block\" fxFlex=\"100%\">\r\n        <!--<div class=\"hdr-brk sub-title\">Confirmation</div>-->\r\n        <!--<div style=\"padding: 20px\">-->\r\n        <!--&lt;!&ndash;<strong>Dear customer; Thank you for Applying. <br>&ndash;&gt;-->\r\n\r\n        <!--&lt;!&ndash;Your application will be review soon and we get back for any feed back:</strong>&ndash;&gt;-->\r\n\r\n        <!--</div>-->\r\n        <div class=\"header-description\">\r\n          <div style=\"height: 110px;\" *ngIf=\"confirm\" fxLayout=\"row\" fxLayoutAlign=\"center center \"\r\n               fxLayoutGap=\"2em\">\r\n            <div fxFlex=\"30\" class=\"thankYou\" fxLayoutAlign=\"center right \">Thank</div>\r\n            <div fxFlex=\"10\">\r\n        <span fxLayoutAlign=\"center center \" class=\"circleBase type1\">\r\n                  <mat-icon style=\"font-size: 30px !important;color: white\" class=\"mat-48\">thumb_up</mat-icon>\r\n\r\n        </span>\r\n\r\n            </div>\r\n            <div fxFlex=\"30\" class=\"thankYou\" fxLayoutAlign=\"center center \">You</div>\r\n          </div>\r\n          <div style=\"text-align: center\">\r\n            Your application Case Number is: <span class=\"strongText\">{{ServiceApplicationId}}</span>\r\n\r\n            <br>\r\n            Click <strong class=\"strongText\">Submit</strong>\r\n            If you are done with your requests.<br>\r\n            <mat-icon color=\"warn\" class=\"mat-18\">warning</mat-icon>\r\n            If your application is not submitted, the application may\r\n            not reviewed by our staff.\r\n            <!--so you to have submit otherwise it remains visible to you only.-->\r\n            <!--<br>-->\r\n            <!--Track your application by the <strong class=\"strongText\">case number</strong>.-->\r\n            <!--you can track status, receive notifications, reserve time slot-->\r\n            <!--for visits, and provide additional inputs when requested.-->\r\n          </div>\r\n        </div>\r\n\r\n        <div style=\"padding-top: 100px\" fxLayoutAlign=\"center center\" class=\"\" fxFlex=\"\">\r\n          <button (click)=\"submitApplication()\" style=\"margin: 10px;background-color: #0c97a8;\"\r\n                  mat-raised-button>\r\n            <mat-icon style=\"color: white;font-weight: bolder\" class=\"48\">done</mat-icon>\r\n            <span style=\"margin: 10px;background-color: #0c97a8;font-weight: bolder;\" class=\"agree\">Submit</span>\r\n          </button>\r\n          <button (click)=\"back()\" style=\"margin: 10px;\" color=\"warn\" mat-raised-button>\r\n            <mat-icon class=\"mat-18\">close</mat-icon>\r\n            <span class=\"agree\">close</span>\r\n          </button>\r\n\r\n          <!--<button (click)=\"back()\" style=\"margin: 10px;\" color=\"warn\" mat-raised-button>-->\r\n          <!--<mat-icon class=\"mat-18\">x</mat-icon>-->\r\n          <!--<span>Close</span>-->\r\n          <!--</button>-->\r\n        </div>\r\n      </div>\r\n      <!--<div class=\"appGuid block\" fxFlex=\"40%\">-->\r\n      <!--&lt;!&ndash;<div class=\"hdr-brk sub-title\">Application Service Detail</div>&ndash;&gt;-->\r\n      <!--<h3 style=\"color: #f17117!important;\">Dear customer,<br>-->\r\n      <!--Thank you for Applying.<br>-->\r\n\r\n      <!--Your application will be review soon and we get back for any feed back:-->\r\n      <!--</h3>-->\r\n      <!--<mat-icon style=\"color: #f17117\" class=\"mat-48\">done</mat-icon>-->\r\n      <!--</div>-->\r\n    </div>\r\n  </mat-card-content>\r\n\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/service-confirmation/service-confirmation.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/project-profile/service-confirmation/service-confirmation.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert-success {\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n  color: #3c763d; }\n\n.border {\n  border: 1px solid #f1f1f1;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px; }\n\n.appGuid > ol, li, .alert-info {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif, \"Noto Sans Ethiopic\";\n  font-size: 13px;\n  line-height: 1.428571429;\n  color: #333;\n  padding: 10px;\n  text-align: justify !important; }\n\n.service > ol > li, span {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif, \"Noto Sans Ethiopic\";\n  font-size: 13px;\n  line-height: 1.428571429;\n  color: #333;\n  padding: 10px;\n  text-align: justify !important; }\n\n.footerButton {\n  border: 1px solid #f1f1f1;\n  border-radius: 8px;\n  background-color: #fafafa; }\n\n.agree {\n  color: white;\n  font-weight: bold; }\n\n.alert-info {\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n  color: #31708f;\n  margin: 20px; }\n\n.header-description {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif, \"Noto Sans Ethiopic\";\n  font-size: 13px;\n  line-height: 32px;\n  color: #333;\n  padding: 10px;\n  text-align: justify !important; }\n\n.hdr-brk {\n  padding: 5px 0;\n  background: #fff;\n  border-bottom: 1px solid #ccc;\n  line-height: 1; }\n\n.hdr-brk, .hm-bg-cnt .hm-bg-slick .lbl {\n  font-size: 16px; }\n\n.bld {\n  font-weight: 700; }\n\n.hdr-brk {\n  padding: 5px 0;\n  background: #fff;\n  border-bottom: 1px solid #ccc;\n  line-height: 1; }\n\n.thankYou {\n  font-size: 40px;\n  color: #0c97a8;\n  font-weight: bolder;\n  text-transform: uppercase;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; }\n\n.circleBase {\n  border-radius: 50%; }\n\n.type1 {\n  width: 100px;\n  height: 100px;\n  background: #0c97a8;\n  border: 1px solid #0c97a8; }\n"

/***/ }),

/***/ "./src/app/components/project-profile/service-confirmation/service-confirmation.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/project-profile/service-confirmation/service-confirmation.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ServiceConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceConfirmationComponent", function() { return ServiceConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _setting_services_tabs_serviceApplication_serviceapplication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../setting/services-tabs/serviceApplication/serviceapplication.service */ "./src/app/components/setting/services-tabs/serviceApplication/serviceapplication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ServiceConfirmationComponent = /** @class */ (function () {
    function ServiceConfirmationComponent(serviceApplicationsServices, router, errMsg, toastr, route) {
        this.serviceApplicationsServices = serviceApplicationsServices;
        this.router = router;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.route = route;
        this.confirm = true;
    }
    ServiceConfirmationComponent.prototype.ngOnInit = function () {
        this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
    };
    ServiceConfirmationComponent.prototype.submitApplication = function () {
        var _this = this;
        this.serviceApplicationsServices.finalForApprovalServiceApplications(this.ServiceApplicationId)
            .subscribe(function (result) {
            _this.confirm = true;
            // console.log(result);
            _this.toastr.success('Application submitted successfully we will revise soon as well as  we will notify for any action required');
        });
    };
    ServiceConfirmationComponent.prototype.back = function () {
        window.history.back();
    };
    ServiceConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-service-confirmation',
            template: __webpack_require__(/*! ./service-confirmation.component.html */ "./src/app/components/project-profile/service-confirmation/service-confirmation.component.html"),
            styles: [__webpack_require__(/*! ./service-confirmation.component.scss */ "./src/app/components/project-profile/service-confirmation/service-confirmation.component.scss")]
        }),
        __metadata("design:paramtypes", [_setting_services_tabs_serviceApplication_serviceapplication_service__WEBPACK_IMPORTED_MODULE_1__["ServiceapplicationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ServiceConfirmationComponent);
    return ServiceConfirmationComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-business-business-tab-business-tab-module~app-components-incentive-balance-balance-mo~62d259d6.js.map