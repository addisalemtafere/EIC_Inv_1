import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { SharedModule} from "@custor/modules/shared.module";
import { AfterCareRouting } from './aftercare-routing';
import { AfterCareComponent } from './aftercare.component';
import { AddressService } from '../../Services/Address/address.service';
import { MatDialog, MatDialogConfig, MatStepper } from '@angular/material';
import { AfterCareListComponent } from './after-care-list/after-care-list.component';
import { EmploymentListComponent } from './employment-list/employment-list.component';
import { EmploymentFormComponent } from './employment-form/employment-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { InputListComponent } from './input-list/input-list.component';
import { InputFormComponent } from './input-form/input-form.component';
import { CostListComponent } from './cost-list/cost-list.component';
import { CostFormComponent } from './cost-form/cost-form.component';
// import { AmendmentRouting } from './amendment-routing';

@NgModule({
  imports: [CommonModule,
    SharedModule,
    AfterCareRouting
  ],
  declarations: [AfterCareComponent, AfterCareListComponent, EmploymentListComponent, EmploymentFormComponent, ProductListComponent, ProductFormComponent, InputListComponent, InputFormComponent, CostListComponent, CostFormComponent],
  exports: [AfterCareComponent],
  providers: []

})
export class AfterCareModule {

}
