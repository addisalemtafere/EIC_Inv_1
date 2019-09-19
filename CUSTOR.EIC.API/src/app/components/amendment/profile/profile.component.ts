import { Component, OnInit } from '@angular/core';
import { Gender, LegalStatus, Lookup } from '../../../model/lookupData';
import { NUMERIC_REGEX, ALPHABET_WITHSPACE_REGEX, ET_ALPHABET_REGEX, GENDERS, LEGAL_STATUS, LOOK_UP_TYPES } from '../../../const/consts';
import { KebeleModel } from '../../../model/address/Kebele.model';
import { Permission } from '../../../model/security/permission.model';
import { RegionModel } from '../../../model/address/Region.model';
import { ZoneModel } from '../../../model/address/Zone.model';
import { WoredaModel } from '../../../model/address/Woreda.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ConfigurationService } from '@custor/services/configuration.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { LookUpService } from '../../../Services/look-up.service';
import { InvestorService } from '../../investor/investor.service';
import { LookupsModel } from '../../../model/lookups';
import { NationalityModel } from '../../../model/address/NationalityModel';
import { AddressService } from '../../../Services/Address/address.service';
import { determineId } from '@custor/helpers/compare';
import { FormOfOwnershipModel } from "../../../model/EnumModel";
import { FormOfOwnership, ServiceTypes } from "@custor/const/consts";
import { ServiceApplicationService } from "./../service/service-application.service";
import { ProfileService } from '../service/profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  AllowCascading = true;
  lookups: Lookup[] = [];
  regions: RegionModel[] = [];
  zones: ZoneModel[] = [];
  filteredZones: ZoneModel[] = [];
  woredas: WoredaModel[] = [];
  filteredWoredas: WoredaModel[] = [];
  kebeles: KebeleModel[] = [];
  filteredKebeles: KebeleModel[] = [];
  public TitleLookup: LookupsModel[];
  countryList = [];
  isCompany: boolean;
  originFlag: boolean;
  branch: boolean;
  formOfOwnershipList: FormOfOwnershipModel[] = [];
  profileForm: FormGroup;
  profileViewForm: FormGroup;
  loadingIndicator: boolean;
  genders: Gender[] = [];
  legalStatuses: LegalStatus[] = [];
  public nationList: NationalityModel[];
  currentLang: string;
  investor: any;
  profileData: any;
  profile: any;
  existingServiceApplication: any;
  serviceApplicationId: any;
  amendment = ServiceTypes[4].ServiceId;
  InvestorId: any;
  tempVar:any;
  serviceApplicationExists: boolean;
  constructor(private fb: FormBuilder,
    private ngxUiLoader: NgxUiLoaderService,
    private lookUpService: LookUpService,
    private addressService: AddressService,
    private serviceApplicationApiService: ServiceApplicationService,
    private profileService: ProfileService,
    private configService: ConfigurationService) {
    this.currentLang = this.configService.language;
    this.initForm();
    this.initViewForm();

  }

  ngOnInit() {
    this.getCountries();
    this.fillAddressLookups();
    this.initStaticData(this.currentLang);
    this.initStaticDataOwnerShip(this.currentLang);
    const id = 2092;
    if (id) {
      //this.getServiceApplicationBy(id);
      // there is always data on investor table
      // always get data from investor table and append it to view form
      this.getInvestorData(id, false);
      this.getAuditInvestorData(id);
    }
  }
  getInvestorData(investorId , appendToNewForm) {
    this.profileService.getInvestorData(investorId).subscribe(result => {
      console.log(result);
      console.log("data is always found on investor table")
      this.profileData = result;
      this.updateViewForm(result)
      if (appendToNewForm){
        console.log("append investor data to audit form")
        this.updateForm(result)
      }
    })
  }
  getServiceApplicationBy(id) {
    this.serviceApplicationApiService.checkServiceApplicationFromApi(id, this.amendment)
      .subscribe(result => {
        if (result != null) {
          console.log("service application exist")
          this.serviceApplicationExists = true;
          this.existingServiceApplication = result;
          this.serviceApplicationId = this.existingServiceApplication.ServiceApplicationId
          if (this.serviceApplicationId) {
            this.getAuditInvestorData(id);
          }
        }
        else{
          console.log("no service application exist")
          this.updateForm(this.profileForm)
          //this.getInvestorData(id, true);
          // No service application
          // No audit data
          // Append investor data to profile Form
          
        }
      
      })
  }

  getAuditInvestorData(investorId) {
    this.profileService.getInvestorDataFromAudit(investorId).subscribe(result => {
      console.log(result);
      if (result) {
        console.log("data found on audit table")
        this.tempVar = result;
        console.log(this.tempVar)
        this.InvestorId = this.tempVar.InvestorId;
        this.profile.ProjectId = this.tempVar.ProjectId;
        this.profileForm.patchValue({FirstNameEng:'Fetiha'})
        // this.profileForm.patchValue(result);
        // this.updateForm(result);
      //  this.updateForm(result);
      }
      else{
        console.log("no data found on audit table");
        this.updateForm(this.profileForm);
       // this.getInvestorData(investorId, true);
       // this.appendInvestorDataToAudit();
      }

    })
  }
  
  updateViewForm(data){
    this.investor = data;
    this.profileViewForm.patchValue({
      legalStatus: this.investor.LegalStatus,
      formOfOwnership: this.investor.FormOfOwnership,
      Tin: this.investor.Tin ,
      FirstName: this.investor.FirstName ,
      FatherName: this.investor.FatherName ,
      GrandName: this.investor.GrandName ,
      FirstNameEng: this.investor.FirstNameEng ,
      FatherNameEng: this.investor.FatherNameEng ,
      GrandNameEng: this.investor.GrandNameEng ,
      Nationality: this.investor.Nationality == null ? '' : this.investor.Nationality.toString(),
      Gender: this.investor.Gender == null ? '' : this.investor.Gender.toString(),
      Title: this.investor.Title,

      // ADDRESS PATCH //
      ZoneId: this.investor.ZoneId,
      WoredaId: 5151,
      KebeleId: this.investor.KebeleId,
      RegionId: this.investor.RegionId,
      HouseNo: this.investor.HouseNo,
      Tele: this.investor.Tele,
      Email: this.investor.Email,
      RegularPhone: this.investor.RegularPhone,
      MobilePhone: this.investor.MobilePhone,
      FaxNo: this.investor.FaxNo,
      Pobox: this.investor.Pobox,
      OtherAddress: this.investor.OtherAddress,
      //ADDRESS PATCH
      BranchCountry: this.investor.BranchCountry == null ? '' : this.investor.BranchCountry.toString(),
      CompanyName: this.investor.FirstName || '',
      CompanyNameEng: this.investor.FirstNameEng || '',
      RegNumber: this.investor.RegistrationNumber || '',
      RegDate: this.investor.RegistrationDate || '',
      Paidapital: this.investor.PaidCapital || '',
      SighnedCapital: this.investor.SighnedCapital || '',
      IsExistingCustomer: this.investor.IsExistingCustomer || '',
      MajorDivision: this.investor.RegistrationCatagories || '',
      cIsEthiopianOrigin: this.investor.IsEthiopianOrigin,
    });
  }
  updateForm(data) {
    console.log(data)
    this.investor = data;
    console.log(this.investor.LegalStatus)
    console.log(this.investor.FormOfOwnership)
    console.log(this.investor.RegionId)
    this.profileForm.patchValue({
      legalStatus: this.investor.LegalStatus,
      formOfOwnership: this.investor.FormOfOwnership,
      Tin: this.investor.Tin || '',
      FirstName: this.investor.FirstName || '',
      FatherName: this.investor.FatherName || '',
      GrandName: this.investor.GrandName || '',
      FirstNameEng: this.investor.FirstNameEng || '',
      FatherNameEng: this.investor.FatherNameEng || '',
      GrandNameEng: this.investor.GrandNameEng || '',
      Nationality: this.investor.Nationality == null ? '' : this.investor.Nationality.toString(),
      Gender: this.investor.Gender == null ? '' : this.investor.Gender.toString(),
      Title: this.investor.Title || '',

      // ADDRESS PATCH //
      ZoneId: this.investor.ZoneId || '',
      //  Woreda: this.investor.WoredaId || '',
      WoredaId: 5151 || '',
      KebeleId: this.investor.KebeleId || '',
      RegionId: this.investor.RegionId || '',
      HouseNo: this.investor.HouseNo || '',
      Tele: this.investor.Tele || '',
      Email: this.investor.Email || '',
      RegularPhone: this.investor.RegularPhone || '',
      MobilePhone: this.investor.MobilePhone || '',
      FaxNo: this.investor.FaxNo || '',
      Pobox: this.investor.Pobox || '',
      OtherAddress: this.investor.OtherAddress || '',


      //ADDRESS PATCH
      BranchCountry: this.investor.BranchCountry == null ? '' : this.investor.BranchCountry.toString(),
      CompanyName: this.investor.FirstName || '',
      CompanyNameEng: this.investor.FirstNameEng || '',
      RegNumber: this.investor.RegistrationNumber || '',
      RegDate: this.investor.RegistrationDate || '',
      Paidapital: this.investor.PaidCapital || '',
      SighnedCapital: this.investor.SighnedCapital || '',
      IsExistingCustomer: this.investor.IsExistingCustomer || '',
      MajorDivision: this.investor.RegistrationCatagories || '',
      cIsEthiopianOrigin: this.investor.IsEthiopianOrigin,
    });

    // if (this.investor.LegalStatus > 1) {
    //   this.isCompany = true;
    // } else {
    //   this.isCompany = false;
    // }
    setTimeout(() => {
      if (this.investor.RegionId != null) {
        this.filteredZones = this.zones.filter((item) => item.RegionId === this.investor.RegionId);
        //   console.log(this.filteredZones)
      }
    }, 100);
    setTimeout(() => {
      if (this.investor.ZoneId != null) {
        this.filteredWoredas =
          this.woredas.filter((item) =>
            item.ZoneId == '15');
      }
      // console.log(this.filteredWoredas)
      // console.log(this.investor.WoredaId)
    }, 100);
    if (this.investor.WoredaId != null) {
      this.getKebeleByWoredaId(this.investor.WoredaId);
    }
  }
 
  initStaticData(currentLang) {
    let gender: Gender = new Gender();
    GENDERS.forEach(pair => {
      gender = { Id: pair.Id.toString(), Desc: (currentLang === 'et' ? pair.Description : pair.DescriptionEnglish) };
      this.genders.push(gender);
    });
    let legalS: LegalStatus = new LegalStatus();
    LEGAL_STATUS.forEach(pair => {
      legalS = { 'Id': pair.Id.toString(), 'Desc': (currentLang === 'et' ? pair.Description : pair.DescriptionEnglish) };
      this.legalStatuses.push(legalS);
    });
  }
  getCountries() {
    // this.ngxUiLoader.startBackground();
    this.lookUpService.getAllCountry(this.currentLang).subscribe(result => {
      // this.ngxUiLoader.stopBackground();
      this.countryList = result;
    });
  }
  fillAddressLookups() {
    this.getRegions();
    this.getAllZones();
    this.getAllWoredas();
    this.getTitles();
    this.getAllNations();

  }
  private getAllNations() {
    this.addressService.getNationality(this.currentLang)
      .subscribe(result => {
        this.nationList = result;
      });
  }
  getTitles() {
    this.lookUpService.getLookupByParentId(LOOK_UP_TYPES.TITLES, this.currentLang).subscribe(result => {
      // console.log(result);
      this.TitleLookup = result;
    });
  }
  getRegions() {
    this.addressService.getRegionsByLang(this.currentLang)
      .subscribe(result => {
        this.regions = result;
      });
  }

  getAllZones() {
    this.ngxUiLoader.startBackground();
    this.addressService.getAllZonesByLang(this.currentLang)
      .subscribe(z => {
        this.ngxUiLoader.stopBackground();
        this.zones = z;
        if (this.zones) {
          this.filterRegion('');
        }
      });
  }

  getAllWoredas() {
    this.ngxUiLoader.startBackground();
    this.addressService.getAllWoredasByLang(this.currentLang)
      .subscribe(result => {
        this.ngxUiLoader.stopBackground();
        this.woredas = result;
        //this.getUserData();
        // alert (result.length);
        if (this.woredas) {
          this.filterZone('');
        }
      });
  }

  filterRegion(regionCode: string) {
    if (!regionCode || !this.AllowCascading) {
      return;
    }
    this.filteredKebeles = null;
    this.filteredWoredas = null;
    if (!this.zones) {
      return;
    }
    this.filteredZones = this.zones.filter((item) => {
      return item.RegionId === regionCode;
    });
  }

  filterZone(zoneCode: string) {
    if (!zoneCode || !this.AllowCascading) {
      return;
    }
    this.filteredKebeles = null;
    this.filteredWoredas = this.woredas.filter((item) => {
      return item.ZoneId === zoneCode;
    });
  }

  filterWoreda(woredaCode: string) {
    if (!woredaCode || !this.AllowCascading) {
      return;
    }
    this.getKebeleByWoredaId(woredaCode);
  }

  getKebeleByWoredaId(woredaId: any) {
    this.addressService.getKebelesByWoreda(woredaId)
      .subscribe(result => {
        // this.kebeles = result;
        this.filteredKebeles = result;
        console.log(this.filteredKebeles)
      });
  }
  initViewForm() {
   
    this.profileViewForm = this.fb.group({
      legalStatus: [],Tin: [],FirstName: [],FatherName: [],GrandName: [],FirstNameEng: [],
      FatherNameEng: [],GrandNameEng: [],Nationality: [], Gender: [],Title: [],ParentId: [],
      RegionId: [],ZoneId: [], WoredaId: [], KebeleId: [], MobilePhone: [], HouseNo: [],
       Tele: [],FaxNo: [],OtherAddress: [], Pobox: [], Email: [], Remark: [], formOfOwnership: []
    });
    this.profileViewForm.disable();
  }
  initForm() {
    this.profileForm = this.fb.group({
      legalStatus: ['', Validators.required],
      Tin: ['', Validators.compose(
        [Validators.pattern(NUMERIC_REGEX), Validators.minLength(10),
        Validators.maxLength(10)]
      )],
      FirstNameEng: ['', [Validators.compose([Validators.required, Validators.minLength(2),
      Validators.pattern(ALPHABET_WITHSPACE_REGEX)])]],
      FatherNameEng: ['', [Validators.compose([Validators.required, Validators.minLength(2),
      Validators.pattern(ALPHABET_WITHSPACE_REGEX)])]],
      GrandNameEng: ['', Validators.pattern(ALPHABET_WITHSPACE_REGEX)],
      FirstName: ['', Validators.compose([Validators.required, Validators.minLength(1),
      Validators.pattern(ET_ALPHABET_REGEX)])],
      FatherName: ['', Validators.compose([Validators.required, Validators.minLength(1),
      Validators.pattern(ET_ALPHABET_REGEX)])],
      GrandName: ['', Validators.pattern(ET_ALPHABET_REGEX)],
      Nationality: [''], // Ethiopian
      Gender: [''],
      Title: [''],
      ParentId: [''],
      RegionId: ['', [Validators.required]],
      ZoneId: ['', [Validators.required]],
      WoredaId: ['', [Validators.required]],
      WoredaEngId: [''],
      KebeleId: [''],
      KebeleEngId: [''],
      OtherAddress: [''],
      MobilePhone: ['', Validators.required],
      HouseNo: [''],
      Tele: [''],
      Fax: [''],
      Pobox: [''],
      formOfOwnership: [''],
      Email: [''],
      Remark: ['']
    });
  }
  get FirstName() {
    return this.profileForm.get('FirstName')
  }
  get FirstNameEng() {
    return this.profileForm.get('FirstNameEng')
  }
  get FatherName() {
    return this.profileForm.get('FatherName')
  }
  get FatherNameEng() {
    return this.profileForm.get('FatherNameEng')
  }
  get GrandName() {
    return this.profileForm.get('GrandName')
  }
  get GrandNameEng() {
    return this.profileForm.get('GrandNameEng')
  }
  get Nationality() {
    return this.profileForm.get('Nationality')
  }
  get Title() {
    return this.profileForm.get('Title')
  }
  get RegionId() {
    return this.profileForm.get('RegionId')
  }
  get Gender() {
    return this.profileForm.get('Gender');
  }
  get ZoneId() {
    return this.profileForm.get('ZoneId');
  }
  get WoredaId() {
    return this.profileForm.get('WoredaId');
  }
  get KebeleId() {
    return this.profileForm.get('KebeleId');
  }
  get WoredaEngId() {
    return this.profileForm.get('WoredaEngId');
  }
  get KebeleEngId() {
    return this.profileForm.get('KebeleEngId');
  }
  get CellPhoneNo() {
    return this.profileForm.get('CellPhoneNo');
  }
  get HouseNo() {
    return this.profileForm.get('HouseNo');
  }
  get LegalStatus() {
    return this.profileForm.get('legalStatus');

  }
  get FormOfOwnership() {
    return this.profileForm.get('FormOfOwnership');

  }
  get Tin() {
    return this.profileForm.get('Tin');

  }
  get RegNumber() {
    return this.profileForm.get('RegNumber');

  }
  onSubmit() {
    console.log("on sumbit")
  }
  compareIds(id1: any, id2: any): boolean {
    const a1 = determineId(id1);
    const a2 = determineId(id2);
    return a1 === a2;
  }
  statusChanged(legalS: number) {
    if (legalS > 1) {
      this.isCompany = true;
      this.initStaticDataOwnerShip(this.currentLang);
    } else {
      this.isCompany = false;
      this.formOfOwnershipList.splice(3, 1);

    }
  }
  initStaticDataOwnerShip(currentLang) {
    this.formOfOwnershipList = [];

    let formOfOwnership: FormOfOwnershipModel = new FormOfOwnershipModel();
    FormOfOwnership.forEach(pair => {
      formOfOwnership = {
        'Id': pair.Id.toString(),
        'Desc': (currentLang === 'et' ? pair.Description : pair.DescriptionEng)
      };
      // console.log(formOfOwnership);
      this.formOfOwnershipList.push(formOfOwnership);
    });
  }
  onFormOfOwnershipChanged(id: any) {
    if (id == 1) {
      this.originFlag = true;
      this.profileForm.patchValue({
        Nationality: LOOK_UP_TYPES.DEFAULT_NATIONALITY
      });
    }
    this.branch = (id === '5');
    if (this.branch) {
      // this.BranchCountry.setValidators([Validators.required]);
    } else {
      // this.BranchCountry.clearValidators();
    }
  }
  create() {
    this.profileService.saveProfileData(this.getEditedCapitalData()).subscribe(res => {
      console.log(res)
    })
  }
  getEditedCapitalData() {
    this.profile = this.profileForm.value;
    this.profile.ServiceApplicationId = (this.serviceApplicationId) ? this.serviceApplicationId : ''
    this.profile.AssociateId = (this.InvestorId) ? this.InvestorId : 0;
    console.log(this.profile);
    return this.profile;
  }
}

