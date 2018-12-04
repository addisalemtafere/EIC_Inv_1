import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';
import {RegistrationComponent} from './registration.component';
import {RegistrationRoutingModule} from './registration-routing.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RegistrationRoutingModule
  ],
  declarations: [
    RegistrationComponent
    ],
  exports: [
    RegistrationComponent
  ]
})
export class RegistrationModule {
}
