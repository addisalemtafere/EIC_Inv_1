(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-components-business-business-tab-business-tab-module~app-components-incentive-balance-ba~68515f01"],{

/***/ "./node_modules/@syncfusion/ej2-angular-dropdowns/@syncfusion/ej2-angular-dropdowns.es5.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-angular-dropdowns/@syncfusion/ej2-angular-dropdowns.es5.js ***!
  \*************************************************************************************************/
/*! exports provided: DropDownListComponent, DropDownListModule, DropDownListAllModule, ComboBoxComponent, ComboBoxModule, ComboBoxAllModule, AutoCompleteComponent, AutoCompleteModule, AutoCompleteAllModule, MultiSelectComponent, MultiSelectModule, MultiSelectAllModule, CheckBoxSelectionService, ListBoxComponent, ListBoxModule, ListBoxAllModule, ɵe, ɵf, ɵc, ɵd, ɵa, ɵb, ɵi, ɵj, ɵg, ɵh, incrementalSearch, Search, highlightSearch, revertHighlightSearch, FieldSettings, dropDownBaseClasses, DropDownBase, dropDownListClasses, DropDownList, ComboBox, AutoComplete, MultiSelect, CheckBoxSelection, SelectionSettings, ToolbarSettings, ListBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownListComponent", function() { return DropDownListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownListModule", function() { return DropDownListModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownListAllModule", function() { return DropDownListAllModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboBoxComponent", function() { return ComboBoxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboBoxModule", function() { return ComboBoxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboBoxAllModule", function() { return ComboBoxAllModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteComponent", function() { return AutoCompleteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteModule", function() { return AutoCompleteModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteAllModule", function() { return AutoCompleteAllModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectComponent", function() { return MultiSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectModule", function() { return MultiSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectAllModule", function() { return MultiSelectAllModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBoxSelectionService", function() { return CheckBoxSelectionService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBoxComponent", function() { return ListBoxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBoxModule", function() { return ListBoxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBoxAllModule", function() { return ListBoxAllModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return inputs$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return outputs$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return inputs$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return outputs$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return inputs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return outputs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return inputs$4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return outputs$4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return inputs$3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return outputs$3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-angular-base */ "./node_modules/@syncfusion/ej2-angular-base/index.js");
/* harmony import */ var _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-dropdowns */ "./node_modules/@syncfusion/ej2-dropdowns/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "incrementalSearch", function() { return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["incrementalSearch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["Search"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "highlightSearch", function() { return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["highlightSearch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "revertHighlightSearch", function() { return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["revertHighlightSearch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldSettings", function() { return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["FieldSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dropDownBaseClasses", function() { return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["dropDownBaseClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropDownBase", function() { return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["DropDownBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dropDownListClasses", function() { return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["dropDownListClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropDownList", function() { return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["DropDownList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComboBox", function() { return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["ComboBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoComplete", function() { return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["AutoComplete"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultiSelect", function() { return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["MultiSelect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckBoxSelection", function() { return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["CheckBoxSelection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionSettings", function() { return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["SelectionSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolbarSettings", function() { return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["ToolbarSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListBox", function() { return _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["ListBox"]; });

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
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs = ['actionFailureTemplate', 'allowFiltering', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'index', 'itemTemplate', 'locale', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'sortOrder', 'text', 'value', 'valueTemplate', 'width', 'zIndex'];
var outputs = ['actionBegin', 'actionComplete', 'actionFailure', 'beforeOpen', 'blur', 'change', 'close', 'created', 'dataBound', 'destroyed', 'filtering', 'focus', 'open', 'select', 'valueChange'];
var twoWays = ['value'];
/**
 * The DropDownList component contains a list of predefined values, from which the user can choose a single value.
 * ```html
 * <ejs-dropdownlist></ejs-dropdownlist>
 * ```
 */
var DropDownListComponent = DropDownListComponent_1 = /** @class */ (function (_super) {
    __extends(DropDownListComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function DropDownListComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.skipFromEvent = true;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs);
        _this.addTwoWay.call(_this, twoWays);
        Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["setValue"])('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    DropDownListComponent.prototype.registerOnChange = function (registerFunction) {
    };
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    DropDownListComponent.prototype.registerOnTouched = function (registerFunction) {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DropDownListComponent.prototype.writeValue = function (value) {
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    DropDownListComponent.prototype.setDisabledState = function (disabled) {
    };
    /**
     * @return {?}
     */
    DropDownListComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    DropDownListComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    DropDownListComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    DropDownListComponent.prototype.ngAfterContentChecked = function () {
    };
    return DropDownListComponent;
}(_syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["DropDownList"]));
DropDownListComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ejs-dropdownlist',
                inputs: inputs,
                outputs: outputs,
                template: '',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return DropDownListComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
DropDownListComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
]; };
DropDownListComponent.propDecorators = {
    'footerTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['footerTemplate',] },],
    'headerTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['headerTemplate',] },],
    'valueTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['valueTemplate',] },],
    'groupTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['groupTemplate',] },],
    'itemTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['itemTemplate',] },],
    'noRecordsTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['noRecordsTemplate',] },],
    'actionFailureTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['actionFailureTemplate',] },],
};
__decorate([
    Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(),
    __metadata("design:type", Object)
], DropDownListComponent.prototype, "footerTemplate", void 0);
__decorate([
    Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(),
    __metadata("design:type", Object)
], DropDownListComponent.prototype, "headerTemplate", void 0);
__decorate([
    Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(),
    __metadata("design:type", Object)
], DropDownListComponent.prototype, "valueTemplate", void 0);
__decorate([
    Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(),
    __metadata("design:type", Object)
], DropDownListComponent.prototype, "groupTemplate", void 0);
__decorate([
    Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(),
    __metadata("design:type", Object)
], DropDownListComponent.prototype, "itemTemplate", void 0);
__decorate([
    Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])('No Records Found'),
    __metadata("design:type", Object)
], DropDownListComponent.prototype, "noRecordsTemplate", void 0);
__decorate([
    Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])('The Request Failed'),
    __metadata("design:type", Object)
], DropDownListComponent.prototype, "actionFailureTemplate", void 0);
DropDownListComponent = DropDownListComponent_1 = __decorate([
    Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["ComponentMixins"])([_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["ComponentBase"], _syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["FormBase"]]),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
], DropDownListComponent);
var DropDownListComponent_1;
/**
 * NgModule definition for the DropDownList component.
 */
var DropDownListModule = /** @class */ (function () {
    function DropDownListModule() {
    }
    return DropDownListModule;
}());
DropDownListModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
                declarations: [
                    DropDownListComponent
                ],
                exports: [
                    DropDownListComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
DropDownListModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the DropDownList component with providers.
 */
var DropDownListAllModule = /** @class */ (function () {
    function DropDownListAllModule() {
    }
    return DropDownListAllModule;
}());
DropDownListAllModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], DropDownListModule],
                exports: [
                    DropDownListModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
DropDownListAllModule.ctorParameters = function () { return []; };
var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs$1 = ['actionFailureTemplate', 'allowCustom', 'allowFiltering', 'autofill', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'index', 'itemTemplate', 'locale', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'sortOrder', 'text', 'value', 'valueTemplate', 'width', 'zIndex'];
var outputs$1 = ['actionBegin', 'actionComplete', 'actionFailure', 'beforeOpen', 'blur', 'change', 'close', 'created', 'customValueSpecifier', 'dataBound', 'destroyed', 'filtering', 'focus', 'open', 'select', 'valueChange'];
var twoWays$1 = ['value'];
/**
 * The ComboBox component allows the user to type a value or choose an option from the list of predefined options.
 * ```html
 * <ejs-combobox></ejs-combobox>
 * ```
 */
var ComboBoxComponent = ComboBoxComponent_1 = /** @class */ (function (_super) {
    __extends(ComboBoxComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function ComboBoxComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.skipFromEvent = true;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$1);
        _this.addTwoWay.call(_this, twoWays$1);
        Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["setValue"])('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    ComboBoxComponent.prototype.registerOnChange = function (registerFunction) {
    };
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    ComboBoxComponent.prototype.registerOnTouched = function (registerFunction) {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ComboBoxComponent.prototype.writeValue = function (value) {
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    ComboBoxComponent.prototype.setDisabledState = function (disabled) {
    };
    /**
     * @return {?}
     */
    ComboBoxComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    ComboBoxComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    ComboBoxComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    ComboBoxComponent.prototype.ngAfterContentChecked = function () {
    };
    return ComboBoxComponent;
}(_syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["ComboBox"]));
ComboBoxComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ejs-combobox',
                inputs: inputs$1,
                outputs: outputs$1,
                template: '',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ComboBoxComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ComboBoxComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
]; };
ComboBoxComponent.propDecorators = {
    'footerTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['footerTemplate',] },],
    'headerTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['headerTemplate',] },],
    'groupTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['groupTemplate',] },],
    'itemTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['itemTemplate',] },],
    'noRecordsTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['noRecordsTemplate',] },],
    'actionFailureTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['actionFailureTemplate',] },],
};
__decorate$1([
    Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(),
    __metadata$1("design:type", Object)
], ComboBoxComponent.prototype, "footerTemplate", void 0);
__decorate$1([
    Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(),
    __metadata$1("design:type", Object)
], ComboBoxComponent.prototype, "headerTemplate", void 0);
__decorate$1([
    Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(),
    __metadata$1("design:type", Object)
], ComboBoxComponent.prototype, "groupTemplate", void 0);
__decorate$1([
    Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(),
    __metadata$1("design:type", Object)
], ComboBoxComponent.prototype, "itemTemplate", void 0);
__decorate$1([
    Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])('No Records Found'),
    __metadata$1("design:type", Object)
], ComboBoxComponent.prototype, "noRecordsTemplate", void 0);
__decorate$1([
    Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])('The Request Failed'),
    __metadata$1("design:type", Object)
], ComboBoxComponent.prototype, "actionFailureTemplate", void 0);
ComboBoxComponent = ComboBoxComponent_1 = __decorate$1([
    Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["ComponentMixins"])([_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["ComponentBase"], _syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["FormBase"]]),
    __metadata$1("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
], ComboBoxComponent);
var ComboBoxComponent_1;
/**
 * NgModule definition for the ComboBox component.
 */
var ComboBoxModule = /** @class */ (function () {
    function ComboBoxModule() {
    }
    return ComboBoxModule;
}());
ComboBoxModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
                declarations: [
                    ComboBoxComponent
                ],
                exports: [
                    ComboBoxComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
ComboBoxModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the ComboBox component with providers.
 */
var ComboBoxAllModule = /** @class */ (function () {
    function ComboBoxAllModule() {
    }
    return ComboBoxAllModule;
}());
ComboBoxAllModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], ComboBoxModule],
                exports: [
                    ComboBoxModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
ComboBoxAllModule.ctorParameters = function () { return []; };
var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs$2 = ['actionFailureTemplate', 'allowCustom', 'allowFiltering', 'autofill', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'highlight', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'index', 'itemTemplate', 'locale', 'minLength', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'showPopupButton', 'sortOrder', 'suggestionCount', 'text', 'value', 'valueTemplate', 'width', 'zIndex'];
var outputs$2 = ['actionBegin', 'actionComplete', 'actionFailure', 'beforeOpen', 'blur', 'change', 'close', 'created', 'customValueSpecifier', 'dataBound', 'destroyed', 'filtering', 'focus', 'open', 'select', 'valueChange'];
var twoWays$2 = ['value'];
/**
 * The AutoComplete component provides the matched suggestion list when type into the input, from which the user can select one.
 * ```html
 * <ejs-autocomplete></ejs-autocomplete>
 * ```
 */
var AutoCompleteComponent = AutoCompleteComponent_1 = /** @class */ (function (_super) {
    __extends(AutoCompleteComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function AutoCompleteComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.skipFromEvent = true;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$2);
        _this.addTwoWay.call(_this, twoWays$2);
        Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["setValue"])('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    AutoCompleteComponent.prototype.registerOnChange = function (registerFunction) {
    };
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    AutoCompleteComponent.prototype.registerOnTouched = function (registerFunction) {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AutoCompleteComponent.prototype.writeValue = function (value) {
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    AutoCompleteComponent.prototype.setDisabledState = function (disabled) {
    };
    /**
     * @return {?}
     */
    AutoCompleteComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    AutoCompleteComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    AutoCompleteComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    AutoCompleteComponent.prototype.ngAfterContentChecked = function () {
    };
    return AutoCompleteComponent;
}(_syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["AutoComplete"]));
AutoCompleteComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ejs-autocomplete',
                inputs: inputs$2,
                outputs: outputs$2,
                template: '',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return AutoCompleteComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
AutoCompleteComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
]; };
AutoCompleteComponent.propDecorators = {
    'footerTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['footerTemplate',] },],
    'headerTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['headerTemplate',] },],
    'groupTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['groupTemplate',] },],
    'itemTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['itemTemplate',] },],
    'noRecordsTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['noRecordsTemplate',] },],
    'actionFailureTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['actionFailureTemplate',] },],
};
__decorate$2([
    Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(),
    __metadata$2("design:type", Object)
], AutoCompleteComponent.prototype, "footerTemplate", void 0);
__decorate$2([
    Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(),
    __metadata$2("design:type", Object)
], AutoCompleteComponent.prototype, "headerTemplate", void 0);
__decorate$2([
    Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(),
    __metadata$2("design:type", Object)
], AutoCompleteComponent.prototype, "groupTemplate", void 0);
__decorate$2([
    Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(),
    __metadata$2("design:type", Object)
], AutoCompleteComponent.prototype, "itemTemplate", void 0);
__decorate$2([
    Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])('No Records Found'),
    __metadata$2("design:type", Object)
], AutoCompleteComponent.prototype, "noRecordsTemplate", void 0);
__decorate$2([
    Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])('The Request Failed'),
    __metadata$2("design:type", Object)
], AutoCompleteComponent.prototype, "actionFailureTemplate", void 0);
AutoCompleteComponent = AutoCompleteComponent_1 = __decorate$2([
    Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["ComponentMixins"])([_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["ComponentBase"], _syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["FormBase"]]),
    __metadata$2("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
], AutoCompleteComponent);
var AutoCompleteComponent_1;
/**
 * NgModule definition for the AutoComplete component.
 */
var AutoCompleteModule = /** @class */ (function () {
    function AutoCompleteModule() {
    }
    return AutoCompleteModule;
}());
AutoCompleteModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
                declarations: [
                    AutoCompleteComponent
                ],
                exports: [
                    AutoCompleteComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
AutoCompleteModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the AutoComplete component with providers.
 */
var AutoCompleteAllModule = /** @class */ (function () {
    function AutoCompleteAllModule() {
    }
    return AutoCompleteAllModule;
}());
AutoCompleteAllModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], AutoCompleteModule],
                exports: [
                    AutoCompleteModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
AutoCompleteAllModule.ctorParameters = function () { return []; };
var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs$3 = ['actionFailureTemplate', 'allowCustomValue', 'allowFiltering', 'changeOnBlur', 'closePopupOnSelect', 'cssClass', 'dataSource', 'delimiterChar', 'enableGroupCheckBox', 'enablePersistence', 'enableRtl', 'enableSelectionOrder', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'hideSelectedItem', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'itemTemplate', 'locale', 'maximumSelectionLength', 'mode', 'noRecordsTemplate', 'openOnClick', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'selectAllText', 'showClearButton', 'showDropDownIcon', 'showSelectAll', 'sortOrder', 'text', 'unSelectAllText', 'value', 'valueTemplate', 'width', 'zIndex'];
var outputs$3 = ['actionBegin', 'actionComplete', 'actionFailure', 'beforeOpen', 'blur', 'change', 'chipSelection', 'close', 'created', 'customValueSelection', 'dataBound', 'destroyed', 'filtering', 'focus', 'open', 'removed', 'removing', 'select', 'selectedAll', 'tagging', 'valueChange'];
var twoWays$3 = ['value'];
/**
 * The MultiSelect allows the user to pick a values from the predefined list of values.
 * ```html
 * <ejs-multiselect></ejs-multiselect>
 * ```
 */
var MultiSelectComponent = MultiSelectComponent_1 = /** @class */ (function (_super) {
    __extends(MultiSelectComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function MultiSelectComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.skipFromEvent = true;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('DropDownsCheckBoxSelection');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        _this.registerEvents(outputs$3);
        _this.addTwoWay.call(_this, twoWays$3);
        Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["setValue"])('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    MultiSelectComponent.prototype.registerOnChange = function (registerFunction) {
    };
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    MultiSelectComponent.prototype.registerOnTouched = function (registerFunction) {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MultiSelectComponent.prototype.writeValue = function (value) {
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    MultiSelectComponent.prototype.setDisabledState = function (disabled) {
    };
    /**
     * @return {?}
     */
    MultiSelectComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    MultiSelectComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    MultiSelectComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    MultiSelectComponent.prototype.ngAfterContentChecked = function () {
    };
    return MultiSelectComponent;
}(_syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["MultiSelect"]));
MultiSelectComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ejs-multiselect',
                inputs: inputs$3,
                outputs: outputs$3,
                template: '',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return MultiSelectComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
MultiSelectComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
]; };
MultiSelectComponent.propDecorators = {
    'footerTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['footerTemplate',] },],
    'headerTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['headerTemplate',] },],
    'valueTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['valueTemplate',] },],
    'itemTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['itemTemplate',] },],
    'noRecordsTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['noRecordsTemplate',] },],
    'actionFailureTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['actionFailureTemplate',] },],
};
__decorate$3([
    Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(),
    __metadata$3("design:type", Object)
], MultiSelectComponent.prototype, "footerTemplate", void 0);
__decorate$3([
    Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(),
    __metadata$3("design:type", Object)
], MultiSelectComponent.prototype, "headerTemplate", void 0);
__decorate$3([
    Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(),
    __metadata$3("design:type", Object)
], MultiSelectComponent.prototype, "valueTemplate", void 0);
__decorate$3([
    Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(),
    __metadata$3("design:type", Object)
], MultiSelectComponent.prototype, "itemTemplate", void 0);
__decorate$3([
    Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])('No Records Found'),
    __metadata$3("design:type", Object)
], MultiSelectComponent.prototype, "noRecordsTemplate", void 0);
__decorate$3([
    Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])('The Request Failed'),
    __metadata$3("design:type", Object)
], MultiSelectComponent.prototype, "actionFailureTemplate", void 0);
MultiSelectComponent = MultiSelectComponent_1 = __decorate$3([
    Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["ComponentMixins"])([_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["ComponentBase"], _syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["FormBase"]]),
    __metadata$3("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
], MultiSelectComponent);
var MultiSelectComponent_1;
/**
 * NgModule definition for the MultiSelect component.
 */
var MultiSelectModule = /** @class */ (function () {
    function MultiSelectModule() {
    }
    return MultiSelectModule;
}());
MultiSelectModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
                declarations: [
                    MultiSelectComponent
                ],
                exports: [
                    MultiSelectComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
MultiSelectModule.ctorParameters = function () { return []; };
var CheckBoxSelectionService = { provide: 'DropDownsCheckBoxSelection', useValue: _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["CheckBoxSelection"] };
/**
 * NgModule definition for the MultiSelect component with providers.
 */
var MultiSelectAllModule = /** @class */ (function () {
    function MultiSelectAllModule() {
    }
    return MultiSelectAllModule;
}());
MultiSelectAllModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], MultiSelectModule],
                exports: [
                    MultiSelectModule
                ],
                providers: [
                    CheckBoxSelectionService
                ]
            },] },
];
/**
 * @nocollapse
 */
MultiSelectAllModule.ctorParameters = function () { return []; };
var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs$4 = ['actionFailureTemplate', 'allowDragAndDrop', 'allowFiltering', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterType', 'groupTemplate', 'height', 'ignoreAccent', 'ignoreCase', 'itemTemplate', 'locale', 'maximumSelectionLength', 'noRecordsTemplate', 'query', 'scope', 'selectionSettings', 'sortOrder', 'toolbarSettings', 'value', 'zIndex'];
var outputs$4 = ['focus', 'blur', 'actionBegin', 'actionComplete', 'actionFailure', 'beforeItemRender', 'change', 'created', 'dataBound', 'destroyed', 'drag', 'dragStart', 'drop', 'filtering', 'select', 'valueChange'];
var twoWays$4 = ['value'];
/**
 * The ListBox allows the user to select values from the predefined list of values.
 * ```html
 * <ejs-listbox [dataSource]='data'></ejs-listbox>
 * ```
 */
var ListBoxComponent = ListBoxComponent_1 = /** @class */ (function (_super) {
    __extends(ListBoxComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function ListBoxComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('DropDownsCheckBoxSelection');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        _this.registerEvents(outputs$4);
        _this.addTwoWay.call(_this, twoWays$4);
        Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["setValue"])('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    ListBoxComponent.prototype.registerOnChange = function (registerFunction) {
    };
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    ListBoxComponent.prototype.registerOnTouched = function (registerFunction) {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ListBoxComponent.prototype.writeValue = function (value) {
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    ListBoxComponent.prototype.setDisabledState = function (disabled) {
    };
    /**
     * @return {?}
     */
    ListBoxComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    ListBoxComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    ListBoxComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    ListBoxComponent.prototype.ngAfterContentChecked = function () {
    };
    return ListBoxComponent;
}(_syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_3__["ListBox"]));
ListBoxComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ejs-listbox',
                inputs: inputs$4,
                outputs: outputs$4,
                template: '',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ListBoxComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ListBoxComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
]; };
ListBoxComponent.propDecorators = {
    'itemTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['itemTemplate',] },],
};
__decorate$4([
    Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["Template"])(),
    __metadata$4("design:type", Object)
], ListBoxComponent.prototype, "itemTemplate", void 0);
ListBoxComponent = ListBoxComponent_1 = __decorate$4([
    Object(_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["ComponentMixins"])([_syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["ComponentBase"], _syncfusion_ej2_angular_base__WEBPACK_IMPORTED_MODULE_2__["FormBase"]]),
    __metadata$4("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
], ListBoxComponent);
var ListBoxComponent_1;
/**
 * NgModule definition for the ListBox component.
 */
var ListBoxModule = /** @class */ (function () {
    function ListBoxModule() {
    }
    return ListBoxModule;
}());
ListBoxModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
                declarations: [
                    ListBoxComponent
                ],
                exports: [
                    ListBoxComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
ListBoxModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the ListBox component with providers.
 */
var ListBoxAllModule = /** @class */ (function () {
    function ListBoxAllModule() {
    }
    return ListBoxAllModule;
}());
ListBoxAllModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], ListBoxModule],
                exports: [
                    ListBoxModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
ListBoxAllModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ej2-angular-dropdowns.es5.js.map


/***/ }),

/***/ "./node_modules/@syncfusion/ej2-dropdowns/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-dropdowns/index.js ***!
  \*********************************************************/
/*! exports provided: incrementalSearch, Search, highlightSearch, revertHighlightSearch, FieldSettings, dropDownBaseClasses, DropDownBase, dropDownListClasses, DropDownList, ComboBox, AutoComplete, MultiSelect, CheckBoxSelection, SelectionSettings, ToolbarSettings, ListBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index */ "./node_modules/@syncfusion/ej2-dropdowns/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "incrementalSearch", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["incrementalSearch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["Search"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "highlightSearch", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["highlightSearch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "revertHighlightSearch", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["revertHighlightSearch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldSettings", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["FieldSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dropDownBaseClasses", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropDownBase", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["DropDownBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dropDownListClasses", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["dropDownListClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropDownList", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["DropDownList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComboBox", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["ComboBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoComplete", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["AutoComplete"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultiSelect", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["MultiSelect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckBoxSelection", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["CheckBoxSelection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionSettings", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["SelectionSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolbarSettings", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["ToolbarSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListBox", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["ListBox"]; });

/**
 * index
 */



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-dropdowns/src/auto-complete/auto-complete.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-dropdowns/src/auto-complete/auto-complete.js ***!
  \***********************************************************************************/
/*! exports provided: AutoComplete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoComplete", function() { return AutoComplete; });
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-base */ "./node_modules/@syncfusion/ej2-base/index.js");
/* harmony import */ var _drop_down_list_drop_down_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drop-down-list/drop-down-list */ "./node_modules/@syncfusion/ej2-dropdowns/src/drop-down-list/drop-down-list.js");
/* harmony import */ var _combo_box_combo_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../combo-box/combo-box */ "./node_modules/@syncfusion/ej2-dropdowns/src/combo-box/combo-box.js");
/* harmony import */ var _common_highlight_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/highlight-search */ "./node_modules/@syncfusion/ej2-dropdowns/src/common/highlight-search.js");
/* harmony import */ var _common_incremental_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/incremental-search */ "./node_modules/@syncfusion/ej2-dropdowns/src/common/incremental-search.js");
/* harmony import */ var _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../drop-down-base/drop-down-base */ "./node_modules/@syncfusion/ej2-dropdowns/src/drop-down-base/drop-down-base.js");
/* harmony import */ var _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @syncfusion/ej2-inputs */ "./node_modules/@syncfusion/ej2-inputs/index.js");
/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @syncfusion/ej2-data */ "./node_modules/@syncfusion/ej2-data/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
/// <reference path='../combo-box/combo-box-model.d.ts'/>








/* tslint:disable */


/* tslint:enable */
_drop_down_list_drop_down_list__WEBPACK_IMPORTED_MODULE_1__["dropDownListClasses"].root = 'e-autocomplete';
_drop_down_list_drop_down_list__WEBPACK_IMPORTED_MODULE_1__["dropDownListClasses"].icon = 'e-input-group-icon e-ddl-icon e-search-icon';
/**
 * The AutoComplete component provides the matched suggestion list when type into the input,
 * from which the user can select one.
 * ```html
 * <input id="list" type="text"/>
 * ```
 * ```typescript
 *   let atcObj:AutoComplete = new AutoComplete();
 *   atcObj.appendTo("#list");
 * ```
 */
var AutoComplete = /** @class */ (function (_super) {
    __extends(AutoComplete, _super);
    /**
     * * Constructor for creating the widget
     */
    function AutoComplete(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.isFiltered = false;
        return _this;
    }
    ;
    /**
     * Initialize the event handler
     * @private
     */
    AutoComplete.prototype.preRender = function () {
        _super.prototype.preRender.call(this);
    };
    AutoComplete.prototype.getLocaleName = function () {
        return 'auto-complete';
    };
    ;
    AutoComplete.prototype.getNgDirective = function () {
        return 'EJS-AUTOCOMPLETE';
    };
    AutoComplete.prototype.getQuery = function (query) {
        var filterQuery = query ? query.clone() : this.query ? this.query.clone() : new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_7__["Query"]();
        var filterType = (this.queryString === '' && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.value)) ? 'equal' : this.filterType;
        var queryString = (this.queryString === '' && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.value)) ? this.value : this.queryString;
        if (this.isFiltered) {
            return filterQuery;
        }
        if (this.queryString !== null) {
            var dataType = this.typeOfData(this.dataSource).typeof;
            if (!(this.dataSource instanceof _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_7__["DataManager"]) && dataType === 'string' || dataType === 'number') {
                filterQuery.where('', filterType, queryString, this.ignoreCase, this.ignoreAccent);
            }
            else {
                var mapping = !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.fields.value) ? this.fields.value : '';
                filterQuery.where(mapping, filterType, queryString, this.ignoreCase, this.ignoreAccent);
            }
        }
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.suggestionCount)) {
            filterQuery.take(this.suggestionCount);
        }
        return filterQuery;
    };
    AutoComplete.prototype.searchLists = function (e) {
        var _this = this;
        this.isTyped = true;
        this.isDataFetched = this.isSelectCustom = false;
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.list)) {
            _super.prototype.renderList.call(this, true);
        }
        this.queryString = this.filterInput.value;
        if (e.keyCode === 40 || e.keyCode === 38) {
            this.queryString = this.queryString === '' ? null : this.queryString;
            this.beforePopupOpen = true;
            this.resetList(this.dataSource, this.fields);
            return;
        }
        this.isSelected = false;
        this.activeIndex = null;
        var eventArgs = {
            preventDefaultAction: false,
            text: this.filterInput.value,
            updateData: function (dataSource, query, fields) {
                if (eventArgs.cancel) {
                    return;
                }
                _this.isFiltered = true;
                _this.filterAction(dataSource, query, fields);
            },
            cancel: false
        };
        this.trigger('filtering', eventArgs, function (eventArgs) {
            if (!eventArgs.cancel && !_this.isFiltered && !eventArgs.preventDefaultAction) {
                _this.filterAction(_this.dataSource, null, _this.fields);
            }
        });
    };
    /**
     * To filter the data from given data source by using query
     * @param  {Object[] | DataManager } dataSource - Set the data source to filter.
     * @param  {Query} query - Specify the query to filter the data.
     * @param  {FieldSettingsModel} fields - Specify the fields to map the column in the data table.
     * @return {void}.
     */
    AutoComplete.prototype.filter = function (dataSource, query, fields) {
        this.isFiltered = true;
        this.filterAction(dataSource, query, fields);
    };
    AutoComplete.prototype.filterAction = function (dataSource, query, fields) {
        this.beforePopupOpen = true;
        if (this.queryString !== '' && (this.queryString.length >= this.minLength)) {
            this.resetList(dataSource, fields, query);
        }
        else {
            this.hidePopup();
        }
    };
    AutoComplete.prototype.clear = function (e, property) {
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(property) || (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(property) && Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(property.dataSource))) {
            _super.prototype.clear.call(this, e);
        }
        if (this.beforePopupOpen) {
            this.hidePopup();
        }
    };
    AutoComplete.prototype.onActionComplete = function (ulElement, list, e, isUpdated) {
        this.fixedHeaderElement = null;
        _super.prototype.onActionComplete.call(this, ulElement, list, e);
        var item = this.list.querySelector('.' + _drop_down_list_drop_down_list__WEBPACK_IMPORTED_MODULE_1__["dropDownListClasses"].li);
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(item)) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([item], _drop_down_list_drop_down_list__WEBPACK_IMPORTED_MODULE_1__["dropDownListClasses"].focus);
        }
        this.postBackAction();
    };
    AutoComplete.prototype.postBackAction = function () {
        if (this.autofill && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.liCollections[0])) {
            var items = [this.liCollections[0]];
            var searchItem = Object(_common_incremental_search__WEBPACK_IMPORTED_MODULE_4__["Search"])(this.inputElement.value, items, 'StartsWith', this.ignoreCase);
            if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(searchItem.item)) {
                _super.prototype.setAutoFill.call(this, this.liCollections[0], true);
            }
        }
    };
    AutoComplete.prototype.setSelection = function (li, e) {
        if (!this.isValidLI(li)) {
            return;
        }
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(e) && e.type === 'keydown' && e.action !== 'enter' && this.isValidLI(li)) {
            var value = this.getFormattedValue(li.getAttribute('data-value'));
            this.activeIndex = this.getIndexByValue(value);
            this.setHoverList(li);
            this.selectedLI = li;
            this.setScrollPosition(e);
            if (this.autofill) {
                this.preventAutoFill = false;
                _super.prototype.setAutoFill.call(this, li);
            }
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["attributes"])(this.inputElement, { 'aria-activedescendant': this.selectedLI ? this.selectedLI.id : null });
        }
        else {
            _super.prototype.setSelection.call(this, li, e);
        }
    };
    AutoComplete.prototype.listOption = function (dataSource, fieldsSettings) {
        var _this = this;
        var fields = _super.prototype.listOption.call(this, dataSource, fieldsSettings);
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(fields.itemCreated)) {
            fields.itemCreated = function (e) {
                if (_this.highlight) {
                    Object(_common_highlight_search__WEBPACK_IMPORTED_MODULE_3__["highlightSearch"])(e.item, _this.queryString, _this.ignoreCase, _this.filterType);
                }
            };
        }
        else {
            var itemCreated_1 = fields.itemCreated;
            fields.itemCreated = function (e) {
                if (_this.highlight) {
                    Object(_common_highlight_search__WEBPACK_IMPORTED_MODULE_3__["highlightSearch"])(e.item, _this.queryString, _this.ignoreCase, _this.filterType);
                }
                itemCreated_1.apply(_this, [e]);
            };
        }
        return fields;
    };
    ;
    AutoComplete.prototype.isFiltering = function () {
        return true;
    };
    AutoComplete.prototype.renderPopup = function () {
        this.list.scrollTop = 0;
        _super.prototype.renderPopup.call(this);
    };
    AutoComplete.prototype.isEditTextBox = function () {
        return  true && this.inputElement.value.trim() !== '';
    };
    AutoComplete.prototype.isPopupButton = function () {
        return this.showPopupButton;
    };
    AutoComplete.prototype.isSelectFocusItem = function (element) {
        return false;
    };
    /**
     * Search the entered text and show it in the suggestion list if available.
     * @returns void.
     */
    AutoComplete.prototype.showPopup = function () {
        if (!this.enabled) {
            return;
        }
        if (this.beforePopupOpen) {
            this.refreshPopup();
            return;
        }
        this.beforePopupOpen = true;
        this.preventAutoFill = true;
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.list)) {
            this.renderList();
        }
        else {
            this.resetList(this.dataSource, this.fields);
        }
    };
    /**
     * Hides the popup if it is in open state.
     * @returns void.
     */
    AutoComplete.prototype.hidePopup = function () {
        this.DropDownBaseresetBlazorTemplates(true, false, false, false);
        _super.prototype.hidePopup.call(this);
        this.activeIndex = -1;
    };
    /**
     * Dynamically change the value of properties.
     * @private
     */
    AutoComplete.prototype.onPropertyChanged = function (newProp, oldProp) {
        if (this.getModuleName() === 'autocomplete') {
            this.setUpdateInitial(['fields', 'query', 'dataSource'], newProp);
        }
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'showPopupButton':
                    if (this.showPopupButton) {
                        var button = _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_6__["Input"].appendSpan(_drop_down_list_drop_down_list__WEBPACK_IMPORTED_MODULE_1__["dropDownListClasses"].icon, this.inputWrapper.container, this.createElement);
                        this.inputWrapper.buttons[0] = button;
                        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.inputWrapper.buttons[0], 'click', this.dropDownClick, this);
                    }
                    else {
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.inputWrapper.buttons[0]);
                        this.inputWrapper.buttons[0] = null;
                    }
                    break;
                default:
                    var atcProps = void 0;
                    atcProps = this.getPropObject(prop, newProp, oldProp);
                    _super.prototype.onPropertyChanged.call(this, atcProps.newProperty, atcProps.oldProperty);
                    break;
            }
        }
    };
    /**
     * Return the module name of this component.
     * @private
     */
    AutoComplete.prototype.getModuleName = function () {
        return 'autocomplete';
    };
    /**
     * To initialize the control rendering
     * @private
     */
    AutoComplete.prototype.render = function () {
        _super.prototype.render.call(this);
    };
    ;
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Complex"])({ value: null, iconCss: null, groupBy: null }, _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_5__["FieldSettings"])
    ], AutoComplete.prototype, "fields", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(true)
    ], AutoComplete.prototype, "ignoreCase", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(false)
    ], AutoComplete.prototype, "showPopupButton", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(false)
    ], AutoComplete.prototype, "highlight", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(20)
    ], AutoComplete.prototype, "suggestionCount", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])({})
    ], AutoComplete.prototype, "htmlAttributes", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(null)
    ], AutoComplete.prototype, "query", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(1)
    ], AutoComplete.prototype, "minLength", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('Contains')
    ], AutoComplete.prototype, "filterType", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], AutoComplete.prototype, "filtering", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(null)
    ], AutoComplete.prototype, "index", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('Never')
    ], AutoComplete.prototype, "floatLabelType", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(null)
    ], AutoComplete.prototype, "valueTemplate", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(null)
    ], AutoComplete.prototype, "filterBarPlaceholder", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(false)
    ], AutoComplete.prototype, "allowFiltering", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(null)
    ], AutoComplete.prototype, "text", void 0);
    AutoComplete = __decorate([
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["NotifyPropertyChanges"]
    ], AutoComplete);
    return AutoComplete;
}(_combo_box_combo_box__WEBPACK_IMPORTED_MODULE_2__["ComboBox"]));



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-dropdowns/src/auto-complete/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-dropdowns/src/auto-complete/index.js ***!
  \***************************************************************************/
/*! exports provided: AutoComplete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auto_complete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auto-complete */ "./node_modules/@syncfusion/ej2-dropdowns/src/auto-complete/auto-complete.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoComplete", function() { return _auto_complete__WEBPACK_IMPORTED_MODULE_0__["AutoComplete"]; });

/**
 * export all modules from current location
 */



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-dropdowns/src/combo-box/combo-box.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-dropdowns/src/combo-box/combo-box.js ***!
  \***************************************************************************/
/*! exports provided: ComboBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboBox", function() { return ComboBox; });
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-base */ "./node_modules/@syncfusion/ej2-base/index.js");
/* harmony import */ var _drop_down_list_drop_down_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drop-down-list/drop-down-list */ "./node_modules/@syncfusion/ej2-dropdowns/src/drop-down-list/drop-down-list.js");
/* harmony import */ var _common_incremental_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/incremental-search */ "./node_modules/@syncfusion/ej2-dropdowns/src/common/incremental-search.js");
/* harmony import */ var _syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-popups */ "./node_modules/@syncfusion/ej2-popups/index.js");
/* harmony import */ var _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-inputs */ "./node_modules/@syncfusion/ej2-inputs/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
/// <reference path='../drop-down-list/drop-down-list-model.d.ts'/>





/* tslint:disable */

/* tslint:enable */
var SPINNER_CLASS = 'e-atc-spinner-icon';
_drop_down_list_drop_down_list__WEBPACK_IMPORTED_MODULE_1__["dropDownListClasses"].root = 'e-combobox';
var inputObject = {
    container: null,
    buttons: []
};
/**
 * The ComboBox component allows the user to type a value or choose an option from the list of predefined options.
 * ```html
 * <select id="list">
 *      <option value='1'>Badminton</option>
 *      <option value='2'>Basketball</option>
 *      <option value='3'>Cricket</option>
 *      <option value='4'>Football</option>
 *      <option value='5'>Tennis</option>
 * </select>
 * ```
 * ```typescript
 *   let games:ComboBox = new ComboBox();
 *   games.appendTo("#list");
 * ```
 */
var ComboBox = /** @class */ (function (_super) {
    __extends(ComboBox, _super);
    /**
     * *Constructor for creating the component
     */
    function ComboBox(options, element) {
        return _super.call(this, options, element) || this;
    }
    ;
    /**
     * Initialize the event handler
     * @private
     */
    ComboBox.prototype.preRender = function () {
        _super.prototype.preRender.call(this);
    };
    ComboBox.prototype.getLocaleName = function () {
        return 'combo-box';
    };
    ;
    ComboBox.prototype.wireEvent = function () {
        if (this.getModuleName() === 'combobox') {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.inputWrapper.buttons[0], 'mousedown', this.preventBlur, this);
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.inputWrapper.container, 'blur', this.onBlur, this);
        }
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.inputWrapper.buttons[0])) {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.inputWrapper.buttons[0], 'mousedown', this.dropDownClick, this);
        }
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.inputElement, 'focus', this.targetFocus, this);
        if (!this.readonly) {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.inputElement, 'input', this.onInput, this);
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.inputElement, 'keyup', this.onFilterUp, this);
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.inputElement, 'keydown', this.onFilterDown, this);
        }
        this.bindCommonEvent();
    };
    ComboBox.prototype.preventBlur = function (e) {
        if ((!this.allowFiltering && document.activeElement !== this.inputElement &&
            !document.activeElement.classList.contains(_drop_down_list_drop_down_list__WEBPACK_IMPORTED_MODULE_1__["dropDownListClasses"].input) && _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice || !_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice)) {
            e.preventDefault();
        }
    };
    ComboBox.prototype.onBlur = function (e) {
        var inputValue = this.inputElement.value === '' ? null : this.inputElement.value;
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.listData) && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(inputValue) && inputValue !== this.text) {
            this.customValue();
        }
        _super.prototype.onBlur.call(this, e);
    };
    ComboBox.prototype.targetElement = function () {
        return this.inputElement;
    };
    ComboBox.prototype.setOldText = function (text) {
        _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_4__["Input"].setValue(this.text, this.inputElement, this.floatLabelType, this.showClearButton);
        this.customValue();
        this.removeSelection();
    };
    ComboBox.prototype.setOldValue = function (value) {
        if (this.allowCustom) {
            this.valueMuteChange(this.value);
        }
        else {
            this.valueMuteChange(null);
        }
        this.removeSelection();
        this.setHiddenValue();
    };
    ComboBox.prototype.valueMuteChange = function (value) {
        var inputValue = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(value) ? null : value.toString();
        _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_4__["Input"].setValue(inputValue, this.inputElement, this.floatLabelType, this.showClearButton);
        this.setProperties({ value: value, text: value, index: null }, true);
        this.activeIndex = this.index;
        var fields = this.fields;
        var dataItem = {};
        dataItem[fields.text] = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(value) ? null : value.toString();
        dataItem[fields.value] = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(value) ? null : value.toString();
        this.itemData = dataItem;
        this.item = null;
        if (this.previousValue !== this.value) {
            this.detachChangeEvent(null);
        }
    };
    ComboBox.prototype.updateValues = function () {
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.value)) {
            var li = this.getElementByValue(this.value);
            if (li) {
                this.setSelection(li, null);
            }
            else if (this.allowCustom) {
                this.valueMuteChange(this.value);
            }
            else {
                this.valueMuteChange(null);
            }
        }
        else if (this.text && Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.value)) {
            var li = this.getElementByText(this.text);
            if (li) {
                this.setSelection(li, null);
            }
            else {
                _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_4__["Input"].setValue(this.text, this.inputElement, this.floatLabelType, this.showClearButton);
                this.customValue();
            }
        }
        else {
            this.setSelection(this.liCollections[this.activeIndex], null);
        }
        this.setHiddenValue();
        _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_4__["Input"].setValue(this.text, this.inputElement, this.floatLabelType, this.showClearButton);
    };
    ComboBox.prototype.updateIconState = function () {
        if (this.showClearButton) {
            if (this.inputElement.value !== '' && !this.readonly) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([this.inputWrapper.clearButton], _drop_down_list_drop_down_list__WEBPACK_IMPORTED_MODULE_1__["dropDownListClasses"].clearIconHide);
            }
            else {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.inputWrapper.clearButton], _drop_down_list_drop_down_list__WEBPACK_IMPORTED_MODULE_1__["dropDownListClasses"].clearIconHide);
            }
        }
    };
    ComboBox.prototype.getAriaAttributes = function () {
        var ariaAttributes = {
            'aria-owns': this.element.id + '_options',
            'role': 'combobox',
            'aria-autocomplete': 'both',
            'aria-labelledby': this.hiddenElement.id,
            'aria-hasPopup': 'true',
            'aria-expanded': 'false',
            'aria-readonly': this.readonly.toString(),
            'autocomplete': 'off',
            'autocorrect': 'off',
            'autocapitalize': 'off',
            'spellcheck': 'false'
        };
        return ariaAttributes;
    };
    ComboBox.prototype.searchLists = function (e) {
        this.isTyped = true;
        if (this.isFiltering()) {
            _super.prototype.searchLists.call(this, e);
            if (this.filterInput.value.trim() === '') {
                this.setHoverList(this.ulElement.querySelector('.' + _drop_down_list_drop_down_list__WEBPACK_IMPORTED_MODULE_1__["dropDownListClasses"].li));
            }
        }
        else {
            if (this.ulElement && this.inputElement.value === '' && this.preventAutoFill) {
                this.setHoverList(this.ulElement.querySelector('.' + _drop_down_list_drop_down_list__WEBPACK_IMPORTED_MODULE_1__["dropDownListClasses"].li));
            }
            this.incrementalSearch(e);
        }
    };
    ComboBox.prototype.getNgDirective = function () {
        return 'EJS-COMBOBOX';
    };
    ComboBox.prototype.setSearchBox = function () {
        this.filterInput = this.inputElement;
        return (this.isFiltering() ? this.inputWrapper : inputObject);
    };
    ComboBox.prototype.onActionComplete = function (ulElement, list, e, isUpdated) {
        _super.prototype.onActionComplete.call(this, ulElement, list, e);
        if (this.isSelectCustom) {
            this.removeSelection();
        }
        if (!this.preventAutoFill && this.getModuleName() === 'combobox' && this.isTyped) {
            this.inlineSearch();
        }
    };
    ComboBox.prototype.getFocusElement = function () {
        var dataItem = this.isSelectCustom ? { text: '' } : this.getItemData();
        var selected = this.list.querySelector('.' + _drop_down_list_drop_down_list__WEBPACK_IMPORTED_MODULE_1__["dropDownListClasses"].selected);
        var isSelected = dataItem.text === this.inputElement.value && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(selected);
        if (isSelected) {
            return selected;
        }
        if ((_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice && !this.isDropDownClick || !_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice) &&
            !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.liCollections) && this.liCollections.length > 0) {
            var inputValue = this.inputElement.value;
            var activeItem = Object(_common_incremental_search__WEBPACK_IMPORTED_MODULE_2__["Search"])(inputValue, this.liCollections, 'StartsWith', true);
            var activeElement = activeItem.item;
            if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(activeElement)) {
                var count = this.getIndexByValue(activeElement.getAttribute('data-value')) - 1;
                var height = parseInt(getComputedStyle(this.liCollections[0], null).getPropertyValue('height'), 10);
                if (!isNaN(height) && this.getModuleName() !== 'autocomplete') {
                    this.removeFocus();
                    var fixedHead = this.fields.groupBy ? this.liCollections[0].offsetHeight : 0;
                    this.list.scrollTop = count * height + fixedHead;
                    Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([activeElement], _drop_down_list_drop_down_list__WEBPACK_IMPORTED_MODULE_1__["dropDownListClasses"].focus);
                }
            }
            else {
                if (this.isSelectCustom && this.inputElement.value.trim() !== '') {
                    this.removeFocus();
                    this.list.scrollTop = 0;
                }
            }
            return activeElement;
        }
        else {
            return null;
        }
    };
    ComboBox.prototype.setValue = function (e) {
        if (e && e.type === 'keydown' && e.action === 'enter') {
            this.removeFillSelection();
        }
        if (this.autofill && this.getModuleName() === 'combobox' && e && e.type === 'keydown' && e.action !== 'enter') {
            this.preventAutoFill = false;
            this.inlineSearch(e);
            return false;
        }
        else {
            return _super.prototype.setValue.call(this, e);
        }
    };
    ComboBox.prototype.checkCustomValue = function () {
        this.itemData = this.getDataByValue(this.value);
        var dataItem = this.getItemData();
        if (!(this.allowCustom && Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(dataItem.value) && Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(dataItem.text))) {
            this.setProperties({ 'value': dataItem.value, 'text': dataItem.text });
        }
    };
    /**
     * Shows the spinner loader.
     * @returns void.
     */
    ComboBox.prototype.showSpinner = function () {
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.spinnerElement)) {
            this.spinnerElement = (this.getModuleName() === 'autocomplete') ? (this.inputWrapper.buttons[0] ||
                this.inputWrapper.clearButton ||
                _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_4__["Input"].appendSpan('e-input-group-icon ' + SPINNER_CLASS, this.inputWrapper.container, this.createElement)) :
                (this.inputWrapper.buttons[0] || this.inputWrapper.clearButton);
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.spinnerElement], _drop_down_list_drop_down_list__WEBPACK_IMPORTED_MODULE_1__["dropDownListClasses"].disableIcon);
            Object(_syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_3__["createSpinner"])({
                target: this.spinnerElement,
                width: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice ? '16px' : '14px'
            }, this.createElement);
            Object(_syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_3__["showSpinner"])(this.spinnerElement);
        }
    };
    /**
     * Hides the spinner loader.
     * @returns void.
     */
    ComboBox.prototype.hideSpinner = function () {
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.spinnerElement)) {
            Object(_syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_3__["hideSpinner"])(this.spinnerElement);
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([this.spinnerElement], _drop_down_list_drop_down_list__WEBPACK_IMPORTED_MODULE_1__["dropDownListClasses"].disableIcon);
            if (this.spinnerElement.classList.contains(SPINNER_CLASS)) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.spinnerElement);
            }
            else {
                this.spinnerElement.innerHTML = '';
            }
            this.spinnerElement = null;
        }
    };
    ComboBox.prototype.setAutoFill = function (activeElement, isHover) {
        if (!isHover) {
            this.setHoverList(activeElement);
        }
        if (this.autofill && !this.preventAutoFill) {
            var currentValue = this.getTextByValue(activeElement.getAttribute('data-value')).toString();
            var currentFillValue = this.getFormattedValue(activeElement.getAttribute('data-value'));
            if (this.getModuleName() === 'combobox') {
                if (!this.isSelected && this.previousValue !== currentFillValue) {
                    this.updateSelectedItem(activeElement, null);
                    this.isSelected = true;
                    this.previousValue = this.getFormattedValue(activeElement.getAttribute('data-value'));
                }
                else {
                    this.updateSelectedItem(activeElement, null, true);
                }
            }
            if (!this.isAndroidAutoFill(currentValue)) {
                this.setAutoFillSelection(currentValue);
            }
        }
    };
    ComboBox.prototype.isAndroidAutoFill = function (value) {
        if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isAndroid) {
            var currentPoints = this.getSelectionPoints();
            var prevEnd = this.prevSelectPoints.end;
            var curEnd = currentPoints.end;
            var prevStart = this.prevSelectPoints.start;
            var curStart = currentPoints.start;
            if (prevEnd !== 0 && ((prevEnd === value.length && prevStart === value.length) ||
                (prevStart > curStart && prevEnd > curEnd) || (prevEnd === curEnd && prevStart === curStart))) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    ComboBox.prototype.clear = function (e, property) {
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(property) || (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(property) && Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(property.dataSource))) {
            _super.prototype.clear.call(this, e);
        }
    };
    ComboBox.prototype.isSelectFocusItem = function (element) {
        return !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(element);
    };
    ComboBox.prototype.inlineSearch = function (e) {
        var isKeyNavigate = (e && (e.action === 'down' || e.action === 'up' ||
            e.action === 'home' || e.action === 'end' || e.action === 'pageUp' || e.action === 'pageDown'));
        var activeElement = isKeyNavigate ? this.liCollections[this.activeIndex] : this.getFocusElement();
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(activeElement)) {
            if (!isKeyNavigate) {
                var value = this.getFormattedValue(activeElement.getAttribute('data-value'));
                this.activeIndex = this.getIndexByValue(value);
                this.activeIndex = !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.activeIndex) ? this.activeIndex : null;
            }
            this.preventAutoFill = this.inputElement.value === '' ? false : this.preventAutoFill;
            this.setAutoFill(activeElement, isKeyNavigate);
        }
        else if (this.inputElement.value === '') {
            this.activeIndex = null;
            this.list.scrollTop = 0;
            var focusItem = this.list.querySelector('.' + _drop_down_list_drop_down_list__WEBPACK_IMPORTED_MODULE_1__["dropDownListClasses"].li);
            this.setHoverList(focusItem);
        }
        else {
            this.activeIndex = null;
            this.removeSelection();
            if (this.liCollections && this.liCollections.length < 0) {
                this.removeFocus();
            }
        }
    };
    ComboBox.prototype.incrementalSearch = function (e) {
        this.showPopup();
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.listData)) {
            this.inlineSearch(e);
            e.preventDefault();
        }
    };
    ;
    ComboBox.prototype.setAutoFillSelection = function (currentValue) {
        var selection = this.getSelectionPoints();
        var value = this.inputElement.value.substr(0, selection.start);
        if (value && (value.toLowerCase() === currentValue.substr(0, selection.start).toLowerCase())) {
            var inputValue = value + currentValue.substr(value.length, currentValue.length);
            _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_4__["Input"].setValue(inputValue, this.inputElement, this.floatLabelType, this.showClearButton);
            this.inputElement.setSelectionRange(selection.start, this.inputElement.value.length);
        }
        else {
            _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_4__["Input"].setValue(currentValue, this.inputElement, this.floatLabelType, this.showClearButton);
            this.inputElement.setSelectionRange(0, this.inputElement.value.length);
        }
    };
    ;
    ComboBox.prototype.getValueByText = function (text) {
        return _super.prototype.getValueByText.call(this, text, true, this.ignoreAccent);
    };
    ComboBox.prototype.unWireEvent = function () {
        if (this.getModuleName() === 'combobox') {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.inputWrapper.buttons[0], 'mousedown', this.preventBlur);
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.inputWrapper.container, 'blur', this.onBlur);
        }
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.inputWrapper.buttons[0])) {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.inputWrapper.buttons[0], 'mousedown', this.dropDownClick);
        }
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.inputElement, 'focus', this.targetFocus);
        if (!this.readonly) {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.inputElement, 'input', this.onInput);
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.inputElement, 'keyup', this.onFilterUp);
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.inputElement, 'keydown', this.onFilterDown);
        }
        this.unBindCommonEvent();
    };
    ComboBox.prototype.setSelection = function (li, e) {
        _super.prototype.setSelection.call(this, li, e);
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(li) && !this.autofill && !this.isDropDownClick) {
            this.removeFocus();
        }
    };
    ComboBox.prototype.selectCurrentItem = function (e) {
        var li;
        if (this.isPopupOpen) {
            li = this.list.querySelector('.' + _drop_down_list_drop_down_list__WEBPACK_IMPORTED_MODULE_1__["dropDownListClasses"].focus);
            if (li) {
                this.setSelection(li, e);
                this.isTyped = false;
            }
            if (this.isSelected) {
                this.isSelectCustom = false;
                this.onChangeEvent(e);
            }
        }
        if (e.action === 'enter' && this.inputElement.value.trim() === '') {
            this.clear(e);
        }
        else if (this.isTyped && !this.isSelected && Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(li)) {
            this.customValue();
        }
        this.hidePopup();
    };
    ComboBox.prototype.setHoverList = function (li) {
        this.removeSelection();
        if (this.isValidLI(li) && !li.classList.contains(_drop_down_list_drop_down_list__WEBPACK_IMPORTED_MODULE_1__["dropDownListClasses"].selected)) {
            this.removeFocus();
            li.classList.add(_drop_down_list_drop_down_list__WEBPACK_IMPORTED_MODULE_1__["dropDownListClasses"].focus);
        }
    };
    ;
    ComboBox.prototype.targetFocus = function (e) {
        if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice && !this.allowFiltering) {
            this.preventFocus = false;
        }
        this.onFocus();
    };
    ComboBox.prototype.dropDownClick = function (e) {
        e.preventDefault();
        if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice && !this.allowFiltering) {
            this.preventFocus = true;
        }
        _super.prototype.dropDownClick.call(this, e);
    };
    ComboBox.prototype.customValue = function () {
        var _this = this;
        var value = this.getValueByText(this.inputElement.value);
        if (!this.allowCustom && this.inputElement.value !== '') {
            var previousValue = this.previousValue;
            var currentValue = this.value;
            this.setProperties({ value: value });
            if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.value)) {
                _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_4__["Input"].setValue('', this.inputElement, this.floatLabelType, this.showClearButton);
            }
            if (this.autofill && previousValue === this.value && currentValue !== this.value) {
                this.onChangeEvent(null);
            }
        }
        else if (this.inputElement.value.trim() !== '') {
            var previousValue_1 = this.value;
            if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(value)) {
                var value_1 = this.inputElement.value === '' ? null : this.inputElement.value;
                var eventArgs = void 0;
                eventArgs = { text: value_1, item: {} };
                if (!this.initial) {
                    this.trigger('customValueSpecifier', eventArgs, function (eventArgs) {
                        _this.updateCustomValueCallback(value_1, eventArgs, previousValue_1);
                    });
                }
                else {
                    this.updateCustomValueCallback(value_1, eventArgs, previousValue_1);
                }
            }
            else {
                this.isSelectCustom = false;
                this.setProperties({ value: value });
                if (previousValue_1 !== this.value) {
                    this.onChangeEvent(null);
                }
            }
        }
        else if (this.allowCustom) {
            this.isSelectCustom = true;
        }
    };
    ComboBox.prototype.updateCustomValueCallback = function (value, eventArgs, previousValue) {
        var fields = this.fields;
        var item = eventArgs.item;
        var dataItem = {};
        if (item && Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getValue"])(fields.text, item) && Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getValue"])(fields.value, item)) {
            dataItem = item;
        }
        else {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["setValue"])(fields.text, value, dataItem);
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["setValue"])(fields.value, value, dataItem);
        }
        this.itemData = dataItem;
        var changeData = {
            text: Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getValue"])(fields.text, this.itemData),
            value: Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getValue"])(fields.value, this.itemData),
            index: null
        };
        this.setProperties(changeData, true);
        this.setSelection(null, null);
        this.isSelectCustom = true;
        if (previousValue !== this.value) {
            this.onChangeEvent(null);
        }
    };
    /**
     * Dynamically change the value of properties.
     * @private
     */
    ComboBox.prototype.onPropertyChanged = function (newProp, oldProp) {
        if (this.getModuleName() === 'combobox') {
            this.setUpdateInitial(['fields', 'query', 'dataSource'], newProp);
        }
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'readonly':
                    _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_4__["Input"].setReadonly(this.readonly, this.inputElement);
                    if (this.readonly) {
                        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.inputElement, 'input', this.onInput);
                        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.inputElement, 'keyup', this.onFilterUp);
                        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.inputElement, 'keydown', this.onFilterDown);
                    }
                    else {
                        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.inputElement, 'input', this.onInput, this);
                        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.inputElement, 'keyup', this.onFilterUp, this);
                        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.inputElement, 'keydown', this.onFilterDown, this);
                    }
                    break;
                case 'allowFiltering':
                    this.setSearchBox();
                    if (this.isFiltering() && this.getModuleName() === 'combobox' && Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.list)) {
                        _super.prototype.renderList.call(this);
                    }
                    break;
                case 'allowCustom':
                    break;
                default:
                    var comboProps = void 0;
                    comboProps = this.getPropObject(prop, newProp, oldProp);
                    _super.prototype.onPropertyChanged.call(this, comboProps.newProperty, comboProps.oldProperty);
                    break;
            }
        }
    };
    /**
     * To initialize the control rendering.
     * @private
     */
    ComboBox.prototype.render = function () {
        _super.prototype.render.call(this);
        this.setSearchBox();
        if (this.isFiltering() && this.getModuleName() === 'combobox' && Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.list)) {
            _super.prototype.renderList.call(this);
        }
        this.renderComplete();
    };
    ;
    /**
     * Return the module name of this component.
     * @private
     */
    ComboBox.prototype.getModuleName = function () {
        return 'combobox';
    };
    /**
     * Hides the popup if it is in open state.
     * @returns void.
     */
    ComboBox.prototype.hidePopup = function () {
        var inputValue = this.inputElement.value === '' ? null : this.inputElement.value;
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.listData)) {
            var isEscape = this.isEscapeKey;
            if (this.isEscapeKey) {
                _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_4__["Input"].setValue(this.typedString, this.inputElement, this.floatLabelType, this.showClearButton);
                this.isEscapeKey = false;
            }
            if (this.autofill) {
                this.removeFillSelection();
            }
            var dataItem = this.isSelectCustom ? { text: '' } : this.getItemData();
            var selected = this.list.querySelector('.' + _drop_down_list_drop_down_list__WEBPACK_IMPORTED_MODULE_1__["dropDownListClasses"].selected);
            if (dataItem.text === this.inputElement.value && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(selected)) {
                if (this.isSelected) {
                    this.onChangeEvent(null);
                    this.isSelectCustom = false;
                }
                _super.prototype.hidePopup.call(this);
                return;
            }
            if (this.getModuleName() === 'combobox' && this.inputElement.value.trim() !== '') {
                var searchItem = Object(_common_incremental_search__WEBPACK_IMPORTED_MODULE_2__["Search"])(this.inputElement.value, this.liCollections, 'Equal', true);
                this.selectedLI = searchItem.item;
                if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(searchItem.index)) {
                    searchItem.index = Object(_common_incremental_search__WEBPACK_IMPORTED_MODULE_2__["Search"])(this.inputElement.value, this.liCollections, 'StartsWith', true).index;
                }
                this.activeIndex = searchItem.index;
                if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.selectedLI)) {
                    this.updateSelectedItem(this.selectedLI, null, true);
                }
                else if (isEscape) {
                    this.isSelectCustom = true;
                    this.removeSelection();
                }
            }
            if (!this.isEscapeKey && this.isTyped && !this.isInteracted) {
                this.customValue();
            }
        }
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.listData) && this.allowCustom && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(inputValue) && inputValue !== this.value) {
            this.customValue();
        }
        _super.prototype.hidePopup.call(this);
    };
    /**
     * Sets the focus to the component for interaction.
     * @returns void.
     */
    ComboBox.prototype.focusIn = function () {
        if (!this.enabled) {
            return;
        }
        if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice && !this.allowFiltering) {
            this.preventFocus = true;
        }
        _super.prototype.focusIn.call(this);
    };
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(false)
    ], ComboBox.prototype, "autofill", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(true)
    ], ComboBox.prototype, "allowCustom", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])({})
    ], ComboBox.prototype, "htmlAttributes", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(false)
    ], ComboBox.prototype, "allowFiltering", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(null)
    ], ComboBox.prototype, "query", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(null)
    ], ComboBox.prototype, "index", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(true)
    ], ComboBox.prototype, "showClearButton", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], ComboBox.prototype, "customValueSpecifier", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], ComboBox.prototype, "filtering", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(null)
    ], ComboBox.prototype, "valueTemplate", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('Never')
    ], ComboBox.prototype, "floatLabelType", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(null)
    ], ComboBox.prototype, "filterBarPlaceholder", void 0);
    ComboBox = __decorate([
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["NotifyPropertyChanges"]
    ], ComboBox);
    return ComboBox;
}(_drop_down_list_drop_down_list__WEBPACK_IMPORTED_MODULE_1__["DropDownList"]));



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-dropdowns/src/combo-box/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-dropdowns/src/combo-box/index.js ***!
  \***********************************************************************/
/*! exports provided: ComboBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _combo_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combo-box */ "./node_modules/@syncfusion/ej2-dropdowns/src/combo-box/combo-box.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComboBox", function() { return _combo_box__WEBPACK_IMPORTED_MODULE_0__["ComboBox"]; });

/**
 * export all modules from current location
 */



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-dropdowns/src/common/highlight-search.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-dropdowns/src/common/highlight-search.js ***!
  \*******************************************************************************/
/*! exports provided: highlightSearch, revertHighlightSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightSearch", function() { return highlightSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revertHighlightSearch", function() { return revertHighlightSearch; });
/**
 * Function helps to find which highlightSearch is to call based on your data.
 * @param  {HTMLElement} element - Specifies an li element.
 * @param  {string} query - Specifies the string to be highlighted.
 * @param  {boolean} ignoreCase - Specifies the ignoreCase option.
 * @param  {HightLightType} type - Specifies the type of highlight.
 */
function highlightSearch(element, query, ignoreCase, type) {
    if (query === '') {
        return;
    }
    else {
        var ignoreRegex = ignoreCase ? 'gim' : 'gm';
        query = /^[a-zA-Z0-9- ]*$/.test(query) ? query : query.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
        var replaceQuery = type === 'StartsWith' ? '^(' + query + ')' : type === 'EndsWith' ? '(' + query + ')$' : '(' + query + ')';
        findTextNode(element, new RegExp(replaceQuery, ignoreRegex));
    }
}
function findTextNode(element, pattern) {
    for (var index = 0; element.childNodes && (index < element.childNodes.length); index++) {
        if (element.childNodes[index].nodeType === 3) {
            element.innerHTML = element.innerHTML.replace(pattern, '<span class="e-highlight">$1</span>');
            break;
        }
        else {
            findTextNode(element.childNodes[index], pattern);
        }
    }
}
/**
 * Function helps to remove highlighted element based on your data.
 * @param  {HTMLElement} content - Specifies an content element.
 */
function revertHighlightSearch(content) {
    var contentElement = content.querySelectorAll('.e-highlight');
    for (var i = contentElement.length - 1; i >= 0; i--) {
        var parent_1 = contentElement[i].parentNode;
        var text = document.createTextNode(contentElement[i].textContent);
        parent_1.replaceChild(text, contentElement[i]);
    }
}


/***/ }),

/***/ "./node_modules/@syncfusion/ej2-dropdowns/src/common/incremental-search.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-dropdowns/src/common/incremental-search.js ***!
  \*********************************************************************************/
/*! exports provided: incrementalSearch, Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementalSearch", function() { return incrementalSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/**
 * IncrementalSearch module file
 */
var queryString = '';
var prevString = '';
var matches = [];
var activeClass = 'e-active';
/**
 * Search and focus the list item based on key code matches with list text content
 * @param  { number } keyCode - Specifies the key code which pressed on keyboard events.
 * @param  { HTMLElement[]] } items - Specifies an array of HTMLElement, from which matches find has done.
 * @param { number } selectedIndex - Specifies the selected item in list item, so that search will happen
 * after selected item otherwise it will do from initial.
 * @param  { boolean } ignoreCase - Specifies the case consideration when search has done.
 */
function incrementalSearch(keyCode, items, selectedIndex, ignoreCase) {
    queryString += String.fromCharCode(keyCode);
    setTimeout(function () { queryString = ''; }, 1000);
    var index;
    queryString = ignoreCase ? queryString.toLowerCase() : queryString;
    if (prevString === queryString) {
        for (var i = 0; i < matches.length; i++) {
            if (matches[i].classList.contains(activeClass)) {
                index = i;
                break;
            }
        }
        index = index + 1;
        return matches[index];
    }
    else {
        var listItems = items;
        var strLength = queryString.length;
        var text = void 0;
        var item = void 0;
        selectedIndex = selectedIndex ? selectedIndex + 1 : 0;
        var i = selectedIndex;
        matches = [];
        do {
            if (i === listItems.length) {
                i = -1;
            }
            i === -1 ? index = 0 : index = i;
            item = listItems[index];
            text = ignoreCase ? item.innerText.toLowerCase() : item.innerText;
            if (text.substr(0, strLength) === queryString) {
                matches.push(listItems[index]);
            }
            i++;
        } while (i !== selectedIndex);
        prevString = queryString;
        return matches[0];
    }
}
function Search(inputVal, items, searchType, ignoreCase) {
    var listItems = items;
    ignoreCase = ignoreCase !== undefined && ignoreCase !== null ? ignoreCase : true;
    var itemData = { item: null, index: null };
    if (inputVal && inputVal.length) {
        var strLength = inputVal.length;
        var queryStr = ignoreCase ? inputVal.toLocaleLowerCase() : inputVal;
        for (var i = 0, itemsData = listItems; i < itemsData.length; i++) {
            var item = itemsData[i];
            var text = (ignoreCase ? item.textContent.toLocaleLowerCase() : item.textContent).replace(/^\s+|\s+$/g, '');
            if ((searchType === 'Equal' && text === queryStr) || (searchType === 'StartsWith' && text.substr(0, strLength) === queryStr)) {
                itemData.item = item;
                itemData.index = i;
                return { item: item, index: i };
            }
        }
        return itemData;
    }
    return itemData;
}


/***/ }),

/***/ "./node_modules/@syncfusion/ej2-dropdowns/src/common/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-dropdowns/src/common/index.js ***!
  \********************************************************************/
/*! exports provided: incrementalSearch, Search, highlightSearch, revertHighlightSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _incremental_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incremental-search */ "./node_modules/@syncfusion/ej2-dropdowns/src/common/incremental-search.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "incrementalSearch", function() { return _incremental_search__WEBPACK_IMPORTED_MODULE_0__["incrementalSearch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _incremental_search__WEBPACK_IMPORTED_MODULE_0__["Search"]; });

/* harmony import */ var _highlight_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlight-search */ "./node_modules/@syncfusion/ej2-dropdowns/src/common/highlight-search.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "highlightSearch", function() { return _highlight_search__WEBPACK_IMPORTED_MODULE_1__["highlightSearch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "revertHighlightSearch", function() { return _highlight_search__WEBPACK_IMPORTED_MODULE_1__["revertHighlightSearch"]; });

/**
 * Common source
 */




/***/ }),

/***/ "./node_modules/@syncfusion/ej2-dropdowns/src/drop-down-base/drop-down-base.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-dropdowns/src/drop-down-base/drop-down-base.js ***!
  \*************************************************************************************/
/*! exports provided: FieldSettings, dropDownBaseClasses, DropDownBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldSettings", function() { return FieldSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropDownBaseClasses", function() { return dropDownBaseClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownBase", function() { return DropDownBase; });
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-base */ "./node_modules/@syncfusion/ej2-base/index.js");
/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-data */ "./node_modules/@syncfusion/ej2-data/index.js");
/* harmony import */ var _syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-lists */ "./node_modules/@syncfusion/ej2-lists/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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






var FieldSettings = /** @class */ (function (_super) {
    __extends(FieldSettings, _super);
    function FieldSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])()
    ], FieldSettings.prototype, "text", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])()
    ], FieldSettings.prototype, "value", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])()
    ], FieldSettings.prototype, "iconCss", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])()
    ], FieldSettings.prototype, "groupBy", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])()
    ], FieldSettings.prototype, "htmlAttributes", void 0);
    return FieldSettings;
}(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["ChildProperty"]));

var dropDownBaseClasses = {
    root: 'e-dropdownbase',
    rtl: 'e-rtl',
    content: 'e-content',
    selected: 'e-active',
    hover: 'e-hover',
    noData: 'e-nodata',
    fixedHead: 'e-fixed-head',
    focus: 'e-item-focus',
    li: _syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_2__["cssClass"].li,
    group: _syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_2__["cssClass"].group,
    disabled: _syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_2__["cssClass"].disabled,
    grouping: 'e-dd-group'
};
var ITEMTEMPLATE_PROPERTY = 'ItemTemplate';
var VALUETEMPLATE_PROPERTY = 'ValueTemplate';
var GROUPTEMPLATE_PROPERTY = 'GroupTemplate';
var HEADERTEMPLATE_PROPERTY = 'HeaderTemplate';
var FOOTERTEMPLATE_PROPERTY = 'FooterTemplate';
var NORECORDSTEMPLATE_PROPERTY = 'NoRecordsTemplate';
var ACTIONFAILURETEMPLATE_PROPERTY = 'ActionFailureTemplate';
/**
 * DropDownBase component will generate the list items based on given data and act as base class to drop-down related components
 */
var DropDownBase = /** @class */ (function (_super) {
    __extends(DropDownBase, _super);
    /**
     * * Constructor for DropDownBase class
     */
    function DropDownBase(options, element) {
        return _super.call(this, options, element) || this;
    }
    ;
    DropDownBase.prototype.getPropObject = function (prop, newProp, oldProp) {
        var newProperty = new Object();
        var oldProperty = new Object();
        // tslint:disable-next-line:no-function-constructor-with-string-args
        var propName = function (prop) {
            return prop;
        };
        newProperty[propName(prop)] = newProp[propName(prop)];
        oldProperty[propName(prop)] = oldProp[propName(prop)];
        var data = new Object();
        data.newProperty = newProperty;
        data.oldProperty = oldProperty;
        return data;
    };
    DropDownBase.prototype.getValueByText = function (text, ignoreCase, ignoreAccent) {
        var value = null;
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.listData)) {
            if (ignoreCase) {
                value = this.checkValueCase(text, true, ignoreAccent);
            }
            else {
                value = this.checkValueCase(text, false, ignoreAccent);
            }
        }
        return value;
    };
    ;
    DropDownBase.prototype.checkValueCase = function (text, ignoreCase, ignoreAccent, isTextByValue) {
        var _this = this;
        var value = null;
        if (isTextByValue) {
            value = text;
        }
        var dataSource = this.listData;
        var fields = this.fields;
        var type = this.typeOfData(dataSource).typeof;
        if (type === 'string' || type === 'number' || type === 'boolean') {
            for (var _i = 0, dataSource_1 = dataSource; _i < dataSource_1.length; _i++) {
                var item = dataSource_1[_i];
                if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(item)) {
                    if (ignoreAccent) {
                        value = this.checkingAccent(String(item), text, ignoreCase);
                    }
                    else {
                        if (ignoreCase) {
                            if (this.checkIgnoreCase(String(item), text)) {
                                value = this.getItemValue(String(item), text, ignoreCase);
                            }
                        }
                        else {
                            if (this.checkNonIgnoreCase(String(item), text)) {
                                value = this.getItemValue(String(item), text, ignoreCase, isTextByValue);
                            }
                        }
                    }
                }
            }
        }
        else {
            if (ignoreCase) {
                dataSource.filter(function (item) {
                    var itemValue = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getValue"])(fields.value, item);
                    if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(itemValue) && _this.checkIgnoreCase(Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getValue"])(fields.text, item).toString(), text)) {
                        value = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getValue"])(fields.value, item);
                    }
                });
            }
            else {
                if (isTextByValue) {
                    dataSource.filter(function (item) {
                        var itemValue = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getValue"])(fields.value, item);
                        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(itemValue) && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(value) && itemValue.toString() === value.toString()) {
                            value = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getValue"])(fields.text, item);
                        }
                    });
                }
                else {
                    dataSource.filter(function (item) {
                        if (_this.checkNonIgnoreCase(Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getValue"])(fields.text, item), text)) {
                            value = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getValue"])(fields.value, item);
                        }
                    });
                }
            }
        }
        return value;
    };
    DropDownBase.prototype.checkingAccent = function (item, text, ignoreCase) {
        var dataItem = _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_1__["DataUtil"].ignoreDiacritics(String(item));
        var textItem = _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_1__["DataUtil"].ignoreDiacritics(text.toString());
        var value = null;
        if (ignoreCase) {
            if (this.checkIgnoreCase(dataItem, textItem)) {
                value = this.getItemValue(String(item), text, ignoreCase);
            }
        }
        else {
            if (this.checkNonIgnoreCase(String(item), text)) {
                value = this.getItemValue(String(item), text, ignoreCase);
            }
        }
        return value;
    };
    DropDownBase.prototype.checkIgnoreCase = function (item, text) {
        return String(item).toLowerCase() === text.toString().toLowerCase() ? true : false;
    };
    DropDownBase.prototype.checkNonIgnoreCase = function (item, text) {
        return String(item) === text.toString() ? true : false;
    };
    DropDownBase.prototype.getItemValue = function (dataItem, typedText, ignoreCase, isTextByValue) {
        var value = null;
        var dataSource = this.listData;
        var type = this.typeOfData(dataSource).typeof;
        if (isTextByValue) {
            value = dataItem.toString();
        }
        else {
            if (ignoreCase) {
                value = type === 'string' ? String(dataItem) : this.getFormattedValue(String(dataItem));
            }
            else {
                value = type === 'string' ? typedText : this.getFormattedValue(typedText);
            }
        }
        return value;
    };
    DropDownBase.prototype.l10nUpdate = function (actionFailure) {
        var ele = this.getModuleName() === 'listbox' ? this.ulElement : this.list;
        if (this.noRecordsTemplate !== 'No Records Found' || this.actionFailureTemplate !== 'The Request Failed') {
            this.DropDownBaseresetBlazorTemplates(false, false, true, true);
            var template = actionFailure ? this.actionFailureTemplate : this.noRecordsTemplate;
            var compiledString = void 0;
            var templateId = actionFailure ? this.actionFailureTemplateId : this.noRecordsTemplateId;
            ele.innerHTML = '';
            compiledString = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["compile"])(template);
            for (var _i = 0, _a = compiledString({}, null, null, templateId, this.isStringTemplate); _i < _a.length; _i++) {
                var item = _a[_i];
                ele.appendChild(item);
            }
            this.DropDownBaseupdateBlazorTemplates(false, false, !actionFailure, actionFailure);
        }
        else {
            var l10nLocale = { noRecordsTemplate: 'No Records Found', actionFailureTemplate: 'The Request Failed' };
            var componentLocale = new _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["L10n"](this.getLocaleName(), {}, this.locale);
            if (componentLocale.getConstant('actionFailureTemplate') !== '') {
                this.l10n = componentLocale;
            }
            else {
                this.l10n = new _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["L10n"](this.getModuleName() === 'listbox' ? 'listbox' : 'dropdowns', l10nLocale, this.locale);
            }
            ele.innerHTML = actionFailure ?
                this.l10n.getConstant('actionFailureTemplate') : this.l10n.getConstant('noRecordsTemplate');
        }
    };
    DropDownBase.prototype.getLocaleName = function () {
        return 'drop-down-base';
    };
    ;
    DropDownBase.prototype.getTextByValue = function (value) {
        var text;
        text = this.checkValueCase(value, false, false, true);
        return text;
    };
    DropDownBase.prototype.getFormattedValue = function (value) {
        if (this.listData && this.listData.length) {
            var item = this.typeOfData(this.listData);
            if (typeof Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getValue"])((this.fields.value ? this.fields.value : 'value'), item.item) === 'number'
                || item.typeof === 'number') {
                return parseFloat(value);
            }
            if (typeof Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getValue"])((this.fields.value ? this.fields.value : 'value'), item.item) === 'boolean'
                || item.typeof === 'boolean') {
                return (value === 'true');
            }
        }
        return value;
    };
    /**
     * Sets RTL to dropdownbase wrapper
     */
    DropDownBase.prototype.setEnableRtl = function () {
        if (this.list) {
            this.enableRtlElements.push(this.list);
        }
        this.enableRtl ? Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])(this.enableRtlElements, dropDownBaseClasses.rtl) :
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(this.enableRtlElements, dropDownBaseClasses.rtl);
    };
    ;
    /**
     * Initialize the Component.
     */
    DropDownBase.prototype.initialize = function () {
        this.bindEvent = true;
        this.actionFailureTemplateId = "" + this.element.id + ACTIONFAILURETEMPLATE_PROPERTY;
        if (this.element.tagName === 'UL') {
            var jsonElement = _syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_2__["ListBase"].createJsonFromElement(this.element);
            this.setProperties({ fields: { text: 'text', value: 'text' } }, true);
            this.resetList(jsonElement, this.fields);
        }
        else if (this.element.tagName === 'SELECT') {
            var dataSource = this.dataSource instanceof Array ? (this.dataSource.length > 0 ? true : false)
                : !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.dataSource) ? true : false;
            if (!dataSource) {
                this.renderItemsBySelect();
            }
        }
        else {
            this.setListData(this.dataSource, this.fields, this.query);
        }
    };
    ;
    DropDownBase.prototype.DropDownBaseupdateBlazorTemplates = function (item, group, noRecord, action, value, header, footer, isEmpty) {
        if (!this.isStringTemplate) {
            if (this.itemTemplate && item) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["updateBlazorTemplate"])(this.itemTemplateId, ITEMTEMPLATE_PROPERTY, this);
            }
            if (this.groupTemplate && group) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["updateBlazorTemplate"])(this.groupTemplateId, GROUPTEMPLATE_PROPERTY, this);
            }
            if (this.noRecordsTemplate && noRecord) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["updateBlazorTemplate"])(this.noRecordsTemplateId, NORECORDSTEMPLATE_PROPERTY, this);
            }
            if (this.actionFailureTemplate && action) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["updateBlazorTemplate"])(this.actionFailureTemplateId, ACTIONFAILURETEMPLATE_PROPERTY, this);
            }
            if (value) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["updateBlazorTemplate"])(this.valueTemplateId, VALUETEMPLATE_PROPERTY, this, isEmpty);
            }
            if (header) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["updateBlazorTemplate"])(this.headerTemplateId, HEADERTEMPLATE_PROPERTY, this);
            }
            if (footer) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["updateBlazorTemplate"])(this.footerTemplateId, FOOTERTEMPLATE_PROPERTY, this);
            }
        }
    };
    DropDownBase.prototype.DropDownBaseresetBlazorTemplates = function (item, group, noRecord, action, value, header, footer) {
        if (!this.isStringTemplate) {
            if (this.itemTemplate && item) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["resetBlazorTemplate"])(this.itemTemplateId, ITEMTEMPLATE_PROPERTY);
            }
            if (this.groupTemplate && group) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["resetBlazorTemplate"])(this.groupTemplateId, GROUPTEMPLATE_PROPERTY);
            }
            if (this.noRecordsTemplate && noRecord) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["resetBlazorTemplate"])(this.noRecordsTemplateId, NORECORDSTEMPLATE_PROPERTY);
            }
            if (this.actionFailureTemplate && action) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["resetBlazorTemplate"])(this.actionFailureTemplateId, ACTIONFAILURETEMPLATE_PROPERTY);
            }
            if (value) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["resetBlazorTemplate"])(this.valueTemplateId, VALUETEMPLATE_PROPERTY);
            }
            if (header) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["resetBlazorTemplate"])(this.headerTemplateId, HEADERTEMPLATE_PROPERTY);
            }
            if (footer) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["resetBlazorTemplate"])(this.footerTemplateId, FOOTERTEMPLATE_PROPERTY);
            }
        }
    };
    /**
     * Get the properties to be maintained in persisted state.
     */
    DropDownBase.prototype.getPersistData = function () {
        return this.addOnPersist([]);
    };
    ;
    /**
     * Sets the enabled state to DropDownBase.
     */
    DropDownBase.prototype.setEnabled = function () {
        this.element.setAttribute('aria-disabled', (this.enabled) ? 'false' : 'true');
    };
    ;
    /**
     * Sets the enabled state to DropDownBase.
     */
    DropDownBase.prototype.updateDataAttribute = function (value) {
        var invalidAttr = ['class', 'style', 'id', 'type'];
        var attr = {};
        for (var a = 0; a < this.element.attributes.length; a++) {
            if (invalidAttr.indexOf(this.element.attributes[a].name) === -1 &&
                !(this.getModuleName() === 'dropdownlist' && this.element.attributes[a].name === 'readonly')) {
                attr[this.element.attributes[a].name] = this.element.getAttribute(this.element.attributes[a].name);
            }
        }
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["extend"])(attr, value, attr);
        this.setProperties({ htmlAttributes: attr }, true);
    };
    DropDownBase.prototype.renderItemsBySelect = function () {
        var element = this.element;
        var fields = { value: 'value', text: 'text' };
        var jsonElement = [];
        var group = element.querySelectorAll('select>optgroup');
        var option = element.querySelectorAll('select>option');
        this.getJSONfromOption(jsonElement, option, fields);
        if (group.length) {
            for (var i = 0; i < group.length; i++) {
                var item = group[i];
                var optionGroup = {};
                optionGroup[fields.text] = item.label;
                optionGroup.isHeader = true;
                var child = item.querySelectorAll('option');
                jsonElement.push(optionGroup);
                this.getJSONfromOption(jsonElement, child, fields);
            }
            var items = element.querySelectorAll('select>option');
        }
        this.fields.text = fields.text;
        this.fields.value = fields.value;
        this.resetList(jsonElement, fields);
    };
    DropDownBase.prototype.getJSONfromOption = function (items, options, fields) {
        for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
            var option = options_1[_i];
            var json = {};
            json[fields.text] = option.innerText;
            json[fields.value] = option.getAttribute(fields.value) ? option.getAttribute(fields.value) : option.innerText;
            items.push(json);
        }
    };
    /**
     * Execute before render the list items
     * @private
     */
    DropDownBase.prototype.preRender = function () {
        // there is no event handler
        this.scrollTimer = -1;
        this.enableRtlElements = [];
        this.isRequested = false;
        this.isDataFetched = false;
        this.itemTemplateId = "" + this.element.id + ITEMTEMPLATE_PROPERTY;
        this.valueTemplateId = "" + this.element.id + VALUETEMPLATE_PROPERTY;
        this.groupTemplateId = "" + this.element.id + GROUPTEMPLATE_PROPERTY;
        this.headerTemplateId = "" + this.element.id + HEADERTEMPLATE_PROPERTY;
        this.footerTemplateId = "" + this.element.id + FOOTERTEMPLATE_PROPERTY;
        this.noRecordsTemplateId = "" + this.element.id + NORECORDSTEMPLATE_PROPERTY;
    };
    /**
     * Creates the list items of DropDownBase component.
     */
    DropDownBase.prototype.setListData = function (dataSource, fields, query) {
        var _this = this;
        fields = fields ? fields : this.fields;
        var ulElement;
        this.isActive = true;
        var eventArgs = { cancel: false, data: dataSource, query: query };
        this.trigger('actionBegin', eventArgs, function (eventArgs) {
            if (!eventArgs.cancel) {
                _this.showSpinner();
                if (dataSource instanceof _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_1__["DataManager"]) {
                    _this.isRequested = true;
                    if (_this.isDataFetched) {
                        _this.emptyDataRequest(fields);
                        return;
                    }
                    eventArgs.data.executeQuery(_this.getQuery(eventArgs.query)).then(function (e) {
                        _this.trigger('actionComplete', e, function (e) {
                            if (!e.cancel) {
                                var listItems = e.result;
                                if (listItems.length === 0) {
                                    _this.isDataFetched = true;
                                }
                                ulElement = _this.renderItems(listItems, fields);
                                _this.onActionComplete(ulElement, listItems, e);
                                if (_this.groupTemplate) {
                                    _this.renderGroupTemplate(ulElement);
                                }
                                _this.isRequested = false;
                                _this.bindChildItems(listItems, ulElement, fields, e);
                            }
                        });
                    }).catch(function (e) {
                        _this.isRequested = false;
                        _this.onActionFailure(e);
                        _this.hideSpinner();
                    });
                }
                else {
                    var dataManager = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_1__["DataManager"](eventArgs.data);
                    var listItems = (_this.getQuery(eventArgs.query)).executeLocal(dataManager);
                    var localDataArgs = { cancel: false, result: listItems };
                    _this.trigger('actionComplete', localDataArgs, function (localDataArgs) {
                        if (!localDataArgs.cancel) {
                            ulElement = _this.renderItems(localDataArgs.result, fields);
                            _this.onActionComplete(ulElement, localDataArgs.result);
                            if (_this.groupTemplate) {
                                _this.renderGroupTemplate(ulElement);
                            }
                            _this.bindChildItems(localDataArgs.result, ulElement, fields);
                        }
                    });
                }
            }
        });
    };
    DropDownBase.prototype.bindChildItems = function (listItems, ulElement, fields, e) {
        var _this = this;
        if (listItems.length >= 100 && this.getModuleName() === 'autocomplete') {
            setTimeout(function () {
                var childNode = _this.remainingItems(_this.sortedData, fields);
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["append"])(childNode, ulElement);
                _this.DropDownBaseupdateBlazorTemplates(true, false, false, false);
                _this.liCollections = _this.list.querySelectorAll('.' + dropDownBaseClasses.li);
                _this.updateListValues();
                _this.raiseDataBound(listItems, e);
            }, 0);
        }
        else {
            this.raiseDataBound(listItems, e);
        }
    };
    DropDownBase.prototype.updateListValues = function () {
        // Used this method in component side.
    };
    DropDownBase.prototype.findListElement = function (list, findNode, attribute, value) {
        var liElement = null;
        var listArr = [].slice.call(list.querySelectorAll(findNode));
        for (var index = 0; index < listArr.length; index++) {
            if (listArr[index].getAttribute(attribute) === (value + '')) {
                liElement = listArr[index];
                break;
            }
        }
        return liElement;
    };
    DropDownBase.prototype.raiseDataBound = function (listItems, e) {
        this.hideSpinner();
        var dataBoundEventArgs = {
            items: listItems,
            e: e
        };
        this.trigger('dataBound', dataBoundEventArgs);
    };
    DropDownBase.prototype.remainingItems = function (dataSource, fields) {
        var spliceData = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_1__["DataManager"](dataSource).executeLocal(new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_1__["Query"]().skip(100));
        if (this.itemTemplate) {
            var listElements = this.templateListItem(spliceData, fields);
            return [].slice.call(listElements.childNodes);
        }
        var type = this.typeOfData(spliceData).typeof;
        if (type === 'string' || type === 'number' || type === 'boolean') {
            return _syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_2__["ListBase"].createListItemFromArray(this.createElement, spliceData, true, this.listOption(spliceData, fields));
        }
        return _syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_2__["ListBase"].createListItemFromJson(this.createElement, spliceData, this.listOption(spliceData, fields), 1, true);
    };
    DropDownBase.prototype.emptyDataRequest = function (fields) {
        var listItems = [];
        this.onActionComplete(this.renderItems(listItems, fields), listItems);
        this.isRequested = false;
        this.hideSpinner();
    };
    DropDownBase.prototype.showSpinner = function () {
        // Used this method in component side.
    };
    DropDownBase.prototype.hideSpinner = function () {
        // Used this method in component side.
    };
    DropDownBase.prototype.onActionFailure = function (e) {
        this.liCollections = [];
        this.trigger('actionFailure', e);
        this.l10nUpdate(true);
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.list], dropDownBaseClasses.noData);
    };
    DropDownBase.prototype.onActionComplete = function (ulElement, list, e) {
        this.listData = list;
        this.list.innerHTML = '';
        this.fixedHeaderElement = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.fixedHeaderElement) ? this.fixedHeaderElement : null;
        this.list.appendChild(ulElement);
        this.liCollections = this.list.querySelectorAll('.' + dropDownBaseClasses.li);
        this.ulElement = this.list.querySelector('ul');
        this.postRender(this.list, list, this.bindEvent);
    };
    DropDownBase.prototype.postRender = function (listElement, list, bindEvent) {
        var focusItem = listElement.querySelector('.' + dropDownBaseClasses.li);
        var selectedItem = listElement.querySelector('.' + dropDownBaseClasses.selected);
        if (focusItem && !selectedItem) {
            focusItem.classList.add(dropDownBaseClasses.focus);
        }
        if (list.length <= 0) {
            this.l10nUpdate();
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([listElement], dropDownBaseClasses.noData);
        }
        else {
            listElement.classList.remove(dropDownBaseClasses.noData);
        }
    };
    /**
     * Get the query to do the data operation before list item generation.
     */
    DropDownBase.prototype.getQuery = function (query) {
        return query ? query : this.query ? this.query : new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_1__["Query"]();
    };
    /**
     * To render the template content for group header element.
     */
    DropDownBase.prototype.renderGroupTemplate = function (listEle) {
        if (this.fields.groupBy !== null && this.dataSource || this.element.querySelector('.' + dropDownBaseClasses.group)) {
            var dataSource = this.dataSource;
            var option = { groupTemplateID: this.groupTemplateId, isStringTemplate: this.isStringTemplate };
            var headerItems = listEle.querySelectorAll('.' + dropDownBaseClasses.group);
            var tempHeaders = _syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_2__["ListBase"].renderGroupTemplate(this.groupTemplate, dataSource, this.fields.properties, headerItems, option);
            this.DropDownBaseupdateBlazorTemplates(false, true, false, false);
        }
    };
    /**
     * To create the ul li list items
     */
    DropDownBase.prototype.createListItems = function (dataSource, fields) {
        if (dataSource && fields.groupBy || this.element.querySelector('optgroup')) {
            if (fields.groupBy) {
                if (this.sortOrder !== 'None') {
                    dataSource = this.getSortedDataSource(dataSource);
                }
                dataSource = _syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_2__["ListBase"].groupDataSource(dataSource, fields.properties, this.sortOrder);
            }
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.list], dropDownBaseClasses.grouping);
        }
        else {
            dataSource = this.getSortedDataSource(dataSource);
        }
        var options = this.listOption(dataSource, fields);
        var spliceData = (dataSource.length > 100) ?
            new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_1__["DataManager"](dataSource).executeLocal(new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_1__["Query"]().take(100))
            : dataSource;
        this.sortedData = dataSource;
        return _syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_2__["ListBase"].createList(this.createElement, (this.getModuleName() === 'autocomplete') ? spliceData : dataSource, options, true);
    };
    ;
    DropDownBase.prototype.listOption = function (dataSource, fields) {
        var iconCss = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(fields.iconCss) ? false : true;
        var fieldValues = !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(fields.properties) ?
            fields.properties : fields;
        var options = (fields.text !== null || fields.value !== null) ? {
            fields: fieldValues,
            showIcon: iconCss, ariaAttributes: { groupItemRole: 'presentation' }
        } : { fields: { value: 'text' } };
        return Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, options, fields, true);
    };
    ;
    DropDownBase.prototype.setFloatingHeader = function (e) {
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.fixedHeaderElement)) {
            this.fixedHeaderElement = this.createElement('div', { className: dropDownBaseClasses.fixedHead });
            if (!this.list.querySelector('li').classList.contains(dropDownBaseClasses.group)) {
                this.fixedHeaderElement.style.display = 'none';
            }
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["prepend"])([this.fixedHeaderElement], this.list);
            this.setFixedHeader();
        }
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.fixedHeaderElement) && this.fixedHeaderElement.style.zIndex === '0') {
            this.setFixedHeader();
        }
        this.scrollStop(e);
    };
    DropDownBase.prototype.scrollStop = function (e) {
        var target = e.target;
        var liHeight = parseInt(getComputedStyle(this.liCollections[0], null).getPropertyValue('height'), 10);
        var topIndex = Math.round(target.scrollTop / liHeight);
        var liCollections = this.list.querySelectorAll('li');
        for (var i = topIndex; i > -1; i--) {
            if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(liCollections[i]) && liCollections[i].classList.contains(dropDownBaseClasses.group)) {
                var currentLi = liCollections[i];
                this.fixedHeaderElement.innerHTML = currentLi.innerHTML;
                this.fixedHeaderElement.style.top = e.target.scrollTop + 'px';
                this.fixedHeaderElement.style.display = 'block';
                break;
            }
            else {
                this.fixedHeaderElement.style.display = 'none';
                this.fixedHeaderElement.style.top = 'none';
            }
        }
    };
    /**
     * To render the list items
     */
    DropDownBase.prototype.renderItems = function (listData, fields) {
        var ulElement;
        if (this.itemTemplate && listData) {
            var dataSource = listData;
            if (dataSource && fields.groupBy) {
                if (this.sortOrder !== 'None') {
                    dataSource = this.getSortedDataSource(dataSource);
                }
                dataSource = _syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_2__["ListBase"].groupDataSource(dataSource, fields.properties, this.sortOrder);
            }
            else {
                dataSource = this.getSortedDataSource(dataSource);
            }
            this.sortedData = dataSource;
            var spliceData = (dataSource.length > 100) ?
                new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_1__["DataManager"](dataSource).executeLocal(new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_1__["Query"]().take(100))
                : dataSource;
            ulElement = this.templateListItem((this.getModuleName() === 'autocomplete') ? spliceData : dataSource, fields);
            this.DropDownBaseupdateBlazorTemplates(true, false, false, false);
        }
        else {
            ulElement = this.createListItems(listData, fields);
        }
        return ulElement;
    };
    ;
    DropDownBase.prototype.templateListItem = function (dataSource, fields) {
        this.DropDownBaseresetBlazorTemplates(true, false, false, false);
        var option = this.listOption(dataSource, fields);
        option.templateID = this.itemTemplateId;
        option.isStringTemplate = this.isStringTemplate;
        return _syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_2__["ListBase"].renderContentTemplate(this.createElement, this.itemTemplate, dataSource, fields.properties, option);
    };
    DropDownBase.prototype.typeOfData = function (items) {
        var item = { typeof: null, item: null };
        for (var i = 0; (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(items) && i < items.length); i++) {
            if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(items[i])) {
                return item = { typeof: typeof items[i], item: items[i] };
            }
        }
        return item;
    };
    DropDownBase.prototype.setFixedHeader = function () {
        this.list.parentElement.style.display = 'block';
        var liWidth = this.liCollections[0].offsetWidth;
        this.fixedHeaderElement.style.width = liWidth.toString() + 'px';
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["setStyleAttribute"])(this.fixedHeaderElement, { zIndex: 10 });
        var firstLi = this.ulElement.querySelector('.' + dropDownBaseClasses.group);
        this.fixedHeaderElement.innerHTML = firstLi.innerHTML;
    };
    DropDownBase.prototype.getSortedDataSource = function (dataSource) {
        if (dataSource && this.sortOrder !== 'None') {
            var textField = this.fields.text ? this.fields.text : 'text';
            dataSource = _syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_2__["ListBase"].getDataSource(dataSource, _syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_2__["ListBase"].addSorting(this.sortOrder, textField));
        }
        return dataSource;
    };
    /**
     * Return the index of item which matched with given value in data source
     */
    DropDownBase.prototype.getIndexByValue = function (value) {
        var index;
        var listItems = this.getItems();
        for (var i = 0; i < listItems.length; i++) {
            if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(value) && listItems[i].getAttribute('data-value') === value.toString()) {
                index = i;
                break;
            }
        }
        return index;
    };
    ;
    /**
     * To dispatch the event manually
     */
    DropDownBase.prototype.dispatchEvent = function (element, type) {
        var evt = document.createEvent('HTMLEvents');
        evt.initEvent(type, false, true);
        element.dispatchEvent(evt);
    };
    /**
     * To set the current fields
     */
    DropDownBase.prototype.setFields = function () {
        if (this.fields.value && !this.fields.text) {
            this.fields.text = this.fields.value;
        }
        else if (!this.fields.value && this.fields.text) {
            this.fields.value = this.fields.text;
        }
        else if (!this.fields.value && !this.fields.text) {
            this.fields.value = this.fields.text = 'text';
        }
    };
    /**
     * reset the items list.
     */
    DropDownBase.prototype.resetList = function (dataSource, fields, query) {
        if (this.list) {
            if ((this.element.tagName === 'SELECT' && this.element.options.length > 0)
                || (this.element.tagName === 'UL' && this.element.childNodes.length > 0)) {
                var data = dataSource instanceof Array ? (dataSource.length > 0)
                    : !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(dataSource);
                if (!data && this.selectData && this.selectData.length > 0) {
                    dataSource = this.selectData;
                }
            }
            this.setListData(dataSource, fields, query);
        }
    };
    DropDownBase.prototype.updateSelectElementData = function (isFiltering) {
        if (isFiltering && Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.selectData) && this.listData.length > 0) {
            this.selectData = this.listData;
        }
    };
    DropDownBase.prototype.updateSelection = function () {
        // This is for after added the item, need to update the selected index values.
    };
    DropDownBase.prototype.renderList = function () {
        // This is for render the list items.
        this.render();
    };
    DropDownBase.prototype.updateDataSource = function (props) {
        this.resetList(this.dataSource);
    };
    DropDownBase.prototype.setUpdateInitial = function (props, newProp) {
        this.isDataFetched = false;
        var updateData = {};
        for (var j = 0; props.length > j; j++) {
            if (newProp[props[j]] && props[j] === 'fields') {
                this.setFields();
            }
            else if (newProp[props[j]]) {
                updateData[props[j]] = newProp[props[j]];
            }
        }
        if (Object.keys(updateData).length > 0) {
            if (Object.keys(updateData).indexOf('dataSource') === -1) {
                updateData.dataSource = this.dataSource;
            }
            this.updateDataSource(updateData);
        }
    };
    /**
     * When property value changes happened, then onPropertyChanged method will execute the respective changes in this component.
     * @private
     */
    DropDownBase.prototype.onPropertyChanged = function (newProp, oldProp) {
        if (this.getModuleName() === 'dropdownbase') {
            this.setUpdateInitial(['fields', 'query', 'dataSource'], newProp);
        }
        this.setUpdateInitial(['sortOrder', 'itemTemplate'], newProp);
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'query':
                case 'sortOrder':
                case 'dataSource':
                case 'itemTemplate':
                    break;
                case 'enableRtl':
                    this.setEnableRtl();
                    break;
                case 'enabled':
                    this.setEnabled();
                    break;
                case 'groupTemplate':
                    this.renderGroupTemplate(this.list);
                    if (this.ulElement && this.fixedHeaderElement) {
                        var firstLi = this.ulElement.querySelector('.' + dropDownBaseClasses.group);
                        this.fixedHeaderElement.innerHTML = firstLi.innerHTML;
                    }
                    break;
                case 'locale':
                    if (this.list && (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.liCollections) && this.liCollections.length === 0)) {
                        this.l10nUpdate();
                    }
                    break;
                case 'zIndex':
                    this.setProperties({ zIndex: newProp.zIndex }, true);
                    this.setZIndex();
                    break;
            }
        }
    };
    ;
    /**
     * Build and render the component
     * @private
     */
    DropDownBase.prototype.render = function (isEmptyData) {
        this.list = this.createElement('div', { className: dropDownBaseClasses.content, attrs: { 'tabindex': '0' } });
        this.list.classList.add(dropDownBaseClasses.root);
        this.setFields();
        var rippleModel = { duration: 300, selector: '.' + dropDownBaseClasses.li };
        this.rippleFun = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["rippleEffect"])(this.list, rippleModel);
        var group = this.element.querySelector('select>optgroup');
        if ((this.fields.groupBy || !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(group)) && !this.isGroupChecking) {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.list, 'scroll', this.setFloatingHeader, this);
        }
        if (this.getModuleName() === 'dropdownbase') {
            if (this.element.getAttribute('tabindex')) {
                this.list.setAttribute('tabindex', this.element.getAttribute('tabindex'));
            }
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([this.element], dropDownBaseClasses.root);
            this.element.style.display = 'none';
            var wrapperElement = this.createElement('div');
            this.element.parentElement.insertBefore(wrapperElement, this.element);
            wrapperElement.appendChild(this.element);
            wrapperElement.appendChild(this.list);
        }
        this.setEnableRtl();
        this.setEnabled();
        if (!isEmptyData) {
            this.initialize();
        }
    };
    ;
    /**
     * Return the module name of this component.
     * @private
     */
    DropDownBase.prototype.getModuleName = function () {
        return 'dropdownbase';
    };
    ;
    /**
     * Gets all the list items bound on this component.
     * @returns Element[].
     */
    DropDownBase.prototype.getItems = function () {
        return this.ulElement.querySelectorAll('.' + dropDownBaseClasses.li);
    };
    ;
    /**
     * Adds a new item to the popup list. By default, new item appends to the list as the last item,
     * but you can insert based on the index parameter.
     * @param  { Object[] } items - Specifies an array of JSON data or a JSON data.
     * @param { number } itemIndex - Specifies the index to place the newly added item in the popup list.
     * @return {void}.
     */
    DropDownBase.prototype.addItem = function (items, itemIndex) {
        if (!this.list || this.list.textContent === this.noRecordsTemplate) {
            this.renderList();
        }
        this.DropDownBaseresetBlazorTemplates(true, false, false, false);
        var itemsCount = this.getItems().length;
        var selectedItemValue = this.list.querySelector('.' + dropDownBaseClasses.selected);
        items = (items instanceof Array ? items : [items]);
        var index;
        index = (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(itemIndex) || itemIndex < 0 || itemIndex > itemsCount - 1) ? itemsCount : itemIndex;
        var fields = this.fields;
        if (items && fields.groupBy) {
            items = _syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_2__["ListBase"].groupDataSource(items, fields.properties);
        }
        var liCollections = [];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var isHeader = item.isHeader;
            var li = this.createElement('li', { className: isHeader ? dropDownBaseClasses.group : dropDownBaseClasses.li, id: 'option-add-' + i });
            var itemText = item instanceof Object ? Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getValue"])(fields.text, item) : item;
            if (isHeader) {
                li.innerText = itemText;
            }
            if (this.itemTemplate && !isHeader) {
                var compiledString = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["compile"])(this.itemTemplate);
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["append"])(compiledString(item, null, null, this.itemTemplateId, this.isStringTemplate), li);
                this.DropDownBaseupdateBlazorTemplates(true, false, false, false);
            }
            else if (!isHeader) {
                li.appendChild(document.createTextNode(itemText));
            }
            li.setAttribute('data-value', item instanceof Object ? Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getValue"])(fields.value, item) : item);
            li.setAttribute('role', 'option');
            this.notify('addItem', { module: 'CheckBoxSelection', item: li });
            liCollections.push(li);
            this.listData.push(item);
            this.updateActionCompleteData(li, item);
            //Listbox event
            this.trigger('beforeItemRender', { element: li, item: item });
        }
        if (itemsCount === 0 && Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.list.querySelector('ul'))) {
            this.list.innerHTML = '';
            this.list.classList.remove(dropDownBaseClasses.noData);
            this.list.appendChild(this.ulElement);
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["append"])(liCollections, this.ulElement);
        }
        else {
            for (var i = 0; i < items.length; i++) {
                if (this.liCollections[index]) {
                    this.liCollections[index].parentNode.insertBefore(liCollections[i], this.liCollections[index]);
                }
                else {
                    this.ulElement.appendChild(liCollections[i]);
                }
                var tempLi = [].slice.call(this.liCollections);
                tempLi.splice(index, 0, liCollections[i]);
                this.liCollections = tempLi;
                index += 1;
            }
        }
        if (selectedItemValue || itemIndex === 0) {
            this.updateSelection();
        }
    };
    DropDownBase.prototype.validationAttribute = function (target, hidden) {
        var name = target.getAttribute('name') ? target.getAttribute('name') : target.getAttribute('id');
        hidden.setAttribute('name', name);
        target.removeAttribute('name');
        var attributes = ['required', 'aria-required', 'form'];
        for (var i = 0; i < attributes.length; i++) {
            if (!target.getAttribute(attributes[i])) {
                continue;
            }
            var attr = target.getAttribute(attributes[i]);
            hidden.setAttribute(attributes[i], attr);
            target.removeAttribute(attributes[i]);
        }
    };
    DropDownBase.prototype.setZIndex = function () {
        // this is for component wise
    };
    DropDownBase.prototype.updateActionCompleteData = function (li, item) {
        // this is for ComboBox custom value
    };
    /**
     * Gets the data Object that matches the given value.
     * @param { string | number } value - Specifies the value of the list item.
     * @returns Object.
     * @blazorType object
     */
    DropDownBase.prototype.getDataByValue = function (value) {
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.listData)) {
            var type = this.typeOfData(this.listData).typeof;
            if (type === 'string' || type === 'number' || type === 'boolean') {
                for (var _i = 0, _a = this.listData; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(item) && item === value) {
                        return item;
                    }
                }
            }
            else {
                for (var _b = 0, _c = this.listData; _b < _c.length; _b++) {
                    var item = _c[_b];
                    if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(item) && Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getValue"])((this.fields.value ? this.fields.value : 'value'), item) === value) {
                        return item;
                    }
                }
            }
        }
        return null;
    };
    /**
     * Removes the component from the DOM and detaches all its related event handlers. It also removes the attributes and classes.
     * @method destroy
     * @return {void}.
     */
    DropDownBase.prototype.destroy = function () {
        if (document.body.contains(this.list)) {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.list, 'scroll', this.setFloatingHeader);
            if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.rippleFun)) {
                this.rippleFun();
            }
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.list);
        }
        _super.prototype.destroy.call(this);
    };
    ;
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Complex"])({ text: null, value: null, iconCss: null, groupBy: null }, FieldSettings)
    ], DropDownBase.prototype, "fields", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(false)
    ], DropDownBase.prototype, "enablePersistence", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(null)
    ], DropDownBase.prototype, "itemTemplate", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(null)
    ], DropDownBase.prototype, "groupTemplate", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('No Records Found')
    ], DropDownBase.prototype, "noRecordsTemplate", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('The Request Failed')
    ], DropDownBase.prototype, "actionFailureTemplate", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('None')
    ], DropDownBase.prototype, "sortOrder", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(true)
    ], DropDownBase.prototype, "enabled", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])([])
    ], DropDownBase.prototype, "dataSource", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(null)
    ], DropDownBase.prototype, "query", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('StartsWith')
    ], DropDownBase.prototype, "filterType", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(true)
    ], DropDownBase.prototype, "ignoreCase", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(1000)
    ], DropDownBase.prototype, "zIndex", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(false)
    ], DropDownBase.prototype, "ignoreAccent", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])()
    ], DropDownBase.prototype, "locale", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], DropDownBase.prototype, "actionBegin", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], DropDownBase.prototype, "actionComplete", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], DropDownBase.prototype, "actionFailure", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], DropDownBase.prototype, "select", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], DropDownBase.prototype, "dataBound", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], DropDownBase.prototype, "created", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], DropDownBase.prototype, "destroyed", void 0);
    DropDownBase = __decorate([
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["NotifyPropertyChanges"]
    ], DropDownBase);
    return DropDownBase;
}(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-dropdowns/src/drop-down-base/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-dropdowns/src/drop-down-base/index.js ***!
  \****************************************************************************/
/*! exports provided: FieldSettings, dropDownBaseClasses, DropDownBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _drop_down_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drop-down-base */ "./node_modules/@syncfusion/ej2-dropdowns/src/drop-down-base/drop-down-base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldSettings", function() { return _drop_down_base__WEBPACK_IMPORTED_MODULE_0__["FieldSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dropDownBaseClasses", function() { return _drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropDownBase", function() { return _drop_down_base__WEBPACK_IMPORTED_MODULE_0__["DropDownBase"]; });

/**
 * export all modules from current location
 */



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-dropdowns/src/drop-down-list/drop-down-list.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-dropdowns/src/drop-down-list/drop-down-list.js ***!
  \*************************************************************************************/
/*! exports provided: dropDownListClasses, DropDownList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropDownListClasses", function() { return dropDownListClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownList", function() { return DropDownList; });
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-base */ "./node_modules/@syncfusion/ej2-base/index.js");
/* harmony import */ var _syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-popups */ "./node_modules/@syncfusion/ej2-popups/index.js");
/* harmony import */ var _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-inputs */ "./node_modules/@syncfusion/ej2-inputs/index.js");
/* harmony import */ var _common_incremental_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/incremental-search */ "./node_modules/@syncfusion/ej2-dropdowns/src/common/incremental-search.js");
/* harmony import */ var _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../drop-down-base/drop-down-base */ "./node_modules/@syncfusion/ej2-dropdowns/src/drop-down-base/drop-down-base.js");
/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-data */ "./node_modules/@syncfusion/ej2-data/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
/// <reference path='../drop-down-base/drop-down-base-model.d.ts'/>








/* tslint:disable */

// don't use space in classnames 
var dropDownListClasses = {
    root: 'e-dropdownlist',
    hover: _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_4__["dropDownBaseClasses"].hover,
    selected: _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_4__["dropDownBaseClasses"].selected,
    rtl: _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_4__["dropDownBaseClasses"].rtl,
    li: _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_4__["dropDownBaseClasses"].li,
    disable: _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_4__["dropDownBaseClasses"].disabled,
    base: _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_4__["dropDownBaseClasses"].root,
    focus: _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_4__["dropDownBaseClasses"].focus,
    input: 'e-input-group',
    inputFocus: 'e-input-focus',
    icon: 'e-input-group-icon e-ddl-icon',
    iconAnimation: 'e-icon-anim',
    value: 'e-input-value',
    device: 'e-ddl-device',
    backIcon: 'e-input-group-icon e-back-icon e-icons',
    filterBarClearIcon: 'e-input-group-icon e-clear-icon e-icons',
    filterInput: 'e-input-filter',
    filterParent: 'e-filter-parent',
    mobileFilter: 'e-ddl-device-filter',
    footer: 'e-ddl-footer',
    header: 'e-ddl-header',
    clearIcon: 'e-clear-icon',
    clearIconHide: 'e-clear-icon-hide',
    popupFullScreen: 'e-popup-full-page',
    disableIcon: 'e-ddl-disable-icon',
    hiddenElement: 'e-ddl-hidden'
};
var inputObject = {
    container: null,
    buttons: []
};
/**
 * The DropDownList component contains a list of predefined values from which you can
 * choose a single value.
 * ```html
 * <input type="text" tabindex="1" id="list"> </input>
 * ```
 * ```typescript
 *   let dropDownListObj:DropDownList = new DropDownList();
 *   dropDownListObj.appendTo("#list");
 * ```
 */
var DropDownList = /** @class */ (function (_super) {
    __extends(DropDownList, _super);
    /**
     * * Constructor for creating the DropDownList component.
     */
    function DropDownList(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.previousValue = null;
        return _this;
    }
    ;
    /**
     * Initialize the event handler.
     * @private
     */
    DropDownList.prototype.preRender = function () {
        this.element.style.opacity = '0';
        this.initializeData();
        _super.prototype.preRender.call(this);
        this.activeIndex = this.index;
        this.queryString = '';
    };
    DropDownList.prototype.initializeData = function () {
        this.isPopupOpen = false;
        this.isDocumentClick = false;
        this.isInteracted = false;
        this.isFilterFocus = false;
        this.beforePopupOpen = false;
        this.initial = true;
        this.initRemoteRender = false;
        this.isNotSearchList = false;
        this.isTyped = false;
        this.isSelected = false;
        this.preventFocus = false;
        this.preventAutoFill = false;
        this.isValidKey = false;
        this.typedString = '';
        this.isEscapeKey = false;
        this.isPreventBlur = false;
        this.isTabKey = false;
        this.actionCompleteData = { isUpdated: false };
        this.prevSelectPoints = {};
        this.isSelectCustom = false;
        this.isDropDownClick = false;
        this.preventAltUp = false;
        this.isCustomFilter = false;
        this.isSecondClick = false;
        this.keyConfigure = {
            tab: 'tab',
            enter: '13',
            escape: '27',
            end: '35',
            home: '36',
            down: '40',
            up: '38',
            pageUp: '33',
            pageDown: '34',
            open: 'alt+40',
            close: 'shift+tab',
            hide: 'alt+38',
            space: '32'
        };
    };
    DropDownList.prototype.setZIndex = function () {
        if (this.popupObj) {
            this.popupObj.setProperties({ 'zIndex': this.zIndex });
        }
    };
    DropDownList.prototype.renderList = function (isEmptyData) {
        _super.prototype.render.call(this, isEmptyData);
        this.wireListEvents();
    };
    DropDownList.prototype.floatLabelChange = function () {
        if (this.getModuleName() === 'dropdownlist' && this.floatLabelType === 'Auto') {
            var floatElement = this.inputWrapper.container.querySelector('.e-float-text');
            if (this.inputElement.value !== '' || this.isInteracted) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["classList"])(floatElement, ['e-label-top'], ['e-label-bottom']);
            }
            else {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["classList"])(floatElement, ['e-label-bottom'], ['e-label-top']);
            }
        }
    };
    DropDownList.prototype.resetHandler = function (e) {
        e.preventDefault();
        this.clear(e);
    };
    DropDownList.prototype.resetFocusElement = function () {
        this.removeHover();
        this.removeSelection();
        this.removeFocus();
        this.list.scrollTop = 0;
        if (this.getModuleName() !== 'autocomplete') {
            var li = this.ulElement.querySelector('.' + dropDownListClasses.li);
            if (li) {
                li.classList.add(dropDownListClasses.focus);
            }
        }
    };
    DropDownList.prototype.clear = function (e, properties) {
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(properties) || (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(properties) &&
            (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(properties.dataSource) ||
                (!(properties.dataSource instanceof _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_5__["DataManager"]) && properties.dataSource.length === 0)))) {
            this.isActive = true;
            this.resetSelection(properties);
        }
        var dataItem = this.getItemData();
        if (this.previousValue === dataItem.value) {
            return;
        }
        this.onChangeEvent(e);
    };
    DropDownList.prototype.resetSelection = function (properties) {
        if (this.list) {
            if ((!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(properties) &&
                (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(properties.dataSource) ||
                    (!(properties.dataSource instanceof _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_5__["DataManager"]) && properties.dataSource.length === 0)))) {
                this.selectedLI = null;
                this.actionCompleteData.isUpdated = false;
                this.actionCompleteData.ulElement = null;
                this.actionCompleteData.list = null;
                this.resetList(properties.dataSource);
            }
            else {
                if (this.allowFiltering && this.getModuleName() !== 'autocomplete'
                    && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.actionCompleteData.ulElement) && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.actionCompleteData.list)) {
                    this.onActionComplete(this.actionCompleteData.ulElement.cloneNode(true), this.actionCompleteData.list);
                }
                this.resetFocusElement();
            }
        }
        this.hiddenElement.innerHTML = '';
        this.inputElement.value = '';
        this.value = null;
        this.itemData = null;
        this.text = null;
        this.index = null;
        this.activeIndex = null;
        this.item = null;
        this.queryString = '';
        if (this.valueTempElement) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.valueTempElement);
            this.inputElement.style.display = 'block';
            this.valueTempElement = null;
        }
        this.setSelection(null, null);
        this.isSelectCustom = false;
        this.updateIconState();
        this.cloneElements();
    };
    DropDownList.prototype.setHTMLAttributes = function () {
        if (Object.keys(this.htmlAttributes).length) {
            for (var _i = 0, _a = Object.keys(this.htmlAttributes); _i < _a.length; _i++) {
                var htmlAttr = _a[_i];
                if (htmlAttr === 'class') {
                    this.inputWrapper.container.classList.add(this.htmlAttributes[htmlAttr]);
                }
                else if (htmlAttr === 'disabled' && this.htmlAttributes[htmlAttr] === 'disabled') {
                    this.enabled = false;
                    this.setEnable();
                }
                else if (htmlAttr === 'readonly' && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.htmlAttributes[htmlAttr])) {
                    this.readonly = true;
                    this.dataBind();
                }
                else if (htmlAttr === 'style') {
                    this.inputWrapper.container.setAttribute('style', this.htmlAttributes[htmlAttr]);
                }
                else {
                    var defaultAttr = ['title', 'id', 'placeholder', 'aria-placeholder',
                        'role', 'autocorrect', 'autocomplete', 'autocapitalize', 'spellcheck', 'minlength', 'maxlength'];
                    var validateAttr = ['name', 'required'];
                    if (htmlAttr.indexOf('data') === 0 || validateAttr.indexOf(htmlAttr) > -1) {
                        this.hiddenElement.setAttribute(htmlAttr, this.htmlAttributes[htmlAttr]);
                    }
                    else if (defaultAttr.indexOf(htmlAttr) > -1) {
                        htmlAttr === 'placeholder' ? _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_2__["Input"].setPlaceholder(this.htmlAttributes[htmlAttr], this.inputElement) :
                            this.inputElement.setAttribute(htmlAttr, this.htmlAttributes[htmlAttr]);
                    }
                    else {
                        this.inputWrapper.container.setAttribute(htmlAttr, this.htmlAttributes[htmlAttr]);
                    }
                }
            }
        }
        if (this.getModuleName() === 'autocomplete' || this.getModuleName() === 'combobox') {
            this.inputWrapper.container.removeAttribute('tabindex');
        }
    };
    DropDownList.prototype.getAriaAttributes = function () {
        return {
            'aria-disabled': 'false',
            'aria-owns': this.element.id + '_options',
            'role': 'listbox',
            'aria-haspopup': 'true',
            'aria-expanded': 'false',
            'aria-activedescendant': 'null',
            'aria-labelledby': this.hiddenElement.id
        };
    };
    DropDownList.prototype.setEnableRtl = function () {
        _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_2__["Input"].setEnableRtl(this.enableRtl, [this.inputElement.parentElement]);
        if (this.popupObj) {
            this.popupObj.enableRtl = this.enableRtl;
            this.popupObj.dataBind();
        }
    };
    DropDownList.prototype.setEnable = function () {
        _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_2__["Input"].setEnabled(this.enabled, this.inputElement);
        if (this.enabled) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([this.inputWrapper.container], dropDownListClasses.disable);
            this.inputElement.setAttribute('aria-disabled', 'false');
            this.targetElement().setAttribute('tabindex', this.tabIndex);
        }
        else {
            this.hidePopup();
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.inputWrapper.container], dropDownListClasses.disable);
            this.inputElement.setAttribute('aria-disabled', 'true');
            this.targetElement().tabIndex = -1;
        }
    };
    /**
     * Get the properties to be maintained in the persisted state.
     */
    DropDownList.prototype.getPersistData = function () {
        return this.addOnPersist(['value']);
    };
    ;
    DropDownList.prototype.getLocaleName = function () {
        return 'drop-down-list';
    };
    ;
    DropDownList.prototype.preventTabIndex = function (element) {
        if (this.getModuleName() === 'dropdownlist') {
            element.tabIndex = -1;
        }
    };
    DropDownList.prototype.targetElement = function () {
        return this.inputWrapper.container;
    };
    DropDownList.prototype.getNgDirective = function () {
        return 'EJS-DROPDOWNLIST';
    };
    DropDownList.prototype.getElementByText = function (text) {
        return this.getElementByValue(this.getValueByText(text));
    };
    DropDownList.prototype.getElementByValue = function (value) {
        var item;
        var listItems = this.getItems();
        for (var _i = 0, listItems_1 = listItems; _i < listItems_1.length; _i++) {
            var liItem = listItems_1[_i];
            if (this.getFormattedValue(liItem.getAttribute('data-value')) === value) {
                item = liItem;
                break;
            }
        }
        return item;
    };
    ;
    DropDownList.prototype.initValue = function () {
        this.renderList();
        if (this.dataSource instanceof _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_5__["DataManager"]) {
            this.initRemoteRender = true;
        }
        else {
            this.updateValues();
        }
    };
    DropDownList.prototype.updateValues = function () {
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.value)) {
            this.setSelection(this.getElementByValue(this.value), null);
        }
        else if (this.text && Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.value)) {
            var element = this.getElementByText(this.text);
            if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(element)) {
                this.setProperties({ text: null });
                return;
            }
            else {
                this.setSelection(element, null);
            }
        }
        else {
            this.setSelection(this.liCollections[this.activeIndex], null);
        }
        this.setHiddenValue();
        _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_2__["Input"].setValue(this.text, this.inputElement, this.floatLabelType, this.showClearButton);
    };
    DropDownList.prototype.onBlur = function (e) {
        if (!this.enabled) {
            return;
        }
        var target = e.relatedTarget;
        var currentTarget = e.target;
        var isPreventBlur = this.isPreventBlur;
        this.isPreventBlur = false;
        //IE 11 - issue
        if (isPreventBlur && !this.isDocumentClick && this.isPopupOpen && (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(currentTarget) ||
            !this.isFilterLayout() && Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(target))) {
            if (this.getModuleName() === 'dropdownlist' && this.allowFiltering && this.isPopupOpen) {
                this.filterInput.focus();
            }
            else {
                this.targetElement().focus();
            }
            return;
        }
        if (this.isDocumentClick || (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.popupObj)
            && document.body.contains(this.popupObj.element) &&
            this.popupObj.element.classList.contains(dropDownListClasses.mobileFilter))) {
            if (!this.beforePopupOpen) {
                this.isDocumentClick = false;
            }
            return;
        }
        if (((this.getModuleName() === 'dropdownlist' && !this.isFilterFocus && target !== this.inputElement)
            && (document.activeElement !== target || (document.activeElement === target &&
                currentTarget.classList.contains(dropDownListClasses.inputFocus)))) ||
            (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(target) && this.getModuleName() === 'dropdownlist' && this.allowFiltering &&
                currentTarget !== this.inputWrapper.container) || this.getModuleName() !== 'dropdownlist' &&
            !this.inputWrapper.container.contains(target) || this.isTabKey) {
            this.isDocumentClick = this.isPopupOpen ? true : false;
            this.focusOutAction();
            this.isTabKey = false;
        }
        if (this.isRequested && !this.isPopupOpen && !this.isPreventBlur) {
            this.isActive = false;
            this.beforePopupOpen = false;
        }
    };
    DropDownList.prototype.focusOutAction = function () {
        this.isInteracted = false;
        this.focusOut();
        this.onFocusOut();
    };
    DropDownList.prototype.onFocusOut = function () {
        if (!this.enabled) {
            return;
        }
        if (this.isSelected) {
            this.isSelectCustom = false;
            this.onChangeEvent(null);
        }
        this.floatLabelChange();
        this.dispatchEvent(this.hiddenElement, 'change');
        if (this.getModuleName() === 'dropdownlist' && this.element.tagName !== 'INPUT') {
            this.dispatchEvent(this.inputElement, 'blur');
        }
        if (this.inputWrapper.clearButton) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.inputWrapper.clearButton], dropDownListClasses.clearIconHide);
        }
        this.trigger('blur');
    };
    DropDownList.prototype.onFocus = function (e) {
        if (!this.isInteracted) {
            this.isInteracted = true;
            var args = { isInteracted: e ? true : false, event: e };
            this.trigger('focus', args);
        }
        this.updateIconState();
    };
    DropDownList.prototype.resetValueHandler = function (e) {
        var formElement = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["closest"])(this.inputElement, 'form');
        if (formElement && e.target === formElement) {
            var val = (this.element.tagName === this.getNgDirective()) ? null : this.inputElement.getAttribute('value');
            this.text = val;
        }
    };
    DropDownList.prototype.wireEvent = function () {
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.inputWrapper.container, 'mousedown', this.dropDownClick, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.inputWrapper.container, 'focus', this.focusIn, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.inputWrapper.container, 'keypress', this.onSearch, this);
        this.bindCommonEvent();
    };
    DropDownList.prototype.bindCommonEvent = function () {
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.targetElement(), 'blur', this.onBlur, this);
        var formElement = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["closest"])(this.inputElement, 'form');
        if (formElement) {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(formElement, 'reset', this.resetValueHandler, this);
        }
        if (!_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice) {
            this.keyboardModule = new _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["KeyboardEvents"](this.targetElement(), {
                keyAction: this.keyActionHandler.bind(this), keyConfigs: this.keyConfigure, eventName: 'keydown'
            });
        }
        this.bindClearEvent();
    };
    DropDownList.prototype.bindClearEvent = function () {
        if (this.showClearButton) {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.inputWrapper.clearButton, 'mousedown', this.resetHandler, this);
        }
    };
    DropDownList.prototype.unBindCommonEvent = function () {
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.targetElement(), 'blur', this.onBlur);
        var formElement = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["closest"])(this.inputElement, 'form');
        if (formElement) {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(formElement, 'reset', this.resetValueHandler);
        }
        if (!_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice) {
            this.keyboardModule.destroy();
        }
        if (this.showClearButton) {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.inputWrapper.clearButton, 'mousedown', this.resetHandler);
        }
    };
    DropDownList.prototype.updateIconState = function () {
        if (this.showClearButton) {
            if (this.inputElement.value !== '' && !this.readonly) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([this.inputWrapper.clearButton], dropDownListClasses.clearIconHide);
            }
            else {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.inputWrapper.clearButton], dropDownListClasses.clearIconHide);
            }
        }
    };
    /**
     * Event binding for list
     */
    DropDownList.prototype.wireListEvents = function () {
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.list, 'click', this.onMouseClick, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.list, 'mouseover', this.onMouseOver, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.list, 'mouseout', this.onMouseLeave, this);
    };
    ;
    DropDownList.prototype.onSearch = function (e) {
        if (e.charCode !== 32 && e.charCode !== 13) {
            if (this.list === undefined) {
                this.renderList();
            }
            this.searchKeyEvent = e;
            if (!this.isRequested && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.list.querySelector('li')) && this.enabled) {
                this.incrementalSearch(e);
            }
        }
    };
    DropDownList.prototype.onMouseClick = function (e) {
        var target = e.target;
        var classList = target.classList;
        var li = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["closest"])(target, '.' + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_4__["dropDownBaseClasses"].li);
        if (!this.isValidLI(li)) {
            return;
        }
        this.setSelection(li, e);
        if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice && this.isFilterLayout()) {
            history.back();
        }
        else {
            var delay = 100;
            this.closePopup(delay);
        }
    };
    DropDownList.prototype.onMouseOver = function (e) {
        var currentLi = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["closest"])(e.target, '.' + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_4__["dropDownBaseClasses"].li);
        this.setHover(currentLi);
    };
    ;
    DropDownList.prototype.setHover = function (li) {
        if (this.enabled && this.isValidLI(li) && !li.classList.contains(_drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_4__["dropDownBaseClasses"].hover)) {
            this.removeHover();
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([li], _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_4__["dropDownBaseClasses"].hover);
        }
    };
    ;
    DropDownList.prototype.onMouseLeave = function (e) {
        this.removeHover();
    };
    ;
    DropDownList.prototype.removeHover = function () {
        var hoveredItem = this.list.querySelectorAll('.' + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_4__["dropDownBaseClasses"].hover);
        if (hoveredItem && hoveredItem.length) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(hoveredItem, _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_4__["dropDownBaseClasses"].hover);
        }
    };
    ;
    DropDownList.prototype.isValidLI = function (li) {
        return (li && li.hasAttribute('role') && li.getAttribute('role') === 'option');
    };
    ;
    DropDownList.prototype.incrementalSearch = function (e) {
        if (this.liCollections.length > 0) {
            var li = Object(_common_incremental_search__WEBPACK_IMPORTED_MODULE_3__["incrementalSearch"])(e.charCode, this.liCollections, this.activeIndex, true);
            if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(li)) {
                this.setSelection(li, e);
                this.setScrollPosition();
            }
        }
    };
    ;
    /**
     * Hides the spinner loader.
     * @returns void.
     */
    DropDownList.prototype.hideSpinner = function () {
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.spinnerElement)) {
            Object(_syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_1__["hideSpinner"])(this.spinnerElement);
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([this.spinnerElement], dropDownListClasses.disableIcon);
            this.spinnerElement.innerHTML = '';
            this.spinnerElement = null;
        }
    };
    /**
     * Shows the spinner loader.
     * @returns void.
     */
    DropDownList.prototype.showSpinner = function () {
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.spinnerElement)) {
            this.spinnerElement = _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.filterInputObj) && this.filterInputObj.buttons[1] ||
                !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.filterInputObj) && this.filterInputObj.buttons[0] || this.inputWrapper.buttons[0];
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.spinnerElement], dropDownListClasses.disableIcon);
            Object(_syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_1__["createSpinner"])({
                target: this.spinnerElement,
                width: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice ? '16px' : '14px'
            }, this.createElement);
            Object(_syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_1__["showSpinner"])(this.spinnerElement);
        }
    };
    DropDownList.prototype.keyActionHandler = function (e) {
        if (!this.enabled) {
            return;
        }
        var preventAction = e.action === 'pageUp' || e.action === 'pageDown';
        var preventHomeEnd = this.getModuleName() !== 'dropdownlist' && (e.action === 'home' || e.action === 'end');
        this.isEscapeKey = e.action === 'escape';
        this.isTabKey = !this.isPopupOpen && e.action === 'tab';
        var isNavigation = (e.action === 'down' || e.action === 'up' || e.action === 'pageUp' || e.action === 'pageDown'
            || e.action === 'home' || e.action === 'end');
        if ((this.isEditTextBox() || preventAction || preventHomeEnd) && !this.isPopupOpen) {
            return;
        }
        if (!this.readonly) {
            var isTabAction = e.action === 'tab' || e.action === 'close';
            if (this.list === undefined && !this.isRequested && !isTabAction && e.action !== 'escape') {
                this.searchKeyEvent = e;
                this.renderList();
            }
            if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.list) || (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.liCollections) &&
                isNavigation && this.liCollections.length === 0) || this.isRequested) {
                return;
            }
            if (isTabAction && this.isPopupOpen || e.action === 'escape') {
                e.preventDefault();
            }
            this.isSelected = e.action === 'escape' ? false : this.isSelected;
            this.isTyped = (isNavigation || e.action === 'escape') ? false : this.isTyped;
            switch (e.action) {
                case 'down':
                case 'up':
                    var focusEle = this.list.querySelector('.' + dropDownListClasses.focus);
                    if (this.isSelectFocusItem(focusEle)) {
                        this.setSelection(focusEle, e);
                    }
                    else {
                        var nextItem = void 0;
                        var index = e.action === 'down' ? this.activeIndex + 1 : this.activeIndex - 1;
                        var startIndex = 0;
                        if (this.getModuleName() === 'autocomplete') {
                            startIndex = e.action === 'down' && Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.activeIndex) ? 0 : this.liCollections.length - 1;
                            index = index < 0 ? this.liCollections.length - 1 : index === this.liCollections.length ? 0 : index;
                        }
                        nextItem = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.activeIndex) ? this.liCollections[startIndex] : this.liCollections[index];
                        this.setSelection(nextItem, e);
                    }
                    e.preventDefault();
                    break;
                case 'pageUp':
                    this.pageUpSelection(this.activeIndex - this.getPageCount(), e);
                    e.preventDefault();
                    break;
                case 'pageDown':
                    this.pageDownSelection(this.activeIndex + this.getPageCount(), e);
                    e.preventDefault();
                    break;
                case 'home':
                    if (this.getModuleName() === 'dropdownlist') {
                        e.preventDefault();
                        if (this.activeIndex === 0) {
                            return;
                        }
                        this.setSelection(this.liCollections[0], e);
                    }
                    break;
                case 'end':
                    if (this.getModuleName() === 'dropdownlist') {
                        e.preventDefault();
                        var lastLi = this.getItems().length - 1;
                        if (this.activeIndex === lastLi) {
                            return;
                        }
                        this.setSelection(this.liCollections[lastLi], e);
                    }
                    break;
                case 'space':
                    if (this.getModuleName() === 'dropdownlist') {
                        if (!this.beforePopupOpen) {
                            this.showPopup();
                        }
                    }
                    break;
                case 'open':
                    this.showPopup();
                    break;
                case 'hide':
                    this.preventAltUp = this.isPopupOpen;
                    this.hidePopup();
                    this.focusDropDown(e);
                    break;
                case 'enter':
                    this.selectCurrentItem(e);
                    break;
                case 'escape':
                case 'tab':
                case 'close':
                    if (this.isPopupOpen) {
                        this.hidePopup();
                        this.focusDropDown(e);
                    }
                    break;
            }
        }
    };
    DropDownList.prototype.selectCurrentItem = function (e) {
        if (this.isPopupOpen) {
            var li = this.list.querySelector('.' + dropDownListClasses.focus);
            if (li) {
                this.setSelection(li, e);
                this.isTyped = false;
            }
            if (this.isSelected) {
                this.isSelectCustom = false;
                this.onChangeEvent(e);
            }
            this.hidePopup();
            this.focusDropDown(e);
        }
        else {
            this.showPopup();
        }
    };
    DropDownList.prototype.isSelectFocusItem = function (element) {
        return !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(element);
    };
    DropDownList.prototype.getPageCount = function () {
        var liHeight = this.list.classList.contains(_drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_4__["dropDownBaseClasses"].noData) ? null :
            getComputedStyle(this.getItems()[0], null).getPropertyValue('height');
        return Math.round(this.list.getBoundingClientRect().height / parseInt(liHeight, 10));
    };
    DropDownList.prototype.pageUpSelection = function (steps, event) {
        var previousItem = steps >= 0 ? this.liCollections[steps + 1] : this.liCollections[0];
        this.setSelection(previousItem, event);
    };
    ;
    DropDownList.prototype.pageDownSelection = function (steps, event) {
        var list = this.getItems();
        var previousItem = steps <= list.length ? this.liCollections[steps - 1] : this.liCollections[list.length - 1];
        this.setSelection(previousItem, event);
    };
    ;
    DropDownList.prototype.unWireEvent = function () {
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.inputWrapper.container, 'mousedown', this.dropDownClick);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.inputWrapper.container, 'keypress', this.onSearch);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.inputWrapper.container, 'focus', this.focusIn);
        this.unBindCommonEvent();
    };
    /**
     * Event un binding for list items.
     */
    DropDownList.prototype.unWireListEvents = function () {
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.list, 'click', this.onMouseClick);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.list, 'mouseover', this.onMouseOver);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.list, 'mouseout', this.onMouseLeave);
    };
    ;
    DropDownList.prototype.onDocumentClick = function (e) {
        var target = e.target;
        if (!(!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.popupObj) && Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["closest"])(target, '#' + this.popupObj.element.id)) &&
            !this.inputWrapper.container.contains(e.target)) {
            if (this.inputWrapper.container.classList.contains(dropDownListClasses.inputFocus) || this.isPopupOpen) {
                this.isDocumentClick = true;
                var isActive = this.isRequested;
                this.isInteracted = false;
                this.hidePopup();
                if (!isActive) {
                    this.onFocusOut();
                    this.inputWrapper.container.classList.remove(dropDownListClasses.inputFocus);
                }
            }
        }
        else if (target !== this.inputElement && !(this.allowFiltering && target === this.filterInput)
            && !(this.getModuleName() === 'combobox' &&
                !this.allowFiltering && _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice && target === this.inputWrapper.buttons[0])) {
            this.isPreventBlur = (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isIE || _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].info.name === 'edge') && (document.activeElement === this.targetElement() ||
                document.activeElement === this.filterInput);
            e.preventDefault();
        }
    };
    DropDownList.prototype.activeStateChange = function () {
        if (this.isDocumentClick) {
            this.hidePopup();
            this.onFocusOut();
            this.inputWrapper.container.classList.remove(dropDownListClasses.inputFocus);
        }
    };
    DropDownList.prototype.focusDropDown = function (e) {
        if (!this.initial && this.isFilterLayout()) {
            this.focusIn(e);
        }
    };
    DropDownList.prototype.dropDownClick = function (e) {
        if (e.which === 3 || e.button === 2) {
            return;
        }
        if (this.targetElement().classList.contains(dropDownListClasses.disable) || this.inputWrapper.clearButton === e.target) {
            return;
        }
        var target = e.target;
        if (target !== this.inputElement && !(this.allowFiltering && target === this.filterInput) && this.getModuleName() !== 'combobox') {
            e.preventDefault();
        }
        if (!this.readonly) {
            if (this.isPopupOpen) {
                this.hidePopup();
                if (this.isFilterLayout()) {
                    this.focusDropDown(e);
                }
            }
            else {
                this.focusIn(e);
                this.floatLabelChange();
                this.queryString = this.inputElement.value.trim() === '' ? null : this.inputElement.value;
                this.isDropDownClick = true;
                this.showPopup();
            }
            var proxy_1 = this;
            var duration = (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])()) ? 1000 : 100;
            if (!this.isSecondClick) {
                setTimeout(function () { proxy_1.cloneElements(); proxy_1.isSecondClick = true; }, duration);
            }
        }
        else {
            this.focusIn(e);
        }
    };
    DropDownList.prototype.cloneElements = function () {
        if (this.list) {
            var ulElement = this.list.querySelector('ul');
            if (ulElement) {
                ulElement = ulElement.cloneNode ? ulElement.cloneNode(true) : ulElement;
                this.actionCompleteData.ulElement = ulElement;
            }
        }
    };
    DropDownList.prototype.updateSelectedItem = function (li, e, preventSelect, isSelection) {
        var _this = this;
        this.removeSelection();
        li.classList.add(_drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_4__["dropDownBaseClasses"].selected);
        this.removeHover();
        var value = this.getFormattedValue(li.getAttribute('data-value'));
        var selectedData = this.getDataByValue(value);
        if (!this.initial && !preventSelect && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(e)) {
            var items = this.detachChanges(selectedData);
            this.isSelected = true;
            var eventArgs = {
                e: e,
                item: li,
                itemData: items,
                isInteracted: e ? true : false,
                cancel: false
            };
            this.trigger('select', eventArgs, function (eventArgs) {
                if (eventArgs.cancel) {
                    li.classList.remove(_drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_4__["dropDownBaseClasses"].selected);
                }
                else {
                    _this.selectEventCallback(li, e, preventSelect, selectedData, value);
                    if (isSelection) {
                        _this.setSelectOptions(li, e);
                    }
                }
            });
        }
        else {
            this.selectEventCallback(li, e, preventSelect, selectedData, value);
            if (isSelection) {
                this.setSelectOptions(li, e);
            }
        }
    };
    DropDownList.prototype.selectEventCallback = function (li, e, preventSelect, selectedData, value) {
        this.previousItemData = (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.itemData)) ? this.itemData : null;
        this.item = li;
        this.itemData = selectedData;
        var focusedItem = this.list.querySelector('.' + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_4__["dropDownBaseClasses"].focus);
        if (focusedItem) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([focusedItem], _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_4__["dropDownBaseClasses"].focus);
        }
        li.setAttribute('aria-selected', 'true');
        this.activeIndex = this.getIndexByValue(value);
    };
    DropDownList.prototype.activeItem = function (li) {
        if (this.isValidLI(li) && !li.classList.contains(_drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_4__["dropDownBaseClasses"].selected)) {
            this.removeSelection();
            li.classList.add(_drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_4__["dropDownBaseClasses"].selected);
            this.removeHover();
            li.setAttribute('aria-selected', 'true');
        }
    };
    DropDownList.prototype.setValue = function (e) {
        var dataItem = this.getItemData();
        if (dataItem.value === null) {
            _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_2__["Input"].setValue(null, this.inputElement, this.floatLabelType, this.showClearButton);
        }
        else {
            _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_2__["Input"].setValue(dataItem.text, this.inputElement, this.floatLabelType, this.showClearButton);
        }
        if (this.valueTemplate && this.itemData !== null) {
            this.DropDownBaseresetBlazorTemplates(false, false, false, false, true);
            this.setValueTemplate();
        }
        else if (this.inputElement.previousSibling === this.valueTempElement) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.valueTempElement);
            this.inputElement.style.display = 'block';
        }
        if (this.previousValue === dataItem.value) {
            this.isSelected = false;
            return true;
        }
        else {
            this.isSelected = !this.initial ? true : false;
            this.isSelectCustom = false;
            if (this.getModuleName() === 'dropdownlist') {
                this.updateIconState();
            }
            return false;
        }
    };
    DropDownList.prototype.setSelection = function (li, e) {
        if (this.isValidLI(li) && !li.classList.contains(_drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_4__["dropDownBaseClasses"].selected)) {
            this.updateSelectedItem(li, e, false, true);
        }
        else {
            this.setSelectOptions(li, e);
        }
    };
    DropDownList.prototype.setSelectOptions = function (li, e) {
        if (this.list) {
            this.removeHover();
        }
        this.previousSelectedLI = (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.selectedLI)) ? this.selectedLI : null;
        this.selectedLI = li;
        if (this.setValue(e)) {
            return;
        }
        if (this.isPopupOpen) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["attributes"])(this.targetElement(), { 'aria-activedescendant': this.selectedLI ? this.selectedLI.id : null });
            if (this.isFilterLayout()) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["attributes"])(this.filterInput, { 'aria-activedescendant': this.selectedLI ? this.selectedLI.id : null });
            }
        }
        if ((!this.isPopupOpen && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(li)) || (this.isPopupOpen && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(e) &&
            (e.type !== 'keydown' || e.type === 'keydown' && e.action === 'enter'))) {
            this.isSelectCustom = false;
            this.onChangeEvent(e);
        }
        if (this.isPopupOpen && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.selectedLI) && this.itemData !== null && (!e || e.type !== 'click')) {
            this.setScrollPosition(e);
        }
    };
    DropDownList.prototype.setValueTemplate = function () {
        var compiledString;
        if (!this.valueTempElement) {
            this.valueTempElement = this.createElement('span', { className: dropDownListClasses.value });
            this.inputElement.parentElement.insertBefore(this.valueTempElement, this.inputElement);
            this.inputElement.style.display = 'none';
        }
        this.valueTempElement.innerHTML = '';
        var templateData = (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])()) ? JSON.parse(JSON.stringify(this.itemData)) : this.itemData;
        compiledString = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["compile"])(this.valueTemplate);
        for (var _i = 0, _a = compiledString(templateData, null, null, this.valueTemplateId, this.isStringTemplate); _i < _a.length; _i++) {
            var item = _a[_i];
            this.valueTempElement.appendChild(item);
        }
        this.DropDownBaseupdateBlazorTemplates(false, false, false, false, true, true, true);
    };
    DropDownList.prototype.removeSelection = function () {
        var selectedItems = this.list.querySelectorAll('.' + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_4__["dropDownBaseClasses"].selected);
        if (selectedItems.length) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(selectedItems, _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_4__["dropDownBaseClasses"].selected);
            selectedItems[0].removeAttribute('aria-selected');
        }
    };
    ;
    DropDownList.prototype.getItemData = function () {
        var fields = this.fields;
        var dataItem = null;
        dataItem = this.itemData;
        var dataValue;
        var dataText;
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(dataItem)) {
            dataValue = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getValue"])(fields.value, dataItem);
            dataText = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getValue"])(fields.text, dataItem);
        }
        var value = (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(dataItem) &&
            !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(dataValue) ? dataValue : dataItem);
        var text = (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(dataItem) &&
            !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(dataValue) ? dataText : dataItem);
        return { value: value, text: text };
    };
    /**
     * To trigger the change event for list.
     */
    DropDownList.prototype.onChangeEvent = function (eve) {
        var dataItem = this.getItemData();
        var index = this.isSelectCustom ? null : this.activeIndex;
        this.setProperties({ 'index': index, 'text': dataItem.text, 'value': dataItem.value }, true);
        this.detachChangeEvent(eve);
    };
    ;
    DropDownList.prototype.detachChanges = function (value) {
        var items;
        if (typeof value === 'string' ||
            typeof value === 'boolean' ||
            typeof value === 'number') {
            items = Object.defineProperties({}, {
                value: {
                    value: value,
                    enumerable: true
                },
                text: {
                    value: value,
                    enumerable: true
                }
            });
        }
        else {
            items = value;
        }
        return items;
    };
    DropDownList.prototype.detachChangeEvent = function (eve) {
        this.isSelected = false;
        this.previousValue = this.value;
        this.activeIndex = this.index;
        this.typedString = !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.text) ? this.text : '';
        if (!this.initial) {
            var items = this.detachChanges(this.itemData);
            var preItems = void 0;
            if (typeof this.previousItemData === 'string' ||
                typeof this.previousItemData === 'boolean' ||
                typeof this.previousItemData === 'number') {
                preItems = Object.defineProperties({}, {
                    value: {
                        value: this.previousItemData,
                        enumerable: true
                    },
                    text: {
                        value: this.previousItemData,
                        enumerable: true
                    }
                });
            }
            else {
                preItems = this.previousItemData;
            }
            this.setHiddenValue();
            var eventArgs = {
                e: eve,
                item: this.item,
                itemData: items,
                previousItem: this.previousSelectedLI,
                previousItemData: preItems,
                isInteracted: eve ? true : false,
                value: this.value,
                element: this.element
            };
            this.trigger('change', eventArgs);
        }
        if ((Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.value) || this.value === '') && this.floatLabelType !== 'Always') {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([this.inputWrapper.container], 'e-valid-input');
        }
    };
    DropDownList.prototype.setHiddenValue = function () {
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.value)) {
            this.hiddenElement.innerHTML = '<option selected>' + this.text + '</option>';
            var selectedElement = this.hiddenElement.querySelector('option');
            selectedElement.setAttribute('value', this.value.toString());
        }
        else {
            this.hiddenElement.innerHTML = '';
        }
    };
    /**
     * Filter bar implementation
     */
    DropDownList.prototype.onFilterUp = function (e) {
        if (this.isValidKey || e.keyCode === 40 || e.keyCode === 38) {
            this.isValidKey = false;
            switch (e.keyCode) {
                case 38: //up arrow 
                case 40: //down arrow 
                    if (this.getModuleName() === 'autocomplete' && !this.isPopupOpen && !this.preventAltUp && !this.isRequested) {
                        this.preventAutoFill = true;
                        this.searchLists(e);
                    }
                    else {
                        this.preventAutoFill = false;
                    }
                    this.preventAltUp = false;
                    e.preventDefault();
                    break;
                case 46: //delete
                case 8: //backspace
                    this.typedString = this.filterInput.value;
                    if (!this.isPopupOpen && this.typedString !== '' || this.isPopupOpen && this.queryString.length > 0) {
                        this.preventAutoFill = true;
                        this.searchLists(e);
                    }
                    else if (this.typedString === '' && this.queryString === '' && this.getModuleName() !== 'autocomplete') {
                        this.preventAutoFill = true;
                        this.searchLists(e);
                    }
                    else if (this.typedString === '') {
                        this.resetFocusElement();
                        this.activeIndex = null;
                        if (this.getModuleName() === 'autocomplete') {
                            this.hidePopup();
                        }
                    }
                    e.preventDefault();
                    break;
                default:
                    this.typedString = this.filterInput.value;
                    this.preventAutoFill = false;
                    this.searchLists(e);
                    break;
            }
        }
        else {
            this.isValidKey = false;
        }
    };
    DropDownList.prototype.onFilterDown = function (e) {
        switch (e.keyCode) {
            case 13: //enter
                break;
            case 40: //down arrow
            case 38: //up arrow 
                this.queryString = this.filterInput.value;
                e.preventDefault();
                break;
            case 9: //tab 
                if (this.isPopupOpen) {
                    e.preventDefault();
                }
                break;
            default:
                this.prevSelectPoints = this.getSelectionPoints();
                this.queryString = this.filterInput.value;
                break;
        }
    };
    DropDownList.prototype.removeFillSelection = function () {
        if (this.isInteracted) {
            var selection = this.getSelectionPoints();
            this.inputElement.setSelectionRange(selection.end, selection.end);
        }
    };
    DropDownList.prototype.getQuery = function (query) {
        var filterQuery;
        if (!this.isCustomFilter && this.allowFiltering && this.filterInput) {
            filterQuery = query ? query.clone() : this.query ? this.query.clone() : new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_5__["Query"]();
            var filterType = this.typedString === '' ? 'contains' : this.filterType;
            var dataType = this.typeOfData(this.dataSource).typeof;
            if (!(this.dataSource instanceof _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_5__["DataManager"]) && dataType === 'string' || dataType === 'number') {
                filterQuery.where('', filterType, this.typedString, this.ignoreCase, this.ignoreAccent);
            }
            else {
                var fields = (this.fields.text) ? this.fields.text : '';
                filterQuery.where(fields, filterType, this.typedString, this.ignoreCase, this.ignoreAccent);
            }
        }
        else {
            filterQuery = query ? query : this.query ? this.query : new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_5__["Query"]();
        }
        return filterQuery;
    };
    DropDownList.prototype.getSelectionPoints = function () {
        var input = this.inputElement;
        return { start: Math.abs(input.selectionStart), end: Math.abs(input.selectionEnd) };
    };
    DropDownList.prototype.searchLists = function (e) {
        var _this = this;
        this.isTyped = true;
        this.activeIndex = null;
        if (this.filterInput.parentElement.querySelector('.' + dropDownListClasses.clearIcon)) {
            var clearElement = this.filterInput.parentElement.querySelector('.' + dropDownListClasses.clearIcon);
            clearElement.style.visibility = this.filterInput.value === '' ? 'hidden' : 'visible';
        }
        this.isDataFetched = false;
        if (this.isFiltering()) {
            var eventArgs_1 = {
                preventDefaultAction: false,
                text: this.filterInput.value,
                updateData: function (dataSource, query, fields) {
                    if (eventArgs_1.cancel) {
                        return;
                    }
                    _this.isCustomFilter = true;
                    _this.filteringAction(dataSource, query, fields);
                },
                baseEventArgs: e,
                cancel: false
            };
            this.trigger('filtering', eventArgs_1, function (eventArgs) {
                if (!eventArgs.cancel && !_this.isCustomFilter && !eventArgs.preventDefaultAction) {
                    _this.filteringAction(_this.dataSource, null, _this.fields);
                }
            });
        }
    };
    /**
     * To filter the data from given data source by using query
     * @param  {Object[] | DataManager } dataSource - Set the data source to filter.
     * @param  {Query} query - Specify the query to filter the data.
     * @param  {FieldSettingsModel} fields - Specify the fields to map the column in the data table.
     * @return {void}.
     */
    DropDownList.prototype.filter = function (dataSource, query, fields) {
        this.isCustomFilter = true;
        this.filteringAction(dataSource, query, fields);
    };
    DropDownList.prototype.filteringAction = function (dataSource, query, fields) {
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.filterInput)) {
            this.beforePopupOpen = true;
            if (this.filterInput.value.trim() === '' && !this.itemTemplate) {
                this.actionCompleteData.isUpdated = false;
                this.isTyped = false;
                if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.actionCompleteData.ulElement) && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.actionCompleteData.list)) {
                    this.onActionComplete(this.actionCompleteData.ulElement, this.actionCompleteData.list);
                }
                this.isTyped = true;
                if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.itemData) && this.getModuleName() === 'dropdownlist') {
                    this.focusIndexItem();
                    this.setScrollPosition();
                }
                this.isNotSearchList = true;
            }
            else {
                this.isNotSearchList = false;
                query = (this.filterInput.value.trim() === '') ? null : query;
                this.resetList(dataSource, fields, query);
            }
        }
    };
    DropDownList.prototype.setSearchBox = function (popupElement) {
        if (this.isFiltering()) {
            var parentElement = this.createElement('span', {
                className: dropDownListClasses.filterParent
            });
            this.filterInput = this.createElement('input', {
                attrs: { type: 'text' },
                className: dropDownListClasses.filterInput
            });
            this.element.parentNode.insertBefore(this.filterInput, this.element);
            var backIcon = false;
            if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice) {
                backIcon = true;
            }
            this.filterInputObj = _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_2__["Input"].createInput({
                element: this.filterInput,
                buttons: backIcon ?
                    [dropDownListClasses.backIcon, dropDownListClasses.filterBarClearIcon] : [dropDownListClasses.filterBarClearIcon],
                properties: { placeholder: this.filterBarPlaceholder }
            }, this.createElement);
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["append"])([this.filterInputObj.container], parentElement);
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["prepend"])([parentElement], popupElement);
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["attributes"])(this.filterInput, {
                'aria-disabled': 'false',
                'aria-owns': this.element.id + '_options',
                'role': 'listbox',
                'aria-activedescendant': this.selectedLI ? this.selectedLI.id : null,
                'autocomplete': 'off',
                'autocorrect': 'off',
                'autocapitalize': 'off',
                'spellcheck': 'false'
            });
            this.clearIconElement = this.filterInput.parentElement.querySelector('.' + dropDownListClasses.clearIcon);
            if (!_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice && this.clearIconElement) {
                _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.clearIconElement, 'click', this.clearText, this);
                this.clearIconElement.style.visibility = 'hidden';
            }
            if (!_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice) {
                this.searchKeyModule = new _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["KeyboardEvents"](this.filterInput, {
                    keyAction: this.keyActionHandler.bind(this),
                    keyConfigs: this.keyConfigure,
                    eventName: 'keydown'
                });
            }
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.filterInput, 'input', this.onInput, this);
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.filterInput, 'keyup', this.onFilterUp, this);
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.filterInput, 'keydown', this.onFilterDown, this);
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.filterInput, 'blur', this.onBlur, this);
            return this.filterInputObj;
        }
        else {
            return inputObject;
        }
    };
    ;
    DropDownList.prototype.onInput = function () {
        this.isValidKey = true;
    };
    DropDownList.prototype.onActionFailure = function (e) {
        _super.prototype.onActionFailure.call(this, e);
        if (this.beforePopupOpen) {
            this.renderPopup();
        }
    };
    DropDownList.prototype.onActionComplete = function (ulElement, list, e, isUpdated) {
        var _this = this;
        if (this.isNotSearchList) {
            this.isNotSearchList = false;
            return;
        }
        if (this.isActive) {
            var selectedItem = this.selectedLI ? this.selectedLI.cloneNode(true) : null;
            _super.prototype.onActionComplete.call(this, ulElement, list, e);
            this.updateSelectElementData(this.allowFiltering);
            if (this.isRequested && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.searchKeyEvent) && this.searchKeyEvent.type === 'keydown') {
                this.isRequested = false;
                this.keyActionHandler(this.searchKeyEvent);
                this.searchKeyEvent = null;
            }
            if (this.isRequested && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.searchKeyEvent)) {
                this.incrementalSearch(this.searchKeyEvent);
                this.searchKeyEvent = null;
            }
            this.list.scrollTop = 0;
            if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(ulElement)) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["attributes"])(ulElement, { 'id': this.element.id + '_options', 'role': 'listbox', 'aria-hidden': 'false' });
            }
            if (this.initRemoteRender) {
                this.initial = true;
                this.activeIndex = this.index;
                this.updateValues();
                this.initRemoteRender = false;
                this.initial = false;
                if (this.value && this.dataSource instanceof _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_5__["DataManager"]) {
                    var checkField_1 = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.fields.value) ? this.fields.text : this.fields.value;
                    var checkVal = list.some(function (x) { return x[checkField_1] === _this.value; });
                    if (!checkVal) {
                        this.dataSource.executeQuery(this.getQuery(this.query).where(new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_5__["Predicate"](checkField_1, 'equal', this.value)))
                            .then(function (e) {
                            if (e.result.length > 0) {
                                _this.addItem(e.result, list.length);
                                _this.updateValues();
                            }
                        });
                    }
                }
            }
            if (this.getModuleName() !== 'autocomplete' && this.isFiltering() && !this.isTyped) {
                if (!this.actionCompleteData.isUpdated || ((!this.isCustomFilter
                    && !this.isFilterFocus)
                    && ((this.dataSource instanceof _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_5__["DataManager"])
                        || (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.dataSource) && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.dataSource.length) &&
                            this.dataSource.length !== 0)))) {
                    this.actionCompleteData = { ulElement: ulElement.cloneNode(true), list: list, isUpdated: true };
                }
                this.addNewItem(list, selectedItem);
                if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.itemData)) {
                    this.focusIndexItem();
                }
            }
            if (this.beforePopupOpen) {
                this.renderPopup();
            }
        }
    };
    DropDownList.prototype.addNewItem = function (listData, newElement) {
        var _this = this;
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.itemData) && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(newElement)) {
            var value_1 = this.getItemData().value;
            var isExist = listData.some(function (data) {
                return (((typeof data === 'string' || typeof data === 'number') && data === value_1) ||
                    (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getValue"])(_this.fields.value, data) === value_1));
            });
            if (!isExist) {
                this.addItem(this.itemData);
            }
        }
    };
    DropDownList.prototype.updateActionCompleteData = function (li, item) {
        if (this.getModuleName() !== 'autocomplete' && this.actionCompleteData.ulElement) {
            this.actionCompleteData.ulElement.appendChild(li.cloneNode(true));
            if (this.isFiltering() && this.actionCompleteData.list.indexOf(item) > 0) {
                this.actionCompleteData.list.push(item);
            }
        }
    };
    DropDownList.prototype.focusIndexItem = function () {
        var value = this.getItemData().value;
        this.activeIndex = this.getIndexByValue(value);
        var element = this.findListElement(this.list, 'li', 'data-value', value);
        this.selectedLI = element;
        this.activeItem(element);
        this.removeFocus();
    };
    DropDownList.prototype.updateSelection = function () {
        var selectedItem = this.list.querySelector('.' + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_4__["dropDownBaseClasses"].selected);
        if (selectedItem) {
            this.setProperties({ 'index': this.getIndexByValue(selectedItem.getAttribute('data-value')) });
            this.activeIndex = this.index;
        }
        else {
            this.removeFocus();
            this.list.querySelector('.' + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_4__["dropDownBaseClasses"].li).classList.add(dropDownListClasses.focus);
        }
    };
    DropDownList.prototype.removeFocus = function () {
        var highlightedItem = this.list.querySelectorAll('.' + dropDownListClasses.focus);
        if (highlightedItem && highlightedItem.length) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(highlightedItem, dropDownListClasses.focus);
        }
    };
    ;
    DropDownList.prototype.renderPopup = function () {
        var _this = this;
        if (this.popupObj && document.body.contains(this.popupObj.element)) {
            this.refreshPopup();
            return;
        }
        var args = { cancel: false };
        this.trigger('beforeOpen', args, function (args) {
            if (!args.cancel) {
                var popupEle = _this.createElement('div', {
                    id: _this.element.id + '_popup', className: 'e-ddl e-popup ' + (_this.cssClass != null ? _this.cssClass : '')
                });
                var searchBox = _this.setSearchBox(popupEle);
                _this.listHeight = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["formatUnit"])(_this.popupHeight);
                if (_this.headerTemplate) {
                    _this.setHeaderTemplate(popupEle);
                }
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["append"])([_this.list], popupEle);
                if (_this.footerTemplate) {
                    _this.setFooterTemplate(popupEle);
                }
                document.body.appendChild(popupEle);
                popupEle.style.visibility = 'hidden';
                if (_this.popupHeight !== 'auto') {
                    _this.searchBoxHeight = 0;
                    if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(searchBox.container)) {
                        _this.searchBoxHeight = (searchBox.container.parentElement).getBoundingClientRect().height;
                        _this.listHeight = (parseInt(_this.listHeight, 10) - (_this.searchBoxHeight)).toString() + 'px';
                    }
                    if (_this.headerTemplate) {
                        var height = Math.round(_this.header.getBoundingClientRect().height);
                        _this.listHeight = (parseInt(_this.listHeight, 10) - (height + _this.searchBoxHeight)).toString() + 'px';
                    }
                    if (_this.footerTemplate) {
                        var height = Math.round(_this.footer.getBoundingClientRect().height);
                        _this.listHeight = (parseInt(_this.listHeight, 10) - (height + _this.searchBoxHeight)).toString() + 'px';
                    }
                    _this.list.style.maxHeight = (parseInt(_this.listHeight, 10) - 2).toString() + 'px'; // due to box-sizing property
                    popupEle.style.maxHeight = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["formatUnit"])(_this.popupHeight);
                }
                else {
                    popupEle.style.height = 'auto';
                }
                var offsetValue = 0;
                var left = void 0;
                if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(_this.selectedLI) && (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(_this.activeIndex) && _this.activeIndex >= 0)) {
                    _this.setScrollPosition();
                }
                else {
                    _this.list.scrollTop = 0;
                }
                if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice && (!_this.allowFiltering && (_this.getModuleName() === 'dropdownlist' ||
                    (_this.isDropDownClick && _this.getModuleName() === 'combobox')))) {
                    offsetValue = _this.getOffsetValue(popupEle);
                    var firstItem = _this.isEmptyList() ? _this.list : _this.liCollections[0];
                    left = -(parseInt(getComputedStyle(firstItem).textIndent, 10) -
                        parseInt(getComputedStyle(_this.inputElement).paddingLeft, 10) +
                        parseInt(getComputedStyle(_this.inputElement.parentElement).borderLeftWidth, 10));
                }
                _this.getFocusElement();
                _this.createPopup(popupEle, offsetValue, left);
                _this.checkCollision(popupEle);
                if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice) {
                    _this.popupObj.element.classList.add(dropDownListClasses.device);
                    if (_this.getModuleName() === 'dropdownlist' || (_this.getModuleName() === 'combobox'
                        && !_this.allowFiltering && _this.isDropDownClick)) {
                        _this.popupObj.collision = { X: 'fit', Y: 'fit' };
                    }
                    if (_this.isFilterLayout()) {
                        _this.popupObj.element.classList.add(dropDownListClasses.mobileFilter);
                        _this.popupObj.position = { X: 0, Y: 0 };
                        _this.popupObj.dataBind();
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["attributes"])(_this.popupObj.element, { style: 'left:0px;right:0px;top:0px;bottom:0px;' });
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([document.body, _this.popupObj.element], dropDownListClasses.popupFullScreen);
                        _this.setSearchBoxPosition();
                        _this.backIconElement = searchBox.container.querySelector('.e-back-icon');
                        _this.clearIconElement = searchBox.container.querySelector('.' + dropDownListClasses.clearIcon);
                        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(_this.backIconElement, 'click', _this.clickOnBackIcon, _this);
                        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(_this.clearIconElement, 'click', _this.clearText, _this);
                    }
                }
                popupEle.style.visibility = 'visible';
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([popupEle], 'e-popup-close');
                var scrollParentElements = _this.popupObj.getScrollableParent(_this.inputWrapper.container);
                for (var _i = 0, scrollParentElements_1 = scrollParentElements; _i < scrollParentElements_1.length; _i++) {
                    var element = scrollParentElements_1[_i];
                    _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(element, 'scroll', _this.scrollHandler, _this);
                }
                if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice && _this.isFilterLayout()) {
                    _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(_this.list, 'scroll', _this.listScroll, _this);
                }
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["attributes"])(_this.targetElement(), { 'aria-expanded': 'true' });
                var inputParent = _this.isFiltering() ? _this.filterInput.parentElement : _this.inputWrapper.container;
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([inputParent], [dropDownListClasses.inputFocus]);
                var animModel = { name: 'FadeIn', duration: 100 };
                _this.beforePopupOpen = true;
                var eventArgs = { popup: _this.popupObj, cancel: false, animation: animModel };
                _this.trigger('open', eventArgs, function (eventArgs) {
                    if (!eventArgs.cancel) {
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([_this.inputWrapper.container], [dropDownListClasses.iconAnimation]);
                        _this.popupObj.show(new _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Animation"](eventArgs.animation), (_this.zIndex === 1000) ? _this.element : null);
                    }
                    else {
                        _this.beforePopupOpen = false;
                        _this.destroyPopup();
                    }
                });
            }
            else {
                _this.beforePopupOpen = false;
            }
        });
    };
    DropDownList.prototype.checkCollision = function (popupEle) {
        if (!_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice || (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice && !(this.getModuleName() === 'dropdownlist' || this.isDropDownClick))) {
            var collision = Object(_syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_1__["isCollide"])(popupEle);
            if (collision.length > 0) {
                popupEle.style.marginTop = -parseInt(getComputedStyle(popupEle).marginTop, 10) + 'px';
            }
        }
    };
    DropDownList.prototype.getOffsetValue = function (popupEle) {
        var popupStyles = getComputedStyle(popupEle);
        var borderTop = parseInt(popupStyles.borderTopWidth, 10);
        var borderBottom = parseInt(popupStyles.borderBottomWidth, 10);
        return this.setPopupPosition(borderTop + borderBottom);
    };
    DropDownList.prototype.createPopup = function (element, offsetValue, left) {
        var _this = this;
        this.popupObj = new _syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_1__["Popup"](element, {
            width: this.setWidth(), targetType: 'relative',
            relateTo: this.inputWrapper.container, collision: { X: 'flip', Y: 'flip' }, offsetY: offsetValue,
            enableRtl: this.enableRtl, offsetX: left, position: { X: 'left', Y: 'bottom' },
            zIndex: this.zIndex,
            close: function () {
                if (!_this.isDocumentClick) {
                    _this.focusDropDown();
                }
                var isResetItem = (_this.getModuleName() === 'autocomplete') ? true : false;
                _this.DropDownBaseresetBlazorTemplates(isResetItem, isResetItem, true, true, false, true, true);
                _this.isNotSearchList = false;
                _this.isDocumentClick = false;
                _this.destroyPopup();
                var formElement = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["closest"])(_this.inputElement, 'form');
                if (_this.isFiltering() && formElement && _this.actionCompleteData.list && _this.actionCompleteData.list[0]) {
                    _this.isActive = true;
                    _this.onActionComplete(_this.actionCompleteData.ulElement, _this.actionCompleteData.list, null, true);
                }
            },
            open: function () {
                _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(document, 'mousedown', _this.onDocumentClick, _this);
                _this.isPopupOpen = true;
                var actionList = _this.actionCompleteData && _this.actionCompleteData.ulElement &&
                    _this.actionCompleteData.ulElement.querySelector('li');
                var ulElement = _this.list.querySelector('ul li');
                if (_this.isFiltering() && _this.itemTemplate && (_this.element.tagName === _this.getNgDirective()) &&
                    (actionList && ulElement && actionList.textContent !== ulElement.textContent)) {
                    _this.cloneElements();
                }
                if (_this.isFilterLayout()) {
                    Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([_this.inputWrapper.container], [dropDownListClasses.inputFocus]);
                    _this.isFilterFocus = true;
                    _this.filterInput.focus();
                    if (_this.inputWrapper.clearButton) {
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([_this.inputWrapper.clearButton], dropDownListClasses.clearIconHide);
                    }
                }
                _this.activeStateChange();
            },
            targetExitViewport: function () {
                if (!_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice) {
                    _this.hidePopup();
                }
            }
        });
    };
    DropDownList.prototype.isEmptyList = function () {
        return !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.liCollections) && this.liCollections.length === 0;
    };
    DropDownList.prototype.getFocusElement = function () {
        // combo-box used this method
    };
    DropDownList.prototype.isFilterLayout = function () {
        return this.getModuleName() === 'dropdownlist' && this.allowFiltering;
    };
    DropDownList.prototype.scrollHandler = function () {
        if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice && ((this.getModuleName() === 'dropdownlist' &&
            !this.isFilterLayout()) || (this.getModuleName() === 'combobox' && !this.allowFiltering && this.isDropDownClick))) {
            this.hidePopup();
        }
    };
    DropDownList.prototype.setSearchBoxPosition = function () {
        var searchBoxHeight = this.filterInput.parentElement.getBoundingClientRect().height;
        this.popupObj.element.style.maxHeight = '100%';
        this.popupObj.element.style.width = '100%';
        this.list.style.maxHeight = (window.innerHeight - searchBoxHeight) + 'px';
        this.list.style.height = (window.innerHeight - searchBoxHeight) + 'px';
        var clearElement = this.filterInput.parentElement.querySelector('.' + dropDownListClasses.clearIcon);
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.filterInput);
        clearElement.parentElement.insertBefore(this.filterInput, clearElement);
    };
    DropDownList.prototype.setPopupPosition = function (border) {
        var offsetValue;
        var popupOffset = border;
        var selectedLI = this.list.querySelector('.' + dropDownListClasses.focus) || this.selectedLI;
        var firstItem = this.isEmptyList() ? this.list : this.liCollections[0];
        var lastItem = this.isEmptyList() ? this.list : this.liCollections[this.getItems().length - 1];
        var liHeight = firstItem.getBoundingClientRect().height;
        var listHeight = this.list.offsetHeight / 2;
        var height = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(selectedLI) ? firstItem.offsetTop : selectedLI.offsetTop;
        var lastItemOffsetValue = lastItem.offsetTop;
        if (lastItemOffsetValue - listHeight < height && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.liCollections) &&
            this.liCollections.length > 0 && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(selectedLI)) {
            var count = this.list.offsetHeight / liHeight;
            var paddingBottom = parseInt(getComputedStyle(this.list).paddingBottom, 10);
            offsetValue = (count - (this.liCollections.length - this.activeIndex)) * liHeight - popupOffset + paddingBottom;
            this.list.scrollTop = selectedLI.offsetTop;
        }
        else if (height > listHeight) {
            offsetValue = listHeight - liHeight / 2;
            this.list.scrollTop = height - listHeight + liHeight / 2;
        }
        else {
            offsetValue = height;
        }
        var inputHeight = this.inputWrapper.container.offsetHeight;
        offsetValue = offsetValue + liHeight + popupOffset - ((liHeight - inputHeight) / 2);
        return -offsetValue;
    };
    DropDownList.prototype.setWidth = function () {
        var width = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["formatUnit"])(this.popupWidth);
        if (width.indexOf('%') > -1) {
            var inputWidth = this.inputWrapper.container.offsetWidth * parseFloat(width) / 100;
            width = inputWidth.toString() + 'px';
        }
        if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice && (!this.allowFiltering && (this.getModuleName() === 'dropdownlist' ||
            (this.isDropDownClick && this.getModuleName() === 'combobox')))) {
            var firstItem = this.isEmptyList() ? this.list : this.liCollections[0];
            width = (parseInt(width, 10) + (parseInt(getComputedStyle(firstItem).textIndent, 10) -
                parseInt(getComputedStyle(this.inputElement).paddingLeft, 10) +
                parseInt(getComputedStyle(this.inputElement.parentElement).borderLeftWidth, 10)) * 2) + 'px';
        }
        return width;
    };
    DropDownList.prototype.scrollBottom = function (isInitial) {
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.selectedLI)) {
            var currentOffset = this.list.offsetHeight;
            var nextBottom = this.selectedLI.offsetTop + this.selectedLI.offsetHeight - this.list.scrollTop;
            var nextOffset = this.list.scrollTop + nextBottom - currentOffset;
            nextOffset = isInitial ? nextOffset + parseInt(getComputedStyle(this.list).paddingTop, 10) * 2 : nextOffset;
            var boxRange = this.selectedLI.offsetTop + this.selectedLI.offsetHeight - this.list.scrollTop;
            boxRange = this.fields.groupBy && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.fixedHeaderElement) ?
                boxRange - this.fixedHeaderElement.offsetHeight : boxRange;
            if (this.activeIndex === 0) {
                this.list.scrollTop = 0;
            }
            else if (nextBottom > currentOffset || !(boxRange > 0 && this.list.offsetHeight > boxRange)) {
                this.list.scrollTop = nextOffset;
            }
        }
    };
    DropDownList.prototype.scrollTop = function () {
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.selectedLI)) {
            var nextOffset = this.selectedLI.offsetTop - this.list.scrollTop;
            var nextBottom = this.selectedLI.offsetTop + this.selectedLI.offsetHeight - this.list.scrollTop;
            nextOffset = this.fields.groupBy && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.fixedHeaderElement) ?
                nextOffset - this.fixedHeaderElement.offsetHeight : nextOffset;
            var boxRange = (this.selectedLI.offsetTop + this.selectedLI.offsetHeight - this.list.scrollTop);
            if (this.activeIndex === 0) {
                this.list.scrollTop = 0;
            }
            else if (nextOffset < 0) {
                this.list.scrollTop = this.list.scrollTop + nextOffset;
            }
            else if (!(boxRange > 0 && this.list.offsetHeight > boxRange)) {
                this.list.scrollTop = this.selectedLI.offsetTop - (this.fields.groupBy && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.fixedHeaderElement) ?
                    this.fixedHeaderElement.offsetHeight : 0);
            }
        }
    };
    DropDownList.prototype.isEditTextBox = function () {
        return false;
    };
    DropDownList.prototype.isFiltering = function () {
        return this.allowFiltering;
    };
    DropDownList.prototype.isPopupButton = function () {
        return true;
    };
    DropDownList.prototype.setScrollPosition = function (e) {
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(e)) {
            switch (e.action) {
                case 'pageDown':
                case 'down':
                case 'end':
                    this.scrollBottom();
                    break;
                default:
                    this.scrollTop();
                    break;
            }
        }
        else {
            this.scrollBottom(true);
        }
    };
    DropDownList.prototype.clearText = function () {
        this.filterInput.value = '';
        this.searchLists(null);
    };
    DropDownList.prototype.listScroll = function () {
        this.filterInput.blur();
    };
    DropDownList.prototype.setEleWidth = function (width) {
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(width)) {
            if (typeof width === 'number') {
                this.inputWrapper.container.style.width = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["formatUnit"])(width);
            }
            else if (typeof width === 'string') {
                this.inputWrapper.container.style.width = (width.match(/px|%|em/)) ? (width) : (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["formatUnit"])(width));
            }
        }
    };
    DropDownList.prototype.closePopup = function (delay) {
        var _this = this;
        this.isTyped = false;
        if (!(this.popupObj && document.body.contains(this.popupObj.element) && this.beforePopupOpen)) {
            return;
        }
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(document, 'mousedown', this.onDocumentClick);
        this.isActive = false;
        this.filterInputObj = null;
        this.isDropDownClick = false;
        this.preventAutoFill = false;
        var scrollableParentElements = this.popupObj.getScrollableParent(this.inputWrapper.container);
        for (var _i = 0, scrollableParentElements_1 = scrollableParentElements; _i < scrollableParentElements_1.length; _i++) {
            var element = scrollableParentElements_1[_i];
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(element, 'scroll', this.scrollHandler);
        }
        if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice && this.isFilterLayout()) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([document.body, this.popupObj.element], dropDownListClasses.popupFullScreen);
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.list, 'scroll', this.listScroll);
        }
        if (this.isFilterLayout()) {
            if (!_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice) {
                this.searchKeyModule.destroy();
                if (this.clearIconElement) {
                    _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.clearIconElement, 'click', this.clearText);
                }
            }
            if (this.backIconElement) {
                _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.backIconElement, 'click', this.clickOnBackIcon);
                _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.clearIconElement, 'click', this.clearText);
            }
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.filterInput, 'input', this.onInput);
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.filterInput, 'keyup', this.onFilterUp);
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.filterInput, 'keydown', this.onFilterDown);
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.filterInput, 'blur', this.onBlur);
            this.filterInput = null;
        }
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["attributes"])(this.targetElement(), { 'aria-expanded': 'false', 'aria-activedescendant': null });
        this.inputWrapper.container.classList.remove(dropDownListClasses.iconAnimation);
        if (this.isFiltering()) {
            this.actionCompleteData.isUpdated = false;
        }
        this.beforePopupOpen = false;
        var animModel = {
            name: 'FadeOut',
            duration: 100,
            delay: delay ? delay : 0
        };
        var eventArgs = { popup: this.popupObj, cancel: false, animation: animModel };
        this.trigger('close', eventArgs, function (eventArgs) {
            if (!eventArgs.cancel) {
                if (_this.getModuleName() === 'autocomplete') {
                    _this.rippleFun();
                }
                if (_this.isPopupOpen) {
                    _this.popupObj.hide(new _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Animation"](eventArgs.animation));
                }
                else {
                    _this.destroyPopup();
                }
            }
        });
    };
    DropDownList.prototype.destroyPopup = function () {
        this.isPopupOpen = false;
        this.isFilterFocus = false;
        this.popupObj.destroy();
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.popupObj.element);
    };
    DropDownList.prototype.clickOnBackIcon = function () {
        this.hidePopup();
        this.focusIn();
    };
    /**
     * To Initialize the control rendering
     * @private
     */
    DropDownList.prototype.render = function () {
        if (this.element.tagName === 'INPUT') {
            this.inputElement = this.element;
            if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.inputElement.getAttribute('role'))) {
                this.inputElement.setAttribute('role', 'textbox');
            }
            if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.inputElement.getAttribute('type'))) {
                this.inputElement.setAttribute('type', 'text');
            }
        }
        else {
            this.inputElement = this.createElement('input', { attrs: { role: 'textbox', type: 'text' } });
            if (this.element.tagName !== this.getNgDirective()) {
                this.element.style.display = 'none';
            }
            this.element.parentElement.insertBefore(this.inputElement, this.element);
            this.preventTabIndex(this.inputElement);
        }
        this.inputWrapper = _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_2__["Input"].createInput({
            element: this.inputElement,
            buttons: this.isPopupButton() ? [dropDownListClasses.icon] : null,
            floatLabelType: this.floatLabelType,
            properties: {
                readonly: this.getModuleName() === 'dropdownlist' ? true : this.readonly,
                placeholder: this.placeholder,
                cssClass: this.cssClass,
                enabled: this.enabled,
                enableRtl: this.enableRtl,
                showClearButton: this.showClearButton
            },
        }, this.createElement);
        if (this.element.tagName === this.getNgDirective()) {
            this.element.appendChild(this.inputWrapper.container);
        }
        else {
            this.inputElement.parentElement.insertBefore(this.element, this.inputElement);
        }
        this.hiddenElement = this.createElement('select', {
            attrs: { 'aria-hidden': 'true', 'tabindex': '-1', 'class': dropDownListClasses.hiddenElement }
        });
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["prepend"])([this.hiddenElement], this.inputWrapper.container);
        this.validationAttribute(this.element, this.hiddenElement);
        this.setFields();
        this.setEleWidth(this.width);
        this.inputWrapper.container.classList.add('e-ddl');
        this.wireEvent();
        this.tabIndex = this.element.hasAttribute('tabindex') ? this.element.getAttribute('tabindex') : '0';
        this.element.removeAttribute('tabindex');
        var id = this.element.getAttribute('id') ? this.element.getAttribute('id') : Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getUniqueID"])('ej2_dropdownlist');
        this.element.id = id;
        this.hiddenElement.id = id + '_hidden';
        this.targetElement().setAttribute('tabindex', this.tabIndex);
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["attributes"])(this.targetElement(), this.getAriaAttributes());
        this.updateDataAttribute(this.htmlAttributes);
        this.setHTMLAttributes();
        if (this.value !== null || this.activeIndex !== null || this.text !== null) {
            this.initValue();
        }
        else if (this.element.tagName === 'SELECT' && this.element.options[0]) {
            var selectElement = this.element;
            this.value = selectElement.options[selectElement.selectedIndex].value;
            this.text = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.value) ? null : selectElement.options[selectElement.selectedIndex].textContent;
            this.initValue();
        }
        this.preventTabIndex(this.element);
        if (!this.enabled) {
            this.targetElement().tabIndex = -1;
        }
        this.initial = false;
        this.element.style.opacity = '';
        this.inputElement.onselect = function (e) { e.stopImmediatePropagation(); };
        this.inputElement.onchange = function (e) { e.stopImmediatePropagation(); };
        if (this.element.hasAttribute('autofocus')) {
            this.focusIn();
        }
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.text)) {
            this.inputElement.setAttribute('value', this.text);
        }
        this.renderComplete();
    };
    ;
    DropDownList.prototype.setFooterTemplate = function (popupEle) {
        var compiledString;
        if (this.footer) {
            this.footer.innerHTML = '';
        }
        else {
            this.footer = this.createElement('div');
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.footer], dropDownListClasses.footer);
        }
        compiledString = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["compile"])(this.footerTemplate);
        for (var _i = 0, _a = compiledString({}, null, null, this.footerTemplateId, this.isStringTemplate); _i < _a.length; _i++) {
            var item = _a[_i];
            this.footer.appendChild(item);
        }
        this.DropDownBaseupdateBlazorTemplates(false, false, false, false, false, false, true);
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["append"])([this.footer], popupEle);
    };
    DropDownList.prototype.setHeaderTemplate = function (popupEle) {
        var compiledString;
        if (this.header) {
            this.header.innerHTML = '';
        }
        else {
            this.header = this.createElement('div');
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.header], dropDownListClasses.header);
        }
        compiledString = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["compile"])(this.headerTemplate);
        for (var _i = 0, _a = compiledString({}, null, null, this.headerTemplateId, this.isStringTemplate); _i < _a.length; _i++) {
            var item = _a[_i];
            this.header.appendChild(item);
        }
        this.DropDownBaseupdateBlazorTemplates(false, false, false, false, false, true, false);
        var contentEle = popupEle.querySelector('div.e-content');
        popupEle.insertBefore(this.header, contentEle);
    };
    DropDownList.prototype.setOldText = function (text) {
        this.text = text;
    };
    DropDownList.prototype.setOldValue = function (value) {
        this.value = value;
    };
    DropDownList.prototype.refreshPopup = function () {
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.popupObj) && document.body.contains(this.popupObj.element) &&
            ((this.allowFiltering && !(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice && this.isFilterLayout())) || this.getModuleName() === 'autocomplete')) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([this.popupObj.element], 'e-popup-close');
            this.popupObj.refreshPosition(this.inputWrapper.container);
        }
    };
    DropDownList.prototype.checkDatasource = function (newProp) {
        if (newProp.dataSource && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(Object.keys(newProp.dataSource)) && this.itemTemplate && this.allowFiltering) {
            this.list = null;
            this.actionCompleteData = { ulElement: null, list: null, isUpdated: false };
        }
    };
    DropDownList.prototype.updateDataSource = function (props) {
        if (this.inputElement.value !== '' || (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(props) && (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(props.dataSource)
            || (!(props.dataSource instanceof _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_5__["DataManager"]) && props.dataSource.length === 0)))) {
            this.clear(null, props);
        }
        if (!(!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(props) && (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(props.dataSource)
            || (!(props.dataSource instanceof _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_5__["DataManager"]) && props.dataSource.length === 0)))) {
            this.resetList(this.dataSource);
        }
        if (!this.isCustomFilter && !this.isFilterFocus && document.activeElement !== this.filterInput) {
            this.checkCustomValue();
        }
    };
    DropDownList.prototype.checkCustomValue = function () {
        this.itemData = this.getDataByValue(this.value);
        var dataItem = this.getItemData();
        this.setProperties({ 'value': dataItem.value, 'text': dataItem.text });
    };
    DropDownList.prototype.updateInputFields = function () {
        if (this.getModuleName() === 'dropdownlist') {
            _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_2__["Input"].setValue(this.text, this.inputElement, this.floatLabelType, this.showClearButton);
        }
    };
    /**
     * Dynamically change the value of properties.
     * @private
     */
    DropDownList.prototype.onPropertyChanged = function (newProp, oldProp) {
        if (this.getModuleName() === 'dropdownlist') {
            this.checkDatasource(newProp);
            this.setUpdateInitial(['fields', 'query', 'dataSource'], newProp);
        }
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'query':
                case 'dataSource':
                    break;
                case 'htmlAttributes':
                    this.setHTMLAttributes();
                    break;
                case 'width':
                    this.setEleWidth(newProp.width);
                    break;
                case 'placeholder':
                    _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_2__["Input"].setPlaceholder(newProp.placeholder, this.inputElement);
                    break;
                case 'filterBarPlaceholder':
                    if (this.filterInput) {
                        _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_2__["Input"].setPlaceholder(newProp.filterBarPlaceholder, this.filterInput);
                    }
                    break;
                case 'readonly':
                    if (this.getModuleName() !== 'dropdownlist') {
                        _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_2__["Input"].setReadonly(newProp.readonly, this.inputElement);
                    }
                    break;
                case 'cssClass':
                    this.setCssClass(newProp, oldProp);
                    break;
                case 'enableRtl':
                    this.setEnableRtl();
                    break;
                case 'enabled':
                    this.setEnable();
                    break;
                case 'text':
                    if (newProp.text === null) {
                        this.clear();
                        break;
                    }
                    if (!this.list) {
                        if (this.dataSource instanceof _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_5__["DataManager"]) {
                            this.initRemoteRender = true;
                        }
                        this.renderList();
                    }
                    if (!this.initRemoteRender) {
                        var li = this.getElementByText(newProp.text);
                        if (!this.checkValidLi(li)) {
                            if (this.liCollections && this.liCollections.length === 100 &&
                                this.getModuleName() === 'autocomplete' && this.listData.length > 100) {
                                this.setSelectionData(newProp.text, oldProp.text, 'text');
                            }
                            else {
                                this.setOldText(oldProp.text);
                            }
                        }
                        this.updateInputFields();
                    }
                    break;
                case 'value':
                    if (newProp.value === null) {
                        this.clear();
                        break;
                    }
                    this.notify('beforeValueChange', { newProp: newProp }); // gird component value type change
                    if (!this.list) {
                        if (this.dataSource instanceof _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_5__["DataManager"]) {
                            this.initRemoteRender = true;
                        }
                        this.renderList();
                    }
                    if (!this.initRemoteRender) {
                        var item = this.getElementByValue(newProp.value);
                        if (!this.checkValidLi(item)) {
                            if (this.liCollections && this.liCollections.length === 100 &&
                                this.getModuleName() === 'autocomplete' && this.listData.length > 100) {
                                this.setSelectionData(newProp.value, oldProp.value, 'value');
                            }
                            else {
                                this.setOldValue(oldProp.value);
                            }
                        }
                        this.updateInputFields();
                    }
                    break;
                case 'index':
                    if (newProp.index === null) {
                        this.clear();
                        break;
                    }
                    if (!this.list) {
                        if (this.dataSource instanceof _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_5__["DataManager"]) {
                            this.initRemoteRender = true;
                        }
                        this.renderList();
                    }
                    if (!this.initRemoteRender) {
                        var element = this.liCollections[newProp.index];
                        if (!this.checkValidLi(element)) {
                            if (this.liCollections && this.liCollections.length === 100 &&
                                this.getModuleName() === 'autocomplete' && this.listData.length > 100) {
                                this.setSelectionData(newProp.index, oldProp.index, 'index');
                            }
                            else {
                                this.index = oldProp.index;
                            }
                        }
                        this.updateInputFields();
                    }
                    break;
                case 'footerTemplate':
                    if (this.popupObj) {
                        this.setFooterTemplate(this.popupObj.element);
                    }
                    break;
                case 'headerTemplate':
                    if (this.popupObj) {
                        this.setHeaderTemplate(this.popupObj.element);
                    }
                    break;
                case 'valueTemplate':
                    if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.itemData) && this.valueTemplate != null) {
                        this.setValueTemplate();
                    }
                    break;
                case 'allowFiltering':
                    if (this.allowFiltering) {
                        this.actionCompleteData = { ulElement: this.ulElement,
                            list: this.listData, isUpdated: true };
                        this.updateSelectElementData(this.allowFiltering);
                    }
                    break;
                case 'floatLabelType':
                    _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_2__["Input"].removeFloating(this.inputWrapper);
                    _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_2__["Input"].addFloating(this.inputElement, newProp.floatLabelType, this.placeholder, this.createElement);
                    break;
                case 'showClearButton':
                    _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_2__["Input"].setClearButton(newProp.showClearButton, this.inputElement, this.inputWrapper, null, this.createElement);
                    this.bindClearEvent();
                    break;
                default:
                    var ddlProps = void 0;
                    ddlProps = this.getPropObject(prop, newProp, oldProp);
                    _super.prototype.onPropertyChanged.call(this, ddlProps.newProperty, ddlProps.oldProperty);
                    break;
            }
        }
    };
    DropDownList.prototype.checkValidLi = function (element) {
        if (this.isValidLI(element)) {
            this.setSelection(element, null);
            return true;
        }
        return false;
    };
    DropDownList.prototype.setSelectionData = function (newProp, oldProp, prop) {
        var _this = this;
        var li;
        this.updateListValues = function () {
            if (prop === 'text') {
                li = _this.getElementByText(newProp);
                if (!_this.checkValidLi(li)) {
                    _this.setOldText(oldProp);
                }
            }
            else if (prop === 'value') {
                li = _this.getElementByValue(newProp);
                if (!_this.checkValidLi(li)) {
                    _this.setOldValue(oldProp);
                }
            }
            else if (prop === 'index') {
                li = _this.liCollections[newProp];
                if (!_this.checkValidLi(li)) {
                    _this.index = oldProp;
                }
            }
        };
    };
    DropDownList.prototype.setCssClass = function (newProp, oldProp) {
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(oldProp.cssClass) && oldProp.cssClass !== '') {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([this.inputWrapper.container], oldProp.cssClass.split(' '));
        }
        _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_2__["Input"].setCssClass(newProp.cssClass, [this.inputWrapper.container]);
        if (this.popupObj) {
            if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(oldProp.cssClass) && oldProp.cssClass !== '') {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([this.popupObj.element], oldProp.cssClass.split(' '));
            }
            if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(newProp.cssClass) && newProp.cssClass !== '') {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.popupObj.element], newProp.cssClass.split(' '));
            }
        }
    };
    /**
     * Return the module name.
     * @private
     */
    DropDownList.prototype.getModuleName = function () {
        return 'dropdownlist';
    };
    /**
     * Opens the popup that displays the list of items.
     * @returns void.
     */
    DropDownList.prototype.showPopup = function () {
        if (!this.enabled) {
            return;
        }
        if (this.beforePopupOpen) {
            this.refreshPopup();
            return;
        }
        this.beforePopupOpen = true;
        if (this.isFiltering() && !this.isActive && this.actionCompleteData.list && this.actionCompleteData.list[0]) {
            this.isActive = true;
            this.onActionComplete(this.actionCompleteData.ulElement, this.actionCompleteData.list, null, true);
        }
        else if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.list) || !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(this.list) && this.list.classList.contains(_drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_4__["dropDownBaseClasses"].noData)) {
            this.renderList();
        }
        if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice && this.isFilterLayout()) {
            var proxy_2 = this;
            window.onpopstate = function () {
                proxy_2.hidePopup();
            };
            history.pushState({}, '');
        }
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.list.children[0]) || this.list.classList.contains(_drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_4__["dropDownBaseClasses"].noData)) {
            this.renderPopup();
        }
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["attributes"])(this.targetElement(), { 'aria-activedescendant': this.selectedLI ? this.selectedLI.id : null });
    };
    /**
     * Hides the popup if it is in an open state.
     * @returns void.
     */
    DropDownList.prototype.hidePopup = function () {
        var isHeader = (this.headerTemplate) ? true : false;
        var isFooter = (this.headerTemplate) ? true : false;
        this.DropDownBaseresetBlazorTemplates(false, false, false, false, false, isHeader, isFooter);
        if (this.isEscapeKey && this.getModuleName() === 'dropdownlist') {
            _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_2__["Input"].setValue(this.text, this.inputElement, this.floatLabelType, this.showClearButton);
            this.isEscapeKey = false;
            if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.index)) {
                this.selectedLI = this.liCollections[this.index];
                this.updateSelectedItem(this.selectedLI, null, true);
                if (this.valueTemplate && this.itemData !== null) {
                    this.setValueTemplate();
                }
            }
            else {
                this.resetSelection();
            }
        }
        this.closePopup();
        var dataItem = this.getItemData();
        if (this.inputElement.value.trim() === '' && !this.isInteracted && (this.isSelectCustom ||
            !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.selectedLI) && this.inputElement.value !== dataItem.text)) {
            this.isSelectCustom = false;
            this.clear();
        }
    };
    /**
     * Sets the focus on the component for interaction.
     * @returns void.
     */
    DropDownList.prototype.focusIn = function (e) {
        if (!this.enabled) {
            return;
        }
        if (this.targetElement().classList.contains(dropDownListClasses.disable)) {
            return;
        }
        var isFocused = false;
        if (this.preventFocus && _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice) {
            this.inputWrapper.container.tabIndex = 1;
            this.inputWrapper.container.focus();
            this.preventFocus = false;
            isFocused = true;
        }
        if (!isFocused) {
            this.targetElement().focus();
        }
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.inputWrapper.container], [dropDownListClasses.inputFocus]);
        this.onFocus(e);
    };
    /**
     * Moves the focus from the component if the component is already focused.
     * @returns void.
     */
    DropDownList.prototype.focusOut = function () {
        if (!this.enabled) {
            return;
        }
        this.isTyped = true;
        this.hidePopup();
        this.targetElement().blur();
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([this.inputWrapper.container], [dropDownListClasses.inputFocus]);
    };
    /**
     * Removes the component from the DOM and detaches all its related event handlers. Also it removes the attributes and classes.
     * @method destroy
     * @return {void}.
     */
    DropDownList.prototype.destroy = function () {
        var _this = this;
        this.isActive = false;
        this.hidePopup();
        this.unWireEvent();
        if (this.list) {
            this.unWireListEvents();
        }
        if (this.element && !this.element.classList.contains('e-' + this.getModuleName())) {
            return;
        }
        var attrArray = ['readonly', 'aria-disabled', 'aria-placeholder',
            'placeholder', 'aria-owns', 'aria-labelledby', 'aria-haspopup', 'aria-expanded',
            'aria-activedescendant', 'autocomplete', 'aria-readonly', 'autocorrect',
            'autocapitalize', 'spellcheck', 'aria-autocomplete'];
        attrArray.forEach(function (value) {
            _this.inputElement.removeAttribute(value);
        });
        this.inputElement.setAttribute('tabindex', this.tabIndex);
        this.inputElement.classList.remove('e-input');
        _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_2__["Input"].setValue('', this.inputElement, this.floatLabelType, this.showClearButton);
        this.element.style.display = 'block';
        if (this.inputWrapper.container.parentElement.tagName === this.getNgDirective()) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.inputWrapper.container);
        }
        else {
            this.inputWrapper.container.parentElement.insertBefore(this.element, this.inputWrapper.container);
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.inputWrapper.container);
        }
        _super.prototype.destroy.call(this);
    };
    ;
    /**
     * Gets all the list items bound on this component.
     * @returns Element[].
     */
    DropDownList.prototype.getItems = function () {
        if (!this.list) {
            if (this.dataSource instanceof _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_5__["DataManager"]) {
                this.initRemoteRender = true;
            }
            this.renderList();
        }
        return this.ulElement ? _super.prototype.getItems.call(this) : [];
    };
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(null)
    ], DropDownList.prototype, "cssClass", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('100%')
    ], DropDownList.prototype, "width", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('300px')
    ], DropDownList.prototype, "popupHeight", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('100%')
    ], DropDownList.prototype, "popupWidth", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(null)
    ], DropDownList.prototype, "placeholder", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(null)
    ], DropDownList.prototype, "filterBarPlaceholder", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])({})
    ], DropDownList.prototype, "htmlAttributes", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(null)
    ], DropDownList.prototype, "query", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(null)
    ], DropDownList.prototype, "valueTemplate", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(null)
    ], DropDownList.prototype, "headerTemplate", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(null)
    ], DropDownList.prototype, "footerTemplate", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(false)
    ], DropDownList.prototype, "allowFiltering", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(false)
    ], DropDownList.prototype, "readonly", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(null)
    ], DropDownList.prototype, "text", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(null)
    ], DropDownList.prototype, "value", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(null)
    ], DropDownList.prototype, "index", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('Never')
    ], DropDownList.prototype, "floatLabelType", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(false)
    ], DropDownList.prototype, "showClearButton", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], DropDownList.prototype, "filtering", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], DropDownList.prototype, "change", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], DropDownList.prototype, "beforeOpen", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], DropDownList.prototype, "open", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], DropDownList.prototype, "close", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], DropDownList.prototype, "blur", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], DropDownList.prototype, "focus", void 0);
    DropDownList = __decorate([
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["NotifyPropertyChanges"]
    ], DropDownList);
    return DropDownList;
}(_drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_4__["DropDownBase"]));



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-dropdowns/src/drop-down-list/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-dropdowns/src/drop-down-list/index.js ***!
  \****************************************************************************/
/*! exports provided: dropDownListClasses, DropDownList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _drop_down_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drop-down-list */ "./node_modules/@syncfusion/ej2-dropdowns/src/drop-down-list/drop-down-list.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dropDownListClasses", function() { return _drop_down_list__WEBPACK_IMPORTED_MODULE_0__["dropDownListClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropDownList", function() { return _drop_down_list__WEBPACK_IMPORTED_MODULE_0__["DropDownList"]; });

/**
 * export all modules from current location
 */



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-dropdowns/src/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-dropdowns/src/index.js ***!
  \*************************************************************/
/*! exports provided: incrementalSearch, Search, highlightSearch, revertHighlightSearch, FieldSettings, dropDownBaseClasses, DropDownBase, dropDownListClasses, DropDownList, ComboBox, AutoComplete, MultiSelect, CheckBoxSelection, SelectionSettings, ToolbarSettings, ListBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/index */ "./node_modules/@syncfusion/ej2-dropdowns/src/common/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "incrementalSearch", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["incrementalSearch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["Search"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "highlightSearch", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["highlightSearch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "revertHighlightSearch", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["revertHighlightSearch"]; });

/* harmony import */ var _drop_down_base_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drop-down-base/index */ "./node_modules/@syncfusion/ej2-dropdowns/src/drop-down-base/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldSettings", function() { return _drop_down_base_index__WEBPACK_IMPORTED_MODULE_1__["FieldSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dropDownBaseClasses", function() { return _drop_down_base_index__WEBPACK_IMPORTED_MODULE_1__["dropDownBaseClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropDownBase", function() { return _drop_down_base_index__WEBPACK_IMPORTED_MODULE_1__["DropDownBase"]; });

/* harmony import */ var _drop_down_list_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop-down-list/index */ "./node_modules/@syncfusion/ej2-dropdowns/src/drop-down-list/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dropDownListClasses", function() { return _drop_down_list_index__WEBPACK_IMPORTED_MODULE_2__["dropDownListClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropDownList", function() { return _drop_down_list_index__WEBPACK_IMPORTED_MODULE_2__["DropDownList"]; });

/* harmony import */ var _combo_box_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./combo-box/index */ "./node_modules/@syncfusion/ej2-dropdowns/src/combo-box/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComboBox", function() { return _combo_box_index__WEBPACK_IMPORTED_MODULE_3__["ComboBox"]; });

/* harmony import */ var _auto_complete_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auto-complete/index */ "./node_modules/@syncfusion/ej2-dropdowns/src/auto-complete/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoComplete", function() { return _auto_complete_index__WEBPACK_IMPORTED_MODULE_4__["AutoComplete"]; });

/* harmony import */ var _multi_select_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./multi-select/index */ "./node_modules/@syncfusion/ej2-dropdowns/src/multi-select/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultiSelect", function() { return _multi_select_index__WEBPACK_IMPORTED_MODULE_5__["MultiSelect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckBoxSelection", function() { return _multi_select_index__WEBPACK_IMPORTED_MODULE_5__["CheckBoxSelection"]; });

/* harmony import */ var _list_box_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-box/index */ "./node_modules/@syncfusion/ej2-dropdowns/src/list-box/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionSettings", function() { return _list_box_index__WEBPACK_IMPORTED_MODULE_6__["SelectionSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolbarSettings", function() { return _list_box_index__WEBPACK_IMPORTED_MODULE_6__["ToolbarSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListBox", function() { return _list_box_index__WEBPACK_IMPORTED_MODULE_6__["ListBox"]; });

/**
 * export all modules from current location
 */









/***/ }),

/***/ "./node_modules/@syncfusion/ej2-dropdowns/src/list-box/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-dropdowns/src/list-box/index.js ***!
  \**********************************************************************/
/*! exports provided: SelectionSettings, ToolbarSettings, ListBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-box */ "./node_modules/@syncfusion/ej2-dropdowns/src/list-box/list-box.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionSettings", function() { return _list_box__WEBPACK_IMPORTED_MODULE_0__["SelectionSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolbarSettings", function() { return _list_box__WEBPACK_IMPORTED_MODULE_0__["ToolbarSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListBox", function() { return _list_box__WEBPACK_IMPORTED_MODULE_0__["ListBox"]; });

/**
 * export all modules from current location
 */



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-dropdowns/src/list-box/list-box.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-dropdowns/src/list-box/list-box.js ***!
  \*************************************************************************/
/*! exports provided: SelectionSettings, ToolbarSettings, ListBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionSettings", function() { return SelectionSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarSettings", function() { return ToolbarSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBox", function() { return ListBox; });
/* harmony import */ var _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-inputs */ "./node_modules/@syncfusion/ej2-inputs/index.js");
/* harmony import */ var _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drop-down-base/drop-down-base */ "./node_modules/@syncfusion/ej2-dropdowns/src/drop-down-base/drop-down-base.js");
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-base */ "./node_modules/@syncfusion/ej2-base/index.js");
/* harmony import */ var _syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-lists */ "./node_modules/@syncfusion/ej2-lists/index.js");
/* harmony import */ var _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-buttons */ "./node_modules/@syncfusion/ej2-buttons/index.js");
/* harmony import */ var _syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-popups */ "./node_modules/@syncfusion/ej2-popups/index.js");
/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @syncfusion/ej2-data */ "./node_modules/@syncfusion/ej2-data/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
/// <reference path='../drop-down-base/drop-down-base-model.d.ts'/>










var ITEMTEMPLATE_PROPERTY = 'ItemTemplate';
var SelectionSettings = /** @class */ (function (_super) {
    __extends(SelectionSettings, _super);
    function SelectionSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])('Multiple')
    ], SelectionSettings.prototype, "mode", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(false)
    ], SelectionSettings.prototype, "showCheckbox", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(false)
    ], SelectionSettings.prototype, "showSelectAll", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])('Left')
    ], SelectionSettings.prototype, "checkboxPosition", void 0);
    return SelectionSettings;
}(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["ChildProperty"]));

var ToolbarSettings = /** @class */ (function (_super) {
    __extends(ToolbarSettings, _super);
    function ToolbarSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])([])
    ], ToolbarSettings.prototype, "items", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])('Right')
    ], ToolbarSettings.prototype, "position", void 0);
    return ToolbarSettings;
}(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["ChildProperty"]));

/**
 * The ListBox is a graphical user interface component used to display a list of items.
 * Users can select one or more items in the list using a checkbox or by keyboard selection.
 * It supports sorting, grouping, reordering, and drag and drop of items.
 * ```html
 * <select id="listbox">
 *      <option value='1'>Badminton</option>
 *      <option value='2'>Basketball</option>
 *      <option value='3'>Cricket</option>
 *      <option value='4'>Football</option>
 *      <option value='5'>Tennis</option>
 * </select>
 * ```
 * ```typescript
 * <script>
 *   var listObj = new ListBox();
 *   listObj.appendTo("#listbox");
 * </script>
 * ```
 */
var ListBox = /** @class */ (function (_super) {
    __extends(ListBox, _super);
    /**
     * Constructor for creating the ListBox component.
     */
    function ListBox(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.isValidKey = false;
        _this.keyDownStatus = false;
        return _this;
    }
    /**
     * Adds a new item to the popup list. By default, new item appends to the list as the last item,
     * but you can insert based on the index parameter.
     * @param  { Object[] } items - Specifies an array of JSON data or a JSON data.
     * @param { number } itemIndex - Specifies the index to place the newly added item in the popup list.
     * @return {void}.
     * @private
     */
    ListBox.prototype.addItem = function (items, itemIndex) {
        _super.prototype.addItem.call(this, items, itemIndex);
    };
    ;
    /**
     * Build and render the component
     * @private
     */
    ListBox.prototype.render = function () {
        this.inputString = '';
        this.initLoad = true;
        this.isCustomFiltering = false;
        this.initialSelectedOptions = this.value;
        _super.prototype.render.call(this);
        this.renderComplete();
    };
    ListBox.prototype.initWrapper = function () {
        var hiddenSelect = this.createElement('select', { className: 'e-hidden-select', attrs: { 'multiple': '' } });
        this.list.classList.add('e-listbox-wrapper');
        if (this.itemTemplate) {
            this.list.classList.add('e-list-template');
        }
        this.list.classList.add('e-wrapper');
        if (this.element.tagName === 'EJS-LISTBOX') {
            this.element.setAttribute('tabindex', '0');
            if (this.initLoad) {
                this.element.appendChild(this.list);
            }
        }
        else {
            if (this.initLoad) {
                this.element.parentElement.insertBefore(this.list, this.element);
            }
            this.list.insertBefore(this.element, this.list.firstChild);
            this.element.style.display = 'none';
        }
        this.list.insertBefore(hiddenSelect, this.list.firstChild);
        if (this.list.getElementsByClassName(_syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["cssClass"].li)[0]) {
            this.list.getElementsByClassName(_syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["cssClass"].li)[0].classList.remove(_drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_1__["dropDownBaseClasses"].focus);
        }
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])([this.list], [_drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_1__["dropDownBaseClasses"].content, _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_1__["dropDownBaseClasses"].root]);
        this.validationAttribute(this.element, hiddenSelect);
        this.list.setAttribute('role', 'listbox');
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["attributes"])(this.list, { 'role': 'listbox', 'aria-multiselectable': this.selectionSettings.mode === 'Multiple' ? 'true' : 'false' });
        if (this.selectionSettings.showCheckbox && this.selectionSettings.showSelectAll && this.liCollections.length) {
            var l10nSelect = new _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["L10n"](this.getModuleName(), { selectAllText: 'Select All', unSelectAllText: 'Unselect All' }, this.locale);
            this.showSelectAll = true;
            this.selectAllText = l10nSelect.getConstant('selectAllText');
            this.unSelectAllText = l10nSelect.getConstant('unSelectAllText');
            this.popupWrapper = this.list;
            this.checkBoxSelectionModule.checkAllParent = null;
            this.notify('selectAll', {});
        }
    };
    ListBox.prototype.initDraggable = function () {
        var _this = this;
        if (this.allowDragAndDrop) {
            new _syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["Sortable"](this.ulElement, {
                scope: this.scope,
                itemClass: _syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["cssClass"].li,
                dragStart: this.triggerDragStart.bind(this),
                drag: this.triggerDrag.bind(this),
                drop: this.dragEnd.bind(this),
                placeHolder: function () { return _this.createElement('span', { className: 'e-placeholder' }); },
                helper: function (e) {
                    var ele = e.sender.cloneNode(true);
                    ele.style.width = _this.getItems()[0].offsetWidth + 'px';
                    if ((_this.value && _this.value.length) > 1 && _this.isSelected(ele)) {
                        ele.appendChild(_this.createElement('span', {
                            className: 'e-list-badge', innerHTML: _this.value.length + ''
                        }));
                    }
                    return ele;
                }
            });
        }
    };
    ListBox.prototype.initToolbar = function () {
        var scope;
        var pos = this.toolbarSettings.position;
        if (this.toolbarSettings.items.length) {
            var toolElem = this.createElement('div', { className: 'e-listbox-tool', attrs: { 'role': 'toolbar' } });
            var wrapper = this.createElement('div', {
                className: 'e-listboxtool-wrapper e-' + pos.toLowerCase()
            });
            this.list.parentElement.insertBefore(wrapper, this.list);
            wrapper.appendChild(pos === 'Right' ? this.list : toolElem);
            wrapper.appendChild(pos === 'Right' ? toolElem : this.list);
            this.createButtons(toolElem);
            if (!this.element.id) {
                this.element.id = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["getUniqueID"])('e-' + this.getModuleName());
            }
            if (this.scope) {
                document.querySelector(this.scope).setAttribute('data-value', this.element.id);
            }
            else {
                this.updateToolBarState();
            }
        }
        scope = this.element.getAttribute('data-value');
        if (scope) {
            this.tBListBox = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["getComponent"])(document.getElementById(scope), this.getModuleName());
            this.tBListBox.updateToolBarState();
        }
    };
    ListBox.prototype.createButtons = function (toolElem) {
        var _this = this;
        var btn;
        var ele;
        var title;
        var l10n = new _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["L10n"](this.getModuleName(), {
            moveUp: 'Move Up', moveDown: 'Move Down', moveTo: 'Move To',
            moveFrom: 'Move From', moveAllTo: 'Move All To', moveAllFrom: 'Move All From'
        }, this.locale);
        this.toolbarSettings.items.forEach(function (value) {
            title = l10n.getConstant(value);
            ele = _this.createElement('button', {
                attrs: {
                    'type': 'button',
                    'data-value': value,
                    'title': title,
                    'aria-label': title
                }
            });
            toolElem.appendChild(ele);
            btn = new _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_4__["Button"]({ iconCss: 'e-icons e-' + value.toLowerCase() }, ele);
            btn.createElement = _this.createElement;
        });
    };
    ListBox.prototype.validationAttribute = function (input, hiddenSelect) {
        _super.prototype.validationAttribute.call(this, input, hiddenSelect);
        hiddenSelect.required = input.required;
        input.required = false;
    };
    ListBox.prototype.setHeight = function () {
        var ele = this.toolbarSettings.items.length ? this.list.parentElement : this.list;
        ele.style.height = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["formatUnit"])(this.height);
    };
    ListBox.prototype.setCssClass = function () {
        var wrap = this.toolbarSettings.items.length ? this.list.parentElement : this.list;
        if (this.cssClass) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([wrap], this.cssClass.split(' '));
        }
        if (this.enableRtl) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([wrap], 'e-rtl');
        }
    };
    ListBox.prototype.setEnable = function () {
        var ele = this.toolbarSettings.items.length ? this.list.parentElement : this.list;
        if (this.enabled) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])([ele], _syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["cssClass"].disabled);
        }
        else {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([ele], _syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["cssClass"].disabled);
        }
    };
    ListBox.prototype.showSpinner = function () {
        if (!this.spinner) {
            this.spinner = this.createElement('div', { className: 'e-listbox-wrapper', styles: 'height:' + Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["formatUnit"])(this.height) });
        }
        this.element.parentElement.insertBefore(this.spinner, this.element.nextSibling);
        Object(_syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_5__["createSpinner"])({ target: this.spinner }, this.createElement);
        Object(_syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_5__["showSpinner"])(this.spinner);
    };
    ListBox.prototype.hideSpinner = function () {
        if (this.spinner.querySelector('.e-spinner-pane')) {
            Object(_syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_5__["hideSpinner"])(this.spinner);
        }
        if (this.spinner.parentElement) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["detach"])(this.spinner);
        }
    };
    ListBox.prototype.onInput = function () {
        if (this.keyDownStatus) {
            this.isValidKey = true;
        }
        else {
            this.isValidKey = false;
        }
        this.keyDownStatus = false;
    };
    ListBox.prototype.onActionComplete = function (ulElement, list, e) {
        var searchEle;
        if (this.allowFiltering) {
            searchEle = this.list.getElementsByClassName('e-filter-parent')[0];
        }
        _super.prototype.onActionComplete.call(this, ulElement, list, e);
        if (this.allowFiltering && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(searchEle)) {
            this.list.insertBefore(searchEle, this.list.firstElementChild);
        }
        this.initWrapper();
        this.setSelection();
        this.initDraggable();
        this.mainList = this.ulElement;
        if (this.initLoad) {
            this.initToolbarAndStyles();
            this.wireEvents();
            if (this.showCheckbox) {
                this.setCheckboxPosition();
            }
            if (this.allowFiltering) {
                this.setFiltering();
            }
        }
        else {
            if (this.allowFiltering) {
                this.list.getElementsByClassName('e-input-filter')[0].focus();
            }
        }
        this.initLoad = false;
    };
    ListBox.prototype.initToolbarAndStyles = function () {
        this.initToolbar();
        this.setCssClass();
        this.setEnable();
        this.setHeight();
    };
    ListBox.prototype.triggerDragStart = function (args) {
        var _this = this;
        var badge;
        args = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["extend"])(this.getDragArgs(args), { dragSelected: true });
        if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Browser"].isIos) {
            this.list.style.overflow = 'hidden';
        }
        this.trigger('dragStart', args, function (dragEventArgs) {
            _this.allowDragAll = dragEventArgs.dragSelected;
            if (!_this.allowDragAll) {
                badge = _this.ulElement.getElementsByClassName('e-list-badge')[0];
                if (badge) {
                    Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["detach"])(badge);
                }
            }
            if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isBlazor"])()) {
                args.bindEvents(args.dragElement);
            }
        });
    };
    ListBox.prototype.triggerDrag = function (args) {
        this.trigger('drag', this.getDragArgs(args));
        var listObj = this.getComponent(args.target);
        if (listObj && listObj.listData.length === 0) {
            listObj.ulElement.innerHTML = '';
        }
    };
    ListBox.prototype.dragEnd = function (args) {
        var _this = this;
        var listData;
        var selectedOptions;
        var dropValue = this.getFormattedValue(args.droppedElement.getAttribute('data-value'));
        var droppedData;
        var listObj = this.getComponent(args.droppedElement);
        var getArgs = this.getDragArgs({ target: args.droppedElement }, true);
        var sourceArgs = { previousData: this.dataSource };
        var destArgs = { previousData: listObj.dataSource };
        var dragArgs = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, getArgs, { target: args.target, source: { previousData: this.dataSource } });
        if (listObj !== this) {
            var sourceArgs1 = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["extend"])(sourceArgs, { currentData: this.listData });
            dragArgs = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["extend"])(dragArgs, { source: sourceArgs1, destination: destArgs });
        }
        if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Browser"].isIos) {
            this.list.style.overflow = '';
        }
        if (listObj === this) {
            var ul_1 = this.ulElement;
            listData = [].slice.call(this.listData);
            var toIdx_1 = args.currentIndex = this.getCurIdx(this, args.currentIndex);
            listData.splice(toIdx_1, 0, listData.splice(listData.indexOf(this.getDataByValue(dropValue)), 1)[0]);
            if (this.allowDragAll) {
                selectedOptions = this.value && Array.prototype.indexOf.call(this.value, dropValue) > -1 ? this.value : [dropValue];
                selectedOptions.forEach(function (value) {
                    if (value !== dropValue) {
                        var idx = listData.indexOf(_this.getDataByValue(value));
                        if (idx > toIdx_1) {
                            toIdx_1++;
                        }
                        listData.splice(toIdx_1, 0, listData.splice(idx, 1)[0]);
                        ul_1.insertBefore(_this.getItems()[_this.getIndexByValue(value)], ul_1.getElementsByClassName('e-placeholder')[0]);
                    }
                });
            }
            this.listData = listData;
            this.setProperties({ dataSource: listData }, true);
        }
        else {
            var li_1;
            var currIdx_1 = args.currentIndex = this.getCurIdx(listObj, args.currentIndex);
            var ul_2 = listObj.ulElement;
            listData = [].slice.call(listObj.listData);
            selectedOptions = (this.value && Array.prototype.indexOf.call(this.value, dropValue) > -1 && this.allowDragAll)
                ? this.value : [dropValue];
            selectedOptions.forEach(function (value) {
                droppedData = _this.getDataByValue(value);
                _this.listData.splice(_this.listData.indexOf(droppedData), 1);
                listData.splice(value === dropValue ? args.currentIndex : currIdx_1, 0, droppedData);
                li_1 = _this.getItems()[_this.getIndexByValue(value)];
                _this.removeSelected(_this, value === dropValue ? [args.droppedElement] : [li_1]);
                ul_2.insertBefore(li_1, ul_2.getElementsByClassName('e-placeholder')[0]);
                currIdx_1++;
            });
            this.updateSelectedOptions();
            if (this.fields.groupBy) {
                this.ulElement.innerHTML = this.renderItems(this.listData, this.fields).innerHTML;
                this.setSelection();
            }
            if (listObj.sortOrder !== 'None' || this.selectionSettings.showCheckbox
                !== listObj.selectionSettings.showCheckbox || listObj.fields.groupBy) {
                var sortabale = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["getComponent"])(ul_2, 'sortable');
                ul_2.innerHTML = listObj.renderItems(listData, listObj.fields).innerHTML;
                ul_2.appendChild(sortabale.placeHolderElement);
                ul_2.appendChild(args.helper);
                listObj.setSelection();
            }
            var fromList = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["extend"])([], [], this.listData, false);
            this.setProperties({ dataSource: fromList }, true);
            listObj.listData = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["extend"])([], [], listData, false);
            listObj.setProperties({ dataSource: listData }, true);
            if (this.listData.length === 0) {
                this.l10nUpdate();
            }
        }
        if (this === listObj) {
            var sourceArgs1 = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["extend"])(sourceArgs, { currentData: listData });
            dragArgs = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["extend"])(dragArgs, { source: sourceArgs1 });
        }
        else {
            var dragArgs1 = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["extend"])(destArgs, { currentData: listData });
            dragArgs = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["extend"])(dragArgs, { destination: dragArgs1 });
        }
        this.trigger('drop', dragArgs);
    };
    ListBox.prototype.removeSelected = function (listObj, elems) {
        if (listObj.selectionSettings.showCheckbox) {
            elems.forEach(function (ele) { ele.getElementsByClassName('e-frame')[0].classList.remove('e-check'); });
        }
        else {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(elems, _syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["cssClass"].selected);
        }
    };
    ListBox.prototype.getCurIdx = function (listObj, idx) {
        if (listObj.fields.groupBy) {
            idx -= [].slice.call(listObj.ulElement.children).slice(0, idx)
                .filter(function (ele) { return ele.classList.contains(_syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["cssClass"].group); }).length;
        }
        return idx;
    };
    ListBox.prototype.getComponent = function (li) {
        var listObj;
        var ele = (this.element.tagName === 'EJS-LISTBOX' ? Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["closest"])(li, '.e-listbox')
            : Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["closest"])(li, '.e-listbox-wrapper') && Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["closest"])(li, '.e-listbox-wrapper').querySelector('.e-listbox'));
        if (ele) {
            listObj = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["getComponent"])(ele, this.getModuleName());
        }
        return listObj;
    };
    ListBox.prototype.listOption = function (dataSource, fields) {
        this.listCurrentOptions = _super.prototype.listOption.call(this, dataSource, fields);
        this.listCurrentOptions = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, this.listCurrentOptions, { itemCreated: this.triggerBeforeItemRender.bind(this) }, true);
        this.notify('listoption', { module: 'CheckBoxSelection' });
        return this.listCurrentOptions;
    };
    ListBox.prototype.triggerBeforeItemRender = function (e) {
        e.item.setAttribute('tabindex', '-1');
        this.trigger('beforeItemRender', { element: e.item, item: e.curData });
    };
    ListBox.prototype.requiredModules = function () {
        var modules = [];
        if (this.selectionSettings.showCheckbox) {
            modules.push({
                member: 'CheckBoxSelection',
                args: [this]
            });
        }
        return modules;
    };
    /**
     * This method is used to enable or disable the items in the ListBox based on the items and enable argument.
     * @param items Text items that needs to be enabled/disabled.
     * @param enable Set `true`/`false` to enable/disable the list items.
     * @returns void
     */
    ListBox.prototype.enableItems = function (items, enable) {
        var _this = this;
        if (enable === void 0) { enable = true; }
        var li;
        items.forEach(function (item) {
            li = _this.findListElement(_this.list, 'li', 'data-value', _this.getValueByText(item));
            if (enable) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])([li], _syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["cssClass"].disabled);
                li.removeAttribute('aria-disabled');
            }
            else {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([li], _syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["cssClass"].disabled);
                li.setAttribute('aria-disabled', 'true');
            }
        });
    };
    /**
     * Based on the state parameter, specified list item will be selected/deselected.
     * @param items Array of text value of the item.
     * @param state Set `true`/`false` to select/un select the list items.
     * @returns void
     */
    ListBox.prototype.selectItems = function (items, state) {
        if (state === void 0) { state = true; }
        this.setSelection(items, state, true);
        this.updateSelectedOptions();
    };
    /**
     * Based on the state parameter, entire list item will be selected/deselected.
     * @param state Set `true`/`false` to select/un select the entire list items.
     * @returns void
     */
    ListBox.prototype.selectAll = function (state) {
        if (state === void 0) { state = true; }
        this.selectAllItems(state);
    };
    /**
     * Adds a new item to the list. By default, new item appends to the list as the last item,
     * but you can insert based on the index parameter.
     * @param  { Object[] } items - Specifies an array of JSON data or a JSON data.
     * @param { number } itemIndex - Specifies the index to place the newly added item in the list.
     * @returns {void}.
     */
    ListBox.prototype.addItems = function (items, itemIndex) {
        _super.prototype.addItem.call(this, items, itemIndex);
    };
    /**
     * Removes a item from the list. By default, removed the last item in the list,
     * but you can remove based on the index parameter.
     * @param  { Object[] } items - Specifies an array of JSON data or a JSON data.
     * @param { number } itemIndex - Specifies the index to remove the item from the list.
     * @returns {void}.
     */
    ListBox.prototype.removeItems = function (items, itemIndex) {
        this.removeItem(items, itemIndex);
    };
    /**
     * Removes a item from the list. By default, removed the last item in the list,
     * but you can remove based on the index parameter.
     * @param  { Object[] } items - Specifies an array of JSON data or a JSON data.
     * @param { number } itemIndex - Specifies the index to remove the item from the list.
     * @returns {void}.
     */
    ListBox.prototype.removeItem = function (items, itemIndex) {
        var liCollections = [];
        var liElement = this.list.querySelectorAll('.' + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_1__["dropDownBaseClasses"].li);
        if (items) {
            items = (items instanceof Array ? items : [items]);
            var fields = this.fields;
            var dataValue = void 0;
            var objValue = void 0;
            var dupData = [];
            var itemIdx = void 0;
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["extend"])(dupData, [], this.listData);
            for (var j = 0; j < items.length; j++) {
                if (items[j] instanceof Object) {
                    dataValue = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["getValue"])(fields.value, items[j]);
                }
                else {
                    dataValue = items[j].toString();
                }
                for (var i = 0, len = dupData.length; i < len; i++) {
                    if (dupData[i] instanceof Object) {
                        objValue = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["getValue"])(fields.value, dupData[i]);
                    }
                    else {
                        objValue = dupData[i].toString();
                    }
                    if (objValue === dataValue) {
                        itemIdx = this.getIndexByValue(dataValue);
                        liCollections.push(liElement[itemIdx]);
                        this.listData.splice(i, 1);
                        this.updateLiCollection(itemIdx);
                    }
                }
            }
        }
        else {
            itemIndex = itemIndex ? itemIndex : 0;
            liCollections.push(liElement[itemIndex]);
            this.listData.splice(itemIndex, 1);
            this.updateLiCollection(itemIndex);
        }
        for (var i = 0; i < liCollections.length; i++) {
            this.ulElement.removeChild(liCollections[i]);
        }
    };
    ListBox.prototype.updateLiCollection = function (index) {
        var tempLi = [].slice.call(this.liCollections);
        tempLi.splice(index, 1);
        this.liCollections = tempLi;
    };
    ListBox.prototype.selectAllItems = function (state, event) {
        var _this = this;
        [].slice.call(this.getItems()).forEach(function (li) {
            if (!li.classList.contains(_syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["cssClass"].disabled)) {
                if (_this.selectionSettings.showCheckbox) {
                    var ele = li.getElementsByClassName('e-check')[0];
                    if ((!ele && state) || (ele && !state)) {
                        _this.notify('updatelist', { li: li });
                        if (_this.maximumSelectionLength >= _this.list.querySelectorAll('.e-list-item span.e-check').length) {
                            _this.checkMaxSelection();
                        }
                    }
                }
                else {
                    if (state) {
                        li.classList.add(_syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["cssClass"].selected);
                    }
                    else {
                        li.classList.remove(_syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["cssClass"].selected);
                    }
                }
            }
        });
        this.updateSelectedOptions();
        if (this.allowFiltering && this.selectionSettings.showCheckbox) {
            var liEle = this.list.getElementsByTagName('li');
            var index = 0;
            if (state) {
                var _loop_1 = function () {
                    var dataValue1 = this_1.getFormattedValue(liEle[index].getAttribute('data-value'));
                    if (!this_1.value.some(function (e) { return e === dataValue1; })) {
                        this_1.value.push(this_1.getFormattedValue(liEle[index].getAttribute('data-value')));
                    }
                };
                var this_1 = this;
                for (index = 0; index < liEle.length; index++) {
                    _loop_1();
                }
            }
            else {
                var _loop_2 = function () {
                    var dataValue2 = this_2.getFormattedValue(liEle[index].getAttribute('data-value'));
                    this_2.value = this_2.value.filter(function (e) { return e !== dataValue2; });
                };
                var this_2 = this;
                for (index = 0; index < liEle.length; index++) {
                    _loop_2();
                }
            }
            if (document.querySelectorAll('ul').length < 2) {
                this.updateMainList();
            }
        }
        this.triggerChange(this.getSelectedItems(), event);
    };
    ListBox.prototype.updateMainList = function () {
        var mainCount = this.mainList.querySelectorAll('.e-list-item').length;
        var ulEleCount = this.ulElement.querySelectorAll('.e-list-item').length;
        if (this.selectionSettings.showCheckbox || (document.querySelectorAll('ul').length > 1 || mainCount !== ulEleCount)) {
            var listindex = 0;
            var valueindex = 0;
            var count = 0;
            for (listindex; listindex < this.mainList.querySelectorAll('.e-list-item').length;) {
                if (this.value) {
                    for (valueindex; valueindex < this.value.length; valueindex++) {
                        if (this.mainList.querySelectorAll('.e-list-item')[listindex].getAttribute('data-value') === this.value[valueindex]) {
                            count++;
                        }
                    }
                }
                if (!count && this.selectionSettings.showCheckbox) {
                    this.mainList.querySelectorAll('.e-list-item')[listindex].getElementsByClassName('e-frame')[0].classList.remove('e-check');
                }
                if (document.querySelectorAll('ul').length > 1 && count && mainCount !== ulEleCount) {
                    this.mainList.removeChild(this.mainList.getElementsByTagName('li')[listindex]);
                    listindex = 0;
                }
                else {
                    listindex++;
                }
                count = 0;
                valueindex = 0;
            }
        }
    };
    ListBox.prototype.wireEvents = function () {
        var form = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["closest"])(this.element, 'form');
        var wrapper = this.element.tagName === 'EJS-LISTBOX' ? this.element : this.list;
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(this.list, 'click', this.clickHandler, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(wrapper, 'keydown', this.keyDownHandler, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(wrapper, 'focusout', this.focusOutHandler, this);
        this.wireToolbarEvent();
        if (this.selectionSettings.showCheckbox) {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].remove(document, 'mousedown', this.checkBoxSelectionModule.onDocumentClick);
        }
        if (this.fields.groupBy || this.element.querySelector('select>optgroup')) {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].remove(this.list, 'scroll', this.setFloatingHeader);
        }
        if (form) {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(form, 'reset', this.formResetHandler, this);
        }
    };
    ListBox.prototype.wireToolbarEvent = function () {
        if (this.toolbarSettings.items.length) {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(this.getToolElem(), 'click', this.toolbarClickHandler, this);
        }
    };
    ListBox.prototype.unwireEvents = function () {
        var form = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["closest"])(this.element, 'form');
        var wrapper = this.element.tagName === 'EJS-LISTBOX' ? this.element : this.list;
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].remove(this.list, 'click', this.clickHandler);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].remove(wrapper, 'keydown', this.keyDownHandler);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].remove(wrapper, 'focusout', this.focusOutHandler);
        if (this.toolbarSettings.items.length) {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].remove(this.getToolElem(), 'click', this.toolbarClickHandler);
        }
        if (form) {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].remove(form, 'reset', this.formResetHandler);
        }
    };
    ListBox.prototype.clickHandler = function (e) {
        this.selectHandler(e);
    };
    ;
    ListBox.prototype.checkSelectAll = function () {
        var searchCount = this.list.querySelectorAll('li.' + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_1__["dropDownBaseClasses"].li).length;
        var len = this.getSelectedItems().length;
        if (this.showSelectAll && searchCount) {
            this.notify('checkSelectAll', { module: 'CheckBoxSelection', value: (searchCount === len) ? 'check' : 'uncheck' });
        }
    };
    ListBox.prototype.getQuery = function (query) {
        var filterQuery = query ? query.clone() : this.query ? this.query.clone() : new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_6__["Query"]();
        if (this.allowFiltering) {
            var filterType = this.inputString === '' ? 'contains' : this.filterType;
            var dataType = this.typeOfData(this.dataSource).typeof;
            if (!(this.dataSource instanceof _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_6__["DataManager"]) && dataType === 'string' || dataType === 'number') {
                filterQuery.where('', filterType, this.inputString, this.ignoreCase, this.ignoreAccent);
            }
            else {
                var fields = (this.fields.text) ? this.fields.text : '';
                filterQuery.where(fields, filterType, this.inputString, this.ignoreCase, this.ignoreAccent);
            }
        }
        else {
            filterQuery = query ? query : this.query ? this.query : new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_6__["Query"]();
        }
        return filterQuery;
    };
    ListBox.prototype.setFiltering = function () {
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.filterParent)) {
            this.filterParent = this.createElement('span', {
                className: 'e-filter-parent'
            });
            this.filterInput = this.createElement('input', {
                attrs: { type: 'text' },
                className: 'e-input-filter'
            });
            this.element.parentNode.insertBefore(this.filterInput, this.element);
            var filterInputObj = _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_0__["Input"].createInput({
                element: this.filterInput
            }, this.createElement);
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["append"])([filterInputObj.container], this.filterParent);
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["prepend"])([this.filterParent], this.list);
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["attributes"])(this.filterInput, {
                'aria-disabled': 'false',
                'aria-owns': this.element.id + '_options',
                'role': 'listbox',
                'aria-activedescendant': null,
                'autocomplete': 'off',
                'autocorrect': 'off',
                'autocapitalize': 'off',
                'spellcheck': 'false'
            });
            this.inputString = this.filterInput.value;
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(this.filterInput, 'input', this.onInput, this);
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(this.filterInput, 'keyup', this.KeyUp, this);
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(this.filterInput, 'keydown', this.onKeyDown, this);
            return filterInputObj;
        }
    };
    ListBox.prototype.selectHandler = function (e, isKey) {
        var isSelect = true;
        var currSelIdx;
        var li = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["closest"])(e.target, '.' + _syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["cssClass"].li);
        var selectedLi = [li];
        if (li) {
            currSelIdx = [].slice.call(li.parentElement.children).indexOf(li);
            if (!this.selectionSettings.showCheckbox) {
                if ((e.ctrlKey || _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Browser"].isDevice) && this.isSelected(li)) {
                    li.classList.remove(_syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["cssClass"].selected);
                    li.removeAttribute('aria-selected');
                    isSelect = false;
                }
                else if (!(this.selectionSettings.mode === 'Multiple' && (e.ctrlKey || _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Browser"].isDevice))) {
                    this.getSelectedItems().forEach(function (ele) {
                        ele.removeAttribute('aria-selected');
                    });
                    Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(this.getSelectedItems(), _syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["cssClass"].selected);
                }
            }
            else {
                isSelect = !li.getElementsByClassName('e-frame')[0].classList.contains('e-check');
            }
            if (e.shiftKey && !this.selectionSettings.showCheckbox && this.selectionSettings.mode !== 'Single') {
                selectedLi = [].slice.call(li.parentElement.children)
                    .slice(Math.min(currSelIdx, this.prevSelIdx), Math.max(currSelIdx, this.prevSelIdx) + 1)
                    .filter(function (ele) { return ele.classList.contains(_syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["cssClass"].li); });
            }
            else {
                this.prevSelIdx = [].slice.call(li.parentElement.children).indexOf(li);
            }
            if (isSelect) {
                if (!this.selectionSettings.showCheckbox) {
                    Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])(selectedLi, _syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["cssClass"].selected);
                }
                selectedLi.forEach(function (ele) {
                    ele.setAttribute('aria-selected', 'true');
                });
                this.list.setAttribute('aria-activedescendant', li.id);
            }
            if (!isKey && (this.maximumSelectionLength > (this.value && this.value.length) || !isSelect) &&
                (this.maximumSelectionLength >= (this.value && this.value.length) || !isSelect) &&
                !(this.maximumSelectionLength < (this.value && this.value.length))) {
                this.notify('updatelist', { li: li, e: e });
            }
            if (this.allowFiltering && !isKey) {
                var liDataValue_1 = this.getFormattedValue(li.getAttribute('data-value'));
                if (!isSelect) {
                    this.value = this.value.filter(function (value1) {
                        return value1 !== liDataValue_1;
                    });
                }
                else {
                    this.value.push(liDataValue_1);
                }
                if (document.querySelectorAll('ul').length < 2) {
                    this.updateMainList();
                }
            }
            this.updateSelectedOptions();
            this.triggerChange(this.getSelectedItems(), e);
            this.checkMaxSelection();
        }
    };
    ListBox.prototype.triggerChange = function (selectedLis, event) {
        this.trigger('change', { elements: selectedLis, items: this.getDataByElems(selectedLis), value: this.value, event: event });
    };
    ListBox.prototype.getDataByElems = function (elems) {
        var _this = this;
        var data = [];
        elems.forEach(function (ele) {
            data.push(_this.getDataByValue(_this.getFormattedValue(ele.getAttribute('data-value'))));
        });
        return data;
    };
    ListBox.prototype.checkMaxSelection = function () {
        var limit = this.list.querySelectorAll('.e-list-item span.e-check').length;
        if (this.selectionSettings.showCheckbox) {
            var index = 0;
            var liCollElem = void 0;
            liCollElem = this.list.getElementsByClassName('e-list-item');
            for (index; index < liCollElem.length; index++) {
                if (!liCollElem[index].querySelector('.e-frame.e-check')) {
                    if (limit === this.maximumSelectionLength) {
                        liCollElem[index].classList.add('e-disable');
                    }
                    else if (liCollElem[index].classList.contains('e-disable')) {
                        liCollElem[index].classList.remove('e-disable');
                    }
                }
            }
        }
    };
    ListBox.prototype.toolbarClickHandler = function (e) {
        var btn = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["closest"])(e.target, 'button');
        if (btn) {
            switch (btn.getAttribute('data-value')) {
                case 'moveUp':
                    this.moveUpDown(true);
                    break;
                case 'moveDown':
                    this.moveUpDown();
                    break;
                case 'moveTo':
                    this.moveTo();
                    break;
                case 'moveFrom':
                    this.moveFrom();
                    break;
                case 'moveAllTo':
                    this.moveAllTo();
                    break;
                case 'moveAllFrom':
                    this.moveAllFrom();
                    break;
            }
        }
    };
    ListBox.prototype.moveUpDown = function (isUp, isKey) {
        var _this = this;
        var elems = this.getSelectedItems();
        if ((isUp && this.isSelected(this.ulElement.firstElementChild))
            || (!isUp && this.isSelected(this.ulElement.lastElementChild))) {
            return;
        }
        (isUp ? elems : elems.reverse()).forEach(function (ele) {
            var idx = Array.prototype.indexOf.call(_this.ulElement.children, ele);
            Object(_syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["moveTo"])(_this.ulElement, _this.ulElement, [idx], isUp ? idx - 1 : idx + 2);
            _this.changeData(idx, isUp ? idx - 1 : idx + 1);
        });
        elems[0].focus();
        if (!isKey && this.toolbarSettings.items.length) {
            this.getToolElem().querySelector('[data-value=' + (isUp ? 'moveUp' : 'moveDown') + ']').focus();
        }
        this.updateToolBarState();
    };
    ListBox.prototype.moveTo = function () {
        this.moveData(this, this.getScopedListBox());
    };
    ListBox.prototype.moveFrom = function () {
        this.moveData(this.getScopedListBox(), this);
    };
    /**
     * Called internally if any of the property value changed.
     * @returns void
     * @private
     */
    // tslint:disable-next-line:max-func-body-length
    ListBox.prototype.moveData = function (fListBox, tListBox, isKey) {
        var count = 0;
        var idx = [];
        var dupIdx = [];
        var dataIdx = [];
        var listData = [].slice.call(fListBox.listData);
        var tListData = [].slice.call(tListBox.listData);
        var data = [];
        var elems = fListBox.getSelectedItems();
        var isRefresh = tListBox.sortOrder !== 'None' ||
            (tListBox.selectionSettings.showCheckbox !== fListBox.selectionSettings.showCheckbox) || tListBox.fields.groupBy;
        if (fListBox.getSelectedItems().length !== fListBox.value.length) {
            var index = 0;
            fListBox.value = [];
            for (index; index < fListBox.getSelectedItems().length; index++) {
                fListBox.value[index] = fListBox.getSelectedItems()[index].getAttribute('data-value');
            }
        }
        if (elems.length) {
            this.removeSelected(fListBox, elems);
            if (fListBox.allowFiltering) {
                fListBox.sortedData = fListBox.dataSource;
            }
            elems.forEach(function (ele, i) {
                idx.push(Array.prototype.indexOf.call(fListBox.ulElement.children, ele));
                dupIdx.push(Array.prototype.indexOf.call(fListBox.ulElement.querySelectorAll('.e-list-item'), ele));
                dataIdx.push(Array.prototype.indexOf.call(listData, fListBox.sortedData[idx[i]]));
            });
            if (tListBox.listData.length === 0) {
                tListBox.ulElement.innerHTML = '';
            }
            dataIdx.sort().reverse().forEach(function (i) {
                listData.splice(i, 1)[0];
            });
            idx.slice().reverse().forEach(function (i) {
                if (fListBox.mainList.childElementCount === fListBox.ulElement.childElementCount) {
                    data.push(fListBox.sortedData.splice(i, 1)[0]);
                }
                else {
                    fListBox.sortedData = fListBox.sortedData.filter(function (value1) {
                        return !(value1.Country === fListBox.ulElement.getElementsByTagName('li')[i].getAttribute('data-value'));
                    });
                    if (count === 0) {
                        var i_1;
                        var j_1;
                        for (i_1 = 0; i_1 < fListBox.sortedData.length; i_1++) {
                            for (j_1 = 0; j_1 < fListBox.value.length; j_1++) {
                                if (fListBox.sortedData[i_1].text === fListBox.value[j_1]) {
                                    tListBox.dataSource.push(fListBox.sortedData[i_1]);
                                    fListBox.sortedData = fListBox.sortedData.filter(function (value1) {
                                        return !(value1.text === fListBox.value[j_1]);
                                    });
                                }
                            }
                        }
                        count++;
                    }
                }
                fListBox.setProperties({ dataSource: fListBox.sortedData }, true);
                tListBox.setProperties({ dataSource: tListBox.sortedData }, true);
            });
            if (tListBox.sortedData.length !== tListBox.dataSource.length) {
                tListBox.setProperties({ sortedData: tListBox.dataSource }, true);
                tListData = tListBox.dataSource;
            }
            if (isRefresh) {
                if (fListBox.fields.groupBy) {
                    fListBox.ulElement.innerHTML = fListBox.renderItems(listData, fListBox.fields).innerHTML;
                }
                else {
                    elems.forEach(function (ele) { Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["detach"])(ele); });
                }
            }
            else {
                Object(_syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["moveTo"])(fListBox.ulElement, tListBox.ulElement, idx);
            }
            if (tListBox.mainList.childElementCount !== tListBox.dataSource.length) {
                tListBox.mainList = tListBox.ulElement;
            }
            fListBox.updateMainList();
            var childCnt = fListBox.ulElement.querySelectorAll('.e-list-item').length;
            var ele = void 0;
            var liIdx = void 0;
            if (elems.length === 1 && childCnt && !fListBox.selectionSettings.showCheckbox) {
                liIdx = childCnt <= dupIdx[0] ? childCnt - 1 : dupIdx[0];
                ele = fListBox.ulElement.querySelectorAll('.e-list-item')[liIdx];
                fListBox.ulElement.querySelectorAll('.e-list-item')[fListBox.getValidIndex(ele, liIdx, childCnt === dupIdx[0]
                    ? 38 : 40)].classList.add(_syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["cssClass"].selected);
            }
            if (isKey) {
                this.list.focus();
            }
            fListBox.listData = listData;
            fListBox.setProperties({ dataSource: listData }, true);
            tListData = tListData.concat(data.reverse());
            tListBox.listData = tListData;
            tListBox.setProperties({ dataSource: tListData }, true);
            if (isRefresh) {
                tListBox.ulElement.innerHTML = tListBox.renderItems(tListData, tListBox.fields).innerHTML;
                tListBox.setSelection();
            }
            else {
                tListBox.sortedData = tListData;
            }
            fListBox.updateSelectedOptions();
            if (fListBox.listData.length === 0) {
                fListBox.l10nUpdate();
            }
        }
        if (fListBox.value.length === 1 && fListBox.getSelectedItems().length) {
            fListBox.value[0] = fListBox.getSelectedItems()[0].innerHTML;
        }
    };
    ListBox.prototype.moveAllTo = function () {
        this.moveAllData(this, this.getScopedListBox());
    };
    ListBox.prototype.moveAllFrom = function () {
        this.moveAllData(this.getScopedListBox(), this);
    };
    ListBox.prototype.moveAllData = function (fListBox, tListBox, isKey) {
        var listData = [].slice.call(tListBox.listData);
        var isRefresh = tListBox.sortOrder !== 'None' ||
            (tListBox.selectionSettings.showCheckbox !== fListBox.selectionSettings.showCheckbox) || tListBox.fields.groupBy;
        this.removeSelected(fListBox, fListBox.getSelectedItems());
        if (tListBox.listData.length === 0) {
            tListBox.ulElement.innerHTML = '';
        }
        if (isRefresh) {
            fListBox.ulElement.innerHTML = '';
        }
        else {
            Object(_syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["moveTo"])(fListBox.ulElement, tListBox.ulElement, Array.apply(null, { length: fListBox.ulElement.childElementCount }).map(Number.call, Number));
        }
        if (isKey) {
            this.list.focus();
        }
        listData = listData.concat(fListBox.sortedData
            .filter(function (data) { return data.isHeader !== true; }));
        tListBox.listData = listData;
        fListBox.listData = fListBox.sortedData = [];
        tListBox.setProperties({ dataSource: listData }, true);
        fListBox.setProperties({ dataSource: [] }, true);
        if (isRefresh) {
            tListBox.ulElement.innerHTML = tListBox.renderItems(listData, tListBox.fields).innerHTML;
        }
        else {
            tListBox.sortedData = listData;
        }
        fListBox.updateSelectedOptions();
        if (fListBox.listData.length === 0) {
            fListBox.l10nUpdate();
        }
    };
    ListBox.prototype.changeData = function (fromIdx, toIdx) {
        var listData = [].slice.call(this.listData);
        listData.splice(toIdx, 0, listData.splice(fromIdx, 1)[0]);
        this.listData = listData;
        this.setProperties({ dataSource: listData }, true);
    };
    ListBox.prototype.getSelectedItems = function () {
        var ele = [];
        if (this.selectionSettings.showCheckbox) {
            [].slice.call(this.ulElement.getElementsByClassName('e-check')).forEach(function (cbox) {
                ele.push(Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["closest"])(cbox, '.' + _syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["cssClass"].li));
            });
        }
        else {
            ele = [].slice.call(this.ulElement.getElementsByClassName(_syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["cssClass"].selected));
        }
        return ele;
    };
    ListBox.prototype.getScopedListBox = function () {
        var _this = this;
        var listObj;
        if (this.scope) {
            [].slice.call(document.querySelectorAll(this.scope)).forEach(function (ele) {
                if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["getComponent"])(ele, _this.getModuleName())) {
                    listObj = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["getComponent"])(ele, _this.getModuleName());
                }
            });
        }
        return listObj;
    };
    ListBox.prototype.getDragArgs = function (args, isDragEnd) {
        var elems = this.getSelectedItems();
        if (elems.length) {
            elems.pop();
            if (isDragEnd) {
                elems.push(args.target);
            }
        }
        else {
            elems = [args.target];
        }
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isBlazor"])()) {
            return { elements: elems, items: this.getDataByElems(elems), bindEvents: args.bindEvents,
                dragElement: args.dragElement };
        }
        else {
            return { elements: elems, items: this.getDataByElems(elems) };
        }
    };
    ListBox.prototype.onKeyDown = function (e) {
        this.keyDownHandler(e);
        event.stopPropagation();
    };
    ListBox.prototype.keyDownHandler = function (e) {
        if ([32, 35, 36, 37, 38, 39, 40, 65].indexOf(e.keyCode) > -1 && !this.allowFiltering) {
            e.preventDefault();
            if (e.keyCode === 32) {
                this.selectHandler({
                    target: this.ulElement.getElementsByClassName('e-focused')[0],
                    ctrlKey: e.ctrlKey, shiftKey: e.shiftKey
                });
            }
            else if (e.keyCode === 65 && e.ctrlKey) {
                this.selectAll();
            }
            else if ((e.keyCode === 38 || e.keyCode === 40) && e.ctrlKey && e.shiftKey) {
                this.moveUpDown(e.keyCode === 38 ? true : false, true);
            }
            else if ((this.toolbarSettings.items.length || this.tBListBox) && (e.keyCode === 39 || e.keyCode === 37) && e.ctrlKey) {
                var listObj = this.tBListBox || this.getScopedListBox();
                if (e.keyCode === 39) {
                    e.shiftKey ? this.moveAllData(this, listObj, true) : this.moveData(this, listObj, true);
                }
                else {
                    e.shiftKey ? this.moveAllData(listObj, this, true) : this.moveData(listObj, this, true);
                }
            }
            else if (e.keyCode !== 37 && e.keyCode !== 39) {
                this.upDownKeyHandler(e);
            }
        }
        else if (this.allowFiltering) {
            if (e.keyCode === 40 || e.keyCode === 38) {
                this.upDownKeyHandler(e);
            }
        }
    };
    ListBox.prototype.upDownKeyHandler = function (e) {
        var ul = this.ulElement;
        var defaultIdx = (e.keyCode === 40 || e.keyCode === 36) ? 0 : ul.childElementCount - 1;
        var fliIdx = defaultIdx;
        var fli = ul.getElementsByClassName('e-focused')[0] || ul.getElementsByClassName(_syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["cssClass"].selected)[0];
        if (fli) {
            if (e.keyCode !== 35 && e.keyCode !== 36) {
                fliIdx = Array.prototype.indexOf.call(ul.children, fli);
                e.keyCode === 40 ? fliIdx++ : fliIdx--;
                if (fliIdx < 0 || fliIdx > ul.childElementCount - 1) {
                    return;
                }
            }
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])([fli], 'e-focused');
        }
        var cli = ul.children[fliIdx];
        fliIdx = this.getValidIndex(cli, fliIdx, e.keyCode);
        if (fliIdx === -1) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([fli], 'e-focused');
            return;
        }
        ul.children[fliIdx].focus();
        ul.children[fliIdx].classList.add('e-focused');
        if (!e.ctrlKey) {
            this.selectHandler({ target: ul.children[fliIdx], ctrlKey: e.ctrlKey, shiftKey: e.shiftKey }, true);
        }
    };
    ListBox.prototype.KeyUp = function (e) {
        var _this = this;
        var char = String.fromCharCode(e.keyCode);
        var isWordCharacter = char.match(/\w/);
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(isWordCharacter)) {
            this.isValidKey = true;
        }
        this.isValidKey = (e.keyCode === 8) || this.isValidKey;
        if (this.isValidKey) {
            this.isValidKey = false;
            switch (e.keyCode) {
                default:
                    var text = this.targetElement();
                    var keyCode = e.keyCode;
                    if (this.allowFiltering) {
                        var eventArgsData_1 = {
                            preventDefaultAction: false,
                            text: this.targetElement(),
                            updateData: function (dataSource, query, fields) {
                                if (eventArgsData_1.cancel) {
                                    return;
                                }
                                _this.isFiltered = true;
                                _this.remoteFilterAction = true;
                                _this.dataUpdater(dataSource, query, fields);
                            },
                            event: e,
                            cancel: false
                        };
                        this.trigger('filtering', eventArgsData_1, function (args) {
                            _this.isDataFetched = false;
                            if (eventArgsData_1.cancel || (_this.filterInput.value !== '' && _this.isFiltered)) {
                                return;
                            }
                            if (!eventArgsData_1.cancel && !_this.isCustomFiltering && !eventArgsData_1.preventDefaultAction) {
                                _this.inputString = _this.filterInput.value;
                                _this.filteringAction(_this.dataSource, null, _this.fields);
                            }
                            if (!_this.isFiltered && !_this.isCustomFiltering && !eventArgsData_1.preventDefaultAction) {
                                _this.dataUpdater(_this.dataSource, null, _this.fields);
                            }
                        });
                    }
            }
        }
    };
    /**
     * To filter the data from given data source by using query
     * @param  {Object[] | DataManager } dataSource - Set the data source to filter.
     * @param  {Query} query - Specify the query to filter the data.
     * @param  {FieldSettingsModel} fields - Specify the fields to map the column in the data table.
     * @return {void}.
     */
    ListBox.prototype.filter = function (dataSource, query, fields) {
        this.isCustomFiltering = true;
        this.filteringAction(dataSource, query, fields);
    };
    ListBox.prototype.filteringAction = function (dataSource, query, fields) {
        this.resetList(dataSource, fields, query);
    };
    ListBox.prototype.targetElement = function () {
        this.targetInputElement = this.list.getElementsByClassName('e-input-filter')[0];
        return this.targetInputElement.value;
    };
    ListBox.prototype.dataUpdater = function (dataSource, query, fields) {
        this.isDataFetched = false;
        var backCommand = true;
        if (this.targetElement().trim() === '') {
            var list = this.mainList.cloneNode ? this.mainList.cloneNode(true) : this.mainList;
            if (backCommand) {
                this.remoteCustomValue = false;
                this.onActionComplete(list, this.dataSource);
                this.notify('reOrder', { module: 'CheckBoxSelection', enable: this.selectionSettings.showCheckbox, e: this });
            }
        }
        else {
            this.resetList(dataSource, fields, query);
        }
    };
    ListBox.prototype.focusOutHandler = function () {
        var ele = this.list.getElementsByClassName('e-focused')[0];
        if (ele) {
            ele.classList.remove('e-focused');
        }
    };
    ListBox.prototype.getValidIndex = function (cli, index, keyCode) {
        var cul = this.ulElement;
        if (cli.classList.contains('e-disabled') || cli.classList.contains(_syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["cssClass"].group)) {
            (keyCode === 40 || keyCode === 36) ? index++ : index--;
        }
        if (index < 0 || index === cul.childElementCount) {
            return -1;
        }
        cli = cul.querySelectorAll('.e-list-item')[index];
        if (cli.classList.contains('e-disabled') || cli.classList.contains(_syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["cssClass"].group)) {
            index = this.getValidIndex(cli, index, keyCode);
        }
        return index;
    };
    ListBox.prototype.updateSelectedOptions = function () {
        var _this = this;
        var selectedOptions = [];
        this.getSelectedItems().forEach(function (ele) {
            if (!ele.classList.contains('e-grabbed')) {
                selectedOptions.push(_this.getFormattedValue(ele.getAttribute('data-value')));
            }
        });
        if (this.mainList.childElementCount === this.ulElement.childElementCount) {
            this.setProperties({ value: selectedOptions }, true);
        }
        this.updateSelectTag();
        this.updateToolBarState();
        if (this.tBListBox) {
            this.tBListBox.updateToolBarState();
        }
        if (this.allowFiltering) {
            this.list.getElementsByClassName('e-input-filter')[0].focus();
        }
    };
    ListBox.prototype.clearSelection = function (values) {
        var _this = this;
        if (values === void 0) { values = this.value; }
        if (this.selectionSettings.showCheckbox) {
            var dvalue_1;
            this.getSelectedItems().forEach(function (li) {
                dvalue_1 = _this.getFormattedValue(li.getAttribute('data-value'));
                if (values.indexOf(dvalue_1) < 0) {
                    li.getElementsByClassName('e-check')[0].classList.remove('e-check');
                    li.getElementsByClassName('e-checkbox-wrapper')[0].removeAttribute('aria-checked');
                    li.removeAttribute('aria-selected');
                }
            });
        }
    };
    ;
    ListBox.prototype.setSelection = function (values, isSelect, isText) {
        var _this = this;
        if (values === void 0) { values = this.value; }
        if (isSelect === void 0) { isSelect = true; }
        if (isText === void 0) { isText = false; }
        var li;
        var liselect;
        if (values) {
            values.forEach(function (value) {
                li = _this.list.querySelector('[data-value="' + (isText ? _this.getValueByText(value) : value) + '"]');
                if (li) {
                    if (_this.selectionSettings.showCheckbox) {
                        liselect = li.getElementsByClassName('e-frame')[0].classList.contains('e-check');
                    }
                    else {
                        liselect = li.classList.contains('e-selected');
                    }
                    if (!isSelect && liselect || isSelect && !liselect && li) {
                        if (_this.selectionSettings.showCheckbox) {
                            _this.notify('updatelist', { li: li });
                        }
                        else {
                            if (isSelect) {
                                li.classList.add(_syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["cssClass"].selected);
                                li.setAttribute('aria-selected', 'true');
                            }
                            else {
                                li.classList.remove(_syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["cssClass"].selected);
                                li.removeAttribute('aria-selected');
                            }
                        }
                    }
                }
            });
        }
        this.updateSelectTag();
    };
    ListBox.prototype.updateSelectTag = function () {
        var ele = this.getSelectTag();
        ele.innerHTML = '';
        if (this.value) {
            Array.prototype.forEach.call(this.value, function (value) {
                ele.innerHTML += '<option selected value="' + value + '"></option>';
            });
        }
        this.checkSelectAll();
    };
    ListBox.prototype.updateToolBarState = function () {
        var _this = this;
        if (this.toolbarSettings.items.length) {
            var listObj_1 = this.getScopedListBox();
            var wrap_1 = this.list.parentElement.getElementsByClassName('e-listbox-tool')[0];
            this.toolbarSettings.items.forEach(function (value) {
                var btn = wrap_1.querySelector('[data-value="' + value + '"]');
                switch (value) {
                    case 'moveAllTo':
                        btn.disabled = _this.ulElement.childElementCount ? false : true;
                        break;
                    case 'moveAllFrom':
                        btn.disabled = listObj_1.ulElement.childElementCount ? false : true;
                        break;
                    case 'moveFrom':
                        btn.disabled = listObj_1.value && listObj_1.value.length ? false : true;
                        break;
                    case 'moveUp':
                        btn.disabled = _this.value && _this.value.length
                            && !_this.isSelected(_this.ulElement.children[0]) ? false : true;
                        break;
                    case 'moveDown':
                        btn.disabled = _this.value && _this.value.length
                            && !_this.isSelected(_this.ulElement.children[_this.ulElement.childElementCount - 1]) ? false : true;
                        break;
                    default:
                        btn.disabled = _this.value && _this.value.length ? false : true;
                        break;
                }
            });
        }
    };
    ListBox.prototype.setCheckboxPosition = function () {
        var listWrap = this.list;
        if (!this.initLoad && this.selectionSettings.checkboxPosition === 'Left') {
            listWrap.classList.remove('e-right');
        }
        if (this.selectionSettings.checkboxPosition === 'Right') {
            listWrap.classList.add('e-right');
        }
    };
    ListBox.prototype.showCheckbox = function (showCheckbox) {
        var index = 0;
        var liColl = this.list.lastElementChild.querySelectorAll('li');
        var liCollLen = this.list.lastElementChild.getElementsByClassName('e-list-item').length;
        if (showCheckbox) {
            this.ulElement = this.renderItems(this.listData, this.fields);
            this.mainList = this.ulElement;
            this.list.removeChild(this.list.getElementsByTagName('ul')[0]);
            this.list.appendChild(this.ulElement);
            if (this.selectionSettings.showSelectAll) {
                var l10nShow = new _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["L10n"](this.getModuleName(), { selectAllText: 'Select All', unSelectAllText: 'Unselect All' }, this.locale);
                this.showSelectAll = true;
                this.selectAllText = l10nShow.getConstant('selectAllText');
                this.unSelectAllText = l10nShow.getConstant('unSelectAllText');
                this.popupWrapper = this.list;
                this.checkBoxSelectionModule.checkAllParent = null;
                this.notify('selectAll', {});
                this.checkSelectAll();
            }
        }
        else {
            if (this.selectionSettings.showSelectAll) {
                this.list.removeChild(this.list.getElementsByClassName('e-selectall-parent')[0]);
            }
            for (index; index < liCollLen; index++) {
                liColl[index].removeChild(liColl[index].getElementsByClassName('e-checkbox-wrapper')[0]);
                if (liColl[index].hasAttribute('aria-selected')) {
                    liColl[index].removeAttribute('aria-selected');
                }
            }
            this.mainList = this.ulElement;
        }
        this.value = [];
    };
    ListBox.prototype.isSelected = function (ele) {
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(ele)) {
            return ele.classList.contains(_syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["cssClass"].selected) || ele.querySelector('.e-check') !== null;
        }
        else {
            return false;
        }
    };
    ListBox.prototype.getSelectTag = function () {
        return this.list.getElementsByClassName('e-hidden-select')[0];
    };
    ListBox.prototype.getToolElem = function () {
        return this.list.parentElement.getElementsByClassName('e-listbox-tool')[0];
    };
    ListBox.prototype.formResetHandler = function () {
        this.value = this.initialSelectedOptions;
    };
    /**
     * Return the module name.
     * @private
     */
    ListBox.prototype.getModuleName = function () {
        return 'listbox';
    };
    /**
     * Get the properties to be maintained in the persisted state.
     */
    ListBox.prototype.getPersistData = function () {
        return this.addOnPersist(['value']);
    };
    ListBox.prototype.getLocaleName = function () {
        return 'listbox';
    };
    ;
    ListBox.prototype.destroy = function () {
        if (this.itemTemplate) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["resetBlazorTemplate"])("" + this.element.id + ITEMTEMPLATE_PROPERTY, ITEMTEMPLATE_PROPERTY);
        }
        this.unwireEvents();
        if (this.element.tagName === 'EJS-LISTBOX') {
            this.element.innerHTML = '';
        }
        else {
            this.element.style.display = 'inline-block';
            if (this.toolbarSettings.items.length) {
                this.list.parentElement.parentElement.insertBefore(this.list, this.list.parentElement);
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["detach"])(this.list.nextElementSibling);
            }
            this.list.parentElement.insertBefore(this.element, this.list);
        }
        _super.prototype.destroy.call(this);
    };
    /**
     * Called internally if any of the property value changed.
     * @returns void
     * @private
     */
    // tslint:disable-next-line:max-func-body-length
    ListBox.prototype.onPropertyChanged = function (newProp, oldProp) {
        var wrap = this.toolbarSettings.items.length ? this.list.parentElement : this.list;
        _super.prototype.onPropertyChanged.call(this, newProp, oldProp);
        this.setUpdateInitial(['fields', 'query', 'dataSource'], newProp);
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'cssClass':
                    if (oldProp.cssClass) {
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])([wrap], oldProp.cssClass.split(' '));
                    }
                    if (newProp.cssClass) {
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([wrap], newProp.cssClass.split(' '));
                    }
                    break;
                case 'enableRtl':
                    if (newProp.enableRtl) {
                        wrap.classList.add('e-rtl');
                    }
                    else {
                        wrap.classList.remove('e-rtl');
                    }
                    break;
                case 'value':
                    Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(this.list.querySelectorAll('.' + _syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["cssClass"].selected), _syncfusion_ej2_lists__WEBPACK_IMPORTED_MODULE_3__["cssClass"].selected);
                    this.clearSelection(this.value);
                    this.setSelection();
                    break;
                case 'height':
                    this.setHeight();
                    break;
                case 'enabled':
                    this.setEnable();
                    break;
                case 'allowDragAndDrop':
                    if (newProp.allowDragAndDrop) {
                        this.initDraggable();
                    }
                    else {
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["getComponent"])(this.ulElement, 'sortable').destroy();
                    }
                    break;
                case 'allowFiltering':
                    if (this.allowFiltering) {
                        this.setFiltering();
                    }
                    else {
                        this.list.removeChild(this.list.getElementsByClassName('e-filter-parent')[0]);
                        this.filterParent = null;
                    }
                    break;
                case 'scope':
                    if (this.allowDragAndDrop) {
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["getComponent"])(this.ulElement, 'sortable').scope = newProp.scope;
                    }
                    if (this.toolbarSettings.items.length) {
                        if (oldProp.scope) {
                            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["getComponent"])(document.querySelector(oldProp.scope), this.getModuleName())
                                .tBListBox = null;
                        }
                        if (newProp.scope) {
                            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["getComponent"])(document.querySelector(newProp.scope), this.getModuleName())
                                .tBListBox = this;
                        }
                    }
                    break;
                case 'toolbarSettings':
                    var ele = void 0;
                    var pos = newProp.toolbarSettings.position;
                    var toolElem = this.getToolElem();
                    if (pos) {
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])([wrap], ['e-right', 'e-left']);
                        wrap.classList.add('e-' + pos.toLowerCase());
                        if (pos === 'Left') {
                            wrap.insertBefore(toolElem, this.list);
                        }
                        else {
                            wrap.appendChild(toolElem);
                        }
                    }
                    if (newProp.toolbarSettings.items) {
                        if (oldProp.toolbarSettings.items.length) {
                            ele = this.list.parentElement;
                            ele.parentElement.insertBefore(this.list, ele);
                            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["detach"])(ele);
                        }
                        this.initToolbarAndStyles();
                        this.wireToolbarEvent();
                    }
                    break;
                case 'selectionSettings':
                    var showSelectAll = newProp.selectionSettings.showSelectAll;
                    var showCheckbox = newProp.selectionSettings.showCheckbox;
                    if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(showSelectAll)) {
                        this.showSelectAll = showSelectAll;
                        if (this.showSelectAll) {
                            var l10nSel = new _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["L10n"](this.getModuleName(), { selectAllText: 'Select All', unSelectAllText: 'Unselect All' }, this.locale);
                            this.checkBoxSelectionModule.checkAllParent = null;
                            this.showSelectAll = true;
                            this.selectAllText = l10nSel.getConstant('selectAllText');
                            this.unSelectAllText = l10nSel.getConstant('selectAllText');
                            this.popupWrapper = this.list;
                        }
                        this.notify('selectAll', {});
                        this.checkSelectAll();
                    }
                    if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(showCheckbox)) {
                        this.showCheckbox(showCheckbox);
                    }
                    if (this.selectionSettings.showCheckbox) {
                        this.setCheckboxPosition();
                    }
                    break;
            }
        }
    };
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])('')
    ], ListBox.prototype, "cssClass", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])([])
    ], ListBox.prototype, "value", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])('')
    ], ListBox.prototype, "height", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(false)
    ], ListBox.prototype, "allowDragAndDrop", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(1000)
    ], ListBox.prototype, "maximumSelectionLength", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(false)
    ], ListBox.prototype, "allowFiltering", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])('')
    ], ListBox.prototype, "scope", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(true)
    ], ListBox.prototype, "ignoreCase", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Event"])()
    ], ListBox.prototype, "beforeItemRender", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Event"])()
    ], ListBox.prototype, "filtering", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Event"])()
    ], ListBox.prototype, "select", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Event"])()
    ], ListBox.prototype, "change", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Event"])()
    ], ListBox.prototype, "dragStart", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Event"])()
    ], ListBox.prototype, "drag", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Event"])()
    ], ListBox.prototype, "drop", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Event"])()
    ], ListBox.prototype, "dataBound", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(null)
    ], ListBox.prototype, "groupTemplate", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])('No Records Found')
    ], ListBox.prototype, "noRecordsTemplate", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])('The Request Failed')
    ], ListBox.prototype, "actionFailureTemplate", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(1000)
    ], ListBox.prototype, "zIndex", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(false)
    ], ListBox.prototype, "ignoreAccent", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Complex"])({}, ToolbarSettings)
    ], ListBox.prototype, "toolbarSettings", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Complex"])({}, SelectionSettings)
    ], ListBox.prototype, "selectionSettings", void 0);
    ListBox = __decorate([
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["NotifyPropertyChanges"]
    ], ListBox);
    return ListBox;
}(_drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_1__["DropDownBase"]));



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-dropdowns/src/multi-select/checkbox-selection.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-dropdowns/src/multi-select/checkbox-selection.js ***!
  \***************************************************************************************/
/*! exports provided: CheckBoxSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBoxSelection", function() { return CheckBoxSelection; });
/* harmony import */ var _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-buttons */ "./node_modules/@syncfusion/ej2-buttons/index.js");
/* harmony import */ var _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-inputs */ "./node_modules/@syncfusion/ej2-inputs/index.js");
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-base */ "./node_modules/@syncfusion/ej2-base/index.js");
/* harmony import */ var _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../drop-down-base/drop-down-base */ "./node_modules/@syncfusion/ej2-dropdowns/src/drop-down-base/drop-down-base.js");





var ICON = 'e-icons';
var CHECKBOXFRAME = 'e-frame';
var CHECK = 'e-check';
var CHECKBOXWRAP = 'e-checkbox-wrapper';
var CHECKBOXRIPPLE = 'e-ripple-container';
var INDETERMINATE = 'e-stop';
var checkAllParent = 'e-selectall-parent';
var searchBackIcon = 'e-input-group-icon e-back-icon e-icons';
var filterBarClearIcon = 'e-input-group-icon e-clear-icon e-icons';
var filterInput = 'e-input-filter';
var filterParent = 'e-filter-parent';
var mobileFilter = 'e-ddl-device-filter';
var clearIcon = 'e-clear-icon';
var popupFullScreen = 'e-popup-full-page';
var device = 'e-ddl-device';
var FOCUS = 'e-input-focus';
/**
 * The Multiselect enable CheckBoxSelection call this inject module.
 */
var CheckBoxSelection = /** @class */ (function () {
    function CheckBoxSelection(parent) {
        this.activeLi = [];
        this.activeEle = [];
        this.parent = parent;
        this.addEventListener();
    }
    CheckBoxSelection.prototype.getModuleName = function () {
        return 'CheckBoxSelection';
    };
    CheckBoxSelection.prototype.addEventListener = function () {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.on('updatelist', this.listSelection, this);
        this.parent.on('listoption', this.listOption, this);
        this.parent.on('selectAll', this.setSelectAll, this);
        this.parent.on('checkSelectAll', this.checkSelectAll, this);
        this.parent.on('searchBox', this.setSearchBox, this);
        this.parent.on('blur', this.onBlur, this);
        this.parent.on('targetElement', this.targetElement, this);
        this.parent.on('deviceSearchBox', this.setDeviceSearchBox, this);
        this.parent.on('inputFocus', this.getFocus, this);
        this.parent.on('reOrder', this.setReorder, this);
        this.parent.on('activeList', this.getActiveList, this);
        this.parent.on('selectAllText', this.setLocale, this);
        this.parent.on('filterBarPlaceholder', this.setPlaceholder, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(document, 'mousedown', this.onDocumentClick, this);
        this.parent.on('addItem', this.checboxCreate, this);
    };
    CheckBoxSelection.prototype.removeEventListener = function () {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.off('updatelist', this.listSelection);
        this.parent.off('listoption', this.listOption);
        this.parent.off('selectAll', this.setSelectAll);
        this.parent.off('checkSelectAll', this.checkSelectAll);
        this.parent.off('searchBox', this.setSearchBox);
        this.parent.off('blur', this.onBlur);
        this.parent.off('targetElement', this.targetElement);
        this.parent.off('deviceSearchBox', this.setDeviceSearchBox);
        this.parent.off('inputFocus', this.getFocus);
        this.parent.off('reOrder', this.setReorder);
        this.parent.off('activeList', this.getActiveList);
        this.parent.off('selectAllText', this.setLocale);
        this.parent.off('filterBarPlaceholder', this.setPlaceholder);
        this.parent.off('addItem', this.checboxCreate);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].remove(document, 'mousedown', this.onDocumentClick);
    };
    CheckBoxSelection.prototype.listOption = function (args) {
        var _this = this;
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.parent.listCurrentOptions.itemCreated)) {
            this.parent.listCurrentOptions.itemCreated = function (e) {
                _this.checboxCreate(e);
            };
        }
        else {
            var itemCreated_1 = this.parent.listCurrentOptions.itemCreated;
            this.parent.listCurrentOptions.itemCreated = function (e) {
                _this.checboxCreate(e);
                itemCreated_1.apply(_this, [e]);
            };
        }
    };
    ;
    CheckBoxSelection.prototype.setPlaceholder = function (props) {
        _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_1__["Input"].setPlaceholder(props.filterBarPlaceholder, this.filterInput);
    };
    CheckBoxSelection.prototype.checboxCreate = function (e) {
        var item;
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(e.item)) {
            item = e.item;
        }
        else {
            item = e;
        }
        if (this.parent.enableGroupCheckBox || (item.className !== 'e-list-group-item '
            && item.className !== 'e-list-group-item')) {
            var checkboxEle = Object(_syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_0__["createCheckBox"])(this.parent.createElement, true);
            var icon = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["select"])('div.' + ICON, item);
            var id = item.getAttribute('data-uid');
            item.insertBefore(checkboxEle, item.childNodes[Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(icon) ? 0 : 1]);
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["select"])('.' + CHECKBOXFRAME, checkboxEle);
            var frame = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["select"])('.' + CHECKBOXFRAME, checkboxEle);
            if (this.parent.enableGroupCheckBox) {
                this.parent.popupWrapper.classList.add('e-multiselect-group');
            }
            return item;
        }
        else {
            return item;
        }
    };
    CheckBoxSelection.prototype.setSelectAll = function () {
        if (this.parent.showSelectAll) {
            if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.checkAllParent)) {
                this.checkAllParent = this.parent.createElement('div', {
                    className: checkAllParent
                });
                this.selectAllSpan = this.parent.createElement('span', {
                    className: 'e-all-text'
                });
                this.selectAllSpan.textContent = '';
                this.checkAllParent.appendChild(this.selectAllSpan);
                this.setLocale();
                this.checboxCreate(this.checkAllParent);
                if (this.parent.headerTemplate) {
                    if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.parent.filterParent)) {
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["append"])([this.checkAllParent], this.parent.filterParent);
                    }
                    else {
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["append"])([this.checkAllParent], this.parent.popupWrapper);
                    }
                }
                if (!this.parent.headerTemplate) {
                    if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.parent.filterParent)) {
                        this.parent.filterParent.parentNode.insertBefore(this.checkAllParent, this.parent.filterParent.nextSibling);
                    }
                    else {
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["prepend"])([this.checkAllParent], this.parent.popupWrapper);
                    }
                }
                _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(this.checkAllParent, 'mousedown', this.clickHandler, this);
            }
            if (this.parent.list.classList.contains('e-nodata') || (this.parent.listData && this.parent.listData.length <= 1)) {
                this.checkAllParent.style.display = 'none';
            }
            else {
                this.checkAllParent.style.display = 'block';
            }
            this.parent.selectAllHeight = this.checkAllParent.getBoundingClientRect().height;
        }
        else if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.checkAllParent)) {
            this.checkAllParent.parentElement.removeChild(this.checkAllParent);
            this.checkAllParent = null;
        }
    };
    CheckBoxSelection.prototype.destroy = function () {
        this.removeEventListener();
    };
    CheckBoxSelection.prototype.listSelection = function (args) {
        var target;
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(args.e)) {
            target = !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(args.e.target) ?
                (args.e.target.classList.contains('e-frame')
                    && (!this.parent.showSelectAll
                        || (this.checkAllParent && !this.checkAllParent.contains(args.e.target)))) ?
                    args.e.target : args.li.querySelector('.e-checkbox-wrapper').childNodes[1]
                : args.li.querySelector('.e-checkbox-wrapper').childNodes[1];
        }
        else {
            target = args.li.lastElementChild.childNodes[1];
        }
        if (this.parent.itemTemplate || this.parent.enableGroupCheckBox) {
            target = args.li.firstElementChild.childNodes[1];
        }
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(target)) {
            this.checkWrapper = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["closest"])(target, '.' + CHECKBOXWRAP);
        }
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.checkWrapper)) {
            var checkElement = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["select"])('.' + CHECKBOXFRAME, this.checkWrapper);
            var selectAll = false;
            this.validateCheckNode(this.checkWrapper, checkElement.classList.contains(CHECK), args.li, args.e, selectAll);
        }
    };
    CheckBoxSelection.prototype.validateCheckNode = function (checkWrap, isCheck, li, e, selectAll) {
        this.changeState(checkWrap, isCheck ? 'uncheck' : 'check', e, true, selectAll);
    };
    CheckBoxSelection.prototype.clickHandler = function (e) {
        var target;
        if (e.currentTarget.classList.contains(this.checkAllParent.className)) {
            target = e.currentTarget.firstElementChild.lastElementChild;
        }
        else {
            target = e.currentTarget;
        }
        this.checkWrapper = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["closest"])(target, '.' + CHECKBOXWRAP);
        var selectAll = true;
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.checkWrapper)) {
            var checkElement = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["select"])('.' + CHECKBOXFRAME, this.checkWrapper);
            this.validateCheckNode(this.checkWrapper, checkElement.classList.contains(CHECK), null, e, selectAll);
        }
        e.preventDefault();
    };
    CheckBoxSelection.prototype.changeState = function (wrapper, state, e, isPrevent, selectAll) {
        var ariaState;
        var frameSpan = wrapper.getElementsByClassName(CHECKBOXFRAME)[0];
        if (state === 'check' && !frameSpan.classList.contains(CHECK)) {
            frameSpan.classList.remove(INDETERMINATE);
            frameSpan.classList.add(CHECK);
            ariaState = 'true';
            if (selectAll) {
                this.parent.selectAllItems(true, e);
                this.setLocale(true);
            }
        }
        else if (state === 'uncheck' && (frameSpan.classList.contains(CHECK) || frameSpan.classList.contains(INDETERMINATE))) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])([frameSpan], [CHECK, INDETERMINATE]);
            ariaState = 'false';
            if (selectAll) {
                this.parent.selectAllItems(false, e);
                this.setLocale();
            }
        }
        ariaState = state === 'check' ? 'true' : state === 'uncheck' ? 'false' : ariaState;
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(ariaState)) {
            wrapper.setAttribute('aria-checked', ariaState);
        }
    };
    CheckBoxSelection.prototype.setSearchBox = function (args) {
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.parent.filterParent)) {
            this.parent.filterParent = this.parent.createElement('span', {
                className: filterParent
            });
            this.filterInput = this.parent.createElement('input', {
                attrs: { type: 'text' },
                className: filterInput
            });
            this.parent.element.parentNode.insertBefore(this.filterInput, this.parent.element);
            var backIcon = false;
            if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Browser"].isDevice) {
                backIcon = true;
                this.parent.mobFilter = false;
            }
            this.filterInputObj = _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_1__["Input"].createInput({
                element: this.filterInput,
                buttons: backIcon ? [searchBackIcon, filterBarClearIcon] : [filterBarClearIcon],
                properties: { placeholder: this.parent.filterBarPlaceholder }
            }, this.parent.createElement);
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["append"])([this.filterInputObj.container], this.parent.filterParent);
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["prepend"])([this.parent.filterParent], args.popupElement);
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["attributes"])(this.filterInput, {
                'aria-disabled': 'false',
                'aria-owns': this.parent.element.id + '_options',
                'role': 'listbox',
                'aria-activedescendant': null,
                'autocomplete': 'off',
                'autocorrect': 'off',
                'autocapitalize': 'off',
                'spellcheck': 'false'
            });
            this.clearIconElement = this.filterInput.parentElement.querySelector('.' + clearIcon);
            if (!_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Browser"].isDevice && this.clearIconElement) {
                _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(this.clearIconElement, 'mousedown', this.clearText, this);
                this.clearIconElement.style.visibility = 'hidden';
            }
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(this.filterInput, 'input', this.parent.onInput, this.parent);
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(this.filterInput, 'keyup', this.parent.KeyUp, this.parent);
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(this.filterInput, 'keydown', this.parent.onKeyDown, this.parent);
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(this.filterInput, 'blur', this.onBlur, this);
            this.parent.searchBoxHeight = (this.filterInputObj.container.parentElement).getBoundingClientRect().height;
            return this.filterInputObj;
        }
    };
    ;
    CheckBoxSelection.prototype.clickOnBackIcon = function (e) {
        this.parent.hidePopup();
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])([document.body, this.parent.popupObj.element], popupFullScreen);
        this.parent.inputElement.focus();
    };
    CheckBoxSelection.prototype.clearText = function (e) {
        this.parent.targetInputElement.value = '';
        this.parent.refreshPopup();
        this.parent.refreshListItems(null);
        this.clearIconElement.style.visibility = 'hidden';
        this.filterInput.focus();
        this.setReorder(e);
        e.preventDefault();
    };
    CheckBoxSelection.prototype.setDeviceSearchBox = function () {
        this.parent.popupObj.element.classList.add(device);
        this.parent.popupObj.element.classList.add(mobileFilter);
        this.parent.popupObj.position = { X: 0, Y: 0 };
        this.parent.popupObj.dataBind();
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["attributes"])(this.parent.popupObj.element, { style: 'left:0px;right:0px;top:0px;bottom:0px;' });
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([document.body, this.parent.popupObj.element], popupFullScreen);
        this.setSearchBoxPosition();
        this.backIconElement = this.filterInputObj.container.querySelector('.e-back-icon');
        this.clearIconElement = this.filterInputObj.container.querySelector('.' + clearIcon);
        this.clearIconElement.style.visibility = 'hidden';
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(this.backIconElement, 'click', this.clickOnBackIcon, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(this.clearIconElement, 'click', this.clearText, this);
    };
    CheckBoxSelection.prototype.setSearchBoxPosition = function () {
        var searchBoxHeight = this.filterInput.parentElement.getBoundingClientRect().height;
        this.parent.popupObj.element.style.maxHeight = '100%';
        this.parent.popupObj.element.style.width = '100%';
        this.parent.list.style.maxHeight = (window.innerHeight - searchBoxHeight) + 'px';
        this.parent.list.style.height = (window.innerHeight - searchBoxHeight) + 'px';
        var clearElement = this.filterInput.parentElement.querySelector('.' + clearIcon);
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["detach"])(this.filterInput);
        clearElement.parentElement.insertBefore(this.filterInput, clearElement);
    };
    CheckBoxSelection.prototype.targetElement = function () {
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.clearIconElement)) {
            this.parent.targetInputElement = this.filterInput;
            this.clearIconElement.style.visibility = this.parent.targetInputElement.value === '' ? 'hidden' : 'visible';
        }
        return this.parent.targetInputElement.value;
    };
    CheckBoxSelection.prototype.onBlur = function (e) {
        if (!this.parent.element.classList.contains('e-listbox')) {
            var target = void 0;
            if (this.parent.keyAction) {
                return;
            }
            if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Browser"].isIE) {
                target = !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(e) && e.target;
            }
            if (!_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Browser"].isIE) {
                target = !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(e) && e.relatedTarget;
            }
            if (document.body.contains(this.parent.popupObj.element) && this.parent.popupObj.element.contains(target) && !_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Browser"].isIE
                && this.filterInput) {
                this.filterInput.focus();
                return;
            }
            if (this.parent.scrollFocusStatus && this.filterInput) {
                e.preventDefault();
                this.filterInput.focus();
                this.parent.scrollFocusStatus = false;
                return;
            }
            if (document.body.contains(this.parent.popupObj.element) && !this.parent.popupObj.element.classList.contains('e-popup-close')) {
                this.parent.inputFocus = false;
                this.parent.updateValueState(e, this.parent.value, this.parent.tempValues);
                this.parent.dispatchEvent(this.parent.hiddenElement, 'change');
            }
            if (document.body.contains(this.parent.popupObj.element) &&
                !this.parent.popupObj.element.classList.contains('e-popup-close')) {
                this.parent.inputFocus = false;
                this.parent.overAllWrapper.classList.remove(FOCUS);
                this.parent.trigger('blur');
                this.parent.focused = true;
            }
            if (document.body.contains(this.parent.popupObj.element) &&
                !this.parent.popupObj.element.classList.contains('e-popup-close') && !_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Browser"].isDevice) {
                this.parent.hidePopup();
            }
        }
    };
    CheckBoxSelection.prototype.onDocumentClick = function (e) {
        if (!this.parent.element.classList.contains('e-listbox')) {
            var target = e.target;
            if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.parent.popupObj) && Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["closest"])(target, '#' + this.parent.popupObj.element.id)) {
                e.preventDefault();
            }
            if (!(!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.parent.popupObj) && Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["closest"])(target, '#' + this.parent.popupObj.element.id)) &&
                !this.parent.overAllWrapper.contains(e.target)) {
                if (this.parent.overAllWrapper.classList.contains(_drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_3__["dropDownBaseClasses"].focus) || this.parent.isPopupOpen()) {
                    this.parent.inputFocus = false;
                    this.parent.scrollFocusStatus = false;
                    this.parent.hidePopup();
                    this.parent.onBlur();
                    this.parent.focused = true;
                }
            }
            else {
                this.parent.scrollFocusStatus = (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Browser"].isIE || _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Browser"].info.name === 'edge') && (document.activeElement === this.filterInput);
            }
            if (!this.parent.overAllWrapper.contains(e.target) && this.parent.overAllWrapper.classList.contains('e-input-focus') &&
                !this.parent.isPopupOpen()) {
                if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Browser"].isIE) {
                    this.parent.onBlur();
                }
                else {
                    this.parent.onBlur(e);
                }
            }
            if (this.filterInput === target) {
                this.filterInput.focus();
            }
        }
    };
    CheckBoxSelection.prototype.getFocus = function (e) {
        this.parent.overAllWrapper.classList.remove(FOCUS);
        if (this.parent.keyAction && e.value !== 'clear') {
            this.parent.keyAction = false;
            return;
        }
        if (e.value === 'focus') {
            this.filterInput.focus();
            this.parent.removeFocus();
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].remove(this.parent.list, 'keydown', this.parent.onKeyDown);
        }
        if (e.value === 'clear') {
            this.filterInput.value = '';
            this.clearIconElement.style.visibility = 'hidden';
        }
    };
    CheckBoxSelection.prototype.checkSelectAll = function (e) {
        if (e.value === 'check' && this.checkAllParent.getAttribute('aria-checked') !== 'true') {
            this.changeState(this.checkAllParent, e.value, null, null, false);
            this.setLocale(true);
        }
        if (e.value === 'uncheck') {
            this.changeState(this.checkAllParent, e.value, null, null, false);
            this.setLocale();
        }
    };
    CheckBoxSelection.prototype.setLocale = function (unSelect) {
        if (this.parent.selectAllText !== 'Select All' || this.parent.unSelectAllText !== 'Unselect All') {
            var template = unSelect ? this.parent.unSelectAllText : this.parent.selectAllText;
            var compiledString = void 0;
            this.selectAllSpan.textContent = '';
            compiledString = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["compile"])(template);
            for (var _i = 0, _a = compiledString({}); _i < _a.length; _i++) {
                var item = _a[_i];
                this.selectAllSpan.textContent = item.textContent;
            }
        }
        else {
            var l10nLocale = { selectAllText: 'Select All', unSelectAllText: 'Unselect All' };
            var l10n = new _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["L10n"](this.parent.getLocaleName(), {}, this.parent.locale);
            if (l10n.getConstant('selectAllText') === '') {
                l10n = new _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["L10n"]('dropdowns', l10nLocale, this.parent.locale);
            }
            this.selectAllSpan.textContent = unSelect ? l10n.getConstant('unSelectAllText') : l10n.getConstant('selectAllText');
        }
    };
    CheckBoxSelection.prototype.getActiveList = function (args) {
        if (args.li.classList.contains('e-active')) {
            this.activeLi.push(args.li.cloneNode(true));
        }
        else {
            this.activeLi.splice(args.index, 1);
        }
    };
    CheckBoxSelection.prototype.setReorder = function (args) {
        if (this.parent.enableSelectionOrder && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.parent.value)) {
            var activeLiCount = this.parent.ulElement.querySelectorAll('li.e-active').length;
            var remLi = void 0;
            var ulEle = this.parent.createElement('ul', {
                className: 'e-list-parent e-ul e-reorder'
            });
            var removeEle = this.parent.createElement('div');
            if (activeLiCount > 0) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["append"])(this.parent.ulElement.querySelectorAll('li.e-active'), ulEle);
                remLi = this.parent.ulElement.querySelectorAll('li.e-active');
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])(remLi, 'e-reorder-hide');
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["prepend"])([ulEle], this.parent.list);
            }
            this.parent.focusAtFirstListItem();
        }
    };
    return CheckBoxSelection;
}());



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-dropdowns/src/multi-select/float-label.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-dropdowns/src/multi-select/float-label.js ***!
  \********************************************************************************/
/*! exports provided: createFloatLabel, updateFloatLabelState, removeFloating, setPlaceHolder, floatLabelFocus, floatLabelBlur */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFloatLabel", function() { return createFloatLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFloatLabelState", function() { return updateFloatLabelState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFloating", function() { return removeFloating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPlaceHolder", function() { return setPlaceHolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floatLabelFocus", function() { return floatLabelFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floatLabelBlur", function() { return floatLabelBlur; });
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-base */ "./node_modules/@syncfusion/ej2-base/index.js");
/**
 * FloatLable Moduel
 * Specifies whether to display the floating label above the input element.
 */


var FLOATLINE = 'e-float-line';
var FLOATTEXT = 'e-float-text';
var LABELTOP = 'e-label-top';
var LABELBOTTOM = 'e-label-bottom';
/**
 * Function to create Float Label element.
 * @param overAllWrapper - overall wrapper of multiselect.
 * @param element - the given html element.
 * @param inputElement - specify the input wrapper.
 * @param value - Value of the MultiSelect.
 * @param floatLabelType - Specify the FloatLabel Type.
 * @param placeholder - Specify the PlaceHolder text.
 */
function createFloatLabel(overAllWrapper, searchWrapper, element, inputElement, value, floatLabelType, placeholder) {
    var floatLinelement;
    var floatLabelElement;
    floatLinelement = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["createElement"])('span', { className: FLOATLINE });
    floatLabelElement = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["createElement"])('label', { className: FLOATTEXT });
    if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(element.id) && element.id !== '') {
        floatLabelElement.id = 'label_' + element.id.replace(/ /g, '_');
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["attributes"])(element, { 'aria-labelledby': floatLabelElement.id });
    }
    if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(inputElement.placeholder) && inputElement.placeholder !== '') {
        floatLabelElement.innerHTML = inputElement.placeholder;
        inputElement.removeAttribute('placeholder');
    }
    floatLabelElement.innerHTML = placeholder;
    searchWrapper.appendChild(floatLinelement);
    searchWrapper.appendChild(floatLabelElement);
    overAllWrapper.classList.add('e-float-input');
    updateFloatLabelState(value, floatLabelElement);
    if (floatLabelType === 'Always') {
        if (floatLabelElement.classList.contains(LABELBOTTOM)) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([floatLabelElement], LABELBOTTOM);
        }
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([floatLabelElement], LABELTOP);
    }
}
/**
 * Function to update status of the Float Label element.
 * @param value - Value of the MultiSelect.
 * @param label - float label element.
 */
function updateFloatLabelState(value, label) {
    if (value && value.length > 0) {
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([label], LABELTOP);
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([label], LABELBOTTOM);
    }
    else {
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([label], LABELTOP);
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([label], LABELBOTTOM);
    }
}
/**
 * Function to remove Float Label element.
 * @param overAllWrapper - overall wrapper of multiselect.
 * @param componentWrapper - wrapper element of multiselect.
 * @param searchWrapper - search wrapper of multiselect.
 * @param inputElement - specify the input wrapper.
 * @param value - Value of the MultiSelect.
 * @param floatLabelType - Specify the FloatLabel Type.
 * @param placeholder - Specify the PlaceHolder text.
 */
function removeFloating(overAllWrapper, componentWrapper, searchWrapper, inputElement, value, floatLabelType, placeholder) {
    var placeholderElement = componentWrapper.querySelector('.' + FLOATTEXT);
    var floatLine = componentWrapper.querySelector('.' + FLOATLINE);
    var placeholderText;
    if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(placeholderElement)) {
        placeholderText = placeholderElement.innerText;
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(searchWrapper.querySelector('.' + FLOATTEXT));
        setPlaceHolder(value, inputElement, placeholderText);
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(floatLine)) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(searchWrapper.querySelector('.' + FLOATLINE));
        }
    }
    else {
        placeholderText = (placeholder !== null) ? placeholder : '';
        setPlaceHolder(value, inputElement, placeholderText);
    }
    overAllWrapper.classList.remove('e-float-input');
}
/**
 * Function to set the placeholder to the element.
 * @param value - Value of the MultiSelect.
 * @param inputElement - specify the input wrapper.
 * @param placeholder - Specify the PlaceHolder text.
 */
function setPlaceHolder(value, inputElement, placeholder) {
    if (value && value.length) {
        inputElement.placeholder = '';
    }
    else {
        inputElement.placeholder = placeholder;
    }
}
/**
 * Function for focusing the Float Element.
 * @param overAllWrapper - overall wrapper of multiselect.
 * @param componentWrapper - wrapper element of multiselect.
 */
function floatLabelFocus(overAllWrapper, componentWrapper) {
    overAllWrapper.classList.add('e-input-focus');
    var label = componentWrapper.querySelector('.' + FLOATTEXT);
    if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(label)) {
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([label], LABELTOP);
        if (label.classList.contains(LABELBOTTOM)) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([label], LABELBOTTOM);
        }
    }
}
/**
 * Function to focus the Float Label element.
 * @param overAllWrapper - overall wrapper of multiselect.
 * @param componentWrapper - wrapper element of multiselect.
 * @param value - Value of the MultiSelect.
 * @param floatLabelType - Specify the FloatLabel Type.
 * @param placeholder - Specify the PlaceHolder text.
 */
function floatLabelBlur(overAllWrapper, componentWrapper, value, floatLabelType, placeholder) {
    overAllWrapper.classList.remove('e-input-focus');
    var label = componentWrapper.querySelector('.' + FLOATTEXT);
    if (value && value.length <= 0 && floatLabelType === 'Auto' && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(label)) {
        if (label.classList.contains(LABELTOP)) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([label], LABELTOP);
        }
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([label], LABELBOTTOM);
    }
}


/***/ }),

/***/ "./node_modules/@syncfusion/ej2-dropdowns/src/multi-select/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-dropdowns/src/multi-select/index.js ***!
  \**************************************************************************/
/*! exports provided: MultiSelect, CheckBoxSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _multi_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multi-select */ "./node_modules/@syncfusion/ej2-dropdowns/src/multi-select/multi-select.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultiSelect", function() { return _multi_select__WEBPACK_IMPORTED_MODULE_0__["MultiSelect"]; });

/* harmony import */ var _checkbox_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox-selection */ "./node_modules/@syncfusion/ej2-dropdowns/src/multi-select/checkbox-selection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckBoxSelection", function() { return _checkbox_selection__WEBPACK_IMPORTED_MODULE_1__["CheckBoxSelection"]; });

/**
 * export all modules from current location
 */




/***/ }),

/***/ "./node_modules/@syncfusion/ej2-dropdowns/src/multi-select/multi-select.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-dropdowns/src/multi-select/multi-select.js ***!
  \*********************************************************************************/
/*! exports provided: MultiSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelect", function() { return MultiSelect; });
/* harmony import */ var _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../drop-down-base/drop-down-base */ "./node_modules/@syncfusion/ej2-dropdowns/src/drop-down-base/drop-down-base.js");
/* harmony import */ var _syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-popups */ "./node_modules/@syncfusion/ej2-popups/index.js");
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-base */ "./node_modules/@syncfusion/ej2-base/index.js");
/* harmony import */ var _common_incremental_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/incremental-search */ "./node_modules/@syncfusion/ej2-dropdowns/src/common/incremental-search.js");
/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-data */ "./node_modules/@syncfusion/ej2-data/index.js");
/* harmony import */ var _float_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./float-label */ "./node_modules/@syncfusion/ej2-dropdowns/src/multi-select/float-label.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
/// <reference path='../drop-down-base/drop-down-base-model.d.ts'/>









/* tslint:disable */


/* tslint:enable */
var FOCUS = 'e-input-focus';
var DISABLED = 'e-disabled';
var OVER_ALL_WRAPPER = 'e-multiselect e-input-group e-control-wrapper';
var ELEMENT_WRAPPER = 'e-multi-select-wrapper';
var ELEMENT_MOBILE_WRAPPER = 'e-mob-wrapper';
var HIDE_LIST = 'e-hide-listitem';
var DELIMITER_VIEW = 'e-delim-view';
var CHIP_WRAPPER = 'e-chips-collection';
var CHIP = 'e-chips';
var CHIP_CONTENT = 'e-chipcontent';
var CHIP_CLOSE = 'e-chips-close';
var CHIP_SELECTED = 'e-chip-selected';
var SEARCHBOX_WRAPPER = 'e-searcher';
var DELIMITER_VIEW_WRAPPER = 'e-delimiter';
var ZERO_SIZE = 'e-zero-size';
var REMAIN_WRAPPER = 'e-remain';
var CLOSEICON_CLASS = 'e-chips-close e-close-hooker';
var DELIMITER_WRAPPER = 'e-delim-values';
var POPUP_WRAPPER = 'e-ddl e-popup e-multi-select-list-wrapper';
var INPUT_ELEMENT = 'e-dropdownbase';
var RTL_CLASS = 'e-rtl';
var CLOSE_ICON_HIDE = 'e-close-icon-hide';
var MOBILE_CHIP = 'e-mob-chip';
var FOOTER = 'e-ddl-footer';
var HEADER = 'e-ddl-header';
var DISABLE_ICON = 'e-ddl-disable-icon';
var SPINNER_CLASS = 'e-ms-spinner-icon';
var HIDDEN_ELEMENT = 'e-multi-hidden';
var destroy = 'destroy';
var dropdownIcon = 'e-input-group-icon e-ddl-icon';
var iconAnimation = 'e-icon-anim';
var TOTAL_COUNT_WRAPPER = 'e-delim-total';
var BOX_ELEMENT = 'e-multiselect-box';
var FILTERPARENT = 'e-filter-parent';
var CUSTOM_WIDTH = 'e-search-custom-width';
/**
 * The Multiselect allows the user to pick a more than one value from list of predefined values.
 * ```html
 * <select id="list">
 *      <option value='1'>Badminton</option>
 *      <option value='2'>Basketball</option>
 *      <option value='3'>Cricket</option>
 *      <option value='4'>Football</option>
 *      <option value='5'>Tennis</option>
 * </select>
 * ```
 * ```typescript
 * <script>
 *   var multiselectObj = new Multiselect();
 *   multiselectObj.appendTo("#list");
 * </script>
 * ```
 */
var MultiSelect = /** @class */ (function (_super) {
    __extends(MultiSelect, _super);
    /**
     * Constructor for creating the DropDownList widget.
     */
    function MultiSelect(option, element) {
        var _this = _super.call(this, option, element) || this;
        _this.isValidKey = false;
        _this.selectAllEventData = [];
        _this.selectAllEventEle = [];
        _this.scrollFocusStatus = false;
        _this.keyDownStatus = false;
        return _this;
    }
    ;
    MultiSelect.prototype.enableRTL = function (state) {
        if (state) {
            this.overAllWrapper.classList.add(RTL_CLASS);
        }
        else {
            this.overAllWrapper.classList.remove(RTL_CLASS);
        }
        if (this.popupObj) {
            this.popupObj.enableRtl = state;
            this.popupObj.dataBind();
        }
    };
    MultiSelect.prototype.requiredModules = function () {
        var modules = [];
        if (this.mode === 'CheckBox') {
            this.isGroupChecking = this.enableGroupCheckBox;
            if (this.enableGroupCheckBox) {
                var prevOnChange = this.isProtectedOnChange;
                this.isProtectedOnChange = true;
                this.enableSelectionOrder = false;
                this.isProtectedOnChange = prevOnChange;
            }
            this.allowCustomValue = false;
            this.hideSelectedItem = false;
            this.closePopupOnSelect = false;
            modules.push({
                member: 'CheckBoxSelection',
                args: [this]
            });
        }
        return modules;
    };
    MultiSelect.prototype.updateHTMLAttribute = function () {
        if (Object.keys(this.htmlAttributes).length) {
            for (var _i = 0, _a = Object.keys(this.htmlAttributes); _i < _a.length; _i++) {
                var htmlAttr = _a[_i];
                switch (htmlAttr) {
                    case 'class':
                        this.overAllWrapper.classList.add(this.htmlAttributes[htmlAttr]);
                        this.popupWrapper.classList.add(this.htmlAttributes[htmlAttr]);
                        break;
                    case 'disabled':
                        this.enable(false);
                        break;
                    case 'placeholder':
                        if (!this.placeholder) {
                            this.inputElement.setAttribute(htmlAttr, this.htmlAttributes[htmlAttr]);
                            this.setProperties({ placeholder: this.inputElement.placeholder }, true);
                            this.refreshPlaceHolder();
                        }
                        break;
                    default:
                        var defaultAttr = ['id'];
                        var validateAttr = ['name', 'required', 'aria-required', 'form'];
                        var containerAttr = ['title', 'role', 'style', 'class'];
                        if (defaultAttr.indexOf(htmlAttr) > -1) {
                            this.element.setAttribute(htmlAttr, this.htmlAttributes[htmlAttr]);
                        }
                        else if (htmlAttr.indexOf('data') === 0 || validateAttr.indexOf(htmlAttr) > -1) {
                            this.hiddenElement.setAttribute(htmlAttr, this.htmlAttributes[htmlAttr]);
                        }
                        else if (containerAttr.indexOf(htmlAttr) > -1) {
                            this.overAllWrapper.setAttribute(htmlAttr, this.htmlAttributes[htmlAttr]);
                        }
                        else {
                            this.inputElement.setAttribute(htmlAttr, this.htmlAttributes[htmlAttr]);
                        }
                        break;
                }
            }
        }
    };
    MultiSelect.prototype.updateReadonly = function (state) {
        if (state || this.mode === 'CheckBox') {
            this.inputElement.setAttribute('readonly', 'true');
        }
        else {
            this.inputElement.removeAttribute('readonly');
        }
    };
    MultiSelect.prototype.updateClearButton = function (state) {
        if (state) {
            if (this.overAllClear.parentNode) {
                this.overAllClear.style.display = '';
            }
            else {
                this.componentWrapper.appendChild(this.overAllClear);
            }
            this.componentWrapper.classList.remove(CLOSE_ICON_HIDE);
        }
        else {
            this.overAllClear.style.display = 'none';
            this.componentWrapper.classList.add(CLOSE_ICON_HIDE);
        }
    };
    MultiSelect.prototype.updateCssClass = function () {
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.cssClass) && this.cssClass !== '') {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([this.overAllWrapper], this.cssClass.split(' '));
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([this.popupWrapper], this.cssClass.split(' '));
        }
    };
    MultiSelect.prototype.onPopupShown = function () {
        var _this = this;
        var listItems;
        var mainListItems;
        if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Browser"].isDevice && (this.mode === 'CheckBox' && this.allowFiltering)) {
            var proxy_1 = this;
            window.onpopstate = function () {
                proxy_1.hidePopup();
                proxy_1.inputElement.focus();
            };
            history.pushState({}, '');
        }
        var animModel = { name: 'FadeIn', duration: 100 };
        var eventArgs = { popup: this.popupObj, cancel: false, animation: animModel };
        this.trigger('open', eventArgs, function (eventArgs) {
            if (!eventArgs.cancel) {
                _this.focusAtFirstListItem();
                document.body.appendChild(_this.popupObj.element);
                if (_this.mode === 'CheckBox' && _this.enableGroupCheckBox && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(_this.fields.groupBy)) {
                    _this.updateListItems(_this.list.querySelectorAll('li.e-list-item'), _this.mainList.querySelectorAll('li.e-list-item'));
                }
                if (_this.mode === 'CheckBox' || _this.showDropDownIcon) {
                    Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([_this.overAllWrapper], [iconAnimation]);
                }
                _this.refreshPopup();
                _this.popupObj.show(eventArgs.animation, (_this.zIndex === 1000) ? _this.element : null);
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["attributes"])(_this.inputElement, { 'aria-expanded': 'true' });
                if (_this.isFirstClick) {
                    _this.loadTemplate();
                }
            }
        });
    };
    MultiSelect.prototype.updateListItems = function (listItems, mainListItems) {
        for (var i = 0; i < listItems.length; i++) {
            this.findGroupStart(listItems[i]);
            this.findGroupStart(mainListItems[i]);
        }
        this.deselectHeader();
    };
    MultiSelect.prototype.loadTemplate = function () {
        this.refreshListItems(null);
        if (this.mode === 'CheckBox') {
            this.removeFocus();
        }
        this.notify('reOrder', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox', e: this });
    };
    MultiSelect.prototype.setScrollPosition = function () {
        if (((!this.hideSelectedItem && this.mode !== 'CheckBox') || (this.mode === 'CheckBox' && !this.enableSelectionOrder)) &&
            (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.value) && (this.value.length > 0))) {
            var valueEle = this.findListElement((this.hideSelectedItem ? this.ulElement : this.list), 'li', 'data-value', this.value[this.value.length - 1]);
            if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(valueEle)) {
                this.scrollBottom(valueEle);
            }
        }
    };
    MultiSelect.prototype.focusAtFirstListItem = function () {
        if (this.ulElement && this.ulElement.querySelector('li.'
            + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].li)) {
            var element = void 0;
            if (this.mode === 'CheckBox') {
                this.removeFocus();
                return;
            }
            else {
                element = this.ulElement.querySelector('li.'
                    + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].li + ':not(.'
                    + HIDE_LIST + ')');
            }
            if (element !== null) {
                this.removeFocus();
                this.addListFocus(element);
            }
        }
    };
    MultiSelect.prototype.focusAtLastListItem = function (data) {
        var activeElement;
        if (data) {
            activeElement = Object(_common_incremental_search__WEBPACK_IMPORTED_MODULE_3__["Search"])(data, this.liCollections, 'StartsWith', this.ignoreCase);
        }
        else {
            if (this.value && this.value.length) {
                Object(_common_incremental_search__WEBPACK_IMPORTED_MODULE_3__["Search"])(this.value[this.value.length - 1], this.liCollections, 'StartsWith', this.ignoreCase);
            }
            else {
                activeElement = null;
            }
        }
        if (activeElement && activeElement.item !== null) {
            this.addListFocus(activeElement.item);
            this.scrollBottom(activeElement.item, activeElement.index);
        }
    };
    MultiSelect.prototype.getAriaAttributes = function () {
        var ariaAttributes = {
            'aria-disabled': 'false',
            'aria-owns': this.element.id + '_options',
            'role': 'textbox',
            'aria-multiselectable': 'true',
            'aria-activedescendant': 'null',
            'aria-haspopup': 'true',
            'aria-expanded': 'false'
        };
        return ariaAttributes;
    };
    MultiSelect.prototype.updateListARIA = function () {
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["attributes"])(this.ulElement, { 'id': this.element.id + '_options', 'role': 'listbox', 'aria-hidden': 'false' });
        var disableStatus = (this.inputElement.disabled) ? true : false;
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["attributes"])(this.inputElement, this.getAriaAttributes());
        if (disableStatus) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["attributes"])(this.inputElement, { 'aria-disabled': 'true' });
        }
        this.ensureAriaDisabled((disableStatus) ? 'true' : 'false');
    };
    MultiSelect.prototype.ensureAriaDisabled = function (status) {
        if (this.htmlAttributes && this.htmlAttributes['aria-disabled']) {
            var attr = this.htmlAttributes;
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["extend"])(attr, { 'aria-disabled': status }, attr);
            this.setProperties({ htmlAttributes: attr }, true);
        }
    };
    MultiSelect.prototype.removelastSelection = function (e) {
        var elements;
        elements = this.chipCollectionWrapper.querySelectorAll('span.' + CHIP);
        var value = elements[elements.length - 1].getAttribute('data-value');
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.value)) {
            this.tempValues = this.value.slice();
        }
        this.removeValue(value, e);
        this.removeChipSelection();
        this.updateDelimeter(this.delimiterChar, e);
        this.makeTextBoxEmpty();
        if (this.mainList && this.listData) {
            this.refreshSelection();
        }
        this.checkPlaceholderSize();
    };
    MultiSelect.prototype.onActionFailure = function (e) {
        _super.prototype.onActionFailure.call(this, e);
        this.renderPopup();
        this.onPopupShown();
    };
    MultiSelect.prototype.targetElement = function () {
        this.targetInputElement = this.inputElement;
        if (this.mode === 'CheckBox' && this.allowFiltering) {
            this.notify('targetElement', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox' });
        }
        return this.targetInputElement.value;
    };
    MultiSelect.prototype.getForQuery = function (valuecheck) {
        var predicate;
        var field = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.fields.value) ? this.fields.text : this.fields.value;
        for (var i = 0; i < valuecheck.length; i++) {
            if (i === 0) {
                predicate = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_4__["Predicate"](field, 'equal', valuecheck[i]);
            }
            else {
                predicate = predicate.or(field, 'equal', valuecheck[i]);
            }
        }
        return this.getQuery(this.query).where(predicate);
    };
    MultiSelect.prototype.onActionComplete = function (ulElement, list, e, isUpdated) {
        _super.prototype.onActionComplete.call(this, ulElement, list, e);
        this.updateSelectElementData(this.allowFiltering);
        var proxy = this;
        var valuecheck = [];
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.value) && !this.allowCustomValue) {
            for (var i = 0; i < this.value.length; i++) {
                var checkEle = this.findListElement(((this.allowFiltering && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.mainList)) ? this.mainList : ulElement), 'li', 'data-value', proxy.value[i]);
                if (!checkEle) {
                    valuecheck.push(proxy.value[i]);
                }
            }
        }
        if (valuecheck.length > 0 && this.dataSource instanceof _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_4__["DataManager"] && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.value)) {
            this.dataSource.executeQuery(this.getForQuery(valuecheck)).then(function (e) {
                proxy.addItem(e.result, list.length);
                proxy.updateActionList(ulElement, list, e);
            });
        }
        else {
            this.updateActionList(ulElement, list, e);
        }
    };
    MultiSelect.prototype.updateActionList = function (ulElement, list, e, isUpdated) {
        if (this.mode === 'CheckBox' && this.showSelectAll) {
            this.notify('selectAll', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox' });
        }
        if (!this.mainList && !this.mainData) {
            this.mainList = ulElement.cloneNode ? ulElement.cloneNode(true) : ulElement;
            this.mainData = list;
            this.mainListCollection = this.liCollections;
        }
        else if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.mainData) && this.mainData.length === 0) {
            this.mainData = list;
        }
        if ((this.remoteCustomValue || list.length <= 0) && this.allowCustomValue && this.inputFocus && this.allowFiltering) {
            this.checkForCustomValue(this.tempQuery, this.fields);
            return;
        }
        if (this.value && this.value.length && ((this.mode !== 'CheckBox' && this.inputElement.value !== '') ||
            this.mode === 'CheckBox')) {
            this.refreshSelection();
        }
        this.updateListARIA();
        this.unwireListEvents();
        this.wireListEvents();
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.setInitialValue)) {
            this.setInitialValue();
        }
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.selectAllAction)) {
            this.selectAllAction();
        }
        if (this.setDynValue) {
            if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.text) && (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.value) || this.value.length === 0)) {
                this.initialTextUpdate();
            }
            this.initialValueUpdate();
            this.initialUpdate();
            this.refreshPlaceHolder();
            if (this.mode !== 'CheckBox' && this.changeOnBlur) {
                this.updateValueState(null, this.value, null);
            }
        }
        this.renderPopup();
        if (this.beforePopupOpen) {
            this.beforePopupOpen = false;
            this.onPopupShown();
        }
    };
    MultiSelect.prototype.refreshSelection = function () {
        var value;
        var element;
        var className = this.hideSelectedItem ?
            HIDE_LIST :
            _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].selected;
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.value)) {
            for (var index = 0; !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.value[index]); index++) {
                value = this.value[index];
                element = this.findListElement(this.list, 'li', 'data-value', value);
                if (element) {
                    Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([element], className);
                    if (this.hideSelectedItem && element.previousSibling
                        && element.previousElementSibling.classList.contains(_drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].group)
                        && (!element.nextElementSibling ||
                            element.nextElementSibling.classList.contains(_drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].group))) {
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([element.previousElementSibling], className);
                    }
                    if (this.hideSelectedItem && this.fields.groupBy && !element.previousElementSibling.classList.contains(HIDE_LIST)) {
                        this.hideGroupItem(value);
                    }
                    if (this.hideSelectedItem && element.classList.contains(_drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].focus)) {
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])([element], _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].focus);
                        var listEle = element.parentElement.querySelectorAll('.' +
                            _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].li + ':not(.' + HIDE_LIST + ')');
                        if (listEle.length > 0) {
                            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([listEle[0]], _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].focus);
                        }
                        else {
                            this.ulElement = this.ulElement.cloneNode ? this.ulElement.cloneNode(true) : this.ulElement;
                            this.l10nUpdate();
                            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([this.list], _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].noData);
                        }
                    }
                    element.setAttribute('aria-selected', 'true');
                    if (this.mode === 'CheckBox' && element.classList.contains('e-active')) {
                        var ariaValue = element.firstElementChild.getAttribute('aria-checked');
                        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(ariaValue) || ariaValue === 'false') {
                            var args = {
                                module: 'CheckBoxSelection',
                                enable: this.mode === 'CheckBox',
                                li: element,
                                e: null
                            };
                            this.notify('updatelist', args);
                        }
                    }
                }
            }
        }
        this.checkSelectAll();
        this.checkMaxSelection();
    };
    MultiSelect.prototype.hideGroupItem = function (value) {
        var element;
        var element1;
        var className = this.hideSelectedItem ?
            HIDE_LIST :
            _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].selected;
        element1 = element = this.findListElement(this.ulElement, 'li', 'data-value', value);
        var i = 0;
        var j = 0;
        var temp = true;
        var temp1 = true;
        do {
            if (element && element.previousElementSibling
                && (!element.previousElementSibling.classList.contains(HIDE_LIST) &&
                    element.previousElementSibling.classList.contains(_drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].li))) {
                temp = false;
            }
            if (!temp || !element || (element.previousElementSibling
                && element.previousElementSibling.classList.contains(_drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].group))) {
                i = 10;
            }
            else {
                element = element.previousElementSibling;
            }
            if (element1 && element1.nextElementSibling
                && (!element1.nextElementSibling.classList.contains(HIDE_LIST) &&
                    element1.nextElementSibling.classList.contains(_drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].li))) {
                temp1 = false;
            }
            if (!temp1 || !element1 || (element1.nextElementSibling
                && element1.nextElementSibling.classList.contains(_drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].group))) {
                j = 10;
            }
            else {
                element1 = element1.nextElementSibling;
            }
        } while (i < 10 || j < 10);
        if (temp && temp1 && !element.previousElementSibling.classList.contains(HIDE_LIST)) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([element.previousElementSibling], className);
        }
        else if (temp && temp1 && element.previousElementSibling.classList.contains(HIDE_LIST)) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])([element.previousElementSibling], className);
        }
    };
    MultiSelect.prototype.checkSelectAll = function () {
        var groupItemLength = this.list.querySelectorAll('li.e-list-group-item.e-active').length;
        var listItem = this.list.querySelectorAll('li.e-list-item');
        var searchCount = this.list.querySelectorAll('li.' + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].li).length;
        var searchActiveCount = this.list.querySelectorAll('li.' + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].selected).length;
        if (this.enableGroupCheckBox && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.fields.groupBy)) {
            searchActiveCount = searchActiveCount - groupItemLength;
        }
        if ((searchCount === searchActiveCount || searchActiveCount === this.maximumSelectionLength)
            && (this.mode === 'CheckBox' && this.showSelectAll)) {
            this.notify('checkSelectAll', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox', value: 'check' });
        }
        else if ((searchCount !== searchActiveCount) && (this.mode === 'CheckBox' && this.showSelectAll)) {
            this.notify('checkSelectAll', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox', value: 'uncheck' });
        }
        if (this.enableGroupCheckBox && this.fields.groupBy && !this.enableSelectionOrder) {
            for (var i = 0; i < listItem.length; i++) {
                this.findGroupStart(listItem[i]);
            }
            this.deselectHeader();
        }
    };
    MultiSelect.prototype.openClick = function (e) {
        if (!this.openOnClick && this.mode !== 'CheckBox') {
            if (this.targetElement() !== '') {
                this.showPopup();
            }
            else {
                this.hidePopup();
            }
        }
        else if (!this.openOnClick && this.mode === 'CheckBox' && !this.isPopupOpen()) {
            this.showPopup();
        }
    };
    MultiSelect.prototype.KeyUp = function (e) {
        var _this = this;
        if (this.mode === 'CheckBox' && !this.openOnClick) {
            var char = String.fromCharCode(e.keyCode);
            var isWordCharacter = char.match(/\w/);
            if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(isWordCharacter)) {
                this.isValidKey = true;
            }
        }
        this.isValidKey = (this.isPopupOpen() && e.keyCode === 8) || this.isValidKey;
        if (this.isValidKey) {
            this.isValidKey = false;
            this.expandTextbox();
            this.showOverAllClear();
            switch (e.keyCode) {
                default:
                    if (!this.isPopupOpen() && this.openOnClick) {
                        this.showPopup();
                    }
                    this.openClick(e);
                    if (this.checkTextLength() && !this.allowFiltering && (e.keyCode !== 8)) {
                        this.focusAtFirstListItem();
                    }
                    else {
                        var text = this.targetElement();
                        this.keyCode = e.keyCode;
                        if (this.allowFiltering) {
                            var eventArgs_1 = {
                                preventDefaultAction: false,
                                text: this.targetElement(),
                                updateData: function (dataSource, query, fields) {
                                    if (eventArgs_1.cancel) {
                                        return;
                                    }
                                    _this.isFiltered = true;
                                    _this.remoteFilterAction = true;
                                    _this.dataUpdater(dataSource, query, fields);
                                },
                                event: e,
                                cancel: false
                            };
                            this.trigger('filtering', eventArgs_1, function (eventArgs) {
                                if (!eventArgs.cancel) {
                                    if (!_this.isFiltered && !eventArgs.preventDefaultAction) {
                                        _this.filterAction = true;
                                        _this.dataUpdater(_this.dataSource, null, _this.fields);
                                    }
                                }
                            });
                        }
                        else if (this.allowCustomValue) {
                            var query = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_4__["Query"]();
                            query = (text !== '') ? query.where(this.fields.text, 'startswith', text, this.ignoreCase, this.ignoreAccent) : query;
                            this.dataUpdater(this.mainData, query, this.fields);
                            break;
                        }
                        else {
                            var liCollections = void 0;
                            liCollections = this.list.querySelectorAll('li.' + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].li + ':not(.e-hide-listitem)');
                            var activeElement = Object(_common_incremental_search__WEBPACK_IMPORTED_MODULE_3__["Search"])(this.targetElement(), liCollections, 'StartsWith', this.ignoreCase);
                            if (activeElement && activeElement.item !== null) {
                                this.addListFocus(activeElement.item);
                                this.list.scrollTop =
                                    activeElement.item.offsetHeight * activeElement.index;
                            }
                            else if (this.targetElement() !== '') {
                                this.removeFocus();
                            }
                            else {
                                this.focusAtFirstListItem();
                            }
                        }
                    }
            }
        }
    };
    /**
     * To filter the data from given data source by using query
     * @param  {Object[] | DataManager } dataSource - Set the data source to filter.
     * @param  {Query} query - Specify the query to filter the data.
     * @param  {FieldSettingsModel} fields - Specify the fields to map the column in the data table.
     * @return {void}.
     */
    MultiSelect.prototype.filter = function (dataSource, query, fields) {
        this.isFiltered = true;
        this.remoteFilterAction = true;
        this.dataUpdater(dataSource, query, fields);
    };
    MultiSelect.prototype.getQuery = function (query) {
        var filterQuery = query ? query.clone() : this.query ? this.query.clone() : new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_4__["Query"]();
        if (this.filterAction) {
            if (this.targetElement() !== null) {
                var dataType = this.typeOfData(this.dataSource).typeof;
                if (!(this.dataSource instanceof _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_4__["DataManager"]) && dataType === 'string' || dataType === 'number') {
                    filterQuery.where('', this.filterType, this.targetElement(), this.ignoreCase, this.ignoreAccent);
                }
                else {
                    var fields = this.fields;
                    filterQuery.where(!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(fields.text) ? fields.text : '', this.filterType, this.targetElement(), this.ignoreCase, this.ignoreAccent);
                }
            }
            return filterQuery;
        }
        else {
            return query ? query : this.query ? this.query : new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_4__["Query"]();
        }
    };
    MultiSelect.prototype.dataUpdater = function (dataSource, query, fields) {
        this.isDataFetched = false;
        if (this.targetElement().trim() === '') {
            var list = this.mainList.cloneNode ? this.mainList.cloneNode(true) : this.mainList;
            if (this.backCommand) {
                this.remoteCustomValue = false;
                this.onActionComplete(list, this.mainData);
                if (this.value && this.value.length) {
                    this.refreshSelection();
                }
                if (this.keyCode !== 8) {
                    this.focusAtFirstListItem();
                }
                this.notify('reOrder', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox', e: this });
            }
        }
        else {
            this.resetList(dataSource, fields, query);
            if (this.allowCustomValue) {
                if (!(dataSource instanceof _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_4__["DataManager"])) {
                    this.checkForCustomValue(query, fields);
                }
                else {
                    this.remoteCustomValue = true;
                    this.tempQuery = query;
                }
            }
        }
        this.refreshPopup();
        if (this.mode === 'CheckBox') {
            this.removeFocus();
        }
    };
    MultiSelect.prototype.checkForCustomValue = function (query, fields) {
        var dataChecks = !this.getValueByText(this.inputElement.value, this.ignoreCase);
        if (this.allowCustomValue && dataChecks) {
            var value = this.inputElement.value;
            var field = fields ? fields : this.fields;
            var customData = (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.mainData) && this.mainData.length > 0) ?
                this.mainData[0] : this.mainData;
            if (typeof (customData) !== 'string') {
                var dataItem = {};
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["setValue"])(field.text, value, dataItem);
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["setValue"])(field.value, value, dataItem);
                var tempData = JSON.parse(JSON.stringify(this.listData));
                tempData.splice(0, 0, dataItem);
                this.resetList(tempData, field, query);
            }
            else {
                var tempData = [this.inputElement.value];
                this.resetList(tempData, field);
            }
        }
        if (this.value && this.value.length) {
            this.refreshSelection();
        }
    };
    MultiSelect.prototype.getNgDirective = function () {
        return 'EJS-MULTISELECT';
    };
    MultiSelect.prototype.wrapperClick = function (e) {
        this.setDynValue = false;
        if (!this.enabled) {
            return;
        }
        if (e.target === this.overAllClear) {
            e.preventDefault();
            return;
        }
        if (!this.inputFocus) {
            this.inputElement.focus();
        }
        if (!this.readonly) {
            if (e.target && e.target.classList.toString().indexOf(CHIP_CLOSE) !== -1) {
                if (this.isPopupOpen()) {
                    this.refreshPopup();
                }
                return;
            }
            if (!this.isPopupOpen() &&
                (this.openOnClick || (this.showDropDownIcon && e.target && e.target.className === dropdownIcon))) {
                this.showPopup();
            }
            else {
                this.hidePopup();
                if (this.mode === 'CheckBox') {
                    this.showOverAllClear();
                    this.inputFocus = true;
                    if (!this.overAllWrapper.classList.contains(FOCUS)) {
                        this.overAllWrapper.classList.add(FOCUS);
                    }
                }
            }
        }
        e.preventDefault();
    };
    MultiSelect.prototype.enable = function (state) {
        if (state) {
            this.overAllWrapper.classList.remove(DISABLED);
            this.inputElement.removeAttribute('disabled');
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["attributes"])(this.inputElement, { 'aria-disabled': 'false' });
            this.ensureAriaDisabled('false');
        }
        else {
            this.overAllWrapper.classList.add(DISABLED);
            this.inputElement.setAttribute('disabled', 'true');
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["attributes"])(this.inputElement, { 'aria-disabled': 'true' });
            this.ensureAriaDisabled('true');
        }
        if (this.enabled !== state) {
            this.enabled = state;
        }
        this.hidePopup();
    };
    MultiSelect.prototype.onBlur = function (eve) {
        var target;
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(eve)) {
            target = eve.relatedTarget;
        }
        if (this.popupObj && document.body.contains(this.popupObj.element) && this.popupObj.element.contains(target)) {
            if (this.mode !== 'CheckBox') {
                this.inputElement.focus();
            }
            return;
        }
        if (this.mode === 'CheckBox' && _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Browser"].isIE && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(eve)) {
            this.inputFocus = false;
            this.overAllWrapper.classList.remove(FOCUS);
            return;
        }
        if (this.scrollFocusStatus) {
            if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(eve)) {
                eve.preventDefault();
            }
            this.inputElement.focus();
            this.scrollFocusStatus = false;
            return;
        }
        this.inputFocus = false;
        this.overAllWrapper.classList.remove(FOCUS);
        if (this.mode !== 'Box' && this.mode !== 'CheckBox') {
            this.refreshListItems(null);
            this.updateDelimView();
        }
        if (this.changeOnBlur) {
            this.updateValueState(eve, this.value, this.tempValues);
            this.dispatchEvent(this.hiddenElement, 'change');
        }
        this.overAllClear.style.display = 'none';
        if (this.isPopupOpen()) {
            this.DropDownBaseresetBlazorTemplates(false, false, true, true, false, true, true);
            this.hidePopup();
        }
        this.makeTextBoxEmpty();
        this.trigger('blur');
        this.focused = true;
        if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Browser"].isDevice && this.mode !== 'Delimiter' && this.mode !== 'CheckBox') {
            this.removeChipFocus();
        }
        this.removeChipSelection();
        this.refreshInputHight();
        Object(_float_label__WEBPACK_IMPORTED_MODULE_5__["floatLabelBlur"])(this.overAllWrapper, this.componentWrapper, this.value, this.floatLabelType, this.placeholder);
        this.refreshPlaceHolder();
        if ((this.allowFiltering || (this.enableSelectionOrder === true && this.mode === 'CheckBox'))
            && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.mainList)) {
            this.ulElement = this.mainList;
        }
        this.checkPlaceholderSize();
    };
    MultiSelect.prototype.checkPlaceholderSize = function () {
        if (this.showDropDownIcon) {
            var downIconWidth = this.dropIcon.offsetWidth +
                parseInt(window.getComputedStyle(this.dropIcon).marginRight, 10);
            this.setPlaceholderSize(downIconWidth);
        }
    };
    MultiSelect.prototype.setPlaceholderSize = function (downIconWidth) {
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.value) || this.value.length === 0) {
            if (this.dropIcon.offsetWidth !== 0) {
                this.searchWrapper.style.width = ('calc(100% - ' + (downIconWidth + 10)) + 'px';
            }
            else {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([this.searchWrapper], CUSTOM_WIDTH);
            }
        }
        else if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.value)) {
            this.searchWrapper.removeAttribute('style');
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])([this.searchWrapper], CUSTOM_WIDTH);
        }
    };
    MultiSelect.prototype.refreshInputHight = function () {
        if ((!this.value || !this.value.length) && (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.text) || this.text === '')) {
            this.searchWrapper.classList.remove(ZERO_SIZE);
        }
        else {
            this.searchWrapper.classList.add(ZERO_SIZE);
        }
    };
    MultiSelect.prototype.validateValues = function (newValue, oldValue) {
        return JSON.stringify(newValue.slice().sort()) !== JSON.stringify(oldValue.slice().sort());
    };
    MultiSelect.prototype.updateValueState = function (event, newVal, oldVal) {
        var newValue = newVal ? newVal : [];
        var oldValue = oldVal ? oldVal : [];
        if (this.initStatus && this.validateValues(newValue, oldValue)) {
            var eventArgs = {
                e: event,
                oldValue: oldVal,
                value: newVal,
                isInteracted: event ? true : false,
                element: this.element
            };
            this.trigger('change', eventArgs);
            this.updateTempValue();
            if (!this.changeOnBlur) {
                this.dispatchEvent(this.hiddenElement, 'change');
            }
        }
    };
    MultiSelect.prototype.updateTempValue = function () {
        if (!this.value) {
            this.tempValues = this.value;
        }
        else {
            this.tempValues = this.value.slice();
        }
    };
    MultiSelect.prototype.getPagingCount = function () {
        var height = this.list.classList.contains(_drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].noData) ? null :
            getComputedStyle(this.getItems()[0], null).getPropertyValue('height');
        return Math.round(this.list.offsetHeight / parseInt(height, 10));
    };
    MultiSelect.prototype.pageUpSelection = function (steps) {
        var collection = this.list.querySelectorAll('li.'
            + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].li + ':not(.' + HIDE_LIST + ')' + ':not(.e-reorder-hide)');
        var previousItem;
        previousItem = steps >= 0 ? collection[steps + 1] : collection[0];
        this.addListFocus(previousItem);
        this.scrollBottom(previousItem, this.getIndexByValue(previousItem.getAttribute('data-value')));
    };
    ;
    MultiSelect.prototype.pageDownSelection = function (steps) {
        var list = this.getItems();
        var collection = this.list.querySelectorAll('li.'
            + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].li + ':not(.' + HIDE_LIST + ')' + ':not(.e-reorder-hide)');
        var previousItem;
        previousItem = steps <= collection.length ? collection[steps - 1] : collection[collection.length - 1];
        this.addListFocus(previousItem);
        this.scrollBottom(previousItem, this.getIndexByValue(previousItem.getAttribute('data-value')));
    };
    MultiSelect.prototype.getItems = function () {
        if (!this.list) {
            _super.prototype.render.call(this);
        }
        return this.ulElement ? (this.ulElement.querySelectorAll('.' + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].li).length > 0 &&
            this.ulElement.querySelectorAll('.' + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].li
                + ':not(.' + HIDE_LIST + ')')) : null;
    };
    MultiSelect.prototype.focusInHandler = function (e) {
        if (this.enabled) {
            this.showOverAllClear();
            this.inputFocus = true;
            if (this.value && this.value.length) {
                if (this.mode !== 'Delimiter' && this.mode !== 'CheckBox') {
                    this.chipCollectionWrapper.style.display = '';
                }
                else {
                    this.showDelimWrapper();
                }
                if (this.mode !== 'CheckBox') {
                    this.viewWrapper.style.display = 'none';
                }
            }
            if (this.mode !== 'CheckBox') {
                this.searchWrapper.classList.remove(ZERO_SIZE);
            }
            this.checkPlaceholderSize();
            if (this.focused) {
                var args = { isInteracted: e ? true : false, event: e };
                this.trigger('focus', args);
                this.focused = false;
            }
            if (!this.overAllWrapper.classList.contains(FOCUS)) {
                this.overAllWrapper.classList.add(FOCUS);
            }
            Object(_float_label__WEBPACK_IMPORTED_MODULE_5__["floatLabelFocus"])(this.overAllWrapper, this.componentWrapper);
            if (this.isPopupOpen()) {
                this.refreshPopup();
            }
            return true;
        }
        else {
            return false;
        }
    };
    MultiSelect.prototype.showDelimWrapper = function () {
        if (this.mode === 'CheckBox') {
            this.viewWrapper.style.display = '';
        }
        else {
            this.delimiterWrapper.style.display = '';
        }
        this.componentWrapper.classList.add(DELIMITER_VIEW_WRAPPER);
    };
    MultiSelect.prototype.hideDelimWrapper = function () {
        this.delimiterWrapper.style.display = 'none';
        this.componentWrapper.classList.remove(DELIMITER_VIEW_WRAPPER);
    };
    MultiSelect.prototype.expandTextbox = function () {
        var size = 5;
        if (this.placeholder) {
            size = size > this.inputElement.placeholder.length ? size : this.inputElement.placeholder.length;
        }
        if (this.inputElement.value.length > size) {
            this.inputElement.size = this.inputElement.value.length;
        }
        else {
            this.inputElement.size = size;
        }
    };
    MultiSelect.prototype.isPopupOpen = function () {
        return ((this.popupWrapper !== null) && (this.popupWrapper.parentElement !== null));
    };
    MultiSelect.prototype.refreshPopup = function () {
        if (this.popupObj && this.mobFilter) {
            this.popupObj.setProperties({ width: this.calcPopupWidth() });
            this.popupObj.refreshPosition(this.overAllWrapper);
        }
    };
    MultiSelect.prototype.checkTextLength = function () {
        return this.targetElement().length < 1;
    };
    MultiSelect.prototype.popupKeyActions = function (e) {
        switch (e.keyCode) {
            case 38:
                this.hidePopup();
                if (this.mode === 'CheckBox') {
                    this.inputElement.focus();
                }
                e.preventDefault();
                break;
            case 40:
                if (!this.isPopupOpen()) {
                    this.showPopup();
                    e.preventDefault();
                }
                break;
        }
    };
    MultiSelect.prototype.updateAriaAttribute = function () {
        var focusedItem = this.list.querySelector('.' + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].focus);
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(focusedItem)) {
            this.inputElement.setAttribute('aria-activedescendant', focusedItem.id);
        }
    };
    MultiSelect.prototype.homeNavigation = function (isHome) {
        this.removeFocus();
        var scrollEle = this.ulElement.querySelectorAll('li.' + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].li
            + ':not(.' + HIDE_LIST + ')' + ':not(.e-reorder-hide)');
        if (scrollEle.length > 0) {
            var element = scrollEle[(isHome) ? 0 : (scrollEle.length - 1)];
            element.classList.add(_drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].focus);
            this.scrollBottom(element);
        }
    };
    MultiSelect.prototype.onKeyDown = function (e) {
        if (this.readonly || !this.enabled && this.mode !== 'CheckBox') {
            return;
        }
        this.keyDownStatus = true;
        if (e.keyCode > 111 && e.keyCode < 124) {
            return;
        }
        if (e.altKey) {
            this.popupKeyActions(e);
            return;
        }
        else if (this.isPopupOpen()) {
            var focusedItem = this.list.querySelector('.' + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].focus);
            var activeIndex = void 0;
            switch (e.keyCode) {
                case 36:
                case 35:
                    this.homeNavigation((e.keyCode === 36) ? true : false);
                    break;
                case 33:
                    e.preventDefault();
                    if (focusedItem) {
                        this.getIndexByValue(focusedItem.getAttribute('data-value'));
                        this.pageUpSelection(activeIndex - this.getPagingCount());
                        this.updateAriaAttribute();
                    }
                    return;
                case 34:
                    e.preventDefault();
                    if (focusedItem) {
                        this.getIndexByValue(focusedItem.getAttribute('data-value'));
                        this.pageDownSelection(activeIndex + this.getPagingCount());
                        this.updateAriaAttribute();
                    }
                    return;
                case 38:
                    this.arrowUp(e);
                    break;
                case 40:
                    this.arrowDown(e);
                    break;
                case 27:
                    e.preventDefault();
                    this.hidePopup();
                    if (this.mode === 'CheckBox') {
                        this.inputElement.focus();
                    }
                    return;
                case 13:
                    e.preventDefault();
                    if (this.mode !== 'CheckBox') {
                        this.selectByKey(e);
                    }
                    this.checkPlaceholderSize();
                    return;
                case 32:
                    this.spaceKeySelection(e);
                    return;
                case 9:
                    e.preventDefault();
                    this.hidePopup();
                    this.inputElement.focus();
                    this.overAllWrapper.classList.add(FOCUS);
            }
        }
        else {
            switch (e.keyCode) {
                case 13:
                case 9:
                case 16:
                case 17:
                case 20:
                    return;
                case 40:
                    if (this.openOnClick) {
                        this.showPopup();
                    }
                    break;
                case 27:
                    e.preventDefault();
                    this.escapeAction();
                    return;
            }
        }
        if (this.checkTextLength()) {
            this.keyNavigation(e);
        }
        if (this.mode === 'CheckBox' && this.enableSelectionOrder) {
            this.checkBackCommand(e);
        }
        this.expandTextbox();
        this.refreshPopup();
    };
    MultiSelect.prototype.arrowDown = function (e) {
        e.preventDefault();
        this.moveByList(1);
        this.keyAction = true;
        if (document.activeElement.classList.contains('e-input-filter')
            || (this.mode === 'CheckBox' && !this.allowFiltering && document.activeElement !== this.list)) {
            this.list.focus();
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(this.list, 'keydown', this.onKeyDown, this);
        }
        this.updateAriaAttribute();
    };
    MultiSelect.prototype.arrowUp = function (e) {
        e.preventDefault();
        this.keyAction = true;
        var list = this.list.querySelectorAll('li.'
            + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].li
            + ':not(.' + HIDE_LIST + ')' + ':not(.e-reorder-hide)');
        if (this.enableGroupCheckBox && this.mode === 'CheckBox' && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.fields.groupBy)) {
            list = this.list.querySelectorAll('li.'
                + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].li + ',li.' + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].group
                + ':not(.' + HIDE_LIST + ')' + ':not(.e-reorder-hide)');
        }
        var focuseElem = this.list.querySelector('li.' + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].focus);
        var index = Array.prototype.slice.call(list).indexOf(focuseElem);
        if (index <= 0 && (this.mode === 'CheckBox' && this.allowFiltering)) {
            this.keyAction = false;
            this.notify('inputFocus', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox', value: 'focus' });
        }
        else {
            this.list.focus();
        }
        this.moveByList(-1);
        this.updateAriaAttribute();
    };
    MultiSelect.prototype.spaceKeySelection = function (e) {
        if (this.mode === 'CheckBox') {
            if (!document.activeElement.classList.contains('e-input-filter')) {
                e.preventDefault();
                this.keyAction = true;
                this.list.focus();
            }
            this.selectByKey(e);
        }
        this.checkPlaceholderSize();
    };
    MultiSelect.prototype.checkBackCommand = function (e) {
        if (e.keyCode === 8 && this.targetElement() === '') {
            this.backCommand = false;
        }
        else {
            this.backCommand = true;
        }
    };
    MultiSelect.prototype.keyNavigation = function (e) {
        if ((this.mode !== 'Delimiter' && this.mode !== 'CheckBox') && this.value && this.value.length) {
            switch (e.keyCode) {
                case 37: //left arrow   
                    e.preventDefault();
                    this.moveBy(-1, e);
                    break;
                case 39: //right arrow  
                    e.preventDefault();
                    this.moveBy(1, e);
                    break;
                case 8:
                    this.removelastSelection(e);
                    break;
                case 46: //del
                    this.removeSelectedChip(e);
                    break;
            }
        }
        else if (e.keyCode === 8 && this.mode === 'Delimiter') {
            if (this.value && this.value.length) {
                e.preventDefault();
                var temp = this.value[this.value.length - 1];
                this.removeValue(temp, e);
                this.updateDelimeter(this.delimiterChar, e);
                this.focusAtLastListItem(temp);
            }
        }
    };
    MultiSelect.prototype.selectByKey = function (e) {
        this.removeChipSelection();
        this.selectListByKey(e);
        if (this.hideSelectedItem) {
            this.focusAtFirstListItem();
        }
    };
    MultiSelect.prototype.escapeAction = function () {
        var temp = this.tempValues ? this.tempValues.slice() : [];
        if (this.value && this.validateValues(this.value, temp)) {
            if (this.mode !== 'CheckBox') {
                this.value = temp;
                this.initialValueUpdate();
            }
            if (this.mode !== 'Delimiter' && this.mode !== 'CheckBox') {
                this.chipCollectionWrapper.style.display = '';
            }
            else {
                this.showDelimWrapper();
            }
            this.refreshPlaceHolder();
            if (this.value.length) {
                this.showOverAllClear();
            }
            else {
                this.hideOverAllClear();
            }
        }
        this.makeTextBoxEmpty();
    };
    MultiSelect.prototype.scrollBottom = function (selectedLI, activeIndex) {
        var currentOffset = this.list.offsetHeight;
        var nextBottom = selectedLI.offsetTop + selectedLI.offsetHeight - this.list.scrollTop;
        var nextOffset = this.list.scrollTop + nextBottom - currentOffset;
        var boxRange = (selectedLI.offsetTop + selectedLI.offsetHeight - this.list.scrollTop);
        boxRange = this.fields.groupBy && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.fixedHeaderElement) ?
            boxRange - this.fixedHeaderElement.offsetHeight : boxRange;
        if (activeIndex === 0) {
            this.list.scrollTop = 0;
        }
        else if (nextBottom > currentOffset) {
            this.list.scrollTop = nextOffset;
        }
        else if (!(boxRange > 0 && this.list.offsetHeight > boxRange)) {
            this.list.scrollTop = nextOffset;
        }
    };
    MultiSelect.prototype.scrollTop = function (selectedLI, activeIndex) {
        var nextOffset = selectedLI.offsetTop - this.list.scrollTop;
        var nextBottom = selectedLI.offsetTop + selectedLI.offsetHeight - this.list.scrollTop;
        nextOffset = this.fields.groupBy && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(this.fixedHeaderElement) ?
            nextOffset - this.fixedHeaderElement.offsetHeight : nextOffset;
        var boxRange = (selectedLI.offsetTop + selectedLI.offsetHeight - this.list.scrollTop);
        if (activeIndex === 0) {
            this.list.scrollTop = 0;
        }
        else if (nextOffset < 0) {
            this.list.scrollTop = this.list.scrollTop + nextOffset;
        }
        else if (!(boxRange > 0 && this.list.offsetHeight > boxRange)) {
            this.list.scrollTop = selectedLI.offsetTop - (this.fields.groupBy && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(this.fixedHeaderElement) ?
                this.fixedHeaderElement.offsetHeight : 0);
        }
    };
    MultiSelect.prototype.selectListByKey = function (e) {
        var li = this.list.querySelector('li.' + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].focus);
        var limit = this.value && this.value.length ? this.value.length : 0;
        var target;
        if (li !== null) {
            if (li.classList.contains('e-active')) {
                limit = limit - 1;
            }
            if (this.isValidLI(li) && limit < this.maximumSelectionLength) {
                this.updateListSelection(li, e);
                this.addListFocus(li);
                if (this.mode === 'CheckBox') {
                    this.updateDelimView();
                    this.updateDelimeter(this.delimiterChar, e);
                    this.refreshInputHight();
                    this.checkPlaceholderSize();
                    if (this.enableGroupCheckBox && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.fields.groupBy)) {
                        target = li.firstElementChild.lastElementChild;
                        this.findGroupStart(target);
                        this.deselectHeader();
                    }
                }
                else {
                    this.updateDelimeter(this.delimiterChar, e);
                }
                this.makeTextBoxEmpty();
                if (this.mode !== 'CheckBox') {
                    this.refreshListItems(li.textContent);
                }
                if (!this.changeOnBlur) {
                    this.updateValueState(e, this.value, this.tempValues);
                }
                this.refreshPopup();
            }
            else {
                if (!this.isValidLI(li) && limit < this.maximumSelectionLength) {
                    target = li.firstElementChild.lastElementChild;
                    target.classList.contains('e-check') ? this.selectAllItem(false, e, li) : this.selectAllItem(true, e, li);
                }
            }
            this.refreshSelection();
            if (this.closePopupOnSelect) {
                this.hidePopup();
            }
        }
        this.refreshPlaceHolder();
    };
    MultiSelect.prototype.refreshListItems = function (data) {
        if ((this.allowFiltering || (this.mode === 'CheckBox' && this.enableSelectionOrder === true)
            || this.allowCustomValue) && this.mainList && this.listData) {
            var list = void 0;
            list = this.mainList.cloneNode ? this.mainList.cloneNode(true) : this.mainList;
            this.onActionComplete(list, this.mainData);
            this.focusAtLastListItem(data);
            if (this.value && this.value.length) {
                this.refreshSelection();
            }
        }
    };
    MultiSelect.prototype.removeSelectedChip = function (e) {
        var selectedElem = this.chipCollectionWrapper.querySelector('span.' + CHIP_SELECTED);
        var temp;
        if (selectedElem !== null) {
            if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.value)) {
                this.tempValues = this.value.slice();
            }
            temp = selectedElem.nextElementSibling;
            if (temp !== null) {
                this.removeChipSelection();
                this.addChipSelection(temp, e);
            }
            this.removeValue(selectedElem.getAttribute('data-value'), e);
            this.makeTextBoxEmpty();
        }
        if (this.closePopupOnSelect) {
            this.hidePopup();
        }
        this.checkPlaceholderSize();
    };
    MultiSelect.prototype.moveByTop = function (state) {
        var elements = this.list.querySelectorAll('li.' + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].li);
        var index;
        if (elements.length > 1) {
            this.removeFocus();
            index = state ? 0 : (elements.length - 1);
            this.addListFocus(elements[index]);
            this.scrollBottom(elements[index], index);
        }
        this.updateAriaAttribute();
    };
    MultiSelect.prototype.moveByList = function (position) {
        if (this.list) {
            var elements = this.list.querySelectorAll('li.'
                + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].li
                + ':not(.' + HIDE_LIST + ')' + ':not(.e-reorder-hide)');
            if (this.mode === 'CheckBox' && this.enableGroupCheckBox && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.fields.groupBy)) {
                elements = this.list.querySelectorAll('li.'
                    + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].li + ',li.' + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].group
                    + ':not(.' + HIDE_LIST + ')' + ':not(.e-reorder-hide)');
            }
            var selectedElem = this.list.querySelector('li.' + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].focus);
            var temp = -1;
            if (elements.length) {
                for (var index = 0; index < elements.length; index++) {
                    if (elements[index] === selectedElem) {
                        temp = index;
                        break;
                    }
                }
                if (position > 0) {
                    if (temp < (elements.length - 1)) {
                        this.removeFocus();
                        this.addListFocus(elements[++temp]);
                        this.updateCheck(elements[temp]);
                        this.scrollBottom(elements[temp], temp);
                    }
                }
                else {
                    if (temp > 0) {
                        this.removeFocus();
                        this.addListFocus(elements[--temp]);
                        this.updateCheck(elements[temp]);
                        this.scrollTop(elements[temp], temp);
                    }
                }
            }
        }
    };
    MultiSelect.prototype.updateCheck = function (element) {
        if (this.mode === 'CheckBox' && this.enableGroupCheckBox &&
            !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.fields.groupBy)) {
            var checkElement = element.firstElementChild.lastElementChild;
            if (checkElement.classList.contains('e-check')) {
                element.classList.add('e-active');
            }
            else {
                element.classList.remove('e-active');
            }
        }
    };
    MultiSelect.prototype.moveBy = function (position, e) {
        var elements;
        var selectedElem;
        var temp;
        elements = this.chipCollectionWrapper.querySelectorAll('span.' + CHIP);
        selectedElem = this.chipCollectionWrapper.querySelector('span.' + CHIP_SELECTED);
        if (selectedElem === null) {
            if (position < 0) {
                this.addChipSelection(elements[elements.length - 1], e);
            }
        }
        else {
            if (position < 0) {
                temp = selectedElem.previousElementSibling;
                if (temp !== null) {
                    this.removeChipSelection();
                    this.addChipSelection(temp, e);
                }
            }
            else {
                temp = selectedElem.nextElementSibling;
                this.removeChipSelection();
                if (temp !== null) {
                    this.addChipSelection(temp, e);
                }
            }
        }
    };
    MultiSelect.prototype.chipClick = function (e) {
        if (this.enabled) {
            var elem = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["closest"])(e.target, '.' + CHIP);
            this.removeChipSelection();
            this.addChipSelection(elem, e);
        }
    };
    MultiSelect.prototype.removeChipSelection = function () {
        if (this.chipCollectionWrapper) {
            this.removeChipFocus();
        }
    };
    MultiSelect.prototype.addChipSelection = function (element, e) {
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([element], CHIP_SELECTED);
        this.trigger('chipSelection', e);
    };
    MultiSelect.prototype.onChipRemove = function (e) {
        if (e.which === 3 || e.button === 2) {
            return;
        }
        if (this.enabled && !this.readonly) {
            var element = e.target.parentElement;
            var customVal = element.getAttribute('data-value');
            var value = this.getFormattedValue(customVal);
            if (this.allowCustomValue && ((customVal !== 'false' && value === false) ||
                (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(value) && value.toString() === 'NaN'))) {
                value = customVal;
            }
            if (this.isPopupOpen() && this.mode !== 'CheckBox') {
                this.hidePopup();
            }
            if (!this.inputFocus) {
                this.inputElement.focus();
            }
            this.removeValue(value, e);
            if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.findListElement(this.list, 'li', 'data-value', value)) && this.mainList && this.listData) {
                var list = this.mainList.cloneNode ? this.mainList.cloneNode(true) : this.mainList;
                this.onActionComplete(list, this.mainData);
            }
            this.updateDelimeter(this.delimiterChar, e);
            if (this.placeholder && this.floatLabelType === 'Never') {
                this.makeTextBoxEmpty();
                this.checkPlaceholderSize();
            }
            else {
                this.inputElement.value = '';
            }
            e.preventDefault();
        }
    };
    MultiSelect.prototype.makeTextBoxEmpty = function () {
        this.inputElement.value = '';
        this.refreshPlaceHolder();
    };
    MultiSelect.prototype.refreshPlaceHolder = function () {
        if (this.placeholder && this.floatLabelType === 'Never') {
            if ((this.value && this.value.length) || (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.text) && this.text !== '')) {
                this.inputElement.placeholder = '';
            }
            else {
                this.inputElement.placeholder = this.placeholder;
            }
        }
        else {
            this.setFloatLabelType();
        }
        this.expandTextbox();
    };
    MultiSelect.prototype.removeValue = function (value, eve, length, isClearAll) {
        var _this = this;
        var index = this.value.indexOf(this.getFormattedValue(value));
        if (index === -1 && this.allowCustomValue && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(value)) {
            index = this.value.indexOf(value.toString());
        }
        var targetEle = eve && eve.target;
        isClearAll = (isClearAll || targetEle && targetEle.classList.contains('e-close-hooker')) ? true : null;
        var className = this.hideSelectedItem ?
            HIDE_LIST :
            _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].selected;
        if (index !== -1) {
            var element_1 = this.findListElement(this.list, 'li', 'data-value', value);
            var val_1 = this.getDataByValue(value);
            var eventArgs = {
                e: eve,
                item: element_1,
                itemData: val_1,
                isInteracted: eve ? true : false,
                cancel: false
            };
            this.trigger('removing', eventArgs, function (eventArgs) {
                if (eventArgs.cancel) {
                    _this.removeIndex++;
                }
                else {
                    var removeVal = _this.value.slice(0);
                    removeVal.splice(index, 1);
                    _this.setProperties({ value: [].concat([], removeVal) }, true);
                    if (element_1 !== null) {
                        var hideElement = _this.findListElement(_this.mainList, 'li', 'data-value', value);
                        element_1.setAttribute('aria-selected', 'false');
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])([element_1], className);
                        if (hideElement) {
                            hideElement.setAttribute('aria-selected', 'false');
                            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])([element_1, hideElement], className);
                        }
                        _this.notify('activeList', {
                            module: 'CheckBoxSelection',
                            enable: _this.mode === 'CheckBox', li: element_1,
                            e: _this, index: index
                        });
                        _this.notify('updatelist', { module: 'CheckBoxSelection', enable: _this.mode === 'CheckBox', li: element_1, e: eve });
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["attributes"])(_this.inputElement, { 'aria-activedescendant': element_1.id });
                        if ((_this.value.length !== _this.mainData.length) && (_this.mode === 'CheckBox' && _this.showSelectAll)) {
                            _this.notify('checkSelectAll', { module: 'CheckBoxSelection',
                                enable: _this.mode === 'CheckBox',
                                value: 'uncheck' });
                        }
                    }
                    if (_this.hideSelectedItem && _this.fields.groupBy) {
                        _this.hideGroupItem(value);
                    }
                    _this.updateMainList(true, value);
                    _this.removeChip(value);
                    _this.updateChipStatus();
                    var limit = _this.value && _this.value.length ? _this.value.length : 0;
                    if (limit < _this.maximumSelectionLength) {
                        var collection = _this.list.querySelectorAll('li.'
                            + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].li + ':not(.e-active)');
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(collection, 'e-disable');
                    }
                    _this.trigger('removed', eventArgs);
                    var targetEle_1 = eve && eve.currentTarget;
                    var isSelectAll = (targetEle_1 && targetEle_1.classList.contains('e-selectall-parent')) ? true : null;
                    if (!_this.changeOnBlur && !isClearAll && (eve && length && !isSelectAll)) {
                        _this.updateValueState(eve, _this.value, _this.tempValues);
                    }
                    if (length) {
                        _this.selectAllEventData.push(val_1);
                        _this.selectAllEventEle.push(element_1);
                    }
                    if (length === 1) {
                        if (!_this.changeOnBlur) {
                            _this.updateValueState(eve, _this.value, _this.tempValues);
                        }
                        var args = {
                            event: eve,
                            items: _this.selectAllEventEle,
                            itemData: _this.selectAllEventData,
                            isInteracted: eve ? true : false,
                            isChecked: false
                        };
                        _this.trigger('selectedAll', args);
                        _this.selectAllEventData = [];
                        _this.selectAllEventEle = [];
                    }
                    if (isClearAll) {
                        _this.clearAllCallback(eve, isClearAll);
                    }
                }
            });
        }
    };
    MultiSelect.prototype.updateMainList = function (state, value) {
        if (this.allowFiltering || this.mode === 'CheckBox') {
            var element2 = this.findListElement(this.mainList, 'li', 'data-value', value);
            if (element2) {
                if (state) {
                    element2.setAttribute('aria-selected', 'false');
                    Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])([element2], this.hideSelectedItem ?
                        HIDE_LIST :
                        _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].selected);
                    if (this.mode === 'CheckBox') {
                        element2.firstElementChild.setAttribute('aria-checked', 'false');
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])([element2.firstElementChild.lastElementChild], 'e-check');
                    }
                }
                else {
                    element2.setAttribute('aria-selected', 'true');
                    Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([element2], this.hideSelectedItem ?
                        HIDE_LIST :
                        _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].selected);
                    if (this.mode === 'CheckBox') {
                        element2.firstElementChild.setAttribute('aria-checked', 'true');
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([element2.firstElementChild.lastElementChild], 'e-check');
                    }
                }
            }
        }
    };
    MultiSelect.prototype.removeChip = function (value) {
        if (this.chipCollectionWrapper) {
            var element = this.findListElement(this.chipCollectionWrapper, 'span', 'data-value', value);
            if (element) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["remove"])(element);
            }
        }
    };
    MultiSelect.prototype.setWidth = function (width) {
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(width)) {
            if (typeof width === 'number') {
                this.overAllWrapper.style.width = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["formatUnit"])(width);
            }
            else if (typeof width === 'string') {
                this.overAllWrapper.style.width = (width.match(/px|%|em/)) ? (width) : (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["formatUnit"])(width));
            }
        }
    };
    MultiSelect.prototype.updateChipStatus = function () {
        if (this.value.length) {
            if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.chipCollectionWrapper)) {
                (this.chipCollectionWrapper.style.display = '');
            }
            if (this.mode === 'Delimiter' || this.mode === 'CheckBox') {
                this.showDelimWrapper();
            }
            this.showOverAllClear();
        }
        else {
            if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.chipCollectionWrapper)) {
                this.chipCollectionWrapper.style.display = 'none';
            }
            if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.delimiterWrapper)) {
                (this.delimiterWrapper.style.display = 'none');
            }
            this.hideOverAllClear();
        }
    };
    MultiSelect.prototype.addValue = function (value, text, eve) {
        if (!this.value) {
            this.value = [];
        }
        this.setProperties({ value: [].concat([], this.value, [value]) }, true);
        var element = this.findListElement(this.list, 'li', 'data-value', value);
        this.removeFocus();
        if (element) {
            this.addListFocus(element);
            this.addListSelection(element);
        }
        if (this.mode !== 'Delimiter' && this.mode !== 'CheckBox') {
            this.addChip(text, value, eve);
        }
        if (this.hideSelectedItem && this.fields.groupBy) {
            this.hideGroupItem(value);
        }
        this.updateChipStatus();
        this.checkMaxSelection();
    };
    MultiSelect.prototype.checkMaxSelection = function () {
        var limit = this.value && this.value.length ? this.value.length : 0;
        if (limit === this.maximumSelectionLength) {
            var collection = this.list.querySelectorAll('li.'
                + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].li + ':not(.e-active)');
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])(collection, 'e-disable');
        }
    };
    MultiSelect.prototype.dispatchSelect = function (value, eve, element, isNotTrigger, length) {
        var _this = this;
        if (this.initStatus && !isNotTrigger) {
            var val_2 = this.getDataByValue(value);
            var eventArgs = {
                e: eve,
                item: element,
                itemData: val_2,
                isInteracted: eve ? true : false,
                cancel: false
            };
            this.trigger('select', eventArgs, function (eventArgs) {
                if (!eventArgs.cancel) {
                    if (length) {
                        _this.selectAllEventData.push(val_2);
                        _this.selectAllEventEle.push(element);
                    }
                    if (length === 1) {
                        var args = {
                            event: eve,
                            items: _this.selectAllEventEle,
                            itemData: _this.selectAllEventData,
                            isInteracted: eve ? true : false,
                            isChecked: true
                        };
                        _this.trigger('selectedAll', args);
                        _this.selectAllEventData = [];
                    }
                    _this.updateListSelectEventCallback(value, element, eve);
                }
            });
        }
    };
    MultiSelect.prototype.addChip = function (text, value, e) {
        if (this.chipCollectionWrapper) {
            this.getChip(text, value, e);
        }
    };
    MultiSelect.prototype.removeChipFocus = function () {
        var elements;
        var closeElements;
        elements = this.chipCollectionWrapper.querySelectorAll('span.' + CHIP);
        closeElements = this.chipCollectionWrapper.querySelectorAll('span.' + CHIP_CLOSE.split(' ')[0]);
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(elements, CHIP_SELECTED);
        if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Browser"].isDevice) {
            for (var index = 0; index < closeElements.length; index++) {
                closeElements[index].style.display = 'none';
            }
        }
    };
    MultiSelect.prototype.onMobileChipInteraction = function (e) {
        var chipElem = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["closest"])(e.target, '.' + CHIP);
        var chipClose = chipElem.querySelector('span.' + CHIP_CLOSE.split(' ')[0]);
        if (this.enabled && !this.readonly) {
            if (!chipElem.classList.contains(CHIP_SELECTED)) {
                this.removeChipFocus();
                chipClose.style.display = '';
                chipElem.classList.add(CHIP_SELECTED);
            }
            this.refreshPopup();
            e.preventDefault();
        }
    };
    MultiSelect.prototype.getChip = function (data, value, e) {
        var _this = this;
        var itemData = { text: value, value: value };
        var chip = this.createElement('span', {
            className: CHIP,
            attrs: { 'data-value': value, 'title': data }
        });
        var chipContent = this.createElement('span', { className: CHIP_CONTENT });
        var chipClose = this.createElement('span', { className: CHIP_CLOSE });
        if (this.mainData) {
            itemData = this.getDataByValue(value);
        }
        if (this.valueTemplate && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(itemData)) {
            var compiledString = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["compile"])(this.valueTemplate);
            for (var _i = 0, _a = compiledString(itemData, null, null, this.valueTemplateId, this.isStringTemplate); _i < _a.length; _i++) {
                var item = _a[_i];
                chipContent.appendChild(item);
            }
            this.DropDownBaseupdateBlazorTemplates(false, false, false, false, true, false, false, false);
        }
        else {
            chipContent.innerHTML = data;
        }
        chip.appendChild(chipContent);
        var eventArgs = {
            isInteracted: e ? true : false,
            itemData: itemData,
            e: e,
            setClass: function (classes) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([chip], classes);
            },
            cancel: false
        };
        this.trigger('tagging', eventArgs, function (eventArgs) {
            if (!eventArgs.cancel) {
                if (eventArgs.setClass && typeof eventArgs.setClass === 'string' && Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isBlazor"])()) {
                    Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([chip], eventArgs.setClass);
                }
                if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Browser"].isDevice) {
                    chip.classList.add(MOBILE_CHIP);
                    Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["append"])([chipClose], chip);
                    chipClose.style.display = 'none';
                    _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(chip, 'click', _this.onMobileChipInteraction, _this);
                }
                else {
                    _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(chip, 'mousedown', _this.chipClick, _this);
                    if (_this.showClearButton) {
                        chip.appendChild(chipClose);
                    }
                }
                _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(chipClose, 'mousedown', _this.onChipRemove, _this);
                _this.chipCollectionWrapper.appendChild(chip);
                if (!_this.changeOnBlur && e) {
                    _this.updateValueState(e, _this.value, _this.tempValues);
                }
            }
        });
    };
    MultiSelect.prototype.calcPopupWidth = function () {
        var width = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["formatUnit"])(this.popupWidth);
        if (width.indexOf('%') > -1) {
            var inputWidth = (this.componentWrapper.offsetWidth) * parseFloat(width) / 100;
            width = inputWidth.toString() + 'px';
        }
        return width;
    };
    MultiSelect.prototype.mouseIn = function () {
        if (this.enabled && !this.readonly) {
            this.showOverAllClear();
        }
    };
    MultiSelect.prototype.mouseOut = function () {
        if (!this.inputFocus) {
            this.overAllClear.style.display = 'none';
        }
    };
    MultiSelect.prototype.listOption = function (dataSource, fields) {
        var iconCss = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(fields.iconCss) ? false : true;
        var fieldProperty = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(fields.properties) ? fields :
            fields.properties;
        this.listCurrentOptions = (fields.text !== null || fields.value !== null) ? {
            fields: fieldProperty, showIcon: iconCss, ariaAttributes: { groupItemRole: 'presentation' }
        } : { fields: { value: 'text' } };
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["extend"])(this.listCurrentOptions, this.listCurrentOptions, fields, true);
        if (this.mode === 'CheckBox') {
            this.notify('listoption', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox', dataSource: dataSource, fieldProperty: fieldProperty });
        }
        return this.listCurrentOptions;
    };
    MultiSelect.prototype.renderPopup = function () {
        var _this = this;
        if (!this.list) {
            _super.prototype.render.call(this);
        }
        if (!this.popupObj) {
            var args = { cancel: false };
            this.trigger('beforeOpen', args, function (args) {
                if (!args.cancel) {
                    document.body.appendChild(_this.popupWrapper);
                    var checkboxFilter = _this.popupWrapper.querySelector('.' + FILTERPARENT);
                    if (_this.mode === 'CheckBox' && !_this.allowFiltering && checkboxFilter && _this.filterParent) {
                        checkboxFilter.remove();
                        _this.filterParent = null;
                    }
                    var overAllHeight = parseInt(_this.popupHeight, 10);
                    _this.popupWrapper.style.visibility = 'hidden';
                    if (_this.headerTemplate) {
                        _this.setHeaderTemplate();
                        overAllHeight -= _this.header.offsetHeight;
                    }
                    Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["append"])([_this.list], _this.popupWrapper);
                    if (_this.footerTemplate) {
                        _this.setFooterTemplate();
                        overAllHeight -= _this.footer.offsetHeight;
                    }
                    if (_this.mode === 'CheckBox' && _this.showSelectAll) {
                        _this.notify('selectAll', { module: 'CheckBoxSelection', enable: _this.mode === 'CheckBox' });
                        overAllHeight -= _this.selectAllHeight;
                    }
                    else if (_this.mode === 'CheckBox' && !_this.showSelectAll && (!_this.headerTemplate || !_this.footerTemplate)) {
                        _this.notify('selectAll', { module: 'CheckBoxSelection', enable: _this.mode === 'CheckBox' });
                        overAllHeight = parseInt(_this.popupHeight, 10);
                    }
                    else if (_this.mode === 'CheckBox' && !_this.showSelectAll) {
                        _this.notify('selectAll', { module: 'CheckBoxSelection', enable: _this.mode === 'CheckBox' });
                        overAllHeight = parseInt(_this.popupHeight, 10);
                        if (_this.headerTemplate && _this.header) {
                            overAllHeight -= _this.header.offsetHeight;
                        }
                        if (_this.footerTemplate && _this.footer) {
                            overAllHeight -= _this.footer.offsetHeight;
                        }
                    }
                    if (_this.mode === 'CheckBox') {
                        var args_1 = {
                            module: 'CheckBoxSelection',
                            enable: _this.mode === 'CheckBox',
                            popupElement: _this.popupWrapper
                        };
                        if (_this.allowFiltering) {
                            _this.notify('searchBox', args_1);
                            overAllHeight -= _this.searchBoxHeight;
                        }
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([_this.popupWrapper], 'e-checkbox');
                    }
                    if (_this.popupHeight !== 'auto') {
                        _this.list.style.maxHeight = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["formatUnit"])(overAllHeight);
                        _this.popupWrapper.style.maxHeight = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["formatUnit"])(_this.popupHeight);
                    }
                    else {
                        _this.list.style.maxHeight = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["formatUnit"])(_this.popupHeight);
                    }
                    _this.popupObj = new _syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_1__["Popup"](_this.popupWrapper, {
                        width: _this.calcPopupWidth(), targetType: 'relative', position: { X: 'left', Y: 'bottom' },
                        relateTo: _this.overAllWrapper, collision: { X: 'flip', Y: 'flip' }, offsetY: 1,
                        enableRtl: _this.enableRtl, zIndex: _this.zIndex,
                        close: function () {
                            if (_this.popupObj.element.parentElement) {
                                _this.popupObj.unwireScrollEvents();
                                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["detach"])(_this.popupObj.element);
                            }
                        },
                        open: function () {
                            if (!_this.isFirstClick) {
                                var ulElement = _this.list.querySelector('ul');
                                if (ulElement) {
                                    if (_this.itemTemplate && (_this.mode === 'CheckBox') && Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isBlazor"])()) {
                                        setTimeout(function () {
                                            _this.mainList = _this.ulElement;
                                        }, 0);
                                    }
                                    else {
                                        _this.mainList = ulElement.cloneNode ? ulElement.cloneNode(true) : ulElement;
                                    }
                                }
                                _this.isFirstClick = true;
                            }
                            _this.popupObj.wireScrollEvents();
                            _this.loadTemplate();
                            _this.setScrollPosition();
                            if (_this.allowFiltering) {
                                _this.notify('inputFocus', {
                                    module: 'CheckBoxSelection', enable: _this.mode === 'CheckBox', value: 'focus'
                                });
                            }
                        }, targetExitViewport: function () {
                            if (!_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Browser"].isDevice) {
                                _this.hidePopup();
                            }
                        }
                    });
                    _this.popupObj.close();
                    _this.popupWrapper.style.visibility = '';
                    if (_this.mode === 'CheckBox' && _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Browser"].isDevice && _this.allowFiltering) {
                        _this.notify('deviceSearchBox', { module: 'CheckBoxSelection', enable: _this.mode === 'CheckBox' });
                    }
                }
            });
        }
    };
    MultiSelect.prototype.setHeaderTemplate = function () {
        var compiledString;
        if (this.header) {
            this.header.remove();
        }
        this.header = this.createElement('div');
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([this.header], HEADER);
        compiledString = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["compile"])(this.headerTemplate);
        var elements = compiledString({}, null, null, this.headerTemplateId, this.isStringTemplate);
        for (var temp = 0; temp < elements.length; temp++) {
            this.header.appendChild(elements[temp]);
        }
        this.DropDownBaseupdateBlazorTemplates(false, false, false, false, false, true, false);
        if (this.mode === 'CheckBox' && this.showSelectAll) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["prepend"])([this.header], this.popupWrapper);
        }
        else {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["append"])([this.header], this.popupWrapper);
        }
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(this.header, 'mousedown', this.onListMouseDown, this);
    };
    MultiSelect.prototype.setFooterTemplate = function () {
        var compiledString;
        if (this.footer) {
            this.footer.remove();
        }
        this.footer = this.createElement('div');
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([this.footer], FOOTER);
        compiledString = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["compile"])(this.footerTemplate);
        var elements = compiledString({}, null, null, this.footerTemplateId, this.isStringTemplate);
        for (var temp = 0; temp < elements.length; temp++) {
            this.footer.appendChild(elements[temp]);
        }
        this.DropDownBaseupdateBlazorTemplates(false, false, false, false, false, false, true);
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["append"])([this.footer], this.popupWrapper);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(this.footer, 'mousedown', this.onListMouseDown, this);
    };
    MultiSelect.prototype.ClearAll = function (e) {
        if (this.enabled && !this.readonly) {
            var temp = void 0;
            if (this.value && this.value.length > 0) {
                var liElement = this.list && this.list.querySelectorAll('li.e-list-item');
                if (liElement && liElement.length > 0) {
                    this.selectAllItems(false, e);
                }
                else {
                    this.removeIndex = 0;
                    for (temp = this.value[this.removeIndex]; this.removeIndex < this.value.length; temp = this.value[this.removeIndex]) {
                        this.removeValue(temp, e, null, true);
                    }
                }
            }
            else {
                this.clearAllCallback(e);
            }
        }
    };
    MultiSelect.prototype.clearAllCallback = function (e, isClearAll) {
        var tempValues = this.value ? this.value.slice() : [];
        if (this.mainList && this.listData && this.allowFiltering) {
            var list = this.mainList.cloneNode ? this.mainList.cloneNode(true) : this.mainList;
            this.onActionComplete(list, this.mainData);
        }
        this.focusAtFirstListItem();
        this.updateDelimeter(this.delimiterChar, e);
        if (this.mode !== 'Box' && (!this.inputFocus || this.mode === 'CheckBox')) {
            this.updateDelimView();
        }
        this.makeTextBoxEmpty();
        this.checkPlaceholderSize();
        if (this.isPopupOpen()) {
            this.refreshPopup();
        }
        if (!this.inputFocus) {
            if (this.changeOnBlur) {
                this.updateValueState(e, this.value, tempValues);
            }
            if (this.mode !== 'CheckBox') {
                this.inputElement.focus();
            }
        }
        if (this.mode === 'CheckBox') {
            this.refreshPlaceHolder();
            this.refreshInputHight();
            if (this.changeOnBlur && isClearAll && (this.value && this.value.length === 0)) {
                this.updateValueState(e, this.value, this.tempValues);
            }
        }
        if (!this.changeOnBlur && isClearAll && (this.value && this.value.length === 0)) {
            this.updateValueState(e, this.value, this.tempValues);
        }
        if (this.mode === 'CheckBox' && this.enableGroupCheckBox && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.fields.groupBy)) {
            this.updateListItems(this.list.querySelectorAll('li.e-list-item'), this.mainList.querySelectorAll('li.e-list-item'));
        }
        e.preventDefault();
    };
    MultiSelect.prototype.windowResize = function () {
        this.refreshPopup();
        if ((!this.inputFocus || this.mode === 'CheckBox') && this.viewWrapper && this.viewWrapper.parentElement) {
            this.updateDelimView();
        }
    };
    MultiSelect.prototype.resetValueHandler = function (e) {
        var formElement = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["closest"])(this.inputElement, 'form');
        if (formElement && e.target === formElement) {
            var textVal = (this.element.tagName === this.getNgDirective()) ? null : this.element.getAttribute('data-initial-value');
            this.text = textVal;
        }
    };
    MultiSelect.prototype.wireEvent = function () {
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(this.componentWrapper, 'mousedown', this.wrapperClick, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(window, 'resize', this.windowResize, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(this.inputElement, 'focus', this.focusInHandler, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(this.inputElement, 'keydown', this.onKeyDown, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(this.inputElement, 'keyup', this.KeyUp, this);
        if (this.mode !== 'CheckBox') {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(this.inputElement, 'input', this.onInput, this);
        }
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(this.inputElement, 'blur', this.onBlur, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(this.componentWrapper, 'mousemove', this.mouseIn, this);
        var formElement = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["closest"])(this.inputElement, 'form');
        if (formElement) {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(formElement, 'reset', this.resetValueHandler, this);
        }
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(this.componentWrapper, 'mouseout', this.mouseOut, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(this.overAllClear, 'mouseup', this.ClearAll, this);
    };
    MultiSelect.prototype.onInput = function () {
        if (this.keyDownStatus) {
            this.isValidKey = true;
        }
        else {
            this.isValidKey = false;
        }
        this.keyDownStatus = false;
    };
    MultiSelect.prototype.preRender = function () {
        if (this.allowFiltering === null) {
            this.allowFiltering = (this.mode === 'CheckBox') ? true : false;
        }
        this.initializeData();
        this.updateDataAttribute(this.htmlAttributes);
        _super.prototype.preRender.call(this);
    };
    MultiSelect.prototype.getLocaleName = function () {
        return 'multi-select';
    };
    ;
    MultiSelect.prototype.initializeData = function () {
        this.mainListCollection = [];
        this.beforePopupOpen = false;
        this.filterAction = false;
        this.remoteFilterAction = false;
        this.isFirstClick = false;
        this.mobFilter = true;
        this.isFiltered = false;
        this.focused = true;
        this.initial = true;
        this.backCommand = true;
    };
    MultiSelect.prototype.updateData = function (delimiterChar, e) {
        var data = '';
        var delim = this.mode === 'Delimiter' || this.mode === 'CheckBox';
        var text = [];
        var temp;
        var tempData = this.listData;
        this.listData = this.mainData;
        this.hiddenElement.innerHTML = '';
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.value)) {
            for (var index = 0; !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.value[index]); index++) {
                if (this.listData) {
                    temp = this.getTextByValue(this.value[index]);
                }
                else {
                    temp = this.value[index];
                }
                data += temp + delimiterChar + ' ';
                text.push(temp);
                this.hiddenElement.innerHTML += '<option selected value ="' + this.value[index] + '">' + index + '</option>';
            }
        }
        this.setProperties({ text: text.toString() }, true);
        if (delim) {
            this.delimiterWrapper.innerHTML = data;
        }
        var targetEle = e && e.target;
        var isClearAll = (targetEle && targetEle.classList.contains('e-close-hooker')) ? true : null;
        if (!this.changeOnBlur && ((e && !isClearAll)) || this.isSelectAll) {
            this.isSelectAll = false;
            this.updateValueState(e, this.value, this.tempValues);
        }
        this.listData = tempData;
        this.addValidInputClass();
    };
    MultiSelect.prototype.initialTextUpdate = function () {
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.text)) {
            var textArr = this.text.split(this.delimiterChar);
            var textVal = [];
            for (var index = 0; textArr.length > index; index++) {
                var val = this.getValueByText(textArr[index]);
                if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(val)) {
                    textVal.push(val);
                }
                else if (this.allowCustomValue) {
                    textVal.push(textArr[index]);
                }
            }
            if (textVal && textVal.length) {
                this.setProperties({ value: textVal }, true);
            }
        }
        else {
            this.setProperties({ value: null }, true);
        }
    };
    MultiSelect.prototype.renderList = function (isEmptyData) {
        _super.prototype.render.call(this, isEmptyData);
        this.wireListEvents();
    };
    MultiSelect.prototype.initialValueUpdate = function () {
        if (this.list) {
            var text = void 0;
            var textField = void 0;
            var valueField = void 0;
            var element = void 0;
            var value = void 0;
            if (this.chipCollectionWrapper) {
                this.chipCollectionWrapper.innerHTML = '';
            }
            this.removeListSelection();
            if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.value)) {
                for (var index = 0; !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.value[index]); index++) {
                    value = this.value[index];
                    element = this.findListElement(this.hideSelectedItem ? this.ulElement : this.list, 'li', 'data-value', value);
                    text = this.getTextByValue(value);
                    if ((element && (element.getAttribute('aria-selected') !== 'true')) ||
                        (element && (element.getAttribute('aria-selected') === 'true' && this.hideSelectedItem) &&
                            (this.mode === 'Box' || this.mode === 'Default'))) {
                        this.addChip(text, value);
                        this.addListSelection(element);
                    }
                    else if (value && this.allowCustomValue) {
                        var indexItem = this.listData.length;
                        var newValue = {};
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["setValue"])(this.fields.text, value, newValue);
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["setValue"])(this.fields.value, value, newValue);
                        var noDataEle = this.popupWrapper.querySelector('.' + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].noData);
                        this.addItem(newValue, indexItem);
                        if (this.popupWrapper.contains(noDataEle)) {
                            this.list.setAttribute('style', noDataEle.getAttribute('style'));
                            this.popupWrapper.replaceChild(this.list, noDataEle);
                            this.wireListEvents();
                        }
                        this.addChip(text, value);
                        this.addListSelection(element);
                    }
                }
            }
            if (this.mode === 'CheckBox') {
                this.updateDelimView();
                if (this.changeOnBlur) {
                    this.updateValueState(null, this.value, this.tempValues);
                }
                this.updateDelimeter(this.delimiterChar);
                this.refreshInputHight();
            }
            else {
                this.updateDelimeter(this.delimiterChar);
            }
            if (this.mode === 'CheckBox' && this.showSelectAll && (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.value) || !this.value.length)) {
                this.notify('checkSelectAll', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox', value: 'uncheck' });
            }
            if (!this.inputFocus) {
                if (this.mode === 'Box') {
                    this.chipCollectionWrapper.style.display = '';
                }
                else if (this.mode === 'Delimiter' || this.mode === 'CheckBox') {
                    this.showDelimWrapper();
                }
            }
        }
    };
    MultiSelect.prototype.updateActionCompleteData = function (li, item) {
        if (this.value && this.value.indexOf(li.getAttribute('data-value')) > -1) {
            this.mainList = this.ulElement;
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([li], HIDE_LIST);
        }
    };
    MultiSelect.prototype.isValidLI = function (li) {
        return (li && !li.classList.contains(_drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].disabled) && !li.classList.contains(_drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].group) &&
            li.classList.contains(_drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].li));
    };
    ;
    MultiSelect.prototype.updateListSelection = function (li, e, length) {
        var customVal = li.getAttribute('data-value');
        var value = this.getFormattedValue(customVal);
        if (this.allowCustomValue && ((customVal !== 'false' && value === false) ||
            (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(value) && value.toString() === 'NaN'))) {
            value = customVal;
        }
        var text = this.getTextByValue(value);
        this.removeHover();
        if (!this.value || this.value.indexOf(value) === -1) {
            this.dispatchSelect(value, e, li, (li.getAttribute('aria-selected') === 'true'), length);
        }
        else {
            this.removeValue(value, e, length);
        }
    };
    MultiSelect.prototype.updateListSelectEventCallback = function (value, li, e) {
        var _this = this;
        var text = this.getTextByValue(value);
        if ((this.allowCustomValue || this.allowFiltering) && !this.findListElement(this.mainList, 'li', 'data-value', value)) {
            var temp_1 = li.cloneNode(true);
            var data_1 = this.getDataByValue(value);
            var eventArgs = {
                newData: data_1,
                cancel: false
            };
            this.trigger('customValueSelection', eventArgs, function (eventArgs) {
                if (!eventArgs.cancel) {
                    Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["append"])([temp_1], _this.mainList);
                    _this.mainData.push(data_1);
                    _this.remoteCustomValue = false;
                    _this.addValue(value, text, e);
                }
            });
        }
        else {
            this.remoteCustomValue = false;
            this.addValue(value, text, e);
        }
    };
    MultiSelect.prototype.removeListSelection = function () {
        var className = this.hideSelectedItem ?
            HIDE_LIST :
            _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].selected;
        var selectedItems = this.list.querySelectorAll('.' + className);
        var temp = selectedItems.length;
        if (selectedItems && selectedItems.length) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(selectedItems, className);
            while (temp > 0) {
                selectedItems[temp - 1].setAttribute('aria-selected', 'false');
                temp--;
            }
        }
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.mainList)) {
            var selectItems = this.mainList.querySelectorAll('.' + className);
            var temp1 = selectItems.length;
            if (selectItems && selectItems.length) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(selectItems, className);
                while (temp1 > 0) {
                    selectItems[temp1 - 1].setAttribute('aria-selected', 'false');
                    if (this.mode === 'CheckBox') {
                        if (selectedItems && (selectedItems.length > (temp1 - 1))) {
                            selectedItems[temp1 - 1].firstElementChild.setAttribute('aria-checked', 'false');
                            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])([selectedItems[temp1 - 1].firstElementChild.lastElementChild], 'e-check');
                        }
                        selectItems[temp1 - 1].firstElementChild.setAttribute('aria-checked', 'false');
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])([selectItems[temp1 - 1].firstElementChild.lastElementChild], 'e-check');
                    }
                    temp1--;
                }
            }
        }
    };
    ;
    MultiSelect.prototype.removeHover = function () {
        var hoveredItem = this.list.querySelectorAll('.' + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].hover);
        if (hoveredItem && hoveredItem.length) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(hoveredItem, _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].hover);
        }
    };
    ;
    MultiSelect.prototype.removeFocus = function () {
        if (this.list && this.mainList) {
            var hoveredItem = this.list.querySelectorAll('.' + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].focus);
            var mainlist = this.mainList.querySelectorAll('.' + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].focus);
            if (hoveredItem && hoveredItem.length) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(hoveredItem, _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].focus);
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(mainlist, _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].focus);
            }
        }
    };
    ;
    MultiSelect.prototype.addListHover = function (li) {
        if (this.enabled && this.isValidLI(li)) {
            this.removeHover();
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([li], _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].hover);
        }
        else {
            if ((li !== null && li.classList.contains('e-list-group-item')) && this.enableGroupCheckBox && this.mode === 'CheckBox'
                && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.fields.groupBy)) {
                this.removeHover();
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([li], _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].hover);
            }
        }
    };
    ;
    MultiSelect.prototype.addListFocus = function (element) {
        if (this.enabled && this.isValidLI(element)) {
            this.removeFocus();
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([element], _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].focus);
        }
        else {
            if (this.enableGroupCheckBox && this.mode === 'CheckBox' && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.fields.groupBy)) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([element], _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].focus);
            }
        }
    };
    MultiSelect.prototype.addListSelection = function (element) {
        var className = this.hideSelectedItem ?
            HIDE_LIST :
            _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].selected;
        if (this.isValidLI(element) && !element.classList.contains(_drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].hover)) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([element], className);
            this.updateMainList(false, element.getAttribute('data-value'));
            element.setAttribute('aria-selected', 'true');
            if (this.mode === 'CheckBox') {
                var ariaCheck = element.firstElementChild.getAttribute('aria-checked');
                if (ariaCheck === 'false' || Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(ariaCheck)) {
                    this.notify('updatelist', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox', li: element, e: this });
                }
            }
            this.notify('activeList', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox', li: element, e: this });
            if (this.chipCollectionWrapper !== null) {
                this.removeChipSelection();
            }
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["attributes"])(this.inputElement, { 'aria-activedescendant': element.id });
        }
    };
    MultiSelect.prototype.updateDelimeter = function (delimChar, e) {
        this.updateData(delimChar, e);
    };
    MultiSelect.prototype.onMouseClick = function (e) {
        this.scrollFocusStatus = false;
        var target = e.target;
        var li = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["closest"])(target, '.' + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].li);
        var headerLi = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["closest"])(target, '.' + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].group);
        if (headerLi && this.enableGroupCheckBox && this.mode === 'CheckBox' && this.fields.groupBy) {
            target = target.classList.contains('e-list-group-item') ? target.firstElementChild.lastElementChild
                : e.target;
            if (target.classList.contains('e-check')) {
                this.selectAllItem(false, e);
                target.classList.remove('e-check');
                target.classList.remove('e-stop');
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["closest"])(target, '.' + 'e-list-group-item').classList.remove('e-active');
                target.setAttribute('aria-selected', 'false');
            }
            else {
                this.selectAllItem(true, e);
                target.classList.remove('e-stop');
                target.classList.add('e-check');
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["closest"])(target, '.' + 'e-list-group-item').classList.add('e-active');
                target.setAttribute('aria-selected', 'true');
            }
            this.refreshSelection();
            this.checkSelectAll();
        }
        else {
            if (this.isValidLI(li)) {
                var limit = this.value && this.value.length ? this.value.length : 0;
                if (li.classList.contains('e-active')) {
                    limit = limit - 1;
                }
                if (limit < this.maximumSelectionLength) {
                    this.updateListSelection(li, e);
                    this.checkPlaceholderSize();
                    this.addListFocus(li);
                    if ((this.allowCustomValue || this.allowFiltering) && this.mainList && this.listData) {
                        if (this.mode !== 'CheckBox') {
                            this.focusAtLastListItem(li.getAttribute('data-value'));
                        }
                        this.refreshSelection();
                    }
                    else {
                        this.makeTextBoxEmpty();
                    }
                }
                if (this.mode === 'CheckBox') {
                    this.updateDelimView();
                    this.updateDelimeter(this.delimiterChar, e);
                    this.refreshInputHight();
                }
                else {
                    this.updateDelimeter(this.delimiterChar, e);
                }
                this.checkSelectAll();
                this.refreshPopup();
                if (this.hideSelectedItem) {
                    this.focusAtFirstListItem();
                }
                if (this.closePopupOnSelect) {
                    this.hidePopup();
                }
                else {
                    e.preventDefault();
                }
                this.makeTextBoxEmpty();
                this.findGroupStart(target);
            }
            else {
                e.preventDefault();
            }
            if (this.mode !== 'CheckBox') {
                this.refreshListItems(Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(li) ? null : li.textContent);
            }
            this.refreshPlaceHolder();
            this.deselectHeader();
        }
    };
    MultiSelect.prototype.findGroupStart = function (target) {
        if (this.enableGroupCheckBox && this.mode === 'CheckBox' && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.fields.groupBy)) {
            var count = 0;
            var liChecked = 0;
            var liUnchecked = 0;
            var groupValues = void 0;
            if (this.itemTemplate && !target.getElementsByClassName('e-frame').length) {
                while (!target.getElementsByClassName('e-frame').length) {
                    target = target.parentElement;
                }
            }
            if (target.classList.contains('e-frame')) {
                target = target.parentElement.parentElement;
            }
            groupValues = this.findGroupAttrtibutes(target, liChecked, liUnchecked, count, 0);
            groupValues = this.findGroupAttrtibutes(target, groupValues[0], groupValues[1], groupValues[2], 1);
            while (!target.classList.contains('e-list-group-item')) {
                if (target.classList.contains('e-list-icon')) {
                    target = target.parentElement;
                }
                target = target.previousElementSibling;
                if (target == null) {
                    break;
                }
            }
            this.updateCheckBox(target, groupValues[0], groupValues[1], groupValues[2]);
        }
    };
    MultiSelect.prototype.findGroupAttrtibutes = function (listElement, checked, unChecked, count, position) {
        while (!listElement.classList.contains('e-list-group-item')) {
            if (listElement.classList.contains('e-list-icon')) {
                listElement = listElement.parentElement;
            }
            if (listElement.getElementsByClassName('e-frame')[0].classList.contains('e-check') &&
                listElement.classList.contains('e-list-item')) {
                checked++;
            }
            else if (listElement.classList.contains('e-list-item')) {
                unChecked++;
            }
            count++;
            listElement = position ? listElement.nextElementSibling : listElement.previousElementSibling;
            if (listElement == null) {
                break;
            }
        }
        return [checked, unChecked, count];
    };
    MultiSelect.prototype.updateCheckBox = function (groupHeader, checked, unChecked, count) {
        if (groupHeader === null) {
            return;
        }
        var checkBoxElement = groupHeader.getElementsByClassName('e-frame')[0];
        if (count === checked) {
            checkBoxElement.classList.remove('e-stop');
            checkBoxElement.classList.add('e-check');
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["closest"])(checkBoxElement, '.' + 'e-list-group-item').classList.add('e-active');
            groupHeader.setAttribute('aria-selected', 'true');
        }
        else if (count === unChecked) {
            checkBoxElement.classList.remove('e-check');
            checkBoxElement.classList.remove('e-stop');
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["closest"])(checkBoxElement, '.' + 'e-list-group-item').classList.remove('e-active');
            groupHeader.setAttribute('aria-selected', 'false');
        }
        else if (this.maximumSelectionLength === checked - 1) {
            checkBoxElement.classList.remove('e-stop');
            groupHeader.setAttribute('aria-selected', 'true');
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["closest"])(checkBoxElement, '.' + 'e-list-group-item').classList.add('e-active');
            checkBoxElement.classList.add('e-check');
        }
        else {
            checkBoxElement.classList.remove('e-check');
            checkBoxElement.classList.add('e-stop');
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["closest"])(checkBoxElement, '.' + 'e-list-group-item').classList.add('e-active');
            groupHeader.setAttribute('aria-selected', 'false');
        }
    };
    MultiSelect.prototype.deselectHeader = function () {
        var limit = this.value && this.value.length ? this.value.length : 0;
        var collection = this.list.querySelectorAll('li.e-list-group-item:not(.e-active)');
        if (limit < this.maximumSelectionLength) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(collection, 'e-disable');
        }
        if (limit === this.maximumSelectionLength) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])(collection, 'e-disable');
        }
    };
    MultiSelect.prototype.onMouseOver = function (e) {
        var currentLi = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["closest"])(e.target, '.' + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].li);
        if (currentLi === null && this.mode === 'CheckBox' && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.fields.groupBy)
            && this.enableGroupCheckBox) {
            currentLi = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["closest"])(e.target, '.' + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].group);
        }
        this.addListHover(currentLi);
    };
    MultiSelect.prototype.onMouseLeave = function (e) {
        this.removeHover();
    };
    MultiSelect.prototype.onListMouseDown = function (e) {
        e.preventDefault();
        this.scrollFocusStatus = true;
    };
    MultiSelect.prototype.onDocumentClick = function (e) {
        if (this.mode !== 'CheckBox') {
            var target = e.target;
            if (!(!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.popupObj) && Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["closest"])(target, '#' + this.popupObj.element.id)) &&
                !this.overAllWrapper.contains(e.target)) {
                this.scrollFocusStatus = false;
            }
            else {
                this.scrollFocusStatus = (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Browser"].isIE || _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Browser"].info.name === 'edge') && (document.activeElement === this.inputElement);
            }
        }
    };
    MultiSelect.prototype.wireListEvents = function () {
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(document, 'mousedown', this.onDocumentClick, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(this.list, 'mousedown', this.onListMouseDown, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(this.list, 'mouseup', this.onMouseClick, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(this.list, 'mouseover', this.onMouseOver, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].add(this.list, 'mouseout', this.onMouseLeave, this);
    };
    ;
    MultiSelect.prototype.unwireListEvents = function () {
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].remove(document, 'mousedown', this.onDocumentClick);
        if (this.list) {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].remove(this.list, 'mousedown', this.onListMouseDown);
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].remove(this.list, 'mouseup', this.onMouseClick);
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].remove(this.list, 'mouseover', this.onMouseOver);
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].remove(this.list, 'mouseout', this.onMouseLeave);
        }
    };
    ;
    MultiSelect.prototype.hideOverAllClear = function () {
        if (!this.value || !this.value.length || this.inputElement.value === '') {
            this.overAllClear.style.display = 'none';
        }
    };
    MultiSelect.prototype.showOverAllClear = function () {
        if (((this.value && this.value.length) || this.inputElement.value !== '') && this.showClearButton && this.readonly !== true) {
            this.overAllClear.style.display = '';
        }
        else {
            this.overAllClear.style.display = 'none';
        }
    };
    /**
     * Sets the focus to widget for interaction.
     * @returns void
     */
    MultiSelect.prototype.focusIn = function () {
        if (document.activeElement !== this.inputElement && this.enabled) {
            this.inputElement.focus();
        }
    };
    /**
     * Remove the focus from widget, if the widget is in focus state.
     * @returns void
     */
    MultiSelect.prototype.focusOut = function () {
        if (document.activeElement === this.inputElement && this.enabled) {
            this.inputElement.blur();
        }
    };
    /**
     * Shows the spinner loader.
     * @returns void.
     */
    MultiSelect.prototype.showSpinner = function () {
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.spinnerElement)) {
            if (this.overAllClear.style.display !== 'none') {
                this.spinnerElement = this.overAllClear;
            }
            else {
                this.spinnerElement = this.createElement('span', { className: CLOSEICON_CLASS + ' ' + SPINNER_CLASS });
                this.componentWrapper.appendChild(this.spinnerElement);
            }
            Object(_syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_1__["createSpinner"])({ target: this.spinnerElement, width: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Browser"].isDevice ? '16px' : '14px' }, this.createElement);
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([this.spinnerElement], DISABLE_ICON);
            Object(_syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_1__["showSpinner"])(this.spinnerElement);
        }
    };
    /**
     * Hides the spinner loader.
     * @returns void.
     */
    MultiSelect.prototype.hideSpinner = function () {
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.spinnerElement)) {
            Object(_syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_1__["hideSpinner"])(this.spinnerElement);
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])([this.spinnerElement], DISABLE_ICON);
            if (this.spinnerElement.classList.contains(SPINNER_CLASS)) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["detach"])(this.spinnerElement);
            }
            else {
                this.spinnerElement.innerHTML = '';
            }
            this.spinnerElement = null;
        }
    };
    MultiSelect.prototype.updateDelimView = function () {
        if (this.delimiterWrapper) {
            this.hideDelimWrapper();
        }
        if (this.chipCollectionWrapper) {
            this.chipCollectionWrapper.style.display = 'none';
        }
        this.viewWrapper.style.display = '';
        this.viewWrapper.style.width = '';
        this.viewWrapper.classList.remove(TOTAL_COUNT_WRAPPER);
        if (this.value && this.value.length) {
            var data = '';
            var temp = void 0;
            var tempData = void 0;
            var tempIndex = 1;
            var wrapperleng = void 0;
            var remaining = void 0;
            var downIconWidth = 0;
            var overAllContainer = void 0;
            this.viewWrapper.innerHTML = '';
            var l10nLocale = {
                noRecordsTemplate: 'No Records Found',
                actionFailureTemplate: 'The Request Failed',
                overflowCountTemplate: '+${count} more..',
                totalCountTemplate: '${count} selected'
            };
            var l10n = new _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["L10n"](this.getLocaleName(), {}, this.locale);
            if (l10n.getConstant('actionFailureTemplate') === '') {
                l10n = new _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["L10n"]('dropdowns', l10nLocale, this.locale);
            }
            var remainContent = l10n.getConstant('overflowCountTemplate');
            var raminElement = this.createElement('span', {
                className: REMAIN_WRAPPER
            });
            var compiledString = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["compile"])(remainContent);
            var totalCompiledString = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["compile"])(l10n.getConstant('totalCountTemplate'));
            raminElement.appendChild(compiledString({ 'count': this.value.length }, null, null, null, !this.isStringTemplate)[0]);
            this.viewWrapper.appendChild(raminElement);
            var remainSize = raminElement.offsetWidth;
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["remove"])(raminElement);
            if (this.showDropDownIcon) {
                downIconWidth = this.dropIcon.offsetWidth +
                    parseInt(window.getComputedStyle(this.dropIcon).marginRight, 10);
            }
            if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.value)) {
                for (var index = 0; !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.value[index]); index++) {
                    data += (index === 0) ? '' : this.delimiterChar + ' ';
                    temp = this.getOverflowVal(index);
                    data += temp;
                    temp = this.viewWrapper.innerHTML;
                    this.viewWrapper.innerHTML = data;
                    wrapperleng = this.viewWrapper.offsetWidth +
                        parseInt(window.getComputedStyle(this.viewWrapper).paddingRight, 10);
                    overAllContainer = this.componentWrapper.offsetWidth -
                        parseInt(window.getComputedStyle(this.componentWrapper).paddingLeft, 10) -
                        parseInt(window.getComputedStyle(this.componentWrapper).paddingRight, 10);
                    if ((wrapperleng + downIconWidth) > overAllContainer) {
                        if (tempData !== undefined && tempData !== '') {
                            temp = tempData;
                            index = tempIndex + 1;
                        }
                        this.viewWrapper.innerHTML = temp;
                        remaining = this.value.length - index;
                        wrapperleng = this.viewWrapper.offsetWidth;
                        while (((wrapperleng + remainSize + downIconWidth) > overAllContainer) && wrapperleng !== 0
                            && this.viewWrapper.innerHTML !== '') {
                            var textArr = this.viewWrapper.innerHTML.split(this.delimiterChar);
                            textArr.pop();
                            this.viewWrapper.innerHTML = textArr.join(this.delimiterChar);
                            remaining++;
                            wrapperleng = this.viewWrapper.offsetWidth;
                        }
                        break;
                    }
                    else if ((wrapperleng + remainSize + downIconWidth) <= overAllContainer) {
                        tempData = data;
                        tempIndex = index;
                    }
                    else if (index === 0) {
                        tempData = '';
                        tempIndex = -1;
                    }
                }
            }
            if (remaining > 0) {
                var totalWidth = overAllContainer - downIconWidth;
                this.viewWrapper.appendChild(this.updateRemainTemplate(raminElement, this.viewWrapper, remaining, compiledString, totalCompiledString, totalWidth));
                this.updateRemainWidth(this.viewWrapper, totalWidth);
                this.updateRemainingText(raminElement, downIconWidth, remaining, compiledString, totalCompiledString);
            }
        }
        else {
            this.viewWrapper.innerHTML = '';
            this.viewWrapper.style.display = 'none';
        }
    };
    MultiSelect.prototype.updateRemainWidth = function (viewWrapper, totalWidth) {
        if (viewWrapper.classList.contains(TOTAL_COUNT_WRAPPER) && totalWidth < (viewWrapper.offsetWidth +
            parseInt(window.getComputedStyle(viewWrapper).paddingLeft, 10)
            + parseInt(window.getComputedStyle(viewWrapper).paddingLeft, 10))) {
            viewWrapper.style.width = totalWidth + 'px';
        }
    };
    MultiSelect.prototype.updateRemainTemplate = function (raminElement, viewWrapper, remaining, compiledString, totalCompiledString, totalWidth) {
        if (viewWrapper.firstChild && viewWrapper.firstChild.nodeType === 3 && viewWrapper.firstChild.nodeValue === '') {
            viewWrapper.removeChild(viewWrapper.firstChild);
        }
        raminElement.innerHTML = '';
        raminElement.appendChild((viewWrapper.firstChild && viewWrapper.firstChild.nodeType === 3) ?
            compiledString({ 'count': remaining }, null, null, null, !this.isStringTemplate)[0] :
            totalCompiledString({ 'count': remaining }, null, null, null, !this.isStringTemplate)[0]);
        if (viewWrapper.firstChild && viewWrapper.firstChild.nodeType === 3) {
            viewWrapper.classList.remove(TOTAL_COUNT_WRAPPER);
        }
        else {
            viewWrapper.classList.add(TOTAL_COUNT_WRAPPER);
            this.updateRemainWidth(viewWrapper, totalWidth);
        }
        return raminElement;
    };
    MultiSelect.prototype.updateRemainingText = function (raminElement, downIconWidth, remaining, compiledString, totalCompiledString) {
        var overAllContainer = this.componentWrapper.offsetWidth -
            parseInt(window.getComputedStyle(this.componentWrapper).paddingLeft, 10) -
            parseInt(window.getComputedStyle(this.componentWrapper).paddingRight, 10);
        var wrapperleng = this.viewWrapper.offsetWidth + parseInt(window.getComputedStyle(this.viewWrapper).paddingRight, 10);
        if (((wrapperleng + downIconWidth) >= overAllContainer) && wrapperleng !== 0 && this.viewWrapper.firstChild &&
            this.viewWrapper.firstChild.nodeType === 3) {
            while (((wrapperleng + downIconWidth) > overAllContainer) && wrapperleng !== 0 && this.viewWrapper.firstChild &&
                this.viewWrapper.firstChild.nodeType === 3) {
                var textArr = this.viewWrapper.firstChild.nodeValue.split(this.delimiterChar);
                textArr.pop();
                this.viewWrapper.firstChild.nodeValue = textArr.join(this.delimiterChar);
                if (this.viewWrapper.firstChild.nodeValue === '') {
                    this.viewWrapper.removeChild(this.viewWrapper.firstChild);
                }
                remaining++;
                wrapperleng = this.viewWrapper.offsetWidth;
            }
            var totalWidth = overAllContainer - downIconWidth;
            this.updateRemainTemplate(raminElement, this.viewWrapper, remaining, compiledString, totalCompiledString, totalWidth);
        }
    };
    MultiSelect.prototype.getOverflowVal = function (index) {
        var temp;
        if (this.mainData && this.mainData.length) {
            if (this.mode === 'CheckBox') {
                var newTemp = this.listData;
                this.listData = this.mainData;
                temp = this.getTextByValue(this.value[index]);
                this.listData = newTemp;
            }
            else {
                temp = this.getTextByValue(this.value[index]);
            }
        }
        else {
            temp = this.value[index];
        }
        return temp;
    };
    MultiSelect.prototype.unWireEvent = function () {
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].remove(this.componentWrapper, 'mousedown', this.wrapperClick);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].remove(window, 'resize', this.windowResize);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].remove(this.inputElement, 'focus', this.focusInHandler);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].remove(this.inputElement, 'keydown', this.onKeyDown);
        if (this.mode !== 'CheckBox') {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].remove(this.inputElement, 'input', this.onInput);
        }
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].remove(this.inputElement, 'keyup', this.KeyUp);
        var formElement = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["closest"])(this.inputElement, 'form');
        if (formElement) {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].remove(formElement, 'reset', this.resetValueHandler);
        }
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].remove(this.inputElement, 'blur', this.onBlur);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].remove(this.componentWrapper, 'mousemove', this.mouseIn);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].remove(this.componentWrapper, 'mouseout', this.mouseOut);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].remove(this.overAllClear, 'mousedown', this.ClearAll);
    };
    MultiSelect.prototype.selectAllItem = function (state, event, list) {
        var li;
        li = this.list.querySelectorAll(state ?
            'li.e-list-item:not([aria-selected="true"]):not(.e-reorder-hide)' :
            'li.e-list-item[aria-selected="true"]:not(.e-reorder-hide)');
        if (this.enableGroupCheckBox && this.mode === 'CheckBox' && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.fields.groupBy)) {
            var target = (event ? event.target : null);
            target = (event && event.keyCode === 32) ? list : target;
            target = (target && target.classList.contains('e-frame')) ? target.parentElement.parentElement : target;
            if (target && target.classList.contains('e-list-group-item')) {
                var listElement = target.nextElementSibling;
                if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(listElement)) {
                    return;
                }
                while (listElement.classList.contains('e-list-item')) {
                    if (state) {
                        if (!listElement.firstElementChild.lastElementChild.classList.contains('e-check')) {
                            var selectionLimit = this.value && this.value.length ? this.value.length : 0;
                            if (listElement.classList.contains('e-active')) {
                                selectionLimit -= 1;
                            }
                            if (selectionLimit < this.maximumSelectionLength) {
                                this.updateListSelection(listElement, event);
                            }
                        }
                    }
                    else {
                        if (listElement.firstElementChild.lastElementChild.classList.contains('e-check')) {
                            this.updateListSelection(listElement, event);
                        }
                    }
                    listElement = listElement.nextElementSibling;
                    if (listElement == null) {
                        break;
                    }
                }
                if (target.classList.contains('e-list-group-item')) {
                    var focusedElement = this.list.getElementsByClassName('e-item-focus')[0];
                    if (focusedElement) {
                        focusedElement.classList.remove('e-item-focus');
                    }
                    state ? target.classList.add('e-active') : target.classList.remove('e-active');
                    target.classList.add('e-item-focus');
                }
                this.textboxValueUpdate();
                this.checkPlaceholderSize();
                if (!this.changeOnBlur && event) {
                    this.updateValueState(event, this.value, this.tempValues);
                }
            }
            else {
                this.updateValue(event, li, state);
            }
        }
        else {
            this.updateValue(event, li, state);
        }
    };
    MultiSelect.prototype.updateValue = function (event, li, state) {
        var _this = this;
        var length = li.length;
        if (li && li.length) {
            var index_1 = 0;
            var count_1 = 0;
            if (this.enableGroupCheckBox) {
                count_1 = state ? this.maximumSelectionLength - (this.value ? this.value.length : 0) : li.length;
            }
            else {
                count_1 = state ? this.maximumSelectionLength - (this.value ? this.value.length : 0) : this.maximumSelectionLength;
            }
            while (index_1 < length && index_1 <= 50 && index_1 < count_1) {
                this.updateListSelection(li[index_1], event, length - index_1);
                this.findGroupStart(li[index_1]);
                index_1++;
            }
            this.deselectHeader();
            if (length > 50) {
                setTimeout(function () {
                    while (index_1 < length && index_1 < count_1) {
                        _this.updateListSelection(li[index_1], event, length - index_1);
                        _this.findGroupStart(li[index_1]);
                        index_1++;
                    }
                    _this.deselectHeader();
                    _this.textboxValueUpdate(event);
                }, 0);
            }
        }
        this.textboxValueUpdate(event);
        this.checkPlaceholderSize();
    };
    MultiSelect.prototype.textboxValueUpdate = function (event) {
        if (this.mode !== 'Box' && !this.isPopupOpen()) {
            this.updateDelimView();
        }
        else {
            this.searchWrapper.classList.remove(ZERO_SIZE);
        }
        if (this.mode === 'CheckBox') {
            this.updateDelimView();
            this.updateDelimeter(this.delimiterChar, event);
            this.refreshInputHight();
        }
        else {
            this.updateDelimeter(this.delimiterChar, event);
        }
        this.refreshPlaceHolder();
    };
    MultiSelect.prototype.setZIndex = function () {
        if (this.popupObj) {
            this.popupObj.setProperties({ 'zIndex': this.zIndex });
        }
    };
    MultiSelect.prototype.updateDataSource = function (prop) {
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.list)) {
            this.renderPopup();
        }
        else {
            this.resetList(this.dataSource);
        }
        if (this.value && this.value.length) {
            this.setProperties({ 'value': this.value });
            this.refreshSelection();
        }
    };
    MultiSelect.prototype.onLoadSelect = function () {
        this.setDynValue = true;
        this.renderPopup();
    };
    MultiSelect.prototype.selectAllItems = function (state, event) {
        var _this = this;
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.list)) {
            this.selectAllAction = function () {
                if (_this.mode === 'CheckBox' && _this.showSelectAll) {
                    var args = {
                        module: 'CheckBoxSelection',
                        enable: _this.mode === 'CheckBox',
                        value: state ? 'check' : 'uncheck'
                    };
                    _this.notify('checkSelectAll', args);
                }
                _this.selectAllItem(state, event);
                _this.selectAllAction = null;
            };
            _super.prototype.render.call(this);
        }
        else {
            this.selectAllAction = null;
            if (this.mode === 'CheckBox' && this.showSelectAll) {
                var args = {
                    value: state ? 'check' : 'uncheck',
                    enable: this.mode === 'CheckBox',
                    module: 'CheckBoxSelection'
                };
                this.notify('checkSelectAll', args);
            }
            this.selectAllItem(state, event);
        }
    };
    /**
     * Get the properties to be maintained in the persisted state.
     */
    MultiSelect.prototype.getPersistData = function () {
        return this.addOnPersist(['value']);
    };
    ;
    /**
     * Dynamically change the value of properties.
     * @private
     */
    MultiSelect.prototype.onPropertyChanged = function (newProp, oldProp) {
        if (newProp.dataSource && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(Object.keys(newProp.dataSource))) {
            this.mainList = null;
            this.mainData = null;
            this.isFirstClick = false;
        }
        if (this.getModuleName() === 'multiselect') {
            this.filterAction = false;
            this.setUpdateInitial(['fields', 'query', 'dataSource'], newProp);
        }
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'query':
                case 'dataSource':
                    if (this.mode === 'CheckBox' && this.showSelectAll) {
                        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.popupObj)) {
                            this.popupObj.destroy();
                            this.popupObj = null;
                        }
                        this.renderPopup();
                    }
                    break;
                case 'htmlAttributes':
                    this.updateHTMLAttribute();
                    break;
                case 'showClearButton':
                    this.updateClearButton(newProp.showClearButton);
                    break;
                case 'text':
                    this.updateVal(this.value, this.value, 'text');
                    break;
                case 'value':
                    this.updateVal(this.value, oldProp.value, 'value');
                    this.addValidInputClass();
                    break;
                case 'width':
                    this.setWidth(newProp.width);
                    this.popupObj.setProperties({ width: this.calcPopupWidth() });
                    break;
                case 'placeholder':
                    this.refreshPlaceHolder();
                    break;
                case 'filterBarPlaceholder':
                    if (this.allowFiltering) {
                        this.notify('filterBarPlaceholder', { filterBarPlaceholder: newProp.filterBarPlaceholder });
                    }
                    break;
                case 'delimiterChar':
                    if (this.mode !== 'Box') {
                        this.updateDelimView();
                    }
                    this.updateData(newProp.delimiterChar);
                    break;
                case 'cssClass':
                    if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(oldProp.cssClass) && oldProp.cssClass !== '') {
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])([this.overAllWrapper], oldProp.cssClass.split(' '));
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])([this.popupWrapper], oldProp.cssClass.split(' '));
                    }
                    this.updateCssClass();
                    break;
                case 'enableRtl':
                    this.enableRTL(newProp.enableRtl);
                    _super.prototype.onPropertyChanged.call(this, newProp, oldProp);
                    break;
                case 'readonly':
                    this.updateReadonly(newProp.readonly);
                    this.hidePopup();
                    break;
                case 'enabled':
                    this.hidePopup();
                    this.enable(newProp.enabled);
                    break;
                case 'showSelectAll':
                    if (this.popupObj) {
                        this.popupObj.destroy();
                        this.popupObj = null;
                    }
                    this.renderPopup();
                    break;
                case 'showDropDownIcon':
                    this.dropDownIcon();
                    break;
                case 'floatLabelType':
                    this.setFloatLabelType();
                    this.addValidInputClass();
                    break;
                case 'enableSelectionOrder':
                    break;
                case 'selectAllText':
                    this.notify('selectAllText', false);
                    break;
                case 'popupHeight':
                case 'headerTemplate':
                case 'footerTemplate':
                    this.reInitializePoup();
                    break;
                case 'allowFiltering':
                    if (this.mode === 'CheckBox' && this.popupObj) {
                        this.reInitializePoup();
                    }
                    this.updateSelectElementData(this.allowFiltering);
                    break;
                default:
                    var msProps = void 0;
                    msProps = this.getPropObject(prop, newProp, oldProp);
                    _super.prototype.onPropertyChanged.call(this, msProps.newProperty, msProps.oldProperty);
                    break;
            }
        }
    };
    MultiSelect.prototype.reInitializePoup = function () {
        if (this.popupObj) {
            this.popupObj.destroy();
            this.popupObj = null;
        }
        this.renderPopup();
    };
    MultiSelect.prototype.updateVal = function (newProp, oldProp, prop) {
        if (!this.list) {
            this.onLoadSelect();
        }
        else if (!this.inputFocus) {
            if (prop === 'text') {
                this.initialTextUpdate();
                newProp = this.value;
            }
            if (this.value && this.value.length === 0) {
                this.tempValues = oldProp;
            }
            this.initialValueUpdate();
            if (this.mode !== 'Box') {
                this.updateDelimView();
            }
            this.refreshInputHight();
            this.refreshPlaceHolder();
            if (this.mode !== 'CheckBox' && this.changeOnBlur) {
                this.updateValueState(null, newProp, oldProp);
            }
            this.checkPlaceholderSize();
        }
        if (!this.changeOnBlur) {
            this.updateValueState(null, newProp, oldProp);
        }
    };
    /**
     * Hides the popup, if the popup in a open state.
     * @returns void
     */
    MultiSelect.prototype.hidePopup = function () {
        var _this = this;
        var delay = 100;
        if (this.isPopupOpen()) {
            var animModel = {
                name: 'FadeOut',
                duration: 100,
                delay: delay ? delay : 0
            };
            var eventArgs = { popup: this.popupObj, cancel: false, animation: animModel };
            this.trigger('close', eventArgs, function (eventArgs) {
                if (!eventArgs.cancel) {
                    _this.beforePopupOpen = false;
                    _this.overAllWrapper.classList.remove(iconAnimation);
                    _this.popupObj.hide(new _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Animation"](eventArgs.animation));
                    Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["attributes"])(_this.inputElement, { 'aria-expanded': 'false' });
                    if (_this.allowFiltering) {
                        _this.notify('inputFocus', { module: 'CheckBoxSelection', enable: _this.mode === 'CheckBox', value: 'clear' });
                    }
                    _this.popupObj.hide();
                    Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])([document.body, _this.popupObj.element], 'e-popup-full-page');
                    _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["EventHandler"].remove(_this.list, 'keydown', _this.onKeyDown);
                }
            });
        }
    };
    /**
     * Shows the popup, if the popup in a closed state.
     * @returns void
     */
    MultiSelect.prototype.showPopup = function () {
        if (!this.enabled) {
            return;
        }
        if (!this.ulElement) {
            this.beforePopupOpen = true;
            _super.prototype.render.call(this);
            return;
        }
        var mainLiLength = this.ulElement.querySelectorAll('li.' + 'e-list-item').length;
        var liLength = this.ulElement.querySelectorAll('li.'
            + _drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["dropDownBaseClasses"].li + '.' + HIDE_LIST).length;
        if (mainLiLength > 0 && (mainLiLength === liLength) && (liLength === this.mainData.length)) {
            this.beforePopupOpen = false;
            return;
        }
        this.onPopupShown();
    };
    /**
     * Based on the state parameter, entire list item will be selected/deselected.
     * parameter
     * `true`   - Selects entire list items.
     * `false`  - Un Selects entire list items.
     * @returns void
     */
    MultiSelect.prototype.selectAll = function (state) {
        this.isSelectAll = true;
        this.selectAllItems(state);
    };
    MultiSelect.prototype.getModuleName = function () {
        return 'multiselect';
    };
    ;
    /**
     * To Initialize the control rendering
     * @private
     */
    MultiSelect.prototype.render = function () {
        this.setDynValue = this.initStatus = false;
        this.isSelectAll = false;
        this.searchWrapper = this.createElement('span', { className: SEARCHBOX_WRAPPER + ' ' + ((this.mode === 'Box') ? BOX_ELEMENT : '') });
        this.viewWrapper = this.createElement('span', { className: DELIMITER_VIEW + ' ' + DELIMITER_WRAPPER, styles: 'display:none;' });
        this.overAllClear = this.createElement('span', {
            className: CLOSEICON_CLASS, styles: 'display:none;'
        });
        this.componentWrapper = this.createElement('div', { className: ELEMENT_WRAPPER });
        this.overAllWrapper = this.createElement('div', { className: OVER_ALL_WRAPPER });
        if (this.mode === 'CheckBox') {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([this.overAllWrapper], 'e-checkbox');
        }
        if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Browser"].isDevice) {
            this.componentWrapper.classList.add(ELEMENT_MOBILE_WRAPPER);
        }
        this.setWidth(this.width);
        this.overAllWrapper.appendChild(this.componentWrapper);
        this.popupWrapper = this.createElement('div', { id: this.element.id + '_popup', className: POPUP_WRAPPER });
        if (this.mode === 'Delimiter' || this.mode === 'CheckBox') {
            this.delimiterWrapper = this.createElement('span', { className: DELIMITER_WRAPPER, styles: 'display:none' });
            this.componentWrapper.appendChild(this.delimiterWrapper);
        }
        else {
            this.chipCollectionWrapper = this.createElement('span', {
                className: CHIP_WRAPPER,
                styles: 'display:none'
            });
            this.componentWrapper.appendChild(this.chipCollectionWrapper);
        }
        if (this.mode !== 'Box') {
            this.componentWrapper.appendChild(this.viewWrapper);
        }
        this.componentWrapper.appendChild(this.searchWrapper);
        if (this.showClearButton && !_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Browser"].isDevice) {
            this.componentWrapper.appendChild(this.overAllClear);
        }
        else {
            this.componentWrapper.classList.add(CLOSE_ICON_HIDE);
        }
        this.dropDownIcon();
        this.inputElement = this.createElement('input', {
            className: INPUT_ELEMENT,
            attrs: {
                spellcheck: 'false',
                type: 'text',
                autocomplete: 'off',
                tabindex: '0'
            }
        });
        if (this.element.tagName !== this.getNgDirective()) {
            this.element.style.display = 'none';
        }
        if (this.element.tagName === this.getNgDirective()) {
            this.element.appendChild(this.overAllWrapper);
            this.searchWrapper.appendChild(this.inputElement);
        }
        else {
            this.element.parentElement.insertBefore(this.overAllWrapper, this.element);
            this.searchWrapper.appendChild(this.inputElement);
            this.searchWrapper.appendChild(this.element);
            this.element.removeAttribute('tabindex');
        }
        if (this.floatLabelType !== 'Never') {
            Object(_float_label__WEBPACK_IMPORTED_MODULE_5__["createFloatLabel"])(this.overAllWrapper, this.searchWrapper, this.element, this.inputElement, this.value, this.floatLabelType, this.placeholder);
        }
        else if (this.floatLabelType === 'Never') {
            this.refreshPlaceHolder();
        }
        this.addValidInputClass();
        this.element.style.opacity = '';
        var id = this.element.getAttribute('id') ? this.element.getAttribute('id') : Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["getUniqueID"])('ej2_dropdownlist');
        this.element.id = id;
        this.hiddenElement = this.createElement('select', {
            attrs: { 'aria-hidden': 'true', 'class': HIDDEN_ELEMENT, 'tabindex': '-1', 'multiple': '' }
        });
        this.componentWrapper.appendChild(this.hiddenElement);
        this.validationAttribute(this.element, this.hiddenElement);
        if (this.mode !== 'CheckBox') {
            this.hideOverAllClear();
        }
        this.wireEvent();
        this.enable(this.enabled);
        this.enableRTL(this.enableRtl);
        this.checkInitialValue();
        this.renderComplete();
    };
    MultiSelect.prototype.checkInitialValue = function () {
        var _this = this;
        var isData = this.dataSource instanceof Array ? (this.dataSource.length > 0)
            : !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.dataSource);
        if (!(this.value && this.value.length) &&
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.text) &&
            !isData &&
            this.element.tagName === 'SELECT' &&
            this.element.options.length > 0) {
            var optionsElement = this.element.options;
            var valueCol = [];
            var textCol = '';
            for (var index = 0, optionsLen = optionsElement.length; index < optionsLen; index++) {
                var opt = optionsElement[index];
                if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(opt.getAttribute('selected'))) {
                    (opt.getAttribute('value')) ? valueCol.push(opt.getAttribute('value')) : textCol += (opt.text + this.delimiterChar);
                }
            }
            if (valueCol.length > 0) {
                this.setProperties({ value: valueCol }, true);
            }
            else if (textCol !== '') {
                this.setProperties({ text: textCol }, true);
            }
            if (valueCol.length > 0 || textCol !== '') {
                this.refreshInputHight();
                this.refreshPlaceHolder();
            }
        }
        if ((this.value && this.value.length) || !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.text)) {
            this.renderPopup();
        }
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.text) && (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.value) || this.value.length === 0)) {
            this.initialTextUpdate();
        }
        if (this.value && this.value.length) {
            if (!(this.dataSource instanceof _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_4__["DataManager"])) {
                this.initialValueUpdate();
                this.initialUpdate();
            }
            else {
                this.setInitialValue = function () {
                    _this.initStatus = false;
                    _this.initialValueUpdate();
                    _this.initialUpdate();
                    _this.setInitialValue = null;
                    _this.initStatus = true;
                };
            }
            this.updateTempValue();
        }
        else {
            this.initialUpdate();
        }
        this.initStatus = true;
        this.checkAutoFocus();
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.text)) {
            this.element.setAttribute('data-initial-value', this.text);
        }
    };
    MultiSelect.prototype.checkAutoFocus = function () {
        if (this.element.hasAttribute('autofocus')) {
            this.inputElement.focus();
        }
    };
    MultiSelect.prototype.setFloatLabelType = function () {
        Object(_float_label__WEBPACK_IMPORTED_MODULE_5__["removeFloating"])(this.overAllWrapper, this.componentWrapper, this.searchWrapper, this.inputElement, this.value, this.floatLabelType, this.placeholder);
        if (this.floatLabelType !== 'Never') {
            Object(_float_label__WEBPACK_IMPORTED_MODULE_5__["createFloatLabel"])(this.overAllWrapper, this.searchWrapper, this.element, this.inputElement, this.value, this.floatLabelType, this.placeholder);
        }
    };
    MultiSelect.prototype.addValidInputClass = function () {
        if ((!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.value) && this.value.length) || this.floatLabelType === 'Always') {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([this.overAllWrapper], 'e-valid-input');
        }
        else {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])([this.overAllWrapper], 'e-valid-input');
        }
    };
    MultiSelect.prototype.dropDownIcon = function () {
        if (this.showDropDownIcon) {
            this.dropIcon = this.createElement('span', { className: dropdownIcon });
            this.componentWrapper.appendChild(this.dropIcon);
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([this.componentWrapper], ['e-down-icon']);
        }
        else {
            if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.dropIcon)) {
                this.dropIcon.parentElement.removeChild(this.dropIcon);
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])([this.componentWrapper], ['e-down-icon']);
            }
        }
    };
    MultiSelect.prototype.initialUpdate = function () {
        if (this.mode !== 'Box') {
            this.updateDelimView();
        }
        this.updateCssClass();
        this.updateHTMLAttribute();
        this.updateReadonly(this.readonly);
        this.refreshInputHight();
        this.checkPlaceholderSize();
    };
    /**
     * Removes the component from the DOM and detaches all its related event handlers. Also it removes the attributes and classes.
     * @method destroy
     * @return {void}
     */
    MultiSelect.prototype.destroy = function () {
        if (this.popupObj) {
            this.popupObj.hide();
        }
        this.notify(destroy, {});
        this.unwireListEvents();
        this.unWireEvent();
        this.list = null;
        this.popupObj = null;
        this.mainList = null;
        this.mainData = null;
        _super.prototype.destroy.call(this);
        var temp = ['readonly', 'aria-disabled', 'aria-placeholder', 'placeholder'];
        var length = temp.length;
        while (length > 0) {
            this.inputElement.removeAttribute(temp[length - 1]);
            length--;
        }
        this.element.removeAttribute('data-initial-value');
        this.element.style.display = 'block';
        if (this.overAllWrapper.parentElement) {
            if (this.overAllWrapper.parentElement.tagName === this.getNgDirective()) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["remove"])(this.overAllWrapper);
            }
            else {
                this.overAllWrapper.parentElement.insertBefore(this.element, this.overAllWrapper);
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["remove"])(this.overAllWrapper);
            }
        }
    };
    ;
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(false)
    ], MultiSelect.prototype, "enableGroupCheckBox", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(null)
    ], MultiSelect.prototype, "cssClass", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])('100%')
    ], MultiSelect.prototype, "width", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])('300px')
    ], MultiSelect.prototype, "popupHeight", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])('100%')
    ], MultiSelect.prototype, "popupWidth", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(null)
    ], MultiSelect.prototype, "placeholder", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(null)
    ], MultiSelect.prototype, "filterBarPlaceholder", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])({})
    ], MultiSelect.prototype, "htmlAttributes", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(null)
    ], MultiSelect.prototype, "valueTemplate", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(null)
    ], MultiSelect.prototype, "headerTemplate", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(null)
    ], MultiSelect.prototype, "footerTemplate", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(null)
    ], MultiSelect.prototype, "itemTemplate", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(null)
    ], MultiSelect.prototype, "allowFiltering", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(true)
    ], MultiSelect.prototype, "changeOnBlur", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(false)
    ], MultiSelect.prototype, "allowCustomValue", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(true)
    ], MultiSelect.prototype, "showClearButton", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(1000)
    ], MultiSelect.prototype, "maximumSelectionLength", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(false)
    ], MultiSelect.prototype, "readonly", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(null)
    ], MultiSelect.prototype, "text", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(null)
    ], MultiSelect.prototype, "value", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(true)
    ], MultiSelect.prototype, "hideSelectedItem", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(true)
    ], MultiSelect.prototype, "closePopupOnSelect", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])('Default')
    ], MultiSelect.prototype, "mode", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(',')
    ], MultiSelect.prototype, "delimiterChar", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(true)
    ], MultiSelect.prototype, "ignoreCase", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(false)
    ], MultiSelect.prototype, "showDropDownIcon", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])('Never')
    ], MultiSelect.prototype, "floatLabelType", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(false)
    ], MultiSelect.prototype, "showSelectAll", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])('Select All')
    ], MultiSelect.prototype, "selectAllText", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])('Unselect All')
    ], MultiSelect.prototype, "unSelectAllText", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(true)
    ], MultiSelect.prototype, "enableSelectionOrder", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Property"])(true)
    ], MultiSelect.prototype, "openOnClick", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Event"])()
    ], MultiSelect.prototype, "change", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Event"])()
    ], MultiSelect.prototype, "removing", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Event"])()
    ], MultiSelect.prototype, "removed", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Event"])()
    ], MultiSelect.prototype, "selectedAll", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Event"])()
    ], MultiSelect.prototype, "beforeOpen", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Event"])()
    ], MultiSelect.prototype, "open", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Event"])()
    ], MultiSelect.prototype, "close", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Event"])()
    ], MultiSelect.prototype, "blur", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Event"])()
    ], MultiSelect.prototype, "focus", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Event"])()
    ], MultiSelect.prototype, "chipSelection", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Event"])()
    ], MultiSelect.prototype, "filtering", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Event"])()
    ], MultiSelect.prototype, "tagging", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Event"])()
    ], MultiSelect.prototype, "customValueSelection", void 0);
    MultiSelect = __decorate([
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["NotifyPropertyChanges"]
    ], MultiSelect);
    return MultiSelect;
}(_drop_down_base_drop_down_base__WEBPACK_IMPORTED_MODULE_0__["DropDownBase"]));



/***/ }),

/***/ "./src/app/Services/date.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/date.service.ts ***!
  \******************************************/
/*! exports provided: DateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateService", function() { return DateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/services/configuration.service */ "./src/@custor/services/configuration.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/appconfig */ "./src/app/config/appconfig.ts");





// import {Observable} from 'rxjs';


var DateService = /** @class */ (function () {
    function DateService(httpClient, appConfig, config) {
        this.httpClient = httpClient;
        this.appConfig = appConfig;
        this.config = config;
        this.url = 'api/EthiopianDate';
        this.urlETH = 'api/Ethiopic';
    }
    DateService.prototype.getEthiopianDateNow = function () {
        var _this = this;
        var endpointUrl = this.config.baseUrl + ("" + this.url);
        return this.httpClient.get(endpointUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (ethidate) { return _this.ethipoianDate = ethidate; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err || 'Server error'); }));
    };
    DateService.prototype.getEthiopianDate = function (d, m, y) {
        var _this = this;
        // const endpointUrl = this.config.baseUrl + `${this.url.url()}`;
        return this.httpClient.get(this.appConfig.urls.url('ethiodateurl') + '/' + d + '/' + m + '/' + y)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (ethidate) { return _this.ethipoianDate = ethidate; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) { return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(err || 'Server error'); }));
    };
    DateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_6__["AppConfiguration"],
            _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"]])
    ], DateService);
    return DateService;
}());



/***/ }),

/***/ "./src/app/components/incentive/incentive-request/incentive-request.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/incentive/incentive-request/incentive-request.service.ts ***!
  \*************************************************************************************/
/*! exports provided: IncentiveRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncentiveRequestService", function() { return IncentiveRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");






var IncentiveRequestService = /** @class */ (function () {
    function IncentiveRequestService(httpClient, appConfig, config, errMsg) {
        this.httpClient = httpClient;
        this.appConfig = appConfig;
        this.config = config;
        this.errMsg = errMsg;
        this.incentiveRequestList = [];
    }
    IncentiveRequestService.prototype.getIncentiveRequests = function () {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('incentiveRequests')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (incentiveRequestList) { return _this.incentiveRequestList = incentiveRequestList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestService.prototype.getIncentiveRequestslists = function (id) {
        return this.httpClient.get(this.appConfig.urls.url('incentiveRequestsothers') + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestService.prototype.getIncentiveRequestslist = function (lang, projectId, ServiceApplicationId) {
        return this.httpClient.get(this.appConfig.urls.url('incentiveRequests', projectId, ServiceApplicationId, lang)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestService.prototype.getIncentiveRequestslistByProjectId = function (id) {
        return this.httpClient.get(this.appConfig.urls.url('incentiveRequestsByProjectId') + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestService.prototype.getIncentiveRequestByServiceApplicationId = function (id, lang) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('incentiveRequestByServiceAppId', id, lang)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (incentiveRequestdata) {
            _this.incentiveRequestList = incentiveRequestdata;
            return _this.incentiveRequestList;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestService.prototype.getIncentiveRequest = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('incentiveRequest', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (incentiveRequestdata) {
            _this.incentiveRequestModel = incentiveRequestdata;
            return _this.incentiveRequestModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestService.prototype.saveIncentiveRequest = function (incentiveRequest) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('incentiveRequest'), incentiveRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (IncentiveRequest) {
            // console.log(this.incentiveRequestModel);
            _this.incentiveRequestModel = IncentiveRequest;
            return _this.incentiveRequestModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    IncentiveRequestService.prototype.deleteIncentiveRequest = function (id) {
        return this.httpClient.delete(this.config.urls.url('incentiveRequest', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errMsg.parsePromiseResponseError));
    };
    IncentiveRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_2__["AppConfiguration"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_2__["AppConfiguration"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"]])
    ], IncentiveRequestService);
    return IncentiveRequestService;
}());



/***/ }),

/***/ "./src/app/components/incentive/tax-exemption/tax-exemption.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/incentive/tax-exemption/tax-exemption.service.ts ***!
  \*****************************************************************************/
/*! exports provided: TaxExemptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxExemptionService", function() { return TaxExemptionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config/appconfig */ "./src/app/config/appconfig.ts");






var TaxExemptionService = /** @class */ (function () {
    function TaxExemptionService(httpClient, appConfig, config, errMsg) {
        this.httpClient = httpClient;
        this.appConfig = appConfig;
        this.config = config;
        this.errMsg = errMsg;
        this.taxExemptionList = [];
    }
    TaxExemptionService.prototype.getTaxExemptionList = function (ProjectId, lang) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('taxexemptions', ProjectId, lang)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (taxExemptionList) { return _this.taxExemptionList = taxExemptionList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    TaxExemptionService.prototype.getTaxExemptionYear = function (ProjectId) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('taxexemptionyear', ProjectId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (taxExemptionList) { return _this.taxExemptionList = taxExemptionList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    TaxExemptionService.prototype.getTaxExemption = function (id) {
        return this.httpClient.get(this.appConfig.urls.url('taxexemption') + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    // getTaxExemption(id): Observable<TaxExemptionModel> {
    //   return this.httpClient.get<TaxExemptionModel>(this.config.urls.url('taxExemption', id)).pipe(
    //     map(taxExemptiondata => {
    //       this.taxExemptionModel = taxExemptiondata;
    //       return this.taxExemptionModel;
    //     }),
    //     catchError(this.errMsg.parseObservableResponseError));
    // }
    TaxExemptionService.prototype.saveTaxExemption = function (taxExemption) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('taxexemption'), taxExemption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (TaxExemptionItem) {
            _this.taxExemptionModel = TaxExemptionItem;
            // console.log(this.taxExemptionModel);
            return _this.taxExemptionModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    TaxExemptionService.prototype.deleteTaxExemption = function (id) {
        return this.httpClient.delete(this.config.urls.url('taxexemption', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errMsg.parsePromiseResponseError));
    };
    TaxExemptionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_5__["AppConfiguration"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_5__["AppConfiguration"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"]])
    ], TaxExemptionService);
    return TaxExemptionService;
}());



/***/ }),

/***/ "./src/app/components/project-profile/letter/letter-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/project-profile/letter/letter-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: LetterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterRoutingModule", function() { return LetterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _letter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./letter.component */ "./src/app/components/project-profile/letter/letter.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var routes = [
    { path: '', component: _letter_component__WEBPACK_IMPORTED_MODULE_2__["LetterComponent"] }
];
var LetterRoutingModule = /** @class */ (function () {
    function LetterRoutingModule() {
    }
    LetterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LetterRoutingModule);
    return LetterRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/project-profile/letter/letter.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/project-profile/letter/letter.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"letterForm\" novalidate>\r\n  <mat-card class=\"margin-2 margin-top-20\">\r\n    <div fxFlex=\"25\" style=\"float: right;\">\r\n      <div fxFlex=\"25\" style=\"float: right;margin-right: 20px;\">\r\n        <span *ngIf=\"ShowSave\">\r\n          <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\">Save</button>\r\n          <mat-divider></mat-divider>\r\n        </span>\r\n      </div>\r\n      <span *ngIf=\"isForDetails\">\r\n        <button mat-raised-button=\"\" color=\"primary\" *ngIf=\"enableButtonGenerate\" (click)=\"generatePDF()\">Generate\r\n          Letter</button>\r\n      </span>\r\n      <mat-divider></mat-divider>\r\n    </div>\r\n\r\n    <div fxLayout.xs=\"row wrap\" fxLayoutAlign.xs=\"start center\" fxLayoutGap=\"2em\">\r\n      <div class=\"block\" fxLayoutGap=\"2em\">\r\n        <mat-form-field style=\"width: 150px\">\r\n          <mat-label>Letter Type</mat-label>\r\n          <mat-select formControlName=\"LetterType\" style=\"font-family: Calibri\" type=\"text\" [compareWith]=\"compareIds\"\r\n            (selectionChange)=\"SetControls($event.value)\" required>\r\n            <option value=\"0\">--Select--</option>\r\n            <mat-option *ngFor=\"let LetterType of Lookups\" [value]=\"LetterType.LookupId\">\r\n              <span>{{LetterType.English}}</span>\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <span *ngIf=\"revenueBranchu\">\r\n          <mat-form-field fxFlex=\"40\">\r\n            <mat-label>Revenue Branch</mat-label>\r\n            <mat-select formControlName=\"RevenueBranch\" style=\"font-family: Calibri\" type=\"text\"\r\n              [compareWith]=\"compareIds\" required>\r\n              <option value=\"0\">--Select--</option>\r\n              <mat-option *ngFor=\"let revenuebranch of Lookuprevenues\" [value]=\"revenuebranch.Amharic\">\r\n                <span>{{revenuebranch.Amharic}}</span>\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </span>\r\n        <mat-form-field *ngIf=\"RequestedDate\">\r\n          <input placeholder=\"Request Date * :\" required formControlName=\"RequestDate\" matInput\r\n            [matDatepicker]=\"RequestDate\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"RequestDate\"></mat-datepicker-toggle>\r\n          <mat-datepicker #RequestDate>\r\n          </mat-datepicker>\r\n        </mat-form-field>\r\n        <span *ngIf=\"attachment\">\r\n          <mat-form-field [fxFlex]=\"20\">\r\n            <mat-label>Attachment</mat-label>\r\n            <input type=\"text\" matInput required formControlName=\"Attachment\">\r\n            <mat-error *ngIf=\"Attachment.hasError('pattern')\">\r\n              Only neumbric charcters are allowed!\r\n            </mat-error>\r\n            <mat-error *ngIf=\"!Attachment.hasError('maxlength')\">\r\n              Maximum charcters length is 2!\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </span>\r\n        <span *ngIf=\"inoviceNo\">\r\n          <mat-form-field [fxFlex]=\"20\">\r\n            <mat-label>Invoice No</mat-label>\r\n            <input type=\"text\" matInput required formControlName=\"InvoiceNo\">\r\n          </mat-form-field>\r\n        </span>\r\n        <span *ngIf=\"categoryCode\">\r\n          <mat-form-field [fxFlex]=\"20\">\r\n            <mat-label>Category Code</mat-label>\r\n            <input type=\"text\" matInput required formControlName=\"CategoryCode\">\r\n          </mat-form-field>\r\n        </span>\r\n\r\n        <span *ngIf=\"chassisNo\">\r\n          <mat-form-field [fxFlex]=\"20\">\r\n            <mat-label>Chassis No</mat-label>\r\n            <input type=\"text\" matInput required formControlName=\"ChassisNo\">\r\n          </mat-form-field>\r\n        </span>\r\n      </div>\r\n\r\n    </div>\r\n    <!--apiKey=\"4yzxfc219romk1dtk7h8c9q8zci4aj73ls684uxob669uvo4\"-->\r\n    <editor id=\"letterContent\" apiKey=\"vjqlb0zduwhi2tlmowu26x439bchzpwpe0pu5es07n6hpryn\" class=\"full-width\"\r\n      formControlName=\"LetterContent\" [init]=\"{plugins: 'print',\r\n            height : 600,\r\n            theme: 'modern',\r\n            toolbar_items_size: 'small'}\">\r\n\r\n    </editor>\r\n\r\n  </mat-card>\r\n</form>\r\n<!-- <mat-card class=\"margin-2 padding-0\" style=\"width: 920px\">\r\n  <mat-card-header>\r\n    <mat-card-subtitle class=\"sub-title\">List of Letters\r\n    </mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <div class=\"spinner-container\" *ngIf=\"loading \">\r\n      <mat-progress-bar mode=\"query\"></mat-progress-bar>\r\n    </div>\r\n    <mat-table #table [dataSource]=\"dataSource\">\r\n      <ng-container matColumnDef=\"LetterType\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"35\">Letter Type</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let LetterModels\" fxFlex=\"35\">\r\n          {{LetterModels.LetterType | lookupPipe : 1}}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"RequestDate\">\r\n        <mat-header-cell *matHeaderCellDef fxFlex=\"25\">Request Date</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let LetterModels\" fxFlex=\"25\">\r\n          {{LetterModels.RequestDate | date:'MM/dd/yyyy'}}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Action\">\r\n        <mat-header-cell fxFlex=\"18\" *matHeaderCellDef>Action</mat-header-cell>\r\n        <mat-cell fxFlex=\"18\" *matCellDef=\"let LetterModels;let i=index;\">\r\n          <div>\r\n            <a class=\"pointer\" mat-min-fab matTooltip=\"Click here to edit the product\"\r\n               (click)=\"onEditLetter(i)\">\r\n              <mat-icon color=\"primary\" class=\"mat-18\">edit</mat-icon>\r\n              Edit\r\n            </a>\r\n            <a class=\"pointer\" mat--mini-fab color=\"warn\" matTooltip=\"Click here to delete the product\"\r\n               (click)=\"deleteLetter(i,LetterModels.LetterId)\">\r\n              <mat-icon color=\"warn\">delete</mat-icon>\r\n              Delete\r\n            </a>\r\n          </div>\r\n        </mat-cell>\r\n      </ng-container>\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\">\r\n      </mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n  </mat-card-content>\r\n</mat-card> -->\r\n<ejs-richtexteditor id='defaultRTE' [value]='rteValue' [placeholder]='placeholder'  [showCharCount]='true' >\r\n \r\n\r\n</ejs-richtexteditor>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/project-profile/letter/letter.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/project-profile/letter/letter.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#notices {\n  margin-top: 10px; }\n\n.clearfix:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.l-container {\n  background-color: white !important;\n  border: 1px solid #f1f1f1;\n  padding: 42px 100px 50px 94px;\n  margin: 10px 20px 20px 20px;\n  color: #000000 !important;\n  font-family: Nyala !important;\n  font-size: 15px !important;\n  font-weight: normal !important;\n  font-style: normal !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Byb2plY3QtcHJvZmlsZS9sZXR0ZXIvQzpcXFVzZXJzXFxGZXRpaGEgS1xcRGVza3RvcFxcREVWXFxHaXRMYWJcXEludmVzdG1uZXRcXENVU1RPUi5FSUMuQVBJXFxzcmMvYXBwXFxjb21wb25lbnRzXFxwcm9qZWN0LXByb2ZpbGVcXGxldHRlclxcbGV0dGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBSWxCO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQ0FBa0M7RUFDbEMseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLDZCQUE2QixFQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3Byb2plY3QtcHJvZmlsZS9sZXR0ZXIvbGV0dGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNub3RpY2VzIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIC8vcGFkZGluZzogMHB4IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNsZWFyZml4OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4ubC1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICBwYWRkaW5nOiA0MnB4IDEwMHB4IDUwcHggOTRweDtcclxuICBtYXJnaW46IDEwcHggMjBweCAyMHB4IDIwcHg7XHJcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogTnlhbGEgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgLy9tYXJnaW4tcmlnaHQ6IDE3MHB4O1xyXG4gIC8vd2lkdGg6IDIwMG1tICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/project-profile/letter/letter.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/project-profile/letter/letter.component.ts ***!
  \***********************************************************************/
/*! exports provided: LetterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterComponent", function() { return LetterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _letter_template_lettertepmlate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../letter-template/lettertepmlate.service */ "./src/app/components/letter-template/lettertepmlate.service.ts");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Services/project-profile.service */ "./src/app/Services/project-profile.service.ts");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var _letter_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./letter.service */ "./src/app/components/project-profile/letter/letter.service.ts");
/* harmony import */ var _custor_helpers_compare__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @custor/helpers/compare */ "./src/@custor/helpers/compare.ts");
/* harmony import */ var _Services_look_up_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../Services/look-up.service */ "./src/app/Services/look-up.service.ts");
/* harmony import */ var _incentive_incentive_request_incentive_request_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../incentive/incentive-request/incentive-request.service */ "./src/app/components/incentive/incentive-request/incentive-request.service.ts");
/* harmony import */ var _incentive_tax_exemption_tax_exemption_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../incentive/tax-exemption/tax-exemption.service */ "./src/app/components/incentive/tax-exemption/tax-exemption.service.ts");
/* harmony import */ var _Services_Address_address_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../Services/Address/address.service */ "./src/app/Services/Address/address.service.ts");
/* harmony import */ var _custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @custor/components/confirm-dialog/confirm-dialog.component */ "./src/@custor/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _Services_date_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../Services/date.service */ "./src/app/Services/date.service.ts");
/* harmony import */ var _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @custor/services/configuration.service */ "./src/@custor/services/configuration.service.ts");
/* harmony import */ var _enum_enums__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../enum/enums */ "./src/app/enum/enums.ts");





















var LetterComponent = /** @class */ (function () {
    // public data: Object = '<p>Badminton</p>';
    function LetterComponent(lettertepmlateService, letterService, projectProfileService, incentiveRequestService, taxExemptionService, configService, addressService, config, activatedRoute, router, route, http, snackbar, toastr, dialog, errMsg, lookUpsService, dateService, fb) {
        this.lettertepmlateService = lettertepmlateService;
        this.letterService = letterService;
        this.projectProfileService = projectProfileService;
        this.incentiveRequestService = incentiveRequestService;
        this.taxExemptionService = taxExemptionService;
        this.configService = configService;
        this.addressService = addressService;
        this.config = config;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.route = route;
        this.http = http;
        this.snackbar = snackbar;
        this.toastr = toastr;
        this.dialog = dialog;
        this.errMsg = errMsg;
        this.lookUpsService = lookUpsService;
        this.dateService = dateService;
        this.fb = fb;
        this.letterModelList = [];
        this.incentiveRequestModelList = [];
        this.content2 = '<p>some content</p>';
        this.isNewLetter = true;
        this.editMode = false;
        this.loading = false;
        this.ShowSave = false;
        this.isForDetails = true;
        this.revenueBranchu = false;
        this.RequestedDate = false;
        this.attachment = false;
        this.inoviceNo = false;
        this.categoryCode = false;
        this.chassisNo = false;
        this.enableButtonGenerate = false;
        this.displayedColumns = ['LetterType', 'RequestDate', 'Action'];
        this.showTemplate = false;
        this.rteValue = "";
        // this.tools = ["formatStyle", "font", "style", "effects", "alignment", "lists", "indenting", "clipboard", "doAction", "clear", "casing", "customTools", "print"];
        this.letterModel = {};
        this.initForm();
        // ;
    }
    Object.defineProperty(LetterComponent.prototype, "Attachment", {
        get: function () {
            return this.letterForm.get('Attachment');
        },
        enumerable: true,
        configurable: true
    });
    LetterComponent.prototype.ngOnInit = function () {
        this.currentLang = this.configService.language;
        this.initForm();
        this.getEthiopianDate();
        this.ProjectId = this.route.snapshot.params['projectId'] || this.route.snapshot.params['ProjectId'];
        this.InvestorId = this.route.snapshot.params['InvestorId'];
        if (this.route.snapshot.params['isForDetail'] == 1) {
            this.getLetter();
            this.getLookups();
            this.isForDetails = false;
        }
        else {
            this.ServiceId = this.route.snapshot.params['ServiceId'] || this.route.snapshot.params['serviceId'];
            this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'] || this.route.snapshot.params['serviceApplicationId'];
            this.getProjectDetails();
            this.getIncentiveDetails();
            //this.getLetterTempalte();
            this.getTaxExemptionDetails();
            // if (this.ServiceId == '1045') {
            if (this.ServiceId == _enum_enums__WEBPACK_IMPORTED_MODULE_20__["ServiceEnum"].TaxHolidayIncentive) {
                this.getItemLookup(2846, 100);
                this.getLetters(2846, 100);
                // } else if (this.ServiceId == '1046' || this.ServiceId == '1047' || this.ServiceId == '1054') {
            }
            else if (this.ServiceId == _enum_enums__WEBPACK_IMPORTED_MODULE_20__["ServiceEnum"].DutyFreeIncentive || this.ServiceId == _enum_enums__WEBPACK_IMPORTED_MODULE_20__["ServiceEnum"].UploadingOfConstructionMaterial || this.ServiceId == _enum_enums__WEBPACK_IMPORTED_MODULE_20__["ServiceEnum"].UploadingOfRawMaterial) {
                this.getItemLookup(2845, 2847);
                this.getLetters(2845, 2847);
            }
            else if (this.ServiceId == _enum_enums__WEBPACK_IMPORTED_MODULE_20__["ServiceEnum"].NewIP) {
                this.getItemLookup(2851, 2854);
                this.getLetters(2851, 2854);
            }
            this.getReveuneLookup();
            this.getAddressData(this.ProjectId);
            this.getInvestorAddressData(this.InvestorId);
        }
        // else if (this.ServiceId === '1046') {
        //
        // }else if (this.ServiceId === '1047') {
        //
        // }
    };
    LetterComponent.prototype.getLetter = function () {
        var _this = this;
        this.letterService.getLetterLists(this.ProjectId, this.currentLang)
            .subscribe(function (result) {
            console.log(result);
            if (result) {
                _this.letterModelList = result;
                // console.log(this.letterModelList);
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.letterModelList);
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    LetterComponent.prototype.getTaxExemptionDetails = function () {
        var _this = this;
        this.taxExemptionService.getTaxExemption(this.ProjectId)
            .subscribe(function (result) {
            if (result) {
                // console.log(result);
                _this.taxExemptionModel = result;
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    LetterComponent.prototype.getReveuneLookup = function () {
        var _this = this;
        this.loadingIndicator = true;
        this.lookupSub = this.lookUpsService
            .getLookupByParentId(22, this.currentLang)
            .subscribe(function (result) {
            _this.Lookuprevenues = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    LetterComponent.prototype.getItemLookup = function (code, code1) {
        var _this = this;
        this.loadingIndicator = true;
        this.lookupSub = this.lookUpsService
            .getLookupByParentIdandCode(707, code, code1)
            .subscribe(function (result) {
            _this.Lookups = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    LetterComponent.prototype.getLookups = function () {
        var _this = this;
        this.loadingIndicator = true;
        this.lookupSub = this.lookUpsService
            .getLookupByParentId(707, this.currentLang)
            .subscribe(function (result) {
            _this.Lookups = result;
        }, function (error) { return _this.toastr.error(_this.errMsg.getError(error)); });
    };
    LetterComponent.prototype.getLetters = function (LetterType, LetterType1) {
        var _this = this;
        this.letterService.getLetterList(this.ProjectId, LetterType, LetterType1)
            .subscribe(function (result) {
            if (result) {
                _this.letterModelList = result;
                // console.log(this.letterModelList);
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.letterModelList);
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    LetterComponent.prototype.getIncentiveDetails = function () {
        var _this = this;
        this.incentiveRequestService.getIncentiveRequestByServiceApplicationId(this.ServiceApplicationId, this.currentLang) //34517
            .subscribe(function (result) {
            if (result) {
                // console.log(this.incentiveRequestModelList);
                _this.incentiveRequestModelList = result;
                // console.log(result);
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    LetterComponent.prototype.getAddressData = function (parent) {
        var _this = this;
        this.addressService.getAddress(parent)
            .subscribe(function (result) {
            _this.addressList = result;
            //console.log(result);
        }, function (error) { return _this.errMsg.getError(error); });
    };
    LetterComponent.prototype.getInvestorAddressData = function (parent) {
        var _this = this;
        this.addressService.getAddress(parent)
            .subscribe(function (result) {
            _this.InvestoraddressList = result;
            //console.log(result);
        }, function (error) { return _this.errMsg.getError(error); });
    };
    LetterComponent.prototype.getProjectDetails = function () {
        var _this = this;
        this.projectProfileService.projectsDetailForLetter(this.ProjectId)
            .subscribe(function (result) {
            if (result) {
                _this.projectModel = result;
                //console.log(result);
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    LetterComponent.prototype.SetControls = function (letterType) {
        if (!letterType) {
            return;
        }
        if (letterType === 2845) {
            this.inoviceNo = false;
            this.attachment = true;
            this.revenueBranchu = false;
            this.categoryCode = false;
            this.chassisNo = false;
        }
        else if (letterType === 2846) {
            this.inoviceNo = false;
            this.attachment = true;
            this.revenueBranchu = false;
            this.categoryCode = false;
            this.chassisNo = false;
        }
        else if (letterType === 2847) {
            this.inoviceNo = false;
            this.attachment = true;
            this.revenueBranchu = false;
            this.categoryCode = false;
            this.chassisNo = false;
        }
        this.enableButtonGenerate = true;
        this.getLetterTempalte(letterType);
    };
    LetterComponent.prototype.getLetterTempalte = function (letterType) {
        var _this = this;
        this.lettertepmlateService.getletterTemplate(letterType).subscribe(function (result) {
            _this.showTemplate = true;
            if (result) {
                // console.log(result.LetterContent);
                _this.letterTempalteModel = result;
                _this.rteValue = result.LetterContent.toString();
            }
        }, function (error) { return _this.errMsg.getError(error); });
    };
    LetterComponent.prototype.initForm = function () {
        this.letterForm = this.fb.group({
            LetterContent: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            LetterType: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            RevenueBranch: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            InvoiceNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Attachment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9 .]+$')])],
            CategoryCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9 .]+$')])],
            RequestDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](),
        });
    };
    LetterComponent.prototype.compareIds = function (id1, id2) {
        var a1 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_12__["determineId"])(id1);
        var a2 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_12__["determineId"])(id2);
        return a1 === a2;
    };
    LetterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loadingIndicator = true;
        return this.letterService.saveletter(this.getEditedLetter()).subscribe(function (letterModel) {
            _this.saveCompleted(letterModel);
        }, function (err) { return _this.handleError(err); });
    };
    LetterComponent.prototype.onEditLetter = function (index) {
        this.ShowSave = true;
        this.editMode = true;
        this.letterEditIndex = index;
        this.letterModel = this.letterModelList[index];
        this.letterForm.patchValue(this.letterModel);
        this.isNewLetter = false;
    };
    LetterComponent.prototype.onClear = function () {
        this.editMode = false;
        this.letterForm.reset();
        this.isNewLetter = true;
    };
    LetterComponent.prototype.getEthiopianDate = function () {
        var _this = this;
        var subscription = this.dateService.getEthiopianDateNow()
            .subscribe(function (data) {
            _this.todayEthioDate = data;
            var d = _this.todayEthioDate.split('/').reverse().join('-');
            // var d2 = new Date(d);
            var d2 = new Date(d);
            var year = d2.getFullYear() + 1;
            var month = d2.getMonth() + 1;
            var day = d2.getDate();
            _this.dateEthioNextYear = day + '/' + month + '/' + year;
        });
    };
    LetterComponent.prototype.generatePDF = function () {
        console.log("helloW");
        console.log(this.addressList.Region.Description);
        //this.LetterContent = this.letterTempalteModel.LetterContent.replace(/{{FullName}}/g, this.projectModel.Investor.InvestorName);
        this.ShowSave = true;
        this.rteValue = this.rteValue.replace(/{{FullName}}/g, this.projectModel.Investor.InvestorName);
        this.rteValue = this.rteValue.replace(/{{FullNameEng}}/g, this.projectModel.Investor.InvestorNameEng.toUpperCase());
        this.rteValue = this.rteValue.replace(/{{TeleNo}}/g, this.InvestoraddressList.CellPhoneNo);
        this.rteValue = this.rteValue.replace(/{{Region}}/g, this.addressList.Region.Description);
        this.rteValue = this.rteValue.replace(/{{Capital}}/g, (this.projectModel.ProjectCost[0].OtherCapitalCost + this.projectModel.ProjectCost[0].EquityFinance + this.projectModel.ProjectCost[0].LoanFinance).toString());
        this.rteValue = this.rteValue.replace(/{{InvActivity}}/g, this.projectModel.InvestmentActivity.Description);
        this.rteValue = this.rteValue.replace(/{{ReqDate}}/g, new Date().toDateString());
        this.rteValue = this.rteValue.replace(/{{InvestmentPermitNo}}/g, this.projectModel.InvestmentPermitNo);
        this.rteValue = this.rteValue.replace(/{{StartDate}}/g, new Date(this.projectModel.StartDate).getMonth() +
            '/' + new Date(this.projectModel.StartDate).getDay() + '/' + new Date(this.projectModel.StartDate).getFullYear());
        this.rteValue = this.rteValue.replace(/{{InvActivityEng}}/g, this.projectModel.InvestmentActivity.DescriptionEnglish);
        this.rteValue = this.rteValue.replace(/{{RegionEng}}/g, this.addressList.Region.DescriptionEnglish);
        this.rteValue = this.rteValue.replace(/{{ExemptionYear}}/g, this.projectModel.IsOromiaSpecialZone ? this.projectModel.InvestmentActivity.InAddisOromiaAreas.toString() : this.projectModel.InvestmentActivity.InOtherAreas.toString());
        var formModel = this.letterForm.value;
        this.rteValue = this.rteValue.replace(/{{Num}}/g, formModel.Attachment);
        this.rteValue = this.rteValue.replace(/{{CategoryCode}}/g, this.projectModel.InvestmentActivity.Code);
        // this.LetterContent = this.LetterContent.replace(/{{ChassisNo}}/g,
        //   formModel.ChassisNo);
        console.log(this.projectModel);
        this.rteValue = this.rteValue.replace(/{{CapitalInBirr}}/g, (this.projectModel.ProjectCost[0].LandCostInBirr + this.projectModel.ProjectCost[0].BuildingCostInBirr + this.projectModel.ProjectCost[0].MachineryCostInBirr + this.projectModel.ProjectCost[0].TransportCostInBirr + this.projectModel.ProjectCost[0].OfficeEquipmentCostInBirr + this.projectModel.ProjectCost[0].OtherCapitalCostInBirr + this.projectModel.ProjectCost[0].InitialWorkingCapitalCostInBirr).toString());
        if (this.ServiceId == _enum_enums__WEBPACK_IMPORTED_MODULE_20__["ServiceEnum"].TaxHolidayIncentive) {
            this.rteValue = this.rteValue.replace(/{{OrgName}}/g, this.taxExemptionModel.RevenueBranchDescription);
        }
        this.rteValue = this.rteValue.replace(/{{ReqDateAmh}}/g, this.todayEthioDate);
        if (this.ServiceId !== _enum_enums__WEBPACK_IMPORTED_MODULE_20__["ServiceEnum"].TaxHolidayIncentive && this.ServiceId != _enum_enums__WEBPACK_IMPORTED_MODULE_20__["ServiceEnum"].NewIP) {
            this.rteValue = this.rteValue.replace(/{{InvoiceNo}}/g, this.InoviceNo = this.incentiveRequestModelList[0].InvoiceNo);
        }
        // this.letterTempalteModel.LetterContent = this.LetterContent;
        //   this.letterForm.patchValue({
        //   LetterContent: this.LetterContent
        //  });
        this.letterTempalteModel.LetterContent = this.rteValue;
        this.letterForm.patchValue({
            LetterContent: this.rteValue
        });
    };
    LetterComponent.prototype.deleteLetter = function (index, id) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_17__["AngConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            _this.loadingIndicator = true;
            if (result) {
                _this.letterService.deleteletter(id)
                    .subscribe(function () {
                    _this.notification('Deleted');
                    _this.letterModelList.splice(index, 1);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.letterModelList);
                });
            }
            _this.loadingIndicator = false;
        });
    };
    LetterComponent.prototype.notification = function (message) {
        this.loading = false;
        this.toastr.success(" Succesfully " + message + " Data.!", 'Success');
        this.snackbar.open(" Succesfully " + message + " Data.!", 'Close', {
            duration: 3000,
        });
    };
    LetterComponent.prototype.toConvertString = function (value) {
        if (value !== null) {
            return value.toString();
        }
        else {
            return value;
        }
    };
    LetterComponent.prototype.getCategoryCode = function () {
        return this.letterForm.get('CategoryCode');
    };
    LetterComponent.prototype.saveCompleted = function (letter) {
        if (letter) {
            this.letterModel = letter;
            if (this.ServiceId === '1045') {
                this.getLetters(2846, 100);
            }
            else if (this.ServiceId === '1046' || this.ServiceId === '1047' || this.ServiceId === '1054') {
                this.getLetters(2845, 2847);
            }
            else if (this.ServiceId === '13') {
                this.getLetters(2851, 2854);
            }
        }
        this.onClear();
        this.loadingIndicator = false;
        this.toastr.success('Record saved successfully!');
    };
    LetterComponent.prototype.getEditedLetter = function () {
        var formModel = this.letterForm.value;
        return {
            LetterId: this.isNewLetter ? 0 : this.letterModel.LetterId,
            LetterType: formModel.LetterType,
            LetterContent: formModel.LetterContent,
            // Attachment: formModel.Attachment,
            RequestDate: new Date(),
            ProjectId: this.ProjectId
        };
    };
    LetterComponent.prototype.handleError = function (err) {
        this.loadingIndicator = false;
        this.toastr.error(this.errMsg.getError(err));
        this.loadingIndicator = false;
    };
    LetterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-letter',
            template: __webpack_require__(/*! ./letter.component.html */ "./src/app/components/project-profile/letter/letter.component.html"),
            styles: [__webpack_require__(/*! ./letter.component.scss */ "./src/app/components/project-profile/letter/letter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_letter_template_lettertepmlate_service__WEBPACK_IMPORTED_MODULE_2__["LettertepmlateService"],
            _letter_service__WEBPACK_IMPORTED_MODULE_11__["LetterService"],
            _Services_project_profile_service__WEBPACK_IMPORTED_MODULE_9__["ProjectProfileService"],
            _incentive_incentive_request_incentive_request_service__WEBPACK_IMPORTED_MODULE_14__["IncentiveRequestService"],
            _incentive_tax_exemption_tax_exemption_service__WEBPACK_IMPORTED_MODULE_15__["TaxExemptionService"],
            _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_19__["ConfigurationService"],
            _Services_Address_address_service__WEBPACK_IMPORTED_MODULE_16__["AddressService"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_10__["ErrorMessage"],
            _Services_look_up_service__WEBPACK_IMPORTED_MODULE_13__["LookUpService"],
            _Services_date_service__WEBPACK_IMPORTED_MODULE_18__["DateService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
    ], LetterComponent);
    return LetterComponent;
}());



/***/ }),

/***/ "./src/app/components/project-profile/letter/letter.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/project-profile/letter/letter.module.ts ***!
  \********************************************************************/
/*! exports provided: LetterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterModule", function() { return LetterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-richtexteditor */ "./node_modules/@syncfusion/ej2-angular-richtexteditor/@syncfusion/ej2-angular-richtexteditor.es5.js");
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ "./node_modules/@syncfusion/ej2-angular-dropdowns/@syncfusion/ej2-angular-dropdowns.es5.js");
/* harmony import */ var _letter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./letter.component */ "./src/app/components/project-profile/letter/letter.component.ts");
/* harmony import */ var _letter_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./letter-routing.module */ "./src/app/components/project-profile/letter/letter-routing.module.ts");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "./node_modules/@tinymce/tinymce-angular/fesm5/tinymce-tinymce-angular.js");









var LetterModule = /** @class */ (function () {
    function LetterModule() {
    }
    LetterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_3__["RichTextEditorAllModule"],
                _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_4__["DropDownListModule"],
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _letter_routing_module__WEBPACK_IMPORTED_MODULE_6__["LetterRoutingModule"],
                _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_8__["EditorModule"]
            ],
            declarations: [_letter_component__WEBPACK_IMPORTED_MODULE_5__["LetterComponent"]],
            exports: [_letter_component__WEBPACK_IMPORTED_MODULE_5__["LetterComponent"]]
        })
    ], LetterModule);
    return LetterModule;
}());



/***/ }),

/***/ "./src/app/components/project-profile/letter/letter.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/project-profile/letter/letter.service.ts ***!
  \*********************************************************************/
/*! exports provided: LetterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterService", function() { return LetterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/services/errMessageService */ "./src/@custor/services/errMessageService.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config/appconfig */ "./src/app/config/appconfig.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var LetterService = /** @class */ (function () {
    function LetterService(httpClient, appConfig, config, errMsg) {
        this.httpClient = httpClient;
        this.appConfig = appConfig;
        this.config = config;
        this.errMsg = errMsg;
        this.letterModelList = [];
    }
    LetterService.prototype.getLetterList = function (projectId, LetterType, LetterType1) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('letters', projectId, LetterType, LetterType1)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (letterModelList) { return _this.letterModelList = letterModelList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    LetterService.prototype.getLetterLists = function (projectId, lang) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('lettersByProjectId', projectId, lang)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (letterModelList) { return _this.letterModelList = letterModelList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    LetterService.prototype.getletter = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url('letter', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (letterModeldata) {
            _this.letterModel = letterModeldata;
            return _this.letterModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    LetterService.prototype.saveletter = function (data) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url('letter'), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (letterModel) {
            _this.letterModel = letterModel;
            // // console.log(this.letterModel);
            return _this.letterModel;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errMsg.parseObservableResponseError));
    };
    LetterService.prototype.deleteletter = function (id) {
        return this.httpClient.delete(this.config.urls.url('letter', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errMsg.parsePromiseResponseError));
    };
    LetterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_4__["AppConfiguration"],
            _config_appconfig__WEBPACK_IMPORTED_MODULE_4__["AppConfiguration"], _custor_services_errMessageService__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"]])
    ], LetterService);
    return LetterService;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-components-business-business-tab-business-tab-module~app-components-incentive-balance-ba~68515f01.js.map