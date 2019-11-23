import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';
import {ProjectDetailRoutingModule} from './project-detail-routing.module';
import {ProjectProfileDetailComponent} from './project-profile-detail.component';
import {ProjectEmploymentService} from "../../../Services/project-employment.service";
import {ProjectNationalityCompositionService} from "../../../Services/project-nationality-composition.service";
import {ProjectInputService} from "../../../Services/project-input.service";
import {ProjectOutputService} from "../../../Services/project-output.service";
import {ProjectRenewalService} from "../../../Services/project-renewal.service";
import {ProjectRequirementService} from "../../../Services/project-requirement.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProjectDetailRoutingModule],
  declarations: [ProjectProfileDetailComponent],
  exports: [ProjectProfileDetailComponent],
  providers: [
    ProjectEmploymentService,
    ProjectNationalityCompositionService,
    ProjectInputService,
    ProjectOutputService,
    ProjectRequirementService
  ]
})
export class ProjectDetailModule {

}
