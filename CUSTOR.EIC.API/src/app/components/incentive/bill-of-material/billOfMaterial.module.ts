import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';
import {BillOfMaterialRoutingModule} from './BillOfMaterialRouting.module';
import {BillOfMaterialComponent} from './bill-of-material.component';
import {BillOfMaterialTabComponent} from './bill-of-material-tab/bill-of-material-tab.component';
import {ServiceConfirmationModule} from '../../project-profile/service-confirmation/ServiceConfirmation.module';
import {LetterModule} from '../../project-profile/letter/letter.module';
import {MessageModule} from "../../project-profile/notification/message.module";
import {BillOfMaterialService} from "../../../Services/incentive/bill-of-material.service";
import {GridModule} from "@syncfusion/ej2-angular-grids";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BillOfMaterialRoutingModule,
    ServiceConfirmationModule,
    LetterModule,
    MessageModule,
    GridModule
  ],
  declarations: [
    BillOfMaterialComponent,
    BillOfMaterialTabComponent
  ],
  exports: [
    BillOfMaterialComponent,
    BillOfMaterialTabComponent
  ],
  providers: [BillOfMaterialService]
})
export class BillOfMaterialModule {

}
