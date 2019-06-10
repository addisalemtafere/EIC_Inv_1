import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';
import {EmploymentRoutingModule} from './employment-routing.module';
import {ProjectEmploymentListComponent} from './project-employment-list/project-employment-list.component';
import {ProjectEmploymentComponent} from './project-employment.component';
import {ProjectEmploymentService} from "../../../Services/project-employment.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EmploymentRoutingModule
  ],
  declarations: [ProjectEmploymentListComponent, ProjectEmploymentComponent],
  exports: [ProjectEmploymentListComponent, ProjectEmploymentComponent],
  providers: [ProjectEmploymentService]
})

export class EmploymentModule {

}
