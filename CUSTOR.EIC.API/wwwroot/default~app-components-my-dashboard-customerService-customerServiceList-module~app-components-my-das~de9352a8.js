(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-components-my-dashboard-customerService-customerServiceList-module~app-components-my-das~de9352a8"],{

/***/ "./src/app/Services/project-renewal.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/Services/project-renewal.service.ts ***!
  \*****************************************************/
/*! exports provided: ProjectRenewalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectRenewalService", function() { return ProjectRenewalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base.service */ "./src/app/Services/Base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var ProjectRenewalService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProjectRenewalService, _super);
    function ProjectRenewalService(http, appConfig, errMsg) {
        var _this = _super.call(this, http, appConfig.urls.url('projectRenewals'), errMsg) || this;
        _this.http = http;
        _this.appConfig = appConfig;
        _this.errMsg = errMsg;
        return _this;
    }
    ProjectRenewalService.prototype.getRenewalByServiceApplicationId = function (id) {
        console.log(id);
        return this.httpClient.get(this.appConfig.urls.url('ServiceApplicationWithRenewal') + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ProjectRenewalService.prototype.getRenewalByProjectId = function (id) {
        return this.httpClient.get(this.appConfig.urls.url('projectRenewalsbyId') + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ProjectRenewalService.prototype.getRenewalByServiceAppId = function (id) {
        console.log(id);
        return this.httpClient.get(this.appConfig.urls.url('ServiceAppWithRenewal') + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ProjectRenewalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_4__["AppConfiguration"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"]])
    ], ProjectRenewalService);
    return ProjectRenewalService;
}(_Base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));



/***/ }),

/***/ "./src/app/components/project-list-modal/project-list-modal.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/project-list-modal/project-list-modal.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header title=\"projectlist\" icon=\"list\"></app-page-header>\r\n\r\n<mat-card class=\"margin-2\">\r\n\r\n\r\n  <mat-card-content>\r\n    <div fxFlex=\"100%\">\r\n\r\n      <div class=\"spinner-container\" *ngIf=\"loadingIndicator\">\r\n        <mat-progress-bar mode=\"query\"></mat-progress-bar>\r\n      </div>\r\n      <mat-table #table [dataSource]=\"dataSource2\">\r\n\r\n        <ng-container matColumnDef=\"ProjectName\">\r\n          <mat-header-cell fxFlex=\"15\" *matHeaderCellDef>Project Name</mat-header-cell>\r\n          <mat-cell fxFlex=\"15\" *matCellDef=\"let projectList\">\r\n            {{projectList?.ProjectName}}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"ProjectDescription\">\r\n          <mat-header-cell fxFlex=\"20\" *matHeaderCellDef>Project Description</mat-header-cell>\r\n          <mat-cell fxFlex=\"20\" *matCellDef=\"let projectList\">\r\n\r\n            {{(projectList.ProjectDescription!=null) ? (projectList.ProjectDescription |\r\n            filterPipe:10): ''}}\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"startDate\">\r\n          <mat-header-cell fxFlex=\"10\" *matHeaderCellDef> Start Date</mat-header-cell>\r\n          <mat-cell fxFlex=\"10\" *matCellDef=\"let projectList\">\r\n            {{projectList?.StartDate | date}}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"InvestmentActivity\">\r\n          <mat-header-cell fxFlex=\"50\" *matHeaderCellDef> Investment Activity</mat-header-cell>\r\n          <mat-cell fxFlex=\"50\" *matCellDef=\"let projectList\">\r\n            {{projectList?.InvestmentActivity?.DescriptionEnglish}}\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"status\">\r\n          <mat-header-cell fxFlex=\"10\" *matHeaderCellDef>Status</mat-header-cell>\r\n          <mat-cell fxFlex=\"10\" *matCellDef=\"let projectList\">\r\n            <a style=\"color: #00bcd4;\" *ngIf=\"!projectList?.IsActive;else finished\">\r\n              Not active\r\n              <!--<mat-icon color=\"primary\" class=\"mat-18\">navigate_next</mat-icon>-->\r\n            </a>\r\n            <ng-template #finished>\r\n              <span style=\"color: #00bcd4;\">Active</span>\r\n            </ng-template>\r\n\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"Action\">\r\n\r\n          <mat-header-cell fxFlex=\"10\" *matHeaderCellDef>Action</mat-header-cell>\r\n\r\n          <mat-cell fxFlex=\"10\" *matCellDef=\"let projectList; let i=index\">\r\n            <div>\r\n              <a class=\"pointer custom-button\"\r\n                 (click)=\"go(projectList?.ProjectId,\r\n                 projectList?.ServiceApplicationId,\r\n              projectList.ServiceId,\r\n              projectList.InvestorId)\">\r\n\r\n                <!--<mat-icon color=\"primary\" class=\"mat-18\">send</mat-icon>-->\r\n                Select\r\n              </a>\r\n            </div>\r\n          </mat-cell>\r\n        </ng-container>\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumnsProject\">\r\n        </mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumnsProject;\">\r\n        </mat-row>\r\n      </mat-table>\r\n\r\n      <mat-paginator\r\n\r\n        #paginator2\r\n        [pageSize]=\"4\"\r\n        [pageSizeOptions]=\"[5, 10, 20]\">\r\n      </mat-paginator>\r\n      <mat-divider></mat-divider>\r\n      <mat-card-actions class=\"margin-10\">\r\n        <button mat-raised-button=\"\" (click)=\"back()\" color=\"primary\">\r\n          <mat-icon class=\"mat-18\">arrow_back</mat-icon>\r\n          Back\r\n        </button>\r\n      </mat-card-actions>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/project-list-modal/project-list-modal.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/project-list-modal/project-list-modal.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  display: block;\n  position: relative;\n  padding: 0px !important;\n  border-radius: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Byb2plY3QtbGlzdC1tb2RhbC9DOlxcVXNlcnNcXEZldGloYSBLXFxEZXNrdG9wXFxERVZcXEdpdExhYlxcSW52ZXN0bW5ldFxcQ1VTVE9SLkVJQy5BUElcXHNyYy9hcHBcXGNvbXBvbmVudHNcXHByb2plY3QtbGlzdC1tb2RhbFxccHJvamVjdC1saXN0LW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseURBQXVEO0VBQ3ZELGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQixFQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3Byb2plY3QtbGlzdC1tb2RhbC9wcm9qZWN0LWxpc3QtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoLjQsIDAsIC4yLCAxKTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/project-list-modal/project-list-modal.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/project-list-modal/project-list-modal.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProjectListModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectListModalComponent", function() { return ProjectListModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/project-profile.service */ "./src/app/Services/project-profile.service.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _model_IncentiveLog_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/IncentiveLog.model */ "./src/app/model/IncentiveLog.model.ts");
/* harmony import */ var _Services_incentive_log_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/incentive-log.service */ "./src/app/Services/incentive-log.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @custor/helpers/utilities */ "./src/@custor/helpers/utilities.ts");
/* harmony import */ var _setting_services_tabs_serviceApplication_serviceapplication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../setting/services-tabs/serviceApplication/serviceapplication.service */ "./src/app/components/setting/services-tabs/serviceApplication/serviceapplication.service.ts");
/* harmony import */ var _model_ServiceApplication_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../model/ServiceApplication.model */ "./src/app/model/ServiceApplication.model.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _enum_enums__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../enum/enums */ "./src/app/enum/enums.ts");
/* harmony import */ var _Services_project_renewal_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Services/project-renewal.service */ "./src/app/Services/project-renewal.service.ts");















var ProjectListModalComponent = /** @class */ (function () {
    function ProjectListModalComponent(projetServices, accountService, serviceapplicationService, toastr, renewalService, projectProfileService, router, errMsg, route, incentiveLogService) {
        this.projetServices = projetServices;
        this.accountService = accountService;
        this.serviceapplicationService = serviceapplicationService;
        this.toastr = toastr;
        this.renewalService = renewalService;
        this.projectProfileService = projectProfileService;
        this.router = router;
        this.errMsg = errMsg;
        this.route = route;
        this.incentiveLogService = incentiveLogService;
        this.displayedColumnsProject = ['ProjectName', 'startDate', 'InvestmentActivity', 'status', 'Action'];
        this.m = new _model_IncentiveLog_model__WEBPACK_IMPORTED_MODULE_4__["IncentiveLogModel"]();
        this.serviceApplication = new _model_ServiceApplication_model__WEBPACK_IMPORTED_MODULE_11__["ServiceApplicationModel"]();
    }
    ProjectListModalComponent.prototype.ngOnInit = function () {
        this.getAllProjects();
        this.select(localStorage.getItem('InvestorId'));
        this.ServiceId = this.route.snapshot.params['ServiceId'];
    };
    ProjectListModalComponent.prototype.getAllProjects = function () {
        var _this = this;
        this.projetServices.getProjectOnlyByInvestorId(+localStorage.getItem('InvestorId'))
            .subscribe(function (result) {
            _this.projectList = result;
        });
    };
    ProjectListModalComponent.prototype.select = function (InvestorId) {
        var _this = this;
        localStorage.setItem('InvestorId', InvestorId);
        this.loadingIndicator = true;
        this.projetServices.getProjectByInvestorId(InvestorId)
            .subscribe(function (result) {
            _this.projectList = result;
            _this.title = 'ProjectDetail';
            if (!_this.projectList) {
                _this.loadingIndicator = false;
                _this.toastr.error('No records were found to list', 'Error', {
                    closeButton: true,
                });
            }
            else {
                _this.loadingIndicator = false;
                _this.dataSource2 = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](result);
                // console.log(result);
                _this.dataSource2.paginator = _this.paginator2;
            }
        }, function (error) {
            _this.toastr.error("Error: \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_9__["Utilities"].getHttpResponseMessage(error) + "\"");
        });
        this.loadingIndicator = false;
    };
    ProjectListModalComponent.prototype.createServiceApp = function (serviceApp) {
        var _this = this;
        this.serviceApplication.CurrentStep = 2;
        console.log(serviceApp);
        this.serviceapplicationService.create(this.serviceApplication)
            .subscribe(function (result) {
            console.log(result);
            _this.view(result.ServiceId, 'Renewal', result.ServiceApplicationId, result.ServiceWorkflow[0].ServiceWorkflowId, result.ProjectId);
        });
    };
    ProjectListModalComponent.prototype.go = function (projectId, applicationId, ServiceId, InvestorId) {
        var _this = this;
        this.serviceApplication.ProjectId = projectId;
        this.serviceApplication.ServiceId = this.ServiceId;
        this.serviceApplication.InvestorId = InvestorId;
        this.serviceApplication.CaseNumber = '1';
        this.serviceApplication.CurrentStatusId = _enum_enums__WEBPACK_IMPORTED_MODULE_13__["ApplicationStatusEnum"].Drafted;
        this.serviceApplication.IsSelfService = true;
        this.serviceApplication.IsPaid = true;
        this.serviceApplication.CreatedUserId = 1;
        this.serviceApplication.IsActive = false;
        if (+this.ServiceId == _enum_enums__WEBPACK_IMPORTED_MODULE_13__["ServiceEnum"].Expansion) {
            this.router.navigate(['pro/' + projectId + '/' + 0 + '/' + _enum_enums__WEBPACK_IMPORTED_MODULE_13__["ServiceEnum"].Expansion + '/' + 0 + '/' + InvestorId]);
            localStorage.setItem('ParentProjectId', projectId);
        }
        else if (this.ServiceId == _enum_enums__WEBPACK_IMPORTED_MODULE_13__["ServiceEnum"].Renewal) {
            this.renewalService.getRenewalByProjectId(projectId)
                .subscribe(function (res) {
                console.log(res[0].MajorProblems);
                if (res.length == 0 || res[0].MajorProblems == 'Valid' || res[0].IsApproved == false) {
                    // check in the service application
                    _this.serviceapplicationService.getServiceApplicationsByProjectId(projectId, InvestorId, _this.ServiceId)
                        .subscribe(function (serApp) {
                        if (serApp.length != 0) {
                            _this.router.navigate(['/project-renewal/' + _this.ServiceId +
                                    '/' + serApp[0].InvestorId + '/' + serApp[0].ServiceApplicationId + '/' + serApp[0].ProjectId
                                    + '/' + serApp[0].ServiceWorkflow[0].ServiceWorkflowId]);
                        }
                        else {
                            if (res[0].ProjectStatus == 9) {
                                _this.createServiceApp(_this.serviceApplication);
                            }
                        }
                    });
                }
                else if (res[0].ProjectStatus == 9 && res[0].MajorProblems == 'InValid') {
                    // this.getServiceApp();
                    _this.toastr.error('The Selected project is already renewed!');
                }
                else {
                    _this.DisplayErrorMsg(res[0].ProjectStatus, projectId);
                }
            });
        }
        else if (this.ServiceId == _enum_enums__WEBPACK_IMPORTED_MODULE_13__["ServiceEnum"].SubstituteIP) {
            this.serviceapplicationService.getServiceApplicationsByProjectId(projectId, InvestorId, this.ServiceId)
                .subscribe(function (serApp) {
                if (serApp.length != 0) {
                    _this.router.navigate(['/project-substitute/' + _this.ServiceId + '/'
                            + serApp[0].InvestorId + '/' + serApp[0].ServiceApplicationId + '/' + serApp[0].ProjectId
                            + '/' + serApp[0].ServiceWorkflow[0].ServiceWorkflowId]);
                }
                else {
                    _this.projetServices.getProjectStatus(projectId)
                        .subscribe(function (res) {
                        if (res == 9) {
                            _this.toastr.info('creating service application...');
                            _this.createServiceApp(_this.serviceApplication);
                        }
                        else {
                            _this.DisplayErrorMsg(res, projectId);
                        }
                    });
                }
            });
        }
        else if (this.ServiceId == _enum_enums__WEBPACK_IMPORTED_MODULE_13__["ServiceEnum"].CancellationOfIP) {
            this.serviceapplicationService.getServiceApplicationsByProjectId(projectId, InvestorId, this.ServiceId)
                .subscribe(function (serApp) {
                if (serApp.length != 0) {
                    _this.router.navigate(['/project-cancellation/' + _this.ServiceId + '/'
                            + serApp[0].InvestorId + '/' + serApp[0].ServiceApplicationId + '/' + serApp[0].ProjectId
                            + '/' + serApp[0].ServiceWorkflow[0].ServiceWorkflowId]);
                }
                else {
                    _this.projetServices.getProjectStatus(projectId)
                        .subscribe(function (res) {
                        if (res == 9) {
                            _this.createServiceApp(_this.serviceApplication);
                        }
                        else {
                            _this.DisplayErrorMsg(res, projectId);
                        }
                    });
                }
            });
        }
        else {
            this.serviceApplication.ProjectId = projectId;
            this.serviceApplication.ServiceId = this.ServiceId;
            this.serviceApplication.InvestorId = InvestorId;
            this.serviceApplication.CaseNumber = '1';
            this.serviceApplication.CurrentStatusId = _enum_enums__WEBPACK_IMPORTED_MODULE_13__["ApplicationStatusEnum"].Drafted;
            this.serviceApplication.IsSelfService = true;
            this.serviceApplication.IsPaid = true;
            this.serviceApplication.CreatedUserId = 1;
            this.serviceApplication.IsActive = false;
            this.serviceapplicationService.create(this.serviceApplication)
                .subscribe(function (result) {
                _this.view(_this.ServiceId, 'Incentive', result.ServiceApplicationId, result.ServiceWorkflow[0].ServiceWorkflowId, projectId);
            });
        }
    };
    ProjectListModalComponent.prototype.view = function (serviceId, name, applicationId, workflowId, projectId) {
        this.title = name;
        console.log(workflowId);
        var investorId = localStorage.getItem('InvestorId');
        switch (serviceId) {
            // case '1047':
            case _enum_enums__WEBPACK_IMPORTED_MODULE_13__["ServiceEnum"].UploadingOfConstructionMaterial:
                this.router.navigate(['bill-of-material/1/' + serviceId + '/' + investorId + '/' + applicationId + '/' + projectId + '/' + workflowId]);
                break;
            // case '1054':
            case _enum_enums__WEBPACK_IMPORTED_MODULE_13__["ServiceEnum"].UploadingOfRawMaterial:
                this.router.navigate(['bill-of-material/2/' + serviceId + '/' + investorId + '/' + applicationId + '/' + projectId + '/' + workflowId]);
                break;
            // case '1046':
            case _enum_enums__WEBPACK_IMPORTED_MODULE_13__["ServiceEnum"].DutyFreeIncentive:
                this.router.navigate(['incentive-request-item/' + serviceId + '/' + investorId + '/' + applicationId + '/' + projectId + '/' + workflowId]);
                break;
            // case '1045':
            case _enum_enums__WEBPACK_IMPORTED_MODULE_13__["ServiceEnum"].TaxHolidayIncentive:
                this.getProjectDetails(projectId);
                if (this.ExemptionYear == 0) {
                    this.toastr.error('This project does not have the right to take tax Exemption incentive', 'Not Allowed');
                }
                else if (this.projectModel.ProjectStatus === 4) {
                    this.toastr.error('Project it already cancelled', 'Not Allowed');
                }
                else {
                    this.router.navigate(['tax-exemption/' + serviceId + '/' + investorId + '/' + applicationId + '/' + projectId + '/' + workflowId]);
                }
                break;
            // case '1236':
            case _enum_enums__WEBPACK_IMPORTED_MODULE_13__["ServiceEnum"].BusinessLicense:
                this.router.navigate(['business-tab/' + serviceId + '/' + investorId + '/' + applicationId + '/' + projectId + '/' + workflowId + '/' + workflowId + '/' + 0]);
                break;
            // case '18':
            case _enum_enums__WEBPACK_IMPORTED_MODULE_13__["ServiceEnum"].Renewal:
                this.router.navigate(['/project-renewal/' + serviceId + '/' + investorId + '/' + applicationId + '/' + projectId + '/' + workflowId]);
                break;
            // case '19':
            case _enum_enums__WEBPACK_IMPORTED_MODULE_13__["ServiceEnum"].CancellationOfIP:
                this.router.navigate(['/project-cancellation/' + serviceId + '/' + investorId + '/' + applicationId + '/' + projectId + '/' + workflowId]);
                break;
            // case '1023':
            case _enum_enums__WEBPACK_IMPORTED_MODULE_13__["ServiceEnum"].Expansion:
                this.router.navigate(['pro/' + projectId + '/' + applicationId + '/' + serviceId + '/' + 0 + '/' + investorId]);
                break;
            // case '1027':
            case _enum_enums__WEBPACK_IMPORTED_MODULE_13__["ServiceEnum"].SubstituteIP:
                this.router.navigate(['/project-substitute/' + serviceId + '/' + investorId + '/' + applicationId + '/' + projectId + '/' + workflowId]);
                break;
            // case '1028':
            case _enum_enums__WEBPACK_IMPORTED_MODULE_13__["ServiceEnum"].AmendmentOfIP:
                this.router.navigate(['pro/' + projectId + '/' + applicationId + '/' + serviceId + '/' + 0 + '/' + investorId]);
                break;
        }
    };
    ProjectListModalComponent.prototype.getProjectDetails = function (projectId) {
        var _this = this;
        this.projectProfileService.projectsDetailForLetter(projectId)
            .subscribe(function (result) {
            if (result) {
                _this.projectModel = result;
                _this.ExemptionYear = _this.projectModel.IsOromiaSpecialZone ? _this.projectModel.InvestmentActivity.InAddisOromiaAreas : _this.projectModel.InvestmentActivity.InOtherAreas;
                console.log(_this.projectModel.IsOromiaSpecialZone);
                console.log(_this.ExemptionYear);
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    ProjectListModalComponent.prototype.back = function () {
        window.history.back();
    };
    ProjectListModalComponent.prototype.DisplayErrorMsg = function (res, projectId) {
        if (res == 4) {
            this.toastr.error(' Could not be renewed! The Selected project  with Project Id ' + projectId + 'is already Cancelled');
        }
        else if (res == 5) {
            this.toastr.error(' Could not be renewed! The Selected project  with Project Id ' + projectId + 'is already Injected');
        }
        else if (res == 6) {
            this.toastr.error(' Could not be renewed! The Selected project  with Project Id ' + projectId + 'is already Closed');
        }
        else if (res == 7) {
            this.toastr.error(' Could not be renewed! The Selected project  with Project Id ' + projectId + 'is already Transfered');
        }
        else if (res == 8) {
            this.toastr.error(' Could not be renewed! The Selected project  with Project Id ' + projectId + 'is already Not Active');
        }
        else {
            this.toastr.error('Unknown result ');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"])
    ], ProjectListModalComponent.prototype, "paginator2", void 0);
    ProjectListModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-list-modal',
            template: __webpack_require__(/*! ./project-list-modal.component.html */ "./src/app/components/project-list-modal/project-list-modal.component.html"),
            styles: [__webpack_require__(/*! ./project-list-modal.component.scss */ "./src/app/components/project-list-modal/project-list-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_project_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProjectProfileService"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"],
            _setting_services_tabs_serviceApplication_serviceapplication_service__WEBPACK_IMPORTED_MODULE_10__["ServiceapplicationService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _Services_project_renewal_service__WEBPACK_IMPORTED_MODULE_14__["ProjectRenewalService"],
            _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProjectProfileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_12__["ErrorMessage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _Services_incentive_log_service__WEBPACK_IMPORTED_MODULE_5__["IncentiveLogService"]])
    ], ProjectListModalComponent);
    return ProjectListModalComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-components-my-dashboard-customerService-customerServiceList-module~app-components-my-das~de9352a8.js.map