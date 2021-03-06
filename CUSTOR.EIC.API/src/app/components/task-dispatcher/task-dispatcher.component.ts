import {AuthService} from '@custor/services/security/auth.service';
import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {AccountService} from '@custor/services/security/account.service';
import {User} from '../../model/security/user.model';
import {MatDialogRef, MatTableDataSource} from '@angular/material';
import {TodoTaskService} from '../../Services/todo-task.service';
import {TodoTaskModel} from '../../model/TodoTask.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DataSharingService} from '../../Services/data-sharing.service';
import {ApplicationStatusEnum} from "../../enum/enums";

@Component({
  selector: 'app-task-dispatcher',
  templateUrl: './task-dispatcher.component.html',
  styleUrls: ['./task-dispatcher.component.scss']
})
export class TaskDispatcherComponent implements OnInit, AfterContentChecked {
  userList: User[];
  show = false;
  public dataSource: MatTableDataSource<TodoTaskModel>;
  public loading = true;

  public todoList: TodoTaskModel[];
  todoTaskForm: FormGroup;
  assignedUserId: any;
  public completedTask: number | 0;
  public pendingTask: number | 0;
  private assignedUserName: any;

  constructor(public accountService: AccountService,
              private dialogRef: MatDialogRef<TaskDispatcherComponent>,
              public fb: FormBuilder,
              public authService: AuthService,
              public dataSharingService: DataSharingService,
              public todoTask: TodoTaskService) {
  }

  ngOnInit() {
    this.getAllOfficer();
    this.initForm();
  }

  initForm() {
    this.todoTaskForm = this.fb.group({
      ServiceApplicationId: '',
      AssignedUserId: '',
      AssignedUserName: '',
      CreatedUserId: '',
      CreatedUserName: '',
    });
  }

  getAllOfficer() {
    // alert(this.authService.currentUser.SiteCode)
    this.accountService.getUsers().subscribe(result => {
      // alert(result[0].SiteCode);
      this.filterUser(result)
    });


  }

  filterUser(user: User[]) {
    this.userList = user.filter((item) => {
      return item.SiteCode == this.authService.currentUser.SiteCode;
    });
    console.log(this.userList);
  }

  getUserDetail(user: User) {
    console.log(user);
    console.log(user.FullName);
    // console.log(userId);
    this.assignedUserId = user.Id;
    this.assignedUserName = user.FullName;
    this.getCompleted(user.Id);
    this.getPending(user.Id);
    this.todoTask.getAllById(this.assignedUserId).subscribe(result => {

      this.todoList = result;
      this.loading = false;

    });

  }

  getCompleted(userId: any) {

    this.todoTask.countCompletedTask(userId).subscribe(result => {
      this.completedTask = result;

    });

  }

  getPending(userId: any) {

    this.todoTask.countPendingTask(userId).subscribe(result => {
      this.pendingTask = result;

    });

  }

  assignTask() {
    // console.log(this.todoTaskForm.value);
    this.todoTask.create(this.todoTaskForm.value)
      .subscribe(result => {
        // console.log(result);
        this.dataSharingService.assignTask.next(true);
        setTimeout(() => {
          this.dataSharingService.assignTask.next(false);
        }, 200);
        this.dialogRef.close();

      });
  }

  ngAfterContentChecked(): void {
    this.todoTaskForm.patchValue({
      ServiceApplicationId: localStorage.getItem('ServiceApplicationId'),
      AssignedUserId: this.assignedUserId,
      AssignedUserName: this.assignedUserName,
      CreatedUserId: this.accountService.currentUser.Id,
      CreatedUserName: this.accountService.currentUser.UserName,
    });
  }


  getClassType(statusId: number) {

    let className;
    switch (statusId) {
      case  ApplicationStatusEnum.approved :
        className = 'Approved';
        break;
      case ApplicationStatusEnum.Completed:
        className = 'Completed';
        break;
      case ApplicationStatusEnum.Drafted:
        className = 'drafted';
        break;
      case ApplicationStatusEnum.Pending:
        className = 'Pending';
        break;
      case ApplicationStatusEnum.Submitted:
        className = 'Submitted';
        break;
    }
    return className;
  }


}
