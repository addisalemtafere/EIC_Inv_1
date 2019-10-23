import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { FormService } from '../../../../@custor/validation/custom/form';
import { ErrorMessage } from '../../../../@custor/services/errMessageService';
import { ActivatedRoute } from '@angular/router';
import { ServiceApplicationService } from "../service/service-application.service";
import { ProjectStage, FormOfOwnership, ServiceTypes } from '@custor/const/consts';
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
  projectInput :any;
  rawInputId: number;
  loading = false;
  subscription: Subscription;
  projectId: any;
  ServiceId: number;
  serviceId: number;
  AllowCascading = true;
  updateData = false;
  amendment = ServiceTypes[4].ServiceId;
  public existingServiceApplication: any;
  projectRequirementId : any
  serviceApplicationId: any;
  currentLang: string;
  projectInputData:any;
  projectInputPostData:any;
  InvestorId:any;
  IsDeleted : any;
  IsActive:any;
  ProjectRequirementId: number;

  constructor(private formBuilder: FormBuilder,
    private errMsg: ErrorMessage,
    private serviceApplicationApiService: ServiceApplicationService,
    public route: ActivatedRoute,
    private projectService: ProjectService,
    private projectOfficerService: ProjectOfficerService,
    private configService: ConfigurationService) {
    this.currentLang = this.configService.language;
    this.projectId = this.route.snapshot.params.projectId;
    this.serviceApplicationId = this.route.snapshot.params.serviceApplicationId;
    this.serviceId = this.route.snapshot.params.serviceId;
    this.InvestorId = 2092;
    if (this.serviceApplicationId == 0) {
      this.checkServiceApplication();
    }
    this.initViewForm();
    this.initForm();
  }

  ngOnInit() {
    if (this.projectId) {
      this.getProjectInputData(this.projectId);
    }
  }
  getProjectInputData(projectId){
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
      this.searchDataFromAudit(this.projectId, this.serviceApplicationId);
  })
}
  searchDataFromAudit(projectId,serviceApplicationId){
    console.log(serviceApplicationId)
    this.projectService.getProjectInputAuditData(projectId, serviceApplicationId).subscribe(res => {
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
  appendPreviousDataToNewForm(){
    console.log('no data in new database');
    console.log(this.projectInputData)
    this.updateData = false;
    this.projectInputAmendForm.patchValue(this.projectInputData);
    console.log(this.projectInputAmendForm.patchValue(this.projectInputData))
  }
  
  checkServiceApplication() {
    const id = 2092;
    this.serviceApplicationApiService.checkServiceApplicationFromApi(id, this.amendment)
      .subscribe(result => {
        if (result != null) {
          this.existingServiceApplication = result;
          this.serviceApplicationId = this.existingServiceApplication.ServiceApplicationId;
        }
      });
  }
  initViewForm(){
    this.projectInputForm = this.formBuilder.group({
      ProjectId: [], ElectricPower: [], Water: [], OtherUtility: [], LandIndustrial: [],
      LandAgricultural: [], LandService: [], OwnLand: [], LeaseLand: [], RentalLand:[],
      Quarter: [], RegistrationYear: [], ProjectStatus: [], Remark: [], workFlowId:[],
    });
    this.projectInputForm.disable();
  }
  initForm() {
    this.projectInputAmendForm = this.formBuilder.group({
      ProjectId: [],
      ElectricPower: [0, [Validators.required, Validators.min(0)]],
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
    this.projectInput.InvestorId = (this.InvestorId) ? this.InvestorId : 0;;
    this.projectInput.IsActive = (this.IsActive) ? this.IsActive : true;
    this.projectInput.IsDeleted = (this.IsDeleted) ? this.IsDeleted : false;
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
      console.log(res)
    })
  }
  update(){
    this.projectService.updateInputData(this.getEditedData()).subscribe(res => {
      console.log(res)
    })
  }
  approve() {
    console.log(this.getEditedData());
    this.projectOfficerService.approveProjectInput(this.getEditedData()).subscribe(res => {
      console.log(res)
    })
  }
}
