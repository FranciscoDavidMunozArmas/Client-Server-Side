import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/interfaces/User';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user: User;

  message: string = "";
  private cookieName:string = "logged-user";

  constructor(private userService: UserService, private router: Router, private cookie: CookieService) { }

  ngOnInit(): void {
    const cookieValue = this.cookie.get(this.cookieName);
    if(cookieValue){
      this.router.navigate(['/calendar']);
    }
  }

  onChange(e: any){
    this.user = {... this.user, [e.target.name]:e.target.value};
  }

  logIn(e:any){
    e.preventDefault();
    this.message = "";
    this.userService.allowAccess(this.user)
    .subscribe(res => {
      const access: any = res;
      if(!access){
        this.message = "User not found";
      } else {
        this.letUserIn(access.token);
      }
    });
  }

  letUserIn(token:string){
    let date = new Date();
    date.setHours(date.getHours() + 2);
    this.cookie.set(this.cookieName, token, date);
    this.router.navigate(['/calendar']);
  }

}
