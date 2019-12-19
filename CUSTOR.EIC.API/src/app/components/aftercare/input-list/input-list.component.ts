import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AftercareService } from '../service/aftercare.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-input-list',
  templateUrl: './input-list.component.html',
  styleUrls: ['./input-list.component.scss']
})
export class InputListComponent implements OnInit {
  projectId: any;
  inputList: any;
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
    this.getInputList(this.projectId);
  }
  getInputList(projectId){
    console.log(projectId)
    this.aftercareService.getRequirementList(projectId).subscribe(res => {
      this.inputList = res;
      console.log(res);
      this.dataSource = new MatTableDataSource(this.inputList);
    })
  }
  onEdit(ProjectRequirementId) {
    console.log(ProjectRequirementId)
    this.router.navigate(['aftercare/input/edit/', this.projectId, ProjectRequirementId]);
  }
  add() {
    this.router.navigate(['aftercare/input/edit/', this.projectId, 0]);
  }
  viewOriginal() {
    this.router.navigate(['aftercare/input/edit/', this.projectId, 0, 0]);
  }

}
