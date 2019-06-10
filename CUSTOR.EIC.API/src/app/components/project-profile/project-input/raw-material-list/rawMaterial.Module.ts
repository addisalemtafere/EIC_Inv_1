import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';

import {ProjectRawMaterialListComponent} from './project-raw-material-list.component';
import {RawMaterialRoutingModule} from './rawMaterial-routing.module';
import {ProjectInputService} from "../../../../Services/project-input.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RawMaterialRoutingModule
  ],
  declarations: [ProjectRawMaterialListComponent],
  exports: [ProjectRawMaterialListComponent],
  providers: [ProjectInputService]
})
export class RawMaterialModule {

}
