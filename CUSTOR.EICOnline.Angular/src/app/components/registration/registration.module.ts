import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';
import {RegistrationComponent} from './registration.component';
import {RegistrationRoutingModule} from './registration-routing.module';
import { RegistrationCertificateComponent } from './registration-certificate/registration-certificate.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RegistrationRoutingModule
  ],
  declarations: [
    RegistrationComponent,
    RegistrationCertificateComponent
    ],
  exports: [
    RegistrationComponent,
    RegistrationCertificateComponent
  ]
})
export class RegistrationModule {
}
