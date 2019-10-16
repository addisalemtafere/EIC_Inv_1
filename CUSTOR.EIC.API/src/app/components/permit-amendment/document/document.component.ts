import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ServicePrerequisiteService } from '../../setting/services-tabs/serviceprerequistie/servicePrerequisite.service';
import { ServicePrerequisite } from '../../../model/service-prerequisite';
import { InvestorService } from '../../investor/investor.service';
import { Investor } from '../../../model/investor';
import { ProjectStage, FormOfOwnership, ServiceTypes } from '@custor/const/consts';
import { PreRequisiteDocumentService } from '../../../Services/pre-requisite-document.service';
import { DocumentModel } from '../../../model/Document.model';
import { MatDialog, MatDialogRef, MatSnackBar, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss'],
  providers: [ServicePrerequisiteService, PreRequisiteDocumentService]
})
export class DocumentComponent implements OnInit {
  InvestorId :any;
  documentForm: FormGroup;
  displayedColumns = ['No', 'PreRequisite', 'url', 'Action'];
  dataSource : any;
  amendment = ServiceTypes[4].ServiceId;
  servicePreList: ServicePrerequisite[] = [];
  documentList: DocumentModel[] = [];
  constructor(private servicePrerequisiteService: ServicePrerequisiteService,
    public documentServices: PreRequisiteDocumentService,
    private investorService: InvestorService) { }

  ngOnInit() {
    this.InvestorId = 2092;
   this.getServicePrerequisite(this.amendment);
    this.initForm();
  }
 
  getServicePrerequisite(serviceId) {
    this.servicePrerequisiteService
      .servicePrerequisiteByServiceId(serviceId)
      .subscribe(result => {
        this.filterPrerequisite(result);
      });
  }
  private filterPrerequisite(prerequeste: ServicePrerequisite[]) {
    this.investorService.getInvestor(this.InvestorId)
      .subscribe((result: Investor) => {
        this.getPreReqService(prerequeste, result);
      });
  }
  getPreReqService(pre: any, investor: Investor) {
    this.servicePreList = [];
    for (let i = 0; i < pre.length; i++) {
      if (pre[i].BusinessType === investor.LegalStatus || pre[i].BusinessType === 3) {
        this.servicePreList.push(pre[i]);

      }
    }
    console.log(this.servicePreList);
    console.log(this.documentForm.get('ServiceApplicationId').value);
    this.getDocument(this.documentForm.get('ServiceApplicationId').value);
  }
  getDocument(ServiceApplicationId: any) {
    this.documentServices.getAllById(ServiceApplicationId).subscribe(result => {
      this.documentList = result;
      for (let i = 0; i < this.servicePreList.length; i++) {
        for (let j = 0; j < this.documentList.length; j++) {
          if (this.servicePreList[i].ServicePrerequisiteId === this.documentList[j].ServicePrerequisiteId) {
            this.servicePreList[i].upload = true;
            this.servicePreList[i].DocumentId = this.documentList[j].DocumentId;
            this.servicePreList[i].URL = this.documentList[j].KeyWords;
          }
        }
      }
    });
    this.dataSource = new MatTableDataSource<ServicePrerequisite>(this.servicePreList);

  }
  initForm() {
    this.documentForm = new FormGroup({
      Name: new FormControl(),
      WorkFlowId: new FormControl(),
      ServicePrerequisiteId: new FormControl(),
      ServiceApplicationId: new FormControl(),
      KeyWords: new FormControl(null)
    },
      { updateOn: 'submit' }
    );
  }

}
