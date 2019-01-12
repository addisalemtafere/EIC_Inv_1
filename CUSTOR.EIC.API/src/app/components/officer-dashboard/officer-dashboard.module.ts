import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';
import {OfficerDashboardRoutingModule} from './officer-dashboard-routing.module';
import {OfficerDashboardComponent} from './officer-dashboard.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ApplicationModule} from "../project-profile/project-list/application.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OfficerDashboardRoutingModule,
    NgxChartsModule,
    ApplicationModule
  ],
  declarations: [OfficerDashboardComponent]
})
export class OfficerDashboardModule {
}
