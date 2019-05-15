
import {throwError as observableThrowError, Observable} from 'rxjs';
// import {catchError, map} from 'rxjs/operators';
import {Injectable, Injector} from '@angular/core';
import {Investor} from '../../model/investor';
// import {AppConfiguration} from '../../config/appconfig';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {ConfigurationService} from '../../../@custor/services/configuration.service';
import {EndpointFactory} from '../../../@custor/services/security/endpoint-factory.service';

import {Lookup} from '../../model/lookupData';
import {Kebele, Region, Woreda, Zone} from '../../model/address';
import {SearchInvestorModel} from '../../model/SearchInvestor.model';
import {AppConfiguration} from '../../config/appconfig';

// import {ErrorMessage} from '../../../@custor/services/errMessageService';

@Injectable()
export class InvestorService extends EndpointFactory {
  constructor(private httpClient: HttpClient,
              private config: ConfigurationService,
              private appConfig: AppConfiguration,
              injector: Injector) {
    super(httpClient, config, injector);
  }

  // login: 'api/login/',
  // logout: 'api/logout/',
  private readonly _investorsUrl: string = 'api/investors';
  private readonly _investorUrl: string = 'api/investor';
  private readonly _lookupsUrl: string = 'api/Lookups';
  private readonly _regionsUrl: string = 'api/Regions';
  private readonly _zonesUrl: string = 'api/Zones';
  private readonly _woredasUrl: string = 'api/Woredas';
  private readonly _kebelesUrl: string = 'api/Kebeles';
  private readonly InvestorByUserId: string = 'api/InvestorByUserId';
  private readonly InvestorByTIN: string = 'api/InvestorByTIN';
  private readonly SearchInvestor: string = 'api/SearchInvestor';

  get investorsUrl() {
    return this.config.baseUrl + this._investorsUrl;
  }

  get investorUrl() {
    return this.config.baseUrl + this._investorUrl;
  }

  get lookupsUrl() {
    return this.config.baseUrl + this._lookupsUrl;
  }

  get regionsUrl() {
    return this.config.baseUrl + this._regionsUrl;
  }

  get zonesUrl() {
    return this.config.baseUrl + this._zonesUrl;
  }

  get woredasUrl() {
    return this.config.baseUrl + this._woredasUrl;
  }

  get kebelesUrl() {
    return this.config.baseUrl + this._kebelesUrl;
  }

  get InvestorByUserIdUrl() {
    return this.config.baseUrl + this.InvestorByUserId;
  }

  get InvestorByTINUrl() {
    return this.config.baseUrl + this.InvestorByTIN;
  }

  get SearchInvestorUrl() {
    return this.config.baseUrl + this.SearchInvestor;
  }

  // Declarations
  investorList: Investor[] = [];
  investor: Investor = new Investor();
  lookupList: Lookup[];
  regionList: Region[];
  kebeleList: Kebele[];
  allKebeleList: Kebele[];
  woredaList: Woreda[];
  zoneList: Zone[];
  allZoneList: Zone[] = [];
  allWoredaList: Woreda[];

  getInvestors(): Observable<any> {
    // alert (this.investorsUrl);
    return this.httpClient.get<Investor[]>(this.investorsUrl, this.getRequestHeaders())
      .pipe(
        map(investorList => this.investorList = investorList),
        catchError(err => observableThrowError(err || 'Server error')));
  }

  getLookupsByLang(lang: string): Observable<any> {
    const endpointUrl = `${this.lookupsUrl}/${lang}`;
    return this.httpClient.get<Lookup[]>(endpointUrl, this.getRequestHeaders())
      .pipe(
        map(lList => this.lookupList = lList),
        catchError(err => observableThrowError(err || 'Server error')));
  }

  getInvestor(id): Observable<any> {
    console.log(this.investorUrl)
    const endpointUrl = `${this.investorUrl}/${id}`;
    return this.httpClient.get<Investor>(endpointUrl, this.getRequestHeaders()).pipe(
      map(cust => {
        this.investor = cust;
        return this.investor;
      }),
      catchError(err => observableThrowError(err || 'Server error')));
  }

  getInvestorByUserId(id): Observable<any> {
    const endpointUrl = `${this.appConfig.urls.url('InvestorByUserId')}/${id}`;
    return this.httpClient.get<Investor>(endpointUrl, this.getRequestHeaders()).pipe(
      map(cust => {
        this.investor = cust;
        return this.investor;
      }),
      catchError(err => observableThrowError(err || 'Server error')));

  }

  getInvestorByTIN(id): Observable<any> {
    const endpointUrl = `${this.InvestorByTINUrl}/${id}`;
    return this.httpClient.get<Investor>(endpointUrl, this.getRequestHeaders()).pipe(
      map(cust => {
        this.investor = cust;
        return this.investor;
      }),
      catchError(err => observableThrowError(err || 'Server error')));

  }

  saveInvestor(investor: Investor): Observable<any> {
    return this.httpClient.post<Investor>(this.investorUrl, investor, this.getRequestHeaders())
      .pipe(
        map(inv => {
          this.investor = inv;
          return this.investor;
        }),
        catchError(error => {
          return this.handleError(error, () => this.saveInvestor(investor));
        })
      );
  }



  searchInvestor(search: SearchInvestorModel): Observable<any> {
    return this.httpClient.post<SearchInvestorModel[]>(this.SearchInvestorUrl, search, this.getRequestHeaders())
      .pipe(
        map(inv => {
          return inv;
        }),
        catchError(err => observableThrowError(err || 'Server error')));

  }

  deleteInvestor(id): Observable<any> {
    const endpointUrl = `${this.investorUrl}/${id}`;
    return this.httpClient.delete<boolean>(this.investorUrl, this.getRequestHeaders()).pipe(
      map(result => {
        // console.log(result);
        return result;
      }),
      catchError(err => observableThrowError(err || 'Server error')));

  }

  getRegions(): Observable<any> {
    return this.httpClient.get<Region[]>(this.regionsUrl, this.getRequestHeaders()).pipe(
      map(regionList => this.regionList = regionList),
      catchError(err => observableThrowError(err || 'Server error')));

  }

  getRegionsByLang(lang: string): Observable<any> {
    const endpointUrl = `${this.regionsUrl}/${lang}`;
    return this.httpClient.get<Region[]>(endpointUrl, this.getRequestHeaders()).pipe(
      map(regionList => this.regionList = regionList),
      catchError(err => observableThrowError(err || 'Server error')));

  }

  getAllZonesByLang(lang): Observable<any> {
    const endpointUrl = `${this.zonesUrl}/${lang}`;
    return this.httpClient.get<Zone[]>(endpointUrl)
      .pipe(
        map(zList => this.allZoneList = zList),
        catchError(err => observableThrowError(err || 'Server error')));

  }

  getAllWoredasByLang(lang): Observable<any> {
    const endpointUrl = `${this.woredasUrl}/${lang}`;
    // alert (endpointUrl);
    return this.httpClient.get<Woreda[]>(endpointUrl, this.getRequestHeaders())
      .pipe(
        map(wList => this.allWoredaList = wList),
        catchError(err => observableThrowError(err || 'Server error')));

  }

  getAllZones(): Observable<any> {
    return this.httpClient.get<Zone[]>(this.zonesUrl, this.getRequestHeaders()).pipe(
      map(zoneList => this.allZoneList = zoneList),
      catchError(err => observableThrowError(err || 'Server error')));

  }

  getZones(id: string): Observable<any> {
    const endpointUrl = `${this.zonesUrl}/${id}`;
    return this.httpClient.get<Zone[]>(endpointUrl, this.getRequestHeaders()).pipe(
      map(zoneList => {
          this.zoneList = zoneList;
        }
      ),
      catchError(err => observableThrowError(err || 'Server error')));

  }

  getWoredas(id: string): Observable<any> {
    const endpointUrl = `${this.woredasUrl}/${id}`;
    return this.httpClient.get<Woreda[]>(endpointUrl, this.getRequestHeaders()).pipe(
      map(woredaList => this.woredaList = woredaList),
      catchError(err => observableThrowError(err || 'Server error')));

  }

  getAllWoredas(): Observable<any> {
    return this.httpClient.get<Woreda[]>(this.woredasUrl, this.getRequestHeaders()).pipe(
      map(woredaList => this.allWoredaList = woredaList),
      catchError(err => observableThrowError(err || 'Server error')));

  }

  getKebeles(id: string): Observable<any> {
    const endpointUrl = `${this.kebelesUrl}/${id}`;
    return this.httpClient.get<Kebele[]>(endpointUrl, this.getRequestHeaders())
      .pipe(
        map(kebeleList => this.kebeleList = kebeleList),
        catchError(err => observableThrowError(err || 'Server error')));

  }

  getAllKebelesByLang(lang): Observable<any> {
    const endpointUrl = `${this.kebelesUrl}/${lang}`;

    return this.httpClient.get<Kebele[]>(endpointUrl, this.getRequestHeaders())
      .pipe(
        map(kList => this.allKebeleList = kList),
        catchError(err => observableThrowError(err || 'Server error')));

  }

  //   private handleError(error: any) {
  //     const applicationError = error.headers.get('Application-Error');
  //     const serverError = error.json();
  //     let modelStateErrors = '';

  //     if (!serverError.type) {
  //         // console.log(serverError);
  //         for (const key in serverError) {
  //             if (serverError[key]) {
  //                 modelStateErrors += serverError[key] + '\n';
  //             }
  //         }
  //     }

  //     modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;

  //     // return observableThrowError(applicationError || modelStateErrors || 'Server error');
  //     return applicationError || modelStateErrors || 'Server error';

  // }
}
