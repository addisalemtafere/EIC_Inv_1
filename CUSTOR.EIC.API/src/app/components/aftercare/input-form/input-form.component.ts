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
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  projectInputForm: FormGroup;
  projectRequirementId: any;
  projectId: any;
  projectInputData: any;
  projectInput: any;
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
    this.projectRequirementId = this.activatedRoute.snapshot.params.inputId;
    this.projectId = this.activatedRoute.snapshot.params.projectId;
    this.viewOnly = this.activatedRoute.snapshot.params.viewOnly;
    if (this.viewOnly && this.viewOnly == 0) {
      this.getRequirementOriginalData()
    }
    else {
      if (this.projectRequirementId == 0) {
        this.updateData = false;
      }
      else {
        this.updateData = true;
        this.getRequirementData();
      }
    }
  }
  getRequirementOriginalData(){
    this.afterCareService.getRequirementOriginalData(this.projectId).subscribe(response => {
      console.log(response)
      this.projectInputData = response;
      this.projectInputForm.patchValue(this.projectInputData);
      this.projectInputForm.controls.Quarter.setValue((this.projectInputData.Quarter.toString()));
      this.projectInputForm.controls.ProjectStatus.setValue((this.projectInputData.ProjectStatus.toString()));
      this.projectInputForm.controls.Decision.setValue((this.projectInputData.Decision.toString()));

    })
  }
  getRequirementData(){
    this.afterCareService.getRequirementData(this.projectRequirementId).subscribe(response => {
      console.log(response)
      this.projectInputData = response;
      this.projectInputForm.patchValue(this.projectInputData);
      this.projectInputForm.controls.Quarter.setValue((this.projectInputData.Quarter.toString()));
      this.projectInputForm.controls.ProjectStatus.setValue((this.projectInputData.ProjectStatus.toString()));
      this.projectInputForm.controls.Decision.setValue((this.projectInputData.Decision.toString()));

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
    this.projectInputForm = this.formBuilder.group({
      ProjectId: [],
      ElectricPower: ['', [Validators.required, Validators.min(0)]],
      Water: [0, [Validators.required, Validators.min(0)]],
      OtherUtility: [0, [Validators.min(0)]],
      LandIndustrial: [0, [Validators.required, Validators.min(0)]],
      LandAgricultural: [0, [Validators.required, Validators.min(0)]],
      LandService: [0, [Validators.required, Validators.min(0)]],
      OwnLand: [0, [Validators.required, Validators.min(0)]],
      LeaseLand: [0, [Validators.required, Validators.min(0)]],
      RentalLand: [0, [Validators.required, Validators.min(0)]],
      Quarter: [''],
      RegistrationYear: [''],
      ProjectStatus: [''],
      Decision: [''],
      Remark: ['', [Validators.minLength(2)]],
    })
  }
  
  update() {
    console.log(this.getEditedData())
    this.afterCareService.updateRequirementData(this.getEditedData()).subscribe(response => {
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
  create() {
    this.afterCareService.saveRequirementData(this.getEditedData()).subscribe(response => {
      console.log(response)
      console.log(this.currentLang)
      if (response) {
        this.updateData = true;
        this.projectInputData = response;
        this.projectRequirementId = this.projectInputData.ProjectRequirementId;
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
    this.projectInput = this.projectInputForm.value;
    this.projectInput.ProjectRequirementId = this.projectRequirementId;
    this.projectInput.ProjectId = this.projectId;
    return this.projectInput;
  }
  get ElectricPower() {
    return this.projectInputForm.get("ElectricPower");
  }
  get Water() {
    return this.projectInputForm.get("Water");
  }
  get LandIndustrial() {
    return this.projectInputForm.get("LandIndustrial");
  }
  get LandAgricultural() {
    return this.projectInputForm.get("LandAgricultural");
  }
  get LandService() {
    return this.projectInputForm.get("LandService");
  }
  get OwnLand() {
    return this.projectInputForm.get("OwnLand");
  }
  get LeaseLand() {
    return this.projectInputForm.get("LeaseLand");
  }
  get RentalLand() {
    return this.projectInputForm.get("RentalLand");
  }
  back() {
    window.history.back();
  }
  

}
