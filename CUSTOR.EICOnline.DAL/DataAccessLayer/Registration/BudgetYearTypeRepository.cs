using CUSTOR.EntityFrameworkCommon;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CUSTOR.EICOnline.DAL.EntityLayer
{
  public class BudgetYearTypeRepository : EFRepository<ApplicationDbContext, BudgetYearType>
  {
    public BudgetYearTypeRepository(ApplicationDbContext context) : base(context)
    {
    }

    public async Task<List<BudgetYearType>> GetAllBudgetYearTypes()
    {
      try
      {
        IQueryable<BudgetYearType> BudgetYearTypes = Context.BudgetYearTypes
            .OrderBy(l => l.Description);

        return await BudgetYearTypes.ToListAsync();
      }
      catch (Exception ex)
      {
        SetError(ex);
        return null;
      }
    }

    public async Task<List<BudgetYearType>> GetAllBudgetYearTypesByLang(string lang)
    {
      try
      {
        return await Context.BudgetYearTypes
            .Select(l => new BudgetYearType
            {              
              Code = l.Code,
              Description = (lang == "et") ? l.amDescription : l.Description
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