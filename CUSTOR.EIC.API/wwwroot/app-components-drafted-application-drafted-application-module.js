(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-drafted-application-drafted-application-module"],{

/***/ "./src/app/components/drafted-application/drafted-application-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/drafted-application/drafted-application-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: DraftedApplicationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraftedApplicationRoutingModule", function() { return DraftedApplicationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _drafted_application_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drafted-application.component */ "./src/app/components/drafted-application/drafted-application.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _drafted_application_component__WEBPACK_IMPORTED_MODULE_2__["DraftedApplicationComponent"] }
];
var DraftedApplicationRoutingModule = /** @class */ (function () {
    function DraftedApplicationRoutingModule() {
    }
    DraftedApplicationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DraftedApplicationRoutingModule);
    return DraftedApplicationRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/drafted-application/drafted-application.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/drafted-application/drafted-application.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header title=\"draftedApplication\" icon=\"drafts\"></app-page-header>\r\n\r\n<mat-card class=\"dashboard-card box\" style=\"overflow: auto;margin: 20px\">\r\n\r\n  <mat-card-content class=\"dashboard-card-content\">\r\n    <div fxFlex=\"100%\">\r\n\r\n      <div class=\"spinner-container\" *ngIf=\"loading \">\r\n        <mat-progress-bar mode=\"query\"></mat-progress-bar>\r\n      </div>\r\n      <mat-table #table [dataSource]=\"dataSource\">\r\n        <ng-container matColumnDef=\"No\">\r\n          <mat-header-cell [fxFlex]=\"10\" *matHeaderCellDef>No</mat-header-cell>\r\n          <mat-cell [fxFlex]=\"10\" *matCellDef=\"let serviceApplicationList;let i=index;\">\r\n            {{i+1}}\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"ServiceName\">\r\n          <mat-header-cell *matHeaderCellDef>Service Name</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let serviceApplicationList\">\r\n            {{serviceApplicationList?.ServiceNameEnglish}}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"ProjectName\">\r\n          <mat-header-cell *matHeaderCellDef>Project Name</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let serviceApplicationList\">\r\n            <!--{{(serviceApplicationList?.Project==='null')?'': serviceApplicationList?.Project?.ProjectName |-->\r\n            <!--filterPipe:10}}-->\r\n            {{serviceApplicationList?.ProjectNameEnglish}}\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n\r\n        <ng-container matColumnDef=\"StartDate\">\r\n          <mat-header-cell *matHeaderCellDef> Start Date</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let serviceApplicationList\">\r\n            {{serviceApplicationList?.StartDate | date}}\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"NextStep\">\r\n          <mat-header-cell *matHeaderCellDef>Next Step</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let serviceApplicationList\">\r\n            <a style=\"color: #00bcd4;\" *ngIf=\"!serviceApplicationList?.Project?.IsActive;else finished\"\r\n               (click)=\"nextStep(serviceApplicationList.ServiceWorkflow[0].NextStepId, serviceApplicationList.ProjectId,serviceApplicationList.ServiceApplicationId)\">\r\n              {{serviceApplicationList.ServiceWorkflow[0]?.NextStepId | serviceStepPipe}}\r\n              <!--<mat-icon color=\"primary\" class=\"mat-18\">navigate_next</mat-icon>-->\r\n            </a>\r\n            <ng-template #finished>\r\n              <span color=\"\" style=\"width: 150px;\">Completed</span>\r\n            </ng-template>\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"currentStatus\">\r\n          <mat-header-cell *matHeaderCellDef>Current Status</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let serviceApplicationList\">\r\n                     <span class=\" common-button-status drafted\"\r\n                           *ngIf=\"serviceApplicationList?.CurrentStatusId===44450\">\r\n             Drafted\r\n                      </span>\r\n            <span class=\" common-button-status Submitted\"\r\n                  *ngIf=\"serviceApplicationList?.CurrentStatusId===44446\">\r\n             Submitted\r\n                      </span>\r\n            <span class=\" common-button-status Approved\"\r\n                  *ngIf=\"serviceApplicationList?.CurrentStatusId===44447\">\r\n            Approved\r\n                      </span>\r\n            <span class=\"common-button-status Pending\"\r\n                  *ngIf=\"serviceApplicationList?.CurrentStatusId===44448\">\r\n              Pending\r\n                      </span>\r\n            <span class=\" common-button-status Completed\"\r\n                  *ngIf=\"serviceApplicationList?.CurrentStatusId===44449\">\r\n           Completed\r\n                      </span>\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"Action\">\r\n          <mat-header-cell *matHeaderCellDef>Action</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let serviceApplicationList; let i=index\">\r\n            <div>\r\n              <a class=\"margin-10 pointer\" mat-min-fab matTooltip=\"Click here to edit the project\"\r\n                 (click)=\"editProject(serviceApplicationList.ProjectId,serviceApplicationList.ServiceApplicationId,                serviceApplicationList.ServiceId )\">\r\n                <mat-icon color=\"primary\" class=\"mat-18\">edit</mat-icon>\r\n              </a>\r\n              <a class=\"margin-10 pointer\" mat--mini-fab color=\"warn\"\r\n                 matTooltip=\"Click here to delete the project\"\r\n                 (click)=\"deleteProject(serviceApplicationList.ProjectId)\">\r\n                <mat-icon color=\"warn\">delete</mat-icon>\r\n              </a>\r\n              <a class=\"margin-10 pointer\" mat--mini-fab color=\"accent\"\r\n                 matTooltip=\"Click here for detail of the project\"\r\n                 (click)=\"projectDetail(serviceApplicationList.ProjectId)\">\r\n                <mat-icon color=\"primary\">visibility</mat-icon>\r\n              </a>\r\n\r\n            </div>\r\n          </mat-cell>\r\n        </ng-container>\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\">\r\n        </mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n        </mat-row>\r\n      </mat-table>\r\n\r\n      <mat-paginator\r\n\r\n        #paginator\r\n        [pageSize]=\"6\"\r\n        [pageSizeOptions]=\"[5, 10, 20]\">\r\n      </mat-paginator>\r\n    </div>\r\n\r\n\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/drafted-application/drafted-application.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/drafted-application/drafted-application.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  display: block;\n  position: relative;\n  padding: 0px !important;\n  border-radius: 2px; }\n"

/***/ }),

/***/ "./src/app/components/drafted-application/drafted-application.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/drafted-application/drafted-application.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DraftedApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraftedApplicationComponent", function() { return DraftedApplicationComponent; });
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












var DraftedApplicationComponent = /** @class */ (function () {
    function DraftedApplicationComponent(projectProfileService, errMsg, router, dataSharing, route, accountService, service, formBuilder, formService, notifificationService, serviceApplication) {
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
            'No', 'ServiceName', 'ProjectName', 'NextStep', 'currentStatus', 'Action'
        ];
        this.loading = false;
    }
    DraftedApplicationComponent.prototype.ngOnInit = function () {
        this.getServiceApplication();
        // this.getAllProject();
    };
    DraftedApplicationComponent.prototype.getServiceApplication = function () {
        var _this = this;
        this.serviceApplication.getServiceApplicationsByInvestorId(localStorage.getItem('InvestorId'))
            .subscribe(function (result) {
            _this.loading = false;
            _this.filterData(result);
        }, function (error) { return _this.errMsg.getError(error); });
    };
    DraftedApplicationComponent.prototype.filterData = function (serviceApplication) {
        this.serviceApplicationList = [];
        for (var i = 0; i < serviceApplication.length; i++) {
            if (serviceApplication[i].IsActive === false) {
                this.serviceApplicationList.push(serviceApplication[i]);
                // console.log(serviceApplication[i]);
            }
        }
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"](this.serviceApplicationList);
        this.dataSource.paginator = this.paginator;
    };
    DraftedApplicationComponent.prototype.nextStep = function (step, projectId, serviceApplicationId) {
        var _this = this;
        var stepIndex;
        switch (step) {
            case 8:
                stepIndex = 1;
                break;
            case 9:
                stepIndex = 3;
                break;
            case 10:
                stepIndex = 4;
                break;
            case 11:
                stepIndex = 2;
                break;
            case 12:
                stepIndex = 6;
                break;
            case 13:
                stepIndex = 2;
                break;
            case 14:
                stepIndex = 5;
                break;
            case 18:
                stepIndex = 7;
                break;
        }
        setTimeout(function () { return _this.dataSharing.steeperIndex.next(stepIndex); }, 0);
        this.router.navigate(['pro/' + projectId + '/' + serviceApplicationId + '/' + 0 + '/' + 0 + '/' + 0]);
    };
    DraftedApplicationComponent.prototype.deleteProject = function (id) {
        var _this = this;
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
    DraftedApplicationComponent.prototype.editProject = function (projectId, serviceApplicationId, serviceId) {
        var _this = this;
        localStorage.setItem('ServiceApplicationId', serviceApplicationId);
        localStorage.setItem('ServiceId', serviceId);
        setTimeout(function () { return _this.dataSharing.isNew.next(true); }, 0);
        this.router.navigate(['pro/' + projectId + '/' + serviceApplicationId + '/' + 0 + '/' + 0 + '/' + 0]);
        this.dataSharing.steeperIndex.next(10);
    };
    DraftedApplicationComponent.prototype.projectDetail = function (id) {
        // console.log(this.router.url);
        this.router.navigate(['/service-detail', id]);
        // this.router.navigate(['../detail'], {relativeTo: this.route});
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginator"])
    ], DraftedApplicationComponent.prototype, "paginator", void 0);
    DraftedApplicationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drafted-application',
            template: __webpack_require__(/*! ./drafted-application.component.html */ "./src/app/components/drafted-application/drafted-application.component.html"),
            styles: [__webpack_require__(/*! ./drafted-application.component.scss */ "./src/app/components/drafted-application/drafted-application.component.scss")]
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
    ], DraftedApplicationComponent);
    return DraftedApplicationComponent;
}());



/***/ }),

/***/ "./src/app/components/drafted-application/drafted-application.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/drafted-application/drafted-application.module.ts ***!
  \******************************************************************************/
/*! exports provided: DraftedApplicationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraftedApplicationModule", function() { return DraftedApplicationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _drafted_application_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drafted-application-routing.module */ "./src/app/components/drafted-application/drafted-application-routing.module.ts");
/* harmony import */ var _drafted_application_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drafted-application.component */ "./src/app/components/drafted-application/drafted-application.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DraftedApplicationModule = /** @class */ (function () {
    function DraftedApplicationModule() {
    }
    DraftedApplicationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _drafted_application_routing_module__WEBPACK_IMPORTED_MODULE_3__["DraftedApplicationRoutingModule"]
            ],
            declarations: [_drafted_application_component__WEBPACK_IMPORTED_MODULE_4__["DraftedApplicationComponent"]]
        })
    ], DraftedApplicationModule);
    return DraftedApplicationModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-drafted-application-drafted-application-module.js.map