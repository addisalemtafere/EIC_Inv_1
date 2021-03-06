import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';
import {IncentiveDetailRoutingModule} from './incentive-detail-routing.module';
import {IncentiveDetailComponent} from './incentive-detail.component';
import {MessageModule} from "../../project-profile/notification/message.module";
import {ApplicationSettingService} from "../../../Services/application-setting.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    IncentiveDetailRoutingModule,
    MessageModule
  ],
  declarations: [IncentiveDetailComponent],
  exports: [IncentiveDetailComponent],
  providers: [ApplicationSettingService]


})
export class IncentiveDetailModule {
}
