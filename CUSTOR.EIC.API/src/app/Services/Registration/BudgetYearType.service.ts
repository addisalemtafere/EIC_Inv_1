import {Injectable} from '@angular/core';
import {ErrorMessage} from '@custor/services/errMessageService';
import {AppConfiguration} from '../../config/appconfig';
import {BaseService} from '../Base.service';
import {BudgetYearType} from '../../model/Registration/BudgetYearType';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class BudgetYearTypeService extends BaseService<BudgetYearType> {

  constructor(
    protected http: HttpClient,
    protected appConfig: AppConfiguration,
    protected  errMsg: ErrorMessage) {
    super(http, appConfig.urls.url('RegistrationTitle'), errMsg);
  }


  getAllBugetYearTypes(): Observable<BudgetYearType[]> {
    return this.httpClient.get<BudgetYearType[]>(this.appConfig.urls.url('GetAllBudgetYearTypes')).pipe(
      map(result => {
        return result;
      }),
      catchError(this.errMsg.parseObservableResponseError));
  }
}
