import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from '../../../../@custor/services/configuration.service';
import { Observable, of, Subject } from 'rxjs';
import { EndpointFactory } from '@custor/services/security/endpoint-factory.service';
@Injectable({
  providedIn: 'root'
})
export class ProjectOfficerService extends EndpointFactory {

  private readonly _approveProjectProfileUrl = "api/FProjectOfficer/approveProjectProfileData"
  private readonly _approveProjectInputUrl = "api/FProjectOfficer/approveProjectInputData"
  private readonly _approveRawMaterialDataUrl = "api/FProjectOfficer/approveProjectRawMaterialData"
  private readonly _approveProjectCostUrl = "api/FProjectOfficer/approveProjectCostData"
  private readonly _approveProjectDataUrl = "api/FProjectOfficer/approveProjectEmployementData"
  private readonly _approveShareDataUrl = "api/FProjectOfficer/approveProjectShareData"
  private readonly _approveProjectOutPutDataUrl = "api/FProjectOfficer/approveProjectOutPutData"
 
  constructor(private httpClient: HttpClient,
    private config: ConfigurationService,
    injector: Injector) {
    super(httpClient, config, injector);
  }
  get approveProjectProfileUrl() {
    return this.config.baseUrl + this._approveProjectProfileUrl;
  }
  get approveProjectInputUrl() {
    return this.config.baseUrl + this._approveProjectInputUrl;
  }
  get approveRawMaterialDataUrl() {
    return this.config.baseUrl + this._approveRawMaterialDataUrl;
  }
  get approveProjectCostUrl() {
    return this.config.baseUrl + this._approveProjectCostUrl;
  }
  get approveProjectDataUrl() {
    return this.config.baseUrl + this._approveProjectDataUrl;
  }
  get approveShareDataUrl() {
    return this.config.baseUrl + this._approveShareDataUrl;
  }
  get approveProjectOutPutDataUrl() {
    return this.config.baseUrl + this._approveProjectOutPutDataUrl;
  }

  approveProjectProfile(data: any) {
    const endpointUrl = `${this.approveProjectProfileUrl}`;
    return this.httpClient.put(endpointUrl, data);
  }
  approveProjectInput(data: any) {
    const endpointUrl = `${this.approveProjectInputUrl}`;
    return this.httpClient.put(endpointUrl, data);
  }
  approveRawMaterialData(projectId: any) {
    const endpointUrl = `${this.approveRawMaterialDataUrl}/${projectId}`;
    return this.httpClient.get(endpointUrl);
  }
  approveProjectCost(data: any) {
    const endpointUrl = `${this.approveProjectCostUrl}`;
    return this.httpClient.put(endpointUrl,data);
  }
  approveProjectData(data: any) {
    const endpointUrl = `${this.approveProjectDataUrl}`;
    return this.httpClient.put(endpointUrl,data);
  }
  approveShareData(projectId: any) {
    const endpointUrl = `${this.approveShareDataUrl}/${projectId}`;
    return this.httpClient.get(endpointUrl);
  }
  approveProjectOutPut(projectId: any) {
    const endpointUrl = `${this.approveProjectOutPutDataUrl}/${projectId}`;
    return this.httpClient.get(endpointUrl);
  }
}
