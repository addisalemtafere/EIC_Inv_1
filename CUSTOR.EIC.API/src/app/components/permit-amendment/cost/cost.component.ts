import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import { ErrorMessage } from "@custor/services/errMessageService";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute } from "@angular/router";
import { CurrencyType, ProjectStatusModel, QuarterModel } from "../../../model/lookupData";
import { CurrencyTypes, ProjectStatus, Quarter } from "@custor/const/consts";
import { ProjectService } from '../service/project.service'
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
  constructor(private formBuilder: FormBuilder,
    public toastr: ToastrService,
    public route: ActivatedRoute,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.initStaticData(this.currentLang);
    this.initForm();
     this.initViewForm();
    const projectId = 28174
    if (projectId) {
      this.getProjectCostData(projectId);
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
        this.projectCostForm.patchValue(this.projectCostData);
      }
      this.searchDataFromAudit(projectId);
    })
  }
  searchDataFromAudit(projectId) {
    this.projectService.getProjectCostAuditData(projectId).subscribe(res => {
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

  onSubmit() {
    console.log("")
  }

}
