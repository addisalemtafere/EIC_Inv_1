import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AssociateComponent} from './associate.component';
import {AssociateFormComponent} from './associate-form/associate-form.component';

const routes: Routes = [
  // {path: '', component:  },
  {path: 'list', component: AssociateComponent},
  {path: 'form/:InvestorId/:associateId', component: AssociateFormComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class AssociateRoutingModule {

}
