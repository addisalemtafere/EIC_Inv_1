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
  selector: 'app-cost-form',
  templateUrl: './cost-form.component.html',
  styleUrls: ['./cost-form.component.scss']
})
export class CostFormComponent implements OnInit {
  costForm: FormGroup;
  projectCostId: any;
  projectId: any;
  projectCostData: any;
  projectCost: any;
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
    this.projectCostId = this.activatedRoute.snapshot.params.costId;
    this.projectId = this.activatedRoute.snapshot.params.projectId;
    this.viewOnly = this.activatedRoute.snapshot.params.viewOnly;
    if (this.viewOnly && this.viewOnly == 0) {
      this.getCostOriginalData()
    }
    else {
      if (this.projectCostId == 0) {
        this.updateData = false;
      }
      else {
        this.updateData = true;
        this.getCostData();
      }
    }
  }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.costForm = new FormGroup(
      {
        ProjectId: new FormControl(),
        workFlowId: new FormControl(),
        LandCost: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])),
        LandCostInBirr: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])),
        BuildingCost: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])),
        BuildingCostInBirr: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])),
        MachineryCost: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])),
        MachineryCostInBirr: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)]) ),
        TransportCost: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])),
        TransportCostInBirr: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)]) ),
        OfficeEquipmentCost: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])),
        OfficeEquipmentCostInBirr: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])),
        OtherCapitalCost: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])),
        OtherCapitalCostInBirr: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])),
        InitialWorkingCapitalCost: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])),
        InitialWorkingCapitalCostInBirr: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])),
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
        Remark: new FormControl(""),
        Total: new FormControl(""),
        TotalInBirr: new FormControl("")
      },
    );
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
  getCostData() {
    this.afterCareService.getCostData(this.projectCostId).subscribe(response => {
      console.log(response)
      this.projectCostData = response;
      this.costForm.patchValue(this.projectCostData);
      this.costForm.controls.Quarter.setValue((this.projectCostData.Quarter.toString()));
      this.costForm.controls.ProjectStatus.setValue((this.projectCostData.ProjectStatus.toString()));
      this.costForm.controls.Decision.setValue((this.projectCostData.Decision.toString()));

    })
  }
  getCostOriginalData() {
    this.afterCareService.getCostOriginalData(this.projectId).subscribe(response => {
      console.log(response)
      this.projectCostData = response;
      this.costForm.patchValue(this.projectCostData);
      this.costForm.controls.Quarter.setValue((this.projectCostData.Quarter.toString()));
      this.costForm.controls.ProjectStatus.setValue((this.projectCostData.ProjectStatus.toString()));
      this.costForm.controls.Decision.setValue((this.projectCostData.Decision.toString()));

    })
  }
  update() {
    this.afterCareService.updateCostData(this.getEditedData()).subscribe(response => {
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
    this.afterCareService.saveCostData(this.getEditedData()).subscribe(response => {
      console.log(response)
      console.log(this.currentLang)
      if (response) {
        this.updateData = true;
        this.projectCostData = response;
        this.projectCostId = this.projectCostData.ProjectEmploymentId;
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
    this.projectCost = this.costForm.value;
    this.projectCost.ProjectEmploymentId = this.projectCostId;
    this.projectCost.ProjectId = this.projectId;
    return this.projectCost;
  }
  get LandCost() {
    return this.costForm.get("LandCost");
  }
  get LandCostInBirr() {
    return this.costForm.get("LandCostInBirr");
  }
  get BuildingCost() {
    return this.costForm.get("BuildingCost");
  }
  get BuildingCostInBirr() {
    return this.costForm.get("BuildingCostInBirr");
  }
  get MachineryCost() {
    return this.costForm.get("MachineryCost");
  }
  get MachineryCostInBirr() {
    return this.costForm.get("MachineryCostInBirr");
  }
  get TransportCost() {
    return this.costForm.get("TransportCost");
  }
  get TransportCostInBirr() {
    return this.costForm.get("TransportCostInBirr");
  }
  get OfficeEquipmentCost() {
    return this.costForm.get("OfficeEquipmentCost");
  }
  get OfficeEquipmentCostInBirr() {
    return this.costForm.get("OfficeEquipmentCostInBirr");
  }
  get OtherCapitalCost() {
    return this.costForm.get("OtherCapitalCost");
  }
  get OtherCapitalCostInBirr() {
    return this.costForm.get("OtherCapitalCostInBirr");
  }
  get OtherCapitalCostBirr() {
    return this.costForm.get("OtherCapitalCostBirr");
  }
  get InitialWorkingCapitalCost() {
    return this.costForm.get("InitialWorkingCapitalCost");
  }
  get InitialWorkingCapitalCostInBirr() {
    return this.costForm.get("InitialWorkingCapitalCostInBirr");
  }
  get OtherSourceFinance() {
    return this.costForm.get("OtherSourceFinance");
  }
}
