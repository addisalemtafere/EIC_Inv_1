import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {MyDashboardComponent} from './my-dashboard.component';
import {AppointmentModule} from '../appointment/appointment.module';
import {CustomerServiceListModule} from "./customerService/customerServiceList.module";

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    DashboardRoutingModule,
    CustomerServiceListModule
  ],
  declarations: [
    MyDashboardComponent
  ]
})
export class DashboardModule {
}