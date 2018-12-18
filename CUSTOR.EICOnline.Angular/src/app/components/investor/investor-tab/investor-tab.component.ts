import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DataSharingService} from '../../../Services/data-sharing.service';
import {Subscription} from 'rxjs';
import {AccountService} from '@custor/services/security/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationComponent} from "../../project-profile/notification/notification.component";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {ServicePrerequisite} from "../../../model/service-prerequisite";
import {Investor} from "../../../model/investor";
import {InvestorService} from "../investor.service";

@Component({
  selector: 'app-investor-tab',
  templateUrl: './investor-tab.component.html',
  styleUrls: ['./investor-tab.component.scss']
})
export class InvestorTabComponent implements OnInit, AfterContentChecked {
  public isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  public selectedIndex = 0;
  private subscription: Subscription;
  public title: string;
  public projectName: string;
  public investorName: string;
  public isInvestor: boolean;
  public userName: string;
  private ServiceApplicationId: any;
  public registrationIndex: any;
  public isExistingCustomer: boolean;
  private InvestorId: any;
  public Investor: Investor;
  public isNew: any;

  constructor(private accountService: AccountService,
              public router: Router,
              private investorService: InvestorService,
              public dialog: MatDialog,
              public route: ActivatedRoute,
              public dataSharing: DataSharingService) {
  }

  ngOnInit() {

    this.subscription = this.dataSharing.steeperIndex
      .subscribe(index => {
        this.registrationIndex = index;
      });
    this.getUserType();

    this.title = localStorage.getItem('title');
    this.projectName = localStorage.getItem('projectName');
    this.investorName = localStorage.getItem('investorName');
    this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
    this.InvestorId = this.route.snapshot.params['InvestorId'] || this.route.snapshot.params['investorId'];

    this.getInvestor();
    this.userName = this.accountService.currentUser.FullName;
  }

  getUserType() {
    this.isInvestor = this.accountService.getUserType();
  }

  addMessage() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      ServiceApplicationId: this.ServiceApplicationId,
    };
    this.dialog.open(NotificationComponent, dialogConfig);


  }

  getInvestor() {

    this.investorService.getInvestor(this.InvestorId)
      .subscribe((result: Investor) => {
        this.Investor = result;
      });
  }

  ngAfterContentChecked(): void {
    // this.getInvestor();
    console.log('ngAfterViewChecked')
    //   this.getInvestor();
    // this.isNew=this.route.snapshot.params['IsExistingCustomer']
  }



  ngAfterContentInit(): void {
    console.log('ngAfterViewChecked')
    //   this.getInvestor();
  }

  // ngAfterViewInit(): void {
  //   console.log('log')
  //   this.getInvestor();
  //
  // }
  //
  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked')
  //   this.getInvestor();
  // }

}

