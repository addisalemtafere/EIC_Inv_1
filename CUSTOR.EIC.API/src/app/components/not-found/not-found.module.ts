import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule, MatIconModule} from '@angular/material';
import {NotFoundComponent} from './not-found.component';
import {SharedModule} from "@custor/modules/shared.module";

export const routes = [
  {path: '', component: NotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    NotFoundComponent

  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CommonModule,
    MatCardModule, MatIconModule,
    FlexLayoutModule
  ]

})
export class NotFoundModule {
}
