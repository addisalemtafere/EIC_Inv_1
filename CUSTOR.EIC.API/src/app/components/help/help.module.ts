import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpRoutingModule } from './help-routing.module';
import { HelpComponent } from './help.component';
import { SharedModule } from '@custor/modules/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HelpRoutingModule
  ],
  declarations: [HelpComponent]
})
export class HelpModule { }
