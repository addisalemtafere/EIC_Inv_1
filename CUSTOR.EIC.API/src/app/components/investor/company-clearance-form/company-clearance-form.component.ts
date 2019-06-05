import {AfterContentChecked, AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DataSharingService} from '../../../Services/data-sharing.service';
import {ConfigurationService} from '@custor/services/configuration.service';
import {ToastrService} from 'ngx-toastr';
import {AppConfiguration} from '../../../config/appconfig';
import {CompanyClearanceService} from './company-clearance.service';
import {FormService} from '@custor/validation/custom/form';
import {CompanyClearanceModel} from './CompanyClearance.Model';
import {ErrorMessage} from '@custor/services/errMessageService';
import {Subscription} from 'rxjs';
import {fadeInOut} from '@custor/services/animations';
import {InvestorService} from '../investor.service';
import {Permission} from '../../../model/security/permission.model';
import {AccountService} from '@custor/services/security/account.service';

@Component({
  selector: 'app-company-clearance-form',
  templateUrl: './company-clearance-form.component.html',
  styleUrls: ['./company-clearance-form.component.scss'],
  animations: [fadeInOut]
})
export class CompanyClearanceFormComponent implements OnInit, AfterViewInit, OnDestroy, AfterContentChecked {

  loadingIndicator: boolean;
  companyClearanceForm: FormGroup;
  public editMode: boolean;
  companyClearanceSub: Subscription;
  companyClearance: CompanyClearanceModel;
  private InvestorId: any;
  private workFlowId: any;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private errMsg: ErrorMessage,
              public accountService: AccountService,
              private formService: FormService,
              public dataSharing: DataSharingService,
              public companyClearanceService: CompanyClearanceService,
              private investorService: InvestorService,
              private configService: ConfigurationService,
              private toastr: ToastrService,
              private appConfig: AppConfiguration,
              private fb: FormBuilder) {

  }

  get companyNameOneEnglish() {
    return this.companyClearanceForm.get('CompanyNameOneEnglish');
  }

  get companyNameOneAmharic() {
    return this.companyClearanceForm.get('CompanyNameOneAmharic');
  }

  get companyNameTwoEnglish() {
    return this.companyClearanceForm.get('CompanyNameTwoEnglish');
  }

  get companyNameTwoAmharic() {
    return this.companyClearanceForm.get('CompanyNameTwoAmharic');
  }

  get companyNameThreeEnglish() {
    return this.companyClearanceForm.get('CompanyNameThreeEnglish');
  }

  get companyNameThreeAmharic() {
    return this.companyClearanceForm.get('CompanyNameThreeAmharic');
  }

  get canViewTasks() {
    return this.accountService.userHasPermission(Permission.viewServiceList);
  }

  ngOnInit(): void {
    this.InvestorId = this.activatedRoute.snapshot.params['InvestorId'];
    this.workFlowId = this.activatedRoute.snapshot.params['workFlowId'];

    this.initForm();

    if (this.InvestorId < 1) {
      this.editMode = false;
      return;
    }
    if (this.InvestorId) {
      this.getCompanyClearance(this.InvestorId);
    }
  }

  initForm() {
    this.companyClearanceForm = this.fb.group({
      CompanyClearanceId: [''],
      InvestorId: this.InvestorId,
      CompanyNameOneEnglish: ['', Validators.required],
      CompanyNameOneAmharic: ['', Validators.required],

      CompanyNameTwoEnglish: ['', Validators.required],
      CompanyNameTwoAmharic: ['', Validators.required],
      CompanyNameThreeEnglish: ['', Validators.required],
      CompanyNameThreeAmharic: ['', Validators.required],
      workFlowId: [''],
    });
  }

  getCompanyClearance(id) {
    this.loadingIndicator = true;
    this.companyClearanceSub = this.companyClearanceService
      .getCompanyClearanceByInvestorId(id)
      .subscribe(result => {
          this.companyClearance = result;


          if (result == null) {
            this.editMode = false;
          }
          else {
            this.editMode = true;
            this.updateForm();
          }
        },
        error => this.toastr.error(error));
    this.loadingIndicator = false;
  }

  updateForm() {
    this.companyClearanceForm.patchValue({
      CompanyNameOneEnglish: this.companyClearance.CompanyNameOneEnglish || '',
      CompanyNameOneAmharic: this.companyClearance.CompanyNameOneAmharic || '',
      CompanyNameTwoEnglish: this.companyClearance.CompanyNameTwoEnglish || '',
      CompanyNameTwoAmharic: this.companyClearance.CompanyNameTwoAmharic || '',
      CompanyNameThreeEnglish: this.companyClearance.CompanyNameThreeEnglish || '',
      CompanyNameThreeAmharic: this.companyClearance.CompanyNameThreeAmharic || ''
    });
  }

  public onSubmit() {
    if (!this.companyClearanceForm.valid) {
      // console.log('error!!');
      return;
    }
    this.loadingIndicator = true;
    if (!this.editMode) {
      return this.companyClearanceService.create(this.getEditedCompanyNames())
        .subscribe((result: CompanyClearanceModel) => {
            this.toastr.success("Data Saved Successfully");

          },
          error => this.toastr.error(this.errMsg.getError(error)));
    }
    else {
      // Todo  Id is correct
      this.companyClearanceService.update(this.companyClearanceForm.value,
        1)
        .subscribe(result => {

        }, error => this.toastr.error(this.errMsg.getError(error)));
    }
    this.editMode = true;
  }

  onBack() {
    window.history.back();
  }

  onApproveNameOptionOne() {
    if (this.companyNameOneAmharic.value == '' && this.companyNameOneEnglish.value == '') {
      this.toastr.error('Name must be inserted');
      return;
    }

    this.companyClearance = this.getEditedCompanyNames();
    this.companyClearance.IsCompanyNameOneApproved = true;
    this.companyClearance.IsCompanyNameTwoApproved = false;
    this.companyClearance.IsCompanyNameThreeApproved = false;

    this.loadingIndicator = true;
    return this.companyClearanceService.saveFinalApprovedName(this.companyClearance)
      .subscribe((comp: CompanyClearanceModel) => {
          //this.saveCompleted();
        },
        error => this.toastr.error(this.errMsg.getError(error)));
  }


  onApproveNameOptionTwo() {
    if (this.companyNameTwoAmharic.value == '' && this.companyNameTwoEnglish.value == '') {
      this.toastr.error('Name must be inserted');
      return;
    }

    this.companyClearance = this.getEditedCompanyNames();
    this.companyClearance.IsCompanyNameOneApproved = false;
    this.companyClearance.IsCompanyNameTwoApproved = true;
    this.companyClearance.IsCompanyNameThreeApproved = false;

    this.loadingIndicator = true;
    return this.companyClearanceService.saveFinalApprovedName(this.companyClearance)
      .subscribe((comp: CompanyClearanceModel) => {
          //this.saveCompleted();
        },
        error => this.toastr.error(this.errMsg.getError(error)));
  }

  onApproveNameOptionThree() {

    if (this.companyNameThreeAmharic.value == '' && this.companyNameThreeEnglish.value == '') {
      this.toastr.error('Name must be inserted');
      return;
    }

    this.companyClearance = this.getEditedCompanyNames();
    this.companyClearance.IsCompanyNameThreeApproved = false;
    this.companyClearance.IsCompanyNameThreeApproved = false;
    this.companyClearance.IsCompanyNameThreeApproved = true;

    this.loadingIndicator = true;
    return this.companyClearanceService.saveFinalApprovedName(this.companyClearance)
      .subscribe((comp: CompanyClearanceModel) => {
          //this.saveCompleted();
        },
        error => this.toastr.error(this.errMsg.getError(error)));
  }


  ngAfterContentChecked(): void {
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }

  private getEditedCompanyNames(): CompanyClearanceModel {
    const formModel = this.companyClearanceForm.value;
    return {
      CompanyClearanceId: 0,
      InvestorId: this.activatedRoute.snapshot.params['InvestorId'],
      CompanyNameOneAmharic: formModel.CompanyNameOneAmharic,
      CompanyNameOneEnglish: formModel.CompanyNameOneEnglish,
      CompanyNameTwoEnglish: formModel.CompanyNameOneEnglish,
      CompanyNameTwoAmharic: formModel.CompanyNameTwoAmharic,
      CompanyNameThreeEnglish: formModel.CompanyNameThreeEnglish,
      CompanyNameThreeAmharic: formModel.CompanyNameThreeAmharic,
      workFlowId: this.workFlowId,
      IsCompanyNameOneApproved: false,
      IsCompanyNameTwoApproved: false,
      IsCompanyNameThreeApproved: false,
      IsActive: true
    };
  }

  // /*  onSubmit() {
  //     const InvestorId = this.activatedRoute.snapshot.params['InvestorId'];
  //     this.formService.markFormGroupTouched(this.companyClearanceForm);
  //     if (this.companyClearanceForm.valid) {
  //       if (!this.editMode) {
  //         this.companyClearanceForm.removeControl('CompanyClearanceId');
  //         this.companyClearanceService.create(this.companyClearanceForm.value)
  //           .subscribe((result: CompanyClearanceModel) => {
  //             this.toastr.success("successfully saved");
  //           }, error => this.toastr.error(this.errMsg.getError(error)));
  //         this.companyClearanceForm.addControl('CompanyClearanceId', new FormControl(''));
  //
  //       } else {
  //         // Todo  Id is correct
  //         this.companyClearanceService.update(this.companyClearanceForm.value,
  //           1)
  //           .subscribe(result => {
  //
  //           }, error => this.toastr.error(this.errMsg.getError(error)));
  //       }
  //     } else {
  //     }
  //   }*/
}
