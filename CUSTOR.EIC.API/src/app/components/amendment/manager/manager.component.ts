import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../service/manager.service';
import { ServiceApplicationService } from "../service/service-application.service";
import { AssociateModel } from "../../../model/associate.model";
import { ServiceTypes } from "@custor/const/consts";
import { ConfigurationService } from '@custor/services/configuration.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NUMERIC_REGEX, ALPHABET_WITHSPACE_REGEX, ET_ALPHABET_WITHSPACE_REGEX } from '../../../const/consts';
import DateTimeFormat = Intl.DateTimeFormat;
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent  {
  //currentLang: string;implements OnInit
  //amendment = ServiceTypes[4].ServiceId;
  //managerForm: FormGroup;
  //constructor(private serviceApplicationApiService: ServiceApplicationService,
  //  private managerService: ManagerService,
  //  private fb: FormBuilder,
  //  private configService: ConfigurationService) {
  //  this.currentLang = this.configService.language;
  //  this.initForm();
  //   }
  //initForm() {
  //  this.managerForm = this.fb.group({

  //    Name: ['', [Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(100),
  //    Validators.pattern(ALPHABET_WITHSPACE_REGEX)])]],
  //    FatherName: ['', [Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(100),
  //    Validators.pattern(ALPHABET_WITHSPACE_REGEX)])]],
  //    GrandFatherName: ['', [Validators.compose([Validators.minLength(2), Validators.maxLength(100),
  //    Validators.pattern(ALPHABET_WITHSPACE_REGEX)])]],
  //    NameAmh: ['', [Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(100),
  //    Validators.pattern(ET_ALPHABET_WITHSPACE_REGEX)])]],
  //    FatherNameAmh: ['', [Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(100),
  //    Validators.pattern(ET_ALPHABET_WITHSPACE_REGEX)])]],
  //    GrandFatherNameAmh: ['', [Validators.compose([Validators.minLength(2), Validators.maxLength(100),
  //    Validators.pattern(ET_ALPHABET_WITHSPACE_REGEX)])]],
  //    Nationality: ['', [Validators.required]],
  //    BirthDate: [DateTimeFormat, [Validators.required]], // Ethiopian
  //    Sex: [0, [Validators.required]],
  //    Title: ['01', [Validators.required]],
  //    Origin: ['0'],
  //    RegionId: ['', [Validators.required]],
  //    ZoneId: ['', [Validators.required]],
  //    WoredaId: ['', [Validators.required]],
  //    KebeleId: ['', [Validators.required]],
  //    MobilePhone: ['', [Validators.required, Validators.pattern(NUMERIC_REGEX), Validators.minLength(10), Validators.maxLength(10)]],
  //    HouseNo: ['', [Validators.required]],
  //    RegularPhone: ['', [Validators.pattern(NUMERIC_REGEX), Validators.minLength(10), Validators.maxLength(10)]],
  //    FaxNo: ['', [Validators.pattern(NUMERIC_REGEX), Validators.minLength(10), Validators.maxLength(10)]],
  //    OtherAddress: [''],
  //    Pobox: [''],
  //    Email: ['', [Validators.email]],
  //    Remark: [''],

  //  });
  //}
  //ngOnInit() {
  //  const id = 2092;
  //  this.checkServiceApplication(id)
  //}
  //checkServiceApplication(investorId) {
  //  this.serviceApplicationApiService.checkServiceApplicationFromApi(investorId, this.amendment)
  //    .subscribe(result => {
  //      if (result) {
  //        this.getManagerFromAudit(investorId);
  //      }
  //    })
  //  this.getManager(investorId);

  //}
  //getManagerFromAudit(investorId){
  //  console.log(investorId)
  //  this.managerService.getManagerAuditByInvestorId(investorId)
  //    .subscribe(result => {
  //      console.log(result);
  //    })
  //}
  //getManager(investorId){
  //  this.managerService.getManagerByInvestorId(investorId)
  //    .subscribe(result => {
  //      console.log(result);
  //    })
  //}
  //get firstName() {
  //  return this.managerForm.get('NameAmh');
  //}

  //get fatherName() {
  //  return this.managerForm.get('FatherNameAmh');
  //}

  //get Title() {
  //  return this.managerForm.get('Title');
  //}

  //get grandName() {
  //  return this.managerForm.get('GrandFatherNameAmh');
  //}

  //get firstNameEng() {
  //  return this.managerForm.get('Name');
  //}

  //get fatherNameEng() {
  //  return this.managerForm.get('FatherName');
  //}

  //get grandNameEng() {
  //  return this.managerForm.get('GrandFatherName');
  //}

  //get birthDate() {
  //  return this.managerForm.get('BirthDate');
  //}

  //get nationality() {
  //  return this.managerForm.get('Nationality');
  //}

  //get gender() {
  //  return this.managerForm.get('Sex');
  //}

  //get Origin() {
  //  return this.managerForm.get('IsEthiopianOrigin');
  //}

  //get Photo() {
  //  return this.managerForm.get('PhotoData');
  //}

  //get region() {
  //  return this.managerForm.get('RegionId');
  //}

  //get zone() {
  //  return this.managerForm.get('ZoneId');
  //}

  //get woreda() {
  //  return this.managerForm.get('WoredaId');
  //}

  //get kebele() {
  //  return this.managerForm.get('KebeleId');
  //}

  //get houseNumber() {
  //  return this.managerForm.get('HouseNo');
  //}

  //get phoneDirect() {
  //  return this.managerForm.get('PhoneDirect');
  //}

  //get TeleNo() {
  //  return this.managerForm.get('RegularPhone');
  //}

  //get MobilePhone() {
  //  return this.managerForm.get('MobilePhone');
  //}

  //get fax() {
  //  return this.managerForm.get('FaxNo');
  //}

  //get pobox() {
  //  return this.managerForm.get('POBox');
  //}


  //get Email() {
  //  return this.managerForm.get('Email');
  //}

  //get houseNo() {
  //  return this.managerForm.get('HouseNo');
  //}

  //// another getter for easy access to form fields
  //get ct() {
  //  return this.managerForm.controls;
  //}

}
