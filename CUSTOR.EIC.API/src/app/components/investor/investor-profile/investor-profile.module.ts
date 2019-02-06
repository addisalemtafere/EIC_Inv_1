import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../../../@custor/modules/shared.module";
import {InvestorModule} from "../investor.module";
import {AssociateModule} from "../associate/associate.module";
import {ServiceConfirmationModule} from "../../project-profile/service-confirmation/ServiceConfirmation.module";
import {InvestorProfileComponent} from './investor-profile.component';
import {InvestorProRouting} from "./investor-pro-routing";


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    InvestorProRouting,
    InvestorModule,
    AssociateModule,
    ServiceConfirmationModule
  ],
  declarations: [
    InvestorProfileComponent,
  ],
  exports: [InvestorProfileComponent]
})
export class InvestorProfileModule {

}
