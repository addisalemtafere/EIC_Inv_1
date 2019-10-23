import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import { ProjectService } from '../service/project.service';
import { ServiceApplicationService } from "../service/service-application.service";
import { ToastrService } from 'ngx-toastr';
import { ErrorMessage } from '@custor/services/errMessageService';
import { ConfigurationService } from '@custor/services/configuration.service';
import { ProjectStage, FormOfOwnership, ServiceTypes } from '@custor/const/consts';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectOfficerService } from '../service/project-officer.service';
@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss']
})
export class EmploymentComponent implements OnInit {
  employmentForm: FormGroup;
  employmentAmendForm: FormGroup;
  currentLang:string;
  existingServiceApplication:any;
  serviceApplicationId:any;
  projectEmploymentData:any;
  projectEmploymentPostData:any;
  projectEmployment:any;
  amendment = ServiceTypes[4].ServiceId;
  updateData = false;
  projectId: any; serviceId: any; ProjectEmploymentId :any;
  InvestorId: any;IsDeleted: any;IsActive: any;
  constructor(private serviceApplicationApiService: ServiceApplicationService,
    private configService:ConfigurationService,
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute,
    private projectOfficerService: ProjectOfficerService,
    private formBuilder : FormBuilder) { 
    this.currentLang = this.configService.language;
    this.projectId = this.activatedRoute.snapshot.params.projectId;
    this.serviceApplicationId = this.activatedRoute.snapshot.params.serviceApplicationId;
    this.serviceId = this.activatedRoute.snapshot.params.serviceId;
    if (this.serviceApplicationId == 0) {
      this.checkServiceApplication();
    }
    this.initForm();
    this.initViewForm();
  }
  checkServiceApplication() {
    const id = 2092;
    this.serviceApplicationApiService.checkServiceApplicationFromApi(id, this.amendment)
      .subscribe(result => {
        if (result != null) {
          this.existingServiceApplication = result;
          this.serviceApplicationId = this.existingServiceApplication.ServiceApplicationID;
        }
        else {
          this.serviceApplicationId = 0;
        }
      });
  }
  ngOnInit() {
   
    if (this.projectId) {
      this.getProjectEmploymentData(this.projectId);
    }
  }
  getProjectEmploymentData(projectId){
    this.projectService.getProjectEmploymentData(projectId).subscribe(res => {
      console.log(res);
      if (res == null) {
        alert("no record found")
      }
      else {
        this.projectEmploymentData = res;
        this.ProjectEmploymentId = this.projectEmploymentData.ProjectEmploymentId;
        this.employmentForm.patchValue(this.projectEmploymentData);
      }
      this.searchDataFromAudit(projectId,this.serviceApplicationId);
    })
  }
  searchDataFromAudit(projectId,serviceApplicationId) {
    this.projectService.getProjectEmploymentAuditData(projectId, serviceApplicationId).subscribe(res => {
      console.log(res)
      if (res != null) {
        console.log("data found on audit table")
        console.log(res)
        console.log("check service application id later")
        this.projectEmploymentPostData = res;
        this.employmentAmendForm.patchValue(res);
        this.updateData = true;
      }
      else {
        console.log("no data found on audit table");
        console.log('user doesn\'t exist on current database');
        this.appendPreviousDataToNewForm();
      }
    })
  }
  appendPreviousDataToNewForm() {
    console.log('no data in new database');
    console.log(this.projectEmploymentData)
    this.updateData = false;
    this.employmentAmendForm.patchValue(this.projectEmploymentData);
    console.log(this.employmentAmendForm.patchValue(this.projectEmploymentData))
  }
  initForm(){
    this.employmentAmendForm = this.formBuilder.group({
      ProjectId: [],
      workFlowId: [],
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

  }
  initViewForm(){
    this.employmentForm = this.formBuilder.group({
      ProjectId: [],
      workFlowId: [],
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
    this.employmentForm.disable();

  }
  create() {
    console.log("create");
    console.log(this.getEditedData());
    this.projectService.saveEmploymentData(this.getEditedData()).subscribe(res => {
      console.log(res)
    })
  }
  update() {
    this.projectService.updateEmploymentData(this.getEditedData()).subscribe(res => {
      console.log(res)
    })
  }
  approve() {
    this.projectOfficerService.approveProjectData(this.getEditedData()).subscribe(res => {
      console.log(res)
    })
  }
  getEditedData() {
    this.projectEmployment = this.employmentAmendForm.value;
    this.projectEmployment.ProjectId = this.projectId;
    this.projectEmployment.InvestorId = (this.InvestorId) ? this.InvestorId : 0;;
    this.projectEmployment.IsActive = (this.IsActive) ? this.IsActive : true;
    this.projectEmployment.IsDeleted = (this.IsDeleted) ? this.IsDeleted : false;
    this.projectEmployment.ProjectEmploymentId = (this.ProjectEmploymentId) ? this.ProjectEmploymentId : 0;

    if (this.serviceApplicationId == 0) {
      this.projectEmployment.ServiceApplicationId = null
    }
    else {
      this.projectEmployment.ServiceApplicationId = this.serviceApplicationId;
    }
    return this.projectEmployment;
  }


}
