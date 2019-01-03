import {NgModule} from "@angular/core";
import {SharedModule} from "@custor/modules/shared.module";
import {CommonModule} from "@angular/common";
import {CustomerServiceStarterComponent} from "./customerServices.component";
import {RouterModule, Routes} from "@angular/router";

const route: Routes = [
  {path: '', component: CustomerServiceStarterComponent}
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(route)],
  declarations: [CustomerServiceStarterComponent],
  exports: [
    CustomerServiceStarterComponent,
    RouterModule
  ]
})
export class CustomerServiceListModule {

}
