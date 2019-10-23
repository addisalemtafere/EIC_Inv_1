import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { CustomValidators } from '@custor/validation/custom/custom_validators';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ProjectInputModel } from '../../../model/ProjectInput.model';
import { ProjectStatusModel, QuarterModel } from '../../../model/lookupData';
import { ProjectStatus, Quarter } from '@custor/const/consts';
import { ErrorMessage } from '../../../../@custor/services/errMessageService';
import { ActivatedRoute } from '@angular/router';
import { ProjectStage, FormOfOwnership, ServiceTypes } from '@custor/const/consts';
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
  public InvestorId: number;
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
  constructor(private formBuilder: FormBuilder,
    private errMsg: ErrorMessage,
    private serviceApplicationApiService: ServiceApplicationService,
    private projectService: ProjectService,
    private configService: ConfigurationService,
    private projectOfficerService: ProjectOfficerService,
    public route: ActivatedRoute) {
    this.currentLang = this.configService.language;
    this.projectId = this.route.snapshot.params.projectId;
    this.serviceId = this.route.snapshot.params.serviceId;
    this.serviceApplicationId = this.route.snapshot.params.serviceApplicationId;
    if (this.serviceApplicationId == 0) {
      this.checkServiceApplication();
    }
    this.initForm();
    this.initViewForm();
    this.initStaticData(this.currentLang);
  }
  checkServiceApplication() {
    const id = 2092;
    this.InvestorId = id;
    this.serviceApplicationApiService.checkServiceApplicationFromApi(id, this.amendment)
      .subscribe(result => {
        if (result != null) {
          this.existingServiceApplication = result;
          this.serviceApplicationId = this.existingServiceApplication.ServiceApplicationId;
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
    console.log(index)
    this.searchDataFromAudit(this.ProjectInputId, this.serviceApplicationId);
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
      console.log(res)
    })
  }
  update(){
    console.log(this.getEditedData());
    this.projectService.updateRawMaterialData(this.getEditedData()).subscribe(res => {
      console.log(res)
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
    if (this.serviceApplicationId == 0) {
      this.projectRawMaterial.ServiceApplicationId = null
    }
    else {
      this.projectRawMaterial.ServiceApplicationId = this.serviceApplicationId;
    }
    return this.projectRawMaterial;
  }
}
