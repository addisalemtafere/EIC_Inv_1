import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,FormControl,FormGroup,ValidationErrors,ValidatorFn,Validators} from "@angular/forms";
import { ErrorMessage } from "@custor/services/errMessageService";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute } from "@angular/router";
import { CurrencyType, ProjectStatusModel, QuarterModel } from "../../../model/lookupData";
import { CurrencyTypes, ProjectStatus, Quarter } from "@custor/const/consts";
import { ProjectService } from '../service/project.service';
import {
  AMENDMENT_STEP,
  ENG_SAVE_SUCCESS_MSG, ENG_UPDATE_SUCCESS_MSG, ENG_NOT_FOUND_MSG,
  ENG_SAVE_ERR_MSG, ENG_UPDATE_ERR_MSG,

  AMH_SAVE_SUCCESS_MSG, AMH_UPDATE_SUCCESS_MSG, AMH_NOT_FOUND_MSG,
  AMH_SAVE_ERR_MSG, AMH_UPDATE_ERR_MSG, ServiceTypes } from '@custor/const/consts';
import { ServiceApplicationService } from "../service/service-application.service";
import { ProjectOfficerService } from '../service/project-officer.service';
@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.scss']
})
export class CostComponent implements OnInit {
  editMode = false;
  loading = false;
  costId: number;
  projectId: number;
  projectCostForm: FormGroup;
  projectCostAmendForm: FormGroup;
  currentLang: string;
  currencyTypes: CurrencyType[] = [];
  projectStatus: ProjectStatusModel[] = [];
  public Quarter: QuarterModel[] = [];
  sumOfPlan: number;
  projectCostData: any;
  projectCostPostDTO: any;
  updateData = false;
  serviceApplicationId:any;
  response:any;
  existingServiceApplication:any;
  projectCost: any; serviceId: any; InvestorId: any; ProjectCostId:any;
  IsDeleted: any;IsActive: any;
  amendment = ServiceTypes[4].ServiceId; 
  serviceList: any;
  constructor(private formBuilder: FormBuilder,
    public toaster: ToastrService,
    public route: ActivatedRoute,
    private serviceApplicationApiService: ServiceApplicationService,
    private projectOfficerService: ProjectOfficerService,
    private projectService: ProjectService
  ) { 
    this.projectId = this.route.snapshot.params.projectId;
    this.serviceApplicationId = this.route.snapshot.params.serviceApplicationId;
    this.serviceId = this.route.snapshot.params.serviceId;
    this.InvestorId = 2092;
    if (this.serviceApplicationId == 0) {
      this.checkServiceApplication();
    }
    else {
      this.getUpdatedList();
    }
    this.initForm();
    this.initViewForm();
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
    this.serviceApplicationApiService.checkServiceApplicationFromApi(id, this.amendment)
      .subscribe(result => {
        if (result != null) {
          this.existingServiceApplication = result;
          this.serviceApplicationId = this.existingServiceApplication.ServiceApplicationId;
          this.getUpdatedList();
        }
      });
  }
  ngOnInit() {
    this.initStaticData(this.currentLang);
    if (this.projectId) {
      this.getProjectCostData(this.projectId);
    }
    //this.getExchangeRate();
    //this.formControlValueChanged();
  }
  getProjectCostData(projectId) {
    this.projectService.getProjectCostData(projectId).subscribe(res => {
      console.log(res);
      if (res == null) {
        alert("no record found")
      }
      else {
        this.projectCostData = res;
        this.IsActive = this.projectCostData.IsActive
        this.IsDeleted = this.projectCostData.IsDeleted
        this.ProjectCostId = this.projectCostData.ProjectCostId
        this.projectCostForm.patchValue(this.projectCostData);
      }
      if (this.serviceApplicationId == 0) {
        this.appendPreviousDataToNewForm();
      }
      else{
        this.searchDataFromAudit(projectId , this.serviceApplicationId);
      }
    })
  }
  searchDataFromAudit(projectId, serviceApplicationId) {
    console.log(projectId);
    console.log(serviceApplicationId);
    this.projectService.getProjectCostAuditData(projectId, serviceApplicationId).subscribe(res => {
      console.log(res)
      if (res != null) {
        console.log("data found on audit table")
        console.log(res)
        console.log("check service application id later")
        this.projectCostPostDTO = res;
        this.projectCostAmendForm.patchValue(res);
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
    console.log(this.projectCostData)
    this.updateData = false;
    this.projectCostAmendForm.patchValue(this.projectCostData);
    console.log(this.projectCostAmendForm.patchValue(this.projectCostData))
  }
  getExchangeRate() {
    // this.settingService.getOneById(1).subscribe(result => {
    //   this.ExchangeRate = result.Value;
    // });
  }
  initViewForm(){
    this.projectCostAmendForm = new FormGroup(
      {
        ProjectId: new FormControl(),
        workFlowId: new FormControl(),
        LandCost: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])),
        LandCostInBirr: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])),
        BuildingCost: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])),
        BuildingCostInBirr: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])),
        MachineryCost: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])
        ),
        MachineryCostInBirr: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])
        ),
        TransportCost: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])
        ),
        TransportCostInBirr: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])
        ),
        OfficeEquipmentCost: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])
        ),
        OfficeEquipmentCostInBirr: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])
        ),
        OtherCapitalCost: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])
        ),
        OtherCapitalCostInBirr: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])
        ),
        InitialWorkingCapitalCost: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])
        ),
        InitialWorkingCapitalCostInBirr: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])
        ),
        EquityFinance: new FormControl(0),

        LoanFinance: new FormControl(0),
        OtherSourceFinance: new FormControl(0),
        OtherSourceDescription: new FormControl(0),

        ActualCostInForeign: new FormControl(0),
        ExchangeRate: new FormControl(28.5, Validators.compose([
          Validators.min(26),
          Validators.max(35)
        ])),
        Unit: new FormControl("1"),
        Quarter: new FormControl(""),
        CapitalRegistrationDatetime: new FormControl(""),
        ReagistrationYear: new FormControl(""),
        ProjectStatus: new FormControl(""),
        // ExchangeRate: new FormControl(""),
        Remark: new FormControl(""),
        Total: new FormControl(""),
        TotalInBirr: new FormControl("")
      },
    );
    
    // this.projectCostForm = this.formBuilder.group({
    //   ProjectId: [], workFlowId: [], LandCost: [], LandCostInBirr: [], BuildingCost: [], BuildingCostInBirr: [],
    //   MachineryCost: [], MachineryCostInBirr: [], TransportCost: [], TransportCostInBirr: [],
    //   OfficeEquipmentCost: [], OfficeEquipmentCostInBirr: [], OtherCapitalCost: [],
    //   OtherCapitalCostBirr: [], InitialWorkingCapitalCost: [], InitialWorkingCapitalCostInBirr: [], 
    //   EquityFinance: [], LoanFinance: [], OtherSourceFinance: [], OtherSourceDescription: [],
    //   ActualCostInForeign: [], ExchangeRate: [], Unit: [], Quarter: [],Total:[],TotalInBirr:[],
    //   CapitalRegistrationDatetime: [], ReagistrationYear: [], ProjectStatus: [], Remark: []
    // });
  }
  initForm() {
    this.projectCostForm = new FormGroup(
      {
        ProjectId: new FormControl(),
        workFlowId: new FormControl(),
        LandCost: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])),
        LandCostInBirr: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])),
        BuildingCost: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])),
        BuildingCostInBirr: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])),
        MachineryCost: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])
        ),
        MachineryCostInBirr: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])
        ),
        TransportCost: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])
        ),
        TransportCostInBirr: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])
        ),
        OfficeEquipmentCost: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])
        ),
        OfficeEquipmentCostInBirr: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])
        ),
        OtherCapitalCost: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])
        ),
        OtherCapitalCostInBirr: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])
        ),
        InitialWorkingCapitalCost: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])
        ),
        InitialWorkingCapitalCostInBirr: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])
        ),
        EquityFinance: new FormControl(0),

        LoanFinance: new FormControl(0),
        OtherSourceFinance: new FormControl(0),
        OtherSourceDescription: new FormControl(0),

        ActualCostInForeign: new FormControl(0),
        ExchangeRate: new FormControl(28.5, Validators.compose([
          Validators.min(26),
          Validators.max(35)
        ])),
        Unit: new FormControl("1"),
        Quarter: new FormControl(""),
        CapitalRegistrationDatetime: new FormControl(""),
        ReagistrationYear: new FormControl(""),
        ProjectStatus: new FormControl(""),
        // ExchangeRate: new FormControl(""),
        Remark: new FormControl(""),
        Total: new FormControl(""),
        TotalInBirr: new FormControl("")
      },
    );
    this.projectCostForm.disable();

    // this.projectCostForm.valueChanges.subscribe(data => {
    //   this.formErrors = this.formService.validateForm(
    //     this.projectCostForm,
    //     this.formErrors,
    //     true
    //   );
    // });
    this.projectCostForm
      .get("Total")
      .valueChanges.subscribe((intLegal: number) => {
        this.sumOfPlan = intLegal;
      });
  }
  initStaticData(currentLang) {
    let quan: CurrencyType = new CurrencyType();
    CurrencyTypes.forEach(pair => {
      quan = {
        Id: pair.Id.toString(),
        DescriptionEnglish: pair.DescriptionEnglish,
        Description: pair.Description
      };
      this.currencyTypes.push(quan);
    });
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

  create() {
    console.log(this.getEditedData())
    this.projectService.saveCostData(this.getEditedData()).subscribe(res => {
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
    console.log(this.getEditedData())
    this.projectService.updateCostData(this.getEditedData()).subscribe(res => {
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
    this.projectOfficerService.approveProjectCost(this.getEditedData()).subscribe(res => {
      console.log(res)
    })
  }
  getEditedData() {
    this.projectCost = this.projectCostAmendForm.value;
    this.projectCost.ProjectId = this.projectId;
    this.projectCost.InvestorId = (this.InvestorId) ? this.InvestorId : 0;;
    this.projectCost.IsActive = (this.IsActive) ? this.IsActive : true;
    this.projectCost.IsDeleted = (this.IsDeleted) ? this.IsDeleted : false;
    this.projectCost.ProjectCostId = (this.ProjectCostId) ? this.ProjectCostId : 0;
    this.projectCost.CurrentStep = AMENDMENT_STEP[4].Step;
    this.projectCost.ServiceId = this.amendment;
    if (this.serviceApplicationId == 0) {
      this.projectCost.ServiceApplicationId = null
    }
    else {
      this.projectCost.ServiceApplicationId = this.serviceApplicationId;
    }
    return this.projectCost;
  }
}
