import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "@custor/modules/shared.module";
import {FollowupComponent} from "./followup.component";
import {FollowupFormComponent} from './followup-form/followup-form.component';
import {FollowupRoutingModule} from "./followup-routing.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FollowupRoutingModule
  ],
  declarations: [
    FollowupComponent,
    FollowupFormComponent
  ],
  exports: [FollowupComponent]
})
export class FollowupModule {

}