import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LogInPayload } from '../interfaces/payload.interface';
import { User } from '../interfaces/user.interface';
import userData from '../resources/Users.json';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string | null = '';
  private users: User[] = userData;

  constructor(private httpClient: HttpClient, private router: Router) {
    if (sessionStorage.getItem('userToken')) {
      this.token = sessionStorage.getItem('userToken');
    }

    if (localStorage.getItem('userToken')) {
      this.token = localStorage.getItem('userToken');
    }
  }

  getUsers(): User[] {
    return userData;
  }

  getToken(): string | null {
    return this.token;
  }

  setToken(value: string): void {
    this.token = value;
  }

  logOut() {
    this.token = null;
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigateByUrl('/');
  }

  successLogIn(payload: LogInPayload): boolean {

    for(let user of this.users) {
        if(user.email == payload.email && user.password == payload.password) {
            this.token = "QpwL5tke4Pnpja7X4"; // RANDOM TOKEN
            if(payload.rememberMe) {
              localStorage.setItem('userToken', this.token);
            }
            else {
              sessionStorage.setItem('userToken', this.token);
            }
            return true;
        }
    }
    return false;
  }

  addUser(newUser: User) {
    userData.push(newUser);
    console.log(this.users);
  }
}
