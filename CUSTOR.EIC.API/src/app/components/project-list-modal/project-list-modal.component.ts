import {Component, OnInit, ViewChild} from '@angular/core';
import {ProjectProfileService} from '../../Services/project-profile.service';
import {ProjectModel} from '../../model/project.model';
import {AccountService} from '@custor/services/security/account.service';
import {IncentiveLogModel} from '../../model/IncentiveLog.model';
import {IncentiveLogService} from '../../Services/incentive-log.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Utilities} from '@custor/helpers/utilities';
import {Investor} from '../../model/investor';
import {ServiceapplicationService} from '../setting/services-tabs/serviceApplication/serviceapplication.service';
import {ServiceApplicationModel} from '../../model/ServiceApplication.model';
import {ErrorMessage} from '@custor/services/errMessageService';
import {ApplicationStatusEnum} from "../../enum/enums";

@Component({
  selector: 'app-project-list-modal',
  templateUrl: './project-list-modal.component.html',
  styleUrls: ['./project-list-modal.component.scss']
})
export class ProjectListModalComponent implements OnInit {
  public projectList: ProjectModel[];
  m: IncentiveLogModel;
  public ProjectId: any;
  public inId: number;
  public title: string;
  dataSource2: any;
  public serviceApplication: ServiceApplicationModel;
  displayedColumnsProject = ['ProjectName', 'startDate', 'InvestmentActivity', 'status', 'Action'];
  @ViewChild(MatPaginator) paginator2: MatPaginator;
  sourceInvestor: Investor;
  loadingIndicator: boolean;
  projectModel: ProjectModel;
  private ServiceId: any;
  private ExemptionYear: any;

  constructor(private projetServices: ProjectProfileService,
              private accountService: AccountService,
              private serviceapplicationService: ServiceapplicationService,
              private toastr: ToastrService, private projectProfileService: ProjectProfileService,
              private router: Router,
              private errMsg: ErrorMessage,
              private route: ActivatedRoute,
              private incentiveLogService: IncentiveLogService) {
    this.m = new IncentiveLogModel();
    this.serviceApplication = new ServiceApplicationModel();
  }

  ngOnInit() {
    this.getAllProjects();
    this.select(localStorage.getItem('InvestorId'));
    this.ServiceId = this.route.snapshot.params['ServiceId'];

  }

  getAllProjects() {
    this.projetServices.getProjectOnlyByInvestorId(+localStorage.getItem('InvestorId'))
      .subscribe(result => {
        this.projectList = result;
      });
  }

  select(InvestorId: any) {
    localStorage.setItem('InvestorId', InvestorId);
    this.loadingIndicator = true;
    this.projetServices.getProjectByInvestorId(InvestorId)
      .subscribe(result => {
          this.projectList = result;
          this.title = 'ProjectDetail';
          if (!this.projectList) {
            this.loadingIndicator = false;
            this.toastr.error('No records were found to list', 'Error', {
              closeButton: true,
            });
          } else {
            this.loadingIndicator = false;
            this.dataSource2 = new MatTableDataSource<ProjectModel>(result);
            // console.log(result);
            this.dataSource2.paginator = this.paginator2;
          }
        },
        error => {
          this.toastr.error(`Error: "${Utilities.getHttpResponseMessage(error)}"`);
        });
    this.loadingIndicator = false;

  }


  go(projectId: any, applicationId: any, ServiceId: any, InvestorId: any) {

    if (+this.ServiceId == 1023) {
      this.router.navigate(['pro/' + projectId + '/' + 0 + '/' + 1023 + '/' + 0 + '/' + InvestorId]);
      localStorage.setItem('ParentProjectId', projectId);
    } else {

      this.serviceApplication.ProjectId = projectId;
      this.serviceApplication.ServiceId = this.ServiceId;
      this.serviceApplication.InvestorId = InvestorId;
      this.serviceApplication.CaseNumber = '1';
      this.serviceApplication.CurrentStatusId = ApplicationStatusEnum.Drafted;
      this.serviceApplication.IsSelfService = true;
      this.serviceApplication.IsPaid = true;
      this.serviceApplication.CreatedUserId = 1;
      this.serviceApplication.IsActive = false;
      this.serviceapplicationService.create(this.serviceApplication)
        .subscribe(result => {
          console.log(result);
          this.view(this.ServiceId, 'Incentive', result.ServiceApplicationId, result.ServiceWorkflow[0].ServiceWorkflowId, projectId);
        });

    }


  }

  view(serviceId: any, name: any, applicationId: any, workflowId: any, projectId: any) {
    this.title = name;
    console.log(workflowId);

    const investorId = localStorage.getItem('InvestorId');
    switch (serviceId) {

      case '1047':
        this.router.navigate(['bill-of-material/1/' + serviceId + '/' + investorId + '/' + applicationId + '/' + projectId + '/' + workflowId]);
        break;
      case '1054':
        this.router.navigate(['bill-of-material/2/' + serviceId + '/' + investorId + '/' + applicationId + '/' + projectId + '/' + workflowId]);
        break;
      case '1046':
        this.router.navigate(['incentive-request-item/' + serviceId + '/' + investorId + '/' + applicationId + '/' + projectId + '/' + workflowId]);
        break;
      case '1045':
        this.getProjectDetails(projectId);
        if (this.ExemptionYear == 0) {
          this.toastr.error('This project does not have the right to take tax Exemption incentive', 'Not Allowed');
        } else if (this.projectModel.ProjectStatus === 4) {
          this.toastr.error('Project it already cancelled', 'Not Allowed');
        } else {
          this.router.navigate(['tax-exemption/' + serviceId + '/' + investorId + '/' + applicationId + '/' + projectId + '/' + workflowId]);
        }
        break;
      case '1236':
        this.router.navigate(['business-tab/' + serviceId + '/' + investorId + '/' + applicationId + '/' + projectId + '/' + workflowId + '/' + workflowId + '/' + 0]);
        break;
      case '18':
        this.router.navigate(['/project-renewal/' + serviceId + '/' + investorId + '/' + applicationId + '/' + projectId + '/' + workflowId]);
        break;
      case '19':
        this.router.navigate(['/project-cancellation/' + serviceId + '/' + investorId + '/' + applicationId + '/' + projectId + '/' + workflowId]);
        break;
      case '1023':
        this.router.navigate(['pro/' + projectId + '/' + applicationId + '/' + serviceId + '/' + 0 + '/' + investorId]);
        break;
      case '1027':
        this.router.navigate(['/project-substitute/' + serviceId + '/' + investorId + '/' + applicationId + '/' + projectId + '/' + workflowId]);
        break;
      case '1028':
        this.router.navigate(['pro/' + projectId + '/' + applicationId + '/' + serviceId + '/' + 0 + '/' + investorId]);
        break;

    }
  }

  getProjectDetails(projectId: any) {
    this.projectProfileService.projectsDetailForLetter(projectId)
      .subscribe(result => {
          if (result) {
            this.projectModel = result;
            this.ExemptionYear = this.projectModel.IsOromiaSpecialZone ? this.projectModel.InvestmentActivity.InAddisOromiaAreas : this.projectModel.InvestmentActivity.InOtherAreas;
            console.log(this.projectModel.IsOromiaSpecialZone);
            console.log(this.ExemptionYear);
          }
        },
        error => this.errMsg.getError(error));
  }

  back() {
    window.history.back();
  }

}
