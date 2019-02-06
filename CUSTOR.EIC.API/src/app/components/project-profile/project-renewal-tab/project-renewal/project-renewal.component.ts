import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProjectRenewalService} from '../../../../Services/project-renewal.service';
import {MatSnackBar} from '@angular/material';
import {DataSharingService} from '../../../../Services/data-sharing.service';
import {ProjectModel} from '../../../../model/project.model';
import {ProjectProfileService} from '../../../../Services/project-profile.service';
import {AccountService} from '@custor/services/security/account.service';
import {ActivatedRoute, Params} from '@angular/router';
import {ErrorMessage} from '@custor/services/errMessageService';
import {ToastrService} from 'ngx-toastr';
import {id} from "@swimlane/ngx-charts/release/utils";
import {ProjectCancellationModel} from "../../../../model/project/ProjectCancellation.model";
import {ProjectRenewalModel} from "../../../../model/ProjectRenewal.model";

@Component({
  selector: 'app-project-renewal',
  templateUrl: './project-renewal.component.html',
  styleUrls: ['./project-renewal.component.scss']
})
export class ProjectRenewalComponent implements OnInit {
  projectRenewalForm: FormGroup;
  loading = false;
  public projectList: ProjectModel[];
  public isInvestor: boolean;
  public editMode : boolean;
  private ServiceApplicationId: number;
  private InvestorId: any;
  private approval = false;
  private ServiceId: any;
  private ProjectId: any;
  minDate: Date;
  initMinDate: Date;
  maxDate: Date;
  public formErrors = {
  RenewalDate: 'Renewal date is required!',
  RenewedTo:'Renewal ending date is required and must be greater than the starting date!',
  RenewedFrom: 'Renewal starting date is required!'
};
  constructor(public fb: FormBuilder,
              public snackbar: MatSnackBar,
              private accountService: AccountService,
              private projetServices: ProjectProfileService,
              public dataSharing: DataSharingService,
              public route: ActivatedRoute,
              public errMsg: ErrorMessage,
              public toastr: ToastrService,
              public projectRenewalService: ProjectRenewalService) {
  }

  ngOnInit() {
    this.ServiceId = this.route.snapshot.params['ServiceId'] || this.route.snapshot.params['serviceId'];
    this.InvestorId = this.route.snapshot.params['InvestorId'] || this.route.snapshot.params['investorId'];
    this.ProjectId = this.route.snapshot.params['ProjectId'] || this.route.snapshot.params['projectId'];
    this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'] || this.route.snapshot.params['serviceApplicationId'];

    this.initForm();
    this.getAllProjects();
    this.isInvestor = this.accountService.getUserType();
    this.route.params
      .subscribe((params: Params) => {
        console.log(this.ServiceApplicationId);
        if (this.ServiceApplicationId > 1) {
          this.getServiceApplicationRenewal();
        }
        else{
          this.editMode = false;
        }
      });
  }

  initForm() {
    this.projectRenewalForm = this.fb.group({
      RenewalDate: ['', Validators.required],
      RenewedTo: new FormControl('', Validators.required),
      RenewedFrom: new FormControl('', Validators.required),
      ProjectId: this.ProjectId,
      InvestorId: this.InvestorId,
      ServiceId: this.ServiceId,
      ServiceApplicationId: this.ServiceApplicationId
    });
  }

  getAllProjects() {
    this.projetServices
      .getProjectOnlyByInvestorId(this.InvestorId)
      .subscribe(result => {
        this.projectList = result;
      });
  }

  onSubmit() {
    // console.log(this.editMode);
    if(!this.editMode){
        this.projectRenewalService
          .create(this.projectRenewalForm.value)
          .subscribe(response => {
            this.dataSharing.renewalIndex.next(2);
            this.toastr.success('Data  successfully Saved', 'Success');
          });
}
else{
  const id=localStorage.getItem('ProjectRenewalId').toString();
  this.projectRenewalService
    .update(this.projectRenewalForm.value,id)
    .subscribe(result=>{
      console.log("Updated="+ result);
    });
}
  }
  mapApproval(approve: ProjectRenewalModel): ProjectRenewalModel {
    approve.IsApproved = true;
    return approve;
  }


  notification(message: string) {
    this.toastr.success(` Succesfully ${message} Data.!`, 'Success');

    this.loading = false;
    this.snackbar.open(` Succesfully ${message} Data.!`, 'Close', {
      duration: 3000,
    });
  }

  approve() {
    const RenewalData = this.mapApproval(this.projectRenewalForm.value);
    console.log(RenewalData);
    if(this.editMode)
    {
      console.log("Update!");
      const id=localStorage.getItem('ProjectRenewalId').toString();
      console.log(id);
      this.projectRenewalService.update(RenewalData,id)
        .subscribe(result => {
          console.log(result);
          this.toastr.success('Renewal  successfully approved', 'Success');
        });

    }
    else
    {
      console.log("New!");
    this.projectRenewalService
      .create(RenewalData)
      .subscribe(result => {
        this.toastr.success('Renewal  successfully approved', 'Success');
      });
    }
  }

  private getServiceApplicationRenewal() {
    this.projectRenewalService
      .getRenewalByServiceApplicationId(this.ServiceApplicationId)
      .subscribe(result => {
        this.projectRenewalForm.patchValue(result.ProjectRenewal[0]);
        if(result.ProjectRenewal[0] != null)
        {
          this.editMode=true;
          localStorage.setItem('ProjectRenewalId', result.ProjectRenewal[0].ProjectRenewalId.toString());
       console.log("ID="+result.ProjectRenewal[0].ProjectRenewalId);
        }
      }, error => this.errMsg.getError(error));
  }
  setMinDate(minD: Date) {
    this.minDate = minD;
  }

  setMaxDate(value: Date) {
    this.maxDate = value;
  }
  updateDateRange() {
    const today = new Date();
    let mm1, dd1;
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    if (dd < 10) {
      dd1 = '0' + dd;
    }
    if (mm < 10) {
      mm1 = '0' + mm;
    }
    const today1 = mm1 + '/' + dd1 + '/' + yyyy;
    this.initMinDate = new Date(today);
    if (this.projectRenewalForm.value.RenewedFrom !== null) {
      this.minDate = this.projectRenewalForm.value.RenewedFrom;
    }
  }
}
