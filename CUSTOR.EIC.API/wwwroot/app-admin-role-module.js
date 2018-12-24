(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-admin-role-module"],{

/***/ "./src/app/admin/role-routing.module.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/role-routing.module.ts ***!
  \**********************************************/
/*! exports provided: RoleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleRoutingModule", function() { return RoleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _roles_role_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roles/role-list.component */ "./src/app/admin/roles/role-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var route = [
    { path: '', component: _roles_role_list_component__WEBPACK_IMPORTED_MODULE_2__["RoleListComponent"] }
];
var RoleRoutingModule = /** @class */ (function () {
    function RoleRoutingModule() {
    }
    RoleRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RoleRoutingModule);
    return RoleRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/role.module.ts":
/*!**************************************!*\
  !*** ./src/app/admin/role.module.ts ***!
  \**************************************/
/*! exports provided: RoleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleModule", function() { return RoleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _role_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./role-routing.module */ "./src/app/admin/role-routing.module.ts");
/* harmony import */ var _roles_role_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./roles/role-editor.component */ "./src/app/admin/roles/role-editor.component.ts");
/* harmony import */ var _roles_role_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./roles/role-list.component */ "./src/app/admin/roles/role-list.component.ts");
/* harmony import */ var _roles_edit_role_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roles/edit-role-dialog.component */ "./src/app/admin/roles/edit-role-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RoleModule = /** @class */ (function () {
    function RoleModule() {
    }
    RoleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _role_routing_module__WEBPACK_IMPORTED_MODULE_3__["RoleRoutingModule"]
            ],
            declarations: [
                _roles_role_list_component__WEBPACK_IMPORTED_MODULE_5__["RoleListComponent"],
                _roles_edit_role_dialog_component__WEBPACK_IMPORTED_MODULE_6__["EditRoleDialogComponent"],
                _roles_role_editor_component__WEBPACK_IMPORTED_MODULE_4__["RoleEditorComponent"],
            ],
            entryComponents: [
                _roles_edit_role_dialog_component__WEBPACK_IMPORTED_MODULE_6__["EditRoleDialogComponent"]
            ]
        })
    ], RoleModule);
    return RoleModule;
}());



/***/ }),

/***/ "./src/app/admin/roles/edit-role-dialog.component.html":
/*!*************************************************************!*\
  !*** ./src/app/admin/roles/edit-role-dialog.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\r\n  <mat-toolbar color=\"primary\" mat-dialog-title>\r\n    <!-- Test -->\r\n    <h1 *ngIf=\"!canManageRoles\">{{'roles.management.RoleDetails' | translate:roleName}}</h1>\r\n    <h1 *ngIf=\"canManageRoles\">{{roleName ? ('roles.management.EditRole' | translate:roleName) :\r\n      ('roles.management.NewRole' | translate)}}</h1>\r\n  </mat-toolbar>\r\n  <br>\r\n  <div style=\"padding: 10px\">\r\n    <div>\r\n      <role-editor #roleEditor [role]=\"data.role\" [allPermissions]=\"data.allPermissions\"></role-editor>\r\n      <div mat-dialog-actions style=\"text-align: center; margin-left: 30%\">\r\n        <button *ngIf=\"canManageRoles\" mat-raised-button (click)=\"roleEditor.save();\" color=\"primary\">Save</button>\r\n        <button *ngIf=\"canManageRoles\" mat-raised-button (click)=\"cancel()\" color=\"warn\">Cancel</button>\r\n        <button *ngIf=\"!canManageRoles\" mat-raised-button (click)=\"cancel()\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/roles/edit-role-dialog.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/admin/roles/edit-role-dialog.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar {\n  margin: -24px;\n  margin-bottom: 0;\n  width: auto; }\n\n.mat-dialog-content {\n  margin: 0 -24px;\n  padding: 0 !important;\n  height: 70%; }\n\n.mat-toolbar-row, .mat-toolbar-single-row {\n  height: 40px !important; }\n\n.mat-dialog-container {\n  padding: 3px !important; }\n"

/***/ }),

/***/ "./src/app/admin/roles/edit-role-dialog.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/roles/edit-role-dialog.component.ts ***!
  \***********************************************************/
/*! exports provided: EditRoleDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRoleDialogComponent", function() { return EditRoleDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _role_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role-editor.component */ "./src/app/admin/roles/role-editor.component.ts");
/* harmony import */ var _model_security_permission_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/security/permission.model */ "./src/app/model/security/permission.model.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
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





var EditRoleDialogComponent = /** @class */ (function () {
    function EditRoleDialogComponent(dialogRef, data, accountService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.accountService = accountService;
    }
    Object.defineProperty(EditRoleDialogComponent.prototype, "roleName", {
        get: function () {
            return this.data.role ? { name: this.data.role.Name } : null;
        },
        enumerable: true,
        configurable: true
    });
    EditRoleDialogComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.roleEditor.roleSaved$.subscribe(function (role) { return _this.dialogRef.close(role); });
    };
    EditRoleDialogComponent.prototype.cancel = function () {
        this.dialogRef.close(null);
    };
    Object.defineProperty(EditRoleDialogComponent.prototype, "canManageRoles", {
        get: function () {
            return this.accountService.userHasPermission(_model_security_permission_model__WEBPACK_IMPORTED_MODULE_3__["Permission"].manageRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_role_editor_component__WEBPACK_IMPORTED_MODULE_2__["RoleEditorComponent"]),
        __metadata("design:type", _role_editor_component__WEBPACK_IMPORTED_MODULE_2__["RoleEditorComponent"])
    ], EditRoleDialogComponent.prototype, "roleEditor", void 0);
    EditRoleDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-user-dialog',
            template: __webpack_require__(/*! ./edit-role-dialog.component.html */ "./src/app/admin/roles/edit-role-dialog.component.html"),
            styles: [__webpack_require__(/*! ./edit-role-dialog.component.scss */ "./src/app/admin/roles/edit-role-dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]])
    ], EditRoleDialogComponent);
    return EditRoleDialogComponent;
}());



/***/ }),

/***/ "./src/app/admin/roles/role-editor.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/roles/role-editor.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <form #form=\"ngForm\" [formGroup]=\"roleForm\" novalidate (ngSubmit)=\"save()\" fxLayout=\"column\" fxLayoutGap=\"1em\"\r\n        autocomplete=\"off\">\r\n\r\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"1em\" class=\"mat-elevation-z8\" style=\"padding:20px\">\r\n\r\n      <div>\r\n        <!--<h4>Role Data</h4>-->\r\n        <!--<mat-divider></mat-divider>-->\r\n        <br>\r\n        <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n          <mat-form-field fxFlex style=\"width: 100px\">\r\n            <mat-label>{{'roles.editor.Name' | translate}}</mat-label>\r\n            <input matInput formControlName=\"name\" [readonly]=\"!canManageRoles\"/>\r\n            <mat-error *ngIf=\"name.hasError('required')\">\r\n              {{'roles.editor.RoleNameRequired' | translate}}\r\n            </mat-error>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlex style=\"width: 500px\">\r\n            <mat-label>{{'roles.editor.Description' | translate}}</mat-label>\r\n            <input matInput formControlName=\"description\" [readonly]=\"!canManageRoles\"/>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"mat-elevation-z8\" style=\" overflow:scroll; height: 300px\">\r\n      <h4>Select Permissions</h4>\r\n      <mat-divider></mat-divider>\r\n      <br>\r\n      <mat-expansion-panel *ngFor=\"let permissionGroup of allPermissions | groupBy: 'GroupName'\"\r\n                           class=\"mat-elevation-z6\">\r\n        <mat-expansion-panel-header style=\"background-color:whitesmoke\">\r\n          <mat-panel-title>\r\n            {{permissionGroup.key}}\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <mat-slide-toggle [disabled]=\"!canManageRoles\" *ngFor=\"let permission of permissionGroup.value\"\r\n                          matTooltip=\"{{permission.Description}}\"\r\n                          (click)=\"$event.stopPropagation()\"\r\n                          (change)=\"$event ? selectedPermissions.toggle(permission) : null\"\r\n                          [checked]=\"selectedPermissions.isSelected(permission)\">\r\n          {{permission.Name}}\r\n        </mat-slide-toggle>\r\n      </mat-expansion-panel>\r\n    </div>\r\n    <br/>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/roles/role-editor.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/roles/role-editor.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.hr-inner {\n  border-color: green !important; }\n\n.hr {\n  margin: 10px 0; }\n\n.mat-dialog-container {\n  height: unset !important; }\n"

/***/ }),

/***/ "./src/app/admin/roles/role-editor.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/roles/role-editor.component.ts ***!
  \******************************************************/
/*! exports provided: RoleEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleEditorComponent", function() { return RoleEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _model_security_permission_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/security/permission.model */ "./src/app/model/security/permission.model.ts");
/* harmony import */ var _model_security_role_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/security/role.model */ "./src/app/model/security/role.model.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RoleEditorComponent = /** @class */ (function () {
    function RoleEditorComponent(alertService, accountService, formBuilder) {
        this.alertService = alertService;
        this.accountService = accountService;
        this.formBuilder = formBuilder;
        this.isNewRole = false;
        this.onRoleSaved = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.role = new _model_security_role_model__WEBPACK_IMPORTED_MODULE_5__["Role"]();
        this.allPermissions = [];
        this.roleSaved$ = this.onRoleSaved.asObservable();
        this.sites = [];
        this.buildForm();
        this.selectedPermissions = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](true, []);
        // alert ( this.selectedPermissions.hasValue);
        // // console.log ("has-" + this.selectedPermissions.hasValue);
    }
    Object.defineProperty(RoleEditorComponent.prototype, "name", {
        get: function () {
            return this.roleForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    RoleEditorComponent.prototype.ngOnChanges = function () {
        if (this.role) {
            this.isNewRole = false;
        }
        else {
            this.isNewRole = true;
            this.role = new _model_security_role_model__WEBPACK_IMPORTED_MODULE_5__["Role"]();
        }
        this.resetForm();
    };
    RoleEditorComponent.prototype.save = function () {
        var _this = this;
        if (!this.form.submitted) {
            this.form.onSubmit(null);
            return;
        }
        if (!this.roleForm.valid) {
            return;
        }
        this.isSaving = true;
        var editedRole = this.getEditedRole();
        if (this.isNewRole) {
            this.accountService.newRole(editedRole).subscribe(function (role) { return _this.saveSuccessHelper(role); }, function (error) { return _this.saveFailedHelper(error); });
        }
        else {
            this.accountService.updateRole(editedRole).subscribe(function (response) { return _this.saveSuccessHelper(editedRole); }, function (error) { return _this.saveFailedHelper(error); });
        }
    };
    RoleEditorComponent.prototype.getEditedRole = function () {
        var formModel = this.roleForm.value;
        return {
            Id: this.role.Id,
            Name: formModel.name,
            Description: formModel.description,
            Permissions: this.selectedPermissions.selected,
            UsersCount: 0
        };
    };
    RoleEditorComponent.prototype.saveSuccessHelper = function (role) {
        var _this = this;
        this.isSaving = false;
        if (this.isNewRole) {
            this.alertService.success("Role \"" + role.Name + "\" was created successfully", 'Success');
        }
        else {
            this.alertService.success("Changes to role \"" + role.Name + "\" was saved successfully", 'success');
        }
        if (!this.isNewRole) {
            if (this.accountService.currentUser.Roles.some(function (r) { return r === _this.role.Name; })) {
                this.refreshLoggedInUser();
            }
            role.UsersCount = this.role.UsersCount;
        }
        this.onRoleSaved.next(role);
    };
    RoleEditorComponent.prototype.refreshLoggedInUser = function () {
        var _this = this;
        this.accountService.refreshLoggedInUser()
            .subscribe(function (user) {
        }, function (error) {
            _this.alertService.error('An error occured whilst refreshing logged in user information from the server', 'Refresh failed');
        });
    };
    RoleEditorComponent.prototype.saveFailedHelper = function (error) {
        this.isSaving = false;
        this.alertService.error('The below errors occured whilst saving your changes:', 'Save Error');
        this.alertService.error(null, error);
    };
    RoleEditorComponent.prototype.cancel = function () {
        this.resetForm();
    };
    RoleEditorComponent.prototype.selectAll = function () {
        (_a = this.selectedPermissions).select.apply(_a, this.allPermissions);
        var _a;
    };
    RoleEditorComponent.prototype.toggleGroup = function (groupName) {
        var firstMemberValue;
        // tslint:disable-next-line:no-unused-expression
        this.selectedPermissions.selected; // ???? to-do
        var permissions = this.allPermissions
            .filter(function (p) { return p.GroupName === groupName; });
        if (permissions.length) {
            if (this.selectedPermissions.isSelected(permissions[0])) {
                (_a = this.selectedPermissions).deselect.apply(_a, permissions);
            }
            else {
                (_b = this.selectedPermissions).select.apply(_b, permissions);
            }
        }
        var _a, _b;
    };
    RoleEditorComponent.prototype.buildForm = function () {
        this.roleForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ''
        });
    };
    RoleEditorComponent.prototype.resetForm = function (replace) {
        var _this = this;
        if (replace === void 0) { replace = false; }
        this.roleForm.reset({
            name: this.role.Name || '',
            description: this.role.Description || ''
        });
        var selectePermissions = this.role.Permissions
            ? this.allPermissions.filter(function (x) { return _this.role.Permissions.find(function (y) { return y.Value === x.Value; }); })
            : [];
        this.selectedPermissions = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](true, selectePermissions);
        // alert (this.selectedPermissions.selected.length);
    };
    Object.defineProperty(RoleEditorComponent.prototype, "canManageRoles", {
        get: function () {
            return this.accountService.userHasPermission(_model_security_permission_model__WEBPACK_IMPORTED_MODULE_4__["Permission"].manageRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], RoleEditorComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_security_role_model__WEBPACK_IMPORTED_MODULE_5__["Role"])
    ], RoleEditorComponent.prototype, "role", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], RoleEditorComponent.prototype, "allPermissions", void 0);
    RoleEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'role-editor',
            template: __webpack_require__(/*! ./role-editor.component.html */ "./src/app/admin/roles/role-editor.component.html"),
            styles: [__webpack_require__(/*! ./role-editor.component.scss */ "./src/app/admin/roles/role-editor.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], RoleEditorComponent);
    return RoleEditorComponent;
}());



/***/ }),

/***/ "./src/app/admin/roles/role-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/roles/role-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header title=\"Roles\" icon=\"assignment_ind\"></app-page-header>\r\n<div [@fadeInOut] class=\"page-content\">\r\n\r\n  <div class=\"search-box\">\r\n    <mat-form-field>\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\"\r\n             placeholder=\"{{'roles.management.Search' | translate}}\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div class=\"example-container mat-elevation-z8\">\r\n    <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>\r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n      <ng-container matColumnDef=\"roleName\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> {{'roles.management.Name' | translate}}</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let role\"> {{role.Name}}</mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"description\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> {{'roles.management.Description' | translate}}\r\n        </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let role\"> {{role.Description}}</mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"users\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"60px\"> {{'roles.management.Users' | translate}}\r\n        </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let role\" fxFlex=\"60px\"> {{role.UsersCount}}</mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"actions\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"140px\">\r\n          <button *ngIf=\"canManageRoles\" mat-button color=\"primary\"\r\n                  matTooltip=\"{{'roles.management.NewRole' | translate}}\" (click)=\"editRole()\">\r\n            <mat-icon class=\"mat-button-icon\">add</mat-icon>\r\n            {{'roles.management.NewRole' | translate}}\r\n          </button>\r\n        </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let role\" fxFlex=\"140px\">\r\n          <button *ngIf=\"!canManageRoles\" mat-icon-button matTooltip=\"{{'roles.management.Details' | translate}}\"\r\n                  (click)=\"editRole(role)\">\r\n            <mat-icon>more_vert</mat-icon>\r\n          </button>\r\n          <button *ngIf=\"canManageRoles\" mat-icon-button matTooltip=\"{{'roles.management.Edit' | translate}}\"\r\n                  (click)=\"editRole(role)\">\r\n            <mat-icon>edit</mat-icon>\r\n          </button>\r\n          <button *ngIf=\"canManageRoles\" mat-icon-button matTooltip=\"{{'roles.management.Delete' | translate}}\"\r\n                  (click)=\"confirmDelete(role)\">\r\n            <mat-icon color=\"warn\">delete</mat-icon>\r\n          </button>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/roles/role-list.component.scss":
/*!******************************************************!*\
  !*** ./src/app/admin/roles/role-list.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-box {\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex; }\n\n.search-box .mat-form-field {\n  padding: 0 2em; }\n"

/***/ }),

/***/ "./src/app/admin/roles/role-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/roles/role-list.component.ts ***!
  \****************************************************/
/*! exports provided: RoleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleListComponent", function() { return RoleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _edit_role_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-role-dialog.component */ "./src/app/admin/roles/edit-role-dialog.component.ts");
/* harmony import */ var _custor_services_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@custor/services/animations */ "./src/@custor/services/animations.ts");
/* harmony import */ var _model_security_permission_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/security/permission.model */ "./src/app/model/security/permission.model.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _custor_services_translation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@custor/services/translation.service */ "./src/@custor/services/translation.service.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@custor/helpers/utilities */ "./src/@custor/helpers/utilities.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RoleListComponent = /** @class */ (function () {
    function RoleListComponent(alertService, translationService, accountService, snackBar, dialog, router) {
        this.alertService = alertService;
        this.translationService = translationService;
        this.accountService = accountService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.router = router;
        this.displayedColumns = ['roleName', 'description', 'users', 'actions'];
        this.allPermissions = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    Object.defineProperty(RoleListComponent.prototype, "canManageRoles", {
        get: function () {
            return this.accountService.userHasPermission(_model_security_permission_model__WEBPACK_IMPORTED_MODULE_4__["Permission"].manageRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoleListComponent.prototype, "canViewRoles", {
        get: function () {
            return this.accountService.userHasPermission(_model_security_permission_model__WEBPACK_IMPORTED_MODULE_4__["Permission"].viewRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoleListComponent.prototype, "canManageAdmins", {
        get: function () {
            return this.accountService.userHasPermission(_model_security_permission_model__WEBPACK_IMPORTED_MODULE_4__["Permission"].manageSiteAdministratorsPermission);
        },
        enumerable: true,
        configurable: true
    });
    RoleListComponent.prototype.ngOnInit = function () {
        this.checkAuthorization();
        this.loadData();
    };
    RoleListComponent.prototype.checkAuthorization = function () {
        if (!this.canManageRoles) {
            // this.alertService.error('You are not allowed to access this page');
            this.router.navigate(['denied']);
        }
    };
    RoleListComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    RoleListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue;
    };
    RoleListComponent.prototype.refresh = function () {
        // Causes the filter to refresh there by updating with recently added data.
        this.applyFilter(this.dataSource.filter);
    };
    RoleListComponent.prototype.updateRoles = function (role) {
        if (this.sourceRole) {
            Object.assign(this.sourceRole, role);
            this.sourceRole = null;
        }
        else {
            this.dataSource.data.push(role);
        }
        this.refresh();
    };
    RoleListComponent.prototype.loadData = function () {
        var _this = this;
        this.loadingIndicator = true;
        this.accountService.getRolesAndPermissions()
            .subscribe(function (results) {
            _this.loadingIndicator = false;
            _this.dataSource.data = results[0];
            _this.allPermissions = results[1];
        }, function (error) {
            _this.loadingIndicator = false;
            // console.log(Utilities.getHttpResponseMessage(error));
            _this.alertService.error("Error - \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_8__["Utilities"].getHttpResponseMessage(error) + "\"", 'Load Error');
        });
    };
    RoleListComponent.prototype.editRole = function (role) {
        var _this = this;
        this.sourceRole = role;
        var dialogRef = this.dialog.open(_edit_role_dialog_component__WEBPACK_IMPORTED_MODULE_2__["EditRoleDialogComponent"], {
            panelClass: 'mat-dialog-md',
            data: { role: role, allPermissions: this.allPermissions }
        });
        dialogRef.afterClosed().subscribe(function (role) {
            if (role && _this.canManageRoles) {
                _this.updateRoles(role);
            }
        });
    };
    RoleListComponent.prototype.confirmDelete = function (role) {
        var _this = this;
        this.snackBar.open("Delete " + role.Name + " role?", 'DELETE', { duration: 5000 })
            .onAction().subscribe(function () {
            _this.loadingIndicator = true;
            _this.accountService.deleteRole(role)
                .subscribe(function (results) {
                _this.loadingIndicator = false;
                _this.dataSource.data = _this.dataSource.data.filter(function (item) { return item !== role; });
            }, function (error) {
                _this.loadingIndicator = false;
                // tslint:disable-next-line:max-line-length
                _this.alertService.error("An error occured whilst deleting the role.\r\nError: \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_8__["Utilities"].getHttpResponseMessage(error) + "\"", 'Delete Error');
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], RoleListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], RoleListComponent.prototype, "sort", void 0);
    RoleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-role-list',
            template: __webpack_require__(/*! ./role-list.component.html */ "./src/app/admin/roles/role-list.component.html"),
            styles: [__webpack_require__(/*! ./role-list.component.scss */ "./src/app/admin/roles/role-list.component.scss")],
            animations: [_custor_services_animations__WEBPACK_IMPORTED_MODULE_3__["fadeInOut"]]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _custor_services_translation_service__WEBPACK_IMPORTED_MODULE_6__["AppTranslationService"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], RoleListComponent);
    return RoleListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-admin-role-module.js.map