(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-components-project-profile-project-cancellation-tab-project-cancellation-tab-module~app-~4d72ef36"],{

/***/ "./src/app/Services/followup/followup.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/Services/followup/followup.service.ts ***!
  \*******************************************************/
/*! exports provided: FollowupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowupService", function() { return FollowupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _CUSTOR_EIC_API_src_app_config_appconfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../CUSTOR.EIC.API/src/app/config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _CUSTOR_EIC_API_src_app_Services_Base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../CUSTOR.EIC.API/src/app/Services/Base.service */ "./src/app/Services/Base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






var FollowupService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FollowupService, _super);
    function FollowupService(http, appConfig, errMsg) {
        var _this = _super.call(this, http, appConfig.urls.url('followup'), errMsg) || this;
        _this.http = http;
        _this.appConfig = appConfig;
        _this.errMsg = errMsg;
        return _this;
    }
    FollowupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])(
        //   {
        //   providedIn: 'root'
        // }
        ),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _CUSTOR_EIC_API_src_app_config_appconfig__WEBPACK_IMPORTED_MODULE_2__["AppConfiguration"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"]])
    ], FollowupService);
    return FollowupService;
}(_CUSTOR_EIC_API_src_app_Services_Base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/components/project-profile/aftercare-recomendation/AftercareRecommModule.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/project-profile/aftercare-recomendation/AftercareRecommModule.ts ***!
  \*********************************************************************************************/
/*! exports provided: AftercareRecommModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AftercareRecommModule", function() { return AftercareRecommModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _aftercare_recommendation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aftercare-recommendation.component */ "./src/app/components/project-profile/aftercare-recomendation/aftercare-recommendation.component.ts");
/* harmony import */ var _Services_followup_followup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Services/followup/followup.service */ "./src/app/Services/followup/followup.service.ts");
/* harmony import */ var _Services_project_renewal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Services/project-renewal.service */ "./src/app/Services/project-renewal.service.ts");







var AftercareRecommModule = /** @class */ (function () {
    function AftercareRecommModule() {
    }
    AftercareRecommModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: [_aftercare_recommendation_component__WEBPACK_IMPORTED_MODULE_4__["AftercareRecommendationComponent"]],
            exports: [_aftercare_recommendation_component__WEBPACK_IMPORTED_MODULE_4__["AftercareRecommendationComponent"]],
            providers: [_Services_followup_followup_service__WEBPACK_IMPORTED_MODULE_5__["FollowupService"], _Services_project_renewal_service__WEBPACK_IMPORTED_MODULE_6__["ProjectRenewalService"]]
        })
    ], AftercareRecommModule);
    return AftercareRecommModule;
}());



/***/ }),

/***/ "./src/app/components/project-profile/aftercare-recomendation/aftercare-recommendation.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/aftercare-recomendation/aftercare-recommendation.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card style=\"margin-top: 20px;\">\r\n\r\n  <mat-card-content style=\"margin-bottom: 30px;\">\r\n    <div style=\"margin-bottom: 40px;\" fxLayout=\"margin-10 row wrap\">\r\n      <div class=\"project_table_wdg mat-elevation-z6\">\r\n\r\n        <ul>\r\n          <li>Recommendation</li>\r\n\r\n          <li style=\"padding: 12px 12px;\" class=\"afterBody\">\r\n            <!--This report has only investigated the commercial viability of the method of production;-->\r\n            <!--it has not made an assessment of the market demand or marketability of this product.-->\r\n            <!--It is recommended that these factors be assessed. Market demand should be quantified-->\r\n            <!--and analysed against production and set-up costs in order to establish the optimal-->\r\n            <!--scale of production. Further research is required to establish the validity of the-->\r\n            <!--claim that the smaller grain sizes resulting from the short,-->\r\n            <!--rapid cycle of the microwave sintering process are mechanically superior-->\r\n            <!--to conventionally-sintered ceramics as this will impact on the demand and marketability of this product.-->\r\n          {{findings}}\r\n          </li>\r\n\r\n\r\n        </ul>\r\n\r\n        <ul>\r\n          <li>Detail</li>\r\n          <li><span class=\"header\">Date :</span>{{dateofFindings}}</li>\r\n          <li><span class=\"header\">BY :</span>{{byUsername}}</li>\r\n\r\n\r\n        </ul>\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/aftercare-recomendation/aftercare-recommendation.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/aftercare-recomendation/aftercare-recommendation.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  color: #333;\n  font-family: Helvetica, Arial, sans-serif;\n  border-collapse: collapse;\n  border: 1px solid #f1f1f1; }\n\ntbody > tr > td:first-child {\n  /*background-color: whitesmoke !important;*/ }\n\ntd, th {\n  height: 40px;\n  transition: all 0.3s;\n  /* Simple transition for hover effect */ }\n\nth {\n  background: #fafafa;\n  font-weight: bold;\n  font-size: 12px; }\n\ntd {\n  background: whitesmoke;\n  text-align: center; }\n\n/* Cells in even rows (2,4,6...) are one color */\n\ntr:nth-child(even) td {\n  background: #FEFEFE; }\n\n/* Cells in odd rows (1,3,5...) are another (excludes header cells)  */\n\ntr:nth-child(odd) td {\n  background: #FEFEFE; }\n\ntr td:hover {\n  background: #d8e9f9;\n  color: #FFF; }\n\n.caption {\n  color: cadetblue !important;\n  font-weight: bolder;\n  margin: 20px 6px 5px 6px;\n  text-decoration: underline;\n  -webkit-text-decoration-color: #f1f1f1;\n          text-decoration-color: #f1f1f1;\n  text-align: center; }\n\n.project_table_wdg {\n  border: 1px solid #f1f1f1;\n  border-radius: 4px;\n  -moz-border-radius: 4px;\n  -webkit-border-radius: 4px;\n  float: left;\n  /*margin-top: 25px;*/ }\n\n.project_table_wdg ul {\n  list-style: none;\n  float: left;\n  width: 400px;\n  margin: 0;\n  border: 1px solid #f1f1f1;\n  padding: 2px;\n  /*text-align: center;*/\n  background-color: #FFF; }\n\n.project_table_wdg ul li {\n  border-bottom: 1px dashed #f1f1f1;\n  padding: 8px 0; }\n\n.project_table_wdg ul li:first-child {\n  color: cadetblue;\n  font-size: 18px;\n  font-weight: bold;\n  background: whitesmoke; }\n\n.project_table_wdg ul li:nth-child(2) {\n  /*background: #FAFAFA;*/ }\n\n.project_table_wdg ul li:nth-child(3) {\n  font-size: 12px;\n  font-weight: bold; }\n\n.project_table_wdg ul li:nth-child(n+4) {\n  font-size: 12px; }\n\n.project_table_wdg ul li > .header {\n  font-weight: bold;\n  padding-left: 2px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Byb2plY3QtcHJvZmlsZS9hZnRlcmNhcmUtcmVjb21lbmRhdGlvbi9DOlxcVXNlcnNcXEZldGloYSBLXFxEZXNrdG9wXFxERVZcXEdpdExhYlxcSW52ZXN0bW5ldFxcQ1VTVE9SLkVJQy5BUElcXHNyYy9hcHBcXGNvbXBvbmVudHNcXHByb2plY3QtcHJvZmlsZVxcYWZ0ZXJjYXJlLXJlY29tZW5kYXRpb25cXGFmdGVyY2FyZS1yZWNvbW1lbmRhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCx5Q0FBeUM7RUFDekMseUJBQXlCO0VBQ3pCLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLDJDQUFBLEVBQTRDOztBQUc5QztFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFBRSx1Q0FBQSxFQUF3Qzs7QUFHaEU7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFJakI7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUE7O0FBR3BCLGdEQUFBOztBQUNBO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCLHNFQUFBOztBQUNBO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVcsRUFBQTs7QUFHYjtFQUNFLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixzQ0FBOEI7VUFBOUIsOEJBQThCO0VBQzlCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsb0JBQUEsRUFBcUI7O0FBR3ZCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osc0JBQUE7RUFDQSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxpQ0FBaUM7RUFDakMsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLHVCQUFBLEVBQXdCOztBQUcxQjtFQUNFLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsaUJBQWlCO0VBQ2pCLDRCQUE0QixFQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3Byb2plY3QtcHJvZmlsZS9hZnRlcmNhcmUtcmVjb21lbmRhdGlvbi9hZnRlcmNhcmUtcmVjb21tZW5kYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG59XHJcblxyXG50Ym9keSA+IHRyID4gdGQ6Zmlyc3QtY2hpbGQge1xyXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZSAhaW1wb3J0YW50OyovXHJcbn1cclxuXHJcbnRkLCB0aCB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzOyAvKiBTaW1wbGUgdHJhbnNpdGlvbiBmb3IgaG92ZXIgZWZmZWN0ICovXHJcbn1cclxuXHJcbnRoIHtcclxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbn1cclxuXHJcbnRkIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogQ2VsbHMgaW4gZXZlbiByb3dzICgyLDQsNi4uLikgYXJlIG9uZSBjb2xvciAqL1xyXG50cjpudGgtY2hpbGQoZXZlbikgdGQge1xyXG4gIGJhY2tncm91bmQ6ICNGRUZFRkU7XHJcbn1cclxuXHJcbi8qIENlbGxzIGluIG9kZCByb3dzICgxLDMsNS4uLikgYXJlIGFub3RoZXIgKGV4Y2x1ZGVzIGhlYWRlciBjZWxscykgICovXHJcbnRyOm50aC1jaGlsZChvZGQpIHRkIHtcclxuICBiYWNrZ3JvdW5kOiAjRkVGRUZFO1xyXG59XHJcblxyXG50ciB0ZDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2Q4ZTlmOTtcclxuICBjb2xvcjogI0ZGRjtcclxufVxyXG5cclxuLmNhcHRpb24ge1xyXG4gIGNvbG9yOiBjYWRldGJsdWUgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIG1hcmdpbjogMjBweCA2cHggNXB4IDZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNmMWYxZjE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvamVjdF90YWJsZV93ZGcge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIC8qbWFyZ2luLXRvcDogMjVweDsqL1xyXG59XHJcblxyXG4ucHJvamVjdF90YWJsZV93ZGcgdWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIHBhZGRpbmc6IDJweDtcclxuICAvKnRleHQtYWxpZ246IGNlbnRlcjsqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbn1cclxuXHJcbi5wcm9qZWN0X3RhYmxlX3dkZyB1bCBsaSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZjFmMWYxO1xyXG4gIHBhZGRpbmc6IDhweCAwO1xyXG59XHJcblxyXG4ucHJvamVjdF90YWJsZV93ZGcgdWwgbGk6Zmlyc3QtY2hpbGQge1xyXG4gIGNvbG9yOiBjYWRldGJsdWU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi5wcm9qZWN0X3RhYmxlX3dkZyB1bCBsaTpudGgtY2hpbGQoMikge1xyXG4gIC8qYmFja2dyb3VuZDogI0ZBRkFGQTsqL1xyXG59XHJcblxyXG4ucHJvamVjdF90YWJsZV93ZGcgdWwgbGk6bnRoLWNoaWxkKDMpIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0X3RhYmxlX3dkZyB1bCBsaTpudGgtY2hpbGQobis0KSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ucHJvamVjdF90YWJsZV93ZGcgdWwgbGkgPiAuaGVhZGVyIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nLWxlZnQ6IDJweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/project-profile/aftercare-recomendation/aftercare-recommendation.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/project-profile/aftercare-recomendation/aftercare-recommendation.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AftercareRecommendationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AftercareRecommendationComponent", function() { return AftercareRecommendationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Services/project-profile.service */ "./src/app/Services/project-profile.service.ts");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _Services_project_renewal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../Services/project-renewal.service */ "./src/app/Services/project-renewal.service.ts");
/* harmony import */ var _Services_followup_followup_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../Services/followup/followup.service */ "./src/app/Services/followup/followup.service.ts");












var AftercareRecommendationComponent = /** @class */ (function () {
    function AftercareRecommendationComponent(fb, snackbar, accountService, projetServices, dataSharing, route, errMsg, toastr, followupService, projectRenewalService) {
        this.fb = fb;
        this.snackbar = snackbar;
        this.accountService = accountService;
        this.projetServices = projetServices;
        this.dataSharing = dataSharing;
        this.route = route;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.followupService = followupService;
        this.projectRenewalService = projectRenewalService;
    }
    AftercareRecommendationComponent.prototype.ngOnInit = function () {
        this.ServiceId = this.route.snapshot.params['ServiceId'] || this.route.snapshot.params['serviceId'];
        this.InvestorId = this.route.snapshot.params['InvestorId'] || this.route.snapshot.params['investorId'];
        this.ProjectId = this.route.snapshot.params['ProjectId'] || this.route.snapshot.params['projectId'];
        this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'] || this.route.snapshot.params['serviceApplicationId'];
        this.getRecommendation(this.ProjectId);
        console.log(this.ProjectId);
    };
    AftercareRecommendationComponent.prototype.getRecommendation = function (projectId) {
        var _this = this;
        this.followupService
            .getOneById(projectId)
            .subscribe(function (result) {
            console.log(result);
            if (result != null) {
                _this.byUsername = result.CreatedUserName;
                _this.findings = result.FollowupFinding;
                _this.dateofFindings = result.FollowupDate;
            }
            else {
                _this.byUsername = "None";
                _this.findings = "None";
                _this.dateofFindings = "None";
            }
        });
    };
    AftercareRecommendationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aftercare-recommendation',
            template: __webpack_require__(/*! ./aftercare-recommendation.component.html */ "./src/app/components/project-profile/aftercare-recomendation/aftercare-recommendation.component.html"),
            styles: [__webpack_require__(/*! ./aftercare-recommendation.component.scss */ "./src/app/components/project-profile/aftercare-recomendation/aftercare-recommendation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"],
            _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProjectProfileService"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_6__["DataSharingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_8__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _Services_followup_followup_service__WEBPACK_IMPORTED_MODULE_11__["FollowupService"],
            _Services_project_renewal_service__WEBPACK_IMPORTED_MODULE_10__["ProjectRenewalService"]])
    ], AftercareRecommendationComponent);
    return AftercareRecommendationComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-components-project-profile-project-cancellation-tab-project-cancellation-tab-module~app-~4d72ef36.js.map