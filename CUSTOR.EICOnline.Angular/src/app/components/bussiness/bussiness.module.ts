import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BussinessRoutingModule } from './bussiness-routing.module';
import { BussinessComponent } from './bussiness.component';
import {SharedModule} from '@custor/modules/shared.module';
import { BussinessTabComponent } from './bussiness-tab/bussiness-tab.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { BussinessBranchComponent } from './bussiness-branch/bussiness-branch.component';


@NgModule({
  imports: [
    CommonModule,
    BussinessRoutingModule,
    SharedModule
  ],
  declarations: [ BussinessComponent, BussinessTabComponent,
    RegistrationListComponent,
    BussinessBranchComponent],
  exports: [ BussinessComponent,
    BussinessBranchComponent
  ]
})
export class BussinessModule {
}
