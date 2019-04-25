import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "@custor/modules/shared.module";
import {LookupTabsComponent} from "./lookup-tabs.component";
import {LookupRoutingModule} from "./lookup-routing.module";

import {LookupsModule} from "./lookups/lookups.module";
import {LookupTypesModule} from "./lookuptypes/lookuptypes.module";
import {CurrencySettingModule} from "./currency-setting/currency-setting.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LookupRoutingModule,
    LookupTypesModule,
    LookupsModule,
    CurrencySettingModule
  ],
  declarations: [LookupTabsComponent]
})
export class LookupModule { }
