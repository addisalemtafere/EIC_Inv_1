import {SharedModule} from '@custor/modules/shared.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CapitalRegistrationComponent} from './capital-registration.component';
import {CapitalRegistrationRoutingModule} from './capitalRegistration-routing.module';
import {CapitalRegistrationListComponent} from './capital-registration-list/capital-registration-list.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CapitalRegistrationRoutingModule
  ],
  declarations: [CapitalRegistrationComponent,CapitalRegistrationListComponent],
  exports: [CapitalRegistrationComponent,CapitalRegistrationListComponent]
})
export class CapitalRegistrationModule {
}
