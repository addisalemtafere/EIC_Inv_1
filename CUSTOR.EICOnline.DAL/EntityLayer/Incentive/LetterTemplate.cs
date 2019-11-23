using System;
using System.ComponentModel.DataAnnotations;

namespace CUSTOR.EICOnline.DAL.EntityLayer
{
  public class LetterTemplate
  {
    public int LetterTemplateId { get; set; }
    public int LetterType { get; set; }
    public string ToOrg { get; set; }
    public string Title { get; set; }
    public string CC { get; set; }
    public string LetterContent { get; set; }
    public Boolean? IsActive { get; set; }
  }
  public class LetterTemplateDTO
  {
    [Key]
    public int LetterTemplateId { get; set; }
    public string LetterType { get; set; }
    public string LetterContent { get; set; }
  }
}
