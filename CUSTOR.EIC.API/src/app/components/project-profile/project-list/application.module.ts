import {NgModule} from "@angular/core";
import {SharedModule} from "@custor/modules/shared.module";
import {CommonModule} from "@angular/common";
import {DashboardRoutingModule} from "../../my-dashboard/dashboard-routing.module";
import {AppointmentModule} from "../../appointment/appointment.module";
import {MyDashboardComponent} from "../../my-dashboard/my-dashboard.component";
import {RouterModule, Routes} from "@angular/router";
import {ProjectListComponent} from "./project-list.component";

const route: Routes = [
  {path: '', component: ProjectListComponent}
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(route)],
  declarations: [
    ProjectListComponent
  ],
  exports: [
    ProjectListComponent,
    RouterModule
  ]
})
export class ApplicationModule {

}
