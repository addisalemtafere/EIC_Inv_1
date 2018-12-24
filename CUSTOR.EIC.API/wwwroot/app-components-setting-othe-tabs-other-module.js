(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-setting-othe-tabs-other-module"],{

/***/ "./src/app/components/setting/othe-tabs/othe-tabs.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/setting/othe-tabs/othe-tabs.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group style=\"width: 655px;margin-top: 20px;margin-left: 50px\" >\r\n\r\n    <mat-tab label=\"Site\">\r\n      <ng-template matTabContent>\r\n        <app-list-site></app-list-site>\r\n      </ng-template>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n"

/***/ }),

/***/ "./src/app/components/setting/othe-tabs/othe-tabs.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/setting/othe-tabs/othe-tabs.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/setting/othe-tabs/othe-tabs.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/setting/othe-tabs/othe-tabs.component.ts ***!
  \*********************************************************************/
/*! exports provided: OtheTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtheTabsComponent", function() { return OtheTabsComponent; });
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

var OtheTabsComponent = /** @class */ (function () {
    function OtheTabsComponent() {
    }
    OtheTabsComponent.prototype.ngOnInit = function () {
    };
    OtheTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-othe-tabs',
            template: __webpack_require__(/*! ./othe-tabs.component.html */ "./src/app/components/setting/othe-tabs/othe-tabs.component.html"),
            styles: [__webpack_require__(/*! ./othe-tabs.component.scss */ "./src/app/components/setting/othe-tabs/othe-tabs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OtheTabsComponent);
    return OtheTabsComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/othe-tabs/other-routing.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/setting/othe-tabs/other-routing.ts ***!
  \***************************************************************/
/*! exports provided: OtherRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherRouting", function() { return OtherRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _othe_tabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./othe-tabs.component */ "./src/app/components/setting/othe-tabs/othe-tabs.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var route = [
    { path: '', component: _othe_tabs_component__WEBPACK_IMPORTED_MODULE_1__["OtheTabsComponent"] }
];
var OtherRouting = /** @class */ (function () {
    function OtherRouting() {
    }
    OtherRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(route)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], OtherRouting);
    return OtherRouting;
}());



/***/ }),

/***/ "./src/app/components/setting/othe-tabs/other.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/setting/othe-tabs/other.module.ts ***!
  \**************************************************************/
/*! exports provided: OtherModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherModule", function() { return OtherModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Site_site_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Site/site.module */ "./src/app/components/setting/othe-tabs/Site/site.module.ts");
/* harmony import */ var _othe_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./othe-tabs.component */ "./src/app/components/setting/othe-tabs/othe-tabs.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _other_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./other-routing */ "./src/app/components/setting/othe-tabs/other-routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var OtherModule = /** @class */ (function () {
    function OtherModule() {
    }
    OtherModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _other_routing__WEBPACK_IMPORTED_MODULE_5__["OtherRouting"],
                _Site_site_module__WEBPACK_IMPORTED_MODULE_1__["SiteModule"],
            ],
            declarations: [_othe_tabs_component__WEBPACK_IMPORTED_MODULE_2__["OtheTabsComponent"]],
            exports: [_othe_tabs_component__WEBPACK_IMPORTED_MODULE_2__["OtheTabsComponent"]]
        })
    ], OtherModule);
    return OtherModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-setting-othe-tabs-other-module.js.map