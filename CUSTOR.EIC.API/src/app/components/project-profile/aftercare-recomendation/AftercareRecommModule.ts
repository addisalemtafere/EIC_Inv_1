import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "@custor/modules/shared.module";
import {AftercareRecommendationComponent} from "./aftercare-recommendation.component";
import {FollowupService} from "../../../Services/followup/followup.service";
import {ProjectRenewalService} from "../../../Services/project-renewal.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [AftercareRecommendationComponent],
  exports: [AftercareRecommendationComponent],
  providers: [FollowupService, ProjectRenewalService]
})
export class AftercareRecommModule {

}
