import {Injectable} from '@angular/core';
import {ApplicationSettingModel} from '../model/ApplicationSetting.Model';
import {BaseService} from './Base.service';
import {ErrorMessage} from '@custor/services/errMessageService';
import {AppConfiguration} from '../config/appconfig';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class ApplicationSettingService extends BaseService<ApplicationSettingModel> {

  constructor(
    protected http: HttpClient,
    protected appConfig: AppConfiguration,
    protected  errMsg: ErrorMessage) {
    super(http, appConfig.urls.url('ApplicationSettings'), errMsg);
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
