import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';
import {IncentiveDetailRoutingModule} from './incentive-detail-routing.module';
import {IncentiveDetailComponent} from './incentive-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    IncentiveDetailRoutingModule
  ],
  declarations: [IncentiveDetailComponent],
  exports: [IncentiveDetailComponent],


})
export class IncentiveDetailModule { }
