import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CurrencyFormComponent} from "./currency-form/currency-form.component";

const route: Routes = [

  {path: 'list', component: CurrencyFormComponent},
  {path: 'edit/:id', component: CurrencyFormComponent}
];


@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class CurrencySettingRoutingModule {
}
