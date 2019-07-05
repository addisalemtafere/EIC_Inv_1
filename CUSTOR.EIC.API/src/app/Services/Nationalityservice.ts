import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {AppConfiguration} from '../config/appconfig';
import {HttpClient} from '@angular/common/http';
import {ErrorMessage} from '../../@custor/services/errMessageService';
import {NationalityModel} from "../model/address/NationalityModel";
import {catchError, map} from "rxjs/operators";

@Injectable()
export class NationalityService {
  constructor(
    protected httpClient: HttpClient,
    protected appConfig: AppConfiguration,
    protected  errMsg: ErrorMessage) {
  }

  getAllNationality(): Observable<NationalityModel[]> {
    return this.httpClient.get<NationalityModel>(this.appConfig.urls.url('Nationalities')).pipe(
      map(result => {
        return result;
      }), catchError(this.errMsg.parseObservableResponseError));
  }

  getNationality(InvestorId: any): Observable<NationalityModel> {
    return this.httpClient.get<NationalityModel>(this.appConfig.urls.url('National', InvestorId)).pipe(
      map(result => {
        return result;
      }), catchError(this.errMsg.parseObservableResponseError));
  }
}


