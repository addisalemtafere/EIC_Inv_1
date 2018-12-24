(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-auth-register-register-module"],{

/***/ "./node_modules/ng-recaptcha/forms.js":
/*!********************************************!*\
  !*** ./node_modules/ng-recaptcha/forms.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var recaptcha_forms_module_1 = __webpack_require__(/*! ./recaptcha/recaptcha-forms.module */ "./node_modules/ng-recaptcha/recaptcha/recaptcha-forms.module.js");
exports.RecaptchaFormsModule = recaptcha_forms_module_1.RecaptchaFormsModule;
var recaptcha_value_accessor_directive_1 = __webpack_require__(/*! ./recaptcha/recaptcha-value-accessor.directive */ "./node_modules/ng-recaptcha/recaptcha/recaptcha-value-accessor.directive.js");
exports.RecaptchaValueAccessorDirective = recaptcha_value_accessor_directive_1.RecaptchaValueAccessorDirective;


/***/ }),

/***/ "./node_modules/ng-recaptcha/index.js":
/*!********************************************!*\
  !*** ./node_modules/ng-recaptcha/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var recaptcha_component_1 = __webpack_require__(/*! ./recaptcha/recaptcha.component */ "./node_modules/ng-recaptcha/recaptcha/recaptcha.component.js");
exports.RecaptchaComponent = recaptcha_component_1.RecaptchaComponent;
var recaptcha_loader_service_1 = __webpack_require__(/*! ./recaptcha/recaptcha-loader.service */ "./node_modules/ng-recaptcha/recaptcha/recaptcha-loader.service.js");
exports.RecaptchaLoaderService = recaptcha_loader_service_1.RecaptchaLoaderService;
exports.RECAPTCHA_LANGUAGE = recaptcha_loader_service_1.RECAPTCHA_LANGUAGE;
var recaptcha_module_1 = __webpack_require__(/*! ./recaptcha/recaptcha.module */ "./node_modules/ng-recaptcha/recaptcha/recaptcha.module.js");
exports.RecaptchaModule = recaptcha_module_1.RecaptchaModule;
var recaptcha_settings_1 = __webpack_require__(/*! ./recaptcha/recaptcha-settings */ "./node_modules/ng-recaptcha/recaptcha/recaptcha-settings.js");
exports.RECAPTCHA_SETTINGS = recaptcha_settings_1.RECAPTCHA_SETTINGS;


/***/ }),

/***/ "./node_modules/ng-recaptcha/recaptcha/recaptcha-common.module.js":
/*!************************************************************************!*\
  !*** ./node_modules/ng-recaptcha/recaptcha/recaptcha-common.module.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var recaptcha_component_1 = __webpack_require__(/*! ./recaptcha.component */ "./node_modules/ng-recaptcha/recaptcha/recaptcha.component.js");
var RecaptchaCommonModule = /** @class */ (function () {
    function RecaptchaCommonModule() {
    }
    RecaptchaCommonModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [recaptcha_component_1.RecaptchaComponent],
                    exports: [recaptcha_component_1.RecaptchaComponent],
                },] },
    ];
    return RecaptchaCommonModule;
}());
exports.RecaptchaCommonModule = RecaptchaCommonModule;


/***/ }),

/***/ "./node_modules/ng-recaptcha/recaptcha/recaptcha-forms.module.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ng-recaptcha/recaptcha/recaptcha-forms.module.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var recaptcha_common_module_1 = __webpack_require__(/*! ./recaptcha-common.module */ "./node_modules/ng-recaptcha/recaptcha/recaptcha-common.module.js");
var recaptcha_value_accessor_directive_1 = __webpack_require__(/*! ./recaptcha-value-accessor.directive */ "./node_modules/ng-recaptcha/recaptcha/recaptcha-value-accessor.directive.js");
var RecaptchaFormsModule = /** @class */ (function () {
    function RecaptchaFormsModule() {
    }
    RecaptchaFormsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        recaptcha_value_accessor_directive_1.RecaptchaValueAccessorDirective,
                    ],
                    exports: [recaptcha_value_accessor_directive_1.RecaptchaValueAccessorDirective],
                    imports: [forms_1.FormsModule, recaptcha_common_module_1.RecaptchaCommonModule],
                },] },
    ];
    return RecaptchaFormsModule;
}());
exports.RecaptchaFormsModule = RecaptchaFormsModule;


/***/ }),

/***/ "./node_modules/ng-recaptcha/recaptcha/recaptcha-loader.service.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng-recaptcha/recaptcha/recaptcha-loader.service.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
exports.RECAPTCHA_LANGUAGE = new core_1.InjectionToken('recaptcha-language');
var RecaptchaLoaderService = /** @class */ (function () {
    function RecaptchaLoaderService(
    // tslint:disable-next-line:no-any
    platformId, language) {
        this.platformId = platformId;
        this.language = language;
        this.init();
        this.ready = common_1.isPlatformBrowser(this.platformId) ? RecaptchaLoaderService.ready.asObservable() : rxjs_1.of();
    }
    /** @internal */
    /** @internal */
    RecaptchaLoaderService.prototype.init = /** @internal */
    function () {
        if (RecaptchaLoaderService.ready) {
            return;
        }
        if (common_1.isPlatformBrowser(this.platformId)) {
            window.ng2recaptchaloaded = function () {
                RecaptchaLoaderService.ready.next(grecaptcha);
            };
            RecaptchaLoaderService.ready = new rxjs_1.BehaviorSubject(null);
            var script = document.createElement('script');
            script.innerHTML = '';
            var langParam = this.language ? '&hl=' + this.language : '';
            script.src = "https://www.google.com/recaptcha/api.js?render=explicit&onload=ng2recaptchaloaded" + langParam;
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
        }
    };
    /**
       * @internal
       * @nocollapse
       */
    RecaptchaLoaderService.ready = null;
    RecaptchaLoaderService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    RecaptchaLoaderService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [exports.RECAPTCHA_LANGUAGE,] },] },
    ]; };
    return RecaptchaLoaderService;
}());
exports.RecaptchaLoaderService = RecaptchaLoaderService;


/***/ }),

/***/ "./node_modules/ng-recaptcha/recaptcha/recaptcha-settings.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ng-recaptcha/recaptcha/recaptcha-settings.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
exports.RECAPTCHA_SETTINGS = new core_1.InjectionToken('recaptcha-settings');


/***/ }),

/***/ "./node_modules/ng-recaptcha/recaptcha/recaptcha-value-accessor.directive.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/ng-recaptcha/recaptcha/recaptcha-value-accessor.directive.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var recaptcha_component_1 = __webpack_require__(/*! ./recaptcha.component */ "./node_modules/ng-recaptcha/recaptcha/recaptcha.component.js");
var RecaptchaValueAccessorDirective = /** @class */ (function () {
    function RecaptchaValueAccessorDirective(host) {
        this.host = host;
    }
    RecaptchaValueAccessorDirective.prototype.writeValue = function (value) {
        if (!value) {
            this.host.reset();
        }
    };
    RecaptchaValueAccessorDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    RecaptchaValueAccessorDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    RecaptchaValueAccessorDirective.prototype.onResolve = function ($event) {
        if (this.onChange) {
            this.onChange($event);
        }
        if (this.onTouched) {
            this.onTouched();
        }
    };
    RecaptchaValueAccessorDirective.decorators = [
        { type: core_1.Directive, args: [{
                    providers: [
                        {
                            multi: true,
                            provide: forms_1.NG_VALUE_ACCESSOR,
                            // tslint:disable-next-line:no-forward-ref
                            useExisting: core_1.forwardRef(function () { return RecaptchaValueAccessorDirective; }),
                        },
                    ],
                    // tslint:disable-next-line:directive-selector
                    selector: 're-captcha[formControlName],re-captcha[formControl],re-captcha[ngModel]',
                },] },
    ];
    /** @nocollapse */
    RecaptchaValueAccessorDirective.ctorParameters = function () { return [
        { type: recaptcha_component_1.RecaptchaComponent, },
    ]; };
    RecaptchaValueAccessorDirective.propDecorators = {
        "onResolve": [{ type: core_1.HostListener, args: ['resolved', ['$event'],] },],
    };
    return RecaptchaValueAccessorDirective;
}());
exports.RecaptchaValueAccessorDirective = RecaptchaValueAccessorDirective;


/***/ }),

/***/ "./node_modules/ng-recaptcha/recaptcha/recaptcha.component.js":
/*!********************************************************************!*\
  !*** ./node_modules/ng-recaptcha/recaptcha/recaptcha.component.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var recaptcha_loader_service_1 = __webpack_require__(/*! ./recaptcha-loader.service */ "./node_modules/ng-recaptcha/recaptcha/recaptcha-loader.service.js");
var recaptcha_settings_1 = __webpack_require__(/*! ./recaptcha-settings */ "./node_modules/ng-recaptcha/recaptcha/recaptcha-settings.js");
var nextId = 0;
var RecaptchaComponent = /** @class */ (function () {
    function RecaptchaComponent(elementRef, loader, zone, settings) {
        this.elementRef = elementRef;
        this.loader = loader;
        this.zone = zone;
        this.id = "ngrecaptcha-" + nextId++;
        this.resolved = new core_1.EventEmitter();
        if (settings) {
            this.siteKey = settings.siteKey;
            this.theme = settings.theme;
            this.type = settings.type;
            this.size = settings.size;
            this.badge = settings.badge;
        }
    }
    RecaptchaComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.subscription = this.loader.ready.subscribe(function (grecaptcha) {
            if (grecaptcha != null) {
                _this.grecaptcha = grecaptcha;
                _this.renderRecaptcha();
            }
        });
    };
    RecaptchaComponent.prototype.ngOnDestroy = function () {
        // reset the captcha to ensure it does not leave anything behind
        // after the component is no longer needed
        this.grecaptchaReset();
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    /**
     * Executes the invisible recaptcha.
     * Does nothing if component's size is not set to "invisible".
     */
    /**
       * Executes the invisible recaptcha.
       * Does nothing if component's size is not set to "invisible".
       */
    RecaptchaComponent.prototype.execute = /**
       * Executes the invisible recaptcha.
       * Does nothing if component's size is not set to "invisible".
       */
    function () {
        if (this.size !== 'invisible') {
            return;
        }
        if (this.widget != null) {
            this.grecaptcha.execute(this.widget);
        }
    };
    RecaptchaComponent.prototype.reset = function () {
        if (this.widget != null) {
            if (this.grecaptcha.getResponse(this.widget)) {
                // Only emit an event in case if something would actually change.
                // That way we do not trigger "touching" of the control if someone does a "reset"
                // on a non-resolved captcha.
                this.resolved.emit(null);
            }
            this.grecaptchaReset();
        }
    };
    /** @internal */
    /** @internal */
    RecaptchaComponent.prototype.expired = /** @internal */
    function () {
        this.resolved.emit(null);
    };
    /** @internal */
    /** @internal */
    RecaptchaComponent.prototype.captchaReponseCallback = /** @internal */
    function (response) {
        this.resolved.emit(response);
    };
    /** @internal */
    /** @internal */
    RecaptchaComponent.prototype.grecaptchaReset = /** @internal */
    function () {
        var _this = this;
        if (this.widget != null) {
            this.zone.runOutsideAngular(function () { return _this.grecaptcha.reset(_this.widget); });
        }
    };
    /** @internal */
    /** @internal */
    RecaptchaComponent.prototype.renderRecaptcha = /** @internal */
    function () {
        var _this = this;
        this.widget = this.grecaptcha.render(this.elementRef.nativeElement, {
            badge: this.badge,
            callback: function (response) {
                _this.zone.run(function () { return _this.captchaReponseCallback(response); });
            },
            'expired-callback': function () {
                _this.zone.run(function () { return _this.expired(); });
            },
            sitekey: this.siteKey,
            size: this.size,
            tabindex: this.tabIndex,
            theme: this.theme,
            type: this.type,
        });
    };
    RecaptchaComponent.decorators = [
        { type: core_1.Component, args: [{
                    exportAs: 'reCaptcha',
                    selector: 're-captcha',
                    template: "",
                },] },
    ];
    /** @nocollapse */
    RecaptchaComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: recaptcha_loader_service_1.RecaptchaLoaderService, },
        { type: core_1.NgZone, },
        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [recaptcha_settings_1.RECAPTCHA_SETTINGS,] },] },
    ]; };
    RecaptchaComponent.propDecorators = {
        "id": [{ type: core_1.Input }, { type: core_1.HostBinding, args: ['attr.id',] },],
        "siteKey": [{ type: core_1.Input },],
        "theme": [{ type: core_1.Input },],
        "type": [{ type: core_1.Input },],
        "size": [{ type: core_1.Input },],
        "tabIndex": [{ type: core_1.Input },],
        "badge": [{ type: core_1.Input },],
        "resolved": [{ type: core_1.Output },],
    };
    return RecaptchaComponent;
}());
exports.RecaptchaComponent = RecaptchaComponent;


/***/ }),

/***/ "./node_modules/ng-recaptcha/recaptcha/recaptcha.module.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng-recaptcha/recaptcha/recaptcha.module.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var recaptcha_common_module_1 = __webpack_require__(/*! ./recaptcha-common.module */ "./node_modules/ng-recaptcha/recaptcha/recaptcha-common.module.js");
var recaptcha_loader_service_1 = __webpack_require__(/*! ./recaptcha-loader.service */ "./node_modules/ng-recaptcha/recaptcha/recaptcha-loader.service.js");
var recaptcha_component_1 = __webpack_require__(/*! ./recaptcha.component */ "./node_modules/ng-recaptcha/recaptcha/recaptcha.component.js");
var RecaptchaModule = /** @class */ (function () {
    function RecaptchaModule() {
    }
    RecaptchaModule.forRoot = function () {
        return {
            ngModule: RecaptchaModule,
            providers: [
                recaptcha_loader_service_1.RecaptchaLoaderService,
            ],
        };
    };
    RecaptchaModule.decorators = [
        { type: core_1.NgModule, args: [{
                    exports: [recaptcha_component_1.RecaptchaComponent],
                    imports: [recaptcha_common_module_1.RecaptchaCommonModule],
                },] },
    ];
    return RecaptchaModule;
}());
exports.RecaptchaModule = RecaptchaModule;


/***/ }),

/***/ "./src/app/components/auth/register/register-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/auth/register/register-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRoutingModule", function() { return RegisterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component */ "./src/app/components/auth/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var route = [
    { path: '', component: _register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] }
];
var RegisterRoutingModule = /** @class */ (function () {
    function RegisterRoutingModule() {
    }
    RegisterRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], RegisterRoutingModule);
    return RegisterRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/auth/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/auth/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\" style=\" margin:auto;width:500px;\">\r\n  <div class=\"mat-elevation-z8\" style=\"margin: 30px;\">\r\n    <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>\r\n    <mat-toolbar color=\"primary\">\r\n      <mat-toolbar-row>\r\n        <span style=\"margin-top:9px; margin-right: 5px\"><mat-icon>person</mat-icon></span>\r\n        <span>Register</span>\r\n        <span class=\"toolbar-spacer\"></span>\r\n        <div class=\"header-actions\">\r\n          <!-- <button mat-icon-button><mat-icon>more_vertical</mat-icon></button> -->\r\n        </div>\r\n      </mat-toolbar-row>\r\n    </mat-toolbar>\r\n    <mat-card>\r\n      <div class=\"error-bar\" style=\"width:100%; \" *ngIf=\"errors.length > 0\">\r\n        <ul>\r\n          <li *ngFor=\"let error of errors\">\r\n            {{ error }}\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <mat-card-content>\r\n        <form #form=\"ngForm\" [formGroup]=\"userProfileForm\" novalidate (ngSubmit)=\"save()\" fxLayout=\"column\"\r\n              fxLayoutGap=\"1em\" autocomplete=\"off\">\r\n\r\n          <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"1em\">\r\n            <mat-form-field fxFlex>\r\n              <mat-label>{{'users.editor.FullName' | translate}}</mat-label>\r\n              <input matInput formControlName=\"fullName\" required/>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <!--<div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"1em\">-->\r\n          <!--<div fxFlex.gt-sm=\"0 1 calc(50% - 0.5em)\">-->\r\n          <!--<mat-checkbox formControlName=\"isExistingCustomer\" (click)=\"ExistingCustomerChecked($event)\">-->\r\n          <!--{{'users.editor.ExistingCustomer' | translate}}-->\r\n          <!--</mat-checkbox>-->\r\n          <!--</div>-->\r\n          <!--</div>-->\r\n\r\n          <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"1em\">\r\n            <mat-form-field fxFlex *ngIf=\"isExisting\">\r\n              <mat-label name=\"lblTIN\">{{'users.editor.TIN' | translate}}</mat-label>\r\n              <input matInput formControlName=\"tin\" NaturalNumberOnlyDir/>\r\n              <mat-error\r\n                *ngIf=\"(tin.hasError('required') || tin.hasError('minLength') || tin.hasError('maxLength'))\r\n                 && tin.touched \">\r\n                {{'users.editor.TINRequired' | translate}}\r\n                <!--<small class=\"error\" *ngIf=\"!tin.hasError('isTinUnique')\">-->\r\n\r\n                <!--</small>-->\r\n\r\n              </mat-error>\r\n              <mat-error class=\"error\"\r\n                         *ngIf=\"!tin.hasError('required') && tin.hasError('isTinUnique')\">\r\n                This Tin not registered\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"1em\">\r\n            <mat-form-field fxFlex>\r\n              <mat-label>{{'users.editor.Email' | translate}}</mat-label>\r\n              <input matInput formControlName=\"email\" required/>\r\n              <mat-error *ngIf=\"email.hasError('required')\">\r\n                {{'users.editor.EmailRequired' | translate}}\r\n              </mat-error>\r\n              <mat-error *ngIf=\"!email.hasError('required') && email.hasError('email')\">\r\n                {{'users.editor.InvalidEmail' | translate}}\r\n              </mat-error>\r\n              <mat-error class=\"error\"\r\n                         *ngIf=\"!email.hasError('required') && email.hasError('isEmailUnique')\">\r\n                This email has been registered already\r\n              </mat-error>\r\n\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"1em\">\r\n            <mat-form-field fxFlex>\r\n              <mat-label>{{'users.editor.PhoneNumber' | translate}}</mat-label>\r\n              <input matInput NaturalNumberOnlyDir formControlName=\"phoneNumber\" required autocomplete=\"off\"/>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"1em\">\r\n            <mat-form-field>\r\n              <mat-label>{{'users.editor.UserName' | translate}}</mat-label>\r\n              <input matInput formControlName=\"userName\" autocomplete=\"off\" required/>\r\n              <mat-error *ngIf=\"userName.hasError('required')\">\r\n                {{'users.editor.UserNameRequired' | translate}}\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div formGroupName=\"password\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"1em\">\r\n\r\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"1em\">\r\n              <mat-form-field>\r\n                <mat-label>{{'users.editor.NewPassword' | translate}}</mat-label>\r\n                <input matInput type=\"password\" formControlName=\"newPassword\" autocomplete=\"off\" required/>\r\n                <mat-error *ngIf=\"newPassword.hasError('required')\">\r\n                  {{'users.editor.NewPasswordRequired' | translate}}\r\n                </mat-error>\r\n                <mat-error *ngIf=\"!newPassword.hasError('required') && newPassword.hasError('pattern')\">\r\n                  {{'users.editor.NewPasswordRules' | translate}}\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"1em\">\r\n\r\n              <mat-form-field fxFlex>\r\n                <mat-label>{{'users.editor.ConfirmPassword' | translate}}</mat-label>\r\n                <input matInput type=\"password\" formControlName=\"confirmPassword\" required/>\r\n                <mat-error *ngIf=\"confirmPassword.hasError('required')\">\r\n                  {{'users.editor.ConfirmationPasswordRequired' | translate}}\r\n                </mat-error>\r\n                <mat-error *ngIf=\"!confirmPassword.hasError('required') && confirmPassword.hasError('notEqual')\">\r\n                  {{'users.editor.PasswordMismatch' | translate}}\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"1em\">\r\n            <!--<re-captcha formControlName=\"recaptcha\" required></re-captcha>-->\r\n            <!-- <div *ngIf=\"recaptcha.errors.required\">You must check the security image</div> -->\r\n          </div>\r\n          <!-- https://github.com/angular/material2/issues/8798 -->\r\n          <div>&nbsp;</div>\r\n        </form>\r\n      </mat-card-content>\r\n\r\n      <!-- <div class=\"alert-info\" role=\"alert\">\r\n        <div class=\"f-lft\">\r\n          <mat-icon class=\"mat-18\" color=\"primary\">info</mat-icon>\r\n          <div class=\"txt-j\"> By continuing using the system you certify that you have\r\n            read\r\n            the above service request instruction and accept the applicable\r\n            <p class=\"bld\">\r\n              <a target=\"_blank\" ui-sref=\"page({url:'privacy-policy'})\" translate=\"\" href=\"/page/privacy-policy\">Terms\r\n                and Conditions</a>\r\n            </p>\r\n            <mat-checkbox>Accept!</mat-checkbox>\r\n\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n\r\n      <div style=\"text-align: center\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"save()\" [disabled]=\"userProfileForm.invalid\">Register\r\n        </button>\r\n      </div>\r\n      <!--{{userProfileForm.value | json}}-->\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/auth/register/register.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/auth/register/register.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/auth/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/auth/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _custor_services_translation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@custor/services/translation.service */ "./src/@custor/services/translation.service.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _model_security_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../model/security/user.model */ "./src/app/model/security/user.model.ts");
/* harmony import */ var _model_security_permission_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../model/security/permission.model */ "./src/app/model/security/permission.model.ts");
/* harmony import */ var _custor_validation_equal_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../@custor/validation/equal.validator */ "./src/@custor/validation/equal.validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../@custor/helpers/utilities */ "./src/@custor/helpers/utilities.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(alertService, translationService, accountService, formBuilder, router) {
        this.alertService = alertService;
        this.translationService = translationService;
        this.accountService = accountService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.isExisting = false;
        this.isNewUser = true;
        this.isChangePassword = false;
        this.isSaving = false;
        this.onUserSaved = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.user = new _model_security_user_model__WEBPACK_IMPORTED_MODULE_6__["User"]();
        this.roles = [];
        this.isEditMode = false;
        this.errors = [];
        this.userSaved$ = this.onUserSaved.asObservable();
        this.buildForm();
    }
    RegisterComponent.prototype.ngOnDestroy = function () {
        this.passwordWatcher.unsubscribe();
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.formControlValueChanged();
    };
    RegisterComponent.prototype.formControlValueChanged = function () {
        var cTin = this.userProfileForm.get('tin');
        this.existingCustomer.valueChanges.subscribe(function (checkStatus) {
            if (checkStatus === true) {
                cTin.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]);
                // cTin.setAsyncValidators(this.isTinUnique.bind(this));
            }
            else {
                cTin.clearValidators();
            }
            cTin.updateValueAndValidity();
        });
    };
    RegisterComponent.prototype.buildForm = function () {
        var _this = this;
        this.userProfileForm = this.formBuilder.group({
            tin: '',
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: this.formBuilder.group({
                newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}/)]],
                confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_custor_validation_equal_validator__WEBPACK_IMPORTED_MODULE_8__["EqualValidator"])('newPassword')]],
            }),
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            isExistingCustomer: false,
        });
        this.passwordWatcher = this.newPassword.valueChanges.subscribe(function () {
            return _this.confirmPassword.updateValueAndValidity();
        });
    };
    RegisterComponent.prototype.resetForm = function (stopEditing) {
        if (stopEditing === void 0) { stopEditing = false; }
        if (stopEditing) {
            this.isEditMode = false;
        }
        if (!this.user) {
            this.isNewUser = true;
            this.user = new _model_security_user_model__WEBPACK_IMPORTED_MODULE_6__["User"]();
        }
        if (this.isNewUser) {
            this.isChangePassword = true;
            this.addNewPasswordValidators();
        }
        else {
            this.isChangePassword = false;
            this.newPassword.clearValidators();
            this.confirmPassword.clearValidators();
        }
        this.userProfileForm.reset({
            tin: this.user.Tin || '',
            userName: this.user.UserName || '',
            email: this.user.Email || '',
            password: {
                newPassword: '',
                confirmPassword: ''
            },
            fullName: this.user.FullName || '',
            phoneNumber: this.user.PhoneNumber || '',
            isExistingCustomer: false
        });
    };
    RegisterComponent.prototype.beginEdit = function () {
        this.isEditMode = true;
        this.isChangePassword = false;
    };
    RegisterComponent.prototype.save = function () {
        var _this = this;
        this.loadingIndicator = true;
        if (!this.form.submitted) {
            // Causes validation to update.
            this.form.onSubmit(null);
            return;
        }
        if (!this.userProfileForm.valid) {
            this.alertService.error(this.translationService.getTranslation('form.ErrorMessage'), this.translationService.getTranslation('form.ErrorCaption'));
            return;
        }
        this.isSaving = true;
        var editedUser = this.getEditedUser();
        if (this.isNewUser) {
            // this.accountService.newUser(editedUser).subscribe(
            //   user => this.saveCompleted(user),
            //   error => this.saveFailed(error));
            this.accountService.selfRegisterNewUser(editedUser).subscribe(function (user) { return _this.saveCompleted(user); }, function (error) { return _this.saveFailed(error); });
        }
        else {
            this.accountService.updateUser(editedUser).subscribe(function (response) { return _this.saveCompleted(editedUser); }, function (error) { return _this.saveFailed(error); });
        }
        this.loadingIndicator = false;
    };
    RegisterComponent.prototype.cancel = function () {
        this.resetForm();
        this.isEditMode = false;
    };
    RegisterComponent.prototype.getEditedUser = function () {
        var formModel = this.userProfileForm.value;
        var tempRole = ['Online Users'];
        var onlineSitecode = 'OnlineSite';
        return {
            Id: this.user.Id,
            Tin: formModel.tin,
            UserName: formModel.userName,
            FullName: formModel.fullName,
            FriendlyName: formModel.friendlyName,
            Email: formModel.email,
            PhoneNumber: formModel.phoneNumber,
            Roles: tempRole,
            CurrentPassword: '',
            NewPassword: formModel.password.newPassword,
            ConfirmPassword: formModel.password.confirmPassword,
            IsEnabled: true,
            IsLockedOut: false,
            SiteCode: onlineSitecode
        };
    };
    RegisterComponent.prototype.saveCompleted = function (user) {
        if (user) {
            this.user = user;
        }
        this.isSaving = false;
        this.resetForm(true);
        this.alertService.success('Your account has been registered successfully.', 'Success');
        this.onUserSaved.next(this.user);
        this.router.navigate(['/confirm']);
    };
    RegisterComponent.prototype.saveFailed = function (error) {
        this.isSaving = false;
        // this.alertService.error('One or more errors occured whilst saving your changes:',
        //   'Save Error');
        // this.alertService.error(null, error);
        var errList = _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_10__["Utilities"].getHttpResponseMessage(error);
        if (error.status === 400) {
            this.errors = errList;
            this.alertService.error('Please fix the listed errors', 'Error');
        }
        else {
            this.errors = [];
            this.alertService.error(error.status + ':' + errList[0].toString(), 'Error');
        }
    };
    RegisterComponent.prototype.addNewPasswordValidators = function () {
        this.newPassword.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}/)]);
        this.confirmPassword.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_custor_validation_equal_validator__WEBPACK_IMPORTED_MODULE_8__["EqualValidator"])('newPassword')]);
    };
    RegisterComponent.prototype.ExistingCustomerChecked = function (event) {
        this.isExisting = (this.isExisting === true) ? false : true;
    };
    RegisterComponent.prototype.unlockUser = function () {
        var _this = this;
        this.isSaving = true;
        this.accountService.unblockUser(this.user.Id)
            .subscribe(function (response) {
            _this.isSaving = false;
            _this.user.IsLockedOut = false;
            _this.userProfileForm.patchValue({
                isLockedOut: _this.user.IsLockedOut
            });
            _this.alertService.success('User has been successfully unlocked', 'Success');
        }, function (error) {
            _this.isSaving = false;
            _this.alertService.error('The below errors occured whilst unlocking the user:', 'Unblock Error');
            _this.alertService.error(null, error);
        });
    };
    RegisterComponent.prototype.validateMinMax = function (min, max) {
        return ['', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(min),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(max),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]+') //  digits only
            ]];
    };
    Object.defineProperty(RegisterComponent.prototype, "tin", {
        get: function () {
            return this.userProfileForm.get('tin');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "existingCustomer", {
        get: function () {
            return this.userProfileForm.get('isExistingCustomer');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "userName", {
        get: function () {
            return this.userProfileForm.get('userName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () {
            return this.userProfileForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () {
            return this.userProfileForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "newPassword", {
        get: function () {
            return this.password.get('newPassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "confirmPassword", {
        get: function () {
            return this.password.get('confirmPassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "assignedRoles", {
        get: function () {
            return this.userProfileForm.get('roles');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "canViewRoles", {
        get: function () {
            return this.accountService.userHasPermission(_model_security_permission_model__WEBPACK_IMPORTED_MODULE_7__["Permission"].viewRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "canAssignRoles", {
        get: function () {
            return this.accountService.userHasPermission(_model_security_permission_model__WEBPACK_IMPORTED_MODULE_7__["Permission"].assignRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "isEditingSelf", {
        get: function () {
            return this.accountService.currentUser ? this.user.Id === this.accountService.currentUser.Id : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "floatLabels", {
        get: function () {
            return this.isEditMode ? 'auto' : 'always';
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.isEmailUnique = function (control) {
        var _this = this;
        var q = new Promise(function (resolve, reject) {
            setTimeout(function () {
                _this.accountService.isEmailRegisterd(control.value).subscribe(function (response) {
                    // console.log(response);
                    if (response === true) {
                        resolve({ 'isEmailUnique': true });
                    }
                    else {
                        // resolve({'isEmailUnique': false});
                        _this.userProfileForm.get('email').updateValueAndValidity();
                    }
                }, function () {
                    // resolve({'isEmailUnique': }
                    // );
                });
            }, 1000);
        });
        // // console.log(this.userProfileForm.get('email').hasError('isEmailUnique'));
        return q;
    };
    RegisterComponent.prototype.isTinUnique = function (control) {
        var _this = this;
        var q = new Promise(function (resolve, reject) {
            setTimeout(function () {
                _this.accountService.isTinUnique(control.value).subscribe(function (response) {
                    // console.log(response);
                    if (response === true) {
                        // console.log(response);
                        resolve({ 'isTinUnique': false });
                    }
                    else {
                        // resolve({'isTinUnique': true});
                        _this.userProfileForm.get('email').updateValueAndValidity();
                    }
                }, function () {
                    // resolve({'isEmailUnique': }
                    // );
                });
            }, 1000);
        });
        // console.log(this.userProfileForm.get('tin').hasError('isTinUnique'));
        return q;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], RegisterComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_security_user_model__WEBPACK_IMPORTED_MODULE_6__["User"])
    ], RegisterComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], RegisterComponent.prototype, "roles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "isEditMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], RegisterComponent.prototype, "errors", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/components/auth/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _custor_services_translation_service__WEBPACK_IMPORTED_MODULE_3__["AppTranslationService"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/register/register.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/auth/register/register.module.ts ***!
  \*************************************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/components/auth/register/register-routing.module.ts");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register.component */ "./src/app/components/auth/register/register.component.ts");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/index.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-recaptcha/forms */ "./node_modules/ng-recaptcha/forms.js");
/* harmony import */ var ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _register_routing_module__WEBPACK_IMPORTED_MODULE_3__["RegisterRoutingModule"],
                ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_6__["RecaptchaFormsModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__["RecaptchaModule"]
            ],
            declarations: [_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-auth-register-register-module.js.map