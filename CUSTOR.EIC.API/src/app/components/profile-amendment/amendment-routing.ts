import {  NgModule} from '@angular/core';
import {   RouterModule, Routes} from '@angular/router';
import { AmendmentComponent} from './amendment.component';
import  { ProfileComponent } from './profile/profile.component';
import { ManagerListComponent } from './manager-list/manager-list.component';
import { ManagerComponent } from './manager/manager.component';
import { ManagerEditComponent} from './manager-edit/manager-edit.component';

const routes: Routes = [
  { path: '', component: AmendmentComponent},
  { path: 'manager-list', component: ManagerListComponent},
  { path: 'manager/:id', component:ManagerComponent},
  { path: 'manager-edit/:id', component:ManagerEditComponent},
  { path: 'manager-new', component:ManagerComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmendmentRouting {

}
