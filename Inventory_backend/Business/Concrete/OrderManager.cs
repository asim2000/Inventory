using Business.Abstract;
using Business.Constants;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Concrete
{
    public class OrderManager : IOrderService
    {
        private IOrderDal _orderDal;
        public OrderManager(IOrderDal orderDal)
        {
            _orderDal = orderDal;
        }
        public IResult Create(Order order)
        {
            _orderDal.Add(order);
            return new SuccessResult(Messages.OrderAdded);

        }

        public IResult Delete(Order order)
        {
            _orderDal.Delete(order);
            return new SuccessResult(Messages.OrderDeleted);
        }

        public IDataResult<Order> Get(int orderId)
        {
            var order = _orderDal.Get(p => p.Id == orderId);
            return new SuccessDataResult<Order>(order);
        }

        public IDataResult<List<Order>> GetAll()
        {
            var orders = _orderDal.GetAll();
            return new SuccessDataResult<List<Order>>(orders);
        }

        public IResult Update(Order order)
        {
            _orderDal.Update(order);
            return new SuccessResult(Messages.OrderUpdated);
        }
    }
}
