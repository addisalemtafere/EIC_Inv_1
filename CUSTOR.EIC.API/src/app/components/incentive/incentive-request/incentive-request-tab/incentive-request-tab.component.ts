import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {ServiceapplicationService} from '../../../setting/services-tabs/serviceApplication/serviceapplication.service';
import {AccountService} from '@custor/services/security/account.service';
import {NotificationComponent} from '../../../project-profile/notification/notification.component';

import {MatDialog, MatDialogConfig} from '@angular/material';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-incentive-request-tab',
  templateUrl: './incentive-request-tab.component.html',
  styleUrls: ['./incentive-request-tab.component.scss']
})
export class IncentiveRequestTabComponent implements OnInit {
  public isInvestor: boolean;

  private ServiceApplicationId: any;
  private ProjectId: any;

  private title: string;
  private projectName: string;
  private investorName: string;
  private userName: string;


  constructor(private serviceApplicationsServices: ServiceapplicationService,
              public accountService: AccountService,
              private dialog: MatDialog,
              private route: ActivatedRoute,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'] || this.route.snapshot.params['serviceApplicationId'];
    this.ProjectId = this.route.snapshot.params['ProjectId'] || this.route.snapshot.params['projectId'];
    this.getUserType();

    this.title = localStorage.getItem('title');
    this.projectName = localStorage.getItem('projectName');
    this.investorName = localStorage.getItem('investorName');
    this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];

    this.userName = this.accountService.currentUser.FullName;

  }

  getUserType() {
    this.isInvestor = this.accountService.getUserType();
  }

  addMessage() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      ServiceApplicationId: this.ServiceApplicationId
    };
    // this.dialog.open(NotificationComponent);
    this.dialog.open(NotificationComponent, dialogConfig);


  }
}
