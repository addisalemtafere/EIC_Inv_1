import {Injectable} from '@angular/core';
import {BaseService} from "../../../Services/Base.service";
import {HttpClient} from "@angular/common/http";
import {AppConfiguration} from "../../../config/appconfig";
import {ErrorMessage} from "@custor/services/errMessageService";
import {CompanyClearanceModel} from "./CompanyClearance.Model";
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs/internal/Observable';
import {AssociateModel} from '../../../model/associate.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyClearanceService extends BaseService<CompanyClearanceModel> {


  constructor(
    protected http: HttpClient,
    protected appConfig: AppConfiguration,
    protected errMsg: ErrorMessage) {
    super(http, appConfig.urls.url('CompanyClearances'), errMsg);
  }


  getCompanyClearanceByInvestorId(id: number): Observable<CompanyClearanceModel> {
    return this.httpClient.get<CompanyClearanceModel>(this.appConfig.urls.url('CompanyClearanceByInvestorId') + '/' + id).pipe(
      catchError(this.errMsg.parseObservableResponseError));
  }

  saveFinalApprovedName(resource: CompanyClearanceModel): Observable<CompanyClearanceModel> {
    return this.httpClient.put(this.appConfig.urls.url('SaveFinalApprovedName'), resource).pipe(
      catchError(this.errMsg.parseObservableResponseError));
  }

}
