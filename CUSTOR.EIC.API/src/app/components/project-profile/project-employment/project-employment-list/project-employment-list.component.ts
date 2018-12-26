import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {ProjectEmploymentService} from '../../../../Services/project-employment.service';
import {ProjectEmploymentModel} from '../../../../model/ProjectEmployment.model';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-project-employment-list',
  templateUrl: './project-employment-list.component.html',
  styleUrls: ['./project-employment-list.component.scss']
})
export class ProjectEmploymentListComponent implements OnInit, AfterContentChecked {
  public employmentList: ProjectEmploymentModel[];
  public plannedEmploymentList: ProjectEmploymentModel;
  private ProjectId: any;

  constructor(public employmentService: ProjectEmploymentService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.ProjectId = this.route.snapshot.params['ProjectId'];
    // console.log(this.ProjectId)
    this.getEmploymentAfterCare();
    this.getPlannedEmployment();
  }

  getEmploymentAfterCare() {
    this.employmentService.getAllActualEmployment(this.ProjectId)
      .subscribe(result => {
        this.employmentList = result;
      });
  }

  getPlannedEmployment() {
    this.employmentService.employmentByProject(this.ProjectId)
      .subscribe(result => {
        this.plannedEmploymentList = result;
      });
  }

  ngAfterContentChecked(): void {

  }
}
