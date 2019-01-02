import {ErrorHandler, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {AgmCoreModule} from '@agm/core';
import {ToastrModule} from 'ngx-toastr';
import {HomeComponent} from './components/home/home.component';
import {FooterModule} from '@custor/components/shared/footer.component';
import {ThemePickerModule} from '@custor/components/shared/theme-picker.component';
import {LangSwitcherModule} from '@custor/components/shared/lang-switcher.component';
import {LocalStoreManager} from '@custor/services/storeManager.service';
import {AppTranslationService, TranslateLanguageLoader} from '@custor/services/translation.service';
import {ConfigurationService} from '@custor/services/configuration.service';
import {EndpointFactory} from '@custor/services/security/endpoint-factory.service';
import {AccountService} from '@custor/services/security/account.service';
import {AccountEndpoint} from '@custor/services/security/account-endpoint.service';
import {LoginComponent} from './components/auth/login/login.component';
import {LoginControlComponent} from './components/auth/login/login-control.component';
import {ServiceStarterComponent} from './components/service-starter/service-starter.component';
import {NumberOnlyDirective} from '../@custor/directives/number.directive';
import {NaturalNumberOnlyDirective} from '../@custor/directives/naturalNumber.directive';
import {InvestorService} from './components/investor/investor.service';
import {AppConfiguration} from './config/appconfig';
import 'hammerjs';
import {EnumKeyValueListPipe} from './pipe/enum-key-value-list.pipe';
import {ServicePrerequisiteService} from './components/setting/services-tabs/serviceprerequistie/servicePrerequisite.service';
import {ProjectProfileService} from './Services/project-profile.service';
import {ProjectCostService} from './Services/project-cost.service';
import {ProjectEmploymentService} from './Services/project-employment.service';
import {ProjectNationalityCompositionService} from './Services/project-nationality-composition.service';
import {SectorService} from './Services/Sector.service';
import {SiteService} from './Services/site.service';
import {ErrorMessage} from '../@custor/services/errMessageService';
import {AddressService} from './Services/Address/address.service';
import {FormService} from '../@custor/validation/custom/form';
// import {MyDashboardComponent} from './components/my-dashboard/my-dashboard.component';
import {ServiceService} from './Services/service.service';
import {ServicetariffService} from './components/setting/services-tabs/servicetariff/servicetariff.service';
import {TariffService} from './components/setting/othe-tabs/tariff/tariff.service';
import {ServicesStepService} from './Services/services-step.service';
import {SubsectorService} from './components/setting/category-tabs/subsector/subsector.service';
import {ActivityService} from './components/setting/category-tabs/Activity/activity.service';
import {InvactivityService} from './components/setting/category-tabs/InvActivity/invactivity.service';
import {RegionService} from './components/setting/address-tabs/region/region.service';
import {ZoneService} from './components/setting/address-tabs/zone/zone.service';
import {WoredaService} from './components/setting/address-tabs/Woredas/woreda.service';
import {KebeleService} from './components/setting/address-tabs/kebele/kebele.service';
import {ConfirmComponent} from './components/auth/register/confirm.component';
import {DocumentPipePipe} from './pipe/document-pipe.pipe';
import {NotificationComponent} from './components/project-profile/notification/notification.component';

import {CustomerServicesService} from './components/home/customer-service.service';
import {ServiceListComponent} from './components/home/service-list/services.component';
import {SharedModule} from '@custor/modules/shared.module';
import {LoginDialogComponent} from './components/auth/login/login-dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NotificationsComponent} from './components/notifications/notifications.component';
import {TaskDispatcherComponent} from './components/task-dispatcher/task-dispatcher.component';
import {BaseComponent} from './components/base-components/base.component';
import {EditorModule} from '@tinymce/tinymce-angular';
import {ErrorComponent} from './components/error/error.component';
import {GlobalErrorHandlerService} from '@custor/services/global-error-handler.service';
import {AppComponent} from './app.component';

import {NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule} from "ngx-ui-loader";

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "bgsColor": "#04a162",
  "bgsOpacity": 0.5,
  "bgsPosition": "bottom-left",
  "bgsSize": 90,
  "bgsType": "three-strings",
  "blur": 65,
  "fgsColor": "#0c97a8",
  "fgsPosition": "center-center",
  "fgsSize": 120,
  "fgsType": "three-strings",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "overlayColor": "rgba(40, 40, 40, 0.8)",
  "pbColor": "#0c97a8",
  "pbDirection": "ltr",
  "pbThickness": 5,
  "hasProgressBar": true,
  "text": "Loading",
  "textColor": "#0c97a8",
  "textPosition": "center-center",
  "threshold": 500,

};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceStarterComponent,
    NumberOnlyDirective,
    NaturalNumberOnlyDirective,
    ConfirmComponent,
    ServiceListComponent,

    EnumKeyValueListPipe,
    DocumentPipePipe,
    NotificationComponent,
    // ServiceInitComponent,
    LoginDialogComponent,
    LoginComponent,
    LoginControlComponent,
    NotificationsComponent,
    TaskDispatcherComponent,
    BaseComponent,
    ErrorComponent,
    // CustomerServiceStarterComponent
    // AddressComponent,
    // HelpComponent,

  ],

  imports: [

    ThemePickerModule,
    LangSwitcherModule,
    FooterModule,
    // NotificationModule,

    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCKHGctDoGx1_YdAbRsPlJYQqlQeC6kR2E'
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: TranslateLanguageLoader
      }
    }),
    ToastrModule.forRoot({
      maxOpened: 1,
    }),
    // MatGridListModule,
    // MatCardModule,
    // MatMenuModule,
    // MatIconModule,
    // MatButtonModule,
    // ImageUploadModule.forRoot(),
    EditorModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({showForeground: true})


  ],
  entryComponents: [
    NotificationComponent,
    NotificationsComponent,
    TaskDispatcherComponent,
    // ServiceInitComponent,

  ],
  providers: [
    {provide: 'BASE_URL', useFactory: getBaseUrl},
    {provide: ErrorHandler, useClass: GlobalErrorHandlerService},
    LocalStoreManager,
    AppTranslationService,
    ConfigurationService,
    AccountService,
    AccountEndpoint,
    EndpointFactory,
    InvestorService,
    AppConfiguration,
    FormService,
    ProjectProfileService,
    ServiceService,
    ServicetariffService,
    TariffService,
    ProjectCostService,
    ProjectEmploymentService,
    ServicesStepService,
    SubsectorService,
    ActivityService,
    InvactivityService,
    ProjectNationalityCompositionService,
    SectorService,
    RegionService,
    ZoneService,
    WoredaService,
    KebeleService,
    SiteService,
    AddressService,
    AppConfiguration,
    ErrorMessage,
    ServicePrerequisiteService,
    CustomerServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}
