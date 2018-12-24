(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-project-list-modal-InvestorProjectList-module"],{

/***/ "./src/app/components/project-list-modal/InvestorProjectList.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/project-list-modal/InvestorProjectList.module.ts ***!
  \*****************************************************************************/
/*! exports provided: InvestorProjectListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestorProjectListModule", function() { return InvestorProjectListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _investorProjectList_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./investorProjectList-routing.module */ "./src/app/components/project-list-modal/investorProjectList-routing.module.ts");
/* harmony import */ var _project_list_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-list-modal.component */ "./src/app/components/project-list-modal/project-list-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var InvestorProjectListModule = /** @class */ (function () {
    function InvestorProjectListModule() {
    }
    InvestorProjectListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _investorProjectList_routing_module__WEBPACK_IMPORTED_MODULE_3__["InvestorProjectListRoutingModule"]
            ],
            declarations: [_project_list_modal_component__WEBPACK_IMPORTED_MODULE_4__["ProjectListModalComponent"]],
            exports: [_project_list_modal_component__WEBPACK_IMPORTED_MODULE_4__["ProjectListModalComponent"]]
        })
    ], InvestorProjectListModule);
    return InvestorProjectListModule;
}());



/***/ }),

/***/ "./src/app/components/project-list-modal/investorProjectList-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/project-list-modal/investorProjectList-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: InvestorProjectListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestorProjectListRoutingModule", function() { return InvestorProjectListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_list_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-list-modal.component */ "./src/app/components/project-list-modal/project-list-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var route = [
    { path: '', component: _project_list_modal_component__WEBPACK_IMPORTED_MODULE_2__["ProjectListModalComponent"] }
];
var InvestorProjectListRoutingModule = /** @class */ (function () {
    function InvestorProjectListRoutingModule() {
    }
    InvestorProjectListRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], InvestorProjectListRoutingModule);
    return InvestorProjectListRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-project-list-modal-InvestorProjectList-module.js.map