// this service use to manage data and wizard navigation of service application
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from '../../../../@custor/services/configuration.service';
import { Observable, of, Subject } from 'rxjs';
import { EndpointFactory } from '@custor/services/security/endpoint-factory.service';
import { ProjectNationalityCompositionModel } from '../../../model/ProjectNationalityComposition.model.';


@Injectable({
    providedIn: 'root'
})
export class ProjectService extends EndpointFactory {
    private readonly _projectUrl = "api/FProjects/getProjectDetail";
    private readonly _projectAuditUrl = "api/FProjects/getProjectAudit";
    private readonly _projectInputUrl = "api/FProjects/getProjectRequirement";
    private readonly _projectInputAuditUrl = "api/FProjects/getProjectRequirementAudit";
    private readonly _projectRawMaterialUrl = "api/FProjects/getProjectRawMaterial";
    private readonly _projectCostUrl = "api/FProjects/getProjectCost";
    private readonly _projectCostAuditUrl = "api/FProjects/getProjectCostAudit";
    private readonly _projectEmploymentUrl = "api/FProjects/getProjectEmployment";
    private readonly _projectEmploymentAuditUrl = "api/FProjects/getProjectEmploymentAudit";
    private readonly _projectSharePercentUrl = "api/FProjects/getProjectSharePercent";
    private readonly _projectSharePercentAuditUrl = "api/FProjects/getProjectSharePercentAudit";
    private readonly _projectOutPutDataUrl = "api/FProjects/getProjectOutPut";
    private readonly _projectOutPutDataAuditUrl = "api/FProjects/getProjectOutPutAudit";
    private readonly _permitListUrl = "api/FProjects/getPermitList"
    private readonly _saveProjectDataUrl = "api/FProjects/saveProjectProfileData"

    constructor(private httpClient: HttpClient,
        private config: ConfigurationService,
        injector: Injector) {
        super(httpClient, config, injector);
    }
    get projectUrl() {
        return this.config.baseUrl + this._projectUrl;
    }
    get projectAuditUrl(){
        return this.config.baseUrl + this._projectAuditUrl;
    }
    get projectInputUrl(){
        return this.config.baseUrl + this._projectInputUrl;
    }
    get projectInputAuditUrl(){
        return this.config.baseUrl + this._projectInputAuditUrl;
    }
    get projectRawMaterialUrl(){
        return this.config.baseUrl + this._projectRawMaterialUrl;
    }
    get projectCostUrl(){
        return this.config.baseUrl + this._projectCostUrl;
    }
    get projectCostAuditUrl(){
        return this.config.baseUrl + this._projectCostAuditUrl;
    }
    get projectEmploymentUrl(){
        return this.config.baseUrl + this._projectEmploymentUrl;
    }
  
    get projectEmploymentAuditUrl(){
        return this.config.baseUrl + this._projectEmploymentAuditUrl;
    }
    get ProjectSharePercentUrl(){
        return this.config.baseUrl + this._projectSharePercentUrl;
    }
    get ProjectSharePercentAuditUrl(){
        return this.config.baseUrl + this._projectSharePercentAuditUrl;
    }
    get getProjectOutPutDataUrl(){
        return this.config.baseUrl + this._projectOutPutDataUrl;
    }
    get getProjectOutPutDataAuditUrl(){
        return this.config.baseUrl + this._projectOutPutDataAuditUrl;
    }
    get getPermitListUrl(){
        return this.config.baseUrl + this._permitListUrl;
    }
    get saveProjectDataUrl(){
        return this.config.baseUrl + this._saveProjectDataUrl;
    }


    getProjectData(projectId) {
        const endpointUrl = `${this.projectUrl}/${projectId}`;
        console.log(endpointUrl);
        return this.httpClient.get(endpointUrl);
    }
     getProjectAuditData(projectId) {
        const endpointUrl = `${this.projectAuditUrl}/${projectId}`;
        return this.httpClient.get(endpointUrl);
    }
    getProjectInputData(projectId){
        const endpointUrl = `${this.projectInputUrl}/${projectId}`;
        return this.httpClient.get(endpointUrl);
    }
    getProjectInputAuditData(projectId){
        const endpointUrl = `${this.projectInputAuditUrl}/${projectId}`;
        return this.httpClient.get(endpointUrl);
    }
    getProjectRawMaterialData(projectId){
        const endpointUrl = `${this.projectRawMaterialUrl}/${projectId}`;
        return this.httpClient.get(endpointUrl);
    }
    getProjectRawMaterialAuditData(projectId){
        const endpointUrl = `${this.projectInputAuditUrl}/${projectId}`;
        return this.httpClient.get(endpointUrl);
    }
    getProjectCostData(projectId){
        const endpointUrl = `${this.projectCostUrl}/${projectId}`;
        return this.httpClient.get(endpointUrl);
    }
    getProjectCostAuditData(projectId){
        const endpointUrl = `${this.projectCostAuditUrl}/${projectId}`;
        return this.httpClient.get(endpointUrl);
    }
    getProjectEmploymentData(projectId){
        const endpointUrl = `${this.projectEmploymentUrl}/${projectId}`;
        return this.httpClient.get(endpointUrl);
    }
    getProjectEmploymentAuditData(projectId){
        const endpointUrl = `${this.projectEmploymentAuditUrl}/${projectId}`;
        return this.httpClient.get(endpointUrl);
    }
    getProjectSharePercentData(projectId){
        const endpointUrl = `${this.ProjectSharePercentUrl}/${projectId}`;
        return this.httpClient.get<ProjectNationalityCompositionModel>(endpointUrl);
    }
    getProjectSharePercentAuditData(projectCompositionId){
        const endpointUrl = `${this.ProjectSharePercentAuditUrl}/${projectCompositionId}`;
        return this.httpClient.get(endpointUrl);
    }
    getProjectOutPutData(projectId){
        const endpointUrl = `${this.getProjectOutPutDataUrl}/${projectId}`;
        return this.httpClient.get<ProjectNationalityCompositionModel>(endpointUrl);
    }
    getProjectOutPutAuditData(projectCompositionId){
        const endpointUrl = `${this.getProjectOutPutDataAuditUrl}/${projectCompositionId}`;
        return this.httpClient.get(endpointUrl);
    }
    getPermitListData(projectId) {
        const endpointUrl = `${this.getPermitListUrl}/${projectId}`;
        return this.httpClient.get(endpointUrl);
    }
    saveProjectData(data: any) {
        const endpointUrl = `${this.saveProjectDataUrl}`;
        return this.httpClient.post(endpointUrl, data);
    }
    // saveProfileData(data: any) {
    //     const endpointUrl = `${this.saveProfileDataUrl}`;
    //     console.log(endpointUrl)
    //     return this.httpClient.post(endpointUrl, data);
    // }
    // updateProfile(data: any) {
    //     const endpointUrl = `${this.updateProfileDataUrl}`;
    //     return this.httpClient.put(endpointUrl, data);
    // }

}
