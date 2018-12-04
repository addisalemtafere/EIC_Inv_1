import {Component, OnInit} from '@angular/core';
import {ServiceModel} from '../../../model/Service.model';
import {CustomerServicesService} from '../../home/customer-service.service';
import {ToastrService} from 'ngx-toastr';
import {fadeInOut} from '../../../../@custor/services/animations';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ServiceService} from '../../../Services/service.service';
import {DataSharingService} from '../../../Services/data-sharing.service';
import {IncentiveLogService} from '../../../Services/incentive-log.service';
import {IncentiveLogModel} from '../../../model/IncentiveLog.model';
import {AccountService} from '@custor/services/security/account.service';
import {ProjectListModalComponent} from '../../project-list-modal/project-list-modal.component';

@Component({
  selector: 'app-customer-service-list',
  templateUrl: './customerServices.component.html',
  styleUrls: ['./customerServices.component.scss'],
  animations: [fadeInOut]
})
export class CustomerServiceStarterComponent implements OnInit {
  customerServices: ServiceModel[];
  m: IncentiveLogModel;
  loadingIndicator: boolean;


  constructor(private custService: CustomerServicesService,
              public router: Router,
              public dialog: MatDialog,
              public dataSharing: DataSharingService,
              public serviceService: ServiceService,
              public accountService: AccountService,
              public snackbar: MatSnackBar,
              public route: ActivatedRoute,
              private toastr: ToastrService) {
    this.m = new IncentiveLogModel();
  }

  ngOnInit() {
    this.getServices();
  }

  getServices() {
    this.serviceService.getAll()
      .subscribe(result => {
        this.customerServices = result;
      });
  }


  public startService(serviceId: any, title: string) {
    if (localStorage.getItem('InvestorId') !== null) {

      localStorage.setItem('title', title);
      setTimeout(() => this.dataSharing.currentIndex.next(0), 0);

      localStorage.setItem('currentIndex', '0');

      const investorId = +localStorage.getItem('InvestorId');

      switch (serviceId) {
        case 13:
          this.router.navigate(['pro/' + 0 + '/' + 0 + '/' + serviceId + '/' + 0 + '/' + investorId]);
          break;
        // case 18:
        //   this.router.navigate(['/project-renewal/' + serviceId + '/' + investorId + '/' + 0 + '/' + 0 + '/' + 0]);
        //   break;
        // case 19:
        //   this.router.navigate(['/project-cancellation/' + serviceId + '/' + investorId + '/' + 0 + '/' + 0 + '/' + 0]);
        //   break;
        // case 1023:
        //   this.router.navigate(['pro/' + 0 + '/' + 0 + '/' + serviceId + '/' + 0 + '/' + investorId]);
        //   break;
        // case 1027:
        //   this.router.navigate(['/project-substitute/' + serviceId + '/' + investorId + '/' + 0 + '/' + 0 + '/' + 0]);
        //   break;
        // case 1028:
        //   this.router.navigate(['pro/' + 0 + '/' + 0 + '/' + serviceId + '/' + 0 + '/' + investorId]);
        //   break;
        case 1045:
        case 1054:
        case 1046:
        case 1047:
        case 1023:
        case 1236:
        case 18:
        case 19:
        case 1023:
        case 1027:
        case 1028:

          this.router.navigate(['/investor-project-list/' + serviceId]);
          break;
        default:
          this.router.navigate(['/notfound'], {relativeTo: this.route});
          break;

      }
      this.dialog.closeAll();

    } else {
      this.notification('Your Profile Must be completed');
      this.router.navigate(['/investor-tab']);
    }
  }

  notification(message: string) {
    this.snackbar.open(`  ${message} .!`, 'Close', {
      duration: 3000,
    });
  }


  selectProject(serviceId: any) {
    this.dialog.open(ProjectListModalComponent);

  }


  close() {
    window.history.back();
  }

}
