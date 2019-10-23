import { Component, OnInit, AfterContentChecked, AfterViewInit, ViewChild } from '@angular/core';
import { NotificationModel } from '../../model/Notification.model';
import { MatPaginator, MatDialogConfig, MatDialog, MatStepper, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorMessage } from '@custor/services/errMessageService';
import { NotificationService } from '../../Services/notification.service';
import { FormBuilder } from '@angular/forms';
import { DataSharingService } from '../../Services/data-sharing.service';
import { FormService } from '@custor/validation/custom/form';
import { AccountService } from '@custor/services/security/account.service';
import { ServiceService } from '../../Services/service.service';
import { Subscription } from 'rxjs';
import { ProjectService } from './service/project.service';
import { NotificationComponent } from "../project-profile/notification/notification.component";
@Component({
  selector: 'app-permit-amendment',
  templateUrl: './permit-amendment.component.html',
  styleUrls: ['./permit-amendment.component.scss']
})
export class PermitAmendmentComponent implements OnInit, AfterViewInit, AfterContentChecked {
  public dataSourceNotitification: MatTableDataSource<NotificationModel>;
  public loading = false;
  private notitficationList: NotificationModel[];
  private subscription: Subscription;
  @ViewChild('stepper') stepper: MatStepper;
  // @ViewChild(MatPaginator) paginator2: MatPaginator;
  public steeperIndex = 0;
  public nextIndex: number;
  private upperLimit: number = 10;
  displayedColumnsNotification = [
    'date', 'subject', 'message'
  ];
  serviceApplicationId : any;
  serviceId : any;
  constructor(private errMsg: ErrorMessage,
    private router: Router,
    private dataSharing: DataSharingService,
    private route: ActivatedRoute,
    private accountService: AccountService,
    private service: ServiceService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    public dialog: MatDialog,
    private formService: FormService,
    private notifificationService: NotificationService) {
    //serviceId
    this.serviceApplicationId = this.activatedRoute.snapshot.params.serviceApplicationId;
    this.serviceId = this.activatedRoute.snapshot.params.serviceId;

  }
  addMessage() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      ServiceApplicationId: this.serviceApplicationId,
    };
    console.log(dialogConfig.data )
    this.dialog.open(NotificationComponent, dialogConfig);
    // this.dialog.open(NotificationComponent);

  }
  ngOnInit() {
    this.getAllNotification(this.accountService.currentUser.Id);
    this.subscription = this.dataSharing.steeperIndex
      .subscribe(index => {

        this.dataSharing.steeperIndex.next(1)
      });
    this.subscription = this.dataSharing.steeperIndex
      .subscribe(index => {
        this.steeperIndex = index;
        this.move(this.steeperIndex);
      });
    this.subscription = this.dataSharing.currentIndex
      .subscribe(index => {
        this.nextIndex = index;
        // this.upperLimit = index;
        // alert("am here" + this.nextIndex)
      });
  }
  start() {
    const index = 1;
    this.stepper.selectedIndex = index;
  }

  move(index: number) {
    this.stepper.selectedIndex = index;
  }
  ngAfterViewInit(): void {
    this.move(this.steeperIndex);

  }
  ngAfterContentChecked() {
    this.subscription = this.dataSharing.steeperIndex
      .subscribe(index => {
        this.steeperIndex = index;
        // // console.log(this.steeperIndex);
        this.move(this.steeperIndex);
      });
    this.subscription = this.dataSharing.currentIndex
      .subscribe(index => {
        this.nextIndex = index;
        // this.upperLimit = index;
        // console.log(index);
      });
  }
  getAllNotification(investorId: any) {
    this.notifificationService.getAllById(investorId)
      .subscribe(result => {
        this.dataSourceNotitification = new MatTableDataSource<NotificationModel>(result);
        this.loading = false;
        this.notitficationList = result;
        // console.log(this.notitficationList);
        // this.dataSourceNotitification.paginator = this.paginator2;
      }, error => this.errMsg.getError(error));
  }
  next() {
    if (this.steeperIndex < this.upperLimit) {
      this.steeperIndex++;
      this.stepper.selectedIndex = this.steeperIndex;
      console.log(this.stepper);
    }
  }
  finish() {
    this.serviceApplicationId = this.activatedRoute.snapshot.params.serviceApplicationId;
    this.projectService.finishProject(this.serviceApplicationId).subscribe(res => {
      console.log(res)
    })
  }
}
