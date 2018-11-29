import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BussinessComponent} from './bussiness.component';
import {BussinessTabComponent } from './bussiness-tab/bussiness-tab.component';
import {RegistrationListComponent} from './registration-list/registration-list.component';
import {BussinessBranchComponent} from './bussiness-branch/bussiness-branch.component';

const routes: Routes = [
  {
    path: '',
    component: BussinessComponent
  },
  {
    path: 'bussinesstab',
    component: BussinessTabComponent
  },
  {
    path: 'searchregistration',
    component: RegistrationListComponent
  },
  {
    path: 'bussinessbranch',
    component: BussinessBranchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BussinessRoutingModule { }
