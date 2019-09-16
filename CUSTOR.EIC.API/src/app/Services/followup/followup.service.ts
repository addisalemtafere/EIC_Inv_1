import {FollowUpModel} from "../../model/followup/followup.model";
import {ErrorMessage} from "@custor/services/errMessageService";
import {AppConfiguration} from "../../../../../CUSTOR.EIC.API/src/app/config/appconfig";
import {BaseService} from "../../../../../CUSTOR.EIC.API/src/app/Services/Base.service";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class FollowupService extends BaseService<FollowUpModel> {
  followups: FollowUpModel;

  constructor(
    protected http: HttpClient,
    protected appConfig: AppConfiguration,
    protected  errMsg: ErrorMessage) {
    super(http, appConfig.urls.url('followup'), errMsg);
  }

}
