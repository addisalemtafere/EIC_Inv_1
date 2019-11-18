import {  NgModule} from '@angular/core';
import {   RouterModule, Routes} from '@angular/router';
import { PermitAmendmentComponent} from './permit-amendment.component';
import { PermitListComponent } from './permit-list/permit-list.component';
import { SyncfustionTestEditorComponent } from './syncfustion-test-editor/syncfustion-test-editor.component';

const routes: Routes = [
  { path: '', component: PermitListComponent},
  { path: 'syncfusion', component: SyncfustionTestEditorComponent},
  { path: 'amend-project/:projectId/:serviceApplicationId', component: PermitAmendmentComponent},
  { path: 'amend-project/:serviceId/:investorId/:serviceApplicationId/:projectId/0', component: PermitAmendmentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermitAmendmentRouting {

}
