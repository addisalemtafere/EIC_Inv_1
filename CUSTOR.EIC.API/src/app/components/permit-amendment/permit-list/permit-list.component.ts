import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationService } from '@custor/services/configuration.service';
import { ProjectService } from '../service/project.service';
import { MatSnackBar, MatTableDataSource } from '@angular/material';
import {  ServiceTypes } from '@custor/const/consts';
import { ServiceApplicationService } from "../service/service-application.service";
import { Router } from '@angular/router';
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
  investorId : any
  serviceApplicationId:any;
  amendment = ServiceTypes[4].ServiceId;
  constructor(private configService: ConfigurationService,
    private projectService: ProjectService,
    private router: Router,
    private serviceApplicationApiService: ServiceApplicationService,
    public route: ActivatedRoute) { 
    this.currentLang = this.configService.language;
  }

  ngOnInit() {
    this.investorId = 2188;
    this.getPermitList(this.investorId);
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
          this.serviceApplicationId = this.existingServiceApplication.ServiceApplicationId;
        }
        else {
          this.serviceApplicationId = 0;
        }
        this.router.navigate(['permit-amendment/amend-project/', projectId , this.serviceApplicationId]);
      });
    console.log(this.serviceApplicationId)
  }

}
