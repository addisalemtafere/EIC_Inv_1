import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Region, Zone} from '../../../../../model/address';
import {ToastrService} from 'ngx-toastr';
import {ZoneService} from '../zone.service';
import {AngConfirmDialogComponent} from '../../../../../../@custor/components/confirm-dialog/confirm-dialog.component';
import {ErrorMessage} from '../../../../../../@custor/services/errMessageService';
import {Utilities} from '../../../../../../@custor/helpers/utilities';
import {determineId} from '@custor/helpers/compare';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-list-zone',
  templateUrl: './list-zone.component.html',
  styleUrls: ['./list-zone.component.css']
})
export class ListZoneComponent implements OnInit, AfterViewInit {
  zoneModels: Zone[];
  zoneLists: Zone[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['Id', 'Description', 'DescriptionEnglish', 'actions'];

  dataSource: MatTableDataSource<Zone>;
  loadingIndicator: boolean;
  dialogRef: any;
  confirmDialogRef: MatDialogRef<AngConfirmDialogComponent>;
  regionModels: Region[] = [];
  fillterZoneModels: Zone[] = [];
  //@ViewChild('region') region: any;
  region: any;

  constructor(private http: HttpClient,
              private subZoneService: ZoneService,
              private errMsg: ErrorMessage, private zonesService: ZoneService,
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
    this.getZones();
    this.getRegions();
  }

  getRegions() {
    this.zonesService.getRegions()
      .subscribe(result => {
          this.regionModels = result;
        },
        error => this.toastr.error(this.errMsg.getError(error)));
  }

  compareIds(id1: any, id2: any): boolean {
    const a1 = determineId(id1);
    const a2 = determineId(id2);
    return a1 === a2;
  }

  getZones() {
    this.loadingIndicator = true;
    this.subZoneService.getZones()
      .subscribe(result => {
          this.zoneModels = result;
          if (!this.zoneModels) {
            this.toastr.error('No records were found to list', 'Error', {
              closeButton: true,
            });
          } else {
            // // console.log(this.zoneModels);
            //this.dataSource.data = this.zoneModels;
          }
        },
        err => {
          if (!this.errMsg.message) {
            this.toastr.error('Error! Please check if the Web zone is running');
          } else {
            this.toastr.error(this.errMsg.getError(err));
          }
        });
    this.loadingIndicator = false;
  }

  filterRegion(RegionCode: string) {
    if (!RegionCode) {
      return;
    }
    this.region = RegionCode,
      this.subZoneService.getZonesbyParent(RegionCode)
        .subscribe(result => {
          this.fillterZoneModels = result;
          this.dataSource.data = this.fillterZoneModels;
        });
    // this.region = RegionCode;
    // this.fillterZoneModels = null;
    // this.fillterZoneModels = this.zoneModels.filter((item) => {
    //   return item.RegionId === RegionCode;
    // });

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  editZone(zoneModel: Zone) {
    if (zoneModel) {
      this.router.navigate(['/zones/edit/' + zoneModel.ZoneId + '/' + 0], {relativeTo: this.route});
    } else {
      this.router.navigate(['/zones/edit/' + 0 + '/' + this.region]);
    }
  }

  confirmDelete(zoneModel: Zone) {
    this.confirmDialogRef = this.dialog.open(AngConfirmDialogComponent,
      {
        disableClose: false
      });

    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

    this.confirmDialogRef.afterClosed().subscribe(result => {
      this.loadingIndicator = true;
      if (result) {
        this.subZoneService.deleteZone(zoneModel)
          .subscribe(results => {
              this.loadingIndicator = false;
              this.dataSource.data = this.dataSource.data.filter(item => item !== zoneModel);
            },
            error => {
              // tslint:disable-next-line:max-line-length
              this.toastr.error(
                `An error occured whilst deleting the Service.\r\nError: "${Utilities.getHttpResponseMessage(error)}"`,
                'Delete Error');
            });
      }
      this.loadingIndicator = false;
    });
  }
}
