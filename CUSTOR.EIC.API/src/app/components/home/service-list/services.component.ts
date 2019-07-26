import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServiceModel} from '../../../model/Service.model';
import {CustomerServicesService} from '../customer-service.service';
import {Utilities} from '../../../../@custor/helpers/utilities';
import {ToastrService} from 'ngx-toastr';
import {fadeInOut} from '../../../../@custor/services/animations';
import {Router} from "@angular/router";
import {CUSTOMER_SERVICE} from '../../../const/consts';
import {CustomerService} from '../../../model/lookupData';
@Component({
  selector: 'app-service-list',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [fadeInOut]
})
export class ServiceListComponent implements OnInit {
  selectedCustomerService: ServiceModel;
  customerServices: ServiceModel[];
  services: CustomerService[] = [];
  loadingIndicator: boolean;

  constructor(private custService: CustomerServicesService,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.getServices('am');
  }
  getServices(currentLang) {
    this.loadingIndicator = true;
    let service: CustomerService = new CustomerService();
    CUSTOMER_SERVICE.forEach(ser => {
      service = {'Id': ser.ServiceId.toString(), 'Title': (currentLang === 'et' ? ser.Title : ser.TitleEnglish),
                'Desc': ser.Desc
                };
      this.services.push(service);
      // console.log(pair);
    });
  }
  // getServices() {
  //   this.loadingIndicator = true;
  //   this.custService.getServices2()
  //     .subscribe(result => {
  //         // // console.log (result);
  //         this.customerServices = result;
  //         // console.log(this.customerServices);
  //       },
  //       error => {
  //         this.toastr.error(`Error: "${Utilities.getHttpResponseMessage(error)}"`);
  //       });
  //   this.loadingIndicator = false;
  // }

  goServiceDetail(title: string, id: any) {
    localStorage.setItem('title', title);
    this.router.navigate(['/requirement/' + id])

  }
}
