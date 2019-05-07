import {Component, OnInit} from '@angular/core';
import {AccountService} from '@custor/services/security/account.service';
import {DataSharingService} from '../../../Services/data-sharing.service';
import {Subscription} from 'rxjs';
import {NotificationComponent} from '../notification/notification.component';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-project-renewal-tab',
  templateUrl: './project-renewal-tab.component.html',
  styleUrls: ['./project-renewal-tab.component.scss']
})
export class ProjectRenewalTabComponent implements OnInit {
  public isInvestor: boolean;
  public isRenewal: boolean;
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
        // // console.log(index)
        // this.move(this.steeperIndex);
      });


    this.title = localStorage.getItem('title');
    this.projectName = localStorage.getItem('projectName');
    this.investorName = localStorage.getItem('investorName');
    this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];

    this.userName = this.accountService.currentUser.FullName;
  }

  getUserType() {
    this.isInvestor = this.accountService.getUserType();
    if(!this.isInvestor){
      this.isRenewal=true;
    }
    else
    {
      this.isRenewal=false;
    }
  }

  addMessage() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      ServiceApplicationId: this.ServiceApplicationId,
      title: 'Add message'
    };
    // this.dialog.open(NotificationComponent);
    this.dialog.open(NotificationComponent, dialogConfig);


  }
}


