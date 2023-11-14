import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: { username: string, email: string, password: string } = { username: '', email: '', password: '' };
  errorMessage: string = '';
  successMessage: string = '';
  
  constructor(private fb: FormBuilder) {}
  
  onSubmit() {
    if (!this.user.username || !this.user.email || !this.user.password) {
      this.errorMessage = 'Please fill out all the fields.';
      return;
    }
  
    // Save user data to localStorage
    localStorage.setItem('user', JSON.stringify(this.user));
  
    // Set success message
    this.successMessage = 'Registration successful!';
  
    // Redirect to login page or navigate to home page
  }
}
