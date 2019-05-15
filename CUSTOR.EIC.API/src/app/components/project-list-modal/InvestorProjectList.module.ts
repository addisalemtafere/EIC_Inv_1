import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';
import {InvestorProjectListRoutingModule} from './investorProjectList-routing.module';
import {ProjectListModalComponent} from './project-list-modal.component';
import {PaginationService} from "@custor/services/pagination.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    InvestorProjectListRoutingModule
  ],
  declarations: [ProjectListModalComponent],
  exports: [ProjectListModalComponent]
})
export class InvestorProjectListModule {

}
