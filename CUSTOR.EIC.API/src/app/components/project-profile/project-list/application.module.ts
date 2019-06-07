import {NgModule} from "@angular/core";
import {SharedModule} from "@custor/modules/shared.module";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {ProjectListComponent} from "./project-list.component";
import {PaginationService} from "@custor/services/pagination.service";
import {TaskDispatcherComponent} from "../../task-dispatcher/task-dispatcher.component";
import {TodoTaskService} from "../../../Services/todo-task.service";

const route: Routes = [
  {path: '', component: ProjectListComponent}
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(route)],
  declarations: [
    ProjectListComponent,
    TaskDispatcherComponent
  ],
  exports: [
    ProjectListComponent,
    RouterModule
  ],
  entryComponents: [TaskDispatcherComponent],

  providers: [PaginationService, TodoTaskService]
})
export class ApplicationModule {

}
