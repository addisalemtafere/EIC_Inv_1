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
  filteredViewZones: ZoneModel[] = [];
  woredas: WoredaModel[] = [];
  filteredWoredas: WoredaModel[] = [];
  filteredViewWoredas: WoredaModel[] = [];
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
  profileTestForm: FormGroup;
  loadingIndicator: boolean;
  genders: Gender[] = [];
  legalStatuses: LegalStatus[] = [];
  public nationList: NationalityModel[];
  currentLang: string;
  investor: any;
  response: any;
  editedData: any;
  profileData: any;
  profilePostDTO: any;
  profile: any;
  existingServiceApplication: any;
  serviceApplicationId: any;
  amendment = ServiceTypes[4].ServiceId;
  InvestorId: any;
  tempVar: any;
  serviceApplicationExists: boolean;
  updateData: boolean = false;
  Deleted: boolean = false;
  IsActive: boolean = false;
  AddressId;ProjectId;CreatedUserId;IsMainOffice;
  PaidCapital; SighnedCapital;
  constructor(private fb: FormBuilder,
    private ngxUiLoader: NgxUiLoaderService,
    private lookUpService: LookUpService,
    private addressService: AddressService,
    private serviceApplicationApiService: ServiceApplicationService,
    private profileService: ProfileService,
    private configService: ConfigurationService) {
    this.currentLang = this.configService.language;
    this.checkServiceApplication();
    this.initForm();
    this.initViewForm();

  }
  checkServiceApplication() {
    const id = 2092;
    this.serviceApplicationApiService.checkServiceApplicationFromApi(id, this.amendment)
      .subscribe(result => {
        if (result != null) {
          this.existingServiceApplication = result;
          this.serviceApplicationId = this.existingServiceApplication.ServiceApplicationID;
        }
        else {
          this.serviceApplicationId = 0;
        }
      });
  }
  ngOnInit() {
    this.getCountries();
    this.fillAddressLookups();
    this.initStaticData(this.currentLang);
    this.initStaticDataOwnerShip(this.currentLang);
    const id = 2092;
    this.InvestorId = id;
    if (id) {
      this.getInvestorData(id);
    }
  }
  getInvestorData(investorId) {
    // GET DATA FROM MAIN TABLE (investor)
    this.profileService.getInvestorData(investorId).subscribe(result => {
      if (result == null) {
        alert("no record found")
      }
      else {
        this.profileData = result;
        // Other Data
        this.IsActive = this.profileData.IsActive;
        this.Deleted = this.profileData.Deleted;
        this.AddressId = this.profileData.AddressId;
        this.InvestorId = this.profileData.InvestorId;
        this.CreatedUserId = this.profileData.UserId;
        this.IsMainOffice = this.profileData.IsMainOffice;
        this.PaidCapital = this.profileData.PaidCapital;
        this.SighnedCapital = this.profileData.SighnedCapital;
        // Other Data
        this.profileViewForm.patchValue(result);
        this.profileViewForm.controls.Gender.setValue(Number(this.profileData.Sex));
        this.profileViewForm.controls.Title.setValue(Number(this.profileData.Title));
        this.AddressId = this.profileData.AddressId;
        this.ProjectId = this.profileData.ProjectId;
        this.setViewForm();
        this.searchDataFromAudit(this.InvestorId);
      }
    })
  }
  searchDataFromAudit(investorId) {
    this.profileService.getInvestorDataFromAudit(investorId).subscribe(res => {
      console.log(res);
      if (res != null) {
        console.log("data found on audit table")
        console.log(res)
        console.log("check service application id later")
        this.profilePostDTO = res;
        this.profileTestForm.patchValue(res);
       // this.profileForm.controls.Sex.setValue(Number(this.profilePostDTO.Sex));
        this.profileTestForm.controls.Title.setValue(Number(this.profilePostDTO.Title));
        this.profileTestForm.patchValue({
          Nationality: Number(this.profilePostDTO.Nationality) || '',
        });
        this.updateData = true;
        this.setNewForm();
      }
      else {
        console.log("no data found on audit table");
        console.log('user doesn\'t exist on current database');
        this.appendPreviousDataToNewForm();
      }

    })
  }
  setViewForm() {
    if (this.profileData.ZoneId != null) {
      this.filteredViewWoredas =
        this.woredas.filter((item) =>
          item.ZoneId === this.profileData.ZoneId);
    }
    console.log(this.profileData)
    console.log(this.filteredViewWoredas)
    if (this.profileData.RegionId != null) {
      this.filteredViewZones =
        this.zones.filter((item) => item.RegionId === this.profileData.RegionId);
    }
    console.log(this.filteredViewZones)
    if (this.profileData.WoredaId != null) {
      this.getKebeleByWoredaId(this.profileData.WoredaId);
    }
  }
  setNewForm() {
    setTimeout(() => {
      if (this.profilePostDTO.ZoneId != null) {
        this.filteredWoredas =
          this.woredas.filter((item) => item.ZoneId === this.profilePostDTO.ZoneId);
      }
    }, 100);
    setTimeout(() => {
      if (this.profilePostDTO.RegionId != null) {
        this.filteredZones = this.zones.filter((item) => item.RegionId === this.profilePostDTO.RegionId);
      }
    }, 100);
    setTimeout(() => {
      if (this.profilePostDTO.WoredaId != null) {
        this.getKebeleByWoredaId(this.profilePostDTO.WoredaId);
      }
    }, 100);
  }
  appendPreviousDataToNewForm() {
    console.log('no data in new database');
    console.log(this.profileData)
    this.updateData = false;
    this.profileTestForm.patchValue(this.profileData);
    console.log(this.profileTestForm.patchValue(this.profileData))

    setTimeout(() => {
      if (this.profileData.ZoneId != null) {
        this.filteredWoredas =
          this.woredas.filter((item) => item.ZoneId === this.profileData.ZoneId);
      }
    }, 100);

    setTimeout(() => {
      if (this.profileData.RegionId != null) {
        this.filteredZones =
          this.zones.filter((item) => item.RegionId === this.profileData.RegionId);
      }
    }, 100);
    setTimeout(() => {
      if (this.profileData.WoredaId != null) {
        this.getKebeleByWoredaId(this.profileData.Woreda);
      }
    }, 100);
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
      LegalStatus: [], Tin: [], FirstName: [], FatherName: [], GrandName: [], FirstNameEng: [],
      FatherNameEng: [], GrandNameEng: [], Nationality: [], Gender: [], Title: [], ParentId: [],
      RegionId: [], ZoneId: [], WoredaId: [], KebeleId: [], CellPhoneNo: [], HouseNo: [],
      TeleNo: [], FaxNo: [], OtherAddress: [], Pobox: [], Email: [], Remark: [], FormOfOwnership: []
    });
    this.profileTestForm = this.fb.group({
      LegalStatus: ['', Validators.required],
      Tin: ['', Validators.compose(
        [Validators.required, Validators.pattern(NUMERIC_REGEX), Validators.minLength(10),
        Validators.maxLength(10)]
      )],
      FirstNameEng: ['', [Validators.compose([Validators.required, Validators.minLength(2),
      Validators.pattern(ALPHABET_WITHSPACE_REGEX)])]],
      FatherNameEng: ['', [Validators.compose([Validators.required, Validators.minLength(2),
      Validators.pattern(ALPHABET_WITHSPACE_REGEX)])]],
      GrandNameEng: ['', [Validators.compose([Validators.required, Validators.minLength(2),
      Validators.pattern(ALPHABET_WITHSPACE_REGEX)])]],

      FirstName: ['', Validators.compose([Validators.required, Validators.minLength(2),
      Validators.pattern(ET_ALPHABET_REGEX)])],
      FatherName: ['', Validators.compose([Validators.required, Validators.minLength(2),
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
      CellPhoneNo: ['', Validators.required],
      HouseNo: [''],
      TeleNo: [''],
      Fax: [''],
      Pobox: [''],
      FormOfOwnership: [''],
      Email: [''],
      Remark: ['']
    });
    // this.profileTestForm = this.fb.group({
    //   legalStatus: [], Tin: [], FirstName: [], FatherName: [], GrandName: [], FirstNameEng: [],
    //   FatherNameEng: [], GrandNameEng: [], Nationality: [], Gender: [], Title: [], ParentId: [],
    //   RegionId: [], ZoneId: [], WoredaId: [], KebeleId: [], MobilePhone: [], HouseNo: [],
    //   Tele: [], FaxNo: [], OtherAddress: [], Pobox: [], Email: [], Remark: [], formOfOwnership: []
    // });
    this.profileViewForm.disable();
  }
  initForm() {

  }
  get FirstName() {
    return this.profileTestForm.get('FirstName')
  }
  get FirstNameEng() {
    return this.profileTestForm.get('FirstNameEng')
  }
  get FatherName() {
    return this.profileTestForm.get('FatherName')
  }
  get FatherNameEng() {
    return this.profileTestForm.get('FatherNameEng')
  }
  get GrandName() {
    return this.profileTestForm.get('GrandName')
  }
  get GrandNameEng() {
    return this.profileTestForm.get('GrandNameEng')
  }
  get Nationality() {
    return this.profileTestForm.get('Nationality')
  }
  get Title() {
    return this.profileTestForm.get('Title')
  }
  get RegionId() {
    return this.profileTestForm.get('RegionId')
  }
  get Gender() {
    return this.profileTestForm.get('Gender');
  }
  get ZoneId() {
    return this.profileTestForm.get('ZoneId');
  }
  get WoredaId() {
    return this.profileTestForm.get('WoredaId');
  }
  get KebeleId() {
    return this.profileTestForm.get('KebeleId');
  }
  get WoredaEngId() {
    return this.profileTestForm.get('WoredaEngId');
  }
  get KebeleEngId() {
    return this.profileTestForm.get('KebeleEngId');
  }
  get CellPhoneNo() {
    return this.profileTestForm.get('CellPhoneNo');
  }
  get HouseNo() {
    return this.profileTestForm.get('HouseNo');
  }
  get LegalStatus() {
    return this.profileTestForm.get('LegalStatus');

  }
  get FormOfOwnership() {
    return this.profileTestForm.get('FormOfOwnership');

  }
  get Tin() {
    return this.profileTestForm.get('Tin');

  }
  get RegNumber() {
    return this.profileTestForm.get('RegNumber');

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
    this.profileService.saveProfileData(this.getEditedData()).subscribe(res => {
      console.log(res)
    })
  }
  update() {
    this.profileService.updateProfile(this.getEditedData()).subscribe(res => {
      console.log(res)
    })
  }
  getEditedData() {
    this.profile = this.profileTestForm.value;
    this.profile.ServiceApplicationId = (this.serviceApplicationId) ? this.serviceApplicationId : ''
    this.profile.InvestorId = (this.InvestorId) ? this.InvestorId : 0;
    this.profile.AddressId = (this.AddressId) ? this.AddressId : 0;
    this.profile.ProjectId = (this.ProjectId) ? this.ProjectId : 0;
    this.profile.IsActive = (this.IsActive) ? this.IsActive : false
    this.profile.Deleted = (this.Deleted) ? this.Deleted : false
    this.profile.CreatedUserId =this.CreatedUserId ;
    this.profile.IsNew = false;
    this.profile.IsMainOffice = (this.IsMainOffice) ? this.IsMainOffice : false;
    this.profile.PaidCapital =this.PaidCapital ;
    this.profile.SighnedCapital =this.SighnedCapital;
    console.log(this.profile);
    return this.profile;
  }
}

