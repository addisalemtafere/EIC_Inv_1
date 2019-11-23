(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-project-profile-project-module"],{

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

/***/ "./src/app/components/project-profile/notification/message.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/project-profile/notification/message.module.ts ***!
  \***************************************************************************/
/*! exports provided: MessageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageModule", function() { return MessageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification.component */ "./src/app/components/project-profile/notification/notification.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var routes = [
    { path: '', component: _notification_component__WEBPACK_IMPORTED_MODULE_4__["NotificationComponent"] }
];
var MessageModule = /** @class */ (function () {
    function MessageModule() {
    }
    MessageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            declarations: [_notification_component__WEBPACK_IMPORTED_MODULE_4__["NotificationComponent"]],
            exports: [_notification_component__WEBPACK_IMPORTED_MODULE_4__["NotificationComponent"]],
            entryComponents: [_notification_component__WEBPACK_IMPORTED_MODULE_4__["NotificationComponent"]]
        })
    ], MessageModule);
    return MessageModule;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-associate/project-associate.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-associate/project-associate.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<mat-card class=\"margin-2\" style=\"box-shadow: none;border: 1px solid #dddddd\">-->\r\n<!--&lt;!&ndash;<mat-card-subtitle class=\"sub-title\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;<mat-icon color=\"primary\" class=\"mat-18\">add</mat-icon>&ndash;&gt;-->\r\n<!--&lt;!&ndash;Add Share&ndash;&gt;-->\r\n<!--&lt;!&ndash;<mat-divider></mat-divider>&ndash;&gt;-->\r\n<!--&lt;!&ndash;</mat-card-subtitle>&ndash;&gt;-->\r\n<!--<mat-card-content>-->\r\n<!--<form [formGroup]=\"projectAssForm\" novalidate>-->\r\n\r\n<!--<div fxLayout=\"row\"-->\r\n<!--fxLayoutAlign=\"start center\"-->\r\n<!--class=\"content\"-->\r\n<!--fxLayout.lt-sm=\"column\"-->\r\n<!--fxLayoutGap=\"2em\">-->\r\n\r\n<!--<div class=\"block\" fxLayoutGap=\"2em\">-->\r\n<!--<mat-form-field fxLayoutGap=\"4em\" [fxFlex]=\"40\">-->\r\n<!--<mat-label>Nationality * :</mat-label>-->\r\n<!--<mat-select formControlName=\"AssociateId\">-->\r\n<!--<mat-option *ngFor=\"let associate of associateList\" [value]=\"associate.AssociateId\">-->\r\n<!--{{associate.FirstNameEng }}-->\r\n<!--{{associate.FatherNameEng }}-->\r\n<!--{{associate.GrandNameEng }}-->\r\n<!--</mat-option>-->\r\n<!--</mat-select>-->\r\n<!--&lt;!&ndash;<mat-error align=\"start\" *ngIf=\"formErrors.Nationality\" class=\"form__error\">{{ formErrors.Nationality }}&ndash;&gt;-->\r\n<!--&lt;!&ndash;</mat-error>&ndash;&gt;-->\r\n<!--&lt;!&ndash;<mat-error align=\"start\" *ngIf=\"projectAssForm.get('Nationality').hasError('value')\" class=\"form__error\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;Redundant nation is not allowed&ndash;&gt;-->\r\n<!--&lt;!&ndash;</mat-error>&ndash;&gt;-->\r\n<!--</mat-form-field>-->\r\n<!--<mat-form-field fxLayoutGap=\"4em\" [fxFlex]=\"40\">-->\r\n<!--<mat-label>Postion * :</mat-label>-->\r\n<!--<mat-select formControlName=\"Postion\">-->\r\n\r\n<!--<mat-option value=\"0\">manger</mat-option>-->\r\n<!--<mat-option value=\"1\">Deputy manger</mat-option>-->\r\n<!--<mat-option value=\"3\">Representative</mat-option>-->\r\n<!--<mat-option value=\"4\">Member</mat-option>-->\r\n<!--</mat-select>-->\r\n<!--&lt;!&ndash;<mat-error align=\"start\" *ngIf=\"formErrors.Nationality\" class=\"form__error\">{{ formErrors.Nationality }}&ndash;&gt;-->\r\n<!--&lt;!&ndash;</mat-error>&ndash;&gt;-->\r\n<!--&lt;!&ndash;<mat-error align=\"start\" *ngIf=\"projectAssForm.get('Nationality').hasError('value')\" class=\"form__error\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;Redundant nation is not allowed&ndash;&gt;-->\r\n<!--&lt;!&ndash;</mat-error>&ndash;&gt;-->\r\n<!--</mat-form-field>-->\r\n\r\n<!--&lt;!&ndash;<mat-form-field fxLayoutGap=\"4em\" [fxFlex]=\"20\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;<mat-label>Postion *:</mat-label>&ndash;&gt;-->\r\n<!--&lt;!&ndash;<input type=\"number\" formControlName=\"Postion\" matInput>&ndash;&gt;-->\r\n<!--&lt;!&ndash;&lt;!&ndash;<mat-error align=\"start\" *ngIf=\"formErrors.Qty\" class=\"form__error\">{{ formErrors.Qty }}&ndash;&gt;&ndash;&gt;-->\r\n<!--&lt;!&ndash;&lt;!&ndash;</mat-error>&ndash;&gt;&ndash;&gt;-->\r\n<!--&lt;!&ndash;</mat-form-field>&ndash;&gt;-->\r\n\r\n<!--</div>-->\r\n\r\n<!--&lt;!&ndash;<div class=\"block\" fxFlex=\"40%\">&ndash;&gt;-->\r\n\r\n<!--&lt;!&ndash;&lt;!&ndash;Total:{{totalShare}}&ndash;&gt;&ndash;&gt;-->\r\n<!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n<!--<div class=\"block\" fxFlex=\"10%\">-->\r\n<!--<button class=\"custom-button \" [disabled]=\"!projectAssForm.valid\"-->\r\n<!--(click)=\"onSubmit()\"-->\r\n<!--matTooltip=\"Add Share\">-->\r\n<!--<mat-icon color=\"accent\" class=\" mat-18\">done</mat-icon>-->\r\n<!--{{editMode ? 'Update' : 'Add'}}-->\r\n<!--</button>-->\r\n\r\n<!--&lt;!&ndash;<a style=\"margin-left: 4px\" mat-raised-button class=\"pointer\" (click)=\"onClear()\" matTooltip=\"Clear Form\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;<mat-icon color=\"accent\" class=\"mat-18\">clear_all</mat-icon>&ndash;&gt;-->\r\n<!--&lt;!&ndash;clear&ndash;&gt;-->\r\n<!--&lt;!&ndash;</a>&ndash;&gt;-->\r\n<!--</div>-->\r\n<!--<div class=\"block\" fxFlex=\"10%\">-->\r\n<!--<button mat-raised-button=\"\" color=\"primary\"-->\r\n<!--(click)=\"newAssociate()\"-->\r\n<!--matTooltip=\"Add Associate\">-->\r\n<!--<mat-icon class=\"mat-18\">add</mat-icon>-->\r\n<!--new-->\r\n<!--</button>-->\r\n\r\n<!--&lt;!&ndash;<a style=\"margin-left: 4px\" mat-raised-button class=\"pointer\" (click)=\"onClear()\" matTooltip=\"Clear Form\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;<mat-icon color=\"accent\" class=\"mat-18\">clear_all</mat-icon>&ndash;&gt;-->\r\n<!--&lt;!&ndash;clear&ndash;&gt;-->\r\n<!--&lt;!&ndash;</a>&ndash;&gt;-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--</form>-->\r\n<!--</mat-card-content>-->\r\n<!--</mat-card>-->\r\n<mat-card style=\"overflow: hidden;\" class=\"margin-2 padding-0\">\r\n  <!--<mat-card-header>-->\r\n  <!--<mat-card-subtitle class=\"sub-title\">List of Associate-->\r\n  <!--&lt;!&ndash;<mat-divider></mat-divider>&ndash;&gt;-->\r\n  <!--</mat-card-subtitle>-->\r\n  <!--</mat-card-header>-->\r\n  <mat-card-content>\r\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"center \">\r\n\r\n      <mat-table class=\"full-width\" #table [dataSource]=\"dataSource\">\r\n        <ng-container style=\"width: 10px !important;\" matColumnDef=\"No\">\r\n          <mat-header-cell style=\"width: 10px !important;\" *matHeaderCellDef>No</mat-header-cell>\r\n          <mat-cell style=\"width: 10px !important;\" *matCellDef=\"let associateList;let i=index;\">{{i+1}}\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"AssociateId\">\r\n          <mat-header-cell *matHeaderCellDef>Manger</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let associateList;\">\r\n            {{associateList?.FirstNameEng }}\r\n            {{associateList?.FatherNameEng }}\r\n            {{associateList?.GrandNameEng }}\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n\r\n        <ng-container matColumnDef=\"Action\">\r\n          <mat-header-cell *matHeaderCellDef>\r\n            Action\r\n            <button style=\"margin-left: 20px;\" mat-raised-button=\"\" color=\"primary\"\r\n                    (click)=\"newAssociate()\"\r\n                    matTooltip=\"Add Manger\">\r\n              <mat-icon class=\"mat-18\">add</mat-icon>\r\n              new\r\n            </button>\r\n          </mat-header-cell>\r\n\r\n          <mat-cell *matCellDef=\"let associateList\">\r\n            <mat-checkbox [value]=\"associateList?.AssociateId\"\r\n                          [checked]=\"associateList.selected\"\r\n                          (change)=\"onMangerControlChanged($event,associateList)\">\r\n            </mat-checkbox>\r\n\r\n          </mat-cell>\r\n\r\n        </ng-container>\r\n        <mat-header-row *matHeaderRowDef=\" displayedColumns\r\n            \">\r\n        </mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n        </mat-row>\r\n      </mat-table>\r\n    </div>\r\n  </mat-card-content>\r\n\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/project-associate/project-associate.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-associate/project-associate.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9wcm9qZWN0LXByb2ZpbGUvcHJvamVjdC1hc3NvY2lhdGUvcHJvamVjdC1hc3NvY2lhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/project-profile/project-associate/project-associate.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-associate/project-associate.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ProjectAssociateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectAssociateComponent", function() { return ProjectAssociateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _custor_validation_custom_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/validation/custom/form */ "./src/@custor/validation/custom/form.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _Services_associate_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Services/associate.service */ "./src/app/Services/associate.service.ts");
/* harmony import */ var _Services_project_associate_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../Services/project-associate.service */ "./src/app/Services/project-associate.service.ts");
/* harmony import */ var _setting_services_tabs_serviceApplication_serviceapplication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../setting/services-tabs/serviceApplication/serviceapplication.service */ "./src/app/components/setting/services-tabs/serviceApplication/serviceapplication.service.ts");












var ProjectAssociateComponent = /** @class */ (function () {
    function ProjectAssociateComponent(formBuilder, route, serviceApplicationsServices, router, errMsg, toastr, dataSharing, formService, 
    // private addressService: AddressService,
    associateService, projectAssociateService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.serviceApplicationsServices = serviceApplicationsServices;
        this.router = router;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.dataSharing = dataSharing;
        this.formService = formService;
        this.associateService = associateService;
        this.projectAssociateService = projectAssociateService;
        this.formErrors = {
            AssociateId: '',
            Postion: ''
        };
        this.editMode = false;
        this.loading = false;
        this.associateData = [];
        this.displayedColumns = ['No', 'AssociateId', 'Action'];
        this.associateList = [];
        this.associateIdList = [];
    }
    ProjectAssociateComponent.prototype.ngOnInit = function () {
        this.ServiceId = this.route.snapshot.params['ServiceId'];
        this.InvestorId = this.route.snapshot.params['InvestorId'];
        this.workFlowId = this.route.snapshot.params['workFlowId'];
        this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
        this.projectId = this.route.snapshot.params['ProjectId'];
        console.log(this.projectId);
        this.getAllAssociate();
        // this.getAssociateByProject();
        if (this.projectId > 1) {
            this.getAssociateByProject();
        }
        this.formBuild();
    };
    ProjectAssociateComponent.prototype.getAssociateByProject = function () {
        var _this = this;
        this.projectAssociateService.associateProject(this.projectId).subscribe(function (result) {
            if (result.length > 0) {
                _this.associateData = result;
                console.log(_this.associateData);
                // this.dataSource = new MatTableDataSource<ProjectAssociateModel>(this.associateData);
                _this.loading = false;
                _this.updateList();
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    ProjectAssociateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formService.markFormGroupTouched(this.projectAssForm);
        this.projectAssForm.removeControl('ProjectAssociateId');
        if (this.projectAssForm.valid) {
            if (!this.editMode) {
                this.projectAssociateService.create(this.projectAssForm.value)
                    .subscribe(function (result) {
                    if (_this.associateData.length < 1) {
                        // setTimeout(() => this.dataSharing.steeperIndex.next(6), 0);
                        setTimeout(function () { return _this.dataSharing.currentIndex.next(8); }, 0);
                    }
                    _this.projectAssForm.addControl('ProjectAssociateId', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''));
                    _this.associateData.push(result);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this.associateData);
                    _this.notification('saved');
                    _this.onClear();
                });
            }
            else {
                this.projectAssociateService.update(this.projectAssForm.value, this.ProjectAssociateId)
                    .subscribe(function (result) {
                    _this.notification('updated');
                    _this.associateData[_this.shareEditIndex] = result;
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this.associateData);
                    _this.onClear();
                }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
            }
        }
        else {
            this.formErrors = this.formService.validateForm(this.projectAssForm, this.formErrors, false);
        }
    };
    ProjectAssociateComponent.prototype.formBuild = function () {
        var _this = this;
        // console.log(this.projectId);
        this.projectAssForm = this.formBuilder.group({
            ProjectId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.projectId),
            ProjectAssociateId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](['']),
            workFlowId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.workFlowId),
            AssociateId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
        });
        this.projectAssForm.valueChanges.subscribe(function (data) {
            _this.formErrors = _this.formService.validateForm(_this.projectAssForm, _this.formErrors, true);
        });
    };
    ProjectAssociateComponent.prototype.getAllAssociate = function () {
        var _this = this;
        this.associateService.getAssociateByInvestorId(this.InvestorId)
            .subscribe(function (result) {
            _this.associateList = result;
            console.log("ejhrr" + result);
            _this.updateList();
        });
    };
    ProjectAssociateComponent.prototype.updateList = function () {
        for (var i = 0; i < this.associateList.length; i++) {
            for (var j = 0; j < this.associateData.length; j++) {
                if (this.associateList[i].AssociateId === this.associateData[j].AssociateId) {
                    this.associateList[i].selected = true;
                    this.associateList[i].projectAssociate = this.associateData[j];
                }
                else {
                    if (this.associateList[i].selected !== true) {
                        this.associateList[i].selected = false;
                    }
                }
            }
        }
        // console.log(this.associateList);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.associateList);
    };
    ProjectAssociateComponent.prototype.onClear = function () {
        this.editMode = false;
        this.projectAssForm.reset();
    };
    ProjectAssociateComponent.prototype.notification = function (message) {
        this.toastr.success(" Succesfully " + message + " Data.!", 'Success');
        this.loading = false;
    };
    ProjectAssociateComponent.prototype.ngAfterContentChecked = function () {
        // this.projectAssForm.patchValue({
        //   ProjectId: localStorage.getItem('ProjectId')
        // });
        // this.projectAssForm.patchValue({
        //   workFlowId: localStorage.getItem('workFlowId')
        // });
    };
    ProjectAssociateComponent.prototype.onMangerControlChanged = function ($event, data) {
        var _this = this;
        // console.log(data);
        var id = $event.source.value;
        this.projectAssForm.patchValue({
            AssociateId: id
        });
        this.projectAssForm.removeControl('ProjectAssociateId');
        if ($event.checked) {
            this.projectAssociateService.create(this.projectAssForm.value)
                .subscribe(function (result) {
                _this.projectAssForm.addControl('ProjectAssociateId', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''));
                _this.associateData.push(result);
                _this.getAssociateByProject();
                _this.notification('saved');
                _this.onClear();
                _this.dataSharing.steeperIndex.next(10);
                setTimeout(function () { return _this.dataSharing.steeperIndex.next(10); }, 0);
                setTimeout(function () { return _this.dataSharing.currentIndex.next(10); }, 0);
            });
        }
        else if (!$event.checked) {
            this.projectAssociateService.delete(data.projectAssociate.ProjectAssociateId)
                .subscribe(function (result) {
                _this.getAssociateByProject();
                _this.notification('deleted');
                _this.onClear();
                setTimeout(function () { return _this.dataSharing.steeperIndex.next(9); }, 0);
                setTimeout(function () { return _this.dataSharing.currentIndex.next(9); }, 0);
            });
        }
        // console.log($event.target);
        // console.log($event);
        this.associateIdList.push($event.source.value);
        // console.log(this.associateIdList);
    };
    ProjectAssociateComponent.prototype.newAssociate = function () {
        this.router.navigate(['associate/form/0/2']);
    };
    ProjectAssociateComponent.prototype.UpdateServiceApplication = function () {
        var _this = this;
        this.serviceApplicationsServices.finalForApprovalServiceApplications(this.ServiceApplicationId)
            .subscribe(function (result) {
            // console.log(result);
            _this.toastr.success('Application submitted successfully we will revise soon as well as  we will notify for any action required');
        });
    };
    ProjectAssociateComponent.prototype.next = function () {
        this.dataSharing.steeperIndex.next(8);
    };
    ProjectAssociateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-associate',
            template: __webpack_require__(/*! ./project-associate.component.html */ "./src/app/components/project-profile/project-associate/project-associate.component.html"),
            styles: [__webpack_require__(/*! ./project-associate.component.scss */ "./src/app/components/project-profile/project-associate/project-associate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _setting_services_tabs_serviceApplication_serviceapplication_service__WEBPACK_IMPORTED_MODULE_11__["ServiceapplicationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_8__["DataSharingService"],
            _custor_validation_custom_form__WEBPACK_IMPORTED_MODULE_3__["FormService"],
            _Services_associate_service__WEBPACK_IMPORTED_MODULE_9__["AssociateService"],
            _Services_project_associate_service__WEBPACK_IMPORTED_MODULE_10__["ProjectAssociateService"]])
    ], ProjectAssociateComponent);
    return ProjectAssociateComponent;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-input/project-input-output.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-input/project-input-output.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-header-row {\r\n  background-color: whitesmoke;\r\n  border-top: 1px solid #f1f1f1;\r\n  border-bottom: 1px solid #f1f1f1 !important;\r\n}\r\n\r\nmat-radio-button {\r\n  margin-top: 20px !important;\r\n}\r\n\r\nmat-header-row {\r\n   min-height: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Byb2plY3QtcHJvZmlsZS9wcm9qZWN0LWlucHV0L3Byb2plY3QtaW5wdXQtb3V0cHV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFDQTtHQUNHLGdCQUFnQjtBQUNuQiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9wcm9qZWN0LXByb2ZpbGUvcHJvamVjdC1pbnB1dC9wcm9qZWN0LWlucHV0LW91dHB1dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWhlYWRlci1yb3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjEgIWltcG9ydGFudDtcclxufVxyXG5cclxubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbm1hdC1oZWFkZXItcm93IHtcclxuICAgbWluLWhlaWdodDogMzBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/project-profile/project-input/project-input-output.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-input/project-input-output.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"margin-2\">\r\n  <mat-card-subtitle class=\"sub-title\">\r\n    Project Input\r\n    <mat-divider></mat-divider>\r\n  </mat-card-subtitle>\r\n  <form [formGroup]=\"pIOform\" novalidate>\r\n    <mat-card-content>\r\n\r\n      <div style=\"margin-bottom: 40px;\" *ngIf=\"ServiceId=='1234'\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\r\n           fxLayoutGap=\"2em\">\r\n        <div class=\"block\" fxFlex=\"\" style=\"margin-left: 20px\">\r\n          <mat-form-field>\r\n            <mat-label>Quarter</mat-label>\r\n            <mat-select formControlName=\"Quarter\" required>\r\n              <mat-option *ngFor=\"let row of Quarter\" [value]=\"row.Id\">\r\n                <span>{{row.DescriptionEnglish}}</span>\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n        </div>\r\n        <div class=\"block\" fxFlex>\r\n          <mat-form-field>\r\n            <input placeholder=\"Registration Year* :\"\r\n                   matInput\r\n                   formControlName=\"RegistrationYear\"\r\n                   [matDatepicker]=\"RegistrationYear\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"RegistrationYear\"></mat-datepicker-toggle>\r\n            <mat-datepicker #RegistrationYear></mat-datepicker>\r\n            <!--<mat-error align=\"start\" *ngIf=\"formErrors.RegistrationYear\" class=\"form__error\">-->\r\n            <!--{{ formErrors.RegistrationYear }}-->\r\n            <!--</mat-error>-->\r\n          </mat-form-field>\r\n        </div>\r\n        <!--<div class=\"block\" fxFlex=\"\">-->\r\n        <!---->\r\n        <!--<mat-form-field>-->\r\n        <!--<input #OSF type=\"number\" formControlName=\"CapitalRegistrationDatetime\" matInput-->\r\n        <!--placeholder=\"Capital Registration Datetime * :\">-->\r\n        <!---->\r\n        <!--</mat-form-field>-->\r\n        <!--</div>-->\r\n        <div class=\"block\" fxFlex=\"\">\r\n\r\n          <mat-form-field>\r\n            <mat-select [disabled]=\"true\" formControlName=\"ProjectStatus\" required>\r\n              <option value=\"0\">--Select--</option>\r\n              <label>Project Status</label>\r\n              <mat-option *ngFor=\"let status of projectStatus\" [value]=\"status.Id\">\r\n                <span>{{status.DescriptionEnglish}}</span>\r\n              </mat-option>\r\n            </mat-select>\r\n\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <mat-card-subtitle *ngIf=\"ServiceId=='1234'\" class=\"sub-title\">\r\n        Detail\r\n        <mat-divider></mat-divider>\r\n      </mat-card-subtitle>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\">\r\n        <div class=\"block\" fxFlex=\"\">\r\n          <mat-form-field>\r\n            <mat-label>Electric Power (kwh) :</mat-label>\r\n            <input name=\"ElectricPower\"\r\n                   type=\"number\"\r\n                   matInput  formControlName=\"ElectricPower\" [maxlength]=\"16\">\r\n            <mat-error align=\"start\" *ngIf=\"formErrors.ElectricPower\" class=\"form__error\">{{ formErrors.ElectricPower }}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"block\" fxFlex=\"\">\r\n          <mat-form-field>\r\n            <mat-label>Water (m2) :</mat-label>\r\n            <input type=\"number\"\r\n                   matInput\r\n                   formControlName=\"Water\">\r\n            <mat-error align=\"start\" *ngIf=\"formErrors.Water\">{{ formErrors.Water }}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"block\" fxFlex=\"\">\r\n          <mat-form-field>\r\n            <mat-label>Other Utility :</mat-label>\r\n            <input type=\"number\"\r\n                   matInput\r\n                   formControlName=\"OtherUtility\">\r\n            <mat-error align=\"start\" *ngIf=\"formErrors.OtherUtility\">{{ formErrors.OtherUtility }}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"block\" fxFlex=\"\">\r\n          <mat-form-field>\r\n            <mat-label>Land Industrial (Sq.m) :</mat-label>\r\n            <input type=\"number\"\r\n                   matInput\r\n                   formControlName=\"LandIndustrial\">\r\n            <mat-error align=\"start\" *ngIf=\"formErrors.LandIndustrial\">{{ formErrors.LandIndustrial }}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"2em\">\r\n        <div class=\"block\" fxFlex=\"25%\">\r\n          <mat-form-field>\r\n            <mat-label>Land Agricultural (Sq.m) :</mat-label>\r\n            <input type=\"number\"\r\n                   matInput\r\n                   formControlName=\"LandAgricultural\">\r\n            <mat-error align=\"start\" *ngIf=\"formErrors.LandAgricultural\">{{ formErrors.LandAgricultural }}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"block\" fxFlex=\"25%\">\r\n          <mat-form-field>\r\n            <mat-label>Land Service (Sq.m) :</mat-label>\r\n            <input type=\"number\" matInput formControlName=\"LandService\">\r\n            <mat-error align=\"start\" *ngIf=\"formErrors.LandService\">{{ formErrors.LandService }}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"block\" fxFlex=\"25%\">\r\n          <mat-form-field>\r\n            <mat-label>Own Land (Sq.m) :</mat-label>\r\n            <input type=\"number\" matInput formControlName=\"OwnLand\">\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"block\" fxFlex=\"25%\">\r\n          <mat-form-field>\r\n            <mat-label>Lease Land (Sq.m) :</mat-label>\r\n            <input type=\"number\" matInput formControlName=\"LeaseLand\">\r\n            <mat-error align=\"start\" *ngIf=\"formErrors.LeaseLand\">{{ formErrors.LeaseLand }}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"2em\">\r\n        <div class=\"block\" fxFlex=\"25%\">\r\n          <mat-form-field>\r\n            <mat-label>Rental Land (Sq.m) :</mat-label>\r\n            <input type=\"number\" matInput formControlName=\"RentalLand\">\r\n            <mat-error align=\"start\" *ngIf=\"formErrors.RentalLand\">{{ formErrors.RentalLand }}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"block\" fxFlex=\"48%\">\r\n          <mat-form-field class=\"full-width\">\r\n            <mat-label>Remark :</mat-label>\r\n            <textarea type=\"number\" matInput formControlName=\"Remark\"></textarea>\r\n          </mat-form-field>\r\n          <!--<mat-error align=\"start\" *ngIf=\"formErrors.Remark\">{{ formErrors.Remark }}</mat-error>-->\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </mat-card-content>\r\n    <mat-divider></mat-divider>\r\n    <div style=\"padding-top: 20px\" align=\"center\">\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"2em\">\r\n\r\n        <div fxFlex=\"15\">\r\n\r\n          <!--<button class=\"custom-button\" (click)=\"next()\" color=\"warn\" type=\"button\">-->\r\n          <!--Back-->\r\n          <!--</button>-->\r\n        </div>\r\n        <div style=\"text-align: center\" fxFlex=\"67\" fxFlexAlign=\"center\">\r\n          <button *ngIf=\"!editMode\" [disabled]=\"!pIOform.valid\" mat-raised-button=\"\" color=\"primary\"\r\n                  (click)=\"onSubmit()\">\r\n            <mat-icon class=\"mat-18\">done</mat-icon>\r\n            <span class=\"agree\">Save</span>\r\n\r\n          </button>\r\n          <button *ngIf=\"editMode\" [disabled]=\"!pIOform.valid\" class=\"custom-button\" (click)=\"onSubmit()\">\r\n            <mat-icon class=\"mat-18\">done</mat-icon>\r\n            <span>Update</span>\r\n          </button>\r\n        </div>\r\n        <div fxFlex=\"15\">\r\n\r\n          <!--<button [disabled]=\"!pIOform.valid\" class=\"custom-button\" (click)=\"next()\" color=\"warn\" type=\"button\">-->\r\n          <!--Next-->\r\n          <!--</button>-->\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </form>\r\n</mat-card>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/project-input/project-input-output.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-input/project-input-output.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ProjectInputOutputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectInputOutputComponent", function() { return ProjectInputOutputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_project_requirement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services/project-requirement.service */ "./src/app/Services/project-requirement.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _custor_validation_custom_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../@custor/validation/custom/form */ "./src/@custor/validation/custom/form.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../Services/project-profile.service */ "./src/app/Services/project-profile.service.ts");
/* harmony import */ var _model_lookupData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../model/lookupData */ "./src/app/model/lookupData.ts");
/* harmony import */ var _custor_const_consts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @custor/const/consts */ "./src/@custor/const/consts.ts");













var ProjectInputOutputComponent = /** @class */ (function () {
    function ProjectInputOutputComponent(formBuilder, errMsg, route, projectProfileService, toastr, snackbar, formService, dataSharing, dataSharingService, pRequirementService) {
        this.formBuilder = formBuilder;
        this.errMsg = errMsg;
        this.route = route;
        this.projectProfileService = projectProfileService;
        this.toastr = toastr;
        this.snackbar = snackbar;
        this.formService = formService;
        this.dataSharing = dataSharing;
        this.dataSharingService = dataSharingService;
        this.pRequirementService = pRequirementService;
        this.editMode = false;
        this.editModeInput = false;
        this.loading = false;
        this.formErrors = {
            ElectricPower: 'Minimum 0 Maximum 1000 kwhMinimum value is 0!',
            Water: '',
            OtherUtility: '',
            LandIndustrial: '',
            LandAgricultural: '',
            LandService: '',
            LeaseLand: '',
            RentalLand: '',
            Remark: '',
        };
        this.projectStatus = [];
        this.Quarter = [];
    }
    ProjectInputOutputComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.ServiceId = this.route.snapshot.params['ServiceId'];
        this.InvestorId = this.route.snapshot.params['InvestorId'];
        this.workFlowId = this.route.snapshot.params['workFlowId'];
        this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
        this.projectId = this.route.snapshot.params['ProjectId'];
        if (this.ServiceId === '1234') {
            this.getProjectStatus(this.route.snapshot.params['ProjectId']);
        }
        if (this.projectId > 1) {
            this.getProjectRequirement();
        }
        this.initStaticData('en');
    };
    ProjectInputOutputComponent.prototype.getProjectRequirement = function () {
        var _this = this;
        this.pRequirementService.RequirementByProject(this.projectId).subscribe(function (result) {
            if (typeof (result) !== 'undefined') {
                _this.editMode = true;
                _this.projectId = result.ProjectId;
                _this.rawInputId = result.ProjectRequirementId;
                _this.pIOform.patchValue(result);
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    ProjectInputOutputComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formService.markFormGroupTouched(this.pIOform);
        if (this.pIOform.valid) {
            if (!this.editMode) {
                this.pRequirementService.create(this.getUtility())
                    .subscribe(function (result) {
                    _this.notification('Saved');
                    setTimeout(function () { return _this.dataSharing.steeperIndex.next(3); }, 0);
                    setTimeout(function () { return _this.dataSharing.currentIndex.next(3); }, 0);
                }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
            }
            else {
                this.pRequirementService.update(this.getUtility(), this.rawInputId)
                    .subscribe(function (result) {
                    _this.notification('update');
                    // this.dataSharing.currentIndex.next(3);
                    setTimeout(function () { return _this.dataSharing.steeperIndex.next(3); }, 0);
                    setTimeout(function () { return _this.dataSharing.currentIndex.next(3); }, 0);
                }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
            }
        }
        else {
            this.formErrors = this.formService.validateForm(this.pIOform, this.formErrors, false);
        }
    };
    ProjectInputOutputComponent.prototype.initForm = function () {
        var _this = this;
        this.pIOform = this.formBuilder.group({
            ProjectId: [],
            ElectricPower: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
            Water: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
            OtherUtility: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
            LandIndustrial: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
            LandAgricultural: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
            LandService: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
            OwnLand: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
            LeaseLand: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
            RentalLand: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
            Quarter: [''],
            RegistrationYear: [''],
            ProjectStatus: [''],
            Remark: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            workFlowId: [this.workFlowId]
        });
        this.pIOform.valueChanges.subscribe(function (data) {
            _this.formErrors = _this.formService.validateForm(_this.pIOform, _this.formErrors, true);
        });
    };
    ProjectInputOutputComponent.prototype.onClear = function () {
        this.editMode = false;
        this.pIOform.reset();
    };
    ProjectInputOutputComponent.prototype.notification = function (message) {
        this.toastr.success(" Succesfully " + message + " Data.!", 'Success');
        this.loading = false;
        this.snackbar.open(" Succesfully " + message + " Data.!", 'Close', {
            duration: 3000,
        });
    };
    ProjectInputOutputComponent.prototype.getUtility = function () {
        return {
            ProjectId: this.projectId,
            ElectricPower: this.pIOform.get('ElectricPower').value,
            Water: this.pIOform.get('Water').value,
            OtherUtility: this.pIOform.get('OtherUtility').value,
            LandIndustrial: this.pIOform.get('LandIndustrial').value,
            LandAgricultural: this.pIOform.get('LandAgricultural').value,
            LandService: this.pIOform.get('LandService').value,
            RentalLand: this.pIOform.get('RentalLand').value,
            OwnLand: this.pIOform.get('OwnLand').value,
            LeaseLand: this.pIOform.get('LeaseLand').value,
            Remark: this.pIOform.get('Remark').value,
            workFlowId: this.workFlowId,
        };
    };
    ProjectInputOutputComponent.prototype.ngAfterContentChecked = function () {
        // this.pIOform.patchValue({
        //   workFlowId: localStorage.getItem('workFlowId')
        // });
    };
    ProjectInputOutputComponent.prototype.next = function () {
        this.dataSharing.steeperIndex.next(this.stepperIndex);
        this.dataSharing.steeperIndex.next(3);
    };
    ProjectInputOutputComponent.prototype.initStaticData = function (currentLang) {
        var _this = this;
        var projectStatus1 = new _model_lookupData__WEBPACK_IMPORTED_MODULE_11__["ProjectStatusModel"]();
        _custor_const_consts__WEBPACK_IMPORTED_MODULE_12__["ProjectStatus"].forEach(function (pair) {
            projectStatus1 = {
                'Id': pair.Id.toString(),
                'DescriptionEnglish': pair.DescriptionEnglish,
                'Description': pair.Description
            };
            _this.projectStatus.push(projectStatus1);
        });
        var Quarter1 = new _model_lookupData__WEBPACK_IMPORTED_MODULE_11__["QuarterModel"]();
        _custor_const_consts__WEBPACK_IMPORTED_MODULE_12__["Quarter"].forEach(function (pair) {
            Quarter1 = {
                'Id': pair.Id.toString(),
                'DescriptionEnglish': pair.DescriptionEnglish,
                'Description': pair.Description
            };
            _this.Quarter.push(Quarter1);
        });
    };
    ProjectInputOutputComponent.prototype.getProjectStatus = function (projectId) {
        var _this = this;
        this.projectProfileService.getProjectStatus(projectId)
            .subscribe(function (result) {
            _this.pIOform.patchValue({
                ProjectStatus: result.toString()
            });
        });
    };
    ProjectInputOutputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-input-output',
            template: __webpack_require__(/*! ./project-input-output.component.html */ "./src/app/components/project-profile/project-input/project-input-output.component.html"),
            styles: [__webpack_require__(/*! ./project-input-output.component.css */ "./src/app/components/project-profile/project-input/project-input-output.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__["ErrorMessage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_10__["ProjectProfileService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _custor_validation_custom_form__WEBPACK_IMPORTED_MODULE_7__["FormService"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_5__["DataSharingService"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_5__["DataSharingService"],
            _Services_project_requirement_service__WEBPACK_IMPORTED_MODULE_3__["ProjectRequirementService"]])
    ], ProjectInputOutputComponent);
    return ProjectInputOutputComponent;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-profile-form/project-profile-form.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-profile-form/project-profile-form.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel {\r\n  background: #f5f5f5;\r\n}\r\n\r\n.custom-card-title {\r\n  /*background: #f5f5f5;*/\r\n}\r\n\r\n.primary-color {\r\n  color: #FF4081 !important;\r\n}\r\n\r\n.accent-color {\r\n  color: #FF4081 !important;\r\n}\r\n\r\n.background-primary-color {\r\n  background-color: #FF4081 !important;\r\n}\r\n\r\n.background-accent-color {\r\n  background-color: #FF4081 !important;\r\n}\r\n\r\n.white-text {\r\n  color: #FFF !important;\r\n}\r\n\r\n.example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n\r\n.second-column {\r\n  margin-left: 53px !important;\r\n  /*/margin-top: -55px !important;*/\r\n}\r\n\r\n.mat-checkbox-layout {\r\n  margin-top: 15px !important;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Byb2plY3QtcHJvZmlsZS9wcm9qZWN0LXByb2ZpbGUtZm9ybS9wcm9qZWN0LXByb2ZpbGUtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvcHJvamVjdC1wcm9maWxlL3Byb2plY3QtcHJvZmlsZS1mb3JtL3Byb2plY3QtcHJvZmlsZS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZWwge1xyXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbi5jdXN0b20tY2FyZC10aXRsZSB7XHJcbiAgLypiYWNrZ3JvdW5kOiAjZjVmNWY1OyovXHJcbn1cclxuXHJcbi5wcmltYXJ5LWNvbG9yIHtcclxuICBjb2xvcjogI0ZGNDA4MSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWNjZW50LWNvbG9yIHtcclxuICBjb2xvcjogI0ZGNDA4MSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmFja2dyb3VuZC1wcmltYXJ5LWNvbG9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY0MDgxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLWFjY2VudC1jb2xvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNDA4MSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2hpdGUtdGV4dCB7XHJcbiAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2Vjb25kLWNvbHVtbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUzcHggIWltcG9ydGFudDtcclxuICAvKi9tYXJnaW4tdG9wOiAtNTVweCAhaW1wb3J0YW50OyovXHJcbn1cclxuXHJcbi5tYXQtY2hlY2tib3gtbGF5b3V0IHtcclxuICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/project-profile/project-profile-form/project-profile-form.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-profile-form/project-profile-form.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"margin-2\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"projectForm\" novalidate>\r\n  <!--<pre>-->\r\n  <!--{{projectForm.value | json}}-->\r\n  <!--</pre>-->\r\n  <mat-card class=\"border\">\r\n    <mat-card-subtitle class=\"sub-title\">\r\n      Project Profile\r\n      <mat-divider></mat-divider>\r\n    </mat-card-subtitle>\r\n    <mat-card-content>\r\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"start\" class=\"content\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"2em\">\r\n        <div class=\"blocks\" fxFlex=\"\">\r\n          <mat-form-field>\r\n            <mat-label for=\"Title\">Project Title *:</mat-label>\r\n            <input matInput formControlName=\"ProjectName\">\r\n            <mat-error *ngIf=\"ProjectName.hasError('required')\">\r\n              {{'common.validation.Required' | translate}}\r\n            </mat-error>\r\n            <mat-error *ngIf=\"ProjectName.hasError('minlength')\">\r\n              {{'common.validation.MinLengthChar' | translate: {'min': '3'} }}\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"blocks\" fxFlex>\r\n          <mat-form-field>\r\n            <input placeholder=\"Start Date * (dd/mm/yyyy):\" formControlName=\"StartDate\" matInput\r\n              [matDatepicker]=\"startDate\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\r\n            <mat-datepicker #startDate></mat-datepicker>\r\n            <mat-error align=\"start\" *ngIf=\"formErrors.StartDate\">{{ formErrors.StartDate }}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"block\" fxFlex>\r\n          <mat-form-field>\r\n            <input placeholder=\"Ending Date * (dd/mm/yyyy):\" matInput formControlName=\"EndingDate\"\r\n              [matDatepicker]=\"terminationDate\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"terminationDate\"></mat-datepicker-toggle>\r\n            <mat-datepicker #terminationDate></mat-datepicker>\r\n            <mat-error align=\"start\" *ngIf=\"formErrors.EndingDate\">{{ formErrors.EndingDate }}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"blocks\" fxFlex>\r\n          <!--<mat-label>Start Date :</mat-label>-->\r\n          <mat-form-field>\r\n            <input formControlName=\"OperationDate\" matInput placeholder=\"Operation Date * (dd/mm/yyyy):\"\r\n              [matDatepicker]=\"operationDate\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"operationDate\"></mat-datepicker-toggle>\r\n            <mat-datepicker #operationDate></mat-datepicker>\r\n            <mat-error align=\"start\" *ngIf=\"formErrors.OperationDate\">{{ formErrors.OperationDate }}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"blocks\" fxFlex>\r\n          <mat-form-field>\r\n            <mat-label>Project Stage:</mat-label>\r\n            <mat-select formControlName=\"ProjectStage\" required>\r\n              <mat-option *ngFor=\"let status of projectStage\" [value]=\"status.Id\">\r\n                <span>{{status.DescriptionEnglish}}</span>\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error align=\"start\" *ngIf=\"formErrors.ProjectStage\">{{ formErrors.ProjectStage }}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"blocks\" fxFlex *ngIf=\"!validateStart\">\r\n          <span style=\"color: red\">End Date should be Greater than start date!\r\n          </span>\r\n        </div>\r\n        <div class=\"blocks\" fxFlex *ngIf=\"!validateOperation\">\r\n          <span style=\"color: red\">Operation Date should be Greater than start date and Less than\r\n            End Date! </span>\r\n        </div>\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"content\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"2em\">\r\n        <div class=\"block\" fxFlex=\"50%\">\r\n          <mat-form-field class=\"full-width\">\r\n            <mat-label>{{'investors.editor.EnvironmentalImpact' | translate}}</mat-label>\r\n            <textarea rows=\"2\" matInput formControlName=\"EnvironmentalImpact\" required>\r\n             </textarea>\r\n            <mat-error *ngIf=\"EnvironmentalImpact.hasError('required')\">\r\n              {{ formErrors.EnvironmentalImpact }}\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"block\" fxFlex=\"\">\r\n          <mat-form-field class=\"full-width\">\r\n            <mat-label>Project Profile Summary *:</mat-label>\r\n            <textarea rows=\"2\" matInput formControlName=\"ProjectDescription\"></textarea>\r\n            <mat-error *ngIf=\"ProjectDescription.hasError('required')\">\r\n              {{ formErrors.ProjectDescription }}\r\n            </mat-error>\r\n            <mat-error *ngIf=\"ProjectDescription.hasError('minlength')\">\r\n              {{'common.validation.MinLengthChar' | translate: {'min': '2'} }}\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <h4 class=\"sub-title\">Project Address\r\n        <mat-divider></mat-divider>\r\n      </h4>\r\n      <div formGroupName=\"address\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"content\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"2em\">\r\n\r\n          <div class=\"block\" fxFlex=\"\">\r\n\r\n            <mat-form-field>\r\n              <mat-label>{{'investors.editor.Region' | translate}}</mat-label>\r\n              <mat-select formControlName=\"RegionId\" required (selectionChange)=\"filterRegion($event.value)\" required>\r\n                <mat-option *ngFor=\"let region of regions\" [value]=\"region.RegionId\">\r\n                  {{region.Description}}\r\n                </mat-option>\r\n              </mat-select>\r\n              <mat-error align=\"start\" *ngIf=\"formErrors.Region\">{{ formErrors.Region }}</mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <mat-form-field>\r\n              <mat-label>{{'investors.editor.Zone' | translate}}</mat-label>\r\n              <mat-select formControlName=\"ZoneId\" required>\r\n                <mat-option *ngFor=\"let zone of filteredZones\" [value]=\"zone.ZoneId\">\r\n                  {{zone.Description}}\r\n                </mat-option>\r\n              </mat-select>\r\n              <mat-error align=\"start\" *ngIf=\"formErrors.Zone\">{{ formErrors.Zone }}</mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <mat-form-field fxLayoutGap=\"4em\">\r\n              <mat-label>{{'investors.editor.WoredaAmharic' | translate}}</mat-label>\r\n              <input matInput formControlName=\"WoredaId\" />\r\n              <mat-error align=\"start\" *ngIf=\"formErrors.Woreda\">{{ formErrors.Woreda }}</mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <mat-form-field fxLayoutGap=\"4em\">\r\n              <mat-label>{{'investors.editor.WoredaEnglish' | translate}}</mat-label>\r\n              <input matInput formControlName=\"WoredaEngId\" />\r\n              <mat-error align=\"start\" *ngIf=\"formErrors.WoredaEng\">{{ formErrors.WoredaEng }}</mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start start\" class=\"content\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"1em\">\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <mat-form-field fxLayoutGap=\"4em\">\r\n              <mat-label>{{'investors.editor.KebeleAmharic' | translate}}</mat-label>\r\n              <input matInput formControlName=\"KebeleId\" />\r\n              <mat-error align=\"start\" *ngIf=\"formErrors.Kebele\">{{ formErrors.Kebele }}</mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"block\" fxFlex=\"\">\r\n            <mat-form-field fxLayoutGap=\"4em\">\r\n              <mat-label>{{'investors.editor.KebeleEnglish' | translate}}</mat-label>\r\n              <input matInput formControlName=\"KebeleEngId\" />\r\n              <mat-error align=\"start\" *ngIf=\"formErrors.KebeleEng\">{{ formErrors.KebeleEng }}</mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"block\" fxFlex=\"25\">\r\n            <mat-form-field>\r\n              <mat-label>{{'investors.editor.SpecificAreaName' | translate}}</mat-label>\r\n              <input formControlName=\"SpecificAreaName\" matInput type=\"text\">\r\n              <mat-error align=\"start\" *ngIf=\"formErrors.SpecificAreaName\">{{ formErrors.SpecificAreaName }}</mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"block\" fxFlex=\"25\" style=\"margin-top: 10px !important;padding-top: 20px !important;\">\r\n            <mat-checkbox formControlName=\"IsIndustrialPark\">\r\n              Is Industrial Park ?\r\n            </mat-checkbox>\r\n          </div>\r\n          <div class=\"block\" fxFlex=\"25\" *ngIf=\"getIsChecked()\">\r\n            <mat-form-field>\r\n              <mat-label>Industrial Park :</mat-label>\r\n              <mat-select formControlName=\"IndustrialParkId\" [required]=\"getIsChecked()\">\r\n                <mat-option *ngFor=\"let site of allSiteList\" [value]=\"site.SiteId\">\r\n                  <span> {{site.NameEnglish}}</span>\r\n                </mat-option>\r\n              </mat-select>\r\n              <mat-error>Please choose Industrial Park!</mat-error>\r\n              <!--<mat-error *ngIf=\"IndustrialParkId.hasError('required')\">-->\r\n              <!--{{formErrors.IndustrialParkId}}-->\r\n              <!--</mat-error>-->\r\n            </mat-form-field>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start start\" class=\"content\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"1em\"\r\n        *ngIf=\"IsOromiaRegion()\">\r\n\r\n        <div class=\"block\" fxFlex=\"25\" style=\"margin-top: 10px !important;padding-top: 20px !important;\">\r\n          <mat-checkbox formControlName=\"IsOromiaSpecialZone\">\r\n            Is Oromia Special Zone ?\r\n          </mat-checkbox>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n  <mat-card class=\"border\" style=\"margin-top: 20px;\">\r\n\r\n    <!--<div>documentForm value: {{projectForm.value | json }}</div>-->\r\n\r\n    <mat-card-subtitle class=\"sub-title\">Category\r\n      <mat-divider></mat-divider>\r\n    </mat-card-subtitle>\r\n    <div>\r\n      <div class=\"block\" fxFlex=\"\">\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-label>{{'investors.editor.Sector' | translate}}</mat-label>\r\n          <mat-select formControlName=\"SectorId\" required (selectionChange)=\"filterSubSector($event.value)\">\r\n            <mat-option value=\"0\">--</mat-option>\r\n            <mat-option *ngFor=\"let sector of sectorList\" [value]=\"sector.SectorId\">\r\n              {{sector.DescriptionEnglish}}\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"SectorId.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start\" class=\"content\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"2em\">\r\n      <div class=\"block\" fxFlex=\"\">\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-label>{{'investors.editor.SubSector' | translate}}</mat-label>\r\n          <mat-select formControlName=\"SubSectorId\" required (selectionChange)=\"filterActivity($event.value)\">\r\n            <mat-option value=\"0\">--</mat-option>\r\n            <mat-option *ngFor=\"let sub of filterSubSectorList\" [value]=\"sub.SubSectorId\">\r\n              {{sub.DescriptionEnglish}}\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"SubSectorId.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start\" class=\"content\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"2em\">\r\n      <div class=\"block\" fxFlex=\"\">\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-label>{{'investors.editor.Activity' | translate}}</mat-label>\r\n          <mat-select formControlName=\"ActivityId\" required (selectionChange)=\"filterInvestmentActivity($event.value)\">\r\n            <mat-option *ngFor=\"let activity of filterActivityLIst \" [value]=\"activity.ActivityId\">\r\n              {{activity.DescriptionEnglish}}\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"ActivityId.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start\" class=\"content\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"2em\">\r\n      <div class=\"block\" fxFlex>\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-label>{{'investors.editor.InvestmentActivity' | translate}}</mat-label>\r\n          <mat-select formControlName=\"InvActivityId\" required>\r\n            <mat-option *ngFor=\"let inActivity of filterInvestmentActivityList\" [value]=\"inActivity.InvActivityId\">\r\n              {{inActivity.Description}}\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"InvActivityId.hasError('required')\">\r\n            {{'common.validation.Required' | translate}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <mat-card-content>\r\n    </mat-card-content>\r\n  </mat-card>\r\n  <!--<mat-divider></mat-divider>-->\r\n  <mat-card class=\"border\" style=\"     border-top: 0px;;margin-bottom: 40px; \">\r\n    <mat-card-content>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n\r\n        <div fxFlex=\"15\">\r\n\r\n          <!--<button class=\"custom-button\" (click)=\"next()\" color=\"warn\" type=\"button\">-->\r\n          <!--Back-->\r\n          <!--</button>-->\r\n        </div>\r\n        <div style=\"text-align: center\" fxFlex=\"67\" fxFlexAlign=\"center\">\r\n          <button [disabled]=\"!projectForm.valid\"\r\n           mat-raised-button=\"\" type=\"submit\" color=\"primary\">\r\n            <!-- <mat-icon class=\"mat-18\">done</mat-icon> -->\r\n            <span class=\"agree\">{{editMode ? 'update' : 'Save'}}</span>\r\n\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n</form>\r\n\r\n<div *ngIf=\"loading\" class=\"loadme-circleBounce\">\r\n  <div class=\"loadme-circleBounce1\"></div>\r\n  <div class=\"loadme-circleBounce2\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/project-profile/project-profile-form/project-profile-form.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-profile-form/project-profile-form.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ProjectProfileFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectProfileFormComponent", function() { return ProjectProfileFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/project-profile.service */ "./src/app/Services/project-profile.service.ts");
/* harmony import */ var _Services_Address_address_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Services/Address/address.service */ "./src/app/Services/Address/address.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _Services_site_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Services/site.service */ "./src/app/Services/site.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _model_EnumModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../model/EnumModel */ "./src/app/model/EnumModel.ts");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _setting_category_tabs_Activity_activity_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../setting/category-tabs/Activity/activity.service */ "./src/app/components/setting/category-tabs/Activity/activity.service.ts");
/* harmony import */ var _setting_category_tabs_InvActivity_invactivity_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../setting/category-tabs/InvActivity/invactivity.service */ "./src/app/components/setting/category-tabs/InvActivity/invactivity.service.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _custor_validation_custom_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @custor/validation/custom/form */ "./src/@custor/validation/custom/form.ts");
/* harmony import */ var _custor_validation_custom_custom_validators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @custor/validation/custom/custom_validators */ "./src/@custor/validation/custom/custom_validators.ts");
/* harmony import */ var _custor_const_consts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @custor/const/consts */ "./src/@custor/const/consts.ts");
/* harmony import */ var _investor_investor_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../investor/investor.service */ "./src/app/components/investor/investor.service.ts");
/* harmony import */ var _admin_user_detail_user_detail_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../admin/user-detail/user-detail.service */ "./src/app/admin/user-detail/user-detail.service.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _setting_category_tabs_sector_sector_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../setting/category-tabs/sector/sector.service */ "./src/app/components/setting/category-tabs/sector/sector.service.ts");
/* harmony import */ var _setting_category_tabs_subsector_subsector_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../setting/category-tabs/subsector/subsector.service */ "./src/app/components/setting/category-tabs/subsector/subsector.service.ts");
/* harmony import */ var _model_security_permission_model__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../model/security/permission.model */ "./src/app/model/security/permission.model.ts");
/* harmony import */ var _model_lookupData__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../model/lookupData */ "./src/app/model/lookupData.ts");
/* harmony import */ var _Services_project_renewal_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../Services/project-renewal.service */ "./src/app/Services/project-renewal.service.ts");
/* harmony import */ var _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @custor/services/configuration.service */ "./src/@custor/services/configuration.service.ts");
/* harmony import */ var _enum_enums__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../enum/enums */ "./src/app/enum/enums.ts");



























var ProjectProfileFormComponent = /** @class */ (function () {
    function ProjectProfileFormComponent(route, accountService, router, activityDataServices, accountServices, formBuilder, toastr, projectProfileService, addressService, investorService, errMsg, sectorService, subSectorService, configService, siteService, formService, snackbar, activityService, invactivityService, dataSharing, projectRenewalService) {
        this.route = route;
        this.accountService = accountService;
        this.router = router;
        this.activityDataServices = activityDataServices;
        this.accountServices = accountServices;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.projectProfileService = projectProfileService;
        this.addressService = addressService;
        this.investorService = investorService;
        this.errMsg = errMsg;
        this.sectorService = sectorService;
        this.subSectorService = subSectorService;
        this.configService = configService;
        this.siteService = siteService;
        this.formService = formService;
        this.snackbar = snackbar;
        this.activityService = activityService;
        this.invactivityService = invactivityService;
        this.dataSharing = dataSharing;
        this.projectRenewalService = projectRenewalService;
        this.formOfOwnershipList = [];
        this.IsOromia = false;
        this.editMode = false;
        this.loading = false;
        this.sectorList = [];
        this.subSectorList = [];
        this.regions = [];
        this.zones = [];
        this.filteredZones = [];
        this.woredas = [];
        this.filteredWoredas = [];
        this.kebeles = [];
        this.filteredKebeles = [];
        this.projectStage = [];
        this.formErrors = {
            // EnvironmentalImpact: 'Enter Description in between 2 - 100 characters!',
            ProjectName: 'at least three characters!',
            ProjectDescription: 'Enter Description in between 2 - 100 characters!',
            StartDate: 'Enter a Valid Date!',
            OperationDate: 'Enter a Valid Date!',
            EndingDate: 'Enter a Valid Date!',
            Sector: '',
            SubSector: '',
            Region: '',
            Zone: '',
            Woreda: '',
            WoredaEng: '',
            Kebele: '',
            KebeleEng: '',
            SpecificAreaName: '',
            Remark: '',
            EnvironmentalImpact: '',
            IndustrialParkId: 'Select Industrial Park',
            ProjectStage: ''
        };
        this.allSiteList = [];
        // this.project = <ProjectModel>{};
        // this.address = <AddressModel>{};
    }
    ProjectProfileFormComponent.prototype.setMinDate = function (minD) {
        this.minDate = minD;
    };
    ProjectProfileFormComponent.prototype.setMaxDate = function (value) {
        this.maxDate = value;
    };
    ProjectProfileFormComponent.prototype.updateDateRange = function () {
        var today = new Date();
        var mm1, dd1;
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd1 = '0' + dd;
        }
        if (mm < 10) {
            mm1 = '0' + mm;
        }
        var today1 = mm1 + '/' + dd1 + '/' + yyyy;
        this.initMinDate = new Date(today);
        if (this.projectForm.value.OperationDate !== null) {
            this.minDate = this.projectForm.value.OperationDate;
        }
    };
    ProjectProfileFormComponent.prototype.ngOnInit = function () {
        this.currentLang = this.configService.language;
        this.ServiceId = this.route.snapshot.params['ServiceId'];
        this.InvestorId = this.route.snapshot.params['InvestorId'];
        this.workFlowId = this.route.snapshot.params['workFlowId'];
        this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
        this.projectId = this.route.snapshot.params['ProjectId'];
        // this.getDate();
        this.fillAddressLookups();
        this.formBuild();
        this.updateDateRange();
        this.formControlValueChanged();
        this.initStaticData('en');
        if (this.projectId > 1) {
            this.getProjectDetail();
            this.editMode = true;
        }
        else {
            this.editMode = false;
        }
        this.validateStart = true;
        this.validateOperation = true;
    };
    ProjectProfileFormComponent.prototype.getProjectDetail = function () {
        var _this = this;
        this.projectProfileService
            .getOneById(this.projectId)
            .subscribe(function (project) {
            if (localStorage.getItem('ParentProjectId') === null) {
                _this.editMode = true;
                _this.projectIdEditing = project.ProjectId;
            }
            _this.projectForm.patchValue(project);
            _this.projectForm.patchValue({
                ProjectStage: project.ProjectStage.toString()
            });
            _this.getAddressData(project.ProjectId);
        }, function (error) { return _this.errMsg.getError(error); });
    };
    ProjectProfileFormComponent.prototype.getAddressData = function (parent) {
        var _this = this;
        this.addressService.getAddress(parent)
            .subscribe(function (result) {
            _this.addressList = result;
            // this.getKebeleByWoredaId(result.WoredaId);
            _this.addressId = result.AddressId;
            _this.projectForm.get('address').patchValue(result);
        }, function (error) { return _this.errMsg.getError(error); });
    };
    ProjectProfileFormComponent.prototype.fillAddressLookups = function () {
        this.loading = true;
        this.getRegions();
        this.getAllZones();
        // this.getAllWoredas();
        this.getAllSector();
        this.getAllSubSector();
        this.getAllActivityService();
        this.getAllInvestmentActivity();
        this.getAllSite();
    };
    ProjectProfileFormComponent.prototype.getAllSector = function () {
        var _this = this;
        console.log(this.currentLang);
        this.sectorService.getSectors(this.currentLang)
            .subscribe(function (result) {
            _this.sectorList = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    ProjectProfileFormComponent.prototype.getAllSubSector = function () {
        var _this = this;
        this.subSectorService.getSubSectors(this.currentLang)
            .subscribe(function (result) {
            _this.subSectorList = result;
            _this.filterSubSectorList = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    ProjectProfileFormComponent.prototype.getAllActivityService = function () {
        var _this = this;
        this.activityService.getActivitys(this.currentLang)
            .subscribe(function (result) {
            _this.activity = result;
            _this.filterActivityLIst = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    ProjectProfileFormComponent.prototype.getAllInvestmentActivity = function () {
        var _this = this;
        this.invactivityService.getInActivitys(this.currentLang)
            .subscribe(function (result) {
            _this.investmentActivity = result;
            _this.filterInvestmentActivityList = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    ProjectProfileFormComponent.prototype.getRegions = function () {
        var _this = this;
        this.addressService.getRegions()
            .subscribe(function (result) {
            _this.regions = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    ProjectProfileFormComponent.prototype.getAllZones = function () {
        var _this = this;
        this.addressService.getAllZones()
            .subscribe(function (result) {
            _this.zones = result;
            _this.filteredZones = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    ProjectProfileFormComponent.prototype.getAllWoredas = function () {
        var _this = this;
        this.addressService.getAllWoredas()
            .subscribe(function (result) {
            _this.woredas = result;
            _this.filteredWoredas = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    ProjectProfileFormComponent.prototype.getKebeleByWoredaId = function (wordaId) {
        var _this = this;
        this.addressService.getKebelesByWoreda(wordaId)
            .subscribe(function (result) {
            _this.kebeles = result;
            _this.loading = false;
            _this.filteredKebeles = result;
        });
    };
    ProjectProfileFormComponent.prototype.filterRegion = function (regionCode) {
        if (!regionCode) {
            return;
        }
        if (regionCode == 4) {
            this.IsOromia = true;
        }
        else {
            this.IsOromia = false;
        }
        this.filteredZones = null;
        this.filteredKebeles = null;
        this.filteredWoredas = null;
        this.filteredZones = this.zones.filter(function (item) {
            return item.RegionId === regionCode.toString();
        });
    };
    ProjectProfileFormComponent.prototype.filterZone = function (zoneCode) {
        if (!zoneCode) {
            return;
        }
        this.filteredKebeles = null;
        this.filteredWoredas = null;
        this.filteredWoredas = this.woredas.filter(function (item) {
            return item.ZoneId === zoneCode;
        });
    };
    ProjectProfileFormComponent.prototype.filterWoreda = function (woredaCode) {
        if (!woredaCode) {
            return;
        }
    };
    ProjectProfileFormComponent.prototype.filterSubSector = function (SubSecId) {
        if (!SubSecId) {
            return;
        }
        this.filterActivityLIst = null;
        this.filterSubSectorList = this.subSectorList.filter(function (item) {
            return item.SectorId == SubSecId;
        });
    };
    ProjectProfileFormComponent.prototype.filterActivity = function (activityId) {
        if (!activityId) {
            return;
        }
        this.filterActivityLIst = this.activity.filter(function (item) {
            return item.SubSectorId === activityId;
        });
    };
    ProjectProfileFormComponent.prototype.filterInvestmentActivity = function (InvActivityId) {
        if (!InvActivityId) {
            return;
        }
        // console.log(this.investmentActivity);
        this.filterInvestmentActivityList = this.investmentActivity.filter(function (item) {
            return item.ActivityId === InvActivityId;
        });
    };
    ProjectProfileFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var D1 = new Date(this.StartDate.value);
        var D2 = new Date(this.EndingDate.value);
        var D3 = new Date(this.OperationDate.value);
        if (D2 > D1) {
            this.validateStart = true;
        }
        else {
            this.validateStart = false;
        }
        // else {
        //   this.toastr.show('invalid Date for ending date');
        // }
        if (D3 < D2 && D3 > D1) {
            this.validateOperation = true;
        }
        else {
            this.validateOperation = false;
        }
        // else {
        //   this.toastr.show('invalid Date for operation date');
        // }
        // else {
        //   this.toastr.show('Not Valid');
        // }
        this.loading = true;
        this.formService.markFormGroupTouched(this.projectForm);
        if (this.projectForm.valid && this.validateOperation && this.validateStart) {
            if (!this.editMode) {
                this.projectProfileService.create(this.projectForm.value)
                    .subscribe(function (result) {
                    _this.projectId = result.ProjectId;
                    // localStorage.setItem('ProjectId', this.projectId);
                    // this.router.navigate(['pro/', this.projectId]);
                    // localStorage.setItem('workFlowId', result.ServiceApplication[0].ServiceWorkflow[0].ServiceWorkflowId);
                    // localStorage.setItem('ServiceApplicationId', result.ServiceApplication[0].ServiceApplicationId);
                    // this.Maprenewal();
                    _this.router.navigate(['pro/' + _this.projectId + '/' + result.ServiceApplication[0].ServiceApplicationId + '/' + _this.ServiceId + '/' + result.ServiceApplication[0].ServiceWorkflow[0].ServiceWorkflowId + '/' + _this.InvestorId]);
                    _this.notification('project  saved');
                    _this.saveAddress();
                });
            }
            else {
                this.projectProfileService.update(this.projectForm.value, this.projectIdEditing)
                    .subscribe(function (result) {
                    _this.projectId = result.ProjectId;
                    _this.notification('project updated');
                    _this.saveAddress();
                });
            }
        }
        else {
            this.formErrors = this.formService.validateForm(this.projectForm, this.formErrors, false);
        }
    };
    ProjectProfileFormComponent.prototype.saveAddress = function () {
        var _this = this;
        this.projectForm.get('address').patchValue({
            ParentId: this.projectId
        });
        if (this.editMode && typeof (this.addressId) !== 'undefined') {
            this.addressService.updateAddress(this.projectForm.get('address').value, this.addressId)
                .subscribe(function (result) {
                _this.notification('address updated');
            });
            setTimeout(function () { return _this.dataSharing.steeperIndex.next(2); }, 0);
            setTimeout(function () { return _this.dataSharing.currentIndex.next(2); }, 0);
        }
        else {
            console.log(this.projectForm.get('address').value);
            this.addressService.saveAddress(this.projectForm.get('address').value)
                .subscribe(function (result) {
                setTimeout(function () { return _this.dataSharing.projectId.next(_this.projectId); }, 0);
                _this.notification('address saved');
                setTimeout(function () { return _this.dataSharing.steeperIndex.next(2); }, 0);
                setTimeout(function () { return _this.dataSharing.currentIndex.next(2); }, 0);
            });
        }
    };
    ProjectProfileFormComponent.prototype.formBuild = function () {
        var _this = this;
        console.log(this.ServiceId);
        this.projectForm = this.formBuilder.group({
            ProjectName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _custor_validation_custom_custom_validators__WEBPACK_IMPORTED_MODULE_15__["CustomValidators"].validateCharacters, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
            InvestorId: [this.InvestorId],
            ServiceId: [this.ServiceId],
            ParentProjectId: ['0'],
            CreatedUserName: this.accountServices.currentUser.UserName,
            ProjectDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)])],
            StartDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            OperationDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            SectorId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            SubSectorId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ActivityId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            InvActivityId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            IsOromiaSpecialZone: [''],
            EndingDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            IsSelfService: [false],
            EnvironmentalImpact: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            AssignedUserId: [this.accountService.currentUser.Id],
            CreatedUserId: [this.accountService.currentUser.Id],
            ProjectStage: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            InvestmentPermitNo: [''],
            'address': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                ParentId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                RegionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                ZoneId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                WoredaId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                WoredaEngId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                KebeleId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                KebeleEngId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                SpecificAreaName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                IsIndustrialPark: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                IndustrialParkId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                Remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
            })
        });
        this.projectForm.valueChanges.subscribe(function (data) {
            _this.formErrors = _this.formService.validateForm(_this.projectForm, _this.formErrors, true);
        });
        if (this.canViewTasks) {
            this.projectForm.patchValue({
                IsSelfService: true
            });
        }
    };
    ProjectProfileFormComponent.prototype.formControlValueChanged = function () {
        this.ProjectName.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])]);
        // this.ProjectStage.setValidators([Validators.required]);
    };
    ProjectProfileFormComponent.prototype.initStaticData = function (currentLang) {
        var _this = this;
        var formOfOwnership = new _model_EnumModel__WEBPACK_IMPORTED_MODULE_9__["FormOfOwnershipModel"]();
        _custor_const_consts__WEBPACK_IMPORTED_MODULE_16__["FormOfOwnership"].forEach(function (pair) {
            formOfOwnership = {
                'Id': pair.Id.toString(),
                'Desc': (currentLang === 'am' ? pair.Description : pair.DescriptionEng)
            };
            _this.formOfOwnershipList.push(formOfOwnership);
        });
        var projectSage = new _model_lookupData__WEBPACK_IMPORTED_MODULE_23__["ProjectStageModel"]();
        _custor_const_consts__WEBPACK_IMPORTED_MODULE_16__["ProjectStage"].forEach(function (pair) {
            projectSage = {
                Id: pair.Id.toString(),
                DescriptionEnglish: pair.DescriptionEnglish,
                Description: pair.Description
            };
            _this.projectStage.push(projectSage);
            var toSelect = _this.projectStage.find(function (c) { return c.Id == 1; });
            console.log(toSelect);
            _this.projectForm.get('ProjectStage').setValue(toSelect);
        });
    };
    ProjectProfileFormComponent.prototype.notification = function (message) {
        this.loading = false;
        this.toastr.success(" Succesfully " + message + " Data.!", 'Success');
    };
    ProjectProfileFormComponent.prototype.ngAfterContentChecked = function () {
        this.projectForm.patchValue({
            ServiceId: this.ServiceId
        });
        if (this.ServiceId == _enum_enums__WEBPACK_IMPORTED_MODULE_26__["ServiceEnum"].Expansion && !this.editMode) {
            this.projectForm.patchValue({
                ParentProjectId: localStorage.getItem('ParentProjectId')
            });
        }
    };
    ProjectProfileFormComponent.prototype.next = function () {
        this.dataSharing.steeperIndex.next(2);
    };
    ProjectProfileFormComponent.prototype.getAllSite = function () {
        var _this = this;
        this.siteService.getAll()
            .subscribe(function (result) {
            _this.filterOnlineUser(result);
        });
    };
    ProjectProfileFormComponent.prototype.getIsChecked = function () {
        return this.projectForm.get('address').get('IsIndustrialPark').value;
    };
    Object.defineProperty(ProjectProfileFormComponent.prototype, "ProjectDescription", {
        get: function () {
            return this.projectForm.get('ProjectDescription');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectProfileFormComponent.prototype, "ProjectName", {
        get: function () {
            return this.projectForm.get('ProjectName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectProfileFormComponent.prototype, "EndingDate", {
        get: function () {
            return this.projectForm.get('EndingDate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectProfileFormComponent.prototype, "StartDate", {
        get: function () {
            return this.projectForm.get('StartDate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectProfileFormComponent.prototype, "OperationDate", {
        get: function () {
            return this.projectForm.get('OperationDate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectProfileFormComponent.prototype, "SectorId", {
        get: function () {
            return this.projectForm.get('SectorId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectProfileFormComponent.prototype, "SubSectorId", {
        get: function () {
            return this.projectForm.get('SubSectorId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectProfileFormComponent.prototype, "ActivityId", {
        get: function () {
            return this.projectForm.get('ActivityId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectProfileFormComponent.prototype, "InvActivityId", {
        get: function () {
            return this.projectForm.get('InvActivityId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectProfileFormComponent.prototype, "EnvironmentalImpact", {
        get: function () {
            return this.projectForm.get('EnvironmentalImpact');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectProfileFormComponent.prototype, "ProjectStage", {
        get: function () {
            return this.projectForm.get('ProjectStage');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectProfileFormComponent.prototype, "canViewTasks", {
        get: function () {
            return this.accountService.userHasPermission(_model_security_permission_model__WEBPACK_IMPORTED_MODULE_22__["Permission"].viewServiceList);
        },
        enumerable: true,
        configurable: true
    });
    ProjectProfileFormComponent.prototype.IsOromiaRegion = function () {
        return this.IsOromia;
    };
    ProjectProfileFormComponent.prototype.filterOnlineUser = function (result) {
        this.allSiteList = result.filter(function (item) {
            return item.SiteCode !== 'OnlineSite';
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('costF'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], ProjectProfileFormComponent.prototype, "costForm", void 0);
    ProjectProfileFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-profile-form',
            template: __webpack_require__(/*! ./project-profile-form.component.html */ "./src/app/components/project-profile/project-profile-form/project-profile-form.component.html"),
            providers: [_custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_25__["ConfigurationService"]],
            styles: [__webpack_require__(/*! ./project-profile-form.component.css */ "./src/app/components/project-profile/project-profile-form/project-profile-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_19__["AccountService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _admin_user_detail_user_detail_service__WEBPACK_IMPORTED_MODULE_18__["UserActivityDataServices"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_19__["AccountService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProjectProfileService"],
            _Services_Address_address_service__WEBPACK_IMPORTED_MODULE_5__["AddressService"],
            _investor_investor_service__WEBPACK_IMPORTED_MODULE_17__["InvestorService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_13__["ErrorMessage"],
            _setting_category_tabs_sector_sector_service__WEBPACK_IMPORTED_MODULE_20__["SectorService"],
            _setting_category_tabs_subsector_subsector_service__WEBPACK_IMPORTED_MODULE_21__["SubsectorService"],
            _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_25__["ConfigurationService"],
            _Services_site_service__WEBPACK_IMPORTED_MODULE_7__["SiteService"],
            _custor_validation_custom_form__WEBPACK_IMPORTED_MODULE_14__["FormService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"],
            _setting_category_tabs_Activity_activity_service__WEBPACK_IMPORTED_MODULE_11__["ActivityService"],
            _setting_category_tabs_InvActivity_invactivity_service__WEBPACK_IMPORTED_MODULE_12__["InvactivityService"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_10__["DataSharingService"],
            _Services_project_renewal_service__WEBPACK_IMPORTED_MODULE_24__["ProjectRenewalService"]])
    ], ProjectProfileFormComponent);
    return ProjectProfileFormComponent;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-profile.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/project-profile/project-profile.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9wcm9qZWN0LXByb2ZpbGUvcHJvamVjdC1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/project-profile/project-profile.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/project-profile/project-profile.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <div>\r\n    <!--<button type=\"button\" mat-raised-button (click)=\"onNewProject()\" color=\"primary\">-->\r\n      <!--<i class=\"material-icons\">add</i>New-->\r\n    <!--</button>-->\r\n    <!--<button (click)=\"onProjectList()\" type=\"button\" mat-raised-button-->\r\n            <!--color=\"primary\">-->\r\n      <!--<i class=\"material-icons\">list</i> List-->\r\n    <!--</button>-->\r\n  </div>\r\n</mat-card>\r\n<mat-card>\r\n  <router-outlet></router-outlet>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/components/project-profile/project-profile.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/project-profile/project-profile.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProjectProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectProfileComponent", function() { return ProjectProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ProjectProfileComponent = /** @class */ (function () {
    function ProjectProfileComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    ProjectProfileComponent.prototype.ngOnInit = function () {
    };
    ProjectProfileComponent.prototype.onProjectList = function () {
        // console.log(this.router.url);
        this.router.navigate(['../list'], { relativeTo: this.route });
    };
    ProjectProfileComponent.prototype.onNewProject = function () {
        // console.log(this.router.url);
        this.router.navigate(['../new'], { relativeTo: this.route });
    };
    ProjectProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-profile',
            template: __webpack_require__(/*! ./project-profile.component.html */ "./src/app/components/project-profile/project-profile.component.html"),
            styles: [__webpack_require__(/*! ./project-profile.component.css */ "./src/app/components/project-profile/project-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProjectProfileComponent);
    return ProjectProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/project-profile/project-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ProjectRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectRoutingModule", function() { return ProjectRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_stepper_project_stepper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-stepper/project-stepper.component */ "./src/app/components/project-profile/project-stepper/project-stepper.component.ts");
/* harmony import */ var _project_profile_detail_project_profile_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-profile-detail/project-profile-detail.component */ "./src/app/components/project-profile/project-profile-detail/project-profile-detail.component.ts");
/* harmony import */ var _project_profile_form_project_profile_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-profile-form/project-profile-form.component */ "./src/app/components/project-profile/project-profile-form/project-profile-form.component.ts");







var projectRouting = [
    {
        path: '', component: _project_stepper_project_stepper_component__WEBPACK_IMPORTED_MODULE_4__["ProjectStepperComponent"], children: [
            { path: 'new', component: _project_stepper_project_stepper_component__WEBPACK_IMPORTED_MODULE_4__["ProjectStepperComponent"] },
            { path: 'detail/:id', component: _project_profile_detail_project_profile_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProjectProfileDetailComponent"] },
            { path: ':id/edit', component: _project_profile_form_project_profile_form_component__WEBPACK_IMPORTED_MODULE_6__["ProjectProfileFormComponent"] }
        ]
    },
];
var ProjectRoutingModule = /** @class */ (function () {
    function ProjectRoutingModule() {
    }
    ProjectRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(projectRouting)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            declarations: []
        })
    ], ProjectRoutingModule);
    return ProjectRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-stepper/project-stepper.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-stepper/project-stepper.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.mat-tab-header-pagination*/\r\n/*.mat-tab-header-pagination-before*/\r\n/*.mat-elevation-z4*/\r\n/*.mat-ripple {*/\r\n/*background-color: #00bcd4 !important;*/\r\n/*}*/\r\n/*::ng-deep .mat-tab-label {*/\r\n/*pointer-events: none;*/\r\n/*}*/\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Byb2plY3QtcHJvZmlsZS9wcm9qZWN0LXN0ZXBwZXIvcHJvamVjdC1zdGVwcGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCO0FBQzdCLG9DQUFvQztBQUNwQyxvQkFBb0I7QUFDcEIsZ0JBQWdCO0FBQ2hCLHdDQUF3QztBQUN4QyxJQUFJO0FBRUosNkJBQTZCO0FBQzdCLHdCQUF3QjtBQUN4QixJQUFJIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3Byb2plY3QtcHJvZmlsZS9wcm9qZWN0LXN0ZXBwZXIvcHJvamVjdC1zdGVwcGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uKi9cclxuLyoubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1iZWZvcmUqL1xyXG4vKi5tYXQtZWxldmF0aW9uLXo0Ki9cclxuLyoubWF0LXJpcHBsZSB7Ki9cclxuLypiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiY2Q0ICFpbXBvcnRhbnQ7Ki9cclxuLyp9Ki9cclxuXHJcbi8qOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsIHsqL1xyXG4vKnBvaW50ZXItZXZlbnRzOiBub25lOyovXHJcbi8qfSovXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/project-profile/project-stepper/project-stepper.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-stepper/project-stepper.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"0\">\r\n  <div class=\"block\" fxFlex=\"\">\r\n    <app-page-header title=\"new\" icon=\"\"></app-page-header>\r\n\r\n  </div>\r\n  <div id=\"title1\" class=\"block\" fxFlex=\"50\">\r\n    <span class=\"page-title\">{{title}}</span>\r\n    <span class=\"slideBorder\">/</span>\r\n    <span class=\"page-title\">{{investorName}}</span>\r\n    <span class=\"slideBorder\">/</span>\r\n    <span class=\"page-title\">{{projectName}}</span>\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n<mat-tab-group #stepper>\r\n\r\n  <mat-tab *ngIf=\"isInvestor\" label=\"Service Info\">\r\n    <ng-template matTabContent>\r\n      <!--<a [routerLink]=\"['/service-info/0']\"></a>-->\r\n      <app-service-info></app-service-info>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab [disabled]=\"nextIndex <1 || ServiceId==='1234'\" label=\"Profile\">\r\n    <ng-template matTabContent>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n        <div fxFlex=\"15\">\r\n          <button class=\"next-button\" (click)=\"back()\" type=\"button\">\r\n            Back\r\n          </button>\r\n        </div>\r\n        <div style=\"text-align: center\" fxFlex=\"75\" fxFlexAlign=\"center\">\r\n        </div>\r\n        <div fxFlex=\"10\">\r\n          <button class=\"next-button\" (click)=\"next()\" color=\"primary\" type=\"button\">\r\n            Next\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      <app-project-profile-form></app-project-profile-form>\r\n\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab [disabled]=\"nextIndex<2 || ServiceId==='1234'\" label=\"Input\">\r\n    <ng-template matTabContent>\r\n\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n        <div fxFlex=\"15\">\r\n          <button class=\"next-button\" (click)=\"back()\" type=\"button\">\r\n            Back\r\n          </button>\r\n        </div>\r\n        <div style=\"text-align: center\" fxFlex=\"75\" fxFlexAlign=\"center\">\r\n        </div>\r\n        <div fxFlex=\"10\">\r\n          <button class=\"next-button\" (click)=\"next()\" color=\"primary\" type=\"button\">\r\n            Next\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <app-project-input-output></app-project-input-output>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab [disabled]=\"nextIndex<3|| ServiceId==='1234'\" label=\"Raw Material\">\r\n    <ng-template matTabContent>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n        <div fxFlex=\"15\">\r\n          <button class=\"next-button\" (click)=\"back()\" type=\"button\">\r\n            Back\r\n          </button>\r\n        </div>\r\n        <div style=\"text-align: center\" fxFlex=\"75\" fxFlexAlign=\"center\">\r\n        </div>\r\n        <div fxFlex=\"10\">\r\n          <button class=\"next-button\" (click)=\"next()\" color=\"primary\" type=\"button\">\r\n            Next\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <app-raw-material-form></app-raw-material-form>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab [disabled]=\"nextIndex<3\" label=\"Cost\">\r\n    <ng-template matTabContent>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n        <div fxFlex=\"15\">\r\n          <button class=\"next-button\" (click)=\"back()\" type=\"button\">\r\n            Back\r\n          </button>\r\n        </div>\r\n        <div style=\"text-align: center\" fxFlex=\"75\" fxFlexAlign=\"center\">\r\n        </div>\r\n        <div fxFlex=\"10\">\r\n          <button class=\"next-button\" (click)=\"next()\" color=\"primary\" type=\"button\">\r\n            Next\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <app-project-cost></app-project-cost>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab [disabled]=\"nextIndex<5 || ServiceId==='1234'\" label=\"Employment\">\r\n    <ng-template matTabContent>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n        <div fxFlex=\"15\">\r\n          <button class=\"next-button\" (click)=\"back()\" type=\"button\">\r\n            Back\r\n          </button>\r\n        </div>\r\n        <div style=\"text-align: center\" fxFlex=\"75\" fxFlexAlign=\"center\">\r\n        </div>\r\n        <div fxFlex=\"10\">\r\n          <button class=\"next-button\" (click)=\"next()\" color=\"primary\" type=\"button\">\r\n            Next\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <app-project-employment></app-project-employment>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab [disabled]=\"nextIndex<6 || ServiceId==='1234'\" label=\"Share\">\r\n    <ng-template matTabContent>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n        <div fxFlex=\"15\">\r\n          <button class=\"next-button\" (click)=\"back()\" type=\"button\">\r\n            Back\r\n          </button>\r\n        </div>\r\n        <div style=\"text-align: center\" fxFlex=\"75\" fxFlexAlign=\"center\">\r\n        </div>\r\n        <div fxFlex=\"10\">\r\n          <button class=\"next-button\" (click)=\"next()\" color=\"primary\" type=\"button\">\r\n            Next\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <app-project-share></app-project-share>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab [disabled]=\"nextIndex<6 || ServiceId==='1234'\" label=\"Product\">\r\n    <ng-template matTabContent>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n        <div fxFlex=\"15\">\r\n          <button class=\"next-button\" (click)=\"back()\" type=\"button\">\r\n            Back\r\n          </button>\r\n        </div>\r\n        <div style=\"text-align: center\" fxFlex=\"75\" fxFlexAlign=\"center\">\r\n        </div>\r\n        <div fxFlex=\"10\">\r\n          <button class=\"next-button\" (click)=\"next()\" color=\"primary\" type=\"button\">\r\n            Next\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <app-project-product></app-project-product>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab [disabled]=\"nextIndex<8 || ServiceId==='1234'\" label=\"Documents\">\r\n    <ng-template matTabContent>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n        <div fxFlex=\"15\">\r\n          <button class=\"next-button\" (click)=\"back()\" type=\"button\">\r\n            Back\r\n          </button>\r\n        </div>\r\n        <div style=\"text-align: center\" fxFlex=\"75\" fxFlexAlign=\"center\">\r\n        </div>\r\n        <div fxFlex=\"10\">\r\n          <button class=\"next-button\" (click)=\"next()\" color=\"primary\" type=\"button\">\r\n            Next\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <app-service-prerequisite></app-service-prerequisite>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab [disabled]=\"nextIndex<8|| ServiceId==='1234'\" label=\"Manager\">\r\n    <ng-template matTabContent>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n        <div fxFlex=\"15\">\r\n          <button class=\"next-button\" (click)=\"back()\" type=\"button\">\r\n            Back\r\n          </button>\r\n        </div>\r\n        <div style=\"text-align: center\" fxFlex=\"75\" fxFlexAlign=\"center\">\r\n        </div>\r\n        <div fxFlex=\"10\">\r\n          <button class=\"next-button\" (click)=\"next()\" color=\"primary\" type=\"button\">\r\n            Next\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <app-project-associate></app-project-associate>\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab [disabled]=\"nextIndex<8\" label=\"Confirmation\">\r\n    <ng-template matTabContent>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n        <div fxFlex=\"15\">\r\n          <button class=\"next-button\" (click)=\"back()\" type=\"button\">\r\n            Back\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <app-service-confirmation></app-service-confirmation>\r\n    </ng-template>\r\n  </mat-tab>\r\n\r\n\r\n</mat-tab-group>\r\n<!--<div style=\"margin-bottom: 40px\" fxLayout=\"row\" fxLayoutAlign=\"center\">-->\r\n<!--<div fxFlex=\"15\">-->\r\n<!--<button class=\"next-button\" (click)=\"back()\" type=\"button\">-->\r\n<!--Back-->\r\n<!--</button>-->\r\n<!--</div>-->\r\n<!--<div style=\"text-align: center\" fxFlex=\"75\" fxFlexAlign=\"center\">-->\r\n<!--</div>-->\r\n<!--<div fxFlex=\"10\">-->\r\n<!--<button class=\"next-button\" (click)=\"next()\" color=\"primary\" type=\"button\">-->\r\n<!--Next-->\r\n<!--</button>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/project-stepper/project-stepper.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-stepper/project-stepper.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ProjectStepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectStepperComponent", function() { return ProjectStepperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _investor_investor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../investor/investor.service */ "./src/app/components/investor/investor.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");









var ProjectStepperComponent = /** @class */ (function () {
    function ProjectStepperComponent(_formBuilder, accountService, router, toast, invService, dataSharing, route) {
        this._formBuilder = _formBuilder;
        this.accountService = accountService;
        this.router = router;
        this.toast = toast;
        this.invService = invService;
        this.dataSharing = dataSharing;
        this.route = route;
        this.isLinear = false;
        this.steeperIndex = 0;
        this.isSol = true;
    }
    ProjectStepperComponent.prototype.ngOnInit = function () {
        this.title = localStorage.getItem('title');
        this.projectName = localStorage.getItem('projectName');
        this.investorName = localStorage.getItem('investorName');
        this.currentPosition = 'f';
        this.ServiceId = localStorage.getItem('ServiceId');
        this.getUserType();
    };
    ProjectStepperComponent.prototype.getUserType = function () {
        this.isInvestor = this.accountService.getUserType();
    };
    ProjectStepperComponent.prototype.move = function (index) {
        this.stepper.selectedIndex = index;
    };
    ProjectStepperComponent.prototype.ngAfterViewInit = function () {
        this.move(this.steeperIndex);
    };
    ProjectStepperComponent.prototype.ngAfterContentChecked = function () {
        var _this = this;
        // this.title = localStorage.getItem('title');
        // this.projectName = localStorage.getItem('projectName');
        // this.investorName = localStorage.getItem('investorName');
        this.subscription = this.dataSharing.steeperIndex
            .subscribe(function (index) {
            _this.steeperIndex = index;
            // // console.log(this.steeperIndex);
            _this.move(_this.steeperIndex);
        });
        this.subscription = this.dataSharing.currentIndex
            .subscribe(function (index) {
            _this.nextIndex = index;
            _this.upeerLimit = index;
            // console.log(index);
        });
        // this.nextIndex = +localStorage.getItem('currentIndex');
    };
    ProjectStepperComponent.prototype.back = function () {
        if (this.ServiceId === '1234') {
            this.toast.warning('you can not go back because you have not privilege');
        }
        else {
            this.currentPosition = 'b';
            if (this.currentPosition === 'f' || this.currentPosition === null) {
                this.steeperIndex--;
            }
            if (this.steeperIndex > 0) {
                this.steeperIndex--;
                this.stepper.selectedIndex = this.steeperIndex;
            }
        }
    };
    ProjectStepperComponent.prototype.next = function () {
        if (this.ServiceId === '1234') {
            this.toast.warning('You can not go next because you have not privilege');
        }
        else {
            this.currentPosition = 'f';
            if (this.currentPosition === 'b' || this.currentPosition === null) {
                this.steeperIndex++;
            }
            if (this.steeperIndex < this.upeerLimit) {
                this.steeperIndex++;
                this.stepper.selectedIndex = this.steeperIndex;
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stepper'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepper"])
    ], ProjectStepperComponent.prototype, "stepper", void 0);
    ProjectStepperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-stepper',
            template: __webpack_require__(/*! ./project-stepper.component.html */ "./src/app/components/project-profile/project-stepper/project-stepper.component.html"),
            styles: [__webpack_require__(/*! ./project-stepper.component.css */ "./src/app/components/project-profile/project-stepper/project-stepper.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _investor_investor_service__WEBPACK_IMPORTED_MODULE_6__["InvestorService"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_5__["DataSharingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProjectStepperComponent);
    return ProjectStepperComponent;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/project-profile/project.module.ts ***!
  \**************************************************************/
/*! exports provided: ProjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModule", function() { return ProjectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _project_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-profile.component */ "./src/app/components/project-profile/project-profile.component.ts");
/* harmony import */ var _project_profile_form_project_profile_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-profile-form/project-profile-form.component */ "./src/app/components/project-profile/project-profile-form/project-profile-form.component.ts");
/* harmony import */ var _project_stepper_project_stepper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-stepper/project-stepper.component */ "./src/app/components/project-profile/project-stepper/project-stepper.component.ts");
/* harmony import */ var _project_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-routing.module */ "./src/app/components/project-profile/project-routing.module.ts");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _service_info_serviceInfo_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service-info/serviceInfo.module */ "./src/app/components/project-profile/service-info/serviceInfo.module.ts");
/* harmony import */ var _service_confirmation_ServiceConfirmation_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service-confirmation/ServiceConfirmation.module */ "./src/app/components/project-profile/service-confirmation/ServiceConfirmation.module.ts");
/* harmony import */ var _project_profile_detail_project_detail_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./project-profile-detail/project-detail.module */ "./src/app/components/project-profile/project-profile-detail/project-detail.module.ts");
/* harmony import */ var _project_input_project_input_output_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./project-input/project-input-output.component */ "./src/app/components/project-profile/project-input/project-input-output.component.ts");
/* harmony import */ var _project_cost_ProjectCost_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./project-cost/ProjectCost.module */ "./src/app/components/project-profile/project-cost/ProjectCost.module.ts");
/* harmony import */ var _project_product_product_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./project-product/product.module */ "./src/app/components/project-profile/project-product/product.module.ts");
/* harmony import */ var _project_employment_employment_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./project-employment/employment.module */ "./src/app/components/project-profile/project-employment/employment.module.ts");
/* harmony import */ var _investor_associate_associate_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../investor/associate/associate.module */ "./src/app/components/investor/associate/associate.module.ts");
/* harmony import */ var _project_associate_project_associate_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./project-associate/project-associate.component */ "./src/app/components/project-profile/project-associate/project-associate.component.ts");
/* harmony import */ var _project_input_utility_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./project-input/utility.module */ "./src/app/components/project-profile/project-input/utility.module.ts");
/* harmony import */ var _project_share_Share_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./project-share/Share.module */ "./src/app/components/project-profile/project-share/Share.module.ts");
/* harmony import */ var _Services_project_employment_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../Services/project-employment.service */ "./src/app/Services/project-employment.service.ts");
/* harmony import */ var _setting_category_tabs_Activity_activity_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../setting/category-tabs/Activity/activity.service */ "./src/app/components/setting/category-tabs/Activity/activity.service.ts");
/* harmony import */ var _Services_Sector_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../Services/Sector.service */ "./src/app/Services/Sector.service.ts");
/* harmony import */ var _Services_site_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../Services/site.service */ "./src/app/Services/site.service.ts");
/* harmony import */ var _Services_associate_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../Services/associate.service */ "./src/app/Services/associate.service.ts");
/* harmony import */ var _Services_project_associate_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../Services/project-associate.service */ "./src/app/Services/project-associate.service.ts");
/* harmony import */ var _Services_project_input_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../Services/project-input.service */ "./src/app/Services/project-input.service.ts");
/* harmony import */ var _Services_project_renewal_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../Services/project-renewal.service */ "./src/app/Services/project-renewal.service.ts");
/* harmony import */ var _Services_project_requirement_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../Services/project-requirement.service */ "./src/app/Services/project-requirement.service.ts");
/* harmony import */ var _notification_message_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./notification/message.module */ "./src/app/components/project-profile/notification/message.module.ts");





























var ProjectModule = /** @class */ (function () {
    function ProjectModule() {
    }
    ProjectModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _project_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProjectProfileComponent"],
                _project_profile_form_project_profile_form_component__WEBPACK_IMPORTED_MODULE_4__["ProjectProfileFormComponent"],
                _project_input_project_input_output_component__WEBPACK_IMPORTED_MODULE_11__["ProjectInputOutputComponent"],
                _project_stepper_project_stepper_component__WEBPACK_IMPORTED_MODULE_5__["ProjectStepperComponent"],
                _project_stepper_project_stepper_component__WEBPACK_IMPORTED_MODULE_5__["ProjectStepperComponent"],
                _project_associate_project_associate_component__WEBPACK_IMPORTED_MODULE_16__["ProjectAssociateComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _project_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProjectRoutingModule"],
                _service_info_serviceInfo_module__WEBPACK_IMPORTED_MODULE_8__["ServiceInfoModule"],
                _service_confirmation_ServiceConfirmation_module__WEBPACK_IMPORTED_MODULE_9__["ServiceConfirmationModule"],
                _project_profile_detail_project_detail_module__WEBPACK_IMPORTED_MODULE_10__["ProjectDetailModule"],
                _project_cost_ProjectCost_module__WEBPACK_IMPORTED_MODULE_12__["ProjectCostModule"],
                _project_employment_employment_module__WEBPACK_IMPORTED_MODULE_14__["EmploymentModule"],
                _project_product_product_module__WEBPACK_IMPORTED_MODULE_13__["ProductModule"],
                _project_share_Share_module__WEBPACK_IMPORTED_MODULE_18__["ShareModule"],
                _investor_associate_associate_module__WEBPACK_IMPORTED_MODULE_15__["AssociateModule"],
                _project_input_utility_module__WEBPACK_IMPORTED_MODULE_17__["UtilityModule"],
                _notification_message_module__WEBPACK_IMPORTED_MODULE_28__["MessageModule"]
            ],
            providers: [
                _Services_project_employment_service__WEBPACK_IMPORTED_MODULE_19__["ProjectEmploymentService"],
                _setting_category_tabs_Activity_activity_service__WEBPACK_IMPORTED_MODULE_20__["ActivityService"],
                _Services_Sector_service__WEBPACK_IMPORTED_MODULE_21__["SectorService"],
                _Services_site_service__WEBPACK_IMPORTED_MODULE_22__["SiteService"],
                _Services_associate_service__WEBPACK_IMPORTED_MODULE_23__["AssociateService"],
                _Services_project_associate_service__WEBPACK_IMPORTED_MODULE_24__["ProjectAssociateService"],
                _Services_project_input_service__WEBPACK_IMPORTED_MODULE_25__["ProjectInputService"],
                _Services_project_renewal_service__WEBPACK_IMPORTED_MODULE_26__["ProjectRenewalService"],
                _Services_project_requirement_service__WEBPACK_IMPORTED_MODULE_27__["ProjectRequirementService"]
            ]
        })
    ], ProjectModule);
    return ProjectModule;
}());



/***/ }),

/***/ "./src/app/model/EnumModel.ts":
/*!************************************!*\
  !*** ./src/app/model/EnumModel.ts ***!
  \************************************/
/*! exports provided: FormOfOwnershipModel, CancellationReasonModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormOfOwnershipModel", function() { return FormOfOwnershipModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancellationReasonModel", function() { return CancellationReasonModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormOfOwnershipModel = /** @class */ (function () {
    function FormOfOwnershipModel() {
    }
    FormOfOwnershipModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], FormOfOwnershipModel);
    return FormOfOwnershipModel;
}());

var CancellationReasonModel = /** @class */ (function () {
    function CancellationReasonModel() {
    }
    CancellationReasonModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CancellationReasonModel);
    return CancellationReasonModel;
}());



/***/ })

}]);
//# sourceMappingURL=components-project-profile-project-module.js.map