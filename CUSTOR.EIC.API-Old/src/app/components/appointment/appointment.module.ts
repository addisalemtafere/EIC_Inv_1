import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppointmentRouting} from './appointment-routing';
import {AppointmentComponent} from './appointment.component';
import {SharedModule} from "@custor/modules/shared.module";

@NgModule({
  imports: [CommonModule,
    SharedModule,
    AppointmentRouting
  ],
  declarations: [AppointmentComponent],
  exports: [AppointmentComponent]

})
export class AppointmentModule {

}
