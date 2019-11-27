import { AfterContentChecked, Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectModel } from '../../../model/Project.model';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectProfileService } from '../../../Services/project-profile.service';
import { AddressModel } from '../../../model/address/Address.model';
import { AddressService } from '../../../Services/Address/address.service';
import { RegionModel } from '../../../model/address/Region.model';
import { ZoneModel } from '../../../model/address/Zone.model';
import { WoredaModel } from '../../../model/address/Woreda.model';
import { KebeleModel } from '../../../model/address/Kebele.model';
import { ToastrService } from 'ngx-toastr';
import { SiteService } from '../../../Services/site.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormOfOwnershipModel } from '../../../model/EnumModel';
import { DataSharingService } from '../../../Services/data-sharing.service';
import { ActivityService } from '../../setting/category-tabs/Activity/activity.service';
import { ActivityModel } from '../../../model/activity';
import { InvactivityService } from '../../setting/category-tabs/InvActivity/invactivity.service';
import { InvActivityModel } from '../../../model/invactivity';
import { ErrorMessage } from '@custor/services/errMessageService';
import { FormService } from '@custor/validation/custom/form';
import { CustomValidators } from '@custor/validation/custom/custom_validators';
import { FormOfOwnership, ProjectStage } from '@custor/const/consts';
import { InvestorService } from '../../investor/investor.service';
import { UserActivityDataServices } from '../../../admin/user-detail/user-detail.service';
import { AccountService } from '@custor/services/security/account.service';
import { SiteModel } from '../../../model/Site.model';
import { SectorService } from '../../setting/category-tabs/sector/sector.service';
import { SubsectorService } from '../../setting/category-tabs/subsector/subsector.service';
import { SectorModel } from '../../../model/sector';
import { SubSectorModel } from '../../../model/subSector';
import { Permission } from '../../../model/security/permission.model';
import { ProjectStageModel } from '../../../model/lookupData';
import { ProjectRenewalModel } from '../../../model/ProjectRenewal.model';
import { ProjectRenewalService } from '../../../Services/project-renewal.service';
import { ConfigurationService } from '@custor/services/configuration.service';
import { ServiceEnum } from '../../../enum/enums';
import { ET_ALPHABET_REGEX } from '../../../const/consts';

@Component({
  selector: 'app-project-profile-form',
  templateUrl: './project-profile-form.component.html',
  styleUrls: ['./project-profile-form.component.css'],
  providers: [ConfigurationService]
})
export class ProjectProfileFormComponent implements OnInit, AfterContentChecked {
  // @ViewChild('stepper') stepper: MatStepper;
  @ViewChild('costF') costForm: NgForm;
  formOfOwnershipList: FormOfOwnershipModel[] = [];
  subscription: Subscription;
  public validateStart: boolean;
  public validateOperation: boolean;
  serviceIdSubscription: Subscription;
  public IsOromia = false;
  editMode = false;
  loading = false;
  date: any;
  public today: Date;
  public dateGc: Date;
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
  approve: ProjectRenewalModel;
  public formErrors = {
    // EnvironmentalImpact: 'Enter Description in between 2 - 100 characters!',
    ProjectName: 'at least three characters!',
    ProjectDescription: 'Enter Description in between 2 - 100 characters!',
    StartDate: 'Enter a Valid Date!',
    OperationDate: 'Enter a Valid Date!',
    EndingDate: 'Enter a Valid Date!',
    Sector: '',
    SubSector: '',
    Region: '',
    Zone: '',
    Woreda: '',
    WoredaEng: '',
    Kebele: '',
    KebeleEng: '',
    SpecificAreaName: '',
    Remark: '',
    EnvironmentalImpact: '',
    IndustrialParkId: 'Select Industrial Park',
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
  private currentLang: string;
  private isInvestor: boolean;


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
    private configService: ConfigurationService,
    private siteService: SiteService,
    public formService: FormService,
    public snackbar: MatSnackBar,
    public activityService: ActivityService,
    public invactivityService: InvactivityService,
    private dataSharing: DataSharingService,
    public projectRenewalService: ProjectRenewalService) {
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
    this.currentLang = this.configService.language;
    this.ServiceId = this.route.snapshot.params['ServiceId'];
    this.InvestorId = this.route.snapshot.params['InvestorId'];
    this.workFlowId = this.route.snapshot.params['workFlowId'];
    this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
    this.projectId = this.route.snapshot.params['ProjectId'];
    // this.getDate();
    // this.getUserType();
    this.fillAddressLookups();
    this.formBuild();
    this.updateDateRange();
    this.formControlValueChanged();
    
    this.initStaticData('en');
    if (this.projectId > 1) {
      this.getProjectDetail();
      this.editMode = true;
    } else {
      this.editMode = false;
    }
    this.validateStart = true;
    this.validateOperation = true;
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

        this.projectForm.patchValue({
          ProjectStage: project.ProjectStage.toString()
        });

        this.getAddressData(project.ProjectId);
      }, error => this.errMsg.getError(error));
  }
  getUserType() {
    this.isInvestor = this.accountService.getUserType();
  }
  getAddressData(parent: number) {
    this.addressService.getAddress(parent)
      .subscribe((result: AddressModel) => {
        this.addressList = result;
        // this.getKebeleByWoredaId(result.WoredaId);
        this.addressId = result.AddressId;
        this.projectForm.get('address').patchValue(result);
      }, error => this.errMsg.getError(error));
  }


  fillAddressLookups() {
    this.loading = true;
    this.getRegions();
    this.getAllZones();
    // this.getAllWoredas();
    this.getAllSector();
    this.getAllSubSector();
    this.getAllActivityService();
    this.getAllInvestmentActivity();
    this.getAllSite();
  }

  getAllSector() {
    console.log(this.currentLang);
    this.sectorService.getSectors(this.currentLang)
      .subscribe(result => {
        this.sectorList = result;
      },
        error => this.toastr.error(this.errMsg.getError(error)
        ));
  }

  getAllSubSector() {
    this.subSectorService.getSubSectors(this.currentLang)
      .subscribe(result => {
        this.subSectorList = result;
        this.filterSubSectorList = result;
      },
        error => this.toastr.error(this.errMsg.getError(error)));
  }

  getAllActivityService() {
    this.activityService.getActivitys(this.currentLang)
      .subscribe(result => {
        this.activity = result;
        this.filterActivityLIst = result;
      }, error => this.toastr.error(this.errMsg.getError(error)));
  }

  getAllInvestmentActivity() {
    this.invactivityService.getInActivitys(this.currentLang)
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
    } else {
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
    let D1 = new Date(this.StartDate.value);
    let D2 = new Date(this.EndingDate.value);
    let D3 = new Date(this.OperationDate.value);
    if (D2 > D1) {
      this.validateStart = true;
    } else {
      this.validateStart = false;
    }
    // else {
    //   this.toastr.show('invalid Date for ending date');
    // }
    if (D3 < D2 && D3 > D1) {
      this.validateOperation = true;
    } else {
      this.validateOperation = false;
    }
    // else {
    //   this.toastr.show('invalid Date for operation date');
    // }
    // else {
    //   this.toastr.show('Not Valid');
    // }
    this.loading = true;
    this.formService.markFormGroupTouched(this.projectForm);
    if (this.projectForm.valid && this.validateOperation && this.validateStart) {
      if (!this.editMode) {
        this.projectProfileService.create(this.projectForm.value)
          .subscribe(result => {
            this.projectId = result.ProjectId;
            // localStorage.setItem('ProjectId', this.projectId);
            // this.router.navigate(['pro/', this.projectId]);
            // localStorage.setItem('workFlowId', result.ServiceApplication[0].ServiceWorkflow[0].ServiceWorkflowId);
            // localStorage.setItem('ServiceApplicationId', result.ServiceApplication[0].ServiceApplicationId);
            // this.Maprenewal();
            this.router.navigate(['pro/' + this.projectId + '/' + result.ServiceApplication[0].ServiceApplicationId + '/' + this.ServiceId + '/' + result.ServiceApplication[0].ServiceWorkflow[0].ServiceWorkflowId + '/' + this.InvestorId]);
            this.notification('project  saved');
            this.saveAddress();
          });
      } else {
        this.projectProfileService.update(this.projectForm.value, this.projectIdEditing)
          .subscribe(result => {
            this.projectId = result.ProjectId;
            this.notification('project updated');
            console.log("project updated")
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
      // console.log("hhkhksdhfkjshdf");
      // console.log(this.dataSharing.steeperIndex.sub);
      // console.log(this.dataSharing.currentIndex.next)
      // this.dataSharing.steeperIndex
      //   .subscribe(index => {
      //     console.log("steeper index" ,index)
      //   })
    
      // return;
      this.addressService.updateAddress(this.projectForm.get('address').value, this.addressId)
        .subscribe(result => {
          this.notification('address updated');
          this.dataSharing.currentIndex
            .subscribe(index => {
              console.log(index)
              if(index == null || index == 0){
                setTimeout(() => this.dataSharing.steeperIndex.next(1), 0);
                setTimeout(() => this.dataSharing.currentIndex.next(2), 0);
              }
            })
        });
    } else {
      console.log(this.projectForm.get('address').value);
      this.addressService.saveAddress(this.projectForm.get('address').value)
        .subscribe(result => {
         
          setTimeout(() => this.dataSharing.projectId.next(this.projectId), 0);
          this.notification('address saved');
          this.dataSharing.currentIndex
            .subscribe(index => {
              console.log("current index ", index)
            })
          this.dataSharing.steeperIndex
            .subscribe(index => {
              console.log("steeper index ", index)
            })
            return;
          setTimeout(() => this.dataSharing.steeperIndex.next(2), 0);
          setTimeout(() => this.dataSharing.currentIndex.next(2), 0);
        });
    }
  }
 
  formBuild() {
    console.log(this.ServiceId);
    this.projectForm = this.formBuilder.group({
      ProjectName: ['', Validators.compose([Validators.required,
      CustomValidators.validateCharacters, Validators.minLength(3)])],
      InvestorId: [this.InvestorId],
      ServiceId: [this.ServiceId],
      ParentProjectId: ['0'],
      CreatedUserName: this.accountServices.currentUser.UserName,
      ProjectDescription: ['', Validators.compose([Validators.required, Validators.minLength(2),
      Validators.maxLength(100)])],
      StartDate: ['', [Validators.required]],
      OperationDate: ['', Validators.required],
      SectorId: ['', Validators.required],
      SubSectorId: ['', Validators.required],
      ActivityId: ['', Validators.required],
      InvActivityId: ['', Validators.required],
      IsOromiaSpecialZone: [''],
      EndingDate: ['', Validators.required],
      IsSelfService: [false],
      EnvironmentalImpact: ['', [Validators.required,Validators.minLength(2)]],
      AssignedUserId: [this.accountService.currentUser.Id],
      CreatedUserId: [this.accountService.currentUser.Id],
      ProjectStage: [null, Validators.required],
      InvestmentPermitNo: [''],
      'address': new FormGroup({
        ParentId: new FormControl(),
        RegionId: new FormControl(),
        ZoneId: new FormControl(),
        WoredaId: new FormControl(),
        WoredaEngId: new FormControl(),
        KebeleId: new FormControl(),
        KebeleEngId: new FormControl(),
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
      });
    }
  }
  formControlValueChanged() {
    this.ProjectName.setValidators([Validators.compose([Validators.required, Validators.minLength(3)])]);
    // this.ProjectStage.setValidators([Validators.required]);
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
      const toSelect = this.projectStage.find(c => c.Id == 1);
      console.log(toSelect);
      this.projectForm.get('ProjectStage').setValue(toSelect);
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
    if (this.ServiceId == ServiceEnum.Expansion && !this.editMode) {
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
  get ProjectDescription() {
    return this.projectForm.get('ProjectDescription');
  }
  get ProjectName() {
    return this.projectForm.get('ProjectName');
  }
  get EndingDate() {
    return this.projectForm.get('EndingDate');
  }
  get StartDate() {
    return this.projectForm.get('StartDate');
  }
  get OperationDate() {
    return this.projectForm.get('OperationDate');
  }
  get SectorId() {
    return this.projectForm.get('SectorId');
  }
  get SubSectorId() {
    return this.projectForm.get('SubSectorId');
  }
  get ActivityId() {
    return this.projectForm.get('ActivityId');
  }
  get InvActivityId() {
    return this.projectForm.get('InvActivityId');
  }
  get EnvironmentalImpact() {
    return this.projectForm.get('EnvironmentalImpact');
  }

  get ProjectStage() {
    return this.projectForm.get('ProjectStage');
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
  // goToNext() {
  //   console.log(this.dataSharing)
  //   setTimeout(() => this.dataSharing.steeperIndex.next(1), 0);
  // }

}
