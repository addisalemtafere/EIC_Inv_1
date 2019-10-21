import {NgxUiLoaderConfig, PB_DIRECTION, POSITION, SPINNER} from 'ngx-ui-loader';

export const AMHARIC_LANG = 'et';
export const ENGLISH_LANG = 'en';


export const NO_CONNECTION_AMH = 'ምንም በይነመረብ የለም, እባክዎ እንደገና ይሞክሩ!';
export const NO_CONNECTION_ENG = 'No Internet , please try again!';
export const SOMETHING_WRONG_AMH = 'የሆነ ችግር አለ, እባክህ እንደገና ሞክር!';
export const SOMETHING_WRONG_ENG = 'Something is wrong, please try again!';
export const INTERNAL_SERVER_ERROR_AMH = 'የውስጥ መቆጣጠርያ ችግር!';
export const INTERNAL_SERVER_ERROR_ENG = ' Internal Server Error!';
export const BUSINESS_BANNED_AMH = 'የመረጡት ንግድ ፍቃድ የእድሳት ጊዜ አልፎበት  የታገደ ፍቃድ  ነው!  እባክዎ ወደ ንግድና ኢንዱስትሪ ሚኒስቴር የንግድ ምዝገባና ፍቃድ ቢሮ ሂደው ይጠይቁ። እናመሰግናለን።';
export const BUSINESS_BANNED_ENG = ' The business license is Banned since it was not renewed ontime! Please Contact the Trade Registration and licensing Office Thank You!';


export const SERVICE_TYPE: any =
    [
        {Id: 'e49ff59d-7af5-46aa-b438-c5c0126b0a03', Path: 'TRADE_NAME_REGISTRATION'},
        {Id: '9a015140-89f7-4477-b788-237bbc378983', Path: 'TRADE_NAME_REGISTRATION'}
    ];

export const MARITAL_STATUSES: any[] =
    [
        {Id: '1', Description: 'ያላገባ', DescriptionEnglish: 'Single'},
        {Id: '2', Description: 'ያገባ', DescriptionEnglish: 'Married'},
        {Id: '3', Description: 'የፈታ', DescriptionEnglish: 'Divorced'}
    ];

export const GENDERS: any[] =
    [
        {Id: '0', Description: 'ወንድ', DescriptionEnglish: 'Male'},
        {Id: '1', Description: 'ሴት', DescriptionEnglish: 'Female'}

    ];
export const TITLES: any[] =
    [
        {Id: '1', Description: 'አቶ', DescriptionEnglish: 'Mr'},
        {Id: '2', Description: 'ወ/ሮ', DescriptionEnglish: 'Mrs'},
        {Id: '3', Description: 'ወ/ሪት', DescriptionEnglish: 'Miss'},
        {Id: '4', Description: 'ዶ/ር', DescriptionEnglish: 'Dr'}
    ];

export const LEGAL_STATUSES: any[] =
    [
        {Id: '1', Description: 'ግለሰብ', DescriptionEnglish: 'Sole Proprietorship'},
        {Id: '2', Description: 'ኃላፊነቱ የተወሰነ የግል ኩባንያ', DescriptionEnglish: 'Private Limited Company'},
        {Id: '3', Description: 'የአክስዮን ማህበር', DescriptionEnglish: 'Share Company'},
        {Id: '4', Description: 'የመንግስት ተቋም', DescriptionEnglish: 'Public Enterprise'},
        {Id: '5', Description: 'የስራ ማህበራት', DescriptionEnglish: 'Cooperative Society'}
    ];
export const STATUS: any[] =
    [
        {Id: 0, Description: 'በስራ ላይ', DescriptionEnglish: 'Active'},
        {Id: 1, Description: 'የተዘጋ', DescriptionEnglish: 'Closed'}

    ];

export const ServiceTypes: any[] = [

    {Id: '9a015140-89f7-4477-b788-237bbc378975', Path: 'principal-registration/registration', Name: 'service.Name.CommercialRegistration.New'},
    {Id: '9a015140-89f7-4477-b788-237bbc378976', Path: 'business-license/registration', Name: 'service.Name.TradeLicense.New'},
    {Id: 'e49ff59d-7af5-46aa-b438-c5c0126b0a03', Path: 'trade-names', Name: 'service.Name.TradeName.New'},
    {Id: '9a015140-89f7-4477-b788-237bbc378983', Path: 'company-name', Name: 'service.Name.TradeName.CompanyName'},
    {
        Id: 'c9ebd44c-25c4-4679-9c9e-2268732bcdbb',
        Path: 'principal-update/updating',
        Name: 'service.Name.CommercialRegistration.PrincipalUpgrade'
    },
    {
        Id: 'a3410a3f-dff8-4b48-9fb4-9bca1612dbb1',
        Path: 'principal-replacement',
        Name: 'service.Name.CommercialRegistration.PrincipalReplacement'
    },
    {Id: '9a015140-89f7-4477-b788-237bbc378979', Path: 'business-license/renewal', Name: 'service.Name.TradeLicense.Renew'},
    {Id: '5ad9ca7d-6200-414f-a352-2146a8410279', Path: 'business-license/cancellation', Name: 'service.Name.TradeLicense.Cancel'},
    {Id: 'a524f293-272e-438a-9700-2454d3779317', Path: 'business-license/replacement', Name: 'service.Name.TradeLicense.Replace'},
    {Id: 'cb02e1ba-475f-4c67-aaba-2f85f1d038cc', Path: 'business-license/update', Name: 'service.Name.TradeLicense.Upgrade'},
    {Id: 'a23514e2-5c7b-415e-bef7-000380c94e78', Path: 'tradename-amendement', Name: 'service.Name.TradeName.Amendement'},
    {Id: '11c54343-2f6d-427d-b32f-bfa64ae0113d', Path: 'tradename-replacement', Name: 'service.Name.TradeName.Replacement'},
    {Id: 'ec957957-1349-45fd-8289-2eb8ab9063a0', Path: 'tradename-cancellation', Name: 'service.Name.TradeName.Cancellation'},
    {Id: 'e387a5c5-4f22-4f66-89d2-d3a9a36e2abd', Path: 'principal-cancellation', Name: 'service.Name.CommercialRegistration.Cancel'},


];

export const REGISTRATION_UPDATE_SERVICE_TYPES: any[] = [
    {Id: 1, Label: 'Capital', Path: 'principal-update/capital'},
    {Id: 2, Label: 'business area', Path: 'principal-update/capital'},
    {Id: 3, Label: 'address', Path: 'principal-update/capital'},
    {Id: 4, Label: 'manager', Path: 'principal-update/capital'}

];


export const PRINCIPAL_UPDATE_OPTIONS = {
    ADDRESS: 2,
    MANAGER: 3,
};

export const LOOK_UP_TYPES = {
    TITLES: '03',
    BUDGET_CATEGORY: '96'
};

export const PRINCIPAL_REGISTRATION_STEPS: any[] = [
    {GENERAL_INFORMATION: 0, Label: 'steps.GeneralInformation'},
    {WORKING_ADDRESS: 1, Label: 'steps.Address'},
    {REQUIRED_DOCUMENTS: 2, Label: 'steps.Document'},
    {MANAGER: 3, Label: 'steps.Manager'},
    // {PAYMENT: 3, Label: 'steps.Payment'},
];
export const PRINCIPAL_UPDATE_STEPS : any []=[
    { GENERAL_INFORMATION: 0, Label: 'steps.GeneralInformation' },
    { WORKING_ADDRESS: 1, Label: 'steps.Address' },
    { MANAGER: 2, Label: 'steps.Manager' },
    { REQUIRED_DOCUMENTS: 3, Label: 'steps.Document' },
]
export const PRINCIPAL_REGISTRATION_REPLACEMENT_STEPS: any[] = [
    {GENERAL_INFORMATION: 0, Label: 'steps.GeneralInformation'},
    {REQUIRED_DOCUMENTS: 1, Label: 'steps.Document'}
];
export const BUSINESS_LICENSE_REGISTRATION_STEPS: any[] = [
    {GENERAL_INFORMATION: 0, Label: 'steps.GeneralInformation'},
    {WORKING_ADDRESS: 1, Label: 'steps.Address'},
    {REQUIRED_DOCUMENTS: 2, Label: 'steps.Document'}
];
export const BUSINESS_LICENSE_UPDATE_STEPS: any[] = [
    {BUSINESS_LIST: 0, Label: 'steps.BusinessList'},
    {GENERAL_INFORMATION: 1, Label: 'steps.GeneralInformation'},
    {WORKING_ADDRESS: 2, Label: 'steps.Address'},
    {REQUIRED_DOCUMENTS: 3, Label: 'steps.Document'},
    {MANAGER: 4, Label: 'steps.Manager'},
];
export const RENEWAL_LICENSE_REGISTRATION_STEPS: any[] = [
    {GENERAL_INFORMATION: 0, Label: 'steps.GeneralInformation'},
    {REQUIRED_DOCUMENTS: 1, Label: 'steps.Document'}
];
export const LICENSE_CANCELATION_STEPS: any[] = [
    {GENERAL_INFORMATION: 0, Label: 'steps.GeneralInformation'},
    {REQUIRED_DOCUMENTS: 1, Label: 'steps.Document'}
];

export const LICENSE_RENEWAL_STEPS: any[] = [
    {GENERAL_INFORMATION: 0, Label: 'steps.GeneralInformation'},
    {REQUIRED_DOCUMENTS: 1, Label: 'steps.Document'}
];
export const PRETRADE_NAME_REGISTRATION_STEPS: any = [
    {TradeName_Registration: 0},
    {REQUIRED_DOCUMENTS: 1, Label: 'steps.Document'},
];

export const TRADE_NAME_REGISTRATION_STEPS: any = [
    {TradeName_Registration: 0},
    {Business_Selection: 1, Label: 'steps.BusinessSelection'},
    {REQUIRED_DOCUMENTS: 2, Label: 'steps.Document'},
    {CERTIFICATE: 3}
];

export const TRADE_NAME_AMENDEMENT_STEPS: any = [
    {TradeName_Selection: 0},
    {TradeName_Registration: 1, Label: 'steps.TradeNameAmendement'},
    {REQUIRED_DOCUMENTS: 2, Label: 'steps.Document'},
    {CERTIFICATE: 3}
];

export const TRADE_NAME_REPLACEMENT_STEPS: any = [
    {TradeName_Selection: 0, Label: 'steps.TradeNameSelection'},
    {REQUIRED_DOCUMENTS: 1, Label: 'steps.Document'},
    {CERTIFICATE: 2}
];


export const DEFAULT_GUID = '00000000-0000-0000-0000-000000000000';

export const SOLE_PROPRIETERSHIP_CODE = '1';
export const ETHIOPIA_CODE = 1;
const ALPHABET_WITHSPACE_REGEX = new RegExp(/^[a-zA-Z ]+$/);
const ALPHABET_REGEX = new RegExp(/^[a-zA-Z]+$/);
const NUMERIC_WITHPERIOD_REGEX = new RegExp(/^[0-9.]+$/);
const NUMERIC_REGEX = new RegExp(/^[0-9]+$/);
const ET_ALPHABET_WITHSPACE_REGEX = new RegExp(/^([ \u1200-\u137F])+$/);
const ET_ALPHABET_REGEX = new RegExp(/^([\u1200-\u137F\u0008])+$/);
const ET_EN_ALPHABET_WITH_REGEX = new RegExp(/^([ \u1200-\u137F]|[a-zA-Z ])+$/);
const PASSWORD = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}/);
const EMAIL_VALIDATOR = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/);
const PHONE_VALIDATOR = new RegExp(/^(?!0+$)(?:\(?\+\d{1,3}\)?[- ]?|0)?\d{10}$/);

export {
    ALPHABET_WITHSPACE_REGEX, ALPHABET_REGEX, NUMERIC_WITHPERIOD_REGEX,
    NUMERIC_REGEX, ET_ALPHABET_WITHSPACE_REGEX, ET_ALPHABET_REGEX, ET_EN_ALPHABET_WITH_REGEX, EMAIL_VALIDATOR, PASSWORD, PHONE_VALIDATOR
};

export const ngxUiLoaderConfig: NgxUiLoaderConfig = {
    bgsColor: '#349f92',
    bgsPosition: POSITION.bottomRight,
    bgsSize: 50,
    pbColor: '#349f92',
    bgsType: SPINNER.ballSpinClockwise, // background spinner type
    fgsType: SPINNER.rectangleBounce,  // foreground spinner type
    fgsColor: '#349f92',
    blur: 5,
    pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
    pbThickness: 5, // progress bar thickness
};





