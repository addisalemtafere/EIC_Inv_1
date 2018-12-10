import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {DataSharingService} from '../../../Services/data-sharing.service';
import {AccountService} from '@custor/services/security/account.service';
import {ActivatedRoute, Params} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ErrorMessage} from '@custor/services/errMessageService';
import {ProjectProfileService} from '../../../Services/project-profile.service';
import {ProjectModel} from '../../../model/project.model';
import {MatSnackBar} from '@angular/material';
import {ProjectSubstituteService} from '../../../Services/project-substitute.service';
import {ToastrService} from 'ngx-toastr';

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

  constructor(public fb: FormBuilder,
              public projetServices: ProjectProfileService,
              public dataSharing: DataSharingService,
              public accountService: AccountService,
              public snackbar: MatSnackBar,
              public route: ActivatedRoute,
              public errMsg: ErrorMessage,
              private toast: ToastrService,
              public substituteService: ProjectSubstituteService) {
  }

  ngOnInit() {
    this.ServiceId = this.route.snapshot.params['ServiceId'];
    this.InvestorId = this.route.snapshot.params['InvestorId'];
    this.ProjectId = this.route.snapshot.params['ProjectId'];

    this.initForm();
    this.editMode = false;
    this.getAllProjects();
    this.isInvestor = !this.accountService.getUserType();
    this.route.params
      .subscribe((params: Params) => {
        this.ServiceApplicationId = +params['ServiceApplicationId'];
        if (this.ServiceApplicationId > 1) {
          this.getServiceApplicationSubstitute();
        }
      });
  }

  initForm() {
    this.projectsubstituteForm = this.fb.group({
      ProjectId: new FormControl(this.ProjectId),
      ServiceId: this.ServiceId,
      Reason: new FormControl(),
      SubstituteRemark: new FormControl(),
      InvestorId: this.InvestorId
    });
  }

  onSubmit() {

    this.substituteService.create(this.projectsubstituteForm.value)
      .subscribe(result => {
        // console.log(result);
        this.dataSharing.renewalIndex.next(2);
        // localStorage.setItem('ServiceApplicationId', result.ServiceApplicationId.toString());
        // localStorage.setItem('workFlowId', result.ServiceApplication.ServiceWorkflow[0].ServiceWorkflowId);


        this.toast.success('Request for substitute  has been sent', 'success!!');
      });
  }

  getAllProjects() {
    this.projetServices.getProjectOnlyByInvestorId(+localStorage.getItem('InvestorId'))
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
        this.editMode = true;
        this.projectsubstituteForm.patchValue(result.ProjectSubstitute[0]);
      }, error => this.errMsg.getError(error));
  }
}
