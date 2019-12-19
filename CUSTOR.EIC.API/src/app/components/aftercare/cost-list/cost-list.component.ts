import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AftercareService } from '../service/aftercare.service';
import { MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-cost-list',
  templateUrl: './cost-list.component.html',
  styleUrls: ['./cost-list.component.scss']
})
export class CostListComponent implements OnInit {
  projectId: any;
  costList: any;
  dataSource: any;
  displayedColumns = [
    'No', 'Date', 'Action'
  ];
  constructor(public activatedRoute: ActivatedRoute,
    private aftercareService: AftercareService,
    private router: Router) {
    this.projectId = this.activatedRoute.snapshot.params.projectId;
     }

  ngOnInit() {
    this.getCostList(this.projectId);
  }
  getCostList(projectId){
    this.aftercareService.getCostList(projectId).subscribe(res => {
      this.costList = res;
      console.log(res);
      this.dataSource = new MatTableDataSource(this.costList);
    })
  }
  onEdit(projectCostId) {
    console.log(projectCostId)
    this.router.navigate(['aftercare/cost/edit/', this.projectId, projectCostId]);
  }
  add() {
    this.router.navigate(['aftercare/cost/edit/', this.projectId, 0]);
  }
  viewOriginal() {
    this.router.navigate(['aftercare/cost/edit/', this.projectId, 0, 0]);
  }
}
