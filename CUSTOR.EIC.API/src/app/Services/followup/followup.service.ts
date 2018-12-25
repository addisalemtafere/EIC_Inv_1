import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfiguration} from "../../config/appconfig";
import {FollowUpModel} from "../../model/followup/followup.model";
import {BaseService} from "../Base.service";
import {ErrorMessage} from "@custor/services/errMessageService";

@Injectable({
  providedIn: 'root'
})
export class FollowupService extends BaseService<FollowUpModel>{
followups:FollowUpModel;
  constructor(
    protected http: HttpClient,
    protected appConfig: AppConfiguration,
    protected  errMsg: ErrorMessage) {
    super(http, appConfig.urls.url('followup'), errMsg);
  }

}
