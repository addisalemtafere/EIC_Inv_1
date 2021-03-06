import {of as observableOf, Observable, Subscription} from 'rxjs';
import {
  AfterContentChecked,
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {AppTranslationService} from '../@custor/services/translation.service';
import {LocalStoreManager} from '../@custor/services/storeManager.service';
import {ConfigurationService} from '../@custor/services/configuration.service';
import {MatDialog, MatDialogConfig, MatExpansionPanel} from '@angular/material';
import {AuthService} from '../@custor/services/security/auth.service';
import {User} from './model/security/user.model';
import {ServiceModel} from './model/Service.model';
import {ServiceService} from './Services/service.service';
import {DataSharingService} from './Services/data-sharing.service';
import {AccountService} from '@custor/services/security/account.service';
import {NotificationsComponent} from './components/notifications/notifications.component';
import {NotificationService} from './Services/notification.service';
import {IncentiveLogModel} from './model/IncentiveLog.model';
import {IncentiveLogService} from './Services/incentive-log.service';
import {ToastrService} from 'ngx-toastr';
import {Permission} from './model/security/permission.model';
import {NgxUiLoaderService} from "ngx-ui-loader";
import {ServiceEnum} from "./enum/enums";
// import {NgxUiLoaderService} from "ngx-ui-loader";

// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewChecked, AfterContentChecked {
  @ViewChild('admin') adminExpander: MatExpansionPanel;
  @ViewChild('services') servicesExpander: MatExpansionPanel;
  appTitle = 'eInvest';
  userType = 'OnlineSite';
  isAdminExpanded = false;
  mobileQuery: MediaQueryList;
  user: User;
  currentUsername = '';
  isLoggedIn$: Observable<boolean> = observableOf(true);
  isInvestor: boolean;
  serviceList: ServiceModel[] = [];
  numberOfNotification: any;
  public checkInvestorRegistered: boolean;
  public inId: number;
  public isLogged: any;
  private _mobileQueryListener: () => void;
  private m: IncentiveLogModel;
  private subscription: Subscription;
  private allServices: ServiceModel[] = [];
  private isTitle: number;

  constructor(storageManager: LocalStoreManager,
              public notificationService: NotificationService,
              private authService: AuthService,
              private translationService: AppTranslationService,
              public configurations: ConfigurationService,
              public router: Router,
              private ngxService: NgxUiLoaderService,
              public route: ActivatedRoute,
              public accountService: AccountService,
              public dataSharing: DataSharingService,
              public dialog: MatDialog,
              public toastr: ToastrService,
              public incentiveLogService: IncentiveLogService,
              public serviceService: ServiceService,
              changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    storageManager.initialiseStorageSyncListener();

    translationService.addLanguages(['en', 'et']);
    translationService.setDefaultLanguage('et'); // default
    this.CheckLoginStatus();
    this.m = new IncentiveLogModel();
    localStorage.setItem('loggIn', 'false');

  }

  get currentLang(): string {
    return this.configurations.language || 'et';
  }

  get canManageAftercareData() {
    return this.accountService.userHasPermission(Permission.ManageAftercareDataPermission);
  }

  get canManageManageAftercareData() {
    return this.accountService.userHasPermission(Permission.ManageAftercareDataPermission);
  }

  get canManageDispatchIncentivesServices() {
    return this.accountService.userHasPermission(Permission.DispatchIncentivesServicesPermission);
  }

  get canManageAssignedServicesPermission() {
    return this.accountService.userHasPermission(Permission.ManageAssignedServicesPermission);
  }

  get canManageApproveIncentiveUploadedItems() {
    return this.accountService.userHasPermission(Permission.ApproveIncentiveUploadedItemsPermission);
  }

  get canManageManageIncentiveAssignedServices() {
    return this.accountService.userHasPermission(Permission.ManageIncentiveAssignedServicesPermission);
  }

  get canViewReadOnlyData() {
    return this.accountService.userHasPermission(Permission.ViewReadOnlyDataPermission);
  }

  get canManageLookupsPermission() {
    return this.accountService.userHasPermission(Permission.manageLookupsPermission);
  }

  get canManageSettings() {
    return this.accountService.userHasPermission(Permission.manageSettingsPermission);
  }

  get canViewServiceApplication() {
    return this.accountService.userHasPermission(Permission.viewServiceApplication);
  }

  get canViewTasks() {
    return this.accountService.userHasPermission(Permission.viewServiceList);
  }

  get canManageRoles() {
    return this.accountService.userHasPermission(Permission.manageRolesPermission);
  }

  get canManageAdmins() {
    return this.accountService.userHasPermission(Permission.manageSiteAdministratorsPermission);
  }

  get canManageUsers() {
    return this.accountService.userHasPermission(Permission.manageUsersPermission);
  }

  ngOnInit() {

    this.ngxService.start(); // start foreground loading with 'default' id
    // Stop the foreground loading after 5s


    this.checkInvestor();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {

        const url = (<NavigationStart>event).url;
        if (url !== url.toLowerCase()) {
          this.router.navigateByUrl((<NavigationStart>event).url.toLowerCase());
        }

        if (this.adminExpander && url.indexOf('admin') > 0) {
          this.adminExpander.open();
        }
        if (this.servicesExpander && url.indexOf('services') > 0) {
          this.servicesExpander.open();
        }

        if (this.authService.isLoggedIn) {
          this.getAllServices();
        }
        //  alert(url.indexOf('dashboard'))
        if ((url.indexOf('dashboard') > 0)) {

          if (this.authService.isLoggedIn) {
            setTimeout(() => this.isLoggedIn$ = observableOf(true));
            this.countNotification(this.accountService.currentUser.Id);
            this.getUserType();
            // this.CheckLoginStatus();

          } else {
            setTimeout(() => this.isLoggedIn$ = observableOf(false));
          }
        } else {
          if (this.authService.isLoggedIn) {
            setTimeout(() => this.isLoggedIn$ = observableOf(true));
            this.countNotification(this.accountService.currentUser.Id);
            this.getUserType();


          } else {
            setTimeout(() => this.isLoggedIn$ = observableOf(false));
          }
        }
      }
    });
    this.ngxService.stop(); // start foreground loading with 'default' id

  }

  gotoCustomerRegistration() {
    this.router.navigate(['investor-tab/1235/0/0/0/0']);
    localStorage.setItem('ServiceId', '1235');
  }

  getUserType() {
    this.isInvestor = this.accountService.getUserType();
  //  alert(this.isInvestor);

  }

  CheckLoginStatus() {
    if (this.authService.isLoggedIn) {
      this.user = this.authService.currentUser;
      this.currentUsername = this.user.UserName;

    }

    this.isLoggedIn$ = observableOf(false);
  }

  DoLogin() {
    if (this.authService.isLoggedIn) {
      this.logout();
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  logout() {
    this.currentUsername = '';
    this.clearLocalStorage();
    this.authService.logout();
    this.authService.redirectLogoutUser();
    setTimeout(() => this.isLoggedIn$ = observableOf(false));
    localStorage.setItem('loggIn', 'false');

  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    localStorage.setItem('loggIn', 'false');
  }

  getAllServices() {
    this.serviceService.getAll()
      .subscribe(result => {
        this.filterService(result);

      });
  }

  checkInvestor() {

  }

  public startService(serviceId: any, title: string) {
    localStorage.setItem('title', title);
    console.log("i am here search browser 11");
    if (title == "databrowser" || title == "DataBrowser") {
      this.isTitle = 1;
    } else {
      this.isTitle = 0;
    }
    // if (serviceId == 1235) {
    console.log("i am here search browser 22");
    if (serviceId == ServiceEnum.NewIP) {
      this.router.navigate(['/investor-tab/1235/' + 0 + '/' + 0 + '/' + 0 + '/' + 0]);
    } else {
      this.router.navigate(['search-browser/' + serviceId + '/' + 0 + '/' + 0 + '/' + this.isTitle]);

    }
    // }
  }

  clearLocalStorage() {
    localStorage.clear();
  }

  viewNotification() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.position = {
      'top': '46px',
      'right': '230px'

    };
    dialogConfig.width = '430px';
    dialogConfig.maxHeight = '400px';
    dialogConfig.panelClass = 'padding:1px;';

    this.dialog.open(NotificationsComponent, dialogConfig);

  }

  countNotification(investorId: any) {
    this.notificationService.CountNotification(investorId)
      .subscribe(result => {
        this.numberOfNotification = result;
      });
  }

  ngAfterContentChecked(): void {
    this.isLogged = localStorage.getItem('loggIn');

  }

  ngAfterViewChecked(): void {
    if (this.authService.isLoggedIn) {
      this.user = this.authService.currentUser;
      this.currentUsername = this.user.UserName;
    }

  }

  Investor() {
    
    console.log(localStorage.getItem('InvestorId'))
    if (localStorage.getItem('InvestorId') !== null || localStorage.getItem('profile-completed') == 'false') {
      if (localStorage.getItem('profile-completed') == 'false') {
        this.router.navigate(['investor-profile', localStorage.getItem('InvestorId')]);
      } else {
        this.router.navigate(['investor-profile/' + localStorage.getItem('InvestorId')]);
      }
    } else {
      this.router.navigate(['/investor/edit', localStorage.getItem('InvestorId')]);

    }
  }

  toServiceList() {
    if (localStorage.getItem('InvestorId') !== null || localStorage.getItem('profile-completed') == 'true') {
      this.router.navigate(['/service-list']);
    } else {

      this.toastr.warning('Please  complete investor profile before request any service!!', 'Info');
      if (localStorage.getItem('InvestorId') !== null) {
        this.router.navigate(['investor-profile', localStorage.getItem('InvestorId')]);

      } else {
        this.router.navigate(['investor-profile/0']);
      }

    }

  }

  toServiceList1() {
    if (localStorage.getItem('InvestorId') !== null) {
      // this.dialog.open(CustomerServiceStarterComponent);
      this.router.navigate(['/followup']);
    } else {
      this.router.navigate(['/followup']);
      //this.toastr.warning('Please  complete investor profile before request any service!!', 'Info');
      // this.router.navigate(['investor-tab/0/', 0]);
    }

  }

  toMangerList() {
    if (localStorage.getItem('InvestorId') !== null) {
      this.router.navigate(['associate/list']);
    } else {
      this.toastr.warning('Please  complete investor profile before request any service!!', 'Info');
      this.router.navigate(['investor-profile/0']);
    }

  }

  private filterService(result: ServiceModel[]) {
    // this.serviceList = result;
    this.serviceList = result.filter((item) => {
      if (this.canManageManageIncentiveAssignedServices) {
        return item.TypeOfService == '4';
      } else if (this.canManageAssignedServicesPermission) {
        return item.TypeOfService == '3';
      }
    });
  }

  public goToHome() {
    this.router.navigate(['/home']);
    this.authService.logout();
    setTimeout(() => this.isLoggedIn$ = observableOf(false));

  }
}

export interface UserLanguage {
  name: string;
  locale: string;
}
