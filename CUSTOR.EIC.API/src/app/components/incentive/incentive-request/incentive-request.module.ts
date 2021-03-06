import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';
import {IncentiveRequestRoutingModule} from './incentive-request.routing.module';
import {IncentiveRequestComponent} from './incentive-request.component';
import {IncentiveRequestTabComponent} from './incentive-request-tab/incentive-request-tab.component';
import {LetterModule} from '../../project-profile/letter/letter.module';
import {ServiceConfirmationModule} from "../../project-profile/service-confirmation/ServiceConfirmation.module";
import {MessageModule} from "../../project-profile/notification/message.module";
import {ApplicationSettingService} from "../../../Services/application-setting.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    IncentiveRequestRoutingModule,
    ServiceConfirmationModule,
    LetterModule,
    MessageModule
  ],
  declarations: [IncentiveRequestComponent, IncentiveRequestTabComponent],
  exports: [IncentiveRequestComponent, IncentiveRequestTabComponent],
  providers: [ApplicationSettingService]
})
export class IncentiveRequestModule {
}
