using Core.DataAccess.EntityFramework;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concrete;
using Entities.DTOs;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfProductDal : EfEntityRepositoryBase<Product, InventoryContext>, IProductDal
    {
        public List<Product> GetProductsWithCategory()
        {
            using (var context=new InventoryContext())
            {

                var result = from p in context.Products
                             join c in context.Categories
                             on p.CategoryId equals c.Id
                             select new Product
                             {
                                 Id = p.Id,
                                 Barkod = p.Barkod,
                                 Name = p.Name,
                                 Quantity = p.Quantity,
                                 SalePrice = p.SalePrice,
                                 PurchasePrice = p.PurchasePrice,
                                 CategoryId = c.Id,
                                 Category = c
                             };

                return result.ToList();

            }
        }
    }
}