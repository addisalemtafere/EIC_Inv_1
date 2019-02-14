import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';
import {AssociateRoutingModule} from './associate-routing.module';
import {AssociateFormComponent} from './associate-form/associate-form.component';
import {AssociateComponent} from './associate.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AssociateRoutingModule,
  ],
  declarations: [AssociateComponent,
    AssociateFormComponent],
  exports: [AssociateComponent,
    AssociateFormComponent]
})
export class AssociateModule {

}
