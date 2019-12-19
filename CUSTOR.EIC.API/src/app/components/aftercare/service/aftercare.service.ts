// this service use to manage data and wizard navigation of service application
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from '../../../../@custor/services/configuration.service';
import { Observable, of, Subject } from 'rxjs';
import { EndpointFactory } from '@custor/services/security/endpoint-factory.service';

@Injectable({
  providedIn: 'root'
})
export class AftercareService extends EndpointFactory {

  private readonly _permitListUrl = "api/FAfterCare/getPermitList";
  private readonly _getEmploymentListUrl = "api/FAfterCare/getEmploymentList";
  private readonly _getEmploymentDataUrl = "api/FAfterCare/getEmploymentData";
  private readonly _getCostUrl = "api/FAfterCare/getCostData";
  private readonly _getRequirementUrl = "api/FAfterCare/getRequirementData";
  private readonly _getEmploymentOriginalDataUrl = "api/FAfterCare/getEmploymentOriginalData";
  private readonly _getRequirementOriginalDataUrl = "api/FAfterCare/getRequirementOriginalData";
  private readonly _getCostOriginalDataUrl = "api/FAfterCare/getCostOriginalData";
  private readonly _updateEmploymentDataUrl = "api/FAfterCare/updateEmploymentData";
  private readonly _saveEmploymentDataUrl = "api/FAfterCare/saveEmploymentData";
  private readonly _saveRequirementDataUrl = "api/FAfterCare/saveRequirementData";
  private readonly _getProductListUrl = "api/FAfterCare/getProductList";
  private readonly _getProductUrl = "api/FAfterCare/getProductData";
  private readonly _getProductOriginalDataUrl = "api/FAfterCare/getProductOriginalData";
  private readonly _saveProductDataUrl = "api/FAfterCare/saveProductData";
  private readonly _saveCostDataUrl = "api/FAfterCare/saveCostData";
  private readonly _updateProductDataUrl = "api/FAfterCare/updateProductData";
  private readonly _updateRequirementDataUrl = "api/FAfterCare/updateRequirementData";
  private readonly _updateCostDataUrl = "api/FAfterCare/updateCostData";
  
  private readonly _getRequirementListUrl = "api/FAfterCare/getRequirementList";
  private readonly _getCostListUrl = "api/FAfterCare/getCostList";

  constructor(private httpClient: HttpClient,
    private config: ConfigurationService,
    injector: Injector) {
    super(httpClient, config, injector);
  }
  get getPermitListUrl() {
    return this.config.baseUrl + this._permitListUrl;
  }
  get getEmploymentListUrl() {
    return this.config.baseUrl + this._getEmploymentListUrl
  }
  get getEmploymentDataUrl() {
    return this.config.baseUrl + this._getEmploymentDataUrl
  }
  get getEmploymentOriginalDataUrl() {
    return this.config.baseUrl + this._getEmploymentOriginalDataUrl
  }
  get saveEmploymentDataUrl() {
    return this.config.baseUrl + this._saveEmploymentDataUrl
  }
  get saveProductDataUrl() {
    return this.config.baseUrl + this._saveProductDataUrl
  }
  get updateEmploymentDataUrl() {
    return this.config.baseUrl + this._updateEmploymentDataUrl
  }
  get updateProductDataUrl() {
    return this.config.baseUrl + this._updateProductDataUrl
  }
  get getProductOriginalDataUrl() {
    return this.config.baseUrl + this._getProductOriginalDataUrl
  }
  get getProductListUrl(){
    return this.config.baseUrl + this._getProductListUrl
  }
  get getProductUrl(){
    return this.config.baseUrl + this._getProductUrl

  }
  get getRequirementListUrl(){
    return this.config.baseUrl + this._getRequirementListUrl

  }
  get getRequirementUrl(){
    return this.config.baseUrl + this._getRequirementUrl

  }
  get getRequirementOriginalDataUrl(){
    return this.config.baseUrl + this._getRequirementOriginalDataUrl

  }
  get saveRequirementDataUrl(){
    return this.config.baseUrl + this._saveRequirementDataUrl
  }
  get updateRequirementDataUrl(){
    return this.config.baseUrl + this._updateRequirementDataUrl
  }
  get getCostListUrl(){
    return this.config.baseUrl + this._getCostListUrl;
  }
  get getCostUrl(){
    return this.config.baseUrl + this._getCostUrl;
  }
  get getCostOriginalDataUrl(){
    return this.config.baseUrl + this._getCostOriginalDataUrl;
  }
  get saveCostDataUrl(){
    return this.config.baseUrl + this._saveCostDataUrl;
  }
  get updateCostDataUrl(){
    return this.config.baseUrl + this._updateCostDataUrl;
  }


  getPermitListData(Id) {
    const endpointUrl = `${this.getPermitListUrl}/${Id}`;
    return this.httpClient.get(endpointUrl);
  }
  getEmploymentList(ProjectId) {
    const endpointUrl = `${this.getEmploymentListUrl}/${ProjectId}`;
    return this.httpClient.get(endpointUrl);
  }
  getEmploymentData(EmploymentId){
    const endpointUrl = `${this.getEmploymentDataUrl}/${EmploymentId}`;
    return this.httpClient.get(endpointUrl);
  }
  getEmploymentOriginalData(EmploymentId){
    const endpointUrl = `${this.getEmploymentOriginalDataUrl}/${EmploymentId}`;
    return this.httpClient.get(endpointUrl);
  }
  saveEmploymentData(EmploymentData){
     const endpointUrl = `${this.saveEmploymentDataUrl}`;
     return this.httpClient.post(endpointUrl, EmploymentData);
  }
  updateEmploymentData(EmploymentData){
    const endpointUrl = `${this.updateEmploymentDataUrl}`;
    return this.httpClient.put(endpointUrl, EmploymentData);
  }





  getProductList(ProjectId) {
    const endpointUrl = `${this.getProductListUrl}/${ProjectId}`;
    return this.httpClient.get(endpointUrl);
  }
  getProductData(ProductId) {
    const endpointUrl = `${this.getProductUrl}/${ProductId}`;
    return this.httpClient.get(endpointUrl);
  }
  getProductOriginalData(ProjectId) {
    const endpointUrl = `${this.getProductOriginalDataUrl}/${ProjectId}`;
    return this.httpClient.get(endpointUrl);
  }
  saveProductData(ProductData) {
    const endpointUrl = `${this.saveProductDataUrl}`;
    return this.httpClient.post(endpointUrl, ProductData);
  }
  updateProductData(ProductData) {
    const endpointUrl = `${this.updateProductDataUrl}`;
    return this.httpClient.put(endpointUrl, ProductData);
  }


  // Project Requirment
  getRequirementList(ProjectId) {
    const endpointUrl = `${this.getRequirementListUrl}/${ProjectId}`;
    return this.httpClient.get(endpointUrl);
  }
  getRequirementData(RequirementId) {
    const endpointUrl = `${this.getRequirementUrl}/${RequirementId}`;
    return this.httpClient.get(endpointUrl);
  }
  getRequirementOriginalData(ProjectId) {
    const endpointUrl = `${this.getRequirementOriginalDataUrl}/${ProjectId}`;
    return this.httpClient.get(endpointUrl);
  }
  saveRequirementData(RequirementData) {
    const endpointUrl = `${this.saveRequirementDataUrl}`;
    return this.httpClient.post(endpointUrl, RequirementData);
  }
  updateRequirementData(RequirementData) {
    const endpointUrl = `${this.updateRequirementDataUrl}`;
    return this.httpClient.put(endpointUrl, RequirementData);
  }
  // Project Cost
  getCostList(ProjectId) {
    const endpointUrl = `${this.getCostListUrl}/${ProjectId}`;
    return this.httpClient.get(endpointUrl);
  }
  getCostData(CostId) {
    const endpointUrl = `${this.getCostUrl}/${CostId}`;
     return this.httpClient.get(endpointUrl);
  }
  getCostOriginalData(ProjectId) {
     const endpointUrl = `${this.getCostOriginalDataUrl}/${ProjectId}`;
     return this.httpClient.get(endpointUrl);
  }
  saveCostData(CostData) {
    const endpointUrl = `${this.saveCostDataUrl}`;
    return this.httpClient.post(endpointUrl, CostData);
  }
  updateCostData(CostData) {
    const endpointUrl = `${this.updateCostDataUrl}`;
    return this.httpClient.put(endpointUrl, CostData);
  }
}
