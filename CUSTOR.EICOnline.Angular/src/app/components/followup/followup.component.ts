import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog, MatDialogRef, MatSort, MatTableDataSource} from "@angular/material";
import {FollowupService} from "../../Services/followup/followup.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DataSharingService} from "../../Services/data-sharing.service";
import {LookUpService} from "../../Services/look-up.service";
import {HttpClient} from "@angular/common/http";
import {AccountService} from "@custor/services/security/account.service";
import {AuthService} from "@custor/services/security/auth.service";
import {ConfigurationService} from "@custor/services/configuration.service";
import {ToastrService} from "ngx-toastr";
import {FollowUpModel} from "../../model/followup/followup.model";
import {Investor} from "../../model/investor";
import {Subscription} from "rxjs";
import {AngConfirmDialogComponent} from "@custor/components/confirm-dialog/confirm-dialog.component";
import {Utilities} from "@custor/helpers/utilities";

@Component({
  selector: 'app-followup',
  templateUrl: './followup.component.html',
  styleUrls: ['./followup.component.scss']
})

export class FollowupComponent implements OnInit {

  followupmodel: FollowUpModel[];
  dataSource: MatTableDataSource<FollowUpModel>;
  followUpForm: FormGroup;
  displayedColumns: string[] = ['InvestorName', 'AfterCareDecision', 'OfficerRemark', 'action'];
  public allFollowUpData: FollowUpModel[];
  public followups: FollowUpModel[];
  fupmodel: Subscription;
  dialogRef: any;
  confirmDialogRef: MatDialogRef<AngConfirmDialogComponent>;

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
    private toastr: ToastrService) {

  }

  // @ViewChild(MatSort) sort: MatSort;
  ngOnInit(): void {
    this.initForm();
    this.loadFollowups();
    // this.dataSource.sort = this.sort;
  }


  initForm() {
    // console.log(localStorage.getItem("InvestorId"));
    this.followUpForm = this.fb.group({
      investorName: ['', Validators.required],
      cAfterCareDate: ['', Validators.required],
      afterCareDecision: ['', Validators.required],
      findings: ['', Validators.required],
      officerRemark: ['', Validators.required]
    });
  }


  public onSubmit() {
    // console.log(this.followUpForm.value);
    const formData=this.mapValuesData(this.followUpForm.value);
    // console.log(formData.ProjectId);
    this.followupService.create(formData)
      .subscribe(
        (followup: FollowUpModel) => {
          // localStorage.setItem('InvestorId', followup.InvestorId.toString());
          // console.log(localStorage.getItem(['InvestorId']).toString());
          console.log(followup);
          this.loadFollowups();
        }
      );
    // this.loadFollowups();

  }
  mapValuesData(follow:FollowUpModel){
    follow.ProjectId=23130;
    follow.CreatedUserName=this.accountService.currentUser.UserName;
    follow.CreatedUserName=this.accountService.currentUser.Id;
    return follow;
}
  public loadFollowups() {

    return this.followupService.getAll()
      .subscribe(result => {
        this.followups = result;
        this.dataSource = new MatTableDataSource<FollowUpModel>(result);
        // this.dataSource.paginator = this.paginator;
      });
  }

  delete(followupp:FollowUpModel)
  {
    // const followupData=
    this.confirmDialogRef = this.dialog.open(AngConfirmDialogComponent,
      {
        disableClose: false
      });
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("Deletion Invoked");
        console.log(followupp);
        console.log(followupp.FollowupId);
        this.followupService.delete(followupp.FollowupId)
          .subscribe(results => {
              this.dataSource.data = this.dataSource
                .data.filter(item => item.FollowupId !== followupp.FollowupId);
            },
            error => {
              // tslint:disable-next-line:max-line-length
              this.toastr.error(
                `An error occured in deleting the Followup.\r\nError: "${Utilities.getHttpResponseMessage(error)}"`,
                'Delete Error');
            });
      }
    this.loadFollowups();
    });

}
}

