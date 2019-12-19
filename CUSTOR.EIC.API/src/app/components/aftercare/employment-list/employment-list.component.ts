import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AftercareService } from '../service/aftercare.service';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-employment-list',
  templateUrl: './employment-list.component.html',
  styleUrls: ['./employment-list.component.scss']
})
export class EmploymentListComponent implements OnInit {
  projectId : any;
  employmentList : any;
  dataSource : any;
  displayedColumns = [
    'No', 'Date', 'Name', 'Total_Employee','Action'
  ];
  constructor(public activatedRoute: ActivatedRoute,
    private aftercareService: AftercareService,
    private router: Router) { 
    this.projectId = this.activatedRoute.snapshot.params.projectId;
  }

  ngOnInit() {
    this.getEmploymentList(this.projectId);
  }
  getEmploymentList(projectId){
    console.log(projectId)
    this.aftercareService.getEmploymentList(projectId).subscribe(res=>{
      this.employmentList = res;
      console.log(res);
      this.dataSource = new MatTableDataSource(this.employmentList);
    })

  }
  onEdit(projectEmploymentId){
     console.log(projectEmploymentId)
    this.router.navigate(['aftercare/employment/edit/', this.projectId , projectEmploymentId]);
  }
  add(){
    this.router.navigate(['aftercare/employment/edit/', this.projectId, 0]);
  }
  viewOriginal(){
    this.router.navigate(['aftercare/employment/edit/', this.projectId, 0 ,0]);
  }
}
