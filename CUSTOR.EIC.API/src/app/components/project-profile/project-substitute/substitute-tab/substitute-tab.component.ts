import {Component, OnInit} from '@angular/core';
import {DataSharingService} from '../../../../Services/data-sharing.service';
import {Subscription} from 'rxjs';
import {AccountService} from '@custor/services/security/account.service';
import {NotificationComponent} from '../../notification/notification.component';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-substitute-tab',
  templateUrl: './substitute-tab.component.html',
  styleUrls: ['./substitute-tab.component.scss']
})
export class SubstituteTabComponent implements OnInit {

  public isInvestor: boolean;
  public title: string | null;
  private subscription: Subscription;
  public renewalIndex: any;
  public projectName: string | null;
  public investorName: string | null;
  private ServiceApplicationId: any;
  private userName: string;

  constructor(public accountService: AccountService,
              public dialog: MatDialog,
              public route: ActivatedRoute,
              private dataSharing: DataSharingService) {

  }

  ngOnInit() {
    this.getUserType();
    this.subscription = this.dataSharing.renewalIndex
      .subscribe(index => {
        this.renewalIndex = index;

      });
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
      ServiceApplicationId: this.ServiceApplicationId,
      title: 'Angular For Beginners'
    };
    this.dialog.open(NotificationComponent, dialogConfig);

  }
}



