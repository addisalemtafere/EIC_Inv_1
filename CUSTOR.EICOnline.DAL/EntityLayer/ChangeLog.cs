using System;

namespace Sample.EntityLayer
{
  public partial class ChangeLog : IEntity
  {
    public ChangeLog()
    {
    }

    public ChangeLog(Int32? changeLogID)
    {
      ChangeLogID = changeLogID;
    }

    public Int32? ChangeLogID { get; set; }

    public String ClassName { get; set; }

    public String PropertyName { get; set; }

    public String Key { get; set; }

    public String OriginalValue { get; set; }

    public String CurrentValue { get; set; }

    public String UserName { get; set; }

    public DateTime? ChangeDate { get; set; }
  }
}