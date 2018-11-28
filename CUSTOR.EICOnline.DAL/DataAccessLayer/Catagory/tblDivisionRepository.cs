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
    public class tblDivisionRepository : EFRepository<ApplicationDbContext, tblDivision>
    {
        public tblDivisionRepository(ApplicationDbContext context) : base(context)
        {
        }

        public async Task<List<tblDivision>> GetRecordsById(object Id)
        {
            List<tblDivision> tblDivisions = null;
            try
            {
                int id = (int)Id;
                tblDivisions = await Context.tblDivision
                  .Where(tblDivision => tblDivision.Parent == id)
                                .ToListAsync();
            }
            catch (InvalidOperationException)
            {
                SetError("Couldn't load tblDivision - invalid tblDivision id specified.");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }
            return tblDivisions;
        }
        public async Task<List<tblDivision>> GetRecords()
        {
            List<tblDivision> tblDivisions = null;
            try
            {
                tblDivisions = await Context.tblDivision
                                .ToListAsync();
            }
            catch (InvalidOperationException)
            {
                SetError("Couldn't load tblDivision - invalid tblDivision id specified.");
                return null;
            }
            catch (Exception ex)
            {
                SetError(ex);
            }
            return tblDivisions;
        }
    }
}
