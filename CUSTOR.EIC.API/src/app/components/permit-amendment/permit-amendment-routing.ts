import {  NgModule} from '@angular/core';
import {   RouterModule, Routes} from '@angular/router';
import { PermitAmendmentComponent} from './permit-amendment.component';
import { PermitListComponent } from './permit-list/permit-list.component';

const routes: Routes = [
  { path: '', component: PermitListComponent},
  { path: 'amend-project/:projectId/:serviceApplicationId', component: PermitAmendmentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermitAmendmentRouting {

}
