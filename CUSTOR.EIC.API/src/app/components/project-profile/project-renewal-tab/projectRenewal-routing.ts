import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectRenewalTabComponent} from './project-renewal-tab.component';

const route: Routes = [
  {path: '', component: ProjectRenewalTabComponent, children: [
      {path: ':ServiceId/:InvestorId/:ServiceApplicationId/:ProjectId/:workFlowId', component: ProjectRenewalTabComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class ProjectRenewalRouting {
}
