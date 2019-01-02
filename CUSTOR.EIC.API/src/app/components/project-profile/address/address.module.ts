import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "@custor/modules/shared.module";
import {AddressComponent} from "./address.component";
import {AddressRoutingModule} from "./address-routing.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AddressRoutingModule
  ],
  declarations: [AddressComponent],
  exports: [AddressComponent]
})
export class AddressModule {

}
