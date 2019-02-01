import {RouterModule, Routes} from "@angular/router";
import {InvestorTabComponent} from "../investor-tab/investor-tab.component";
import {NgModule} from "@angular/core";
import {InvestorProfileComponent} from "./investor-profile.component";

const route: Routes = [
  {
    path: '', component: InvestorProfileComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class InvestorProRouting {

}
