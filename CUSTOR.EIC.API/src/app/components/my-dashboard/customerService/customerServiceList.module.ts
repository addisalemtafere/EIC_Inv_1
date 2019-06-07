import {NgModule} from "@angular/core";
import {SharedModule} from "@custor/modules/shared.module";
import {CommonModule} from "@angular/common";
import {CustomerServiceStarterComponent} from "./customerServices.component";
import {RouterModule, Routes} from "@angular/router";
import {ConfirmDialog2Component} from "../../confirm-dialog2/confirm-dialog2.component";

const route: Routes = [
  {path: '', component: CustomerServiceStarterComponent}
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(route)],
  declarations: [
    CustomerServiceStarterComponent,
    ConfirmDialog2Component
  ],
  entryComponents: [ConfirmDialog2Component,],
  exports: [
    CustomerServiceStarterComponent,
    RouterModule
  ]
})
export class CustomerServiceListModule {

}
