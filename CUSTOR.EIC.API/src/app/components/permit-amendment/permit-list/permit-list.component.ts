import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationService } from '@custor/services/configuration.service';
import { ProjectService } from '../service/project.service';
import { MatSnackBar, MatTableDataSource } from '@angular/material';
import {  ServiceTypes } from '@custor/const/consts';
import { ServiceApplicationService } from "../service/service-application.service";
import { Router } from '@angular/router';
import { ToastRef } from 'ngx-toastr';
@Component({
  selector: 'app-permit-list',
  templateUrl: './permit-list.component.html',
  styleUrls: ['./permit-list.component.scss']
})
export class PermitListComponent implements OnInit {
  displayedColumns = [
    'No', 'ProjectName','Action'
  ];
  permitList : any;
  existingServiceApplication;
  dataSource : any;
  AllowCascading = true;
  currentLang : string;
  InvestorId : any
  serviceApplicationId:any;
  amendment = ServiceTypes[4].ServiceId;
  constructor(private configService: ConfigurationService,
    private projectService: ProjectService,
    private router: Router,
    private serviceApplicationApiService: ServiceApplicationService,
    public route: ActivatedRoute) { 
    this.currentLang = this.configService.language;
    this.InvestorId = localStorage.getItem('InvestorId');
    console.log(this.InvestorId )
    console.log(this.InvestorId)
  }

  ngOnInit() {
    this.getPermitList(this.InvestorId);
  }
  getPermitList(investorId){
    console.log(investorId)
    this.projectService.getPermitListData(investorId).subscribe(res => {
      console.log(res);
      if (res == null) {
        alert("no record found")
      }
      else{
        this.permitList = res;
        this.dataSource = new MatTableDataSource(this.permitList);
      }
    })
  }
  onEdit(projectId){
    this.serviceApplicationApiService.CheckProjectServiceApplicationFromApi(projectId, this.amendment)
      .subscribe(result => {
        console.log(result)
        if (result != null) {
          this.existingServiceApplication = result;
          console.log(this.existingServiceApplication)
          if (this.existingServiceApplication.CurrentStatusId == 44446 ){
            alert("You have already submitted an amendment request, wait until you here the response")
            return;
          }
          this.serviceApplicationId = this.existingServiceApplication.ServiceApplicationId;
        }
        else {
          this.serviceApplicationId = 0;
        }
        this.router.navigate(['permit-amendment/amend-project/', projectId , this.serviceApplicationId]);
      });
    console.log(this.serviceApplicationId)
  }
  goToSync(){
    this.router.navigate(['permit-amendment/syncFusion']);
  }

}
