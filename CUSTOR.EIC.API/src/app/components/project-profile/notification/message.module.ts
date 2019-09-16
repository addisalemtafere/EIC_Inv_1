import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';
import {NotificationComponent} from "./notification.component";
import {RouterModule, Routes} from "@angular/router";
import {LetterComponent} from "../letter/letter.component";

const routes: Routes = [
  {path: '', component: NotificationComponent}
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NotificationComponent],
  exports: [NotificationComponent],
  entryComponents: [NotificationComponent]
})
export class MessageModule {

}
