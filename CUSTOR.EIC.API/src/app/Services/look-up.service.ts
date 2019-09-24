import {Injectable} from '@angular/core';
import {ErrorMessage} from '@custor/services/errMessageService';
import {AppConfiguration} from '../config/appconfig';
import {BaseService} from './Base.service';
import {Lookup} from '../model/lookupData';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {LookupsModel} from '../model/lookups';
import { ConfigurationService } from '@custor/services/configuration.service';
@Injectable({
  providedIn: 'root'
})
export class LookUpService extends BaseService<Lookup> {
  constructor(
    protected http: HttpClient,
    protected appConfig: AppConfiguration,
    private config: ConfigurationService,
    protected  errMsg: ErrorMessage) {
    super(http, appConfig.urls.url('InvestorTitle'), errMsg);
  }
  private readonly _allcountries: string = 'api/Nationalities';
  get allCountryUrl() { return this.config.baseUrl + this._allcountries; }
  getLookupByParentId(id, lang): Observable<LookupsModel[]> {
    return this.httpClient.get<LookupsModel[]>(this.appConfig.urls.url('lookupByParentId', id, lang)).pipe(
      map(result => {
        return result;
      }),
      catchError(this.errMsg.parseObservableResponseError));
  }
  getLookup(): Observable<LookupsModel[]> {
    return this.httpClient.get<LookupsModel[]>(this.appConfig.urls.url('lookup')).pipe(
      map(result => {
        return result;
      }),
      catchError(this.errMsg.parseObservableResponseError));
  }
  getLookupByParentIdandCode(id, code, code1): Observable<LookupsModel[]> {
    return this.httpClient.get<LookupsModel[]>(this.appConfig.urls.url('ByParentIdandByCode', id, code, code1)).pipe(
      map(result => {
        return result;
      }),
      catchError(this.errMsg.parseObservableResponseError));
  }
  // getAllLookup(): Observable<LookupsModel[]> {
  //   return this.httpClient.get<LookupsModel[]>(this.appConfig.urls.url('lookup')).pipe(
  //     map(result => {
  //       return result;
  //     }),
  //     catchError(this.errMsg.parseObservableResponseError));
  // }
  getAllCountry(lang: string): Observable<any> {
    const endpointUrl = `${this.allCountryUrl}/${lang}`;
    return this.httpClient.get<any[]>(endpointUrl).pipe(
      map(result => {
        return result;
      }));
  }
}
