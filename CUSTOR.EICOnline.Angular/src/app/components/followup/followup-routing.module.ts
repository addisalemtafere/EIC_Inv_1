import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FollowupComponent} from "./followup.component";
import {FollowupFormComponent} from "./followup-form/followup-form.component";
import {SearchBrowserComponent} from "../search-browser/search-browser.component";

const routes: Routes = [
  {path: 'followupform', component: FollowupFormComponent},
  {path: '', component: FollowupComponent},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class followup_routing_module {
}
