import { Component, OnInit } from '@angular/core';
import { AccountService } from '@custor/services/security/account.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { CustomValidators } from '@custor/validation/custom/custom_validators';
import { Permission } from "../../../model/security/permission.model";
import { FormService } from '@custor/validation/custom/form';
import { ProjectStageModel } from '../../../model/lookupData';
import {
  ProjectStage, FormOfOwnership, ServiceTypes, AMENDMENT_STEP,
  ENG_SAVE_SUCCESS_MSG, ENG_UPDATE_SUCCESS_MSG, ENG_NOT_FOUND_MSG,
  ENG_SAVE_ERR_MSG, ENG_UPDATE_ERR_MSG,

  AMH_SAVE_SUCCESS_MSG, AMH_UPDATE_SUCCESS_MSG, AMH_NOT_FOUND_MSG,
  AMH_SAVE_ERR_MSG, AMH_UPDATE_ERR_MSG,

} from '@custor/const/consts';
import { FormOfOwnershipModel } from '../../../model/EnumModel';
import { RegionModel } from '../../../model/address/Region.model';
import { ZoneModel } from '../../../model/address/Zone.model';
import { WoredaModel } from '../../../model/address/Woreda.model';
import { KebeleModel } from '../../../model/address/Kebele.model';
import { AddressService } from '../../../Services/Address/address.service';
import { ToastrService } from 'ngx-toastr';
import { ErrorMessage } from '@custor/services/errMessageService';
import { ConfigurationService } from '@custor/services/configuration.service';
import { SiteModel } from '../../../model/Site.model';
import { SectorService } from '../../setting/category-tabs/sector/sector.service';
import { SubsectorService } from '../../setting/category-tabs/subsector/subsector.service';
import { SectorModel } from '../../../model/sector';
import { SubSectorModel } from '../../../model/subSector';
import { ActivityService } from '../../setting/category-tabs/Activity/activity.service';
import { ActivityModel } from '../../../model/activity';
import { InvactivityService } from '../../setting/category-tabs/InvActivity/invactivity.service';
import { InvActivityModel } from '../../../model/invactivity';
import { SiteService } from '../../../Services/site.service';
import { ProjectService } from '../service/project.service';
import { ServiceApplicationService } from "../service/service-application.service";
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectOfficerService } from '../service/project-officer.service';
@Component({
  selector: 'app-project-profile',
  templateUrl: './project-profile.component.html',
  styleUrls: ['./project-profile.component.scss']
})
export class ProjectProfileComponent implements OnInit {
  AllowCascading = true;
  updateData = false;
  amendment = ServiceTypes[4].ServiceId;
  projectForm: FormGroup;
  projectAmendForm: FormGroup;
  formOfOwnershipList: FormOfOwnershipModel[] = [];
  InvestorId: any;
  ServiceId: any;
  projectProfile: any;
  regions: RegionModel[] = [];
  projectStage: ProjectStageModel[] = [];
  zones: ZoneModel[] = [];
  filteredZones: ZoneModel[] = [];
  filteredViewZones: ZoneModel[] = [];
  woredas: WoredaModel[] = [];
  filteredWoredas: WoredaModel[] = [];
  filteredViewWoredas: WoredaModel[] = [];
  kebeles: KebeleModel[] = [];
  filteredKebeles: KebeleModel[] = [];
  sectorList: SectorModel[] = [];
  subSectorList: SubSectorModel[] = [];
  public filterSubSectorList: SubSectorModel[];
  public activity: ActivityModel[];
  public filterActivityLIst: ActivityModel[];
  public investmentActivity: InvActivityModel[];
  public filterInvestmentActivityList: InvActivityModel[];
  public allSiteList: SiteModel[] = [];
  public projectData: any;
  public existingServiceApplication: any;
  serviceApplicationId: any;
  currentLang: string;
  projectPostDTO: any;
  projectId: any;
  AddressId; CreatedUserId; IsMainOffice;
  IsDeleted: boolean = false;
  IsActive: boolean = false;
  serviceId: number;
  response :any;
  serviceList :any;
  constructor(private formBuilder: FormBuilder,
    private addressService: AddressService,
    private serviceApplicationApiService: ServiceApplicationService,
    private toaster: ToastrService,
    private errMsg: ErrorMessage,
    public accountServices: AccountService,
    private projectService: ProjectService,
    private sectorService: SectorService,
    public activityService: ActivityService,
    private siteService: SiteService,
    public invactivityService: InvactivityService,
    private subSectorService: SubsectorService,
    private projectOfficerService: ProjectOfficerService,
    private activatedRoute: ActivatedRoute,
    public formService: FormService, private configService: ConfigurationService) {
    this.currentLang = this.configService.language;
    this.projectId = this.activatedRoute.snapshot.params.projectId;
    this.serviceApplicationId = this.activatedRoute.snapshot.params.serviceApplicationId;
    this.serviceId = this.activatedRoute.snapshot.params.serviceId;
    if (this.serviceApplicationId == 0) {
      this.checkServiceApplication();
    }
    else{
      this.getUpdatedList();
    }
    this.initForm();
    this.initViewForm();
  }
  
  checkServiceApplication() {
    this.InvestorId = 2092;
    this.serviceApplicationApiService.checkServiceApplicationFromApi(this.InvestorId, this.amendment)
      .subscribe(result => {
        console.log(result)
        if (result != null) {
          this.existingServiceApplication = result;
          this.serviceApplicationId = this.existingServiceApplication.ServiceApplicationId;
          this.getUpdatedList();
        }
      });
  }
  getUpdatedList() {
    this.serviceApplicationApiService.getAddedServiceList(this.projectId, this.serviceApplicationId).subscribe(result => {
      console.log(result)
      if (result != null) {
        this.serviceList = result;
      }
    });
  }
  ngOnInit() {
    this.initStaticData("en");
    this.fillAddressLookups();

  }
  getProjectData(projectId) {
    this.projectService.getProjectData(projectId).subscribe(res => {
      console.log(res);

      if (res == null) {
        if (this.currentLang == 'en') {
          this.toaster.error(ENG_NOT_FOUND_MSG)
        }
        else {
          this.toaster.error(AMH_NOT_FOUND_MSG)
        }
      }
      else {
        this.projectData = res;
        this.projectForm.patchValue(this.projectData);
        console.log(this.projectData.ProjectStage)
        this.IsDeleted = this.projectData.IsDeleted;
        this.IsActive = this.projectData.IsActive;
        this.IsMainOffice = this.projectData.IsMainOffice;
        this.AddressId = this.projectData.AddressId;

        console.log(this.projectData)
        this.projectForm.controls.startViewDate.setValue((this.projectData.StartDate));
        this.projectForm.controls.EndingViewDate.setValue((this.projectData.EndingDate));
        this.projectForm.controls.operationViewDate.setValue((this.projectData.OperationDate));
        this.projectForm.controls.ProjectStage.setValue((this.projectData.ProjectStage.toString()));
        this.setViewForm();
      }
      // alert(this.serviceApplicationId)
      this.searchDataFromAudit(this.projectId, this.serviceApplicationId);
      // this.projectForm.parent();
    })
  }
  searchDataFromAudit(projectId, serviceApplicationId) {
    console.log(serviceApplicationId)
    this.projectService.getProjectAuditData(projectId, serviceApplicationId).subscribe(res => {
      console.log(res)
      if (res != null) {
        console.log("data found on audit table")
        console.log(res)
        console.log("check service application id later")
        this.projectPostDTO = res;
        this.projectAmendForm.patchValue(res);
        this.projectAmendForm.controls.ProjectStage.setValue((this.projectPostDTO.ProjectStage.toString()));
        this.projectAmendForm.controls.ActivityId.setValue(this.projectPostDTO.Activity.ActivityId);
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
  setNewForm() {
    console.log(this.projectPostDTO)
    setTimeout(() => {
      if (this.projectPostDTO.ZoneId != null) {
        this.filteredWoredas =
          this.woredas.filter((item) => item.ZoneId === this.projectPostDTO.ZoneId);
      }
    }, 100);
    setTimeout(() => {
      if (this.projectPostDTO.RegionId != null) {
        this.filteredZones = this.zones.filter((item) => item.RegionId === this.projectPostDTO.RegionId);
      }
    }, 100);
  }
  setViewForm() {

  }
  create() {
    console.log("create");
    console.log(this.getEditedData());
    this.projectService.saveProjectData(this.getEditedData()).subscribe(res => {
      console.log(res)
      if (res) {
        this.updateData = true;
        this.response = res;
        this.serviceApplicationId = this.response.ServiceApplicationId
        if (this.currentLang == 'en') {
          this.toaster.success(ENG_SAVE_SUCCESS_MSG)
        }
        else {
          this.toaster.success(AMH_SAVE_SUCCESS_MSG)
        }
      }
      else {
        if (this.currentLang == 'en') {
          this.toaster.success(ENG_SAVE_ERR_MSG)
        }
        else {
          this.toaster.success(AMH_SAVE_ERR_MSG)
        }
      }

    })
  }
  update() {
    this.projectService.updateProjectData(this.getEditedData()).subscribe(res => {
      if (res) {
        if (this.currentLang == 'en') {
          this.toaster.success(ENG_UPDATE_SUCCESS_MSG)
        }
        else {
          this.toaster.success(AMH_UPDATE_SUCCESS_MSG)
        }
      }
      else {
        if (this.currentLang == 'en') {
          this.toaster.success(ENG_UPDATE_ERR_MSG)
        }
        else {
          this.toaster.success(AMH_SAVE_ERR_MSG)
        }
      }
    })
  }
  getEditedData() {
    this.projectProfile = this.projectAmendForm.value;
    this.projectProfile.ProjectId = this.projectId;
    this.projectProfile.InvestorId = (this.InvestorId) ? this.InvestorId : 0;
    this.projectProfile.AddressId = (this.AddressId) ? this.AddressId : 0;
    this.projectProfile.IsActive = (this.IsActive) ? this.IsActive : true;
    this.projectProfile.IsDeleted = (this.IsDeleted) ? this.IsDeleted : false;
    this.projectProfile.IsMainOffice = (this.IsMainOffice) ? this.IsMainOffice : false;
    this.projectProfile.CurrentStep = AMENDMENT_STEP[1].Step;
    this.projectProfile.ServiceId =this.amendment;
    if (this.serviceApplicationId == 0) {
      this.projectProfile.ServiceApplicationId = null
    }
    else {
      this.projectProfile.ServiceApplicationId = this.serviceApplicationId;
    }
    return this.projectProfile;
  }

  appendPreviousDataToNewForm() {
    console.log('no data in new database');
    console.log(this.projectData)
    console.log(this.projectData.RegionId)
    this.updateData = false;
    this.projectAmendForm.patchValue(this.projectData);
    this.projectAmendForm.controls.ProjectStage.setValue((this.projectData.ProjectStage.toString()));
    this.projectAmendForm.controls.RegionId.setValue(this.projectData.RegionId)
    this.projectAmendForm.controls.SectorId.setValue(this.projectData.SectorId);
    this.projectAmendForm.controls.SubSectorId.setValue(this.projectData.SubSectorId);
    this.projectAmendForm.controls.ActivityId.setValue(this.projectData.Activity.ActivityId);
    this.projectAmendForm.controls.InvActivityId.setValue(this.projectData.InvActivityId);
    setTimeout(() => {
      if (this.projectData.RegionId != null) {
        this.filteredZones = this.zones.filter((item) => item.RegionId === this.projectData.RegionId);
        console.log(this.filteredZones)
      }
    }, 100);
  }
  fillAddressLookups() {
    this.getRegions();
    this.getAllZones();
    // // this.getAllWoredas();
    this.getAllSector();
    this.getAllSubSector();
    this.getAllActivityService();
    this.getAllInvestmentActivity();
    this.getAllSite();
  }
  private getAllSite() {
    this.siteService.getAll()
      .subscribe(result => {
        this.filterOnlineUser(result);
      });

  }
  private filterOnlineUser(result: SiteModel[]) {
    this.allSiteList = result.filter((item) => {
      return item.SiteCode !== 'OnlineSite';
    });
  }
  getAllSector() {
    console.log(this.currentLang);
    this.sectorService.getSectors(this.currentLang)
      .subscribe(result => {
        this.sectorList = result;
      },
        error => this.toaster.error(this.errMsg.getError(error)
        ));
  }
  getAllActivityService() {
    this.activityService.getActivitys(this.currentLang)
      .subscribe(result => {
        this.activity = result;
        this.filterActivityLIst = result;
      }, error => this.toaster.error(this.errMsg.getError(error)));
  }

  getAllInvestmentActivity() {
    this.invactivityService.getInActivitys(this.currentLang)
      .subscribe(result => {
        if (this.projectId) {
          this.getProjectData(this.projectId);
        }
        this.investmentActivity = result;
        this.filterInvestmentActivityList = result;
      }, error => this.toaster.error(this.errMsg.getError(error)));
  }
  getAllSubSector() {
    this.subSectorService.getSubSectors(this.currentLang)
      .subscribe(result => {
        this.subSectorList = result;
        this.filterSubSectorList = result;
      },
        error => this.toaster.error(this.errMsg.getError(error)));
  }
  filterSubSector(SubSecId: string) {
    if (!SubSecId) {
      return;
    }
    this.filterActivityLIst = null;
    this.filterSubSectorList = this.subSectorList.filter((item) => {
      return item.SectorId == SubSecId;
    });
  }
  filterActivity(activityId: number) {
    if (!activityId) {
      return;
    }

    this.filterActivityLIst = this.activity.filter((item) => {
      return item.SubSectorId === activityId;
    });
  }

  
  getRegions() {
    this.addressService.getRegions()
      .subscribe(result => {
        this.regions = result;
      },
        error => this.toaster.error(this.errMsg.getError(error)));
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
  initStaticData(currentLang) {
    let formOfOwnership: FormOfOwnershipModel = new FormOfOwnershipModel();
    FormOfOwnership.forEach(pair => {
      formOfOwnership = {
        'Id': pair.Id.toString(),
        'Desc': (currentLang === 'am' ? pair.Description : pair.DescriptionEng)
      };
      this.formOfOwnershipList.push(formOfOwnership);
    });

    let projectSage: ProjectStageModel = new ProjectStageModel();
    ProjectStage.forEach(pair => {
      projectSage = {
        Id: pair.Id.toString(),
        DescriptionEnglish: pair.DescriptionEnglish,
        Description: pair.Description
      };
      this.projectStage.push(projectSage);
    });
  }
  IsOromiaRegion() {

  }
  filterInvestmentActivity(InvActivityId: number) {
    if (!InvActivityId) {
      return;
    }
    this.filterInvestmentActivityList = this.investmentActivity.filter((item) => {
      return item.ActivityId === InvActivityId;
    });
  }

  approve() {

    this.projectOfficerService.approveProjectProfile(this.getEditedData()).subscribe(res => {
      console.log(res)
    })
  }
  initViewForm() {
    this.projectForm = this.formBuilder.group({
      ProjectName: [], ProjectStage: [], startViewDate: [], EndingViewDate: [],
      operationViewDate: [], EnvironmentalImpact: [], ProjectDescription: [], RegionId: [],
      ZoneId: [], WoredaId: [], WoredaEngId: [], KebeleId: [], KebeleEngId: [],
      SpecificAreaName: [], IsIndustrialPark: [], IndustrialParkId: [], IsOromiaSpecialZone: [],
      InvActivityId: [], ActivityId: [], SubSectorId: [], SectorId: [],
    });
    this.projectForm.disable();
  }
  initForm() {
    // console.log(this.ServiceId);

    this.projectAmendForm = this.formBuilder.group({
      ProjectName: ['', Validators.compose([Validators.required,
      CustomValidators.validateCharacters, Validators.minLength(2)])],
      InvestorId: [this.InvestorId],
      ServiceId: [this.ServiceId],
      ParentProjectId: ['0'],
      CreatedUserName: this.accountServices.currentUser.UserName,
      ProjectDescription: ['', [Validators.required,Validators.minLength(2)]],
      StartDate: ['', [Validators.required]],
      OperationDate: ['', Validators.required],
      SectorId: [''],
      SubSectorId: [''],
      ActivityId: [''],
      IsOromiaSpecialZone: [''],
      InvActivityId: [''],
      EndingDate: ['', Validators.required],
      IsSelfService: [false],
      EnvironmentalImpact: ['', [Validators.minLength(2)]],
      AssignedUserId: [],
      CreatedUserId: [],
      ProjectStage: ['', Validators.required],
      InvestmentPermitNo: [''],
      RegionId: [''],
      ZoneId: [''],
      WoredaId: [''],
      WoredaEngId: [''],
      KebeleId: [''],
      KebeleEngId: [''],
      SpecificAreaName: [''],
      IsIndustrialPark: [''],
      IndustrialParkId: [''],
      Remark: [''],
      // 'address': new FormGroup({
      //   ParentId: new FormControl(),
      //   RegionId: new FormControl(),
      //   ZoneId: new FormControl(),
      //   WoredaId: new FormControl(),
      //   WoredaEngId: new FormControl(),
      //   KebeleId: new FormControl(),
      //   KebeleEngId: new FormControl(),
      //   SpecificAreaName: new FormControl(),
      //   IsIndustrialPark: new FormControl(),
      //   IndustrialParkId: new FormControl(),
      //   Remark: new FormControl()
      // })
    });
  }
  
  get ProjectName() {
    return this.projectAmendForm.get('ProjectName');
  }
  get ProjectDescription() {
    return this.projectAmendForm.get('ProjectDescription');
  }
  get StartDate() {
    return this.projectAmendForm.get('StartDate');
  }
  get OperationDate() {
    return this.projectAmendForm.get('OperationDate');
  }
  get EndingDate() {
    return this.projectAmendForm.get('EndingDate');
  }
  get EnvironmentalImpact() {
    return this.projectAmendForm.get('EnvironmentalImpact');
  }
  get ProjectStage() {
    return this.projectAmendForm.get('ProjectStage');
  }
  get RegionId() {
    return this.projectAmendForm.get('RegionId');
  }
  get ZoneId() {
    return this.projectAmendForm.get('ZoneId');
  }
  get WoredaId() {
    return this.projectAmendForm.get('WoredaId');
  }
  get KebeleId() {
    return this.projectAmendForm.get('KebeleId');
  }
  get WoredaEngId() {
    return this.projectAmendForm.get('WoredaEngId');
  }
  get KebeleEngId() {
    return this.projectAmendForm.get('KebeleEngId');
  }

}
