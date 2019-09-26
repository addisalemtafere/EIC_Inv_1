import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApplicationSettingService} from "../../../../Services/application-setting.service";
import {ApplicationSettingModel} from "../../../../model/ApplicationSetting.Model";
import {ToastrService} from "ngx-toastr";
import {ErrorMessage} from "@custor/services/errMessageService";

@Component({
  selector: 'app-currency-setting',
  templateUrl: './currency-setting.component.html',
  styleUrls: ['./currency-setting.component.scss']
})
export class CurrencySettingComponent implements OnInit {
  currencySettingsForm: FormGroup;
  loadingIndicator: boolean;
  ApplicationSettingModel: ApplicationSettingModel;

  constructor(
    public settingService: ApplicationSettingService,
    private toastr: ToastrService,
    private errMsg: ErrorMessage,
    private fb: FormBuilder
  ) {
    this.initForm();
  }

  ngOnInit() {
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
    return this.settingService.create(
      this.getEditedInterestRate()).subscribe((applicationSettingModel: ApplicationSettingModel) => {
        this.saveCompleted(applicationSettingModel);
      },
      err => this.handleError(err));
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
      this.ApplicationSettingModel = applicationSettingModel;
      this.currencySettingsForm.get('Value').patchValue(this.ApplicationSettingModel.Value);
    }
  }

  private handleError(err) {
    this.loadingIndicator = false;
    this.toastr.error(this.errMsg.getError(err));
    this.loadingIndicator = false;
  }

}
