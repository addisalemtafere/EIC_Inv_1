import {Component, OnInit, ViewChild} from '@angular/core';
import {ServicestepperService} from '../../setting/services-tabs/servicestepper/servicestepper.service';
import {ServiceStepModel} from '../../../model/ServiceStep.model';
import {DataSharingService} from '../../../Services/data-sharing.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectModel} from '../../../model/project.model';
import {ProjectProfileService} from '../../../Services/project-profile.service';
import {ErrorMessage} from '@custor/services/errMessageService';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {BaseComponent} from '../../base-components/base.component';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-aftercare',
  templateUrl: './aftercare.component.html',
  styleUrls: ['./aftercare.component.scss']
})
export class AftercareComponent extends BaseComponent implements OnInit {
  serviceSteps: ServiceStepModel[];
  loading = true;
  projectList: ProjectModel[];
  dataSource: any;
  step = 0;

  displayedColumns = ['No', 'ProjectName', 'Status'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public title: any;
  public projectName: string | null;
  public investorName: string | null;
  private ProjectId: any;

  constructor(public servicestepperService: ServicestepperService,
              public router: Router,
              public route: ActivatedRoute,
              public errMsg: ErrorMessage,
              public alert: ToastrService,
              public projectProfileService: ProjectProfileService,
              public dataSharing: DataSharingService) {
    super();
  }

  ngOnInit() {
    this.ProjectId = this.route.snapshot.params['ProjectId'];
    console.log(this.ProjectId)
    this.getSteps();
    // this.getAllProject();
    this.title = localStorage.getItem('title');
    this.projectName = localStorage.getItem('projectName');
    this.investorName = localStorage.getItem('investorName');
  }

  getSteps() {
    this.servicestepperService.getServiceSteps()
      .subscribe(result => {
        // console.log(result);
        this.serviceSteps = result;
      });
  }

  gotStep() {
    this.step = +localStorage.getItem('afterCareStep');
    if (this.step === 0) {
      this.alert.error('select One of them You want To Update');
    } else {
      let stepIndex;
      switch (this.step) {
        case 8:
          stepIndex = 1;
          setTimeout(() => this.dataSharing.steeperIndex.next(stepIndex), 0);
          // this.router.navigate(['/pro', 0]);
          this.router.navigate(['pro/' + this.ProjectId + '/' + 0 + '/' + 1234 + '/' + 0 + '/' + 0]);

          break;
        case 9:
          stepIndex = 3;
          this.router.navigate(['/project-cost/' + this.ProjectId + '/' + 1234 + '/' + 0]);

          break;
        case 10:
          stepIndex = 4;
          this.router.navigate(['/employment/' + this.ProjectId + '/' + 1234 + '/' + 0]);

          break;
        case 11:
          stepIndex = 2;
          setTimeout(() => this.dataSharing.steeperIndex.next(stepIndex), 0);
          // this.router.navigate(['/pro', 0]);
          this.router.navigate(['pro/' + this.ProjectId + '/' + 0 + '/' + 1234 + '/' + 0 + '/' + 0]);

          break;
        case 12:
          stepIndex = 6;
          this.router.navigate(['/product/' + this.ProjectId + '/' + 1234 + '/' + 0]);

          break;
        case 13:
          stepIndex = 3;
          setTimeout(() => this.dataSharing.steeperIndex.next(stepIndex), 0);
          // this.router.navigate(['/pro', 0]);
          this.router.navigate(['pro/' + this.ProjectId + '/' + 0 + '/' + 1234 + '/' + 0 + '/' + 0]);

          break;
        case 14:
          stepIndex = 5;
          this.router.navigate(['/share/' + this.ProjectId + '/' + 1234 + '/' + 0]);

          break;
        case 18:
          stepIndex = 7;
          setTimeout(() => this.dataSharing.steeperIndex.next(stepIndex), 0);
          // this.router.navigate(['/pro', 0]);
          this.router.navigate(['pro/' + this.ProjectId + '/' + 0 + '/' + 1234 + '/' + 0 + '/' + 0]);

          break;
      }

    }
  }



  view(name: any, step: any) {
    this.title = name;

    localStorage.setItem('afterCareStep', step);
    switch (name) {
      case 'Project cost':
        this.router.navigate(['cost-list/' + this.ProjectId], {relativeTo: this.route});
        break;
      case 'Project Employment':
        this.router.navigate(['employment/' + this.ProjectId], {relativeTo: this.route});
        break;
      case 'project Utility':
        this.router.navigate(['utility/' + this.ProjectId], {relativeTo: this.route});
        break;
      case 'Project OutPut':
        this.router.navigate(['product/' + this.ProjectId], {relativeTo: this.route});
        break;
      case 'Projec Input':
        this.router.navigate(['raw-material/' + this.ProjectId], {relativeTo: this.route});
        break;

      case 'Project Share':
        this.router.navigate(['share/' + this.ProjectId], {relativeTo: this.route});
        break;

      case 'projectStatus':
        this.router.navigate(['project-status/' + this.ProjectId], {relativeTo: this.route});
        break;
      case 'ProjectAddress':
        this.router.navigate(['address/', this.ProjectId]);

        break;
      default:
        this.router.navigate(['notfound']);
        break;
    }

  }

  back() {
    window.history.back();
  }
}
