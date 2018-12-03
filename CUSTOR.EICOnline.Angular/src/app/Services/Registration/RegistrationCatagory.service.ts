import {Injectable, Injector} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {AppConfiguration} from '../../config/appconfig';
import {BaseService} from '../Base.service';
import {ErrorMessage} from '@custor/services/errMessageService';
import {RegistrationCatagory} from '../../model/Registration/RegistrationCatagory';
import {LookupsModel} from '../../model/lookups';
import {AddressModel} from '../../model/address/Address.model';
import {MajorDivision} from '../../model/catagory/MajorDivision.model';
import {RegistrationModel} from '../../model/Registration/RegistrationModel';

;

@Injectable({
  providedIn: 'root'
})
export class RegistrationCatagoryService extends BaseService<RegistrationCatagory> {

  constructor(
    protected http: HttpClient,
    protected appConfig: AppConfiguration,
    protected  errMsg: ErrorMessage) {
    super(http, appConfig.urls.url('registrationCatagory'), errMsg);
  }


  getRegistrationCatagoriesByInvestorId(InvestorId): Observable<RegistrationCatagory[]> {
    return this.httpClient.get<RegistrationCatagory[]>(this.appConfig.urls.url('GetRegistrationCatagoryByInvestorId', InvestorId)).pipe(
      map(result => {
        return result;
      }),
      catchError(this.errMsg.parseObservableResponseError));
  }

  getRegistrationCatagoriesByTin(Tin): Observable<RegistrationCatagory[]> {
    return this.httpClient.get<RegistrationCatagory[]>(this.appConfig.urls.url('GetRegistrationCatagoryByTin', Tin)).pipe(
      map(result => {
        return result;
      }),
      catchError(this.errMsg.parseObservableResponseError));
  }

  /*saveRegistrationCatagory(registrationCatagory: RegistrationCatagory): Observable<RegistrationCatagory> {
    return this.httpClient.post<RegistrationModel>(this.config.urls.url('SaveRegistration'), registrationInfo).pipe(
      map(Reg => {
        console.log(this.registrationMoedl);
        this.registrationMoedl = registrationInfo;
        return this.registrationMoedl;
      }),
      catchError(this.errMsg.parseObservableResponseError));
  }*/

  saveRegistrationCatagory(registrationCatagory: RegistrationCatagory): Observable<RegistrationCatagory> {
      return this.httpClient.post(this.appConfig.urls.url('SaveRegistrationCatagory'), registrationCatagory).pipe(
        catchError(this.errMsg.parseObservableResponseError));
    }

}
