export enum Gender {
  Male,
  Female
}

export enum ApplicationStatusEnum {
  Drafted = 44450,
  Submitted = 44446,
  Pending = 44448,
  approved = 44447,
  Completed = 44449
}

export enum ServiceEnum {
  NewIP = 13,
  Renewal = 18,
  CancellationOfIP = 19,
  CapitalRegistration = 1001,
  Expansion = 1023,
  CommercialRegistration = 1235,
  AfterCare = 1234,
  AmendmentOfIP = 1028,
  SubstituteIP = 1027,
  TaxHolidayIncentive = 1045,
  DutyFreeIncentive = 1046,
  UploadingOfConstructionMaterial = 1047,
  UploadingOfRawMaterial = 1054,
  BusinessLicense = 1236
}

export enum RenewalSteps{
  ServiceInfo = 0,
  Recommendation = 1,
  Document = 2,
  Payment = 3,
  Certificate=4,
  Confirm=5
}

export enum ReplacementSteps{
  ServiceInfo = 0,
  Recommendation = 1,
  Document = 2,
  Payment = 3,
  Certificate=4,
  Confirm=5
}