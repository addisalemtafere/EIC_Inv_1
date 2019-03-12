import {AfterContentChecked, Component, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {ProjectModel} from '../../../model/Project.model';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectProfileService} from '../../../Services/project-profile.service';
import {AddressModel} from '../../../model/address/Address.model';
import {AddressService} from '../../../Services/Address/address.service';
import {RegionModel} from '../../../model/address/Region.model';
import {ZoneModel} from '../../../model/address/Zone.model';
import {WoredaModel} from '../../../model/address/Woreda.model';
import {KebeleModel} from '../../../model/address/Kebele.model';
import {ToastrService} from 'ngx-toastr';
import {SiteService} from '../../../Services/site.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormOfOwnershipModel} from '../../../model/EnumModel';
import {DataSharingService} from '../../../Services/data-sharing.service';
import {ActivityService} from '../../setting/category-tabs/Activity/activity.service';
import {ActivityModel} from '../../../model/activity';
import {InvactivityService} from '../../setting/category-tabs/InvActivity/invactivity.service';
import {InvActivityModel} from '../../../model/invactivity';
import {ErrorMessage} from '@custor/services/errMessageService';
import {FormService} from '@custor/validation/custom/form';
import {CustomValidators} from '@custor/validation/custom/custom_validators';
import {FormOfOwnership, ProjectStage} from '@custor/const/consts';
import {InvestorService} from '../../investor/investor.service';
import {UserActivityDataServices} from '../../../admin/user-detail/user-detail.service';
import {AccountService} from '@custor/services/security/account.service';
import {SiteModel} from '../../../model/Site.model';
import {SectorService} from '../../setting/category-tabs/sector/sector.service';
import {SubsectorService} from '../../setting/category-tabs/subsector/subsector.service';
import {SectorModel} from '../../../model/sector';
import {SubSectorModel} from '../../../model/subSector';
import {Permission} from "../../../model/security/permission.model";
import {ProjectStageModel} from "../../../model/lookupData";

@Component({
  selector: 'app-project-profile-form',
  templateUrl: './project-profile-form.component.html',
  styleUrls: ['./project-profile-form.component.css']
})
export class ProjectProfileFormComponent implements OnInit, AfterContentChecked {
  @ViewChild('costF') costForm: NgForm;
  formOfOwnershipList: FormOfOwnershipModel[] = [];
  subscription: Subscription;
  serviceIdSubscription: Subscription;
  public IsOromia: boolean = false;
  editMode = false;
  loading = false;
  project: ProjectModel;
  address: AddressModel;
  projectId: any;
  projectIdEditing: number;
  addressId: number;
  sectorList: SectorModel[] = [];
  subSectorList: SubSectorModel[] = [];
  regions: RegionModel[] = [];
  zones: ZoneModel[] = [];
  filteredZones: ZoneModel[] = [];
  woredas: WoredaModel[] = [];
  filteredWoredas: WoredaModel[] = [];
  kebeles: KebeleModel[] = [];
  filteredKebeles: KebeleModel[] = [];
  projectStage: ProjectStageModel[] = [];

  public formErrors = {
    ProjectName: 'at least three characters!',
    ProjectDescription: '',
    StartDate: '',
    OperationDate: '',
    EndingDate: '',
    Sector: '',
    SubSector: '',
    Region: '',
    Zone: '',
    Woreda: '',
    Kebele: '',
    SpecificAreaName: '',
    Remark: '',
    EnvironmentalImpact: '',
    IndustrialParkId: '',
    ProjectStage: ''
  };

  minDate: Date;
  initMinDate: Date;
  maxDate: Date;
  projectForm: FormGroup;
  private addressList: AddressModel;
  public activity: ActivityModel[];
  public filterActivityLIst: ActivityModel[];

  public investmentActivity: InvActivityModel[];
  public filterInvestmentActivityList: InvActivityModel[];
  public filterSubSectorList: SubSectorModel[];
  public allSiteList: SiteModel[] = [];
  private ServiceId: any;
  private InvestorId: any;
  private workFlowId: any;
  private ServiceApplicationId: any;


  constructor(private route: ActivatedRoute,
              private accountService: AccountService,
              private router: Router,
              public activityDataServices: UserActivityDataServices,
              public accountServices: AccountService,
              private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private projectProfileService: ProjectProfileService,
              private addressService: AddressService,
              private investorService: InvestorService,
              private errMsg: ErrorMessage,
              private sectorService: SectorService,
              private subSectorService: SubsectorService,
              private siteService: SiteService,
              public formService: FormService,
              public snackbar: MatSnackBar,
              public activityService: ActivityService,
              public invactivityService: InvactivityService,
              private dataSharing: DataSharingService) {
    // this.project = <ProjectModel>{};
    // this.address = <AddressModel>{};
  }

  setMinDate(minD: Date) {
    this.minDate = minD;
  }

  setMaxDate(value: Date) {
    this.maxDate = value;
  }

  updateDateRange() {
    const today = new Date();
    let mm1, dd1;
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    if (dd < 10) {
      dd1 = '0' + dd;
    }
    if (mm < 10) {
      mm1 = '0' + mm;
    }
    const today1 = mm1 + '/' + dd1 + '/' + yyyy;
    this.initMinDate = new Date(today);
    if (this.projectForm.value.OperationDate !== null) {
      this.minDate = this.projectForm.value.OperationDate;
    }
  }

  ngOnInit() {
    this.ServiceId = this.route.snapshot.params['ServiceId'];
    this.InvestorId = this.route.snapshot.params['InvestorId'];
    this.workFlowId = this.route.snapshot.params['workFlowId'];
    this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
    this.projectId = this.route.snapshot.params['ProjectId'];

    this.fillAddressLookups();
    this.formBuild();
    this.updateDateRange();
    this.initStaticData('en');
    if (this.projectId > 1) {
      this.getProjectDetail();
      this.editMode = true;
    } else {
      this.editMode = false;
    }
  }

  getProjectDetail() {
    this.projectProfileService
      .getOneById(this.projectId)
      .subscribe(project => {
        if (localStorage.getItem('ParentProjectId') === null) {
          this.editMode = true;
          this.projectIdEditing = project.ProjectId;
        }
        this.projectForm.patchValue(project);
        this.getAddressData(project.ProjectId);
      }, error => this.errMsg.getError(error));
  }

  getAddressData(parent: number) {
    this.addressService.getAddress(parent)
      .subscribe((result: AddressModel) => {
        this.addressList = result;
        this.getKebeleByWoredaId(result.WoredaId);
        this.addressId = result.AddressId;
        this.projectForm.get('address').patchValue(result);
      }, error => this.errMsg.getError(error));
  }


  fillAddressLookups() {
    this.loading = true;
    this.getRegions();
    this.getAllZones();
    this.getAllWoredas();
    this.getAllSector();
    this.getAllSubSector();
    this.getAllActivityService();
    this.getAllInvestmentActivity();
    this.getAllSite();
  }

  getAllSector() {
    this.sectorService.getSectors()
      .subscribe(result => {
          this.sectorList = result;
        },
        error => this.toastr.error(this.errMsg.getError(error)
        ));
  }

  getAllSubSector() {
    this.subSectorService.getSubSectors()
      .subscribe(result => {
          this.subSectorList = result;
          this.filterSubSectorList = result;
        },
        error => this.toastr.error(this.errMsg.getError(error)));
  }

  getAllActivityService() {
    this.activityService.getActivitys()
      .subscribe(result => {
        this.activity = result;
        this.filterActivityLIst = result;
      }, error => this.toastr.error(this.errMsg.getError(error)));
  }

  getAllInvestmentActivity() {
    this.invactivityService.getInActivitys()
      .subscribe(result => {
        this.investmentActivity = result;
        this.filterInvestmentActivityList = result;
      }, error => this.toastr.error(this.errMsg.getError(error)));
  }

  getRegions() {
    this.addressService.getRegions()
      .subscribe(result => {
          this.regions = result;
        },
        error => this.toastr.error(this.errMsg.getError(error)));
  }

  getAllZones() {
    this.addressService.getAllZones()
      .subscribe(result => {
          this.zones = result;
          this.filteredZones = result;
        },
        error => this.toastr.error(this.errMsg.getError(error)));
  }

  getAllWoredas() {
    this.addressService.getAllWoredas()
      .subscribe(result => {
          this.woredas = result;
          this.filteredWoredas = result;
        },
        error => this.toastr.error(this.errMsg.getError(error)));
  }

  getKebeleByWoredaId(wordaId: any) {
    this.addressService.getKebelesByWoreda(wordaId)
      .subscribe(result => {
        this.kebeles = result;
        this.loading = false;
        this.filteredKebeles = result;
      });
  }

  filterRegion(regionCode: number) {
    if (!regionCode) {
      return;
    }
    if (regionCode == 4) {
      this.IsOromia = true;
    }
    else {
      this.IsOromia = false;
    }
    this.filteredZones = null;
    this.filteredKebeles = null;
    this.filteredWoredas = null;
    this.filteredZones = this.zones.filter((item) => {
      return item.RegionId === regionCode.toString();
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

  filterInvestmentActivity(InvActivityId: number) {
    if (!InvActivityId) {
      return;
    }
    // console.log(this.investmentActivity);
    this.filterInvestmentActivityList = this.investmentActivity.filter((item) => {
      return item.ActivityId === InvActivityId;
    });
  }

  onSubmit() {
    this.loading = true;
    this.formService.markFormGroupTouched(this.projectForm);
    if (this.projectForm.valid) {
      if (!this.editMode) {
        this.projectProfileService.create(this.projectForm.value)
          .subscribe(result => {
            this.projectId = result.ProjectId;
            // localStorage.setItem('ProjectId', this.projectId);
            // this.router.navigate(['pro/', this.projectId]);
            // localStorage.setItem('workFlowId', result.ServiceApplication[0].ServiceWorkflow[0].ServiceWorkflowId);
            // localStorage.setItem('ServiceApplicationId', result.ServiceApplication[0].ServiceApplicationId);

            this.router.navigate(['pro/' + this.projectId + '/' + result.ServiceApplication[0].ServiceApplicationId + '/' + this.ServiceId + '/' + result.ServiceApplication[0].ServiceWorkflow[0].ServiceWorkflowId + '/' + this.InvestorId]);
            this.notification('project  saved');
            this.saveAddress();
          });
      } else {
        this.projectProfileService.update(this.projectForm.value, this.projectIdEditing)
          .subscribe(result => {
            this.projectId = result.ProjectId;

            this.notification('project updated');
            this.saveAddress();
          });
      }
    } else {
      this.formErrors = this.formService.validateForm(this.projectForm, this.formErrors, false);
    }
  }


  saveAddress() {
    this.projectForm.get('address').patchValue({
      ParentId: this.projectId
    });
    if (this.editMode && typeof (this.addressId) !== 'undefined') {
      this.addressService.updateAddress(this.projectForm.get('address').value, this.addressId)
        .subscribe(result => {
          this.notification('address updated');
        });
    } else {
      console.log(this.projectForm.get('address').value);
      this.addressService.saveAddress(this.projectForm.get('address').value)
        .subscribe(result => {
          setTimeout(() => this.dataSharing.projectId.next(this.projectId), 0);
          this.notification('address saved');
          setTimeout(() => this.dataSharing.steeperIndex.next(2), 0);
          setTimeout(() => this.dataSharing.currentIndex.next(2), 0);
        });
    }
  }

  formBuild() {
    console.log(this.ServiceId);
    this.projectForm = this.formBuilder.group({
      ProjectName: ['', Validators.compose([Validators.required,
        CustomValidators.validateCharacters, Validators.minLength(2)])],
      InvestorId: [this.InvestorId],
      ServiceId: [this.ServiceId],
      ParentProjectId: ['0'],
      CreatedUserName: this.accountServices.currentUser.UserName,
      ProjectDescription: ['', [Validators.required, Validators.minLength(2)]],
      StartDate: ['', [Validators.required]],
      OperationDate: ['', Validators.required],
      SectorId: [''],
      SubSectorId: [''],
      ActivityId: [''],
      IsOromiaSpecialZone: [''],
      InvActivityId: [''],
      EndingDate: ['', Validators.required],
      IsSelfService: [false],
      EnvironmentalImpact: ['', [Validators.required, Validators.minLength(2)]],
      AssignedUserId: [this.accountService.currentUser.Id],
      CreatedUserId: [this.accountService.currentUser.Id],
      ProjectStage: ['', Validators.required],
      InvestmentPermitNo: [''],
      'address': new FormGroup({
        ParentId: new FormControl(),
        RegionId: new FormControl(),
        ZoneId: new FormControl(),
        WoredaId: new FormControl(),
        KebeleId: new FormControl(),
        SpecificAreaName: new FormControl(),
        IsIndustrialPark: new FormControl(),
        IndustrialParkId: new FormControl(),
        Remark: new FormControl()
      })
    });

    this.projectForm.valueChanges.subscribe((data) => {
      this.formErrors = this.formService.validateForm(this.projectForm, this.formErrors, true);
    });


    if (this.canViewTasks) {
      this.projectForm.patchValue({
        IsSelfService: true
      })
    }
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
        'Id': pair.Id.toString(), 'DescriptionEnglish': pair.DescriptionEnglish,
        'Description': pair.Description
      };
      this.projectStage.push(projectSage);
    });
  }

  notification(message: string) {
    this.loading = false;
    this.toastr.success(` Succesfully ${message} Data.!`, 'Success');

  }

  ngAfterContentChecked(): void {
    this.projectForm.patchValue({
      ServiceId: this.ServiceId
    });
    if (this.ServiceId == 1023 && !this.editMode) {
      this.projectForm.patchValue({
        ParentProjectId: localStorage.getItem('ParentProjectId')
      });
    }
  }

  next() {
    this.dataSharing.steeperIndex.next(2);

  }

  private getAllSite() {
    this.siteService.getAll()
      .subscribe(result => {
        this.filterOnlineUser(result);
      });

  }

  getIsChecked() {
    return this.projectForm.get('address').get('IsIndustrialPark').value;
  }

  get canViewTasks() {
    return this.accountService.userHasPermission(Permission.viewServiceList);
  }

  IsOromiaRegion() {
    return this.IsOromia;
  }

  private filterOnlineUser(result: SiteModel[]) {
    this.allSiteList = result.filter((item) => {
      return item.SiteCode !== 'OnlineSite';
    });
  }
}
