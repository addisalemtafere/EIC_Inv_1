import {Injectable} from '@angular/core';
import {BaseService} from './Base.service';
import {ProjectRenewalModel} from '../model/ProjectRenewal.model';
import {HttpClient} from '@angular/common/http';
import {AppConfiguration} from '../config/appconfig';
import {ErrorMessage} from '@custor/services/errMessageService';
import {Observable} from 'rxjs/internal/Observable';
import {ServiceApplicationModel} from '../model/ServiceApplication.model';
import {ProjectModel} from '../model/project.model';
import {catchError} from 'rxjs/operators';

@Injectable(
  {
  providedIn: 'root'
}
)
export class ProjectRenewalService extends BaseService<ProjectRenewalModel> {
  projectRenewals: ProjectRenewalModel;
  constructor(
    protected http: HttpClient,
    protected appConfig: AppConfiguration,
    protected  errMsg: ErrorMessage) {
    super(http, appConfig.urls.url('projectRenewals'), errMsg);
  }

  getRenewalByServiceApplicationId(id: number): Observable<ServiceApplicationModel> {
    console.log(id);
    return this.httpClient.get<ServiceApplicationModel>(this.appConfig.urls.url('ServiceApplicationWithRenewal') + '/' + id).pipe(
      catchError(this.errMsg.parseObservableResponseError));
  }
  getRenewalByProjectId(id: number): Observable<ProjectRenewalModel[]> {
    return this.httpClient.get<ProjectRenewalModel[]>(this.appConfig.urls.url('projectRenewalsbyId')+ '/' + id).pipe(
      catchError(this.errMsg.parseObservableResponseError));
  }
  getRenewalByServiceAppId(id: number): Observable<ProjectRenewalModel> {
    console.log(id);
    return this.httpClient.get<ProjectRenewalModel>(this.appConfig.urls.url('ServiceAppWithRenewal') + '/' + id).pipe(
      catchError(this.errMsg.parseObservableResponseError));
  }
// this.appConfig.urls.url('ByInvestorId')
}
