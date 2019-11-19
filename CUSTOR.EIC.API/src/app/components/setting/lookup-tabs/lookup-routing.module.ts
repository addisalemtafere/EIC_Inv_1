import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {LookupTabsComponent} from "./lookup-tabs.component";

const route: Routes = [
  { path: '', component: LookupTabsComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(route)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class LookupRoutingModule { }
