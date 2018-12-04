import {AfterContentChecked, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatDialog, MatDialogRef, MatPaginator, MatTableDataSource} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {InvestorService} from '../investor/investor.service';
import {AccountService} from '@custor/services/security/account.service';
import {AuthService} from '@custor/services/security/auth.service';
import {Utilities} from '@custor/helpers/utilities';
import {Investor} from '../../model/investor';
import {ProjectModel} from '../../model/project.model';
import {DataSharingService} from '../../Services/data-sharing.service';
import {ProjectProfileService} from '../../Services/project-profile.service';
import {AngConfirmDialogComponent} from '@custor/components/confirm-dialog/confirm-dialog.component';
import {IncentiveLogService} from '../../Services/incentive-log.service';
import {ServiceApplicationModel} from '../../model/ServiceApplication.model';
import {ServiceapplicationService} from '../setting/services-tabs/serviceApplication/serviceapplication.service';
import {TodoTaskModel} from '../../model/TodoTask.model';
import {ServiceModel} from '../../model/Service.model';
import {Permission} from '../../model/security/permission.model';

@Component({
  selector: 'app-search-browser',
  templateUrl: './search-browser.component.html',
  styleUrls: ['./search-browser.component.scss']
})
export class SearchBrowserComponent implements OnInit, AfterContentChecked {

  title: string;
  serviceTitle: string;
  dataSource: any;
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
  formErrors: {};
  public invName: any;
  todoTask: TodoTaskModel;
  public serviceApplication: ServiceApplicationModel;
  public projectName: string | null;
  public investorName: string | null;
  private investors: Investor[];
  private projectList: ProjectModel[];
  private ServiceId: any;

  constructor(public fb: FormBuilder,
              private http: HttpClient,
              private invService: InvestorService,
              private projectService: ProjectProfileService,
              private dataSharing: DataSharingService,
              private accountService: AccountService,
              private authService: AuthService,
              private serviceApplicationService: ServiceapplicationService,
              private incentiveLogService: IncentiveLogService,
              private toastr: ToastrService, public dialog: MatDialog,
              private router: Router, private route: ActivatedRoute) {
    this.serviceApplication = new ServiceApplicationModel();
    this.todoTask = new TodoTaskModel();
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

  ngOnInit() {
    this.ServiceId = this.route.snapshot.params['ServiceId'];
    this.initForm();
    this.getInvestors();
    this.title = localStorage.getItem('title');
    this.projectName = localStorage.getItem('projectName');
    this.investorName = localStorage.getItem('investorName');
  }

  search() {
    this.loadingIndicator = true;
    this.invService.searchInvestor(this.searchForm.value)
      .subscribe(result => {
          console.log(result);
          this.investors = result;
          if (!this.investors) {
            this.loadingIndicator = false;
            this.toastr.error('No records were found to list', 'Error', {
              closeButton: true,
            });
          } else {
            this.loadingIndicator = false;
            this.dataSource = new MatTableDataSource<Investor>(result);
            console.log(result);
            this.dataSource.paginator = this.paginator;
          }
        },
        error => {
          this.toastr.error(`Error: "${Utilities.getHttpResponseMessage(error)}"`);
        });
    this.loadingIndicator = false;
  }

  initForm() {
    this.searchForm = this.fb.group({
      Tin: new FormControl(),
      FirstNameEng: new FormControl(),
      FatherNameEng: new FormControl(),
      GrandNameEng: new FormControl()
    });
  }

  getInvestors() {
    this.loadingIndicator = true;
    this.invService.getInvestors()
      .subscribe(result => {
          console.log(result);
          this.investors = result;
          if (!this.investors) {
            this.loadingIndicator = false;
            this.toastr.error('No records were found to list', 'Error', {
              closeButton: true,
            });
          } else {
            this.loadingIndicator = false;

            this.dataSource = new MatTableDataSource<Investor>(result);
            console.log(result);
            this.dataSource.paginator = this.paginator;
          }
        },
        error => {
          this.toastr.error(`Error: "${Utilities.getHttpResponseMessage(error)}"`);
        });
    this.loadingIndicator = false;
  }

  select(InvestorId: any, investorName: any) {
    // localStorage.setItem('InvestorId', InvestorId);
    this.invName = investorName;
    this.loadingIndicator = true;
    this.projectService.getProjectByInvestorId(InvestorId)
      .subscribe(result => {

          this.investorShow = false;
          this.projectList = result;
          this.title = 'ProjectDetail';
          if (this.projectList.length == 0) {
            this.loadingIndicator = false;
            this.toastr.error('No records were found to list', 'Error', {
              closeButton: true,
            });
          } else {
            this.loadingIndicator = false;
            this.dataSource = new MatTableDataSource<ProjectModel>(result);
            console.log(result);
            this.dataSource.paginator = this.paginator;
          }
        },
        error => {
          this.toastr.error(`Error: "${Utilities.getHttpResponseMessage(error)}"`);
        });
    this.loadingIndicator = false;

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
    this.getInvestors();

  }

  deleteProject(id: number) {
    const response = confirm('Do you want to Delete this Project ?');
    if (response === true) {
      this.projectService.delete(id)
        .subscribe(() => {
        });
      return true;
    } else {
      return false;
    }
  }

  editProject(projectId: number, serviceApplicationId: any, serviceId: any) {

    setTimeout(() => this.dataSharing.steeperIndex.next(1), 0);

    setTimeout(() => this.dataSharing.isNew.next(true), 0);
    this.router.navigate(['pro/' + projectId + '/' + serviceApplicationId + '/' + serviceId + '/' + 0 + '/' + 0]);
  }

  projectDetail(id: number) {
    console.log(this.router.url);
    this.router.navigate(['/service-detail', id]);
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

  nextService(projectId: any, ServiceApplicationId: any, ServiceId: any, projectStatus: any, workFlowId: any) {

    const serviceId = +ServiceId; //+localStorage.getItem('ServiceId');
    const investorId = this.route.snapshot.params['InvestorId']; //localStorage.getItem('InvestorId');
    console.log(serviceId);
    switch (serviceId) {
      case 13:
        this.router.navigate(['/pro', 0]);
        break;
      case 18:
        if (projectStatus !== 4) {
          this.router.navigate(['/project-renewal/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
        } else {
          this.toastr.error('you can not renew this project it already cancelled', 'Not Allowed');
        }
        break;
      case 19:
        if (projectStatus !== 4) {
          this.router.navigate(['/project-cancellation/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
          localStorage.setItem('ProjectId', projectId);
        } else {
          this.toastr.error('you can not Cancelled  this project it already cancelled', 'Not Allowed');
        }
        break;
      case 1023:
        if (projectStatus !== 4) {
          this.router.navigate(['pro/' + projectId + '/' + ServiceApplicationId + '/' + serviceId + '/' + 0 + '/' + 0]);
          localStorage.setItem('ParentProjectId', projectId);
        } else {
          this.toastr.error('you can not Expand  this project it already cancelled', 'Not Allowed');
        }

        break;
      case 1234:
        this.router.navigate(['/after-care']);
        break;
      case 1028:
        this.editProject(projectId, ServiceApplicationId, 13);
        break;
      case 1027:
        this.router.navigate(['/project-substitute/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);

        break;
      case 1045:
        this.router.navigate(['/tax-exemption/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
        break;
      case 1046:
        this.router.navigate(['/incentive-request-item/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
        break;

      case 1047:
        this.router.navigate(['bill-of-material/1/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
        break;
      case 1054:
        this.router.navigate(['bill-of-material/2/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
        break;
      case 1001:
        this.router.navigate(['capital-registration/', projectId]);
        break;
      case 1236:
        this.router.navigate(['business-tab/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
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
    const InvestorId = this.route.snapshot.params['InvestorId'];

    if (projectStatus !== 9) {
      this.toastr.warning('Project Is Not Active');
    } else {

      this.todoTask.AssignedUserId = this.accountService.currentUser.Id;
      this.todoTask.CreatedUserId = this.accountService.currentUser.Id;
      this.todoTask.CreatedUserName = this.accountService.currentUser.UserName;
      this.todoTask.IsActive = false;

      this.serviceApplication.ProjectId = projectId;
      this.serviceApplication.ServiceId = this.ServiceId;
      this.serviceApplication.InvestorId = InvestorId;
      this.serviceApplication.CaseNumber = '1';
      this.serviceApplication.CurrentStatusId = 44450;
      this.serviceApplication.IsSelfService = true;
      this.serviceApplication.IsPaid = true;
      this.serviceApplication.CreatedUserId = 1;
      this.serviceApplication.IsActive = false;
      this.serviceApplication.todoTask = this.todoTask;

      this.serviceApplicationService
        .applicationStart(this.serviceApplication)
        .subscribe(result => {
          this.nextService(projectId, result.ServiceApplicationId, ServiceId, projectStatus, result.ServiceWorkflow[0].ServiceWorkflowId);
        });

      localStorage.setItem('projectName', projectName);

    }
  }

  showIncentiveDetials(projectId: any, ServiceApplicationId: any, ServiceId: any, projectStatus: any, projectName?: any) {
    if (projectStatus !== 9) {
      this.toastr.warning('Project Is Not Active');
    } else {
      console.log(projectId);
      localStorage.setItem('projectName', projectName);
      localStorage.setItem('ServiceApplicationId', ServiceApplicationId);
      this.router.navigate(['incentive-detail/' + projectId + '/' + ServiceApplicationId + '/' + ServiceId]);
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

}
