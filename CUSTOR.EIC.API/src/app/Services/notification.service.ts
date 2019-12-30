import {Injectable} from '@angular/core';
import {BaseService} from './Base.service';
import {HttpClient} from '@angular/common/http';
import {ErrorMessage} from '../../@custor/services/errMessageService';
import {AppConfiguration} from '../config/appconfig';
import {NotificationModel} from '../model/Notification.model';
import {Observable} from 'rxjs/internal/Observable';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends BaseService<NotificationModel> {
  // constructor(
  //   protected http: HttpClient,
  //   protected appConfig: AppConfiguration,
  //   protected errMsg: ErrorMessage) {
  //   super(http, appConfig.urls.url('Notification'), errMsg);
  // }

  constructor(
    protected http: HttpClient,
    protected appConfig: AppConfiguration,
    protected errMsg: ErrorMessage) {
    super(http, appConfig.urls.url('Notification'), errMsg);
  }

  ChangeStatus(id: number): Observable<NotificationModel> {
    return this.httpClient.get<NotificationModel>(this.appConfig.urls.url('ChangeStatus') + '/' + id).pipe(
      map((data: any) => data as NotificationModel),
      catchError(this.errMsg.parseObservableResponseError)
    );
  }

  CountNotification(id: number): Observable<any> {
    return this.httpClient.get<any>(this.appConfig.urls.url('CountNotification') + '/' + id).pipe(
      map((data: any) => data as any),
      catchError(this.errMsg.parseObservableResponseError)
    );
  }

  CountNotifications(): Observable<any> {
    return this.httpClient.get<any>(this.appConfig.urls.url('CountNotifications')).pipe(
      map((data: any) => data as any),
      catchError(this.errMsg.parseObservableResponseError)
    );
  }

  CountNotificationByUserName(id: number): Observable<any> {
    return this.httpClient.get<any>(this.appConfig.urls.url('ByUserName') + '/' + id).pipe(
      map((data: any) => data as any),
      catchError(this.errMsg.parseObservableResponseError)
    );
  }

  CountNotificationByUserNames(id: number): Observable<any> {
    return this.httpClient.get<any>(this.appConfig.urls.url('CountNotificationByUserName') + '/' + id).pipe(
      map((data: any) => data as any),
      catchError(this.errMsg.parseObservableResponseError)
    );
  }
}
