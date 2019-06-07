import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectProfileComponent} from './project-profile.component';
import {ProjectProfileFormComponent} from './project-profile-form/project-profile-form.component';
import {ProjectStepperComponent} from './project-stepper/project-stepper.component';
import {ProjectRoutingModule} from './project-routing.module';
import {SharedModule} from '@custor/modules/shared.module';
import {ServiceInfoModule} from './service-info/serviceInfo.module';
import {ServiceConfirmationModule} from './service-confirmation/ServiceConfirmation.module';
import {ProjectDetailModule} from './project-profile-detail/project-detail.module';
import {ProjectInputOutputComponent} from './project-input/project-input-output.component';
import {ProjectCostModule} from './project-cost/ProjectCost.module';
import {ProductModule} from './project-product/product.module';
import {EmploymentModule} from './project-employment/employment.module';
import {AssociateModule} from '../investor/associate/associate.module';
import {ProjectAssociateComponent} from './project-associate/project-associate.component';
import {UtilityModule} from './project-input/utility.module';
import {ShareModule} from "./project-share/Share.module";
import {ProjectEmploymentService} from "../../Services/project-employment.service";
import {ActivityService} from "../setting/category-tabs/Activity/activity.service";
import {SectorService} from "../../Services/Sector.service";
import {KebeleService} from "../setting/address-tabs/kebele/kebele.service";
import {SiteService} from "../../Services/site.service";
import {AssociateService} from "../../Services/associate.service";
import {ProjectAssociateService} from "../../Services/project-associate.service";
import {ProjectInputService} from "../../Services/project-input.service";
import {ProjectRenewalService} from "../../Services/project-renewal.service";
import {ProjectRequirementService} from "../../Services/project-requirement.service";
import { ProjectSearchComponent } from './project-search/project-search.component';

@NgModule({
  declarations: [
    ProjectProfileComponent,
    ProjectProfileFormComponent,

    ProjectInputOutputComponent,
    ProjectStepperComponent,
    ProjectStepperComponent,
    ProjectAssociateComponent,
    ProjectSearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProjectRoutingModule,
    ServiceInfoModule,
    ServiceConfirmationModule,
    ProjectDetailModule,
    ProjectCostModule,
    EmploymentModule,
    ProductModule,
    ShareModule,
    AssociateModule,
    UtilityModule
  ],
  providers: [
    ProjectEmploymentService,
    ActivityService,
    SectorService,
    SiteService,
    AssociateService,
    ProjectAssociateService,
    ProjectInputService,
    ProjectRenewalService,
    ProjectRequirementService
  ]

})
export class ProjectModule {
}
