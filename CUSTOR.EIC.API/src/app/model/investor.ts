import {Injectable} from '@angular/core';
import {Validators} from '@angular/forms';

@Injectable()
export class Investor {
  InvestorName?: string = null;
  InvestorNameEng?: string = null;
  TradeName?: string;
  TradeNameEnglish?: string;
  InvestorId = 0;
  LegalStatus? = 0;
  Title: number;
  FormOfOwnership?: number;
  FirstName: string = null;
  // firstNameSort: string = null;
  // firstNameSoundx: string = null;
  FirstNameEng: string = null;
  FatherName: string = null;
  // fatherNameSort: string = null;
  // fatherNameSoundx: string = null;
  FatherNameEng: string = null;
  GrandName: string = null;
  // grandNameSort: string = null;
  // grandNameSoundx: string = null;
  GrandNameEng: string = null;
  Gender: string = null;
  Nationality: string = null;
  BranchCountry: string = null;
  IsEthiopianOrigin = false;
  // IsDiaspora = false;
  Tin?: string = null;
  RegistrationNumber?: string = null;
  RegistrationCatagories: string[];
  RegistrationDate?: Date = null;
  // TradeName?: string = null;
  // tradeNameSort: string = null;
  // tradeNameSoundX: string = null;
  // TradeNameEnglish?: string = null;

  PaidCapital = null;
  SighnedCapital = null;

  UserId?: string = null;
  IsExistingCustomer: boolean;
  // SiteCode: string = null;
  IsActive = true;
  IsDeleted = false;
  RegionId: string = null;
  ZoneId: string = null;
  WoredaId: string = null;
  WoredaEngId: string = null;
  KebeleId: string = null;
  KebeleEngId: string = null;
  HouseNo: string = null;
  TeleNo: string = null;
  Pobox: string = null;
  Fax: string = null;
  CellPhoneNo: string = null;
  Email: string = null;
  OtherAddress: string = null;
  UserName: string = null;
  AddressId = 0;
  // createdDate: Date = null;
  // createdBy: string = null;
  // updatedDateDate = null;
  // updatedBy: string = null;
  // AssociateModel?: AssociateModel;
}
