import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {AngConfirmDialogComponent} from "@custor/components/confirm-dialog/confirm-dialog.component";
import {HttpClient} from "@angular/common/http";
import {ErrorMessage} from "@custor/services/errMessageService";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {ApplicationSettingModel} from "../../../../../model/ApplicationSetting.Model";
import {CurrencySettingService} from "../currency-setting.service";

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['Key', 'Value', 'actions'];

  public dataSource: MatTableDataSource<ApplicationSettingModel>;
  public loadingIndicator: boolean;
  dialogRef: any;
  confirmDialogRef: MatDialogRef<AngConfirmDialogComponent>;


  constructor(private http: HttpClient,
              private settingService: CurrencySettingService,
              private errMsg: ErrorMessage,
              private toastr: ToastrService,
              public dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.getExchangeRate();
  }

  private getCurrency() {

  }

  getExchangeRate() {
    this.settingService.getAll().subscribe(result => {

      this.dataSource.data = result;
    });
  }

  edit() {

  }
}
