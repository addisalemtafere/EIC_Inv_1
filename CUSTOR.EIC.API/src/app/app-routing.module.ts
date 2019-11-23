import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthService} from '@custor/services/security/auth.service';
import {AuthGuard} from '@custor/services/security/auth-guard.service';


@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'home',
        redirectTo: '/',
        pathMatch: 'full'
      },
      {
        path: 'followup',
        loadChildren: 'app/components/followup/followup.module#FollowupModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'dashboard',
        loadChildren: 'app/components/my-dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'officer-dashboard',
        loadChildren: 'app/components/officer-dashboard/officer-dashboard.module#OfficerDashboardModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'management-dashboard',
        loadChildren: 'app/components/management-dashboard/management.module#ManagementModule',
        canActivate: [AuthGuard]
      },

      {
        path: 'service-list',
        // component: CustomerServiceStarterComponent
        loadChildren: 'app/components/my-dashboard/customerService/customerServiceList.module#CustomerServiceListModule',
      },
      {
        path: 'register',
        loadChildren: 'app/components/auth/register/register.module#RegisterModule'
      },
      {
        path: 'officer/:ServiceId/:InvestorId/:ServiceApplicationId/:workFlowId/:ProjectId',
        loadChildren: 'app/components/officer-Task/officer.module#OfficerModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'investor',
        loadChildren: 'app/components/investor/investor.module#InvestorModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'investor-tab/:ServiceId/:ServiceApplicationId/:InvestorId/:IsExistingCustomer/:workFlowId',
        loadChildren: 'app/components/investor/investor-tab/investor-tab.module#InvestorTabModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'business-tab/:ServiceId/:InvestorId/:ServiceApplicationId/:ProjectId/:workFlowId/:BusinessId',
        loadChildren: 'app/components/business/business-tab/business-tab.module#BusinessTabModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'registration-tab/:ServiceId/:tin/:serviceApplicationId',
        loadChildren: 'app/components/registration/Registration-tab/registration-tab.module#RegistrationTabModule',
        canActivate: [AuthGuard]
      },

      {
        path: 'service-detail/:id',
        loadChildren: 'app/components/project-profile/project-profile-detail/project-detail.module#ProjectDetailModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'regions',
        loadChildren: 'app/components/setting/address-tabs/region/region.module#RegionModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'zones',
        loadChildren: 'app/components/setting/address-tabs/zone/zone.module#ZoneModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'woredas',
        loadChildren: 'app/components/setting/address-tabs/Woredas/woreda.module#WoredaModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'kebeles',
        loadChildren: 'app/components/setting/address-tabs/kebele/kebele.module#KebeleModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'sectors',
        loadChildren: 'app/components/setting/category-tabs/sector/sector.module#SectorModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'subsectors',
        loadChildren: 'app/components/setting/category-tabs/subsector/subsector.module#SubsectorModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'activitys',
        loadChildren: 'app/components/setting/category-tabs/Activity/activity.module#ActivityModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'invactivitys',
        loadChildren: 'app/components/setting/category-tabs/InvActivity/invactivity.module#InvactivityModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'pro/:ProjectId/:ServiceApplicationId/:ServiceId/:workFlowId/:InvestorId',
        loadChildren: './components/project-profile/project.module#ProjectModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'project-substitute/:ServiceId/:InvestorId/:ServiceApplicationId/:ProjectId/:workFlowId',
        loadChildren: './components/project-profile/project-substitute/ProjectSubstitute.module#ProjectSubstituteModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'project-cost/:ProjectId/:ServiceId',
        loadChildren: './components/project-profile/project-cost/ProjectCost.module#ProjectCostModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'share',
        loadChildren: './components/project-profile/project-share/Share.module#ShareModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'product/:ProjectId/:ServiceId',
        loadChildren: './components/project-profile/project-product/product.module#ProductModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'employment/:ProjectId/:ServiceId',
        loadChildren: './components/project-profile/project-employment/employment.module#EmploymentModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'letter/:projectId/:serviceId/:serviceApplicationId/:isForDetail',
        loadChildren: 'app/components/project-profile/letter/letter.module#LetterModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'associate',
        loadChildren: './components/investor/associate/associate.module#AssociateModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'address',
        loadChildren: 'app/components/setting/address-tabs/address.module#AddressModule',
        canActivate: [AuthGuard]
      },

      {
        path: 'admin/users',
        loadChildren: 'app/admin/user.module#UserModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'admin/roles',
        loadChildren: 'app/admin/role.module#RoleModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'category',
        loadChildren: 'app/components/setting/category-tabs/category.module#CategoryModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'services-tab',
        loadChildren: 'app/components/setting/services-tabs/serviceTab.module#ServiceTabModule',
        canActivate: [AuthGuard]

      },
      {
        path: 'serviceprerequisites',
        loadChildren: 'app/components/setting/services-tabs/serviceprerequistie/serviceprerequiste.module#ServicePrerequsiteModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'servicesteppers',
        loadChildren: 'app/components/setting/services-tabs/servicestepper/servicestepper.module#ServicestepperModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'servicetariffs',
        loadChildren: 'app/components/setting/services-tabs/servicetariff/servicetariff.module#ServicetariffModule',
        canActivate: [AuthGuard]

      },
      {
        path: 'other',
        loadChildren: 'app/components/setting/othe-tabs/other.module#OtherModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'tariffs',
        loadChildren: 'app/components/setting/othe-tabs/tariff/tariff.module#TariffModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'sites',
        loadChildren: 'app/components/setting/othe-tabs/Site/site.module#SiteModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'lettertempalte',
        loadChildren: 'app/components/letter-template/lettertemplate.module#LettertemplateModule',
        canActivate: [AuthGuard]
      },
      // {
      //   path: 'project/list',
      //   component: ProjectListComponent,
      //   canActivate: [AuthGuard]
      // },
      {
        path: 'project-renewal/:ServiceId/:InvestorId/:ServiceApplicationId/:ProjectId/:workFlowId',
        loadChildren: 'app/components/project-profile/project-renewal-tab/projectRenewal.module#ProjectRenewalModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'project-cancellation/:ServiceId/:InvestorId/:ServiceApplicationId/:ProjectId/:workFlowId',
        loadChildren: 'app/components/project-profile/project-cancellation-tab/project-cancellation-tab.module#ProjectCancellationTabModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'appointment',
        loadChildren: 'app/components/appointment/appointment.module#AppointmentModule',
        canActivate: [AuthGuard]
      },
      // {
      //   path: 'amendment',
      //   loadChildren: 'app/components/profile-amendment/amendment.module#AmendmentModule',
      //   canActivate: [AuthGuard]
      // },
      // {
      //   path: 'permit-amendment',
      //   loadChildren: 'app/components/permit-amendment/permit-amendment.module#PermitAmendmentModule',
      //   canActivate: [AuthGuard]
      // },
      {
        path: 'archive-application',
        loadChildren: 'app/components/archive-application/archive-application.module#ArchiveApplicationModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'draft-application',
        loadChildren: 'app/components/drafted-application/drafted-application.module#DraftedApplicationModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'service-info/:id',
        loadChildren: 'app/components/project-profile/service-info/serviceInfo.module#ServiceInfoModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'confirmation',
        loadChildren: 'app/components/project-profile/service-confirmation/ServiceConfirmation.module#ServiceConfirmationModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'requirement/:id',
        loadChildren: 'app/components/home/requirement/requirement.module#RequirementModule'
      },
      // {
      //   path: 'costList',
      //   loadChildren: 'app/components/project-profile/project-cost/ProjectCost.module#ProjectCostModule'
      // },
      {
        path: 'after-care/:ProjectId',
        loadChildren: 'app/components/project-profile/aftercare/aftercare.module#AftercareModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'search-browser/:ServiceId/:InvestorId/:ProjectId/:Title',
        loadChildren: 'app/components/search-browser/search-browser.module#SearchBrowserModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'investor-project-list/:ServiceId',
        loadChildren: 'app/components/project-list-modal/InvestorProjectList.module#InvestorProjectListModule',
        canActivate: [AuthGuard]
      },

      {
        path: 'confirm',
        loadChildren: 'app/components/auth/register/confirm.module#ConfirmModule'
      },
      {
        path: 'lookups',
        loadChildren: 'app/components/setting/lookup-tabs/lookups/lookups.module#LookupsModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'lookuptypes',
        loadChildren: 'app/components/setting/lookup-tabs/lookuptypes/lookuptypes.module#LookupTypesModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'currency',
        loadChildren: 'app/components/setting/lookup-tabs/currency-setting/currency-setting.module#CurrencySettingModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'lookup-tab',
        loadChildren: 'app/components/setting/lookup-tabs/lookup.module#LookupModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'bill-of-material/:type/:ServiceId/:InvestorId/:ServiceApplicationId/:ProjectId/:workFlowId',
        loadChildren: 'app/components/incentive/bill-of-material/billOfMaterial.module#BillOfMaterialModule',
        canActivate: [AuthGuard]
      },
      {
        //path: 'bom-balance/:type/:ServiceApplicationId',
        path: 'bom-balance/:projectId/:serviceApplicationId/:serviceId',
        loadChildren: 'app/components/incentive/balance/balance.module#BalanceModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'incentive-services',
        loadChildren: 'app/components/incentive/incentive-services/incentiveService.module#IncentiveServiceModule',
        canActivate: [AuthGuard]
      },

      {
        path: 'denied',
        loadChildren: 'app/components/denied/denied.module#DeniedModule'
      },
      {
        path: 'incentive-request-item/:ServiceId/:InvestorId/:ServiceApplicationId/:ProjectId/:workFlowId',
        loadChildren: 'app/components/incentive/incentive-request/incentive-request.module#IncentiveRequestModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'letter-template',
        loadChildren: 'app/components/letter-template/lettertemplate.module#LettertemplateModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'tax-exemption/:serviceId/:investorId/:ServiceApplicationId/:projectId/:workFlowId',
        loadChildren: 'app/components/incentive/tax-exemption/tax-exemption.module#TaxExemptionModule',
        canActivate: [AuthGuard]
      },
      // {
      //   path: 'error',
      //   component: ErrorComponent
      // },
      {
        path: 'manage-password/:id',
        loadChildren: 'app/components/auth/manage-password/manage.module#ManagePasswordModule'
      },
      {
        path: 'capital-registration/:ProjectId',
        loadChildren: 'app/components/project-profile/capital-registration/capitalRegistration.module#CapitalRegistrationModule'
      },
      {
        path: 'address/:id',
        loadChildren: 'app/components/project-profile/address/address.module#AddressModule'

      },
      {
        path: 'requested-items-list/:categoryId/:projectId/:requestId/:Quantity/:CurrencyType/:CurrencyRate/:Phase/:ServiceApplicationId/:ServiceId',
        loadChildren: 'app/components/incentive/incentive-request/requested-items-list/requested-items-list.module#RequestedItemsListModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'incentive-request-history/:projectId/:serviceApplicationId/:serviceId',
        loadChildren: 'app/components/incentive/incentive-request/incentive-request-history/incentive-request-history.module#IncentiveRequestHistoryModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'sparepart-balance/:projectId/:serviceApplicationId',
        loadChildren: 'app/components/incentive/balance-sparepart/spare-part.module#SparePartModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'incentive-detail/:projectId/:serviceApplicationId/:serviceId/:isForDetail',
        loadChildren: 'app/components/incentive/incentive-detail/incentive-detail.module#IncentiveDetailModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'investor-profile',
        loadChildren: 'app/components/investor/investor-profile/investor-profile.module#InvestorProfileModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'help',
        loadChildren: 'app/components/help/help.module#HelpModule'
      },
      {
        path: 'contact',
        loadChildren: 'app/components/contact/contact.module#ContactModule'
      },
      {
        path: 'login',
        loadChildren: 'app/components/auth/login/login.module#LoginModule'
      },

      {path: '', loadChildren: 'app/components/home/landing.module#LandingModule'},
      {
        path: 'project-search/:ServiceId/:InvestorId/:ProjectId/:Title',
        loadChildren: 'app/components/project-profile/project-search/project-search.module#ProjectSearchModule',
        canActivate: [AuthGuard]
      },
      {path: '**', loadChildren: 'app/components/not-found/not-found.module#NotFoundModule'},
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthService, AuthGuard]
})
export class AppRoutingModule {
}
