import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatDialogRef, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {SubSectorModel} from '../../../../../model/subSector';
import {ActivityModel} from '../../../../../model/activity';
import {ToastrService} from 'ngx-toastr';
import {ActivityService} from '../activity.service';
import {AngConfirmDialogComponent} from '../../../../../../@custor/components/confirm-dialog/confirm-dialog.component';
import {Utilities} from '../../../../../../@custor/helpers/utilities';
import {ErrorMessage} from '../../../../../../@custor/services/errMessageService';
import {determineId} from '@custor/helpers/compare';
import {SectorModel} from '../../../../../model/sector';
import {SubsectorService} from '../../subsector/subsector.service';
import {SectorService} from '../../sector/sector.service';
import {ConfigurationService} from "@custor/services/configuration.service";

@Component({
  selector: 'app-activity-list',
  templateUrl: './list-activity.component.html',
  styleUrls: ['./list-activity.component.css'],
  providers: [ConfigurationService]
})
export class ListActivityComponent implements OnInit, AfterViewInit {
  activityModels: ActivityModel[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['Id', 'SubSector', 'Description', 'DescriptionEnglish', 'actions'];

  dataSource: MatTableDataSource<ActivityModel>;
  loadingIndicator: boolean;
  dialogRef: any;
  confirmDialogRef: MatDialogRef<AngConfirmDialogComponent>;
  sectorModels: SectorModel[] = [];
  subsectorModels: SubSectorModel[] = [];
  filltersActivityModels: ActivityModel[] = [];
  fillterssubsectorModels: SubSectorModel[] = [];
  private sectorId: any;
  private subSectorId: any;
  private currentLang: string;

  constructor(private http: HttpClient,
              private subActivityService: ActivityService,
              private sectorService: SectorService,
              private configService: ConfigurationService,
              private subSectorService: SubsectorService,
              private errMsg: ErrorMessage,
              private toastr: ToastrService, public dialog: MatDialog,
              private router: Router, private route: ActivatedRoute) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {
    this.currentLang = this.configService.language;
    this.getSectors();
    // this.getSubSectors();
    // this.getActivitys();
  }

  getActivitys() {
    this.loadingIndicator = true;
    this.subActivityService.getActivitys(this.currentLang)
      .subscribe(result => {
          this.activityModels = result;
          if (!this.activityModels) {
            this.toastr.error('No records were found to list', 'Error', {
              closeButton: true,
            });
          } else {
            this.dataSource.data = this.activityModels;
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

  editActivity(activityModel?: ActivityModel) {
    if (activityModel) {
      this.router.navigate(['/activitys/edit/' + activityModel.ActivityId + '/' + 0 + '/' + 0], {relativeTo: this.route});
    } else {
      this.router.navigate(['/activitys/edit/' + 0 + '/' + this.sectorId + '/' + this.subSectorId]);
    }
  }

  confirmDelete(activityModel: ActivityModel) {
    this.confirmDialogRef = this.dialog.open(AngConfirmDialogComponent,
      {
        disableClose: false
      });

    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

    this.confirmDialogRef.afterClosed().subscribe(result => {
      this.loadingIndicator = true;
      if (result) {
        this.subActivityService.deleteAcitivity(activityModel)
          .subscribe(results => {
              this.loadingIndicator = false;
              this.dataSource.data = this.dataSource.data.filter(item => item !== activityModel);
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
    // this.fillterssubsectorModels = null;
    // // this.filltersActivityModels = null;
    // this.fillterssubsectorModels = this.subsectorModels.filter((item) => {
    //   return item.SectorId === sectorCode;
    // });
  }

  filterSubSector(SubSecId: number) {
    if (!SubSecId) {
      return;
    }
    this.subSectorId = SubSecId;
    this.subActivityService.getActivityByParent(SubSecId)
      .subscribe(result => {
        console.log(result);
        this.dataSource.data = result;
      });
    // this.filltersActivityModels = null;
    // this.filltersActivityModels = this.activityModels.filter((item) => {
    //
    //   return item.SubSectorId === SubSecId;
    // });
  }

  getSectors() {
    this.sectorService.getAllSectors()
      .subscribe(result => {
          this.sectorModels = result;
        },
        error => this.toastr.error(this.errMsg.getError(error)));
  }

  getSubSectors() {
    this.subSectorService.getSubSectors(this.currentLang)
      .subscribe(result => {
          this.subsectorModels = result;
        },
        error => this.toastr.error(this.errMsg.getError(error)));
  }
}
