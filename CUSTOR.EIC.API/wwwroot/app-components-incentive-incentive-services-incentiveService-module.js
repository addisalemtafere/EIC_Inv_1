(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-incentive-incentive-services-incentiveService-module"],{

/***/ "./src/app/components/incentive/incentive-services/incentive-services.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-services/incentive-services.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header title=\"incentiveServiceList\" icon=\"\"></app-page-header>\r\n\r\n<!--<mat-card fxFlex=\"35\">-->\r\n<!--<mat-card-header>-->\r\n<!--<mat-card-subtitle class=\"sub-title\">-->\r\n\r\n<!--Select One-->\r\n<!--&lt;!&ndash;<span>Investor Name : Name /</span> <span>   Project Name: p name / </span>&ndash;&gt;-->\r\n<!--&lt;!&ndash;<span class=\"sub-title\">{{title}}</span>&ndash;&gt;-->\r\n\r\n\r\n<!--<mat-divider></mat-divider>-->\r\n<!--</mat-card-subtitle>-->\r\n\r\n<!--</mat-card-header>-->\r\n<!--<mat-card-content>-->\r\n<!--<div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\">-->\r\n\r\n<!--<table style=\"height: 320px;display: block;overflow: auto;border: none;\" class=\" table\">-->\r\n<!--&lt;!&ndash;<thead style=\"padding-bottom: 14px;\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;<th>Select One <br>&ndash;&gt;-->\r\n<!--&lt;!&ndash;<div style=\"color: #fafafa;\">white</div>&ndash;&gt;-->\r\n<!--&lt;!&ndash;</th>&ndash;&gt;-->\r\n<!--&lt;!&ndash;</thead>&ndash;&gt;-->\r\n\r\n<!--<tbody style=\"overflow: auto;\">-->\r\n<!--<tr *ngFor=\"let item of incentiveServiceList\">-->\r\n<!--<td>-->\r\n<!--<a class=\"pointer\" (click)=\"view(item.ServiceId)\">-->\r\n<!--<mat-icon style=\"float: left;\" color=\"primary\" class=\"mat-18\">add_box</mat-icon>-->\r\n<!--<span style=\"float: left;font-size: 15px;\"> {{item.DisplayNameEnglish}}</span>-->\r\n<!--</a>-->\r\n\r\n<!--</td>-->\r\n<!--</tr>-->\r\n<!--</tbody>-->\r\n<!--</table>-->\r\n\r\n\r\n<!--</div>-->\r\n<!--</mat-card-content>-->\r\n\r\n<!--<mat-card-footer>-->\r\n<!--<mat-divider></mat-divider>-->\r\n\r\n<!--<div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\">-->\r\n<!--<div fxFlex=\"80\">-->\r\n<!--<button class=\"custom-button margin-10\" (click)=\"back()\">-->\r\n<!--<mat-icon class=\"mat-18\">arrow_back</mat-icon>-->\r\n<!--Back-->\r\n<!--</button>-->\r\n<!--</div>-->\r\n\r\n<!--</div>-->\r\n<!--</mat-card-footer>-->\r\n<!--</mat-card>-->\r\n<!--<app-page-header title=\"aftercare\" icon=\"add\"></app-page-header>-->\r\n\r\n<mat-card>\r\n  <!--<mat-card-header>-->\r\n    <!--<mat-card-subtitle>-->\r\n\r\n\r\n      <!--&lt;!&ndash;<span>Investor Name : Name /</span> <span>   Project Name: p name / </span>&ndash;&gt;-->\r\n      <!--&lt;!&ndash;<span class=\"sub-title\">{{title}}</span>&ndash;&gt;-->\r\n\r\n\r\n      <!--<mat-divider></mat-divider>-->\r\n    <!--</mat-card-subtitle>-->\r\n\r\n  <!--</mat-card-header>-->\r\n  <mat-card-content>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"2em\">\r\n\r\n      <div class=\"block\" fxFlex=\"30%\">\r\n\r\n        <table style=\"height: 320px;display: block;overflow: auto;\" class=\"scrollbar table full-width\">\r\n          <thead style=\"padding-bottom: 14px;\">\r\n          <th>Select One <br>\r\n          <div style=\"color: #fafafa;\">white</div>\r\n          </th>\r\n          </thead>\r\n\r\n          <tbody style=\"overflow: auto;\">\r\n          <tr *ngFor=\"let item of incentiveServiceList\">\r\n            <td>\r\n              <a class=\"pointer\" (click)=\"view(item.ServiceId)\">\r\n                <mat-icon style=\"float: left;\" color=\"primary\" class=\"mat-18\">add_box</mat-icon>\r\n                <span style=\"float: left;font-size: 15px;\"> {{item.DisplayNameEnglish}}</span>\r\n              </a>\r\n\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n      </div>\r\n\r\n      <div class=\"block\" fxFlex=\"69%\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n  </mat-card-content>\r\n\r\n  <mat-card-footer>\r\n    <mat-divider></mat-divider>\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"2em\">\r\n      <div fxFlex=\"80\">\r\n        <button class=\"custom-button margin-10\" (click)=\"back()\">\r\n          <mat-icon class=\"mat-18\">arrow_back</mat-icon>\r\n          Back\r\n        </button>\r\n      </div>\r\n      <!--<div fxFlex=\"15\">-->\r\n      <!--<button class=\"custom-button margin-10\" (click)=\"gotStep()\">-->\r\n      <!--<mat-icon class=\"mat-18\">add_circle_outline</mat-icon>-->\r\n      <!--Add-->\r\n      <!--</button>-->\r\n      <!--</div>-->\r\n    </div>\r\n  </mat-card-footer>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/incentive/incentive-services/incentive-services.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-services/incentive-services.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  border-spacing: 4px !important; }\n"

/***/ }),

/***/ "./src/app/components/incentive/incentive-services/incentive-services.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-services/incentive-services.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: IncentiveServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncentiveServicesComponent", function() { return IncentiveServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_customer_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../home/customer-service.service */ "./src/app/components/home/customer-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IncentiveServicesComponent = /** @class */ (function () {
    function IncentiveServicesComponent(incentiveService, router, route) {
        this.incentiveService = incentiveService;
        this.router = router;
        this.route = route;
    }
    IncentiveServicesComponent.prototype.ngOnInit = function () {
        this.getAllIncentiveServiceList();
    };
    IncentiveServicesComponent.prototype.getAllIncentiveServiceList = function () {
        var _this = this;
        this.incentiveService.getIncentiveServices()
            .subscribe(function (result) {
            _this.incentiveServiceList = result;
        });
    };
    IncentiveServicesComponent.prototype.view = function (serviceId, name) {
        this.title = name;
        switch (serviceId) {
            case 1047:
                this.router.navigate(['bill-of-material/1', 0]);
                break;
            case 1054:
                this.router.navigate(['bill-of-material/2', 0]);
                break;
            case 1046:
                this.router.navigate(['incentive-request-item/', 0]);
                break;
            case 1045:
                this.router.navigate(['tax-exemption/', 0]);
                break;
            default:
                this.router.navigate(['incentive-services']);
                break;
        }
    };
    IncentiveServicesComponent.prototype.back = function () {
        window.history.back();
    };
    IncentiveServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-incentive-services',
            template: __webpack_require__(/*! ./incentive-services.component.html */ "./src/app/components/incentive/incentive-services/incentive-services.component.html"),
            styles: [__webpack_require__(/*! ./incentive-services.component.scss */ "./src/app/components/incentive/incentive-services/incentive-services.component.scss")]
        }),
        __metadata("design:paramtypes", [_home_customer_service_service__WEBPACK_IMPORTED_MODULE_1__["CustomerServicesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], IncentiveServicesComponent);
    return IncentiveServicesComponent;
}());



/***/ }),

/***/ "./src/app/components/incentive/incentive-services/incentiveService.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-services/incentiveService.module.ts ***!
  \************************************************************************************/
/*! exports provided: IncentiveServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncentiveServiceModule", function() { return IncentiveServiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _incentiveServiceRouting_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./incentiveServiceRouting.module */ "./src/app/components/incentive/incentive-services/incentiveServiceRouting.module.ts");
/* harmony import */ var _incentive_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./incentive-services.component */ "./src/app/components/incentive/incentive-services/incentive-services.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var IncentiveServiceModule = /** @class */ (function () {
    function IncentiveServiceModule() {
    }
    IncentiveServiceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _incentiveServiceRouting_module__WEBPACK_IMPORTED_MODULE_3__["IncentiveServiceRoutingModule"]
            ],
            declarations: [_incentive_services_component__WEBPACK_IMPORTED_MODULE_4__["IncentiveServicesComponent"]],
            exports: [_incentive_services_component__WEBPACK_IMPORTED_MODULE_4__["IncentiveServicesComponent"]]
        })
    ], IncentiveServiceModule);
    return IncentiveServiceModule;
}());



/***/ }),

/***/ "./src/app/components/incentive/incentive-services/incentiveServiceRouting.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-services/incentiveServiceRouting.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: IncentiveServiceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncentiveServiceRoutingModule", function() { return IncentiveServiceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _incentive_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./incentive-services.component */ "./src/app/components/incentive/incentive-services/incentive-services.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    // {path: '', component: IncentiveServicesComponent},
    // {path: '', redirectTo: '/incentive-services', pathMatch: 'full'},
    {
        path: '', component: _incentive_services_component__WEBPACK_IMPORTED_MODULE_2__["IncentiveServicesComponent"], children: [
            // {path: '', component: AftercareComponent},
            {
                path: 'incentive-tab',
                loadChildren: 'app/components/incentive/incentive-tab/incentive-tab.module#IncentiveTabModule',
            }
        ]
    }
];
var IncentiveServiceRoutingModule = /** @class */ (function () {
    function IncentiveServiceRoutingModule() {
    }
    IncentiveServiceRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], IncentiveServiceRoutingModule);
    return IncentiveServiceRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-incentive-incentive-services-incentiveService-module.js.map