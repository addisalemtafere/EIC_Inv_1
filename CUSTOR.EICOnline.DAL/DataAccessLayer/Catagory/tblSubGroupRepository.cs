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
  public class tblSubGroupRepository : EFRepository<ApplicationDbContext, SubGroup>
    {
        public tblSubGroupRepository(ApplicationDbContext context) : base(context)
        {
        }

        public async Task<List<SubGroup>> GetRecordsById(object Id)
        {
            List<SubGroup> tblSubGroups = null;
            try
            {
                int id = (int)Id;
                tblSubGroups = await Context.SubGroup
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

        public async Task<List<SubGroup>> GetRecords()
        {
            List<SubGroup> tblSubGroups = null;
            try
            {
                tblSubGroups = await Context.SubGroup
                                .ToListAsync();
            }
            catch (InvalidOperationException)
            {
                SetError("Couldn't load SubGroup");
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
