using CUSTOR.EICOnline.DAL.Enum;
using System;
using System.Collections.Generic;
using System.Text;

namespace CUSTOR.EICOnline.DAL.EntityLayer
{
    public static class InvestorHelper
    {
        public static Address GetAddress(this InvestorDTO investorDTO)
        {
            return new Address
            {
                CellPhoneNo = investorDTO.CellPhoneNo,
                AddressType = (int) AddressType.eInvestor,
                Email = investorDTO.Email,
                Fax = investorDTO.Fax,
                HouseNo = investorDTO.HouseNo,
                IndustrialParkId = -1,
                IsActive = investorDTO.IsActive,
                IsDeleted = investorDTO.IsDeleted,
                IsIndustrialPark = false,
                IsMainOffice = true,
                KebeleId = investorDTO.KebeleId,
                KebeleEngId = investorDTO.KebeleEngId,
                OtherAddress = investorDTO.OtherAddress,
                ParentId = investorDTO.InvestorId,
                RegionId = investorDTO.RegionId,
                Pobox = investorDTO.Pobox,
                Remark = "",
                SpecificAreaName = "",
                TeleNo = investorDTO.TeleNo,
                TownId = "-1",
                WoredaId = investorDTO.WoredaId,
                WoredaEngId = investorDTO.WoredaEngId,
                ZoneId = investorDTO.ZoneId,
                AddressId = investorDTO.AddressId
            };
        }

        public static Investor GetInvestor(this InvestorDTO investorDTO)
        {
            return new Investor
            {
                FatherName = investorDTO.FatherName,
                FatherNameEng = investorDTO.FatherNameEng,
                FatherNameSort = string.Empty,
                FatherNameSoundx = string.Empty,
                FirstName = investorDTO.FirstName,
                FirstNameEng = investorDTO.FirstNameEng,
                FirstNameSort = string.Empty,
                FirstNameSoundx = string.Empty,
                Gender = investorDTO.Gender,
                GrandName = investorDTO.GrandName,
                GrandNameEng = investorDTO.GrandNameEng,
                GrandNameSort = string.Empty,
                GrandNameSoundx = string.Empty,
                InvestorId = investorDTO.InvestorId,
                IsActive = investorDTO.IsActive,
                UserId = investorDTO.UserId,
                IsDeleted = investorDTO.IsDeleted,
                Nationality = investorDTO.Nationality,
                BranchCountry = investorDTO.BranchCountry,
                IsEthiopianOrigin = investorDTO.IsEthiopianOrigin,
                Title = investorDTO.Title,
                Tin = investorDTO.Tin,
                FormOfOwnership = investorDTO.FormOfOwnership,
                LegalStatus = investorDTO.LegalStatus,
                RegistrationDate = investorDTO.RegistrationDate,
                RegistrationNumber = investorDTO.RegistrationNumber,
                PaidCapital = investorDTO.PaidCapital,
                SighnedCapital = investorDTO.SighnedCapital,
                IsExistingCustomer = investorDTO.IsExistingCustomer,
                RegistrationCatagories = investorDTO.RegistrationCatagories,
                //SiteCode = investorDTO.SiteCode
            };
        }

        public static InvestorDTO GetInvestorDTO(Investor inv, Address add, int[] catagory)
        {
            return new InvestorDTO
            {
                FatherName = inv.FatherName,
                FatherNameEng = inv.FatherNameEng,
                FatherNameSort = string.Empty,
                FatherNameSoundx = string.Empty,
                FirstName = inv.FirstName,
                FirstNameEng = inv.FirstNameEng,
                FirstNameSort = string.Empty,
                FirstNameSoundx = string.Empty,
                Gender = inv.Gender,
                GrandName = inv.GrandName,
                GrandNameEng = inv.GrandNameEng,
                GrandNameSort = string.Empty,
                GrandNameSoundx = string.Empty,
                InvestorId = inv.InvestorId,
                IsActive = inv.IsActive,
                IsDeleted = inv.IsDeleted,
                Nationality = inv.Nationality,
                BranchCountry = inv.BranchCountry,
                IsEthiopianOrigin = inv.IsEthiopianOrigin,
                Title = inv.Title,
                Tin = inv.Tin,
                UserId= inv.UserId,
                FormOfOwnership = inv.FormOfOwnership,
                LegalStatus = inv.LegalStatus,
                RegistrationDate = inv.RegistrationDate,
                RegistrationNumber = inv.RegistrationNumber,
                PaidCapital = inv.PaidCapital,
                SighnedCapital = inv.SighnedCapital,
                IsExistingCustomer = inv.IsExistingCustomer,

                RegistrationCatagories = catagory,

                //SiteCode = inv.SiteCode,
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
                AddressId = add.AddressId,
            };
        }
    }
}