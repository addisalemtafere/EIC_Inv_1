import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {ActivityModel} from '../../../../../model/activity';
import {ToastrService} from 'ngx-toastr';
import {InvActivityModel} from '../../../../../model/invactivity';
import {InvactivityService} from '../invactivity.service';
import {AngConfirmDialogComponent} from '../../../../../../@custor/components/confirm-dialog/confirm-dialog.component';
import {ErrorMessage} from '@custor/services/errMessageService';
import {Utilities} from '@custor/helpers/utilities';
import {determineId} from "@custor/helpers/compare";
import {SectorService} from "../../sector/sector.service";
import {SubsectorService} from "../../subsector/subsector.service";
import {ActivityService} from "../../Activity/activity.service";
import {SubSectorModel} from "../../../../../model/subSector";
import {SectorModel} from "../../../../../model/sector";
import {ConfigurationService} from "@custor/services/configuration.service";

@Component({
  selector: 'app-list-invactivity',
  templateUrl: './list-invactivity.component.html',
  styleUrls: ['./list-invactivity.component.css'],
  providers: [ConfigurationService]
})
export class ListInvactivityComponent implements OnInit, AfterViewInit {
  activityModels: ActivityModel[];
  invactivityModels: InvActivityModel[];
  invactivityModel: InvActivityModel = new InvActivityModel();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['Id', 'Activity', 'Description', 'DescriptionEnglish', 'actions'];

  dataSource: MatTableDataSource<InvActivityModel>;
  loadingIndicator: boolean;
  dialogRef: any;
  confirmDialogRef: MatDialogRef<AngConfirmDialogComponent>;
  private subSectorId: any;
  private sectorId: any;
  fillterssubsectorModels: SubSectorModel[] = [];
  filltersActivityModels: ActivityModel[] = [];
  filterActivityLIst: InvActivityModel[] = [];
  sectorModels: SectorModel[] = [];
  private activityId: any;
  private currentLang: string;

  constructor(private http: HttpClient,
              private subInActivityService: InvactivityService,
              private sectorService: SectorService,
              private configService: ConfigurationService,
              private subSectorService: SubsectorService,
              private subActivityService: ActivityService,
              private errMsg: ErrorMessage,
              private toastr: ToastrService, public dialog: MatDialog,
              private router: Router, private route: ActivatedRoute) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.currentLang = this.configService.language;
    this.getSectors();
    //this.getInvActivitys();
  }

  getSectors() {
    this.sectorService.getSectors(this.currentLang)
      .subscribe(result => {
          this.sectorModels = result;
        },
        error => this.toastr.error(this.errMsg.getError(error)));
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getInvActivitys() {
    this.loadingIndicator = true;
    this.subInActivityService.getInActivitys(this.currentLang)
      .subscribe(result => {
          this.invactivityModels = result;
          if (!this.invactivityModels) {
            this.toastr.error('No records were found to list', 'Error', {
              closeButton: true,
            });
          } else {
            this.dataSource.data = this.invactivityModels;
          }
        },
        err => {
          if (!this.errMsg.message) {
            this.toastr.error('Error! Please check if the Web serviceprerequistie is running');
          } else {
            this.toastr.error(this.errMsg.getError(err));
          }
        });
    this.loadingIndicator = false;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  editInvActivity(invActivityModel: InvActivityModel) {
    if (invActivityModel) {
      this.router.navigate(['/invactivitys/edit/' + invActivityModel.InvActivityId + '/' + 0 + '/' + 0 + '/' + 0], {relativeTo: this.route});
    } else {
      this.router.navigate(['/invactivitys/edit/' + 0 + '/' + this.sectorId + '/' + this.subSectorId + '/' + this.activityId]);
    }
  }

  confirmDelete(invActivityModel: InvActivityModel) {
    this.confirmDialogRef = this.dialog.open(AngConfirmDialogComponent,
      {
        disableClose: false
      });

    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

    this.confirmDialogRef.afterClosed().subscribe(result => {
      this.loadingIndicator = true;
      if (result) {
        this.subInActivityService.deleteInvAcitivity(invActivityModel)
          .subscribe(results => {
              this.loadingIndicator = false;
              this.dataSource.data = this.dataSource.data.filter(item => item !== invActivityModel);
            },
            error => {
              // tslint:disable-next-line:max-line-length
              this.toastr.error(
                `An error occured whilst deleting the activity.\r\nError: "${Utilities.getHttpResponseMessage(error)}"`,
                'Delete Error');
            });
      }
      this.loadingIndicator = false;
    });
  }

  compareIds(id1: any, id2: any): boolean {
    const a1 = determineId(id1);
    const a2 = determineId(id2);
    return a1 === a2;
  }

  filterSector(sectorCode: number) {
    if (!sectorCode) {
      return;
    }
    this.sectorId = sectorCode;
    this.subSectorService.getSubSectorByParent(sectorCode)
      .subscribe(result => {
          this.fillterssubsectorModels = result;
        },
        error => this.toastr.error(this.errMsg.getError(error)));

  }

  filterSubSector(SubSecId: number) {
    if (!SubSecId) {
      return;
    }
    this.subSectorId = SubSecId;
    this.subActivityService.getActivityByParent(SubSecId)
      .subscribe(result => {
        this.filltersActivityModels = result;
      });
  }

  filterActivity(activityId: number) {
    if (!activityId) {
      return;
    }
    this.activityId = activityId;
    this.subInActivityService.getInvActivityByParent(activityId)
      .subscribe(result => {
        console.log(result);
        this.dataSource.data = result;
      });

  }

}
