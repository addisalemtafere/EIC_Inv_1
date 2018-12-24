(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-auth-manage-password-manage-module"],{

/***/ "./src/app/components/auth/manage-password/manage-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/auth/manage-password/manage-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ManagePasswordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePasswordRoutingModule", function() { return ManagePasswordRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _manage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage.component */ "./src/app/components/auth/manage-password/manage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var route = [
    { path: '', component: _manage_component__WEBPACK_IMPORTED_MODULE_2__["ManagePasswordComponent"] }
];
var ManagePasswordRoutingModule = /** @class */ (function () {
    function ManagePasswordRoutingModule() {
    }
    ManagePasswordRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], ManagePasswordRoutingModule);
    return ManagePasswordRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/auth/manage-password/manage.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/auth/manage-password/manage.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\" style=\" margin:auto;width:500px;padding-top: 20px\">\r\n  <div style=\"margin: 30px;\">\r\n    <mat-toolbar color=\"primary\">\r\n      <mat-toolbar-row>\r\n        <span style=\"margin-top:9px; margin-right: 5px\"><mat-icon>lock</mat-icon></span>\r\n        <span>{{dialogTitle}}</span>\r\n        <span class=\"toolbar-spacer\"></span>\r\n        <div class=\"header-actions\">\r\n          <!-- <button mat-icon-button><mat-icon>more_vertical</mat-icon></button> -->\r\n        </div>\r\n      </mat-toolbar-row>\r\n    </mat-toolbar>\r\n    <mat-card>\r\n      <mat-card-header>\r\n        <!-- <div mat-card-avatar class=\"example-header-image\"></div>\r\n        <mat-card-title>Title1</mat-card-title>\r\n        <mat-card-subtitle>Title 2</mat-card-subtitle> -->\r\n      </mat-card-header>\r\n\r\n      <mat-card-content>\r\n        <form #form=\"ngForm\" [formGroup]=\"userProfileForm\" novalidate (ngSubmit)=\"save()\" fxLayout=\"column\"\r\n              fxLayoutGap=\"1em\" autocomplete=\"off\">\r\n\r\n          <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"1em\">\r\n            <mat-form-field fxFlex>\r\n              <mat-label>{{'users.editor.Email' | translate}}</mat-label>\r\n              <input matInput formControlName=\"email\" required/>\r\n              <mat-error *ngIf=\"email.hasError('required')\">\r\n                {{'users.editor.EmailRequired' | translate}}\r\n              </mat-error>\r\n              <mat-error *ngIf=\"!email.hasError('required') && email.hasError('email')\">\r\n                {{'users.editor.InvalidEmail' | translate}}\r\n              </mat-error>             \r\n            </mat-form-field>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"1em\">\r\n            <mat-form-field fxFlex>\r\n              <mat-label>{{'users.editor.UserName' | translate}}</mat-label>\r\n              <input matInput formControlName=\"userName\" autocomplete=\"off\" required/>\r\n              <mat-error *ngIf=\"userName.hasError('required')\">\r\n                {{'users.editor.UserNameRequired' | translate}}\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"1em\"> \r\n            <mat-form-field fxFlex *ngIf=\"showOldPassword\">\r\n              <mat-label>{{oldPasswordCaption}}</mat-label>\r\n              <input matInput type=\"password\" formControlName=\"oldPassword\" autocomplete=\"off\" />\r\n              <mat-error *ngIf=\"oldPassword.hasError('required')\">\r\n                Old Password is Required\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div> \r\n          <div formGroupName=\"password\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"1em\">\r\n\r\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"1em\">\r\n              <mat-form-field>\r\n                <mat-label>{{'users.editor.NewPassword' | translate}}</mat-label>\r\n                <input matInput type=\"password\" formControlName=\"newPassword\" autocomplete=\"off\" required/>\r\n                <mat-error *ngIf=\"newPassword.hasError('required')\">\r\n                  {{'users.editor.NewPasswordRequired' | translate}}\r\n                </mat-error>\r\n                <mat-error *ngIf=\"!newPassword.hasError('required') && newPassword.hasError('pattern')\">\r\n                  {{'users.editor.NewPasswordRules' | translate}}\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"1em\">\r\n\r\n              <mat-form-field fxFlex>\r\n                <mat-label>{{'users.editor.ConfirmPassword' | translate}}</mat-label>\r\n                <input matInput type=\"password\" formControlName=\"confirmPassword\" required/>\r\n                <mat-error *ngIf=\"confirmPassword.hasError('required')\">\r\n                  {{'users.editor.ConfirmationPasswordRequired' | translate}}\r\n                </mat-error>\r\n                <mat-error *ngIf=\"!confirmPassword.hasError('required') && confirmPassword.hasError('notEqual')\">\r\n                  Test\r\n                  {{'users.editor.PasswordMismatch' | translate}}\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n\r\n          <div>&nbsp;</div>\r\n        </form>\r\n      </mat-card-content>\r\n      <div style=\"text-align: center\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"save()\">{{actionCaption}}\r\n        </button>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/auth/manage-password/manage.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/auth/manage-password/manage.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/auth/manage-password/manage.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/auth/manage-password/manage.component.ts ***!
  \*********************************************************************/
/*! exports provided: ManagePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePasswordComponent", function() { return ManagePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _custor_services_translation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@custor/services/translation.service */ "./src/@custor/services/translation.service.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _model_security_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../model/security/user.model */ "./src/app/model/security/user.model.ts");
/* harmony import */ var _custor_validation_equal_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../@custor/validation/equal.validator */ "./src/@custor/validation/equal.validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ManagePasswordComponent = /** @class */ (function () {
    function ManagePasswordComponent(alertService, translationService, accountService, formBuilder, router, activatedRoute) {
        this.alertService = alertService;
        this.translationService = translationService;
        this.accountService = accountService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.isNewUser = true;
        this.showOldPassword = false;
        this.isChangePassword = false;
        this.onUserSaved = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.user = new _model_security_user_model__WEBPACK_IMPORTED_MODULE_6__["User"]();
        this.roles = [];
        this.isEditMode = false;
        this.userSaved$ = this.onUserSaved.asObservable();
        this.buildForm();
    }
    ManagePasswordComponent.prototype.ngOnDestroy = function () {
        this.passwordWatcher.unsubscribe();
    };
    ManagePasswordComponent.prototype.ngOnInit = function () {
        var id = this.activatedRoute.snapshot.params['id'];
        // console.debug(id);
        if (id === '1') {
            this.isChangePassword = true;
            this.dialogTitle = 'Change Password';
            this.actionCaption = 'Change Password';
            this.oldPasswordCaption = 'Old Password';
            this.showOldPassword = true;
            // this.oldPassword.setValidators([Validators.required, Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}/)]);
        }
        else {
            this.isChangePassword = false;
            this.dialogTitle = 'Reset Password';
            this.actionCaption = 'Reset Password';
            this.oldPasswordCaption = 'Old Password - Not Required';
            this.showOldPassword = false;
        }
        if (!this.isChangePassword) {
            var cOldPassword = this.userProfileForm.get('oldPassword');
            cOldPassword.clearValidators();
        }
    };
    ManagePasswordComponent.prototype.formControlValueChanged = function () {
        if (this.isChangePassword)
            this.addOldPasswordValidator();
    };
    ManagePasswordComponent.prototype.buildForm = function () {
        var _this = this;
        this.userProfileForm = this.formBuilder.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            oldPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}/)]],
            password: this.formBuilder.group({
                newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}/)]],
                confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_custor_validation_equal_validator__WEBPACK_IMPORTED_MODULE_7__["EqualValidator"])('newPassword')]],
            })
        });
        this.passwordWatcher = this.newPassword.valueChanges.subscribe(function () {
            return _this.confirmPassword.updateValueAndValidity();
        });
        // this.formControlValueChanged();
    };
    ManagePasswordComponent.prototype.beginEdit = function () {
        this.isEditMode = true;
        this.isChangePassword = false;
    };
    ManagePasswordComponent.prototype.save = function () {
        var _this = this;
        if (!this.form.submitted) {
            // Causes validation to update.
            this.form.onSubmit(null);
            return;
        }
        if (!this.userProfileForm.valid) {
            this.alertService.error(this.translationService.getTranslation('form.ErrorMessage'), this.translationService.getTranslation('form.ErrorCaption'));
            return;
        }
        var editedUser = this.getEditedUser();
        // console.log(editedUser);
        this.accountService.resetAccount(editedUser).subscribe(function (response) { return _this.saveCompleted(); }, function (error) { return _this.saveFailed(error); });
    };
    ManagePasswordComponent.prototype.getEditedUser = function () {
        var formModel = this.userProfileForm.value;
        var tempRole = ['DummyRole']; // not required here
        return {
            Id: '0',
            Tin: '',
            UserName: formModel.userName,
            FullName: '',
            FriendlyName: '',
            Email: formModel.email,
            PhoneNumber: '',
            Roles: tempRole,
            CurrentPassword: this.isChangePassword ? formModel.oldPassword : 'resetme',
            NewPassword: formModel.password.newPassword,
            ConfirmPassword: formModel.password.confirmPassword,
            IsEnabled: true,
            IsLockedOut: false,
            SiteCode: '' // not required
        };
    };
    ManagePasswordComponent.prototype.saveCompleted = function (user) {
        if (user) {
            this.user = user;
        }
        this.alertService.success('Your account has been registered successfully.', 'Success');
        this.onUserSaved.next(this.user);
        this.router.navigate(['/confirm']);
    };
    ManagePasswordComponent.prototype.saveFailed = function (error) {
        this.alertService.error('One or more errors occured whilst saving your changes:', 'Save Error');
        this.alertService.error(null, error);
    };
    ManagePasswordComponent.prototype.validateMinMax = function (min, max) {
        return ['', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(min),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(max),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]+') //  digits only
            ]];
    };
    ManagePasswordComponent.prototype.addOldPasswordValidator = function () {
        this.oldPassword.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}/)]);
    };
    Object.defineProperty(ManagePasswordComponent.prototype, "userName", {
        get: function () {
            return this.userProfileForm.get('userName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagePasswordComponent.prototype, "email", {
        get: function () {
            return this.userProfileForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagePasswordComponent.prototype, "password", {
        get: function () {
            return this.userProfileForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagePasswordComponent.prototype, "oldPassword", {
        get: function () {
            return this.userProfileForm.get('oldPassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagePasswordComponent.prototype, "newPassword", {
        get: function () {
            return this.password.get('newPassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagePasswordComponent.prototype, "confirmPassword", {
        get: function () {
            return this.password.get('confirmPassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagePasswordComponent.prototype, "assignedRoles", {
        get: function () {
            return this.userProfileForm.get('roles');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagePasswordComponent.prototype, "floatLabels", {
        get: function () {
            return this.isEditMode ? 'auto' : 'always';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], ManagePasswordComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ManagePasswordComponent.prototype, "dialogTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ManagePasswordComponent.prototype, "oldPasswordCaption", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ManagePasswordComponent.prototype, "actionCaption", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_security_user_model__WEBPACK_IMPORTED_MODULE_6__["User"])
    ], ManagePasswordComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ManagePasswordComponent.prototype, "roles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ManagePasswordComponent.prototype, "isEditMode", void 0);
    ManagePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-password',
            template: __webpack_require__(/*! ./manage.component.html */ "./src/app/components/auth/manage-password/manage.component.html"),
            styles: [__webpack_require__(/*! ./manage.component.scss */ "./src/app/components/auth/manage-password/manage.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _custor_services_translation_service__WEBPACK_IMPORTED_MODULE_3__["AppTranslationService"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], ManagePasswordComponent);
    return ManagePasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/manage-password/manage.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/auth/manage-password/manage.module.ts ***!
  \******************************************************************/
/*! exports provided: ManagePasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePasswordModule", function() { return ManagePasswordModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _manage_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-routing.module */ "./src/app/components/auth/manage-password/manage-routing.module.ts");
/* harmony import */ var _manage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage.component */ "./src/app/components/auth/manage-password/manage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ManagePasswordModule = /** @class */ (function () {
    function ManagePasswordModule() {
    }
    ManagePasswordModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _manage_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManagePasswordRoutingModule"]
            ],
            declarations: [_manage_component__WEBPACK_IMPORTED_MODULE_4__["ManagePasswordComponent"]]
        })
    ], ManagePasswordModule);
    return ManagePasswordModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-auth-manage-password-manage-module.js.map