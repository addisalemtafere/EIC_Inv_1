import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "@custor/modules/shared.module";
import {AftercareRecommendationComponent} from "./aftercare-recommendation.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [AftercareRecommendationComponent],
  exports: [AftercareRecommendationComponent]
})
export class AftercareRecommModule {

}
