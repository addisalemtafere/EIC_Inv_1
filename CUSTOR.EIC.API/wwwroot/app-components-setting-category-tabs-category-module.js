(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-setting-category-tabs-category-module"],{

/***/ "./src/app/components/setting/category-tabs/category-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/setting/category-tabs/category-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CategoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryRoutingModule", function() { return CategoryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _category_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-tabs.component */ "./src/app/components/setting/category-tabs/category-tabs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var route = [
    { path: '', component: _category_tabs_component__WEBPACK_IMPORTED_MODULE_2__["CategoryTabsComponent"] }
];
var CategoryRoutingModule = /** @class */ (function () {
    function CategoryRoutingModule() {
    }
    CategoryRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CategoryRoutingModule);
    return CategoryRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/setting/category-tabs/category-tabs.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/setting/category-tabs/category-tabs.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group style=\"width: 670px;margin-top: 20px;margin-left: 50px\">\r\n  <mat-tab label=\"Sector\">\r\n    <ng-template matTabContent>\r\n      <app-list-sector></app-list-sector>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab label=\"SubSector\">\r\n    <ng-template matTabContent>\r\n      <app-list-subsector></app-list-subsector>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab label=\"Activity\">\r\n    <ng-template matTabContent>\r\n      <app-list></app-list>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab label=\"Investment Activity\">\r\n    <ng-template matTabContent>\r\n      <app-list-invactivity></app-list-invactivity>\r\n    </ng-template>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n"

/***/ }),

/***/ "./src/app/components/setting/category-tabs/category-tabs.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/setting/category-tabs/category-tabs.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/setting/category-tabs/category-tabs.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/setting/category-tabs/category-tabs.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CategoryTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryTabsComponent", function() { return CategoryTabsComponent; });
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

var CategoryTabsComponent = /** @class */ (function () {
    function CategoryTabsComponent() {
    }
    CategoryTabsComponent.prototype.ngOnInit = function () {
    };
    CategoryTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-tabs',
            template: __webpack_require__(/*! ./category-tabs.component.html */ "./src/app/components/setting/category-tabs/category-tabs.component.html"),
            styles: [__webpack_require__(/*! ./category-tabs.component.scss */ "./src/app/components/setting/category-tabs/category-tabs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoryTabsComponent);
    return CategoryTabsComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/category-tabs/category.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/setting/category-tabs/category.module.ts ***!
  \*********************************************************************/
/*! exports provided: CategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _category_tabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-tabs.component */ "./src/app/components/setting/category-tabs/category-tabs.component.ts");
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-routing.module */ "./src/app/components/setting/category-tabs/category-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _sector_sector_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sector/sector.module */ "./src/app/components/setting/category-tabs/sector/sector.module.ts");
/* harmony import */ var _subsector_subsector_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subsector/subsector.module */ "./src/app/components/setting/category-tabs/subsector/subsector.module.ts");
/* harmony import */ var _Activity_activity_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Activity/activity.module */ "./src/app/components/setting/category-tabs/Activity/activity.module.ts");
/* harmony import */ var _InvActivity_invactivity_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./InvActivity/invactivity.module */ "./src/app/components/setting/category-tabs/InvActivity/invactivity.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CategoryModule = /** @class */ (function () {
    function CategoryModule() {
    }
    CategoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _category_routing_module__WEBPACK_IMPORTED_MODULE_2__["CategoryRoutingModule"],
                _sector_sector_module__WEBPACK_IMPORTED_MODULE_5__["SectorModule"],
                _subsector_subsector_module__WEBPACK_IMPORTED_MODULE_6__["SubsectorModule"],
                _Activity_activity_module__WEBPACK_IMPORTED_MODULE_7__["ActivityModule"],
                _InvActivity_invactivity_module__WEBPACK_IMPORTED_MODULE_8__["InvactivityModule"]
            ],
            declarations: [_category_tabs_component__WEBPACK_IMPORTED_MODULE_1__["CategoryTabsComponent"]]
        })
    ], CategoryModule);
    return CategoryModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-setting-category-tabs-category-module.js.map