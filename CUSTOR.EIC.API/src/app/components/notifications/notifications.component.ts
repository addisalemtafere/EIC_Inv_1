import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {NotificationService} from '../../Services/notification.service';
import {DataSharingService} from '../../Services/data-sharing.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {AccountService} from '@custor/services/security/account.service';
import {ServiceService} from '../../Services/service.service';
import {NotificationModel} from '../../model/Notification.model';
import {ErrorMessage} from '@custor/services/errMessageService';
import {FormService} from '@custor/validation/custom/form';
import {Permission} from "../../model/security/permission.model";
import {ServiceapplicationService} from "../setting/services-tabs/serviceApplication/serviceapplication.service";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  public notitficationList: NotificationModel[];
  public subimtedList: any;
  private loading: boolean;
  private notifications: NotificationModel;
  isInvestor: boolean;
  isSubmited: boolean;

  constructor(private    dialogRef: MatDialogRef<NotificationsComponent>,
              private errMsg: ErrorMessage,
              private router: Router,
              private dataSharing: DataSharingService,
              private route: ActivatedRoute,
              private accountService: AccountService,
              private service: ServiceService,
              private formBuilder: FormBuilder,
              private formService: FormService,
              private serviceApplication: ServiceapplicationService,
              private notifificationService: NotificationService) {
  }


  ngOnInit() {
    this.getUserType();
    if (this.isInvestor) {
      this.getAllNotification(this.accountService.currentUser.Id);
      this.isSubmited = false;
    } else if (this.canManageTask) {
      this.isSubmited = true;
      console.log('here')
      this.getAllNotifications();
    } else {
      this.isSubmited = false;
      this.getAllNotificationByUserName(this.accountService.currentUser.UserName);
    }
  }

  get canManageTask() {
    return this.accountService.userHasPermission(Permission.manageTasks);
  }

  getUserType() {
    this.isInvestor = this.accountService.getUserType();
  }

  getAllNotification(investorId: any) {
    this.notifificationService.getAllById(investorId)
      .subscribe(result => {
        this.loading = false;
        this.filterNotification(result);
      }, error => this.errMsg.getError(error));
  }

  getAllNotifications() {
    this.serviceApplication.getServiceAppliactionsSubmited()
      .subscribe(result => {
        console.log(result)
        this.subimtedList = result;
      }, error => this.errMsg.getError(error));
  }

  getAllNotificationByUserName(userName: any) {
    this.notifificationService.CountNotificationByUserName(userName)
      .subscribe(result => {
        this.loading = false;
        this.filterNotification(result);
      }, error => this.errMsg.getError(error));
  }


  filterNotification(notification: NotificationModel[]) {
    // // console.log(notification);
    this.notitficationList = [];
    for (let i = 0; i < notification.length; i++) {
      if (notification[i].isActive === true) {
        this.notitficationList.push(notification[i]);
      }
    }
  }

  show(NotificationId) {
    this.dialogRef.close();

    this.notifificationService.ChangeStatus(NotificationId)
      .subscribe(result => {
        // // console.log(result);
      });
  }

}
