import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';
import {AftercareRoutingModule} from './aftercare-routing.module';
import {AftercareComponent} from './aftercare.component';
import {ProjectCostModule} from '../project-cost/ProjectCost.module';
import {ProjectStatusComponent} from './project-status/project-status.component';
import {ProjectStatusHistoryService} from "../../../Services/project-status-history.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AftercareRoutingModule,
    // ProjectCostModule
  ],
  declarations: [AftercareComponent, ProjectStatusComponent],
  exports: [AftercareComponent],
  providers: [ProjectStatusHistoryService]
})
export class AftercareModule {
}
