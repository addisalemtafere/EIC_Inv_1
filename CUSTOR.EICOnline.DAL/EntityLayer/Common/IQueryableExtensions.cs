﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CUSTOR.EICOnline.DAL.EntityLayer
{
    public static class IQueryableExtensions
    {
        public static IQueryable<TModel> Paging<TModel>(this IQueryable<TModel> query, int pageSize = 0, int pageNumber = 0) where TModel : class
            => pageSize > 0 && pageNumber > 0 ? query.Skip((pageNumber - 1) * pageSize).Take(pageSize) : query;
    }
}
