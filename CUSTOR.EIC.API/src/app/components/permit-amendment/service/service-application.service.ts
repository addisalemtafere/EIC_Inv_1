import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from '../../../../@custor/services/configuration.service';
import { EndpointFactory } from '@custor/services/security/endpoint-factory.service';
@Injectable(
    //{
   // providedIn: 'root'
//}
)
export class ServiceApplicationService extends EndpointFactory {
    private readonly _checkApplicationStatusUrl = "api/ServiceApplications/CheckServiceApplication";
    private readonly _checkProjectApplicationStatusUrl = "api/ServiceApplications/CheckProjectServiceApplication";
    private readonly _serviceLisUrl = "api/ServiceApplications/GetServiceList";
    constructor(
        protected httpClient: HttpClient,
        private config: ConfigurationService,
        injector: Injector) {
        super(httpClient, config, injector);
    }
    get checkApplicationStatusUrl() {
        return this.config.baseUrl + this._checkApplicationStatusUrl;
    }
    get checkProjectApplicationStatusUrl() {
        return this.config.baseUrl + this._checkProjectApplicationStatusUrl;
    }
    get serviceLisUrl() {
        return this.config.baseUrl + this._serviceLisUrl;
    }
    checkServiceApplicationFromApi(id, serviceId) {
        const endpointUrl = `${this.checkApplicationStatusUrl}/${id}/${serviceId}`;
        console.log(endpointUrl);
        return this.httpClient.get(endpointUrl);
    }
    CheckProjectServiceApplicationFromApi(projectId, serviceId) {
        const endpointUrl = `${this.checkProjectApplicationStatusUrl}/${projectId}/${serviceId}`;
        console.log(endpointUrl);
        return this.httpClient.get(endpointUrl);
    }
    getAddedServiceList(projectId, serviceApplicationId){
        const endpointUrl = `${this.serviceLisUrl}/${projectId}/${serviceApplicationId}`;
        console.log(endpointUrl)
        return this.httpClient.get(endpointUrl);
    }
}