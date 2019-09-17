import {AfterContentChecked, AfterContentInit, AfterViewChecked, Component, Inject, OnInit} from '@angular/core';
import {AccountService} from '../../../../@custor/services/security/account.service';
import {ServiceApplicationModel} from '../../../model/ServiceApplication.model';
import {ServiceApplicationService} from '../../../Services/service-application.service';
import {NotificationService} from '../../../Services/notification.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {ServiceService} from '../../../Services/service.service';
import {ServiceModel} from '../../../model/Service.model';
import {ActivatedRoute} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ApplicationStatusEnum} from "../../../enum/enums";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, AfterContentChecked, AfterContentInit {
  userName: string;
  investorName: string;
  UserId: string;
  notificationForm: FormGroup;
  InvestorId: any;
  private ServiceApplicationId: any;
  templateMessage = 'Message';
  private allServices: ServiceModel[];
  public applicationStatusEnum = ApplicationStatusEnum;

  constructor(
    public accountService: AccountService,
    public notificationService: NotificationService,
    public fb: FormBuilder,
    public toast: ToastrService,
    public route: ActivatedRoute,
    private serviceService: ServiceService,
    private dialogRef: MatDialogRef<NotificationComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    public serviceApplicationService: ServiceApplicationService) {
    this.ServiceApplicationId = data.ServiceApplicationId;
  }

  ngOnInit() {

    // this.ServiceId = this.route.snapshot.params['ServiceId'];
    // this.InvestorId = this.route.snapshot.params['InvestorId'];
    // this.workFlowId = this.route.snapshot.params['workFlowId'];
    // this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
    this.userName = this.accountService.currentUser.FullName;
    // this.getServiceApplication(this.ServiceApplicationId);
    this.initForm();
    this.getAllService();

  }

  getServiceApplication(id: any) {
    this.serviceApplicationService.getServiceApplicationWithInvestor(id)
      .subscribe((result: ServiceApplicationModel) => {
        this.investorName = result.Investor.InvestorNameEng;
        // this.ServiceApplicationId = result.ServiceApplicationId;
        this.UserId = result.Investor.UserId;
        console.log(result.Investor.UserId);
        console.log(this.UserId);

        this.InvestorId = result.InvestorId;
        this.templateMessage = 'Dear ' +
          this.investorName +
          ', We have already  received  your application request for ' +
          this.getServiceName(result.ServiceId) + ' ' +
          '(case number ' + this.ServiceApplicationId + ').' +
          ' Your Application has been reviewed by our officer  ';
        this.notificationForm.patchValue({
          ToUserId: this.UserId,
          UserId: this.UserId,
          ServiceApplicationId: this.ServiceApplicationId,
          Message: this.templateMessage,
        });
        console.log(this.notificationForm.value);
      });
  }

  initForm() {
    this.notificationForm = this.fb.group({
      Subject: 'EIC Notification',
      UserId: this.UserId,
      ServiceApplicationId: this.ServiceApplicationId,
      CurrentStatus: '',
      Message: '',
      ToUserId: this.UserId,
      FromUserId: this.accountService.currentUser.FullName

    });
  }

  sendMessage() {
    this.notificationService.create(this.notificationForm.value)
      .subscribe(result => {
        // console.log(result);
        this.toast.success('message has been sent', 'Message');
      });
  }

  getAllService() {
    this.serviceService.getAll()
      .subscribe(result => {
        this.allServices = result;
      });
  }


  getServiceName(serviceId: any): any {
    for (const services of this.allServices) {
      if (services.ServiceId === serviceId) {
        return services.NameEnglish;
      }
    }
    return null;
  }

  ngAfterViewChecked(): void {

  }

  ngAfterContentChecked(): void {
    // console.log("notifications")
    // this.getServiceApplication(this.ServiceApplicationId);

  }

  ngAfterContentInit(): void {
    this.getServiceApplication(this.ServiceApplicationId);

  }


}
