import {Component, OnInit, ViewChild} from '@angular/core';
import {AccountService} from '@custor/services/security/account.service';
import {DataSharingService} from '../../../Services/data-sharing.service';
import {Subscription} from 'rxjs';
import {NotificationComponent} from '../notification/notification.component';
import {MatDialog, MatDialogConfig, MatStepper, MatTab} from '@angular/material';
import {ActivatedRoute} from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { ServiceEnum } from 'app/enum/enums';
import { ServiceapplicationService } from 'app/components/setting/services-tabs/serviceApplication/serviceapplication.service';

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
  // <<< for nav
  public renewalIndex: any;
  public nextIndex: number;
  private currentPosition: string;
  private upeerLimit: any;
  public steeperIndex = 0;
  public selectedTabIndex=0;
  // >>>>>
  public projectName: string | null;
  public investorName: string | null;
  private ServiceApplicationId: any;
  private userName: string;
  public ServiceId: string;
  @ViewChild('stepper') stepper: MatStepper;
  // @ViewChild(MatTab)
  public ProjectId: string;
  public InvestorId: string;

  constructor(public accountService: AccountService,
              public dialog: MatDialog,
              private toast: ToastrService,
              public route: ActivatedRoute,
              private dataSharing: DataSharingService,
              private serviceApplicationService: ServiceapplicationService) {
  }
  ngOnInit() {
   //  this.getUserType();
   // //<<< for the nav
   //  this.currentPosition = 'f';
   //  this.ServiceId = this.route.snapshot.params['ServiceId'] || this.route.snapshot.params['serviceId'];
   //  // >>>>
   //  this.title = localStorage.getItem('title');
   //  this.projectName = localStorage.getItem('ProjectName');
   //  this.investorName = localStorage.getItem('investorName');
   //  this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
   //  this.InvestorId = this.route.snapshot.params['InvestorId'] || this.route.snapshot.params['investorId'];
   //  this.ProjectId = this.route.snapshot.params['ProjectId'] || this.route.snapshot.params['projectId'];
   //  this.userName = this.accountService.currentUser.FullName;
   //  this.serviceApplicationService.getOneById(this.ServiceApplicationId)
   //  .subscribe(sapr=>{
   //    this.nextIndex = sapr.CurrentStep;
   //  });
  }

  // getUserType() {
  //   this.isInvestor = this.accountService.getUserType();
  //   if(!this.isInvestor){
  //     this.isRenewal=true;
  //   }
  //   else
  //   {
  //     this.isRenewal=false;
  //   }
  // }
  //
  // addMessage() {
  //   const dialogConfig = new MatDialogConfig();
  //
  //   dialogConfig.data = {
  //     ServiceApplicationId: this.ServiceApplicationId,
  //     title: 'Add message'
  //   };
  //   // this.dialog.open(NotificationComponent);
  //   this.dialog.open(NotificationComponent, dialogConfig);
  // }
  // move(index: number) {
  //   this.stepper.selectedIndex = index;
  // }
  //
  //
  //
  // ngAfterViewInit(): void {
  //   this.move(this.steeperIndex);
  //
  // }
  //
  // ngAfterContentChecked() {
  //   this.title = localStorage.getItem('title');
  //   this.projectName = localStorage.getItem('projectName');
  //   this.investorName = localStorage.getItem('investorName');
  //   this.subscription = this.dataSharing.steeperIndex
  //     .subscribe(index => {
  //       this.steeperIndex = index;
  //       // // console.log(this.steeperIndex);
  //       this.move(this.steeperIndex);
  //     });
  //     this.upeerLimit = this.nextIndex;
  //     // console.log(this.upeerLimit);
  //   // this.subscription = this.dataSharing.currentIndex
  //   //   .subscribe(index => {
  //   //     this.nextIndex = index;
  //   //     this.upeerLimit = index;
  //   //   });
  //   // this.nextIndex = +localStorage.getItem('currentIndex');
  // }
  //
  // back() {
  //   if (this.ServiceId !== ServiceEnum.Renewal.toString()) {
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
  //
  // }
  //
  // next() {
  //   if (this.ServiceId  !== ServiceEnum.Renewal.toString()) {
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
  // }
}


