import {catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ErrorMessage} from '@custor/services/errMessageService';
import {AppConfiguration} from '../../config/appconfig';
import {BussinessModel} from '../../model/bussiness/BussinessModel.model';
import {BussinessCatagory} from '../../model/bussiness/BussinessCatagory.model';


@Injectable(
  // {
  //   providedIn: 'root'
  // }
)

export class CatagoryService {
  constructor(private httpClient: HttpClient,
              private config: AppConfiguration,
              private errMsg: ErrorMessage) {
  }

  public bussinessdata: BussinessModel;
  public bussinesslicenceData: BussinessCatagory;

  getMajorDivisionByTin(Tin: string) {
    return this.httpClient.get(this.config.urls.url('MajorDivisions', Tin)).pipe(
      map(result => {
        return result;
      }), catchError(this.errMsg.parseObservableResponseError));
  }

  getMajorDivision() {
    return this.httpClient.get(this.config.urls.url('MajorDivisions')).pipe(
      map(result => {
        return result;
      }), catchError(this.errMsg.parseObservableResponseError));
  }

  getDivision() {
    return this.httpClient.get(this.config.urls.url('Divisions')).pipe(
      map(result => {
        return result;
      }), catchError(this.errMsg.parseObservableResponseError));
  }

  getMajorGroup() {
    return this.httpClient.get(this.config.urls.url('MajorGroup')).pipe(
      map(result => {
        return result;
      }), catchError(this.errMsg.parseObservableResponseError));
  }

  getGroup() {
    return this.httpClient.get(this.config.urls.url('Groups')).pipe(
      map(result => {
        return result;
      }), catchError(this.errMsg.parseObservableResponseError));
  }

  getsubGroup() {
    return this.httpClient.get(this.config.urls.url('SubGroups')).pipe(
      map(result => {
        return result;
      }), catchError(this.errMsg.parseObservableResponseError));
  }

  saveBussiness(bussiness: BussinessModel): Observable<BussinessModel> {
    return this.httpClient.post<BussinessModel>(this.config.urls.url('Bussiness'), bussiness).pipe(
      map(bussinessdata => this.bussinessdata = bussinessdata),
      catchError(this.errMsg.parseObservableResponseError)
    );
  }

  saveBussinessLicense(bussinessLicense: BussinessCatagory): Observable<BussinessCatagory> {
    return this.httpClient.post<BussinessCatagory>(this.config.urls.url('SaveBussinessLicense'), bussinessLicense).pipe(
      map(bussinesslicenceData => this.bussinesslicenceData = bussinesslicenceData),
      catchError(this.errMsg.parseObservableResponseError)
    );
  }

  getRegistration() {
    return this.httpClient.get(this.config.urls.url('Registrations')).pipe(
      map(result => {
        return result;
      }), catchError(this.errMsg.parseObservableResponseError));
  }

  getRegistrationByTin(Tin: string) {
    return this.httpClient.get(this.config.urls.url('GetRegistration', Tin)).pipe(
      map(result => {
        return result;
      }), catchError(this.errMsg.parseObservableResponseError));
  }
}
