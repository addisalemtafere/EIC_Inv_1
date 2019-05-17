import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {ErrorMessage} from "@custor/services/errMessageService";
import {AppConfiguration} from "../../../../config/appconfig";
import {ApplicationSettingModel} from "../../../../model/ApplicationSetting.Model";

@Injectable({
  providedIn: 'root'
})
export class CurrencySettingService {

  constructor(private httpClient: HttpClient,
              private errMsg: ErrorMessage,
              private appConfig: AppConfiguration) {
  }

  getOneById(id: number): Observable<ApplicationSettingModel> {
    return this.httpClient.get<ApplicationSettingModel>(this.appConfig.urls.url('ApplicationSettings') + '/' + id).pipe(
      catchError(this.errMsg.parseObservableResponseError)
    );
  }
  getAll(): Observable<ApplicationSettingModel[]> {
    return this.httpClient.get<ApplicationSettingModel[]>(this.appConfig.urls.url('ApplicationSettings')).pipe(
      catchError(this.errMsg.parseObservableResponseError)
    );
  }
}
