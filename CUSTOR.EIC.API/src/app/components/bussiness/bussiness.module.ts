import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BussinessRoutingModule} from './bussiness-routing.module';
import {BussinessComponent} from './bussiness.component';
import {SharedModule} from '@custor/modules/shared.module';
import {BussinessTabComponent} from './bussiness-tab/bussiness-tab.component';
import {RegistrationListComponent} from './registration-list/registration-list.component';
import {BussinessBranchComponent} from './bussiness-branch/bussiness-branch.component';
import {BussinessCertificateComponent} from './bussiness-certificate/bussiness-certificate.component';
import {BussinessService} from "../../Services/bussiness/bussiness.service";
import {CatagoryService} from "../../Services/Catagory/Catagory.service";
import {AssociateService} from "../../Services/associate.service";
import {CertificateService} from "../../Services/certificate.service";
import {PreRequisiteDocumentService} from "../../Services/pre-requisite-document.service";
import {ProjectAssociateService} from "../../Services/project-associate.service";
import {ProjectOutputService} from "../../Services/project-output.service";


@NgModule({
  imports: [
    CommonModule,
    BussinessRoutingModule,
    SharedModule
  ],
  declarations: [
    BussinessComponent,
    BussinessTabComponent,
    RegistrationListComponent,
    BussinessBranchComponent,
    BussinessCertificateComponent],
  exports: [
    BussinessComponent,
    BussinessBranchComponent,
    BussinessCertificateComponent
  ],
  providers: [
    BussinessService,
    CatagoryService,
    AssociateService,
    CertificateService,
    ProjectAssociateService,
    ProjectOutputService
  ]
})
export class BussinessModule {
}
