import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// import { SharedModule } from '@custor/modules/shared.module';
import {CommonModule} from '@angular/common';
// import { ContentHeaderComponent } from '@custor/components/content-header/content-header.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatIconModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
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
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [
    CustomerService
  ]
})
export class LandingModule {
}
