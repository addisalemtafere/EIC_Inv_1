import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AfterCareComponent} from './aftercare.component';
import { AfterCareListComponent } from './after-care-list/after-care-list.component';
import { EmploymentListComponent } from './employment-list/employment-list.component';
import { EmploymentFormComponent } from './employment-form/employment-form.component';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { InputListComponent } from './input-list/input-list.component';
import { InputFormComponent } from './input-form/input-form.component';
import { CostListComponent } from './cost-list/cost-list.component';
import { CostFormComponent } from './cost-form/cost-form.component';

const routes: Routes = [
  { path: '', component: AfterCareComponent},
  { path: ':projectId', component: AfterCareListComponent},

  { path: 'employment-list/:projectId', component: EmploymentListComponent},
  { path: 'product-list/:projectId', component: ProductListComponent},
  { path: 'input-list/:projectId', component: InputListComponent},
  { path: 'cost-list/:projectId', component:CostListComponent},

  { path: 'employment/edit/:projectId/:employmentId', component: EmploymentFormComponent},
  { path: 'employment/edit/:projectId/:employmentId/:viewOnly', component: EmploymentFormComponent},

  { path: 'product/edit/:projectId/:productId', component: ProductFormComponent},
  { path: 'product/edit/:projectId/:productId/:viewOnly', component: ProductFormComponent},

  { path: 'input/edit/:projectId/:inputId', component: InputFormComponent},
  { path: 'input/edit/:projectId/:inputId/:viewOnly', component: InputFormComponent},

  { path: 'cost/edit/:projectId/:costId', component: CostFormComponent},
  { path: 'cost/edit/:projectId/:costId/:viewOnly', component: CostFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfterCareRouting {

}
