import {Component, OnInit, ViewChild} from '@angular/core';
import {LookupTypeService} from '../../../Services/lookup-type.service';
import {AppConfiguration} from '../../../config/appconfig';
import {ToastrService} from 'ngx-toastr';
import {MatDialog, MatDialogRef, MatSnackBar, MatTableDataSource} from '@angular/material';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LookUpService} from '../../../Services/look-up.service';
import {IncentiveRequestModel} from '../../../model/IncentiveRequest.model';
import {AccountService} from '@custor/services/security/account.service';
import {Subscription} from 'rxjs';
import {ErrorMessage} from '@custor/services/errMessageService';
import {ApplicationSettingService} from '../../../Services/application-setting.service';
import {AngConfirmDialogComponent} from '@custor/components/confirm-dialog/confirm-dialog.component';
import {HttpClient} from '@angular/common/http';
import {LetterModel} from '../../../model/letterModel';
import {LetterService} from '../../project-profile/letter/letter.service';
import {LetterTemplateModel} from '../../../model/letter-template.model';
import {LookuptypesModel} from '../../../model/lookuptypes';
import {determineId} from '@custor/helpers/compare';
import {IncentiveRequestDetailModel} from '../../../model/IncentiveRequestDetail.Model';
import {IncentiveRequestDetailService} from '../incentive-request/requested-items-list/requested-items-list.service';

@Component({
  selector: 'app-incentive-detail',
  templateUrl: './incentive-detail.component.html',
  styleUrls: ['./incentive-detail.component.scss']
})
export class IncentiveDetailComponent implements OnInit {
  @ViewChild('form')

  incentiveRequestItemSub: Subscription;
  lookupSub: Subscription;
  title: string;
  isNewIncentiveRequestItem = false;
  IncentiveRequestModel: IncentiveRequestModel;
  IncentiveRequestModels: IncentiveRequestModel[] = [];
  items: IncentiveRequestDetailModel[] = [];

  incentiveRequestItemForm: FormGroup;
  editMode = false;
  loading = false;
  dataSource: any;
  dataSourceLetter: any;
  confirmDialogRef: MatDialogRef<AngConfirmDialogComponent>;
  letterTempalteModel: LetterTemplateModel;
  letterModel: LetterModel;
  letterModelList: LetterModel[] = [];
  IncentiveCategoryLookup: LookuptypesModel[];
  currentCategoryId: number;
  isForDetail = 1;
  displayedColumns = [
    'No', 'IncentiveItem', 'Quantity', 'Amount', 'RequestDate'
  ];

  subscription: Subscription;
  loadingIndicator: boolean;

  isVisibleShowBalance = false;
  public isInvestor: boolean;
  incentiveDetailForm: FormGroup;
  projectId: any;
  serviceId: any;
  serviceApplicationId: any;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private letterService: LetterService,
              private lookUpTypeService: LookupTypeService,
              public route: ActivatedRoute,
              private http: HttpClient,
              private snackbar: MatSnackBar,
              private lookUpsService: LookUpService,
              private config: AppConfiguration,
              public dialog: MatDialog,
              public accountService: AccountService,
              public settingService: ApplicationSettingService,
              private IncentiveRequestItemService: IncentiveRequestDetailService,
              private errMsg: ErrorMessage,
              private toastr: ToastrService,
              private fb: FormBuilder) {
    this.IncentiveRequestModel = <IncentiveRequestModel>{};
    // initialize the form

  }


  ngOnInit() {
    this.initForm();
    this.serviceId = this.activatedRoute.snapshot.params['serviceId'] || this.activatedRoute.snapshot.params['ServiceId'];
    this.serviceApplicationId = this.activatedRoute.snapshot.params['serviceApplicationId'] || this.activatedRoute.snapshot.params['ServiceApplicationId'];
    this.projectId = this.activatedRoute.snapshot.params['projectId'] || this.activatedRoute.snapshot.params['ProjectId'];
    //console.log(this.serviceId);
    this.route.params
      .subscribe((params: Params) => {
        this.getIncentiveRequestItems(this.projectId);
        // this.getLetters();
        this.getIncentiveCategory();
        // }
      });
  }

  initForm() {
    this.incentiveDetailForm = this.fb.group({
      IncentiveCategoryId: [this.IncentiveRequestModel.IncentiveCategoryId, Validators.required]
    });
  }

  getLetters() {
    this.letterService.getLetterLists(this.projectId)
      .subscribe(result => {
          if (result) {
            this.letterModelList = result;
            console.log(this.letterModelList);
            this.dataSourceLetter = new MatTableDataSource<LetterModel>(this.letterModelList);
          }
        },
        error => this.errMsg.getError(error));
  }

  getIncentiveRequestItems(projectId) {
    this.IncentiveRequestItemService.getIncentiveRequestDetailsByProjectId(projectId).subscribe(result => {
      if (result.length > 0) {
        this.items = result;
        console.log(this.items);
        this.dataSource = new MatTableDataSource<IncentiveRequestDetailModel>(this.items);
        this.loading = false;
      }
    }, error => this.errMsg.getError(error));
  }

  getIncentiveRequestItemsBytCategoryCode(projectId, categoryId) {
    this.IncentiveRequestItemService.getIncentiveRequestDetailsBytCategoryCode(this.activatedRoute.snapshot.params['projectId'], categoryId).subscribe(result => {
      if (result.length > 0) {
        this.items = result;
        console.log(this.items);
        this.dataSource = new MatTableDataSource<IncentiveRequestDetailModel>(this.items);
        this.loading = false;
      }
      else {
        if (categoryId == 10778 || categoryId == 10782) {
          this.isVisibleShowBalance = false;
        }
        this.dataSource = new MatTableDataSource<IncentiveRequestDetailModel>(result);
      }

    }, error => this.errMsg.getError(error));
  }

  filterIncentiveCategory(categoryCode: number) {
    if (!categoryCode) {
      return;
    }
    this.currentCategoryId = categoryCode;
    if (categoryCode === 10778 || categoryCode === 10782) {
      this.isVisibleShowBalance = true;

    } else {
      this.isVisibleShowBalance = false;
    }
    this.getIncentiveRequestItemsBytCategoryCode(this.projectId, categoryCode);
  }

  getIncentiveCategory() {
    this.lookUpTypeService.getLookupByParentId().subscribe(result => {
      this.IncentiveCategoryLookup = result;
    });
  }

  showBalance() {
    console.log(this.currentCategoryId);
    if (this.currentCategoryId == 10778 || this.currentCategoryId == 10782) {
      // this.router.navigate(['bom-balance/' + this.currentCategoryId + '/' + localStorage.getItem('ServiceApplicationId')]);
      this.router.navigate(['bom-balance/' + this.projectId + '/' + this.serviceApplicationId + '/' + this.serviceId]);
    } else if (this.currentCategoryId == 10777) {
      this.router.navigate(['sparepart-balance/' + this.projectId + '/' + this.serviceApplicationId]);
    }
  }

  showLetter() {
    console.log('hi');
    this.router.navigate(['letter/' + this.projectId + '/' + this.serviceId + '/' + this.serviceApplicationId + '/' + this.isForDetail]);
  }

  compareIds(id1: any, id2: any): boolean {
    const a1 = determineId(id1);
    const a2 = determineId(id2);
    return a1 === a2;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue.replace(/[\W_]/g, '');
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
