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
import {ActivatedRoute, Router} from '@angular/router';
import {DateService} from "../../Services/date.service";
import {ProjectRenewalService} from "../../Services/project-renewal.service";
import {Investor} from "../../model/investor";
import {LookupsService} from "../setting/lookup-tabs/lookups/lookups.service";

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
  public NationalityAmharic: string;
  public NationalityEnglish: string;
  public titleAm: string;
  public titleEn: string;
  public titleManAm: string;
  public titleManEn: string;

  constructor(public certificateService: CertificateService,
              private projecAssService: ProjectAssociateService,
              public errMsg: ErrorMessage,
              public route: ActivatedRoute,
              public projectService: ProjectProfileService,
              public projectRenewalService: ProjectRenewalService,
              public serviceApplication: ServiceApplicationService,
              public dialog: MatDialog,
              public toast: ToastrService,
              public router: Router,
              private lookupsService: LookupsService,
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
        this.getInvestorTitle(this.investorDetailList.Investor.Title)
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
        // if (this.investorDetailList.Investor.FormOfOwnership == 5) {
        //   this.formOfOwnerShipDescriptionAmharic = '__________የተመዘገበ';
        //   this.formOfOwnerShipDescriptionEnglish = 'Registered in __________';
        // }
        // else
        if (this.investorDetailList.Investor.LegalStatus != 1 && this.investorDetailList.Investor.FormOfOwnership != 5) {
          this.NationalityAmharic = 'በኢትዮጵያ የተመዘገበ';
          this.NationalityEnglish = 'Registered in Ethiopia';
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
        this.getManagerTitle(result[0].Associate.Title);
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


  editInvestor() {
    // console.log(this.investors);
    this.router.navigate(['/investor-profile/' + this.InvestorId], {relativeTo: this.route});
  }
  private getInvestorTitle(titleId: number) {
    this.lookupsService.getLookup(titleId)
      .subscribe(result => {
        this.titleAm = result.Amharic;
        this.titleEn = result.English;
      })
  }

  private getManagerTitle(titleId: number) {
    this.lookupsService.getLookup(titleId)
      .subscribe(result => {
        this.titleManAm = result.Amharic;
        this.titleManEn = result.English;
      })
  }

  printTest(): void {
    let printContents, popupWin;
    printContents = document.getElementById('certificate').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`

      <html>
        <head>
          <title>Print tab</title>
          <style>
          .clearfix:after {
  content: "";
  display: table;
  clear: both;
}

.c-container {
  background-color: white !important;
  border: 1px solid #c4cbcc;
  padding: 5px;
  color: #000000 !important;
  font-family: Nyala !important;
  font-size: 12px !important;
  font-weight: normal !important;
  font-style: normal !important;
 
}

header {
  margin-bottom: 1px;
}




#project span {
  color: #5D6975;
  text-align: right;
  width: 52px;
  margin-right: 10px;
  display: inline-block;
  font-size: 12px;
}

#sub-header span {
  color: #5D6975;
  text-align: right;
  width: 40px;
  margin-right: 2px;
  display: inline-block;
  font-size: 12px;
}

#sub-header {
  float: right;
  width: 250px;
  padding-right: 20px !important;
}

#sub-header > span {
}

#sub-header > table > tbody > tr > td {
  text-align: left !important;
}

#sub-header > table > tbody > tr > td.dta-head {
  border-bottom: 1px solid black !important;
}

table > tbody > tr > td.a-header {
  color: #000000 !important;
  font-family: Nyala !important;
  font-size: 12px !important;
  font-weight: normal !important;
  font-style: normal !important;
}



#project div,
#company div {
  white-space: nowrap;
}

table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  margin-bottom: 0px;
}

table tr:nth-child(2n-1) td {
  background: white;
}

table tr > td.t-header, .caption {
  text-align: left !important;
  text-transform: capitalize !important;
  font-size: 10px !important;
  font-weight: bold !important;
}

table tr > td.data {
  border-bottom: 1px solid #CCC8AD !important;
}



table th,
table td {
  text-align: center;
}

table .service,
table .desc {
  text-align: left;
}

table td.unit,
table td.qty,
table td.total {
  font-size: 10px;
}

table td, table th {
  border: none !important;
  padding: 2px;
}

#notices {
  padding: 0px 5px !important;
}

#investmentCapital .value {
  width: 200px;
}

#investmentCapitalEn .value {
  width: 150px;
}

#basic .value {
  width: 200px;
  text-transform: capitalize;
  font-size: 11px !important;
    font-family: Nyala !important;

}
.value{
font-size: 11px !important;
}
#basicEn .value {
  width: 200px;
  text-transform: capitalize;

}

nobr {
  white-space: nowrap;
}

table {
  border: none !important;
  border-spacing: 0px !important;
 
}
#amharic #english {
  display: flex; /* equal height of the children */
}
#investmentLocationAm{
 flex: 4;
}
#investmentLocationEn{
 flex: 1;
}

          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>
`);
    popupWin.document.close();
  }
}
