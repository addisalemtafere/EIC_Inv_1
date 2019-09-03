import { Component, OnInit } from '@angular/core';
import { Gender, LegalStatus, Lookup } from '../../../model/lookupData';
import { ALPHABET_WITHSPACE_REGEX, ET_ALPHABET_REGEX, GENDERS, LEGAL_STATUS, LOOK_UP_TYPES } from '../../../const/consts';
import { KebeleModel } from '../../../model/address/Kebele.model';
import { Permission } from '../../../model/security/permission.model';
import { RegionModel } from '../../../model/address/Region.model';
import { ZoneModel } from '../../../model/address/Zone.model';
import { WoredaModel } from '../../../model/address/Woreda.model';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { ConfigurationService } from '@custor/services/configuration.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { LookUpService } from '../../../Services/look-up.service';
import { InvestorService } from '../../investor/investor.service';
import { LookupsModel } from '../../../model/lookups';
import { AddressService } from '../../../Services/Address/address.service';
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

  profileForm: FormGroup;
  loadingIndicator: boolean;
  genders: Gender[] = [];
  legalStatuses: LegalStatus[] = [];
  currentLang : string;
  constructor(private fb: FormBuilder,
    private ngxUiLoader: NgxUiLoaderService,
    private lookUpService:LookUpService,
    private addressService: AddressService,
    private configService: ConfigurationService)
    {
    this.currentLang = this.configService.language; 
    this.initForm();

  }

  ngOnInit() {
    this.getCountries();
    this.fillAddressLookups();
    this.initStaticData(this.currentLang);
  }
  initStaticData(currentLang) {
    let gender: Gender = new Gender();
    GENDERS.forEach(pair => {
      gender = { Id: pair.Id.toString(), Desc: (currentLang === 'et' ? pair.Description : pair.DescriptionEnglish) };
      this.genders.push(gender);
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

  }
  getTitles(){
    this.lookUpService.getLookupByParentId(LOOK_UP_TYPES.TITLES, this.currentLang).subscribe(result => {
      // console.log(result);
      this.TitleLookup = result;
    });
  }
  getRegions() {
    this.ngxUiLoader.startBackground();
    this.addressService.getRegionsByLang(this.currentLang)
      .subscribe(result => {
        this.ngxUiLoader.stopBackground();
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
      });
  }
  initForm() {
    this.profileForm = this.fb.group({
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
      Gender: ['1'],
      Title: [''],
      ParentId: ['', [Validators.required]],
      RegionId: ['', [Validators.required]],
      ZoneId: ['', [Validators.required]],
      WoredaId: ['', [Validators.required]],
      WoredaEngId: ['', [Validators.required]],
      KebeleId: ['', [Validators.required]],
      KebeleEngId: ['', [Validators.required]],
      OtherAddress: ['', [Validators.required]],
      CellPhoneNo: ['', Validators.required],
      HouseNo: ['', Validators.required],
      TeleNo: ['', Validators.required],
      Fax: ['', Validators.required],
      Pobox: ['', Validators.required],
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
  get WoredaIdEng() {
    return this.profileForm.get('WoredaIdEng');
  }
  get KebeleIdEng() {
    return this.profileForm.get('KebeleIdEng');
  }
  get CellPhoneNo() {
    return this.profileForm.get('CellPhoneNo');
  }
  get HouseNo() {
    return this.profileForm.get('HouseNo');
  }

}

