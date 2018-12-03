import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RegistratioinTabComponent} from './registration-tab.component';


const route: Routes = [{
  path: '', component: RegistratioinTabComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class RegistrationTabRoutingModule {
}
