using System;
using System.ComponentModel.DataAnnotations;

namespace CUSTOR.EICOnline.DAL.EntityLayer
{
    public class Country
    {
        [Key] 
        public int Id { get; set; }
        public string English { get; set; }
        public string Amharic { get; set; }
    }
    public class CountryDTO
    {
        [Key] 
        public int Id { get; set; }
        public string English { get; set; }
        public string Amharic { get; set; }
        public int  InvestorId { get; set; }
        
        
    }
    
}