import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectEmploymentModel } from '../../../model/ProjectEmployment.model';
import { ProjectEmploymentService } from '../../../Services/project-employment.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { DataSharingService } from '../../../Services/data-sharing.service';
import { MatSnackBar } from '@angular/material';
import { FormService } from '@custor/validation/custom/form';
import { ErrorMessage } from '@custor/services/errMessageService';
import { ActivatedRoute, Params } from '@angular/router';
import { ProjectProfileService } from '../../../Services/project-profile.service';
import { ProjectStatusModel, QuarterModel } from '../../../model/lookupData';
import { ProjectStatus, Quarter } from '@custor/const/consts';
import { AccountService } from '../../../../@custor/services/security/account.service';

@Component({
  selector: 'app-project-employment',
  templateUrl: './project-employment.component.html',
  styleUrls: ['./project-employment.component.css']
})
export class ProjectEmploymentComponent implements OnInit, AfterContentChecked {
  employmetForm: FormGroup;
  employmentData: ProjectEmploymentModel;
  editMode = false;
  loading = false;

  subscription: Subscription;
  empId: any;
  isInvestor: boolean;
  public formErrors = {
    PermanentFemale: 'Must be positive number!',
    PermanentMale: 'Must be positive number!',
    TemporaryFemale: 'Must be positive number!',
    TemporaryMale: 'Must be positive number!',
    PermanentForeignFemale: 'Must be positive number!',
    PermanentForeignMale: 'Must be positive number!',
    TemporaryForeignFemale: 'Must be positive number!',
    TemporaryForeignMale: 'Must be positive number!',
    Quarter: '',
    RegistrationYear: '',
  };
  public ServiceId: string;
  public projectStatus: ProjectStatusModel[] = [];
  public Quarter: QuarterModel[] = [];
  private InvestorId: any;
  private workFlowId: any;
  private ServiceApplicationId: any;
  private projectId: any;

  constructor(private formBuilder: FormBuilder,
    public formService: FormService,
    private errMsg: ErrorMessage,
    public route: ActivatedRoute,
    public projectProfileService: ProjectProfileService,
    private snackbar: MatSnackBar,
    private dataSharingService: DataSharingService,
    private toastr: ToastrService,
    private dataSharing: DataSharingService,
    private accountService: AccountService,
    private employmentService: ProjectEmploymentService) {
    this.employmentData = <ProjectEmploymentModel>{};
  }

  ngOnInit() {
    this.ServiceId = this.route.snapshot.params['ServiceId'];
    this.InvestorId = this.route.snapshot.params['InvestorId'];
    this.workFlowId = this.route.snapshot.params['workFlowId'];
    this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
    this.projectId = this.route.snapshot.params['ProjectId'];
    this.getUserType();

    if (this.ServiceId === '1234') {
      this.getProjectStatus(this.projectId);
    }
    this.initStaticData('en');
    if (this.projectId > 1) {
      this.getEmployment();
    }

    this.formBuild();
  }
  getUserType() {
    this.isInvestor = this.accountService.getUserType();
  }
  getEmployment() {
    this.employmentService.employmentByProject(this.projectId).subscribe(result => {
      if (typeof (result) !== 'undefined') {
        this.editMode = true;
        this.empId = result.ProjectEmploymentId;
        this.employmetForm.patchValue(result);
      }
    }, error => this.errMsg.getError(error));
  }
  CurrentTotalEmployee: number;
  getTotalEmploymentData() {
    this.CurrentTotalEmployee =
      this.employmetForm.get('PermanentFemale').value +
      this.employmetForm.get('PermanentMale').value +
    this.employmetForm.get('TemporaryFemale').value +
    this.employmetForm.get('TemporaryMale').value +
    this.employmetForm.get('PermanentForeignFemale').value +
    this.employmetForm.get('PermanentForeignMale').value +
    this.employmetForm.get('TemporaryForeignFemale').value +
    this.employmetForm.get('TemporaryForeignMale').value
    return this.CurrentTotalEmployee;

  }

  onSubmit() {
    this.formService.markFormGroupTouched(this.employmetForm);
    if (this.employmetForm.valid) {
      // alert(this.employmetForm.get('CurrentTotalEmployee').value)
      console.log(this.getTotalEmploymentData())
      if (this.getTotalEmploymentData() > 0) {
        if (!this.editMode) {
          this.employmentService.create(this.employmetForm.value)
            .subscribe(result => {
              setTimeout(() => this.dataSharing.steeperIndex.next(6), 0);
              setTimeout(() => this.dataSharing.currentIndex.next(6), 0);
              this.notification('saved');
            }, error => this.toastr.error(this.errMsg.getError(error)));
        } else {
          this.employmentService.update(this.employmetForm.value, this.empId)
            .subscribe(result => {
              this.notification('updated');
              setTimeout(() => this.dataSharing.steeperIndex.next(6), 0);
              setTimeout(() => this.dataSharing.currentIndex.next(6), 0);
            }, error => this.toastr.error(this.errMsg.getError(error)));
        }
      }
      else {
        this.toastr.error('The sum of total Employee must be greater than zero');
      }
    } else {
      this.formErrors = this.formService.validateForm(this.employmetForm, this.formErrors, false);
    }
  }

  formBuild() {
    this.employmetForm = this.formBuilder.group({
      ProjectId: [this.projectId],
      workFlowId: [this.workFlowId],
      PermanentFemale: [0, [Validators.required, Validators.min(0)]],
      PermanentMale: [0, [Validators.required, Validators.min(0)]],
      TemporaryFemale: [0, [Validators.required, Validators.min(0)]],
      TemporaryMale: [0, [Validators.required, Validators.min(0)]],
      PermanentForeignFemale: [0, [Validators.required, Validators.min(0)]],
      PermanentForeignMale: [0, [Validators.required, Validators.min(0)]],
      TemporaryForeignFemale: [0, [Validators.required, Validators.min(0)]],
      TemporaryForeignMale: [0, [Validators.required, Validators.min(0)]],
      TotalPermanent: [{ value: '', disabled: true }],
      TotalTempo: [{ value: '', disabled: true }],

      CurrentTotalEmployee: [{ value: '', disabled: true }],

      CurrentPermanentFemale: [0, [Validators.required, Validators.min(0)]],
      CurrentPermanentMale: [0, [Validators.required, Validators.min(0)]],
      CurrentTemporaryFemale: [0, [Validators.required, Validators.min(0)]],
      CurrentTemporaryMale: [0, [Validators.required, Validators.min(0)]],
      CurrentPermanentForeignFemale: [0, [Validators.required, Validators.min(0)]],
      CurrentPermanentForeignMale: [0, [Validators.required, Validators.min(0)]],
      CurrentTemporaryForeignFemale: [0, [Validators.required, Validators.min(0)]],
      CurrentTemporaryForeignMale: [0, [Validators.required, Validators.min(0)]],
      CurrentTotalPermanent: [{ value: '', disabled: true }],
      CurrentTotalTempo: [{ value: '', disabled: true }],

      Remark: [''],
      Quarter: [''],
      RegistrationYear: [''],
      ProjectStatus: [''],
      totalEmployee: [{ value: '', disabled: true }]
    });

    this.employmetForm.valueChanges.subscribe((data) => {
      this.formErrors = this.formService.validateForm(this.employmetForm, this.formErrors, true);
    });
  }

  notification(message: string) {
    this.toastr.success(` Succesfully ${message} Data.!`, 'Success');

    this.loading = false;
    this.snackbar.open(` Succesfully ${message} Data.!`, 'Close', {
      duration: 3000,
    });
  }

  onClear() {
    this.employmetForm.reset();
  }

  ngAfterContentChecked(): void {
    // this.employmetForm.patchValue({
    //   ProjectId: localStorage.getItem('ProjectId'),
    //   workFlowId: localStorage.getItem('workFlowId')
    // });
  }

  next() {
    this.dataSharing.steeperIndex.next(5);
  }
  goBack(){
    this.dataSharing.steeperIndex.next(3);
  }
  goToNext(){
    this.dataSharing.steeperIndex.next(5);
  }

  back() {
    window.history.back();
  }

  initStaticData(currentLang) {

    let projectStatus1: ProjectStatusModel = new ProjectStatusModel();
    ProjectStatus.forEach(pair => {
      projectStatus1 = {
        'Id': pair.Id.toString(),
        'DescriptionEnglish': pair.DescriptionEnglish,
        'Description': pair.Description
      };
      this.projectStatus.push(projectStatus1);
    });

    let Quarter1: QuarterModel = new QuarterModel();
    Quarter.forEach(pair => {
      Quarter1 = {
        'Id': pair.Id.toString(),
        'DescriptionEnglish': pair.DescriptionEnglish,
        'Description': pair.Description
      };
      this.Quarter.push(Quarter1);
    });

  }


  private getProjectStatus(projectId: any) {
    this.projectProfileService.getProjectStatus(projectId)
      .subscribe(result => {
        this.employmetForm.patchValue({
          ProjectStatus: result.toString()
        });
      });
  }
}
