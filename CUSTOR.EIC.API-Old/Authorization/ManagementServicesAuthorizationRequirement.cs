using CUSTOR.Security;
using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CUSTOR.EICOnline.API.Authorization
{
  public class ManagementServicesAuthorizationRequirement : IAuthorizationRequirement
  {
    public ManagementServicesAuthorizationRequirement(string operationName)
    {

      this.OperationName = operationName;
    }

    public string OperationName { get; private set; }
  }

  public class ViewReadOnlyDataAuthorizationHandler : AuthorizationHandler<ManagementServicesAuthorizationRequirement, string>
  {
    protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, ManagementServicesAuthorizationRequirement requirement, string targetUserId)
    {
      if ((context.User.IsInRole("EIC Management")) && context.User.HasClaim(ClaimConstants.Permission, ApplicationPermissions.ViewReadOnlyData))
        context.Succeed(requirement);
      return Task.CompletedTask;
    }
  }
}
