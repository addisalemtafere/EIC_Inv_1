import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IncentiveRequestHistoryComponent} from './incentive-request-history.component';
import {SharedModule} from '@custor/modules/shared.module';
import {IncentiveRequestHistoryRoutingModule} from './incentive-request-history-routing.module';
import {ApplicationSettingService} from "../../../../Services/application-setting.service";
import {ErrorMessage} from "@custor/services/errMessageService";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    IncentiveRequestHistoryRoutingModule],
  declarations: [IncentiveRequestHistoryComponent],
  exports: [IncentiveRequestHistoryComponent],
  providers: [ApplicationSettingService, ErrorMessage]
})
export class IncentiveRequestHistoryModule {
}
