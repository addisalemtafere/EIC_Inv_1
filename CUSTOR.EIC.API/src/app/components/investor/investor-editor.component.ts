import {AfterContentChecked, AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {fadeInOut} from '@custor/services/animations';
import {InvestorService} from './investor.service';
import {Investor} from '../../model/investor';
import {Subscription} from 'rxjs';
import {Utilities} from '@custor/helpers/utilities';

import {Gender, LegalStatus, Lookup} from '../../model/lookupData';
import {
  ALPHABET_REGEX,
  ALPHABET_WITHSPACE_REGEX,
  ALPHABET_WITHSPACEANDNUMBER_REGEX, EMAIL_REGEX,
  ET_ALPHABET_REGEX,
  ET_ALPHABET_WITHSPACEANDNUMBER_REGEX,
  GENDERS,
  LEGAL_STATUS, NUMERIC_REGEX, NUMERIC_WITHPERIOD_REGEX
} from '../../const/consts';
import {determineId} from '@custor/helpers/compare';
import {ConfigurationService} from '@custor/services/configuration.service';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '@custor/services/security/auth.service';
import {AccountService} from '@custor/services/security/account.service';
import {Permission} from '../../model/security/permission.model';
import {AddressService} from '../../Services/Address/address.service';
import {AddressModel} from '../../model/address/Address.model';
import {KebeleModel} from '../../model/address/Kebele.model';
import {ZoneModel} from '../../model/address/Zone.model';
import {WoredaModel} from '../../model/address/Woreda.model';
import {RegionModel} from '../../model/address/Region.model';
import {LookUpService} from '../../Services/look-up.service';
import {DataSharingService} from '../../Services/data-sharing.service';
import {LookupsModel} from '../../model/lookups';
import {FormOfOwnershipModel} from '../../model/EnumModel';
import {FormOfOwnership} from '@custor/const/consts';
import {NationalityModel} from '../../model/address/NationalityModel';

import {MajorDivision} from '../../model/catagory/MajorDivision.model';
import {CatagoryService} from '../../Services/Catagory/Catagory.service';
import {RegistrationCatagory} from '../../model/Registration/RegistrationCatagory';
import {RegistrationCatagoryService} from '../../Services/Registration/RegistrationCatagory.service';
import {CountryService} from "../../Services/country.service";
import {CountryModel} from "../../model/Country";
import {ServiceEnum} from "../../enum/enums";
import {validate} from 'codelyzer/walkerFactory/walkerFn';

@Component({
  selector: 'app-edit-investor',
  templateUrl: './investor-editor.component.html',
  styleUrls: ['./investor-editor.component.scss'],
  providers: [InvestorService, CountryService],
  animations: [fadeInOut]
})
export class EditInvestorComponent implements OnInit, AfterViewInit, OnDestroy, AfterContentChecked {
  @ViewChild('form')
  formOfOwnershipList: FormOfOwnershipModel[] = [];

  investorSub: Subscription;
  title: string;
  isNewInvestor = false;
  investor: Investor;
  countries: Lookup[] = [];
  lookups: Lookup[] = [];
  regions: RegionModel[] = [];
  zones: ZoneModel[] = [];
  filteredZones: ZoneModel[] = [];
  woredas: WoredaModel[] = [];
  filteredWoredas: WoredaModel[] = [];
  kebeles: KebeleModel[] = [];
  filteredKebeles: KebeleModel[] = [];
  majorDivisions: MajorDivision[] = [];
  registrationCatagoryList: RegistrationCatagory[] = [];
  // isEditMode = false;
  investorForm: FormGroup;
  loadingIndicator: boolean;
  genders: Gender[] = [];
  legalStatuses: LegalStatus[] = [];
  isCompany: boolean;
  currentLang = 'en';
  countryLookupType = 1;
  allPermissions: Permission[] = [];
  public investorTitle: Lookup[];
  TitleLookup: LookupsModel[];
  public nationList: NationalityModel[];
  originFlag = true;
  public countryListWithOutEthipia: CountryModel[];
  public branch = false;
  AllowCascading = true;
  @Input() errors: string[] = [];
  public isNewCustomer: boolean;
  private form: NgForm;
  private addressList: AddressModel;
  private addressId: number | undefined;
  private ServiceId: any;
  private ServiceApplicationId: any;
  public isCommercialReg = false;
  public isInvestor: boolean;
  private isNew: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              public dataSharing: DataSharingService,
              private lookUpService: LookUpService,
              private countryService: CountryService,
              private addressService: AddressService,
              private registrationCatagoryService: RegistrationCatagoryService,
              private http: HttpClient, private accountService: AccountService,
              private authService: AuthService,
              private custService: InvestorService,
              private catagoryService: CatagoryService,
              private configService: ConfigurationService,
              private toastr: ToastrService,
              private fb: FormBuilder) {
    this.checkAuthoriation();
    // create an empty object from the Investor model
    this.investor = <Investor>{};
    // initialize the form
    this.initForm();
    // // console.log(this.accountService.currentUser.Roles);
  }

  get canManageInvestors() {
    return this.accountService.userHasPermission(Permission.manageInvestorsPermission);
  }

  get canViewInvestors() {
    return this.accountService.userHasPermission(Permission.viewInvestorsPermission);
  }

  get firstName() {
    return this.investorForm.get('cFirstName');
  }

  get fatherName() {
    return this.investorForm.get('cFatherName');
  }

  get Title() {
    return this.investorForm.get('Title');
  }

  get grandName() {
    return this.investorForm.get('cGrandName');
  }

  get firstNameEng() {
    return this.investorForm.get('cFirstNameEng');
  }

  get fatherNameEng() {
    return this.investorForm.get('cFatherNameEng');
  }

  get grandNameEng() {
    return this.investorForm.get('cGrandNameEng');
  }

  get nationality() {
    return this.investorForm.get('cNationality');
  }

  get gender() {
    return this.investorForm.get('cGender');
  }

  get isEthiopianOrigin() {
    return this.investorForm.get('cIsEthiopianOrigin');
  }

  get regionn() {
    return this.investorForm.get('address').get('RegionId');
  }

  get zone() {
    return this.investorForm.get('address').get('ZoneId');
  }

  get woreda() {
    return this.investorForm.get('address').get('WoredaId');
  }

  get woredaEng() {
    return this.investorForm.get('address').get('WoredaEngId');
  }

  get kebele() {
    return this.investorForm.get('address').get('KebeleId');
  }

  get kebeleEng() {
    return this.investorForm.get('address').get('KebeleEngId');
  }

  // getInvestorTitle() {
  //   this.lookUpService.getAll().subscribe(result => {
  //     // console.log(result);
  //     this.investorTitle = result;
  //   });

  // }

  get houseNumber() {
    return this.investorForm.get('address').get('HouseNo');
  }

  get phoneDirect() {
    return this.investorForm.get('address').get('TeleNo');
  }

  get CellPhoneNo() {
    return this.investorForm.get('address').get('CellPhoneNo');
  }

  get fax() {
    return this.investorForm.get('address').get('Fax');
  }

  get pobox() {
    return this.investorForm.get('address').get('POBox');
  }

  get legalStatus() {
    return this.investorForm.get('cLegalStatus');
  }

  get FormOfOwnershipV() {
    return this.investorForm.get('FormOfOwnership');
  }

  get isExistingCustomer() {
    return this.investorForm.get('IsExistingCustomer');
  }

  get sighnedCapital() {
    return this.investorForm.get('cSighnedCapital');
  }

  get paidCapital() {
    return this.investorForm.get('cPaidCapital');
  }

  get regDate() {
    return this.investorForm.get('cRegDate');
  }

  get regNumber() {
    return this.investorForm.get('cRegNumber');
  }

  get tin() {
    return this.investorForm.get('cTin');
  }

  get otherAddress() {
    return this.investorForm.get('OtherAddress');
  }

  get companyName() {
    return this.investorForm.get('cCompanyName');
  }

  get companyNameEng() {
    return this.investorForm.get('cCompanyNameEng');
  }

  get BranchCountry() {
    return this.investorForm.get('cBranchCountry');
  }

  get email() {
    return this.investorForm.get('Email');
  }

  get houseNo() {
    return this.investorForm.get('HouseNo');
  }

  // another getter for easy access to form fields
  get ct() {
    return this.investorForm.controls;
  }

  get floatLabels(): string {
    return 'auto';
  }

  checkAuthoriation() {
    // if (!this.canManageInvestors) {
    //   this.toastr.error('You are not allowed to access this page');
    //   this.router.navigate(['denied']);
    // }
  }

  ngAfterContentChecked(): void {
    this.investorForm.patchValue({
      UserId: this.accountService.currentUser.Id
    });
  }

  ngOnInit() {
    this.ServiceId = this.route.snapshot.params['ServiceId'];
    this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
    this.loadingIndicator = false;
    this.currentLang = this.configService.language;
    this.initStaticData('this.currentLang');
    this.initStaticDataOwnerShip(this.currentLang);
    this.getUserType();
    this.fillAddressLookups();
    this.formControlValueChanged();
    this.getMajorDivisions();
    const id = this.route.snapshot.params['InvestorId'];
    if (this.ServiceId !== undefined || this.ServiceId == ServiceEnum.CommercialRegistration) {
      this.isCommercialReg = true;
    }
    // console.log(this.ServiceId);
    // console.log(this.isCommercialReg);
    console.log(id);

    if (id < 1) {
      this.isNewInvestor = true;
      this.isCompany = false;
      this.title = 'Create a new Investor';
      return;
    }
    if (id) {
      // to-do
      // get the selected investor either through @Input or shared service
      this.getInvestor(id);
    }


  }

  getUserType() {
    this.isInvestor = this.accountService.getUserType();
    console.log(this.isInvestor);
  }

  getMajorDivisions() {
    this.catagoryService.getMajorDivision()
      .subscribe(result => {
          this.majorDivisions = result;
          // this.majorDivisions = result;
        },
        error => this.toastr.error(error));
  }

  formControlValueChanged() {
    this.CellPhoneNo.setValidators([Validators.compose([Validators.required, Validators.pattern(NUMERIC_REGEX),
      Validators.min(10), Validators.maxLength(12)])]);
    const cFather = this.investorForm.get('cFatherName');
    this.legalStatus.valueChanges.subscribe(
      (intLegal: number) => {
        if (intLegal === 1) { // Sole
          // // console.log(intLegal);
            this.ClearCompanyValidators();
            this.firstNameEng.setValidators([Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15),
              Validators.pattern(ALPHABET_WITHSPACE_REGEX)])]);
            this.fatherNameEng.setValidators([Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15),
              Validators.pattern(ALPHABET_WITHSPACE_REGEX)])]);
            this.grandNameEng.setValidators([Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15),
            Validators.pattern(ALPHABET_WITHSPACE_REGEX)])]);
          this.firstName.setValidators([Validators.compose([ Validators.minLength(2),
            Validators.pattern(ET_ALPHABET_REGEX)])]);
          if (!this.isInvestor) {
          this.firstName.setValidators([Validators.compose([Validators.required, Validators.minLength(2),
            Validators.pattern(ET_ALPHABET_REGEX)])]);
          }
            this.fatherName.setValidators([Validators.compose([ Validators.minLength(2),
              Validators.pattern(ET_ALPHABET_REGEX)])]);
          if (!this.isInvestor) {
            this.fatherName.setValidators([Validators.compose([Validators.required, Validators.minLength(2),
              Validators.pattern(ET_ALPHABET_REGEX)])]);
          }
            this.grandName.setValidators([Validators.compose([ Validators.minLength(2),
              Validators.pattern(ET_ALPHABET_REGEX)])]);
          if (!this.isInvestor) {
            this.grandName.setValidators([Validators.compose([Validators.required, Validators.minLength(2),
              Validators.pattern(ET_ALPHABET_REGEX)])]);
          }
            this.woreda.setValidators([Validators.compose([ Validators.minLength(2), Validators.maxLength(15),
              Validators.pattern(ET_ALPHABET_WITHSPACEANDNUMBER_REGEX)])]);
          if (!this.isInvestor) {
            this.woreda.setValidators([Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15),
              Validators.pattern(ET_ALPHABET_WITHSPACEANDNUMBER_REGEX)])]);
          }
            this.woredaEng.setValidators([Validators.compose([ Validators.minLength(2), Validators.maxLength(15),
              Validators.pattern(ALPHABET_WITHSPACEANDNUMBER_REGEX)])]);
          if (!this.isInvestor) {
            this.woredaEng.setValidators([Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15),
              Validators.pattern(ALPHABET_WITHSPACEANDNUMBER_REGEX)])]);
          }
            this.kebele.setValidators([Validators.compose([ Validators.minLength(2), Validators.maxLength(15),
              Validators.pattern(ET_ALPHABET_WITHSPACEANDNUMBER_REGEX)])]);
          if (!this.isInvestor) {
            this.kebele.setValidators([Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15),
              Validators.pattern(ET_ALPHABET_WITHSPACEANDNUMBER_REGEX)])]);
          }
            this.kebeleEng.setValidators([Validators.compose([ Validators.minLength(2), Validators.maxLength(15),
              Validators.pattern(ALPHABET_WITHSPACEANDNUMBER_REGEX)])]);
          if (!this.isInvestor) {
            this.kebeleEng.setValidators([Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15),
              Validators.pattern(ALPHABET_WITHSPACEANDNUMBER_REGEX)])]);
          }
            this.email.setValidators(Validators.compose([Validators.pattern(EMAIL_REGEX)]));
            this.phoneDirect.setValidators(Validators.compose([Validators.pattern(NUMERIC_WITHPERIOD_REGEX), Validators.maxLength(10)]));
            this.nationality.setValidators([Validators.required]);
            this.gender.setValidators([Validators.required]);
          // this.Title.setValidators([Validators.required]);
          this.isCompany = false;
        } else {
          this.ClearSoleValidators();
          this.companyNameEng.setValidators([Validators.compose([Validators.required,
            Validators.pattern(ALPHABET_WITHSPACEANDNUMBER_REGEX), Validators.minLength(2),
            Validators.maxLength(100)])]);
          this.companyName.setValidators([Validators.compose([
            Validators.pattern(ET_ALPHABET_REGEX), Validators.minLength(2),
            Validators.maxLength(100)])]);
          if (this.isInvestor) {
            this.companyName.setValidators([Validators.compose([ Validators.required,
              Validators.pattern(ET_ALPHABET_WITHSPACEANDNUMBER_REGEX), Validators.minLength(2),
              Validators.maxLength(100)])]);
          }
          cFather.updateValueAndValidity();
          this.isCompany = true;
        }
        this.regionn.setValidators([Validators.required]);
        this.CellPhoneNo.setValidators([Validators.compose([Validators.required, Validators.pattern(ALPHABET_REGEX),
        Validators.min(10), Validators.maxLength(10)])]);
      }
    );


    this.isExistingCustomer.valueChanges.subscribe(
      (isNewCustomer: boolean) => {
        if (isNewCustomer && this.legalStatus.value !== 1) {
          this.sighnedCapital.setValidators([Validators.compose([Validators.required, Validators.minLength(2)])]);
          this.paidCapital.setValidators([Validators.compose([Validators.required, Validators.minLength(2)])]);
          this.isNewCustomer = true;
        } else {

          this.isNewCustomer = false;
          this.sighnedCapital.clearAsyncValidators();
          this.paidCapital.clearAsyncValidators();
        }
      });
  }

  ClearSoleValidators() {
    this.firstNameEng.clearValidators();
    this.firstName.clearValidators();
    this.fatherNameEng.clearValidators();
    this.fatherName.clearValidators();
    this.grandNameEng.clearValidators();
    this.grandName.clearValidators();
    this.nationality.clearValidators();
    this.gender.clearValidators();
    this.Title.clearValidators();
  }

  ClearCompanyValidators() {
    // this.nationalityCompany.clearValidators();
    this.companyNameEng.clearValidators();
    this.companyName.clearValidators();
  }

  initStaticDataOwnerShip(currentLang) {
    this.formOfOwnershipList = [];

    let formOfOwnership: FormOfOwnershipModel = new FormOfOwnershipModel();
    FormOfOwnership.forEach(pair => {
      formOfOwnership = {
        'Id': pair.Id.toString(),
        'Desc': (currentLang === 'et' ? pair.Description : pair.DescriptionEng)
      };
      // // console.log(formOfOwnership);

      this.formOfOwnershipList.push(formOfOwnership);
    });
  }

  initStaticData(currentLang) {
    let gender: Gender = new Gender();
    GENDERS.forEach(pair => {
      gender = {'Id': pair.Id.toString(), 'Desc': (currentLang === 'et' ? pair.Description : pair.DescriptionEnglish)};
      this.genders.push(gender);
      // // console.log(pair);
    });
    let legalS: LegalStatus = new LegalStatus();
    LEGAL_STATUS.forEach(pair => {
      legalS = {'Id': pair.Id.toString(), 'Desc': (currentLang === 'et' ? pair.Description : pair.DescriptionEnglish)};
      this.legalStatuses.push(legalS);
    });

    // Fill data from Lookup table
    this.getLookups();
  }

  ngOnDestroy() {
    // this.investorSub.unsubscribe();
  }

  // get isDiaspora() {
  //   return this.investorForm.get('cIsDiaspora');
  // }

  getInvestor(id) {
    this.isNewInvestor = false;
    // this.loadingIndicator = true;
    this.investorSub = this.custService
      .getInvestor(id)
      .subscribe(result => {
          this.investor = result;
          this.updateForm();
          console.log(this.investor.RegistrationCatagories);
          this.investorForm.patchValue({
            cMajorDivision: this.investor.RegistrationCatagories
          });
        },
        error => this.toastr.error(error));
    this.loadingIndicator = false;
  }

  getAddressData(parent: number) {
    this.addressService.getAddress(parent)
      .subscribe((result: AddressModel) => {
        this.addressList = result;
        // // console.log(result);
        this.getKebeleByWoredaId(result.WoredaId);
        this.addressId = result.AddressId;
        this.investorForm.get('address').patchValue(result);
      }, error => this.toastr.error(error));
  }

  fillAddressLookups() {
    // to-do
    // bring all in one go
    // caching
    this.getRegions();
    this.getAllZones();
    // this.getAllWoredas();
    this.getInvestorTitle(89);
    this.getCountryTitle();
    this.getAllNation();
    // this.getAllKebeles();
    // this.getInvestorTitle();

  }

  getLookups() {
    this.custService.getLookupsByLang(this.currentLang)
      .subscribe(result => {
          this.countries = result;
          // // console.log(result);
          // // console.log (this.lookups.length + ' countries');
          // if (this.lookups) {
          //   this.countries = this.lookups.filter((item) => item.LookupTypeId === this.countryLookupType);
          //   // console.log(this.countries);
          //   // filter more lookups
          // }
        },
        error => this.toastr.error(error));
  }

  getRegions() {
    this.custService.getRegionsByLang(this.currentLang)
      .subscribe(result => {
          this.regions = result;
        },
        error => this.toastr.error(error));
  }

  getAllZones() {
    this.custService.getAllZonesByLang(this.currentLang)
      .subscribe(z => {
          this.zones = z;
          if (this.zones) {
            // // console.log('Region ' + this.investor.RegionId);
            // this.filterRegion(this.investor.RegionId);
          }
        },
        error => this.toastr.error(error));
  }

  getAllWoredas() {
    this.custService.getAllWoredasByLang(this.currentLang)
      .subscribe(result => {
          this.woredas = result;
        },
        error => this.toastr.error(error));
  }

  // very expensive!
  getAllKebeles() {
    this.custService.getAllKebelesByLang(this.currentLang)
      .subscribe(result => {
          this.kebeles = result;
          if (this.kebeles) {
            this.filterWoreda(this.investor.WoredaId);
          }
        },
        error => this.toastr.error(error));
  }

  initForm() {
    this.investorForm = this.fb.group({
      cLegalStatus: ['', Validators.required],
      cFirstNameEng: [''],
      cFatherNameEng: [''],
      cGrandNameEng: [''],
      cFirstName: [''],
      cFatherName: [''],
      cGrandName: [''],
      cNationality: [''], // Ethiopian
      cBranchCountry: [''],
      cCompanyName: [''],
      cCompanyNameEng: [''],
      cGender: [''],
      Title: [''],
      FormOfOwnership: ['', Validators.required],
      cIsEthiopianOrigin: [false],
      cTin: [''],
      IsExistingCustomer: [false],
      cRegNumber: [''],
      cRegDate: [''],
      cPaidCapital: [''],
      cSighnedCapital: [''],
      cMajorDivision: [],

      'address': new FormGroup({
        ParentId: new FormControl(),
        RegionId: new FormControl(),
        ZoneId: new FormControl(),
        WoredaId: new FormControl(),
        WoredaEngId: new FormControl(),
        KebeleId: new FormControl(),
        KebeleEngId: new FormControl(),
        OtherAddress: new FormControl(),
        CellPhoneNo: new FormControl(),
        // SpecificAreaName: new FormControl(),
        HouseNo: new FormControl(),
        TeleNo: new FormControl(),
        Fax: new FormControl(),
        Pobox: new FormControl(),
        Email: new FormControl(),
        Remark: new FormControl()
      })

    });
  }

  updateForm() {
    // const _shortDate = 'dd/MM/yyyy';
    this.investorForm.patchValue({
      cLegalStatus: this.investor.LegalStatus,
      cFirstName: this.investor.FirstName || '',
      cFatherName: this.investor.FatherName || '',
      cGrandName: this.investor.GrandName || '',
      cFirstNameEng: this.investor.FirstNameEng || '',
      cFatherNameEng: this.investor.FatherNameEng || '',
      cGrandNameEng: this.investor.GrandNameEng || '',
      cNationality: this.investor.Nationality == null ? '' : this.investor.Nationality.toString(),
      cBranchCountry: this.investor.BranchCountry == null ? '' : this.investor.BranchCountry.toString(),
      cGender: this.investor.Gender == null ? '' : this.investor.Gender.toString(),
      cCompanyName: this.investor.FirstName || '',
      cCompanyNameEng: this.investor.FirstNameEng || '',
      cTin: this.investor.Tin || '',
      cRegNumber: this.investor.RegistrationNumber || '',
      cRegDate: this.investor.RegistrationDate || '',

      cPaidCapital: this.investor.PaidCapital || '',
      cSighnedCapital: this.investor.SighnedCapital || '',
      IsExistingCustomer: this.investor.IsExistingCustomer || '',
      cMajorDivision: this.investor.RegistrationCatagories || '',

      /*  cTradeNameEng: this.investor.TradeNameEnglish || '',
        cTradeName: this.investor.TradeName || '',*/
      Title: this.investor.Title || '',
      FormOfOwnership: this.investor.FormOfOwnership == null ? '' : this.investor.FormOfOwnership.toString(),
      cIsEthiopianOrigin: this.investor.IsEthiopianOrigin,
    });

    if (this.investor.LegalStatus > 1) {
      this.isCompany = true;
    } else {
      this.isCompany = false;
    }
    this.isNewInvestor = false;

    // Set dropdown values
    // setTimeout(() => {
    //   if (this.investor.ZoneId != null) {
    //     this.filteredWoredas = this.woredas.filter((item) => item.ZoneId === this.investor.ZoneId);
    //   }
    // }, 100);
    setTimeout(() => {
      if (this.investor.RegionId != null) {
        this.filteredZones = this.zones.filter((item) => item.RegionId === this.investor.RegionId);
      }
    }, 100);
    // setTimeout(() => {
    //   if (this.investor.WoredaId != null) {
    //     this.getKebeleByWoredaId(this.investor.WoredaId);
    //   }
    // }, 100);

    this.investorForm.get('address').patchValue({
      RegionId: this.investor.RegionId == null ? '' : this.investor.RegionId.toString(),
      ZoneId: this.investor.ZoneId == null ? '' : this.investor.ZoneId.toString(),
      WoredaId: this.investor.WoredaId == null ? '' : this.investor.WoredaId.toString(),
      WoredaEngId: this.investor.WoredaEngId == null ? '' : this.investor.WoredaEngId.toString(),
      KebeleId: this.investor.KebeleId == null ? '' : this.investor.KebeleId.toString(),
      KebeleEngId: this.investor.KebeleEngId == null ? '' : this.investor.KebeleEngId.toString(),
      HouseNo: this.investor.HouseNo || '',
      TeleNo: this.investor.TeleNo || '',
      Pobox: this.investor.Pobox || '',
      Fax: this.investor.Fax || '',
      CellPhoneNo: this.investor.CellPhoneNo || '',
      Email: this.investor.Email || '',
      OtherAddress: this.investor.OtherAddress || ''
    });

    this.branch = (this.investor.FormOfOwnership.toString() === '5');
    this.AllowCascading = true;
  }

  compareIds(id1: any, id2: any): boolean {
    const a1 = determineId(id1);
    const a2 = determineId(id2);
    return a1 === a2;
  }

  public onSubmit() {
    // put dummy values to avoid conditional validation issues
    if (this.isCompany) {
      this.investorForm.get('cFirstNameEng').patchValue('NA');
      this.investorForm.get('cFirstName').patchValue('NA');
      this.investorForm.get('cFatherNameEng').patchValue('NA');
      this.investorForm.get('cFatherName').patchValue('NA');
      this.investorForm.get('cGrandNameEng').patchValue('NA');
      this.investorForm.get('cGrandName').patchValue('NA');
      this.investorForm.get('cGender').patchValue('1');
      this.investorForm.get('cNationality').patchValue('1');
      this.investorForm.get('Title').patchValue('1');
    }
    if (!this.branch) {
      this.investorForm.get('cBranchCountry').patchValue('0');
    }
    if (!this.investorForm.valid) {
      // // console.log('error!!');
      return;
    }
    const lStatus: number = this.legalStatus.value;
    const fOwnership: number = this.FormOfOwnershipV.value;

    const natCompany: number = this.investorForm.get('cBranchCountry').value;
    if (fOwnership.toString() === '5' && natCompany < 1) {
      this.toastr.error('Please select the country of incorporation of the parent company');
      return;
    }
    if (lStatus.toString() === '1' && fOwnership.toString() === '4') {
      this.toastr.error('The form of ownership can not be Joint Venture when the Legal Status is Sole');
      return;
    }
    if (fOwnership < 1) {
      this.toastr.error('Please select form of ownership');

      return;
    }
    const t: string = this.tin.value;
    if (t.replace(' ', '').trim().length > 0 && t.replace(' ', '').trim().length !== 10) {
      this.toastr.error('TIN must be 10 digits long');
      return;
    }
    // if (this.investorForm.get('ZoneId').value < 1) {
    //   this.toastr.error('Please select zone');
    //   return;
    // }
    // if (this.investorForm.get('WoredaId').value < 1) {
    //   this.toastr.error('Please select woreda');
    //   return;
    // }
    // if (this.investorForm.get('KebeleId').value < 1) {
    //   this.toastr.error('Please select kebele');
    //   return;
    // }

    this.loadingIndicator = true;
    console.log(this.getEditedInvestor());
    return this.custService.saveInvestor(this.getEditedInvestor())
      .subscribe((investor) => {
          console.log(investor);
          this.isNew = this.getEditedInvestor().IsExistingCustomer == true ? 1 : 0;

          // const IsExistingCustomer = this.route.snapshot.params['IsExistingCustomer'];

          // this.router.navigateByUrl(this.router.url.replace(IsExistingCustomer, this.isNew));
          if (investor == null) {
            const ServiceApplicationId1 = this.route.snapshot.params['ServiceApplicationId'];
            const InvestorId1 = this.route.snapshot.params['InvestorId'] || this.route.snapshot.params['investorId'];
            const workFlowId = this.route.snapshot.params['workFlowId'];
            this.toastr.success('Record saved successfully!');
            if (this.ServiceId == 1235) {
              console.log("test one at service");
              this.router.navigate(['investor-tab/1235/' + ServiceApplicationId1 + '/' + InvestorId1 + '/' + this.isNew + '/' + workFlowId]);

            } else {
              this.router.navigate(['investor-profile/' + InvestorId1]);
            }

          }

          if (investor != null) {
            if (this.ServiceId == 1235) {
              console.log("test one at service 2" + this.ServiceId);

              this.router.navigate(['investor-tab/1235/' + 0 + '/' + investor.InvestorId + '/' + this.isNew + '/' + 0]);
              setTimeout(() => this.dataSharing.steeperIndex.next(2), 0);
              setTimeout(() => this.dataSharing.currentIndex.next(2), 0);
            } else {
              this.router.navigate(['investor-profile/' + investor.InvestorId]);
              setTimeout(() => this.dataSharing.steeperIndex.next(1), 0);
              setTimeout(() => this.dataSharing.currentIndex.next(1), 0);
            }
            this.saveCompleted(investor);

            localStorage.setItem('InvestorId', investor.InvestorId.toString());


          }
        },
        err => this.handleError(err)
      );
  }

  getRegistrationCatagoryData(Tin: string) {
    this.registrationCatagoryService.getRegistrationCatagoriesByTin(Tin)
      .subscribe((result: RegistrationCatagory[]) => {
        this.registrationCatagoryList = result;
        this.investorForm.get('cMajorDivision').patchValue(result);
      }, error => this.toastr.error(error));
  }

  /*get tradeName() {
    return this.investorForm.get('cTradeName');
  }

  get tradeNameEng() {
    return this.investorForm.get('cTradeNameEng');
  }*/

  getKebeleByWoredaId(wordaId: any) {
    this.addressService.getKebelesByWoreda(wordaId)
      .subscribe(result => {
        //this.filteredKebeles = null
        this.filteredKebeles = result;
      });
  }

  filterRegion(regionCode: string) {
    if (!regionCode) {
      return;
    }
    this.filteredKebeles = null;
    // this.filteredWoredas = null;
    // this.filteredZones = null;
    // if (!this.zones) {
    //   return;
    // }
    this.filteredZones = this.zones.filter((item) => {
      return item.RegionId === regionCode;
    });
  }

  filterZone(zoneCode: string) {
    if (!zoneCode) {
      return;
    }
    this.filteredKebeles = null;
    this.filteredWoredas = null;
    this.filteredWoredas = this.woredas.filter((item) => {
      return item.ZoneId === zoneCode;
    });
  }

  filterWoreda(woredaCode: string) {
    if (!woredaCode) {
      return;
    }
    this.getKebeleByWoredaId(woredaCode);
  }

  getInvestorTitle(id: any) {
    this.lookUpService.getLookupByParentId(id, this.currentLang).subscribe(result => {
      // // console.log(result);
      this.TitleLookup = result;
    });

  }

  // getCountryTitle(id: any) {
  //   this.lookUpService.getLookupByParentId(id)
  //     .subscribe(result => {
  //       // // console.log(result);
  //       this.countryListWithOutEthipia = result.filter((item) =>
  //         item.English !== 'ETHIOPIA'
  //       );
  //
  //     });
  //
  // }
  getCountryTitle() {
    this.countryService.getAllCountry(this.currentLang)
      .subscribe(result => {
        this.countryListWithOutEthipia = result.filter((item) =>
          item.English !== 'ETHIOPIA'
        );

      });

  }

  statusChanged(legalS: number) {
    if (legalS > 1) {
      this.isCompany = true;
      this.initStaticDataOwnerShip(this.currentLang);
    } else {
      this.isCompany = false;
      this.formOfOwnershipList.splice(3, 1);
      // // console.log(this.formOfOwnershipList);
    }
  }

  onBack() {
    window.history.back();
  }

  ngAfterViewInit(): void {
    // this.fillAddressLookups();
  }

  checkCountry(id: any) {
    if (id === 19) {
      this.originFlag = false;
    }
  }

  onFormOfOwnershipChanged(id: any) {
    if (id == 1) {
      this.originFlag = true;
      this.investorForm.patchValue({
        cNationality: 19
      });
    }
    this.branch = (id === '5');
    if (this.branch) {
      this.BranchCountry.setValidators([Validators.required]);
    } else {
      this.BranchCountry.clearValidators();
    }
  }

  private getAllNation() {
    this.addressService.getNationality(this.currentLang)
      .subscribe(result => {
        this.nationList = result;
      });
  }

  // use it as 'ct.controlName.errors.required'

  private getPermissions() {
    this.loadingIndicator = true;

    this.accountService.getPermissions()
      .subscribe(result => {
          this.allPermissions = result;
          this.loadingIndicator = false;


        },
        error => {
          this.loadingIndicator = false;
          this.toastr.error(`Unable to retrieve permissions from the server.\r\nErrors:
              "${Utilities.getHttpResponseMessage(error)}"`, 'Get Permissions Error');
        });
  }

  private saveCompleted(investor?: Investor) {
    if (investor) {
      this.investor = investor;
    } else {
      this.toastr.success('Error. Record was not saved!');
      return;
    }
    this.loadingIndicator = false;
    // clear the dummy values uaed to avoid conditional validation issues
    if (this.isCompany) {
      this.investorForm.get('cFirstNameEng').patchValue('');
      this.investorForm.get('cFatherNameEng').patchValue('');
      this.investorForm.get('cGrandNameEng').patchValue('');
      this.investorForm.get('cGender').patchValue('');
    }
    this.toastr.success('Record saved successfully!');
    // if (this.accountService.getUserType()) {
    //   this.router.navigate(['investor']);
    // } else {
    //   this.router.navigate(['search-browser']);
    // }
  }

  private handleError(error) {
    this.loadingIndicator = false;

    const errList = Utilities.getHttpResponseMessage(error);
    if (error.status === 400) { // bad request (validation)
      this.errors = errList;
      this.toastr.error('Please fix the listed errors', 'Error');
    } else {
      this.errors = [];
      this.toastr.error(error.status + ':' + errList[0].toString(), 'Error');
    }
  }

  private getEditedInvestor(): Investor {
    const formModel = this.investorForm.value;
    const add = this.investorForm.get('address').value;
    if (this.route.snapshot.params['InvestorId'] > 0) {
      this.isNewInvestor = false;
    }
    // // console.log(add);
    return {
      InvestorId: this.isNewInvestor ? 0 : this.investor.InvestorId,
      FirstName: this.isCompany ? formModel.cCompanyName : formModel.cFirstName,
      FatherName: this.isCompany ? '' : formModel.cFatherName,
      GrandName: this.isCompany ? '' : formModel.cGrandName,
      FirstNameEng: this.isCompany ? formModel.cCompanyNameEng : formModel.cFirstNameEng,
      FatherNameEng: this.isCompany ? '' : formModel.cFatherNameEng,
      GrandNameEng: this.isCompany ? '' : formModel.cGrandNameEng,
      Nationality: this.isCompany ? formModel.cNationality : formModel.cNationality,
      BranchCountry: this.isCompany ? formModel.cBranchCountry : formModel.cBranchCountry,
      Gender: this.isCompany ? null : formModel.cGender,
      Tin: formModel.cTin,
      RegistrationDate: formModel.cRegDate,
      RegistrationNumber: formModel.cRegNumber,
      /*TradeName: formModel.cTradeName,
      TradeNameEnglish: formModel.cTradeNameEng,*/
      PaidCapital: formModel.cPaidCapital,
      SighnedCapital: formModel.cSighnedCapital,

      LegalStatus: formModel.cLegalStatus,
      IsEthiopianOrigin: formModel.cIsEthiopianOrigin,

      RegistrationCatagories: formModel.cMajorDivision,

      UserId: this.accountService.currentUser.Id,
      IsExistingCustomer: formModel.IsExistingCustomer,
      // SiteCode: this.accountService.currentUser.SiteCode,
      IsActive: false,
      IsDeleted: false,
      Title: this.isCompany ? null : formModel.Title,
      FormOfOwnership: formModel.FormOfOwnership,
      RegionId: add.RegionId,
      ZoneId: add.ZoneId,
      WoredaId: add.WoredaId,
      WoredaEngId: add.WoredaEngId,
      KebeleId: add.KebeleId,
      KebeleEngId: add.KebeleEngId,
      HouseNo: add.HouseNo,
      TeleNo: add.TeleNo,
      Pobox: add.Pobox,
      Fax: add.Fax,
      CellPhoneNo: add.CellPhoneNo,
      Email: add.Email,
      OtherAddress: add.OtherAddress,
      UserName: this.accountService.currentUser.UserName,
      AddressId: this.isNewInvestor ? 0 : this.investor.AddressId
    };
  }

}
