import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';
import {ProjectSusbtituteRoutingModule} from './ProjectSusbtitute-routing.module';
import {ProjectSubstituteComponent} from './project-substitute.component';
import {SubstituteTabComponent} from './substitute-tab/substitute-tab.component';
import {ServiceInfoModule} from '../service-info/serviceInfo.module';
import {ServiceConfirmationModule} from '../service-confirmation/ServiceConfirmation.module';
import {OfficerModule} from '../../officer-Task/officer.module';
import {AftercareModule} from "../aftercare/aftercare.module";
import {AftercareRecommModule} from "../aftercare-recomendation/AftercareRecommModule";
import {ProjectSubstituteService} from "../../../Services/project-substitute.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProjectSusbtituteRoutingModule,
    ServiceInfoModule,
    ServiceConfirmationModule,
    // ServicePrerequisiteModule,
    OfficerModule,
    AftercareRecommModule
  ],
  declarations: [ProjectSubstituteComponent, SubstituteTabComponent],
  exports: [ProjectSubstituteComponent],
  providers: [ProjectSubstituteService]
})
export class ProjectSubstituteModule {

}
