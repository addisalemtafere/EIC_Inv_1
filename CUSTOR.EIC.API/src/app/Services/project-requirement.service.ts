import {Injectable} from '@angular/core';
import {BaseService} from './Base.service';
import {ProjectRequirementModel} from '../model/ProjectRequirement.model';
import {HttpClient} from '@angular/common/http';
import {AppConfiguration} from '../config/appconfig';
import {ErrorMessage} from '../../@custor/services/errMessageService';
import {Observable} from 'rxjs/internal/Observable';
import {catchError} from 'rxjs/operators';
import {ProjectCostModel} from "../model/ProjectCost.model";

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class ProjectRequirementService extends BaseService<ProjectRequirementModel> {
  constructor(protected httpClient: HttpClient,
              protected appConfig: AppConfiguration,
              protected errMsg: ErrorMessage) {
    super(httpClient, appConfig.urls.url('pRequirement'), errMsg);
  }

  RequirementByProject(projectId: any): Observable<ProjectRequirementModel> {
    return this.httpClient.get(this.appConfig.urls.url('requirementByProject') + '/' + projectId).pipe(
      catchError(this.errMsg.parseObservableResponseError));
  }
  getRequirementByProject(projectId: any): Observable<ProjectRequirementModel[]> {
    return this.httpClient.get<ProjectRequirementModel[]>(this.appConfig.urls.url('requirementByProject') + '/' + projectId).pipe(
      catchError(this.errMsg.parseObservableResponseError));
  }

  getAllRequirementByProject(id: any): Observable<ProjectRequirementModel> {
    return this.httpClient.get<ProjectRequirementModel>(this.appConfig.urls.url('ActualCost') + '/' + id).pipe(
      catchError(this.errMsg.parseObservableResponseError)
    );
  }
}
