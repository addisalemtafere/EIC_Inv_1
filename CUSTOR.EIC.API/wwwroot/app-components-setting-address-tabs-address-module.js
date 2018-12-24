(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-setting-address-tabs-address-module"],{

/***/ "./src/app/components/setting/address-tabs/address-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/address-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: AddressRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressRoutingModule", function() { return AddressRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _address_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./address-tabs.component */ "./src/app/components/setting/address-tabs/address-tabs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var route = [
    { path: '', component: _address_tabs_component__WEBPACK_IMPORTED_MODULE_2__["AddressTabsComponent"] }
];
var AddressRoutingModule = /** @class */ (function () {
    function AddressRoutingModule() {
    }
    AddressRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AddressRoutingModule);
    return AddressRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/setting/address-tabs/address-tabs.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/address-tabs.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<mat-card class=\"tabs-container\">-->\r\n\r\n<!--<mat-card-content>-->\r\n\r\n<!---->\r\n<!--</mat-card-content>-->\r\n<!--</mat-card>-->\r\n<!--<app-page-header title=\"address\" icon=\"dashboard\"></app-page-header>-->\r\n\r\n<mat-tab-group style=\"width: 655px;margin-top: 20px;margin-left: 50px\" >\r\n  <mat-tab label=\"Region\">\r\n    <ng-template matTabContent=\"\">\r\n      <div>\r\n        <app-list-region></app-list-region>\r\n      </div>\r\n    </ng-template>\r\n    <div>\r\n    </div>\r\n  </mat-tab>\r\n  <mat-tab label=\"Zone\">\r\n    <ng-template matTabContent=\"\">\r\n      <div class=\"tabs-container\">\r\n        <app-list-zone></app-list-zone>\r\n      </div>\r\n    </ng-template>\r\n    <div>\r\n    </div>\r\n  </mat-tab>\r\n  <mat-tab label=\"Woredas\">\r\n    <ng-template matTabContent=\"\">\r\n      <div>\r\n        <app-list-woreda></app-list-woreda>\r\n      </div>\r\n    </ng-template>\r\n    <div>\r\n    </div>\r\n  </mat-tab>\r\n  <mat-tab label=\"Kebele\">\r\n    <ng-template matTabContent=\"\">\r\n      <div class=\"tabs-container\">\r\n        <app-list-kebele></app-list-kebele>\r\n      </div>\r\n    </ng-template>\r\n    <div>\r\n    </div>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n"

/***/ }),

/***/ "./src/app/components/setting/address-tabs/address-tabs.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/address-tabs.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-tab {\n  width: 643px !important; }\n\n.mat-tab-label[_ngcontent-c9] {\n  min-width: 50px !important; }\n"

/***/ }),

/***/ "./src/app/components/setting/address-tabs/address-tabs.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/address-tabs.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddressTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressTabsComponent", function() { return AddressTabsComponent; });
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

var AddressTabsComponent = /** @class */ (function () {
    function AddressTabsComponent() {
    }
    AddressTabsComponent.prototype.ngOnInit = function () {
    };
    AddressTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-address-tabs',
            template: __webpack_require__(/*! ./address-tabs.component.html */ "./src/app/components/setting/address-tabs/address-tabs.component.html"),
            styles: [__webpack_require__(/*! ./address-tabs.component.scss */ "./src/app/components/setting/address-tabs/address-tabs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddressTabsComponent);
    return AddressTabsComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/address-tabs/address.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/setting/address-tabs/address.module.ts ***!
  \*******************************************************************/
/*! exports provided: AddressModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressModule", function() { return AddressModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _address_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./address-tabs.component */ "./src/app/components/setting/address-tabs/address-tabs.component.ts");
/* harmony import */ var _address_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./address-routing.module */ "./src/app/components/setting/address-tabs/address-routing.module.ts");
/* harmony import */ var _region_region_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./region/region.module */ "./src/app/components/setting/address-tabs/region/region.module.ts");
/* harmony import */ var _zone_zone_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zone/zone.module */ "./src/app/components/setting/address-tabs/zone/zone.module.ts");
/* harmony import */ var _Woredas_woreda_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Woredas/woreda.module */ "./src/app/components/setting/address-tabs/Woredas/woreda.module.ts");
/* harmony import */ var _kebele_kebele_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./kebele/kebele.module */ "./src/app/components/setting/address-tabs/kebele/kebele.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AddressModule = /** @class */ (function () {
    function AddressModule() {
    }
    AddressModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _address_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddressRoutingModule"],
                _region_region_module__WEBPACK_IMPORTED_MODULE_5__["RegionModule"],
                _zone_zone_module__WEBPACK_IMPORTED_MODULE_6__["ZoneModule"],
                _Woredas_woreda_module__WEBPACK_IMPORTED_MODULE_7__["WoredaModule"],
                _kebele_kebele_module__WEBPACK_IMPORTED_MODULE_8__["KebeleModule"]
            ],
            declarations: [
                _address_tabs_component__WEBPACK_IMPORTED_MODULE_3__["AddressTabsComponent"],
            ]
        })
    ], AddressModule);
    return AddressModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-setting-address-tabs-address-module.js.map