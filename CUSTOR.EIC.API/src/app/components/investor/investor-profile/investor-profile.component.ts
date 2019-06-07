import {Component, OnInit, ViewChild} from '@angular/core';
import {DataSharingService} from "../../../Services/data-sharing.service";
import {Subscription} from "rxjs";
import {MatStepper} from "@angular/material";
import {AccountService} from "@custor/services/security/account.service";
import {Router} from "@angular/router";

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

  constructor(private dataSharing: DataSharingService,
              private router: Router,
              private accountService: AccountService) {
  }

  ngOnInit() {
    this.hasInvestor = localStorage.getItem('InvestorId');
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

}
