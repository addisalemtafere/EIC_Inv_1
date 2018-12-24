(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-home-requirement-requirement-module"],{

/***/ "./src/app/components/home/requirement/requirement-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/home/requirement/requirement-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: RequirementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequirementRoutingModule", function() { return RequirementRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _requirement_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requirement.component */ "./src/app/components/home/requirement/requirement.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _requirement_component__WEBPACK_IMPORTED_MODULE_1__["RequirementComponent"] }
];
var RequirementRoutingModule = /** @class */ (function () {
    function RequirementRoutingModule() {
    }
    RequirementRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], RequirementRoutingModule);
    return RequirementRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/home/requirement/requirement.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/home/requirement/requirement.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card style=\"margin: 40px auto;\" [@fadeInOut] class=\"page-content mat-elevation-z8\">\r\n  <mat-card-header>\r\n    <button mat-icon-button class=\"mr-16\" (click)=\"back()\" color=\"primary\">\r\n      <mat-icon>arrow_back</mat-icon>\r\n      <span>Back</span>\r\n    </button>\r\n  </mat-card-header>\r\n  <mat-divider></mat-divider>\r\n\r\n  <mat-card-content>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start  \" fxLayoutGap=\"4em\">\r\n      <div class=\"  block\" fxFlex=\"60%\">\r\n        <div class=\"hdr-brk sub-title\">Service: {{title}}</div>\r\n        <!-- <div class=\"header-description \">\r\n          <strong>Welcome to Ethiopian Investment Commission's Online Portal.</strong> The Ethiopian\r\n          Investment Commission Ethiopia provides the service applicants after checking fulfillment of below listed\r\n          service requirements.\r\n        </div> -->\r\n        <h3>Requirements</h3>\r\n        <!-- <div class=\" border\"> -->\r\n        <ol type=\"none\">\r\n          <li *ngFor=\"let item of checkLists;let i=index\">\r\n            <!--<span style=\"margin-right: 20px;\" matBadge=\"{{i+1}}\"></span>-->\r\n            <span>{{item.DescriptionEnglish}}</span>\r\n          </li>\r\n        </ol>\r\n        <h3>መሟላት ያለባቸው</h3>\r\n        <div class=\"checkList\" fxFlex=\"100\">\r\n          <ol>\r\n            <li *ngFor=\"let checkList of checkLists\">\r\n              <span>{{checkList.Description}}</span>\r\n            </li>\r\n          </ol>\r\n        </div>\r\n        <!--<div class=\"alert-info\" role=\"alert\">-->\r\n        <!--<div class=\"f-lft\">-->\r\n        <!--<mat-icon class=\"mat-18\" color=\"primary\">info</mat-icon>-->\r\n        <!--<div class=\"txt-j\"> By continuing using the system you certify that you have-->\r\n        <!--read-->\r\n        <!--the above service request instruction and accept the applicable-->\r\n        <!--<p class=\"bld\">-->\r\n        <!--<a target=\"_blank\" ui-sref=\"page({url:'privacy-policy'})\" translate=\"\" href=\"/page/privacy-policy\">Terms-->\r\n        <!--and Conditions</a>-->\r\n        <!--</p>-->\r\n        <!--</div>-->\r\n        <!--</div>-->\r\n        <!--</div>-->\r\n        <!-- </div> -->\r\n        <!--<div fxLayoutAlign=\" center\" class=\"footerButton block\" fxFlex=\"\">-->\r\n        <!--<button (click)=\"continue()\" style=\"margin: 10px;\" color=\"primary\" mat-raised-button>-->\r\n        <!--<mat-icon class=\"mat-18\">done</mat-icon>-->\r\n        <!--<span class=\"agree\">I agree and continue</span>-->\r\n        <!--</button>-->\r\n\r\n        <!--&lt;!&ndash;<button (click)=\"back()\" style=\"margin: 10px;\" color=\"warn\" mat-raised-button>&ndash;&gt;-->\r\n        <!--&lt;!&ndash;<mat-icon class=\"mat-18\">x</mat-icon>&ndash;&gt;-->\r\n        <!--&lt;!&ndash;<span>Close</span>&ndash;&gt;-->\r\n        <!--&lt;!&ndash;</button>&ndash;&gt;-->\r\n        <!--</div>-->\r\n      </div>\r\n      <div class=\"appGuid block\" fxFlex=\"40%\">\r\n        <div class=\"hdr-brk sub-title\">Application Form guide</div>\r\n        <ol>\r\n          <li>Please make sure that you have created an online account and customer profile that enables you to access\r\n            our portal.\r\n          </li>\r\n<<<<<<< HEAD\r\n          <li>After logging in to the portal, please select the service you would like to request from the provided list, and fill the Request Form properly in order to submit your service request application. Fields marked\r\n=======\r\n          <li>After logging in to the portal, please select the service you would like to request from the provided\r\n            list, and fill the Request Form properly in order to submit your service request application. Fields marked\r\n>>>>>>> db0381abf9b2e568739998bf1550b414722876b7\r\n            with ‘astrics (*)’ sign are mandatory information that should be provided.\r\n          </li>\r\n          <li>\r\n            Make sure that you have prepared scanned copies of the list of documnets listed here in order to uplaod them\r\n            later, when requested.\r\n          </li>\r\n          <li>If you wish to pause your application request process and continue later, your can do so by saving your\r\n            application as a Draft and Resume it later by cliking on \"Draft Applications\" menu item.\r\n          </li>\r\n          <li>\r\n<<<<<<< HEAD\r\n            After you Submit your Service Request Application, you will receive a confirmation email indicating receipt of your application by our staff that will handle the case.\r\n=======\r\n            After you Submit your Service Request Application, you will receive a confirmation email indicating receipt\r\n            of your application by our staff that will handle the case.\r\n>>>>>>> db0381abf9b2e568739998bf1550b414722876b7\r\n            The staff who will handle your case may contact you for further information regarding your\r\n            application.\r\n          </li>\r\n\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </mat-card-content>\r\n  <mat-card-actions align=\"start center\">\r\n    <div fxLayout=\"row\" fxLayoutGap=\"2em\">\r\n    </div>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/home/requirement/requirement.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/home/requirement/requirement.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-content {\n  padding: 24px;\n  width: 1000px;\n  margin: auto;\n  background-color: white; }\n\nh3 {\n  color: #00bcd4;\n  font-size: medium; }\n\nh4 {\n  margin-bottom: 0px;\n  font-size: smaller;\n  font-weight: normal; }\n\n.border {\n  border: 1px solid #ccc;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px; }\n\n.appGuid > ol, li, .alert-info {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif, \"Noto Sans Ethiopic\";\n  font-size: 13px;\n  line-height: 1.428571429;\n  color: #333;\n  padding: 10px;\n  text-align: justify !important; }\n\n.service > ol > li, span {\n  font-size: 14px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif, \"Noto Sans Ethiopic\";\n  line-height: 1.428571429;\n  color: #333; }\n\n.footerButton {\n  border-bottom-left-radius: 6px;\n  border: 1px solid #ccc;\n  border-top: none;\n  border-bottom-right-radius: 6px;\n  background-color: #fafafa; }\n\n.agree {\n  color: white;\n  font-weight: bold; }\n\n.alert-info {\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n  color: #31708f;\n  margin: 20px; }\n\n.header-description {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif, \"Noto Sans Ethiopic\";\n  font-size: 13px;\n  line-height: 32px;\n  color: #333;\n  padding: 10px;\n  text-align: justify !important;\n  margin: 10px 15px; }\n\n.hdr-brk {\n  padding: 5px 0;\n  background: #fff;\n  border-bottom: 1px solid #ccc;\n  line-height: 1; }\n\n.hdr-brk, .hm-bg-cnt .hm-bg-slick .lbl {\n  font-size: 16px; }\n\n.bld {\n  font-weight: 700; }\n\n.hdr-brk {\n  padding: 5px 0;\n  background: #fff;\n  border-bottom: 1px solid #ccc;\n  line-height: 1; }\n"

/***/ }),

/***/ "./src/app/components/home/requirement/requirement.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/home/requirement/requirement.component.ts ***!
  \**********************************************************************/
/*! exports provided: RequirementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequirementComponent", function() { return RequirementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _customer_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customer-service.service */ "./src/app/components/home/customer-service.service.ts");
/* harmony import */ var _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@custor/helpers/utilities */ "./src/@custor/helpers/utilities.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _custor_services_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../@custor/services/animations */ "./src/@custor/services/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RequirementComponent = /** @class */ (function () {
    function RequirementComponent(http, activatedRoute, custService, router, route, toastr) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.custService = custService;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
    }
    RequirementComponent.prototype.ngOnInit = function () {
        var id = this.activatedRoute.snapshot.params['id'];
        // console.debug(id);
        if (id < 1) {
            return;
        }
        this.getPres(id);
    };
    RequirementComponent.prototype.getPres = function (id) {
        var _this = this;
        this.title = localStorage.getItem('title');
        this.loadingIndicator = true;
        this.custService.getPrerequisites(id)
            .subscribe(function (result) {
            _this.checkLists = result;
            // console.log(result);
        }, function (error) {
            _this.toastr.error("Error: \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_4__["Utilities"].getHttpResponseMessage(error) + "\"");
        });
        this.loadingIndicator = false;
    };
    RequirementComponent.prototype.continue = function () {
        var ch = +localStorage.getItem('ServiceId');
        // this.dialogRef.close();
        this.router.navigate(['/login']);
    };
    RequirementComponent.prototype.back = function () {
        window.history.back();
    };
    RequirementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-requirement',
            template: __webpack_require__(/*! ./requirement.component.html */ "./src/app/components/home/requirement/requirement.component.html"),
            styles: [__webpack_require__(/*! ./requirement.component.scss */ "./src/app/components/home/requirement/requirement.component.scss")],
            animations: [_custor_services_animations__WEBPACK_IMPORTED_MODULE_6__["fadeInOut"]]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _customer_service_service__WEBPACK_IMPORTED_MODULE_3__["CustomerServicesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], RequirementComponent);
    return RequirementComponent;
}());



/***/ }),

/***/ "./src/app/components/home/requirement/requirement.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/home/requirement/requirement.module.ts ***!
  \*******************************************************************/
/*! exports provided: RequirementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequirementModule", function() { return RequirementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _requirement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./requirement.component */ "./src/app/components/home/requirement/requirement.component.ts");
/* harmony import */ var _requirement_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./requirement-routing.module */ "./src/app/components/home/requirement/requirement-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RequirementModule = /** @class */ (function () {
    function RequirementModule() {
    }
    RequirementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _requirement_routing_module__WEBPACK_IMPORTED_MODULE_4__["RequirementRoutingModule"]],
            exports: [_requirement_component__WEBPACK_IMPORTED_MODULE_3__["RequirementComponent"]],
            declarations: [_requirement_component__WEBPACK_IMPORTED_MODULE_3__["RequirementComponent"]]
        })
    ], RequirementModule);
    return RequirementModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-home-requirement-requirement-module.js.map