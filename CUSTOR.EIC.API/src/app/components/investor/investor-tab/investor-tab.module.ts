import {CommonModule} from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';
import {NgModule} from '@angular/core';
import {InvestorTabComponent} from './investor-tab.component';
import {InvestorTabRoutingModule} from './investor-tab-routing.module';
import {InvestorModule} from '../investor.module';
import {AssociateModule} from '../associate/associate.module';
import {ServiceInfoModule} from "../../project-profile/service-info/serviceInfo.module";
import {OfficerModule} from "../../officer-Task/officer.module";
import {ServiceConfirmationModule} from "../../project-profile/service-confirmation/ServiceConfirmation.module";
import {CompanyClearanceFormComponent} from "../company-clearance-form/company-clearance-form.component";
import {RegistrationCertificateComponent} from "../../registration/registration-certificate/registration-certificate.component";
import {MessageModule} from "../../project-profile/notification/message.module";


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    InvestorTabRoutingModule,
    InvestorModule,
    AssociateModule,
    OfficerModule,
    ServiceConfirmationModule,
    ServiceInfoModule,
    MessageModule
    // RegistrationModule
    //


  ],
  declarations: [
    InvestorTabComponent,
    CompanyClearanceFormComponent,
    RegistrationCertificateComponent
  ],
  exports: [InvestorTabComponent]
})
export class InvestorTabModule {
}
