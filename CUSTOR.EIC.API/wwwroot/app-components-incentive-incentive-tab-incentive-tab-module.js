(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-incentive-incentive-tab-incentive-tab-module"],{

/***/ "./src/app/components/incentive/incentive-tab/incentive-tab-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-tab/incentive-tab-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: IncentiveTabRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncentiveTabRoutingModule", function() { return IncentiveTabRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _incentive_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./incentive-tab.component */ "./src/app/components/incentive/incentive-tab/incentive-tab.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _incentive_tab_component__WEBPACK_IMPORTED_MODULE_2__["IncentiveTabComponent"] }
];
var IncentiveTabRoutingModule = /** @class */ (function () {
    function IncentiveTabRoutingModule() {
    }
    IncentiveTabRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], IncentiveTabRoutingModule);
    return IncentiveTabRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/incentive/incentive-tab/incentive-tab.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-tab/incentive-tab.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\r\n  <mat-tab label=\"Request Form\">\r\n    <ng-template matTabContent=\"\">\r\n\r\n    </ng-template>\r\n    <div>\r\n    </div>\r\n  </mat-tab>\r\n  <mat-tab label=\"Documents\">\r\n    <ng-template matTabContent=\"\">\r\n      <div class=\"tabs-container\">\r\n        <app-service-prerequisite></app-service-prerequisite>\r\n      </div>\r\n    </ng-template>\r\n    <div>\r\n    </div>\r\n  </mat-tab>\r\n\r\n</mat-tab-group>\r\n"

/***/ }),

/***/ "./src/app/components/incentive/incentive-tab/incentive-tab.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-tab/incentive-tab.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-tab {\n  width: 350px !important; }\n\n.mat-tab-label[_ngcontent-c9] {\n  min-width: 50px !important; }\n\n.tabs-container {\n  min-height: unset !important;\n  padding: 20px 10px;\n  background-color: white !important;\n  margin-bottom: 10px; }\n"

/***/ }),

/***/ "./src/app/components/incentive/incentive-tab/incentive-tab.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-tab/incentive-tab.component.ts ***!
  \*******************************************************************************/
/*! exports provided: IncentiveTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncentiveTabComponent", function() { return IncentiveTabComponent; });
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

var IncentiveTabComponent = /** @class */ (function () {
    function IncentiveTabComponent() {
    }
    IncentiveTabComponent.prototype.ngOnInit = function () {
    };
    IncentiveTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-incentive-tab',
            template: __webpack_require__(/*! ./incentive-tab.component.html */ "./src/app/components/incentive/incentive-tab/incentive-tab.component.html"),
            styles: [__webpack_require__(/*! ./incentive-tab.component.scss */ "./src/app/components/incentive/incentive-tab/incentive-tab.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IncentiveTabComponent);
    return IncentiveTabComponent;
}());



/***/ }),

/***/ "./src/app/components/incentive/incentive-tab/incentive-tab.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-tab/incentive-tab.module.ts ***!
  \****************************************************************************/
/*! exports provided: IncentiveTabModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncentiveTabModule", function() { return IncentiveTabModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _incentive_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./incentive-tab.component */ "./src/app/components/incentive/incentive-tab/incentive-tab.component.ts");
/* harmony import */ var _incentive_tab_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./incentive-tab-routing.module */ "./src/app/components/incentive/incentive-tab/incentive-tab-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var IncentiveTabModule = /** @class */ (function () {
    function IncentiveTabModule() {
    }
    IncentiveTabModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _incentive_tab_routing_module__WEBPACK_IMPORTED_MODULE_4__["IncentiveTabRoutingModule"]
            ],
            declarations: [_incentive_tab_component__WEBPACK_IMPORTED_MODULE_3__["IncentiveTabComponent"]],
            exports: [_incentive_tab_component__WEBPACK_IMPORTED_MODULE_3__["IncentiveTabComponent"]]
        })
    ], IncentiveTabModule);
    return IncentiveTabModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-incentive-incentive-tab-incentive-tab-module.js.map