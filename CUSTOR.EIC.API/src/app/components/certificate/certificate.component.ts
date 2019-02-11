import {Component, OnInit} from '@angular/core';
import * as html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';
import {CertificateService} from '../../Services/certificate.service';
import {ServiceApplicationModel} from '../../model/ServiceApplication.model';
import {AddressService} from '../../Services/Address/address.service';
import {AddressModel} from '../../model/address/Address.model';
import {ProjectCostModel} from '../../model/ProjectCost.model';
import {ErrorMessage} from '../../../@custor/services/errMessageService';
import {ProjectCostService} from '../../Services/project-cost.service';
import {ProjectOutputService} from '../../Services/project-output.service';
import {InvactivityService} from '../setting/category-tabs/InvActivity/invactivity.service';
import {InvActivityModel} from '../../model/invactivity';
import {MatDialog} from '@angular/material';
import {NotificationComponent} from '../project-profile/notification/notification.component';
import {ProjectProfileService} from '../../Services/project-profile.service';
import {ToastrService} from 'ngx-toastr';
import {ServiceApplicationService} from '../../Services/service-application.service';
import {Lookup} from '../../model/lookupData';
import {ProjectAssociateService} from '../../Services/project-associate.service';
import {ProjectAssociateModel} from '../../model/ProjectAssociate.model';
import {ActivatedRoute} from '@angular/router';

import {DateService} from "../../Services/date.service";

import {ProjectRenewalService} from "../../Services/project-renewal.service";

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit {
  date: any;
  renewedTo: Date;
  formOfOwnerShipDescriptionAmharic: any;
  formOfOwnerShipDescriptionEnglish: any;
  investorDetailList: ServiceApplicationModel;
  investorAddressList: any;
  investmentAddressList: AddressModel;
  projectCost: ProjectCostModel;
  investmentActivity: InvActivityModel;
  exportMarketShare: number;
  ServiceApplicationId: any;
  viewCertificate = false;
  lookup: Lookup;
  projectCostTotal: number;
  projectCostTotalUSD: number;
  public manager: ProjectAssociateModel[];
  public ServiceId: any;
  private InvestorId: any;
  private workFlowId: any;
  public today: Date;
  public dateGc: Date;
  public todayEthioDate: any;
  public dateEc1: Date;
  public dd: Date;
  public dateEthioNextYear: string;
  constructor(public certificateService: CertificateService,
              private projecAssService: ProjectAssociateService,

              public errMsg: ErrorMessage,
              public route: ActivatedRoute,
              public projectService: ProjectProfileService,
              public projectRenewalService: ProjectRenewalService,
              public serviceApplication: ServiceApplicationService,
              public dialog: MatDialog,
              public toast: ToastrService,
              private projectCostService: ProjectCostService,
              public invactivityService: InvactivityService,
              private projectOutputService: ProjectOutputService,
              private addressService: AddressService,
              private dateService: DateService) {
    this.lookup = new Lookup();
  }

  ngOnInit() {
    this.ServiceId = this.route.snapshot.params['ServiceId'];
    this.InvestorId = this.route.snapshot.params['InvestorId'];
    this.workFlowId = this.route.snapshot.params['workFlowId'];
    this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];

    this.getDate();

    this.getEthiopianDate();


    if (this.ServiceApplicationId > 0) {
      this.getServiceApplicationRenewal();
    }
  }

  //no need to come all this data.
  private getServiceApplicationRenewal() {
    this.projectRenewalService
      .getRenewalByServiceApplicationId(this.ServiceApplicationId)
      .subscribe(result => {

        if (result.ProjectRenewal[0] != null && this.ServiceId == 18) {
          this.renewedTo = result.ProjectRenewal[0].RenewedTo;
        }
      }, error => this.errMsg.getError(error));
  }

  getDate() {
    var d = new Date();
    this.today = d;
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    this.dateGc = new Date(year + 1, month, day)


    const today = new Date();
    this.date = today;

  }

  addMessage() {
    this.dialog.open(NotificationComponent);
  }

  generateCertification() {
    // console.log(this.ServiceApplicationId);
    this.getInvestorDetail(this.ServiceApplicationId);
    this.viewCertificate = true;

  }

  generatePDF() {
    const doc = new jsPDF();
    const width = doc.internal.pageSize.width;
    const height = doc.internal.pageSize.height;
    html2canvas(document.getElementById('certificate')).then(function (canvas) {
      const img = canvas.toDataURL('image/png');

      doc.addImage(img, 'JPEG', 5, 5, 200, 287);
      doc.autoPrint();
      const filename = 'certificate.pdf';
      doc.save(filename);
      doc.output('dataurlnewwindow');
    });
  }

  Print() {
    window.print();
  }

  getInvestorDetail(id: any) {
    this.certificateService.getOneById(id)
      .subscribe((result: ServiceApplicationModel) => {
        this.investorDetailList = result;
        this.getInvestmentLocation(this.investorDetailList.ProjectId);
        this.getProjectCost(this.investorDetailList.ProjectId);
        this.getExportPercent(this.investorDetailList.ProjectId);
        // console.log(result);
        // // console.log(this.investorDetailList.Investor.RegionId);
        this.getInvestorAddress(this.investorDetailList.InvestorId);
        this.getManager(this.investorDetailList.ProjectId);
        this.getInvactivity(this.investorDetailList.Project.InvActivityId);
        this.approve();
        if (this.investorDetailList.Investor.FormOfOwnership == 1) {
          this.formOfOwnerShipDescriptionAmharic = 'የሃገር ውስጥ ባለሃብት የኢንቨስትመንት ፈቃድ';
          this.formOfOwnerShipDescriptionEnglish = 'INVESTMENT PERMIT FOR DOMESTIC';
        } else if (this.investorDetailList.Investor.FormOfOwnership == 2) {
          this.formOfOwnerShipDescriptionAmharic = 'የውጭ ሃገር ኢንቨስተር የኢንቨስትመንት ፈቃድ';
          this.formOfOwnerShipDescriptionEnglish = 'INVESTMENT PERMIT FOR FOREIGN INVESTOR';
        } else if (this.investorDetailList.Investor.FormOfOwnership == 3) {
          this.formOfOwnerShipDescriptionAmharic = 'እንደ ሃገር ውስጥ ባለሃብት የኢንቨስትመንት ፈቃድ';
          this.formOfOwnerShipDescriptionEnglish = 'INVESTMENT PERMIT FOR AS OF DOMESTIC';
        } else if (this.investorDetailList.Investor.FormOfOwnership == 4) {
          this.formOfOwnerShipDescriptionAmharic = 'የውጭ ባለሃብት (በቅንጅት) የኢንቨስትመንት ፈቃድ';
          this.formOfOwnerShipDescriptionEnglish = 'INVESTMENT PERMIT FOR JOINT INVESTMENT';
        } else {
          this.formOfOwnerShipDescriptionAmharic = 'የሃገር ውስጥ ባለሃብት የኢንቨስትመንት ፈቃድ';
          this.formOfOwnerShipDescriptionEnglish = 'INVESTMENT PERMIT FOR DOMESTIC';
        }

      });
  }

  getInvestmentLocation(parent: any) {
    this.addressService.getAddress(parent)
      .subscribe((result: AddressModel) => {
        this.investmentAddressList = result;
      }, error => this.errMsg.getError(error));
  }

  getProjectCost(projectId: any) {
    this.projectCostService.getCostByProjectId(projectId)
      .subscribe(result => {
        // console.log(result);
        this.projectCost = result;

        this.projectCostTotalUSD = result.LandCost + result.BuildingCost + result.MachineryCost + result.TransportCost +
          result.OfficeEquipmentCost + result.OtherCapitalCost + result.InitialWorkingCapitalCost;

        this.projectCostTotal = result.LandCostInBirr + result.BuildingCostInBirr + result.MachineryCostInBirr + result.TransportCostInBirr +
          result.OfficeEquipmentCostInBirr + result.OtherCapitalCostInBirr + result.InitialWorkingCapitalCostInBirr;
        // console.log(this.projectCostTotal/result.ExchangeRate);
        // this.projectCostTotalUSD = this.projectCostTotal / result.ExchangeRate;
      });
  }

  getExportPercent(projectId: any) {
    this.projectOutputService.getPOutPutByProject(projectId)
      .subscribe(result => {
        // console.log(result);
        if (result == null) {
          this.exportMarketShare = 0.00;
        } else {
          this.exportMarketShare = result[0].ExportMarketShare;

        }
      });
  }

  getManager(ProjectId: any) {
    this.projecAssService.associateProject(ProjectId)
      .subscribe(result => {
        this.manager = result;
      });

  }

  getInvestorAddress(InvestorId: any) {
    this.addressService.getAddress(InvestorId)
      .subscribe((result: AddressModel) => {
        this.investorAddressList = result;
        // console.log(result);
      }, error => this.errMsg.getError(error));

  }

  getInvactivity(id: any) {
    this.invactivityService.getInvActivity(id)
      .subscribe(result => {
        this.investmentActivity = result;
        // console.log(result);
      });
  }

  private approve() {
    this.lookup.Code = 44449;
    this.serviceApplication.changeApplicationStatus(this.lookup, this.investorDetailList.ServiceApplicationId)
      .subscribe(result => {
        this.toast.success('Project approved successfully ', 'Success');
      });
  }


  private getEthiopianDate() {
    let subscription = this.dateService.getEthiopianDateNow()
      .subscribe(data => {

        this.todayEthioDate = data;
        var d = this.todayEthioDate.split('/').reverse().join('-')
        var d2 = new Date(d);

        var year = d2.getFullYear() + 1;
        var month = d2.getMonth() + 1;
        var day = d2.getDate();
        this.dateEthioNextYear = day + '/' + month + '/' + year;
      });
  }
}
