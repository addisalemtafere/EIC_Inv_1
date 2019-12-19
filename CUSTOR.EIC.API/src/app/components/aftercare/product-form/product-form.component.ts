import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { AftercareService } from '../service/aftercare.service';
import { ProjectStatus, Quarter } from '@custor/const/consts';
import { ProjectStatusModel, QuarterModel, UnitType } from '../../../model/lookupData';
import { ToastrService } from 'ngx-toastr';
import { ConfigurationService } from '@custor/services/configuration.service';
import {
  ServiceTypes, AMENDMENT_STEP, UnitTypes,
  ENG_SAVE_SUCCESS_MSG, ENG_UPDATE_SUCCESS_MSG, ENG_NOT_FOUND_MSG,
  ENG_SAVE_ERR_MSG, ENG_UPDATE_ERR_MSG,

  AMH_SAVE_SUCCESS_MSG, AMH_UPDATE_SUCCESS_MSG, AMH_NOT_FOUND_MSG,
  AMH_SAVE_ERR_MSG, AMH_UPDATE_ERR_MSG

} from '@custor/const/consts';
import { MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  viewOnly: any;
  projectId: any;
  productOutputId: any;
  currentLang: any;
  updateData: any;
  public Quarter: any = [];
  projectStatus: ProjectStatusModel[] = [];
  public unitTypes: UnitType[] = [];
  projectProductData : any;
  projectProduct : any;
  dataSource : any;
  displayedColumns = [
    'No', 'ProductName', 'ProductQty', 'DomesticMarketShare', 'ExportMarketShare'
  ];
  constructor(private formBuilder: FormBuilder,
    private afterCareService: AftercareService,
    private configService: ConfigurationService,
    private toaster: ToastrService,
    private activatedRoute: ActivatedRoute) {

    this.initStaticData();
    this.currentLang = this.configService.language;
    this.productOutputId = this.activatedRoute.snapshot.params.productId;
    this.projectId = this.activatedRoute.snapshot.params.projectId;
    this.viewOnly = this.activatedRoute.snapshot.params.viewOnly;
    if (this.viewOnly && this.viewOnly == 0) {
      this.getProductOriginalData()
    }
    else {
      if (this.productOutputId == 0) {
        this.updateData = false;
      }
      else {
        this.updateData = true;
        this.getProductData();
      }
    }
  }
  ngOnInit() {
    this.initForm();
  }
  getProductOriginalData() {
    this.afterCareService.getProductOriginalData(this.projectId).subscribe(response => {
      console.log(response)
      this.projectProductData = response;
      this.dataSource = new MatTableDataSource(this.projectProductData);
      // this.employmentForm.patchValue(this.projectProductData);
      // this.productForm.patchValue(this.projectProductData);
      // this.productForm.controls.Quarter.setValue((this.projectProductData.Quarter.toString()));
      // this.productForm.controls.ProjectStatus.setValue((this.projectProductData.ProjectStatus.toString()));
      // this.productForm.controls.Decision.setValue((this.projectProductData.Decision.toString()));

    })
  }
  getProductData() {
    this.afterCareService.getProductData(this.productOutputId).subscribe(response => {
      console.log(response)
      this.projectProductData = response;
      this.productForm.patchValue(this.projectProductData);
      this.productForm.controls.Quarter.setValue((this.projectProductData.Quarter.toString()));
      this.productForm.controls.ProjectStatus.setValue((this.projectProductData.ProjectStatus.toString()));
      this.productForm.controls.Decision.setValue((this.projectProductData.Decision.toString()));

    })
  }
  initStaticData() {
    let projectStatus1: ProjectStatusModel = new ProjectStatusModel();
    ProjectStatus.forEach(pair => {
      projectStatus1 = {
        Id: pair.Id.toString(),
        DescriptionEnglish: pair.DescriptionEnglish,
        Description: pair.Description
      };
      this.projectStatus.push(projectStatus1);
    });

    let Quarter1: QuarterModel = new QuarterModel();
    Quarter.forEach(pair => {
      Quarter1 = {
        Id: pair.Id.toString(),
        DescriptionEnglish: pair.DescriptionEnglish,
        Description: pair.Description
      };
      this.Quarter.push(Quarter1);
    });
    let unit: UnitType = new UnitType();
    UnitTypes.forEach(pair => {
      unit = {
        'Id': pair.Id.toString(),
        'DescriptionEnglish': pair.DescriptionEnglish,
        'Description': pair.Description
      };
      this.unitTypes.push(unit);
    });
  }

 
  initForm() {
    this.productForm = this.formBuilder.group({
      ProjectId: new FormControl(this.projectId),
      ProjectOutputId: new FormControl(''),
      ProductName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      ProductQty: new FormControl(0, [Validators.required, Validators.min(0)]),
      ProductUnit: new FormControl('', [Validators.required]),
      Quarter: [''],
      RegistrationYear: [''],
      ProjectStatus: [''],
      DomesticMarketShare: new FormControl(0, [Validators.required, Validators.min(0)]),
      ExportMarketShare: new FormControl(0, [Validators.required, Validators.min(0)]),
      Remark: [''],
      Decision: [''],
    });
  }
  update() {
    this.afterCareService.updateProductData(this.getEditedData()).subscribe(response => {
      console.log(response)
      console.log(this.currentLang)
      if (response) {
        if (this.currentLang == 'en') {
          this.toaster.success(ENG_UPDATE_SUCCESS_MSG)
        }
        else {
          this.toaster.success(AMH_UPDATE_SUCCESS_MSG)
        }
      }
      else {
        if (this.currentLang == 'en') {
          this.toaster.success(ENG_UPDATE_ERR_MSG)
        }
        else {
          this.toaster.success(AMH_SAVE_ERR_MSG)
        }
      }

    })
  }
  create() {
    this.afterCareService.saveProductData(this.getEditedData()).subscribe(response => {
      console.log(response)
      console.log(this.currentLang)
      if (response) {
        this.updateData = true;
        this.projectProductData = response;
        this.productOutputId = this.projectProductData.ProjectEmploymentId;
        if (this.currentLang == 'en') {
          this.toaster.success(ENG_SAVE_SUCCESS_MSG)
        }
        else {
          this.toaster.success(AMH_SAVE_SUCCESS_MSG)
        }
      }
      else {
        if (this.currentLang == 'en') {
          this.toaster.success(ENG_SAVE_ERR_MSG)
        }
        else {
          this.toaster.success(AMH_SAVE_ERR_MSG)
        }
      }
    })
  }
  getEditedData() {
    this.projectProduct = this.productForm.value;
    this.projectProduct.ProjectEmploymentId = this.productOutputId;
    this.projectProduct.ProjectId = this.projectId;
    return this.projectProduct;
  }
  back(){
    window.history.back();
  }
  get ProductName() {
    return this.productForm.get("ProductName")
  }
  get ProductQty() {
    return this.productForm.get("ProductQty")
  }
  get ProductUnit() {
    return this.productForm.get("ProductUnit")
  }
  get DomesticMarketShare() {
    return this.productForm.get("DomesticMarketShare")
  }
  get ExportMarketShare() {
    return this.productForm.get("ExportMarketShare")
  }
}

