using Business.Abstract;
using Business.BusinessAspects.Autofac;
using Business.Constants;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Concrete
{
    [SecuredOperation("Admin")]
    public class ProductManager : IProductService
    {
        private IProductDal _productDal;
        public ProductManager(IProductDal productDal)
        {
            _productDal = productDal;
        }

        public IDataResult<int> CheckProductCount(Product product)
        {
            var prd = _productDal.Get(p => p.Id == product.Id);
            if (product.Quantity>prd.Quantity)
            {
                return new ErrorDataResult<int>(prd.Quantity);
            }
            return new SuccessDataResult<int>();
        }

        public IResult Create(Product product)
        {
            _productDal.Add(product);
            return new SuccessResult(Messages.ProductAdded);
        }

        public IResult Delete(Product product)
        {
            _productDal.Delete(product);
            return new SuccessResult(Messages.ProductDeleted);
        }

        public IDataResult<Product> Get(int productId)
        {
            var product = _productDal.Get(p => p.Id == productId);
            return new SuccessDataResult<Product>(product);
        }

        public IDataResult<List<Product>> GetAll()
        {
            var products = _productDal.GetAll();
            return new SuccessDataResult<List<Product>>(products);
        }

        public IDataResult<Product> GetProductByBarkod(string barkod)
        {
            var product = _productDal.Get(p => p.Barkod == barkod);
            return new SuccessDataResult<Product>(product);
        }

        public IDataResult<List<Product>> GetProductsWithCategory()
        {
            var products = _productDal.GetProductsWithCategory();
            return new SuccessDataResult<List<Product>>(products);
        }

        public IResult Update(Product product)
        {
            _productDal.Update(product);
            return new SuccessResult(Messages.ProductUpdated);
        }
    }
}
