import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AddressComponent} from "./address.component";

const routing: Routes = [
  {
    path: '', component: AddressComponent, children: [
      {path: '', component: AddressComponent},
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routing)],
  exports: [RouterModule]
})
export class AddressRoutingModule {

}
