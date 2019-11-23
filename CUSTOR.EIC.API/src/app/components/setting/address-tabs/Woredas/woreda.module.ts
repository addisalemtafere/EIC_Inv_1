import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WoredaRoutingModule } from './woreda-routing.module';
import { ListWoredaComponent } from './list/list-woreda.component';
import { EditWoredaComponent } from './edit/edit-woreda.component';
import { WoredaComponent } from './woreda.component';
import { SharedModule } from '../../../../../@custor/modules/shared.module';
import {ZoneService} from "../zone/zone.service";
import {WoredaService} from "./woreda.service";

@NgModule({
  imports: [
    CommonModule,
    WoredaRoutingModule,
    SharedModule
  ],
  declarations: [ListWoredaComponent, EditWoredaComponent, WoredaComponent],
  exports: [ListWoredaComponent, EditWoredaComponent, WoredaComponent],
  providers:[WoredaService]
})
export class WoredaModule { }
