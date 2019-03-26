import {Component, OnInit} from '@angular/core';
import {ProjectOutputService} from '../../../../Services/project-output.service';
import {ProjectOutputModel} from '../../../../model/ProjectOutput.model';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-project-product-list',
  templateUrl: './project-product-list.component.html',
  styleUrls: ['./project-product-list.component.scss']
})
export class ProjectProductListComponent implements OnInit {
  public productList: ProjectOutputModel[];
  public plannedProductList: ProjectOutputModel;
  private ProjectId: any;

  constructor(public productService: ProjectOutputService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.ProjectId = this.route.snapshot.params['ProjectId'];

    this.getProductAfterCare();
    this.getPlannedProduct();
  }

  getProductAfterCare() {
    this.productService.getPOutActual(this.ProjectId)
      .subscribe(result => {
        this.productList = result;
      });
  }

  getPlannedProduct() {
    this.productService.getPOutPutByProject(this.ProjectId)
      .subscribe(result => {
        this.plannedProductList = result[0];
      });
  }

}
