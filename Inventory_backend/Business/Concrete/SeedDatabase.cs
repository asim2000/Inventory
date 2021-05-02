using Business.Abstract;
using Core.Entities.Concrete;
using DataAccess.Concrete.EntityFramework;
using Entities.Dtos;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Business.Concrete
{
    public class SeedDatabase
    {
        private IAuthService _authService;
        public SeedDatabase(IAuthService authService)
        {
            _authService = authService;
        }
        public void AddUser()
        {
            using (var context=new InventoryContext()) 
            {
                
                    if (context.Users.Count()==0)
                    {
                        var user = new UserForRegisterDto()
                        {
                            FirstName="Admin",
                            LastName="Admin",
                            Email="admin@gmail.com"
                        };
                        _authService.Register(user, "12345");

                    var operationClaim = new OperationClaim
                    {
                        Name = "Admin"
                    };
                    context.OperationClaims.Add(operationClaim);
                    context.SaveChanges();
                    context.UserOperationClaims.Add(new UserOperationClaim
                    {
                        OperationClaimId = 1,
                        UserId = 1
                    });
                    context.SaveChanges();
                }
                }
            }
        }
    }
