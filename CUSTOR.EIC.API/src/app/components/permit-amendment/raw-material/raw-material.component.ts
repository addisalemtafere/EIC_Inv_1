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
@Component({
  selector: 'app-raw-material',
  templateUrl: './raw-material.component.html',
  styleUrls: ['./raw-material.component.scss']
})
export class RawMaterialComponent implements OnInit {
  projectRawMaterialForm: FormGroup;
  projectRawMaterialAmendForm: FormGroup;
  editModeInput = false;
  rawInputId: number;
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
  public InvestorId: string;
  public workFlowId: string;
  public serviceApplicationId: number;
  projectRawMaterialData: any;
  projectRawMaterialPostData: any;
  existingServiceApplication: any;
  AllowCascading = true;
  updateData = false;
  amendment = ServiceTypes[4].ServiceId;
  currentLang: string;
  constructor(private formBuilder: FormBuilder,
    private errMsg: ErrorMessage,
    private serviceApplicationApiService: ServiceApplicationService,
    private projectService: ProjectService,
    private configService: ConfigurationService,
    public route: ActivatedRoute) {
    this.currentLang = this.configService.language;
    this.checkServiceApplication();
    this.initForm();
    this.initStaticData(this.currentLang);
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
    const projectId = 28174;
    this.projectId = projectId;
    if (projectId) {
      this.getProjectRawMaterialData(projectId);
    }
  }
  getProjectRawMaterialData (projectId){
    this.projectService.getProjectRawMaterialData(projectId).subscribe(res => {
      console.log(res);
      if (res == null) {
        alert("no record found")
      }
      else {
        this.projectRawMaterialData = res;
        // this.projectRawMaterialForm.patchValue(this.projectRawMaterialData);
        // this.dataSource = new MatTableDataSource(this.projectRawMaterialData);
        this.projectInputData = res;
        this.dataSource = new MatTableDataSource(this.projectInputData);
      }
    //  this.searchDataFromAudit(this.projectId);
    })
  }


  searchDataFromAudit(projectId) {
    this.projectService.getProjectInputAuditData(projectId).subscribe(res => {
      console.log(res)
      if (res != null) {
        console.log("data found on audit table")
        console.log(res)
        console.log("check service application id later")
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
    console.log(this.projectRawMaterialData)
    this.updateData = false;
    this.projectRawMaterialAmendForm.patchValue(this.projectRawMaterialData);
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
  }
  deleteInput(a, b) {

  }
  onEditInput(index: number) {
    this.editModeInput = true;
    this.inputEditIndex = index;
    this.projectRawMaterialForm.patchValue(this.projectInputData[index]);
    this.projectRawMaterialForm.patchValue({
      IsForeign: this.projectInputData[index].IsForeign.toString()
    });
    //this.searchDataFromAudit(this.projectId);
  }
  onSubmitRawMaterial() {

  }
}
