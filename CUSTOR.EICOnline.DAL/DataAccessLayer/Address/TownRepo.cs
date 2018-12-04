using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CUSTOR.EICOnline.DAL.EntityLayer;
using CUSTOR.EntityFrameworkCommon;
using Microsoft.EntityFrameworkCore;

namespace CUSTOR.EICOnline.DAL.DataAccessLayer.Address
{
    public class TownRepo : EFRepository<ApplicationDbContext, Town>
    {
        public TownRepo(ApplicationDbContext context) : base(context)
        { }

        public async Task<List<Town>> GetTowns(object rId)
        {
            try
            {
                string id = rId.ToString();
                IQueryable<Town> towns = Context.Towns;
                int i = towns.Where(x => x.RegionId == id).Count();
                return await towns.Where(x => x.RegionId == id).ToListAsync();                
            }
            catch (Exception ex)
            {
                SetError(ex);
                return null;
            }
        }
        public async Task<List<Town>> GetTowns(int page = 0, int pageSize = 15)
        {

            IQueryable<Town> towns = Context.Towns
                      .Include(r => r.Region)
                       .OrderBy(zo => zo.TownId);
            if (page > 0)
            {
                towns = towns
                .Skip((page - 1) * pageSize)
                .Take(pageSize);
            }

            return await towns.ToListAsync();
        }
        public Town GetTown(object rId)
        {
            Town town = null;
            try
            {
                string id = rId.ToString();
                town = Context.Towns
                               .Include(r => r.Region)
                           .Where(x => x.TownId == id).FirstOrDefault();
            }
            catch (Exception ex)
            {
                SetError(ex);
                return null;
            }
            return town;
        }
        public async Task<bool> DeleteTown(string id)
        {

            var Town = await Context.Towns
                .FirstOrDefaultAsync(zo => zo.TownId == id);
            if (Town == null)
            {
                SetError("Town does not exist");
                return false;
            }
            Context.Towns.Remove(Town);
            return await SaveAsync();

        }
        public async Task<List<TownViewModel>> GetAllTowns(string lang)
        {
            try
            {
                //IQueryable<Town> towns = Context.Towns;
                //int i = towns.Where(x => x.RegionId == id).Count();
                //return await towns.Where(x => x.RegionId == id).ToListAsync();
                ////string id = rId.ToString();
                return await Context.Towns
                    .Select(z => new TownViewModel

                    {
                        TownId = z.TownId,
                        RegionId = z.RegionId,
                        Description = (lang == "et") ? z.Description : z.DescriptionEnglish
                    })
                    .ToListAsync();
            }
            catch (Exception ex)
            {
                SetError(ex);
                return null;
            }
        }
    }
}