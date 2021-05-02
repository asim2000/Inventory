using Business.Abstract;
using Core.Utilities.Results;
using Entities.Concrete;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController:ControllerBase
    {
        private IProductService _productService;
        public ProductsController(IProductService productService)
        {
            _productService = productService;
        }
        [HttpGet("getall")]
        public IActionResult GetProductList()
        {
            var result = _productService.GetAll();
            if (result.Success)
            {
                return Ok(result);
            }
                return BadRequest(result);
            }

            [HttpGet("get")]
            public IActionResult GetProductById(int id)
            {
                var result = _productService.Get(id);
                if (!result.Success)
                {
                    return BadRequest(result.Message);
                }
                return Ok(result);
            }

            [HttpPost("add")]
            public IActionResult CreateProduct(Product product)
            {
                var result = _productService.Create(product);
                if (result.Success)
                {
                    return Ok(result);
                }
                return BadRequest(result);
            }

            [HttpPost("update")]
            public IActionResult UpdateProduct(Product product)
            {
                var result = _productService.Update(product);
                if (result.Success)
                {
                    return Ok(result);
                }
                return BadRequest(result);
            }

            [HttpPost("delete")]
            public IActionResult DeleteProduct(Product product)
            {
                var result = _productService.Delete(product);
                if (result.Success)
                {
                    return Ok(result);
                }
                return BadRequest(result);
            }
        [HttpGet("getproductswithcategory")]
        public IActionResult GetProductsWithCategory()
        {
            var result=_productService.GetProductsWithCategory();
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("checkproductcount")]
        public IActionResult CheckProductCount(Product product)
        {
            var result = _productService.CheckProductCount(product);
            
                return Ok(result);
        }
        [HttpGet("getproductbybarkod")]
        public IActionResult GetProductByBarkod(string barkod)
        {
            IDataResult<Product> result = _productService.GetProductByBarkod(barkod);
            if (result.Success)
            {
                return Ok(result);
            }
            else
            {
                return BadRequest(result);
            }
        }
    }
}
