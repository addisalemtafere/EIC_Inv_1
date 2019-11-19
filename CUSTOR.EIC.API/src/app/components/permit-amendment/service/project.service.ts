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
    private readonly _projectRawMaterialAuditUrl = "api/FProjects/getProjectRawMaterialAudit"
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
    private readonly _saveInputDataUrl = "api/FProjects/saveInputData"
    private readonly _saveRawMaterialDataUrl = "api/FProjects/saveRawMaterialData"
    private readonly _saveCostDataUrlUrl = "api/FProjects/saveCostData"
    private readonly _saveEmploymentDataUrl = "api/FProjects/saveEmploymentData"
    private readonly _saveShareDataUrl = "api/FProjects/saveShareData"
    private readonly _saveOutPutDataUrl = "api/FProjects/saveOutPutData"

    private readonly _updateProjectDataUrl = "api/FProjects/updateProjectProfileData"
    private readonly _updateInputDataUrl = "api/FProjects/updateInputData"
    private readonly _updateRawMaterialUrl = "api/FProjects/updateRawMaterialData"
    private readonly _updateCostDataUrl = "api/FProjects/updateCostData"
    private readonly _updateEmploymentDataUrl = "api/FProjects/updateEmploymentData"
    private readonly _updateShareDataUrl = "api/FProjects/updateShareData"
    private readonly _updateOutPutDataUrl = "api/FProjects/updateOutPutData"


    private readonly _finishServiceApplicationUrl = "api/FProjects/finishServiceApplication"
    private readonly _completeServiceApplicationUrl = "api/FProjects/completeServiceApplication"

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
    get projectRawMaterialAuditUrl() {
        return this.config.baseUrl + this._projectRawMaterialAuditUrl;

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
    get saveInputDataUrl(){
        return this.config.baseUrl + this._saveInputDataUrl;
    }
    get saveOutPutDataUrl(){
        return this.config.baseUrl + this._saveOutPutDataUrl;
    }
    get saveRawMaterialDataUrl(){
        return this.config.baseUrl + this._saveRawMaterialDataUrl;

    }
    get saveCostDataUrl(){
        return this.config.baseUrl + this._saveCostDataUrlUrl;

    }
    get saveEmploymentDataUrl(){
        return this.config.baseUrl + this._saveEmploymentDataUrl;

    }
    get saveShareDataUrl(){
        return this.config.baseUrl + this._saveShareDataUrl;

    }
    get updateProjectDataUrl(){
        return this.config.baseUrl + this._updateProjectDataUrl;

    }
    get updateRawMaterialUrl(){
        return this.config.baseUrl + this._updateRawMaterialUrl;

    }
    get updateShareDataUrl(){
        return this.config.baseUrl + this._updateShareDataUrl;

    }
    get updateEmploymentDataUrl(){
        return this.config.baseUrl + this._updateEmploymentDataUrl;
        
    }
    get updateOutPutDataUrl(){
        return this.config.baseUrl + this._updateOutPutDataUrl;

    }
    get updateInputDataUrl(){
        return this.config.baseUrl + this._updateInputDataUrl;

    }
    get updateCostDataUrl(){
        return this.config.baseUrl + this._updateCostDataUrl;

    }
    get finishServiceApplicationUrl(){
        return this.config.baseUrl + this._finishServiceApplicationUrl;

    }
    get completeProjectServiceApplicationUrl(){
        return this.config.baseUrl + this._completeServiceApplicationUrl;

    }


    getProjectData(projectId) {
        const endpointUrl = `${this.projectUrl}/${projectId}`;
        console.log(endpointUrl);
        return this.httpClient.get(endpointUrl);
    }
    getProjectAuditData(projectId, serviceApplicationId) {
        const endpointUrl = `${this.projectAuditUrl}/${projectId}/${serviceApplicationId}`;
        return this.httpClient.get(endpointUrl);
    }
    getProjectInputData(projectId){
        const endpointUrl = `${this.projectInputUrl}/${projectId}`;
        return this.httpClient.get(endpointUrl);
    }
    getProjectInputAuditData(projectRequirementId, serviceApplicationId){
        const endpointUrl = `${this.projectInputAuditUrl}/${projectRequirementId}/${serviceApplicationId}`;
        return this.httpClient.get(endpointUrl);
    }
    getProjectRawMaterialData(projectId){
        const endpointUrl = `${this.projectRawMaterialUrl}/${projectId}`;
        return this.httpClient.get(endpointUrl);
    }
    getProjectRawMaterialAuditData(projectRequirmentId, serviceApplicationId){
        const endpointUrl = `${this.projectRawMaterialAuditUrl}/${projectRequirmentId}/${serviceApplicationId}`;
        return this.httpClient.get(endpointUrl);
    }
    getProjectCostData(projectId){
        const endpointUrl = `${this.projectCostUrl}/${projectId}`;
        return this.httpClient.get(endpointUrl);
    }
    getProjectCostAuditData(projectId, serviceApplicationId){
        const endpointUrl = `${this.projectCostAuditUrl}/${projectId}/${serviceApplicationId}`;
        return this.httpClient.get(endpointUrl);
    }
    getProjectEmploymentData(projectId){
        const endpointUrl = `${this.projectEmploymentUrl}/${projectId}`;
        return this.httpClient.get(endpointUrl);
    }
    getProjectEmploymentAuditData(projectId, serviceApplicationId){
        const endpointUrl = `${this.projectEmploymentAuditUrl}/${projectId}/${serviceApplicationId}`;
        return this.httpClient.get(endpointUrl);
    }
    getProjectSharePercentData(projectId){
        const endpointUrl = `${this.ProjectSharePercentUrl}/${projectId}`;
        return this.httpClient.get<ProjectNationalityCompositionModel>(endpointUrl);
    }
    getProjectSharePercentAuditData(projectCompositionId,serviceApplicationId){
        const endpointUrl = `${this.ProjectSharePercentAuditUrl}/${projectCompositionId}/${serviceApplicationId}`;
        return this.httpClient.get(endpointUrl);
    }
    getProjectOutPutData(projectId){
        const endpointUrl = `${this.getProjectOutPutDataUrl}/${projectId}`;
        return this.httpClient.get<ProjectNationalityCompositionModel>(endpointUrl);
    }
    getProjectOutPutAuditData(ProjectOutputId, serviceApplicationId){
        const endpointUrl = `${this.getProjectOutPutDataAuditUrl}/${ProjectOutputId}/${serviceApplicationId}`;
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
    saveInputData(data: any) {
        const endpointUrl = `${this.saveInputDataUrl}`;
        return this.httpClient.post(endpointUrl, data);
    }
    saveOutPutData(data: any) {
        const endpointUrl = `${this.saveOutPutDataUrl}`;
        return this.httpClient.post(endpointUrl, data);
    }
    saveRawMaterialData(data:any){
        const endpointUrl = `${this.saveRawMaterialDataUrl}`;
        return this.httpClient.post(endpointUrl, data);
    }
    saveCostData(data: any) {
        const endpointUrl = `${this.saveCostDataUrl}`;
        return this.httpClient.post(endpointUrl, data);
    }
    saveEmploymentData(data: any) {
        const endpointUrl = `${this.saveEmploymentDataUrl}`;
        return this.httpClient.post(endpointUrl, data);
    }
    saveShareData(data: any) {
        const endpointUrl = `${this.saveShareDataUrl}`;
        return this.httpClient.post(endpointUrl, data);
    }
    updateInputData(data: any) {
        const endpointUrl = `${this.updateInputDataUrl}`;
        return this.httpClient.put(endpointUrl, data);
    }
    updateCostData(data: any) {
        const endpointUrl = `${this.updateCostDataUrl}`;
        return this.httpClient.put(endpointUrl, data);
    }
    
    updateProjectData(data: any) {
        const endpointUrl = `${this.updateProjectDataUrl}`;
        return this.httpClient.put(endpointUrl, data);
    }
    updateRawMaterialData(data: any) {
        const endpointUrl = `${this.updateRawMaterialUrl}`;
        return this.httpClient.put(endpointUrl, data);
    }
    updateShareData(data: any) {
        const endpointUrl = `${this.updateShareDataUrl}`;
        return this.httpClient.put(endpointUrl, data);
    }
    updateEmploymentData(data: any) {
        const endpointUrl = `${this.updateEmploymentDataUrl}`;
        return this.httpClient.put(endpointUrl, data);
    }
    updateOutPutData(data: any) {
        const endpointUrl = `${this.updateOutPutDataUrl}`;
        return this.httpClient.put(endpointUrl, data);
    }


    finishProject(serviceApplicationId : number){
        const endpointUrl = `${this.finishServiceApplicationUrl}/${serviceApplicationId}`;
        return this.httpClient.put(endpointUrl, serviceApplicationId);
    }
    completeProject(serviceApplicationId : number){
        const endpointUrl = `${this.completeProjectServiceApplicationUrl}/${serviceApplicationId}`;
        return this.httpClient.put(endpointUrl, serviceApplicationId);
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
