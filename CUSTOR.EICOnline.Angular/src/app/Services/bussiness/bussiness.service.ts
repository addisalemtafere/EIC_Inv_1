import {catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {BussinessModel} from '../../model/bussiness/BussinessModel.model';
import {BussinessCatagory} from '../../model/bussiness/BussinessCatagory.model';
import {AppConfiguration} from '../../config/appconfig';
import {ErrorMessage} from '@custor/services/errMessageService';
import {BussinessBranchModel} from '../../model/bussiness/BussinessBranch.model';


@Injectable({
  providedIn: 'root'
})
export class BussinessService {
  public bussinessdata: BussinessModel;
  public bussinessBranchdata: BussinessModel;
  public bussinesslicenceData: BussinessCatagory;

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
    return this.httpClient.get(this.config.urls.url('RegistrationByTin', Tin)).pipe(
      map(result => {
        return result;
      }), catchError(this.errMsg.parseObservableResponseError));
  }

  getRegistrationBranchByInvestorId(InvestorId: number) {
    return this.httpClient.get(this.config.urls.url('RegistrationBranchByInvestorId', InvestorId)).pipe(
      map(result => {
        return result;
      }), catchError(this.errMsg.parseObservableResponseError));
  }

  saveBussinessBranch(bussinessbranch: BussinessBranchModel): Observable<BussinessBranchModel> {
    return this.httpClient.post<BussinessModel>(this.config.urls.url('SaveBussinessBranch'), bussinessbranch).pipe(
      map(bussinessBranchdata => this.bussinessBranchdata = bussinessBranchdata),
      catchError(this.errMsg.parseObservableResponseError)
    );
  }

  getBussinessBranchByInvestorId(InvestorId: number) {
    return this.httpClient.get(this.config.urls.url('BussinessBranchByInvestorId', InvestorId)).pipe(
      map(result => {
        return result;
      }), catchError(this.errMsg.parseObservableResponseError));
  }

  DeleteBussinessBranchByAddresId(bussinessbranch: BussinessBranchModel) {
    return this.httpClient.post<BussinessModel>(this.config.urls.url('DeleteBussinessBranch'), bussinessbranch).pipe(
      map(result => {
        return result;
      }), catchError(this.errMsg.parseObservableResponseError));
  }

  getMajorDivisionByInvestorId(InvestorId: string) {
    return this.httpClient.get(this.config.urls.url('GetMajorDivisionsByInvestorID', InvestorId)).pipe(
      map(result => {
        return result;
      }), catchError(this.errMsg.parseObservableResponseError));
  }

  getRegistrationByInvestorId(InvestorId: string) {
    return this.httpClient.get(this.config.urls.url('investor', InvestorId)).pipe(
      map(result => {
        return result;
      }), catchError(this.errMsg.parseObservableResponseError));
  }

  getRegistrationCatagory(InvestorId: string) {
    return this.httpClient.get(this.config.urls.url('GetRegistrationCatagory', InvestorId)).pipe(
      map(result => {
        return result;
      }), catchError(this.errMsg.parseObservableResponseError));
  }

  getBusiness(BusinessId: number) {
    return this.httpClient.get(this.config.urls.url('GetBusiness', BusinessId)).pipe(
      map(result => {
        return result;
      }), catchError(this.errMsg.parseObservableResponseError));
  }

  getBussinessMajorCatagory(BussinessId: number) {
    return this.httpClient.get(this.config.urls.url('GetBussinessMajorCatagory', BussinessId)).pipe(
      map(result => {
        return result;
      }), catchError(this.errMsg.parseObservableResponseError));
  }

  getBussinessCatagory(BussinessId: number) {
    return this.httpClient.get(this.config.urls.url('GetBussinessCatagory', BussinessId)).pipe(
      map(result => {
        return result;
      }), catchError(this.errMsg.parseObservableResponseError));
  }
}
