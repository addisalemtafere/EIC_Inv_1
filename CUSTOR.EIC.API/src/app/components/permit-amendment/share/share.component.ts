import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProjectStage, FormOfOwnership, ServiceTypes } from '@custor/const/consts';
import { ConfigurationService } from '@custor/services/configuration.service';
import { ServiceApplicationModel } from '../../../model/ServiceApplication.model';
import { ServiceApplicationService } from '../service/service-application.service';
import { ProjectNationalityCompositionModel } from '../../../model/ProjectNationalityComposition.model.';
import { MatTableDataSource } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { ErrorMessage } from '@custor/services/errMessageService';
import { ProjectNationalityCompositionService } from '../../../Services/project-nationality-composition.service';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  projectShareForm: FormGroup;
  projectShareAmendForm: FormGroup;
  currentLang: string;
  existingServiceApplication: any;
  serviceApplicationId: any;
  amendment = ServiceTypes[4].ServiceId;
  nationalityCompositionData: any = [];
  updateData = false;
  editMode = false;
  isSol = false;
  shareEditIndex: any;
  dataSource: any;
  projectId: any;
  productShare: any;
  productSharePostDTO: any;
  ProjectNationalityCompositionId: any;
  displayedColumns = ['No', 'Nationality', 'Qty', 'SharePercent', 'Description', 'Action'];

  constructor(private configService: ConfigurationService,
    private formBuilder: FormBuilder,
    private errMsg: ErrorMessage,
    private projectService: ProjectService,
    private nationalityCompositionService: ProjectNationalityCompositionService,
    private serviceApplicationApiService: ServiceApplicationService) {
    this.currentLang = this.configService.language;
    this.checkServiceApplication();
    this.initForm();
    this.initViewForm();
    this.projectId = 28174;
  }
  checkServiceApplication() {
    const id = 2092;
    this.serviceApplicationApiService.checkServiceApplicationFromApi(id, this.amendment)
      .subscribe(result => {
        if (result != null) {
          this.existingServiceApplication = result;
          this.serviceApplicationId = this.existingServiceApplication.ServiceApplicationID;
        }
        else {
          this.serviceApplicationId = 0;
        }
      });
  }
  initForm() {
    this.projectShareForm = this.formBuilder.group({
      ProjectId: new FormControl(),
      ProjectNationalityCompositionId: new FormControl(''),
      workFlowId: new FormControl(),
      Nationality: new FormControl(null, [Validators.required]),
      Qty: new FormControl('', [Validators.required]),
      SharePercent: new FormControl(null, [Validators.required, Validators.max(100)]),
      Description: new FormControl(null, Validators.minLength(2))
    });
    this.projectShareForm.disable();
  }
  initViewForm() {
    this.projectShareAmendForm = this.formBuilder.group({
      ProjectId: new FormControl(),
      ProjectNationalityCompositionId: new FormControl(''),
      workFlowId: new FormControl(),
      Nationality: new FormControl(null, [Validators.required]),
      Qty: new FormControl('', [Validators.required]),
      SharePercent: new FormControl(null, [Validators.required, Validators.max(100)]),
      Description: new FormControl(null, Validators.minLength(2))
    });
  }
  ngOnInit() {
    const projectId = 28177;
    this.projectId = projectId;
    this.getShareData(projectId);
  }
  getShareData(projectId) {
    this.projectService.getProjectSharePercentData(projectId).subscribe(res => {
      console.log(res)
      this.nationalityCompositionData = res;
      // this.dataSource = res;
      this.dataSource = new MatTableDataSource<ProjectNationalityCompositionModel>(this.nationalityCompositionData);

    })
  }
  onEditShare(index: number, id: number) {
    this.editMode = true;
    this.ProjectNationalityCompositionId = id;
    this.shareEditIndex = index;
    this.productShare = this.nationalityCompositionData[index];
    this.projectShareForm.patchValue(this.productShare);
    this.searchDataFromAudit(id);
  }
  searchDataFromAudit(projectCompositionId) {
    this.projectService.getProjectSharePercentAuditData(projectCompositionId).subscribe(res => {
      console.log(res)
      if (res != null) {
        console.log("data found on audit table")
        console.log(res)
        console.log("check service application id later")
        this.productSharePostDTO = res;
        this.projectShareAmendForm.patchValue(res);
        this.updateData = true;
      }
      else {
        console.log("no data found on audit table");
        console.log('user doesn\'t exist on current database');
        this.appendPreviousDataToNewForm();
      }
    })
  }
  appendPreviousDataToNewForm() {
    this.projectShareAmendForm.patchValue(this.productShare);
  }

}
