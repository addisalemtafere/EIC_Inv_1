import {Component, OnInit, ViewChild} from '@angular/core';
import {DataSharingService} from '../../Services/data-sharing.service';
import {FormService} from '@custor/validation/custom/form';
import {ProjectProfileService} from '../../Services/project-profile.service';
import {AccountService} from '@custor/services/security/account.service';
import {ServiceService} from '../../Services/service.service';
import {ServiceapplicationService} from '../setting/services-tabs/serviceApplication/serviceapplication.service';
import {ErrorMessage} from '@custor/services/errMessageService';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationService} from '../../Services/notification.service';
import {FormBuilder} from '@angular/forms';
import {ServiceApplicationModel} from '../../model/ServiceApplication.model';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {ApplicationStatusEnum} from "../../enum/enums";

@Component({
  selector: 'app-archive-application',
  templateUrl: './archive-application.component.html',
  styleUrls: ['./archive-application.component.scss']
})
export class ArchiveApplicationComponent implements OnInit {
  public dataSource: MatTableDataSource<ServiceApplicationModel>;
  private serviceApplicationList: ServiceApplicationModel[];

  displayedColumns = [
    'No', 'ServiceName', 'ProjectName', 'currentStatus'
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public loading = false;

  constructor(private projectProfileService: ProjectProfileService,
              private errMsg: ErrorMessage,
              private router: Router,
              private dataSharing: DataSharingService,
              private route: ActivatedRoute,
              private accountService: AccountService,
              private service: ServiceService,
              private formBuilder: FormBuilder,
              private formService: FormService,
              private notifificationService: NotificationService,
              private serviceApplication: ServiceapplicationService) {
  }

  ngOnInit() {
    this.getServiceApplication();
    // this.getAllProject();
  }


  getServiceApplication() {
    // console.log(localStorage.getItem('InvestorId'));
    this.serviceApplication.getServiceApplicationsByInvestorId(localStorage.getItem('InvestorId'))
      .subscribe(result => {
        this.dataSource = new MatTableDataSource<ServiceApplicationModel>(result);
        this.loading = false;
        this.serviceApplicationList = result;
        this.dataSource.paginator = this.paginator;
      }, error => this.errMsg.getError(error));
  }


  deleteProject(id: number) {
    // console.log(id);
    const response = confirm('Do you want to Delete this Project ?');
    if (response === true) {
      this.projectProfileService.delete(id)
        .subscribe(() => {
          this.getServiceApplication();
        });
      return true;
    } else {
      return false;
    }
  }


  projectDetail(id: number) {
    // console.log(this.router.url);
    this.router.navigate(['/service-detail', id]);
    // this.router.navigate(['../detail'], {relativeTo: this.route});
  }


  getClassType(statusId: number) {

    let className;
    switch (statusId) {
      case  ApplicationStatusEnum.approved :
        className = 'Approved'
        break;
      case ApplicationStatusEnum.Completed:
        className = 'Completed'
        break;
      case ApplicationStatusEnum.Drafted:
        className = 'drafted'
        break;
      case ApplicationStatusEnum.Pending:
        className = 'Pending'
        break;
      case ApplicationStatusEnum.Submitted:
        className = 'Submitted'
        break;
    }
    return className;
  }

}
