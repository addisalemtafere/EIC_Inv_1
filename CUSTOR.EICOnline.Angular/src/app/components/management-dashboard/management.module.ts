import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "@custor/modules/shared.module";
import {ManagementDashboardComponent} from "./management-dashboard.component";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: ManagementDashboardComponent}
];


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxChartsModule,
    RouterModule.forChild(routes)

  ],
  declarations: [ManagementDashboardComponent],
  exports: [RouterModule, ManagementDashboardComponent]
})
export class ManagementModule {
}
