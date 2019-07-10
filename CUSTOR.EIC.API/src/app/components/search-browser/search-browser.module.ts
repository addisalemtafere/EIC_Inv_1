import {NgModule} from '@angular/core';
import {SharedModule} from '@custor/modules/shared.module';
import {CommonModule} from '@angular/common';
import {SearchBrowserRoutingModule} from './search-browser-routing.module';
import {SearchBrowserComponent} from './search-browser.component';
import {AccountService} from "@custor/services/security/account.service";
import {DataSharingService} from "../../Services/data-sharing.service";
import {AuthService} from "@custor/services/security/auth.service";
import {ErrorMessage} from "@custor/services/errMessageService";
import {ProjectProfileService} from "../../Services/project-profile.service";
import {ServiceapplicationService} from "../setting/services-tabs/serviceApplication/serviceapplication.service";
import {IncentiveLogService} from "../../Services/incentive-log.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SearchBrowserRoutingModule
  ],
  declarations: [SearchBrowserComponent],
  providers: [AccountService,
    DataSharingService,
    AuthService, ErrorMessage,
    ProjectProfileService,
    ServiceapplicationService,
    IncentiveLogService
  ]
})
export class SearchBrowserModule {

}

console.log(this.ServiceApplicationId)
