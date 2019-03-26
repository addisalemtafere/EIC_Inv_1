import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ServiceModel} from '../../model/Service.model';
import {ServiceService} from '../../Services/service.service';
import {ServiceapplicationService} from '../setting/services-tabs/serviceApplication/serviceapplication.service';
import {ServiceApplicationModel} from '../../model/ServiceApplication.model';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectProfileService} from '../../Services/project-profile.service';
import {AccountService} from '@custor/services/security/account.service';
import {DataSharingService} from '../../Services/data-sharing.service';
import {FormService} from '@custor/validation/custom/form';
import {ErrorMessage} from '@custor/services/errMessageService';
import {NotificationService} from '../../Services/notification.service';
import {NotificationModel} from '../../model/Notification.model';
import {Utilities} from '@custor/helpers/utilities';
import {Investor} from '../../model/investor';
import {ToastrService} from 'ngx-toastr';
import {InvestorService} from '../investor/investor.service';
import {Permission} from '../../model/security/permission.model';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.scss']
})
export class MyDashboardComponent implements OnInit, AfterViewInit {
  public serviceApplicationList: ServiceApplicationModel[];
  public notitficationList: NotificationModel[];
  isChecked = false;
  public dataSource: MatTableDataSource<ServiceApplicationModel>;

  loading = true;
  searchForm: FormGroup;
  serviceList: ServiceModel[] = [];
  displayedColumns = ['CaseNumber', 'ServiceName', 'currentStatus', 'NextStep', 'Action'];
  displayedColumnsNotification = ['subject', 'date', 'message', 'Action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatPaginator) paginator2: MatPaginator;

  formErrors: {};
  public dataSourceNotitification: MatTableDataSource<NotificationModel>;
  private investors: Investor[];

  constructor(private projectProfileService: ProjectProfileService,
              private errMsg: ErrorMessage,
              private router: Router,
              private toastr: ToastrService,
              private invService: InvestorService,
              private dataSharing: DataSharingService,
              private route: ActivatedRoute,
              public dialog: MatDialog,
              private accountService: AccountService,
              private service: ServiceService,
              private formBuilder: FormBuilder,
              private formService: FormService,
              private notifificationService: NotificationService,
              private serviceApplication: ServiceapplicationService) {
  }

  get canManageTask() {
    return this.accountService.userHasPermission(Permission.manageTasks);
  }

  ngOnInit() {

    this.checkAuthorization();
    setTimeout(() => this.dataSource.paginator = this.paginator);

    this.getAllNotification(this.accountService.currentUser.Id);
    this.checkInvestor();

  }

  toServiceList() {
    this.router.navigate(['/service-list']);
  }

  getServiceApplication() {
    this.serviceApplication.getServiceApplicationsByInvestorId(localStorage.getItem('InvestorId'))
      .subscribe(result => {
        this.dataSource = new MatTableDataSource<ServiceApplicationModel>(result);
        this.loading = false;
        this.serviceApplicationList = result;
      }, error => this.errMsg.getError(error));
  }

  nextStep(step: number, projectId: any, serviceApplicationId: any, serviceId: any, title: string, workFlowId: any,
           investorName: string, projectName: string) {
    let stepIndex;

    localStorage.setItem('title', 'New Ip');
    const investorId = localStorage.getItem('InvestorId');

    if (serviceId === 1045) {
      this.router.navigate(['/tax-exemption/' + serviceId + '/' + investorId + '/' + serviceApplicationId + '/' + projectId + '/' + workFlowId]);
    } else if (serviceId === 1046) {
      this.router.navigate(['/incentive-request-item/' + serviceId + '/' + investorId + '/' + serviceApplicationId + '/' + projectId + '/' + workFlowId]);
    }
    if (serviceId === 1047) {
      this.router.navigate(['/bill-of-material/1/' + serviceId + '/' + investorId + '/' + serviceApplicationId + '/' + projectId + '/' + workFlowId]);
    }
    if (serviceId === 1054) {
      this.router.navigate(['/bill-of-material/2' + serviceId + '/' + investorId + '/' + serviceApplicationId + '/' + projectId + '/' + workFlowId]);
    }
    else if (serviceId === 13 || serviceId == 1023) {
      switch (step) {
        case 8:
          stepIndex = 1;
          break;
        case 9:
          stepIndex = 4;
          break;
        case 10:
          stepIndex = 5;
          break;
        case 11:
          stepIndex = 2;
          break;
        case 12:
          stepIndex = 7;
          break;
        case 13:
          stepIndex = 2;
          break;
        case 14:
          stepIndex = 6;
          break;
        case 18:
          stepIndex = 8;
          break;
      }
      this.router.navigate(['pro/' + projectId + '/' + serviceApplicationId + '/' + serviceId + '/' + workFlowId + '/' + investorId]);
    }
    else if (serviceId === 1235) {
      switch (step) {
        case 1018:
          stepIndex = 2;
          break;
        case 1019:
          stepIndex = 2;
          break;
        // case 1020:
        //   stepIndex = 3;
        //   break;
        case 1021:
          stepIndex = 3;
          break;
      }
      this.router.navigate(['investor-tab/' + serviceId + '/' + serviceApplicationId + '/' + investorId + '/' + 0 + '/' + workFlowId]);
    }

    localStorage.setItem('investorName', investorName);
    localStorage.setItem('projectName', projectName);

    setTimeout(() => this.dataSharing.steeperIndex.next(stepIndex), 0);
    setTimeout(() => this.dataSharing.currentIndex.next(stepIndex), 0);
    localStorage.setItem('CurrentIndex', stepIndex.toString());
  }

  getAllNotification(userId: any) {
    this.notifificationService.getAllById(userId)
      .subscribe(result => {
        this.dataSourceNotitification = new MatTableDataSource<NotificationModel>(result);
        this.loading = false;
        this.notitficationList = result;

      }, error => this.errMsg.getError(error));
  }

  deleteServiceApplication(id: any) {
    // console.log(id);
    const response = confirm('Do you want to Delete this ServiceApplication ?');
    if (response === true) {
      this.serviceApplication.delete(id).subscribe(result => {
        // console.log(result);
        this.getServiceApplication();
      });
      return true;
    } else {
      return false;
    }

  }

  deleteProject(id: number) {
    // console.log(id);
    const response = confirm('Do you want to Delete this Project ?');
    if (response === true) {
      this.projectProfileService.delete(id)
        .subscribe(() => {
          this.getServiceApplication();
        });
      return true;
    } else {
      return false;
    }
  }

  editProject(projectId: number, serviceApplicationId: any, serviceId: any) {

    setTimeout(() => this.dataSharing.isNew.next(true), 0);
    this.router.navigate(['pro/' + projectId + '/' + serviceApplicationId + '/' + serviceId + '/' + 0 + '/' + 0]);
  }

  projectDetail(serviceApplication: ServiceApplicationModel) {
    console.log(serviceApplication);

    const projectId = serviceApplication.ProjectId;
    const ServiceApplicationId = serviceApplication.ServiceApplicationId;
    const serviceId = serviceApplication.ServiceId;

    const workFlowId = serviceApplication.ServiceWorkflow[0].ServiceWorkflowId;
    const investorId = localStorage.getItem('InvestorId');


    const step = serviceApplication.ServiceWorkflow[0].NextStepId;
    let stepIndex;
    switch (step) {
      case 8:
        stepIndex = 1;
        break;
      case 9:
        stepIndex = 4;
        break;
      case 10:
        stepIndex = 5;
        break;
      case 11:
        stepIndex = 2;
        break;
      case 12:
        stepIndex = 7;
        break;
      case 13:
        stepIndex = 2;
        break;
      case 14:
        stepIndex = 6;
        break;
      case 18:
        stepIndex = 8;
        break;

    }


    setTimeout(() => this.dataSharing.steeperIndex.next(stepIndex), 0);
    setTimeout(() => this.dataSharing.currentIndex.next(stepIndex), 0);

    switch (serviceId) {
      case 13 :
      case 1023:
        this.router.navigate(['/service-detail', projectId]);
        break;
      case 18:
        this.router.navigate(['/project-renewal/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
        break;
      case 19:
        this.router.navigate(['/project-cancellation/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
        break;
      case 1027:
        this.router.navigate(['/project-substitute/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
        break;
      case 1045:
        this.router.navigate(['tax-exemption/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
        break;
      case 1046:
        this.router.navigate(['incentive-request-item/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
        break;
      case 1047:
        this.router.navigate(['/bill-of-material/1/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
        break;
      case 1054:
        this.router.navigate(['/bill-of-material/2/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId]);
        break;
      case 1235:
        switch (step) {
          case 1018:
            stepIndex = 2;
            break;
          case 1019:
            stepIndex = 2;
            break;
          // case 1020:
          //   stepIndex = 3;
          //   break;
          case 1021:
            stepIndex = 3;
            break;
        }

        this.router.navigate(['investor-tab/' + serviceId + '/' + ServiceApplicationId + '/' + investorId + '/' + 0 + '/' + workFlowId]);

        break;
      case 1236:
        this.router.navigate(['business-tab/' + serviceId + '/' + investorId + '/' + ServiceApplicationId + '/' + projectId + '/' + workFlowId + '/' + 0]);
        break;
      default:
        this.router.navigate(['/notfound'], {relativeTo: this.route});
        break;
    }
  }

  gotInvestorTab() {

  }

  search() {
    // alert(this.isChecked);
    this.isChecked = !this.isChecked;
    if (this.isChecked) {
      this.filterData(this.serviceApplicationList);
    } else {
      this.getServiceApplication();
    }

  }

  filterData(data: any) {
    // console.log(data);
    this.serviceApplicationList = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].IsActive === false) {
        this.serviceApplicationList.push(data[i]);
      }
    }
    this.dataSource = new MatTableDataSource<ServiceApplicationModel>(this.serviceApplicationList);
    this.loading = false;
    // console.log(this.serviceApplicationList);
    // this.dataSource.paginator = this.paginator;
  }

  checkInvestor() {
    // // console.log(this.accountService.currentUser.Tin);
    if (this.accountService.currentUser.Tin !== null) {
      this.getInvestorsByUserId();

    } else {
      this.getInvestorsByUserId();
    }
  }

  getInvestorsByUserId() {
    this.invService.getInvestorByUserId(this.accountService.currentUser.Id)
      .subscribe(result => {
          // console.log(result);
          this.investors = result;
          console.log("investo=");
          console.log(this.investors);
          if (this.investors.length === 0 || this.investors[0].IsActive == false) {
            if (this.investors.length !== 0) {
              console.log('Profile incomlete1')

              localStorage.setItem('profile-completed', 'false');
              this.router.navigate(['investor-profile', this.investors[0].InvestorId]);
            }
            else {
              console.log('Profile incomlete2')

              this.router.navigate(['investor-profile/0']);
            }


            localStorage.setItem('ServiceId', '1235');
            this.toastr.success('Dear customer Please complete your Profile', 'Well Come !!!', {
              closeButton: true,
            });
          } else {
            localStorage.setItem('InvestorId', this.investors[0].InvestorId.toString());
            localStorage.setItem('InvestorId', this.investors[0].InvestorId.toString());
            localStorage.setItem('profile-completed', this.investors[0].IsActive.toString());
            this.getServiceApplication();

          }
        },
        error => {
          this.toastr.error(`Error: "${Utilities.getHttpResponseMessage(error)}"`);
        });
  }

  getInvestorsByTin() {


    this.invService.getInvestorByUserId(this.accountService.currentUser.Tin)
      .subscribe(result => {
          // console.log(result);
          this.investors = result;
          // console.log(result);
          if (!this.investors) {
            this.toastr.error('No records were found to list', 'Error', {
              closeButton: true,
            });
          } else {
            localStorage.setItem('InvestorId', this.investors[0].InvestorId.toString());
          }
        },
        error => {
          this.toastr.error(`Error: "${Utilities.getHttpResponseMessage(error)}"`);
        });
  }

  viewNotificationDetail() {
    this.router.navigate(['appointment']);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;

  }

  checkAuthorization() {
    if (this.canManageTask) {
      // this.alertService.error('You are not allowed to access this page');
      this.router.navigate(['denied']);
    }
  }
}

