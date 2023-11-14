import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === '123') {
      // Successful login
      this.loginError = false;
      // Redirect to the admin page (you should define your admin route)
      this.router.navigate(['/admin/adminpage']);
    } else {
      // Failed login
      this.loginError = true;
    }
  }
}