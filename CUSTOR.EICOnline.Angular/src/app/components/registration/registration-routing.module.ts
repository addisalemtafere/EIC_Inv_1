import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from './registration.component';
const route: Routes = [
  {
    path: '', component: RegistrationComponent, children: [
      {path: '', component: RegistrationComponent},
      {path: 'list', component: RegistrationComponent},
      {path: 'edit/:id', component: RegistrationComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule {
}
