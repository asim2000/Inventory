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
        public class CustomersController : ControllerBase
        {
            private ICustomerService _customerService;
            public CustomersController(ICustomerService customerService)
            {
                _customerService = customerService;
            }
            [HttpGet("getall")]
            public IActionResult GetCustomerList()
            {
                var result = _customerService.GetAll();
                if (result.Success)
                {
                    return Ok(result);
                }
                return BadRequest(result);
            }

            [HttpGet("get")]
            public IActionResult GetCustomerById(int id)
            {
                var result = _customerService.Get(id);
                if (!result.Success)
                {
                    return BadRequest(result.Message);
                }
                return Ok(result);
            }

            [HttpPost("add")]
            public IActionResult CreateCustomer(Customer customer)
            {
                var result = _customerService.Create(customer);
                if (result.Success)
                {
                    return Ok(result);
                }
                return BadRequest(result);
            }

            [HttpPost("update")]
            public IActionResult UpdateCustomer(Customer customer)
            {
                var result = _customerService.Update(customer);
                if (result.Success)
                {
                    return Ok(result);
                }
                return BadRequest(result);
            }

            [HttpPost("delete")]
            public IActionResult DeleteCustomer(Customer customer)
            {
                var result = _customerService.Delete(customer);
                if (result.Success)
                {
                    return Ok(result);
                }
                return BadRequest(result);
            }
        [HttpGet("getcustomerbyidentity")]
        public IActionResult GetCustomerByIdentity(string identity)
        {
            IDataResult<Customer> result = _customerService.GetCustomerByIdentity(identity);
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
