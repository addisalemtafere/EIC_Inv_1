export const MARITAL_STATUSES: any[] =
  [
    {'Id': '1', 'Description': 'ያላገባ', 'DescriptionEnglish': 'Single'},
    {'Id': '2', 'Description': 'ያገባ', 'DescriptionEnglish': 'Married'},
    {'Id': '3', 'Description': 'የፈታ', 'DescriptionEnglish': 'Divorced'}
  ];

export const GENDERS: any[] =
  [
    {'Id': '1', 'Description': 'ወንድ', 'DescriptionEnglish': 'Male'},
    {'Id': '2', 'Description': 'ሴት', 'DescriptionEnglish': 'Female'}

  ];
export const TITLES: any[] =
  [
    {'Id': '1', 'Description': 'አቶ', 'DescriptionEnglish': 'Mr'},
    {'Id': '2', 'Description': 'ወ/ሮ', 'DescriptionEnglish': 'Mrs'},
    {'Id': '3', 'Description': 'ወ/ሪት', 'DescriptionEnglish': 'Miss'},
    {'Id': '4', 'Description': 'ዶ/ር', 'DescriptionEnglish': 'Dr'}
  ];

export const LEGAL_STATUS: any[] =
  [
    {'Id': '1', 'Description': 'ግለሰብ', 'DescriptionEnglish': 'Sole Proprietorship'},
    {'Id': '2', 'Description': 'ኃላፊነቱ የተወሰነ የግል ኩባንያ', 'DescriptionEnglish': 'Private Limited Company'},
    {'Id': '3', 'Description': 'የአክስዮን ማህበር', 'DescriptionEnglish': 'Share Company'},
    {'Id': '4', 'Description': 'የመንግስት ተቋም', 'DescriptionEnglish': 'Public Enterprise'},
    {'Id': '5', 'Description': 'የስራ ማህበራት', 'DescriptionEnglish': 'Cooperative Society'}
  ];
export const STATUS: any[] =
  [
    {'Id': '0', 'Description': 'በስራ ላይ', 'DescriptionEnglish': 'Active'},
    {'Id': '1', 'Description': 'የተዘጋ', 'DescriptionEnglish': 'Closed'}

  ];
export const LOOK_UP_TYPES = {
  TITLES: '89',
  BUDGET_CATEGORY: '96',
  COUNTRY :''
};
// : any[] = [
//   { Id: 1, Label: 'Capital', Path: 'principal-update/capital' },
//   { Id: 2, Label: 'business area', Path: 'principal-update/capital' },
//   { Id: 3, Label: 'address', Path: 'principal-update/capital' },
//   { Id: 4, Label: 'manager', Path: 'principal-update/capital' }

// ];
export const URLS_LABELS : any [] = [
  { Id: '0', Label: 'address'},
  { Id: '1', Label: 'regions'},
  { Id: '2', Label: 'zones'},
  { Id: '3', Label: 'towns'},
  { Id: '4', Label: 'woredas'},
  { Id: '5', Label: 'kebeles'},
  { Id: '6', Label: 'nationality'},
];


export const CUSTOMER_SERVICE: any[] =
  [
    {
      'ServiceId': '1235', 'Title': 'አዲስ ደንበኛና ንግድ ምዝገባ', 'TitleEnglish': 'Customer & Commercial Registration',
      // tslint:disable-next-line:max-line-length
      'Desc': 'Customers have to create their profile before they can request other services. They can also request for Commercial Registration Cerficate.  '
    },
    {
      'ServiceId': '13', 'Title': 'አዲስ የኢንቨስትመንት ፈቃድ', 'TitleEnglish': 'New Investment Permit',
      // tslint:disable-next-line:max-line-length
      'Desc': 'Once data on  basic customer information is completed and approved, customers can request  New Investment Permit certificate.'
    },
    {
      'ServiceId': '18', 'Title': 'የኢንቨስትመንት ፈቃድ እድሳት', 'TitleEnglish': 'Renewal of Investment Permit',
      'Desc': 'Once data on  basic customer information is completed, cutomers with existing Investment Permit can renew their Investment Permit. '
    },
    {
      'ServiceId': '19', 'Title': 'የኢንቨስትመንት ፈቃድ ስረዛ', 'TitleEnglish': 'Cancellation of Investment Permit',
      'Desc': 'Customers can request Investment Permit cancellation service, by specfying the reason and submitting the required documents'
    },
    {
      'ServiceId': '1023', 'Title': 'የኢንቨስትመንት ፈቃድ ማስፋፊያ', 'TitleEnglish': 'Investment License Expansion',
      'Desc': 'This service allows customers to expand existing Permit or expand their existing Business'
    },
    {
      'ServiceId': '1027', 'Title': 'የኢንቨስትመንት ፈቃድ ምትክ', 'TitleEnglish': 'Investment Permit Substitute',
      'Desc': 'This service allows customers get a replacement of their Investment Permit certificate'
    },
    {
      'ServiceId': '1028', 'Title': 'የፕሮጀክት ፈቃድ ለውጥ', 'TitleEnglish': 'Amendment of Investment Permit',
      'Desc': 'This service allows customers request changes on existing data and and get another Investment Permit certificate'
    },
    {
      'ServiceId': '1045', 'Title': 'የግብር እፎይታ ማበረታቻ', 'TitleEnglish': 'Tax Holiday Incentive',
      'Desc': 'This service allows customers request Tax Holiday incentive support for their eligible projects'
    },
    {
      'ServiceId': '1046', 'Title': 'የጉምሩክ ቀረጥ ማበረታቻ', 'TitleEnglish': 'Duty Free Incentive',
      'Desc': 'This service allows customers to request Duty Free incentive support for their eligible projects'
    },
    {
      'ServiceId': '1236', 'Title': 'አዲስ ንግድ ፈቃድ', 'TitleEnglish': 'New Business License',
      'Desc': 'Once a project completes its implementation phase, customers can request for Business License'
    }
  ];
export const SOLE_PROPRIETERSHIP_CODE = '1';
export const ETHIOPIA_CODE = 1;
const ALPHABET_WITHSPACE_REGEX = new RegExp(/^[a-zA-Z ]+$/);
const ALPHABET_REGEX = new RegExp(/^[a-zA-Z]+$/);
const NUMERIC_WITHPERIOD_REGEX = new RegExp(/^[0-9.]+$/);
const NUMERIC_REGEX = new RegExp(/^[0-9]+$/);
const ET_ALPHABET_WITHSPACE_REGEX = new RegExp(/^([ \u1200-\u137F])+$/);
const ET_ALPHABET_REGEX = new RegExp(/^([ \u1200-\u137F \u0008])+$/);
export {
  ALPHABET_WITHSPACE_REGEX, ALPHABET_REGEX, NUMERIC_WITHPERIOD_REGEX,
  NUMERIC_REGEX, ET_ALPHABET_WITHSPACE_REGEX, ET_ALPHABET_REGEX
};
