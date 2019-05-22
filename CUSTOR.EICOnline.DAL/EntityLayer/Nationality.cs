using System.ComponentModel.DataAnnotations;

namespace CUSTOR.EICOnline.DAL.EntityLayer
{
    public class Nationality
    {
        public int id { get; set; }
        public string code { get; set; }
        public string description { get; set; }
        public string descriptionEnglish { get; set; }
    }

    public class NationalityDTO
    {
        public int id { get; set; }
        public int InvestorId { get; set; }
        public string code { get; set; }
        public string description { get; set; }
        public string descriptionEnglish { get; set; }
    }

    public partial class NationalDTO
    {
        public NationalDTO()
        {
        }
        [Key]
        public string code { get; set; }
        public string description { get; set; }
    }
}