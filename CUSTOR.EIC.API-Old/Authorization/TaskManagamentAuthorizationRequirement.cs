using CUSTOR.Security;
using Microsoft.AspNetCore.Authorization;
using System.Threading.Tasks;
using EICOnline.Authorization;

namespace CUSTOR.Authorization
{
  public class TaskManagementAuthorizationRequirement : IAuthorizationRequirement
  {
    public TaskManagementAuthorizationRequirement(string operationName)
    {

      this.OperationName = operationName;
    }

    public string OperationName { get; private set; }
  }

  public class ManageTasksAuthorizationHandler : AuthorizationHandler<TaskManagementAuthorizationRequirement, string>
  {
    protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, TaskManagementAuthorizationRequirement requirement, string targetUserId)
    {
      if ((context.User.IsInRole("Task Management")) && context.User.HasClaim(ClaimConstants.Permission, ApplicationPermissions.ManageServiceList))
        context.Succeed(requirement);
      return Task.CompletedTask;
    }
  }
  public class ViewServiceListAuthorizationHandler : AuthorizationHandler<TaskManagementAuthorizationRequirement, string>
  {
    protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, TaskManagementAuthorizationRequirement requirement, string targetUserId)
    {
      if ((context.User.IsInRole("Task Management")) && context.User.HasClaim(ClaimConstants.Permission, ApplicationPermissions.ViewServiceRequests))
        context.Succeed(requirement);
      return Task.CompletedTask;
    }
  }
}