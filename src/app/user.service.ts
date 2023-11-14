import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedInUser: any;

  constructor() {
   
    const storedUserData = localStorage.getItem('user');
    this.loggedInUser = storedUserData ? JSON.parse(storedUserData) : {};
  }

 
  saveUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.loggedInUser = user;
  }


  getUser(): any {
    return this.loggedInUser;
  }

  clearUser() {
    localStorage.removeItem('user');
    this.loggedInUser = {};
  }
  


}
