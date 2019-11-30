import {AfterContentChecked, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatDialog, MatDialogRef, MatPaginator, MatTableDataSource} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

import {AccountService} from '@custor/services/security/account.service';
import {AuthService} from '@custor/services/security/auth.service';
import {Utilities} from '@custor/helpers/utilities';
import {ServiceModel} from "../../../model/Service.model";
import {AngConfirmDialogComponent} from "@custor/components/confirm-dialog/confirm-dialog.component";
import {TodoTaskModel} from "../../../model/TodoTask.model";
import {ServiceApplicationModel} from "../../../model/ServiceApplication.model";
import {ProjectModel} from "../../../model/project.model";
import {Investor} from "../../../model/investor";
import {InvestorService} from "../../investor/investor.service";
import {ProjectProfileService} from "../../../Services/project-profile.service";
import {DataSharingService} from "../../../Services/data-sharing.service";
import {ErrorMessage} from "@custor/services/errMessageService";
import {ServiceapplicationService} from "../../setting/services-tabs/serviceApplication/serviceapplication.service";
import {IncentiveLogService} from "../../../Services/incentive-log.service";
import {Permission} from "../../../model/security/permission.model";
import {ApplicationStatusEnum, ServiceEnum} from "../../../enum/enums";


@Component({
  selector: 'app-project-search',
  templateUrl: './project-search.component.html',
  styleUrls: ['./project-search.component.scss']
})

export class ProjectSearchComponent implements OnInit, AfterContentChecked {

  title: any;
  serviceTitle: string;
  dataSource: any;
  dataSourceProject: any;
  investorShow = true;
  loadingIndicator: boolean;
  loading = true;
  searchForm: FormGroup;
  serviceList: ServiceModel[] = [];
  displayedColumns = [
    'FirstNameEng', 'FatherNameEng', 'RegistrationNumber', 'RegistrationDate', 'Tin', 'Action'
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumnsProject = [
    'ProjectName', 'InvActivity', 'ProjectStage', 'ProjectStatus', 'Action'
  ];
  @ViewChild(MatPaginator) paginator2: MatPaginator;
  dialogRef: any;
  confirmDialogRef: MatDialogRef<AngConfirmDialogComponent>;
  //dataSource: MatTableDataSource<ProjectModel>;
  formErrors: {};
  public invName: any;
  todoTask: TodoTaskModel;
  public serviceApplication: ServiceApplicationModel;
  public projectName: string | null;
  public investorName: string | null;
  projectModel: ProjectModel;
  private investors: Investor[];
  public projectList: ProjectModel[];
  private ServiceId: any;
  private isForDetail: any;
  private ServiceApplicationId: any;
  private InvestorId: any;
  private isTitle: number;

  constructor(public fb: FormBuilder,
              private http: HttpClient,
              private invService: InvestorService,
              private projectService: ProjectProfileService,
              private dataSharing: DataSharingService,
              private accountService: AccountService,
              private authService: AuthService,
              private errMsg: ErrorMessage,
              private projectProfileService: ProjectProfileService,
              private serviceApplicationService: ServiceapplicationService,
              private incentiveLogService: IncentiveLogService,
              private toastr: ToastrService, public dialog: MatDialog,
              private router: Router, private route: ActivatedRoute) {
    this.serviceApplication = new ServiceApplicationModel();
    this.todoTask = new TodoTaskModel();
  }

  ngOnInit() {
    this.ServiceId = this.route.snapshot.params['ServiceId'];
    this.InvestorId = this.route.snapshot.params['InvestorId'];
    this.title = this.route.snapshot.params['Title'];
    if (this.title == 1) {
      this.isTitle = 1;
    } else {
      this.isTitle = 0;
    }
    this.initForm();
    //this.getInvestors();
    this.title = localStorage.getItem('title');
    this.projectName = localStorage.getItem('projectName');
    this.investorName = localStorage.getItem('investorName');
    this.select(this.InvestorId, this.investorName)
  }


  initForm() {
    this.searchForm = this.fb.group({
      // Tin: new FormControl(),
      // FirstNameEng: new FormControl(),
      // FatherNameEng: new FormControl(),
      // GrandNameEng: new FormControl()
    });
  }


  select(InvestorId: any, investorName: any) {
    this.projectList = [];
    this.ServiceId = this.route.snapshot.params['ServiceId'];

    if (this.ServiceId == 13) {
      this.InvestorId = InvestorId;
      this.router.navigate(['/pro/' + 0 + '/' + 0 + '/' + this.ServiceId + '/' + 0 + '/' + InvestorId]);
    } else {
      this.invName = investorName;
      this.loadingIndicator = true;
      this.projectService.getProjectByInvestorId(InvestorId)
        .subscribe(result => {
            this.projectList = result;
            this.title = 'ProjectDetail';
            if (this.projectList.length == 0) {
              this.loadingIndicator = false;
              this.toastr.info('No active project records were found to list', 'Info', {
                closeButton: true,
              });
            } else {
              this.loadingIndicator = false;
              this.investorShow = false;
              this.dataSourceProject = new MatTableDataSource<ProjectModel>(result);
              this.dataSourceProject.paginator = this.paginator;
            }
          },
          error => {
            this.toastr.error(`Error: "${Utilities.getHttpResponseMessage(error)}"`);
          });
      this.loadingIndicator = false;
    }
  }

  projectDetail(id: number) {
    this.router.navigate(['/service-detail', id]);
  }

  editInvestor(investor: Investor) {
    if (investor) {
      this.router.navigate(['/investor/edit', investor.InvestorId], {relativeTo: this.route});
    } else {
      this.router.navigate(['/investor/edit', 0]);
    }
  }

  confirmDelete(investor: Investor) {
    this.confirmDialogRef = this.dialog.open(AngConfirmDialogComponent,
      {
        disableClose: false
      });

    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      this.loadingIndicator = true;
      if (result) {
        this.invService.deleteInvestor(investor.InvestorId)
          .subscribe(results => {
              this.loadingIndicator = false;
              this.dataSource.data = this.dataSource.data.filter(item => item !== investor);
            },
            error => {
              this.toastr.error(
                `An error occured whilst deleting the investor.\r\nError: "${Utilities.getHttpResponseMessage(error)}"`,
                'Delete Error');
            });
      }
      this.loadingIndicator = false;
    });
  }

  back() {
    this.title = 'search';
    this.investorShow = true;
    //this.getInvestors();
    this.router.navigate(['/search-browser/' + this.ServiceId + '/' + this.InvestorId + '/' + 0]);
  }


  editProject(projectId: number, serviceApplicationId: any, serviceId: any) {

    setTimeout(() => this.dataSharing.steeperIndex.next(1), 0);

    setTimeout(() => this.dataSharing.isNew.next(true), 0);
    this.router.navigate(['pro/' + projectId + '/' + serviceApplicationId + '/' + serviceId + '/' + 0 + '/' + 0]);
  }


// Todo Application must be Intiated
  goToService(InvestorId: any, investorName: any) {
    localStorage.setItem('investorName', investorName);
    const serviceId = this.ServiceId;
    if (serviceId === 13) {
      setTimeout(() => this.dataSharing.currentIndex.next(0), 0);

      localStorage.setItem('currentIndex', '0');
      this.router.navigate(['pro/' + 0 + '/' + 0 + '/' + serviceId + '/' + 0 + '/' + InvestorId]);
    } else {
      this.select(InvestorId, investorName);
      this.router.navigate(['/search-browser/' + serviceId + '/' + InvestorId + '/' + 0]);
    }
  }

  investorDetail(InvestorId: any, projectId: any, ServiceApplicationId: any, ServiceId: any, projectStatus: any, workFlowId: any) {
    const serviceId = +ServiceId; //+localStorage.getItem('ServiceId');
    const investorId = this.route.snapshot.params['InvestorId']; //localStorage.getItem('InvestorId');
    this.router.navigate(['incentive-detail/' + projectId + '/' + ServiceApplicationId + '/' + serviceId + '/' + 1]);
  }

  nextService(InvestorId: any, projectId: any, ServiceApplicationId: any, ServiceId: any, projectStatus: any, workFlowId: any) {

    const serviceId = +ServiceId; //+localStorage.getItem('ServiceId');
    const investorId = this.route.snapshot.params['InvestorId']; //localStorage.getItem('InvestorId');

    switch (serviceId) {
      // case 13:
      case ServiceEnum.NewIP:
        this.router.navigate(['/pro/0/0/0/0/0']);//Fire
        break;
      // case 18:
      case ServiceEnum.Renewal:
        if (projectStatus !== 4) {
          this.router.navigate(['/project-renewal/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
        } else {
          this.toastr.error('you can not renew this project it already cancelled', 'Not Allowed');
        }
        break;
      // case 19:
      case ServiceEnum.CancellationOfIP:
        if (projectStatus !== 4) {
          this.router.navigate(['/project-cancellation/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
          localStorage.setItem('ProjectId', projectId);
        } else {
          this.toastr.error('you can not Cancelled  this project it already cancelled', 'Not Allowed');
        }
        break;
      // case 1023:
      case ServiceEnum.Expansion:
        if (projectStatus !== 4) {
          this.router.navigate(['pro/' + projectId + '/' + ServiceApplicationId + '/' + serviceId + '/' + 0 + '/' + 0]);
          localStorage.setItem('ParentProjectId', projectId);
        } else {
          this.toastr.error('you can not Expand  this project it already cancelled', 'Not Allowed');
        }
        break;
      // case 1234:
      case ServiceEnum.AfterCare:
        this.router.navigate(['/after-care/' + projectId]);
        break;
      // case 1028:
      case ServiceEnum.AmendmentOfIP:
        this.editProject(projectId, ServiceApplicationId, ServiceEnum.NewIP);
        break;
      // case 1027:
      case ServiceEnum.SubstituteIP:
        if (projectStatus !== 4) {
          this.router.navigate(['/project-substitute/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
          localStorage.setItem('ProjectId', projectId);
        } else {
          this.toastr.error('you can not Cancelled  this project it already cancelled', 'Not Allowed');
        }
        break;
      // case 1045:
      case ServiceEnum.TaxHolidayIncentive:
        if (projectStatus !== 4) {
          this.router.navigate(['/tax-exemption/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
          localStorage.setItem('ParentProjectId', projectId);
        } else {
          this.toastr.error('Project it already cancelled', 'Not Allowed');
        }
        break;
      // case 1046:
      case ServiceEnum.DutyFreeIncentive:
        if (projectStatus !== 4) {
          this.router.navigate(['/incentive-request-item/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
          localStorage.setItem('ParentProjectId', projectId);
        } else {
          this.toastr.error('Project it already cancelled', 'Not Allowed');
        }
        break;
      // case 1047:
      case ServiceEnum.UploadingOfConstructionMaterial:
        if (projectStatus !== 4) {
          this.router.navigate(['bill-of-material/1/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
          localStorage.setItem('ParentProjectId', projectId);
        } else {
          this.toastr.error('Project it already cancelled', 'Not Allowed');
        }
        break;
      // case 1054:
      case ServiceEnum.UploadingOfRawMaterial:
        if (projectStatus !== 4) {
          this.router.navigate(['bill-of-material/2/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
          localStorage.setItem('ParentProjectId', projectId);
        } else {
          this.toastr.error('Project it already cancelled', 'Not Allowed');
        }
        break;
      // case 1001:
      case ServiceEnum.CapitalRegistration:
        if (projectStatus !== 4) {
          this.router.navigate(['capital-registration/', projectId]);
          localStorage.setItem('ParentProjectId', projectId);
        } else {
          this.toastr.error('Project it already cancelled', 'Not Allowed');
        }
        break;
      // case 1236:
      case ServiceEnum.BusinessLicense:
        if (projectStatus !== 4) {
          this.router.navigate(['business-tab/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId + '/' + 0]);
          localStorage.setItem('ParentProjectId', projectId);
        } else {
          this.toastr.error('Project it already cancelled', 'Not Allowed');
        }
        break;
      default:
        this.router.navigate(['/notfound'], {relativeTo: this.route});
        break;
    }
  }

  startApplication(projectList: ProjectModel) {

    const projectName = projectList.ProjectName;
    const projectId = projectList.ProjectId;
    const projectStatus = projectList.ProjectStatus;
    const ServiceId = this.ServiceId;
    this.InvestorId = projectList.InvestorId;


    this.todoTask.AssignedUserId = this.accountService.currentUser.Id;
    this.todoTask.CreatedUserId = this.accountService.currentUser.Id;
    this.todoTask.CreatedUserName = this.accountService.currentUser.UserName;
    this.todoTask.IsActive = false;

    this.serviceApplication.ProjectId = projectId;
    this.serviceApplication.ServiceId = this.ServiceId;
    this.serviceApplication.InvestorId = this.InvestorId;
    this.serviceApplication.CaseNumber = '1';
    this.serviceApplication.CurrentStatusId = ApplicationStatusEnum.Drafted;
    this.serviceApplication.IsSelfService = true;
    this.serviceApplication.IsPaid = true;
    this.serviceApplication.CreatedUserId = 1;
    this.serviceApplication.IsActive = false;
    this.serviceApplication.todoTask = this.todoTask;
    console.log(this.ServiceId);
    if (this.ServiceId != 1239) {

      if (this.isTitle == 1) {
        this.investorDetail(this.InvestorId, projectId, 0, ServiceId, projectStatus, 0);
      } else {

        this.serviceApplicationService
          .applicationStart(this.serviceApplication)
          .subscribe(result => {
            console.log(result.ServiceApplicationId)
            // this.router.navigate(['incentive-detail/' + projectId + '/' + 0 + '/' + 0 + '/' + 1]);
            this.nextService(this.InvestorId, projectId, result.ServiceApplicationId, ServiceId, projectStatus, result.ServiceWorkflow[0].ServiceWorkflowId);

          });
      }

    } else {
      this.router.navigate(['incentive-detail/' + projectId + '/' + 0 + '/' + 0 + '/' + 1]);
    }
    localStorage.setItem('projectName', projectName);


  }

  showIncentiveDetials(projectId: any, ServiceApplicationId: any, ServiceId: any, projectStatus: any, projectName?: any) {
    if (projectStatus !== 9) {
      this.toastr.warning('Project Is Not Active');
    } else {
      localStorage.setItem('projectName', projectName);
      this.router.navigate(['incentive-detail/' + projectId + '/' + 0 + '/' + 0 + '/' + 1]);
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue.replace(/[\W_]/g, '');
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterContentChecked(): void {
    this.serviceTitle = localStorage.getItem('title');
    this.title = localStorage.getItem('title');
    this.projectName = localStorage.getItem('projectName');
    this.investorName = localStorage.getItem('investorName');
  }

  get canViewTasks() {
    return this.accountService.userHasPermission(Permission.viewServiceList);
  }

  get canManageAftercareData() {
    return this.accountService.userHasPermission(Permission.ManageAftercareDataPermission);
  }

  get canManageManageIncentiveAssignedServices() {
    return this.accountService.userHasPermission(Permission.ManageIncentiveAssignedServicesPermission);
  }

}
