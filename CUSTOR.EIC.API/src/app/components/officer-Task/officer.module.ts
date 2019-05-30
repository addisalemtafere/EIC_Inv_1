import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OfficerStepperComponent} from './officer-stepper.component';
import {SharedModule} from '@custor/modules/shared.module';
import {PaymentComponent} from '../project-profile/payment/payment.component';
import {OfficerRoutingModule} from './officer-routing.module';
import {CertificateComponent} from '../certificate/certificate.component';
import {ServiceConfirmationModule} from '../project-profile/service-confirmation/ServiceConfirmation.module';
import {ServiceInfoModule} from '../project-profile/service-info/serviceInfo.module';
import {LetterModule} from '../project-profile/letter/letter.module';
import {EditorModule} from "@tinymce/tinymce-angular";
import {NotificationComponent} from "../project-profile/notification/notification.component";
import {MessageModule} from "../project-profile/notification/message.module";
import {CertificateService} from "../../Services/certificate.service";
import {DateService} from "../../Services/date.service";
import {OrderService} from "../../Services/Order.service";
import {ProjectAssociateService} from "../../Services/project-associate.service";
import {ProjectOutputService} from "../../Services/project-output.service";
import {ProjectRenewalService} from "../../Services/project-renewal.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OfficerRoutingModule,
    ServiceConfirmationModule,
    ServiceInfoModule,
    EditorModule,
    LetterModule,
    MessageModule
  ],
  declarations: [
    OfficerStepperComponent,
    CertificateComponent,
    PaymentComponent
  ],
  exports: [
    OfficerStepperComponent,
    CertificateComponent,
    PaymentComponent],
  entryComponents: [],
  providers: [
    CertificateService,
    DateService,
    OrderService,
    ProjectAssociateService,
    ProjectOutputService,
    ProjectRenewalService
  ]
})
export class OfficerModule {
}
