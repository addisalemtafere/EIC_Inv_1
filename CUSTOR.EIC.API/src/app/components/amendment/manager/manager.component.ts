import { Component, OnInit } from '@angular/core';
import { determineId } from '@custor/helpers/compare';
import { ManagerService } from '../service/manager.service';
import { ServiceApplicationService } from "../service/service-application.service";
import { AssociateModel } from "../../../model/associate.model";
import { ServiceTypes } from "@custor/const/consts";
import { ConfigurationService } from '@custor/services/configuration.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NUMERIC_REGEX, ALPHABET_WITHSPACE_REGEX, ET_ALPHABET_WITHSPACE_REGEX, GENDERS, LOOK_UP_TYPES} from '../../../const/consts';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from '../../../Services/Address/address.service';
import { LookUpService } from '../../../Services/look-up.service';
import DateTimeFormat = Intl.DateTimeFormat;
import { LookupsModel } from '../../../model/lookups';
import { RegionModel } from '../../../model/address/Region.model';
import { ZoneModel } from '../../../model/address/Zone.model';
import { WoredaModel } from '../../../model/address/Woreda.model';
import { KebeleModel } from '../../../model/address/Kebele.model';
import { Gender, LegalStatus, Lookup } from '../../../model/lookupData';
import { NationalityModel } from '../../../model/address/NationalityModel';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {
  currentLang: string;
  amendment = ServiceTypes[4].ServiceId;
  managerForm: FormGroup;
  id:any;
  serviceApplicationId :any;
  Deleted:boolean;
  IsActive:boolean;
  ProjectId:any;
  InvestorId;
  manager:any;
  public TitleLookup: LookupsModel[];
  public filteredZones: ZoneModel[] = [];
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
  AllowCascading:boolean = true;
  public nationList: NationalityModel[];
  isManagerCreate: boolean = false;
  isManagerUpdate :boolean = false;
  managerAuditData:any;
  serviceApplicationExists: boolean = false;
  existingServiceApplication: any;
  constructor(private serviceApplicationApiService: ServiceApplicationService,
    private managerService: ManagerService,
    private fb: FormBuilder,
    private addressService: AddressService,
    private lookUpService: LookUpService,
    private activatedRoute: ActivatedRoute,
    private configService: ConfigurationService) {
    this.currentLang = this.configService.language;
    this.initForm();
     }
  initForm() {
    this.managerForm = this.fb.group({
      FirstName: ['', [Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(100),
        Validators.pattern(ET_ALPHABET_WITHSPACE_REGEX)])]],
      FatherName: ['', [Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(100),
        Validators.pattern(ET_ALPHABET_WITHSPACE_REGEX)])]],
      GrandName: ['', [Validators.compose([Validators.minLength(2), Validators.maxLength(100),
        Validators.pattern(ET_ALPHABET_WITHSPACE_REGEX)])]],
      FirstNameEng: ['', [Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(100),
        Validators.pattern(ALPHABET_WITHSPACE_REGEX)])]],
      FatherNameEng: ['', [Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(100),
        Validators.pattern(ALPHABET_WITHSPACE_REGEX)])]],
      GrandNameEng: ['', [Validators.required,Validators.compose([Validators.minLength(2), Validators.maxLength(100),
        Validators.pattern(ALPHABET_WITHSPACE_REGEX)])]],
      Nationality: ['', [Validators.required]],
    //  BirthDate: [DateTimeFormat, [Validators.required]], // Ethiopian
      Gender: [0, [Validators.required]],
      Title: ['01', [Validators.required]],
      Origin: ['0'],
      RegionId: ['', [Validators.required]],
      ZoneId: ['', [Validators.required]],
      WoredaId: ['', [Validators.required]],
      KebeleId: ['', [Validators.required]],
      CellPhoneNo: ['', [Validators.required, Validators.pattern(NUMERIC_REGEX), Validators.minLength(10), Validators.maxLength(10)]],
      HouseNo: ['', [Validators.required]],
      RegularPhone: ['', [Validators.pattern(NUMERIC_REGEX), Validators.minLength(10), Validators.maxLength(10)]],
      FaxNo: ['', [Validators.pattern(NUMERIC_REGEX), Validators.minLength(10), Validators.maxLength(10)]],
      OtherAddress: [''],
      Pobox: [''],
      Email: ['', [Validators.email]],
      Remark: [''],

    });
  }
  ngOnInit() {
    this.InvestorId = 2092;
    this.fillAddressLookups();
    this.id = this.activatedRoute.snapshot.params.id;
    if (this.id == 0) {
      console.log("add manager")
      this.isManagerCreate = true;
    }
    else{
      console.log("edit manager")
      this.isManagerUpdate= true;
      this.getManagerData(this.id)
    }
    this.checkServiceApplication(this.InvestorId)
  }
  getManagerData(id){
    console.log("##################")
    console.log(id)
    console.log("##################");
    this.managerService.getNewManagerById(id).subscribe(res => {
      console.log(res)
      if (res != null) {
        this.managerAuditData= res;
        this.managerForm.patchValue(res);
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
      else{
        console.log("no manager by this id found");
      }
    })
  }
  fillAddressLookups() {
    this.getTitles();
    this.getRegions();
    this.getAllZones();
    this.getAllWoredas();
    this.initStaticData(this.currentLang);
    this.getAllNations();
  }
  getTitles() {
    this.lookUpService.getLookupByParentId(LOOK_UP_TYPES.TITLES, this.currentLang).subscribe(result => {
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
    this.addressService.getAllZonesByLang(this.currentLang)
      .subscribe(z => {
        this.zones = z;
        if (this.zones) {
          this.filterRegion('');
        }
      });
  }
  filterRegion(regionCode: string) {
    console.log(regionCode)
    console.log(this.AllowCascading)
    // console.log(this.zones)
    if (!regionCode || !this.AllowCascading) {
      return;
    }
    this.filteredKebeles = null;
    this.filteredWoredas = null;
    if (!this.zones) {
      return;
    }
    // for(var i=0 ; i < this.zones.length; i++){
    //    if(this.zones[i].RegionId == regionCode){
    //      console.log(this.zones[i]);
    //    }
    // }
    this.filteredZones = this.zones.filter((item) => {
      return item.RegionId == regionCode;
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

  getAllWoredas() {
    this.addressService.getAllWoredasByLang(this.currentLang)
      .subscribe(result => {
        this.woredas = result;
       // this.getDataFromApi(this.id);
        const id = 2092;
        if (id) {
        //  this.getServiceApplicationBy(id);
        }
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
  initStaticData(currentLang) {
    let gender: Gender = new Gender();
    GENDERS.forEach(pair => {
      gender = { Id: pair.Id.toString(), Desc: (currentLang === 'et' ? pair.Description : pair.DescriptionEnglish) };
      this.genders.push(gender);
    });

  }
  private getAllNations() {
    this.addressService.getNationality(this.currentLang)
      .subscribe(result => {
        this.nationList = result;
      });
  }
  checkServiceApplication(investorId) {
    this.serviceApplicationApiService.checkServiceApplicationFromApi(investorId, this.amendment)
      .subscribe(result => {
        if (result) {
          this.existingServiceApplication = result;
          this.serviceApplicationId = this.existingServiceApplication.ServiceApplicationId;
          this.serviceApplicationExists = true;
          //this.getManagerFromAudit(investorId);
        }
      })
    //this.getManager(investorId);

  }
  getManagerFromAudit(investorId){
    console.log(investorId)
    this.managerService.getManagerAuditByInvestorId(investorId)
      .subscribe(result => {
        console.log(result);
      })
  }
  getManager(investorId){
    this.managerService.getManagerByInvestorId(investorId)
      .subscribe(result => {
        console.log(result);
      })
  }
  get FirstName() {
    return this.managerForm.get('FirstName');
  }

  get FatherName() {
    return this.managerForm.get('FatherName');
  }

  get Title() {
    return this.managerForm.get('Title');
  }

  get GrandName() {
    return this.managerForm.get('GrandName');
  }

  get FirstNameEng() {
    return this.managerForm.get('FirstNameEng');
  }

  get FatherNameEng() {
    return this.managerForm.get('FatherNameEng');
  }

  get GrandNameEng() {
    return this.managerForm.get('GrandNameEng');
  }

  get birthDate() {
    return this.managerForm.get('BirthDate');
  }

  get Nationality() {
    return this.managerForm.get('Nationality');
  }

 get Gender() {
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

  get fax() {
    return this.managerForm.get('FaxNo');
  }

  get Pobox() {
    return this.managerForm.get('Pobox');
  }


  get Email() {
    return this.managerForm.get('Email');
  }

  get houseNo() {
    return this.managerForm.get('HouseNo');
  }
  compareIds(id1: any, id2: any): boolean {
    const a1 = determineId(id1);
    const a2 = determineId(id2);
    return a1 === a2;
  }
  create(){
    console.log("this is create")
    this.managerService.saveManagerData(this.getEditedData()).subscribe(res => {
      console.log(res)
    })
  }
  getEditedData(){
    this.manager = this.managerForm.value;
    this.manager.ServiceApplicationId = (this.serviceApplicationId) ? this.serviceApplicationId : ''
    this.manager.ProjectId = (this.ProjectId) ? this.ProjectId : 0;
    this.manager.IsActive = (this.IsActive) ? this.IsActive : false;
    this.manager.Deleted = (this.Deleted) ? this.Deleted : false;
    this.manager.IsMainOffice = false;
    this.manager.IsNew = true;
    this.manager.InvestorId= this.InvestorId;
    console.log(this.manager);
    return this.manager;
  }
  update(){
    this.managerService.updateManagerData(this.getEditedData()).subscribe(res => {
      console.log(res)
    })
  }
  back(){
    console.log("back")
  }

  // another getter for easy access to form fields
  get ct() {
    return this.managerForm.controls;
  }

}
