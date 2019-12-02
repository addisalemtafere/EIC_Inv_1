import {Component, OnInit} from '@angular/core';
import {MatDialog, MatTableDataSource} from '@angular/material';

import {ServiceApplicationService} from '../../Services/service-application.service';
import {Permission} from '../../model/security/permission.model';
import {AccountService} from '@custor/services/security/account.service';
import {NotificationModel} from "../../model/Notification.model";
import {NotificationService} from "../../Services/notification.service";
import {ErrorMessage} from "@custor/services/errMessageService";
import {Router} from "@angular/router";

@Component({
  selector: 'officer-dashboard',
  templateUrl: './officer-dashboard.component.html',
  styleUrls: ['./officer-dashboard.component.scss']
})
export class OfficerDashboardComponent implements OnInit {
  cards = [
    {title: 'Card 1', cols: 2, rows: 1},
    {title: 'Card 2', cols: 1, rows: 1},
    {title: 'Card 3', cols: 1, rows: 2},
    {title: 'Card 4', cols: 1, rows: 1}
  ];
  private cal: any[] = [];
  // private allServiceList: ServiceGroupModel[] = [];


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
  loading = true;
  public notitficationList: NotificationModel[];
  public dataSourceNotitification: MatTableDataSource<NotificationModel>;
  displayedColumnsNotification = ['subject', 'date', 'message', 'Action'];
  constructor(public dialog: MatDialog,
              private accountService: AccountService,
              private errMsg: ErrorMessage,
              private router: Router,
              private notifificationService: NotificationService,
              private serviceApplicationService: ServiceApplicationService) {
    // Object.assign(this, {single});


  }


  ngOnInit() {
    this.getAllNotificationByUserName(this.accountService.currentUser.UserName);

    // this.getAllService();
  }


  getAllNotificationByUserName(userName: any) {
    this.notifificationService.CountNotificationByUserName(userName)
      .subscribe(result => {
        this.dataSourceNotitification = new MatTableDataSource<NotificationModel>(result);
        console.log(result)
        this.loading = false;
        this.notitficationList = result;
        //this.filterNotification(result);
      }, error => this.errMsg.getError(error));
  }

  filterNotification(notification: NotificationModel[]) {
    // // console.log(notification);
    this.notitficationList = [];
    for (let i = 0; i < notification.length; i++) {
      if (notification[i].isActive === true) {

        this.notitficationList.push(notification[i]);
      }
    }

  }
  viewNotificationDetail() {
    this.router.navigate(['appointment']);
  }

  get canViewTasks() {
    return this.accountService.userHasPermission(Permission.viewServiceList);
  }
}


