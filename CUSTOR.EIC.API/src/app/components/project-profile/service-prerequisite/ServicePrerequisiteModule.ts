import {NgModule} from '@angular/core';
import {ServicePrerequisiteComponent} from './service-prerequisite.component';
import {ServicePrerequsiteRoutingModule} from '../../setting/services-tabs/serviceprerequistie/service-routing.module';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';
import {ServicePrerequisiteService} from "../../setting/services-tabs/serviceprerequistie/servicePrerequisite.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ServicePrerequsiteRoutingModule],
  declarations: [],
  exports: [],
  providers: [ServicePrerequisiteService]
})
export class ServicePrerequisiteModule {
}
