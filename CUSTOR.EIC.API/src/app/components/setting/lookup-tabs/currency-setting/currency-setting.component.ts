import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApplicationSettingService} from "../../../../Services/application-setting.service";
import {ApplicationSettingModel} from "../../../../model/ApplicationSetting.Model";
import {ToastrService} from "ngx-toastr";
import {ErrorMessage} from "@custor/services/errMessageService";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-currency-setting',
  templateUrl: './currency-setting.component.html',
  styleUrls: ['./currency-setting.component.scss']
})
export class CurrencySettingComponent implements OnInit {
  @ViewChild('form')
  currencySettingsForm: FormGroup;
  loadingIndicator: boolean;
  applicationSettingModel: ApplicationSettingModel;
  loading = false;

  constructor(
    public settingService: ApplicationSettingService,
    private toastr: ToastrService,
    private errMsg: ErrorMessage,
    public snackbar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.initForm();
  }

  ngOnInit() {
    console.log('hi')
    this.initForm();
    this.getExchangeRate();
  }

  initForm() {
    this.currencySettingsForm = this.fb.group({
      Value: ['', Validators.compose([Validators.required, Validators.maxLength(8), Validators.pattern('^[0-9]+$')])],
    });
  }

  getExchangeRate() {
    this.settingService.getOneById(1)
      .subscribe(result => {
        this.currencySettingsForm.get('Value').patchValue(result.Value);
      });
  }

  get Value() {
    return this.currencySettingsForm.get('Value')
  }

  onSubmit() {
    this.loadingIndicator = true;
    this.getEditedInterestRate();
    return this.settingService.update(this.currencySettingsForm.value, 1)
      .subscribe(result => {
        this.notification("updated");
      });
  }

  notification(message: string) {
    this.toastr.success(` Succesfully ${message} Data.!`, "Success");

    this.loading = false;
    this.snackbar.open(` Succesfully ${message} Data.!`, "Close", {
      duration: 3000
    });
  }


  private getEditedInterestRate() {
    const formModel = this.currencySettingsForm.value;
    return {
      ApplicationSettingId: 1,
      Key: "Dollar",
      Value: formModel.Value,
      Default: formModel.Value,
    };
  }

  private saveCompleted(applicationSettingModel: ApplicationSettingModel) {
    if (applicationSettingModel) {
      this.applicationSettingModel = applicationSettingModel;
      this.currencySettingsForm.get('Value').patchValue(this.applicationSettingModel.Value);
    }
  }

  private handleError(err) {
    this.loadingIndicator = false;
    this.toastr.error(this.errMsg.getError(err));
    this.loadingIndicator = false;
  }

}
