using Core.Entities.Concrete;
using Core.Utilities.Results;
using Core.Utilities.Security.JWT;
using Entities.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface IAuthService
    {
        IDataResult<User> Login(UserForLoginDto userForLoginDto);
        IDataResult<User> Register(UserForRegisterDto userForRegisterDto, string password);
        IDataResult<AccessToken> CreateAccessToken(User user);
        IResult UserExists(string email);
    }
}
