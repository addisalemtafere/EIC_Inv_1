using CUSTOR.EICOnline.DAL.EntityLayer;
using CUSTOR.EntityFrameworkCommon;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CUSTOR.EICOnline.DAL.DataAccessLayer.Incentive
{
    public class IncentiveBoMRequestItemsRepository : EFRepository<ApplicationDbContext, IncentiveBoMRequestItem>
    {
        public IncentiveBoMRequestItemsRepository(ApplicationDbContext context) : base(context)
        {
        }

        public async Task<List<IncentiveBoMRequestItem>> GetActivitys(int page = 0, int pageSize = 15)
        {
            IQueryable<IncentiveBoMRequestItem> incentiveBoMRequestItems = Context.IncentiveBoMRequestItem
                .OrderBy(Act => Act.IncentiveBoMRequestItemId);
            if (page > 0)
            {
                incentiveBoMRequestItems = incentiveBoMRequestItems
                    .Skip((page - 1) * pageSize)
                    .Take(pageSize);
            }

            return await incentiveBoMRequestItems.ToListAsync();
        }

        public Task<List<IncentiveBoMRequestItemDTO>> GetIncentiveBoMRequestItemByProjectId(int id, string lang,
            int page = 0, int pageSize = 15)
        {
            string FieldName = StaticDataHelper.GetFieldName(lang);
            string query1 =$@"(select (Select {FieldName} from Lookup,IncentiveBoMRequestItem Where LookUpTypeId='10781' AND Lookup.LookupId=IncentiveBoMRequestItem.IncentiveCategoryId) as Phase,
                                Description,UploadDate,Quantity,ProjectId from IncentiveBoMRequestItem)";

            IQueryable<IncentiveBoMRequestItemDTO> IncentiveBoMRequestItems = Context.IncentiveBoMRequestItemDTO
                .Where(Ince => Ince.ProjectId == id)
                .FromSql(query1);
            if (page > 0)
            {
                IncentiveBoMRequestItems = IncentiveBoMRequestItems
                    .Skip((page - 1) * pageSize)
                    .Take(pageSize);
            }
            return IncentiveBoMRequestItems.ToListAsync();
        }

        public async Task<IEnumerable<IncentiveBoMRequestItem>> GetAllItems(int projectId, int incentiveCategoryId,
            int Phase)
        {
            var incentiveBoMRequestItems = Context.IncentiveBoMRequestItem
                .Where(item =>
                    item.ProjectId == projectId && item.IncentiveCategoryId == incentiveCategoryId &&
                    item.Phase == Phase)
                .OrderBy(item => item.Description);
            return await incentiveBoMRequestItems.ToListAsync();
        }

        public async Task<IncentiveBoMRequestItem> GetItem(int id)
        {
            var incentiveBoMRequestItem = Context.IncentiveBoMRequestItem
                .Where(item => item.IncentiveBoMRequestItemId == id)
                .FirstOrDefaultAsync();
            return await incentiveBoMRequestItem;
        }
    }
}