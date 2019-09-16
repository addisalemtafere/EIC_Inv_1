import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {ErrorMessage} from '@custor/services/errMessageService';
import {Utilities} from '@custor/helpers/utilities';
import {ActivatedRoute, Router} from '@angular/router';
import {LookupsModel} from '../../../../../model/lookups';
import {AngConfirmDialogComponent} from '@custor/components/confirm-dialog/confirm-dialog.component';
import {ToastrService} from 'ngx-toastr';
import {LookupsService} from '../lookups.service';
import {LookuptypesModel} from "../../../../../model/lookuptypes";
import {determineId} from "@custor/helpers/compare";
import {LookuptypesService} from "../../lookuptypes/lookuptypes.service";

@Component({
  selector: 'app-list-lookups',
  templateUrl: './list-lookups.component.html',
  styleUrls: ['./list-lookups.component.scss']
})
export class ListLookupsComponent implements OnInit, AfterViewInit {
  subLookupsModels: LookupsModel[];
  lookuptypesModels: LookuptypesModel[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['LookupId', 'Amharic', 'English', 'actions'];

  dataSource: MatTableDataSource<LookupsModel>;
  loadingIndicator: boolean;
  dialogRef: any;
  confirmDialogRef: MatDialogRef<AngConfirmDialogComponent>;
  lookuptypeId: any;

  constructor(private http: HttpClient,
              private subLookupsService: LookupsService,
              private subLookupTypesService: LookuptypesService,
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

  compareIds(id1: any, id2: any): boolean {
    const a1 = determineId(id1);
    const a2 = determineId(id2);
    return a1 === a2;
  }

  ngOnInit() {
    this.getLookupstype();
    //this.getLookups();
  }

  getLookupstype() {
    this.subLookupTypesService.getlookuptypess()
      .subscribe(result => {
          this.lookuptypesModels = result;
        },
        error => this.toastr.error(this.errMsg.getError(error)));
  }

  filterLookup(lookupCode: number) {
    console.log(lookupCode)
    if (!lookupCode) {
      return;
    }
    this.lookuptypeId = lookupCode;
    this.subLookupsService.getLookupByParent(lookupCode)
      .subscribe(result => {
        console.log(result)
        this.dataSource.data = result;
      });
  }

  getLookups() {
    this.loadingIndicator = true;
    this.subLookupsService.getLookups()
      .subscribe(result => {
          this.subLookupsModels = result;
          // console.log(this.subLookupsModels);
          if (!this.subLookupsModels) {
            this.toastr.error('No records were found to list', 'Error', {
              closeButton: true,
            });
          } else {
            this.dataSource.data = this.subLookupsModels;
          }
        },
        err => {
          if (!this.errMsg.message) {
            this.toastr.error('Error! Please check if the Web lookups is running');
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

  editLookups(subLookupsModel: LookupsModel) {
    if (subLookupsModel) {
      this.router.navigate(['/lookups/edit/' + subLookupsModel.LookupId + '/' + 0], {relativeTo: this.route});
    } else {
      this.router.navigate(['/lookups/edit/' + 0 + '/' + this.lookuptypeId]);
    }
  }

  confirmDelete(subLookupsModel: LookupsModel) {
    this.confirmDialogRef = this.dialog.open(AngConfirmDialogComponent,
      {
        disableClose: false
      });

    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

    this.confirmDialogRef.afterClosed().subscribe(result => {
      this.loadingIndicator = true;
      if (result) {
        this.subLookupsService.deleteLookups(subLookupsModel)
          .subscribe(results => {
              this.loadingIndicator = false;
              this.dataSource.data = this.dataSource.data.filter(item => item !== subLookupsModel);
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

