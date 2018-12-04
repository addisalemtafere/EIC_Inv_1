using CUSTOR.Security;
using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CUSTOR.EICOnline.API.Authorization
{
  public class IncentiveManagementAuthorizationRequirement : IAuthorizationRequirement
  {
    public IncentiveManagementAuthorizationRequirement(string operationName)
    {

      this.OperationName = operationName;
    }

    public string OperationName { get; private set; }
  }

  public class ManageIncentiveAssignedServicesAuthorizationHandler : AuthorizationHandler<IncentiveManagementAuthorizationRequirement, string>
  {
    protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, IncentiveManagementAuthorizationRequirement requirement, string targetUserId)
    {
      if ((context.User.IsInRole("Incentive Supervisor")) && context.User.HasClaim(ClaimConstants.Permission, ApplicationPermissions.ManageIncentiveAssignedServices))
        context.Succeed(requirement);
      return Task.CompletedTask;
    }
  }
  public class ApproveIncentiveUploadedItemsAuthorizationHandler : AuthorizationHandler<IncentiveManagementAuthorizationRequirement, string>
  {
    protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, IncentiveManagementAuthorizationRequirement requirement, string targetUserId)
    {
      if ((context.User.IsInRole("Incentive Officer")) && context.User.HasClaim(ClaimConstants.Permission, ApplicationPermissions.ApproveIncentiveUploadedItems))
        context.Succeed(requirement);
      return Task.CompletedTask;
    }
  }
  public class DispatchIncentivesServicesAuthorizationHandler : AuthorizationHandler<IncentiveManagementAuthorizationRequirement, string>
  {
    protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, IncentiveManagementAuthorizationRequirement requirement, string targetUserId)
    {
      if ((context.User.IsInRole("Incentive Supervisor")) && context.User.HasClaim(ClaimConstants.Permission, ApplicationPermissions.DispatchIncentivesServices))
        context.Succeed(requirement);
      return Task.CompletedTask;
    }
  }
}
