import {AfterContentChecked, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AngConfirmDialogComponent} from '@custor/components/confirm-dialog/confirm-dialog.component';
import {ActivatedRoute, Router} from '@angular/router';
import {IncentiveRequestService} from '../incentive-request.service';
import {FormBuilder} from '@angular/forms';
import {IncentiveRequestModel} from '../../../../model/IncentiveRequest.model';
import {HttpClient} from '@angular/common/http';
import {MatDialog, MatDialogRef, MatSnackBar, MatTableDataSource} from '@angular/material';
import {LookupTypeService} from '../../../../Services/lookup-type.service';
import {ToastrService} from 'ngx-toastr';
import {Subscription} from 'rxjs';
import {ApplicationSettingService} from '../../../../Services/application-setting.service';
import {ErrorMessage} from '@custor/services/errMessageService';
import {LookUpService} from '../../../../Services/look-up.service';
import {LookupsModel} from '../../../../model/lookups';
import {AppConfiguration} from '../../../../config/appconfig';
import {ConfigurationService} from '@custor/services/configuration.service';
@Component({
  selector: 'app-incentive-request-history',
  templateUrl: './incentive-request-history.component.html',
  styleUrls: ['./incentive-request-history.component.scss']
})
export class IncentiveRequestHistoryComponent implements OnInit, OnDestroy, AfterContentChecked {
  @ViewChild('form')

  incentiveRequestItemSub: Subscription;
  title: string;
  IncentiveRequestModel: IncentiveRequestModel;
  IncentiveRequestModels: IncentiveRequestModel[] = [];
  editMode = false;
  loading = false;
  projectId: number;
  dataSource: any;
  confirmDialogRef: MatDialogRef<AngConfirmDialogComponent>;

  displayedColumns = [
    'CustomsSiteId', 'IncentiveCategory', 'Quantity', 'Amount', 'InvoiceNo', 'RequestDate'
  ];
  subscription: Subscription;
  loadingIndicator: boolean;
  Lookups: LookupsModel[];
  serviceApplicationId: any;
  serviceId: any;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              public route: ActivatedRoute,
              private http: HttpClient,
              private snackbar: MatSnackBar,
              private lookUpTypeService: LookupTypeService,
              private lookUpsService: LookUpService,
              private config: AppConfiguration,
              public dialog: MatDialog,
              public settingService: ApplicationSettingService,
              private IncentiveRequestItemService: IncentiveRequestService,
              private errMsg: ErrorMessage,
              private toastr: ToastrService,
              private configService: ConfigurationService,
              private fb: FormBuilder) {
    this.IncentiveRequestModel = <IncentiveRequestModel>{};

  }

  ngOnInit() {
    this.serviceId = this.route.snapshot.params['serviceId'];
    this.projectId = this.route.snapshot.params['projectId'];
    this.serviceApplicationId = this.route.snapshot.params['serviceApplicationId'];

    this.getIncentiveReaquestItmes(this.projectId, this.serviceApplicationId);
  }

  getIncentiveReaquestItmes(projectId, serviceApplicationId) {
    this.IncentiveRequestItemService.getIncentiveRequestslist(this.configService.language,projectId, serviceApplicationId).subscribe(result => {
      if (result.length > 0) {
        this.IncentiveRequestModels = result;
        this.dataSource = new MatTableDataSource<IncentiveRequestModel>(this.IncentiveRequestModels);
        this.loading = false;
      }
    }, error => this.errMsg.getError(error));
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue.replace(/[\W_]/g, '');
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy() {
    // this.IncentiveRequestItemSub.unsubscribe();
  }

  onBack() {
    // this.router.navigate(['IncentiveRequestItems/list']);
    window.history.back();
  }

  ngAfterContentChecked(): void {
  }
}
