import {Component, OnInit} from '@angular/core';
import {id} from "@swimlane/ngx-charts/release/utils";
import {FormBuilder} from "@angular/forms";
import {MatSnackBar} from "@angular/material";
import {AccountService} from "@custor/services/security/account.service";
import {ProjectProfileService} from "../../../Services/project-profile.service";
import {DataSharingService} from "../../../Services/data-sharing.service";
import {ActivatedRoute} from "@angular/router";
import {ErrorMessage} from "@custor/services/errMessageService";
import {ToastrService} from "ngx-toastr";
import {ProjectRenewalService} from "../../../Services/project-renewal.service";
import {FollowupService} from "../../../Services/followup/followup.service";

@Component({
  selector: 'app-aftercare-recommendation',
  templateUrl: './aftercare-recommendation.component.html',
  styleUrls: ['./aftercare-recommendation.component.scss']
})
export class AftercareRecommendationComponent implements OnInit {

  private ServiceApplicationId: number;
  private InvestorId: any;
  private ServiceId: any;
  private ProjectId: any;
  public findings:any;
  public byUsername:any;
  public dateofFindings:any;
  constructor(public fb: FormBuilder,
              public snackbar: MatSnackBar,
              private accountService: AccountService,
              private projetServices: ProjectProfileService,
              public dataSharing: DataSharingService,
              public route: ActivatedRoute,
              public errMsg: ErrorMessage,
              public toastr: ToastrService,
              private followupService: FollowupService,
              public projectRenewalService: ProjectRenewalService) {
  }

  ngOnInit() {
    this.ServiceId = this.route.snapshot.params['ServiceId'] || this.route.snapshot.params['serviceId'];
    this.InvestorId = this.route.snapshot.params['InvestorId'] || this.route.snapshot.params['investorId'];
    this.ProjectId = this.route.snapshot.params['ProjectId'] || this.route.snapshot.params['projectId'];
    this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'] || this.route.snapshot.params['serviceApplicationId'];
    this.getRecommendation(this.ProjectId);
    console.log(this.ProjectId);
  }
getRecommendation(projectId:any){
  this.followupService
    .getOneById(projectId)
    .subscribe(result => {
      console.log(result);
      if(result!=null)
      {
      this.byUsername=result.CreatedUserName;
      this.findings=result.FollowupFinding;
      this.dateofFindings=result.FollowupDate;
      }
      else{
        this.byUsername="None";
        this.findings="None";
        this.dateofFindings="None";
      }
    });
}
}
