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
    private readonly _newManagersListUrl = "api/FAssociate/NewManagersList";
    private readonly _newManagerUrl= "api/FAssociate/NewManagerById";
    private readonly _managerAuditUrl = "api/FAssociate/ManagerAuditByInvestorId"
    private readonly _managerUrl = "api/FAssociate/ManagerByInvestorId";
    private readonly _managerByAssociateIdUrl = "api/FAssociate/ManagerByAssociateId";
    private readonly _managerAuditByAssociateIdUrl = "api/FAssociate/ManagerAuditByAssociateId";
    private readonly _saveManagerDataUrl= "api/FAssociate/SaveManager";
    private readonly _updateManagerDataUrl= "api/FAssociate/UpdateManager";
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
    get newManagersListUrl(){
        return this.config.baseUrl + this._newManagersListUrl;
    }
    get newManagerUrl(){
        return this.config.baseUrl + this._newManagerUrl;

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
    get saveManagerDataUrl(){
        return this.config.baseUrl + this._saveManagerDataUrl;
    }
    get updateManagerDataUrl(){
        return this.config.baseUrl + this._updateManagerDataUrl;
    }
    getNewManagerById(id:number){
        var endPointUrl = `${this.newManagerUrl}/${id}`;
        return this.httpClient.get(endPointUrl);
    }
    getAssociateAuditListByInvestorId(investorId: number) {
        var endPointUrl = `${this.managersAuditListUrl}/${investorId}`;
        return this.httpClient.get(endPointUrl);
    }
    getAssociateListByInvestorId(investorId: number) {
        var endPointUrl = `${this.managersListUrl}/${investorId}`;
        return this.httpClient.get(endPointUrl);
    }
    getNewAssociateListByInvestorId(investorId:number, serviceApplicationId){
        var endPointUrl = `${this.newManagersListUrl}/${investorId}/${serviceApplicationId}`;
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
    saveManagerData(data:any){
        const endpointUrl = `${this.saveManagerDataUrl}`;
        return this.httpClient.post(endpointUrl, data);
    }
    updateManagerData(data:any){
        const endpointUrl = `${this.updateManagerDataUrl}`;
        return this.httpClient.put(endpointUrl, data);  
    }
}