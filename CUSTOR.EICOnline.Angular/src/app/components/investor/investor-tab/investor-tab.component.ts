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
  public investor: Investor;
  public isNew = false;
  private isNewListener: number;
  private isNewFirst: number;
  private isNewListener2: number;

  constructor(private accountService: AccountService,
              public router: Router,
              private investorService: InvestorService,
              public dialog: MatDialog,
              public route: ActivatedRoute,
              public dataSharing: DataSharingService) {
    this.investor = new Investor();
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
    if (this.InvestorId != 0) {
      this.getInvestor();
    }
    this.userName = this.accountService.currentUser.FullName;
    // this.isNewFirst = this.route.snapshot.params['IsExistingCustomer'];
    this.isNewListener = this.route.snapshot.params['IsExistingCustomer'];

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
        this.investor = result;
        this.isNew = result.IsExistingCustomer;
        this.isNewListener = (this.isNew == true) ? 1 : 0
        // this.isNewListener = this.route.snapshot.params['IsExistingCustomer'];

        const ServiceApplicationId1 = this.route.snapshot.params['ServiceApplicationId'];
        const InvestorId1 = this.route.snapshot.params['InvestorId'] || this.route.snapshot.params['investorId'];
        this.router.navigate(['investor-tab/1235/' + ServiceApplicationId1 + '/' + InvestorId1 + '/' + this.isNewListener]);

      });
  }

  ngAfterContentChecked(): void {

    this.isNewFirst = this.route.snapshot.params['IsExistingCustomer'];
    // console.log('1= ' + this.isNewFirst)
    // console.log('2= ' + this.isNewListener)
    if (this.isNewListener != this.isNewFirst) {
      // this.isNewFirst = this.isNewListener;
      this.isNewListener = this.isNewFirst;
      this.getInvestor();
      console.log('inside 1= ' + this.isNewFirst)
      console.log('inside 2= ' + this.isNewListener)
    }
  }


}

