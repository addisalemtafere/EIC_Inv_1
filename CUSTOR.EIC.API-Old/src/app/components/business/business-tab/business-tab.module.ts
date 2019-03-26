import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InvestorModule} from '../../investor/investor.module';
import {AssociateModule} from '../../investor/associate/associate.module';
import {OfficerModule} from '../../officer-Task/officer.module';
import {ServiceConfirmationModule} from '../../project-profile/service-confirmation/ServiceConfirmation.module';
import {ServiceInfoModule} from '../../project-profile/service-info/serviceInfo.module';
import {BusinessRoutingModule} from './business-routing.module';
import {BussinessModule} from '../../bussiness/bussiness.module';
import {BusinessTabComponent} from './business-tab.component';
import {SharedModule} from "@custor/modules/shared.module";


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BusinessRoutingModule,
    InvestorModule,
    AssociateModule,
    OfficerModule,
    ServiceConfirmationModule,
    ServiceInfoModule,
    BussinessModule,
    // RegistrationModule,
    // RegistrationRoutingModule

  ],
  declarations: [
    BusinessTabComponent
  ],
  exports: [BusinessTabComponent]
})
export class BusinessTabModule {
}
