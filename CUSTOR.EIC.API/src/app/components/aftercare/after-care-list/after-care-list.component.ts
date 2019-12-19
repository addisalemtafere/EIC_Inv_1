import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
@Component({
  selector: 'app-after-care-list',
  templateUrl: './after-care-list.component.html',
  styleUrls: ['./after-care-list.component.scss']
})
export class AfterCareListComponent implements OnInit {
  projectId
  constructor(public activatedRoute: ActivatedRoute,
              private router : Router) { 
    this.projectId = this.activatedRoute.snapshot.params.projectId;
  }

  ngOnInit() {
  }
  goToEmploymentList(){
   //alert(projectId)
    this.router.navigate(['aftercare/employment-list', this.projectId]);
  }
  goToProductList(){
    this.router.navigate(['aftercare/product-list', this.projectId]);
  }
  goToInputList(){
    this.router.navigate(['aftercare/input-list', this.projectId]);
  }
  goToCostList(){
    this.router.navigate(['aftercare/cost-list', this.projectId]);
  }

}
