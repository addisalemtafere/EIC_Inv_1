import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { AftercareService } from '../service/aftercare.service';
import { ProjectStatus, Quarter } from '@custor/const/consts';
import { ProjectStatusModel, QuarterModel } from '../../../model/lookupData';
import { ToastrService } from 'ngx-toastr';
import { ConfigurationService } from '@custor/services/configuration.service';
import {
  ServiceTypes, AMENDMENT_STEP,
  ENG_SAVE_SUCCESS_MSG, ENG_UPDATE_SUCCESS_MSG, ENG_NOT_FOUND_MSG,
  ENG_SAVE_ERR_MSG, ENG_UPDATE_ERR_MSG,

  AMH_SAVE_SUCCESS_MSG, AMH_UPDATE_SUCCESS_MSG, AMH_NOT_FOUND_MSG,
  AMH_SAVE_ERR_MSG, AMH_UPDATE_ERR_MSG

} from '@custor/const/consts';
@Component({
  selector: 'app-employment-form',
  templateUrl: './employment-form.component.html',
  styleUrls: ['./employment-form.component.scss']
})
export class EmploymentFormComponent implements OnInit {
  employmentForm: FormGroup;
  projectEmploymentId: any;
  projectId: any;
  projectEmploymentData: any;
  projectEmployment: any;
  updateData: any;
  viewOnly: any;
  currentLang: string;
  public Quarter: any = [];
  projectStatus: ProjectStatusModel[] = [];
  constructor(private formBuilder: FormBuilder,
    private afterCareService: AftercareService,
    private configService: ConfigurationService,
    private toaster: ToastrService,
    private activatedRoute: ActivatedRoute) {
    this.initStaticData();
    this.currentLang = this.configService.language;
    this.projectEmploymentId = this.activatedRoute.snapshot.params.employmentId;
    this.projectId = this.activatedRoute.snapshot.params.projectId;
    this.viewOnly = this.activatedRoute.snapshot.params.viewOnly;
    if (this.viewOnly && this.viewOnly == 0){
       this.getEmploymentOriginalData()
    }
    else{
      if (this.projectEmploymentId == 0) {
        this.updateData = false;
      }
      else {
        this.updateData = true;
        this.getEmploymentData();
      }
    }
   
  }
  getEmploymentOriginalData(){
    this.afterCareService.getEmploymentOriginalData(this.projectId).subscribe(response => {
      console.log(response)
      this.projectEmploymentData = response;
      // this.employmentForm.patchValue(this.projectEmploymentData);
      this.employmentForm.patchValue(this.projectEmploymentData);
      this.employmentForm.controls.Quarter.setValue((this.projectEmploymentData.Quarter.toString()));
      this.employmentForm.controls.ProjectStatus.setValue((this.projectEmploymentData.ProjectStatus.toString()));
      this.employmentForm.controls.Decision.setValue((this.projectEmploymentData.Decision.toString()));

    })
  }
  getEmploymentData() {
    this.afterCareService.getEmploymentData(this.projectEmploymentId).subscribe(response => {
      console.log(response)
      this.projectEmploymentData = response;
     // this.employmentForm.patchValue(this.projectEmploymentData);
      this.employmentForm.patchValue(this.projectEmploymentData);
      this.employmentForm.controls.Quarter.setValue((this.projectEmploymentData.Quarter.toString()));
      this.employmentForm.controls.ProjectStatus.setValue((this.projectEmploymentData.ProjectStatus.toString()));
      this.employmentForm.controls.Decision.setValue((this.projectEmploymentData.Decision.toString()));

    })
  }
  initStaticData() {
    let projectStatus1: ProjectStatusModel = new ProjectStatusModel();
    ProjectStatus.forEach(pair => {
      projectStatus1 = {
        Id: pair.Id.toString(),
        DescriptionEnglish: pair.DescriptionEnglish,
        Description: pair.Description
      };
      this.projectStatus.push(projectStatus1);
    });

    let Quarter1: QuarterModel = new QuarterModel();
    Quarter.forEach(pair => {
      Quarter1 = {
        Id: pair.Id.toString(),
        DescriptionEnglish: pair.DescriptionEnglish,
        Description: pair.Description
      };
      this.Quarter.push(Quarter1);
    });
  }
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.employmentForm = this.formBuilder.group({
      ProjectId: [],
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
      Decision: [''],
      totalEmployee: [{ value: '', disabled: true }]
    });
  }
  
  update() {
    this.afterCareService.updateEmploymentData(this.getEditedData()).subscribe(response => {
      console.log(response)
      console.log(this.currentLang)
      if (response) {
        if (this.currentLang == 'en') {
          this.toaster.success(ENG_UPDATE_SUCCESS_MSG)
        }
        else {
          this.toaster.success(AMH_UPDATE_SUCCESS_MSG)
        }
      }
      else {
        if (this.currentLang == 'en') {
          this.toaster.success(ENG_UPDATE_ERR_MSG)
        }
        else {
          this.toaster.success(AMH_SAVE_ERR_MSG)
        }
      }

    })
  }
  create(){
    this.afterCareService.saveEmploymentData(this.getEditedData()).subscribe(response => {
      console.log(response)
      console.log(this.currentLang)
      if (response) {
        this.updateData = true; 
        this.projectEmploymentData = response;
        this.projectEmploymentId = this.projectEmploymentData.ProjectEmploymentId;
        if (this.currentLang == 'en') {
          this.toaster.success(ENG_SAVE_SUCCESS_MSG)
        }
        else {
          this.toaster.success(AMH_SAVE_SUCCESS_MSG)
        }
      }
      else {
        if (this.currentLang == 'en') {
          this.toaster.success(ENG_SAVE_ERR_MSG)
        }
        else {
          this.toaster.success(AMH_SAVE_ERR_MSG)
        }
      }
  })
}
  getEditedData() {
    this.projectEmployment = this.employmentForm.value;
    this.projectEmployment.ProjectEmploymentId = this.projectEmploymentId;
    this.projectEmployment.ProjectId = this.projectId;
    return this.projectEmployment;
  }
  get PermanentFemale() {
    return this.employmentForm.get("PermanentFemale");
  }
  get PermanentMale() {
    return this.employmentForm.get("PermanentMale");
  }
  get TemporaryFemale() {
    return this.employmentForm.get("TemporaryFemale");
  }
  get TemporaryMale() {
    return this.employmentForm.get("TemporaryMale");
  }
  get PermanentForeignFemale() {
    return this.employmentForm.get("PermanentForeignFemale");
  }

  get PermanentForeignMale() {
    return this.employmentForm.get("PermanentForeignMale");
  }
  get TemporaryForeignFemale() {
    return this.employmentForm.get("TemporaryForeignFemale");
  }

  get TemporaryForeignMale() {
    return this.employmentForm.get("TemporaryForeignMale");
  }
  back(){
    window.history.back();
  }
}
