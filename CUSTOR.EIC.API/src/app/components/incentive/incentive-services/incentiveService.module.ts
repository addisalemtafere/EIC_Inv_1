import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';

import {IncentiveServiceRoutingModule} from './incentiveServiceRouting.module';
import {IncentiveServicesComponent} from './incentive-services.component';
import {MessageModule} from "../../project-profile/notification/message.module";
import {CustomerServicesService} from "../../home/customer-service.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    IncentiveServiceRoutingModule,
    MessageModule
  ],
  declarations: [IncentiveServicesComponent],
  exports: [IncentiveServicesComponent],
  providers: [CustomerServicesService]
})
export class IncentiveServiceModule {

}
