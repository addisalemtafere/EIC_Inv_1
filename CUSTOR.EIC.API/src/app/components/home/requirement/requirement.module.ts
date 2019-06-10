import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';
import {RequirementComponent} from './requirement.component';
import {RequirementRoutingModule} from './requirement-routing.module';
import {ServicePrerequisiteService} from "../../setting/services-tabs/serviceprerequistie/servicePrerequisite.service";
import {CustomerServicesService} from "../customer-service.service";

@NgModule({
  imports: [CommonModule,
    SharedModule,
    RequirementRoutingModule],
  exports: [RequirementComponent],
  declarations: [RequirementComponent],
  providers: [
    ServicePrerequisiteService,
    CustomerServicesService
  ]
})
export class RequirementModule {
}
