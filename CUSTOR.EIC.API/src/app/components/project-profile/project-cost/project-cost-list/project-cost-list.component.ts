import {Component, OnInit} from '@angular/core';
import {ProjectCostService} from '../../../../Services/project-cost.service';
import {ProjectCostModel} from '../../../../model/ProjectCost.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-project-cost-list',
  templateUrl: './project-cost-list.component.html',
  styleUrls: ['./project-cost-list.component.scss']
})
export class ProjectCostListComponent implements OnInit {
  public costList: ProjectCostModel[];
  public plannedCost: ProjectCostModel;
  private ProjectId: any;
  private ServiceId: any;
  private InvestorId: any;

  constructor(public projectCostService: ProjectCostService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.ProjectId = this.route.snapshot.params['ProjectId'];
    // this.ProjectId1 = this.route.snapshot.params['projectId'];
    // this.ServiceId = this.route.snapshot.params['ServiceId'];
    // this.InvestorId = this.route.snapshot.params['InvestorId'];
    console.log(this.ProjectId)
    // console.log(this.ProjectId1)
    this.getAllCostByProjectId();
    this.getPlannedCostByProjectId();
  }

  getAllCostByProjectId() {
    this.projectCostService.getAllActualCost(this.ProjectId)
      .subscribe(cost => {
        this.costList = cost;
      });

  }

  getPlannedCostByProjectId() {
    this.projectCostService.getCostByProjectId(this.ProjectId)
      .subscribe(cost => {
        // console.log(cost);
        this.plannedCost = cost;
      });

  }

  edit(costId: any) {
    this.router.navigate(['/project-cost/new', costId]);
  }

  back() {
    window.history.back();
  }
}
