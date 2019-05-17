namespace CUSTOR.EICOnline.DAL.EntityLayer
{
    public class NationalityCompositionDTO
    {
        public int ProjectNationalityCompositionId { get; set; }
        public int ProjectId { get; set; }
        public string Nationality { get; set; }
        public int Qty { get; set; }
        public decimal SharePercent { get; set; }
        public string Description { get; set; }
    }
}