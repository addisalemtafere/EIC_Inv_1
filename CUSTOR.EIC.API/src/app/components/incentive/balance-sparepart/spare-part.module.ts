import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SparePartRoutingModule} from './spare-part-routing.module';
import {SharedModule} from '@custor/modules/shared.module';
import {SparePartComponent} from './spare-part.component';
import {MessageModule} from "../../project-profile/notification/message.module";
import {ApplicationSettingService} from "../../../Services/application-setting.service";

@NgModule({
  imports: [
    CommonModule,
    SparePartRoutingModule,
    SharedModule,
    MessageModule
  ],
  declarations: [
    SparePartComponent
  ],
  exports: [
    SparePartComponent
  ],
  providers: [ApplicationSettingService]
})
export class SparePartModule {
}
