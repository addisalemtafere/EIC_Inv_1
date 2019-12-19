import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AftercareService } from '../service/aftercare.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  projectId: any;
  productList: any;
  dataSource: any;
  displayedColumns = [
    'No', 'ProductName','Date', 'Action'
  ];
  constructor(private activatedRoute: ActivatedRoute,
    private aftercareService: AftercareService,
    private router: Router) { 

    this.projectId = this.activatedRoute.snapshot.params.projectId;
    }

  ngOnInit() {
    this.getProductList(this.projectId);
  }
  getProductList(projectId){
    this.aftercareService.getProductList(projectId).subscribe(res => {
      console.log(res);
      this.productList = res;
     
      this.dataSource = new MatTableDataSource(this.productList);
    })
  }
  onEdit(projectOutputId) {
    console.log(this.projectId)
    console.log(projectOutputId);
  //  return;
    this.router.navigate(['aftercare/product/edit/', this.projectId, projectOutputId]);
  }
  add() {
    this.router.navigate(['aftercare/product/edit/', this.projectId, 0]);
  }
  viewOriginal() {
    this.router.navigate(['aftercare/product/edit/', this.projectId, 0, 0]);
  }

}
