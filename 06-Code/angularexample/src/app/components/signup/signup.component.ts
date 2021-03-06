import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/interfaces/User';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: any = {
    name: "",
    password: "",
  }

  message: string = "";
  private cookieName:string = "logged-user";

  constructor(private userService: UserService, 
    private router: Router, 
    private cookie: CookieService) { }

  ngOnInit(): void {
    const cookieValue = this.cookie.get(this.cookieName);
    if(cookieValue){
      this.router.navigate(['/calendar']);
    }
  }

  onChange(e: any){
    this.user = {... this.user, [e.target.name]:e.target.value};
  }

  signUp(e:any){
    e.preventDefault();
    this.message = "";
    const user: User = this.user;
    this.userService.postUser(user)
    .subscribe(res => {
      const user:User = res;
      if(!user){
        this.message = "User already exists";
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
}
