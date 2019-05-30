import {SharedModule} from '@custor/modules/shared.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CapitalRegistrationComponent} from './capital-registration.component';
import {CapitalRegistrationRoutingModule} from './capitalRegistration-routing.module';
import {CapitalRegistrationListComponent} from './capital-registration-list/capital-registration-list.component';
import {ApplicationSettingService} from "../../../Services/application-setting.service";
import {CapitalRegistrationService} from "../../../Services/capital-registration.service";


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CapitalRegistrationRoutingModule
  ],
  declarations: [CapitalRegistrationComponent, CapitalRegistrationListComponent],
  exports: [CapitalRegistrationComponent, CapitalRegistrationListComponent],
  providers: [ApplicationSettingService, CapitalRegistrationService]
})
export class CapitalRegistrationModule {
}
