import {Component, OnInit} from '@angular/core';
import {NotificationComponent} from '../../../project-profile/notification/notification.component';
import {ToastrService} from 'ngx-toastr';
import {ServiceapplicationService} from '../../../setting/services-tabs/serviceApplication/serviceapplication.service';
import {AccountService} from '@custor/services/security/account.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tax-exemption-tab',
  templateUrl: './tax-exemption-tab.component.html',
  styleUrls: ['./tax-exemption-tab.component.scss']
})
export class TaxExemptionTabComponent implements OnInit {
  public isInvestor: boolean;
  private title: string;
  private projectName: string;
  private investorName: string;
  private ServiceApplicationId: any;
  private userName: string;

  constructor(private serviceApplicationsServices: ServiceapplicationService,
              public accountService: AccountService,
              private dialog: MatDialog,
              private route: ActivatedRoute,
              private toastr: ToastrService) {
  }

  ngOnInit() {
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
