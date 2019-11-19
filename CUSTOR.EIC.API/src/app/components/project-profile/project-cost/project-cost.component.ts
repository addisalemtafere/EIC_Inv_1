import {AfterContentChecked, Component, OnDestroy, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators

} from '@angular/forms';
import {ProjectCostModel} from '../../../model/ProjectCost.model';
import {MatSnackBar} from '@angular/material';
import {ProjectCostService} from '../../../Services/project-cost.service';
import {DataSharingService} from '../../../Services/data-sharing.service';
import {Subscription} from 'rxjs';
import {FormService} from '@custor/validation/custom/form';
import {ActivatedRoute} from '@angular/router';
import {ProjectProfileService} from '../../../Services/project-profile.service';
import {ErrorMessage} from '@custor/services/errMessageService';
import {ToastrService} from 'ngx-toastr';
import {CurrencyType, ProjectStatusModel, QuarterModel} from '../../../model/lookupData';
import {CurrencyTypes, ProjectStatus, Quarter} from '@custor/const/consts';
import {determineId} from '@custor/helpers/compare';
import {ApplicationSettingService} from '../../../Services/application-setting.service';
import {Permission} from 'app/model/security/permission.model';
import {AccountService} from '../../../../@custor/services/security/account.service';

@Component({
  selector: 'app-project-cost',
  templateUrl: './project-cost.component.html',
  styleUrls: ['./project-cost.component.css']
})
export class ProjectCostComponent
  implements OnInit, OnDestroy, AfterContentChecked {
  editMode = false;
  loading = false;
  // subscription: Subscription;
  costId: number;
  projectId: number;
  projectCostForm: FormGroup;
  projectCost: ProjectCostModel;
  public formErrors = {
    LandCost: '',
    LandCostInBirr: '',
    BuildingCost: '',
    BuildingCostInBirr: '',
    MachineryCost: '',
    MachineryCostInBirr: '',
    TransportCost: '',
    TransportCostInBirr: '',
    OfficeEquipmentCost: '',
    OfficeEquipmentCostInBirr: '',
    OtherCapitalCost: '',
    OtherCapitalCostInBirr: '',
    InitialWorkingCapitalCost: '',
    InitialWorkingCapitalCostInBirr: '',
    EquityFinance: '',
    LoanFinance: '',
    OtherSourceFinance: '',
    OtherSourceDescription: '',
    Unit: '',
    ExchangeRate: '',
    CapitalRegistrationDatetime: '',
    ActualCostInForeign: '',
    Quarter: '',
    ReagistrationYear: '',
    Remark: ''
  };
  currencyTypes: CurrencyType[] = [];
  projectStatus: ProjectStatusModel[] = [];
  private ExchangeRate: string;
  public ServiceId: string;
  public Quarter: QuarterModel[] = [];
  private sumOfPlan: number;
  private InvestorId: any;
  private workFlowId: any;
  private ServiceApplicationId: any;

  constructor(
    private formBuilder: FormBuilder,
    public formService: FormService,
    public settingService: ApplicationSettingService,
    public toastr: ToastrService,
    public route: ActivatedRoute,
    public snackbar: MatSnackBar,
    public errMsg: ErrorMessage,
    public accountService: AccountService,
    private projectProfileService: ProjectProfileService,
    private projectCostService: ProjectCostService,
    private dataSharing: DataSharingService
  ) {
    this.projectCost = <ProjectCostModel>{};
  }

  ngOnInit() {
    this.ServiceId = this.route.snapshot.params['ServiceId'];
    this.InvestorId = this.route.snapshot.params['InvestorId'];
    this.workFlowId = this.route.snapshot.params['workFlowId'];
    this.ServiceApplicationId = this.route.snapshot.params[
      'ServiceApplicationId'
      ];
    this.projectId = this.route.snapshot.params['ProjectId'];

    if (this.ServiceId == '1234') {
      // this.projectId = this.route.snapshot.params['ProjectId']
      this.getProjectStatus(this.projectId);
    }
    if (this.projectId > 1 && this.ServiceId == '13') {
      this.getProjectCost();
    }
    this.initStaticData('en');

    this.formBuild();
    this.getExchangeRate();
    this.formControlValueChanged();
  }

  getProjectCost() {
    this.projectCostService.getCostByProjectId(this.projectId).subscribe(
      result => {
        if (typeof result !== 'undefined') {
          this.editMode = true;
          this.costId = result.ProjectCostId;
          this.projectCostForm.patchValue(result);
        }
      },
      error => this.errMsg.getError(error)
    );
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
    this.formService.markFormGroupTouched(this.projectCostForm);
    if (this.projectCostForm.valid) {
      if (this.projectCostForm.get('Total').value + this.projectCostForm.get('TotalInBirr').value > 0) {
        if (!this.editMode) {

          this.projectCostService
            .create(this.projectCostForm.value)
            .subscribe(result => {
              setTimeout(() => this.dataSharing.steeperIndex.next(5), 0);
              setTimeout(() => this.dataSharing.currentIndex.next(5), 0);
              this.notification('saved');
            });

        } else {
          this.projectCostService
            .update(this.projectCostForm.value, this.costId)
            .subscribe(result => {
              this.notification('updated');
              setTimeout(() => this.dataSharing.steeperIndex.next(5), 0);
              setTimeout(() => this.dataSharing.currentIndex.next(5), 0);
            });
        }
      } else {
        this.toastr.error('The sum of project cost must be greater than zero');
      }
    } else {
      this.formErrors = this.formService.validateForm(
        this.projectCostForm,
        this.formErrors,
        false
      );
    }
  }

  onClear() {
    this.projectCostForm.reset();
  }

  formBuild() {
    this.projectCostForm = new FormGroup(
      {
        ProjectId: new FormControl(this.projectId),
        workFlowId: new FormControl(this.workFlowId),
        LandCost: new FormControl(
          0,
          Validators.compose([Validators.required, Validators.min(0)])
        ),
        LandCostInBirr: new FormControl(
          0,
          Validators.compose([Validators.required, Validators.min(0)])
        ),
        BuildingCost: new FormControl(
          0,
          Validators.compose([Validators.required, Validators.min(0)])
        ),
        BuildingCostInBirr: new FormControl(
          0,
          Validators.compose([Validators.required, Validators.min(0)])
        ),
        MachineryCost: new FormControl(
          0,
          Validators.compose([Validators.required, Validators.min(0)])
        ),
        MachineryCostInBirr: new FormControl(
          0,
          Validators.compose([Validators.required, Validators.min(0)])
        ),
        TransportCost: new FormControl(
          0,
          Validators.compose([Validators.required, Validators.min(0)])
        ),
        TransportCostInBirr: new FormControl(
          0,
          Validators.compose([Validators.required, Validators.min(0)])
        ),
        OfficeEquipmentCost: new FormControl(
          0,
          Validators.compose([Validators.required, Validators.min(0)])
        ),
        OfficeEquipmentCostInBirr: new FormControl(
          0,
          Validators.compose([Validators.required, Validators.min(0)])
        ),
        OtherCapitalCost: new FormControl(
          0,
          Validators.compose([Validators.required, Validators.min(0)])
        ),
        OtherCapitalCostInBirr: new FormControl(
          0,
          Validators.compose([Validators.required, Validators.min(0)])
        ),
        InitialWorkingCapitalCost: new FormControl(
          0,
          Validators.compose([Validators.required, Validators.min(0)])
        ),
        InitialWorkingCapitalCostInBirr: new FormControl(
          0,
          Validators.compose([Validators.required, Validators.min(0)])
        ),
        EquityFinance: new FormControl(0),

        LoanFinance: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])),
        OtherSourceFinance: new FormControl(0),
        OtherSourceDescription: new FormControl(0),

        ActualCostInForeign: new FormControl(0),
        ExchangeRate: new FormControl(28.5, Validators.compose([
          Validators.min(26),
          Validators.max(35)
        ])),
        Unit: new FormControl('1'),
        Quarter: new FormControl(''),
        CapitalRegistrationDatetime: new FormControl(''),
        ReagistrationYear: new FormControl(''),
        ProjectStatus: new FormControl(''),
        // ExchangeRate: new FormControl(""),
        Remark: new FormControl(''),
        Total: new FormControl(''),
        TotalInBirr: new FormControl('')
      },
      {validators: sumOfSourceFinanceValidator}
    );

    this.projectCostForm.valueChanges.subscribe(data => {
      this.formErrors = this.formService.validateForm(
        this.projectCostForm,
        this.formErrors,
        true
      );
    });
    this.projectCostForm
      .get('Total')
      .valueChanges.subscribe((intLegal: number) => {
      this.sumOfPlan = intLegal;
    });
  }

  private getProjectCostData(): ProjectCostModel {
    const formModel = this.projectCostForm.value;

    return {
      ProjectId: this.projectId,
      workFlowId: this.workFlowId,
      LandCost: formModel.LandCost,
      LandCostInBirr: formModel.LandCostInBirr,
      BuildingCost: formModel.BuildingCost,
      BuildingCostInBirr: formModel.BuildingCostInBirr,
      MachineryCost: formModel.MachineryCost,
      MachineryCostInBirr: formModel.MachineryCostInBirr,
      TransportCost: formModel.TransportCost,
      TransportCostInBirr: formModel.TransportCostInBirr,
      OfficeEquipmentCost: formModel.OfficeEquipmentCost,
      OfficeEquipmentCostInBirr: formModel.OfficeEquipmentCostInBirr,
      ActualCostInForeign: formModel.ActualCostInForeign,
      // ETBExchangeRate: formModel.ETBExchangeRate,
      OtherCapitalCost: formModel.OtherCapitalCost,
      OtherCapitalCostInBirr: formModel.OtherCapitalCostInBirr,
      InitialWorkingCapitalCost: formModel.InitialWorkingCapitalCost,
      InitialWorkingCapitalCostInBirr:
      formModel.InitialWorkingCapitalCostInBirr,
      EquityFinance: formModel.sourceOfFinance.EquityFinance,
      LoanFinance: formModel.sourceOfFinance.LoanFinance,
      OtherSourceFinance: formModel.sourceOfFinance.OtherSourceFinance,
      OtherSourceDescription: formModel.OtherSourceDescription,
      Unit: formModel.Unit,
      Quarter: formModel.Quarter,
      CapitalRegistrationDatetime: formModel.CapitalRegistrationDatetime,
      RegistrationYear: formModel.RegistrationYear,
      ProjectStatus: formModel.ProjectStatus,
      ExchangeRate: formModel.ExchangeRate,
      Remark: formModel.Remark
    };
  }

  compareIds(id1: any, id2: any): boolean {
    const a1 = determineId(id1);
    const a2 = determineId(id2);
    return a1 === a2;
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

  notification(message: string) {
    this.toastr.success(` Succesfully ${message} Data.!`, 'Success');

    this.loading = false;
    this.snackbar.open(` Succesfully ${message} Data.!`, 'Close', {
      duration: 3000
    });
  }

  getExchangeRate() {
    this.settingService.getOneById(1).subscribe(result => {
      this.ExchangeRate = result.Value;
    });
  }

  ngAfterContentChecked(): void {
    // this.projectCostForm.patchValue({
    //   ProjectId: localStorage.getItem('ProjectId')
    // });
    // this.projectCostForm.patchValue({
    //   workFlowId: localStorage.getItem('workFlowId')
    // });
    // this.projectCostForm.patchValue({
    //   ExchangeRate: this.ExchangeRate
    // });

    this.sumAll();
    this.sumAllInBirr();
  }

  next() {
    this.dataSharing.steeperIndex.next(4);
  }

  private getProjectStatus(projectId: any) {
    this.projectProfileService.getProjectStatus(projectId).subscribe(result => {
      this.projectCostForm.patchValue({
        ProjectStatus: result.toString()
      });
    });
  }

  formControlValueChanged() {
  }

  private sumAllInBirr() {
    const totalInBirr =
      this.projectCostForm.get('LandCostInBirr').value +
      this.projectCostForm.get('BuildingCostInBirr').value +
      this.projectCostForm.get('MachineryCostInBirr').value +
      this.projectCostForm.get('TransportCostInBirr').value +
      this.projectCostForm.get('OfficeEquipmentCostInBirr').value +
      this.projectCostForm.get('OtherCapitalCostInBirr').value +
      this.projectCostForm.get('InitialWorkingCapitalCostInBirr').value;

    this.projectCostForm.patchValue({
      TotalInBirr: totalInBirr
    });
  }

  private sumAll() {
    const total =
      this.projectCostForm.get('LandCost').value +
      this.projectCostForm.get('BuildingCost').value +
      this.projectCostForm.get('MachineryCost').value +
      this.projectCostForm.get('TransportCost').value +
      this.projectCostForm.get('OfficeEquipmentCost').value +
      this.projectCostForm.get('OtherCapitalCost').value +
      this.projectCostForm.get('InitialWorkingCapitalCost').value;

    this.projectCostForm.patchValue({
      Total: total
    });
  }

  get canViewTasks() {
    return this.accountService.userHasPermission(Permission.viewServiceList);
  }
}

export const sumOfSourceFinanceValidator: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const loanFinance: AbstractControl | null = control.get('LoanFinance');
  const equityFinance: AbstractControl | null = control.get('EquityFinance');
  const otherSourceFinance: AbstractControl | null = control.get(
    'OtherSourceFinance'
  );
  const total: AbstractControl | null = control.get('Total');

  const sourceTotal =
    loanFinance.value + equityFinance.value + otherSourceFinance.value;
  return sourceTotal !== total.value ? {sumIsNotEqual: true} : null;
};
