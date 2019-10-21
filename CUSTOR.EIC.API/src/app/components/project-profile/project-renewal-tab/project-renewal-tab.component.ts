import {AfterContentChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {AccountService} from '@custor/services/security/account.service';
import {DataSharingService} from '../../../Services/data-sharing.service';
import {Subscription} from 'rxjs';
import {NotificationComponent} from '../notification/notification.component';
import {MatDialog, MatDialogConfig, MatStepper} from '@angular/material';
import {ActivatedRoute} from "@angular/router";
import {ServiceApplicationService} from '../../../Services/service-application.service';

@Component({
  selector: 'app-project-renewal-tab',
  templateUrl: './project-renewal-tab.component.html',
  styleUrls: ['./project-renewal-tab.component.scss']
})
export class ProjectRenewalTabComponent implements OnInit, AfterViewInit, AfterContentChecked {
  public isInvestor: boolean;
  public isRenewal: boolean;
  public title: string | null;
  // public renewalIndex: any;
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
    this.currentPosition = 'f';
    this.ServiceId = this.route.snapshot.params['ServiceId'];
    this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'] || this.route.snapshot.params['serviceApplicationId'];
    this.serviceApplicationservice.getOneById(this.ServiceApplicationId)
      .subscribe(r => {
        this.upeerLimit = r.CurrentStep;
        console.log(this.upeerLimit);
      });
    this.getUserType();
    // this.subscription = this.dataSharing.renewalIndex
    //   .subscribe(index => {
    //     this.nextIndex = this.upeerLimit;
    //   });
    //
    //
    // this.title = localStorage.getItem('title');
    // this.projectName = localStorage.getItem('projectName');
    // this.investorName = localStorage.getItem('investorName');
    // this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
    //
    // this.userName = this.accountService.currentUser.FullName;
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
    this.dialog.open(NotificationComponent, dialogConfig);
  }
  /// for navigation
  move(index: number) {
    this.stepper.selectedIndex = index;
  }
  //
  //
  //
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
        console.log(this.steeperIndex);
        this.move(this.steeperIndex);
      });
    this.subscription = this.dataSharing.currentIndex
      .subscribe(index => {
            this.nextIndex = this.upeerLimit;
        // this.nextIndex = index;
        // this.upeerLimit = index;
        console.log(this.nextIndex);
      });
    // this.nextIndex = +localStorage.getItem('currentIndex');
  }
  //
  // back() {
  //   if (this.ServiceId === '18') {
  //     this.toast.warning('you can not go back because you have not privilege');
  //   } else {
  //
  //     this.currentPosition = 'b';
  //     if (this.currentPosition === 'f' || this.currentPosition === null) {
  //       this.steeperIndex--;
  //     }
  //     if (this.steeperIndex > 0) {
  //       this.steeperIndex--;
  //       this.stepper.selectedIndex = this.steeperIndex;
  //     }
  //   }
  //   console.log(this.currentPosition);
  //   console.log(this.steeperIndex);
  // }
  //
  // next() {
  //   if (this.ServiceId === '1234') {
  //     this.toast.warning('You can not go next because you have not privilege');
  //   } else {
  //     this.currentPosition = 'f';
  //     if (this.currentPosition === 'b' || this.currentPosition === null) {
  //       this.steeperIndex++;
  //     }
  //     if (this.steeperIndex < this.upeerLimit) {
  //       this.steeperIndex++;
  //       this.stepper.selectedIndex = this.steeperIndex;
  //     }
  //   }
  //   console.log(this.currentPosition);
  //   console.log(this.steeperIndex);
  // }
  /// end for navigation
}


