import {Component, OnInit, ViewChild} from '@angular/core';
import { AftercareService } from './service/aftercare.service';
import { MatSnackBar, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-aftercare',
  templateUrl: './aftercare.component.html',
  styleUrls: ['./aftercare.component.scss']
})
export class AfterCareComponent implements OnInit {
  Id :any 
  projectId :any 
  permitList :any;
  dataSource: any;
  displayedColumns = [
    'No', 'ProjectName', 'Action'
  ];
  constructor(private afterCareService: AftercareService, private router: Router) {
  }

  ngOnInit() {
    this.Id = 2032
    this.getPermitList(this.Id);
  }
  onEdit(projectId){
    this.projectId = projectId;
    this.router.navigate(['aftercare/', projectId]);
  }
  getPermitList(investorId) {
    console.log(investorId)
    this.afterCareService.getPermitListData(investorId).subscribe(res => {
      console.log(res);
      if (res == null) {
        alert("no record found")
      }
      else {
        this.permitList = res;
        this.dataSource = new MatTableDataSource(this.permitList);
      }
    })
  }
  getAllNotification(investorId: any) {
  }

}
