import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ServicePrerequisiteService } from '../../setting/services-tabs/serviceprerequistie/servicePrerequisite.service';
import { ServicePrerequisite } from '../../../model/service-prerequisite';
import { InvestorService } from '../../investor/investor.service';
import { Investor } from '../../../model/investor';
import { ProjectStage, FormOfOwnership, ServiceTypes } from '@custor/const/consts';
import { PreRequisiteDocumentService } from '../../../Services/pre-requisite-document.service';
import { DocumentModel } from '../../../model/Document.model';
import { MatDialog, MatDialogRef, MatSnackBar, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ServiceApplicationService } from '../service/service-application.service';
import { ToastrService } from 'ngx-toastr';
import { DataSharingService } from '../../../Services/data-sharing.service';
import { ErrorMessage } from '../../../../@custor/services/errMessageService';
@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss'],
  providers: [ServicePrerequisiteService, PreRequisiteDocumentService]
})
export class DocumentComponent implements OnInit {
  errors: Array<string> = [];
  InvestorId: any;
  documentForm: FormGroup;
  displayedColumns = ['No', 'PreRequisite', 'url', 'Action'];
  dataSource: any;
  amendment = ServiceTypes[4].ServiceId;
  servicePreList: ServicePrerequisite[] = [];
  documentList: DocumentModel[] = [];
  serviceApplicationId: any;
  existingServiceApplication : any;
  loading : boolean;
  @Input() maxFiles = 5;
  @Input() fileExt = 'Pdf';
  @Input() maxSize = 100; // 5MB
  @Output() uploadStatus = new EventEmitter();
  constructor(private servicePrerequisiteService: ServicePrerequisiteService,
    public documentServices: PreRequisiteDocumentService,
    public route: ActivatedRoute,
    private toaser :ToastrService,
    private dataSharing: DataSharingService,
    public errMsg: ErrorMessage,
    private serviceApplicationApiService: ServiceApplicationService,
    private investorService: InvestorService) {
    this.InvestorId = localStorage.getItem('InvestorId');
    console.log(this.InvestorId)
    if(this.InvestorId == null){
      this.InvestorId = this.route.snapshot.params.investorId;
    }
    this.serviceApplicationId = this.route.snapshot.params.serviceApplicationId;
    if (this.serviceApplicationId == 0) {
      this.checkServiceApplication();
    }
  }
  checkServiceApplication() {
    this.serviceApplicationApiService.checkServiceApplicationFromApi(this.InvestorId, this.amendment)
      .subscribe(result => {
        console.log(result)
        if (result != null) {
          this.existingServiceApplication = result;
          this.serviceApplicationId = this.existingServiceApplication.ServiceApplicationId;
        }
        else {
          this.serviceApplicationId = 0;
        }
      });
  }
  ngOnInit() {
    
    this.getServicePrerequisite(this.amendment);
    this.initForm();
  }

  getServicePrerequisite(serviceId) {
    this.servicePrerequisiteService
      .servicePrerequisiteByServiceId(serviceId)
      .subscribe(result => {
        console.log(result)
        this.filterPrerequisite(result);
      });
  }
  private filterPrerequisite(prerequeste: ServicePrerequisite[]) {
    this.investorService.getInvestor(this.InvestorId)
      .subscribe((result: Investor) => {
        console.log(result)
        this.getPreReqService(prerequeste, result);
      });
  }
  getPreReqService(pre: any, investor: Investor) {
    console.log(pre)
    console.log(investor)
    this.servicePreList = [];
    for (let i = 0; i < pre.length; i++) {
      if (pre[i].BusinessType === investor.LegalStatus || pre[i].BusinessType === 3) {
        this.servicePreList.push(pre[i]);

      }
    }
    console.log(this.servicePreList);
    console.log(this.documentForm.get('ServiceApplicationId').value);
    this.getDocument(this.serviceApplicationId);
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
  private isValidFiles(files) {
    // Check Number of files
   
    if (files.length > this.maxFiles) {
      this.errors.push('Error: At a time you can upload only ' + this.maxFiles + ' files');
      // this.toast.error('Error: At a time you can upload only ' + this.maxFiles + ' files', 'Error');
      return;
    }
    this.isValidFileExtension(files);
    return this.errors.length === 0;
  }
  private isValidFileExtension(files) {
    // Make array of file extensions
    const extensions = (this.fileExt.split(','))
      .map(function (x) {
        return x.toLocaleUpperCase().trim();
      });

    for (let i = 0; i < files.length; i++) {
      // Get file extension
      const ext = files[i].name.toUpperCase().split('.').pop() || files[i].name;
      // Check the extension exists
      const exists = extensions.includes(ext);
      if (!exists) {
        this.errors.push('Only documents with .pdf extension are allowed : ' + files[i].name);
        // this.toast.error('Error ,Pdf Extension Only allowed to attach :' + files[i].name, 'Error');

      }
      // Check file size
      this.isValidFileSize(files[i]);
    }
  }
  private isValidFileSize(file) {
    const fileSizeinMB = file.size / (1024 * 100);
    const size = Math.round(fileSizeinMB * 100) / 100; // convert upto 2 decimal place
    if (size > this.maxSize) {
      this.errors.push('Error (File Size): ' + file.name + ': exceed file size limit of ' + this.maxSize + 'MB ( ' + size + 'MB )');
      // this.toast.error('Error (File Size): ' + file.name + ': exceed file size limit of ' + this.maxSize + 'MB ( ' + size + 'MB )');
    }
  }
  prepareSaveUser(): FormData {
    const formModel = this.documentForm.value;
    console.log(formModel)
    const formData = new FormData();
    // console.log(formModel.workFlowId);
    formData.append('Name', formModel.Name);
    formData.append('ServicePrerequisiteId', formModel.ServicePrerequisiteId);
    formData.append('ServiceApplicationId', this.serviceApplicationId);
    formData.append('KeyWords', formModel.KeyWords);
    formData.append('workFlowId', "0");

    return formData;
  }
  upload(i: number, files: FileList) {
    this.errors = []; // Clear error
    // console.log((!this.isValidFiles(files)));
    if (files && files[0].size > 0 && (this.isValidFiles(files))) {
      
      this.documentForm.patchValue({
        Name: 'Eic_file',
        ServicePrerequisiteId: this.servicePreList[i].ServicePrerequisiteId,
        KeyWords: files[0],
        // WorkFlowId: this.workFlowId
      });
      console.log(this.prepareSaveUser())
      this.documentServices
        .uploadDocument(this.prepareSaveUser())
        .subscribe(result => {

          this.getServicePrerequisite(this.amendment);
          this.loading = false;
          setTimeout(() => this.dataSharing.currentIndex.next(9), 0);
        }, error => this.toaser.error(this.errMsg.getError(error)));
      // this.getServicePrerequisite(localStorage.getItem('ServiceId'));
    } else {
      this.toaser.error('Error Occurred Please ', 'Error');
    }
  }

}
