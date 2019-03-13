import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CustomerServicesService } from '../customer-service.service';
import { Utilities } from '../../../../@custor/helpers/utilities';
import { ToastrService } from 'ngx-toastr';
import { fadeInOut } from '../../../../@custor/services/animations';
import { ServicePrerequisite } from '../../../model/service-prerequisite';

@Component({
  selector: 'app-requirement',
  templateUrl: './requirement.component.html',
  styleUrls: ['./requirement.component.scss'],
  animations: [fadeInOut]
})
export class RequirementComponent implements OnInit {
  checkLists: ServicePrerequisite[];
  title: string;
  loadingIndicator: boolean;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute,
    private custService: CustomerServicesService,
    public router: Router,
    public route: ActivatedRoute,
    private toastr: ToastrService) {
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id < 1) {
      return;
    }
    this.getPres(id);
  }

  getPres(id) {
    this.title = localStorage.getItem('title');

    this.loadingIndicator = true;
    console.log("i am here in requirment 1")

    this.custService.getPrerequisites(id)
      .subscribe(result => {
            console.log("i am here in requirment")

        this.checkLists = result;
      },
        error => {
          this.toastr.error(`Error: "${Utilities.getHttpResponseMessage(error)}"`);
        });
    this.loadingIndicator = false;
    console.log("i am here in requirment")

  }

  continue() {
    const ch = +localStorage.getItem('ServiceId');
    this.router.navigate(['/login']);

  }

  back() {
    window.history.back();
  }
}
