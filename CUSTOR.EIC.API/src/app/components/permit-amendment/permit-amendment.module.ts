import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
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
import { NotificationComponent } from '../project-profile/notification/notification.component';

@NgModule({
  imports: [CommonModule,
    SharedModule,
    PermitAmendmentRouting
  ],
  declarations: [PermitAmendmentComponent, ProjectProfileComponent,
     ServiceRequirementComponent, InputComponent, RawMaterialComponent, 
     CostComponent, EmploymentComponent, ShareComponent, ProductComponent, 
    NotificationComponent,
     DocumentComponent, PermitListComponent],
  exports: [PermitAmendmentComponent],
  providers: [AddressService, ServiceApplicationService, SiteService,
     ProjectNationalityCompositionService],
  entryComponents: [NotificationComponent]

})
export class PermitAmendmentModule {

}
