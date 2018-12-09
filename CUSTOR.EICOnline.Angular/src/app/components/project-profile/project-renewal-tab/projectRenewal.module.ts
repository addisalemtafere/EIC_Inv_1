import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';
import {ProjectRenewalComponent} from './project-renewal/project-renewal.component';
import {ProjectRenewalRouting} from './projectRenewal-routing';
import {OfficerModule} from '../../officer-Task/officer.module';
import {ProjectRenewalTabComponent} from './project-renewal-tab.component';
import {ServiceConfirmationModule} from '../service-confirmation/ServiceConfirmation.module';
import {ServiceInfoModule} from '../service-info/serviceInfo.module';
import {LetterModule} from '../letter/letter.module';
import {AftercareModule} from "../aftercare/aftercare.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProjectRenewalRouting,
    OfficerModule,
    ServiceConfirmationModule,
    ServiceInfoModule,
    LetterModule,
    AftercareModule
  ],
  declarations: [
    ProjectRenewalComponent,
    ProjectRenewalTabComponent],
  exports: [ProjectRenewalComponent]
})
export class ProjectRenewalModule {
}
