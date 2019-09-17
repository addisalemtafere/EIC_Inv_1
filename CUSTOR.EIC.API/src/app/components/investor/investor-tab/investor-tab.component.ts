import {AfterContentChecked, Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DataSharingService} from '../../../Services/data-sharing.service';
import {Subscription} from 'rxjs';
import {AccountService} from '@custor/services/security/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationComponent} from '../../project-profile/notification/notification.component';
import {MatDialog, MatDialogConfig, MatStepper} from '@angular/material';
import {Investor} from '../../../model/investor';
import {InvestorService} from '../investor.service';
import {ServiceApplicationService} from "../../../Services/service-application.service";
import {ServiceApplicationModel} from "../../../model/ServiceApplication.model";
import {ApplicationStatusEnum} from "../../../enum/enums";

@Component({
  selector: 'app-investor-tab',
  templateUrl: './investor-tab.component.html',
  styleUrls: ['./investor-tab.component.scss']
})
export class InvestorTabComponent implements OnInit, AfterContentChecked {


  @ViewChild('stepper') stepper: MatStepper;
  public selectedIndex = 0;
  public title: string;
  public projectName: string;
  public investorName: string;
  public isInvestor: boolean;
  public userName: string;
  public registrationIndex = 0;
  public isExistingCustomer: boolean;
  public InvestorId: any;
  public steeperIndex = 0;

  public investor: Investor;
  public isNew = false;
  private isNewListener: number;
  private isNewFirst: number;
  private isNewListener2: number;
  private ServiceApplicationId: any;
  private subscription: Subscription;
  public nextIndex = 0;
  private upeerLimit: any;
  private serviceApplication: ServiceApplicationModel;
  private enable: boolean;

  constructor(private accountService: AccountService,
              public router: Router,
              private investorService: InvestorService,
              public dialog: MatDialog,
              public serviceAppService: ServiceApplicationService,
              public route: ActivatedRoute,
              public dataSharing: DataSharingService) {
    this.investor = new Investor();
  }

  ngOnInit() {
    console.log(this.nextIndex);
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

    if (this.ServiceApplicationId != 0) {
      this.ServiceApplication(this.ServiceApplicationId);
    }
    if (this.InvestorId != 0) {
      this.getInvestor();
    }
    this.userName = this.accountService.currentUser.FullName;
    // this.isNewFirst = this.route.snapshot.params['IsExistingCustomer'];
    this.isNewListener = this.route.snapshot.params['IsExistingCustomer'];

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

  }

  move(index: number) {
    this.stepper.selectedIndex = index;
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
    this.InvestorId = this.route.snapshot.params['InvestorId'] || this.route.snapshot.params['investorId'];

    this.investorService.getInvestor(this.InvestorId)
      .subscribe((result: Investor) => {
        this.investor = result;

        this.isNew = result.IsExistingCustomer;

        this.isNewListener = (this.isNew == true) ? 1 : 0;

        const ServiceApplicationId1 = this.route.snapshot.params['ServiceApplicationId'];
        const workFlowId = this.route.snapshot.params['workFlowId'];
        const InvestorId1 = this.route.snapshot.params['InvestorId'] || this.route.snapshot.params['investorId'];

        this.router.navigate(['investor-tab/1235/' + ServiceApplicationId1 + '/' + InvestorId1 + '/' + this.isNewListener + '/' + workFlowId]);

      });
  }

  ngAfterContentChecked(): void {

    this.isNewFirst = this.route.snapshot.params['IsExistingCustomer'];

    if (this.isNewListener != this.isNewFirst) {
      // this.isNewFirst = this.isNewListener;
      this.isNewListener = this.isNewFirst;
      this.getInvestor();

    }
  }


  private ServiceApplication(id: any) {
    this.serviceAppService.getServiceApplicationById(id)
      .subscribe(status => {
        console.log(status);
        this.serviceApplication = status;
        this.applicationStatus(this.serviceApplication.ServiceApplicationId)
      })
  }

  public applicationStatus(ServiceApplicationId: any) {
    switch (ServiceApplicationId) {
      case ApplicationStatusEnum.Drafted: //Drafted
        this.enable = true;
        break;
      case  ApplicationStatusEnum.Submitted: //Submitted
        this.enable = false;

        break;
      case ApplicationStatusEnum.approved: //Approved
        this.enable = false;

        break;
      case ApplicationStatusEnum.Pending: //Pending
        this.enable = true;

        break;
      case ApplicationStatusEnum.Completed: //Completed
        this.enable = false;
        break;

    }
  }
}
