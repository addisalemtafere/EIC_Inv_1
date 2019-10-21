import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from '../../../../@custor/services/configuration.service';
import { EndpointFactory } from '@custor/services/security/endpoint-factory.service';

@Injectable({
    providedIn: 'root'
})
export class ManagerService extends EndpointFactory  {
    private readonly _managersAuditListUrl = "api/FAssociate/ManagerListAudit";
    private readonly _managersListUrl = "api/FAssociate/ManagersList";
    private readonly _managerAuditUrl = "api/FAssociate/ManagerAuditByInvestorId"
    private readonly _managerUrl = "api/FAssociate/ManagerByInvestorId";
    private readonly _managerByAssociateIdUrl = "api/FAssociate/ManagerByAssociateId";
    private readonly _managerAuditByAssociateIdUrl = "api/FAssociate/ManagerAuditByAssociateId";
    constructor(
        protected httpClient: HttpClient,
        private config: ConfigurationService,
        injector: Injector) {
        super(httpClient, config, injector);
    }
    get managersAuditListUrl() {
        return this.config.baseUrl + this._managersAuditListUrl;
    }
    get managersListUrl() {
        return this.config.baseUrl + this._managersListUrl;
    }
    get managerAuditUrl() {
        return this.config.baseUrl + this._managerAuditUrl;
    }
    get managerByAssociateIdUrl(){
        
        return this.config.baseUrl + this._managerByAssociateIdUrl;
    }
    get managerAuditByAssociateIdUrl(){
        
        return this.config.baseUrl + this._managerAuditByAssociateIdUrl;
    }
    get managerUrl() {
        return this.config.baseUrl + this._managerUrl;
    }
    getAssociateAuditListByInvestorId(investorId: number) {
        var endPointUrl = `${this.managersAuditListUrl}/${investorId}`;
        return this.httpClient.get(endPointUrl);
    }
    getAssociateListByInvestorId(investorId: number) {
        var endPointUrl = `${this.managersListUrl}/${investorId}`;
        return this.httpClient.get(endPointUrl);
    }
    getManagerAuditByInvestorId(investorId: number) {
        var endPointUrl = `${this.managerAuditUrl}/${investorId}`;
        return this.httpClient.get(endPointUrl);
    }
    getManagerByInvestorId(investorId: number) {
        var endPointUrl = `${this.managerUrl}/${investorId}`;
        return this.httpClient.get(endPointUrl);
    }
    getManagerAuditByAssociateId(investorId: number) {
        var endPointUrl = `${this.managerAuditByAssociateIdUrl}/${investorId}`;
        return this.httpClient.get(endPointUrl);
    }
    getManagerByAssociateId(investorId: number) {
        var endPointUrl = `${this.managerByAssociateIdUrl}/${investorId}`;
        return this.httpClient.get(endPointUrl);
    }
}