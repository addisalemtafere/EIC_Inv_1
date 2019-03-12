export class ProjectCostModel {
  ProjectCostId?: number;
  ProjectId: number;
  IsActual?: boolean;
  ActualCostInForeign: number;
  LandCost: number;
  LandCostInBirr: number;
  BuildingCost: number;
  BuildingCostInBirr: number;
  MachineryCost: number;
  MachineryCostInBirr: number;
  TransportCost: number;
  TransportCostInBirr: number;
  OfficeEquipmentCost: number;
  OfficeEquipmentCostInBirr: number;
  OtherCapitalCost: number;
  OtherCapitalCostInBirr: number;
  InitialWorkingCapitalCost: number;
  InitialWorkingCapitalCostInBirr: number;
  EquityFinance: number;
  LoanFinance: number;
  OtherSourceFinance: number;
  OtherSourceDescription: number;
  Unit: number;
  ExchangeRate: number;
  CapitalRegistrationDatetime: Date;
  ProjectStatus: any;
  Remark: string;
  workFlowId: any;
  Quarter: any;
  RegistrationYear: any;

  constructor(ProjectCostId: number, ProjectId: number, IsActual: boolean, LandCost: number,LandCostInBirr: number, BuildingCost: number,BuildingCostInBirr: number, MachineryCost: number,MachineryCostInBirr: number, TransportCost: number,TransportCostInBirr: number, OfficeEquipmentCost: number,OfficeEquipmentCostInBirr: number, OtherCapitalCost: number,OtherCapitalCostInBirr: number, InitialWorkingCapitalCost: number,InitialWorkingCapitalCostInBirr: number, EquityFinance: number, LoanFinance: number, OtherSourceFinance: number, OtherSourceDescription: number, Unit: number, ActualCostInForeign: number, ExchangeRate: number, Remark: string) {
    this.ProjectCostId = ProjectCostId;
    this.ProjectId = ProjectId;
    this.IsActual = IsActual;
    this.LandCost = LandCost;
    this.LandCostInBirr = LandCostInBirr;
    this.BuildingCost = BuildingCost;
    this.BuildingCostInBirr = BuildingCostInBirr;
    this.ActualCostInForeign =
      this.MachineryCost = MachineryCost;
      this.MachineryCostInBirr = MachineryCostInBirr;
    this.TransportCost = TransportCost;
    this.TransportCostInBirr = TransportCostInBirr;
    this.OfficeEquipmentCost = OfficeEquipmentCost;
    this.OfficeEquipmentCostInBirr = OfficeEquipmentCostInBirr;
    this.OtherCapitalCost = OtherCapitalCost;
    this.OtherCapitalCostInBirr = OtherCapitalCostInBirr;
    this.InitialWorkingCapitalCost = InitialWorkingCapitalCost;
    this.InitialWorkingCapitalCostInBirr = InitialWorkingCapitalCostInBirr;
    this.EquityFinance = EquityFinance;
    this.LoanFinance = LoanFinance;
    this.OtherSourceFinance = OtherSourceFinance;
    this.OtherSourceDescription = OtherSourceDescription;
    this.Unit = Unit;
    this.ExchangeRate = ExchangeRate;
    this.Remark = Remark;
  }
}
