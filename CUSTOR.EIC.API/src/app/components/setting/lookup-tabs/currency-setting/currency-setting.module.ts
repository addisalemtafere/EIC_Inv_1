import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CurrencyFormComponent} from './currency-form/currency-form.component';
import {CurrencyListComponent} from './currency-list/currency-list.component';
import {CurrencySettingComponent} from "./currency-setting.component";
import {SharedModule} from "@custor/modules/shared.module";
import {CurrencySettingRoutingModule} from "./currency-setting-routing.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CurrencySettingRoutingModule
  ],
  declarations: [
    CurrencyListComponent,
    CurrencyFormComponent,
    CurrencySettingComponent
  ],
  exports: [
    CurrencyListComponent,
    CurrencyFormComponent,
    CurrencySettingComponent]
})
export class CurrencySettingModule {
}
