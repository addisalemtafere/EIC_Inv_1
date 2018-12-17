import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {ServiceapplicationService} from '../../../setting/services-tabs/serviceApplication/serviceapplication.service';
import {AccountService} from '@custor/services/security/account.service';
import {NotificationComponent} from '../../../project-profile/notification/notification.component';
import {MatDialog} from '@angular/material';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-incentive-request-tab',
  templateUrl: './incentive-request-tab.component.html',
  styleUrls: ['./incentive-request-tab.component.scss']
})
export class IncentiveRequestTabComponent implements OnInit {
  public isInvestor: boolean;
  private ServiceApplicationId: any;
  private ProjectId: any;

  constructor(private serviceApplicationsServices: ServiceapplicationService,
              public accountService: AccountService,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'] || this.route.snapshot.params['serviceApplicationId'];
    this.ProjectId = this.route.snapshot.params['ProjectId'] || this.route.snapshot.params['projectId'];
    this.getUserType();

  }

  UpdateServiceApplication() {
    this.serviceApplicationsServices.finalForApprovalServiceApplications(
      this.ServiceApplicationId)
      .subscribe(result => {
        console.log(result);
        this.toastr.success('Application submitted successfully we will revise soon as well as  we will notify for any action required');
      });
  }

  getUserType() {
    this.isInvestor = this.accountService.getUserType();
  }

  addMessage() {
    this.dialog.open(NotificationComponent);

  }
}
