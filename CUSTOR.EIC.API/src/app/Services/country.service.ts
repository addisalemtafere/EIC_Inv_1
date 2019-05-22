import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {AppConfiguration} from '../config/appconfig';
import {HttpClient} from '@angular/common/http';
import {ErrorMessage} from '../../@custor/services/errMessageService';
// import {BaseService} from './Base.service';
import {CountryModel} from "../model/Country";
import {catchError, map} from "rxjs/operators";

@Injectable()
export class CountryService {
  constructor(
    protected httpClient: HttpClient,
    protected appConfig: AppConfiguration,
    protected  errMsg: ErrorMessage) {
  }

  getAllCountry(lang: any): Observable<CountryModel[]> {
    return this.httpClient.get<CountryModel>(this.appConfig.urls.url('Countrys', lang)).pipe(
      map(result => {
        return result;
      }), catchError(this.errMsg.parseObservableResponseError));
  }

  getCountry(InvestorId: any): Observable<CountryModel> {
    return this.httpClient.get<CountryModel>(this.appConfig.urls.url('Country', InvestorId)).pipe(
      map(result => {
        return result;
      }), catchError(this.errMsg.parseObservableResponseError));
  }
}


