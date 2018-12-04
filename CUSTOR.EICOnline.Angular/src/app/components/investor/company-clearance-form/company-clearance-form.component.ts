import {AfterContentChecked, AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DataSharingService} from '../../../Services/data-sharing.service';
import {ConfigurationService} from '@custor/services/configuration.service';
import {ToastrService} from 'ngx-toastr';
import {AppConfiguration} from '../../../config/appconfig';
import {CompanyClearanceService} from './company-clearance.service';
import {CapitalRegistrationModel} from '../../../model/CapitalRegistration.model';
import {MatTableDataSource} from '@angular/material';
import {FormService} from '@custor/validation/custom/form';
import {CompanyClearanceModel} from './CompanyClearance.Model';
import {ErrorMessage} from '@custor/services/errMessageService';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-company-clearance-form',
  templateUrl: './company-clearance-form.component.html',
  styleUrls: ['./company-clearance-form.component.scss']
})
export class CompanyClearanceFormComponent implements OnInit, AfterViewInit, OnDestroy, AfterContentChecked {

  loadingIndicator: boolean;
  companyClearanceForm: FormGroup;
  public editMode: boolean;
  private InvestorId: any;
  companyClearanceSub: Subscription;
  companyClearance : CompanyClearanceModel;
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private errMsg: ErrorMessage,
              private formService: FormService,
              public dataSharing: DataSharingService,
              public companyClearanceService: CompanyClearanceService,
              private configService: ConfigurationService,
              private toastr: ToastrService,
              private appConfig: AppConfiguration,
              private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.InvestorId = this.activatedRoute.snapshot.params['InvestorId'];
    this.initForm();

    if (this.InvestorId < 1) {
      this.editMode = false;
      return;
    }
    if (this.InvestorId) {

    //  this.getCompanyClearance(InvestorId);
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
    });
  }

  getCompanyClearance(id) {
    this.loadingIndicator = true;
    this.companyClearanceSub = this.companyClearanceService
      .getCompanyClearanceByInvestorId(id)
      .subscribe(result => {
          this.companyClearance = result;


          if(result == null){
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

  public onSubmit() {
    if (!this.companyClearanceForm.valid) {
      console.log('error!!');
      return;
    }
    this.loadingIndicator = true;
    if (!this.editMode) {
      return this.companyClearanceService.create(this.getEditedCompanyNames())
        .subscribe((result: CompanyClearanceModel) => {
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
      IsCompanyNameOneApproved: false,
      IsCompanyNameTwoApproved: false,
      IsCompanyNameThreeApproved: false,
      IsActive: true
    };
  }


  onBack() {
    window.history.back();
  }

  onApproveNameOptionOne() {

}
  onApproveNameOptionTwo() {

}
  onApproveNameOptionThree() {

}

  ngAfterContentChecked(): void {
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
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
