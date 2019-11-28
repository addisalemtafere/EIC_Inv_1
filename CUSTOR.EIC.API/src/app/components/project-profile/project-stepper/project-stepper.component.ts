import {AfterContentChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatStepper} from '@angular/material';
import {DataSharingService} from '../../../Services/data-sharing.service';
import {Subscription} from 'rxjs';
import {InvestorService} from '../../investor/investor.service';
import {ToastrService} from 'ngx-toastr';
import {AccountService} from '@custor/services/security/account.service';

@Component({
  selector: 'app-project-stepper',
  templateUrl: './project-stepper.component.html',
  styleUrls: ['./project-stepper.component.css']
})
export class ProjectStepperComponent implements OnInit, AfterViewInit, AfterContentChecked {
  public isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  @ViewChild('stepper') stepper: MatStepper;
  private subscription: Subscription;
  private subscription2: Subscription;
  public steeperIndex = 0;
  // steeperIndex: Observable<number> = Observable.of(0);

  title: string;
  isSol = true;
  // nextIndex: Observable<number>;
  public nextIndex: number;
  private currentPosition: string;
  private upeerLimit: any;
  public ServiceId: string;
  public projectName: string | null;
  public investorName: string | null;
  public isInvestor: boolean;
  constructor(private _formBuilder: FormBuilder,
              public accountService: AccountService,
              private router: Router,
              private toast: ToastrService,
              private invService: InvestorService,
              private dataSharing: DataSharingService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.title = localStorage.getItem('title');
    this.projectName = localStorage.getItem('projectName');
    this.investorName = localStorage.getItem('investorName');
    this.currentPosition = 'f';
    this.ServiceId = localStorage.getItem('ServiceId');
    // this.getUserType();
  }
  getUserType() {
      this.isInvestor = this.accountService.getUserType();
  }
  move(index: number) {
    this.stepper.selectedIndex = index;
  }



  ngAfterViewInit(): void {
    this.move(this.steeperIndex);

  }

  ngAfterContentChecked() {
    // this.title = localStorage.getItem('title');
    // this.projectName = localStorage.getItem('projectName');
    // this.investorName = localStorage.getItem('investorName');
    this.subscription = this.dataSharing.steeperIndex
      .subscribe(index => {
        this.steeperIndex = index;
        // // console.log(this.steeperIndex);
        this.move(this.steeperIndex);
      });
    this.subscription = this.dataSharing.currentIndex
      .subscribe(index => {
        this.nextIndex = index;
        this.upeerLimit = index;
        // console.log(index);
      });
    // this.nextIndex = +localStorage.getItem('currentIndex');
  }

  back() {
    if (this.ServiceId === '1234') {
      this.toast.warning('you can not go back because you have not privilege');
    } else {

      this.currentPosition = 'b';
      if (this.currentPosition === 'f' || this.currentPosition === null) {
        this.steeperIndex--;
      }
      if (this.steeperIndex > 0) {
        this.steeperIndex--;
        this.stepper.selectedIndex = this.steeperIndex;
      }
    }

  }

  next() {
    console.log(this.ServiceId)
    console.log(this.steeperIndex)
    console.log(this.upeerLimit)
    console.log(this.steeperIndex < this.upeerLimit)
    // console.log(this.isInvestor)
    if (this.ServiceId === '1234') {
      this.toast.warning('You can not go next because you have not privilege');
    } else {
      this.currentPosition = 'f';
      if (this.currentPosition === 'b' || this.currentPosition === null) {
        console.log("here")
        this.steeperIndex++;
      }
      if (this.steeperIndex < this.upeerLimit) {
        this.steeperIndex++;
        this.stepper.selectedIndex = this.steeperIndex;
        console.log("or here")
      }
      else if (this.steeperIndex == 6){
        console.log(this.currentPosition)
        if (this.currentPosition === 'f'){
          setTimeout(() => this.dataSharing.steeperIndex.next(7), 0);
          setTimeout(() => this.dataSharing.currentIndex.next(8), 0);
          console.log("exceptional")
        }
      }
      else{
        this.upeerLimit;
        console.log("final else")
        console.log(this.steeperIndex)
        console.log(this.upeerLimit)
        setTimeout(() => this.dataSharing.steeperIndex.next(this.steeperIndex), 0);
        setTimeout(() => this.dataSharing.currentIndex.next(this.steeperIndex++), 0);
        this.stepper.selectedIndex = this.upeerLimit;
      }
    }
  }


}
