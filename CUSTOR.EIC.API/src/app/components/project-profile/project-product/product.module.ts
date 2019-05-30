import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';
import {ProductRoutingModule} from './product-routing.module';
import {ProjectProductListComponent} from './project-product-list/project-product-list.component';
import {ProjectProductComponent} from './project-product.component';
import {ProjectInputService} from "../../../Services/project-input.service";
import {ProjectOutputService} from "../../../Services/project-output.service";
import {ProjectRequirementService} from "../../../Services/project-requirement.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [ProjectProductListComponent, ProjectProductComponent],
  exports: [ProjectProductListComponent, ProjectProductComponent],
  providers: [ProjectInputService, ProjectOutputService, ProjectRequirementService]
})
export class ProductModule {

}
