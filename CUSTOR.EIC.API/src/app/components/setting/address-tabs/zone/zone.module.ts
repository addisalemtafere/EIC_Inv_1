import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ZoneRoutingModule} from './zone-routing.module';
import {ListZoneComponent} from './list/list-zone.component';
import {EditZoneComponent} from './edit/edit-zone.component';
import {ZoneComponent} from './zone.component';
import {SharedModule} from '../../../../../@custor/modules/shared.module';
import {RegionService} from "../region/region.service";
import {ZoneService} from "./zone.service";

@NgModule({
  imports: [
    CommonModule,
    ZoneRoutingModule,
    SharedModule
  ],
  declarations: [ListZoneComponent, EditZoneComponent, ZoneComponent],
  exports: [ListZoneComponent, EditZoneComponent, ZoneComponent],
  providers: [ZoneService]
})
export class ZoneModule {
}
