using System;
using System.Collections.Generic;
using System.Text;

namespace CUSTOR.EICOnline.DAL.EntityLayer
{
	public partial class Followup
	{

		public int? Id { get; set; }
//		  public string ParentGuid { get; set; }
		  public int? ProjectId { get; set; }
		  public string InvestorName { get; set; }
		  public DateTime? FollowupDate { get; set; }
		  public string FollowupFinding { get; set; }
		  public int ServiceId { get; set; }
		  public int DecisionMade { get; set; }
		  public string OfficerRemark { get; set; }
		public DateTime? EventDateTime { get; set; }
		public int? CreatedUserId { get; set; }
		public string CreatedUserName { get; set; }
		public  DateTime? UpdatedEventDatetime { get; set; }
		public  int? UpdatedUserId { get; set; }
		public string UpdatedUserName { get; set; }
	}
}
