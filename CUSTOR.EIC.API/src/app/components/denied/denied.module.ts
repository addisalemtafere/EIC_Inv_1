import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule, MatIconModule} from '@angular/material';
import {AccessDeniedComponent} from './denied.component';
import {SharedModule} from "@custor/modules/shared.module";

export const routes = [
  {path: '', component: AccessDeniedComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AccessDeniedComponent

  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CommonModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule
  ]

})
export class DeniedModule {
}
