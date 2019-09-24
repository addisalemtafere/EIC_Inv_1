import {NgModule} from '@angular/core';
import {SubstituteTabComponent} from '../project-substitute/substitute-tab/substitute-tab.component';
import {RouterModule, Routes} from '@angular/router';
import {RenewalTabComponent} from './renewal-tab/renewal-tab.component';

const routes: Routes = [
  {path: '', component: RenewalTabComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRenewalRoutingModule {

}
