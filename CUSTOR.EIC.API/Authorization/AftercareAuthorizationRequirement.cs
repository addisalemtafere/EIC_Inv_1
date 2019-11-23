using CUSTOR.Security;
using Microsoft.AspNetCore.Authorization;
using System.Threading.Tasks;

namespace CUSTOR.EICOnline.API.Authorization
{
  public class AftercareAuthorizationRequirement : IAuthorizationRequirement
  {
    public AftercareAuthorizationRequirement(string operationName)
    {

      this.OperationName = operationName;
    }

    public string OperationName { get; private set; }
  }

  public class ManageAftercareDataAuthorizationHandler : AuthorizationHandler<AftercareAuthorizationRequirement, string>
  {
    protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, AftercareAuthorizationRequirement requirement, string targetUserId)
    {
      if ((context.User.IsInRole("Aftercare Officer")) && context.User.HasClaim(ClaimConstants.Permission, ApplicationPermissions.ManageAftercareData))
        context.Succeed(requirement);
      return Task.CompletedTask;
    }
  }
}
