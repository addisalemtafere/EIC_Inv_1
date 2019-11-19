import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSharingService } from "../../../Services/data-sharing.service";
import { Subscription } from "rxjs";
import { MatStepper, MatDialog, MatDialogConfig} from "@angular/material";
import { AccountService } from "@custor/services/security/account.service";
import { Router, ActivatedRoute } from "@angular/router";
import { InvestorService } from '../investor.service';
import { NotificationComponent } from "../../project-profile/notification/notification.component";

@Component({
  selector: 'app-investor-profile',
  templateUrl: './investor-profile.component.html',
  styleUrls: ['./investor-profile.component.scss']
})
export class InvestorProfileComponent implements OnInit {
  public registrationIndex = 0;
  private subscription: Subscription;
  private steeperIndex: any;
  public nextIndex: any;
  private upeerLimit: any;
  @ViewChild('stepper') stepper: MatStepper;
  public isInvestor: boolean;
  public userName: string;
  public hasInvestor: string;
  public investorId :any;
  public ServiceApplicationId :any;
  public serviceId :any;
  public completed = false;
  public completedProfile = false;
  constructor(private dataSharing: DataSharingService,
    private router: Router,
    public activatedRoute: ActivatedRoute,
    private investorService: InvestorService,
    public dialog: MatDialog,
    private accountService: AccountService) {
    console.log(this.activatedRoute.snapshot.params)
    this.investorId = this.activatedRoute.snapshot.params.InvestorId;
    this.ServiceApplicationId = this.activatedRoute.snapshot.params.ServiceApplicationId;
    if (this.ServiceApplicationId==undefined){
      this.ServiceApplicationId = localStorage.getItem('user-serviceApplicationId');
      console.log(this.ServiceApplicationId)
    } 
    console.log(this.ServiceApplicationId);
    console.log(this.investorId);
  }
  ngOnInit() {
    this.hasInvestor = localStorage.getItem('InvestorId');
    console.log(localStorage.getItem('profile-completed'))
    if (localStorage.getItem('profile-completed') == 'true'){
      if (localStorage.getItem('profile-approved') == 'true'){
        console.log("profile approved");
        this.completed = false;
        this.completedProfile = false;
      }
      else{
        console.log("profile completed");
        this.completed = true;
        this.completedProfile = true;
      }
      
    }
    else{
      this.completed = false;
      this.completedProfile = false;
      this.serviceId = this.activatedRoute.snapshot.params.ServiceId;
      console.log(this.serviceId)
      console.log("incomplete profile")
    }
    this.getUserType();

    this.subscription = this.dataSharing.steeperIndex
      .subscribe(index => {
        this.registrationIndex = index;
      });

    this.subscription = this.dataSharing.steeperIndex
      .subscribe(index => {
        this.steeperIndex = index;
        this.move(this.steeperIndex);
      });
    this.subscription = this.dataSharing.currentIndex
      .subscribe(index => {
        this.nextIndex = index;
        this.upeerLimit = index;
      });

    this.userName = this.accountService.currentUser.FullName;

  }

  move(index: number) {
    this.stepper.selectedIndex = index;
  }

  getUserType() {
    this.isInvestor = this.accountService.getUserType();
  }

  toServiceList() {
    this.router.navigate(['/service-list']);
  }
  submitApplication(){
    this.investorService.submitServiceApplication(this.ServiceApplicationId).subscribe(res=>{
      console.log(res)
      this.completed = true;
    })
  }
  addMessage(){
    // alert("addMessage")
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      ServiceApplicationId: this.ServiceApplicationId
    };
    this.dialog.open(NotificationComponent, dialogConfig);
  }

}
