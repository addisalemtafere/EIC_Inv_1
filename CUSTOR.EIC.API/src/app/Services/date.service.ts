
import {throwError as observableThrowError, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfigurationService} from "@custor/services/configuration.service";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DateService {
  url = 'api/EthiopianDate';
  private ethipoianDate: any;

  constructor(private httpClient: HttpClient,
              private config: ConfigurationService,
  ) {
  }

  getEthiopianDateNow(): Observable<any> {
    const endpointUrl = this.config.baseUrl + `${this.url}`;
    return this.httpClient.get<any>(endpointUrl)
      .pipe(map(ethidate => this.ethipoianDate = ethidate),
        catchError(err => observableThrowError(err || 'Server error')));
  }
}
