(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-components-business-business-tab-business-tab-module~app-components-followup-followup-mo~27e8b5d9"],{

/***/ "./src/@custor/const/consts.ts":
/*!*************************************!*\
  !*** ./src/@custor/const/consts.ts ***!
  \*************************************/
/*! exports provided: MARITAL_STATUSES, GENDERS, TITLES, FormOfOwnership, CancellationReason, ProjectStage, ProjectStatus, Quarter, Quantitys, TariffModes, BusinessTypes, SectorTypes, CurrencyTypes, UnitTypes, ApplicationStatus, Decision, Service, ServiceTypes, AMENDMENT_STEP, AMH_SAVE_SUCCESS_MSG, AMH_UPDATE_SUCCESS_MSG, AMH_NOT_FOUND_MSG, AMH_SAVE_ERR_MSG, AMH_UPDATE_ERR_MSG, ENG_SAVE_SUCCESS_MSG, ENG_UPDATE_SUCCESS_MSG, ENG_NOT_FOUND_MSG, ENG_SAVE_ERR_MSG, ENG_UPDATE_ERR_MSG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARITAL_STATUSES", function() { return MARITAL_STATUSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENDERS", function() { return GENDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLES", function() { return TITLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormOfOwnership", function() { return FormOfOwnership; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancellationReason", function() { return CancellationReason; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectStage", function() { return ProjectStage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectStatus", function() { return ProjectStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quarter", function() { return Quarter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quantitys", function() { return Quantitys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TariffModes", function() { return TariffModes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessTypes", function() { return BusinessTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectorTypes", function() { return SectorTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyTypes", function() { return CurrencyTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitTypes", function() { return UnitTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationStatus", function() { return ApplicationStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Decision", function() { return Decision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceTypes", function() { return ServiceTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AMENDMENT_STEP", function() { return AMENDMENT_STEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AMH_SAVE_SUCCESS_MSG", function() { return AMH_SAVE_SUCCESS_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AMH_UPDATE_SUCCESS_MSG", function() { return AMH_UPDATE_SUCCESS_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AMH_NOT_FOUND_MSG", function() { return AMH_NOT_FOUND_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AMH_SAVE_ERR_MSG", function() { return AMH_SAVE_ERR_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AMH_UPDATE_ERR_MSG", function() { return AMH_UPDATE_ERR_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENG_SAVE_SUCCESS_MSG", function() { return ENG_SAVE_SUCCESS_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENG_UPDATE_SUCCESS_MSG", function() { return ENG_UPDATE_SUCCESS_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENG_NOT_FOUND_MSG", function() { return ENG_NOT_FOUND_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENG_SAVE_ERR_MSG", function() { return ENG_SAVE_ERR_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENG_UPDATE_ERR_MSG", function() { return ENG_UPDATE_ERR_MSG; });
var MARITAL_STATUSES = [
    { 'Id': '1', 'Description': 'ያላገባ', 'DescriptionEng': 'Single' },
    { 'Id': '2', 'Description': 'ያገባ', 'DescriptionEng': 'Married' },
    { 'Id': '3', 'Description': 'የፈታ', 'DescriptionEng': 'Divorced' }
];
var GENDERS = [
    { 'Id': '1', 'Description': 'ወንድ', 'DescriptionEng': 'Male' },
    { 'Id': '2', 'Description': 'ሴት', 'DescriptionEng': 'Female' }
];
var TITLES = [
    { 'Id': '1', 'Description': 'አቶ', 'DescriptionEng': 'Mr' },
    { 'Id': '2', 'Description': 'ወ/ሮ', 'DescriptionEng': 'Mrs' },
    { 'Id': '3', 'Description': 'ወ/ሪት', 'DescriptionEng': 'Miss' },
    { 'Id': '4', 'Description': 'ዶ/ር', 'DescriptionEng': 'Dr' }
];
var FormOfOwnership = [
    { 'Id': '1', 'Description': 'የሃገር ውስጥ ባለሃብት', 'DescriptionEng': 'Domestic Investor' },
    { 'Id': '2', 'Description': 'የውጭ ሃገር ኢንቨስተር', 'DescriptionEng': 'Foreign Investor' },
    { 'Id': '3', 'Description': 'እንደ ሃገር ውስጥ ባለሃብት', 'DescriptionEng': 'As Domestic Investor' },
    { 'Id': '4', 'Description': 'የሀገር ውስጥ እና የውጭ ባለሀብት', 'DescriptionEng': 'Joint Investment' },
    // {'Id': '5', Description: 'ትውልደ ኢትዮጵያዊ', 'DescriptionEng': 'Ethiopian by birth'},
    { 'Id': '5', 'Description': 'ቅርጫፍ', 'DescriptionEng': 'Branch' },
];
var CancellationReason = [
    { 'Id': '1', 'Description': 'Own Interest', 'DescriptionEng': 'Own Interest' },
    { 'Id': '2', 'Description': 'by law', 'DescriptionEng': 'by law' },
    { 'Id': '3', 'Description': 'Lose', 'DescriptionEng': 'Lose' },
    { 'Id': '4', 'Description': 'By Authority', 'DescriptionEng': 'By Authority' },
    { 'Id': '5', 'Description': 'Sales', 'DescriptionEng': 'Sales' },
    { 'Id': '6', 'Description': 'Late Renewal', 'DescriptionEng': 'Late Renewal' },
];
var ProjectStage = [
    { 'Id': '1', 'Description': 'ቅድመ ትግበራ', 'DescriptionEnglish': 'PreImplementation' },
    { 'Id': '2', 'Description': 'ትግበራ', 'DescriptionEnglish': 'Implementation' },
    { 'Id': '3', 'Description': 'በስራ ላይ', 'DescriptionEnglish': 'Operation' },
];
var ProjectStatus = [
    { 'Id': '4', 'Description': 'ተሰርዟል', 'DescriptionEnglish': 'Cancelled' },
    { 'Id': '5', 'Description': 'ታግዷል', 'DescriptionEnglish': 'Injected ' },
    { 'Id': '6', 'Description': 'ተዘግቷል', 'DescriptionEnglish': 'Closed' },
    { 'Id': '7', 'Description': 'ተዛውሯል', 'DescriptionEnglish': 'Transfered' },
    { 'Id': '8', 'Description': 'የማይንቀሳቀስ', 'DescriptionEnglish': 'Not Active' },
    { 'Id': '9', 'Description': 'በስራ ላይ', 'DescriptionEnglish': 'Active' }
];
var Quarter = [
    { 'Id': '1', 'Description': 'I', 'DescriptionEnglish': 'I' },
    { 'Id': '2', 'Description': 'II', 'DescriptionEnglish': 'II' },
    { 'Id': '3', 'Description': 'III', 'DescriptionEnglish': 'III' },
    { 'Id': '4', 'Description': 'IV', 'DescriptionEnglish': 'IV' },
];
var Quantitys = [
    { 'Id': '1', 'Description': 'በኮፒ', 'DescriptionEnglish': 'Copy' },
    { 'Id': '2', 'Description': 'በሰው', 'DescriptionEnglish': 'Person' },
    { 'Id': '3', 'Description': 'በቴምብር', 'DescriptionEnglish': 'Stamp' },
    { 'Id': '4', 'Description': 'በፐርሰንት', 'DescriptionEnglish': 'Percent' },
    { 'Id': '5', 'Description': 'ሌላ', 'DescriptionEnglish': 'Others' }
];
var TariffModes = [
    { 'Id': '1', 'Description': 'ቋሚ', 'DescriptionEnglish': 'Fixed' },
    { 'Id': '2', 'Description': 'ተጨማሪ', 'DescriptionEnglish': 'Incremental' },
    { 'Id': '3', 'Description': 'ፐርሰንት', 'DescriptionEnglish': 'Percent' }
];
var BusinessTypes = [
    { 'Id': '1', 'Description': 'ግለሰብ', 'DescriptionEnglish': 'Individual' },
    { 'Id': '2', 'Description': 'ንግድ ማህበር', 'DescriptionEnglish': 'Business Organization' },
    { 'Id': '3', 'Description': 'ለሁሉም', 'DescriptionEnglish': 'All' }
];
var SectorTypes = [
    { 'Id': '1', 'Description': 'አንደኛ', 'DescriptionEnglish': 'Primary' },
    { 'Id': '2', 'Description': 'ሁለተኛ', 'DescriptionEnglish': 'Secondary' },
    { 'Id': '3', 'Description': 'ሶስተኛ', 'DescriptionEnglish': 'Teritiary' }
];
var CurrencyTypes = [
    { 'Id': '1', 'Description': 'ዶላር', 'DescriptionEnglish': 'Dollar' },
    { 'Id': '2', 'Description': 'ፓውንድ', 'DescriptionEnglish': 'Pound' },
    { 'Id': '3', 'Description': 'ዩሮ', 'DescriptionEnglish': 'Euro' },
    { 'Id': '3', 'Description': 'ድርሃም', 'DescriptionEnglish': 'Dereham' }
];
var UnitTypes = [
    { 'Id': '1', 'Description': 'ኪግ', 'DescriptionEnglish': 'Kg' },
    { 'Id': '2', 'Description': 'ሊትር', 'DescriptionEnglish': 'Liter' },
    { 'Id': '3', 'Description': 'ሜትር', 'DescriptionEnglish': 'Meter' },
    { 'Id': '4', 'Description': 'ደርዘን', 'DescriptionEnglish': 'Dull' },
    { 'Id': '5', 'Description': 'ቁራጭ', 'DescriptionEnglish': 'Pcs' },
    { 'Id': '6', 'Description': 'ካርቶን', 'DescriptionEnglish': 'Carton' },
    { 'Id': '7', 'Description': 'ጥንድ', 'DescriptionEnglish': 'Pair' },
    { 'Id': '8', 'Description': 'እስር', 'DescriptionEnglish': 'Set' },
    { 'Id': '9', 'Description': 'ድረም', 'DescriptionEnglish': 'Drum' },
    { 'Id': '10', 'Description': 'ሜ ቶን', 'DescriptionEnglish': 'M.Ton' },
    { 'Id': '11', 'Description': 'ጋሎን', 'DescriptionEnglish': 'Galon' },
    { 'Id': '12', 'Description': 'ሺት', 'DescriptionEnglish': 'Sheet' },
    { 'Id': '13', 'Description': 'ፓድ', 'DescriptionEnglish': 'Pad' },
    { 'Id': '14', 'Description': 'ሮል', 'DescriptionEnglish': 'Roll' },
    { 'Id': '15', 'Description': 'ካሬ ሜትር', 'DescriptionEnglish': 'KMeter' },
    { 'Id': '16', 'Description': 'ከረጢት', 'DescriptionEnglish': 'Bages' },
    { 'Id': '17', 'Description': 'ጆግ', 'DescriptionEnglish': 'Jar' },
    { 'Id': '18', 'Description': 'ሲሊንደር', 'DescriptionEnglish': 'Cylinder' },
    { 'Id': '19', 'Description': 'በቁጥር', 'DescriptionEnglish': 'Number' },
    { 'Id': '20', 'Description': 'በፈረሱላ', 'DescriptionEnglish': 'Feresula' },
    { 'Id': '21', 'Description': 'በሰዓት', 'DescriptionEnglish': 'Hour' },
    { 'Id': '22', 'Description': 'በዋት', 'DescriptionEnglish': 'Wat' },
    { 'Id': '23', 'Description': 'ሌላ', 'DescriptionEnglish': 'Other' }
];
var ApplicationStatus = [
    { 'Id': '44450', 'Description': 'Drafted', 'DescriptionEnglish': 'Drafted' },
    { 'Id': '44446', 'Description': 'Submitted', 'DescriptionEnglish': 'Submitted' },
    { 'Id': '44447', 'Description': 'Approved', 'DescriptionEnglish': 'Approved' },
    { 'Id': '44448', 'Description': 'Pending', 'DescriptionEnglish': 'Pending' },
    { 'Id': '44449', 'Description': 'Completed', 'DescriptionEnglish': 'Completed' }
];
// by gebre
var Decision = [
    { Id: 1, Description: 'ተፈቅዷል', DescriptionEnglish: 'Permitted' },
    { Id: 2, Description: 'ውድቅ ተደርጓል', DescriptionEnglish: 'Not Permitted' }
];
var Service = [
    { Id: 1, Description: 'አዲስ የኢንቨስትመንት ፈቃድ', DescriptionEnglish: 'New Investment Permit' },
    { Id: 2, Description: 'የኢንቨስትመንት ፈቃድ እድሳት', DescriptionEnglish: 'Renewal of IP' },
    { Id: 3, Description: 'የኢንቨስትመንት ፈቃድ ስረዛ', DescriptionEnglish: 'Cancellation of IP' },
    { Id: 4, Description: 'የኢንቨስትመንት ፈቃድ ማስፋፊያ', DescriptionEnglish: 'IP Expansion' },
    { Id: 5, Description: 'የኢንቨስትመንት ፈቃድ ምትክ', DescriptionEnglish: 'Substitute IP' },
    { Id: 6, Description: 'የፕሮጀክት ለውጥ', DescriptionEnglish: 'Amendment of IP' },
    { Id: 7, Description: 'Incentive Tax holiday', DescriptionEnglish: 'Tax Holiday ' },
    { Id: 8, Description: 'Incentive Duty Free', DescriptionEnglish: 'Duty Free' },
    { Id: 9, Description: 'Incentive Construction Material', DescriptionEnglish: 'Construction Material' },
    { Id: 10, Description: 'Raw Material', DescriptionEnglish: 'Raw Material' },
    { Id: 11, Description: 'Business License', DescriptionEnglish: 'Business License' }
];
var ServiceTypes = [
    { Id: 1, Description: 'ክትትል', DescriptionEnglish: 'After care' },
    { Id: 2, Description: 'ንግድ  ምዝገባ', DescriptionEnglish: 'Commercial  Registration' },
    { Id: 3, Description: 'የኢንቨስትመንት አገልግሎት', DescriptionEnglish: 'Investment Service' },
    { Id: 4, Description: 'ማበረታቻ  አገልግሎት', DescriptionEnglish: 'Incentive Service' },
    { Id: 5, Description: 'የማሻሻያ አገልግሎት', DescriptionEnglish: 'Amendment Service', ServiceId: 1028 }
];
var AMENDMENT_STEP = [
    { Step: 0, Label: 'steps.ServiceInfo' },
    { Step: 1, Label: 'steps.Profile' },
    { Step: 2, Label: 'steps.Input' },
    { Step: 3, Label: 'steps.RawMaterial' },
    { Step: 4, Label: 'steps.Cost' },
    { Step: 5, Label: 'steps.Employment' },
    { Step: 6, Label: 'steps.Share' },
    { Step: 7, Label: 'steps.Product' },
];
var AMH_SAVE_SUCCESS_MSG = "መረጃው በትክክል ተቀምጧል";
var AMH_UPDATE_SUCCESS_MSG = "መረጃው በትክክል ተሻሽልዋል!";
var AMH_NOT_FOUND_MSG = "መረጃው አልተገኝም!";
var AMH_SAVE_ERR_MSG = "መረጃው በትክክል አልተቀመጠም!";
var AMH_UPDATE_ERR_MSG = "መረጃው በትክክል አልተሻሻለም!";
var ENG_SAVE_SUCCESS_MSG = "Record Saved successfully!";
var ENG_UPDATE_SUCCESS_MSG = "Record Updated Successfully!";
var ENG_NOT_FOUND_MSG = "Record Not Found!";
var ENG_SAVE_ERR_MSG = "Record was Not Saved !";
var ENG_UPDATE_ERR_MSG = "Record Not Updated!";


/***/ }),

/***/ "./src/app/model/lookupData.ts":
/*!*************************************!*\
  !*** ./src/app/model/lookupData.ts ***!
  \*************************************/
/*! exports provided: Lookup, LookupType, MaritalStatus, Gender, LegalStatus, Quantity, TariffMode, BusinessType, SectorType, CurrencyType, ProjectStatusModel, ProjectStageModel, ApplicationStatusModel, QuarterModel, UnitType, RegistrationStatus, Decisions, Services, ServiceType, CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lookup", function() { return Lookup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupType", function() { return LookupType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaritalStatus", function() { return MaritalStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gender", function() { return Gender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalStatus", function() { return LegalStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quantity", function() { return Quantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TariffMode", function() { return TariffMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessType", function() { return BusinessType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectorType", function() { return SectorType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyType", function() { return CurrencyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectStatusModel", function() { return ProjectStatusModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectStageModel", function() { return ProjectStageModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationStatusModel", function() { return ApplicationStatusModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuarterModel", function() { return QuarterModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitType", function() { return UnitType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationStatus", function() { return RegistrationStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Decisions", function() { return Decisions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return Services; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceType", function() { return ServiceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Lookup = /** @class */ (function () {
    function Lookup() {
    }
    Lookup = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Lookup);
    return Lookup;
}());

var LookupType = /** @class */ (function () {
    function LookupType() {
    }
    LookupType = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LookupType);
    return LookupType;
}());

var MaritalStatus = /** @class */ (function () {
    function MaritalStatus() {
    }
    MaritalStatus = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], MaritalStatus);
    return MaritalStatus;
}());

var Gender = /** @class */ (function () {
    function Gender() {
    }
    Gender = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Gender);
    return Gender;
}());

var LegalStatus = /** @class */ (function () {
    function LegalStatus() {
    }
    LegalStatus = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LegalStatus);
    return LegalStatus;
}());

var Quantity = /** @class */ (function () {
    function Quantity() {
    }
    Quantity = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Quantity);
    return Quantity;
}());

var TariffMode = /** @class */ (function () {
    function TariffMode() {
    }
    TariffMode = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TariffMode);
    return TariffMode;
}());

var BusinessType = /** @class */ (function () {
    function BusinessType() {
    }
    BusinessType = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], BusinessType);
    return BusinessType;
}());

var SectorType = /** @class */ (function () {
    function SectorType() {
    }
    SectorType = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SectorType);
    return SectorType;
}());

var CurrencyType = /** @class */ (function () {
    function CurrencyType() {
    }
    CurrencyType = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CurrencyType);
    return CurrencyType;
}());

var ProjectStatusModel = /** @class */ (function () {
    function ProjectStatusModel() {
    }
    ProjectStatusModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ProjectStatusModel);
    return ProjectStatusModel;
}());

var ProjectStageModel = /** @class */ (function () {
    function ProjectStageModel() {
    }
    ProjectStageModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ProjectStageModel);
    return ProjectStageModel;
}());

var ApplicationStatusModel = /** @class */ (function () {
    function ApplicationStatusModel() {
    }
    ApplicationStatusModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ApplicationStatusModel);
    return ApplicationStatusModel;
}());

var QuarterModel = /** @class */ (function () {
    function QuarterModel() {
    }
    QuarterModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], QuarterModel);
    return QuarterModel;
}());

var UnitType = /** @class */ (function () {
    function UnitType() {
    }
    UnitType = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], UnitType);
    return UnitType;
}());

var RegistrationStatus = /** @class */ (function () {
    function RegistrationStatus() {
    }
    RegistrationStatus = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], RegistrationStatus);
    return RegistrationStatus;
}());

var Decisions = /** @class */ (function () {
    function Decisions() {
    }
    Decisions = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Decisions);
    return Decisions;
}());

var Services = /** @class */ (function () {
    function Services() {
    }
    Services = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Services);
    return Services;
}());

var ServiceType = /** @class */ (function () {
    function ServiceType() {
    }
    ServiceType = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ServiceType);
    return ServiceType;
}());

var CustomerService = /** @class */ (function () {
    function CustomerService() {
    }
    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CustomerService);
    return CustomerService;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-components-business-business-tab-business-tab-module~app-components-followup-followup-mo~27e8b5d9.js.map