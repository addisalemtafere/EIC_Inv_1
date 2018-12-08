import {Component, OnInit} from '@angular/core';
import {ProjectInputService} from '../../../../Services/project-input.service';
import {ProjectInputModel} from '../../../../model/ProjectInput.model';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-project-raw-material-list',
  templateUrl: './project-raw-material-list.component.html',
  styleUrls: ['./project-raw-material-list.component.scss']
})
export class ProjectRawMaterialListComponent implements OnInit {
  public rawMaterialList: ProjectInputModel[];
  public plannedRawMaterialList: ProjectInputModel;
  private ProjectId: any;

  constructor(private inputService: ProjectInputService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.ProjectId = this.route.snapshot.params['ProjectId'];

    this.getInputAfterCare();
    this.getPlannedInput();
  }

  getInputAfterCare() {
    this.inputService.getAll()
      .subscribe(result => {
        this.rawMaterialList = result;
      });
  }

  getPlannedInput() {
    this.inputService.getAll()
      .subscribe(result => {
        this.plannedRawMaterialList = result[0];
      });
  }

}
