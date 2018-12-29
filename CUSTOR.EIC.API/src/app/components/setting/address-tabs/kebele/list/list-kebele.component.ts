import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {MatDialog, MatDialogRef, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Kebele, Region, Woreda, Zone} from '../../../../../model/address';
import {KebeleService} from '../kebele.service';
import {AngConfirmDialogComponent} from '@custor/components/confirm-dialog/confirm-dialog.component';
import {ErrorMessage} from '@custor/services/errMessageService';
import {Utilities} from '@custor/helpers/utilities';
import {InvestorService} from '../../../../investor/investor.service';
import {determineId} from '@custor/helpers/compare';
import {WoredaService} from "../../Woredas/woreda.service";
import {ZoneService} from "../../zone/zone.service";

@Component({
  selector: 'app-list-kebele',
  templateUrl: './list-kebele.component.html',
  styleUrls: ['./list-kebele.component.css']
})
export class ListKebeleComponent implements OnInit, AfterViewInit {
  woredaModels: Woreda[];
  kebeleModels: Kebele[];
  kebeleModel: Kebele = new Kebele();
  regionModels: Region[] = [];
  zoneModels: Zone[] = [];
  fillterszoneModels: Zone[] = [];
  filltersWoredaModels: Woreda[] = [];
  filltersKebeleModels: Kebele[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['Id', 'Description', 'DescriptionEnglish', 'actions'];

  dataSource: MatTableDataSource<Woreda>;
  loadingIndicator: boolean;
  dialogRef: any;
  confirmDialogRef: MatDialogRef<AngConfirmDialogComponent>;
  region: any;
  zone: any;
  woreda: any;

  constructor(private http: HttpClient,
              private subKebeleService: KebeleService,
              private woredaService: WoredaService, private subZoneService: ZoneService,
              private errMsg: ErrorMessage,
              public investorKebeleAddress: InvestorService,
              private toastr: ToastrService, public dialog: MatDialog,
              private router: Router, private route: ActivatedRoute) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.getRegions();
    // this.getZones();
    // this.getWoredas();
    // this.getKebeles();
  }

  getRegions() {
    this.subKebeleService.getRegions()
      .subscribe(result => {
          this.regionModels = result;
        },
        error => this.toastr.error(this.errMsg.getError(error)));
  }

  getZones() {
    this.subKebeleService.getZones()
      .subscribe(result => {
          this.zoneModels = result;
        },
        error => this.toastr.error(this.errMsg.getError(error)));
  }

  getWoredas() {
    this.subKebeleService.getWoredas()
      .subscribe(result => {
          this.woredaModels = result;
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

  filterRegion(RegionCode: string) {
    if (!RegionCode) {
      return;
    }
    this.region = RegionCode,
      this.subZoneService.getZonesbyParent(RegionCode)
        .subscribe(result => {
          this.fillterszoneModels = result;
        });
  }

  filterZone(ZoneId: string) {
    if (!ZoneId) {
      return;
    }
    this.zone = ZoneId;
    this.woredaService.getWoredaByParent(ZoneId)
      .subscribe(result => {
        this.filltersWoredaModels = result;
      });
  }

  compareIds(id1: any, id2: any): boolean {
    const a1 = determineId(id1);
    const a2 = determineId(id2);
    return a1 === a2;
  }

  // filterZone(ZoneId: string) {
  //   if (!ZoneId) {
  //     return;
  //   }
  //   this.zone = ZondId;
  //   this.filltersWoredaModels = null;
  //   this.filltersWoredaModels = this.woredaModels.filter((item) => {
  //     return item.ZoneId === ZoneId;
  //   });
  // }

  filterWoreda(wordeaId: string) {
    if (!wordeaId) {
      return;
    }
    this.woreda = wordeaId;
    this.subKebeleService.getKebeles()
      .subscribe(result => {
        this.dataSource.data = result;
      });
  }

  /*getKebeles() {
    this.loadingIndicator = true;
    this.investorKebeleAddress.getAllKebelesByLang('et')
      .subscribe(result => {
        this.kebeleModels = result;
        if (!this.kebeleModels) {
          this.toastr.error('No records were found to list', 'Error', {
            closeButton: true,
          });
        } else {
          this.dataSource.data = this.kebeleModels;
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
  }*/
  getKebeles() {
    this.loadingIndicator = true;
    this.subKebeleService.getKebeles()
      .subscribe(result => {
          this.kebeleModels = result;
          if (!this.kebeleModels) {
            this.toastr.error('No records were found to list', 'Error', {
              closeButton: true,
            });

          } else {
            //this.dataSource.data = this.kebeleModels;
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

  editKebele(kebeleModel: Kebele) {
    if (kebeleModel) {
      this.router.navigate(['/kebeles/edit/' + kebeleModel.KebeleId + '/' + 0 + '/' + 0 + '/' + 0], {relativeTo: this.route});
    } else {
      this.router.navigate(['/kebeles/edit/' + 0 + '/' + this.region + '/' + this.zone + '/' + this.woreda]);
    }
  }

  confirmDelete(kebeleModel: Kebele) {
    this.confirmDialogRef = this.dialog.open(AngConfirmDialogComponent,
      {
        disableClose: false
      });

    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

    this.confirmDialogRef.afterClosed().subscribe(result => {
      this.loadingIndicator = true;
      if (result) {
        this.subKebeleService.deleteKebele(kebeleModel)
          .subscribe(results => {
              this.loadingIndicator = false;
              this.dataSource.data = this.dataSource.data.filter(item => item !== kebeleModel);
            },
            error => {
              // tslint:disable-next-line:max-line-length
              this.toastr.error(
                `An error occured whilst deleting the kebele .\r\nError: "${Utilities.getHttpResponseMessage(error)}"`,
                'Delete Error');
            });
      }
      this.loadingIndicator = false;
    });
  }
}
