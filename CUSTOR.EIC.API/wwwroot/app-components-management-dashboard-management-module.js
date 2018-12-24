(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-management-dashboard-management-module"],{

/***/ "./src/app/components/management-dashboard/management-dashboard.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/management-dashboard/management-dashboard.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header title=\"dashboard\" icon=\"dashboard\"></app-page-header>\r\n<div class=\"grid-container\">\r\n  <!--<h1 class=\"mat-h1\">Dashboard</h1>-->\r\n  <mat-grid-list cols=\"2\" rowHeight=\"400px\">\r\n    <!--<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\" *ngIf=\"canViewTasks\">-->\r\n      <!--<mat-card class=\"dashboard-card-top\"-->\r\n                <!--style=\"background-color: #FAFAFA;height:400px!important;overflow: auto!important;\">-->\r\n\r\n        <!--<mat-card-content class=\"dashboard-card-content\">-->\r\n          <!--&lt;!&ndash;<app-project-list></app-project-list>&ndash;&gt;-->\r\n\r\n        <!--</mat-card-content>-->\r\n      <!--</mat-card>-->\r\n    <!--</mat-grid-tile>-->\r\n\r\n\r\n    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n      <mat-card class=\"dashboard-card\">\r\n        <mat-card-header>\r\n          <mat-card-title class=\"sub-title\">\r\n            All Service Application With Status\r\n            <mat-divider>\r\n\r\n            </mat-divider>\r\n\r\n            <ngx-charts-bar-vertical-stacked\r\n              [view]=\"view\"\r\n              [scheme]=\"colorScheme\"\r\n              [results]=\"multi\"\r\n              [gradient]=\"gradient\"\r\n              [xAxis]=\"showXAxis\"\r\n              [yAxis]=\"showYAxis\"\r\n              [legend]=\"showLegend\"\r\n              [showGridLines]=\"showGridLines\"\r\n              [showXAxisLabel]=\"showXAxisLabel\"\r\n              [showYAxisLabel]=\"showYAxisLabel\"\r\n              [xAxisLabel]=\"xAxisLabel\"\r\n              [yAxisLabel]=\"yAxisLabel\"\r\n              (select)=\"onSelect($event)\">\r\n            </ngx-charts-bar-vertical-stacked>\r\n\r\n\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content class=\"dashboard-card-content\">\r\n\r\n\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n\r\n    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n      <mat-card class=\"dashboard-card\">\r\n        <mat-card-header>\r\n          <mat-card-title class=\"sub-title\">\r\n            All Projects By Economic Sector And Project Stage\r\n            <mat-divider>\r\n\r\n            </mat-divider>\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content class=\"dashboard-card-content\">\r\n          <div id=\"serviceByYear\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\">\r\n              <div class=\"block\" fxFlex=\"\">\r\n                <ngx-charts-pie-chart\r\n                  [view]=\"viewP1\"\r\n                  [scheme]=\"colorSchemeP1\"\r\n                  [results]=\"byEconomicSector\"\r\n                  [legend]=\"showLegendP1\"\r\n                  [explodeSlices]=\"explodeSlicesP1\"\r\n                  [labels]=\"showLabelsP1\"\r\n                  [doughnut]=\"doughnutP1\"\r\n                  [gradient]=\"gradient\"\r\n                  [tooltipDisabled]=\"false\"\r\n\r\n                  (select)=\"onSelect($event)\">\r\n                </ngx-charts-pie-chart>\r\n                <div style=\"float: left;text-align: left;\">\r\n                  <div><span class=\"label primary\">&nbsp;</span>\r\n                    <span class=\"legend-label-text\"> Primary</span>\r\n                  </div>\r\n                  <div><span class=\"label secondary\">&nbsp;</span>\r\n                    <span class=\"legend-label-text\">secondary </span></div>\r\n                  <div><span class=\"label tertiary\">&nbsp;</span>\r\n                    <span class=\"legend-label-text\"> Tertiary </span></div>\r\n                </div>\r\n              </div>\r\n\r\n              <div id=\"projectStage\" class=\"block\" fxFlex=\"\">\r\n                <ngx-charts-pie-chart\r\n                  [view]=\"viewP1\"\r\n                  [scheme]=\"colorSchemeP2\"\r\n                  [results]=\"projectStageSum\"\r\n                  [legend]=\"showLegendP1\"\r\n                  [explodeSlices]=\"explodeSlicesP1\"\r\n                  [labels]=\"showLabelsP1\"\r\n\r\n                  [doughnut]=\"doughnutP1\"\r\n                  [gradient]=\"gradient\"\r\n                  (select)=\"onSelect($event)\">\r\n                </ngx-charts-pie-chart>\r\n                <div>\r\n                  <div style=\"text-align: left;\">\r\n                    <span class=\"label preImplementation \">&nbsp;</span>\r\n                    <span class=\"legend-label-text\">pre Implementation</span><br>\r\n                    <span class=\"label Implementation\">&nbsp;</span> <span\r\n                    class=\"legend-label-text\"> Implementation </span><br>\r\n                    <span class=\"label operation\">&nbsp;</span>\r\n                    <span class=\"legend-label-text\"> Operation </span></div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n\r\n\r\n    <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\r\n      <mat-card class=\"dashboard-card\">\r\n        <mat-card-header>\r\n          <mat-card-title class=\"sub-title\">\r\n            All Projects By Sector And Project Stage\r\n            <mat-divider>\r\n\r\n            </mat-divider>\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content class=\"dashboard-card-content\">\r\n          <ngx-charts-bar-vertical-stacked\r\n            [view]=\"projectView\"\r\n            [scheme]=\"colorScheme1\"\r\n            [results]=\"projects\"\r\n            [gradient]=\"gradient\"\r\n            [xAxis]=\"showXAxis\"\r\n            [yAxis]=\"showYAxis\"\r\n            [legend]=\"showLegend\"\r\n            [showXAxisLabel]=\"showXAxisLabel\"\r\n            [showYAxisLabel]=\"showYAxisLabel\"\r\n            [xAxisLabel]=\"xAxisLabelSector\"\r\n            [yAxisLabel]=\"yAxisLabel\"\r\n            (select)=\"onSelect($event)\">\r\n          </ngx-charts-bar-vertical-stacked>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/management-dashboard/management-dashboard.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/management-dashboard/management-dashboard.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 10px; }\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px; }\n\n.dashboard-card-top {\n  position: absolute;\n  /*top: 15px;*/\n  left: 15px;\n  right: 15px;\n  /*bottom: 15px;*/\n  padding: 0px !important;\n  box-shadow: none !important; }\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px; }\n\n.dashboard-card-content {\n  text-align: center; }\n\n/*mat-header-row {*/\n\n/*min-height: 30px !important;*/\n\n/*}*/\n\n.label {\n  border-radius: 50%;\n  font-size: 9px;\n  font-weight: 500;\n  padding: 3px 8px;\n  text-transform: uppercase; }\n\n.primary {\n  background-color: #9d8dca; }\n\n.secondary {\n  background-color: #fb9f5e; }\n\n.tertiary {\n  background-color: #d13447; }\n\n.preImplementation {\n  background-color: #fb9f5e; }\n\n.Implementation {\n  background-color: #d13447; }\n\n.operation {\n  background-color: #86c90a; }\n\n.legend-label-text {\n  font-weight: bold;\n  position: relative;\n  font-size: 12px;\n  padding: 3px 8px;\n  text-transform: capitalize; }\n"

/***/ }),

/***/ "./src/app/components/management-dashboard/management-dashboard.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/management-dashboard/management-dashboard.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ManagementDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementDashboardComponent", function() { return ManagementDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _Services_service_application_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/service-application.service */ "./src/app/Services/service-application.service.ts");
/* harmony import */ var _model_security_permission_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/security/permission.model */ "./src/app/model/security/permission.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManagementDashboardComponent = /** @class */ (function () {
    function ManagementDashboardComponent(dialog, accountService, serviceApplicationService) {
        this.dialog = dialog;
        this.accountService = accountService;
        this.serviceApplicationService = serviceApplicationService;
        this.cards = [
            { title: 'Card 1', cols: 2, rows: 1 },
            { title: 'Card 2', cols: 1, rows: 1 },
            { title: 'Card 3', cols: 1, rows: 2 },
            { title: 'Card 4', cols: 1, rows: 1 }
        ];
        this.cal = [];
        this.view = [450, 320];
        this.projectView = [900, 300];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showGridLines = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Service Name';
        this.xAxisLabelSector = 'Sector Name';
        this.showYAxisLabel = false;
        this.yAxisLabel = 'status';
        this.showLegend = true;
        this.colorScheme = {
            domain: ['#fb9f5e', '#5AA454', '#d13447', '#00bcd4', '#d13447']
        };
        this.colorScheme1 = {
            domain: ['#f27457', '#84c902', '#6ab1f4']
        };
        // pie configuration
        this.colorSchemeP1 = {
            domain: ['#9d8dca', '#fb9f5e', '#d13447', '#AAAAAA']
        };
        this.colorSchemeP2 = {
            domain: ['#fb9f5e', '#d13447', '#86c90a']
        };
        this.viewP1 = [200, 200];
        // pie
        this.showLabelsP1 = false;
        this.explodeSlicesP1 = false;
        this.doughnutP1 = false;
        this.legendPosition = 'Right';
        this.showLegendP1 = false;
    }
    ManagementDashboardComponent.prototype.ngOnInit = function () {
        this.getAllService();
    };
    ManagementDashboardComponent.prototype.onSelect = function (event) {
        // console.log(event);
    };
    ManagementDashboardComponent.prototype.getAllService = function () {
        var _this = this;
        this.serviceApplicationService.getApplicationGroupByServiceId()
            .subscribe(function (result) {
            _this.multi = result;
            // console.log(result);
        });
        this.serviceApplicationService.getProjectsGroupBySectorId()
            .subscribe(function (result) {
            _this.projects = result;
        });
        this.serviceApplicationService.getProjectsGroupByEconomicSector()
            .subscribe(function (result) {
            _this.byEconomicSector = result;
        });
        this.serviceApplicationService.getAllProjectsProjectStage()
            .subscribe(function (result) {
            _this.projectStageSum = result;
        });
    };
    Object.defineProperty(ManagementDashboardComponent.prototype, "canViewReadOnlyData", {
        get: function () {
            return this.accountService.userHasPermission(_model_security_permission_model__WEBPACK_IMPORTED_MODULE_4__["Permission"].ViewReadOnlyDataPermission);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagementDashboardComponent.prototype, "canViewTasks", {
        get: function () {
            return this.accountService.userHasPermission(_model_security_permission_model__WEBPACK_IMPORTED_MODULE_4__["Permission"].viewServiceList);
        },
        enumerable: true,
        configurable: true
    });
    ManagementDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-management-dashboard',
            template: __webpack_require__(/*! ./management-dashboard.component.html */ "./src/app/components/management-dashboard/management-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./management-dashboard.component.scss */ "./src/app/components/management-dashboard/management-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"],
            _Services_service_application_service__WEBPACK_IMPORTED_MODULE_3__["ServiceApplicationService"]])
    ], ManagementDashboardComponent);
    return ManagementDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/management-dashboard/management.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/management-dashboard/management.module.ts ***!
  \**********************************************************************/
/*! exports provided: ManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementModule", function() { return ManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _management_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./management-dashboard.component */ "./src/app/components/management-dashboard/management-dashboard.component.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _management_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["ManagementDashboardComponent"] }
];
var ManagementModule = /** @class */ (function () {
    function ManagementModule() {
    }
    ManagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["NgxChartsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            declarations: [_management_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["ManagementDashboardComponent"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _management_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["ManagementDashboardComponent"]]
        })
    ], ManagementModule);
    return ManagementModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-management-dashboard-management-module.js.map