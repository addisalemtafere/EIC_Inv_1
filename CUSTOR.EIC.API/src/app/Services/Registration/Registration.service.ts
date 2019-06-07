import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {AppConfiguration} from '../../config/appconfig';
import {ErrorMessage} from '@custor/services/errMessageService';
import {RegistrationModel} from '../../model/Registration/RegistrationModel';

@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class RegistrationService {
  constructor(private httpClient: HttpClient,
              public appConfig: AppConfiguration,
              private config: AppConfiguration, private errMsg: ErrorMessage) {
  }

  registrationMoedl: RegistrationModel;

  /* getRegistrationByTin(Tin: any): Observable<Registration> {
     return this.httpClient.get<Registration>(this.appConfig.urls.url('GetRegistrationByTin') + '/' + Tin).pipe(
       map((data: any) => data as Registration),
       catchError(this.errMsg.parseObservableResponseError)
     );
   }*/

  getRegistrationByTin(Tin): Observable<RegistrationModel> {
    return this.httpClient.get<RegistrationModel>(this.config.urls.url('GetRegistrationByTin', Tin)).pipe(
      map(registrationInfo => {
        this.registrationMoedl = registrationInfo;
        return this.registrationMoedl;
      }),
      catchError(this.errMsg.parseObservableResponseError));
  }


  saveRegistration(registrationInfo: RegistrationModel): Observable<RegistrationModel> {
    return this.httpClient.post<RegistrationModel>(this.config.urls.url('SaveRegistration'), registrationInfo).pipe(
      map(Reg => {
        // console.log(this.registrationMoedl);
        this.registrationMoedl = registrationInfo;
        return this.registrationMoedl;
      }),
      catchError(this.errMsg.parseObservableResponseError));
  }


  UpdateRegistration(registrationInfo: RegistrationModel): Observable<RegistrationModel> {
    return this.httpClient.post<RegistrationModel>(this.config.urls.url('UpdateRegistration'), registrationInfo).pipe(
      map(Reg => {
        // console.log(this.registrationMoedl);
        this.registrationMoedl = registrationInfo;
        return this.registrationMoedl;
      }),
      catchError(this.errMsg.parseObservableResponseError));
  }

  /*saveRegistrationNew(registration: Registration): Observable<any[]> {
      return this.httpClient.post(this.appConfig.urls.url('SaveRegistration'), registration).pipe(
        catchError(this.errMsg.parseObservableResponseError));
    }*/

}
