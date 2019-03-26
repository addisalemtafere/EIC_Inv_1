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
   public class tblMajorGroupRepository : EFRepository<ApplicationDbContext, tblDivision>
    {
        public tblMajorGroupRepository(ApplicationDbContext context) : base(context)
        {
        }

        public async Task<List<MajorGroup>> GetRecordsById(object Id)
        {
            List<MajorGroup> tblMajorGroups = null;
            try
            {
                int id = (int)Id;
                tblMajorGroups = await Context.MajorGroup
                  .Where(Division => Division.Parent == id)
                                .ToListAsync();
            }
            catch (InvalidOperationException)
            {
                SetError("Couldn't load tblMajorGroups - invalid tblMajorGroups id specified.");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }
            return tblMajorGroups;
        }

        public async Task<List<MajorGroup>> GetRecords()
        {
            List<MajorGroup> tblMajorGroups = null;
            try
            {
                tblMajorGroups = await Context.MajorGroup
                                .ToListAsync();
            }
            catch (InvalidOperationException)
            {
                SetError("Couldn't load tblMajorGroups");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }
            return tblMajorGroups;
        }
    }
}

