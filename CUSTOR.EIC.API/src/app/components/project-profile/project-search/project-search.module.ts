import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectSearchRoutingModule } from './project-search-routing.module';
import {SharedModule} from "@custor/modules/shared.module";
import {ProjectSearchComponent} from "./project-search.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProjectSearchRoutingModule
  ],
  declarations: [ProjectSearchComponent]
})
export class ProjectSearchModule { }
