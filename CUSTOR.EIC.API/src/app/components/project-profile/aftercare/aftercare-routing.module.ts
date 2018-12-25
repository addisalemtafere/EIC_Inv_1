import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AftercareComponent} from './aftercare.component';
import {ProjectStatusComponent} from './project-status/project-status.component';

const route: Routes = [
  // {path: '', redirectTo: '/after-care/0'},
  {
    path: '', component: AftercareComponent, children: [
      {path: '/:ProjectId', component: AftercareComponent},
      {
        path: 'cost-list/:ProjectId',
        loadChildren: 'app/components/project-profile/project-cost/ProjectCost.module#ProjectCostModule'
      },
      {
        path: 'employment/:ProjectId',
        loadChildren: 'app/components/project-profile/project-employment/employment.module#EmploymentModule'
      },
      {
        path: 'share/:ProjectId',
        loadChildren: 'app/components/project-profile/project-share/Share.module#ShareModule'
      },
      {
        path: 'product/:ProjectId',
        loadChildren: 'app/components/project-profile/project-product/product.module#ProductModule'
      },
      {
        path: 'utility/:ProjectId',
        loadChildren: 'app/components/project-profile/project-input/utility.module#UtilityModule'
      },
      {
        path: 'raw-material/:ProjectId',
        loadChildren: 'app/components/project-profile/project-input/raw-material-list/rawMaterial.Module#RawMaterialModule'
      },
      {
        path: 'project-status/:ProjectId', component: ProjectStatusComponent
      },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class AftercareRoutingModule {
}
