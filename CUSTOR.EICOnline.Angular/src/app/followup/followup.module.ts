import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "@custor/modules/shared.module";
import {FollowupComponent} from "./followup.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    FollowupComponent
  ],
  exports: [
    FollowupComponent]
})
export class FollowupModule {

}
