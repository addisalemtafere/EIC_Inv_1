import {catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {BussinessModel} from '../../model/bussiness/BussinessModel.model';
import {BussinessCatagory} from '../../model/bussiness/BussinessCatagory.model';
import {AppConfiguration} from '../../config/appconfig';
import {ErrorMessage} from '@custor/services/errMessageService';


@Injectable({
  providedIn: 'root'
})
export class BussinessService {
  public  bussinessdata: BussinessModel;
  public  bussinesslicenceData: BussinessCatagory;
  constructor(private httpClient: HttpClient,
  private config: AppConfiguration,
  private errMsg: ErrorMessage) {
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
    return this.httpClient.get(this.config.urls.url('GetRegistrationByTin', Tin)).pipe(
      map(result => {
        return result;
      }), catchError(this.errMsg.parseObservableResponseError));
  }
}
