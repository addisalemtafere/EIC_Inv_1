import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// import { SharedModule } from '@custor/modules/shared.module';
import {CommonModule} from '@angular/common';
// import { ContentHeaderComponent } from '@custor/components/content-header/content-header.component';
import {HomeComponent} from "./home.component";
import {SharedModule} from "@custor/modules/shared.module";
import {ServiceListComponent} from "./service-list/services.component";
import {CustomerService} from "../customers/customerService";

export const routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    HomeComponent,
    ServiceListComponent,
  ],
  exports: [ServiceListComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,

  ],
  providers: [
    CustomerService
  ]
})
export class LandingModule {
}
