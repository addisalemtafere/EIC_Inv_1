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
    constructor(
        protected httpClient: HttpClient,
        private config: ConfigurationService,
        injector: Injector) {
        super(httpClient, config, injector);
    }
    get checkApplicationStatusUrl() {
        return this.config.baseUrl + this._checkApplicationStatusUrl;
    }
    checkServiceApplicationFromApi(id, serviceId) {
        const endpointUrl = `${this.checkApplicationStatusUrl}/${id}/${serviceId}`;
        console.log(endpointUrl);
        return this.httpClient.get(endpointUrl);
    }
}