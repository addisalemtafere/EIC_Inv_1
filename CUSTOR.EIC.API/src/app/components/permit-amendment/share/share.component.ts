import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ServiceTypes
  , AMENDMENT_STEP,
  ENG_SAVE_SUCCESS_MSG, ENG_UPDATE_SUCCESS_MSG, ENG_NOT_FOUND_MSG,
  ENG_SAVE_ERR_MSG, ENG_UPDATE_ERR_MSG,

  AMH_SAVE_SUCCESS_MSG, AMH_UPDATE_SUCCESS_MSG, AMH_NOT_FOUND_MSG,
  AMH_SAVE_ERR_MSG, AMH_UPDATE_ERR_MSG
} from '@custor/const/consts';
import { ConfigurationService } from '@custor/services/configuration.service';
import { ServiceApplicationModel } from '../../../model/ServiceApplication.model';
import { ServiceApplicationService } from '../service/service-application.service';
import { ProjectNationalityCompositionModel } from '../../../model/ProjectNationalityComposition.model.';
import { MatTableDataSource } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { ErrorMessage } from '@custor/services/errMessageService';
import { ProjectNationalityCompositionService } from '../../../Services/project-nationality-composition.service';
import { ProjectService } from '../service/project.service';
import { ActivatedRoute } from '@angular/router';
import { ProjectOfficerService } from '../service/project-officer.service';
import { NationalityModel } from '../../../model/address/NationalityModel';
import { AddressService } from '../../../Services/Address/address.service';
@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  projectShareForm: FormGroup;
  projectShareAmendForm: FormGroup;
  currentLang: string;
  existingServiceApplication: any;
  serviceApplicationId: any;
  projectShare: any;
  IsActive: any;
  IsDeleted: any;
  ProjectNationalityCompositionId: any;
  amendment = ServiceTypes[4].ServiceId;
  nationalityCompositionData: any = [];
  updateData = false;
  editMode = false;
  isSol = false;
  shareEditIndex: any;
  dataSource: any;
  projectId: any;
  InvestorId: any;
  productShare: any;
  serviceId: any;
  productSharePostDTO: any;
  editModeInput = false;
  nationList: NationalityModel[] = [];
  displayedColumns = ['No', 'Nationality', 'Qty', 'SharePercent', 'Description', 'Action'];
  response:any; serviceList:any;
  constructor(private configService: ConfigurationService,
    private formBuilder: FormBuilder,
    private errMsg: ErrorMessage,
    private projectService: ProjectService,
    public route: ActivatedRoute,
    private projectOfficerService: ProjectOfficerService,
    private addressService: AddressService,
    private toaster :ToastrService,
    private nationalityCompositionService: ProjectNationalityCompositionService,
    private serviceApplicationApiService: ServiceApplicationService) {
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
    this.getAllNation();
    this.initForm();
    this.initViewForm();
    // this.projectId = 28174;
  }
  getUpdatedList() {
    this.serviceApplicationApiService.getAddedServiceList(this.projectId, this.serviceApplicationId).subscribe(result => {
      console.log(result)
      if (result != null) {
        this.serviceList = result;
      }
    });
  }
  private getAllNation() {
    this.addressService.getNationality(this.currentLang)
      .subscribe(result => {
        console.log(result);
        this.nationList = result;
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
  initForm() {
    this.projectShareForm = this.formBuilder.group({
      ProjectId: new FormControl(),
      ProjectNationalityCompositionId: new FormControl(''),
      workFlowId: new FormControl(),
      Nationality: new FormControl(null, [Validators.required]),
      Qty: new FormControl('', [Validators.required]),
      SharePercent: new FormControl(null, [Validators.required, Validators.max(100)]),
      Description: new FormControl(null, Validators.minLength(2))
    });
    this.projectShareForm.disable();
  }
  initViewForm() {
    this.projectShareAmendForm = this.formBuilder.group({
      ProjectId: new FormControl(),
      ProjectNationalityCompositionId: new FormControl(''),
      workFlowId: new FormControl(),
      Nationality: new FormControl(null, [Validators.required]),
      Qty: new FormControl('', [Validators.required]),
      SharePercent: new FormControl(null, [Validators.required, Validators.max(100)]),
      Description: new FormControl(null, Validators.minLength(2))
    });
  }
  ngOnInit() {
    // const projectId = 28177;
    // this.projectId = projectId;
    this.getShareData(this.projectId);
  }
  getShareData(projectId) {
    this.projectService.getProjectSharePercentData(projectId).subscribe(res => {
      console.log(res)
      this.nationalityCompositionData = res;
      this.dataSource = new MatTableDataSource<ProjectNationalityCompositionModel>(this.nationalityCompositionData);

    })
  }
  onEditShare(index: number, id: number) {
    this.editMode = true;
    this.ProjectNationalityCompositionId = id;
    this.shareEditIndex = index;
    this.productShare = this.nationalityCompositionData[index];
    this.projectShareForm.patchValue(this.productShare);
    if (this.serviceApplicationId == 0) {
      this.appendPreviousDataToNewForm();
    }
    else{

      this.searchDataFromAudit(id , this.serviceApplicationId);
    }
  }
  searchDataFromAudit(projectCompositionId,serviceApplicationId) {
    this.projectService.getProjectSharePercentAuditData(projectCompositionId, serviceApplicationId).subscribe(res => {
      console.log(res)
      if (res != null) {
        console.log("data found on audit table")
        console.log(res)
        console.log("check service application id later")
        this.productSharePostDTO = res;
        this.projectShareAmendForm.patchValue(res);
        this.updateData = true;
        this.editModeInput = true;
      }
      else {
        this.editModeInput = false;
        console.log("no data found on audit table");
        console.log('user doesn\'t exist on current database');
        this.appendPreviousDataToNewForm();
      }
    })
  }
  appendPreviousDataToNewForm() {
    this.projectShareAmendForm.patchValue(this.productShare);
  }
  create() {
    console.log(this.getEditedData());
    this.projectService.saveShareData(this.getEditedData()).subscribe(res => {
      console.log(res)
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
  update() {
    console.log(this.getEditedData());
    this.projectService.updateShareData(this.getEditedData()).subscribe(res => {
      console.log(res)
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
    console.log(this.projectId)
    this.projectOfficerService.approveShareData(this.projectId).subscribe(res => {
      console.log(res)
    })
  }
  getEditedData() {
    this.projectShare = this.projectShareAmendForm.value;
    this.projectShare.ProjectId = this.projectId;
    this.projectShare.InvestorId = (this.InvestorId) ? this.InvestorId : 0;
    this.projectShare.IsActive = (this.IsActive) ? this.IsActive : true;
    this.projectShare.IsDeleted = (this.IsDeleted) ? this.IsDeleted : false;
    this.projectShare.ProjectInputId = (this.ProjectNationalityCompositionId) ? this.ProjectNationalityCompositionId : 0
    this.projectShare.CurrentStep = AMENDMENT_STEP[5].Step;
    this.projectShare.ServiceId = this.amendment;
    if (this.serviceApplicationId == 0) {
      this.projectShare.ServiceApplicationId = null
    }
    else {
      this.projectShare.ServiceApplicationId = this.serviceApplicationId;
    }
    return this.projectShare;
  }
  get Nationality(){
    return this.projectShareAmendForm.get("Nationality")
  }
  get Qty(){
    return this.projectShareAmendForm.get("Qty")
  }
  get SharePercent(){
    return this.projectShareAmendForm.get("SharePercent")
  }
}
