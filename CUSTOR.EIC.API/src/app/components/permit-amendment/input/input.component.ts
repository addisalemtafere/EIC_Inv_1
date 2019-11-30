import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { FormService } from '../../../../@custor/validation/custom/form';
import { ErrorMessage } from '../../../../@custor/services/errMessageService';
import { ActivatedRoute } from '@angular/router';
import { ServiceApplicationService } from "../service/service-application.service";
import {
  ProjectStage, AMENDMENT_STEP, ServiceTypes,
  ENG_SAVE_SUCCESS_MSG, ENG_UPDATE_SUCCESS_MSG, ENG_NOT_FOUND_MSG,
  ENG_SAVE_ERR_MSG, ENG_UPDATE_ERR_MSG,

  AMH_SAVE_SUCCESS_MSG, AMH_UPDATE_SUCCESS_MSG, AMH_NOT_FOUND_MSG,
  AMH_SAVE_ERR_MSG, AMH_UPDATE_ERR_MSG,
} from '@custor/const/consts';
import { ConfigurationService } from '@custor/services/configuration.service';
import { ProjectService } from '../service/project.service';
import { ProjectOfficerService } from '../service/project-officer.service';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  projectInputForm: FormGroup;
  projectInputAmendForm: FormGroup;
  editMode = false;
  editModeInput = false;
  projectInput: any;
  rawInputId: number;
  loading = false;
  subscription: Subscription;
  projectId: any;
  ServiceId: any;
  serviceId: number;
  AllowCascading = true;
  updateData = false;
  amendment = ServiceTypes[4].ServiceId;
  public existingServiceApplication: any;
  projectRequirementId: any
  serviceApplicationId: any;
  currentLang: string;
  projectInputData: any;
  projectInputPostData: any;
  InvestorId: any;
  IsDeleted: any;
  IsActive: any;
  response: any;
  ProjectRequirementId: number;
  serviceList: any;

  constructor(private formBuilder: FormBuilder,
    private errMsg: ErrorMessage,
    private serviceApplicationApiService: ServiceApplicationService,
    public route: ActivatedRoute,
    private toaster: ToastrService,
    private projectService: ProjectService,
    private projectOfficerService: ProjectOfficerService,
    private configService: ConfigurationService) {
    this.currentLang = this.configService.language;
    this.projectId = this.route.snapshot.params.projectId;
    this.serviceApplicationId = this.route.snapshot.params.serviceApplicationId;
    this.serviceId = this.route.snapshot.params.serviceId;
    this.InvestorId = localStorage.getItem('InvestorId');
    console.log(this.InvestorId)
    if (this.serviceApplicationId == 0) {
      this.checkServiceApplication();
    }
    else {
      this.getUpdatedList();
    }
    this.initViewForm();
    this.initForm();
  }
  getUpdatedList() {
    this.serviceApplicationApiService.getAddedServiceList(this.projectId, this.serviceApplicationId).subscribe(result => {
      console.log(result)
      if (result != null) {
        this.serviceList = result;
      }
    });
  }
  ngOnInit() {
    if (this.projectId) {
      this.getProjectInputData(this.projectId);
    }
  }
  checkServiceApplication() {
    this.serviceApplicationApiService.checkServiceApplicationFromApi(this.InvestorId, this.amendment)
      .subscribe(result => {
        if (result != null) {
          this.existingServiceApplication = result;
          this.serviceApplicationId = this.existingServiceApplication.ServiceApplicationId;
          this.getUpdatedList();
        }
      });
  }
  getProjectInputData(projectId) {
    this.projectService.getProjectInputData(projectId).subscribe(res => {
      console.log(res);
      if (res == null) {
        alert("no record found")
      }
      else {
        this.projectInputData = res;
        this.projectRequirementId = this.projectInputData.ProjectRequirementId;
        console.log(this.projectInputData)
        this.projectInputForm.patchValue(this.projectInputData);
      }
      if (this.serviceApplicationId == 0) {
        this.appendPreviousDataToNewForm();
      }
      else {
        this.searchDataFromAudit(this.projectRequirementId, this.serviceApplicationId);
      }
    })
  }
  searchDataFromAudit(projectRequirementId, serviceApplicationId) {
    console.log(serviceApplicationId)
    this.projectService.getProjectInputAuditData(projectRequirementId, serviceApplicationId).subscribe(res => {
      console.log(res)
      if (res != null) {
        console.log("data found on audit table")
        console.log(res)
        console.log("check service application id later")
        this.projectInputPostData = res;
        this.projectInputAmendForm.patchValue(res);
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
    console.log(this.projectInputData)
    this.updateData = false;
    this.projectInputAmendForm.patchValue(this.projectInputData);
    console.log(this.projectInputAmendForm.patchValue(this.projectInputData))
  }


  initViewForm() {
    this.projectInputForm = this.formBuilder.group({
      ProjectId: [], ElectricPower: [], Water: [], OtherUtility: [], LandIndustrial: [],
      LandAgricultural: [], LandService: [], OwnLand: [], LeaseLand: [], RentalLand: [],
      Quarter: [], RegistrationYear: [], ProjectStatus: [], Remark: [], workFlowId: [],
    });
    this.projectInputForm.disable();
  }
  initForm() {
    this.projectInputAmendForm = this.formBuilder.group({
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
      Remark: ['', [Validators.minLength(2)]],
      workFlowId: []
    })
  }

  getEditedData() {
    this.projectInput = this.projectInputAmendForm.value;
    this.projectInput.ProjectId = this.projectId;
    this.projectInput.InvestorId = (this.InvestorId) ? this.InvestorId : 0;
    this.projectInput.IsActive = (this.IsActive) ? this.IsActive : true;
    this.projectInput.IsDeleted = (this.IsDeleted) ? this.IsDeleted : false;
    this.projectInput.CurrentStep = AMENDMENT_STEP[2].Step;
    this.projectInput.ServiceId = this.amendment;
    this.projectInput.projectRequirementId = (this.projectRequirementId) ? this.projectRequirementId : 0;
    if (this.serviceApplicationId == 0) {
      this.projectInput.ServiceApplicationId = null
    }
    else {
      this.projectInput.ServiceApplicationId = this.serviceApplicationId;
    }
    return this.projectInput;
  }
  create() {
    console.log(this.getEditedData());
    this.projectService.saveInputData(this.getEditedData()).subscribe(res => {
      if (res) {
        console.log(res)
        this.updateData = true;
        this.response = res;
        this.serviceApplicationId = this.response.ServiceApplicationId
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
  update() {
    this.projectService.updateInputData(this.getEditedData()).subscribe(res => {
      if (res) {
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
  approve() {
    console.log(this.getEditedData());
    this.projectOfficerService.approveProjectInput(this.getEditedData()).subscribe(res => {
      console.log(res)
    })
  }

  get ElectricPower() {
    return this.projectInputAmendForm.get("ElectricPower");
  }
  get Water() {
    return this.projectInputAmendForm.get("Water");
  }
  get LandIndustrial() {
    return this.projectInputAmendForm.get("LandIndustrial");
  }
  get LandAgricultural() {
    return this.projectInputAmendForm.get("LandAgricultural");
  }
  get LandService() {
    return this.projectInputAmendForm.get("LandService");
  }
  get OwnLand() {
    return this.projectInputAmendForm.get("OwnLand");
  }
  get LeaseLand() {
    return this.projectInputAmendForm.get("LeaseLand");
  }
  get RentalLand() {
    return this.projectInputAmendForm.get("RentalLand");
  }
}
