import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IncentiveDetailComponent} from './incentive-detail.component';

const routes: Routes = [
  {path: '', component: IncentiveDetailComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncentiveDetailRoutingModule { }
