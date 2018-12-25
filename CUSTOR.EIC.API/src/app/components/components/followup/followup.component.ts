import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog, MatDialogConfig, MatDialogRef, MatSort, MatTableDataSource} from "@angular/material";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AccountService} from "@custor/services/security/account.service";
import {AuthService} from "@custor/services/security/auth.service";
import {ConfigurationService} from "@custor/services/configuration.service";
import {ToastrService} from "ngx-toastr";

import {Subscription} from "rxjs";
import {AngConfirmDialogComponent} from "@custor/components/confirm-dialog/confirm-dialog.component";
import {Utilities} from "@custor/helpers/utilities";
import {Decision} from '@custor/const/consts';
import {FollowUpModel} from "../../../model/followup/followup.model";
import {Decisions, Services} from "../../../model/lookupData";
import {FollowupService} from "../../../Services/followup/followup.service";
import {DataSharingService} from "../../../Services/data-sharing.service";
import {LookUpService} from "../../../Services/look-up.service";

@Component({
  selector: 'app-followup',
  templateUrl: './followup.component.html',
  styleUrls: ['./followup.component.scss']
})

export class FollowupComponent implements OnInit {

  dataSource: MatTableDataSource<FollowUpModel>;
  followUpForm: FormGroup;
  displayedColumns: string[] = ['InvestorName', 'AfterCareDecision', 'OfficerRemark', 'action'];
  public followups: FollowUpModel[];
  dialogRef: any;
  confirmDialogRef: MatDialogRef<AngConfirmDialogComponent>;
  public decision: Decisions[] = [];
  public service: Services[] = [];
  constructor(public dialog: MatDialog,
    private fb: FormBuilder,
    private followupService: FollowupService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public dataSharing: DataSharingService,
    private lookUpService: LookUpService,
    private http: HttpClient, private accountService: AccountService,
    private authService: AuthService,
    private configService: ConfigurationService,
    private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.loadFollowups();
  }



  public loadFollowups() {

    return this.followupService.getAll()
      .subscribe(result => {
        this.followups = result;
        this.dataSource = new MatTableDataSource<FollowUpModel>(result);
      });
  }
  addfollowup() {
    console.log("add clicked")
    this.router.navigate(['/followupform']);
    localStorage.setItem('followupId','');

  }



  editFollowup(followupp:FollowUpModel)
  {
    console.log("edit invoked!")
    localStorage.setItem('followupId',followupp.Id);
     this.router.navigate(['followupform'])


  }
    delete(followupp:FollowUpModel)
  {
    this.confirmDialogRef = this.dialog.open(AngConfirmDialogComponent,
      {
        disableClose: false
      });
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("Deletion Invoked");
        console.log(followupp);
        console.log(followupp.Id);
        this.followupService.delete(followupp.Id)
          .subscribe(results => {
              this.dataSource.data = this.dataSource
                .data.filter(item => item.Id !== followupp.Id);
            },
            error => {
              this.toastr.error(
                `An error occured in deleting the Followup.\r\nError: "${Utilities.getHttpResponseMessage(error)}"`,
                'Delete Error');
            });
      }
    this.loadFollowups();
    });

}
  getDecision(decision: number): string {
    return Decision.filter(element => element.Id === decision).map(element => element.DescriptionEnglish)[0];
  }

}

