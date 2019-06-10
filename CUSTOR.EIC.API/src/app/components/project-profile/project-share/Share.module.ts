import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShareRoutingModule} from './share-routing.module';
import {ProjectShareListComponent} from './project-share-list/project-share-list.component';
import {SharedModule} from '@custor/modules/shared.module';
import {ProjectShareComponent} from './project-share.component';
import {ActivityService} from "../../setting/category-tabs/Activity/activity.service";
import {ProjectNationalityCompositionService} from "../../../Services/project-nationality-composition.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ShareRoutingModule
  ],
  declarations: [ProjectShareListComponent, ProjectShareComponent],
  exports: [ProjectShareListComponent, ProjectShareComponent],
  providers:[ProjectNationalityCompositionService]
})
export class ShareModule {

}
