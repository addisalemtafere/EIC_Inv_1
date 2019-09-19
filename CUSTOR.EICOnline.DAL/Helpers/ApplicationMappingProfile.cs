using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper;
using CUSTOR.EICOnline.DAL.EntityLayer;

namespace CUSTOR.EICOnline.DAL.Helpers
{
    class ApplicationMappingProfile : Profile
    {
        public ApplicationMappingProfile()
        {

            CreateMap<FInvestorAudit, InvestorAudit>().ReverseMap();
        }
    }
}
