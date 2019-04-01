import { ConfirmDialog2Component } from './../../confirm-dialog2/confirm-dialog2.component';
import { Component, OnInit } from '@angular/core';
import { ServiceModel } from '../../../model/Service.model';
import { ToastrService } from 'ngx-toastr';
import { fadeInOut } from '../../../../@custor/services/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatSnackBar, MatDialogConfig } from '@angular/material';
import { ServiceService } from '../../../Services/service.service';
import { DataSharingService } from '../../../Services/data-sharing.service';
import { IncentiveLogModel } from '../../../model/IncentiveLog.model';
import { AccountService } from '@custor/services/security/account.service';
import { ProjectListModalComponent } from '../../project-list-modal/project-list-modal.component';
import { ServiceApplicationModel } from '../../../model/ServiceApplication.model';
import { ServiceApplicationService } from '../../../Services/service-application.service';
import { NotificationComponent } from 'app/components/project-profile/notification/notification.component';

@Component({
  selector: 'app-customer-service-list',
  templateUrl: './customerServices.component.html',
  styleUrls: ['./customerServices.component.scss'],
  animations: [fadeInOut]
})
export class CustomerServiceStarterComponent implements OnInit {
  customerServices: ServiceModel[];
  m: IncentiveLogModel;
  loadingIndicator: boolean;
  private serviceApplication: ServiceApplicationModel;
  confirmDialogRef: any;
  result: any;

  constructor(
    public router: Router,
    public dialog: MatDialog,
    public dataSharing: DataSharingService,
    public serviceService: ServiceService,
    public accountService: AccountService,
    public snackbar: MatSnackBar,
    public serviceapplicationService: ServiceApplicationService,
    public route: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.m = new IncentiveLogModel();
    this.serviceApplication = new ServiceApplicationModel();
  }

  ngOnInit() {
    this.getServices();
  }

  getServices() {
    this.serviceService.getAll().subscribe(result => {
      this.customerServices = result;
    });
  }

  public startService(serviceId: any, title: string) {
    if (localStorage.getItem('InvestorId') !== null) {
      localStorage.setItem('title', title);
      setTimeout(() => this.dataSharing.currentIndex.next(0), 0);

      localStorage.setItem('currentIndex', '0');

      const investorId = +localStorage.getItem('InvestorId');

      switch (serviceId) {
        case 13:
          this.router.navigate(['pro/' + 0 + '/' + 0 + '/' + serviceId + '/' + 0 + '/' + investorId]);
          break;

        case 1045:
        case 1054:
        case 1046:
        case 1047:

        case 18:
        case 19:

        case 1027:
        case 1028:
        case 1237:
          this.router.navigate(['/investor-project-list/' + serviceId]);
          break;

        case 1236:
          this.router.navigate(['/business-tab/' + serviceId + '/' + investorId + '/' + 0 + '/' + 0 + '/' + 0 + '/' + 0]);
          break;

        case 1235:
          this.startCustomerRegistrationService(serviceId, investorId);
          break;
        case 1023:
          ;

          if (this.checkType()) {
            this.router.navigate(['/investor-project-list/' + serviceId]);
          } else {
            this.router.navigate(['pro/' + 0 + '/' + 0 + '/' + serviceId + '/' + 0 + '/' + investorId]);
          }
          break;
        default:
          this.router.navigate(['/notfound'], { relativeTo: this.route });
          break;
      }
      this.dialog.closeAll();
    } else {
      this.notification('Your Profile Must be completed');
      this.router.navigate(['/investor-tab/1235/0/0/0/0']);
    }
  }

  checkType(): boolean {



    this.confirmDialogRef = this.dialog.open(ConfirmDialog2Component, {
      disableClose: false
    });

    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
    this.confirmDialogRef.afterClosed().subscribe(data => {
      this.result = data;

    });
    return this.result;
  }


  notification(message: string) {
    this.snackbar.open(`  ${message} .!`, 'Close', {
      duration: 3000
    });
  }

  selectProject(serviceId: any) {
    this.dialog.open(ProjectListModalComponent);
  }

  startCustomerRegistrationService(serviceId: any, investorId: any) {
    this.serviceApplication.ProjectId = 0;
    this.serviceApplication.ServiceId = serviceId;
    this.serviceApplication.InvestorId = investorId;
    this.serviceApplication.CaseNumber = '1';
    this.serviceApplication.CurrentStatusId = 44450;
    this.serviceApplication.IsSelfService = true;
    this.serviceApplication.IsPaid = true;
    this.serviceApplication.CreatedUserId = 1;
    this.serviceApplication.IsActive = false;

    this.serviceapplicationService
      .create(this.serviceApplication)
      .subscribe(result => {
        this.router.navigate(['/investor-tab/' + serviceId + '/' + result.ServiceApplicationId + '/' + investorId + '/' + 0 + '/' + result.ServiceWorkflow[0].ServiceWorkflowId]);
      });
  }

  close() {
    window.history.back();
  }
}
