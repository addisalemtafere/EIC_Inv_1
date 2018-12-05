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
import {ProjectAssociateModel} from '../../../model/ProjectAssociate.model';
import {ActivatedRoute} from '@angular/router';
import {BussinessService} from '../../../Services/bussiness/bussiness.service';
import {MajorDivision} from '../../../model/catagory/MajorDivision.model';
import {ToastrService} from "ngx-toastr";

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
  public manager: ProjectAssociateModel[];

  constructor(public certificateService: CertificateService,
              private projecAssService: ProjectAssociateService,
              public errMsg: ErrorMessage,
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
    this.InvestorId = this.route.snapshot.params['InvestorId'];
    this.bussnesServ.getRegistrationCatagory(this.InvestorId).subscribe(result => {
        this.MajorDivisionList = result;
      }
    );
    this.certificateService.getOneById(id)
      .subscribe((result: ServiceApplicationModel) => {
        this.investorDetailList = result;
        this.getInvestmentLocation(this.investorDetailList.ProjectId);
        this.getProjectCost(this.investorDetailList.ProjectId);
        this.getExportPercent(this.investorDetailList.ProjectId);
        console.log(result);
        this.getInvestorAddress(this.investorDetailList.InvestorId);
        this.getManager(this.investorDetailList.ProjectId);
        this.getInvactivity(this.investorDetailList.Project.InvActivityId);
        this.approve();
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
        console.log(result);
        this.projectCost = result;
        this.projectCostTotal = result.LandCost + result.BuildingCost + result.MachineryCost + result.TransportCost +
          result.OfficeEquipmentCost + result.OtherCapitalCost + result.InitialWorkingCapitalCost;
      });
  }

  getExportPercent(projectId: any) {
    this.projectOutputService.getPOutPutByProject(projectId)
      .subscribe(result => {
        console.log(result);
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
        console.log(result);
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
    this.serviceApplication.changeApplicationStatus(this.lookup, this.investorDetailList.ServiceApplicationId)
      .subscribe(result => {
        this.toast.success('Project approved successfully ', 'Success');
      });
  }

  ngAfterViewChecked() {

  }
}
