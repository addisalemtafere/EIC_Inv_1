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
   public class tblGroupRepository : EFRepository<ApplicationDbContext, Group>
    {
        public tblGroupRepository(ApplicationDbContext context) : base(context)
        {
        }

        public async Task<List<Group>> GetRecordsById(object Id)
        {
            List<Group> tblGroups = null;
            try
            {
                int id = (int)Id;
                tblGroups = await Context.Group
                  .Where(Group => Group.Parent == id)
                                .ToListAsync();
            }
            catch (InvalidOperationException)
            {
                SetError("Couldn't load Group - invalid Group id specified.");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }
            return tblGroups;
        }

        public async Task<List<Group>> GetRecords()
        {
            List<Group> tblGroups = null;
            try
            {
                tblGroups = await Context.Group
                                .ToListAsync();
            }
            catch (InvalidOperationException)
            {
                SetError("Couldn't load Group");
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
