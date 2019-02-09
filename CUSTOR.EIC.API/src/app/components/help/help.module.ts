import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HelpComponent} from './help.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../../@custor/modules/shared.module";

const routes: Routes = [
  {path: '', component: HelpComponent}
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HelpComponent],
  exports: [HelpComponent]
})
export class HelpModule {
}
