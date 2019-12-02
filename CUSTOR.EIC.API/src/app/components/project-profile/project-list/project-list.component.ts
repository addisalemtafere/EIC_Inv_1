import {AfterContentChecked, AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ProjectProfileService} from '../../../Services/project-profile.service';
import {MatDialog, MatDialogConfig, MatPaginator, MatTableDataSource, PageEvent} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {DataSharingService} from '../../../Services/data-sharing.service';
import {ServiceService} from '../../../Services/service.service';
import {ServiceModel} from '../../../model/Service.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ErrorMessage} from '@custor/services/errMessageService';
import {FormService} from '@custor/validation/custom/form';
import {AccountService} from '@custor/services/security/account.service';
import {Permission} from '../../../model/security/permission.model';
import {ServiceApplicationModel} from '../../../model/ServiceApplication.model';
import {ServiceapplicationService} from '../../setting/services-tabs/serviceApplication/serviceapplication.service';
import {TaskDispatcherComponent} from '../../task-dispatcher/task-dispatcher.component';
import {Subscription} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {ApplicationStatus} from '@custor/const/consts';
import {ApplicationStatusModel, ProjectStatusModel} from '../../../model/lookupData';
import {QueryParametersModel} from "../../../model/QueryParameters.model";
import {PaginationService} from "@custor/services/pagination.service";
import {ConfigurationService} from "@custor/services/configuration.service";
import {ApplicationStatusEnum, ServiceEnum} from "../../../enum/enums";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit, AfterContentChecked, AfterViewInit, OnDestroy {


  // projectList: ProjectModel[];

  pageEvent: PageEvent;
  totalCount = 0;
  step:number;
  serviceWorkFlow:any;
  dataSource: any;
  subscribtion = new Subscription();
  loading = true;
  searchForm: FormGroup;
  serviceList: ServiceModel[] = [];
  displayedColumns = [
    'No','ServiceName', 'ProjectName', 'InvestorName', 'sDate', 'eDate', 'currentStatus', 'NextStep', 'Action', 'AssignedTo'
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  isOfficer = false;
  formErrors: {};
  public serviceApplicationList: ServiceApplicationModel[];
  public assigned: boolean;
  public applicationStatus: ApplicationStatusModel[] = [];
  private searchFlag: boolean;
  private SaveForSearchNavigation: any;
  public applicationS = ApplicationStatusEnum;

  constructor(private projectProfileService: ProjectProfileService,
              private errMsg: ErrorMessage,
              private router: Router,
              public dialog: MatDialog,
              private serviceApplication: ServiceapplicationService,
              private dataSharing: DataSharingService,
              private route: ActivatedRoute,
              private accountService: AccountService,
              private service: ServiceService,
              private toast: ToastrService,
              private configService: ConfigurationService,
              public paginationService: PaginationService,
              private formBuilder: FormBuilder,
              private formService: FormService) {
    // this.applicationS = ApplicationStatusEnum;
  }

  get canManageTask() {
    return this.accountService.userHasPermission(Permission.manageTasks);
  }

  get canManageServiceApplication() {
    return this.accountService.userHasPermission(Permission.manageServiceApplication);
  }

  get canManageManageAftercareData() {
    return this.accountService.userHasPermission(Permission.ManageAftercareDataPermission);
  }

  get canManageDispatchIncentivesServices() {
    return this.accountService.userHasPermission(Permission.DispatchIncentivesServicesPermission);
  }

  get canManageApproveIncentiveUploadedItems() {
    return this.accountService.userHasPermission(Permission.ApproveIncentiveUploadedItemsPermission);
  }

  get canManageManageIncentiveAssignedServices() {
    return this.accountService.userHasPermission(Permission.ManageIncentiveAssignedServicesPermission);
  }

  get canViewReadOnlyData() {
    return this.accountService.userHasPermission(Permission.ViewReadOnlyDataPermission);
  }

  get canViewServiceApplication() {
    return this.accountService.userHasPermission(Permission.viewServiceApplication);
  }

  get canViewTasks() {
    return this.accountService.userHasPermission(Permission.viewServiceList);
  }

  ngOnInit() {
    this.searchFlag = false;
    this.formBuild();
    // this.checkAuthorization();
    if (this.canManageTask) {
      this.getAllServiceApplication();
    } else {
      this.getAllServiceApplicationByOfficerId2(this.accountService.currentUser.Id);
      this.isOfficer = true;

    }
    this.getAllService();
    this.dataSharing.assignTask.subscribe(result => {
      this.assigned = result;
    });

    // if (!this.canViewTaskDispach) {
    //   this.toast.info('this user  is not view dispache');
    // }
    // setTimeout(() => this.dataSource.paginator = this.paginator);
    this.initStaticData('en');
  }

  deleteProject(id: number) {
    // console.log(id);
    const response = confirm('Do you want to Delete this Project ?');
    if (response === true) {
      this.projectProfileService.delete(id)
        .subscribe(() => {
          this.getAllServiceApplication();
        });
      return true;
    } else {
      return false;
    }
  }

  editProject(projectId: number, serviceApplicationId: any, serviceId: any, title: string) {
    // localStorage.setItem('ServiceApplicationId', serviceApplicationId);
    // localStorage.setItem('ServiceId', serviceId);
    localStorage.setItem('title', title);

    setTimeout(() => this.dataSharing.isNew.next(true), 0);

    switch (serviceId) {
      // case ServiceEnum.NewIP || ServiceEnum.Expansion || ServiceEnum.AmendmentOfIP:
      //   this.router.navigate(['pro/' + projectId + '/' + serviceApplicationId + '/' + serviceId + '/' + 0 + '/' + 0]);
      //   break;
      case ServiceEnum.NewIP || ServiceEnum.Expansion :
        this.router.navigate(['pro/' + projectId + '/' + serviceApplicationId + '/' + serviceId + '/' + 0 + '/' + 0]);
        break;
      case ServiceEnum.Renewal:
        this.router.navigate(['/project-renewal', serviceApplicationId]);
        break;

      case ServiceEnum.CancellationOfIP:
        this.router.navigate(['/project-cancellation', serviceApplicationId], {relativeTo: this.route});
        break;

      default:
        this.router.navigate(['/notfound'], {relativeTo: this.route});
        break;
    }
  }

  projectDetail(id: number) {
    // console.log(this.router.url);
    this.router.navigate(['/service-detail', id]);
  }

  projectApprove(serviceApplication: ServiceApplicationModel) {
    console.log('project approved');
    this.step = 0;
    console.log(serviceApplication);
    localStorage.setItem('title', serviceApplication.ServiceNameEnglish);
    localStorage.setItem('projectName', serviceApplication.ProjectNameEnglish);
    localStorage.setItem('investorName', serviceApplication.InvestorNameEnglish);
    this.serviceWorkFlow = serviceApplication.ServiceWorkflow;
    if (this.serviceWorkFlow.length != 0){
      const workFlowId = (serviceApplication.ServiceWorkflow[0].ServiceWorkflowId) ? serviceApplication.ServiceWorkflow[0].ServiceWorkflowId : 0;
      this.step = (serviceApplication.ServiceWorkflow[0].NextStepId) ? serviceApplication.ServiceWorkflow[0].NextStepId : 0;
    }

    const id = serviceApplication.ServiceApplicationId;
    const projectId = serviceApplication.ProjectId;
    const serviceId = serviceApplication.ServiceId;
    const investorId = serviceApplication.InvestorId;
    const workFlowId = 0;

    console.log(this.step);
   let stepIndex;
    switch (this.step) {
      case 0:
        stepIndex = 1;
        break;
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
      case 1018:
        stepIndex = 3;
        break;
      case 1019:
        stepIndex = 3;
        break;
      case 1020:
        stepIndex = 4;
        break;
    }


    setTimeout(() => this.dataSharing.steeperIndex.next(stepIndex), 0);
    setTimeout(() => this.dataSharing.currentIndex.next(stepIndex), 0);
    console.log(investorId)
    console.log("service id " + serviceId + " investorId " + investorId + " service application id " + id + "projectId "+ projectId )
    console.log("permit-amendment" + "/" + "amend-project" + "/"  + serviceId + ' / ' + investorId + ' / ' + id + ' / ' + projectId + ' /'  + 0)
    switch (serviceId) {
      case ServiceEnum.NewIP:
      case ServiceEnum.Expansion:
        this.router.navigate(['/officer/' + serviceId + '/' + investorId + '/' + id + '/' + workFlowId + '/' + projectId]);
        break;
      case ServiceEnum.Renewal:
        this.router.navigate(['/project-renewal/' + serviceId + '/' + investorId + '/' + id + '/' + projectId + '/' + workFlowId]);
        break;
      case ServiceEnum.CancellationOfIP:
        this.router.navigate(['/project-cancellation/' + serviceId + '/' + investorId + '/' + id + '/' + projectId + '/' + workFlowId]);
        break;
      case ServiceEnum.SubstituteIP:
        this.router.navigate(['/project-substitute/' + serviceId + '/' + investorId + '/' + id + '/' + projectId + '/' + workFlowId]);
        break;
      case ServiceEnum.TaxHolidayIncentive:
        this.router.navigate(['tax-exemption/' + serviceId + '/' + investorId + '/' + id + '/' + projectId + '/' + workFlowId]);
        break;
      case ServiceEnum.DutyFreeIncentive:
        this.router.navigate(['incentive-request-item/' + serviceId + '/' + investorId + '/' + id + '/' + projectId + '/' + workFlowId]);
        break;
      case ServiceEnum.UploadingOfConstructionMaterial:
        this.router.navigate(['/bill-of-material/1/' + serviceId + '/' + investorId + '/' + id + '/' + projectId + '/' + workFlowId]);
        break;
      case ServiceEnum.UploadingOfRawMaterial:
        this.router.navigate(['/bill-of-material/2/' + serviceId + '/' + investorId + '/' + id + '/' + projectId + '/' + workFlowId]);
        break;
      case ServiceEnum.CommercialRegistration:
        this.router.navigate(['investor-tab/' + serviceId + '/' + id + '/' + investorId + '/' + 0 + '/' + workFlowId]);

        break;
      case ServiceEnum.BusinessLicense:
        this.router.navigate(['business-tab/' + serviceId + '/' + investorId + '/' + id + '/' + projectId + '/' + workFlowId + '/' + 0]);
        break;
      case ServiceEnum.PermitAmendment:
        this.router.navigate(['permit-amendment/amend-project/' + serviceId + '/' + investorId + '/' + id + '/' + projectId + '/'  + 0]);
        break;
      default:
        this.router.navigate(['/notfound'], {relativeTo: this.route});
        break;
    }
  }

  onRowClicked(row) {
    // console.log('Row clicked: ', row);
  }

  onProjectList() {
    // console.log(this.router.url);
    this.router.navigate(['../list'], {relativeTo: this.route});
  }

  onNewProject() {
    this.router.navigate(['../new'], {relativeTo: this.route});
  }

  nextStep(step: number, projectId: any, serviceApplicationId: any, serviceId: any, title: string, workFlowId: any, InvestorId: any, investorName: string, projectName: string) {
    const id = serviceApplicationId;
    const investorId = InvestorId;
    let stepIndex;
    console.log(step);
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
      case 1018:
        stepIndex = 3;
        break;
      case 1019:
        stepIndex = 3;
        break;
      case 1020:
        stepIndex = 4;
        break;
    }

    localStorage.setItem('investorName', investorName);
    localStorage.setItem('projectName', projectName);
    this.dataSharing.currentIndex
      .subscribe(index => {
        console.log(index)
        if (index == 0) {
          setTimeout(() => this.dataSharing.steeperIndex.next(0), 0);
          //setTimeout(() => this.dataSharing.currentIndex.next(2), 0);
        }
      });
     // return;
    // setTimeout(() => this.dataSharing.steeperIndex.next(stepIndex), 0);
    // setTimeout(() => this.dataSharing.currentIndex.next(stepIndex), 0);

    switch (serviceId) {
      case ServiceEnum.NewIP:
      case ServiceEnum.Expansion:
        this.router.navigate(['pro/' + projectId + '/' + serviceApplicationId + '/' + serviceId + '/' + workFlowId + '/' + InvestorId]);

        break;
      case ServiceEnum.Renewal:
        this.router.navigate(['/project-renewal/' + serviceId + '/' + investorId + '/' + id + '/' + projectId + '/' + workFlowId]);
        break;
      case ServiceEnum.CancellationOfIP:
        this.router.navigate(['/project-cancellation/' + serviceId + '/' + investorId + '/' + id + '/' + projectId + '/' + workFlowId]);
        break;
      case ServiceEnum.SubstituteIP:
        this.router.navigate(['/project-substitute/' + serviceId + '/' + investorId + '/' + id + '/' + projectId + '/' + workFlowId]);
        break;
      case ServiceEnum.TaxHolidayIncentive:
        this.router.navigate(['tax-exemption/' + serviceId + '/' + investorId + '/' + id + '/' + projectId + '/' + workFlowId]);
        break;
      case ServiceEnum.DutyFreeIncentive:
        this.router.navigate(['incentive-request-item/' + serviceId + '/' + investorId + '/' + id + '/' + projectId + '/' + workFlowId]);
        break;
      case ServiceEnum.UploadingOfConstructionMaterial:
        this.router.navigate(['/bill-of-material/1/' + serviceId + '/' + investorId + '/' + id + '/' + projectId + '/' + workFlowId]);
        break;
      case ServiceEnum.UploadingOfRawMaterial:
        this.router.navigate(['/bill-of-material/2/' + serviceId + '/' + investorId + '/' + id + '/' + projectId + '/' + workFlowId]);
        break;
      case ServiceEnum.CommercialRegistration:
        this.router.navigate(['investor-tab/' + serviceId + '/' + id + '/' + investorId + '/' + 0 + '/' + workFlowId]);
        break;

      case ServiceEnum.BusinessLicense:
        this.router.navigate(['business-tab/' + serviceId + '/' + investorId + '/' + id + '/' + projectId + '/' + workFlowId + '/' + 0]);
        break;
      default:
        this.router.navigate(['/notfound'], {relativeTo: this.route});
        break;
    }
  }
  response(serviceId, investorId, serviceApplicationId, projectId, workflowId){
    console.log("Response");console.log(serviceId);console.log(investorId);
    console.log(serviceApplicationId); console.log(projectId);console.log(workflowId);
    this.router.navigate(['/officer/' + serviceId + '/' + investorId + '/' + serviceApplicationId + '/' + workflowId + '/' + projectId]);
  }
  review(serviceId, investorId, serviceApplicationId, projectId, workflowId){
    console.log(serviceId)
    console.log(serviceId == 1269)
    console.log(serviceId == '1269')
    // console.log(investorId)
    // console.log(serviceApplicationId);
    // console.log(projectId);
    // console.log(workflowId);
    // console.log('permit-amendment/amend-project/' + serviceId +
    //   '/' + investorId + '/' + serviceApplicationId + '/'
    //   + projectId + '/' + workflowId)
    if (serviceId == 1028){
      this.router.navigate(['permit-amendment/amend-project/' + serviceId +'/' + investorId + '/' + serviceApplicationId + '/' + projectId + '/' + workflowId]);
    }
    if (serviceId == 1239){
      this.router.navigate(['investor-profile/' + investorId + '/' + serviceApplicationId + '/' + serviceId]);
    }

  }
  getAllService() {
    this.service.getAll()
      .subscribe(result => {
        this.serviceList = result;
      });
  }

  formBuild() {
    this.searchForm = this.formBuilder.group({
      ServiceId: [],
      Tin: [],
      status: [],
      SpecDate: [],
      FromDate: [],
      ToDate: []
    });
    this.searchForm.valueChanges.subscribe((data) => {
      this.formErrors = this.formService.validateForm(this.searchForm, this.formErrors, true);
    });
  }

  getAllServiceApplication() {
    this.dataSharing.assignTask.next(false);
    this.serviceApplication.getServiceAppliactions(this.getManagerParameters())
      .subscribe(result => {

        // console.log(result);
        this.serviceApplicationList = result.Items;
        if (!this.serviceApplicationList) {
          this.toast.error('No records were found to list', 'Error', {
            closeButton: true,
          });
        } else {
          this.dataSource = new MatTableDataSource(this.serviceApplicationList);
          if (this.totalCount === 0) {
            this.totalCount = result.ItemsCount;
          }
        }

      }, error => this.errMsg.getError(error));
  }

  getAllServiceApplicationByOfficerId(officerId: any) {
    this.dataSharing.assignTask.next(false);
    this.serviceApplication.getServiceApplicationsByOfficerId(officerId)
      .subscribe(result => {
        this.dataSource = new MatTableDataSource<ServiceApplicationModel>(result);
        this.loading = false;
        this.serviceApplicationList = result;
        console.log(result);
        this.dataSource.paginator = this.paginator;

      }, error => this.errMsg.getError(error));
  }

  search() {

    this.paginationService.Page(1);

    let SpecDate1 = this.searchForm.get('SpecDate').value;

    console.log(SpecDate1);

    if (SpecDate1 != null) {

      let SpecDateUTCDate = Date.UTC(SpecDate1.getFullYear(), SpecDate1.getMonth(), SpecDate1.getDate()) - SpecDate1.getTimezoneOffset();
      let specDate2 = new Date(SpecDateUTCDate);
      this.searchForm.patchValue({
        SpecDate: specDate2,
      })
    }


    let FromDate1 = this.searchForm.get('FromDate').value;
    if (FromDate1 != null) {

      let FromDateUTCDate = Date.UTC(FromDate1.getFullYear(), FromDate1.getMonth(), FromDate1.getDate()) - FromDate1.getTimezoneOffset();
      let FromDate2 = new Date(FromDateUTCDate);

      this.searchForm.patchValue({
        FromDate: FromDate2

      })
    }

    let ToDate1 = this.searchForm.get('ToDate').value;

    if (ToDate1 != null) {

      let ToDateUTCDate = Date.UTC(ToDate1.getFullYear(), ToDate1.getMonth(), ToDate1.getDate()) - ToDate1.getTimezoneOffset();
      let ToDate12 = new Date(ToDateUTCDate);

      this.searchForm.patchValue({
        ToDate: ToDate12
      })
    }


    console.log(this.searchForm.value);

    this.searchFlag = true;
    this.dataSource = [];
    let searchParam = this.searchForm.value;


    this.projectProfileService.search(searchParam, this.getManagerParameters())
      .subscribe((result) => {
        console.log(result);
        this.filterData(result);
        // this.searchForm.reset();
      }, error => this.errMsg.getError(error));
  }

  cleaSearch() {

    this.searchForm.reset();
  }

  filterData(data: any) {
    this.serviceApplicationList = [];
    console.log(data.Items);
    const data2 = data.Items;
    for (let i = 0; i < data2.length; i++) {
      this.serviceApplicationList.push(data2[i]);
      console.log(this.serviceApplicationList)

    }
    // this.dataSource = new MatTableDataSource<ServiceApplicationModel>(this.serviceApplicationList);
    this.loading = false;
    console.log(this.serviceApplicationList);

    if (!this.serviceApplicationList) {
      this.toast.error('No records were found to list', 'Error', {
        closeButton: true,
      });
    } else {
      this.dataSource = new MatTableDataSource(this.serviceApplicationList);

      this.totalCount = data.ItemsCount;

    }

    this.loading = false;
  }

  assignUser(serviceApplicationId: any) {
    localStorage.setItem('ServiceApplicationId', serviceApplicationId);
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.position = {
      'top': '106px',
      'right': '230px'

    };
    dialogConfig.minWidth = '800px';
    // dialogConfig.maxHeight = '500px';
    dialogConfig.minHeight = '400px';
    dialogConfig.maxHeight = '400px';
    dialogConfig.panelClass = 'padding:1px;';

    this.dialog.open(TaskDispatcherComponent, dialogConfig);

  }


  initStaticData(currentLang) {


    let applicationStatus1: ProjectStatusModel = new ProjectStatusModel();
    ApplicationStatus.forEach(pair => {
      applicationStatus1 = {
        'Id': pair.Id.toString(), 'DescriptionEnglish': pair.DescriptionEnglish,
        'Description': pair.Description
      };
      this.applicationStatus.push(applicationStatus1);

      console.log(applicationStatus1)
    });
  }


  checkAuthorization() {
    if (!this.canManageTask || !this.canViewTasks) {
      // this.alertService.error('You are not allowed to access this page');
      this.router.navigate(['denied']);
    }
  }

  ngAfterContentChecked(): void {
    if (this.assigned) {
      this.getAllServiceApplication();
    }
  }

  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator;

  }


  getAllServiceApplicationByOfficerId2(officerId: any) {
    this.dataSharing.assignTask.next(false);
    this.serviceApplication.getServiceApplicationsByOfficerId2(officerId, this.getManagerParameters())
      .subscribe(result => {

        this.loading = false;
        console.log(result);
        this.serviceApplicationList = result.Items;
        if (!this.serviceApplicationList) {
          this.toast.error('No records were found to list', 'Error', {
            closeButton: true,
          });
        } else {
          this.dataSource = new MatTableDataSource(this.serviceApplicationList);
          if (this.totalCount === 0) {
            this.totalCount = result.ItemsCount;
          }
        }

      }, error => this.errMsg.getError(error));
  }

  private getManagerParameters(): QueryParametersModel {
    const params = new QueryParametersModel();

    params.PageIndex = this.paginationService.page;
    params.PageSize = this.paginationService.pageCount;
    params.Lang = this.configService.language;
    return params;
  }

  switchPage(event: PageEvent) {
    this.paginationService.change(event);
    if (this.canManageTask) {
      if (this.searchFlag) {
        this.search();
      } else {
        this.getAllServiceApplication();

      }

    } else {
      if (this.searchFlag) {
        this.search();
      } else {
        this.getAllServiceApplicationByOfficerId2(this.accountService.currentUser.Id);

      }
      this.isOfficer = true;

    }

  }

  ngOnDestroy(): void {

    this.paginationService.Page(1);

    this.dataSource.paginator = null;
  }


  formatDate() {
    let SpecDate1 = this.searchForm.get('SpecDate').value;
    let FromDate1 = this.searchForm.get('FromDate').value;
    let ToDate1 = this.searchForm.get('ToDate').value;

    let SpecDateUTCDate = Date.UTC(SpecDate1.getFullYear(), SpecDate1.getMonth(), SpecDate1.getDate()) - SpecDate1.getTimezoneOffset();
    let FromDateUTCDate = Date.UTC(FromDate1.getFullYear(), FromDate1.getMonth(), SpecDate1.getDate()) - FromDate1.getTimezoneOffset();
    let ToDateUTCDate = Date.UTC(ToDate1.getFullYear(), ToDate1.getMonth(), ToDate1.getDate()) - ToDate1.getTimezoneOffset();

    let specDate2 = new Date(SpecDateUTCDate);
    let FromDate2 = new Date(FromDateUTCDate);
    let ToDate12 = new Date(ToDateUTCDate);


    this.searchForm.patchValue({
      SpecDate: specDate2,
      FromDate: FromDate2,
      ToDate: ToDate12

    })

  }

  getClassType(statusId: number) {

    let className;
    switch (statusId) {
      case  ApplicationStatusEnum.approved :
        className = 'Approved';
        break;
      case ApplicationStatusEnum.Completed:
        className = 'Completed';
        break;
      case ApplicationStatusEnum.Drafted:
        className = 'drafted';
        break;
      case ApplicationStatusEnum.Pending:
        className = 'Pending';
        break;
      case ApplicationStatusEnum.Rejected:
        className = 'Rejected';
        break;
      case ApplicationStatusEnum.Submitted:
        className = 'Submitted';
        break;
    }
    return className;
  }
}
