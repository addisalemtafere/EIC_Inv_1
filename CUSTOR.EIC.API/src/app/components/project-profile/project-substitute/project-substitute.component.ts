import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {DataSharingService} from '../../../Services/data-sharing.service';
import {AccountService} from '@custor/services/security/account.service';
import {ActivatedRoute, Params} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ErrorMessage} from '@custor/services/errMessageService';
import {ProjectProfileService} from '../../../Services/project-profile.service';
import {ProjectModel} from '../../../model/project.model';
import {MatSnackBar} from '@angular/material';
import {ProjectSubstituteService} from '../../../Services/project-substitute.service';
import {ToastrService} from 'ngx-toastr';
import {ProjectCancellationModel} from "../../../model/project/ProjectCancellation.model";
import {ProjectSubstituteModel} from "../../../model/ProjectSubstitute.model";

@Component({
  selector: 'app-project-substitute',
  templateUrl: './project-substitute.component.html',
  styleUrls: ['./project-substitute.component.scss']
})
export class ProjectSubstituteComponent implements OnInit, AfterContentChecked {

  projectsubstituteForm: FormGroup;
  loading = false;

  projectList: ProjectModel[];
  CancellationReasonData = [
    // {'type': 'Own Interest'},
    // {'type': 'by law'},
    {'type': 'Lose'},
    // {'type': 'By Authority'},
    // {'type': 'Sales'},
    // {'type': 'Late Renewal'}
  ];
  public isInvestor: boolean;
  private ServiceApplicationId: number;
  public editMode: boolean;
  private InvestorId: any;
  private ServiceId: any;
  private ProjectId: any;
  public formErrors = {
    Reason: 'Please select the reason for substitution!'
  };

  constructor(public fb: FormBuilder,
              public projetServices: ProjectProfileService,
              public dataSharing: DataSharingService,
              public accountService: AccountService,
              public snackbar: MatSnackBar,
              public route: ActivatedRoute,
              public errMsg: ErrorMessage,
              private toast: ToastrService,
              public toastr: ToastrService,
              public substituteService: ProjectSubstituteService) {
  }

  ngOnInit() {
    this.ServiceId = this.route.snapshot.params['ServiceId'];
    this.InvestorId = this.route.snapshot.params['InvestorId'];
    this.ProjectId = this.route.snapshot.params['ProjectId'];
    this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];

    this.initForm();
    this.getAllProjects();
    this.isInvestor = this.accountService.getUserType();
    if (this.ServiceApplicationId > 1) {
      this.getServiceApplicationSubstitute();
    }
  }

  initForm() {
    this.projectsubstituteForm = this.fb.group({
      ProjectId: new FormControl(this.ProjectId),
      ServiceId: this.ServiceId,
      Reason: ['',Validators.required],
      SubstituteRemark: new FormControl(),
      InvestorId: this.InvestorId,
      ServiceApplicationId: this.ServiceApplicationId
    });
  }

  onSubmit() {
console.log("Submitted!")
    this.substituteService.create(this.projectsubstituteForm.value)
      .subscribe(result => {
        this.dataSharing.renewalIndex.next(2);
        if(this.isInvestor){
          this.toast.success('Request for substitute  has been sent', 'success!!');
        }
        else{
          this.toast.success('Request for substitute  has been Approved', 'success!!');
        }
      });
  }

  getAllProjects() {
    this.projetServices.getProjectOnlyByInvestorId(this.InvestorId)
      .subscribe(result => {
        this.projectList = result;
      });
  }

  notification(message: string) {
    this.loading = false;
    this.toast.success(` Succesfully ${message} Data.!`, 'success!!');

    this.snackbar.open(` Succesfully ${message} Data.!`, 'Close', {
      duration: 3000,
    });
  }

  ngAfterContentChecked(): void {

  }

  private getServiceApplicationSubstitute() {
    this.substituteService.getSubstituteByServiceApplicationId(this.ServiceApplicationId)
      .subscribe(result => {
        this.projectsubstituteForm.patchValue(result.ProjectSubstitute[0]);
        if(result.ProjectSubstitute[0] != null)
        {
          this.editMode=true;
          localStorage.setItem('ProjectSubstituteId', result.ProjectSubstitute[0].ProjectSubstituteId.toString());
          console.log(result.ProjectSubstitute[0].ProjectSubstituteId.toString());
        }
      }, error => this.errMsg.getError(error));
  }

  approve() {
    const SubstituteData = this.mapApproval(this.projectsubstituteForm.value);
    const id=localStorage.getItem('ProjectSubstituteId').toString();
    console.log("Substitute ID="+id);
    // console.log(SubstituteData);
    this.substituteService.update(SubstituteData, id)
      .subscribe(result => {
        console.log(result);
        this.toastr.success('Substitution successfully Approved.', 'Success');
        // this.approveApplication(this.ServiceApplicationId);
      });

  }
  mapApproval(approve: ProjectSubstituteModel): ProjectSubstituteModel {
    approve.IsApproved = true;
    return approve;
  }

  // approveApplication(id: any) {
  //   this.lookup.Code = 44449;
  //   this.serviceApplication.changeApplicationStatus(this.lookup, id)
  //     .subscribe(result => {
  //       this.toastr.success('Application Completed successfully ', 'Success');
  //     });
  // }
}
