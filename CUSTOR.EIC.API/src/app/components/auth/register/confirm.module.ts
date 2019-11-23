import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';
import {RouterModule, Routes} from "@angular/router";
import {ConfirmComponent} from "./confirm.component";

const route: Routes = [
  {path: '', component: ConfirmComponent}
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(route),

  ],
  declarations: [ConfirmComponent],
  exports: [ConfirmComponent]

})
export class ConfirmModule {
}
