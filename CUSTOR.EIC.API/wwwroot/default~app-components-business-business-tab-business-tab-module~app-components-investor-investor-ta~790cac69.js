(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-components-business-business-tab-business-tab-module~app-components-investor-investor-ta~790cac69"],{

/***/ "./src/app/components/project-profile/service-info/service-info.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/project-profile/service-info/service-info.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"margin-2\">\r\n  <mat-card-header>\r\n    <button mat-icon-button class=\"mr-16\" (click)=\"back()\" color=\"primary\">\r\n      <mat-icon>arrow_back</mat-icon>\r\n      <span>Back</span>\r\n    </button>\r\n  </mat-card-header>\r\n  <mat-divider></mat-divider>\r\n\r\n  <mat-card-content>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start  \" fxLayoutGap=\"2em\">\r\n      <div class=\"  block\" fxFlex=\"60%\">\r\n        <div class=\"hdr-brk sub-title\">{{title}}</div>\r\n        <div class=\"header-description \">\r\n          <strong>Required Scanned Documents to be Uploaded <i>(Pdf format only)</i> </strong>\r\n        </div>\r\n        <div class=\" border\">\r\n          <!--<div style=\"margin: 10px 20px\" *ngIf=\"ServiceId==1235\">-->\r\n            <!--<strong><i>Pre requisite only for registered customer.</i></strong>-->\r\n          <!--</div>-->\r\n          <ol type=\"none\">\r\n            <li *ngFor=\"let item of checkLists;let i=index\">\r\n              <!--<span style=\"margin-right: 20px;\" matBadge=\"{{i+1}}\"></span>-->\r\n              <span>{{item.DescriptionEnglish}}</span>\r\n            </li>\r\n          </ol>\r\n\r\n\r\n        </div>\r\n        <div fxLayoutAlign=\" center\" class=\"footerButton block\" fxFlex=\"\">\r\n          <button class=\"button-success\" (click)=\"continue()\" color=\"warn\" style=\"margin: 20px;\">Start</button>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"appGuid block\" fxFlex=\"40%\">\r\n        <div class=\"hdr-brk sub-title\">Application Form guide</div>\r\n        <ol>\r\n          <li> Fields marked\r\n            with ‘astrics (<span style=\"font-size: 20px;\" class=\"error\">*</span>)’ sign are mandatory information that\r\n            should be provided.\r\n          </li>\r\n          <li>\r\n            Make sure that you have prepared scanned copies of the list of documents listed here in order to upload them\r\n            later, when requested.\r\n          </li>\r\n          <li>If you wish to pause your application request process and continue later, your can do so by saving your\r\n            application as a Draft and Resume it later by clicking on \"Draft Applications\" menu item.\r\n          </li>\r\n          <li>\r\n            After you Submit your Service Request Application, you will receive a confirmation email indicating receipt\r\n            of your application by our staff that will handle the case.\r\n            The staff who will handle your case may contact you for further information regarding your\r\n            application.\r\n          </li>\r\n\r\n        </ol>\r\n      </div>\r\n    </div>\r\n\r\n  </mat-card-content>\r\n\r\n  <mat-card-actions align=\"start center\">\r\n    <div fxLayout=\"row\" fxLayoutGap=\"2em\">\r\n    </div>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/service-info/service-info.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/project-profile/service-info/service-info.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border {\n  border: 1px solid #f1f1f1;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px; }\n\n.appGuid > ol, li, .alert-info {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif, \"Noto Sans Ethiopic\";\n  font-size: 13px;\n  line-height: 1.428571429;\n  color: #333;\n  padding: 4px;\n  text-align: justify !important; }\n\n.service > ol > li, span {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif, \"Noto Sans Ethiopic\";\n  font-size: 12px;\n  line-height: 1.428571429;\n  color: #333;\n  padding: 2px;\n  text-align: justify !important; }\n\n.footerButton {\n  border-bottom-left-radius: 6px;\n  border: 1px solid #f1f1f1;\n  text-align: right;\n  border-bottom-right-radius: 6px;\n  background-color: #fafafa; }\n\n.agree {\n  color: white;\n  font-weight: bold; }\n\n.alert-info {\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n  color: #31708f;\n  margin: 20px; }\n\n.header-description {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif, \"Noto Sans Ethiopic\";\n  font-size: 12px;\n  line-height: 20px;\n  color: #333;\n  padding: 3px;\n  text-align: justify !important;\n  margin: 10px 10px; }\n\n.hdr-brk {\n  padding: 5px 0;\n  background: #fff;\n  border-bottom: 1px solid #f1f1f1;\n  line-height: 1; }\n\n.hdr-brk, .hm-bg-cnt .hm-bg-slick .lbl {\n  font-size: 16px; }\n\n.bld {\n  font-weight: 700; }\n\n.hdr-brk {\n  padding: 5px 0;\n  background: #fff;\n  border-bottom: 1px solid #f1f1f1;\n  line-height: 1; }\n\ntable {\n  color: #333;\n  font-family: Helvetica, Arial, sans-serif;\n  border-collapse: collapse; }\n\ntbody > tr > td:first-child {\n  color: #333 !important;\n  font-weight: bold;\n  font-family: Helvetica, Arial, sans-serif;\n  margin: 6px; }\n\ntd, th {\n  height: 30px;\n  transition: all 0.3s;\n  /* Simple transition for hover effect */ }\n\ntd {\n  text-align: left; }\n\n/* Cells in even rows (2,4,6...) are one color */\n\ntr:nth-child(even) td {\n  background: #FEFEFE; }\n\n/* Cells in odd rows (1,3,5...) are another (excludes header cells)  */\n\ntr:nth-child(odd) td {\n  background: #FEFEFE; }\n\ntr td:hover {\n  background: #d8e9f9;\n  color: #FFF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Byb2plY3QtcHJvZmlsZS9zZXJ2aWNlLWluZm8vQzpcXFVzZXJzXFxGZXRpaGEgS1xcRGVza3RvcFxcREVWXFxHaXRMYWJcXEludmVzdG1uZXRcXENVU1RPUi5FSUMuQVBJXFxzcmMvYXBwXFxjb21wb25lbnRzXFxwcm9qZWN0LXByb2ZpbGVcXHNlcnZpY2UtaW5mb1xcc2VydmljZS1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQiw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSxpRkFBaUY7RUFDakYsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLGlGQUFpRjtFQUNqRixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLHlCQUFvQyxFQUFBOztBQUd0QztFQUNFLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxpRkFBaUY7RUFDakYsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxXQUFXO0VBQ1gseUNBQXlDO0VBQ3pDLHlCQUF5QixFQUFBOztBQUkzQjtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIseUNBQXlDO0VBQ3pDLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFBRSx1Q0FBQSxFQUF3Qzs7QUFHaEU7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEIsZ0RBQUE7O0FBQ0E7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckIsc0VBQUE7O0FBQ0E7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVyxFQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3Byb2plY3QtcHJvZmlsZS9zZXJ2aWNlLWluZm8vc2VydmljZS1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcmRlciB7XHJcbiAgLy9ib3JkZXI6IDFweCBzb2xpZCByZ2IoMjUwLCAyNTAsIDI1MCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLmFwcEd1aWQgPiBvbCwgbGksIC5hbGVydC1pbmZvIHtcclxuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIk5vdG8gU2FucyBFdGhpb3BpY1wiO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlcnZpY2UgPiBvbCA+IGxpLCBzcGFuIHtcclxuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIk5vdG8gU2FucyBFdGhpb3BpY1wiO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvb3RlckJ1dHRvbiB7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyNTAsIDI1MCk7XHJcbn1cclxuXHJcbi5hZ3JlZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYWxlcnQtaW5mbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZWRmNztcclxuICBib3JkZXItY29sb3I6ICNiY2U4ZjE7XHJcbiAgY29sb3I6ICMzMTcwOGY7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIk5vdG8gU2FucyBFdGhpb3BpY1wiO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBjb2xvcjogIzMzMztcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMTBweCAxMHB4O1xyXG59XHJcblxyXG4uaGRyLWJyayB7XHJcbiAgcGFkZGluZzogNXB4IDA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcclxuICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5cclxuLmhkci1icmssIC5obS1iZy1jbnQgLmhtLWJnLXNsaWNrIC5sYmwge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmJsZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmhkci1icmsge1xyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIC8vYm9yZGVyOiAxcHggc29saWQgI2M0Y2JjYztcclxufVxyXG5cclxudGJvZHkgPiB0ciA+IHRkOmZpcnN0LWNoaWxkIHtcclxuICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbjogNnB4O1xyXG59XHJcblxyXG50ZCwgdGgge1xyXG4gIGhlaWdodDogMzBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zczsgLyogU2ltcGxlIHRyYW5zaXRpb24gZm9yIGhvdmVyIGVmZmVjdCAqL1xyXG59XHJcblxyXG50ZCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLyogQ2VsbHMgaW4gZXZlbiByb3dzICgyLDQsNi4uLikgYXJlIG9uZSBjb2xvciAqL1xyXG50cjpudGgtY2hpbGQoZXZlbikgdGQge1xyXG4gIGJhY2tncm91bmQ6ICNGRUZFRkU7XHJcbn1cclxuXHJcbi8qIENlbGxzIGluIG9kZCByb3dzICgxLDMsNS4uLikgYXJlIGFub3RoZXIgKGV4Y2x1ZGVzIGhlYWRlciBjZWxscykgICovXHJcbnRyOm50aC1jaGlsZChvZGQpIHRkIHtcclxuICBiYWNrZ3JvdW5kOiAjRkVGRUZFO1xyXG59XHJcblxyXG50ciB0ZDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2Q4ZTlmOTtcclxuICBjb2xvcjogI0ZGRjtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/project-profile/service-info/service-info.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/project-profile/service-info/service-info.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ServiceInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceInfoComponent", function() { return ServiceInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _setting_services_tabs_serviceprerequistie_servicePrerequisite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../setting/services-tabs/serviceprerequistie/servicePrerequisite.service */ "./src/app/components/setting/services-tabs/serviceprerequistie/servicePrerequisite.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/project-profile.service */ "./src/app/Services/project-profile.service.ts");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");






var ServiceInfoComponent = /** @class */ (function () {
    function ServiceInfoComponent(servicePrerequisiteService, router, dataSharing, projetServices, route) {
        this.servicePrerequisiteService = servicePrerequisiteService;
        this.router = router;
        this.dataSharing = dataSharing;
        this.projetServices = projetServices;
        this.route = route;
    }
    ServiceInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = localStorage.getItem('title');
        this.ServiceId = this.route.snapshot.params['ServiceId'];
        // console.log(this.ServiceId)
        this.route.params
            .subscribe(function (params) {
            _this.serviceId = +params['id'];
            _this.serviceId = _this.route.snapshot.params['id'];
            if (_this.serviceId > 1) {
                _this.title = localStorage.getItem('title');
            }
        });
        this.getPrerequisiteByServiceId(this.ServiceId);
    };
    ServiceInfoComponent.prototype.getPrerequisiteByServiceId = function (serviceId) {
        var _this = this;
        // console.log(serviceId)
        this.servicePrerequisiteService
            .servicePrerequisiteByServiceId(serviceId)
            .subscribe(function (result) {
            _this.checkLists = result;
        });
    };
    ServiceInfoComponent.prototype.continue = function () {
        this.dataSharing.renewalIndex.next(1);
        this.dataSharing.steeperIndex.next(1);
    };
    ServiceInfoComponent.prototype.info = function () {
        this.router.navigate(['/requirement', this.ServiceId]);
    };
    ServiceInfoComponent.prototype.back = function () {
        window.history.back();
    };
    ServiceInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-service-info',
            template: __webpack_require__(/*! ./service-info.component.html */ "./src/app/components/project-profile/service-info/service-info.component.html"),
            styles: [__webpack_require__(/*! ./service-info.component.scss */ "./src/app/components/project-profile/service-info/service-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_setting_services_tabs_serviceprerequistie_servicePrerequisite_service__WEBPACK_IMPORTED_MODULE_2__["ServicePrerequisiteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_5__["DataSharingService"],
            _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProjectProfileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ServiceInfoComponent);
    return ServiceInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/project-profile/service-info/serviceInfo-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/project-profile/service-info/serviceInfo-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ServiceInfoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceInfoRoutingModule", function() { return ServiceInfoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-info.component */ "./src/app/components/project-profile/service-info/service-info.component.ts");




var routes = [
    { path: '', component: _service_info_component__WEBPACK_IMPORTED_MODULE_3__["ServiceInfoComponent"] }
];
var ServiceInfoRoutingModule = /** @class */ (function () {
    function ServiceInfoRoutingModule() {
    }
    ServiceInfoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ServiceInfoRoutingModule);
    return ServiceInfoRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/project-profile/service-info/serviceInfo.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/project-profile/service-info/serviceInfo.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ServiceInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceInfoModule", function() { return ServiceInfoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _serviceInfo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceInfo-routing.module */ "./src/app/components/project-profile/service-info/serviceInfo-routing.module.ts");
/* harmony import */ var _service_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service-info.component */ "./src/app/components/project-profile/service-info/service-info.component.ts");
/* harmony import */ var _setting_services_tabs_serviceprerequistie_servicePrerequisite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../setting/services-tabs/serviceprerequistie/servicePrerequisite.service */ "./src/app/components/setting/services-tabs/serviceprerequistie/servicePrerequisite.service.ts");







var ServiceInfoModule = /** @class */ (function () {
    function ServiceInfoModule() {
    }
    ServiceInfoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _serviceInfo_routing_module__WEBPACK_IMPORTED_MODULE_4__["ServiceInfoRoutingModule"]
            ],
            exports: [_service_info_component__WEBPACK_IMPORTED_MODULE_5__["ServiceInfoComponent"]],
            declarations: [_service_info_component__WEBPACK_IMPORTED_MODULE_5__["ServiceInfoComponent"]],
            providers: [_setting_services_tabs_serviceprerequistie_servicePrerequisite_service__WEBPACK_IMPORTED_MODULE_6__["ServicePrerequisiteService"]]
        })
    ], ServiceInfoModule);
    return ServiceInfoModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-components-business-business-tab-business-tab-module~app-components-investor-investor-ta~790cac69.js.map