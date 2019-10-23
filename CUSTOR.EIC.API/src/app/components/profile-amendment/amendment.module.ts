import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { AmendmentRouting } from './amendment-routing';
import { AmendmentComponent} from './amendment.component';
import { SharedModule} from "@custor/modules/shared.module";
import { ProfileComponent } from './profile/profile.component';
import { ManagerListComponent } from './manager-list/manager-list.component';
import { ServiceApplicationService} from "./service/service-application.service";
import { NotificationsComponent } from '../notifications/notifications.component';
import { ManagerComponent } from './manager/manager.component';
import { ManagerEditComponent } from './manager-edit/manager-edit.component';
import { AddressService } from '../../Services/Address/address.service';
import { MatDialog, MatDialogConfig, MatStepper } from '@angular/material';
// import { AmendmentRouting } from './amendment-routing';

@NgModule({
  imports: [CommonModule,
    SharedModule,
    AmendmentRouting
  ],
  declarations: [AmendmentComponent, ProfileComponent, ManagerListComponent, ManagerComponent, ManagerEditComponent, NotificationsComponent],
  exports: [AmendmentComponent],
  providers: [ServiceApplicationService, AddressService],
  entryComponents: [
    NotificationsComponent,
  ],

})
export class AmendmentModule {

}
