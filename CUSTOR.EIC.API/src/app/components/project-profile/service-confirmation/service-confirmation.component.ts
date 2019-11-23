import {Component, OnInit} from '@angular/core';
import {ServiceapplicationService} from "../../setting/services-tabs/serviceApplication/serviceapplication.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ErrorMessage} from "@custor/services/errMessageService";
import {ToastrService} from "ngx-toastr";
import {Permission} from "../../../model/security/permission.model";
import {AccountService} from "@custor/services/security/account.service";
import {Lookup} from "../../../model/lookupData";
import {ServiceApplicationModel} from "../../../model/ServiceApplication.model";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {NotificationComponent} from "../notification/notification.component";
import {ApplicationStatusEnum} from "../../../enum/enums";
import {ProjectAssociateService} from '../../../Services/project-associate.service';
import {DataSharingService} from '../../../Services/data-sharing.service';

@Component({
  selector: 'app-service-confirmation',
  templateUrl: './service-confirmation.component.html',
  styleUrls: ['./service-confirmation.component.scss']
})
export class ServiceConfirmationComponent implements OnInit {
  public ServiceApplicationId: any;
  public ProjectId: any;
  public confirm = true;
  lookup: Lookup;
  private ServiceApplication: ServiceApplicationModel;

  constructor(public serviceApplicationsServices: ServiceapplicationService,
              public router: Router,
              public dialog: MatDialog,
              public toast: ToastrService,
              public accountService: AccountService,
              private errMsg: ErrorMessage,
              private toastr: ToastrService,
              public route: ActivatedRoute,
              private dataSharing: DataSharingService,
              private dataSharingService: DataSharingService,
              private projectAssociateService: ProjectAssociateService

  ) {
    this.lookup = new Lookup();
  }

  ngOnInit() {
    this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
    console.log(this.ServiceApplicationId)
    this.ProjectId = this.route.snapshot.params['ProjectId'];
    this.getServiceApplication();
    this.getProjectAssociate(this.ProjectId);
    console.log(this.ProjectId);
  }

  submitApplication() {
    this.serviceApplicationsServices.finalForApprovalServiceApplications(this.ServiceApplicationId)
      .subscribe(result => {
        this.confirm = true;
        // console.log(result);
        this.toastr.success('Application is submitted successfully.' +
          ' We will verify your application and submitted documents ' +
          'and notify you for any actions required');
        this.router.navigate(['/dashboard']);
      });

  }

  Approve() {
    // this.lookup.Code = 44447;
    this.lookup.Code = ApplicationStatusEnum.approved;
    this.serviceApplicationsServices.changeApplicationStatus(this.lookup, this.ServiceApplicationId)
      .subscribe(result => {
        this.toast.success('Project approved successfully ', 'Success');
      });

  }

  addMessage() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      ServiceApplicationId: this.ServiceApplicationId,
      title: 'License'
    };
    this.dialog.open(NotificationComponent, dialogConfig);


  }


  back() {
    window.history.back();
  }


  get canManageTask() {
    return this.accountService.getUserType();

  }


  private getServiceApplication() {
    this.serviceApplicationsServices.getServiceAppliaction(this.ServiceApplicationId)
      .subscribe(result => {
        this.ServiceApplication = result;
      })
  }

   getProjectAssociate(ProjectId) {
    this.projectAssociateService.associateProject(ProjectId).subscribe(r => {
      if(r.length ==0){
        this.toastr.warning('Please Select a manager for the project and submit the application' +
          ' for approval!');
        this.dataSharing.steeperIndex.next(9);
        setTimeout(() => this.dataSharing.steeperIndex.next(9), 0);
        setTimeout(() => this.dataSharing.currentIndex.next(9), 0);
      }
    });
  }

}
