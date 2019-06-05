import {Component, OnInit} from '@angular/core';
import {ServiceapplicationService} from "../../setting/services-tabs/serviceApplication/serviceapplication.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ErrorMessage} from "@custor/services/errMessageService";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-service-confirmation',
  templateUrl: './service-confirmation.component.html',
  styleUrls: ['./service-confirmation.component.scss']
})
export class ServiceConfirmationComponent implements OnInit {
  public ServiceApplicationId: any;
  public confirm = true;

  constructor(public serviceApplicationsServices: ServiceapplicationService,
              public router: Router,
              private errMsg: ErrorMessage,
              private toastr: ToastrService,
              public route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
  }

  submitApplication() {
    this.serviceApplicationsServices.finalForApprovalServiceApplications(
      this.ServiceApplicationId)
      .subscribe(result => {
        this.confirm = true;
        // console.log(result);
        this.toastr.success('Application is submitted successfully.' +
          ' We will verify your application and submitted documents ' +
          'and notify you for any actions required');
      });

  }

  back() {
    window.history.back();
  }
}
