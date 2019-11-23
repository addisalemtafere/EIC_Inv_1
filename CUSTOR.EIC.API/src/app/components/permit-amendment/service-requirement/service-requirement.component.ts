import { Component, OnInit } from '@angular/core';
import { ServicePrerequisiteService } from '../../setting/services-tabs/serviceprerequistie/servicePrerequisite.service';
import { ServicePrerequisite } from '../../../model/service-prerequisite';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProjectModel } from '../../../model/project.model';
import { ProjectProfileService } from '../../../Services/project-profile.service';
import { DataSharingService } from '../../../Services/data-sharing.service';
import { FormOfOwnership, ServiceTypes } from "@custor/const/consts";
import { ServiceApplicationService } from "../service/service-application.service";
@Component({
  selector: 'app-service-requirement',
  templateUrl: './service-requirement.component.html',
  styleUrls: ['./service-requirement.component.scss']
})
export class ServiceRequirementComponent implements OnInit {
  serviceListPre: ServicePrerequisite[];
  projectList: ProjectModel[];
  public serviceDetail: ProjectModel;
  public checkLists: ServicePrerequisite[];
  title: string;serviceId: any;
  projectId: any;existingServiceApplication: any;
  serviceList:any;
  serviceApplicationId: any;
  amendment = ServiceTypes[4].ServiceId;
  constructor(public servicePrerequisiteService: ServicePrerequisiteService,
    public router: Router,
    private dataSharing: DataSharingService,
    private serviceApplicationApiService: ServiceApplicationService,
    public projectServices: ProjectProfileService,
    public route: ActivatedRoute) {
    this.projectId = this.route.snapshot.params.projectId;
    this.serviceId = this.route.snapshot.params.serviceId;
    this.serviceApplicationId = this.route.snapshot.params.serviceApplicationId;
  }


  ngOnInit() {
    this.title = "title";
    
    if (this.serviceId && this.serviceId != 0) {
      this.getUpdatedList();
    }
    else {
      this.getPrerequisiteByServiceId(this.amendment);
    }
  }
  getUpdatedList() {
    this.serviceApplicationApiService.getAddedServiceList(this.projectId, this.serviceApplicationId).subscribe(result => {
      console.log(result)
      if (result != null) {
        this.serviceList = result;
        console.log(this.serviceList == null)
      }
      else {
      }
    });
  }
  getPrerequisiteByServiceId(id) {
    this.servicePrerequisiteService
      .servicePrerequisiteByServiceId(id)
      .subscribe(result => {
        this.checkLists = result;
      });
  }
  continue() {


  }

  info() {
    this.router.navigate(['/requirement', this.amendment]);
  }

  back() {
    window.history.back();
  }
  start() {
    console.log(this.dataSharing.steeperIndex.next(1))

  }

}
