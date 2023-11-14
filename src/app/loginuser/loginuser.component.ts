import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent {

  
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  
  constructor(private fb: FormBuilder, private router: Router) {}
  
  onSubmit() {
    console.log('Form Submitted:', this.username, this.password);
    
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    console.log('Stored User:', storedUser);
  
    if (storedUser.username === this.username && storedUser.password === this.password) {
      // Login successful, navigate to home page or perform other actions
      // For example, navigate to home page:
      this.router.navigate(['']);
    } else {
      // Invalid credentials
      this.errorMessage = 'Invalid username or password. Please try again.';
      // You can handle error message display in your template file (HTML) using errorMessage variable.
    }
  }
}
