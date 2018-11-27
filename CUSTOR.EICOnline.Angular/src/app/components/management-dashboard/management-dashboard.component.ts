import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {AccountService} from "@custor/services/security/account.service";
import {ServiceApplicationService} from "../../Services/service-application.service";
import {Permission} from "../../model/security/permission.model";

@Component({
  selector: 'app-management-dashboard',
  templateUrl: './management-dashboard.component.html',
  styleUrls: ['./management-dashboard.component.scss']
})
export class ManagementDashboardComponent implements OnInit {
  cards = [
    {title: 'Card 1', cols: 2, rows: 1},
    {title: 'Card 2', cols: 1, rows: 1},
    {title: 'Card 3', cols: 1, rows: 2},
    {title: 'Card 4', cols: 1, rows: 1}
  ];
  private cal: any[] = [];


  single: any[];
  projects: any[];
  multi: any[];
  view: any[] = [450, 320];
  projectView: any[] = [900, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showGridLines = true;
  showXAxisLabel = true;
  xAxisLabel = 'Service Name';
  xAxisLabelSector = 'Sector Name';
  showYAxisLabel = false;
  yAxisLabel = 'status';
  showLegend = true;
  colorScheme = {
    domain: ['#fb9f5e', '#5AA454', '#d13447', '#00bcd4', '#d13447']
  };
  colorScheme1 = {
    domain: ['#f27457', '#84c902', '#6ab1f4']
  };


  // pie configuration
  colorSchemeP1 = {
    domain: ['#9d8dca', '#fb9f5e', '#d13447', '#AAAAAA']
  };
  colorSchemeP2 = {
    domain: ['#fb9f5e', '#d13447', '#86c90a']
  };
  viewP1: any[] = [200, 200];

  // pie
  showLabelsP1 = false;
  explodeSlicesP1 = false;
  doughnutP1 = false;
  byEconomicSector: any [];
  projectStageSum: any [];
  legendPosition = 'Right';
  showLegendP1 = false;

  constructor(public dialog: MatDialog,
              private accountService: AccountService,
              private serviceApplicationService: ServiceApplicationService) {

  }


  ngOnInit() {
    this.getAllService();
  }

  onSelect(event) {
    console.log(event);
  }

  getAllService() {
    this.serviceApplicationService.getApplicationGroupByServiceId()
      .subscribe(result => {
        this.multi = result;
        console.log(result);
      });
    this.serviceApplicationService.getProjectsGroupBySectorId()
      .subscribe(result => {
        this.projects = result;
      });


    this.serviceApplicationService.getProjectsGroupByEconomicSector()
      .subscribe(result => {
        this.byEconomicSector = result;
      });

    this.serviceApplicationService.getAllProjectsProjectStage()
      .subscribe(result => {
        this.projectStageSum = result;
      });
  }

  get canViewReadOnlyData() {
    return this.accountService.userHasPermission(Permission.ViewReadOnlyDataPermission);
  }

  get canViewTasks() {
    return this.accountService.userHasPermission(Permission.viewServiceList);
  }
}


