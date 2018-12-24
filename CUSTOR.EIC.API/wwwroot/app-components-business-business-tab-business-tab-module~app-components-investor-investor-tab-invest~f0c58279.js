(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-business-business-tab-business-tab-module~app-components-investor-investor-tab-invest~f0c58279"],{

/***/ "./src/app/components/project-profile/service-info/service-info.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/project-profile/service-info/service-info.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"margin-2\">\r\n  <mat-card-header>\r\n    <button mat-icon-button class=\"mr-16\" (click)=\"back()\" color=\"primary\">\r\n      <mat-icon>arrow_back</mat-icon>\r\n      <span>Back</span>\r\n    </button>\r\n  </mat-card-header>\r\n  <mat-divider></mat-divider>\r\n\r\n  <mat-card-content>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start  \" fxLayoutGap=\"2em\">\r\n      <div class=\"  block\" fxFlex=\"60%\">\r\n        <div class=\"hdr-brk sub-title\">{{title}}</div>\r\n        <div class=\"header-description \">\r\n          <strong>Required Scanned Documents to be Uploaded <i>(Pdf format only)</i> </strong>\r\n        </div>\r\n        <div class=\" border\">\r\n          <div style=\"margin: 10px 20px\" *ngIf=\"ServiceId==1235\">\r\n            <strong><i>Pre requisite only for registered customer.</i></strong>\r\n          </div>\r\n          <ol type=\"none\">\r\n            <li *ngFor=\"let item of checkLists;let i=index\">\r\n              <!--<span style=\"margin-right: 20px;\" matBadge=\"{{i+1}}\"></span>-->\r\n              <span>{{item.DescriptionEnglish}}</span>\r\n            </li>\r\n          </ol>\r\n\r\n\r\n        </div>\r\n        <div fxLayoutAlign=\" center\" class=\"footerButton block\" fxFlex=\"\">\r\n          <button class=\"button-success\" (click)=\"continue()\" color=\"warn\" style=\"margin: 20px;\">Start</button>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"appGuid block\" fxFlex=\"40%\">\r\n        <div class=\"hdr-brk sub-title\">Application Form guide</div>\r\n        <ol>\r\n          <li> Fields marked\r\n            with ‘astrics (<span style=\"font-size: 20px;\" class=\"error\">*</span>)’ sign are mandatory information that\r\n            should be provided.\r\n          </li>\r\n          <li>\r\n            Make sure that you have prepared scanned copies of the list of documents listed here in order to upload them\r\n            later, when requested.\r\n          </li>\r\n          <li>If you wish to pause your application request process and continue later, your can do so by saving your\r\n            application as a Draft and Resume it later by clicking on \"Draft Applications\" menu item.\r\n          </li>\r\n          <li>\r\n            After you Submit your Service Request Application, you will receive a confirmation email indicating receipt\r\n            of your application by our staff that will handle the case.\r\n            The staff who will handle your case may contact you for further information regarding your\r\n            application.\r\n          </li>\r\n\r\n        </ol>\r\n      </div>\r\n    </div>\r\n\r\n  </mat-card-content>\r\n\r\n  <mat-card-actions align=\"start center\">\r\n    <div fxLayout=\"row\" fxLayoutGap=\"2em\">\r\n    </div>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/service-info/service-info.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/project-profile/service-info/service-info.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border {\n  border: 1px solid #f1f1f1;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px; }\n\n.appGuid > ol, li, .alert-info {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif, \"Noto Sans Ethiopic\";\n  font-size: 13px;\n  line-height: 1.428571429;\n  color: #333;\n  padding: 4px;\n  text-align: justify !important; }\n\n.service > ol > li, span {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif, \"Noto Sans Ethiopic\";\n  font-size: 12px;\n  line-height: 1.428571429;\n  color: #333;\n  padding: 2px;\n  text-align: justify !important; }\n\n.footerButton {\n  border-bottom-left-radius: 6px;\n  border: 1px solid #f1f1f1;\n  text-align: right;\n  border-bottom-right-radius: 6px;\n  background-color: #fafafa; }\n\n.agree {\n  color: white;\n  font-weight: bold; }\n\n.alert-info {\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n  color: #31708f;\n  margin: 20px; }\n\n.header-description {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif, \"Noto Sans Ethiopic\";\n  font-size: 12px;\n  line-height: 20px;\n  color: #333;\n  padding: 3px;\n  text-align: justify !important;\n  margin: 10px 10px; }\n\n.hdr-brk {\n  padding: 5px 0;\n  background: #fff;\n  border-bottom: 1px solid #f1f1f1;\n  line-height: 1; }\n\n.hdr-brk, .hm-bg-cnt .hm-bg-slick .lbl {\n  font-size: 16px; }\n\n.bld {\n  font-weight: 700; }\n\n.hdr-brk {\n  padding: 5px 0;\n  background: #fff;\n  border-bottom: 1px solid #f1f1f1;\n  line-height: 1; }\n\ntable {\n  color: #333;\n  font-family: Helvetica, Arial, sans-serif;\n  border-collapse: collapse; }\n\ntbody > tr > td:first-child {\n  color: #333 !important;\n  font-weight: bold;\n  font-family: Helvetica, Arial, sans-serif;\n  margin: 6px; }\n\ntd, th {\n  height: 30px;\n  transition: all 0.3s;\n  /* Simple transition for hover effect */ }\n\ntd {\n  text-align: left; }\n\n/* Cells in even rows (2,4,6...) are one color */\n\ntr:nth-child(even) td {\n  background: #FEFEFE; }\n\n/* Cells in odd rows (1,3,5...) are another (excludes header cells)  */\n\ntr:nth-child(odd) td {\n  background: #FEFEFE; }\n\ntr td:hover {\n  background: #d8e9f9;\n  color: #FFF; }\n"

/***/ }),

/***/ "./src/app/components/project-profile/service-info/service-info.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/project-profile/service-info/service-info.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ServiceInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceInfoComponent", function() { return ServiceInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _setting_services_tabs_serviceprerequistie_servicePrerequisite_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../setting/services-tabs/serviceprerequistie/servicePrerequisite.service */ "./src/app/components/setting/services-tabs/serviceprerequistie/servicePrerequisite.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services/project-profile.service */ "./src/app/Services/project-profile.service.ts");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ServiceInfoComponent = /** @class */ (function () {
    function ServiceInfoComponent(servicePrerequisiteService, router, dataSharing, projetServices, route) {
        this.servicePrerequisiteService = servicePrerequisiteService;
        this.router = router;
        this.dataSharing = dataSharing;
        this.projetServices = projetServices;
        this.route = route;
    }
    ServiceInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = localStorage.getItem('title');
        this.ServiceId = this.route.snapshot.params['ServiceId'];
        // console.log(this.ServiceId)
        this.route.params
            .subscribe(function (params) {
            _this.serviceId = +params['id'];
            _this.serviceId = _this.route.snapshot.params['id'];
            if (_this.serviceId > 1) {
                _this.title = localStorage.getItem('title');
            }
        });
        this.getPrerequisiteByServiceId(this.ServiceId);
    };
    ServiceInfoComponent.prototype.getPrerequisiteByServiceId = function (serviceId) {
        var _this = this;
        // console.log(serviceId)
        this.servicePrerequisiteService
            .servicePrerequisiteByServiceId(serviceId)
            .subscribe(function (result) {
            _this.checkLists = result;
        });
    };
    ServiceInfoComponent.prototype.continue = function () {
        this.dataSharing.renewalIndex.next(1);
        this.dataSharing.steeperIndex.next(1);
    };
    ServiceInfoComponent.prototype.info = function () {
        this.router.navigate(['/requirement', this.ServiceId]);
    };
    ServiceInfoComponent.prototype.back = function () {
        window.history.back();
    };
    ServiceInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-service-info',
            template: __webpack_require__(/*! ./service-info.component.html */ "./src/app/components/project-profile/service-info/service-info.component.html"),
            styles: [__webpack_require__(/*! ./service-info.component.scss */ "./src/app/components/project-profile/service-info/service-info.component.scss")]
        }),
        __metadata("design:paramtypes", [_setting_services_tabs_serviceprerequistie_servicePrerequisite_service__WEBPACK_IMPORTED_MODULE_1__["ServicePrerequisiteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_4__["DataSharingService"],
            _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProjectProfileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ServiceInfoComponent);
    return ServiceInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/project-profile/service-info/serviceInfo-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/project-profile/service-info/serviceInfo-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ServiceInfoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceInfoRoutingModule", function() { return ServiceInfoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-info.component */ "./src/app/components/project-profile/service-info/service-info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _service_info_component__WEBPACK_IMPORTED_MODULE_2__["ServiceInfoComponent"] }
];
var ServiceInfoRoutingModule = /** @class */ (function () {
    function ServiceInfoRoutingModule() {
    }
    ServiceInfoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ServiceInfoRoutingModule);
    return ServiceInfoRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/project-profile/service-info/serviceInfo.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/project-profile/service-info/serviceInfo.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ServiceInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceInfoModule", function() { return ServiceInfoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _serviceInfo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serviceInfo-routing.module */ "./src/app/components/project-profile/service-info/serviceInfo-routing.module.ts");
/* harmony import */ var _service_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service-info.component */ "./src/app/components/project-profile/service-info/service-info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ServiceInfoModule = /** @class */ (function () {
    function ServiceInfoModule() {
    }
    ServiceInfoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _serviceInfo_routing_module__WEBPACK_IMPORTED_MODULE_3__["ServiceInfoRoutingModule"]
            ],
            exports: [_service_info_component__WEBPACK_IMPORTED_MODULE_4__["ServiceInfoComponent"]],
            declarations: [_service_info_component__WEBPACK_IMPORTED_MODULE_4__["ServiceInfoComponent"]]
        })
    ], ServiceInfoModule);
    return ServiceInfoModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-business-business-tab-business-tab-module~app-components-investor-investor-tab-invest~f0c58279.js.map