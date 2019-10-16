import { Component, OnInit } from '@angular/core';
import { ServicePrerequisiteService } from '../../setting/services-tabs/serviceprerequistie/servicePrerequisite.service';
import { ServicePrerequisite } from '../../../model/service-prerequisite';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProjectModel } from '../../../model/project.model';
import { ProjectProfileService } from '../../../Services/project-profile.service';
import { DataSharingService } from '../../../Services/data-sharing.service';
import { FormOfOwnership, ServiceTypes } from "@custor/const/consts";
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
  title: string;
  serviceId: any;
  
  amendment = ServiceTypes[4].ServiceId;
  constructor(public servicePrerequisiteService: ServicePrerequisiteService,
    public router: Router,
    private dataSharing: DataSharingService,
    public projectServices: ProjectProfileService,
    public route: ActivatedRoute,) { }

  ngOnInit() {
    this.title = "title";
    this.getPrerequisiteByServiceId(this.amendment);
  }
  getPrerequisiteByServiceId(id){
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
  start(){
    console.log(this.dataSharing.steeperIndex.next(1))
    
  }

}
