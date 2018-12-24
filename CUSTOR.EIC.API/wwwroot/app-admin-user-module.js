(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-admin-user-module"],{

/***/ "./src/app/admin/user-routing.module.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/user-routing.module.ts ***!
  \**********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_user_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users/user-list.component */ "./src/app/admin/users/user-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var route = [
    { path: '', component: _users_user_list_component__WEBPACK_IMPORTED_MODULE_2__["UserListComponent"] }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route)],
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/user.module.ts":
/*!**************************************!*\
  !*** ./src/app/admin/user.module.ts ***!
  \**************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _users_user_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users/user-list.component */ "./src/app/admin/users/user-list.component.ts");
/* harmony import */ var _users_edit_user_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/edit-user-dialog.component */ "./src/app/admin/users/edit-user-dialog.component.ts");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/admin/user-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserRoutingModule"]
            ],
            declarations: [
                _users_user_list_component__WEBPACK_IMPORTED_MODULE_2__["UserListComponent"],
                _users_edit_user_dialog_component__WEBPACK_IMPORTED_MODULE_3__["EditUserDialogComponent"],
            ],
            entryComponents: [
                _users_edit_user_dialog_component__WEBPACK_IMPORTED_MODULE_3__["EditUserDialogComponent"],
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/admin/users/edit-user-dialog.component.html":
/*!*************************************************************!*\
  !*** ./src/app/admin/users/edit-user-dialog.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <mat-toolbar color=\"primary\" mat-dialog-title>\r\n            <h1 mat-dialog-title>{{userName ? ('users.management.EditUser' | translate:userName) : ('users.management.NewUser' | translate)}}</h1>\r\n    </mat-toolbar>\r\n    <div>\r\n        <div mat-dialog-content>\r\n            <user-editor [user]=\"data.user\" [roles]=\"data.roles\" isEditMode=\"true\"></user-editor>\r\n        </div>\r\n        <div mat-dialog-actions style=\"text-align: center; margin-left: 30%\">\r\n            <button mat-raised-button (click)=\"editUser.save();\" color=\"primary\">Save</button>\r\n            <button mat-raised-button (click)=\"cancel()\" color=\"warn\">Cancel</button>\r\n        </div>\r\n    </div>\r\n </div> "

/***/ }),

/***/ "./src/app/admin/users/edit-user-dialog.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/admin/users/edit-user-dialog.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar {\n  margin: -24px;\n  margin-bottom: 0;\n  width: auto; }\n\n.mat-dialog-content {\n  margin: 0 -24px;\n  padding: 0 !important; }\n\n.mat-toolbar-row, .mat-toolbar-single-row {\n  height: 40px !important; }\n"

/***/ }),

/***/ "./src/app/admin/users/edit-user-dialog.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/users/edit-user-dialog.component.ts ***!
  \***********************************************************/
/*! exports provided: EditUserDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserDialogComponent", function() { return EditUserDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _user_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-editor.component */ "./src/app/admin/users/user-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EditUserDialogComponent = /** @class */ (function () {
    function EditUserDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    Object.defineProperty(EditUserDialogComponent.prototype, "userName", {
        get: function () {
            return this.data.user ? { name: this.data.user.UserName } : null;
        },
        enumerable: true,
        configurable: true
    });
    EditUserDialogComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.editUser.userSaved$.subscribe(function (user) { return _this.dialogRef.close(user); });
    };
    EditUserDialogComponent.prototype.cancel = function () {
        this.dialogRef.close(null);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_user_editor_component__WEBPACK_IMPORTED_MODULE_2__["UserEditorComponent"]),
        __metadata("design:type", _user_editor_component__WEBPACK_IMPORTED_MODULE_2__["UserEditorComponent"])
    ], EditUserDialogComponent.prototype, "editUser", void 0);
    EditUserDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-user-dialog',
            template: __webpack_require__(/*! ./edit-user-dialog.component.html */ "./src/app/admin/users/edit-user-dialog.component.html"),
            styles: [__webpack_require__(/*! ./edit-user-dialog.component.scss */ "./src/app/admin/users/edit-user-dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], EditUserDialogComponent);
    return EditUserDialogComponent;
}());



/***/ }),

/***/ "./src/app/admin/users/user-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/users/user-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header title=\"Users\" icon=\"people\"></app-page-header>\r\n<div [@fadeInOut] class=\"page-content\">\r\n\r\n    <div class=\"search-box\">\r\n        <mat-form-field>\r\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"{{'users.management.Search' | translate}}\">\r\n        </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"mat-elevation-z8\">\r\n        <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>\r\n        <mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n            <ng-container matColumnDef=\"tin\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> {{'users.management.TIN' | translate}} </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\"> {{row.Tin}}</mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"userName\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> {{'users.management.UserName' | translate}} </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\"> {{row.UserName}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"fullName\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> {{'users.management.FullName' | translate}} </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\"> {{row.FullName}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"email\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> {{'users.management.Email' | translate}} </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\"> {{row.Email}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"canManageUsers\" matColumnDef=\"actions\">\r\n                <mat-header-cell *matHeaderCellDef fxFlex=\"140px\">\r\n                    <button *ngIf=\"canAssignRoles\" mat-button color=\"primary\" matTooltip=\"{{'users.management.NewUser' | translate}}\" (click)=\"editUser()\">\r\n                        <mat-icon class=\"mat-button-icon\">person_add</mat-icon>{{'users.management.NewUser' | translate}}\r\n                    </button>\r\n                </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let user\" fxFlex=\"140px\">\r\n                    <button mat-icon-button matTooltip=\"{{'users.management.Edit' | translate}}\" (click)=\"editUser(user)\">\r\n                        <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button matTooltip=\"{{'users.management.Delete' | translate}}\" (click)=\"confirmDelete(user)\">\r\n                        <mat-icon color=\"warn\">delete</mat-icon>\r\n                    </button>\r\n                </mat-cell>\r\n            </ng-container>\r\n\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n            </mat-row>\r\n        </mat-table>\r\n\r\n        <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/users/user-list.component.scss":
/*!******************************************************!*\
  !*** ./src/app/admin/users/user-list.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-box {\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex; }\n\n.search-box .mat-form-field {\n  padding: 0 2em; }\n"

/***/ }),

/***/ "./src/app/admin/users/user-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/users/user-list.component.ts ***!
  \****************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _edit_user_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-user-dialog.component */ "./src/app/admin/users/edit-user-dialog.component.ts");
/* harmony import */ var _custor_services_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@custor/services/animations */ "./src/@custor/services/animations.ts");
/* harmony import */ var _model_security_role_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/security/role.model */ "./src/app/model/security/role.model.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _custor_services_translation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@custor/services/translation.service */ "./src/@custor/services/translation.service.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@custor/helpers/utilities */ "./src/@custor/helpers/utilities.ts");
/* harmony import */ var _model_security_permission_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../model/security/permission.model */ "./src/app/model/security/permission.model.ts");
/* harmony import */ var _custor_services_security_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../@custor/services/security/auth.service */ "./src/@custor/services/security/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var UserListComponent = /** @class */ (function () {
    function UserListComponent(alertService, translationService, accountService, snackBar, authService, dialog, router) {
        this.alertService = alertService;
        this.translationService = translationService;
        this.accountService = accountService;
        this.snackBar = snackBar;
        this.authService = authService;
        this.dialog = dialog;
        this.router = router;
        this.displayedColumns = ['tin', 'userName', 'fullName', 'email'];
        this.allRoles = [];
        if (this.canManageUsers) {
            this.displayedColumns.push('actions');
        }
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    UserListComponent.prototype.ngOnInit = function () {
        if (!this.canManageUsers) {
            this.router.navigate(['denied']);
        }
        this.loadData();
    };
    UserListComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    UserListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue;
    };
    UserListComponent.prototype.refresh = function () {
        // Causes the filter to refresh there by updating with recently added data.
        this.applyFilter(this.dataSource.filter);
    };
    UserListComponent.prototype.updateUsers = function (user) {
        if (this.sourceUser) {
            Object.assign(this.sourceUser, user);
            this.alertService.info("Changes to user \"" + user.UserName + "\" was saved successfully", 'Success');
            this.sourceUser = null;
        }
        else {
            this.dataSource.data.push(user);
            this.refresh();
            this.alertService.info("User \"" + user.UserName + "\" was created successfully", 'Success');
        }
    };
    UserListComponent.prototype.loadData = function () {
        var _this = this;
        this.loadingIndicator = true;
        if (this.canAssignRoles) {
            this.accountService.getUsersAndRoles().subscribe(function (results) { return _this.onDataLoadSuccessful(results[0], results[1]); }, function (error) { return _this.onDataLoadFailed(error); });
        }
        else {
            this.accountService.getUsers().subscribe(function (users) { return _this.onDataLoadSuccessful(users, _this.accountService.currentUser.Roles.map(function (r) { return new _model_security_role_model__WEBPACK_IMPORTED_MODULE_4__["Role"](r); })); }, function (error) { return _this.onDataLoadFailed(error); });
        }
    };
    UserListComponent.prototype.onDataLoadSuccessful = function (users, roles) {
        var _this = this;
        this.loadingIndicator = false;
        // console.log(users);
        var ADMIN_ROLE = 'Site Administrators'; // check case sensitivity
        if (!this.canManageAdmins) {
            users = users.filter(function (item) {
                return item.SiteCode === _this.currentUser.SiteCode;
            });
        }
        else {
            users = users.filter(function (item) {
                return (item.Roles.includes(ADMIN_ROLE));
            });
        }
        this.dataSource.data = users;
        // this.dataSource.data.filter=th
        this.allRoles = roles;
    };
    UserListComponent.prototype.onDataLoadFailed = function (error) {
        this.loadingIndicator = false;
        this.alertService.error("Unable to retrieve users from the server.\r\nErrors: \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_8__["Utilities"].getHttpResponseMessage(error) + "\"", 'Load Error');
    };
    UserListComponent.prototype.editUser = function (user) {
        var _this = this;
        this.sourceUser = user;
        var dialogRef = this.dialog.open(_edit_user_dialog_component__WEBPACK_IMPORTED_MODULE_2__["EditUserDialogComponent"], {
            panelClass: 'mat-dialog-lg',
            data: { user: user, roles: this.allRoles.slice() }
        });
        dialogRef.afterClosed().subscribe(function (user) {
            if (user) {
                _this.updateUsers(user);
            }
        });
    };
    UserListComponent.prototype.confirmDelete = function (user) {
        var _this = this;
        this.snackBar.open("Delete " + user.UserName + "?", 'DELETE', { duration: 5000 })
            .onAction().subscribe(function () {
            _this.loadingIndicator = true;
            _this.accountService.deleteUser(user)
                .subscribe(function (results) {
                _this.loadingIndicator = false;
                _this.dataSource.data = _this.dataSource.data.filter(function (item) { return item !== user; });
            }, function (error) {
                _this.loadingIndicator = false;
                // tslint:disable-next-line:max-line-length
                _this.alertService.error("An error occured whilst deleting the user.\r\nError: \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_8__["Utilities"].getHttpResponseMessage(error) + "\"", 'Delete Error');
            });
        });
    };
    Object.defineProperty(UserListComponent.prototype, "canManageAdmins", {
        get: function () {
            return this.accountService.userHasPermission(_model_security_permission_model__WEBPACK_IMPORTED_MODULE_9__["Permission"].manageSiteAdministratorsPermission);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserListComponent.prototype, "canManageUsers", {
        get: function () {
            return this.accountService.userHasPermission(_model_security_permission_model__WEBPACK_IMPORTED_MODULE_9__["Permission"].manageUsersPermission);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserListComponent.prototype, "canViewRoles", {
        get: function () {
            return this.accountService.userHasPermission(_model_security_permission_model__WEBPACK_IMPORTED_MODULE_9__["Permission"].viewRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserListComponent.prototype, "canAssignRoles", {
        get: function () {
            return this.accountService.userHasPermission(_model_security_permission_model__WEBPACK_IMPORTED_MODULE_9__["Permission"].assignRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserListComponent.prototype, "currentUser", {
        get: function () {
            return this.authService.currentUser;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], UserListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], UserListComponent.prototype, "sort", void 0);
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/admin/users/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/admin/users/user-list.component.scss")],
            animations: [_custor_services_animations__WEBPACK_IMPORTED_MODULE_3__["fadeInOut"]]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _custor_services_translation_service__WEBPACK_IMPORTED_MODULE_6__["AppTranslationService"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _custor_services_security_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-admin-user-module.js.map