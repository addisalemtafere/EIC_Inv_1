import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { Subscription, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ErrorMessage } from '@custor/services/errMessageService';
import { ActivatedRoute, Params } from '@angular/router';
import { ProjectOutputModel } from '../../../model/ProjectOutput.model';
import { ProjectService } from '../service/project.service';
import { MatTableDataSource } from '@angular/material';
import { ServiceApplicationService } from '../service/service-application.service';
import { ServiceTypes, UnitTypes,
  AMENDMENT_STEP,
  ENG_SAVE_SUCCESS_MSG, ENG_UPDATE_SUCCESS_MSG, ENG_NOT_FOUND_MSG,
  ENG_SAVE_ERR_MSG, ENG_UPDATE_ERR_MSG,

  AMH_SAVE_SUCCESS_MSG, AMH_UPDATE_SUCCESS_MSG, AMH_NOT_FOUND_MSG,
  AMH_SAVE_ERR_MSG, AMH_UPDATE_ERR_MSG
} from '@custor/const/consts';
import {  UnitType } from '../../../model/lookupData';
import { ProjectOfficerService } from '../service/project-officer.service';
import { ConfigurationService } from '../../../../@custor/services/configuration.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  loading = false;
  productForm: FormGroup;
  productAmendForm: FormGroup;
  ServiceId: any;
  InvestorId: any;
  workFlowId: any;
  projectProduct: any;
  ServiceApplicationId: any;
  projectId: any;
  dataSource: any;
  editMode = false;
  updateData = false;
  editModeInput = false;
  productEditIndex: number;
  productEdit: ProjectOutputModel;
  productEditPostDTO: any;
  serviceId: any;
  serviceApplicationId: any;
  existingServiceApplication: any;
  ProjectOutputId: any;
  IsDeleted: any;
  IsActive: any;
  response: any;
  currentLang : string;
  amendment = ServiceTypes[4].ServiceId;
  displayedColumns = [
    'No', 'ProductName', 'ProductQty', 'DomesticMarketShare', 'ExportMarketShare', 'Action'
  ];
  public unitTypes: UnitType[] = [];
  productData: any
  serviceList: any
  constructor(private formBuilder: FormBuilder,
    private errMsg: ErrorMessage,
    private projectService: ProjectService,
    private configService: ConfigurationService,
    private toaster : ToastrService,
    private serviceApplicationApiService: ServiceApplicationService,
    private projectOfficerService: ProjectOfficerService,
    public route: ActivatedRoute) {
    this.currentLang = this.configService.language;
    this.projectId = this.route.snapshot.params.projectId;
    this.serviceId = this.route.snapshot.params.serviceId;
    this.serviceApplicationId = this.route.snapshot.params.serviceApplicationId;
    if (this.serviceApplicationId == 0) {
      this.checkServiceApplication();
    }
    else {
      this.getUpdatedList();
    }
    this.initForm();
    this.initViewForm();
    this.initStaticData();
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
    const id = 2092;
    this.InvestorId = id;
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
  initStaticData(){
    let unit: UnitType = new UnitType();
    UnitTypes.forEach(pair => {
      unit = {
        'Id': pair.Id.toString(),
        'DescriptionEnglish': pair.DescriptionEnglish,
        'Description': pair.Description
      };
      this.unitTypes.push(unit);
    });
  }
  ngOnInit() {
    // this.ServiceId = this.route.snapshot.params['ServiceId'];
    this.InvestorId = this.route.snapshot.params['InvestorId'];
    this.workFlowId = this.route.snapshot.params['workFlowId'];
    this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
    this.getProjectOutPut();
  }
  getProjectOutPut() {
    this.projectService.getProjectOutPutData(this.projectId).subscribe(result => {
      this.productData = result;
      console.log(this.productData)
      this.dataSource = new MatTableDataSource<ProjectOutputModel>(this.productData);
      this.loading = false;
    })
  }
  onEditProduct(index: number, ProjectOutputId) {
    console.log(ProjectOutputId)
    this.editMode = true;
    this.productEditIndex = index;
    this.productEdit = this.productData[index];
    this.ProjectOutputId = this.productEdit.ProjectOutputId;
    console.log(this.productEdit)
    this.productForm.patchValue(this.productEdit);
    this.productForm.controls.DomesticMarketShare.patchValue(this.productEdit.DomesticMarketShare)
    if(this.serviceApplicationId == 0){
      this.appendPreviousDataToNewForm();
    }
    else{
      this.searchDataFromAudit(ProjectOutputId, this.serviceApplicationId);
    }
  }
  searchDataFromAudit(ProjectOutputId, serviceApplicationId){
    console.log(ProjectOutputId)
    this.projectService.getProjectOutPutAuditData(ProjectOutputId, serviceApplicationId).subscribe(res => {
      console.log(res)
      if (res != null) {
        console.log("data found on audit table")
        console.log(res)
        console.log("check service application id later")
        this.productEditPostDTO = res;
        this.productAmendForm.patchValue(res);
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
  appendPreviousDataToNewForm(){
    this.productAmendForm.patchValue(this.productEdit);
    console.log(this.productEdit)
    this.productAmendForm.get('sharePercent').patchValue(
      {
        DomesticMarketShare: this.productEdit.DomesticMarketShare,
        ExportMarketShare: this.productEdit.ExportMarketShare
      }
    );
  }
  initViewForm() {
    this.productAmendForm = this.formBuilder.group({
      ProjectId: new FormControl(this.projectId),
      ProjectOutputId: new FormControl(''),
      workFlowId: new FormControl(this.workFlowId),
      ProductName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      ProductQty: new FormControl(0, [Validators.required, Validators.min(0)]),
      ProductUnit: new FormControl('', [Validators.required]),
      Quarter: [''],
      RegistrationYear: [''],
      ProjectStatus: [''],
      DomesticMarketShare: new FormControl(0, [Validators.required, Validators.min(0)]),
      ExportMarketShare: new FormControl(0, [Validators.required, Validators.min(0)]),
      Remark: new FormControl('', [Validators.minLength(2)])
    });
  }
  initForm() {
    this.productForm = this.formBuilder.group({
      ProjectId: new FormControl(this.projectId),
      ProjectOutputId: new FormControl(''),
      workFlowId: new FormControl(this.workFlowId),
      ProductName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      ProductQty: new FormControl(0, [Validators.required, Validators.min(0)]),
      ProductUnit: new FormControl('', [Validators.required]),
      // ProductValue: new FormControl(0, [Validators.required, Validators.min(0)]),
      Quarter: [''],
      RegistrationYear: [''],
      ProjectStatus: [''],
      DomesticMarketShare: new FormControl(0, [Validators.required, Validators.min(0)]),
      ExportMarketShare: new FormControl(0, [Validators.required, Validators.min(0)]),
      // sharePercent: this.formBuilder.group({
      //   DomesticMarketShare: [0, [
      //     Validators.required, Validators.min(0)
      //   ]],
      //   ExportMarketShare: [0, Validators.required]
      // },
      //   // { validator: this.childrenEqual }
      // ),
      Remark: new FormControl('', [Validators.minLength(2)])
    });
    this.productForm.disable();
  }
  create(){
    this.projectService.saveOutPutData(this.getEditedData()).subscribe(res => {
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
  update(){
    this.projectService.updateOutPutData(this.getEditedData()).subscribe(res => {
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
  approve(){
    this.projectOfficerService.approveProjectOutPut(this.projectId).subscribe(res => {
      console.log(res)
    })
  }
  getEditedData() {
    this.projectProduct = this.productAmendForm.value;
    this.projectProduct.ProjectId = this.projectId;
    this.projectProduct.InvestorId = (this.InvestorId) ? this.InvestorId : 0;;
    this.projectProduct.IsActive = (this.IsActive) ? this.IsActive : true;
    this.projectProduct.IsDeleted = (this.IsDeleted) ? this.IsDeleted : false;
    this.projectProduct.ProjectOutputId = (this.ProjectOutputId) ? this.ProjectOutputId : 0;
    this.projectProduct.CurrentStep = AMENDMENT_STEP[7].Step;
    this.projectProduct.ServiceId = this.amendment;
    if (this.serviceApplicationId == 0) {
      this.projectProduct.ServiceApplicationId = null
    }
    else {
      this.projectProduct.ServiceApplicationId = this.serviceApplicationId;
    }
    return this.projectProduct;
  }
}
