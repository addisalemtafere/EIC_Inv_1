(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-archive-application-archive-application-module"],{

/***/ "./src/app/components/archive-application/archive-application-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/archive-application/archive-application-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ArchiveApplicationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveApplicationRoutingModule", function() { return ArchiveApplicationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _archive_application_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./archive-application.component */ "./src/app/components/archive-application/archive-application.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _archive_application_component__WEBPACK_IMPORTED_MODULE_2__["ArchiveApplicationComponent"] }
];
var ArchiveApplicationRoutingModule = /** @class */ (function () {
    function ArchiveApplicationRoutingModule() {
    }
    ArchiveApplicationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ArchiveApplicationRoutingModule);
    return ArchiveApplicationRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/archive-application/archive-application.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/archive-application/archive-application.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header title=\"archiveApplication\" icon=\"library_add\"></app-page-header>\r\n<mat-card class=\"dashboard-card box\" style=\"overflow: auto;margin: 20px\">\r\n\r\n  <mat-card-content class=\"dashboard-card-content\">\r\n    <div fxFlex=\"100%\">\r\n\r\n      <div class=\"spinner-container\" *ngIf=\"loading \">\r\n        <mat-progress-bar mode=\"query\"></mat-progress-bar>\r\n      </div>\r\n      <mat-table #table [dataSource]=\"dataSource\">\r\n        <ng-container matColumnDef=\"No\">\r\n          <mat-header-cell [fxFlex]=\"10\" *matHeaderCellDef>No</mat-header-cell>\r\n          <mat-cell [fxFlex]=\"10\" *matCellDef=\"let serviceApplicationList;let i=index;\">\r\n            {{i+1}}\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"ServiceName\">\r\n          <mat-header-cell *matHeaderCellDef>Service Name</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let serviceApplicationList\">\r\n            {{serviceApplicationList?.ServiceNameEnglish}}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"ProjectName\">\r\n          <mat-header-cell *matHeaderCellDef>Project Name</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let serviceApplicationList\">\r\n            <!--{{(serviceApplicationList?.Project==='null')?'': serviceApplicationList?.Project?.ProjectName |-->\r\n            <!--filterPipe:10}}-->\r\n            {{serviceApplicationList?.ProjectNameEnglish}}\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n\r\n        <ng-container matColumnDef=\"StartDate\">\r\n          <mat-header-cell *matHeaderCellDef> Start Date</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let serviceApplicationList\">\r\n            {{serviceApplicationList?.StartDate | date}}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"currentStatus\">\r\n          <mat-header-cell *matHeaderCellDef>Current Status</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let serviceApplicationList\">\r\n                     <span class=\" common-button-status drafted\"\r\n                           *ngIf=\"serviceApplicationList?.CurrentStatusId===44450\">\r\n             Drafted\r\n                      </span>\r\n            <span class=\" common-button-status Submitted\"\r\n                  *ngIf=\"serviceApplicationList?.CurrentStatusId===44446\">\r\n             Submitted\r\n                      </span>\r\n            <span class=\" common-button-status Approved\"\r\n                  *ngIf=\"serviceApplicationList?.CurrentStatusId===44447\">\r\n            Approved\r\n                      </span>\r\n            <span class=\"common-button-status Pending\"\r\n                  *ngIf=\"serviceApplicationList?.CurrentStatusId===44448\">\r\n              Pending\r\n                      </span>\r\n            <span class=\" common-button-status Completed\"\r\n                  *ngIf=\"serviceApplicationList?.CurrentStatusId===44449\">\r\n           Completed\r\n                      </span>\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\">\r\n        </mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n        </mat-row>\r\n      </mat-table>\r\n\r\n      <mat-paginator\r\n\r\n        #paginator\r\n        [pageSize]=\"6\"\r\n        [pageSizeOptions]=\"[5, 10, 20]\">\r\n      </mat-paginator>\r\n    </div>\r\n\r\n\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/archive-application/archive-application.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/archive-application/archive-application.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  display: block;\n  position: relative;\n  padding: 0px !important;\n  border-radius: 2px; }\n"

/***/ }),

/***/ "./src/app/components/archive-application/archive-application.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/archive-application/archive-application.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ArchiveApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveApplicationComponent", function() { return ArchiveApplicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _custor_validation_custom_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/validation/custom/form */ "./src/@custor/validation/custom/form.ts");
/* harmony import */ var _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/project-profile.service */ "./src/app/Services/project-profile.service.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _Services_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/service.service */ "./src/app/Services/service.service.ts");
/* harmony import */ var _setting_services_tabs_serviceApplication_serviceapplication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../setting/services-tabs/serviceApplication/serviceapplication.service */ "./src/app/components/setting/services-tabs/serviceApplication/serviceapplication.service.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Services/notification.service */ "./src/app/Services/notification.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ArchiveApplicationComponent = /** @class */ (function () {
    function ArchiveApplicationComponent(projectProfileService, errMsg, router, dataSharing, route, accountService, service, formBuilder, formService, notifificationService, serviceApplication) {
        this.projectProfileService = projectProfileService;
        this.errMsg = errMsg;
        this.router = router;
        this.dataSharing = dataSharing;
        this.route = route;
        this.accountService = accountService;
        this.service = service;
        this.formBuilder = formBuilder;
        this.formService = formService;
        this.notifificationService = notifificationService;
        this.serviceApplication = serviceApplication;
        this.displayedColumns = [
            'No', 'ServiceName', 'ProjectName', 'currentStatus'
        ];
        this.loading = false;
    }
    ArchiveApplicationComponent.prototype.ngOnInit = function () {
        this.getServiceApplication();
        // this.getAllProject();
    };
    ArchiveApplicationComponent.prototype.getServiceApplication = function () {
        var _this = this;
        // console.log(localStorage.getItem('InvestorId'));
        this.serviceApplication.getServiceApplicationsByInvestorId(localStorage.getItem('InvestorId'))
            .subscribe(function (result) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"](result);
            _this.loading = false;
            _this.serviceApplicationList = result;
            _this.dataSource.paginator = _this.paginator;
        }, function (error) { return _this.errMsg.getError(error); });
    };
    ArchiveApplicationComponent.prototype.deleteProject = function (id) {
        var _this = this;
        // console.log(id);
        var response = confirm('Do you want to Delete this Project ?');
        if (response === true) {
            this.projectProfileService.delete(id)
                .subscribe(function () {
                _this.getServiceApplication();
            });
            return true;
        }
        else {
            return false;
        }
    };
    ArchiveApplicationComponent.prototype.projectDetail = function (id) {
        // console.log(this.router.url);
        this.router.navigate(['/service-detail', id]);
        // this.router.navigate(['../detail'], {relativeTo: this.route});
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginator"])
    ], ArchiveApplicationComponent.prototype, "paginator", void 0);
    ArchiveApplicationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-archive-application',
            template: __webpack_require__(/*! ./archive-application.component.html */ "./src/app/components/archive-application/archive-application.component.html"),
            styles: [__webpack_require__(/*! ./archive-application.component.scss */ "./src/app/components/archive-application/archive-application.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_project_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProjectProfileService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_1__["DataSharingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"],
            _Services_service_service__WEBPACK_IMPORTED_MODULE_5__["ServiceService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"],
            _custor_validation_custom_form__WEBPACK_IMPORTED_MODULE_2__["FormService"],
            _Services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"],
            _setting_services_tabs_serviceApplication_serviceapplication_service__WEBPACK_IMPORTED_MODULE_6__["ServiceapplicationService"]])
    ], ArchiveApplicationComponent);
    return ArchiveApplicationComponent;
}());



/***/ }),

/***/ "./src/app/components/archive-application/archive-application.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/archive-application/archive-application.module.ts ***!
  \******************************************************************************/
/*! exports provided: ArchiveApplicationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveApplicationModule", function() { return ArchiveApplicationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _archive_application_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./archive-application-routing.module */ "./src/app/components/archive-application/archive-application-routing.module.ts");
/* harmony import */ var _archive_application_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./archive-application.component */ "./src/app/components/archive-application/archive-application.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ArchiveApplicationModule = /** @class */ (function () {
    function ArchiveApplicationModule() {
    }
    ArchiveApplicationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _archive_application_routing_module__WEBPACK_IMPORTED_MODULE_3__["ArchiveApplicationRoutingModule"]
            ],
            declarations: [_archive_application_component__WEBPACK_IMPORTED_MODULE_4__["ArchiveApplicationComponent"]]
        })
    ], ArchiveApplicationModule);
    return ArchiveApplicationModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-archive-application-archive-application-module.js.map