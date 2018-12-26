import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "@custor/modules/shared.module";
import {InvestorTabRoutingModule} from "../../investor/investor-tab/investor-tab-routing.module";
import {InvestorModule} from "../../investor/investor.module";
import {AssociateModule} from "../../investor/associate/associate.module";
import {OfficerModule} from "../../officer-Task/officer.module";
import {ServiceConfirmationModule} from "../../project-profile/service-confirmation/ServiceConfirmation.module";
import {ServiceInfoModule} from "../../project-profile/service-info/serviceInfo.module";
import {InvestorTabComponent} from "../../investor/investor-tab/investor-tab.component";
import {CompanyClearanceFormComponent} from "../../investor/company-clearance-form/company-clearance-form.component";
import {RegistratioinTabComponent} from "./registration-tab.component";
import {RegistrationTabRoutingModule} from './registration-tab-routing.module';
import {BusinessTabComponent} from '../../business/business-tab/business-tab.component';
import {RegistrationModule} from '../registration.module';
import {RegistrationAddressComponent} from '../registration-address/registration-address.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RegistrationTabRoutingModule,
    InvestorModule,
    AssociateModule,
    OfficerModule,
    ServiceConfirmationModule,
    ServiceInfoModule,
    RegistrationModule
  ],
  declarations: [
    RegistratioinTabComponent,
    RegistrationAddressComponent
  ],
  exports: [RegistratioinTabComponent]
})
export class RegistrationTabModule {
}
