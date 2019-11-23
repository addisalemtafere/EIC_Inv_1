import {NgModule} from '@angular/core';

import {RegionRoutingModule} from './region-routing.module';
import {ListRegionComponent} from './list/list-region.component';
import {EditRegionComponent} from './edit/edit-region.component';
import {RegionComponent} from './region.component';
import {SharedModule} from "@custor/modules/shared.module";
import {SectorService} from "../../../../Services/Sector.service";
import {RegionService} from "./region.service";

@NgModule({
  imports: [

    RegionRoutingModule,
    SharedModule
  ],
  declarations: [ListRegionComponent, EditRegionComponent, RegionComponent],
  exports: [ListRegionComponent, EditRegionComponent, RegionComponent],
  providers: [RegionService]
})
export class RegionModule {
}
