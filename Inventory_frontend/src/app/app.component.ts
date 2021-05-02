import { Component, OnInit} from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  helper = new JwtHelperService();
  constructor(private authService:AuthService){
  }
  ngOnInit(): void {
    this.authService.decodedToken=this.helper.decodeToken(localStorage.getItem("token"))
  }

}
