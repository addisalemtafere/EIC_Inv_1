import {RouterModule, Routes} from "@angular/router";
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FollowupComponent} from "./followup.component";
import {FollowupFormComponent} from "./followup-form/followup-form.component";

const routes: Routes = [
  {path: '', component: FollowupComponent},
  {path: 'followupform', component: FollowupFormComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class FollowupRoutingModule {
}
