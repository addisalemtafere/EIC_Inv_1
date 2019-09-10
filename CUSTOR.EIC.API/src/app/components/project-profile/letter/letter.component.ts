import {Component, OnInit} from '@angular/core';
import {LettertepmlateService} from '../../letter-template/lettertepmlate.service';
import {LetterTemplateModel} from '../../../model/letter-template.model';
import {AppConfiguration} from '../../../config/appconfig';
import {HttpClient} from '@angular/common/http';
import {MatDialog, MatDialogRef, MatSnackBar, MatTableDataSource} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {ProjectModel} from '../../../model/project.model';
import {ProjectProfileService} from '../../../Services/project-profile.service';
import {ErrorMessage} from '@custor/services/errMessageService';
import {LetterService} from './letter.service';
import {determineId} from '@custor/helpers/compare';
import {LookupsModel} from '../../../model/lookups';
import {LookUpService} from '../../../Services/look-up.service';
import {Subscription} from 'rxjs';
import {LetterModel} from '../../../model/letterModel';
import {IncentiveRequestService} from '../../incentive/incentive-request/incentive-request.service';
import {IncentiveRequestModel} from '../../../model/IncentiveRequest.model';
import {TaxExemptionService} from '../../incentive/tax-exemption/tax-exemption.service';
import {TaxExemptionModel} from '../../../model/incentive/TaxExemption.model';
import {AddressModel} from '../../../model/address/Address.model';
import {AddressService} from '../../../Services/Address/address.service';
import {AngConfirmDialogComponent} from '@custor/components/confirm-dialog/confirm-dialog.component';
import {DateService} from "../../../Services/date.service";
import {ConfigurationService} from "@custor/services/configuration.service";
import {AccountService} from "@custor/services/security/account.service";

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss']
})
export class LetterComponent implements OnInit {

  letterTempalteModel: LetterTemplateModel;
  letterModel: LetterModel;
  letterModelList: LetterModel[] = [];
  projectModel: ProjectModel;
  incentiveRequestModel: IncentiveRequestModel;
  incentiveRequestModelList: IncentiveRequestModel[] = [];
  taxExemptionModel: TaxExemptionModel;
  addressList: AddressModel;
  InvestoraddressList: AddressModel;
  public letterForm: FormGroup;
  content2 = '<p>some content</p>';
  LetterContent: string;
  letterType: number;
  loadingIndicator: boolean;
  isNewLetter = true;
  editMode = false;
  letterEditIndex: number;
  Lookups: LookupsModel[];
  Lookuprevenues: LookupsModel[];
  lookupSub: Subscription;
  dataSource: any;
  loading = false;
  ShowSave = false;
  isForDetails = true;
  revenueBranchu = false;
  RequestedDate = false;
  attachment = false;
  inoviceNo = false;
  categoryCode = false;
  chassisNo = false;
  enableButtonGenerate = false;
  InoviceNo: string;
  RequestDate: any;
  public ServiceId: any;
  public ProjectId: any;
  public InvestorId: any;
  public ServiceApplicationId: any;
  public todayEthioDate: any;
  public dateEthioNextYear: string;

  confirmDialogRef: MatDialogRef<AngConfirmDialogComponent>;

  displayedColumns = ['LetterType', 'RequestDate', 'Action'];
  private currentLang: string;

  constructor(
    private lettertepmlateService: LettertepmlateService,
    private letterService: LetterService,
    private projectProfileService: ProjectProfileService,
    private incentiveRequestService: IncentiveRequestService,
    private taxExemptionService: TaxExemptionService,
    private configService: ConfigurationService,
    private addressService: AddressService,
    private config: AppConfiguration,
    private activatedRoute: ActivatedRoute,
    private accountService: AccountService,
    private router: Router,
    public route: ActivatedRoute,
    private http: HttpClient,
    private snackbar: MatSnackBar,
    private toastr: ToastrService,
    public dialog: MatDialog,
    private errMsg: ErrorMessage,
    private lookUpsService: LookUpService,
    private dateService: DateService,
    private fb: FormBuilder
  ) {
    this.letterModel = <LetterModel>{};
    this.initForm();
  }

  get Attachment() {
    return this.letterForm.get('Attachment');
  }

  ngOnInit() {
    this.currentLang = this.configService.language;
    this.initForm();
    this.getEthiopianDate()
    this.ProjectId = this.route.snapshot.params['projectId'] || this.route.snapshot.params['ProjectId'];
    this.InvestorId = this.route.snapshot.params['InvestorId'];
    if (this.route.snapshot.params['isForDetail'] == 1) {
      this.getLetter();
      this.getLookups();
      this.isForDetails = false;
    } else {
      this.ServiceId = this.route.snapshot.params['ServiceId'] || this.route.snapshot.params['serviceId'];
      this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'] || this.route.snapshot.params['serviceApplicationId'];
      this.getProjectDetails();
      this.getIncentiveDetails();
      //this.getLetterTempalte();
      this.getTaxExemptionDetails();
      if (this.ServiceId == '1045') {
        this.getItemLookup(2846, 100);
        this.getLetters(2846, 100);
      }
      else if (this.ServiceId == '1046' || this.ServiceId == '1047' || this.ServiceId == '1054') {
        this.getItemLookup(2845, 2847);
        this.getLetters(2845, 2847);
      } else if (this.ServiceId == '13') {
        this.getItemLookup(2851, 2854);
        this.getLetters(2851, 2854);
      }
      this.getReveuneLookup();
      this.getAddressData(this.ProjectId);
      this.getInvestorAddressData(this.InvestorId);
    }
    // else if (this.ServiceId === '1046') {
    //
    // }else if (this.ServiceId === '1047') {
    //
    // }
  }

  getLetter() {
    this.letterService.getLetterLists(this.ProjectId, this.currentLang)
      .subscribe(result => {
          if (result) {
            this.letterModelList = result;
            // console.log(this.letterModelList);
            this.dataSource = new MatTableDataSource<LetterModel>(this.letterModelList);
          }
        },
        error => this.errMsg.getError(error));
  }

  getTaxExemptionDetails() {
    this.taxExemptionService.getTaxExemption(this.ProjectId)
      .subscribe(result => {
          if (result) {
            // console.log(result);
            this.taxExemptionModel = result;
          }
        },
        error => this.errMsg.getError(error));
  }

  getReveuneLookup() {
    this.loadingIndicator = true;
    this.lookupSub = this.lookUpsService
      .getLookupByParentId(22, this.currentLang)
      .subscribe(result => {
          this.Lookuprevenues = result;
        },
        error => this.toastr.error(this.errMsg.getError(error)));
  }

  getItemLookup(code: any, code1: any) {
    this.loadingIndicator = true;
    this.lookupSub = this.lookUpsService
      .getLookupByParentIdandCode(707, code, code1)
      .subscribe(result => {
          this.Lookups = result;
        },
        error => this.toastr.error(this.errMsg.getError(error)));
  }

  getLookups() {
    this.loadingIndicator = true;
    this.lookupSub = this.lookUpsService
      .getLookupByParentId(707, this.currentLang)
      .subscribe(result => {
          this.Lookups = result;
        },
        error => this.toastr.error(this.errMsg.getError(error)));
  }

  getLetters(LetterType: any, LetterType1: any) {
    this.letterService.getLetterList(this.ProjectId, LetterType, LetterType1)
      .subscribe(result => {
          if (result) {
            this.letterModelList = result;
            // console.log(this.letterModelList);
            this.dataSource = new MatTableDataSource<LetterModel>(this.letterModelList);
          }
        },
        error => this.errMsg.getError(error));
  }

  getIncentiveDetails() {
    this.incentiveRequestService.getIncentiveRequestByServiceApplicationId(this.ServiceApplicationId, this.currentLang)//34517
      .subscribe(result => {
          if (result) {
            // console.log(this.incentiveRequestModelList);
            this.incentiveRequestModelList = result;
            // console.log(result);
          }
        },
        error => this.errMsg.getError(error));
  }

  getAddressData(parent: any) {
    this.addressService.getAddress(parent)
      .subscribe((result: AddressModel) => {
        this.addressList = result;
        //console.log(result);
      }, error => this.errMsg.getError(error));
  }

  getInvestorAddressData(parent: any) {
    this.addressService.getAddress(parent)
      .subscribe((result: AddressModel) => {
        this.InvestoraddressList = result;
        //console.log(result);
      }, error => this.errMsg.getError(error));
  }

  getProjectDetails() {
    this.projectProfileService.projectsDetailForLetter(this.ProjectId)
      .subscribe(result => {
          if (result) {
            this.projectModel = result;
            //console.log(result);
          }
        },
        error => this.errMsg.getError(error));
  }

  SetControls(letterType: number) {
    if (!letterType) {
      return;
    }
    if (letterType === 2845) {
      this.inoviceNo = false;
      this.attachment = true;
      this.revenueBranchu = false;
      this.categoryCode = false;
      this.chassisNo = false;

    } else if (letterType === 2846) {
      this.inoviceNo = false;
      this.attachment = true;
      this.revenueBranchu = false;
      this.categoryCode = false;
      this.chassisNo = false;
    } else if (letterType === 2847) {
      this.inoviceNo = false;
      this.attachment = true;
      this.revenueBranchu = false;
      this.categoryCode = false;
      this.chassisNo = false;
    }
    this.enableButtonGenerate = true;
    this.getLetterTempalte(letterType);
  }

  getLetterTempalte(letterType: any) {

    this.lettertepmlateService.getletterTemplate(letterType).subscribe(result => {
        if (result) {
          this.letterTempalteModel = result;
        }
      },
      error => this.errMsg.getError(error));
  }

  initForm() {
    this.letterForm = this.fb.group({
      LetterContent: ['', Validators.required],
      LetterType: ['0', Validators.required],
      RevenueBranch: ['0', Validators.required],
      InvoiceNo: ['', Validators.required],
      Attachment: ['', Validators.compose([Validators.required, Validators.maxLength(2), Validators.pattern('^[0-9 .]+$')])],
      CategoryCode: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9 .]+$')])],
      RequestDate: new FormControl(),
    });
  }

  compareIds(id1: any, id2: any): boolean {
    const a1 = determineId(id1);
    const a2 = determineId(id2);
    return a1 === a2;
  }

  public onSubmit() {
    this.loadingIndicator = true;
    return this.letterService.saveletter(
      this.getEditedLetter()).subscribe((letterModel: LetterModel) => {
        this.saveCompleted(letterModel);
      },
      err => this.handleError(err));
  }

  onEditLetter(index: number) {
    this.ShowSave = true;
    this.editMode = true;
    this.letterEditIndex = index;
    this.letterModel = this.letterModelList[index];
    this.letterForm.patchValue(
      this.letterModel
    );
    this.isNewLetter = false;
  }

  onClear() {
    this.editMode = false;
    this.letterForm.reset();
    this.isNewLetter = true;
  }

  private getEthiopianDate() {
    let subscription = this.dateService.getEthiopianDateNow()
      .subscribe(data => {

        this.todayEthioDate = data;
        var d = this.todayEthioDate.split('/').reverse().join('-')
        // var d2 = new Date(d);
        var d2 = new Date(d);
        var year = d2.getFullYear() + 1;
        var month = d2.getMonth() + 1;
        var day = d2.getDate();
        this.dateEthioNextYear = day + '/' + month + '/' + year;
      });
  }

  generatePDF() {
    //console.log(this.incentiveRequestModelList)
    this.ShowSave = true;
    this.LetterContent = this.letterTempalteModel.LetterContent.replace(/{{FullName}}/g, this.projectModel.Investor.InvestorName);
    console.log(this.projectModel.Investor.InvestorName)
    this.LetterContent = this.letterTempalteModel.LetterContent.replace(/{{FullNameEng}}/g, this.projectModel.Investor.InvestorNameEng.toUpperCase());
    this.LetterContent = this.LetterContent.replace(/{{StartDate}}/g,
      new Date(this.projectModel.StartDate).getMonth() +
      '/' + new Date(this.projectModel.StartDate).getDay() + '/' + new Date(this.projectModel.StartDate).getFullYear());

    this.LetterContent = this.LetterContent.replace(/{{InvActivity}}/g,
      this.projectModel.InvestmentActivity.Description);
    this.LetterContent = this.LetterContent.replace(/{{InvActivityEng}}/g,
      this.projectModel.InvestmentActivity.DescriptionEnglish);
    this.LetterContent = this.LetterContent.replace(/{{InvestmentPermitNo}}/g,
      this.projectModel.InvestmentPermitNo);
    this.LetterContent = this.LetterContent.replace(/{{ExemptionYear}}/g,
      this.projectModel.IsOromiaSpecialZone ? this.projectModel.InvestmentActivity.InAddisOromiaAreas.toString() : this.projectModel.InvestmentActivity.InOtherAreas.toString());
    const formModel = this.letterForm.value;
    this.LetterContent = this.LetterContent.replace(/{{Num}}/g,
      formModel.Attachment);
    this.LetterContent = this.LetterContent.replace(/{{CategoryCode}}/g,
      this.projectModel.InvestmentActivity.Code);
    // this.LetterContent = this.LetterContent.replace(/{{ChassisNo}}/g,
    //   formModel.ChassisNo);
    this.LetterContent = this.LetterContent.replace(/{{Capital}}/g,
      (this.projectModel.ProjectCost[0].OtherCapitalCost + this.projectModel.ProjectCost[0].EquityFinance + this.projectModel.ProjectCost[0].LoanFinance).toString());
    console.log(this.projectModel)
    this.LetterContent = this.LetterContent.replace(/{{CapitalInBirr}}/g,
      (this.projectModel.ProjectCost[0].LandCostInBirr + this.projectModel.ProjectCost[0].BuildingCostInBirr + this.projectModel.ProjectCost[0].MachineryCostInBirr + this.projectModel.ProjectCost[0].TransportCostInBirr + this.projectModel.ProjectCost[0].OfficeEquipmentCostInBirr + this.projectModel.ProjectCost[0].OtherCapitalCostInBirr + this.projectModel.ProjectCost[0].InitialWorkingCapitalCostInBirr).toString());
    if (this.ServiceId == '1045') {
      this.LetterContent = this.LetterContent.replace(/{{OrgName}}/g,
        this.taxExemptionModel.RevenueBranchDescription);
    }

    this.LetterContent = this.LetterContent.replace(/{{ReqDate}}/g,
      new Date().toDateString());
    this.LetterContent = this.LetterContent.replace(/{{ReqDateAmh}}/g,
      this.todayEthioDate);

    if (this.ServiceId !== '1045' && this.ServiceId !== '13') {
      this.LetterContent = this.LetterContent.replace(/{{InvoiceNo}}/g,
        this.InoviceNo = this.incentiveRequestModelList[0].InvoiceNo);
      this.LetterContent = this.LetterContent.replace(/{{CustomsSite}}/g,
        this.incentiveRequestModelList[0].CustomsSite);
      this.LetterContent = this.LetterContent.replace(/{{ChassisNo}}/g,
        this.incentiveRequestModelList[0].ChassisNo);
      console.log(this.incentiveRequestModelList)
    }
    this.LetterContent = this.LetterContent.replace(/{{TeleNo}}/g,
      this.InvestoraddressList.CellPhoneNo);
    this.LetterContent = this.LetterContent.replace(/{{Region}}/g,
      this.addressList.Region.Description);
    this.LetterContent = this.LetterContent.replace(/{{RegionEng}}/g,
      this.addressList.Region.DescriptionEnglish);
    this.letterTempalteModel.LetterContent = this.LetterContent;
    this.letterForm.patchValue({
      LetterContent: this.LetterContent
    });
  }

  deleteLetter(index: number, id: number) {
    this.confirmDialogRef = this.dialog.open(AngConfirmDialogComponent,
      {
        disableClose: false
      });

    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

    this.confirmDialogRef.afterClosed().subscribe(result => {
      this.loadingIndicator = true;
      if (result) {
        this.letterService.deleteletter(id)
          .subscribe(() => {
            this.notification('Deleted');
            this.letterModelList.splice(index, 1);
            this.dataSource = new MatTableDataSource<LetterModel>(this.letterModelList);
          });
      }
      this.loadingIndicator = false;
    });
  }

  notification(message: string) {
    this.loading = false;
    this.toastr.success(` Succesfully ${message} Data.!`, 'Success');

    this.snackbar.open(` Succesfully ${message} Data.!`, 'Close', {
      duration: 3000,
    });
  }

  toConvertString(value: any) {
    if (value !== null) {
      return value.toString();
    } else {
      return value;
    }
  }

  getCategoryCode() {
    return this.letterForm.get('CategoryCode');
  }

  private saveCompleted(letter?: LetterModel) {
    if (letter) {
      this.letterModel = letter;
      if (this.ServiceId === '1045') {
        this.getLetters(2846, 100);
      }
      else if (this.ServiceId === '1046' || this.ServiceId === '1047' || this.ServiceId === '1054') {
        this.getLetters(2845, 2847);
      } else if (this.ServiceId === '13') {
        this.getLetters(2851, 2854);
      }
    }
    this.onClear();
    this.loadingIndicator = false;
    this.toastr.success('Record saved successfully!');
  }

  private getEditedLetter(): LetterModel {
    const formModel = this.letterForm.value;
    return {
      LetterId: this.isNewLetter ? 0 : this.letterModel.LetterId,
      LetterType: formModel.LetterType,
      LetterContent: formModel.LetterContent,
      // Attachment: formModel.Attachment,
      RequestDate: new Date(),
      UserName: this.accountService.currentUser.Id,
      ProjectId: this.ProjectId
    };
  }

  private handleError(err) {
    this.loadingIndicator = false;
    this.toastr.error(this.errMsg.getError(err));
    this.loadingIndicator = false;
  }

  // get LetterNo() {
  //   return this.letterForm.get('LetterNo');
  // }
}
