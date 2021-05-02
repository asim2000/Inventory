using Core.DataAccess.EntityFramework;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq.Expressions;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfOrderDal:EfEntityRepositoryBase<Order,InventoryContext>,IOrderDal
    {
        public override void Add(Order order)
        {
            base.Add(order);
            using(var context=new InventoryContext())
            {
                context.Products.SingleOrDefault(p => p.Id == order.ProductId).Quantity -= order.Quantity;
                context.SaveChanges();
            }
        }

        public override List<Order> GetAll(Expression<Func<Order, bool>> filter = null)
        {
            using (var context=new InventoryContext())
            {
                var orders = from order in context.Orders
                             join product in context.Products
                             on order.ProductId equals product.Id

                             join customer in context.Customers
                             on order.CustomerId equals customer.Id

                             join category in context.Categories
                             on product.CategoryId equals category.Id

                             select new Order()
                             {
                                 Id = order.Id,
                                 CustomerId = order.CustomerId,
                                 Customer = order.Customer,
                                 ProductId = order.ProductId,
                                 Product = new Product() { 
                                 Id=product.Id,
                                 CategoryId=product.CategoryId,
                                 Category=category,
                                 Barkod=product.Barkod,
                                 Quantity=product.Quantity,
                                 Name=product.Name,
                                 PurchasePrice=product.PurchasePrice,
                                 SalePrice=product.SalePrice
                                 },
                                 Price = order.Price,
                                 Quantity = order.Quantity,
                                 Total = order.Total
                             };
                             return orders.ToList();
            }
            
        }
    }
}
