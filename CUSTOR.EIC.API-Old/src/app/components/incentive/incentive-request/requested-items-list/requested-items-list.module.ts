import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RequestedItemsListComponent} from './requested-items-list.component';
import {RequestedItemsListRoutingModule} from './requested-items-list.routing.module';
import {SharedModule} from "@custor/modules/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RequestedItemsListRoutingModule],
  declarations: [ RequestedItemsListComponent],
  exports: [RequestedItemsListComponent]
})
export class RequestedItemsListModule {
}
