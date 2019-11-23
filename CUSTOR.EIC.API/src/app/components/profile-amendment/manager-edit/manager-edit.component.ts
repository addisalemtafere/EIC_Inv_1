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
import { ServiceApplicationService } from "./../service/service-application.service";
import { FormOfOwnership, ServiceTypes } from "@custor/const/consts";
@Component({
  selector: 'app-manager-edit',
  templateUrl: './manager-edit.component.html',
  styleUrls: ['./manager-edit.component.scss']
})
export class ManagerEditComponent implements OnInit {
  managerForm: FormGroup;
  AllowCascading: boolean;
  managerViewForm: FormGroup;
  serviceApplicationId: any;
  InvestorId: any;
  managerData: any;
  managerAuditData: any;
  AssociateId: any;
  manager: any;
  currentLang: string;
  Deleted: boolean = false;
  IsActive: boolean = false;
  AddressId;
  ProjectId;
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
  id: any;
  updateData: boolean = false;
  public nationList: NationalityModel[];
  serviceApplicationExists: boolean = false;
  existingServiceApplication: any;
  amendment = ServiceTypes[4].ServiceId;
  IsMainOffice ;
  constructor(private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private lookUpService: LookUpService,
    private managerService: ManagerService,
    private serviceApplicationApiService: ServiceApplicationService,
    private addressService: AddressService,
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
    this.managerViewForm.disable();
    this.id = this.activatedRoute.snapshot.params.id;
    this.fillAddressLookups()
    this.InvestorId = 2092;
    if(this.id){
      this.getDataFromApi(this.id);
    }
  }
  getDataFromApi(id) {
    this.managerService.getManagerByAssociateId(id).subscribe(result => {
      if (result == null) {
        alert("no data on manager table")
        //this.toastr.error(this.translate.instant('messages.RecordNotFound'));
      } else {
        this.managerData = result;
        console.log(this.managerData);
        this.AddressId = this.managerData.AddressId;
        this.ProjectId = this.managerData.ProjectId;
        this.IsActive = this.managerData.IsActive;
        this.Deleted = this.managerData.Deleted
        this.AssociateId = this.managerData.AssociateId;
        this.IsMainOffice = this.managerData.IsMainOffice;
        this.managerViewForm.patchValue(result);
        this.setViewForm();
        this.searchDataFromAudit(id);
      }
    })
  }
  setViewForm(){
    if (this.managerData.ZoneId != null) {
      this.filteredViewWoredas =
        this.woredas.filter((item) =>
          item.ZoneId === this.managerData.ZoneId);
    }
    console.log(this.managerData)
    console.log(this.filteredViewWoredas)
    if (this.managerData.RegionId != null) {
      this.filteredViewZones =
        this.zones.filter((item) => item.RegionId === this.managerData.RegionId);
    }
    console.log(this.filteredViewZones)
    if (this.managerData.WoredaId != null) {
      this.getKebeleByWoredaId(this.managerData.WoredaId);
    }
  }
  getKebeleByWoredaId(woredaId: any) {
    this.addressService.getKebelesByWoreda(woredaId)
      .subscribe(result => {
        // this.kebeles = result;
        this.filteredKebeles = result;
        console.log(this.filteredKebeles)
      });
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
       // this.getDataFromApi(this.id);
        // const id = 2092;
        // if (id) {
        //   this.getServiceApplicationBy(id);
        // }
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
        this.filteredKebeles = result;
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
 
  searchDataFromAudit(id) {
    this.managerService.getManagerAuditByAssociateId(id).subscribe(res => {
      console.log(res)
      if (res != null) {
        console.log("data found on audit table")
        console.log(res)
        console.log("check service application id later")
        this.updateData = true;
        this.managerAuditData = res;
        this.AssociateId = this.managerAuditData.AssociateId;
        this.managerForm.patchValue(this.managerAuditData);
        this.setNewForm();
      }
      else {
        console.log("no data found on audit table");
        console.log('user doesn\'t exist on current database');
        this.appendPreviousDataToNewForm();
      }
    })
  }
  appendPreviousDataToNewForm(){
    this.updateData = false;
    this.managerForm.patchValue(this.managerData);

    setTimeout(() => {
      if (this.managerData.ZoneId != null) {
        this.filteredWoredas =
          this.woredas.filter((item) => item.ZoneId === this.managerData.ZoneId);
      }
    }, 100);

    setTimeout(() => {
      if (this.managerData.RegionId != null) {
        this.filteredZones =
          this.zones.filter((item) => item.RegionId === this.managerData.RegionId);
      }
    }, 100);
    setTimeout(() => {
      if (this.managerData.WoredaId != null) {
        this.getKebeleByWoredaId(this.managerData.Woreda);
      }
    }, 100);
  }
  setNewForm(){
    setTimeout(() => {
      if (this.managerAuditData.ZoneId != null) {
        this.filteredWoredas =
          this.woredas.filter((item) => item.ZoneId === this.managerAuditData.ZoneId);
      }
    }, 100);
    setTimeout(() => {
      if (this.managerAuditData.RegionId != null) {
        this.filteredZones = this.zones.filter((item) => item.RegionId === this.managerAuditData.RegionId);
      }
    }, 100);
    setTimeout(() => {
      if (this.managerAuditData.WoredaId != null) {
        this.getKebeleByWoredaId(this.managerAuditData.WoredaId);
      }
    }, 100);
  }
  initViewForm() {
    this.managerViewForm = this.fb.group({
      FirstName: [], FatherName: [], GrandName: [], FirstNameEng: [], FatherNameEng: [],
      GrandNameEng: [], Nationality: [], Gender: [], Title: [], Origin: [], RegionId: [],
      ZoneId: [], WoredaId: [], KebeleId: [], CellPhoneNo: [], HouseNo: [], RegularPhone: [], Fax: [],
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
      BirthDate: [''],
      Origin: [0],
      RegionId: ['', [Validators.required]],
      ZoneId: [''],
      WoredaId: ['', [Validators.required]],
      KebeleId: ['', [Validators.required]],
      CellPhoneNo: [''],
      HouseNo: ['', [Validators.required]],
      RegularPhone: [''],
      Fax: [''],
      OtherAddress: [''],
      Pobox: [''],
      Email: ['', [Validators.email]],
      Remark: [''],

    });

  }
  fileChange(data) {
    console.log(data)
  }
  onBack() {

  }
  create() {
    this.managerService.saveManagerData(this.getEditedData()).subscribe(res => {
      console.log(res)
    })
  }
  update() {
    this.managerService.updateManagerData(this.getEditedData()).subscribe(res => {
      console.log(res)
    })
  }
  getEditedData() {
    this.manager = this.managerForm.value;
    this.manager.ServiceApplicationId = (this.serviceApplicationId) ? this.serviceApplicationId : ''
    this.manager.AssociateId = (this.AssociateId) ? this.AssociateId : 0;
    this.manager.AddressId = (this.AddressId) ? this.AddressId : 0;
    this.manager.InvestorId = (this.InvestorId) ? this.InvestorId : 0;
    this.manager.ProjectId = (this.ProjectId) ? this.ProjectId : 0;
    this.manager.IsMainOffice = (this.IsMainOffice) ? this.IsMainOffice : false;
    this.manager.IsActive = (this.IsActive) ? this.IsActive : false;
    this.manager.IsNew = false;
    this.manager.Deleted = (this.Deleted) ? this.Deleted : false
    console.log(this.manager);
    return this.manager;
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

  get RegionId() {
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

  get CellPhoneNo() {
    return this.managerForm.get('CellPhoneNo');
  }

  get Fax() {
    return this.managerForm.get('Fax');
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
