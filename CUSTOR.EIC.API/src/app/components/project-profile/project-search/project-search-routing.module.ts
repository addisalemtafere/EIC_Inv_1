import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectSearchComponent} from "./project-search.component";

const routes: Routes = [
  {path: '', component: ProjectSearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectSearchRoutingModule { }
