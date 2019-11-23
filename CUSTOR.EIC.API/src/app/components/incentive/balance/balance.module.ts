import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';
import {BalanceRoutingModule} from './balance-routing.module';
import {BalanceComponent} from './balance.component';
import {ServiceConfirmationModule} from '../../project-profile/service-confirmation/ServiceConfirmation.module';
import {LetterModule} from '../../project-profile/letter/letter.module';
import {MessageModule} from "../../project-profile/notification/message.module";
import {FollowupService} from "../../../Services/followup/followup.service";
import {BillOfMaterialService} from "../../../Services/incentive/bill-of-material.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BalanceRoutingModule,
    ServiceConfirmationModule,
    LetterModule,
    MessageModule
  ],
  declarations: [
    BalanceComponent
  ],
  exports: [
    BalanceComponent
  ],
  providers: [BillOfMaterialService]
})
export class BalanceModule {

}
