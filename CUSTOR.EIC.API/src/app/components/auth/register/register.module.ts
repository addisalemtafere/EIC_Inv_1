import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';
import {RegisterRoutingModule} from './register-routing.module';
import {RegisterComponent} from './register.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RegisterRoutingModule,
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule {
}
