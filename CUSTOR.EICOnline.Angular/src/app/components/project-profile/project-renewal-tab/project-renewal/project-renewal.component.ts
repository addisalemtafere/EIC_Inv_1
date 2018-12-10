import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ProjectRenewalService} from '../../../../Services/project-renewal.service';
import {MatSnackBar} from '@angular/material';
import {DataSharingService} from '../../../../Services/data-sharing.service';
import {ProjectModel} from '../../../../model/project.model';
import {ProjectProfileService} from '../../../../Services/project-profile.service';
import {AccountService} from '@custor/services/security/account.service';
import {ActivatedRoute, Params} from '@angular/router';
import {ErrorMessage} from '@custor/services/errMessageService';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-project-renewal',
  templateUrl: './project-renewal.component.html',
  styleUrls: ['./project-renewal.component.scss']
})
export class ProjectRenewalComponent implements OnInit, AfterContentChecked {
  projectRenewalForm: FormGroup;
  loading = false;
  public projectList: ProjectModel[];
  public isInvestor: boolean;
  public editMode = false;
  private ServiceApplicationId: number;
  private InvestorId: any;
  private approval = false;
  private ServiceId: any;
  private ProjectId: any;

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
    this.isInvestor = !this.accountService.getUserType();
    this.route.params
      .subscribe((params: Params) => {
        // console.log(this.ServiceApplicationId);
        if (this.ServiceApplicationId > 1) {
          this.getServiceApplicationRenewal();
          this.approval = true;
        }
      });
  }

  initForm() {
    this.projectRenewalForm = this.fb.group({
      RenewalDate: new FormControl(),
      RenewedTo: new FormControl(),
      RenewedFrom: new FormControl(),
      ProjectId: this.ProjectId,
      InvestorId: this.InvestorId,
      ServiceId: this.ServiceId
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
    this.projectRenewalService
      .create(this.projectRenewalForm.value)
      .subscribe(response => {
        this.dataSharing.renewalIndex.next(2);
      });
  }

  ngAfterContentChecked() {
    // this.projectRenewalForm.patchValue({
    //   ServiceId: localStorage.getItem('ServiceId'),
    //   InvestorId: localStorage.getItem('InvestorId'),
    //   // ProjectId: localStorage.getItem('ProjectId'),
    // });
    // if (this.isInvestor) {
    //   this.projectRenewalForm.patchValue({
    //     ProjectId: localStorage.getItem('ProjectId'),
    //   });
    // }
  }

  notification(message: string) {
    this.toastr.success(` Succesfully ${message} Data.!`, 'Success');

    this.loading = false;
    this.snackbar.open(` Succesfully ${message} Data.!`, 'Close', {
      duration: 3000,
    });
  }

  approve() {
    this.projectRenewalService
      .create(this.projectRenewalForm.value)
      .subscribe(result => {
        this.toastr.success('Renewal  successfully approved', 'Success');
      });
  }

  private getServiceApplicationRenewal() {
    this.projectRenewalService
      .getRenewalByServiceApplicationId(this.ServiceApplicationId)
      .subscribe(result => {
        this.editMode = true;
        this.projectRenewalForm.patchValue(result.ProjectRenewal[0]);
      }, error => this.errMsg.getError(error));
  }
}
