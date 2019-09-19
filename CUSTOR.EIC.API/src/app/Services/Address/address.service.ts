import { catchError, map} from 'rxjs/operators';
import { throwError as observableThrowError} from 'rxjs';
import {Injectable, OnInit, Injector} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfiguration} from '../../config/appconfig';
import {KebeleModel} from '../../model/address/Kebele.model';
import {WoredaModel} from '../../model/address/Woreda.model';
import {ZoneModel} from '../../model/address/Zone.model';
import {RegionModel} from '../../model/address/Region.model';
import { Kebele, Region, Woreda, Zone } from '../../model/address';
import {AddressModel} from '../../model/address/Address.model';
import {TownModel} from '../../model/address/Town.model';
import {NationalityModel} from '../../model/address/NationalityModel';
import {Observable} from 'rxjs/internal/Observable';
import {ErrorMessage} from '../../../@custor/services/errMessageService';
import { ConfigurationService } from '../../../@custor/services/configuration.service';
import { EndpointFactory } from '../../../@custor/services/security/endpoint-factory.service';
import { URLS_LABELS } from '../../const/consts';
@Injectable()
export class AddressService extends EndpointFactory {
  addressLookUp: AddressModel;
  kebeleList: KebeleModel[];
  allKebeleList: KebeleModel[];
  woredaList: WoredaModel[];
  zoneList: ZoneModel[];
  townList: TownModel[];
  allZoneList: ZoneModel[];
  allTownList: TownModel[];
  allWoredaList: WoredaModel[];
  regionList: RegionModel[];
  NationList: NationalityModel[];
  lang: string;

  private readonly _regionsUrl: string = 'api/Regions';
  private readonly _zonesUrl: string = 'api/Zones';
  private readonly _woredasUrl: string = 'api/Woredas';
  currentLang : string;
  constructor(private httpClient: HttpClient,
              private appConfig: AppConfiguration,
              private config: ConfigurationService,
              private errMsg: ErrorMessage, injector: Injector,
              private configService: ConfigurationService) {
    super(httpClient, config, injector);
    this.currentLang = this.configService.language;
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

  ngOnInit(): void {
    this.lang = '/et';
  }

  saveAddress(address: AddressModel): Observable<AddressModel> {
    return this.httpClient.post<AddressModel>(this.appConfig.urls.url(URLS_LABELS[0].Label), address).pipe(
      map(addressLookup => this.addressLookUp = addressLookup),
      catchError(this.errMsg.parseObservableResponseError)
    );
  }

  updateAddress(resource, id) {

    return this.httpClient.put(this.appConfig.urls.url(URLS_LABELS[0].Label) + '/' + id, resource).pipe(
      catchError(this.errMsg.parseObservableResponseError));
  }

  getRegions(): Observable<RegionModel[]> {
    return this.httpClient.get<RegionModel[]>(this.appConfig.urls.url(URLS_LABELS[1].Label) + '/'+this.currentLang).pipe(
      map(regionList => this.regionList = regionList),
      catchError(this.errMsg.parseObservableResponseError));
  }

  getAllZones(): Observable<ZoneModel[]> {
    return this.httpClient.get<ZoneModel[]>(this.appConfig.urls.url(URLS_LABELS[2].Label) + '/'+this.currentLang).pipe(
      map(zoneList => this.allZoneList = zoneList),
      catchError(this.errMsg.parseObservableResponseError));
  }


  getZones(id: string): Observable<ZoneModel[]> {
    return this.httpClient.get<ZoneModel[]>(this.appConfig.urls.url(URLS_LABELS[2].Label + '/'+this.currentLang, id)).pipe(
      map(zoneList => this.zoneList = zoneList),
      catchError(this.errMsg.parseObservableResponseError));
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
  getAllTowns(): Observable<TownModel[]> {
    return this.httpClient.get<TownModel[]>(this.appConfig.urls.url(URLS_LABELS[3].Label) + '/' + this.currentLang).pipe(
      map(result => this.allTownList = result),
      catchError(this.errMsg.parseObservableResponseError));
  }

  getTowns(id: string): Observable<TownModel[]> {
    return this.httpClient.get<TownModel[]>(this.appConfig.urls.url(URLS_LABELS[3].Label + '/' +this.currentLang, id)).pipe(
      map(townList => this.townList = townList),
      catchError(this.errMsg.parseObservableResponseError));
  }


  getWoredas(id: string): Observable<WoredaModel[]> {
    return this.httpClient.get<WoredaModel[]>(this.appConfig.urls.url(URLS_LABELS[4].Label + '/'+this.currentLang, id)).pipe(
      map(woredaList => this.woredaList = woredaList),
      catchError(this.errMsg.parseObservableResponseError));
  }

  getAllWoredas(): Observable<WoredaModel[]> {
    return this.httpClient.get<WoredaModel[]>(this.appConfig.urls.url(URLS_LABELS[4].Label) + '/'+this.currentLang).pipe(
      map(woredaList => this.allWoredaList = woredaList),
      catchError(this.errMsg.parseObservableResponseError));
  }

  getKebeles(id: string): Observable<KebeleModel[]> {
    return this.httpClient.get<KebeleModel[]>(this.appConfig.urls.url(URLS_LABELS[5].Label, id)).pipe(
      map(kebeleList => this.kebeleList = kebeleList),
      catchError(this.errMsg.parseObservableResponseError));
  }

  getKebelesByWoreda(id: string): Observable<KebeleModel[]> {
    return this.httpClient.get<KebeleModel[]>(this.appConfig.urls.url(URLS_LABELS[5].Label, + '/' + this.currentLang, id)).pipe(
      map(kebeleList => this.kebeleList = kebeleList),
      catchError(this.errMsg.parseObservableResponseError));
  }

  getAllKebeles(): Observable<KebeleModel[]> {
    return this.httpClient.get<KebeleModel[]>(this.appConfig.urls.url(URLS_LABELS[5].Label + '/' + this.currentLang)).pipe(
      map(kebeleList => this.allKebeleList = kebeleList),
      catchError(this.errMsg.parseObservableResponseError));
  }

  getNationality(lang: any): Observable<NationalityModel[]> {
    console.log(this.appConfig.urls.url(URLS_LABELS[6].Label) + '/' + lang);

    return this.httpClient.get<NationalityModel[]>(this.appConfig.urls.url(URLS_LABELS[6].Label) + '/' + lang).pipe(
      map(countryList => this.NationList = countryList),
      catchError(this.errMsg.parseObservableResponseError));
  }

  getAddress(id: number): Observable<AddressModel> {
    return this.httpClient.get<AddressModel>(this.appConfig.urls.url(URLS_LABELS[0].Label, id)).pipe(
      map((address: AddressModel) => {
        return this.addressLookUp = address;
      }),
      catchError(this.errMsg.parseObservableResponseError));
  }
}
