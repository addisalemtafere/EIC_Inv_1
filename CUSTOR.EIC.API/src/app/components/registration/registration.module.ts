import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';
import {RegistrationComponent} from './registration.component';
import {RegistrationRoutingModule} from './registration-routing.module';
import {BudgetYearTypeService} from "../../Services/Registration/BudgetYearType.service";
import {RegistrationService} from "../../Services/Registration/Registration.service";
import {RegistrationCatagoryService} from "../../Services/Registration/RegistrationCatagory.service";
import {AssociateService} from "../../Services/associate.service";
import {ProjectOutputService} from "../../Services/project-output.service";


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RegistrationRoutingModule
  ],
  declarations: [
    RegistrationComponent,
    // RegistrationCertificateComponent
  ],
  exports: [],
  providers: [
    BudgetYearTypeService,
    BudgetYearTypeService,
    RegistrationService,
    RegistrationCatagoryService,
    AssociateService,
    ProjectOutputService
  ]
})
export class RegistrationModule {
}
