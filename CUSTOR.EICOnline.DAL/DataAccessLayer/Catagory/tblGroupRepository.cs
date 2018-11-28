using CUSTOR.EICOnline.DAL.EntityLayer;
using CUSTOR.EntityFrameworkCommon;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CUSTOR.EICOnline.DAL.DataAccessLayer
{
   public class tblGroupRepository : EFRepository<ApplicationDbContext, tblGroup>
    {
        public tblGroupRepository(ApplicationDbContext context) : base(context)
        {
        }

        public async Task<List<tblGroup>> GetRecordsById(object Id)
        {
            List<tblGroup> tblGroups = null;
            try
            {
                int id = (int)Id;
                tblGroups = await Context.tblGroup
                  .Where(tblGroup => tblGroup.Parent == id)
                                .ToListAsync();
            }
            catch (InvalidOperationException)
            {
                SetError("Couldn't load tblGroup - invalid tblGroup id specified.");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }
            return tblGroups;
        }

        public async Task<List<tblGroup>> GetRecords()
        {
            List<tblGroup> tblGroups = null;
            try
            {
                tblGroups = await Context.tblGroup
                                .ToListAsync();
            }
            catch (InvalidOperationException)
            {
                SetError("Couldn't load tblGroup");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }
            return tblGroups;
        }

    }
}
