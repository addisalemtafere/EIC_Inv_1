import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';

import { PermitAmendmentRouting } from './permit-amendment-routing';
import { PermitAmendmentComponent} from './permit-amendment.component';
import { SharedModule} from "@custor/modules/shared.module";
import { AddressService } from '../../Services/Address/address.service';
import { MatDialog, MatDialogConfig, MatStepper } from '@angular/material';
import { ProjectProfileComponent } from './project-profile/project-profile.component';
import { ServiceRequirementComponent } from './service-requirement/service-requirement.component';
import { InputComponent } from './input/input.component';
import { SiteService } from '../../Services/site.service';
// import { AmendmentRouting } from './amendment-routing';
import { ServiceApplicationService } from "./service/service-application.service";
import { RawMaterialComponent } from './raw-material/raw-material.component';
import { CostComponent } from './cost/cost.component';
import { EmploymentComponent } from './employment/employment.component';
import { ShareComponent } from './share/share.component';
import { ProjectNationalityCompositionService } from '../../Services/project-nationality-composition.service';
import { ProductComponent } from './product/product.component';
import { DocumentComponent } from './document/document.component';
import { PermitListComponent } from './permit-list/permit-list.component';
// import { NotificationComponent } from '../project-profile/notification/notification.component';
import { ServiceConfirmationModule } from '../project-profile/service-confirmation/ServiceConfirmation.module';
import { ConformationMessageComponent } from './conformation-message/conformation-message.component';
import { ManagerListComponent } from './manager-list/manager-list.component';
import { SyncfustionTestEditorComponent } from './syncfustion-test-editor/syncfustion-test-editor.component';

@NgModule({
  imports: [CommonModule,
    SharedModule,
    RichTextEditorAllModule,
    PermitAmendmentRouting,
    ServiceConfirmationModule,
  ],
  declarations: [PermitAmendmentComponent, ProjectProfileComponent,
     ServiceRequirementComponent, InputComponent, RawMaterialComponent, 
     CostComponent, EmploymentComponent, ShareComponent, ProductComponent, 
     DocumentComponent, PermitListComponent, ConformationMessageComponent, ManagerListComponent, SyncfustionTestEditorComponent],
  exports: [PermitAmendmentComponent],
  providers: [AddressService, ServiceApplicationService, SiteService,
     ProjectNationalityCompositionService],
  entryComponents: []
  // entryComponents: [NotificationComponent]

})
export class PermitAmendmentModule {

}
