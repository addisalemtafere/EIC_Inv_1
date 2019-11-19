(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-components-project-profile-project-profile-detail-project-detail-module~components-proje~ed0f14fb"],{

/***/ "./src/app/Services/project-employment.service.ts":
/*!********************************************************!*\
  !*** ./src/app/Services/project-employment.service.ts ***!
  \********************************************************/
/*! exports provided: ProjectEmploymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectEmploymentService", function() { return ProjectEmploymentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _Base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Base.service */ "./src/app/Services/Base.service.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var ProjectEmploymentService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProjectEmploymentService, _super);
    function ProjectEmploymentService(http, appConfig, errMsg) {
        var _this = _super.call(this, http, appConfig.urls.url('projectEmployment'), errMsg) || this;
        _this.http = http;
        _this.appConfig = appConfig;
        _this.errMsg = errMsg;
        return _this;
    }
    ProjectEmploymentService.prototype.employmentByProject = function (projectId) {
        return this.httpClient.get(this.appConfig.urls.url('employmentByProject') + '/' + projectId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ProjectEmploymentService.prototype.getAllActualEmployment = function (projectId) {
        return this.httpClient.get(this.appConfig.urls.url('ActualEmployment') + '/' + projectId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ProjectEmploymentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"]])
    ], ProjectEmploymentService);
    return ProjectEmploymentService;
}(_Base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ }),

/***/ "./src/app/Services/project-input.service.ts":
/*!***************************************************!*\
  !*** ./src/app/Services/project-input.service.ts ***!
  \***************************************************/
/*! exports provided: ProjectInputService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectInputService", function() { return ProjectInputService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base.service */ "./src/app/Services/Base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");







var ProjectInputService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProjectInputService, _super);
    function ProjectInputService(http, appConfig, errMsg) {
        var _this = _super.call(this, http, appConfig.urls.url('pInput'), errMsg) || this;
        _this.http = http;
        _this.appConfig = appConfig;
        _this.errMsg = errMsg;
        return _this;
    }
    ProjectInputService.prototype.saveAll = function (resource) {
        return this.httpClient.post(this.appConfig.urls.url('pInput'), resource).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ProjectInputService.prototype.InputsByProject = function (projectId) {
        return this.httpClient.get(this.appConfig.urls.url('InputsByProject') + '/' + projectId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ProjectInputService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(
        //   {
        //   providedIn: 'root'
        // }
        ),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_4__["AppConfiguration"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"]])
    ], ProjectInputService);
    return ProjectInputService;
}(_Base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));



/***/ }),

/***/ "./src/app/Services/project-nationality-composition.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Services/project-nationality-composition.service.ts ***!
  \*********************************************************************/
/*! exports provided: ProjectNationalityCompositionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectNationalityCompositionService", function() { return ProjectNationalityCompositionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _Base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Base.service */ "./src/app/Services/Base.service.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var ProjectNationalityCompositionService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProjectNationalityCompositionService, _super);
    function ProjectNationalityCompositionService(http, appConfig, errMsg) {
        var _this = _super.call(this, http, appConfig.urls.url('NationalityCompositions'), errMsg) || this;
        _this.http = http;
        _this.appConfig = appConfig;
        _this.errMsg = errMsg;
        return _this;
    }
    ProjectNationalityCompositionService.prototype.NationalityCompositionsByProject = function (projectId, lang) {
        return this.httpClient.get(this.appConfig.urls.url('NationalityCompositionsByProject') + '/' + projectId + '/' + lang).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ProjectNationalityCompositionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"]])
    ], ProjectNationalityCompositionService);
    return ProjectNationalityCompositionService;
}(_Base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ }),

/***/ "./src/app/Services/project-output.service.ts":
/*!****************************************************!*\
  !*** ./src/app/Services/project-output.service.ts ***!
  \****************************************************/
/*! exports provided: ProjectOutputService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectOutputService", function() { return ProjectOutputService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base.service */ "./src/app/Services/Base.service.ts");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var ProjectOutputService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProjectOutputService, _super);
    function ProjectOutputService(http, appConfig, errMsg) {
        var _this = _super.call(this, http, appConfig.urls.url('pOutPut'), errMsg) || this;
        _this.http = http;
        _this.appConfig = appConfig;
        return _this;
    }
    ProjectOutputService.prototype.getPOutPutByProject = function (id) {
        return this.httpClient.get(this.appConfig.urls.url('pOutPutByProject') + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ProjectOutputService.prototype.getPOutActual = function (id) {
        return this.httpClient.get(this.appConfig.urls.url('ActualProduct') + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ProjectOutputService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(
        //   {
        //   providedIn: 'root'
        // }
        ),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"]])
    ], ProjectOutputService);
    return ProjectOutputService;
}(_Base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));



/***/ }),

/***/ "./src/app/Services/project-requirement.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/Services/project-requirement.service.ts ***!
  \*********************************************************/
/*! exports provided: ProjectRequirementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectRequirementService", function() { return ProjectRequirementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base.service */ "./src/app/Services/Base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var ProjectRequirementService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProjectRequirementService, _super);
    function ProjectRequirementService(httpClient, appConfig, errMsg) {
        var _this = _super.call(this, httpClient, appConfig.urls.url('pRequirement'), errMsg) || this;
        _this.httpClient = httpClient;
        _this.appConfig = appConfig;
        _this.errMsg = errMsg;
        return _this;
    }
    ProjectRequirementService.prototype.RequirementByProject = function (projectId) {
        return this.httpClient.get(this.appConfig.urls.url('requirementByProject') + '/' + projectId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ProjectRequirementService.prototype.getRequirementByProject = function (projectId) {
        return this.httpClient.get(this.appConfig.urls.url('requirementByProject') + '/' + projectId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ProjectRequirementService.prototype.getAllRequirementByProject = function (id) {
        return this.httpClient.get(this.appConfig.urls.url('ActualCost') + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    ProjectRequirementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(
        //   {
        //   providedIn: 'root'
        // }
        ),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_4__["AppConfiguration"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"]])
    ], ProjectRequirementService);
    return ProjectRequirementService;
}(_Base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));



/***/ }),

/***/ "./src/app/components/project-profile/project-profile-detail/project-detail-routing.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-profile-detail/project-detail-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: ProjectDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailRoutingModule", function() { return ProjectDetailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_profile_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-profile-detail.component */ "./src/app/components/project-profile/project-profile-detail/project-profile-detail.component.ts");




var routes = [
    { path: '', component: _project_profile_detail_component__WEBPACK_IMPORTED_MODULE_3__["ProjectProfileDetailComponent"] }
];
var ProjectDetailRoutingModule = /** @class */ (function () {
    function ProjectDetailRoutingModule() {
    }
    ProjectDetailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProjectDetailRoutingModule);
    return ProjectDetailRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-profile-detail/project-detail.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-profile-detail/project-detail.module.ts ***!
  \********************************************************************************************/
/*! exports provided: ProjectDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailModule", function() { return ProjectDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _project_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-detail-routing.module */ "./src/app/components/project-profile/project-profile-detail/project-detail-routing.module.ts");
/* harmony import */ var _project_profile_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-profile-detail.component */ "./src/app/components/project-profile/project-profile-detail/project-profile-detail.component.ts");
/* harmony import */ var _Services_project_employment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Services/project-employment.service */ "./src/app/Services/project-employment.service.ts");
/* harmony import */ var _Services_project_nationality_composition_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Services/project-nationality-composition.service */ "./src/app/Services/project-nationality-composition.service.ts");
/* harmony import */ var _Services_project_input_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Services/project-input.service */ "./src/app/Services/project-input.service.ts");
/* harmony import */ var _Services_project_output_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Services/project-output.service */ "./src/app/Services/project-output.service.ts");
/* harmony import */ var _Services_project_requirement_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../Services/project-requirement.service */ "./src/app/Services/project-requirement.service.ts");











var ProjectDetailModule = /** @class */ (function () {
    function ProjectDetailModule() {
    }
    ProjectDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _project_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProjectDetailRoutingModule"]
            ],
            declarations: [_project_profile_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProjectProfileDetailComponent"]],
            exports: [_project_profile_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProjectProfileDetailComponent"]],
            providers: [
                _Services_project_employment_service__WEBPACK_IMPORTED_MODULE_6__["ProjectEmploymentService"],
                _Services_project_nationality_composition_service__WEBPACK_IMPORTED_MODULE_7__["ProjectNationalityCompositionService"],
                _Services_project_input_service__WEBPACK_IMPORTED_MODULE_8__["ProjectInputService"],
                _Services_project_output_service__WEBPACK_IMPORTED_MODULE_9__["ProjectOutputService"],
                _Services_project_requirement_service__WEBPACK_IMPORTED_MODULE_10__["ProjectRequirementService"]
            ]
        })
    ], ProjectDetailModule);
    return ProjectDetailModule;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-profile-detail/project-profile-detail.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-profile-detail/project-profile-detail.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  color: #333;\r\n  font-family: Helvetica, Arial, sans-serif;\r\n  border-collapse: collapse;\r\n  border: 1px solid #f1f1f1;\r\n}\r\n\r\ntbody > tr > td:first-child {\r\n  /*background-color: whitesmoke !important;*/\r\n}\r\n\r\ntd, th {\r\n  height: 40px;\r\n  transition: all 0.3s; /* Simple transition for hover effect */\r\n}\r\n\r\nth {\r\n  background: #fafafa;\r\n  font-weight: bold;\r\n  font-size: 12px;\r\n\r\n}\r\n\r\ntd {\r\n  background: whitesmoke;\r\n  text-align: center;\r\n}\r\n\r\n/* Cells in even rows (2,4,6...) are one color */\r\n\r\ntr:nth-child(even) td {\r\n  background: #FEFEFE;\r\n}\r\n\r\n/* Cells in odd rows (1,3,5...) are another (excludes header cells)  */\r\n\r\ntr:nth-child(odd) td {\r\n  background: #FEFEFE;\r\n}\r\n\r\ntr td:hover {\r\n  background: #d8e9f9;\r\n  color: #FFF;\r\n}\r\n\r\n.caption {\r\n  color: cadetblue !important;\r\n  font-weight: bolder;\r\n  margin: 20px 6px 5px 6px;\r\n  text-decoration: underline;\r\n  -webkit-text-decoration-color: #f1f1f1;\r\n          text-decoration-color: #f1f1f1;\r\n  text-align: center;\r\n}\r\n\r\n.project_table_wdg {\r\n  border: 1px solid #f1f1f1;\r\n  border-radius: 4px;\r\n  -moz-border-radius: 4px;\r\n  -webkit-border-radius: 4px;\r\n  float: left;\r\n  /*margin-top: 25px;*/\r\n}\r\n\r\n.project_table_wdg ul {\r\n  list-style: none;\r\n  float: left;\r\n  width: 209px;\r\n  margin: 0;\r\n  border: 1px solid #f1f1f1;\r\n  padding: 2px;\r\n  /*text-align: center;*/\r\n  background-color: #FFF;\r\n}\r\n\r\n.project_table_wdg ul li {\r\n  border-bottom: 1px dashed #f1f1f1;\r\n  padding: 8px 0;\r\n}\r\n\r\n.project_table_wdg ul li:first-child {\r\n  color: cadetblue;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  background: whitesmoke;\r\n}\r\n\r\n.project_table_wdg ul li:nth-child(2) {\r\n  /*background: #FAFAFA;*/\r\n}\r\n\r\n.project_table_wdg ul li:nth-child(3) {\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n}\r\n\r\n.project_table_wdg ul li:nth-child(n+4) {\r\n  font-size: 12px;\r\n}\r\n\r\n.project_table_wdg ul li > .header {\r\n  font-weight: bold;\r\n  padding-left: 2px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Byb2plY3QtcHJvZmlsZS9wcm9qZWN0LXByb2ZpbGUtZGV0YWlsL3Byb2plY3QtcHJvZmlsZS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCx5Q0FBeUM7RUFDekMseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBb0IsRUFBRSx1Q0FBdUM7QUFDL0Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQSxnREFBZ0Q7O0FBQ2hEO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBLHNFQUFzRTs7QUFDdEU7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLHNDQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiw0QkFBNEI7QUFDOUIiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvcHJvamVjdC1wcm9maWxlL3Byb2plY3QtcHJvZmlsZS1kZXRhaWwvcHJvamVjdC1wcm9maWxlLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxufVxyXG5cclxudGJvZHkgPiB0ciA+IHRkOmZpcnN0LWNoaWxkIHtcclxuICAvKmJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2UgIWltcG9ydGFudDsqL1xyXG59XHJcblxyXG50ZCwgdGgge1xyXG4gIGhlaWdodDogNDBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zczsgLyogU2ltcGxlIHRyYW5zaXRpb24gZm9yIGhvdmVyIGVmZmVjdCAqL1xyXG59XHJcblxyXG50aCB7XHJcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcblxyXG59XHJcblxyXG50ZCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIENlbGxzIGluIGV2ZW4gcm93cyAoMiw0LDYuLi4pIGFyZSBvbmUgY29sb3IgKi9cclxudHI6bnRoLWNoaWxkKGV2ZW4pIHRkIHtcclxuICBiYWNrZ3JvdW5kOiAjRkVGRUZFO1xyXG59XHJcblxyXG4vKiBDZWxscyBpbiBvZGQgcm93cyAoMSwzLDUuLi4pIGFyZSBhbm90aGVyIChleGNsdWRlcyBoZWFkZXIgY2VsbHMpICAqL1xyXG50cjpudGgtY2hpbGQob2RkKSB0ZCB7XHJcbiAgYmFja2dyb3VuZDogI0ZFRkVGRTtcclxufVxyXG5cclxudHIgdGQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNkOGU5Zjk7XHJcbiAgY29sb3I6ICNGRkY7XHJcbn1cclxuXHJcbi5jYXB0aW9uIHtcclxuICBjb2xvcjogY2FkZXRibHVlICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBtYXJnaW46IDIwcHggNnB4IDVweCA2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZjFmMWYxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2plY3RfdGFibGVfd2RnIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcclxuICBmbG9hdDogbGVmdDtcclxuICAvKm1hcmdpbi10b3A6IDI1cHg7Ki9cclxufVxyXG5cclxuLnByb2plY3RfdGFibGVfd2RnIHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAyMDlweDtcclxuICBtYXJnaW46IDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgLyp0ZXh0LWFsaWduOiBjZW50ZXI7Ki9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG59XHJcblxyXG4ucHJvamVjdF90YWJsZV93ZGcgdWwgbGkge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2YxZjFmMTtcclxuICBwYWRkaW5nOiA4cHggMDtcclxufVxyXG5cclxuLnByb2plY3RfdGFibGVfd2RnIHVsIGxpOmZpcnN0LWNoaWxkIHtcclxuICBjb2xvcjogY2FkZXRibHVlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG4ucHJvamVjdF90YWJsZV93ZGcgdWwgbGk6bnRoLWNoaWxkKDIpIHtcclxuICAvKmJhY2tncm91bmQ6ICNGQUZBRkE7Ki9cclxufVxyXG5cclxuLnByb2plY3RfdGFibGVfd2RnIHVsIGxpOm50aC1jaGlsZCgzKSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucHJvamVjdF90YWJsZV93ZGcgdWwgbGk6bnRoLWNoaWxkKG4rNCkge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnByb2plY3RfdGFibGVfd2RnIHVsIGxpID4gLmhlYWRlciB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAycHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/project-profile/project-profile-detail/project-profile-detail.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-profile-detail/project-profile-detail.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card style=\"margin-top: 20px;\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"0\">\r\n    <div class=\"block\" fxFlex=\"20\">\r\n      <app-page-header title=\"projectDetail\" icon=\"view_list\"></app-page-header>\r\n\r\n    </div>\r\n    <div id=\"title1\" class=\"block\" fxFlex=\"70\">\r\n\r\n      <span class=\"page-title\">Investor: {{investorName}}</span>\r\n      <span class=\"slideBorder\">/</span>\r\n      <span class=\"page-title\">Project : {{projectDetail?.ProjectName}}</span>\r\n      &nbsp;&nbsp;\r\n      <span class=\"page-title\">\r\n        Project Stage:\r\n        <span style=\"color: #08b34d;\">\r\n          {{projectStageItem.DescriptionEnglish}}\r\n        </span>\r\n      </span>\r\n\r\n      &nbsp;&nbsp;\r\n      <span class=\"page-title\">Project Status: <span\r\n        style=\"color: #08b34d;\">{{projectStatusItem.DescriptionEnglish}}</span></span>\r\n\r\n    </div>\r\n  </div>\r\n  <mat-card-content style=\"margin-bottom: 30px;\">\r\n    <!--<div style=\"margin-bottom: 40px;\" fxLayout=\"margin-10 row wrap\">-->\r\n      <!--<div class=\"project_table_wdg mat-elevation-z6\">-->\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start\" class=\"content\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"2em\">\r\n          <div class=\"block\" fxFlex>\r\n        <!--<ul>-->\r\n          <!--<li>Address</li>-->\r\n          <!--<li>{{addressList.Region.DescriptionEnglish}}</li>-->\r\n          <!--<li><span class=\"header\">Specific Area Name :</span> {{addressList?.SpecificAreaName}}</li>-->\r\n          <!--<li><span class=\"header\">Region :</span>{{addressList?.Region.DescriptionEnglish}}</li>-->\r\n          <!--<li><span class=\"header\">Kebele :</span>{{addressList?.Zone.DescriptionEnglish}}</li>-->\r\n          <!--<li><span class=\"header\">Woreda :</span>{{addressList?.Zone.DescriptionEnglish}}</li>-->\r\n          <!--<li><span class=\"header\">Zone :</span>{{addressList?.Zone.DescriptionEnglish}}</li>-->\r\n\r\n          <!--<li><span class=\"header\">Remark :</span>{{addressList?.Remark}}</li>-->\r\n        <!--</ul>-->\r\n            <table class=\"full-width\" title=\"information\">\r\n              <thead>\r\n              <th>Region</th>\r\n              <th>Zone</th>\r\n              <th>Woreda</th>\r\n              <th>Kebele</th>\r\n              <th>Specific Area Name</th>\r\n              </thead>\r\n              <tbody>\r\n              <tr>\r\n                <td>{{addressList?.Region.DescriptionEnglish}}</td>\r\n                <td>{{addressList?.Region.DescriptionEnglish}}</td>\r\n                <td>{{addressList?.Region.DescriptionEnglish}}</td>\r\n                <td>{{addressList?.Region.DescriptionEnglish}}</td>\r\n                <td>{{addressList?.Region.DescriptionEnglish}}</td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n            <mat-divider style=\"-webkit-appearance: none; moz-appearance: none;appearance: none;\"></mat-divider>\r\n            <table class=\"full-width\" title=\"information\">\r\n              <thead>\r\n              <th>Region</th>\r\n              <th>Zone</th>\r\n              <th>Woreda</th>\r\n              <th>Kebele</th>\r\n              <th>Specific Area Name</th>\r\n              </thead>\r\n              <tbody>\r\n              <tr>\r\n                <td>{{addressList?.Region.DescriptionEnglish}}</td>\r\n                <td>{{addressList?.Region.DescriptionEnglish}}</td>\r\n                <td>{{addressList?.Region.DescriptionEnglish}}</td>\r\n                <td>{{addressList?.Region.DescriptionEnglish}}</td>\r\n                <td>{{addressList?.Region.DescriptionEnglish}}</td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <!--<div class=\"block\" fxFlex>-->\r\n            <!--<ul>-->\r\n              <!--<li>Utility</li>-->\r\n              <!--<li><span class=\"header\">Electric Power :</span>{{projectRequirement?.ElectricPower}}</li>-->\r\n              <!--<li><span class=\"header\">Land Agricultural :</span>{{projectRequirement?.LandAgricultural}}</li>-->\r\n              <!--<li><span class=\"header\">Land Industrial :</span>{{projectRequirement?.LandIndustrial}}</li>-->\r\n              <!--<li><span class=\"header\">Land Service :</span>{{projectRequirement?.LandService}}</li>-->\r\n              <!--<li><span class=\"header\">Other Utility :</span>{{projectRequirement?.OtherUtility}}</li>-->\r\n              <!--<li><span class=\"header\">Water :</span>{{projectRequirement?.Water}}</li>-->\r\n              <!--<li><span class=\"header\">Remark :</span>{{projectRequirement?.Remark}}</li>-->\r\n            <!--</ul>-->\r\n          <!--</div>-->\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start\" class=\"content\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"2em\">\r\n          <div class=\"block\" fxFlex>\r\n        <ul>\r\n          <li>Cost</li>\r\n          <li><span class=\"header\">Building Cost :</span>{{projectCost?.BuildingCost}}</li>\r\n          <li><span class=\"header\">Initial Working Capital Cost :</span>{{projectCost?.InitialWorkingCapitalCost}}</li>\r\n          <li><span class=\"header\">Land Cost :</span>{{projectCost?.LandCost}}</li>\r\n          <li><span class=\"header\">Machinery Cost :</span>{{projectCost?.MachineryCost}}</li>\r\n          <li><span class=\"header\">Office Equipment Cost :</span>{{projectCost?.OfficeEquipmentCost}}</li>\r\n          <li><span class=\"header\">Transport Cost :</span>{{projectCost?.TransportCost}}</li>\r\n          <li><span class=\"header\">Equity Finance : </span>{{projectCost?.EquityFinance}}</li>\r\n          <li><span class=\"header\">Loan Finance :</span>{{projectCost?.LoanFinance}}</li>\r\n        </ul>\r\n          </div>\r\n          <div class=\"block\" fxFlex>\r\n            <ul>\r\n              <li>Employment</li>\r\n              <li><span class=\"header\">Permanent Female :</span>{{projectEmployement?.PermanentFemale}}</li>\r\n              <li><span class=\"header\">Permanent Male :</span>{{projectEmployement?.PermanentMale}}</li>\r\n              <li><span class=\"header\">Permanent Foreign Female :</span>{{projectEmployement?.PermanentForeignFemale}}</li>\r\n              <li><span class=\"header\">Permanent Female :</span>{{projectEmployement?.PermanentFemale}}</li>\r\n              <li><span class=\"header\">Temporary Female :</span>{{projectEmployement?.TemporaryFemale}}</li>\r\n              <li><span class=\"header\">Temporary Male :</span>{{projectEmployement?.TemporaryMale}}</li>\r\n              <li><span class=\"header\">Temporary Foreign Female :</span>{{projectEmployement?.TemporaryForeignFemale}}</li>\r\n              <li><span class=\"header\">Temporary Foreign Male :</span>{{projectEmployement?.TemporaryForeignMale}}</li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start\" class=\"content\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"2em\">\r\n          <div class=\"block\" fxFlex>\r\n            <table class=\"full-width mat-elevation-z3\">\r\n            <!--<caption class=\"caption\">Project Output/Services</caption>-->\r\n            <thead>\r\n            <th>No</th>\r\n            <th>Product Name</th>\r\n            <th>Product Qty</th>\r\n            <th>Product Value</th>\r\n            <!--<th>Product Unit</th>-->\r\n            <th>Export Market Share</th>\r\n            <th>Domestic Market Share</th>\r\n            <th>Remark</th>\r\n\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let output of projectOutput;let i=index;\">\r\n            <td>{{i+1}}</td>\r\n            <td>{{output.ProductName}}</td>\r\n            <td>{{output.ProductQty}}</td>\r\n            <td>{{output.ProductValue}}</td>\r\n            <!--<td>{{output.ProductUnit}}</td>-->\r\n            <td>{{output.ExportMarketShare}} %</td>\r\n            <td>{{output.DomesticMarketShare}} %</td>\r\n            <td>{{output.Remark}}</td>\r\n            </tr>\r\n            </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start\" class=\"content\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"2em\">\r\n      <div class=\"block\" fxFlex>\r\n        <table class=\"full-width \">\r\n        <thead>\r\n        <th>No</th>\r\n        <th>Raw Material Type</th>\r\n        <th>Is Foreign</th>\r\n        <th>Remark</th>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let input of projectInputs;let i=index;\">\r\n        <td>{{i+1}}</td>\r\n        <td>{{input.RawMaterialType}}</td>\r\n        <td>{{input.IsForeign? 'yes':'no'}}</td>\r\n        <td>{{input.Remark}}</td>\r\n        </tr>\r\n        </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start\" class=\"content\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"2em\">\r\n      <div class=\"block\" fxFlex>\r\n      <table class=\"full-width\">\r\n      <thead>\r\n      <th>No</th>\r\n      <th>Nationality</th>\r\n      <th>Qty</th>\r\n      <th>SharePercent</th>\r\n      <th>Description</th>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let share of projectShare;let i=index;\">\r\n      <td>{{i+1}}</td>\r\n      <td>{{share.Nationality}}</td>\r\n      <td>{{share.Qty}}</td>\r\n      <td>{{share.SharePercent}}</td>\r\n      <td>{{share.Description}}</td>\r\n      </tr>\r\n      </tbody>\r\n      </table>\r\n    </div>\r\n    </div>\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n    <!--<label class=\"sub-label\">Project Output/Services</label>-->\r\n    <!--<div class=\"margin-10\" fxFlex=\"87%\" fxLayout=\"row wrap\" fxLayoutGap=\"3em\">-->\r\n\r\n      <!--<div class=\"block\" fxFlex=\"\">-->\r\n        <!--<table class=\"full-width mat-elevation-z3\">-->\r\n          <!--&lt;!&ndash;<caption class=\"caption\">Project Output/Services</caption>&ndash;&gt;-->\r\n          <!--<thead>-->\r\n          <!--<th>No</th>-->\r\n          <!--<th>Product Name</th>-->\r\n          <!--<th>Product Qty</th>-->\r\n          <!--<th>Product Value</th>-->\r\n          <!--&lt;!&ndash;<th>Product Unit</th>&ndash;&gt;-->\r\n          <!--<th>Export Market Share</th>-->\r\n          <!--<th>Domestic Market Share</th>-->\r\n          <!--<th>Remark</th>-->\r\n\r\n          <!--</thead>-->\r\n          <!--<tbody>-->\r\n          <!--<tr *ngFor=\"let output of projectOutput;let i=index;\">-->\r\n            <!--<td>{{i+1}}</td>-->\r\n            <!--<td>{{output.ProductName}}</td>-->\r\n            <!--<td>{{output.ProductQty}}</td>-->\r\n            <!--<td>{{output.ProductValue}}</td>-->\r\n            <!--&lt;!&ndash;<td>{{output.ProductUnit}}</td>&ndash;&gt;-->\r\n            <!--<td>{{output.ExportMarketShare}} %</td>-->\r\n            <!--<td>{{output.DomesticMarketShare}} %</td>-->\r\n            <!--<td>{{output.Remark}}</td>-->\r\n\r\n\r\n            <!--&lt;!&ndash;<td>&ndash;&gt;-->\r\n            <!--&lt;!&ndash;<a mat-min-fab (click)=\"editProject(4,projectDetail.ProjectId)\" matTooltip=\"Edit Project\">&ndash;&gt;-->\r\n            <!--&lt;!&ndash;<mat-icon color=\"primary\" class=\"mat-18\">edit</mat-icon>&ndash;&gt;-->\r\n            <!--&lt;!&ndash;</a>&ndash;&gt;-->\r\n            <!--&lt;!&ndash;<a mat&#45;&#45;mini-fab (click)=\"onDelete('nationalityComposition',output.ProjectOutputId)\"&ndash;&gt;-->\r\n            <!--&lt;!&ndash;color=\"accent\"&ndash;&gt;-->\r\n            <!--&lt;!&ndash;matTooltip=\"Delete Project\">&ndash;&gt;-->\r\n            <!--&lt;!&ndash;<mat-icon color=\"accent\">delete</mat-icon>&ndash;&gt;-->\r\n            <!--&lt;!&ndash;</a>&ndash;&gt;-->\r\n            <!--&lt;!&ndash;</td>&ndash;&gt;-->\r\n          <!--</tr>-->\r\n          <!--</tbody>-->\r\n        <!--</table>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n\r\n    <!--<div style=\"margin-top: 50px !important;\"-->\r\n         <!--fxFlex=\"87%\"-->\r\n         <!--fxLayout=\"row wrap\"-->\r\n         <!--fxLayoutGap=\"3em\">-->\r\n      <!--&lt;!&ndash;<div class=\"block\" fxFlex=\"\">&ndash;&gt;-->\r\n        <!--&lt;!&ndash;<label class=\"sub-label\">Project Raw Material Input</label>&ndash;&gt;-->\r\n      <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n      <!--<div class=\"block\" fxFlex=\"\">-->\r\n        <!--<label class=\"sub-label\">Project Nationality composition</label>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n    <!--<div-->\r\n      <!--class=\" mat-elevation-z2\"-->\r\n      <!--fxFlex=\"87%\"-->\r\n      <!--fxLayout=\"row wrap\"-->\r\n      <!--fxLayoutGap=\"3em\">-->\r\n      <!--<div class=\"block\" fxFlex=\"\">-->\r\n\r\n        <!--<table class=\"full-width \">-->\r\n          <!--<thead>-->\r\n          <!--<th>No</th>-->\r\n          <!--<th>Raw Material Type</th>-->\r\n          <!--<th>Is Foreign</th>-->\r\n          <!--<th>Remark</th>-->\r\n          <!--</thead>-->\r\n          <!--<tbody>-->\r\n          <!--<tr *ngFor=\"let input of projectInputs;let i=index;\">-->\r\n            <!--<td>{{i+1}}</td>-->\r\n            <!--<td>{{input.RawMaterialType}}</td>-->\r\n            <!--<td>{{input.IsForeign? 'yes':'no'}}</td>-->\r\n            <!--<td>{{input.Remark}}</td>-->\r\n            <!--&lt;!&ndash;<td>&ndash;&gt;-->\r\n            <!--&lt;!&ndash;<a mat-min-fab (click)=\"editProject(1,projectDetail.ProjectId)\" matTooltip=\"Edit Project\">&ndash;&gt;-->\r\n            <!--&lt;!&ndash;<mat-icon color=\"primary\" class=\"mat-18\">edit</mat-icon>&ndash;&gt;-->\r\n            <!--&lt;!&ndash;</a>&ndash;&gt;-->\r\n            <!--&lt;!&ndash;<a mat&#45;&#45;mini-fab (click)=\"onDelete('Input',input.ProjectInputId)\" color=\"accent\"&ndash;&gt;-->\r\n            <!--&lt;!&ndash;matTooltip=\"Delete Project\">&ndash;&gt;-->\r\n            <!--&lt;!&ndash;<mat-icon color=\"accent\">delete</mat-icon>&ndash;&gt;-->\r\n            <!--&lt;!&ndash;</a></td>&ndash;&gt;-->\r\n          <!--</tr>-->\r\n          <!--</tbody>-->\r\n        <!--</table>-->\r\n      <!--</div>-->\r\n      <!--<div class=\"block\" fxFlex=\"\">-->\r\n\r\n        <!--<table class=\"full-width\">-->\r\n          <!--<thead>-->\r\n          <!--<th>No</th>-->\r\n          <!--<th>Nationality</th>-->\r\n          <!--<th>Qty</th>-->\r\n          <!--<th>SharePercent</th>-->\r\n          <!--<th>Description</th>-->\r\n          <!--</thead>-->\r\n          <!--<tbody>-->\r\n          <!--<tr *ngFor=\"let share of projectShare;let i=index;\">-->\r\n            <!--<td>{{i+1}}</td>-->\r\n            <!--<td>{{share.Nationality}}</td>-->\r\n            <!--<td>{{share.Qty}}</td>-->\r\n            <!--<td>{{share.SharePercent}}</td>-->\r\n            <!--<td>{{share.Description}}</td>-->\r\n            <!--&lt;!&ndash;<td>&ndash;&gt;-->\r\n            <!--&lt;!&ndash;<a mat-min-fab (click)=\"editProject(4,projectDetail.ProjectId)\" matTooltip=\"Edit Project\">&ndash;&gt;-->\r\n            <!--&lt;!&ndash;<mat-icon color=\"primary\" class=\"mat-18\">edit</mat-icon>&ndash;&gt;-->\r\n            <!--&lt;!&ndash;</a>&ndash;&gt;-->\r\n            <!--&lt;!&ndash;<a mat&#45;&#45;mini-fab (click)=\"onDelete('nationalityComposition',share.ProjectNationalityCompositionId)\"&ndash;&gt;-->\r\n            <!--&lt;!&ndash;color=\"accent\"&ndash;&gt;-->\r\n            <!--&lt;!&ndash;matTooltip=\"Delete Project\">&ndash;&gt;-->\r\n            <!--&lt;!&ndash;<mat-icon color=\"accent\">delete</mat-icon>&ndash;&gt;-->\r\n            <!--&lt;!&ndash;</a></td>&ndash;&gt;-->\r\n          <!--</tr>-->\r\n          <!--</tbody>-->\r\n        <!--</table>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n  </mat-card-content>\r\n  <mat-divider></mat-divider>\r\n  <mat-card-actions>\r\n    <button color=\"primary\" mat-raised-button=\"\" (click)=\"back()\">\r\n      <mat-icon class=\"mat-18\">arrow_back</mat-icon>\r\n      Back\r\n    </button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/project-profile-detail/project-profile-detail.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-profile-detail/project-profile-detail.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ProjectProfileDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectProfileDetailComponent", function() { return ProjectProfileDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/project-profile.service */ "./src/app/Services/project-profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_project_cost_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/project-cost.service */ "./src/app/Services/project-cost.service.ts");
/* harmony import */ var _Services_project_requirement_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Services/project-requirement.service */ "./src/app/Services/project-requirement.service.ts");
/* harmony import */ var _Services_project_input_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Services/project-input.service */ "./src/app/Services/project-input.service.ts");
/* harmony import */ var _Services_project_nationality_composition_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Services/project-nationality-composition.service */ "./src/app/Services/project-nationality-composition.service.ts");
/* harmony import */ var _Services_project_employment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Services/project-employment.service */ "./src/app/Services/project-employment.service.ts");
/* harmony import */ var _Services_project_output_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Services/project-output.service */ "./src/app/Services/project-output.service.ts");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _Services_Address_address_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../Services/Address/address.service */ "./src/app/Services/Address/address.service.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../@custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _model_lookupData__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../model/lookupData */ "./src/app/model/lookupData.ts");
/* harmony import */ var _custor_const_consts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @custor/const/consts */ "./src/@custor/const/consts.ts");















var ProjectProfileDetailComponent = /** @class */ (function () {
    function ProjectProfileDetailComponent(projectProfileService, router, route, errMsg, addressService, dataSharingService, projectCostService, projectOutputService, projectInputService, projectEmploymentService, projectRequirementService, nationalityCompositionService) {
        this.projectProfileService = projectProfileService;
        this.router = router;
        this.route = route;
        this.errMsg = errMsg;
        this.addressService = addressService;
        this.dataSharingService = dataSharingService;
        this.projectCostService = projectCostService;
        this.projectOutputService = projectOutputService;
        this.projectInputService = projectInputService;
        this.projectEmploymentService = projectEmploymentService;
        this.projectRequirementService = projectRequirementService;
        this.nationalityCompositionService = nationalityCompositionService;
        this.projectShare = [];
        this.projectInputs = [];
        this.projectStatus = [];
        this.projectStage = [];
        this.projectStageItem = new _model_lookupData__WEBPACK_IMPORTED_MODULE_13__["ProjectStageModel"]();
        this.projectStatusItem = new _model_lookupData__WEBPACK_IMPORTED_MODULE_13__["ProjectStatusModel"]();
    }
    ProjectProfileDetailComponent.prototype.ngOnInit = function () {
        this.getProjectId();
        this.investorName = localStorage.getItem('investorName');
    };
    ProjectProfileDetailComponent.prototype.getProjectId = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.projectId = +params['id'];
            _this.getProjectDetail(_this.projectId);
            _this.getAddress(_this.projectId);
        });
    };
    ProjectProfileDetailComponent.prototype.getProjectStatus = function (id) {
        var _this = this;
        var projectStatus1 = new _model_lookupData__WEBPACK_IMPORTED_MODULE_13__["ProjectStatusModel"]();
        _custor_const_consts__WEBPACK_IMPORTED_MODULE_14__["ProjectStatus"].forEach(function (pair) {
            if (pair.Id == id) {
                projectStatus1 = {
                    'Id': pair.Id.toString(),
                    'DescriptionEnglish': pair.DescriptionEnglish,
                    'Description': pair.Description
                };
                _this.projectStatusItem = projectStatus1;
            }
        });
    };
    ProjectProfileDetailComponent.prototype.getProjectStage = function (id) {
        var _this = this;
        var projectSage = new _model_lookupData__WEBPACK_IMPORTED_MODULE_13__["ProjectStageModel"]();
        _custor_const_consts__WEBPACK_IMPORTED_MODULE_14__["ProjectStage"].forEach(function (pair) {
            if (pair.Id == id) {
                projectSage = {
                    'Id': pair.Id.toString(),
                    'DescriptionEnglish': pair.DescriptionEnglish,
                    'Description': pair.Description
                };
                _this.projectStageItem = projectSage;
            }
        });
    };
    ProjectProfileDetailComponent.prototype.getAddress = function (parent) {
        var _this = this;
        this.addressService.getAddress(parent)
            .subscribe(function (result) {
            _this.addressList = result;
            console.log(_this.addressList);
            console.log(_this.addressList.Region.Description);
        }, function (error) { return _this.errMsg.getError(error); });
    };
    ProjectProfileDetailComponent.prototype.getProjectDetail = function (projectId) {
        var _this = this;
        this.projectProfileService.ProjectsDetail(projectId).subscribe(function (result) {
            console.log(result);
            _this.projectDetail = result;
            _this.projectCost = result.ProjectCost[0];
            _this.projectEmployement = result.ProjectEmployment[0];
            _this.projectOutput = result.ProjectOutput;
            _this.projectRequirement = result.ProjectRequirement[0];
            _this.projectShare = result.ProjectNationalityComposition;
            _this.projectInputs = result.ProjectInput;
            _this.getProjectStatus(result.ProjectStatus);
            _this.getProjectStage(result.ProjectStage);
        }, function (error) { return _this.errMsg.getError(error); });
    };
    ProjectProfileDetailComponent.prototype.onProjectList = function () {
        // console.log(this.router.url);
        this.router.navigate(['../../list'], { relativeTo: this.route });
    };
    ProjectProfileDetailComponent.prototype.onNewProject = function () {
        // console.log(this.router.url);
        this.router.navigate(['../../new'], { relativeTo: this.route });
    };
    ProjectProfileDetailComponent.prototype.onDelete = function (type, id) {
        var _this = this;
        var response = confirm("Do you want to Delete this " + type + " ?");
        if (response === true) {
            switch (type) {
                case 'cost':
                    this.projectCostService.delete(id)
                        .subscribe(function () {
                        _this.getProjectId();
                    });
                    break;
                case 'address':
                    this.projectCostService.delete(id)
                        .subscribe(function () {
                        _this.getProjectId();
                    });
                    break;
                case 'Utility':
                    this.projectRequirementService.delete(id)
                        .subscribe(function () {
                        _this.getProjectId();
                    });
                    break;
                case 'Employment':
                    this.projectEmploymentService.delete(id)
                        .subscribe(function () {
                        // this.getAllProject();
                    });
                    break;
                case 'Output':
                    this.projectOutputService.delete(id)
                        .subscribe(function () {
                        _this.getProjectId();
                    });
                    break;
                case 'Input':
                    this.projectInputService.delete(id)
                        .subscribe(function () {
                        // this.getAllProject();
                    });
                    break;
                case 'nationalityComposition':
                    this.nationalityCompositionService.delete(id)
                        .subscribe(function () {
                        _this.getProjectId();
                    });
                    break;
            }
            return true;
        }
        else {
            return false;
        }
    };
    ProjectProfileDetailComponent.prototype.editProject = function (stepperIndex, projectId) {
        var _this = this;
        setTimeout(function () { return _this.dataSharingService.startingEditingProject.next(_this.projectDetail); }, 0);
        setTimeout(function () { return _this.dataSharingService.steeperIndex.next(stepperIndex); }, 0);
        this.router.navigate(['/pro', projectId], { relativeTo: this.route });
    };
    ProjectProfileDetailComponent.prototype.back = function () {
        window.history.back();
    };
    ProjectProfileDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-profile-detail',
            template: __webpack_require__(/*! ./project-profile-detail.component.html */ "./src/app/components/project-profile/project-profile-detail/project-profile-detail.component.html"),
            styles: [__webpack_require__(/*! ./project-profile-detail.component.css */ "./src/app/components/project-profile/project-profile-detail/project-profile-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_project_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProjectProfileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_12__["ErrorMessage"],
            _Services_Address_address_service__WEBPACK_IMPORTED_MODULE_11__["AddressService"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_10__["DataSharingService"],
            _Services_project_cost_service__WEBPACK_IMPORTED_MODULE_4__["ProjectCostService"],
            _Services_project_output_service__WEBPACK_IMPORTED_MODULE_9__["ProjectOutputService"],
            _Services_project_input_service__WEBPACK_IMPORTED_MODULE_6__["ProjectInputService"],
            _Services_project_employment_service__WEBPACK_IMPORTED_MODULE_8__["ProjectEmploymentService"],
            _Services_project_requirement_service__WEBPACK_IMPORTED_MODULE_5__["ProjectRequirementService"],
            _Services_project_nationality_composition_service__WEBPACK_IMPORTED_MODULE_7__["ProjectNationalityCompositionService"]])
    ], ProjectProfileDetailComponent);
    return ProjectProfileDetailComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-components-project-profile-project-profile-detail-project-detail-module~components-proje~ed0f14fb.js.map