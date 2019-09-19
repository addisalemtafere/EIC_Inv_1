import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GENDERS, NUMERIC_REGEX, ALPHABET_WITHSPACE_REGEX, ET_ALPHABET_WITHSPACE_REGEX, LOOK_UP_TYPES } from '../../../const/consts';
import { ManagerService } from '../service/manager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LookUpService } from '../../../Services/look-up.service';
import DateTimeFormat = Intl.DateTimeFormat;
import { LookupsModel } from '../../../model/lookups';
import { determineId } from '@custor/helpers/compare';
import { Gender, LegalStatus, Lookup } from '../../../model/lookupData';
import { NationalityModel } from '../../../model/address/NationalityModel';
import { ConfigurationService } from '../../../../@custor/services/configuration.service';
import { AddressService } from '../../../Services/Address/address.service';
import { RegionModel } from '../../../model/address/Region.model';
import { ZoneModel } from '../../../model/address/Zone.model';
import { WoredaModel } from '../../../model/address/Woreda.model';
import { KebeleModel } from '../../../model/address/Kebele.model';
@Component({
  selector: 'app-manager-edit',
  templateUrl: './manager-edit.component.html',
  styleUrls: ['./manager-edit.component.scss']
})
export class ManagerEditComponent implements OnInit {
  managerForm: FormGroup;
  AllowCascading: boolean;
  managerViewForm: FormGroup;
  managerData: any;
  managerAuditData: any;
  currentLang: string;
  public TitleLookup: LookupsModel[];
  filteredZones: ZoneModel[] = [];
  zones: ZoneModel[] = [];
  filteredViewZones: ZoneModel[] = [];
  woredas: WoredaModel[] = [];
  filteredWoredas: WoredaModel[] = [];
  filteredViewWoredas: WoredaModel[] = [];
  kebeles: KebeleModel[] = [];
  filteredKebeles: KebeleModel[] = [];
  filteredViewKebeles: KebeleModel[] = [];
  genders: Gender[] = [];
  regions: RegionModel[] = [];
  id:any;
  public nationList: NationalityModel[];
  constructor(private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private lookUpService: LookUpService,
    private managerService: ManagerService,
    private addressService: AddressService,
    private configService: ConfigurationService) {
    this.currentLang = this.configService.language;
    this.initForm();
    this.initViewForm();
  }

  ngOnInit() {
    this.managerViewForm.disable();
    this.id = this.activatedRoute.snapshot.params.id;
    this.fillAddressLookups()
   
  }
  fillAddressLookups() {
    this.getTitles();
    this.getRegions();
    this.getAllZones();
    this.getAllWoredas();
    this.initStaticData(this.currentLang);
    this.getAllNations();
  }
  getAllWoredas() {
    this.addressService.getAllWoredasByLang(this.currentLang)
      .subscribe(result => {
        this.woredas = result;
        this.getDataFromApi(this.id);
        if (this.woredas) {
          this.filterZone('');
        }
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
  getRegions() {
    this.addressService.getRegionsByLang(this.currentLang)
      .subscribe(result => {
        this.regions = result;
      });
  }
  getAllZones() {
    this.addressService.getAllZonesByLang(this.currentLang)
      .subscribe(z => {
        this.zones = z;
        if (this.zones) {
          this.filterRegion('');
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
  getViewKebeleByWoredaId(woredaId: any) {
    this.addressService.getKebelesByWoreda(woredaId)
      .subscribe(result => {
        this.filteredViewKebeles = result;
      });
  }
  private getAllNations() {
    this.addressService.getNationality(this.currentLang)
      .subscribe(result => {
        this.nationList = result;
      });
  }
  initStaticData(currentLang) {
    let gender: Gender = new Gender();
    GENDERS.forEach(pair => {
      gender = { Id: pair.Id.toString(), Desc: (currentLang === 'et' ? pair.Description : pair.DescriptionEnglish) };
      this.genders.push(gender);
    });
 
  }
  compareIds(id1: any, id2: any): boolean {
    const a1 = determineId(id1);
    const a2 = determineId(id2);
    return a1 === a2;
  }
  getTitles() {
    this.lookUpService.getLookupByParentId(LOOK_UP_TYPES.TITLES, this.currentLang).subscribe(result => {
      this.TitleLookup = result;
    });
  }
  getDataFromApi(id) {

    this.managerService.getManagerByAssociateId(id).subscribe(result => {
      if (result == null) {
        alert("no data on manager table")
        //this.toastr.error(this.translate.instant('messages.RecordNotFound'));
      } else {
        console.log(result);
        this.managerData = result;
        console.log(new Date(this.managerData.DateOfBirth));
        //this.managerViewForm.controls.BirthDate.setValue((this.managerData.DateOfBirth));
        this.managerViewForm.patchValue({
          FirstName: this.managerData.FirstName || '',
          FatherName: this.managerData.FatherName || '',
          GrandName: this.managerData.GrandName || '',
          FirstNameEng: this.managerData.FirstNameEng || '',
          FatherNameEng: this.managerData.FatherNameEng || '',
          GrandNameEng: this.managerData.GrandNameEng || '',
          Title: this.managerData.Title || '',
          Gender: this.managerData.Gender || '',
          Nationality: Number(this.managerData.Nationality) || '',
          Zone: this.managerData.ZoneId || '',
          Woreda: this.managerData.WoredaId || '',
          Kebele: this.managerData.KebeleId || '',
          Region: this.managerData.RegionId || '',
          HouseNo: this.managerData.HouseNo || '',
          Tele : this.managerData.Tele || '',
          Email: this.managerData.Email || '',
          RegularPhone: this.managerData.RegularPhone || '',
          MobilePhone: this.managerData.MobilePhone || '',
          FaxNo: this.managerData.FaxNo || '',
          Pobox: this.managerData.Pobox || '',
          OtherAddress: this.managerData.OtherAddress || '',
        });
        setTimeout(() => {
          if (this.managerData.RegionId != null) {
            this.filteredViewZones = this.zones.filter((item) => item.RegionId === this.managerData.RegionId);
          }
        }, 100);
        setTimeout(() => {
          if (this.managerData.ZoneId != null) {
            this.filteredViewWoredas =
              this.woredas.filter((item) =>
                item.ZoneId == '15');
          }
        }, 100);
        if (this.managerData.WoredaId != null) {
          this.getViewKebeleByWoredaId(this.managerData.WoredaId);
        }
        this.searchDataFromAudit(id);
      }
    })
  }
  searchDataFromAudit(id) {
    console.log(id)
    this.managerService.getManagerAuditByAssociateId(id).subscribe(res => {
      if (res != null) {
        // console.log(res)
        // this.managerForm.patchValue(res);
        this.managerAuditData = res;
        this.managerForm.patchValue({
          FirstName: this.managerAuditData.FirstName || '',
          FatherName: this.managerAuditData.FatherName || '',
          GrandName: this.managerAuditData.GrandName || '',
          FirstNameEng: this.managerAuditData.FirstNameEng || '',
          FatherNameEng: this.managerAuditData.FatherNameEng || '',
          GrandNameEng: this.managerAuditData.GrandNameEng || '',
          Title: this.managerAuditData.Title || '',
          Gender: this.managerAuditData.Gender || '',
          Nationality: Number(this.managerAuditData.Nationality) || '',
          Zone: this.managerAuditData.ZoneId || '',
          Woreda: this.managerAuditData.WoredaId || '',
          Kebele: this.managerAuditData.KebeleId || '',
          Region: this.managerAuditData.RegionId || '',
          HouseNo: this.managerAuditData.HouseNo || '',
          Tele: this.managerAuditData.Tele || '',
          Email: this.managerAuditData.Email || '',
          RegularPhone: this.managerAuditData.RegularPhone || '',
          MobilePhone: this.managerAuditData.MobilePhone || '',
          FaxNo: this.managerAuditData.FaxNo || '',
          Pobox: this.managerAuditData.Pobox || '',
          OtherAddress: this.managerAuditData.OtherAddress || '',
        });
        setTimeout(() => {
          if (this.managerAuditData.RegionId != null) {
            this.filteredZones = this.zones.filter((item) => item.RegionId === this.managerData.RegionId);
          }
        }, 100);
        setTimeout(() => {
          if (this.managerAuditData.ZoneId != null) {
            this.filteredWoredas =
              this.woredas.filter((item) =>
                item.ZoneId == '15');
          }
        }, 100);
        if (this.managerAuditData.WoredaId != null) {
          this.getViewKebeleByWoredaId(this.managerAuditData.WoredaId);
        }
      }
      else {
        console.log("no data on new db");
       // this.managerForm.patchValue(this.managerData);
        this.managerForm.patchValue({
          FirstName: this.managerData.FirstName || '',
          FatherName: this.managerData.FatherName || '',
          GrandName: this.managerData.GrandName || '',
          FirstNameEng: this.managerData.FirstNameEng || '',
          FatherNameEng: this.managerData.FatherNameEng || '',
          GrandNameEng: this.managerData.GrandNameEng || '',
          Title: this.managerData.Title || '',
          Gender: this.managerData.Gender || '',
          Nationality: Number(this.managerData.Nationality) || '',
          Zone: this.managerData.ZoneId || '',
          Woreda: this.managerData.WoredaId || '',
          Kebele: this.managerData.KebeleId || '',
          Region: this.managerData.RegionId || '',
          HouseNo: this.managerData.HouseNo || '',
          Tele: this.managerData.Tele || '',
          Email: this.managerData.Email || '',
          RegularPhone: this.managerData.RegularPhone || '',
          MobilePhone: this.managerData.MobilePhone || '',
          FaxNo: this.managerData.FaxNo || '',
          Pobox: this.managerData.Pobox || '',
          OtherAddress: this.managerData.OtherAddress || '',
        });
        setTimeout(() => {
          if (this.managerData.RegionId != null) {
            this.filteredZones = this.zones.filter((item) => item.RegionId === this.managerData.RegionId);
          }
        }, 100);
        setTimeout(() => {
          if (this.managerData.ZoneId != null) {
            this.filteredWoredas =
              this.woredas.filter((item) =>
                item.ZoneId == '15');
          }
        }, 100);
        if (this.managerData.WoredaId != null) {
          this.getViewKebeleByWoredaId(this.managerData.WoredaId);
        }
      }
    })
  }
  initViewForm() {
    this.managerViewForm = this.fb.group({
      FirstName: [], FatherName: [], GrandName: [], FirstNameEng: [], FatherNameEng: [],
      GrandNameEng: [], Nationality: [], Gender: [], Title: [], Origin: [], Region: [],
      Zone: [], Woreda: [], Kebele: [], MobilePhone: [], HouseNo: [], RegularPhone: [], FaxNo: [],
      OtherAddress: [], Pobox: [], Email: [], Remark: [], ViewBirthDate: []
    });
  }

  initForm() {
    this.managerForm = this.fb.group({
      FirstNameEng: ['', [Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(100),
      Validators.pattern(ALPHABET_WITHSPACE_REGEX)])]],
      FatherNameEng: ['', [Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(100),
      Validators.pattern(ALPHABET_WITHSPACE_REGEX)])]],
      GrandNameEng: ['', [Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(100),
      Validators.pattern(ALPHABET_WITHSPACE_REGEX)])]],
      FirstName: ['', [Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(100),
      Validators.pattern(ET_ALPHABET_WITHSPACE_REGEX)])]],
      FatherName: ['', [Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(100),
      Validators.pattern(ET_ALPHABET_WITHSPACE_REGEX)])]],
      GrandName: ['', [Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(100),
      Validators.pattern(ET_ALPHABET_WITHSPACE_REGEX)])]],
      Nationality: ['', [Validators.required]], // Ethiopian
      Sex: ['', [Validators.required]],
      Title: [''],
      BirthDate: [DateTimeFormat, [Validators.required]],
      Origin: [0],
      RegionId: ['', [Validators.required]],
      ZoneId: ['', [Validators.required]],
      WoredaId: ['', [Validators.required]],
      KebeleId: ['', [Validators.required]],
      MobilePhone: ['', [Validators.required, Validators.pattern(NUMERIC_REGEX), Validators.minLength(9)]],
      HouseNo: ['', [Validators.required]],
      RegularPhone: ['', [Validators.pattern(NUMERIC_REGEX)]],
      FaxNo: [''],
      OtherAddress: [''],
      Pobox: [''],
      Email: ['', [Validators.email]],
      Remark: [''],

    });

  }
  fileChange(data){
    console.log(data)
  }
  onBack(){

  }
  create(){

  }
  update(){
    
  }
  get firstName() {
    return this.managerForm.get('FirstName');
  }

  get fatherName() {
    return this.managerForm.get('FatherName');
  }
  get grandName() {
    return this.managerForm.get('GrandName');
  }
  get Title() {
    return this.managerForm.get('Title');
  }

  get BirthDate() {
    return this.managerForm.get('BirthDate');
  }

  

  get firstNameEng() {
    return this.managerForm.get('FirstNameEng');
  }

  get fatherNameEng() {
    return this.managerForm.get('FatherNameEng');
  }

  get grandNameEng() {
    return this.managerForm.get('GrandNameEng');
  }

  get nationality() {
    return this.managerForm.get('Nationality');
  }

  get gender() {
    return this.managerForm.get('Gender');
  }

  get Origin() {
    return this.managerForm.get('IsEthiopianOrigin');
  }

  get Photo() {
    return this.managerForm.get('PhotoData');
  }

  get region() {
    return this.managerForm.get('RegionId');
  }

  get ZoneId() {
    return this.managerForm.get('ZoneId');
  }

  get WoredaId() {
    return this.managerForm.get('WoredaId');
  }

  get KebeleId() {
    return this.managerForm.get('KebeleId');
  }

  get houseNumber() {
    return this.managerForm.get('HouseNo');
  }

  get phoneDirect() {
    return this.managerForm.get('PhoneDirect');
  }

  get TeleNo() {
    return this.managerForm.get('RegularPhone');
  }

  get MobilePhone() {
    return this.managerForm.get('MobilePhone');
  }

  get fax() {
    return this.managerForm.get('FaxNo');
  }

  get pobox() {
    return this.managerForm.get('POBox');
  }

  get Email() {
    return this.managerForm.get('Email');
  }

  get houseNo() {
    return this.managerForm.get('HouseNo');
  }

  // another getter for easy access to form fields
  get ct() {
    return this.managerForm.controls;
  }


}
