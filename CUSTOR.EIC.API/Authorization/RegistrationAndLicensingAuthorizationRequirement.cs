using CUSTOR.Security;
using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CUSTOR.EICOnline.API.Authorization
{
  public class RegistrationAndLicensingAuthorizationRequirement : IAuthorizationRequirement
  {
    public RegistrationAndLicensingAuthorizationRequirement(string operationName)
    {

      this.OperationName = operationName;
    }

    public string OperationName { get; private set; }
  }

  public class ManageAssignedServicesAuthorizationHandler : AuthorizationHandler<RegistrationAndLicensingAuthorizationRequirement, string>
  {
    protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, RegistrationAndLicensingAuthorizationRequirement requirement, string targetUserId)
    {
      if ((context.User.IsInRole("Licensing Supervisor")) && context.User.HasClaim(ClaimConstants.Permission, ApplicationPermissions.ManageAssignedServices))
        context.Succeed(requirement);
      return Task.CompletedTask;
    }
  }
  public class ManageCustomerProfilesAuthorizationHandler : AuthorizationHandler<RegistrationAndLicensingAuthorizationRequirement, string>
  {
    protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, RegistrationAndLicensingAuthorizationRequirement requirement, string targetUserId)
    {
      if ((context.User.IsInRole("Licensing Supervisor")) && context.User.HasClaim(ClaimConstants.Permission, ApplicationPermissions.ManageCustomerProfiles))
        context.Succeed(requirement);
      return Task.CompletedTask;
    }
  }

  public class DispatchLicensingServicesAuthorizationHandler : AuthorizationHandler<RegistrationAndLicensingAuthorizationRequirement, string>
  {
    protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, RegistrationAndLicensingAuthorizationRequirement requirement, string targetUserId)
    {
      if ((context.User.IsInRole("Licensing Officer")) && context.User.HasClaim(ClaimConstants.Permission, ApplicationPermissions.DispatchLicensingServices))
        context.Succeed(requirement);
      return Task.CompletedTask;
    }
  }
  public class ManageProjectProfilesAuthorizationHandler : AuthorizationHandler<RegistrationAndLicensingAuthorizationRequirement, string>
  {
    protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, RegistrationAndLicensingAuthorizationRequirement requirement, string targetUserId)
    {
      if ((context.User.IsInRole("Licensing Officer")) && context.User.HasClaim(ClaimConstants.Permission, ApplicationPermissions.ManageProjectProfiles))
        context.Succeed(requirement);
      return Task.CompletedTask;
    }
  }
}
