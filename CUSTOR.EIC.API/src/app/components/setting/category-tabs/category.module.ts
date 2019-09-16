import {NgModule} from '@angular/core';
import {CategoryTabsComponent} from './category-tabs.component';
import {CategoryRoutingModule} from './category-routing.module';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';
import {SectorModule} from './sector/sector.module';
import {SubsectorModule} from './subsector/subsector.module';
import {ActivityModule} from './Activity/activity.module';
import {InvactivityModule} from './InvActivity/invactivity.module';
import {ProjectEmploymentService} from "../../../Services/project-employment.service";
import {ActivityService} from "./Activity/activity.service";
import {ProjectNationalityCompositionService} from "../../../Services/project-nationality-composition.service";
import {SectorService} from "../../../Services/Sector.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CategoryRoutingModule,
    SectorModule,
    SubsectorModule,
    ActivityModule,
    InvactivityModule
  ],
  declarations: [CategoryTabsComponent],
  providers: [
    ProjectEmploymentService,
    ActivityService,
    SectorService
  ]
})
export class CategoryModule {
}
