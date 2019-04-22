import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigurationService} from '@custor/services/configuration.service';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {AppConfiguration} from '../config/appconfig';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  url = 'api/EthiopianDate';
  urlETH = 'api/Ethiopic';
  private ethipoianDate: any;
  private myEthipoianDate: any;

  constructor(private httpClient: HttpClient,
              protected appConfig: AppConfiguration,
              private config: ConfigurationService,
  ) {
  }

  getEthiopianDateNow(): Observable<any> {
    const endpointUrl = this.config.baseUrl + `${this.url}`;
    return this.httpClient.get<any>(endpointUrl)
      .pipe(map(ethidate => this.ethipoianDate = ethidate),
        catchError(err => Observable.throw(err || 'Server error')));
  }
  getEthiopianDate(d: number, m: number, y: number): Observable<any> {
    // const endpointUrl = this.config.baseUrl + `${this.url.url()}`;
    return this.httpClient.get<any>(this.appConfig.urls.url('ethiodateurl') + '/' + d + '/' + m + '/' + y)
      .pipe(map(ethidate => this.ethipoianDate = ethidate),
        catchError(err => Observable.throw(err || 'Server error')));
  }
}
