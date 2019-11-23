import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {NotificationComponent} from '../project-profile/notification/notification.component';
import {DataSharingService} from '../../Services/data-sharing.service';
import {Subscription} from 'rxjs';
import {AccountService} from "@custor/services/security/account.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-officer-stepper',
  templateUrl: './officer-stepper.component.html',
  styleUrls: ['./officer-stepper.component.scss']
})
export class OfficerStepperComponent implements OnInit {
  public subscription: Subscription;
  public renewalIndex: any;
  private ServiceApplicationId: any;
  private userName: string;
  private isInvestor: any;
  public title: string | null;
  public projectName: string | null;
  public investorName: string | null;
// Standard tabs demo
  constructor(public dialog: MatDialog,
              private accountService: AccountService,
              private route: ActivatedRoute,
              private dataSharing: DataSharingService) {
  }

  ngOnInit() {
    this.title = localStorage.getItem('title');
    this.projectName = localStorage.getItem('projectName');
    this.investorName = localStorage.getItem('investorName');
    this.subscription = this.dataSharing.renewalIndex
      .subscribe(index => {
        this.renewalIndex = index;
      });
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
      title: 'License'
    };
    this.dialog.open(NotificationComponent, dialogConfig);
  }
}

