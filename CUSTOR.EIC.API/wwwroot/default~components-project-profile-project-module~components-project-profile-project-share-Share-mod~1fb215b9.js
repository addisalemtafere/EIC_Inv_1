(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-project-profile-project-module~components-project-profile-project-share-Share-mod~1fb215b9"],{

/***/ "./src/app/components/project-profile/project-share/Share.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/project-profile/project-share/Share.module.ts ***!
  \**************************************************************************/
/*! exports provided: ShareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareModule", function() { return ShareModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _share_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./share-routing.module */ "./src/app/components/project-profile/project-share/share-routing.module.ts");
/* harmony import */ var _project_share_list_project_share_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-share-list/project-share-list.component */ "./src/app/components/project-profile/project-share/project-share-list/project-share-list.component.ts");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _project_share_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-share.component */ "./src/app/components/project-profile/project-share/project-share.component.ts");
/* harmony import */ var _Services_project_nationality_composition_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Services/project-nationality-composition.service */ "./src/app/Services/project-nationality-composition.service.ts");








var ShareModule = /** @class */ (function () {
    function ShareModule() {
    }
    ShareModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _share_routing_module__WEBPACK_IMPORTED_MODULE_3__["ShareRoutingModule"]
            ],
            declarations: [_project_share_list_project_share_list_component__WEBPACK_IMPORTED_MODULE_4__["ProjectShareListComponent"], _project_share_component__WEBPACK_IMPORTED_MODULE_6__["ProjectShareComponent"]],
            exports: [_project_share_list_project_share_list_component__WEBPACK_IMPORTED_MODULE_4__["ProjectShareListComponent"], _project_share_component__WEBPACK_IMPORTED_MODULE_6__["ProjectShareComponent"]],
            providers: [_Services_project_nationality_composition_service__WEBPACK_IMPORTED_MODULE_7__["ProjectNationalityCompositionService"]]
        })
    ], ShareModule);
    return ShareModule;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-share/project-share-list/project-share-list.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-share/project-share-list/project-share-list.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table style=\"height: 320px;display: block;overflow: auto;\" class=\"scrollbar table full-width\">\r\n  <thead>\r\n  <th>No</th>\r\n  <th>Nationality</th>\r\n  <th>quantity</th>\r\n  <th>SharePercent</th>\r\n  <th>Description</th>\r\n\r\n  </thead>\r\n  <tbody style=\"overflow: auto;\">\r\n  <tr class=\"planned\">\r\n    <td></td>\r\n    <td>{{plannedShareList?.strNationality}}</td>\r\n    <td>{{plannedShareList?.Qty}}</td>\r\n    <td>{{plannedShareList?.SharePercent}}</td>\r\n    <td>{{plannedShareList?.Description}}</td>\r\n  </tr>\r\n  <tr *ngFor=\"let share of shareList;let i=index;\">\r\n    <td>{{i+1}}</td>\r\n    <td>{{share.strNationality}}</td>\r\n    <td>{{share.Qty}}</td>\r\n    <td>{{share.SharePercent}}</td>\r\n    <td>{{share.Description}}</td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/project-share/project-share-list/project-share-list.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-share/project-share-list/project-share-list.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table td {\n  padding: 4px 90px 4px 5px;\n  font-size: 13px;\n  border-top: 1px solid #FAFAFA; }\n\n.table th {\n  padding: 4px 90px 4px 5px;\n  font-size: 13px;\n  border-top: 1px solid #FAFAFA; }\n\ntable tbody tr:nth-child(2) td {\n  border: 1px solid #0d8055;\n  background-color: #0d8055;\n  color: white;\n  font-weight: bolder; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Byb2plY3QtcHJvZmlsZS9wcm9qZWN0LXNoYXJlL3Byb2plY3Qtc2hhcmUtbGlzdC9DOlxcVXNlcnNcXEZldGloYSBLXFxEZXNrdG9wXFxERVZcXEdpdExhYlxcSW52ZXN0bW5ldFxcQ1VTVE9SLkVJQy5BUElcXHNyYy9hcHBcXGNvbXBvbmVudHNcXHByb2plY3QtcHJvZmlsZVxccHJvamVjdC1zaGFyZVxccHJvamVjdC1zaGFyZS1saXN0XFxwcm9qZWN0LXNoYXJlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLDZCQUE2QixFQUFBOztBQUkvQjtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsNkJBQTZCLEVBQUE7O0FBRy9CO0VBRUUseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CLEVBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvcHJvamVjdC1wcm9maWxlL3Byb2plY3Qtc2hhcmUvcHJvamVjdC1zaGFyZS1saXN0L3Byb2plY3Qtc2hhcmUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udGFibGUgdGQge1xyXG4gIHBhZGRpbmc6IDRweCA5MHB4IDRweCA1cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRkFGQUZBO1xyXG5cclxufVxyXG5cclxuLnRhYmxlIHRoIHtcclxuICBwYWRkaW5nOiA0cHggOTBweCA0cHggNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI0ZBRkFGQTtcclxufVxyXG5cclxudGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKDIpIHRkIHtcclxuXHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzBkODA1NTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ4MDU1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/project-profile/project-share/project-share-list/project-share-list.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-share/project-share-list/project-share-list.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ProjectShareListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectShareListComponent", function() { return ProjectShareListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_project_nationality_composition_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Services/project-nationality-composition.service */ "./src/app/Services/project-nationality-composition.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProjectShareListComponent = /** @class */ (function () {
    function ProjectShareListComponent(shareService, route) {
        this.shareService = shareService;
        this.route = route;
    }
    ProjectShareListComponent.prototype.ngOnInit = function () {
        this.ProjectId = this.route.snapshot.params['ProjectId'];
        this.getShareAfterCare();
        this.getPlannedShareAfterCare();
    };
    ProjectShareListComponent.prototype.getShareAfterCare = function () {
        var _this = this;
        this.shareService.getAll()
            .subscribe(function (result) {
            _this.shareList = result;
        });
    };
    ProjectShareListComponent.prototype.getPlannedShareAfterCare = function () {
        var _this = this;
        this.shareService.getAll()
            .subscribe(function (result) {
            _this.plannedShareList = result[0];
        });
    };
    ProjectShareListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-share-list',
            template: __webpack_require__(/*! ./project-share-list.component.html */ "./src/app/components/project-profile/project-share/project-share-list/project-share-list.component.html"),
            styles: [__webpack_require__(/*! ./project-share-list.component.scss */ "./src/app/components/project-profile/project-share/project-share-list/project-share-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_project_nationality_composition_service__WEBPACK_IMPORTED_MODULE_2__["ProjectNationalityCompositionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProjectShareListComponent);
    return ProjectShareListComponent;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-share/project-share.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-share/project-share.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-header-row {\r\n  background-color: white;\r\n  border-top: 1px solid #f1f1f1;\r\n  border-bottom: 1px solid #f1f1f1 !important;\r\n}\r\n\r\n.mat-card-header {\r\n  min-height: 30px;\r\n  background-color: #fafafa;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Byb2plY3QtcHJvZmlsZS9wcm9qZWN0LXNoYXJlL3Byb2plY3Qtc2hhcmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9wcm9qZWN0LXByb2ZpbGUvcHJvamVjdC1zaGFyZS9wcm9qZWN0LXNoYXJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtaGVhZGVyLXJvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1jYXJkLWhlYWRlciB7XHJcbiAgbWluLWhlaWdodDogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/project-profile/project-share/project-share.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-share/project-share.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"margin-2\" style=\"box-shadow: none;border: 1px solid #dddddd\" *ngIf=\"!isSol\">\r\n  <!--<mat-card-subtitle class=\"sub-title\">-->\r\n  <!--<mat-icon color=\"primary\" class=\"mat-18\">add</mat-icon>-->\r\n  <!--Add Share-->\r\n  <!--<mat-divider></mat-divider>-->\r\n  <!--</mat-card-subtitle>-->\r\n\r\n  <mat-card-content>\r\n    <form [formGroup]=\"projectShareForm\" novalidate>\r\n\r\n      <div fxLayout=\"row\"\r\n           fxLayoutAlign=\"start center\"\r\n           class=\"content\"\r\n           fxLayout.lt-sm=\"column\"\r\n           fxLayoutGap=\"2em\">\r\n\r\n        <div class=\"block\" fxLayoutGap=\"2em\">\r\n          <mat-form-field fxLayoutGap=\"4em\" [fxFlex]=\"20\">\r\n            <mat-label>Nationality * :</mat-label>\r\n            <mat-select formControlName=\"Nationality\">\r\n              <mat-option *ngFor=\"let nation of nationList\" [value]=\"nation.id\">\r\n                {{nation.descriptionEnglish}}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error align=\"start\" *ngIf=\"formErrors.Nationality\" class=\"form__error\">{{ formErrors.Nationality }}\r\n            </mat-error>\r\n            <mat-error align=\"start\" *ngIf=\"projectShareForm.get('Nationality').hasError('value')\" class=\"form__error\">\r\n              Redundant nation is not allowed\r\n            </mat-error>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxLayoutGap=\"4em\" [fxFlex]=\"20\">\r\n            <mat-label>Quantity *:</mat-label>\r\n            <input type=\"number\" formControlName=\"Qty\" matInput>\r\n            <mat-error align=\"start\" *ngIf=\"formErrors.Qty\" class=\"form__error\">{{ formErrors.Qty }}\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field fxLayoutGap=\"4em\" [fxFlex]=\"20\">\r\n            <mat-label>Share Percent % *:</mat-label>\r\n            <input type=\"number\"\r\n                   formControlName=\"SharePercent\"\r\n                   matInput>\r\n            <mat-error align=\"start\" *ngIf=\"formErrors.SharePercent\" class=\"form__error\">{{ formErrors.SharePercent }}\r\n            </mat-error>\r\n            <!--            <mat-error align=\"start\" *ngIf=\"projectShareForm.get('SharePercent').hasError('value')\" class=\"form__error\">-->\r\n            <!--              Sum of all share percent is exceeded 100-->\r\n            <!--            </mat-error>-->\r\n            <mat-error align=\"start\" *ngIf=\"projectShareForm.get('SharePercent').hasError('max')\" class=\"form__error\">\r\n              Share percent can not exceeded 100\r\n            </mat-error>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"full-width\" fxLayoutGap=\"4em\" [fxFlex]=\"30\">\r\n            <mat-label>Description :</mat-label>\r\n            <textarea formControlName=\"Description\" matInput>\r\n                 </textarea>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <!--<div class=\"block\" fxFlex=\"40%\">-->\r\n\r\n        <!--&lt;!&ndash;Total:{{totalShare}}&ndash;&gt;-->\r\n        <!--</div>-->\r\n        <div class=\"block\" fxFlex=\"10%\">\r\n          <button class=\"custom-button \" [disabled]=\"!projectShareForm.valid\"\r\n                  (click)=\"onSubmit()\"\r\n                  matTooltip=\"Add Share\">\r\n            <mat-icon color=\"accent\" class=\" mat-18\">done</mat-icon>\r\n            {{editMode ? 'Update' : 'Add'}}\r\n          </button>\r\n          <!--<a style=\"margin-left: 4px\" mat-raised-button class=\"pointer\" (click)=\"onClear()\" matTooltip=\"Clear Form\">-->\r\n          <!--<mat-icon color=\"accent\" class=\"mat-18\">clear_all</mat-icon>-->\r\n          <!--clear-->\r\n          <!--</a>-->\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card class=\"margin-2 padding-0\" *ngIf=\"nationalityCompositionData.length>0 && !isSol\">\r\n  <mat-card-header>\r\n    <mat-card-subtitle class=\"sub-title\">List of Share\r\n      <!--<mat-divider></mat-divider>-->\r\n    </mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"center \">\r\n\r\n      <mat-table class=\"full-width\" #table [dataSource]=\"dataSource\">\r\n        <ng-container style=\"width: 10px !important;\" matColumnDef=\"No\">\r\n          <mat-header-cell style=\"width: 10px !important;\" *matHeaderCellDef>No</mat-header-cell>\r\n          <mat-cell style=\"width: 10px !important;\" *matCellDef=\"let nationalityCompositionData;let i=index;\">{{i + 1}}\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"Nationality\">\r\n          <mat-header-cell *matHeaderCellDef>Nationality</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let nationalityCompositionData\"> {{nationalityCompositionData.strNationality}}\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"Qty\">\r\n          <mat-header-cell *matHeaderCellDef>Quantity</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let nationalityCompositionData\"> {{nationalityCompositionData.Qty}}\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"SharePercent\">\r\n          <mat-header-cell *matHeaderCellDef> Share Percent</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let nationalityCompositionData\"> {{nationalityCompositionData.SharePercent }}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"Description\">\r\n          <mat-header-cell *matHeaderCellDef>Description</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let nationalityCompositionData\">{{nationalityCompositionData.Description }}</mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"Action\">\r\n          <mat-header-cell *matHeaderCellDef>Action</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let nationalityCompositionData;let i=index;\">\r\n            <div>\r\n              <a class=\"pointer\" mat-min-fab matTooltip=\"Click here to edit the Share\"\r\n                 (click)=\"onEditShare(i,nationalityCompositionData.ProjectNationalityCompositionId)\">\r\n                <mat-icon color=\"primary\" class=\"mat-18\">edit</mat-icon>\r\n                Edit\r\n              </a>\r\n              <a class=\"pointer\" mat-min-fab color=\"warn\" matTooltip=\"Click here to delete the dhare\"\r\n                 (click)=\"deleteShare(i,nationalityCompositionData.ProjectNationalityCompositionId)\">\r\n                <mat-icon color=\"warn\">delete</mat-icon>\r\n                Delete\r\n              </a>\r\n            </div>\r\n          </mat-cell>\r\n        </ng-container>\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\">\r\n        </mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n        </mat-row>\r\n      </mat-table>\r\n    </div>\r\n  </mat-card-content>\r\n\r\n  <div align=\"center\">\r\n    <div style=\"padding: 20px\" fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"2em\">\r\n\r\n      <div fxFlex=\"15\">\r\n\r\n        <!--<button class=\"custom-button\" (click)=\"next()\" color=\"warn\" type=\"button\">-->\r\n        <!--Back-->\r\n        <!--</button>-->\r\n      </div>\r\n      <div style=\"text-align: center\" fxFlex=\"67\" fxFlexAlign=\"center\">\r\n\r\n      </div>\r\n      <div fxFlex=\"15\">\r\n\r\n        <!--<button class=\"custom-button\" (click)=\"next()\" color=\"warn\" type=\"button\">-->\r\n        <!--Next-->\r\n        <!--</button>-->\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</mat-card>\r\n\r\n<mat-card class=\"margin-2\" style=\"box-shadow: none;border: 1px solid #dddddd\" *ngIf=\"isSol\">\r\n  <!--<mat-card-subtitle class=\"sub-title\">-->\r\n  <!--<mat-icon color=\"primary\" class=\"mat-18\">add</mat-icon>-->\r\n  <!--Add Share-->\r\n  <!--<mat-divider></mat-divider>-->\r\n  <!--</mat-card-subtitle>-->\r\n  <mat-card-content>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\">\r\n      <div class=\"block\" fxFlex=\"\">\r\n        <span style=\"font-weight: bolder;font-size: 14px;\">Full Name : </span>{{InvestorDetial?.InvestorNameEng}}\r\n      </div>\r\n      <div class=\"block\" fxFlex=\"\">\r\n        <span style=\"font-size: 14px;font-weight: bolder;\">Share Percent </span>100 %\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/project-share/project-share.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/project-profile/project-share/project-share.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProjectShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectShareComponent", function() { return ProjectShareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_project_nationality_composition_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services/project-nationality-composition.service */ "./src/app/Services/project-nationality-composition.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _Services_Address_address_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Services/Address/address.service */ "./src/app/Services/Address/address.service.ts");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _custor_validation_custom_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @custor/validation/custom/form */ "./src/@custor/validation/custom/form.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../Services/project-profile.service */ "./src/app/Services/project-profile.service.ts");
/* harmony import */ var _investor_investor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../investor/investor.service */ "./src/app/components/investor/investor.service.ts");
/* harmony import */ var _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @custor/services/configuration.service */ "./src/@custor/services/configuration.service.ts");















var ProjectShareComponent = /** @class */ (function () {
    function ProjectShareComponent(formBuilder, snackbar, route, invService, projectProfileService, errMsg, toastr, dataSharing, formService, addressService, configService, nationalityCompositionService) {
        this.formBuilder = formBuilder;
        this.snackbar = snackbar;
        this.route = route;
        this.invService = invService;
        this.projectProfileService = projectProfileService;
        this.errMsg = errMsg;
        this.toastr = toastr;
        this.dataSharing = dataSharing;
        this.formService = formService;
        this.addressService = addressService;
        this.configService = configService;
        this.nationalityCompositionService = nationalityCompositionService;
        this.formErrors = {
            Nationality: '',
            Qty: '',
            SharePercent: ''
        };
        this.nationList = [];
        this.editMode = false;
        this.loading = false;
        this.nationalityCompositionData = [];
        this.displayedColumns = ['No', 'Nationality', 'Qty', 'SharePercent', 'Description', 'Action'];
    }
    ProjectShareComponent.prototype.ngOnInit = function () {
        this.currentLang = this.configService.language;
        this.ServiceId = this.route.snapshot.params['ServiceId'];
        this.InvestorId = this.route.snapshot.params['InvestorId'];
        this.workFlowId = this.route.snapshot.params['workFlowId'];
        this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
        this.projectId = this.route.snapshot.params['ProjectId'];
        this.getAllNation();
        this.getInvestorType();
        if (this.projectId > 1) {
            this.getNationalityCompositionsByProject();
        }
        this.formBuild();
    };
    ProjectShareComponent.prototype.getNationalityCompositionsByProject = function () {
        var _this = this;
        this.nationalityCompositionService.NationalityCompositionsByProject(this.projectId, this.currentLang).subscribe(function (result) {
            if (result.length > 0) {
                _this.nationalityCompositionData = result;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.nationalityCompositionData);
                _this.loading = false;
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    ProjectShareComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formService.markFormGroupTouched(this.projectShareForm);
        this.projectShareForm.removeControl('ProjectNationalityCompositionId');
        if (this.projectShareForm.valid) {
            if (!this.editMode) {
                this.nationalityCompositionService.create(this.projectShareForm.value)
                    .subscribe(function (result) {
                    if (_this.nationalityCompositionData.length < 1) {
                        setTimeout(function () { return _this.dataSharing.currentIndex.next(7); }, 0);
                    }
                    else {
                        setTimeout(function () { return _this.dataSharing.currentIndex.next(8); }, 0);
                    }
                    _this.projectShareForm.addControl('ProjectNationalityCompositionId', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''));
                    _this.nationalityCompositionData.push(result);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.nationalityCompositionData);
                    _this.notification('saved');
                    _this.onClear();
                });
            }
            else {
                this.nationalityCompositionService.update(this.projectShareForm.value, this.ProjectNationalityCompositionId)
                    .subscribe(function (result) {
                    _this.notification('updated');
                    _this.nationalityCompositionData[_this.shareEditIndex] = result;
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.nationalityCompositionData);
                    _this.onClear();
                }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
            }
        }
        else {
            this.formErrors = this.formService.validateForm(this.projectShareForm, this.formErrors, false);
        }
    };
    ProjectShareComponent.prototype.formBuild = function () {
        var _this = this;
        this.projectShareForm = this.formBuilder.group({
            ProjectId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.projectId),
            ProjectNationalityCompositionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            workFlowId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.workFlowId),
            Nationality: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.checkNationality.bind(this)]),
            Qty: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            SharePercent: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100), this.validateTotal.bind(this)]),
            Description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2))
        });
        this.projectShareForm.valueChanges.subscribe(function (data) {
            _this.formErrors = _this.formService.validateForm(_this.projectShareForm, _this.formErrors, true);
        });
    };
    ProjectShareComponent.prototype.deleteShare = function (index, id) {
        var _this = this;
        this.nationalityCompositionService.delete(id)
            .subscribe(function () {
            _this.notification('Deleted');
            _this.nationalityCompositionData.splice(index, 1);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.nationalityCompositionData);
        });
    };
    ProjectShareComponent.prototype.getAllNation = function () {
        var _this = this;
        this.addressService.getNationality(this.currentLang)
            .subscribe(function (result) {
            console.log(result);
            _this.nationList = result;
        });
    };
    ProjectShareComponent.prototype.onClear = function () {
        this.editMode = false;
        this.projectShareForm.reset();
        this.projectShareForm.patchValue({
            ProjectId: this.projectId
        });
        this.projectShareForm.patchValue({
            workFlowId: this.workFlowId
        });
    };
    ProjectShareComponent.prototype.ngOnDestroy = function () {
        // this.subscription.unsubscribe();
    };
    ProjectShareComponent.prototype.notification = function (message) {
        this.toastr.success(" Succesfully " + message + " Data.!", 'Success');
        this.loading = false;
        this.snackbar.open("Succesfully " + message + " Data.!", 'Close', {
            duration: 3000,
        });
    };
    ProjectShareComponent.prototype.onEditShare = function (index, id) {
        this.editMode = true;
        this.ProjectNationalityCompositionId = id;
        this.shareEditIndex = index;
        this.productShare = this.nationalityCompositionData[index];
        this.projectShareForm.patchValue(this.productShare);
    };
    ProjectShareComponent.prototype.checkNationality = function (input) {
        if (typeof (this.nationalityCompositionData) !== 'undefined' && !this.editMode) {
            for (var _i = 0, _a = this.nationalityCompositionData; _i < _a.length; _i++) {
                var nation = _a[_i];
                if (input.value === nation.Nationality) {
                    return { value: true };
                }
            }
        }
        return null;
    };
    ProjectShareComponent.prototype.validateTotal = function (input) {
        var total = 0;
        if (typeof (this.nationalityCompositionData) !== 'undefined') {
            for (var _i = 0, _a = this.nationalityCompositionData; _i < _a.length; _i++) {
                var nation = _a[_i];
                total = total + nation.SharePercent + input.value;
            }
            if (total > 100) {
                return { value: true };
            }
        }
        return null;
    };
    ProjectShareComponent.prototype.getInvestorType = function () {
        var _this = this;
        this.invService.getInvestor(this.InvestorId)
            .subscribe(function (result) {
            _this.InvestorDetial = result;
            if (result.LegalStatus === 1) {
                _this.isSol = true;
            }
            else {
                _this.isSol = false;
            }
            if (!_this.isSol && _this.projectId < 1) {
                setTimeout(function () { return _this.dataSharing.currentIndex.next(7); }, 0);
            }
        });
    };
    ProjectShareComponent.prototype.ngAfterContentChecked = function () {
        // this.projectShareForm.patchValue({
        //   ProjectId: localStorage.getItem('ProjectId')
        // });
        // this.projectShareForm.patchValue({
        //   workFlowId: localStorage.getItem('workFlowId')
        // });
    };
    ProjectShareComponent.prototype.next = function () {
        this.dataSharing.steeperIndex.next(6);
    };
    ProjectShareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-share',
            template: __webpack_require__(/*! ./project-share.component.html */ "./src/app/components/project-profile/project-share/project-share.component.html"),
            providers: [_custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_14__["ConfigurationService"]],
            styles: [__webpack_require__(/*! ./project-share.component.css */ "./src/app/components/project-profile/project-share/project-share.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"],
            _investor_investor_service__WEBPACK_IMPORTED_MODULE_13__["InvestorService"],
            _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_12__["ProjectProfileService"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_9__["ErrorMessage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_6__["DataSharingService"],
            _custor_validation_custom_form__WEBPACK_IMPORTED_MODULE_10__["FormService"],
            _Services_Address_address_service__WEBPACK_IMPORTED_MODULE_5__["AddressService"],
            _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_14__["ConfigurationService"],
            _Services_project_nationality_composition_service__WEBPACK_IMPORTED_MODULE_3__["ProjectNationalityCompositionService"]])
    ], ProjectShareComponent);
    return ProjectShareComponent;
}());



/***/ }),

/***/ "./src/app/components/project-profile/project-share/share-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/project-profile/project-share/share-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ShareRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareRoutingModule", function() { return ShareRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_share_list_project_share_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-share-list/project-share-list.component */ "./src/app/components/project-profile/project-share/project-share-list/project-share-list.component.ts");
/* harmony import */ var _project_share_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-share.component */ "./src/app/components/project-profile/project-share/project-share.component.ts");





var shareRoutes = [
    { path: '', component: _project_share_list_project_share_list_component__WEBPACK_IMPORTED_MODULE_3__["ProjectShareListComponent"] },
    { path: ':id', component: _project_share_component__WEBPACK_IMPORTED_MODULE_4__["ProjectShareComponent"] }
];
var ShareRoutingModule = /** @class */ (function () {
    function ShareRoutingModule() {
    }
    ShareRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(shareRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ShareRoutingModule);
    return ShareRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~components-project-profile-project-module~components-project-profile-project-share-Share-mod~1fb215b9.js.map