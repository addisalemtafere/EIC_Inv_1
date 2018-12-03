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

        public async Task<List<BussinessBranchVM>> GetRecordsByTin(object Tin)
        {
            List<tblBusinessBranch> tblBusinessBranch = null;
            List<BussinessBranchVM> objBussinessBranchVMList = new List<BussinessBranchVM>();
            try
            {
                string tin = Tin.ToString();
                tblBusinessBranch = await Context.tblBusinessBranch.Include("Region").Include("Woreda").Include("Zones")
                  .Where(Branch => Branch.OwnerTIN == tin && Branch.IsReg == true)
                                .ToListAsync();
                foreach (tblBusinessBranch bussinessBranch in tblBusinessBranch)
                {
                    BussinessBranchVM objBussinessBranchVM = new BussinessBranchVM();
                    objBussinessBranchVM.HouseNo = bussinessBranch.HouseNo;
                    objBussinessBranchVM.MainGuid = bussinessBranch.MainGuid.ToString();
                    objBussinessBranchVM.RegionName = bussinessBranch.Region.Description;
                    objBussinessBranchVM.WoredaName = bussinessBranch.Woreda.Description;
                    objBussinessBranchVM.ZoneName = bussinessBranch.Zones.Description;
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

        public async Task<tblBusinessBranch> DeleteRecord(string MainGuid)
        {
            var data = Context.tblBusinessBranch.SingleOrDefault(para => para.MainGuid == new Guid(MainGuid));
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



        public async Task<List<BussinessBranchVM>> GetBussinessBranchByTin(object Tin)
        {
            List<tblBusinessBranch> tblBusinessBranch = null;
            List<BussinessBranchVM> objBussinessBranchVMList = new List<BussinessBranchVM>();
            try
            {
                string tin = Tin.ToString();
                tblBusinessBranch = await Context.tblBusinessBranch.Include("Region").Include("Woreda").Include("Zones")
                  .Where(Branch => Branch.OwnerTIN == tin && Branch.IsReg == false)
                                .ToListAsync();
                foreach (tblBusinessBranch bussinessBranch in tblBusinessBranch)
                {
                    BussinessBranchVM objBussinessBranchVM = new BussinessBranchVM();
                    objBussinessBranchVM.HouseNo = bussinessBranch.HouseNo;
                    objBussinessBranchVM.MainGuid = bussinessBranch.MainGuid.ToString();
                    objBussinessBranchVM.RegionName = bussinessBranch.Region.Description;
                    objBussinessBranchVM.WoredaName = bussinessBranch.Woreda.Description;
                    objBussinessBranchVM.ZoneName = bussinessBranch.Zones.Description;
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



        public async Task<tblBusinessBranch> SaveBussinessBranch(tblBusinessBranch BusinessBranch)
        {
            try
            {
                 tblBusinessBranch registrationBranch = Context.tblBusinessBranch.SingleOrDefault(param => param.MainGuid == BusinessBranch.MainGuid);
                //BusinessBranch = registrationBranch;
                BusinessBranch.BranchName = registrationBranch.BranchName;
                BusinessBranch.City = registrationBranch.City;
                BusinessBranch.Email = registrationBranch.Email;
                BusinessBranch.Fax = registrationBranch.Fax;
                BusinessBranch.HouseNo = registrationBranch.HouseNo;
                BusinessBranch.HouseNoSort = registrationBranch.HouseNoSort;
                BusinessBranch.IsAddisAbaba = registrationBranch.IsAddisAbaba;
                BusinessBranch.IsMainOffice = registrationBranch.IsMainOffice;
                BusinessBranch.KebeleID = registrationBranch.KebeleID;
                BusinessBranch.Location = registrationBranch.Location;
                BusinessBranch.MobileNo = registrationBranch.MobileNo;
                BusinessBranch.OwnerTIN = registrationBranch.OwnerTIN;
                BusinessBranch.Pobox = registrationBranch.Pobox;
                BusinessBranch.RegionID = registrationBranch.RegionID;
                BusinessBranch.Tel = registrationBranch.Tel;
                BusinessBranch.Username = "";
                BusinessBranch.WoredaID = registrationBranch.WoredaID;
                BusinessBranch.Zone = registrationBranch.Zone;
                BusinessBranch.MainGuid = Guid.NewGuid();
                BusinessBranch.IsReg = false;
                BusinessBranch.UpdatedEventDatetime = null;
                BusinessBranch.EventDateTime = DateTime.Now;
                BusinessBranch.ParentGuid = registrationBranch.MainGuid;
                Context.tblBusinessBranch.Add(BusinessBranch);
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
