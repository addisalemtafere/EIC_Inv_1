import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';
import {AssociateRoutingModule} from './associate-routing.module';
import {AssociateFormComponent} from './associate-form/associate-form.component';
import {AssociateComponent} from './associate.component';
import {ApplicationSettingService} from "../../../Services/application-setting.service";
import {AssociateService} from "../../../Services/associate.service";
import { MessageModule } from "../../project-profile/notification/message.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AssociateRoutingModule,
    MessageModule
  ],
  declarations: [AssociateComponent,
    AssociateFormComponent],
  exports: [AssociateComponent,
    AssociateFormComponent],
  providers: [AssociateService]
})
export class AssociateModule {

}
