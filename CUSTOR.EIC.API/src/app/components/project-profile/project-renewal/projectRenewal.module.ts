import {SharedModule} from '@custor/modules/shared.module';
import {NgModule} from '@angular/core';
import {ProjectSubstituteService} from '../../../Services/project-substitute.service';
import {ProjectSubstituteComponent} from '../project-substitute/project-substitute.component';
import {SubstituteTabComponent} from '../project-substitute/substitute-tab/substitute-tab.component';
import {OfficerModule} from '../../officer-Task/officer.module';
import {ProjectSusbtituteRoutingModule} from '../project-substitute/ProjectSusbtitute-routing.module';
import {ServiceInfoModule} from '../service-info/serviceInfo.module';
import {ServiceConfirmationModule} from '../service-confirmation/ServiceConfirmation.module';
import {CommonModule} from '@angular/common';
import {AftercareRecommModule} from '../aftercare-recomendation/AftercareRecommModule';
import { RenewalTabComponent } from './renewal-tab/renewal-tab.component';
import {ProjectRenewalComponent} from '../project-renewal-tab/project-renewal/project-renewal.component';
import {ProjectRenewalService} from '../../../Services/project-renewal.service';
import {ProjectRenewalRoutingModule} from './ProjectRenewal-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProjectRenewalRoutingModule,
    ServiceInfoModule,
    ServiceConfirmationModule,
    OfficerModule,
    AftercareRecommModule
  ],
  declarations: [ProjectSubstituteComponent, SubstituteTabComponent, RenewalTabComponent],
  exports: [ProjectRenewalComponent],
  providers: [ProjectRenewalService]
})
export class ProjectRenewalModule {

}
