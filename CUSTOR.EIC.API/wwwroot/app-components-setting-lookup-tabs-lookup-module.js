(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-setting-lookup-tabs-lookup-module"],{

/***/ "./src/app/components/setting/lookup-tabs/lookup-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookup-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: LookupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupRoutingModule", function() { return LookupRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lookup_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lookup-tabs.component */ "./src/app/components/setting/lookup-tabs/lookup-tabs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var route = [
    { path: '', component: _lookup_tabs_component__WEBPACK_IMPORTED_MODULE_2__["LookupTabsComponent"] }
];
var LookupRoutingModule = /** @class */ (function () {
    function LookupRoutingModule() {
    }
    LookupRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route)
            ],
            declarations: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LookupRoutingModule);
    return LookupRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/lookup-tabs.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookup-tabs.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group style=\"width: 655px;margin-top: 20px;margin-left: 50px\">\r\n  <mat-tab label=\"lookup type\">\r\n    <ng-template matTabContent>\r\n      <app-list-lookuptypes></app-list-lookuptypes>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab label=\"lookup\">\r\n    <ng-template matTabContent>\r\n      <app-list-lookups></app-list-lookups>\r\n    </ng-template>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/lookup-tabs.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookup-tabs.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/lookup-tabs.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookup-tabs.component.ts ***!
  \*************************************************************************/
/*! exports provided: LookupTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupTabsComponent", function() { return LookupTabsComponent; });
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

var LookupTabsComponent = /** @class */ (function () {
    function LookupTabsComponent() {
    }
    LookupTabsComponent.prototype.ngOnInit = function () {
    };
    LookupTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lookup-tabs',
            template: __webpack_require__(/*! ./lookup-tabs.component.html */ "./src/app/components/setting/lookup-tabs/lookup-tabs.component.html"),
            styles: [__webpack_require__(/*! ./lookup-tabs.component.scss */ "./src/app/components/setting/lookup-tabs/lookup-tabs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LookupTabsComponent);
    return LookupTabsComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/lookup-tabs/lookup.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/setting/lookup-tabs/lookup.module.ts ***!
  \*****************************************************************/
/*! exports provided: LookupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupModule", function() { return LookupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _lookup_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lookup-tabs.component */ "./src/app/components/setting/lookup-tabs/lookup-tabs.component.ts");
/* harmony import */ var _lookup_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lookup-routing.module */ "./src/app/components/setting/lookup-tabs/lookup-routing.module.ts");
/* harmony import */ var _lookups_lookups_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lookups/lookups.module */ "./src/app/components/setting/lookup-tabs/lookups/lookups.module.ts");
/* harmony import */ var _lookuptypes_lookuptypes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lookuptypes/lookuptypes.module */ "./src/app/components/setting/lookup-tabs/lookuptypes/lookuptypes.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LookupModule = /** @class */ (function () {
    function LookupModule() {
    }
    LookupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _lookup_routing_module__WEBPACK_IMPORTED_MODULE_4__["LookupRoutingModule"],
                _lookuptypes_lookuptypes_module__WEBPACK_IMPORTED_MODULE_6__["LookupTypesModule"],
                _lookups_lookups_module__WEBPACK_IMPORTED_MODULE_5__["LookupsModule"]
            ],
            declarations: [_lookup_tabs_component__WEBPACK_IMPORTED_MODULE_3__["LookupTabsComponent"]]
        })
    ], LookupModule);
    return LookupModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-setting-lookup-tabs-lookup-module.js.map