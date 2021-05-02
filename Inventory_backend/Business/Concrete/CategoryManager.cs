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
    public class CategoryManager : ICategoryService
    {
        public ICategoryDal _categoryDal;
        public CategoryManager(ICategoryDal categoryDal)
        {
            _categoryDal = categoryDal;
        }
        public IResult Create(Category category)
        {
            _categoryDal.Add(category);
            return new SuccessResult(Messages.CategoryAdded);
        }

        public IDataResult<Category> Get(int categoryId)
        {
            var category = _categoryDal.Get(c=>c.Id==categoryId);
            return new SuccessDataResult<Category>(category);
        }

        public IDataResult<List<Category>> GetAll()
        {
            var categories = _categoryDal.GetAll();
            return new SuccessDataResult<List<Category>>(categories);
        }
    }
}
