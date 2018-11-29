import {fadeInOut} from '@custor/services/animations';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {AfterContentChecked, AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Subscription} from 'rxjs';
import {Utilities} from '@custor/helpers/utilities';
import {ALPHABET_WITHSPACE_REGEX, ET_ALPHABET_WITHSPACE_REGEX, GENDERS, STATUS} from '../../const/consts';
import {BudgetYearType} from '../../model/Registration/BudgetYearType';
import {AddressService} from '../../Services/Address/address.service';
import {ToastrService} from 'ngx-toastr';
import {BudgetYearTypeService} from '../../Services/Registration/BudgetYearType.service';
import {Lookup, RegistrationStatus} from '../../model/lookupData';
import {MajorDivision} from '../../model/catagory/MajorDivision.model';
import {CatagoryService} from '../../Services/Catagory/Catagory.service';
import {Investor} from '../../model/investor';
import {RegistrationService} from '../../Services/Registration/Registration.service';
import {RegistrationCatagory} from '../../model/Registration/RegistrationCatagory';
import {RegistrationCatagoryService} from '../../Services/Registration/RegistrationCatagory.service';
import {RegistrationModel} from '../../model/Registration/RegistrationModel';
import {ServiceTariffModel} from '../../model/servicetariff';
import {AddressModel} from '../../model/address/Address.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  animations: [fadeInOut]
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  loadingIndicator: boolean;
  isCommercialRepresentative: boolean;
  budgetYearTypes: BudgetYearType[] = [];
  regStatus: RegistrationStatus[] = [];
  majorDivisions: MajorDivision[] = [];
  registrationCatagoryList: RegistrationCatagory[] = [];
  registrationModel: RegistrationModel;
  isNewRegistration = true;
  constructor(private budgetYearTypeService: BudgetYearTypeService,
              private registrationCatagoryService: RegistrationCatagoryService,
              private catagoryService: CatagoryService,
              private toastr: ToastrService,
              private registrationService: RegistrationService,
              private fb: FormBuilder) {

    this.initForm();
    this.initStaticData('am');
  }


  initForm() {
    this.registrationForm = this.fb.group({
      cCompanyNameRegional: [''],
      cCompanyNameEnglish: ['', [Validators.compose([Validators.required, Validators.minLength(2),
        Validators.pattern(ALPHABET_WITHSPACE_REGEX)])]],
      cCompanyNameAmharic: ['', [Validators.compose([Validators.required, Validators.minLength(2),
        Validators.pattern(ET_ALPHABET_WITHSPACE_REGEX)])]],
      cTin: ['', [Validators.compose([Validators.required, Validators.minLength(10),])]],
      cRegNumber: ['', [Validators.compose([Validators.required, Validators.minLength(10),])]],
      cRegDate: ['', [Validators.compose([Validators.required, Validators.minLength(2),])]],
      cPaidCapital: ['', [Validators.compose([Validators.required, Validators.minLength(2),])]],
      cSighnedCapital: [''],
      cSingleShareValue: [''],
      cWithForighners: false,
      cEthiopiansShare: [''],
      cBudgetYearCatagory: [''],
      cRegistrationStatus: [''],
      cRepresentativeNameAmharic: [''],
      cRepresentativeNameEnglish: [''],

      cRepresentativeNameRegional: [''],
      cRepresentativeManagerNameAmharic: [''],
      cRepresentativeManagerNameEnglish: [''],
      cRepresentativeManagerNameRegional: [''],

      cMainOfficeAddressAmharic: [''],
      cMainOfficeAddressEnglish: [''],
      cMainOfficeAddressRegional: [''],


      cMainOfficeCountryNameAmharic: [''],
      cMainOfficeCountryNameEnglish: [''],
      cMainOfficeCountryNameRegional: [''],
      cMajorDivision: []
    });
  }

  ngOnInit() {
    this.isCommercialRepresentative = true;
    this.getMajorDivisions();
    console.log(localStorage.getItem('LegalStatus'));
    if(localStorage.getItem('LegalStatus') == null || localStorage.getItem('LegalStatus') == "4") {
      this.ClearCommercialRepresentativeValidators();
    }
    if(localStorage.getItem('LegalStatus') == "2" || localStorage.getItem('LegalStatus') == "3") {
    }
    else {
      //Do Something
    }
  }

  ngAfterViewInit(): void {
    this.fillAllLookups();
  }

  fillAllLookups() {

    this.getBudgetYearTypes();

    //this.getAllNation();
  }

  getBudgetYearTypes() {
    this.budgetYearTypeService.getAllBugetYearTypes()
      .subscribe(result => {
          this.budgetYearTypes = result;
        },
        error => this.toastr.error(error));
  }

  getMajorDivisions() {
    this.catagoryService.getMajorDivision()
      .subscribe(result => {
          this.majorDivisions = result;
        },
        error => this.toastr.error(error));
  }

  initStaticData(currentLang) {
    let registration_Status: RegistrationStatus = new RegistrationStatus();
    STATUS.forEach(pair => {
      registration_Status = {'Id': pair.Id.toString(), 'Desc': (currentLang === 'am' ? pair.Description : pair.DescriptionEnglish)};
      this.regStatus.push(registration_Status);
    });
  }

  public onSubmit() {
    if (!this.registrationForm.valid) {
      return;
    }
    if (this.isNewRegistration)
    {
      this.loadingIndicator = true;
      return this.registrationService.saveRegistration(this.getEditedRegistration())
        .subscribe((registrationModel: RegistrationModel) => {
            this.saveCompleted(registrationModel);
            localStorage.setItem('Tin', registrationModel.Tin.toString());
          },
          error => this.toastr.error(error));
    }
    else
      {
        this.loadingIndicator = true;
        return this.registrationService.UpdateRegistration(this.getEditedRegistration())
          .subscribe((registrationModel: RegistrationModel) => {
              this.saveCompleted(registrationModel);
              localStorage.setItem('Tin', registrationModel.Tin.toString());
            },
            error => this.toastr.error(error));
      }
  }

  getRegistrationDetail() {
    var OwnerTin = localStorage.getItem('Tin');

    if (OwnerTin === null)
      return;
      this.registrationService.getRegistrationByTin(OwnerTin).subscribe(registration => {
      this.isNewRegistration = true;
      this.registrationForm.patchValue(registration);
      this.getRegistrationCatagoryData(registration.Tin);
    }, error => this.toastr.error(error));
  }

  getRegistrationCatagoryData(Tin: string) {
    this.registrationCatagoryService.getRegistrationCatagoriesByTin(Tin)
      .subscribe((result: RegistrationCatagory[]) => {
        this.registrationCatagoryList = result;
        this.registrationForm.get('cMajorDivision').patchValue(result);
      }, error => this.toastr.error(error));
  }

  private saveCompleted(registrationModel?: RegistrationModel) {
    if (registrationModel) {
      this.registrationModel = registrationModel;
    }
    this.loadingIndicator = false;
    this.toastr.success('Record saved successfully!');
  }

  private getEditedRegistration(): RegistrationModel {
    const formModel = this.registrationForm.value;
    return {
      ID: this.isNewRegistration ? 0 : this.registrationModel.ID,
      Tin: formModel.cTin,
      MainGuid: '65197b05-8787-4859-b6dd-000014e63a72',
      ParentGuid: '93c39239-5c2f-4347-95d1-0000527f5339',
      LegalCondtion: 1,
      BusinessNameAmh: formModel.cCompanyNameAmharic,
      BusinessName: formModel.cCompanyNameEnglish,
      BusinessNameRegional: formModel.cCompanyNameRegional,
      RegNo: formModel.cRegNumber,
      RegDate: formModel.cRegDate,
      PaidUpCapital: formModel.cPaidCapital,
      SignedCapital: formModel.cSighnedCapital,
      SingleShareAmount: formModel.cSingleShareValue,
      IsSharedWithForeigner: formModel.cWithForighners,
      LocalPersonCapital: formModel.cEthiopiansShare,
      BudgetYearCode: formModel.cBudgetYearCatagory,
      Status: formModel.cRegistrationStatus,
      GrantorName: formModel.cRepresentativeNameAmharic,
      GrantorNameEng: formModel.cRepresentativeNameEnglish,
      GrantorNameRegional: formModel.cRepresentativeNameRegional,
      GrantorCountry: formModel.cMainOfficeCountryNameAmharic,
      GrantorCountryEng: formModel.cMainOfficeCountryNameEnglish,
      GrantorCountryRegional: formModel.cMainOfficeCountryNameRegional,
      GrantorManagerName: formModel.cRepresentativeManagerNameAmharic,
      GrantorManagerNameEng: formModel.cRepresentativeManagerNameEnglish,
      GrantorManagerNameRegional: formModel.cRepresentativeManagerNameRegional,
      GrantorMainAddress: formModel.cMainOfficeAddressAmharic,
      GrantorMainAddressEng: formModel.cMainOfficeAddressEnglish,
      GrantorMainAddressRegional: formModel.cMainOfficeAddressRegional,
      RegistrationCatagories: formModel.cMajorDivision,
      Username: '',
      //EventDateTime: Date.Now.to,
      UpdatedUsername: '',
      //UpdatedEventDatetime: Date.now(),
    };
  }


  ClearCommercialRepresentativeValidators() {
    /*alert('Clear Commerical registration validation');*/
    this.representativeManagerNameAmharic.clearValidators();
    this.registrationForm.get('cRepresentativeManagerNameAmharic').updateValueAndValidity();

    this.representativeManagerNameEnglish.clearValidators();
    this.representativeManagerNameRegional.clearValidators();

    this.representativeNameAmharic.clearValidators();
    this.representativeNameEnglish.clearValidators();
    this.representativeNameRegional.clearValidators();

    this.mainOfficeCountryNameAmharic.clearValidators();
    this.mainOfficeCountryNameEnglish.clearValidators();
    this.mainOfficeCountryNameRegional.clearValidators();

    this.mainOfficeAddressAmharic.clearValidators();
    this.mainOfficeAddressEnglish.clearValidators();
    this.mainOfficeAddressRegional.clearValidators();
  }


/*  saveRegistrationCatagory() {
    this.registrationForm.patchValue({
      cTin: localStorage.getItem('Tin')
    });
    // console.log(this.registrationForm.get('cMajorDivisions').value);

    return this.registrationCatagoryService.saveRegistrationCatagory(
      this.getEditedRegistrationCatagory()).subscribe(
      (registrationcatagory: RegistrationCatagory) => {
        console.log(registrationcatagory);
      },
      error => this.toastr.error(error));
  }*/

 /* private getEditedRegistrationCatagory(): RegistrationCatagory {
    const formModel = this.registrationForm.value;
    return {
      ID: 0,
      Tin: localStorage.getItem('Tin'),
      MainGuid: null,
      MajorCatagoryCode: formModel.cMajorDivision
    };
  }*/

  onBack() {
    window.history.back();
  }


  get companyNameAmharic() {
    return this.registrationForm.get('cCompanyNameAmharic');
  }

  get companyNameEnglish() {
    return this.registrationForm.get('cCompanyNameEnglish');
  }

  get companyNameRegional() {
    return this.registrationForm.get('cCompanyNameRegional');
  }

  get representativeNameAmharic() {
    return this.registrationForm.get('cRepresentativeNameAmharic');
  }

  get representativeNameEnglish() {
    return this.registrationForm.get('cRepresentativeNameEnglish');
  }

  get representativeNameRegional() {
    return this.registrationForm.get('cRepresentativeNameRegional');
  }

  get representativeManagerNameAmharic() {
    return this.registrationForm.get('cRepresentativeManagerNameAmharic');
  }

  get representativeManagerNameEnglish() {
    return this.registrationForm.get('cRepresentativeManagerNameEnglish');
  }

  get representativeManagerNameRegional() {
    return this.registrationForm.get('cRepresentativeManagerNameRegional');
  }

  get mainOfficeAddressAmharic() {
    return this.registrationForm.get('cMainOfficeAddressAmharic');
  }

  get mainOfficeAddressEnglish() {
    return this.registrationForm.get('cMainOfficeAddressEnglish');
  }

  get mainOfficeAddressRegional() {
    return this.registrationForm.get('cMainOfficeAddressRegional');
  }

  get mainOfficeCountryNameAmharic() {
    return this.registrationForm.get('cMainOfficeCountryNameAmharic');
  }

  get mainOfficeCountryNameEnglish() {
    return this.registrationForm.get('cMainOfficeCountryNameEnglish');
  }

  get mainOfficeCountryNameRegional() {
    return this.registrationForm.get('cMainOfficeCountryNameRegional');
  }

  get tin() {
    return this.registrationForm.get('cTin');
  }

  get regNumber() {
    return this.registrationForm.get('cRegNumber');
  }

  get regDate() {
    return this.registrationForm.get('cRegDate');
  }

  get singleShareValue() {
    return this.registrationForm.get('cSingleShareValue');
  }

  get sighnedCapital() {
    return this.registrationForm.get('cSighnedCapital');
  }

  get paidCapital() {
    return this.registrationForm.get('cPaidCapital');
  }

  get withForighners() {
    return this.registrationForm.get('cWithForighners');
  }

  get ethiopiansShare() {
    return this.registrationForm.get('cEthiopiansShare');
  }

  get budgetYearCatagory() {
    return this.registrationForm.get('cBudgetYearCatagory');
  }

  get registrationStatus() {
    return this.registrationForm.get('cRegistrationStatus');
  }

  get RegistrationName() {
    return this.registrationForm.get('cCompanyNameAmharic');
  }
}

