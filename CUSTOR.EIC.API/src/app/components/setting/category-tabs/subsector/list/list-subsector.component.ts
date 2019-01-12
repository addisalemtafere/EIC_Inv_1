import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SubSectorModel} from '../../../../../model/subSector';
import {SubsectorService} from '../subsector.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatDialogRef, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {AngConfirmDialogComponent} from '../../../../../../@custor/components/confirm-dialog/confirm-dialog.component';
import {ErrorMessage} from '../../../../../../@custor/services/errMessageService';
import {Utilities} from '../../../../../../@custor/helpers/utilities';
import {determineId} from '@custor/helpers/compare';
import {SectorModel} from '../../../../../model/sector';

@Component({
  selector: 'app-list-subsector',
  templateUrl: './list-subsector.component.html',
  styleUrls: ['./list-subsector.component.css']
})
export class ListSubsectorComponent implements OnInit, AfterViewInit {
  subSectorModels: SubSectorModel[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['SubsectorId', 'Sector', 'Description', 'DescriptionEnglish', 'actions'];

  dataSource: MatTableDataSource<SubSectorModel>;
  loadingIndicator: boolean;
  dialogRef: any;
  confirmDialogRef: MatDialogRef<AngConfirmDialogComponent>;
  fillterssubsectorModels: SubSectorModel[] = [];
  sectorModels: SectorModel[] = [];
  private sectorId: any;

  constructor(private http: HttpClient,
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
    this.getSector();
    // this.getSubSectors();
  }

  getSubSectors() {
    this.loadingIndicator = true;
    this.subSectorService.getSubSectors()
      .subscribe(result => {
          this.subSectorModels = result;
          if (!this.subSectorModels) {
            this.toastr.error('No records were found to list', 'Error', {
              closeButton: true,
            });
          } else {
            this.dataSource.data = this.subSectorModels;
          }
        },
        err => {
          if (!this.errMsg.message) {
            this.toastr.error('Error! Please check if the Web subsectors is running');
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

  editSubSector(subSectorModel: SubSectorModel) {
    if (subSectorModel) {
      this.router.navigate(['/subsectors/edit', subSectorModel.SubSectorId + '/' + 0], {relativeTo: this.route});
    } else {
      this.router.navigate(['/subsectors/edit/' + 0 + '/' + this.sectorId]);
    }
  }

  confirmDelete(subSectorModel: SubSectorModel) {
    this.confirmDialogRef = this.dialog.open(AngConfirmDialogComponent,
      {
        disableClose: false
      });

    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

    this.confirmDialogRef.afterClosed().subscribe(result => {
      this.loadingIndicator = true;
      if (result) {
        this.subSectorService.deleteSubSector(subSectorModel)
          .subscribe(results => {
              this.loadingIndicator = false;
              this.dataSource.data = this.dataSource.data.filter(item => item !== subSectorModel);
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
        this.dataSource.data = result;
      });
  }

  getSector() {
    this.subSectorService.getSector()
      .subscribe(result => {
          this.sectorModels = result;
        },
        error => this.toastr.error(this.errMsg.getError(error)));
  }
}
