import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FollowUpModel} from "../../../model/followup/followup.model";
import {MatDialog, MatDialogRef, MatTableDataSource} from "@angular/material";
import {Subscription} from "rxjs";
import {AngConfirmDialogComponent} from "@custor/components/confirm-dialog/confirm-dialog.component";
import {Decisions, Services} from "../../../model/lookupData";
import {FollowupService} from "../../../Services/followup/followup.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DataSharingService} from "../../../Services/data-sharing.service";
import {LookUpService} from "../../../Services/look-up.service";
import {HttpClient} from "@angular/common/http";
import {AccountService} from "@custor/services/security/account.service";
import {AuthService} from "@custor/services/security/auth.service";
import {ConfigurationService} from "@custor/services/configuration.service";
import {ToastrService} from "ngx-toastr";
import {Decision, Service} from '@custor/const/consts';

@Component({
  selector: 'app-followup-form',
  templateUrl: './followup-form.component.html',
  styleUrls: ['./followup-form.component.scss']
})
export class FollowupFormComponent implements OnInit {
  followupmodel: FollowUpModel[];
  dataSource: MatTableDataSource<FollowUpModel>;
  followUpForm: FormGroup;
  displayedColumns: string[] = ['InvestorName', 'AfterCareDecision', 'OfficerRemark', 'action'];
  public allFollowUpData: FollowUpModel;
  public followups: FollowUpModel[];
  fupmodel: Subscription;
  dialogRef: any;
  confirmDialogRef: MatDialogRef<AngConfirmDialogComponent>;

  public decision: Decisions[] = [];
  public service: Services[] = [];
  constructor(
    private fb: FormBuilder,
    private followupService: FollowupService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public dataSharing: DataSharingService,
    private lookUpService: LookUpService,
    private http: HttpClient, private accountService: AccountService,
    private authService: AuthService,
    private configService: ConfigurationService, public dialog: MatDialog,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.initForm();
    const id= localStorage.getItem("followupId");
    console.log(id);
    if(id != null){
      this.getFollowup(id);
    }
    this.initStaticData('en');
  }
  getFollowup(id){
    this.followupService
      .getOneById(id)
      .subscribe(result => {
        this.allFollowUpData = result;
        console.log(result)
        this.updateForm(result);
      });
  }
  updateForm(fup:FollowUpModel){
    // console.log(this.allFollowUpData);
    this.followUpForm.patchValue(
      {
        investorName: fup.InvestorName || '',
        FollowupDate: fup.FollowupDate || '',
        DecisionMade: fup.DecisionMade || '' ,
        findings: fup.FollowupFinding || '',
        serviceName: fup.ServiceId  || '',
        OfficerRemark: fup.OfficerRemark || ''
      });
  }
  initForm() {
    this.followUpForm = this.fb.group({
      investorName: ['', Validators.required],
      FollowupDate: ['', Validators.required],
      DecisionMade: [1, Validators.required],
      findings: ['', Validators.required],
      serviceName: [1, Validators.required],
      OfficerRemark: ['']

    });
  }
  errorMsg={
    investorName: 'Investor Name is required!',
    cAfterCareDate: 'Please select date!',
    afterCareDecision: 'Please select the decision!',
    findings: 'Please fill out the findings!',
    serviceName: 'Please select the service name!'
  }


  public onSubmit() {
    // console.log(this.followUpForm.value);
    const formData=this.mapValuesData(this.followUpForm.value);
    // console.log(formData.ProjectId);
    console.log(formData);
    this.followupService.create(formData)
      .subscribe(
        (followup: FollowUpModel) => {
          // localStorage.setItem('InvestorId', followup.InvestorId.toString());
          // console.log(localStorage.getItem(['InvestorId']).toString());
          console.log(followup);
         this.router.navigate(['followup'])
        }
      );
    // this.loadFollowups();

  }
  mapValuesData(follow:FollowUpModel){
    follow.ProjectId=23130;
    follow.CreatedUserName=this.accountService.currentUser.UserName;
    // follow.CreatedUserId=(int)this.accountService.currentUser.Id;
    // follow.ServiceId=this.getServices(this.followups.se)
    return follow;
  }
  getServices(service: number): string {
    return Decision.filter(element => element.Id === service).map(element => element.DescriptionEnglish)[0];
  }

  getDecision(decision: number): string {
    return Decision.filter(element => element.Id === decision).map(element => element.DescriptionEnglish)[0];
  }

  initStaticData(en) {
    let desc: Decisions= new Decisions();
    Decision.forEach(pair => {
      desc = {
        'Id': pair.Id.toString(),
        'DescriptionEnglish': pair.DescriptionEnglish,
        'Description': pair.Description
      };
      this.decision.push(desc);
    });
    let ser: Services= new Services();
    Service.forEach(pair => {
      ser = {
        'Id': pair.Id.toString(),
        'DescriptionEnglish': pair.DescriptionEnglish,
        'Description': pair.Description
      };
      this.service.push(ser);
    });
  }
}
