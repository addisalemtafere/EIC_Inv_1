import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';
import {ProjectCancellationRouting} from './project-cancellation-routing';
import {ServiceInfoModule} from '../service-info/serviceInfo.module';
import {OfficerModule} from '../../officer-Task/officer.module';
import {ServiceConfirmationModule} from '../service-confirmation/ServiceConfirmation.module';
import {ProjectCancellationTabComponent} from './project-cancellation-tab.component';
import {ProjectCancellationComponent} from './project-cancellation/project-cancellation.component';
import {LetterModule} from '../letter/letter.module';
import {ServicePrerequisiteModule} from '../service-prerequisite/ServicePrerequisiteModule';
import {AftercareRecommModule} from "../aftercare-recomendation/AftercareRecommModule";
import {ProjectAssociateService} from "../../../Services/project-associate.service";
import {ProjectCancellationService} from "../../../Services/project-cancellation.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProjectCancellationRouting,
    OfficerModule,
    ServiceConfirmationModule,
    ServiceInfoModule,
    LetterModule,
    AftercareRecommModule
    // ServicePrerequisiteModule
  ],
  declarations: [
    ProjectCancellationTabComponent,
    ProjectCancellationComponent
  ],
  providers: [ProjectCancellationService]
})
export class ProjectCancellationTabModule {

}
