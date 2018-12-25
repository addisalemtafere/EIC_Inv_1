import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from './registration.component';
import {RegistrationCertificateComponent} from './registration-certificate/registration-certificate.component';
const route: Routes = [
  {
    path: '', component: RegistrationComponent, children: [
      {path: '', component: RegistrationComponent},
      {path: 'list', component: RegistrationComponent},
      {path: 'edit/:id', component: RegistrationComponent},
      {path: 'RegistrationCertificate', component: RegistrationCertificateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule {

}
