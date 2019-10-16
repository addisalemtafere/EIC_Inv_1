import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ConfigurationService} from '@custor/services/configuration.service';
import { ManagerService} from '../service/manager.service';
import { ServiceApplicationService } from "../service/service-application.service";
import { ServiceTypes} from "@custor/const/consts";
import { AssociateModel } from '../../../model/Associate.model'
import { ActivatedRoute, Router } from '@angular/router';
// import { TranslationLoaderService } from '@custor/services/translation-loader.service';
@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.scss']
})
export class ManagerListComponent implements OnInit {
  managers: any = [];
  currentLang:string;
  displayedColumns = ['FullName', 'FullNameEng', 'Actions'];
  newDisplayedColumns = ['FullName', 'FullNameEng', 'Actions'];
  dataSource: MatTableDataSource<AssociateModel>;
  NewDataSource : MatTableDataSource<AssociateModel>;
  amendment = ServiceTypes[4].ServiceId;
  previousManagers = true;
  newManagers = true;
  newManagersList : any;
  loadingIndicator: boolean;
  isExistingServiceApplication : boolean;
  serviceApplicationID : string;
  constructor(
    private serviceApplicationApiService: ServiceApplicationService,
    private managerService: ManagerService,
    private router: Router,
    private route: ActivatedRoute,
    private configService: ConfigurationService)
   {
     this.currentLang = this.configService.language;
    // this.dataSource = new MatTableDataSource();
   }

  ngOnInit() {
    const id = 2092;
    this.checkServiceApplication(id);
  }
 checkServiceApplication(investorId){
     this.serviceApplicationApiService.checkServiceApplicationFromApi(investorId, this.amendment)
      .subscribe(result => {
       if (result) {
          // this.getManagerListFromAudit(investorId)
         this.isExistingServiceApplication = true;
        //  this.serviceApplicationID = "00";
       }
     })
    this.getManagerList(investorId);
    this.getNewManagersList(investorId);
   }
  addNewManager(id) {
    console.log(id)
    if (this.serviceApplicationID) {
      this.router.navigate(['/amendment/manager', this.serviceApplicationID], { relativeTo: this.route });
    } else {
      this.router.navigate(['/amendment/manager', 0], { relativeTo: this.route });
    }
  }
  editManager(data){
    console.log(data.AssociateId);
    this.router.navigate(['/amendment/manager-edit', data.AssociateId], { relativeTo: this.route });
  }
  editNewManager(data){
    console.log(data);
    this.router.navigate(['/amendment/manager', data.id], { relativeTo: this.route });
  }
  confirmDelete(manager){
    console.log(manager)
  }
  DeleteManager(manager){
    console.log(manager)
  }
  
  getManagerList(investorId){
    this.managerService.getAssociateListByInvestorId(investorId)
       .subscribe(result => {
         this.managers = result;
         console.log(this.managers)
         this.dataSource = new MatTableDataSource(this.managers);
       })
   }
  getNewManagersList(investorId){
    this.managerService.getNewAssociateListByInvestorId(investorId)
      .subscribe(result => {
        this.managers = result;
        console.log(this.managers);
        this.newManagers = true;
        this.NewDataSource = new MatTableDataSource(this.managers);
      })
  }
  //  getManagerListFromAudit(investorId){
  //    this.managerService.getAssociateAuditListByInvestorId(investorId)
  //      .subscribe(result => {
  //        console.log(result);
  //         this.previousManagers = true;
  //         this.managers = result;
  //         this.dataSource = new MatTableDataSource(this.managers);
  //         console.log(result);
  //      })
  //  }
}
