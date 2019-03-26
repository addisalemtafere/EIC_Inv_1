using CUSTOR.Security;
using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CUSTOR.EICOnline.API.Authorization
{
  public class ServiceApplicationManagamentAuthorizationRequirement : IAuthorizationRequirement
  {
    public ServiceApplicationManagamentAuthorizationRequirement(string operationName)
    {

      this.OperationName = operationName;
    }

    public string OperationName { get; private set; }
  }

  public class ManageServiceApplicationAuthorizationHandler : AuthorizationHandler<ServiceApplicationManagamentAuthorizationRequirement, string>
  {
    protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, ServiceApplicationManagamentAuthorizationRequirement requirement, string targetUserId)
    {
      if ((context.User.IsInRole("Service Application Management")) && context.User.HasClaim(ClaimConstants.Permission, ApplicationPermissions.ManageServiceApplication))
        context.Succeed(requirement);
      return Task.CompletedTask;
    }
  }
  public class ViewServiceApplicationAuthorizationHandler : AuthorizationHandler<ServiceApplicationManagamentAuthorizationRequirement, string>
  {
    protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, ServiceApplicationManagamentAuthorizationRequirement requirement, string targetUserId)
    {
      if ((context.User.IsInRole("Service Application Management")) && context.User.HasClaim(ClaimConstants.Permission, ApplicationPermissions.ViewServiceRequests))
        context.Succeed(requirement);
      return Task.CompletedTask;
    }
  }
}