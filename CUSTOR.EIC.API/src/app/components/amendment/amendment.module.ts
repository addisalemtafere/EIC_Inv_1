import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { AmendmentRouting } from './amendment-routing';
import { AmendmentComponent} from './amendment.component';
import { SharedModule} from "@custor/modules/shared.module";
import { ProfileComponent } from './profile/profile.component';
// import { AmendmentRouting } from './amendment-routing';

@NgModule({
  imports: [CommonModule,
    SharedModule,
    AmendmentRouting
  ],
  declarations: [AmendmentComponent, ProfileComponent],
  exports: [AmendmentComponent]

})
export class AmendmentModule {

}
