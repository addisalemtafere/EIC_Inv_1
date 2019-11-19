import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { CustomValidators } from '@custor/validation/custom/custom_validators';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ProjectInputModel } from '../../../model/ProjectInput.model';
import { ProjectStatusModel, QuarterModel } from '../../../model/lookupData';
import {
  ProjectStatus, Quarter, ServiceTypes,
  AMENDMENT_STEP,
  ENG_SAVE_SUCCESS_MSG, ENG_UPDATE_SUCCESS_MSG, ENG_NOT_FOUND_MSG,
  ENG_SAVE_ERR_MSG, ENG_UPDATE_ERR_MSG,

  AMH_SAVE_SUCCESS_MSG, AMH_UPDATE_SUCCESS_MSG, AMH_NOT_FOUND_MSG,
  AMH_SAVE_ERR_MSG, AMH_UPDATE_ERR_MSG
} from '@custor/const/consts';
import { ErrorMessage } from '../../../../@custor/services/errMessageService';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationService } from '@custor/services/configuration.service';
import { ProjectService } from '../service/project.service';
import { ServiceApplicationService } from "../service/service-application.service";
import { MatSnackBar, MatTableDataSource } from '@angular/material';
import { ProjectOfficerService } from '../service/project-officer.service';
@Component({
  selector: 'app-raw-material',
  templateUrl: './raw-material.component.html',
  styleUrls: ['./raw-material.component.scss']
})
export class RawMaterialComponent implements OnInit {
  projectRawMaterialForm: FormGroup;
  projectRawMaterialAmendForm: FormGroup;
  editModeInput = false;
  editMode = false;
  rawInputId: number;
  projectRawMaterial: any;
  response: any;
  loading = false;
  subscription: Subscription;
  projectInputData:any;
  projectId: any;
  public dataSource: any;
  displayedColumns = ['No', 'RawMaterialType', 'Remark', 'Action'];
  inputEditIndex: number;
  public stepperIndex: number;
  public projectStatus: ProjectStatusModel[] = [];
  public Quarter: QuarterModel[] = [];
  public ServiceId: number;
  public InvestorId: any;
  public workFlowId: string;
  public serviceApplicationId: number;
  projectRawMaterialData: any;
  projectRawMaterialPostData: any;
  existingServiceApplication: any;
  currentData: any;
  AllowCascading = true;
  updateData = false;
  amendment = ServiceTypes[4].ServiceId;
  currentLang: string;
  serviceId: string;
  IsActive : any;
  IsDeleted: any;
  ProjectInputId: any;
  serviceList: any;
  constructor(private formBuilder: FormBuilder,
    private errMsg: ErrorMessage,
    private toaster: ToastrService,
    private serviceApplicationApiService: ServiceApplicationService,
    private projectService: ProjectService,
    private configService: ConfigurationService,
    private projectOfficerService: ProjectOfficerService,
    public route: ActivatedRoute) {
    this.currentLang = this.configService.language;
    this.projectId = this.route.snapshot.params.projectId;
    this.serviceId = this.route.snapshot.params.serviceId;
    this.serviceApplicationId = this.route.snapshot.params.serviceApplicationId;
    this.InvestorId = localStorage.getItem('InvestorId');
    if (this.serviceApplicationId == 0) {
      this.checkServiceApplication();
    } else {
      this.getUpdatedList();
    }
    this.initForm();
    this.initViewForm();
    this.initStaticData(this.currentLang);
  }
  getUpdatedList() {
    this.serviceApplicationApiService.getAddedServiceList(this.projectId, this.serviceApplicationId).subscribe(result => {
      console.log(result)
      if (result != null) {
        this.serviceList = result;
      }
    });
  }
  checkServiceApplication() {
    this.serviceApplicationApiService.checkServiceApplicationFromApi(this.InvestorId, this.amendment)
      .subscribe(result => {
        if (result != null) {
          this.existingServiceApplication = result;
          this.serviceApplicationId = this.existingServiceApplication.ServiceApplicationId;
          this.getUpdatedList();
        }
        else {
          this.serviceApplicationId = 0;
        }
      });
  }
  ngOnInit() {
    if (this.projectId) {
      this.getProjectRawMaterialData(this.projectId);
    }
  }
  getProjectRawMaterialData (projectId){
    this.projectService.getProjectRawMaterialData(projectId).subscribe(res => {
      console.log(res);
      if (res == null) {
        alert("no record found")
      }
      else {
        this.projectInputData = res;
        this.dataSource = new MatTableDataSource(this.projectInputData);
      }
    })
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
  initForm() {
    this.projectRawMaterialAmendForm = this.formBuilder.group({
      ProjectInputId: new FormControl(''),
      ProjectId: new FormControl(this.projectId),
      RawMaterialType: new FormControl('', [Validators.required]),
      IsForeign: new FormControl('', [Validators.required]),
      Remark: new FormControl('', [Validators.minLength(2)]),
      Quarter: [''],
      RegistrationYear: [''],
      ProjectStatus: [''],
    });
  }
  initViewForm(){
    this.projectRawMaterialForm = this.formBuilder.group({
      ProjectInputId: new FormControl(''),
      ProjectId: new FormControl(this.projectId),
      RawMaterialType: new FormControl('', [Validators.required]),
      IsForeign: new FormControl('', [Validators.required]),
      Remark: new FormControl('', [Validators.minLength(2)]),
      Quarter: [''],
      RegistrationYear: [''],
      ProjectStatus: [''],
    });
    this.projectRawMaterialForm.disable();
  }
  deleteInput(a, b) {

  }
  onEditInput(index: number) {
    
    this.editMode = true;
    this.inputEditIndex = index;
    this.currentData = this.projectInputData[index]
    console.log(this.currentData)
    this.IsActive = this.currentData.IsActive;
    this.IsDeleted = this.currentData.IsDeleted;
    this.ProjectInputId = this.currentData.ProjectInputId;
    this.projectRawMaterialForm.patchValue(this.projectInputData[index]);
    this.projectRawMaterialForm.patchValue({
      IsForeign: this.projectInputData[index].IsForeign.toString()
    });
    console.log(index);
    if (this.serviceApplicationId == 0) {
      this.appendPreviousDataToNewForm();
    }
    else {
      this.searchDataFromAudit(this.ProjectInputId, this.serviceApplicationId);
    }
  }
  searchDataFromAudit(ProjectInputId, serviceApplicationId) {
    console.log(ProjectInputId)
    console.log(serviceApplicationId)
    this.projectService.getProjectRawMaterialAuditData(ProjectInputId, serviceApplicationId).subscribe(res => {
      console.log(res)
      if (res != null) {
        console.log("data found on audit table")
        console.log("check service application id later")
        console.log(res)
        this.editModeInput = true;
        this.projectRawMaterialPostData = res;
        this.projectRawMaterialAmendForm.patchValue(res);
        this.projectRawMaterialAmendForm.patchValue({
          IsForeign: this.projectRawMaterialPostData.IsForeign.toString()
        });
        this.updateData = true;
      }
      else {
        console.log("no data found on audit table");
        this.editModeInput = false;
        console.log('user doesn\'t exist on current database');
        this.appendPreviousDataToNewForm();
      }
    })
  }
  appendPreviousDataToNewForm() {
    console.log('no data in new database');
    console.log(this.currentData)
    this.updateData = false;
    this.projectRawMaterialAmendForm.patchValue(this.currentData);
    this.projectRawMaterialAmendForm.patchValue({
      IsForeign: this.currentData.IsForeign.toString()
    });
  }
  onSubmitRawMaterial() {

  }
  create(){
    console.log(this.getEditedData());
    this.projectService.saveRawMaterialData(this.getEditedData()).subscribe(res => {
      if (res) {
        console.log(res)
        this.updateData = true;
        this.editModeInput = true;
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
  update(){
    console.log(this.getEditedData());
    this.projectService.updateRawMaterialData(this.getEditedData()).subscribe(res => {
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
  approve(){
    console.log(this.getEditedData());
    console.log(this.projectId)
    // return;
    this.projectOfficerService.approveRawMaterialData(this.projectId).subscribe(res => {
      console.log(res)
    })
  }
  getEditedData(){
    this.projectRawMaterial = this.projectRawMaterialAmendForm.value;
    this.projectRawMaterial.ProjectId = this.projectId;
    this.projectRawMaterial.InvestorId = (this.InvestorId) ? this.InvestorId : 0;
    this.projectRawMaterial.IsActive = (this.IsActive) ? this.IsActive : true;
    this.projectRawMaterial.IsDeleted = (this.IsDeleted) ? this.IsDeleted : false;
    this.projectRawMaterial.ProjectInputId = (this.ProjectInputId) ? this.ProjectInputId:0
    this.projectRawMaterial.CurrentStep = AMENDMENT_STEP[3].Step;
    this.projectRawMaterial.ServiceId = this.amendment;
    if (this.serviceApplicationId == 0) {
      this.projectRawMaterial.ServiceApplicationId = null
    }
    else {
      this.projectRawMaterial.ServiceApplicationId = this.serviceApplicationId;
    }
    return this.projectRawMaterial;
  }
  get RawMaterialType(){
    return this.projectRawMaterialAmendForm.get("RawMaterialType");
  }
}
