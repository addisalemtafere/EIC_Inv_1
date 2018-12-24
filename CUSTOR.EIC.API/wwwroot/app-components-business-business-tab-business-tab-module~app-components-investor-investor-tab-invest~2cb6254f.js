(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-business-business-tab-business-tab-module~app-components-investor-investor-tab-invest~2cb6254f"],{

/***/ "./node_modules/ngx-gravatar/fesm5/ngx-gravatar.js":
/*!*********************************************************!*\
  !*** ./node_modules/ngx-gravatar/fesm5/ngx-gravatar.js ***!
  \*********************************************************/
/*! exports provided: GravatarModule, FALLBACK, RATING, ɵc, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GravatarModule", function() { return GravatarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FALLBACK", function() { return FALLBACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RATING", function() { return RATING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return GRAVATAR_CONFIG_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgxGravatarDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return NgxGravatarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__);




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Injection token for gravatar configuration
  @type {?} */
var GRAVATAR_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('gravatarCustom.config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var FALLBACK = {
    blank: 'blank',
    identicon: 'identicon',
    mm: 'mm',
    monsterid: 'monsterid',
    retro: 'retro',
    robohash: 'robohash',
    wavatar: 'wavatar',
};
/** @enum {string} */
var RATING = {
    g: 'g',
    pg: 'pg',
    r: 'r',
    x: 'x',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_CONFIG = {
    fallback: FALLBACK.retro,
    size: 40,
    cornerRadius: 0,
    preferGravatar: false,
    hasBorder: false,
    borderColor: '#000000',
    borderRadius: '50%',
    borderStyle: 'solid',
    borderWidth: 1,
    round: true,
    backgroundColor: 'transparent',
    rating: RATING.g,
    ratio: 2
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxGravatarService = /** @class */ (function () {
    function NgxGravatarService(gravatarConfig) {
        this.gravatarConfig = gravatarConfig;
        this.defaultConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, DEFAULT_CONFIG);
        if (this.gravatarConfig) {
            this.gravatarConfig.rating = /** @type {?} */ (this.determineRating(this.gravatarConfig.rating));
            this.gravatarConfig.fallback = /** @type {?} */ (this.determineFallback(this.gravatarConfig.fallback));
            this.defaultConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this.defaultConfig, this.gravatarConfig);
        }
    }
    /**
     * Return defaultConfig object
     */
    /**
     * Return defaultConfig object
     * @return {?}
     */
    NgxGravatarService.prototype.getDefaultConfig = /**
     * Return defaultConfig object
     * @return {?}
     */
    function () {
        return this.defaultConfig;
    };
    /**
     * Generate gravatar url
     * @param email is a string. If email is not a string, email will be set to empty string "" by default
     * @param size number
     * @param rating string
     * @param fallback string
     * @return gravatar url
     */
    /**
     * Generate gravatar url
     * @param {?} email is a string. If email is not a string, email will be set to empty string "" by default
     * @param {?=} size number
     * @param {?=} rating string
     * @param {?=} fallback string
     * @return {?} gravatar url
     */
    NgxGravatarService.prototype.generateGravatarUrl = /**
     * Generate gravatar url
     * @param {?} email is a string. If email is not a string, email will be set to empty string "" by default
     * @param {?=} size number
     * @param {?=} rating string
     * @param {?=} fallback string
     * @return {?} gravatar url
     */
    function (email, size, rating, fallback) {
        try {
            email = email.trim().toLowerCase();
        }
        catch (e) {
            // Complain email is not a string
            console.error("[ngx-gravatar] - Email (" + email + ") is not a string. Empty string is used as a default email.");
            email = '';
        }
        size = size ? size : this.defaultConfig.size;
        rating = this.determineRating(rating, this.defaultConfig.rating);
        fallback = this.determineFallback(fallback, this.defaultConfig.fallback);
        /** @type {?} */
        var emailHash = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__["Md5"].hashStr(email);
        return "//www.gravatar.com/avatar/" + emailHash + "?s=" + size + "&r=" + rating + "&d=" + fallback;
    };
    /**
     * Determine gravatar fallback string
     * @param {?} fallback string
     * @param {?=} defaultFallback string
     * @return {?}
     */
    NgxGravatarService.prototype.determineFallback = /**
     * Determine gravatar fallback string
     * @param {?} fallback string
     * @param {?=} defaultFallback string
     * @return {?}
     */
    function (fallback, defaultFallback) {
        if (defaultFallback === void 0) { defaultFallback = DEFAULT_CONFIG.fallback; }
        if (fallback === undefined) {
            return defaultFallback;
        }
        if (FALLBACK[fallback] === undefined) {
            // Complain invalid fallback
            console.error("[ngx-gravatar] - \"" + fallback + "\" is invalid gravatar fallback type. " +
                ("Default fallback \"" + defaultFallback + "\" is used."));
            return defaultFallback;
        }
        return fallback;
    };
    /**
     * Determine gravatar rating string
     * @param {?} rating string
     * @param {?=} defaultRating string
     * @return {?}
     */
    NgxGravatarService.prototype.determineRating = /**
     * Determine gravatar rating string
     * @param {?} rating string
     * @param {?=} defaultRating string
     * @return {?}
     */
    function (rating, defaultRating) {
        if (defaultRating === void 0) { defaultRating = DEFAULT_CONFIG.rating; }
        if (rating === undefined) {
            return defaultRating;
        }
        if (RATING[rating] === undefined) {
            console.error("[ngx-gravatar] - \"" + rating + "\" is invalid gravatar rating type. " +
                ("Default rating \"" + defaultRating + "\" is used."));
            return defaultRating;
        }
        return rating;
    };
    NgxGravatarService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NgxGravatarService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [GRAVATAR_CONFIG_TOKEN,] }] }
    ]; };
    return NgxGravatarService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxGravatarDirective = /** @class */ (function () {
    function NgxGravatarDirective(elementRef, renderer, gravatarService) {
        var _this = this;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.gravatarService = gravatarService;
        this.style = {};
        this.initialized = false;
        this.defaultConfig = this.gravatarService.getDefaultConfig();
        // Listen for error when fetching custom src
        this.renderer.listen(this.elementRef.nativeElement, 'error', function (event) {
            _this.initializeAvatar(true); // Force using gravatar
        });
    }
    /**
     * @return {?}
     */
    NgxGravatarDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initializeAvatar();
        this.initialized = true;
    };
    /**
     * @return {?}
     */
    NgxGravatarDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.initialized) {
            this.initializeAvatar();
        }
    };
    /**
     * Set default values for user inputs if they are not provided
     * @return {?}
     */
    NgxGravatarDirective.prototype.setDefaultValues = /**
     * Set default values for user inputs if they are not provided
     * @return {?}
     */
    function () {
        this.size = this.computeSize();
        this.ratio = this.ratio === undefined ? this.defaultConfig.ratio : this.ratio;
        this.requestedSize = this.size * this.ratio;
        this.round = this.round === undefined ? this.defaultConfig.round : this.round;
        this.cornerRadius = this.cornerRadius === undefined ? this.defaultConfig.cornerRadius : this.cornerRadius;
        this.preferGravatar = this.preferGravatar === undefined ? this.defaultConfig.preferGravatar : this.preferGravatar;
    };
    /**
     * Initialize avatar.
     * Custom source has higher priority if preferGravatar is not set on.
     * Finally, set styles for the avatar.
     * @param {?=} forcedGravatar
     * @return {?}
     */
    NgxGravatarDirective.prototype.initializeAvatar = /**
     * Initialize avatar.
     * Custom source has higher priority if preferGravatar is not set on.
     * Finally, set styles for the avatar.
     * @param {?=} forcedGravatar
     * @return {?}
     */
    function (forcedGravatar) {
        this.setDefaultValues();
        /** @type {?} */
        var url = '';
        if (this.preferGravatar || forcedGravatar) {
            url = this.gravatarService.generateGravatarUrl(this.email, this.requestedSize, this.rating, this.fallback);
        }
        else {
            // this.preferGravatar == false
            if (this.src) {
                url = this.src;
            }
            else {
                // fallback to gravatar
                url = this.gravatarService.generateGravatarUrl(this.email, this.requestedSize, this.rating, this.fallback);
            }
        }
        this.renderer.setProperty(this.elementRef.nativeElement, 'src', url);
        this.setStyle(this.avatarStyle());
    };
    /**
     * Compute the size of the avatar
     * @return {?} size
     */
    NgxGravatarDirective.prototype.computeSize = /**
     * Compute the size of the avatar
     * @return {?} size
     */
    function () {
        /** @type {?} */
        var size = this.size === undefined ? this.defaultConfig.size : this.size;
        if (this.style && this.style.width) {
            try {
                /** @type {?} */
                var width = this.style.width.trim();
                if (width.match(/^\d+px$/)) {
                    // width with px unit
                    size = width.replace('px', '');
                }
            }
            catch (e) {
                return size;
            }
        }
        return size;
    };
    /**
     * Compute style object
     * @return {?} style object
     */
    NgxGravatarDirective.prototype.avatarStyle = /**
     * Compute style object
     * @return {?} style object
     */
    function () {
        /** @type {?} */
        var style = {
            width: this.size + 'px',
            height: this.size + 'px',
            borderRadius: this.round ? this.defaultConfig.borderRadius : this.cornerRadius + 'px',
            borderStyle: this.defaultConfig.hasBorder || this.borderColor || this.borderWidth ? this.defaultConfig.borderStyle : 'none',
            borderColor: this.borderColor ? this.borderColor : this.defaultConfig.borderColor,
            borderWidth: this.borderWidth ? this.borderWidth + 'px' : this.defaultConfig.borderWidth + 'px',
            backgroundColor: this.backgroundColor ? this.backgroundColor : this.defaultConfig.backgroundColor,
        };
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, style, this.style);
    };
    /**
     * Set style for the avatar
     * @param {?} styles style object
     * @return {?}
     */
    NgxGravatarDirective.prototype.setStyle = /**
     * Set style for the avatar
     * @param {?} styles style object
     * @return {?}
     */
    function (styles) {
        var _this = this;
        Object.keys(styles).forEach(function (key) {
            _this.renderer.setStyle(_this.elementRef.nativeElement, key, styles[key]);
        });
    };
    NgxGravatarDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngx-gravatar], [ngxGravatar]'
                },] },
    ];
    /** @nocollapse */
    NgxGravatarDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: NgxGravatarService }
    ]; };
    NgxGravatarDirective.propDecorators = {
        src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fallback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rating: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        round: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cornerRadius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        borderColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        borderWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        preferGravatar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        ratio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NgxGravatarDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GravatarModule = /** @class */ (function () {
    function GravatarModule() {
    }
    /**
     * @param {?} gravatarConfig
     * @return {?}
     */
    GravatarModule.forRoot = /**
     * @param {?} gravatarConfig
     * @return {?}
     */
    function (gravatarConfig) {
        return {
            ngModule: GravatarModule,
            providers: [
                {
                    provide: GRAVATAR_CONFIG_TOKEN,
                    useValue: gravatarConfig
                }
            ]
        };
    };
    GravatarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        NgxGravatarDirective
                    ],
                    exports: [
                        NgxGravatarDirective
                    ],
                    providers: [
                        NgxGravatarService
                    ]
                },] },
    ];
    return GravatarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdyYXZhdGFyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtZ3JhdmF0YXIvbGliL2dyYXZhdGFyLWNvbmZpZy50b2tlbi50cyIsIm5nOi8vbmd4LWdyYXZhdGFyL2xpYi9uZ3gtZ3JhdmF0YXIuZW51bXMudHMiLCJuZzovL25neC1ncmF2YXRhci9saWIvbmd4LWdyYXZhdGFyLmNvbnN0YW50cy50cyIsIm5nOi8vbmd4LWdyYXZhdGFyL2xpYi9uZ3gtZ3JhdmF0YXIuc2VydmljZS50cyIsIm5nOi8vbmd4LWdyYXZhdGFyL2xpYi9uZ3gtZ3JhdmF0YXIuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtZ3JhdmF0YXIvbGliL2dyYXZhdGFyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR3JhdmF0YXJDb25maWcgfSBmcm9tICcuL2dyYXZhdGFyLWNvbmZpZyc7XG5cbi8qKlxuICogSW5qZWN0aW9uIHRva2VuIGZvciBncmF2YXRhciBjb25maWd1cmF0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBHUkFWQVRBUl9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48R3JhdmF0YXJDb25maWc+KCdncmF2YXRhckN1c3RvbS5jb25maWcnKTtcbiIsIi8vIFZpc2l0IGh0dHBzOi8vZW4uZ3JhdmF0YXIuY29tL3NpdGUvaW1wbGVtZW50L2ltYWdlcyBmb3IgbW9yZSBpbmZvcm1hdGlvblxuZXhwb3J0IGVudW0gRkFMTEJBQ0sge1xuICBibGFuayA9ICdibGFuaycsXG4gIGlkZW50aWNvbiA9ICdpZGVudGljb24nLFxuICBtbSA9ICdtbScsXG4gIG1vbnN0ZXJpZCA9ICdtb25zdGVyaWQnLFxuICByZXRybyA9ICdyZXRybycsXG4gIHJvYm9oYXNoID0gJ3JvYm9oYXNoJyxcbiAgd2F2YXRhciA9ICd3YXZhdGFyJ1xufVxuXG5leHBvcnQgZW51bSBSQVRJTkcge1xuICBnID0gJ2cnLFxuICBwZyA9ICdwZycsXG4gIHIgPSAncicsXG4gIHggPSAneCdcbn1cblxuZXhwb3J0IHR5cGUgRmFsbGJhY2tUeXBlID0ga2V5b2YgdHlwZW9mIEZBTExCQUNLO1xuXG5leHBvcnQgdHlwZSBSYXRpbmdUeXBlID0ga2V5b2YgdHlwZW9mIFJBVElORztcbiIsImltcG9ydCB7IEdyYXZhdGFyQ29uZmlnIH0gZnJvbSAnLi9ncmF2YXRhci1jb25maWcnO1xuaW1wb3J0IHsgRkFMTEJBQ0ssIFJBVElORyB9IGZyb20gJy4vbmd4LWdyYXZhdGFyLmVudW1zJztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ09ORklHOiBHcmF2YXRhckNvbmZpZyA9IHtcbiAgZmFsbGJhY2s6IEZBTExCQUNLLnJldHJvLFxuICBzaXplOiA0MCxcbiAgY29ybmVyUmFkaXVzOiAwLFxuICBwcmVmZXJHcmF2YXRhcjogZmFsc2UsXG4gIGhhc0JvcmRlcjogZmFsc2UsXG4gIGJvcmRlckNvbG9yOiAnIzAwMDAwMCcsXG4gIGJvcmRlclJhZGl1czogJzUwJScsXG4gIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICBib3JkZXJXaWR0aDogMSxcbiAgcm91bmQ6IHRydWUsXG4gIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgcmF0aW5nOiBSQVRJTkcuZyxcbiAgcmF0aW86IDJcbn07XG4iLCJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWQ1IH0gZnJvbSAndHMtbWQ1L2Rpc3QvbWQ1JztcbmltcG9ydCB7IEdyYXZhdGFyQ29uZmlnIH0gZnJvbSAnLi9ncmF2YXRhci1jb25maWcnO1xuaW1wb3J0IHsgR1JBVkFUQVJfQ09ORklHX1RPS0VOIH0gZnJvbSAnLi9ncmF2YXRhci1jb25maWcudG9rZW4nO1xuaW1wb3J0IHsgREVGQVVMVF9DT05GSUcgfSBmcm9tICcuL25neC1ncmF2YXRhci5jb25zdGFudHMnO1xuaW1wb3J0IHsgRkFMTEJBQ0ssIEZhbGxiYWNrVHlwZSwgUkFUSU5HLCBSYXRpbmdUeXBlIH0gZnJvbSAnLi9uZ3gtZ3JhdmF0YXIuZW51bXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmd4R3JhdmF0YXJTZXJ2aWNlIHtcblxuICBwcml2YXRlIGRlZmF1bHRDb25maWc6IEdyYXZhdGFyQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoR1JBVkFUQVJfQ09ORklHX1RPS0VOKSBwcml2YXRlIGdyYXZhdGFyQ29uZmlnOiBHcmF2YXRhckNvbmZpZykge1xuICAgIHRoaXMuZGVmYXVsdENvbmZpZyA9IHsgLi4uREVGQVVMVF9DT05GSUcgfTtcblxuICAgIGlmICh0aGlzLmdyYXZhdGFyQ29uZmlnKSB7XG4gICAgICB0aGlzLmdyYXZhdGFyQ29uZmlnLnJhdGluZyA9IDxSYXRpbmdUeXBlPnRoaXMuZGV0ZXJtaW5lUmF0aW5nKHRoaXMuZ3JhdmF0YXJDb25maWcucmF0aW5nKTtcbiAgICAgIHRoaXMuZ3JhdmF0YXJDb25maWcuZmFsbGJhY2sgPSA8RmFsbGJhY2tUeXBlPnRoaXMuZGV0ZXJtaW5lRmFsbGJhY2sodGhpcy5ncmF2YXRhckNvbmZpZy5mYWxsYmFjayk7XG4gICAgICB0aGlzLmRlZmF1bHRDb25maWcgPSB7IC4uLnRoaXMuZGVmYXVsdENvbmZpZywgLi4udGhpcy5ncmF2YXRhckNvbmZpZyB9O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gZGVmYXVsdENvbmZpZyBvYmplY3RcbiAgICovXG4gIGdldERlZmF1bHRDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdENvbmZpZztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBncmF2YXRhciB1cmxcbiAgICogQHBhcmFtIGVtYWlsIGlzIGEgc3RyaW5nLiBJZiBlbWFpbCBpcyBub3QgYSBzdHJpbmcsIGVtYWlsIHdpbGwgYmUgc2V0IHRvIGVtcHR5IHN0cmluZyBcIlwiIGJ5IGRlZmF1bHRcbiAgICogQHBhcmFtIHNpemUgbnVtYmVyXG4gICAqIEBwYXJhbSByYXRpbmcgc3RyaW5nXG4gICAqIEBwYXJhbSBmYWxsYmFjayBzdHJpbmdcbiAgICogQHJldHVybiBncmF2YXRhciB1cmxcbiAgICovXG4gIGdlbmVyYXRlR3JhdmF0YXJVcmwoZW1haWw6IHN0cmluZywgc2l6ZT86IG51bWJlciwgcmF0aW5nPzogc3RyaW5nLCBmYWxsYmFjaz86IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICBlbWFpbCA9IGVtYWlsLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIENvbXBsYWluIGVtYWlsIGlzIG5vdCBhIHN0cmluZ1xuICAgICAgY29uc29sZS5lcnJvcihgW25neC1ncmF2YXRhcl0gLSBFbWFpbCAoJHtlbWFpbH0pIGlzIG5vdCBhIHN0cmluZy4gRW1wdHkgc3RyaW5nIGlzIHVzZWQgYXMgYSBkZWZhdWx0IGVtYWlsLmApO1xuICAgICAgZW1haWwgPSAnJztcbiAgICB9XG4gICAgc2l6ZSA9IHNpemUgPyBzaXplIDogdGhpcy5kZWZhdWx0Q29uZmlnLnNpemU7XG4gICAgcmF0aW5nID0gdGhpcy5kZXRlcm1pbmVSYXRpbmcocmF0aW5nLCB0aGlzLmRlZmF1bHRDb25maWcucmF0aW5nKTtcbiAgICBmYWxsYmFjayA9IHRoaXMuZGV0ZXJtaW5lRmFsbGJhY2soZmFsbGJhY2ssIHRoaXMuZGVmYXVsdENvbmZpZy5mYWxsYmFjayk7XG4gICAgY29uc3QgZW1haWxIYXNoID0gTWQ1Lmhhc2hTdHIoZW1haWwpO1xuICAgIHJldHVybiBgLy93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci8ke2VtYWlsSGFzaH0/cz0ke3NpemV9JnI9JHtyYXRpbmd9JmQ9JHtmYWxsYmFja31gO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBncmF2YXRhciBmYWxsYmFjayBzdHJpbmdcbiAgICogQHBhcmFtIGZhbGxiYWNrIHN0cmluZ1xuICAgKiBAcGFyYW0gZGVmYXVsdEZhbGxiYWNrIHN0cmluZ1xuICAgKiBAcmV0dXJuXG4gICAqL1xuICBwcml2YXRlIGRldGVybWluZUZhbGxiYWNrKGZhbGxiYWNrOiBzdHJpbmcsIGRlZmF1bHRGYWxsYmFjazogc3RyaW5nID0gREVGQVVMVF9DT05GSUcuZmFsbGJhY2spIHtcbiAgICBpZiAoZmFsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRGYWxsYmFjaztcbiAgICB9XG5cbiAgICBpZiAoRkFMTEJBQ0tbZmFsbGJhY2tdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIENvbXBsYWluIGludmFsaWQgZmFsbGJhY2tcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFtuZ3gtZ3JhdmF0YXJdIC0gXCIke2ZhbGxiYWNrfVwiIGlzIGludmFsaWQgZ3JhdmF0YXIgZmFsbGJhY2sgdHlwZS4gYCArXG4gICAgICAgIGBEZWZhdWx0IGZhbGxiYWNrIFwiJHtkZWZhdWx0RmFsbGJhY2t9XCIgaXMgdXNlZC5gKTtcbiAgICAgIHJldHVybiBkZWZhdWx0RmFsbGJhY2s7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbGxiYWNrO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBncmF2YXRhciByYXRpbmcgc3RyaW5nXG4gICAqIEBwYXJhbSByYXRpbmcgc3RyaW5nXG4gICAqIEBwYXJhbSBkZWZhdWx0UmF0aW5nIHN0cmluZ1xuICAgKiBAcmV0dXJuXG4gICAqL1xuICBwcml2YXRlIGRldGVybWluZVJhdGluZyhyYXRpbmc6IHN0cmluZywgZGVmYXVsdFJhdGluZzogc3RyaW5nID0gREVGQVVMVF9DT05GSUcucmF0aW5nKSB7XG4gICAgaWYgKHJhdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFJhdGluZztcbiAgICB9XG5cbiAgICBpZiAoUkFUSU5HW3JhdGluZ10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS5lcnJvcihgW25neC1ncmF2YXRhcl0gLSBcIiR7cmF0aW5nfVwiIGlzIGludmFsaWQgZ3JhdmF0YXIgcmF0aW5nIHR5cGUuIGAgK1xuICAgICAgICBgRGVmYXVsdCByYXRpbmcgXCIke2RlZmF1bHRSYXRpbmd9XCIgaXMgdXNlZC5gKTtcbiAgICAgIHJldHVybiBkZWZhdWx0UmF0aW5nO1xuICAgIH1cblxuICAgIHJldHVybiByYXRpbmc7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neEdyYXZhdGFyU2VydmljZSB9IGZyb20gJy4vbmd4LWdyYXZhdGFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgR3JhdmF0YXJDb25maWcgfSBmcm9tICcuL2dyYXZhdGFyLWNvbmZpZyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ3gtZ3JhdmF0YXJdLCBbbmd4R3JhdmF0YXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hHcmF2YXRhckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgQElucHV0KCkgc3JjOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGVtYWlsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNpemU6IG51bWJlcjtcbiAgQElucHV0KCkgZmFsbGJhY2s6IHN0cmluZzsgLy8gZW51bTogWydibGFuaycsICdpZGVudGljb24nLCAnbW0nLCAnbW9uc3RlcmlkJywgJ3JldHJvJywgJ3JvYm9oYXNoJywgJ3dhdmF0YXInXVxuICBASW5wdXQoKSByYXRpbmc6IHN0cmluZzsgLy8gZW51bTogWydnJywgJ3BnJywgJ3InLCAneCddXG4gIEBJbnB1dCgpIHJvdW5kOiBib29sZWFuO1xuICBASW5wdXQoKSBjb3JuZXJSYWRpdXM6IG51bWJlcjtcbiAgQElucHV0KCkgYm9yZGVyQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgYm9yZGVyV2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCkgc3R5bGU6IGFueSA9IHt9O1xuICBASW5wdXQoKSBwcmVmZXJHcmF2YXRhcjogYm9vbGVhbjtcbiAgQElucHV0KCkgYmFja2dyb3VuZENvbG9yOiBib29sZWFuO1xuICBASW5wdXQoKSByYXRpbzogbnVtYmVyO1xuXG4gIGluaXRpYWxpemVkOiBib29sZWFuO1xuICBkZWZhdWx0Q29uZmlnOiBHcmF2YXRhckNvbmZpZztcbiAgcmVxdWVzdGVkU2l6ZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBncmF2YXRhclNlcnZpY2U6IE5neEdyYXZhdGFyU2VydmljZSxcbiAgKSB7XG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIHRoaXMuZGVmYXVsdENvbmZpZyA9IHRoaXMuZ3JhdmF0YXJTZXJ2aWNlLmdldERlZmF1bHRDb25maWcoKTtcbiAgICAvLyBMaXN0ZW4gZm9yIGVycm9yIHdoZW4gZmV0Y2hpbmcgY3VzdG9tIHNyY1xuICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZXJyb3InLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZUF2YXRhcih0cnVlKTsgLy8gRm9yY2UgdXNpbmcgZ3JhdmF0YXJcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZUF2YXRhcigpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZUF2YXRhcigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZGVmYXVsdCB2YWx1ZXMgZm9yIHVzZXIgaW5wdXRzIGlmIHRoZXkgYXJlIG5vdCBwcm92aWRlZFxuICAgKi9cbiAgcHJpdmF0ZSBzZXREZWZhdWx0VmFsdWVzKCkge1xuICAgIHRoaXMuc2l6ZSA9IHRoaXMuY29tcHV0ZVNpemUoKTtcbiAgICB0aGlzLnJhdGlvID0gdGhpcy5yYXRpbyA9PT0gdW5kZWZpbmVkID8gdGhpcy5kZWZhdWx0Q29uZmlnLnJhdGlvIDogdGhpcy5yYXRpbztcbiAgICB0aGlzLnJlcXVlc3RlZFNpemUgPSB0aGlzLnNpemUgKiB0aGlzLnJhdGlvO1xuICAgIHRoaXMucm91bmQgPSB0aGlzLnJvdW5kID09PSB1bmRlZmluZWQgPyB0aGlzLmRlZmF1bHRDb25maWcucm91bmQgOiB0aGlzLnJvdW5kO1xuICAgIHRoaXMuY29ybmVyUmFkaXVzID0gdGhpcy5jb3JuZXJSYWRpdXMgPT09IHVuZGVmaW5lZCA/IHRoaXMuZGVmYXVsdENvbmZpZy5jb3JuZXJSYWRpdXMgOiB0aGlzLmNvcm5lclJhZGl1cztcbiAgICB0aGlzLnByZWZlckdyYXZhdGFyID0gdGhpcy5wcmVmZXJHcmF2YXRhciA9PT0gdW5kZWZpbmVkID8gdGhpcy5kZWZhdWx0Q29uZmlnLnByZWZlckdyYXZhdGFyIDogdGhpcy5wcmVmZXJHcmF2YXRhcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGF2YXRhci5cbiAgICogQ3VzdG9tIHNvdXJjZSBoYXMgaGlnaGVyIHByaW9yaXR5IGlmIHByZWZlckdyYXZhdGFyIGlzIG5vdCBzZXQgb24uXG4gICAqIEZpbmFsbHksIHNldCBzdHlsZXMgZm9yIHRoZSBhdmF0YXIuXG4gICAqL1xuICBwcml2YXRlIGluaXRpYWxpemVBdmF0YXIoZm9yY2VkR3JhdmF0YXI/OiBib29sZWFuKSB7XG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWVzKCk7XG4gICAgbGV0IHVybCA9ICcnO1xuICAgIGlmICh0aGlzLnByZWZlckdyYXZhdGFyIHx8IGZvcmNlZEdyYXZhdGFyKSB7XG4gICAgICB1cmwgPSB0aGlzLmdyYXZhdGFyU2VydmljZS5nZW5lcmF0ZUdyYXZhdGFyVXJsKHRoaXMuZW1haWwsIHRoaXMucmVxdWVzdGVkU2l6ZSwgdGhpcy5yYXRpbmcsIHRoaXMuZmFsbGJhY2spO1xuICAgIH0gZWxzZSB7IC8vIHRoaXMucHJlZmVyR3JhdmF0YXIgPT0gZmFsc2VcbiAgICAgIGlmICh0aGlzLnNyYykge1xuICAgICAgICB1cmwgPSB0aGlzLnNyYztcbiAgICAgIH0gZWxzZSB7IC8vIGZhbGxiYWNrIHRvIGdyYXZhdGFyXG4gICAgICAgIHVybCA9IHRoaXMuZ3JhdmF0YXJTZXJ2aWNlLmdlbmVyYXRlR3JhdmF0YXJVcmwodGhpcy5lbWFpbCwgdGhpcy5yZXF1ZXN0ZWRTaXplLCB0aGlzLnJhdGluZywgdGhpcy5mYWxsYmFjayk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdzcmMnLCB1cmwpO1xuICAgIHRoaXMuc2V0U3R5bGUodGhpcy5hdmF0YXJTdHlsZSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlIHRoZSBzaXplIG9mIHRoZSBhdmF0YXJcbiAgICogQHJldHVybiBzaXplXG4gICAqL1xuICBwcml2YXRlIGNvbXB1dGVTaXplKCk6IG51bWJlciB7XG4gICAgbGV0IHNpemUgPSB0aGlzLnNpemUgPT09IHVuZGVmaW5lZCA/IHRoaXMuZGVmYXVsdENvbmZpZy5zaXplIDogdGhpcy5zaXplO1xuICAgIGlmICh0aGlzLnN0eWxlICYmIHRoaXMuc3R5bGUud2lkdGgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5zdHlsZS53aWR0aC50cmltKCk7XG4gICAgICAgIGlmICh3aWR0aC5tYXRjaCgvXlxcZCtweCQvKSkgeyAvLyB3aWR0aCB3aXRoIHB4IHVuaXRcbiAgICAgICAgICBzaXplID0gd2lkdGgucmVwbGFjZSgncHgnLCAnJyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHNpemU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzaXplO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGUgc3R5bGUgb2JqZWN0XG4gICAqIEByZXR1cm4gc3R5bGUgb2JqZWN0XG4gICAqL1xuICBwcml2YXRlIGF2YXRhclN0eWxlKCkge1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgd2lkdGg6IHRoaXMuc2l6ZSArICdweCcsXG4gICAgICBoZWlnaHQ6IHRoaXMuc2l6ZSArICdweCcsXG4gICAgICBib3JkZXJSYWRpdXM6IHRoaXMucm91bmQgPyB0aGlzLmRlZmF1bHRDb25maWcuYm9yZGVyUmFkaXVzIDogdGhpcy5jb3JuZXJSYWRpdXMgKyAncHgnLFxuICAgICAgYm9yZGVyU3R5bGU6IHRoaXMuZGVmYXVsdENvbmZpZy5oYXNCb3JkZXIgfHwgdGhpcy5ib3JkZXJDb2xvciB8fCB0aGlzLmJvcmRlcldpZHRoID8gdGhpcy5kZWZhdWx0Q29uZmlnLmJvcmRlclN0eWxlIDogJ25vbmUnLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoaXMuYm9yZGVyQ29sb3IgPyB0aGlzLmJvcmRlckNvbG9yIDogdGhpcy5kZWZhdWx0Q29uZmlnLmJvcmRlckNvbG9yLFxuICAgICAgYm9yZGVyV2lkdGg6IHRoaXMuYm9yZGVyV2lkdGggPyB0aGlzLmJvcmRlcldpZHRoICsgJ3B4JyA6IHRoaXMuZGVmYXVsdENvbmZpZy5ib3JkZXJXaWR0aCArICdweCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yID8gdGhpcy5iYWNrZ3JvdW5kQ29sb3IgOiB0aGlzLmRlZmF1bHRDb25maWcuYmFja2dyb3VuZENvbG9yLFxuICAgIH07XG4gICAgcmV0dXJuIHsgLi4uc3R5bGUsIC4uLnRoaXMuc3R5bGUgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgc3R5bGUgZm9yIHRoZSBhdmF0YXJcbiAgICogQHBhcmFtIHN0eWxlcyBzdHlsZSBvYmplY3RcbiAgICovXG4gIHByaXZhdGUgc2V0U3R5bGUoc3R5bGVzOiBhbnkpIHtcbiAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGtleSwgc3R5bGVzW2tleV0pO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ3hHcmF2YXRhclNlcnZpY2UgfSBmcm9tICcuL25neC1ncmF2YXRhci5zZXJ2aWNlJztcbmltcG9ydCB7IEdyYXZhdGFyQ29uZmlnIH0gZnJvbSAnLi9ncmF2YXRhci1jb25maWcnO1xuaW1wb3J0IHsgR1JBVkFUQVJfQ09ORklHX1RPS0VOIH0gZnJvbSAnLi9ncmF2YXRhci1jb25maWcudG9rZW4nO1xuaW1wb3J0IHsgTmd4R3JhdmF0YXJEaXJlY3RpdmUgfSBmcm9tICcuL25neC1ncmF2YXRhci5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOZ3hHcmF2YXRhckRpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTmd4R3JhdmF0YXJEaXJlY3RpdmVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTmd4R3JhdmF0YXJTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgR3JhdmF0YXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChncmF2YXRhckNvbmZpZzogR3JhdmF0YXJDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEdyYXZhdGFyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBHUkFWQVRBUl9DT05GSUdfVE9LRU4sXG4gICAgICAgICAgdXNlVmFsdWU6IGdyYXZhdGFyQ29uZmlnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7O0FBTUEsSUFBYSxxQkFBcUIsR0FBRyxJQUFJLGNBQWMsQ0FBaUIsdUJBQXVCLENBQUM7Ozs7Ozs7O0lDSjlGLE9BQVEsT0FBTztJQUNmLFdBQVksV0FBVztJQUN2QixJQUFLLElBQUk7SUFDVCxXQUFZLFdBQVc7SUFDdkIsT0FBUSxPQUFPO0lBQ2YsVUFBVyxVQUFVO0lBQ3JCLFNBQVUsU0FBUzs7OztJQUluQixHQUFJLEdBQUc7SUFDUCxJQUFLLElBQUk7SUFDVCxHQUFJLEdBQUc7SUFDUCxHQUFJLEdBQUc7Ozs7Ozs7QUNkVDtBQUVBLElBQWEsY0FBYyxHQUFtQjtJQUM1QyxRQUFRLEVBQUUsUUFBUSxDQUFDLEtBQUs7SUFDeEIsSUFBSSxFQUFFLEVBQUU7SUFDUixZQUFZLEVBQUUsQ0FBQztJQUNmLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLFlBQVksRUFBRSxLQUFLO0lBQ25CLFdBQVcsRUFBRSxPQUFPO0lBQ3BCLFdBQVcsRUFBRSxDQUFDO0lBQ2QsS0FBSyxFQUFFLElBQUk7SUFDWCxlQUFlLEVBQUUsYUFBYTtJQUM5QixNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDaEIsS0FBSyxFQUFFLENBQUM7Q0FDVCxDQUFDOzs7Ozs7O0lDTEEsNEJBQStELGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUMzRixJQUFJLENBQUMsYUFBYSxnQkFBUSxjQUFjLENBQUUsQ0FBQztRQUUzQyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLHFCQUFlLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO1lBQzFGLElBQUksQ0FB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

/***/ }),

/***/ "./node_modules/ts-md5/dist/md5.js":
/*!*****************************************!*\
  !*** ./node_modules/ts-md5/dist/md5.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*

TypeScript Md5
==============

Based on work by
* Joseph Myers: http://www.myersdaily.org/joseph/javascript/md5-text.html
* André Cruz: https://github.com/satazor/SparkMD5
* Raymond Hill: https://github.com/gorhill/yamd5.js

Effectively a TypeScrypt re-write of Raymond Hill JS Library

The MIT License (MIT)

Copyright (C) 2014 Raymond Hill

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (C) 2015 André Cruz <amdfcruz@gmail.com>

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO.


*/
Object.defineProperty(exports, "__esModule", { value: true });
var Md5 = (function () {
    function Md5() {
        this._state = new Int32Array(4);
        this._buffer = new ArrayBuffer(68);
        this._buffer8 = new Uint8Array(this._buffer, 0, 68);
        this._buffer32 = new Uint32Array(this._buffer, 0, 17);
        this.start();
    }
    // One time hashing functions
    Md5.hashStr = function (str, raw) {
        if (raw === void 0) { raw = false; }
        return this.onePassHasher
            .start()
            .appendStr(str)
            .end(raw);
    };
    Md5.hashAsciiStr = function (str, raw) {
        if (raw === void 0) { raw = false; }
        return this.onePassHasher
            .start()
            .appendAsciiStr(str)
            .end(raw);
    };
    Md5._hex = function (x) {
        var hc = Md5.hexChars;
        var ho = Md5.hexOut;
        var n;
        var offset;
        var j;
        var i;
        for (i = 0; i < 4; i += 1) {
            offset = i * 8;
            n = x[i];
            for (j = 0; j < 8; j += 2) {
                ho[offset + 1 + j] = hc.charAt(n & 0x0F);
                n >>>= 4;
                ho[offset + 0 + j] = hc.charAt(n & 0x0F);
                n >>>= 4;
            }
        }
        return ho.join('');
    };
    Md5._md5cycle = function (x, k) {
        var a = x[0];
        var b = x[1];
        var c = x[2];
        var d = x[3];
        // ff()
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        // gg()
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        // hh()
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        // ii()
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
    };
    Md5.prototype.start = function () {
        this._dataLength = 0;
        this._bufferLength = 0;
        this._state.set(Md5.stateIdentity);
        return this;
    };
    // Char to code point to to array conversion:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
    // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
    Md5.prototype.appendStr = function (str) {
        var buf8 = this._buffer8;
        var buf32 = this._buffer32;
        var bufLen = this._bufferLength;
        var code;
        var i;
        for (i = 0; i < str.length; i += 1) {
            code = str.charCodeAt(i);
            if (code < 128) {
                buf8[bufLen++] = code;
            }
            else if (code < 0x800) {
                buf8[bufLen++] = (code >>> 6) + 0xC0;
                buf8[bufLen++] = code & 0x3F | 0x80;
            }
            else if (code < 0xD800 || code > 0xDBFF) {
                buf8[bufLen++] = (code >>> 12) + 0xE0;
                buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                buf8[bufLen++] = (code & 0x3F) | 0x80;
            }
            else {
                code = ((code - 0xD800) * 0x400) + (str.charCodeAt(++i) - 0xDC00) + 0x10000;
                if (code > 0x10FFFF) {
                    throw new Error('Unicode standard supports code points up to U+10FFFF');
                }
                buf8[bufLen++] = (code >>> 18) + 0xF0;
                buf8[bufLen++] = (code >>> 12 & 0x3F) | 0x80;
                buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                buf8[bufLen++] = (code & 0x3F) | 0x80;
            }
            if (bufLen >= 64) {
                this._dataLength += 64;
                Md5._md5cycle(this._state, buf32);
                bufLen -= 64;
                buf32[0] = buf32[16];
            }
        }
        this._bufferLength = bufLen;
        return this;
    };
    Md5.prototype.appendAsciiStr = function (str) {
        var buf8 = this._buffer8;
        var buf32 = this._buffer32;
        var bufLen = this._bufferLength;
        var i;
        var j = 0;
        for (;;) {
            i = Math.min(str.length - j, 64 - bufLen);
            while (i--) {
                buf8[bufLen++] = str.charCodeAt(j++);
            }
            if (bufLen < 64) {
                break;
            }
            this._dataLength += 64;
            Md5._md5cycle(this._state, buf32);
            bufLen = 0;
        }
        this._bufferLength = bufLen;
        return this;
    };
    Md5.prototype.appendByteArray = function (input) {
        var buf8 = this._buffer8;
        var buf32 = this._buffer32;
        var bufLen = this._bufferLength;
        var i;
        var j = 0;
        for (;;) {
            i = Math.min(input.length - j, 64 - bufLen);
            while (i--) {
                buf8[bufLen++] = input[j++];
            }
            if (bufLen < 64) {
                break;
            }
            this._dataLength += 64;
            Md5._md5cycle(this._state, buf32);
            bufLen = 0;
        }
        this._bufferLength = bufLen;
        return this;
    };
    Md5.prototype.getState = function () {
        var self = this;
        var s = self._state;
        return {
            buffer: String.fromCharCode.apply(null, self._buffer8),
            buflen: self._bufferLength,
            length: self._dataLength,
            state: [s[0], s[1], s[2], s[3]]
        };
    };
    Md5.prototype.setState = function (state) {
        var buf = state.buffer;
        var x = state.state;
        var s = this._state;
        var i;
        this._dataLength = state.length;
        this._bufferLength = state.buflen;
        s[0] = x[0];
        s[1] = x[1];
        s[2] = x[2];
        s[3] = x[3];
        for (i = 0; i < buf.length; i += 1) {
            this._buffer8[i] = buf.charCodeAt(i);
        }
    };
    Md5.prototype.end = function (raw) {
        if (raw === void 0) { raw = false; }
        var bufLen = this._bufferLength;
        var buf8 = this._buffer8;
        var buf32 = this._buffer32;
        var i = (bufLen >> 2) + 1;
        var dataBitsLen;
        this._dataLength += bufLen;
        buf8[bufLen] = 0x80;
        buf8[bufLen + 1] = buf8[bufLen + 2] = buf8[bufLen + 3] = 0;
        buf32.set(Md5.buffer32Identity.subarray(i), i);
        if (bufLen > 55) {
            Md5._md5cycle(this._state, buf32);
            buf32.set(Md5.buffer32Identity);
        }
        // Do the final computation based on the tail and length
        // Beware that the final length may not fit in 32 bits so we take care of that
        dataBitsLen = this._dataLength * 8;
        if (dataBitsLen <= 0xFFFFFFFF) {
            buf32[14] = dataBitsLen;
        }
        else {
            var matches = dataBitsLen.toString(16).match(/(.*?)(.{0,8})$/);
            if (matches === null) {
                return;
            }
            var lo = parseInt(matches[2], 16);
            var hi = parseInt(matches[1], 16) || 0;
            buf32[14] = lo;
            buf32[15] = hi;
        }
        Md5._md5cycle(this._state, buf32);
        return raw ? this._state : Md5._hex(this._state);
    };
    // Private Static Variables
    Md5.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]);
    Md5.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    Md5.hexChars = '0123456789abcdef';
    Md5.hexOut = [];
    // Permanent instance is to use for one-call hashing
    Md5.onePassHasher = new Md5();
    return Md5;
}());
exports.Md5 = Md5;
if (Md5.hashStr('hello') !== '5d41402abc4b2a76b9719d911017c592') {
    console.error('Md5 self test failed.');
}
//# sourceMappingURL=md5.js.map

/***/ }),

/***/ "./src/app/Services/associate.service.ts":
/*!***********************************************!*\
  !*** ./src/app/Services/associate.service.ts ***!
  \***********************************************/
/*! exports provided: AssociateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociateService", function() { return AssociateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _Base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Base.service */ "./src/app/Services/Base.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AssociateService = /** @class */ (function (_super) {
    __extends(AssociateService, _super);
    function AssociateService(http, appConfig, errMsg) {
        var _this = _super.call(this, http, appConfig.urls.url('associates'), errMsg) || this;
        _this.http = http;
        _this.appConfig = appConfig;
        _this.errMsg = errMsg;
        return _this;
    }
    AssociateService.prototype.getAssociateByInvestorId = function (id) {
        return this.httpClient.get(this.appConfig.urls.url('byInvestorId') + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    AssociateService.prototype.getOneAssociateByInvestorId = function (id) {
        return this.httpClient.get(this.appConfig.urls.url('GetOneAssociateByInvestorID') + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    AssociateService.prototype.uploadDocument = function (resource) {
        return this.httpClient.post(this.appConfig.urls.url('document'), resource).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    AssociateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"]])
    ], AssociateService);
    return AssociateService;
}(_Base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ }),

/***/ "./src/app/components/investor/associate/associate-form/associate-form.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/investor/associate/associate-form/associate-form.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header title=\"manager\" icon=\"person\"></app-page-header>\r\n<div class=\"page-content mat-elevation-z8\">\r\n  <div class=\"error-bar\" style=\"width:100%; \" *ngIf=\"errors.length > 0\">\r\n    <ul>\r\n        <li *ngFor=\"let error of errors\">\r\n            {{ error }}\r\n        </li>\r\n    </ul>\r\n  </div>\r\n  <form #form=\"ngForm\" [formGroup]=\"associateForm\" novalidate (ngSubmit)=\"onSubmit()\" fxLayout=\"column\" autocomplete=\"off\">\r\n    <div style=\"margin: 10px\">\r\n        <table style=\"border: 0px; width: 650px;\">\r\n          <tr style=\"margin-left: 20px\">\r\n              <td >\r\n                  <h4>{{'investors.editor.MangerProfile' | translate}}</h4>\r\n                  <mat-divider></mat-divider>\r\n                  <div id=\"divSole\">\r\n                    \r\n                          <div>\r\n                            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n                              <mat-form-field fxFlex>\r\n                                <mat-label>{{'investors.editor.FirstNameEng' | translate}}</mat-label>\r\n                                <input matInput formControlName=\"cFirstNameEng\" required/>\r\n                                <mat-error *ngIf=\"firstNameEng.hasError('required')\">\r\n                                  {{'common.validation.Required' | translate}}\r\n                                </mat-error>\r\n                                <mat-error *ngIf=\"firstNameEng.hasError('minlength')\">\r\n                                  {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\r\n                                </mat-error>\r\n                                <mat-error *ngIf=\"!firstNameEng.hasError('required') && !firstNameEng.hasError('minlength')\r\n                                                  && firstNameEng.hasError('pattern')\">\r\n                                  {{'common.validation.UseLatinOnly' | translate}}\r\n                                </mat-error>\r\n                              </mat-form-field>\r\n                              <mat-form-field fxFlex>\r\n                                <mat-label>{{'investors.editor.FatherNameEng' | translate}}</mat-label>\r\n                                <input matInput formControlName=\"cFatherNameEng\" required/>\r\n                                <mat-error *ngIf=\"fatherNameEng.hasError('required')\">\r\n                                  {{'common.validation.Required' | translate}}\r\n                                </mat-error>\r\n                                <mat-error *ngIf=\"!fatherNameEng.hasError('required') && fatherNameEng.hasError('minlength')\">\r\n                                  {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\r\n                                </mat-error>\r\n                                <mat-error *ngIf=\"!fatherNameEng.hasError('required') && !fatherNameEng.hasError('minlength')\r\n                                                      && firstNameEng.hasError('pattern')\">\r\n                                  {{'common.validation.UseLatinOnly' | translate}}\r\n                                </mat-error>\r\n                              </mat-form-field>\r\n                              <mat-form-field fxFlex>\r\n                                <mat-label>{{'investors.editor.GrandNameEng' | translate}}</mat-label>\r\n                                <input matInput formControlName=\"cGrandNameEng\" required/>\r\n                                <mat-error *ngIf=\"grandNameEng.hasError('required')\">\r\n                                  {{'common.validation.Required' | translate}}\r\n                                </mat-error>\r\n                                <mat-error *ngIf=\"!grandNameEng.hasError('required') && grandNameEng.hasError('minlength')\">\r\n                                  {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\r\n                                </mat-error>\r\n                              </mat-form-field>\r\n                              <mat-error *ngIf=\"!grandNameEng.hasError('required') && !grandNameEng.hasError('minlength')\r\n                                                  && grandNameEng.hasError('pattern')\">\r\n                                {{'common.validation.UseLatinOnly' | translate}}\r\n                              </mat-error>\r\n                            </div>\r\n                        </div>\r\n                        <div>\r\n                          <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n                            <mat-form-field fxFlex>\r\n                              <mat-label>{{'investors.editor.FirstName' | translate}}</mat-label>\r\n                              <input matInput formControlName=\"cFirstName\" required/>\r\n                              <mat-error *ngIf=\"firstName.hasError('required')\">\r\n                                {{'common.validation.Required' | translate}}\r\n                              </mat-error>\r\n                              <mat-error *ngIf=\"!firstName.hasError('required') && firstName.hasError('minlength')\">\r\n                                {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\r\n                              </mat-error>\r\n                              <mat-error *ngIf=\"!firstName.hasError('required') && !firstName.hasError('minlength')\r\n                                                && firstName.hasError('pattern')\">\r\n                                {{'common.validation.UseEthiopicOnly' | translate}}\r\n                              </mat-error>\r\n                            </mat-form-field>\r\n              \r\n                            <mat-form-field fxFlex>\r\n                              <mat-label>{{'investors.editor.FatherName' | translate}}</mat-label>\r\n                              <input matInput formControlName=\"cFatherName\" required/>\r\n                              <mat-error *ngIf=\"fatherName.hasError('required')\">\r\n                                {{'common.validation.Required' | translate}}\r\n                              </mat-error>\r\n                              <mat-error *ngIf=\"!fatherName.hasError('required') && fatherName.hasError('minlength')\">\r\n                                {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\r\n                              </mat-error>\r\n                              <mat-error *ngIf=\"!fatherName.hasError('required') && !fatherName.hasError('minlength')\r\n                                                    && fatherName.hasError('pattern')\">\r\n                                {{'common.validation.UseEthiopicOnly' | translate}}\r\n                              </mat-error>\r\n                            </mat-form-field>\r\n              \r\n                            <mat-form-field fxFlex>\r\n                              <mat-label>{{'investors.editor.GrandName' | translate}}</mat-label>\r\n                              <input matInput formControlName=\"cGrandName\" required/>\r\n                              <mat-error *ngIf=\"grandName.hasError('required')\">\r\n                                {{'common.validation.Required' | translate }}\r\n                              </mat-error>\r\n                              <mat-error *ngIf=\"!grandName.hasError('required') && grandName.hasError('minlength')\">\r\n                                {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\r\n                              </mat-error>\r\n                              <mat-error *ngIf=\"!grandName.hasError('required') && !grandName.hasError('minlength')\r\n                                                && grandName.hasError('pattern')\">\r\n                                {{'common.validation.UseEthiopicOnly' | translate}}\r\n                              </mat-error>\r\n                            </mat-form-field>\r\n                            \r\n                          </div>\r\n                        </div>\r\n                        \r\n                    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n                      <mat-form-field fxLayoutGap=\"4em\" class=\"col4\">\r\n                        <mat-label>{{'investors.editor.Title' | translate}}</mat-label>\r\n                        <mat-select formControlName=\"Title\">\r\n                          <mat-option *ngFor=\"let title of TitleLookup\" [value]=\"title.LookupId\">\r\n                            {{title.English}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n              \r\n                      <mat-form-field fxLayoutGap=\"4em\" class=\"col4\">\r\n                        <mat-label>{{'investors.editor.Gender' | translate}}</mat-label>\r\n                        <mat-select formControlName=\"cGender\" required>\r\n\r\n                          <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.Id\">\r\n                            {{gender.Desc}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                        <mat-error *ngIf=\"gender.hasError('required')\">\r\n                          {{'common.validation.Required' | translate}}\r\n                        </mat-error>\r\n                      </mat-form-field>\r\n                      <mat-form-field fxLayoutGap=\"4em\">\r\n                        <mat-label>{{'investors.editor.Nationality' | translate}}</mat-label>\r\n                        <mat-select formControlName=\"cNationality\" [compareWith]=\"compareIds\">\r\n                          <mat-option *ngFor=\"let country of nationList\" [value]=\"country.id\">\r\n                            <span>{{country.descriptionEnglish}}</span>\r\n                          </mat-option>\r\n                        </mat-select>\r\n                        <mat-error *ngIf=\"nationality.hasError('required')\">\r\n                          {{'common.validation.Required' | translate}}\r\n                        </mat-error>\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </div>\r\n              </td>\r\n              <td >\r\n                  <div  id=\"divPhoto\" style=\"width: 150px; height: 150px; border:1px dotted gray; margin-top: 20px\">\r\n                      <img [attr.src]='imgPhoto' alt=\"\" />\r\n                      <!-- <input type=\"file\" accept=\"image/*\"  class=\"inputfile\"  required (change)=\"fileChange(input)\" #input /> -->\r\n                      <input type=\"file\" name=\"file\" id=\"file\" class=\"inputfile\" (change)=\"fileChange(input)\" #input /> \r\n                      \r\n                  </div> \r\n                  <label class=\"pickerLabel\" for=\"file\">Pick a Photo</label>\r\n              </td>\r\n          </tr>\r\n        </table>\r\n      \r\n        <h4>{{'investors.editor.MangerAddress' | translate}}</h4>\r\n        <mat-divider></mat-divider>\r\n        <div formGroupName=\"address\">\r\n          <div id=\"divAddress\">\r\n            <div id=\"divAddress1\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n              <mat-form-field fxLayoutGap=\"4em\">\r\n                <mat-label>{{'investors.editor.Region' | translate}}</mat-label>\r\n                <mat-select formControlName=\"RegionId\" (selectionChange)=\"filterRegion($event.value)\"\r\n                            required>\r\n                  <mat-option *ngFor=\"let reg of regions\" [value]=\"reg.RegionId\">\r\n                    <span>{{reg.Description}}</span>\r\n                  </mat-option>\r\n                </mat-select>\r\n                <!-- <mat-error *ngIf=\"region.hasError('required')\">\r\n                    {{'common.validation.Required' | translate}}\r\n                </mat-error> -->\r\n              </mat-form-field>\r\n              <mat-form-field fxLayoutGap=\"4em\">\r\n                <mat-label>{{'investors.editor.Zone' | translate}}</mat-label>\r\n                <mat-select formControlName=\"ZoneId\" (selectionChange)=\"filterZone($event.value)\">\r\n                  <!-- <option value=\"0\">--</option> -->\r\n                  <mat-option value=\"0\">--</mat-option>\r\n                  <mat-option *ngFor=\"let zone of filteredZones\" [value]=\"zone.ZoneId\">\r\n                    <span>{{zone.Description}}</span>\r\n                  </mat-option>\r\n                </mat-select>\r\n\r\n                <!--<mat-error *ngIf=\"zone.hasError('required')\">-->\r\n                <!--{{'common.validation.Required' | translate}}-->\r\n                <!--</mat-error>-->\r\n              </mat-form-field>\r\n              <mat-form-field fxLayoutGap=\"4em\">\r\n                <mat-label>{{'investors.editor.Woreda' | translate}}</mat-label>\r\n                <mat-select formControlName=\"WoredaId\" (selectionChange)=\"filterWoreda($event.value)\">\r\n                  <option value=\"0\">--</option>\r\n                  <mat-option *ngFor=\"let w of filteredWoredas\" [value]=\"w.WoredaId\">\r\n                    <span>{{w.Description}}</span>\r\n                  </mat-option>\r\n                </mat-select>\r\n\r\n                <!--<mat-error *ngIf=\"woreda.hasError('required')\">-->\r\n                <!--{{'common.validation.Required' | translate}}-->\r\n                <!--</mat-error>-->\r\n              </mat-form-field>\r\n              <mat-form-field fxLayoutGap=\"4em\">\r\n                <mat-label>{{'investors.editor.Kebele' | translate}}</mat-label>\r\n                <mat-select formControlName=\"KebeleId\">\r\n                  <mat-option value=\"0\">--</mat-option>\r\n                  <mat-option *ngFor=\"let keb of filteredKebeles\" [value]=\"keb.KebeleId\">\r\n                    <span>{{keb.Description}}</span>\r\n                  </mat-option>\r\n                </mat-select>\r\n\r\n                <!--<mat-error *ngIf=\"kebele.hasError('required')\">-->\r\n                <!--{{'common.validation.Required' | translate}}-->\r\n                <!--</mat-error>-->\r\n              </mat-form-field>\r\n              <mat-form-field fxLayoutGap=\"4em\">\r\n                <mat-label>{{'investors.editor.HouseNo' | translate}}</mat-label>\r\n                <input matInput formControlName=\"HouseNo\"/>\r\n\r\n                <!--<mat-error *ngIf=\"houseNo.hasError('required')\">-->\r\n                <!--{{'common.validation.Required' | translate}}-->\r\n                <!--</mat-error>-->\r\n              </mat-form-field>\r\n            </div>\r\n            <div id=\"divAddress2\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n              <mat-form-field fxLayoutGap=\"4em\">\r\n                <mat-label>{{'investors.editor.Email' | translate}}</mat-label>\r\n                <input matInput formControlName=\"Email\"/>\r\n                <!--<mat-error *ngIf=\"email.hasError('required')\">-->\r\n                <!--{{'common.validation.Required' | translate}}-->\r\n                <!--</mat-error>-->\r\n                <!--<mat-error *ngIf=\"!email.hasError('required') && email.hasError('email')\">-->\r\n                <!--{{'common.validation.InvalidEmail' | translate}}-->\r\n                <!--</mat-error>-->\r\n              </mat-form-field>\r\n              <mat-form-field fxLayoutGap=\"4em\">\r\n                <mat-label>{{'investors.editor.PhoneDirect' | translate}}</mat-label>\r\n                <input matInput formControlName=\"TeleNo\"/>\r\n              </mat-form-field>\r\n              <mat-form-field fxLayoutGap=\"4em\">\r\n                <mat-label>{{'investors.editor.PhoneMobile' | translate}}</mat-label>\r\n                <input matInput formControlName=\"CellPhoneNo\"/>\r\n              </mat-form-field>\r\n              <mat-form-field fxLayoutGap=\"4em\">\r\n                <mat-label>{{'investors.editor.Fax' | translate}}</mat-label>\r\n                <input matInput formControlName=\"Fax\"/>\r\n              </mat-form-field>\r\n              <mat-form-field fxLayoutGap=\"4em\">\r\n                <mat-label>{{'investors.editor.Pobox' | translate}}</mat-label>\r\n                <input matInput formControlName=\"Pobox\"/>\r\n              </mat-form-field>\r\n              <div></div>\r\n            </div>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\r\n            <mat-form-field [fxFlex]=\"128\">\r\n              <mat-label>{{'investors.editor.OtherAddress' | translate}}</mat-label>\r\n              <input matInput formControlName=\"OtherAddress\" width=\"800px\"/>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n        </div>\r\n        <!-- <mat-divider></mat-divider> -->\r\n\r\n        <div mat-dialog-actions style=\"margin: auto; text-align: center\">\r\n          <button mat-raised-button type=\"submit\" color=\"primary\" style=\"margin-right: 10px\">\r\n            {{'common.commands.Save' | translate}}\r\n          </button>\r\n          <button mat-raised-button (click)=\"onBack()\" color=\"warn\" type=\"button\">\r\n            {{'common.commands.Cancel' | translate}}\r\n          </button>\r\n        </div>\r\n    </div>\r\n  </form>\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/investor/associate/associate-form/associate-form.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/components/investor/associate/associate-form/associate-form.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-content {\n  width: 900px;\n  margin: 0 auto;\n  margin-bottom: 30px;\n  background-color: white; }\n\nmat-card {\n  max-width: 100%;\n  margin: 10px auto;\n  text-align: center; }\n\nmat-checkbox {\n  max-width: 500px;\n  text-align: left;\n  margin-top: -40px;\n  font-size: small;\n  vertical-align: bottom; }\n\nmat-label {\n  font-size: smaller; }\n\nmat-form-field {\n  max-width: 130px;\n  margin-right: 10px;\n  font-size: small; }\n\nmat-divider {\n  margin-bottom: 10px;\n  border-top-color: #00bcd4; }\n\nh4 {\n  margin-bottom: 0px;\n  font-size: medium;\n  color: #00bcd4;\n  margin-top: 10px; }\n\n.row {\n  text-align: left;\n  margin-bottom: 15px; }\n\n.customer-radio-group {\n  display: inherit;\n  flex-direction: row; }\n\n.customer-radio-button {\n  margin: 5px; }\n\n.inputfile {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1; }\n\n.inputfile + label {\n  font-size: 12px;\n  color: steelblue;\n  background-color: white;\n  display: inline-block;\n  cursor: pointer; }\n\n.inputfile:focus + label,\n.inputfile + label:hover {\n  color: goldenrod; }\n\n.pickerLabel {\n  font-size: 12px;\n  color: steelblue;\n  background-color: white;\n  display: inline-block;\n  cursor: pointer;\n  margin-left: 20px; }\n"

/***/ }),

/***/ "./src/app/components/investor/associate/associate-form/associate-form.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/investor/associate/associate-form/associate-form.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AssociateFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociateFormComponent", function() { return AssociateFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _const_consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../const/consts */ "./src/app/const/consts.ts");
/* harmony import */ var _model_security_permission_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../model/security/permission.model */ "./src/app/model/security/permission.model.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @custor/services/configuration.service */ "./src/@custor/services/configuration.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _model_lookupData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../model/lookupData */ "./src/app/model/lookupData.ts");
/* harmony import */ var _Services_look_up_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../Services/look-up.service */ "./src/app/Services/look-up.service.ts");
/* harmony import */ var _Services_Address_address_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../Services/Address/address.service */ "./src/app/Services/Address/address.service.ts");
/* harmony import */ var _custor_services_security_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @custor/services/security/auth.service */ "./src/@custor/services/security/auth.service.ts");
/* harmony import */ var _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @custor/helpers/utilities */ "./src/@custor/helpers/utilities.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _Services_associate_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../Services/associate.service */ "./src/app/Services/associate.service.ts");
/* harmony import */ var _investor_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../investor.service */ "./src/app/components/investor/investor.service.ts");
/* harmony import */ var _custor_helpers_compare__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @custor/helpers/compare */ "./src/@custor/helpers/compare.ts");
/* harmony import */ var app_config_appconfig__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/config/appconfig */ "./src/app/config/appconfig.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var AssociateFormComponent = /** @class */ (function () {
    function AssociateFormComponent(activatedRoute, router, dataSharing, lookUpService, addressService, http, accountService, authService, associateService, custService, configService, toastr, appConfig, fb) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.dataSharing = dataSharing;
        this.lookUpService = lookUpService;
        this.addressService = addressService;
        this.http = http;
        this.accountService = accountService;
        this.authService = authService;
        this.associateService = associateService;
        this.custService = custService;
        this.configService = configService;
        this.toastr = toastr;
        this.appConfig = appConfig;
        this.fb = fb;
        this.isNewInvestor = false;
        this.lookups = [];
        this.regions = [];
        this.zones = [];
        this.filteredZones = [];
        this.woredas = [];
        this.filteredWoredas = [];
        this.kebeles = [];
        this.filteredKebeles = [];
        this.genders = [];
        this.legalStatuses = [];
        // isCompany: boolean;
        this.currentLang = 'en';
        this.countryLookupType = 1;
        this.allPermissions = [];
        this.imgPhoto = '';
        this.imgBase64 = '';
        this.AllowCascading = true;
        this.errors = [];
        this.checkAuthoriation();
        // create an empty object from the associate model
        this.associate = {};
        // initialize the form
        this.initForm();
        // console.log(this.accountService.currentUser.Roles);
    }
    AssociateFormComponent.prototype.checkAuthoriation = function () {
        // if (!this.canManageInvestors) {
        //   this.toastr.error('You are not allowed to access this page');
        //   this.router.navigate(['denied']);
        // }
    };
    AssociateFormComponent.prototype.ngAfterContentChecked = function () {
        this.associateForm.patchValue({
            UserId: this.accountService.currentUser.Id
        });
    };
    AssociateFormComponent.prototype.ngOnInit = function () {
        this.currentLang = this.configService.language;
        var id = this.activatedRoute.snapshot.params['InvestorId'];
        this.investorId = this.activatedRoute.snapshot.params['InvestorId'];
        this.initStaticData(this.currentLang);
        this.fillAddressLookups();
        this.imgBase64 = '';
        if (id < 1) {
            this.isNewInvestor = true;
            // this.isCompany = false;
            this.associateId = 0;
            this.title = 'Create a new associate';
            this.imgPhoto = '';
            return;
        }
        if (id) {
            // to-do
            // get the selected investor either through @Input or shared service
            this.getInvestor(id);
        }
    };
    AssociateFormComponent.prototype.getPermissions = function () {
        var _this = this;
        this.loadingIndicator = true;
        this.accountService.getPermissions()
            .subscribe(function (result) {
            _this.allPermissions = result;
        }, function (error) {
            _this.loadingIndicator = false;
            _this.toastr.error("Unable to retrieve permissions from the server.\r\nErrors:\n              \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_13__["Utilities"].getHttpResponseMessage(error) + "\"", 'Get Permissions Error');
        });
    };
    Object.defineProperty(AssociateFormComponent.prototype, "canManageInvestors", {
        get: function () {
            return this.accountService.userHasPermission(_model_security_permission_model__WEBPACK_IMPORTED_MODULE_4__["Permission"].manageInvestorsPermission);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "canViewInvestors", {
        get: function () {
            return this.accountService.userHasPermission(_model_security_permission_model__WEBPACK_IMPORTED_MODULE_4__["Permission"].viewInvestorsPermission);
        },
        enumerable: true,
        configurable: true
    });
    AssociateFormComponent.prototype.ngOnDestroy = function () {
        // this.investorSub.unsubscribe();
    };
    AssociateFormComponent.prototype.getInvestor = function (id) {
        var _this = this;
        this.loadingIndicator = true;
        this.investorSub = this.associateService
            .getOneAssociateByInvestorId(id)
            .subscribe(function (result) {
            _this.associate = result;
            if (result == null) {
                _this.isNewInvestor = true;
            }
            else {
                _this.isNewInvestor = false;
                _this.updateForm();
                _this.associateId = id;
                _this.imgPhoto = _this.appConfig.urls.baseUrl + 'photo/Mgr' + _this.associate.AssociateId + '.jpg'; // to-do put the path in config
            }
            // console.log(this.imgPhoto);
            // this.updateForm();
            // this.getAddressData(this.associate.AssociateId);
        }, function (error) { return _this.toastr.error(error); });
        this.loadingIndicator = false;
    };
    AssociateFormComponent.prototype.getAddressData = function (parent) {
        var _this = this;
        this.addressService.getAddress(parent)
            .subscribe(function (result) {
            _this.addressList = result;
            // // console.log(result)
            _this.getKebeleByWoredaId(result.WoredaId);
            _this.addressId = result.AddressId;
            _this.associateForm.get('address').patchValue(result);
        }, function (error) { return _this.toastr.error(error); });
    };
    AssociateFormComponent.prototype.getInvestorTitle = function (id) {
        var _this = this;
        this.lookUpService.getLookupByParentId(id).subscribe(function (result) {
            // console.log(result);
            _this.TitleLookup = result;
        });
    };
    AssociateFormComponent.prototype.fillAddressLookups = function () {
        // to-do
        // bring all in one go
        // caching
        this.getRegions();
        this.getAllZones();
        this.getAllWoredas();
        this.getInvestorTitle(89);
        this.getAllKebeles();
        // this.getInvestorTitle();
        this.getAllNations();
    };
    AssociateFormComponent.prototype.getAllNations = function () {
        var _this = this;
        this.addressService.getNationality()
            .subscribe(function (result) {
            _this.nationList = result;
        });
    };
    AssociateFormComponent.prototype.getRegions = function () {
        var _this = this;
        this.custService.getRegionsByLang(this.currentLang)
            .subscribe(function (result) {
            _this.regions = result;
        }, function (error) { return _this.toastr.error(error); });
    };
    AssociateFormComponent.prototype.getAllZones = function () {
        var _this = this;
        this.custService.getAllZonesByLang(this.currentLang)
            .subscribe(function (z) {
            _this.zones = z;
            if (_this.zones) {
                // console.log('Region ' + this.associate.RegionId);
                _this.filterRegion(_this.associate.RegionId);
            }
        }, function (error) { return _this.toastr.error(error); });
    };
    AssociateFormComponent.prototype.getAllWoredas = function () {
        var _this = this;
        this.custService.getAllWoredasByLang(this.currentLang)
            .subscribe(function (result) {
            _this.woredas = result;
            // alert (result.length);
            if (_this.woredas) {
                _this.filterZone(_this.associate.ZoneId);
            }
        }, function (error) { return _this.toastr.error(error); });
    };
    // very expensive!
    AssociateFormComponent.prototype.getAllKebeles = function () {
        var _this = this;
        this.custService.getAllKebelesByLang(this.currentLang)
            .subscribe(function (result) {
            _this.kebeles = result;
            if (_this.kebeles) {
                _this.filterWoreda(_this.associate.WoredaId);
            }
        }, function (error) { return _this.toastr.error(error); });
    };
    AssociateFormComponent.prototype.initForm = function () {
        this.associateForm = this.fb.group({
            cFirstNameEng: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(_const_consts__WEBPACK_IMPORTED_MODULE_3__["ALPHABET_WITHSPACE_REGEX"])])]],
            cFatherNameEng: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(_const_consts__WEBPACK_IMPORTED_MODULE_3__["ALPHABET_WITHSPACE_REGEX"])])]],
            cGrandNameEng: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(_const_consts__WEBPACK_IMPORTED_MODULE_3__["ALPHABET_WITHSPACE_REGEX"])])]],
            cFirstName: [''],
            cFatherName: [''],
            cGrandName: [''],
            cNationality: ['1'],
            cGender: ['1'],
            Title: [''],
            Origin: [false],
            'address': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
                ParentId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
                RegionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
                ZoneId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
                WoredaId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
                KebeleId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
                OtherAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
                CellPhoneNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
                // SpecificAreaName: new FormControl(),
                HouseNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
                TeleNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
                Fax: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
                Pobox: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
                Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
                Remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]()
            })
        });
    };
    AssociateFormComponent.prototype.updateForm = function () {
        var _this = this;
        this.associateForm.patchValue({
            cFirstName: this.associate.FirstName || '',
            cFatherName: this.associate.FatherName || '',
            cGrandName: this.associate.GrandName || '',
            cFirstNameEng: this.associate.FirstNameEng || '',
            cFatherNameEng: this.associate.FatherNameEng || '',
            cGrandNameEng: this.associate.GrandNameEng || '',
            cNationality: this.associate.Nationality == null ? '' : this.associate.Nationality.toString(),
            cGender: this.associate.Gender == null ? '' : this.associate.Gender.toString(),
            cTin: this.associate.Tin || '',
            cIsEthiopianOrigin: this.associate.Origin,
            Title: this.associate.Title || '',
        });
        this.AllowCascading = false;
        // Set dropdown values
        setTimeout(function () {
            if (_this.associate.ZoneId != null) {
                _this.filteredWoredas = _this.woredas.filter(function (item) { return item.ZoneId === _this.associate.ZoneId; });
            }
        }, 100);
        setTimeout(function () {
            if (_this.associate.RegionId != null) {
                _this.filteredZones = _this.zones.filter(function (item) { return item.RegionId === _this.associate.RegionId; });
            }
        }, 100);
        setTimeout(function () {
            if (_this.associate.WoredaId != null) {
                _this.getKebeleByWoredaId(_this.associate.WoredaId);
            }
        }, 100);
        this.associateForm.get('address').patchValue({
            RegionId: this.associate.RegionId == null ? '' : this.associate.RegionId.toString(),
            ZoneId: this.associate.ZoneId == null ? '' : this.associate.ZoneId.toString(),
            WoredaId: this.associate.WoredaId == null ? '' : this.associate.WoredaId.toString(),
            KebeleId: this.associate.KebeleId == null ? '' : this.associate.KebeleId.toString(),
            HouseNo: this.associate.HouseNo || '',
            TeleNo: this.associate.TeleNo || '',
            Pobox: this.associate.Pobox || '',
            Fax: this.associate.Fax || '',
            CellPhoneNo: this.associate.CellPhoneNo || '',
            Email: this.associate.Email || '',
            OtherAddress: this.associate.OtherAddress || ''
        });
        this.isNewInvestor = false;
        this.imgBase64 = ''; // image file should not be recreated if not file is picked
        this.AllowCascading = true;
    };
    AssociateFormComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.associateForm.valid) {
            // // console.log('error!!');
            return;
        }
        // console.log(this.imgBase64);
        if (this.imgBase64 === '' && this.associateId === 0) {
            this.toastr.error('Please add photograph of the Manager');
            return;
        }
        this.loadingIndicator = true;
        // console.log(this.getEditedInvestor());
        return this.associateService.create(this.getEditedInvestor())
            .subscribe(function (associate) {
            _this.saveCompleted(associate);
        }, function (err) { return _this.handleError(err); });
    };
    AssociateFormComponent.prototype.saveCompleted = function (associate) {
        if (associate) {
            this.associate = associate;
        }
        this.loadingIndicator = false;
        this.toastr.success('Record saved successfully!');
        this.dataSharing.investorTabSelectedIndex.next(2);
        //this.router.navigate(['/associate/list']);
    };
    AssociateFormComponent.prototype.handleError = function (error) {
        this.loadingIndicator = false;
        var errList = _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_13__["Utilities"].getHttpResponseMessage(error);
        if (error.status === 400) {
            this.errors = errList;
            this.toastr.error('Please fix the listed errors', 'Error');
        }
        else {
            this.errors = [];
            this.toastr.error(error.status + ':' + errList[0].toString(), 'Error');
        }
    };
    AssociateFormComponent.prototype.getEditedInvestor = function () {
        var formModel = this.associateForm.value;
        var add = this.associateForm.get('address').value;
        return {
            AssociateId: this.isNewInvestor ? 0 : this.associate.AssociateId,
            InvestorId: this.investorId,
            FirstName: formModel.cFirstName,
            FatherName: formModel.cFatherName,
            GrandName: formModel.cGrandName,
            FirstNameEng: formModel.cFirstNameEng,
            FatherNameEng: formModel.cFatherNameEng,
            GrandNameEng: formModel.cGrandNameEng,
            Nationality: formModel.cNationality,
            Gender: formModel.cGender,
            Origin: formModel.cIsEthiopianOrigin,
            IsActive: true,
            IsDeleted: false,
            Title: formModel.Title,
            PhotoData: this.imgBase64,
            RegionId: add.RegionId,
            ZoneId: add.ZoneId,
            WoredaId: add.WoredaId,
            KebeleId: add.KebeleId,
            HouseNo: add.HouseNo,
            TeleNo: add.TeleNo,
            Pobox: add.Pobox,
            Fax: add.Fax,
            CellPhoneNo: add.CellPhoneNo,
            Email: add.Email,
            OtherAddress: add.OtherAddress,
            AddressId: this.isNewInvestor ? 0 : this.associate.AddressId,
            UserName: this.accountService.currentUser.UserName
        };
    };
    AssociateFormComponent.prototype.initStaticData = function (currentLang) {
        var _this = this;
        var gender = new _model_lookupData__WEBPACK_IMPORTED_MODULE_9__["Gender"]();
        _const_consts__WEBPACK_IMPORTED_MODULE_3__["GENDERS"].forEach(function (pair) {
            gender = { 'Id': pair.Id.toString(), 'Desc': (currentLang === 'et' ? pair.Description : pair.DescriptionEnglish) };
            _this.genders.push(gender);
            // console.log(pair);
        });
        var legalS = new _model_lookupData__WEBPACK_IMPORTED_MODULE_9__["LegalStatus"]();
        _const_consts__WEBPACK_IMPORTED_MODULE_3__["LEGAL_STATUS"].forEach(function (pair) {
            legalS = { 'Id': pair.Id.toString(), 'Desc': (currentLang === 'et' ? pair.Description : pair.DescriptionEnglish) };
            _this.legalStatuses.push(legalS);
        });
    };
    AssociateFormComponent.prototype.getKebeleByWoredaId = function (wordaId) {
        var _this = this;
        this.addressService.getKebelesByWoreda(wordaId)
            .subscribe(function (result) {
            // this.kebeles = result;
            // // console.log(result);
            _this.filteredKebeles = result;
        });
    };
    AssociateFormComponent.prototype.filterRegion = function (regionCode) {
        if (!regionCode || !this.AllowCascading) {
            return;
        }
        this.filteredKebeles = null;
        this.filteredWoredas = null;
        if (!this.zones) {
            return;
        }
        this.filteredZones = this.zones.filter(function (item) {
            return item.RegionId === regionCode;
        });
    };
    AssociateFormComponent.prototype.filterZone = function (zoneCode) {
        if (!zoneCode || !this.AllowCascading) {
            return;
        }
        this.filteredKebeles = null;
        this.filteredWoredas = this.woredas.filter(function (item) {
            return item.ZoneId === zoneCode;
        });
    };
    AssociateFormComponent.prototype.filterWoreda = function (woredaCode) {
        if (!woredaCode || !this.AllowCascading) {
            return;
        }
        this.getKebeleByWoredaId(woredaCode);
    };
    AssociateFormComponent.prototype.compareIds = function (id1, id2) {
        var a1 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_18__["determineId"])(id1);
        var a2 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_18__["determineId"])(id2);
        return a1 === a2;
    };
    AssociateFormComponent.prototype.onBack = function () {
        this.router.navigate(['associate/list']);
    };
    Object.defineProperty(AssociateFormComponent.prototype, "firstName", {
        get: function () {
            return this.associateForm.get('cFirstName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "fatherName", {
        get: function () {
            return this.associateForm.get('cFatherName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "Title", {
        get: function () {
            return this.associateForm.get('Title');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "grandName", {
        get: function () {
            return this.associateForm.get('cGrandName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "firstNameEng", {
        get: function () {
            return this.associateForm.get('cFirstNameEng');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "fatherNameEng", {
        get: function () {
            return this.associateForm.get('cFatherNameEng');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "grandNameEng", {
        get: function () {
            return this.associateForm.get('cGrandNameEng');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "nationality", {
        get: function () {
            return this.associateForm.get('cNationality');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "gender", {
        get: function () {
            return this.associateForm.get('cGender');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "Origin", {
        // get isDiaspora() {
        //   return this.associateForm.get('cIsDiaspora');
        // }
        get: function () {
            return this.associateForm.get('cIsEthiopianOrigin');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "region", {
        get: function () {
            return this.associateForm.get('RegionId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "zone", {
        get: function () {
            return this.associateForm.get('ZoneId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "woreda", {
        get: function () {
            return this.associateForm.get('WoredaId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "kebele", {
        get: function () {
            return this.associateForm.get('KebeleId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "houseNumber", {
        get: function () {
            return this.associateForm.get('HouseNo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "phoneDirect", {
        get: function () {
            return this.associateForm.get('PhoneDirect');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "CellPhoneNo", {
        get: function () {
            return this.associateForm.get('CellPhoneNo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "fax", {
        get: function () {
            return this.associateForm.get('Fax');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "pobox", {
        get: function () {
            return this.associateForm.get('POBox');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "legalStatus", {
        get: function () {
            return this.associateForm.get('cLegalStatus');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "tradeName", {
        get: function () {
            return this.associateForm.get('cTradeName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "tradeNameEng", {
        get: function () {
            return this.associateForm.get('cTradeNameEng');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "regDate", {
        get: function () {
            return this.associateForm.get('cRegDate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "regNumber", {
        get: function () {
            return this.associateForm.get('cRegNumber');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "tin", {
        get: function () {
            return this.associateForm.get('cTin');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "otherAddress", {
        get: function () {
            return this.associateForm.get('OtherAddress');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "companyName", {
        get: function () {
            return this.associateForm.get('cCompanyName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "companyNameEng", {
        get: function () {
            return this.associateForm.get('cCompanyNameEng');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "nationalityCompany", {
        get: function () {
            return this.associateForm.get('cNationalityCompany');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "email", {
        get: function () {
            return this.associateForm.get('Email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "houseNo", {
        get: function () {
            return this.associateForm.get('HouseNo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "ct", {
        // another getter for easy access to form fields
        get: function () {
            return this.associateForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssociateFormComponent.prototype, "floatLabels", {
        // use it as 'ct.controlName.errors.required'
        get: function () {
            return 'auto';
        },
        enumerable: true,
        configurable: true
    });
    // Photo Management
    AssociateFormComponent.prototype.ngAfterViewInit = function () {
        // this.fillAddressLookups();
    };
    AssociateFormComponent.prototype.fileChange = function (input) {
        var _this = this;
        var pattern = /image-*/;
        if (!input.files[0].type.match(pattern)) {
            this.toastr.error('The selected file is not valid image file');
            return;
        }
        var reader = new FileReader();
        this.readFile(input.files[0], reader, function (result) {
            // Create an img element and add the image file data to it
            var img = document.createElement('img');
            img.src = result;
            _this.resizeImage(img, 150, 150, function (resizedImage) {
                _this.imgPhoto = resizedImage;
            });
        });
    };
    AssociateFormComponent.prototype.readFile = function (file, reader, callback) {
        reader.onload = function () {
            callback(reader.result);
        };
        reader.readAsDataURL(file);
    };
    AssociateFormComponent.prototype.resizeImage = function (img, maxWidth, maxHeight, callback) {
        var _this = this;
        return img.onload = function () {
            var width = img.width;
            var height = img.height;
            // Maintain aspect ratio
            if (width > height) {
                if (width > maxWidth) {
                    height *= maxWidth / width;
                    width = maxWidth;
                }
            }
            else {
                if (height > maxHeight) {
                    width *= maxHeight / height;
                    height = maxHeight;
                }
            }
            // create a canvas object
            var canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            var dataUrl = canvas.toDataURL('image/jpeg');
            // // console.log(dataUrl);
            _this.imgBase64 = dataUrl.split(',')[1];
            callback(dataUrl, img.src.length, dataUrl.length);
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"])
    ], AssociateFormComponent.prototype, "investorSub", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AssociateFormComponent.prototype, "errors", void 0);
    AssociateFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-associate-form',
            template: __webpack_require__(/*! ./associate-form.component.html */ "./src/app/components/investor/associate/associate-form/associate-form.component.html"),
            styles: [__webpack_require__(/*! ./associate-form.component.scss */ "./src/app/components/investor/associate/associate-form/associate-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_15__["DataSharingService"],
            _Services_look_up_service__WEBPACK_IMPORTED_MODULE_10__["LookUpService"],
            _Services_Address_address_service__WEBPACK_IMPORTED_MODULE_11__["AddressService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_14__["AccountService"],
            _custor_services_security_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
            _Services_associate_service__WEBPACK_IMPORTED_MODULE_16__["AssociateService"],
            _investor_service__WEBPACK_IMPORTED_MODULE_17__["InvestorService"],
            _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_7__["ConfigurationService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], app_config_appconfig__WEBPACK_IMPORTED_MODULE_19__["AppConfiguration"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], AssociateFormComponent);
    return AssociateFormComponent;
}());



/***/ }),

/***/ "./src/app/components/investor/associate/associate-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/investor/associate/associate-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: AssociateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociateRoutingModule", function() { return AssociateRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _associate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./associate.component */ "./src/app/components/investor/associate/associate.component.ts");
/* harmony import */ var _associate_form_associate_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./associate-form/associate-form.component */ "./src/app/components/investor/associate/associate-form/associate-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    // {path: '', component:  },
    { path: 'list', component: _associate_component__WEBPACK_IMPORTED_MODULE_2__["AssociateComponent"] },
    { path: 'form/:id/:invid', component: _associate_form_associate_form_component__WEBPACK_IMPORTED_MODULE_3__["AssociateFormComponent"] }
];
var AssociateRoutingModule = /** @class */ (function () {
    function AssociateRoutingModule() {
    }
    AssociateRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AssociateRoutingModule);
    return AssociateRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/investor/associate/associate.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/investor/associate/associate.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header title=\"Mangers\" icon=\"people\"></app-page-header>\r\n\r\n<mat-card style=\"margin: 20px; width: 70%\" class=\"dashboard-card\">\r\n\r\n  <mat-card-content class=\"dashboard-card-content\">\r\n\r\n    <!-- <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar> -->\r\n    <mat-progress-bar mode=\"indeterminate\" *ngIf=\"loadingIndicator\"></mat-progress-bar>\r\n    <mat-table #table [dataSource]=\"dataSource\">\r\n\r\n      <ng-container matColumnDef=\"FirstNameEng\">\r\n        <mat-header-cell *matHeaderCellDef>Full Name</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let investors\">\r\n\r\n          {{investors?.FirstNameEng}}\r\n          {{investors?.FatherNameEng}}\r\n          {{investors?.GrandNameEng}}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"FatherNameEng\">\r\n        <mat-header-cell *matHeaderCellDef> ስም</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let investors\">\r\n          {{investors?.FirstName}}\r\n          {{investors?.FatherName}}\r\n          {{investors?.GrandName}}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <!--<ng-container matColumnDef=\"Email\">-->\r\n        <!--<mat-header-cell *matHeaderCellDef> Email</mat-header-cell>-->\r\n        <!--<mat-cell *matCellDef=\"let investors\">-->\r\n          <!--{{investors?.Address?.Email}}-->\r\n\r\n        <!--</mat-cell>-->\r\n      <!--</ng-container>-->\r\n\r\n\r\n      <ng-container matColumnDef=\"actions\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"25%\">\r\n          <button mat-button color=\"primary\" (click)=\"editInvestor()\">\r\n            <mat-icon style=\"margin-top: -5px\" class=\"mat-8\">person</mat-icon>\r\n           {{'common.commands.Add' | translate}}  \r\n          </button>\r\n        </mat-header-cell>\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"28%\">\r\n        </mat-header-cell>\r\n        <mat-cell mat-dialog-actions *matCellDef=\"let investor\" fxFlex=\"38%\">\r\n          <button mat-icon-button matTooltip = \"Edit\"  (click)=\"editInvestor(investor)\">\r\n            <mat-icon class=\"mat-12\" color=\"primary\">edit</mat-icon>\r\n            <span >Edit</span>\r\n          </button>\r\n          <span style=\"width: 20px\"></span>\r\n          <button mat-icon-button matTooltip=\"Delete\" (click)=\"confirmDelete(investor)\">\r\n            <mat-icon class=\"mat-12\" color=\"warn\">delete</mat-icon>\r\n            <span>Delete</span>\r\n          </button>\r\n          \r\n        </mat-cell>\r\n      </ng-container>\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\">\r\n      </mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/investor/associate/associate.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/investor/associate/associate.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  display: block;\n  position: relative;\n  padding: 0px !important;\n  border-radius: 2px; }\n\nspan {\n  font-size: 12px;\n  color: steelblue;\n  background-color: transparent;\n  display: inline-block;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/components/investor/associate/associate.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/investor/associate/associate.component.ts ***!
  \**********************************************************************/
/*! exports provided: AssociateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociateComponent", function() { return AssociateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _model_security_permission_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../model/security/permission.model */ "./src/app/model/security/permission.model.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _custor_services_security_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/services/security/auth.service */ "./src/@custor/services/security/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @custor/components/confirm-dialog/confirm-dialog.component */ "./src/@custor/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @custor/helpers/utilities */ "./src/@custor/helpers/utilities.ts");
/* harmony import */ var _investor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../investor.service */ "./src/app/components/investor/investor.service.ts");
/* harmony import */ var _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../Services/project-profile.service */ "./src/app/Services/project-profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_associate_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../Services/associate.service */ "./src/app/Services/associate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AssociateComponent = /** @class */ (function () {
    function AssociateComponent(http, invService, associateService, projectService, accountService, authService, dataSharing, toastr, dialog, router, route) {
        this.http = http;
        this.invService = invService;
        this.associateService = associateService;
        this.projectService = projectService;
        this.accountService = accountService;
        this.authService = authService;
        this.dataSharing = dataSharing;
        this.toastr = toastr;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.displayedColumns = ['FirstNameEng', 'FatherNameEng', 'actions'];
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    AssociateComponent.prototype.ngOnInit = function () {
        if (this.accountService.getUserType()) {
            // console.log(this.accountService.currentUser.Tin);
            this.isInvestor = this.accountService.getUserType();
            if (this.accountService.currentUser.Tin !== 'null' && this.accountService.currentUser.Tin !== '') {
                this.getInvestorsByUserId();
            }
            else {
                this.getInvestorsByUserId();
            }
        }
        else {
            this.getInvestorsByUserId();
        }
    };
    AssociateComponent.prototype.getInvestorsByUserId = function () {
        var _this = this;
        // if (!this.canViewInvestors) {
        //     this.router.navigate(['denied']);
        // }
        this.loadingIndicator = true;
        this.associateService.getAssociateByInvestorId(+localStorage.getItem('InvestorId'))
            .subscribe(function (result) {
            // console.log(result);
            _this.investors = result;
            if (!_this.investors) {
                _this.toastr.error('No records were found to list', 'Error', {
                    closeButton: true,
                });
            }
            else {
                _this.dataSource.data = _this.investors;
            }
        }, function (error) {
            _this.toastr.error("Error: \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_9__["Utilities"].getHttpResponseMessage(error) + "\"");
        });
        this.loadingIndicator = false;
    };
    Object.defineProperty(AssociateComponent.prototype, "canViewInvestors", {
        get: function () {
            return this.accountService.userHasPermission(_model_security_permission_model__WEBPACK_IMPORTED_MODULE_2__["Permission"].viewInvestorsPermission);
        },
        enumerable: true,
        configurable: true
    });
    AssociateComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    AssociateComponent.prototype.editInvestor = function (investor) {
        var invId = localStorage.getItem('InvestorId');
        if (localStorage.getItem('InvestorId') !== null) {
            if (investor) {
                this.router.navigate(['/associate/form/', investor.AssociateId, investor.InvestorId], { relativeTo: this.route });
            }
            else {
                this.router.navigate(['/associate/form', 0, invId]);
            }
        }
        else {
            this.toastr.warning('Please Add Investor Profile ', 'Info');
            this.router.navigate(['/investor/edit', 0]);
        }
    };
    AssociateComponent.prototype.confirmDelete = function (investor) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AngConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            _this.loadingIndicator = true;
            if (result) {
                _this.associateService.delete(investor.AssociateId)
                    .subscribe(function (results) {
                    _this.loadingIndicator = false;
                    _this.dataSource.data = _this.dataSource.data.filter(function (item) { return item !== investor; });
                }, function (error) {
                    // tslint:disable-next-line:max-line-length
                    _this.toastr.error("An error occured whilst deleting the investor.\r\nError: \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_9__["Utilities"].getHttpResponseMessage(error) + "\"", 'Delete Error');
                });
            }
            _this.loadingIndicator = false;
        });
    };
    AssociateComponent.prototype.deleteProject = function (id) {
        // console.log(id);
        var response = confirm('Do you want to Delete this Project ?');
        if (response === true) {
            this.projectService.delete(id)
                .subscribe(function () {
                // this.getAllServiceApplication();
            });
            return true;
        }
        else {
            return false;
        }
    };
    AssociateComponent.prototype.back = function () {
        window.history.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], AssociateComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], AssociateComponent.prototype, "sort", void 0);
    AssociateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-associate',
            template: __webpack_require__(/*! ./associate.component.html */ "./src/app/components/investor/associate/associate.component.html"),
            styles: [__webpack_require__(/*! ./associate.component.scss */ "./src/app/components/investor/associate/associate.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _investor_service__WEBPACK_IMPORTED_MODULE_10__["InvestorService"],
            _Services_associate_service__WEBPACK_IMPORTED_MODULE_13__["AssociateService"],
            _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_11__["ProjectProfileService"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"],
            _custor_services_security_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_8__["DataSharingService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"]])
    ], AssociateComponent);
    return AssociateComponent;
}());



/***/ }),

/***/ "./src/app/components/investor/associate/associate.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/investor/associate/associate.module.ts ***!
  \*******************************************************************/
/*! exports provided: AssociateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociateModule", function() { return AssociateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _associate_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./associate-routing.module */ "./src/app/components/investor/associate/associate-routing.module.ts");
/* harmony import */ var _associate_form_associate_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./associate-form/associate-form.component */ "./src/app/components/investor/associate/associate-form/associate-form.component.ts");
/* harmony import */ var _associate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./associate.component */ "./src/app/components/investor/associate/associate.component.ts");
/* harmony import */ var ngx_gravatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-gravatar */ "./node_modules/ngx-gravatar/fesm5/ngx-gravatar.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var gravatarConfig = {
    fallback: ngx_gravatar__WEBPACK_IMPORTED_MODULE_6__["FALLBACK"].robohash,
    rating: ngx_gravatar__WEBPACK_IMPORTED_MODULE_6__["RATING"].x,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    hasBorder: true // Set this flag to true to have a border by default
};
var AssociateModule = /** @class */ (function () {
    function AssociateModule() {
    }
    AssociateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _associate_routing_module__WEBPACK_IMPORTED_MODULE_3__["AssociateRoutingModule"],
                ngx_gravatar__WEBPACK_IMPORTED_MODULE_6__["GravatarModule"].forRoot(gravatarConfig)
            ],
            declarations: [_associate_component__WEBPACK_IMPORTED_MODULE_5__["AssociateComponent"],
                _associate_form_associate_form_component__WEBPACK_IMPORTED_MODULE_4__["AssociateFormComponent"]],
            exports: [_associate_component__WEBPACK_IMPORTED_MODULE_5__["AssociateComponent"],
                _associate_form_associate_form_component__WEBPACK_IMPORTED_MODULE_4__["AssociateFormComponent"]]
        })
    ], AssociateModule);
    return AssociateModule;
}());



/***/ }),

/***/ "./src/app/const/consts.ts":
/*!*********************************!*\
  !*** ./src/app/const/consts.ts ***!
  \*********************************/
/*! exports provided: MARITAL_STATUSES, GENDERS, TITLES, LEGAL_STATUS, STATUS, SOLE_PROPRIETERSHIP_CODE, ETHIOPIA_CODE, ALPHABET_WITHSPACE_REGEX, ALPHABET_REGEX, NUMERIC_WITHPERIOD_REGEX, NUMERIC_REGEX, ET_ALPHABET_WITHSPACE_REGEX, ET_ALPHABET_REGEX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARITAL_STATUSES", function() { return MARITAL_STATUSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENDERS", function() { return GENDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLES", function() { return TITLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEGAL_STATUS", function() { return LEGAL_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS", function() { return STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOLE_PROPRIETERSHIP_CODE", function() { return SOLE_PROPRIETERSHIP_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ETHIOPIA_CODE", function() { return ETHIOPIA_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALPHABET_WITHSPACE_REGEX", function() { return ALPHABET_WITHSPACE_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALPHABET_REGEX", function() { return ALPHABET_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMERIC_WITHPERIOD_REGEX", function() { return NUMERIC_WITHPERIOD_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMERIC_REGEX", function() { return NUMERIC_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ET_ALPHABET_WITHSPACE_REGEX", function() { return ET_ALPHABET_WITHSPACE_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ET_ALPHABET_REGEX", function() { return ET_ALPHABET_REGEX; });
var MARITAL_STATUSES = [
    { 'Id': '1', 'Description': 'ያላገባ', 'DescriptionEnglish': 'Single' },
    { 'Id': '2', 'Description': 'ያገባ', 'DescriptionEnglish': 'Married' },
    { 'Id': '3', 'Description': 'የፈታ', 'DescriptionEnglish': 'Divorced' }
];
var GENDERS = [
    { 'Id': '1', 'Description': 'ወንድ', 'DescriptionEnglish': 'Male' },
    { 'Id': '2', 'Description': 'ሴት', 'DescriptionEnglish': 'Female' }
];
var TITLES = [
    { 'Id': '1', 'Description': 'አቶ', 'DescriptionEnglish': 'Mr' },
    { 'Id': '2', 'Description': 'ወ/ሮ', 'DescriptionEnglish': 'Mrs' },
    { 'Id': '3', 'Description': 'ወ/ሪት', 'DescriptionEnglish': 'Miss' },
    { 'Id': '4', 'Description': 'ዶ/ር', 'DescriptionEnglish': 'Dr' }
];
var LEGAL_STATUS = [
    { 'Id': '1', 'Description': 'ግለሰብ', 'DescriptionEnglish': 'Sole Proprietorship' },
    { 'Id': '2', 'Description': 'ኃላፊነቱ የተወሰነ የግል ኩባንያ', 'DescriptionEnglish': 'Private Limited Company' },
    { 'Id': '3', 'Description': 'የአክስዮን ማህበር', 'DescriptionEnglish': 'Share Company' },
    { 'Id': '4', 'Description': 'የመንግስት ተቋም', 'DescriptionEnglish': 'Public Enterprise' },
    { 'Id': '5', 'Description': 'የስራ ማህበራት', 'DescriptionEnglish': 'Cooperative Society' }
];
var STATUS = [
    { 'Id': '0', 'Description': 'በስራ ላይ', 'DescriptionEnglish': 'Active' },
    { 'Id': '1', 'Description': 'የተዘጋ', 'DescriptionEnglish': 'Closed' }
];
var SOLE_PROPRIETERSHIP_CODE = '1';
var ETHIOPIA_CODE = 1;
var ALPHABET_WITHSPACE_REGEX = new RegExp(/^[a-zA-Z ]+$/);
var ALPHABET_REGEX = new RegExp(/^[a-zA-Z]+$/);
var NUMERIC_WITHPERIOD_REGEX = new RegExp(/^[0-9.]+$/);
var NUMERIC_REGEX = new RegExp(/^[0-9]+$/);
var ET_ALPHABET_WITHSPACE_REGEX = new RegExp(/^([ \u1200-\u137F])+$/);
var ET_ALPHABET_REGEX = new RegExp(/^([ \u1200-\u137F \u0008])+$/);



/***/ })

}]);
//# sourceMappingURL=app-components-business-business-tab-business-tab-module~app-components-investor-investor-tab-invest~2cb6254f.js.map