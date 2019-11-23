import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TaxExemptionRoutingModule} from './tax-exemption-routing.module';
import {SharedModule} from '@custor/modules/shared.module';
import {TaxExemptionComponent} from './tax-exemption.component';
import {TaxExemptionTabComponent} from './tax-exemption-tab/tax-exemption-tab.component';
import {LetterModule} from '../../project-profile/letter/letter.module';
import {ServiceConfirmationModule} from "../../project-profile/service-confirmation/ServiceConfirmation.module";
import {MessageModule} from "../../project-profile/notification/message.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TaxExemptionRoutingModule,
    LetterModule,
    ServiceConfirmationModule,
    MessageModule

  ],
  declarations: [TaxExemptionComponent, TaxExemptionTabComponent],
  exports: [TaxExemptionComponent, TaxExemptionTabComponent]
})
export class TaxExemptionModule {
}
