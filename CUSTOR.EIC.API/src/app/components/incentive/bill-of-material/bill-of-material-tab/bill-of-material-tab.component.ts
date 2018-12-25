import {Component, OnInit} from '@angular/core';
import {NotificationComponent} from '../../../project-profile/notification/notification.component';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ToastrService} from 'ngx-toastr';
import {ServiceapplicationService} from '../../../setting/services-tabs/serviceApplication/serviceapplication.service';
import {AccountService} from '@custor/services/security/account.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-bill-of-material-tab',
  templateUrl: './bill-of-material-tab.component.html',
  styleUrls: ['./bill-of-material-tab.component.scss']
})
export class BillOfMaterialTabComponent implements OnInit {

  public isInvestor: boolean;
  private title: string;
  private projectName: string;
  private investorName: string;
  private ServiceApplicationId: any;
  private userName: string;

  constructor(private serviceApplicationsServices: ServiceapplicationService,
              public accountService: AccountService,
              private route: ActivatedRoute,
              private dialog: MatDialog,
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


