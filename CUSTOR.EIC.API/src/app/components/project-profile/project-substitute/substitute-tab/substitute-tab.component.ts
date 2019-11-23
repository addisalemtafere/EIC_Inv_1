import {AfterContentChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DataSharingService} from '../../../../Services/data-sharing.service';
import {Subscription} from 'rxjs';
import {AccountService} from '@custor/services/security/account.service';
import {NotificationComponent} from '../../notification/notification.component';
import {MatDialog, MatDialogConfig, MatStepper} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {ServiceApplicationService} from '../../../../Services/service-application.service';

@Component({
  selector: 'app-substitute-tab',
  templateUrl: './substitute-tab.component.html',
  styleUrls: ['./substitute-tab.component.scss']
})
export class SubstituteTabComponent implements  OnInit, AfterViewInit, AfterContentChecked {

  public isInvestor: boolean;
  public title: string | null;
  // private subscription: Subscription;
  // public nextIndex: number;
  // public projectName: string | null;
  // public investorName: string | null;
  private ServiceApplicationId: any;
  private userName: string;

// for navigation
  @ViewChild('stepper') stepper: MatStepper;
  private subscription: Subscription;
  public nextIndex: number;
  private currentPosition: string;
  private upeerLimit: any;
  public ServiceId: string;
  public projectName: string | null;
  public investorName: string | null;
  public steeperIndex = 0;
  // end for navigation
  constructor(public accountService: AccountService,
              public dialog: MatDialog,
              public route: ActivatedRoute,
              private serviceApplicationservice: ServiceApplicationService,
              private dataSharing: DataSharingService) {

  }

  ngOnInit() {
    // this.currentPosition = 'f';
    this.ServiceId = this.route.snapshot.params['ServiceId'];
    this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'] || this.route.snapshot.params['serviceApplicationId'];
    this.serviceApplicationservice.getOneById(this.ServiceApplicationId)
      .subscribe(r => {
        this.upeerLimit = r.CurrentStep;
        console.log(this.upeerLimit);
      });
    this.getUserType();
    // this.getUserType();
    // this.subscription = this.dataSharing.renewalIndex
    //   .subscribe(index => {
    //     this.renewalIndex = index;
    //
    //   });
    // this.title = localStorage.getItem('title');
    // this.projectName = localStorage.getItem('projectName');
    // this.investorName = localStorage.getItem('investorName');
    // this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];

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
  move(index: number) {
    this.stepper.selectedIndex = index;
  }
  ngAfterViewInit(): void {
    this.move(this.steeperIndex);
  }
  ngAfterContentChecked() {
    this.title = localStorage.getItem('title');
    this.projectName = localStorage.getItem('projectName');
    this.investorName = localStorage.getItem('investorName');
    this.subscription = this.dataSharing.steeperIndex
      .subscribe(index => {
        this.steeperIndex = index;
        this.move(this.steeperIndex);
      });
    this.subscription = this.dataSharing.currentIndex
      .subscribe(index => {
        this.nextIndex = this.upeerLimit;
      });
  }
}



