using System.ComponentModel.DataAnnotations;

namespace CUSTOR.EICOnline.DAL.EntityLayer.AllAddress
{
    public partial class Nationality
    {
        public Nationality()
        {
        }

        public int id { get; set; }
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

        [Key] public int id { get; set; }
        public string descriptionEnglish { get; set; }
    }
}