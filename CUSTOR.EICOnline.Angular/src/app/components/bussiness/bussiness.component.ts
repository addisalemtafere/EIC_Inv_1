import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Subscription} from 'rxjs';
import {ToastrService} from 'ngx-toastr';

import {BussinessModel} from '../../model/bussiness/BussinessModel.model';
import {ALPHABET_WITHSPACE_REGEX, STATUS, ET_ALPHABET_WITHSPACE_REGEX, GENDERS} from '../../const/consts';

import {BussinessCatagory} from '../../model/bussiness/BussinessCatagory.model';
import {ActivatedRoute, Router} from '@angular/router';
import {DivisionModel} from '../../model/catagory/DivisionModel.model';
import {Status} from 'tslint/lib/runner';
import {CatagoryService} from '../../Services/Catagory/Catagory.service';
import {BussinessService} from '../../Services/bussiness/bussiness.service';
import {MajorDivision} from '../../model/catagory/MajorDivision.model';



@Component({
  selector: 'app-bussiness',
  templateUrl: './bussiness.component.html',
  styleUrls: ['./bussiness.component.scss']
})
export class BussinessComponent implements OnInit {
  bussinessForm: any;
  loadingIndicator = false;
  MajorDivisionList: MajorDivision[] = [];
  DivisionList: DivisionModel[] = [];
  filterDivisionList: DivisionModel[] = [];
  bussinessStatus: any[] = [];
  MajorGroupList: DivisionModel[] = [];
  filterMajorGroupList: DivisionModel[] = [];
  GroupList: DivisionModel[] = [];
  filterGroupList: DivisionModel[] = [];
  bussinessCatagory: BussinessCatagory;
  SubGroupList = [];
  ServiceApplicationId: any;
  InvestorId: any;
  filterSubGroupList = [];
  Tin: string;
  private BussinessN: string;
  private BussinessNeng: string;
  // DivisionList = []
  constructor( private http: HttpClient,
               public toastr: ToastrService,
               private catagoryservice: CatagoryService,
               private  bussinessService: BussinessService,
               private router: Router,
               public route: ActivatedRoute,
                private fb: FormBuilder) {
   /* this.bussinessForm = new FormGroup({
      BussinessName: new FormControl(),
      LicenseNum: new FormControl(),
      Status: new FormControl(),
      Capital: new FormControl(),
      MajorDivision: new FormControl(),
      Division: new FormControl(),
      MajorGroup: new FormControl(),
      Group: new FormControl(),
      SubGroup: new FormControl()
    });*/
    this.initForm();
  }

  initForm() {
    this.bussinessForm = this.fb.group({
      cBussinessName: ['', [Validators.compose([Validators.required, Validators.minLength(2),
        Validators.pattern(ET_ALPHABET_WITHSPACE_REGEX)])]],
      cBussinessNameEng: ['', [Validators.compose([Validators.required, Validators.minLength(2),
        Validators.pattern(ALPHABET_WITHSPACE_REGEX)])]],
      cCapital: ['', [Validators.compose([Validators.required, Validators.minLength(2)])]],
      cLicenseNum: ['', [Validators.compose([Validators.required, Validators.minLength(2)])]],
      cStatus: ['0'],
      'Catagory': new FormGroup({
        MajorDivision: new FormControl(),
        Division: new FormControl(),
        MajorGroup: new FormControl(),
        Group: new FormControl(),
        SubGroup: new FormControl()
      })

    });
  }

  ngOnInit() {
    this.loadingIndicator = true;
    let Bussinessta: any = [];
    this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
    this.InvestorId = this.route.snapshot.params['InvestorId'];
    localStorage.setItem('Tin',"0016233161");
    this.Tin = localStorage.getItem('Tin');
   // this.bussinessService.getRegistrationByTin(this.Tin).subscribe(
    //  result => {
    //    this.bussinessForm.patchValue({
     //    cBussinessName: result.BusinessNameAmh,
     //     cBussinessNameEng: result.BusinessName,
      //    cCapital: result.PaidUpCapital});
      //  this.loadingIndicator = false;
     // }
   // );
    this.bussinessService.getRegistrationByInvestorId(this.InvestorId).subscribe(
      result => {
        if (result.LegalStatus === '1') {
          this.BussinessNeng = result.FirstNameEng + ' ' + result.FatherNameEng + ' ' + result.GrandNameEng;
          this.BussinessN = result.FirstName + ' ' + result.FatherName + ' ' + result.GrandName;
        } else {
          this.BussinessN = result.FirstName;
          this.BussinessNeng = result.FirstNameEng;
        }
        this.bussinessForm.patchValue({

          cBussinessName: this.BussinessN,
          cBussinessNameEng: this.BussinessNeng,
          cCapital: result.PaidCapital});
        this.loadingIndicator = false;
      }
    );
    STATUS.forEach(pair => {
      Bussinessta = {'Id': pair.Id.toString(), 'Desc': pair.Description};
      this.bussinessStatus.push(Bussinessta);
      console.log(pair);
    });
    this.bussinessService.getMajorDivisionByInvestorId(this.InvestorId).subscribe(result => {
        this.MajorDivisionList = result;
      }
      );

    this.catagoryservice.getDivision().subscribe(result => {
        this.DivisionList = result;
      }
    );

    this.catagoryservice.getMajorGroup().subscribe(result => {
        this.MajorGroupList = result;
      }
    );

    this.catagoryservice.getGroup().subscribe(result => {
        this.GroupList = result;
      }
    );
    this.catagoryservice.getsubGroup().subscribe(
      result => {
        this.SubGroupList = result;
      }
    );

  }
  filterDivision(id: number) {
    if (!id) {
      return;
    }
   this.filterDivisionList = this.DivisionList.filter((item) => {return item.Parent === id;
      }
    );
  }

  filterMajorGroup(id: number) {
    if (!id) {
      return;
    }
    this.filterMajorGroupList = this.MajorGroupList.filter((item) => {return item.Parent === id;
      }
    );
  }

  filterGroup(id: number) {
    if (!id) {
      return;
    }
    this.filterGroupList = this.GroupList.filter((item) => {return item.Parent === id;
      }
    );
  }

  filterSubGroup(id: number) {
    if (!id) {
      return;
    }
    this.filterSubGroupList = this.SubGroupList.filter((item) => {return item.Parent === id;
      }
    );
  }

  onSubmit() {
    if (!this.bussinessForm.valid) {
       return;
    }
    this.loadingIndicator = true;
     this.bussinessService.saveBussiness(this.getEditedbussiness()).subscribe((bussiness: BussinessModel) => {
       localStorage.setItem('BussinesId', bussiness.ID.toString());
       this.SaveCatagory();
       this.saveComplete();
       });

  }

  private saveComplete() {
    this.loadingIndicator = false;
    this.toastr.success('Record saved successfully!');
  }
  private getEditedbussiness(): BussinessModel {
    this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
    this.InvestorId = this.route.snapshot.params['InvestorId'];
    const formModel = this.bussinessForm.value;
    return {
      OwnerTIN: this.Tin,
      ServiceApplicationId: this.ServiceApplicationId,
      InvestorId: this.InvestorId,
      MainGuid: '00000000-0000-0000-0000-000000000000',
      TradeNameAmh: formModel.cBussinessName,
      TradesName: formModel.cBussinessNameEng,
      LicenceNumber: formModel.cLicenseNum,
      Capital: formModel.cCapital,
      Status: formModel.cStatus
    };
  }

  private getCatagory(): BussinessCatagory {
    this.bussinessCatagory = this.bussinessForm.get('Catagory').value;
    this.bussinessCatagory.BusinessId = localStorage.getItem('BussinesId');
    return this.bussinessCatagory;
  }

  private SaveCatagory() {
    this.bussinessService.saveBussinessLicense(this.getCatagory()).subscribe((bussinessLicense: BussinessCatagory) => {
    });
  }
  back() {
    this.router.navigate(['/bussiness/searchregistration']);
  }
  /* MajorDivision: formModel.Catagory.MajorDivision,
    Division: formModel.Catagory.Division,
    MajorGroup: formModel.Catagory.MajorGroup,
    Group: formModel.Catagory.Group,
    SubGroup: formModel.Catagory.SubGroup*/
  get BussinessName() {
    return this.bussinessForm.get('cBussinessName');
  }

  get BussinessNameEng() {
    return this.bussinessForm.get('cBussinessNameEng');
  }
  get LicenseNum() {
    return this.bussinessForm.get('cLicenseNum');
  }

  get Capital() {
    return this.bussinessForm.get('cCapital');
  }
  get Status() {
    return this.bussinessForm.get('cStatus');
  }
}
