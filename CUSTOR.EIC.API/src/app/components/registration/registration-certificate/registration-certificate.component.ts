import {AfterViewChecked, Component, OnInit} from '@angular/core';
import * as html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';
import {MatDialog} from '@angular/material';
import {ServiceApplicationModel} from '../../../model/ServiceApplication.model';
import {AddressModel} from '../../../model/address/Address.model';
import {InvActivityModel} from '../../../model/invactivity';
import {ProjectCostModel} from '../../../model/ProjectCost.model';
import {ErrorMessage} from '@custor/services/errMessageService';
import {ProjectAssociateService} from '../../../Services/project-associate.service';
import {CertificateService} from '../../../Services/certificate.service';
import {ProjectProfileService} from '../../../Services/project-profile.service';
import {ServiceApplicationService} from '../../../Services/service-application.service';
import {ProjectCostService} from '../../../Services/project-cost.service';
import {InvactivityService} from '../../setting/category-tabs/InvActivity/invactivity.service';
import {ProjectOutputService} from '../../../Services/project-output.service';
import {AddressService} from '../../../Services/Address/address.service';
import {NotificationComponent} from '../../project-profile/notification/notification.component';
import {Lookup} from '../../../model/lookupData';
import {ActivatedRoute} from '@angular/router';
import {BussinessService} from '../../../Services/bussiness/bussiness.service';
import {ToastrService} from "ngx-toastr";
import {Investor} from '../../../model/investor';
import {AssociateService} from '../../../Services/associate.service';
import {AssociateModel} from '../../../model/associate.model';


@Component({
  selector: 'app-registration-certificate',
  templateUrl: './registration-certificate.component.html',
  styleUrls: ['./registration-certificate.component.scss']
})
export class RegistrationCertificateComponent implements OnInit, AfterViewChecked {
  date: any;
  investorDetailList: ServiceApplicationModel;
  investorAddressList: any;
  investmentAddressList: AddressModel;
  projectCost: ProjectCostModel;
  investmentActivity: InvActivityModel;

  exportMarketShare: number;
  ServiceApplicationId: any;
  viewCertificate = false;
  lookup: Lookup;
  InvestorId: any;
  projectCostTotal: number;
  MajorDivisionList: any;
  //public manager: ProjectAssociateModel[];
  public manager: AssociateModel[];
  investor: Investor;

  constructor(public certificateService: CertificateService,
              private projecAssService: ProjectAssociateService,
              public errMsg: ErrorMessage,
              private associateService: AssociateService,
              public projectService: ProjectProfileService,
              public serviceApplication: ServiceApplicationService,
              public bussnesServ: BussinessService,
              public dialog: MatDialog,
              public toast: ToastrService,
              private projectCostService: ProjectCostService,
              public invactivityService: InvactivityService,
              private projectOutputService: ProjectOutputService,
              public route: ActivatedRoute,
              private addressService: AddressService) {
    this.lookup = new Lookup();
  }

  ngOnInit() {
    this.getDate();
  }

  getDate() {
    const today = new Date();
    this.date = today;
  }

  addMessage() {

    this.dialog.open(NotificationComponent);
  }

  generateCertification() {

    this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
    this.getInvestorDetail(this.ServiceApplicationId);
    this.viewCertificate = true;
    this.approve();
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



  getInvestorDetail(id: any) {
    this.InvestorId = this.route.snapshot.params['InvestorId'];
    this.bussnesServ.getRegistrationCatagory(this.InvestorId).subscribe(result => {
        this.MajorDivisionList = result;
      }
    );
    this.bussnesServ.getRegistrationByInvestorId(this.InvestorId).subscribe(
      result => {
        this.investor = result;
        this.getInvestorAddress(this.InvestorId);
        this.getManager();
      }
    );

    //this.certificateService.getOneById(id)
    // .subscribe((result: ServiceApplicationModel) => {
    // this.investorDetailList = result;
    //this.getInvestmentLocation(this.investorDetailList.ProjectId);
    //this.getProjectCost(this.investorDetailList.ProjectId);
    //this.getExportPercent(this.investorDetailList.ProjectId);
    //// console.log(result);
    //this.getInvestorAddress(this.investorDetailList.InvestorId);
    //this.getManager(this.investorDetailList.ProjectId);
    //this.getInvactivity(this.investorDetailList.Project.InvActivityId);
    // this.approve();
    //});
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
        this.projectCostTotal = result.LandCost + result.BuildingCost + result.MachineryCost + result.TransportCost +
          result.OfficeEquipmentCost + result.OtherCapitalCost + result.InitialWorkingCapitalCost;
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

  getManager() {
    this.InvestorId = this.route.snapshot.params['InvestorId'];
    this.associateService.getAssociateByInvestorId(this.InvestorId)
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
      });
  }

  private approve() {
    this.lookup.Code = 44449;
    const ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
    this.serviceApplication.changeInvestorApplicationStatus(this.lookup, ServiceApplicationId)
      .subscribe(result => {
        this.toast.success('Customer and Commercial Registration approved successfully ', 'Success');
      });
  }

  ngAfterViewChecked() {

  }

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('reg-certificate').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`

      <html>
        <head>
          <title>EIC</title>
          <style>
          .clearfix:after {
  content: "";
  display: table;
  clear: both;
}
  .t-header {
  text-align: left !important;
  text-transform: capitalize !important;
  font-size: 10px !important;
  font-weight: bolder !important;
  color: black;
}

.c-container {
  background-color: white !important;
  border: 1px solid #c4cbcc;
  padding: 5px;
  color: #000000 !important;
  font-family: Nyala !important;
  font-size: 11px !important;
  font-weight: normal !important;
  font-style: normal !important;
 
}
.notice{
 color: #000000 !important;
  font-family: Nyala !important;
  font-size: 12px !important;
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
  padding-right: 5px !important;
}

#sub-header > span {
}

#sub-header > table > tbody > tr > td {
  text-align: left !important;
}
.dta-head {
  border-bottom: 1px dotted rgba(3,16,11,0.76) !important;
   color: #000000 !important;
  font-family: Nyala !important;
  font-size: 12px !important;
  width: 60%;
}
#sub-header > table > tbody > tr > td.dta-head {
  text-align: center !important;

}
.a-header {
  color: #000000 !important;
  font-family: Nyala !important;
  font-size: 11px !important;
  font-weight: bolder !important;
}
.s-head{
  color: #000000 !important;
  font-family: Nyala !important;
  font-size: 12px !important;
  width: 40%;
}
.c-subtitle {
  font-size: 14px;
  /*font-weight: bold;*/
  text-align: center;
  padding: 2px;
}


#project div,
#company div {
  white-space: nowrap;
}
#notices {
  padding: 0px 20px !important;
}
 .value {
 
  border-bottom: 1px dotted rgba(3,16,11,0.76) !important;
  text-transform: capitalize;
  font-size: 12px !important;
  font-family: Nyala !important;
  text-align: center;

}



nobr {
  white-space: nowrap;
}
.caption {
  text-align: left !important;
  text-transform: capitalize !important;
  font-family: Nyala !important;
  font-size: 12px !important;
  font-weight: bolder !important;
  color: black;
}


#sub-header span {
  color: #5D6975;
  text-align: right;
  width: 350px;
  margin-right: 10px;
  display: inline-block;
  font-size: 10px;
}
.row1{
  padding: 2px;
}
.rowlast{
  margin-bottom: 10px;
  margin-top: 25px;
}
.renewDate{
  font-size: 20px;
}
.renewDate {
  font-size: 25px !important;
  font-weight:bold ;
}

          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>
`);
    popupWin.document.close();
  }
}
