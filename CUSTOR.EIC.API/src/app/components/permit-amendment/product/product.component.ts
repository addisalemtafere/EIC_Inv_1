import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { Subscription, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ErrorMessage } from '@custor/services/errMessageService';
import { ActivatedRoute, Params } from '@angular/router';
import { ProjectOutputModel } from '../../../model/ProjectOutput.model';
import { ProjectService } from '../service/project.service';
import { MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  loading = false;
  productForm: FormGroup;
  productAmendForm: FormGroup;
  ServiceId: any;
  InvestorId: any;
  workFlowId: any;
  ServiceApplicationId: any;
  projectId: any;
  dataSource: any;
  editMode = false;
  updateData = false;
  productEditIndex: number;
  productEdit: ProjectOutputModel;
  productEditPostDTO: any;
  
  displayedColumns = [
    'No', 'ProductName', 'ProductQty', 'DomesticMarketShare', 'ExportMarketShare', 'Action'
  ];
  productData: any
  constructor(private formBuilder: FormBuilder,
    private errMsg: ErrorMessage,
    private projectService: ProjectService,
    public route: ActivatedRoute) {
    this.projectId = 28189;
    this.initForm();
    this.initViewForm();
  }

  ngOnInit() {
    // this.ServiceId = this.route.snapshot.params['ServiceId'];
    this.ServiceId = 1234;
    this.InvestorId = this.route.snapshot.params['InvestorId'];
    this.workFlowId = this.route.snapshot.params['workFlowId'];
    this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
    this.getProjectOutPut();
  }
  getProjectOutPut() {
    this.projectService.getProjectOutPutData(this.projectId).subscribe(result => {
      this.productData = result;
      console.log(this.productData)
      this.dataSource = new MatTableDataSource<ProjectOutputModel>(this.productData);
      this.loading = false;
    })
  }
  onEditProduct(index: number, ProjectOutputId) {
    console.log(ProjectOutputId)
    this.editMode = true;
    this.productEditIndex = index;
    this.productEdit = this.productData[index];
    console.log(this.productEdit)
    this.productForm.patchValue(this.productEdit);
    this.productForm.get('sharePercent').patchValue(
      {
        DomesticMarketShare: this.productEdit.DomesticMarketShare,
        ExportMarketShare: this.productEdit.ExportMarketShare
      }
    );
    this.searchDataFromAudit(ProjectOutputId);
  }
  searchDataFromAudit(ProjectOutputId){
    console.log(ProjectOutputId)
    this.projectService.getProjectOutPutAuditData(ProjectOutputId).subscribe(res => {
      console.log(res)
      if (res != null) {
        console.log("data found on audit table")
        console.log(res)
        console.log("check service application id later")
        this.productEditPostDTO = res;
        this.productAmendForm.patchValue(res);
        this.updateData = true;
      }
      else {
        console.log("no data found on audit table");
        console.log('user doesn\'t exist on current database');
        this.appendPreviousDataToNewForm();
      }
    })
  }
  appendPreviousDataToNewForm(){
    this.productAmendForm.patchValue(this.productEdit);
    console.log(this.productEdit)
    this.productAmendForm.get('sharePercent').patchValue(
      {
        DomesticMarketShare: this.productEdit.DomesticMarketShare,
        ExportMarketShare: this.productEdit.ExportMarketShare
      }
    );
  }
  initViewForm() {
    this.productAmendForm = this.formBuilder.group({
      ProjectId: new FormControl(this.projectId),
      ProjectOutputId: new FormControl(''),
      workFlowId: new FormControl(this.workFlowId),
      ProductName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      ProductQty: new FormControl(0, [Validators.required, Validators.min(0)]),
      ProductUnit: new FormControl('', [Validators.required]),
      Quarter: [''],
      RegistrationYear: [''],
      ProjectStatus: [''],
      sharePercent: this.formBuilder.group({
        DomesticMarketShare: [0, [
          Validators.required, Validators.min(0)
        ]],
        ExportMarketShare: [0, Validators.required]
      },
        // { validator: this.childrenEqual }
      ),
      Remark: new FormControl('', [Validators.minLength(2)])
    });
  }
  initForm() {
    this.productForm = this.formBuilder.group({
      ProjectId: new FormControl(this.projectId),
      ProjectOutputId: new FormControl(''),
      workFlowId: new FormControl(this.workFlowId),
      ProductName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      ProductQty: new FormControl(0, [Validators.required, Validators.min(0)]),
      ProductUnit: new FormControl('', [Validators.required]),
      // ProductValue: new FormControl(0, [Validators.required, Validators.min(0)]),
      Quarter: [''],
      RegistrationYear: [''],
      ProjectStatus: [''],
      sharePercent: this.formBuilder.group({
        DomesticMarketShare: [0, [
          Validators.required, Validators.min(0)
        ]],
        ExportMarketShare: [0, Validators.required]
      },
        // { validator: this.childrenEqual }
      ),
      Remark: new FormControl('', [Validators.minLength(2)])
    });
    this.productForm.disable();
  }
}
