// this service use to manage data and wizard navigation of service application
import {Injectable, Injector} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ConfigurationService } from '../../../../@custor/services/configuration.service';
import {Observable, of, Subject} from 'rxjs';
import {EndpointFactory} from '@custor/services/security/endpoint-factory.service';


@Injectable({
  providedIn: 'root'
})
export class ProfileService extends EndpointFactory {
  private readonly _investorDataUrl = "api/FInvestor/ProfileByInvestorId";
  private readonly _investorAuditUrl = "api/FInvestor/ProfileAuditByInvestorId";
  private readonly _saveProfileDataUrl = "api/FInvestor/SaveProfile"
  constructor(private httpClient: HttpClient,
              private config: ConfigurationService,
              injector: Injector) {
    super(httpClient, config, injector);
  }
  get investorAuditUrl(){
    return this.config.baseUrl + this._investorAuditUrl;
  }
  get investorDataUrl(){
    return this.config.baseUrl + this._investorDataUrl;
  }
  get saveProfileDataUrl(){
    return this.config.baseUrl + this._saveProfileDataUrl
  }
  getInvestorDataFromAudit(investorId){
    const endpointUrl = `${this.investorAuditUrl}/${investorId}`;
    console.log(endpointUrl);
    return this.httpClient.get(endpointUrl);
  }
  getInvestorData(investorId){
    const endpointUrl = `${this.investorDataUrl}/${investorId}`;
    console.log(endpointUrl);
    return this.httpClient.get(endpointUrl);
  }
  saveProfileData(data : any){
    const endpointUrl = `${this.saveProfileDataUrl}`;
    console.log(endpointUrl)
    return this.httpClient.post(endpointUrl, data);
  }

}
