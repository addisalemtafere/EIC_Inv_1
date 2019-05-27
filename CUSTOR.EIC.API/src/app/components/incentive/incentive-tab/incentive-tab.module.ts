import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';

import {IncentiveTabComponent} from './incentive-tab.component';
import {IncentiveTabRoutingModule} from './incentive-tab-routing.module';
import {ServiceConfirmationModule} from "../../project-profile/service-confirmation/ServiceConfirmation.module";
import {MessageModule} from "../../project-profile/notification/message.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    IncentiveTabRoutingModule,
    MessageModule
  ],
  declarations: [IncentiveTabComponent],
  exports: [IncentiveTabComponent]
})
export class IncentiveTabModule {

}
