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
  public class tblSubGroupRepository : EFRepository<ApplicationDbContext, tblSubGroup>
    {
        public tblSubGroupRepository(ApplicationDbContext context) : base(context)
        {
        }

        public async Task<List<tblSubGroup>> GetRecordsById(object Id)
        {
            List<tblSubGroup> tblSubGroups = null;
            try
            {
                int id = (int)Id;
                tblSubGroups = await Context.tblSubGroup
                  .Where(SubGroup => SubGroup.Parent == id)
                                .ToListAsync();
            }
            catch (InvalidOperationException)
            {
                SetError("Couldn't load Investor - invalid Investor id specified.");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }
            return tblSubGroups;
        }

        public async Task<List<tblSubGroup>> GetRecords()
        {
            List<tblSubGroup> tblSubGroups = null;
            try
            {
                tblSubGroups = await Context.tblSubGroup
                                .ToListAsync();
            }
            catch (InvalidOperationException)
            {
                SetError("Couldn't load tblSubGroup");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }
            return tblSubGroups;
        }
    }
}
