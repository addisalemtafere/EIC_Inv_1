(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-project-profile-project-module~components-project-profile-project-product-product~6c5ac3fd"],{

/***/ "./src/app/components/project-profile/project-product/product-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-product/product-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function() { return ProductRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_product_list_project_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-product-list/project-product-list.component */ "./src/app/components/project-profile/project-product/project-product-list/project-product-list.component.ts");
/* harmony import */ var _project_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-product.component */ "./src/app/components/project-profile/project-product/project-product.component.ts");





var proRoutes = [
    { path: '', component: _project_product_list_project_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProjectProductListComponent"] },
    { path: ':id', component: _project_product_component__WEBPACK_IMPORTED_MODULE_4__["ProjectProductComponent"] }
];
var ProductRoutingModule = /** @class */ (function () {
    function ProductRoutingModule() {
    }
    ProductRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(proRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProductRoutingModule);
    return ProductRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-product/product.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/project-profile/project-product/product.module.ts ***!
  \******************************************************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-routing.module */ "./src/app/components/project-profile/project-product/product-routing.module.ts");
/* harmony import */ var _project_product_list_project_product_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-product-list/project-product-list.component */ "./src/app/components/project-profile/project-product/project-product-list/project-product-list.component.ts");
/* harmony import */ var _project_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-product.component */ "./src/app/components/project-profile/project-product/project-product.component.ts");
/* harmony import */ var _Services_project_input_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Services/project-input.service */ "./src/app/Services/project-input.service.ts");
/* harmony import */ var _Services_project_output_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Services/project-output.service */ "./src/app/Services/project-output.service.ts");
/* harmony import */ var _Services_project_requirement_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Services/project-requirement.service */ "./src/app/Services/project-requirement.service.ts");










var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _product_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProductRoutingModule"]
            ],
            declarations: [_project_product_list_project_product_list_component__WEBPACK_IMPORTED_MODULE_5__["ProjectProductListComponent"], _project_product_component__WEBPACK_IMPORTED_MODULE_6__["ProjectProductComponent"]],
            exports: [_project_product_list_project_product_list_component__WEBPACK_IMPORTED_MODULE_5__["ProjectProductListComponent"], _project_product_component__WEBPACK_IMPORTED_MODULE_6__["ProjectProductComponent"]],
            providers: [_Services_project_input_service__WEBPACK_IMPORTED_MODULE_7__["ProjectInputService"], _Services_project_output_service__WEBPACK_IMPORTED_MODULE_8__["ProjectOutputService"], _Services_project_requirement_service__WEBPACK_IMPORTED_MODULE_9__["ProjectRequirementService"]]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-product/project-product-list/project-product-list.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-product/project-product-list/project-product-list.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table style=\"height: 320px;display: block;overflow: auto;\" class=\"scrollbar table full-width\">\r\n  <thead>\r\n  <th>No</th>\r\n  <th>Product Name</th>\r\n  <th>Product Qty</th>\r\n  <th>Product Unit</th>\r\n  <th>Product Value</th>\r\n  <th>Domestic Market Share</th>\r\n  <th>Export Market Share</th>\r\n\r\n  <th>Remark</th>\r\n\r\n  </thead>\r\n  <tbody style=\"overflow: auto;\">\r\n  <tr class=\"planned\">\r\n    <td></td>\r\n    <td>{{plannedProductList?.ProductName}}</td>\r\n    <td>{{plannedProductList?.ProductQty}}</td>\r\n    <td>{{plannedProductList?.ProductUnit}}</td>\r\n    <td>{{plannedProductList?.ProductValue}}</td>\r\n    <td>{{plannedProductList?.DomesticMarketShare}}</td>\r\n    <td>{{plannedProductList?.ExportMarketShare}}</td>\r\n    <td>{{plannedProductList?.Remark}}</td>\r\n\r\n  </tr>\r\n  <tr *ngFor=\"let product of productList;let i=index;\">\r\n    <td>{{i+1}}</td>\r\n    <td>{{product.ProductName}}</td>\r\n    <td>{{product.ProductQty}}</td>\r\n    <td>{{product.ProductUnit}}</td>\r\n    <td>{{product.ProductValue}}</td>\r\n    <td>{{product.DomesticMarketShare}}</td>\r\n    <td>{{product.ExportMarketShare}}</td>\r\n    <td>{{product.Remark}}</td>\r\n\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/project-product/project-product-list/project-product-list.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-product/project-product-list/project-product-list.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table td {\n  padding: 4px 14px 4px 5px;\n  font-size: 13px;\n  border-top: 1px solid #FAFAFA; }\n\n.table th {\n  padding: 4px 14px 4px 5px;\n  font-size: 13px;\n  border-top: 1px solid #FAFAFA; }\n\ntable tbody tr:nth-child(2) td {\n  border: 1px solid #0d8055;\n  background-color: #0d8055;\n  color: white;\n  font-weight: bolder; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Byb2plY3QtcHJvZmlsZS9wcm9qZWN0LXByb2R1Y3QvcHJvamVjdC1wcm9kdWN0LWxpc3QvQzpcXFVzZXJzXFxGZXRpaGEgS1xcRGVza3RvcFxcREVWXFxHaXRMYWJcXEludmVzdG1uZXRcXENVU1RPUi5FSUMuQVBJXFxzcmMvYXBwXFxjb21wb25lbnRzXFxwcm9qZWN0LXByb2ZpbGVcXHByb2plY3QtcHJvZHVjdFxccHJvamVjdC1wcm9kdWN0LWxpc3RcXHByb2plY3QtcHJvZHVjdC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZiw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLDZCQUE2QixFQUFBOztBQUcvQjtFQUVFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQixFQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3Byb2plY3QtcHJvZmlsZS9wcm9qZWN0LXByb2R1Y3QvcHJvamVjdC1wcm9kdWN0LWxpc3QvcHJvamVjdC1wcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi50YWJsZSB0ZHtcclxuICBwYWRkaW5nOiA0cHggMTRweCA0cHggNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI0ZBRkFGQTtcclxuXHJcbn1cclxuLnRhYmxlIHRoIHtcclxuICBwYWRkaW5nOiA0cHggMTRweCA0cHggNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI0ZBRkFGQTtcclxufVxyXG5cclxudGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKDIpIHRkIHtcclxuXHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzBkODA1NTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ4MDU1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/project-profile/project-product/project-product-list/project-product-list.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-product/project-product-list/project-product-list.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: ProjectProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectProductListComponent", function() { return ProjectProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_project_output_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Services/project-output.service */ "./src/app/Services/project-output.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProjectProductListComponent = /** @class */ (function () {
    function ProjectProductListComponent(productService, route) {
        this.productService = productService;
        this.route = route;
    }
    ProjectProductListComponent.prototype.ngOnInit = function () {
        this.ProjectId = this.route.snapshot.params['ProjectId'];
        this.getProductAfterCare();
        this.getPlannedProduct();
    };
    ProjectProductListComponent.prototype.getProductAfterCare = function () {
        var _this = this;
        this.productService.getPOutActual(this.ProjectId)
            .subscribe(function (result) {
            _this.productList = result;
        });
    };
    ProjectProductListComponent.prototype.getPlannedProduct = function () {
        var _this = this;
        this.productService.getPOutPutByProject(this.ProjectId)
            .subscribe(function (result) {
            _this.plannedProductList = result[0];
        });
    };
    ProjectProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-product-list',
            template: __webpack_require__(/*! ./project-product-list.component.html */ "./src/app/components/project-profile/project-product/project-product-list/project-product-list.component.html"),
            styles: [__webpack_require__(/*! ./project-product-list.component.scss */ "./src/app/components/project-profile/project-product/project-product-list/project-product-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_project_output_service__WEBPACK_IMPORTED_MODULE_2__["ProjectOutputService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProjectProductListComponent);
    return ProjectProductListComponent;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-product/project-product.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-product/project-product.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n  width: 130px !important;\r\n}\r\n\r\nmat-header-row {\r\n  background-color: white;\r\n  border-top: 1px solid #f1f1f1;\r\n  border-bottom: 1px solid #f1f1f1 !important;\r\n}\r\n\r\n.mat-card-header {\r\n  min-height: 30px;\r\n  background-color: #fafafa;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Byb2plY3QtcHJvZmlsZS9wcm9qZWN0LXByb2R1Y3QvcHJvamVjdC1wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0IiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvcHJvamVjdC1wcm9maWxlL3Byb2plY3QtcHJvZHVjdC9wcm9qZWN0LXByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTMwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxubWF0LWhlYWRlci1yb3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1oZWFkZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/project-profile/project-product/project-product.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-product/project-product.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"margin-2\" style=\"box-shadow: none;border: 1px solid #dddddd\">\r\n  <mat-card-subtitle class=\"sub-title\">\r\n    <!--<mat-icon class=\"mat-18\">add</mat-icon>-->\r\n    Add New Product or Services\r\n    <mat-divider></mat-divider>\r\n  </mat-card-subtitle>\r\n\r\n  <form [formGroup]=\"productForm\" novalidate>\r\n    <mat-card-content>\r\n\r\n      <div style=\"margin-bottom: 40px;\" *ngIf=\"ServiceId=='1234'\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\r\n           fxLayoutGap=\"2em\">\r\n        <div class=\"block\" fxFlex=\"\" style=\"margin-left: 20px\">\r\n          <mat-form-field>\r\n            <mat-label>Quarter</mat-label>\r\n            <mat-select formControlName=\"Quarter\" required>\r\n              <mat-option *ngFor=\"let row of Quarter\" [value]=\"row.Id\">\r\n                <span>{{row.DescriptionEnglish}}</span>\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n        </div>\r\n        <div class=\"block\" fxFlex>\r\n          <mat-form-field>\r\n            <input placeholder=\"Registration Year* :\"\r\n                   matInput\r\n                   formControlName=\"RegistrationYear\"\r\n                   [matDatepicker]=\"RegistrationYear\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"RegistrationYear\"></mat-datepicker-toggle>\r\n            <mat-datepicker #RegistrationYear></mat-datepicker>\r\n            <mat-error align=\"start\" *ngIf=\"formErrors.RegistrationYear\" class=\"form__error\">\r\n              {{ formErrors.RegistrationYear }}\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <!--<div class=\"block\" fxFlex=\"\">-->\r\n        <!---->\r\n        <!--<mat-form-field>-->\r\n        <!--<input #OSF type=\"number\" formControlName=\"CapitalRegistrationDatetime\" matInput-->\r\n        <!--placeholder=\"Capital Registration Datetime * :\">-->\r\n        <!---->\r\n        <!--</mat-form-field>-->\r\n        <!--</div>-->\r\n        <div class=\"block\" fxFlex=\"\">\r\n\r\n          <mat-form-field>\r\n            <mat-select [disabled]=\"true\" formControlName=\"ProjectStatus\" required>\r\n              <option value=\"0\">--Select--</option>\r\n              <label>Project Status</label>\r\n              <mat-option *ngFor=\"let status of projectStatus\" [value]=\"status.Id\">\r\n                <span>{{status.DescriptionEnglish}}</span>\r\n              </mat-option>\r\n            </mat-select>\r\n\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <!--      <mat-card-subtitle class=\"sub-title\">-->\r\n      <!--        Detail-->\r\n      <!--        <mat-divider></mat-divider>-->\r\n      <!--      </mat-card-subtitle>-->\r\n\r\n      <div fxLayout.xs=\"row wrap\"\r\n           fxLayoutAlign.xs=\"start center\">\r\n        <div fxLayout.xs=\"\">\r\n          <div fxFlex=\"\">\r\n            <mat-form-field>\r\n              <mat-label>Product/Service Name</mat-label>\r\n              <input type=\"text\" matInput\r\n                     formControlName=\"ProductName\">\r\n              <mat-error align=\"start\" *ngIf=\"formErrors.ProductName\">{{ formErrors.ProductName }}</mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div>\r\n            <mat-form-field>\r\n              <mat-label>Product Quantity * :</mat-label>\r\n              <input type=\"number\" matInput\r\n                     formControlName=\"ProductQty\">\r\n              <mat-error align=\"start\" *ngIf=\"formErrors.ProductQty\">{{ formErrors.ProductQty }}</mat-error>\r\n\r\n            </mat-form-field>\r\n          </div>\r\n          <div>\r\n            <mat-form-field>\r\n              <mat-label>Product Unit :</mat-label>\r\n\r\n              <mat-select formControlName=\"ProductUnit\" required>\r\n                <option value=\"0\">--Select--</option>\r\n                <mat-option *ngFor=\"let unit of unitTypes\" [value]=\"unit.Id\">\r\n                  <span>{{unit.DescriptionEnglish}}</span>\r\n                </mat-option>\r\n              </mat-select>\r\n              <mat-error align=\"start\" *ngIf=\"formErrors.ProductUnit\">{{ formErrors.ProductUnit }}</mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <!--<mat-form-field [fxFlex]=\"12\">-->\r\n          <!--<mat-label>Product Value * :</mat-label>-->\r\n          <!--<input type=\"number\" matInput-->\r\n          <!--formControlName=\"ProductValue\">-->\r\n          <!--<mat-error align=\"start\" *ngIf=\"formErrors.ProductValue\">{{ formErrors.ProductValue }}-->\r\n          <!--</mat-error>-->\r\n          <!--</mat-form-field>-->\r\n          <div fxLayout.xs=\"row wrap\"\r\n               fxLayoutGap=\"2em\"\r\n               formGroupName=\"sharePercent\">\r\n            <div>\r\n              <mat-form-field>\r\n                <mat-label>Domestic Market Share * :</mat-label>\r\n                <input #DMS type=\"number\" matInput\r\n                       formControlName=\"DomesticMarketShare\" [errorStateMatcher]=\"confirmValidParentMatcher\">\r\n                <mat-error align=\"start\" *ngIf=\"formErrors.DomesticMarketShare\">{{ formErrors.DomesticMarketShare }}\r\n                </mat-error>\r\n                <mat-error>\r\n                  {{errors.ExportMarketShare}}\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div>\r\n              <mat-form-field>\r\n                <mat-label>Export Market Share * :</mat-label>\r\n                <input #EMS type=\"number\" matInput\r\n                       formControlName=\"ExportMarketShare\" [errorStateMatcher]=\"confirmValidParentMatcher\">\r\n                <mat-error>\r\n                  {{errors.ExportMarketShare}}\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n\r\n\r\n          <div>\r\n            <button mat-raised-button color=\"primary\"\r\n                    [disabled]=\"!productForm.valid\"\r\n                    (click)=\"onSubmit()\">\r\n              <mat-icon class=\"mat-18\">done</mat-icon>\r\n              {{editMode ? 'Save' : 'Add'}}\r\n            </button>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </mat-card-content>\r\n  </form>\r\n</mat-card>\r\n<mat-card class=\"margin-2 padding-0\" *ngIf=\"productData.length>0\">\r\n  <mat-card-header>\r\n    <mat-card-subtitle class=\"sub-title\">List of product\r\n      <!--<mat-divider></mat-divider>-->\r\n    </mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <div class=\"spinner-container\" *ngIf=\"loading \">\r\n      <mat-progress-bar mode=\"query\"></mat-progress-bar>\r\n    </div>\r\n    <mat-table #table [dataSource]=\"dataSource\">\r\n      <ng-container style=\"width: 10px !important;\" matColumnDef=\"No\">\r\n        <mat-header-cell style=\"width: 10px !important;\" *matHeaderCellDef>No</mat-header-cell>\r\n        <mat-cell style=\"width: 10px !important;\" *matCellDef=\"let productData;let i=index;\">{{i + 1}}</mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"ProductName\">\r\n        <mat-header-cell *matHeaderCellDef>Product Name</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let productData\"> {{productData.ProductName }}</mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"ProductQty\">\r\n        <mat-header-cell *matHeaderCellDef>Project Description</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let productData\"> {{productData.ProductQty }}</mat-cell>\r\n      </ng-container>\r\n\r\n      <!--<ng-container matColumnDef=\"ProductUnit\">-->\r\n      <!--<mat-header-cell *matHeaderCellDef> Product Unit</mat-header-cell>-->\r\n      <!--<mat-cell *matCellDef=\"let productData\"> {{productData.ProductUnit }}</mat-cell>-->\r\n      <!--</ng-container>-->\r\n\r\n      <!--<ng-container matColumnDef=\"ProductValue\">-->\r\n      <!--<mat-header-cell *matHeaderCellDef>Product Value</mat-header-cell>-->\r\n      <!--<mat-cell *matCellDef=\"let productData\">{{productData.ProductValue }}</mat-cell>-->\r\n      <!--</ng-container>-->\r\n      <ng-container matColumnDef=\"DomesticMarketShare\">\r\n        <mat-header-cell *matHeaderCellDef>Domestic Market Share</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let productData\">\r\n          {{productData.DomesticMarketShare}}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"ExportMarketShare\">\r\n        <mat-header-cell *matHeaderCellDef>Export Market Share</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let productData\">\r\n          {{productData.ExportMarketShare}}\r\n        </mat-cell>\r\n      </ng-container>\r\n<!--      <ng-container matColumnDef=\"Remark\">-->\r\n<!--        <mat-header-cell *matHeaderCellDef>Remark</mat-header-cell>-->\r\n<!--        <mat-cell *matCellDef=\"let productData\">-->\r\n<!--          {{productData.Remark}}-->\r\n<!--        </mat-cell>-->\r\n<!--      </ng-container>-->\r\n\r\n      <ng-container matColumnDef=\"Action\">\r\n        <mat-header-cell fxFlex=\"15\" *matHeaderCellDef>Action</mat-header-cell>\r\n        <mat-cell fxFlex=\"15\" *matCellDef=\"let productData;let i=index;\">\r\n          <div>\r\n            <a class=\"pointer\" mat-min-fab matTooltip=\"Click here to edit the product\"\r\n               (click)=\"onEditProduct(i)\">\r\n              <mat-icon color=\"primary\" class=\"mat-18\">edit</mat-icon>\r\n              Edit\r\n            </a>\r\n            <a class=\"pointer\" mat--mini-fab color=\"warn\" matTooltip=\"Click here to delete the product\"\r\n               (click)=\"deleteProduct(i,productData.ProjectOutputId)\">\r\n              <mat-icon color=\"warn\">delete</mat-icon>\r\n              Delete\r\n            </a>\r\n          </div>\r\n        </mat-cell>\r\n      </ng-container>\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\">\r\n      </mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n  </mat-card-content>\r\n  <div align=\"center\">\r\n    <div style=\"padding: 20px\" fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"2em\">\r\n\r\n      <div fxFlex=\"15\">\r\n\r\n        <!--<button class=\"custom-button\" (click)=\"next()\" color=\"warn\" type=\"button\">-->\r\n        <!--Back-->\r\n        <!--</button>-->\r\n      </div>\r\n      <div style=\"text-align: center\" fxFlex=\"67\" fxFlexAlign=\"center\">\r\n\r\n      </div>\r\n      <div fxFlex=\"15\">\r\n\r\n        <!--<button class=\"custom-button\" (click)=\"next()\" color=\"warn\" type=\"button\">-->\r\n        <!--Next-->\r\n        <!--</button>-->\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</mat-card>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/project-product/project-product.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-product/project-product.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ProjectProductComponent, ConfirmValidParentMatcher, regExps, errorMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectProductComponent", function() { return ProjectProductComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmValidParentMatcher", function() { return ConfirmValidParentMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regExps", function() { return regExps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorMessages", function() { return errorMessages; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _Services_project_input_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Services/project-input.service */ "./src/app/Services/project-input.service.ts");
/* harmony import */ var _Services_project_requirement_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Services/project-requirement.service */ "./src/app/Services/project-requirement.service.ts");
/* harmony import */ var _Services_project_output_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Services/project-output.service */ "./src/app/Services/project-output.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _custor_validation_custom_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @custor/validation/custom/form */ "./src/@custor/validation/custom/form.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../Services/project-profile.service */ "./src/app/Services/project-profile.service.ts");
/* harmony import */ var _model_lookupData__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../model/lookupData */ "./src/app/model/lookupData.ts");
/* harmony import */ var _custor_const_consts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @custor/const/consts */ "./src/@custor/const/consts.ts");
/* harmony import */ var _enum_enums__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../enum/enums */ "./src/app/enum/enums.ts");
















var ProjectProductComponent = /** @class */ (function () {
    function ProjectProductComponent(formBuilder, errMsg, route, projectProfileService, toastr, snackbar, dataSharing, formService, dataSharingService, pRequirementService, pInputService, pOutputService) {
        this.formBuilder = formBuilder;
        this.errMsg = errMsg;
        this.route = route;
        this.projectProfileService = projectProfileService;
        this.toastr = toastr;
        this.snackbar = snackbar;
        this.dataSharing = dataSharing;
        this.formService = formService;
        this.dataSharingService = dataSharingService;
        this.pRequirementService = pRequirementService;
        this.pInputService = pInputService;
        this.pOutputService = pOutputService;
        this.editMode = false;
        this.loading = false;
        this.displayedColumns = [
            'No', 'ProductName', 'ProductQty', 'DomesticMarketShare', 'ExportMarketShare', 'Action'
        ];
        this.formErrors = {
            ProductName: 'Enter the Product/Service name please!',
            ProductQty: 'Product quantity should be greater than zero!',
            ProductUnit: 'Product unit is required!',
            // ProductValue: '',
            DomesticMarketShare: 'Value should be <=100 and >=0!',
            ExportMarketShare: 'Value should be <=100 and >=0!',
            Remark: '',
            Quarter: '',
            RegistrationYear: ''
        };
        this.productData = [];
        this.confirmValidParentMatcher = new ConfirmValidParentMatcher();
        this.errors = errorMessages;
        this.projectStatus = [];
        this.Quarter = [];
        this.unitTypes = [];
        this.childrenEqual = function (formGroup) {
            var _a = Object.keys(formGroup.controls || {}), firstControlName = _a[0], otherControlNames = _a.slice(1);
            var isValid = otherControlNames.every(function (controlName) { return formGroup.get(controlName).value + formGroup.get(firstControlName).value === 100; });
            return isValid ? null : { childrenNotEqual: true };
        };
    }
    ProjectProductComponent.prototype.ngOnInit = function () {
        this.initStaticData('en');
        this.ServiceId = this.route.snapshot.params['ServiceId'];
        this.InvestorId = this.route.snapshot.params['InvestorId'];
        this.workFlowId = this.route.snapshot.params['workFlowId'];
        this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
        this.projectId = this.route.snapshot.params['ProjectId'];
        // if (this.ServiceId === '1234') {
        if (+this.ServiceId == _enum_enums__WEBPACK_IMPORTED_MODULE_15__["ServiceEnum"].AfterCare) {
            this.getProjectStatus(this.projectId);
        }
        if (this.projectId > 1 && this.ServiceId == '13') {
            this.getProjectOutPut();
        }
        this.initForm();
        this.autoSum();
    };
    ProjectProductComponent.prototype.getProjectOutPut = function () {
        var _this = this;
        this.pOutputService.getPOutPutByProject(this.projectId).subscribe(function (result) {
            if (result.length > 0) {
                _this.productData = result;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](_this.productData);
                _this.loading = false;
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    ProjectProductComponent.prototype.onSubmit = function () {
        var _this = this;
        this.productForm.removeControl('ProjectOutputId');
        this.formService.markFormGroupTouched(this.productForm);
        if (this.productForm.valid) {
            if (!this.editMode) {
                this.pOutputService.create(this.getProjectOutputData())
                    .subscribe(function (result) {
                    _this.productForm.addControl('ProjectOutputId', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''));
                    _this.notification('saved');
                    if (_this.productData.length < 1) {
                        // setTimeout(() => this.dataSharing.steeperIndex.next(7), 0);
                        setTimeout(function () { return _this.dataSharing.currentIndex.next(8); }, 0);
                    }
                    _this.productData.push(result);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](_this.productData);
                    _this.onClear();
                }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
            }
            else {
                this.pOutputService.update(this.getProjectOutputData(), this.productData[this.productEditIndex].ProjectOutputId)
                    .subscribe(function (result) {
                    _this.notification('updated');
                    _this.productData[_this.productEditIndex] = result;
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](_this.productData);
                    _this.onClear();
                }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
            }
        }
        else {
            this.formErrors = this.formService.validateForm(this.productForm, this.formErrors, false);
        }
    };
    ProjectProductComponent.prototype.onClear = function () {
        this.editMode = false;
        this.productForm.reset();
        this.productForm.patchValue({
            ProjectId: this.projectId
        });
        this.productForm.patchValue({
            workFlowId: this.workFlowId
        });
    };
    ProjectProductComponent.prototype.initForm = function () {
        this.productForm = this.formBuilder.group({
            ProjectId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.projectId),
            ProjectOutputId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            workFlowId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.workFlowId),
            ProductName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]),
            ProductQty: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]),
            ProductUnit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            // ProductValue: new FormControl(0, [Validators.required, Validators.min(0)]),
            Quarter: [''],
            RegistrationYear: [''],
            ProjectStatus: [''],
            sharePercent: this.formBuilder.group({
                DomesticMarketShare: [0, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)
                    ]],
                ExportMarketShare: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }, { validator: this.childrenEqual }),
            Remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])
        });
    };
    ProjectProductComponent.prototype.getProjectOutputData = function () {
        var formModel = this.productForm.value;
        return {
            ProjectId: formModel.ProjectId,
            // ProjectOutputId: '',
            workFlowId: formModel.workFlowId,
            ProductName: formModel.ProductName,
            ProductQty: formModel.ProductQty,
            ProductUnit: formModel.ProductUnit,
            // ProductValue: formModel.ProductValue,
            DomesticMarketShare: formModel.sharePercent.DomesticMarketShare,
            ExportMarketShare: formModel.sharePercent.ExportMarketShare,
            Quarter: formModel.Quarter,
            RegistrationYear: formModel.RegistrationYear,
            ProjectStatus: formModel.ProjectStatus,
            // IsExisting: formModel.IsExisting,
            Remark: formModel.Remark
        };
    };
    ProjectProductComponent.prototype.ngOnDestroy = function () {
        // this.subscription.unsubscribe();
    };
    ProjectProductComponent.prototype.notification = function (message) {
        this.loading = false;
        this.toastr.success(" Succesfully " + message + " Data.!", 'Success');
        this.snackbar.open(" Succesfully " + message + " Data.!", 'Close', {
            duration: 3000,
        });
    };
    ProjectProductComponent.prototype.deleteProduct = function (index, id) {
        var _this = this;
        this.pOutputService.delete(id)
            .subscribe(function () {
            _this.notification('Deleted');
            _this.productData.splice(index, 1);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](_this.productData);
        });
    };
    ProjectProductComponent.prototype.onEditProduct = function (index) {
        this.editMode = true;
        this.productEditIndex = index;
        this.productEdit = this.productData[index];
        this.productForm.patchValue(this.productEdit);
        this.productForm.get('sharePercent').patchValue({
            DomesticMarketShare: this.productEdit.DomesticMarketShare,
            ExportMarketShare: this.productEdit.ExportMarketShare
        });
    };
    ProjectProductComponent.prototype.ngAfterViewChecked = function () {
        // this.productForm.patchValue({
        //   ProjectId: localStorage.getItem('ProjectId')
        // });
        // this.productForm.patchValue({
        //   workFlowId: localStorage.getItem('workFlowId')
        // });
    };
    ProjectProductComponent.prototype.next = function () {
        this.dataSharing.steeperIndex.next(7);
    };
    ProjectProductComponent.prototype.initStaticData = function (currentLang) {
        var _this = this;
        var unit = new _model_lookupData__WEBPACK_IMPORTED_MODULE_13__["UnitType"]();
        _custor_const_consts__WEBPACK_IMPORTED_MODULE_14__["UnitTypes"].forEach(function (pair) {
            unit = {
                'Id': pair.Id.toString(),
                'DescriptionEnglish': pair.DescriptionEnglish,
                'Description': pair.Description
            };
            _this.unitTypes.push(unit);
        });
        var projectStatus1 = new _model_lookupData__WEBPACK_IMPORTED_MODULE_13__["ProjectStatusModel"]();
        _custor_const_consts__WEBPACK_IMPORTED_MODULE_14__["ProjectStatus"].forEach(function (pair) {
            projectStatus1 = {
                'Id': pair.Id.toString(),
                'DescriptionEnglish': pair.DescriptionEnglish,
                'Description': pair.Description
            };
            _this.projectStatus.push(projectStatus1);
        });
        var Quarter1 = new _model_lookupData__WEBPACK_IMPORTED_MODULE_13__["QuarterModel"]();
        _custor_const_consts__WEBPACK_IMPORTED_MODULE_14__["Quarter"].forEach(function (pair) {
            Quarter1 = {
                'Id': pair.Id.toString(),
                'DescriptionEnglish': pair.DescriptionEnglish,
                'Description': pair.Description
            };
            _this.Quarter.push(Quarter1);
        });
    };
    ProjectProductComponent.prototype.getProjectStatus = function (projectId) {
        var _this = this;
        this.projectProfileService.getProjectStatus(projectId)
            .subscribe(function (result) {
            _this.productForm.patchValue({
                ProjectStatus: result.toString()
            });
        });
    };
    ProjectProductComponent.prototype.autoSum = function () {
        var _this = this;
        this.productForm.get('sharePercent').get('DomesticMarketShare')
            .valueChanges.subscribe(function (result) {
            _this.productForm.get('sharePercent').patchValue({
                ExportMarketShare: 100 - result
            });
        });
    };
    ProjectProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-product',
            template: __webpack_require__(/*! ./project-product.component.html */ "./src/app/components/project-profile/project-product/project-product.component.html"),
            styles: [__webpack_require__(/*! ./project-product.component.css */ "./src/app/components/project-profile/project-product/project-product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_9__["ErrorMessage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"],
            _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_12__["ProjectProfileService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_4__["DataSharingService"],
            _custor_validation_custom_form__WEBPACK_IMPORTED_MODULE_10__["FormService"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_4__["DataSharingService"],
            _Services_project_requirement_service__WEBPACK_IMPORTED_MODULE_6__["ProjectRequirementService"],
            _Services_project_input_service__WEBPACK_IMPORTED_MODULE_5__["ProjectInputService"],
            _Services_project_output_service__WEBPACK_IMPORTED_MODULE_7__["ProjectOutputService"]])
    ], ProjectProductComponent);
    return ProjectProductComponent;
}());

/**
 * Custom ErrorStateMatcher which returns true (error exists) when the parent form group is invalid and the control has been touched
 */
var ConfirmValidParentMatcher = /** @class */ (function () {
    function ConfirmValidParentMatcher() {
    }
    ConfirmValidParentMatcher.prototype.isErrorState = function (control, form) {
        return control.parent.invalid && control.touched;
    };
    return ConfirmValidParentMatcher;
}());

/**
 * Collection of reusable RegExps
 */
var regExps = {
    password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
};
/**
 * Collection of reusable error messages
 */
var errorMessages = {
    ExportMarketShare: 'Sum of Market Share  must be  100 %'
};


/***/ })

}]);
//# sourceMappingURL=default~components-project-profile-project-module~components-project-profile-project-product-product~6c5ac3fd.js.map