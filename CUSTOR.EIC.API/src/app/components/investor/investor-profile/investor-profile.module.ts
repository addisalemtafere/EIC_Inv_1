import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "@custor/modules/shared.module";

import {InvestorModule} from "../investor.module";
import {AssociateModule} from "../associate/associate.module";
import {ServiceConfirmationModule} from "../../project-profile/service-confirmation/ServiceConfirmation.module";
import {InvestorProfileComponent} from './investor-profile.component';
import {InvestorProRouting} from "./investor-pro-routing";
 import { MessageModule } from "../../project-profile/notification/message.module";
// import { InvestorProfileListComponent } from './investor-profile-list/investor-profile-list.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    InvestorProRouting,
    InvestorModule,
    AssociateModule,
    ServiceConfirmationModule,
    MessageModule
  ],
  declarations: [
    InvestorProfileComponent,
    // NotificationsComponent,
  ],
  exports: [InvestorProfileComponent],
})
export class InvestorProfileModule {

}
