import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/models/user';
import { AlertifyService } from 'app/services/alertify.service';
import { AuthService } from 'app/services/auth.service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:User=new User()
helper = new JwtHelperService();
  constructor(private authService:AuthService,private alertifyService:AlertifyService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
  this.authService.login(this.user)
  .subscribe(response=>{
    if (response.success) {
      this.authService.decodedToken=this.helper.decodeToken(response.data.token)
      console.log(this.authService.decodedToken)
      localStorage.setItem("token",response.data.token)
      this.router.navigate(['/sale'])
      this.alertifyService.success(response.message)
    }else{
      this.alertifyService.error(response.message)
    }
  },err=>this.alertifyService.error(err.error.message))
  }

}
