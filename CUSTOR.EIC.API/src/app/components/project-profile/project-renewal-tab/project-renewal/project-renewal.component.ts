import {AfterContentChecked, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProjectRenewalService} from '../../../../Services/project-renewal.service';
import {MatPaginator, MatSnackBar, MatTableDataSource} from '@angular/material';
import {DataSharingService} from '../../../../Services/data-sharing.service';
import {ProjectModel} from '../../../../model/project.model';
import {ProjectProfileService} from '../../../../Services/project-profile.service';
import {AccountService} from '@custor/services/security/account.service';
import {ActivatedRoute, Params} from '@angular/router';
import {ErrorMessage} from '@custor/services/errMessageService';
import {ToastrService} from 'ngx-toastr';
import {id} from '@swimlane/ngx-charts/release/utils';
import {ProjectCancellationModel} from '../../../../model/project/ProjectCancellation.model';
import {ProjectRenewalModel} from '../../../../model/ProjectRenewal.model';
import {Utilities} from '@custor/helpers/utilities';

@Component({
  selector: 'app-project-renewal',
  templateUrl: './project-renewal.component.html',
  styleUrls: ['./project-renewal.component.scss']
})
export class ProjectRenewalComponent implements OnInit {
  ColumnsProjectRenewalDetails = ['Renewal Date', 'Renewed From', 'Renewed To', 'Status'];
  @ViewChild(MatPaginator) paginator2: MatPaginator;
  dataSourcetbl: any;
  dateCurrent = new FormControl(new Date());
  dateFrom = new FormControl(new Date());
  dateTo = new FormControl(new Date());
  projectRenewalForm: FormGroup;
  loading = false;
  public projectList: ProjectModel[];
  public projectRenewalDetail: ProjectRenewalModel[];
  public isInvestor: boolean;
  public editMode : boolean;
  private ServiceApplicationId: number;
  private InvestorId: any;
  private approval = false;
  private ServiceId: any;
  private ProjectId: any;
  minDate: Date;
  initMinDate: Date;
  maxDate: Date;
  nextyear: Date;
  fromdate : Date;
  public formErrors = {
  RenewalDate: 'Renewal date is required!',
  RenewedTo: 'Renewal ending date is required and must be greater than the starting date!',
  RenewedFrom: 'Renewal starting date is required!'
};
  public res = false;
  constructor(public fb: FormBuilder,
              public snackbar: MatSnackBar,
              private accountService: AccountService,
              private projetServices: ProjectProfileService,
              public dataSharing: DataSharingService,
              public route: ActivatedRoute,
              public errMsg: ErrorMessage,
              public toastr: ToastrService,
              public projectRenewalService: ProjectRenewalService) {
  }

  ngOnInit() {
    this.ServiceId = this.route.snapshot.params['ServiceId'] || this.route.snapshot.params['serviceId'];
    this.InvestorId = this.route.snapshot.params['InvestorId'] || this.route.snapshot.params['investorId'];
    this.ProjectId = this.route.snapshot.params['ProjectId'] || this.route.snapshot.params['projectId'];
    this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'] || this.route.snapshot.params['serviceApplicationId'];
    this.initForm();
    this.getAllProjects();
    this.getRenewalDetails(this.ProjectId);
    this.isInvestor = this.accountService.getUserType();
    this.route.params
      .subscribe((params: Params) => {
        // console.log(this.ServiceApplicationId);
        if (this.ServiceApplicationId > 1) {
          this.getServiceApplicationRenewal();
        }
        else{
          this.editMode = false;
        }
      });
  }

  initForm() {
    this.projectRenewalForm = this.fb.group({
      RenewalDate: new FormControl({value: this.dateCurrent, disabled: true}),
      RenewedFrom: new FormControl({value: this.dateCurrent, disabled: true}),
      RenewedTo: new FormControl({value: this.nextyear, disabled: true}),
      Remark: new FormControl({value: ''}),
      ProjectId: this.ProjectId,
      InvestorId: this.InvestorId,
      ServiceId: this.ServiceId,
      ServiceApplicationId: this.ServiceApplicationId
    });
  }

  getAllProjects() {
    this.projetServices
      .getProjectOnlyByInvestorId(this.InvestorId)
      .subscribe(result => {
        this.projectList = result;
      });
  }

  onSubmit() {
    const data = this.mapData(this.projectRenewalForm.value);
    if (!this.editMode) {
        this.projectRenewalService
          .create(this.projectRenewalForm.value)
          .subscribe(response => {
            this.toastr.success('Data Saved Successfully!', 'Success');
          });

      setTimeout(() => this.dataSharing.steeperIndex.next(3), 0);
      setTimeout(() => this.dataSharing.currentIndex.next(3), 0);
        } else {
          const id = localStorage.getItem('ProjectRenewalId').toString();
          this.projectRenewalService
            .update(this.projectRenewalForm.value, id)
            .subscribe(result=> {
              this.toastr.success('Data Updated Successfully!', 'Success');
              setTimeout(() => this.dataSharing.steeperIndex.next(3), 0);
              setTimeout(() => this.dataSharing.currentIndex.next(3), 0);
            });
        }
  }
  mapApproval(approve: ProjectRenewalModel): ProjectRenewalModel {
    approve.IsApproved = true;
    return approve;
  }
  mapData(approve: ProjectRenewalModel): ProjectRenewalModel {
    approve.IsApproved = false;
    approve.RenewedFrom = this.fromdate;
    approve.RenewedTo = this.nextyear;
    return approve;
  }
  notification(message: string) {
    this.toastr.success(` Succesfully ${message} Data.!`, 'Success');

    this.loading = false;
    this.snackbar.open(` Succesfully ${message} Data.!`, 'Close', {
      duration: 3000,
    });
  }

  approve() {
    const RenewalData = this.mapApproval(this.projectRenewalForm.value);
    console.log(RenewalData);
    if(this.editMode)
    {
      const id = localStorage.getItem('ProjectRenewalId').toString();
      console.log(id);
      this.projectRenewalService.update(RenewalData, id)
        .subscribe(result => {
          this.toastr.success('Renewal  successfully approved', 'Success');
        });
    } else {
    this.projectRenewalService
      .create(RenewalData)
      .subscribe(result => {
        this.toastr.success('Renewal  successfully approved', 'Success');
      });
    }
      this.dataSharing.steeperIndex.next(3);
  }

  private getServiceApplicationRenewal() {
    this.projectRenewalService
      .getRenewalByServiceApplicationId(this.ServiceApplicationId)
      // .getRenewalByProjectId(this.ProjectId)
      .subscribe(result => {
        console.log(result);
        this.projectRenewalForm.patchValue(result.ProjectRenewal[0]);
        if(result.ProjectRenewal[0] != null)
        {
          this.editMode=true;
          localStorage.setItem('ProjectRenewalId', result.ProjectRenewal[0].ProjectRenewalId.toString());
        }
      }, error => this.errMsg.getError(error));
  }
  setMinDate(minD: Date) {
    this.minDate = minD;
  }
  setMaxDate(value: Date) {
    this.maxDate = value;
  }
  updateDateRange() {
    const today = new Date();
    let mm1, dd1;
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    if (dd < 10) {
      dd1 = '0' + dd;
    }
    if (mm < 10) {
      mm1 = '0' + mm;
    }
    const today1 = mm1 + '/' + dd1 + '/' + yyyy;
    this.initMinDate = new Date(today);
    if (this.projectRenewalForm.value.RenewedFrom !== null) {
      this.minDate = this.projectRenewalForm.value.RenewedFrom;
    }
  }

  public getRenewalDate(d: Date) {
    const day = new Date(d);
    var dd = day.getDate();
    var mm = day.getMonth();
    var yy = day.getFullYear();
    this.nextyear = new Date(yy + 1, mm, dd);
  }

  private getRenewalDetails(ProjectId: any) {
      this.projectRenewalService.getAllById(ProjectId)
        .subscribe(result => {
            this.projectRenewalDetail = result;
            if (!this.projectRenewalDetail) {
              this.toastr.error('No records were found to list', 'Error', {
              });
            } else {
              this.dataSourcetbl = new MatTableDataSource<ProjectRenewalModel>(result);
              this.dataSourcetbl.paginator = this.paginator2;
              this.res = this.checkRenewal(result[0].RenewedTo);
              console.log(this.res);
              localStorage.setItem('ProjectRenewalId', result[0].ProjectRenewalId.toString());
              if (this.res) {
                this.dateFrom.setValue(result[0].RenewedTo);
                this.fromdate = result[0].RenewedTo;
                this.getRenewalDate(result[0].RenewedTo);
                this.dateTo.setValue(this.nextyear);
              } else {
                this.projectRenewalForm.patchValue(result[0]);
              }
            }
          },
          error => {
            this.toastr.error(`Error: "${Utilities.getHttpResponseMessage(error)}"`);
          });

    }
  next() {
    this.dataSharing.steeperIndex.next(3);

  }
  private checkRenewal(RenewedTo: Date) {
    const d = new Date(RenewedTo);
    const today = new Date();
    const y = d.getFullYear();
    const ty = today.getFullYear();
    const res = y - ty;
    console.log(res);
    if (res <= 0 ) {
      return true;
    } else {
      return false;
    }
  }
}
