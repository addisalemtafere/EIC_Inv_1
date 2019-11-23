using CUSTOR.EICOnline.DAL.Enum;
using CUSTOR.Security;
using System;
using System.Collections.Generic;
using System.Text;

namespace CUSTOR.EICOnline.DAL.EntityLayer
{
    public static class AssociateHelper
    {
        public static Associate GetAssociate(this AssociateDTO associateDTO)
        {
            return new Associate
            {
                AssociateId = associateDTO.AssociateId,
                DateOfBirth = associateDTO.DateOfBirth,
                FatherName = associateDTO.FatherName,
                FatherNameEng = associateDTO.FatherNameEng,
                FatherNameSort = string.Empty,
                FatherNameSoundx = string.Empty,
                FirstName = associateDTO.FirstName,
                FirstNameEng = associateDTO.FirstNameEng,
                FirstNameSort = string.Empty,
                FirstNameSoundx = string.Empty,
                Gender = associateDTO.Gender,
                GrandName = associateDTO.GrandName,
                GrandNameEng = associateDTO.GrandNameEng,
                GrandNameSort = string.Empty,
                GrandNameSoundx = string.Empty,
                IsActive = associateDTO.IsActive,
                IsDeleted = associateDTO.IsDeleted,
                Nationality = associateDTO.Nationality,
                Origin = associateDTO.Origin,
                Remark = string.Empty,
                Title = associateDTO.Title,
                Tin = associateDTO.Tin,
                InvestorId = associateDTO.InvestorId

            
            };
        }
        public static Address GetAddress(this AssociateDTO AssociateDTO)
        {
            return new Address
            {
                CellPhoneNo = AssociateDTO.CellPhoneNo,
                AddressType = (int)AddressType.eManager,
                Email = AssociateDTO.Email,
                Fax = AssociateDTO.Fax,
                HouseNo = AssociateDTO.HouseNo,
                IndustrialParkId = -1,
                IsActive = AssociateDTO.IsActive,
                IsDeleted = AssociateDTO.IsDeleted,
                IsIndustrialPark = false,
                IsMainOffice = true,
                KebeleId = AssociateDTO.KebeleId,
                KebeleEngId = AssociateDTO.KebeleEngId,
                OtherAddress = AssociateDTO.OtherAddress,
                ParentId = AssociateDTO.AssociateId,
                RegionId = AssociateDTO.RegionId,
                Pobox = AssociateDTO.Pobox,
                Remark = "",
                SpecificAreaName = "",
                TeleNo = AssociateDTO.TeleNo,
                TownId = "-1",
                WoredaId = AssociateDTO.WoredaId,
                WoredaEngId = AssociateDTO.WoredaEngId,
                ZoneId = AssociateDTO.ZoneId,
                AddressId = AssociateDTO.AddressId
            };
        }
        public static AssociateDTO GetAssociateDTO(Associate ass, Address add)
        {
            return new AssociateDTO
            {
                FatherName = ass.FatherName,
                FatherNameEng = ass.FatherNameEng,
                //FatherNameSort = string.Empty,
                //FatherNameSoundx = string.Empty,
                FirstName = ass.FirstName,
                FirstNameEng = ass.FirstNameEng,
                //FirstNameSort = string.Empty,
                //FirstNameSoundx = string.Empty,
                Gender = ass.Gender,
                GrandName = ass.GrandName,
                GrandNameEng = ass.GrandNameEng,
                //GrandNameSort = string.Empty,
                //GrandNameSoundx = string.Empty,
                AssociateId = ass.AssociateId,
                IsActive = ass.IsActive,
                IsDeleted = ass.IsDeleted,
                Nationality = ass.Nationality,
                Origin = ass.Origin,
                Title = ass.Title,
                Tin = ass.Tin,
                CellPhoneNo = add.CellPhoneNo,
                Email = add.Email,
                Fax = add.Fax,
                HouseNo = add.HouseNo,
                KebeleId = add.KebeleId,
                KebeleEngId = add.KebeleEngId,
                OtherAddress = add.OtherAddress,
                RegionId = add.RegionId,
                Pobox = add.Pobox,
                TeleNo = add.TeleNo,
                WoredaId = add.WoredaId,
                WoredaEngId = add.WoredaEngId,
                ZoneId = add.ZoneId,
                AddressId = add.AddressId
            };
        }

    }
}
