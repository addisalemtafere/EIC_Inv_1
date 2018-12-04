using CUSTOR.EICOnline.DAL.EntityLayer;
using CUSTOR.EICOnline.DAL.EntityLayer;
using CUSTOR.EntityFrameworkCommon;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CUSTOR.EICOnline.DAL.DataAccessLayer.Bussiness
{
   public class BusinessBranchRepository : EFRepository<ApplicationDbContext, tblBusinessBranch>
    {
        public BusinessBranchRepository(ApplicationDbContext context) : base(context)
        {
        }

        public async Task<List<BussinessBranchVM>> GetRecordsByinvestorId(int investorId)
        {
            List<CUSTOR.EICOnline.DAL.EntityLayer.Address> BusinessBranch = null;
            List<BussinessBranchVM> objBussinessBranchVMList = new List<BussinessBranchVM>();
            try
            {
                BusinessBranch = await Context.Address.Include("Region").Include("Woreda").Include("Zone")
                  .Where(Branch => Branch.ParentId == investorId && Branch.AddressType == 1)
                                .ToListAsync();
                foreach (CUSTOR.EICOnline.DAL.EntityLayer.Address bussinessBranch in BusinessBranch)
                {
                    BussinessBranchVM objBussinessBranchVM = new BussinessBranchVM();
                    objBussinessBranchVM.AddressId = bussinessBranch.AddressId;
                    objBussinessBranchVM.HouseNo = bussinessBranch.HouseNo;
                    objBussinessBranchVM.ParentId = bussinessBranch.ParentId.ToString();
                    objBussinessBranchVM.RegionName = bussinessBranch.Region.Description;
                    objBussinessBranchVM.WoredaName = bussinessBranch.Woreda.Description;
                    objBussinessBranchVM.ZoneName = bussinessBranch.Zone.Description;
                    objBussinessBranchVMList.Add(objBussinessBranchVM);
                }
            }
            catch (InvalidOperationException ex1)
            {
                SetError("Couldn't load tblRegistration - invalid tblRegistration id specified.");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }
            return objBussinessBranchVMList;
        }

        public async Task<CUSTOR.EICOnline.DAL.EntityLayer.Address> DeleteRecord(int AddressId)
        {
            var data = Context.Address
                .SingleOrDefault(para => para.AddressId == AddressId);
            try
            {
              
                Context.Remove(data);
               await Context.SaveChangesAsync();

            }
            catch (InvalidOperationException ex1)
            {
                SetError("Couldn't load tblRegistration - invalid tblRegistration id specified.");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }
            return data;
        }



        public async Task<List<BussinessBranchVM>> GetBussinessBranchById(int BussinessId)
        {
            List<CUSTOR.EICOnline.DAL.EntityLayer.Address> BusinessBranch = null;
            List<BussinessBranchVM> objBussinessBranchVMList = new List<BussinessBranchVM>();
            try
            {
                BusinessBranch = await Context.Address.Include("Region").Include("Woreda").Include("Zone")
                  .Where(Branch => Branch.ParentId == BussinessId && Branch.AddressType == 4)
                                .ToListAsync();
                foreach (CUSTOR.EICOnline.DAL.EntityLayer.Address bussinessBranch in BusinessBranch)
                {
                    BussinessBranchVM objBussinessBranchVM = new BussinessBranchVM();
                    objBussinessBranchVM.AddressId = bussinessBranch.AddressId;
                    objBussinessBranchVM.HouseNo = bussinessBranch.HouseNo;
                    objBussinessBranchVM.ParentId = bussinessBranch.ParentId.ToString();
                    objBussinessBranchVM.RegionName = bussinessBranch.Region.Description;
                    objBussinessBranchVM.WoredaName = bussinessBranch.Woreda.Description;
                    objBussinessBranchVM.ZoneName = bussinessBranch.Zone.Description;
                    objBussinessBranchVMList.Add(objBussinessBranchVM);
                }
            }
            catch (InvalidOperationException ex1)
            {
                SetError("Couldn't load tblRegistration - invalid tblRegistration id specified.");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }
            return objBussinessBranchVMList;
        }



        public async Task<CUSTOR.EICOnline.DAL.EntityLayer.Address> SaveBussinessBranch(CUSTOR.EICOnline.DAL.EntityLayer.Address BusinessBranch)
        {
            try
            {
                CUSTOR.EICOnline.DAL.EntityLayer.Address registrationBranch = Context.Address.SingleOrDefault(param => param.AddressId == BusinessBranch.AddressId);
                //BusinessBranch = registrationBranch;
                BusinessBranch.AddressId = 0;
                BusinessBranch.Town = registrationBranch.Town;
                BusinessBranch.Email = registrationBranch.Email;
                BusinessBranch.Fax = registrationBranch.Fax;
                BusinessBranch.HouseNo = registrationBranch.HouseNo;
                BusinessBranch.IsMainOffice = registrationBranch.IsMainOffice;
                BusinessBranch.KebeleId = registrationBranch.KebeleId;
                BusinessBranch.CellPhoneNo = registrationBranch.CellPhoneNo;
                BusinessBranch.Pobox = registrationBranch.Pobox;
                BusinessBranch.RegionId = registrationBranch.RegionId;
                BusinessBranch.TeleNo = registrationBranch.TeleNo;
                BusinessBranch.CreatedUserName = "";
                BusinessBranch.WoredaId = registrationBranch.WoredaId;
                BusinessBranch.ZoneId = registrationBranch.ZoneId;
                BusinessBranch.ObjectId = Guid.NewGuid();
                BusinessBranch.UpdatedEventDatetime = null;
                BusinessBranch.EventDatetime = DateTime.Now;
                BusinessBranch.ParentId = registrationBranch.ParentId;
                BusinessBranch.AddressType = 4;
                Context.Address.Add(BusinessBranch);
                await Context.SaveChangesAsync();
            }

            catch (InvalidOperationException ex1)
            {
                SetError("Couldn't load tblBusinessBranch - invalid tblbusiness id specified.");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }
            return BusinessBranch;
        }

    }
}
