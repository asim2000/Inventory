import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccessToken } from 'app/models/accessToken';
import { DataResult } from 'app/models/dataResult';
import { User } from 'app/models/user';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
path="https://localhost:44314/api/auth/"
helper = new JwtHelperService();
decodedToken:any

  constructor(private http:HttpClient) { }

  login(user:User){
   return this.http.post<DataResult<AccessToken>>(this.path+"login",user)
  }

  isAuthenticate(){
    var token=localStorage.getItem("token")
    if (!this.helper.isTokenExpired(token)) {
      return true
    }else{
      return false
    }
  }
}
