import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';
import {InvestorListComponent} from './investor-list.component';
import {EditInvestorComponent} from './investor-editor.component';
import {InvestorRoutingModule} from './investor-routing.module';
import {InvestorComponent} from './investor/investor.component';
import {CatagoryService} from "../../Services/Catagory/Catagory.service";
import {RegistrationService} from "../../Services/Registration/Registration.service";
import {RegistrationCatagoryService} from "../../Services/Registration/RegistrationCatagory.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    InvestorRoutingModule
  ],
  declarations: [
    InvestorListComponent,
    EditInvestorComponent,
    InvestorComponent],
  exports: [
    InvestorListComponent,
    EditInvestorComponent,
    InvestorComponent],
  providers: [CatagoryService,
    RegistrationCatagoryService
  ]
})
export class InvestorModule {
}
