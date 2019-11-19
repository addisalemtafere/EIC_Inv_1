import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceApplicationService } from "../service/service-application.service";
import { ProjectService } from '../service/project.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-conformation-message',
  templateUrl: './conformation-message.component.html',
  styleUrls: ['./conformation-message.component.scss']
})
export class ConformationMessageComponent implements OnInit {
  serviceApplicationId: any;
  InvestorId: any;
  amendment: any;
  existingServiceApplication: any;
  canManageTask = false;
  constructor(public route: ActivatedRoute,
    private projectService: ProjectService,
    private toaster: ToastrService,
    private router: Router,
    private serviceApplicationApiService: ServiceApplicationService, ) {
    this.serviceApplicationId = this.route.snapshot.params.serviceApplicationId;
    if (this.serviceApplicationId == 0) {
      this.checkServiceApplication();
    }
  }

  ngOnInit() {
  }
  checkServiceApplication() {
    this.serviceApplicationApiService.checkServiceApplicationFromApi(this.InvestorId, this.amendment)
      .subscribe(result => {
        if (result != null) {
          this.existingServiceApplication = result;
          this.serviceApplicationId = this.existingServiceApplication.ServiceApplicationId;
          // this.getUpdatedList();
        }
      });
  }
  submitApplication() {
    this.projectService.finishProject(this.serviceApplicationId).subscribe(res => {
      console.log(res)
      if (res) {
        this.toaster.success("Project Finished")
        this.router.navigate(['permit-amendment']);
      }
    })
  }
}
