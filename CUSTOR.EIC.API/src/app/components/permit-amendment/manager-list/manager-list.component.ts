import { Component, OnInit } from '@angular/core';
import { ServiceApplicationService } from '../service/service-application.service';
import {
  AMENDMENT_STEP,
  ENG_SAVE_SUCCESS_MSG, ENG_UPDATE_SUCCESS_MSG, ENG_NOT_FOUND_MSG,
  ENG_SAVE_ERR_MSG, ENG_UPDATE_ERR_MSG,

  AMH_SAVE_SUCCESS_MSG, AMH_UPDATE_SUCCESS_MSG, AMH_NOT_FOUND_MSG,
  AMH_SAVE_ERR_MSG, AMH_UPDATE_ERR_MSG, ServiceTypes
} from '@custor/const/consts';
import { AssociateModel } from '../../../model/Associate.model'
import { ActivatedRoute } from '@angular/router';
import { ManagerService } from '../../profile-amendment/service/manager.service';
import { MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.scss']
})
export class ManagerListComponent implements OnInit {
  isExistingServiceApplication : any
  existingServiceApplication : any
  serviceApplicationId : any
  managers: any; newManagers :any;
  amendment = ServiceTypes[4].ServiceId;
  InvestorId: any; serviceId: any; projectId: any; previousManagers:any;
  dataSource: MatTableDataSource<AssociateModel>;
  NewDataSource: MatTableDataSource<AssociateModel>;
  displayedColumns = ['No','FullName', 'FullNameEng'];
  newDisplayedColumns = ['No','FullName', 'FullNameEng'];
  constructor(private serviceApplicationApiService: ServiceApplicationService,
    private managerService: ManagerService,
    public route: ActivatedRoute) { 
    this.projectId = this.route.snapshot.params.projectId;
    this.serviceApplicationId = this.route.snapshot.params.serviceApplicationId;
    this.serviceId = this.route.snapshot.params.serviceId;
    this.InvestorId = localStorage.getItem('InvestorId');
    console.log(this.InvestorId);
    if (this.serviceApplicationId == 0) {
      this.checkServiceApplication();
    }
  }

  ngOnInit() {
    this.getManagerList(this.InvestorId);
  }
  checkServiceApplication() {
    this.serviceApplicationApiService.checkServiceApplicationFromApi(this.InvestorId, this.amendment)
      .subscribe(result => {
        console.log(result)
        if (result != null) {
          this.existingServiceApplication = result;
          this.serviceApplicationId = this.existingServiceApplication.ServiceApplicationId;
          this.getNewManagersList(this.InvestorId);
        }
      })
  }
  getNewManagersList(InvestorId){
    this.managerService.getNewAssociateListByInvestorId(InvestorId, this.serviceApplicationId)
      .subscribe(result => {
        this.managers = result;
        console.log(this.managers);
        this.newManagers = true;
        this.NewDataSource = new MatTableDataSource(this.managers);
      })
  }
  getManagerList(InvestorId){
    this.managerService.getAssociateListByInvestorId(InvestorId)
      .subscribe(result => {
        this.managers = result;
        this.previousManagers = true;
        console.log(this.managers)
        this.dataSource = new MatTableDataSource(this.managers);
      })
  }
}
