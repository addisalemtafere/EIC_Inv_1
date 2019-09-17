import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Region, Woreda, Zone} from '../../../../../model/address';
import {WoredaService} from '../woreda.service';
import {AngConfirmDialogComponent} from '../../../../../../@custor/components/confirm-dialog/confirm-dialog.component';
import {ErrorMessage} from '../../../../../../@custor/services/errMessageService';
import {Utilities} from '../../../../../../@custor/helpers/utilities';
import {determineId} from '@custor/helpers/compare';
import {ZoneService} from "../../zone/zone.service";

@Component({
  selector: 'app-list-woreda',
  templateUrl: './list-woreda.component.html',
  styleUrls: ['./list-woreda.component.css']
})
export class ListWoredaComponent implements OnInit, AfterViewInit {
  zoneModels: Zone[];
  woredaModels: Woreda[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['Id', 'Description', 'DescriptionEnglish', 'actions'];

  dataSource: MatTableDataSource<Woreda>;
  loadingIndicator: boolean;
  dialogRef: any;
  confirmDialogRef: MatDialogRef<AngConfirmDialogComponent>;
  regionModels: Region[] = [];
  fillterZoneModels: Zone[] = [];
  filltersWoredaModels: Woreda[] = [];
  region: any;
  zone: any;

  constructor(private http: HttpClient,
              private woredaService: WoredaService,private subZoneService: ZoneService,
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
    this.getRegions();
    // this.getAllZones();
    // this.getWoredas();
  }


  compareIds(id1: any, id2: any): boolean {
    const a1 = determineId(id1);
    const a2 = determineId(id2);
    return a1 === a2;
  }

  filterRegion(RegionCode: string) {
    if (!RegionCode) {
      return;
    }
    this.region = RegionCode,
      this.subZoneService.getZonesbyParent(RegionCode)
        .subscribe(result => {
          this.fillterZoneModels = result;
        });
  }

  filterZone(ZoneId: string) {
    if (!ZoneId) {
      return;
    }
    this.zone = ZoneId;
    this.woredaService.getWoredaByParent(ZoneId)
      .subscribe(result => {
        this.woredaModels = result;
        this.dataSource.data = this.woredaModels;
      });
  }

  getRegions() {
    this.woredaService.getRegions()
      .subscribe(result => {
          this.regionModels = result;
        },
        error => this.toastr.error(this.errMsg.getError(error)));
  }

  getAllZones() {
    this.woredaService.getZones()
      .subscribe(result => {
          this.zoneModels = result;
        },
        error => this.toastr.error(this.errMsg.getError(error))
      );
  }

  getWoredas() {
    this.loadingIndicator = true;
    this.woredaService.getWoredas()
      .subscribe(result => {
          this.woredaModels = result;
          if (!this.woredaModels) {
            this.toastr.error('No records were found to list', 'Error', {
              closeButton: true,
            });
          } else {
            //this.dataSource.data = this.woredaModels;
          }
        },
        err => {
          if (!this.errMsg.message) {
            this.toastr.error('Error! Please check if the Web Woreda is running');
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

  editWoreda(woredaModel: Woreda) {
    if (woredaModel) {
      this.router.navigate(['/woredas/edit/' + woredaModel.WoredaId + '/' + 0 + '/' + 0], {relativeTo: this.route});
    } else {
      this.router.navigate(['/woredas/edit/' + 0 + '/' + this.region + '/' + this.zone]);
    }
  }

  confirmDelete(woredaModel: Woreda) {
    this.confirmDialogRef = this.dialog.open(AngConfirmDialogComponent,
      {
        disableClose: false
      });

    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

    this.confirmDialogRef.afterClosed().subscribe(result => {
      this.loadingIndicator = true;
      if (result) {
        this.woredaService.deleteWoreda(woredaModel)
          .subscribe(results => {
              this.loadingIndicator = false;
              this.dataSource.data = this.dataSource.data.filter(item => item !== woredaModel);
            },
            error => {
              // tslint:disable-next-line:max-line-length
              this.toastr.error(
                `An error occured whilst deleting the Woreda.\r\nError: "${Utilities.getHttpResponseMessage(error)}"`,
                'Delete Error');
            });
      }
      this.loadingIndicator = false;
    });
  }
}
