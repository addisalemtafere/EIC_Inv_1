import {Component, OnInit} from '@angular/core';
import {NotificationComponent} from '../../../project-profile/notification/notification.component';
import {ToastrService} from 'ngx-toastr';
import {ServiceapplicationService} from '../../../setting/services-tabs/serviceApplication/serviceapplication.service';
import {AccountService} from '@custor/services/security/account.service';
import {MatDialog} from '@angular/material';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tax-exemption-tab',
  templateUrl: './tax-exemption-tab.component.html',
  styleUrls: ['./tax-exemption-tab.component.scss']
})
export class TaxExemptionTabComponent implements OnInit {
  public isInvestor: boolean;

  constructor(private serviceApplicationsServices: ServiceapplicationService,
              public accountService: AccountService,
              private dialog: MatDialog,
              public route: ActivatedRoute,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.getUserType();
  }

  UpdateServiceApplication() {
    this.serviceApplicationsServices.finalForApprovalServiceApplications(
      this.route.snapshot.params['ServiceApplicationId'])
      .subscribe(result => {
        console.log(result);
        this.toastr.success('Application submitted successfully we will revise soon as well as  we will notify for any action required');
      });
  }

  getUserType() {
    this.isInvestor = this.accountService.getUserType();
    console.log(this.isInvestor);
  }

  addMessage() {
    this.dialog.open(NotificationComponent);

  }
}
