import {catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {AppConfiguration} from '../../../../config/appconfig';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ServicePrerequisiteModel} from '../../../../model/service';
import {ErrorMessage} from '../../../../../@custor/services/errMessageService';
import {ServiceModel} from "../../../../model/Service.model";

@Injectable()
export class ServicesService {
  servicesList: ServiceModel[] = [];
  serviceModel: ServiceModel = new ServiceModel();

  //serviceList: ServiceModel[];

  constructor(private httpClient: HttpClient,
              private config: AppConfiguration, private errMsg: ErrorMessage) {
  }

  /*getServicePrerequisiteForExistance(descEng,serviceId): Observable<ServicePrerequisiteModel> {
    return this.httpClient.get<ServicePrerequisiteModel>(this.config.urls.url('service', descEng,serviceId))
      .map(servicePrereq => {
        this.servicePrerequisiteModel = servicePrereq;
        return this.servicePrerequisiteModel;
      })
      .catch(this.errMsg.parseObservableResponseError);
  }*/
  getService(id): Observable<ServiceModel> {
    return this.httpClient.get<ServiceModel>(this.config.urls.url('service', id)).pipe(
      map(servicePrereq => {
        this.serviceModel = servicePrereq;
        return this.serviceModel;
      }),
      catchError(this.errMsg.parseObservableResponseError),);
  }

  getServices(): Observable<ServiceModel[]> {
    return this.httpClient.get<ServiceModel[]>(this.config.urls.url('services')).pipe(
      map(serviceList => {
        this.servicesList = serviceList;
        return this.servicesList;
      }),
      catchError(this.errMsg.parseObservableResponseError),);
  }

  saveService(serviceModel: ServiceModel): Observable<ServiceModel> {

    return this.httpClient.post<ServiceModel>(this.config.urls.url('service'), serviceModel).pipe(
      map(ServicePrereq => {
        this.serviceModel = ServicePrereq;
        return this.serviceModel;
      }),
      catchError(this.errMsg.parseObservableResponseError),);
  }

  deleteService(serviceModel: ServiceModel): Observable<any> {
    return this.httpClient.delete<boolean>(this.config.urls.url('service', serviceModel.ServiceId)).pipe(
      map(result => {
        return result;
      }),
      catchError(this.errMsg.parsePromiseResponseError),);
  }
}
