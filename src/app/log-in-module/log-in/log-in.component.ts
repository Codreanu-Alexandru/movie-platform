import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../helpers/custom-validators';
import { AuthService } from 'src/app/services/auth.service';
import { LogInPayload } from 'src/app/interfaces/payload.interface';
import { NavigationExtras, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  loginForm!: FormGroup;
  logInEmail!: string;
  logInPassword!: string;
  userToken: string | null = '';
  incorrectLogIn!: boolean;
  rememberMe!: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userToken = this.authService.getToken();
    if(this.userToken) {
      const user: User | undefined = this.authService.getUsers().find(u => u.id == Number(this.userToken));
      let navigationExtras: NavigationExtras;

      navigationExtras = {
        queryParams: {
          id: user?.id
        }
      };
      this.router.navigate(['/main-table'], navigationExtras);
    }
    this.initializeForm();
    this.incorrectLogIn = false;
  }

  initializeForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, CustomValidators.passwordValidator]),
      remember: new FormControl(false),
    });
  }

  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  get remember(): FormControl {
    return this.loginForm.get('remember') as FormControl;
  }

  logIn() {
    var payload: LogInPayload = {
      email: this.logInEmail,
      password: this.logInPassword,
      rememberMe: this.rememberMe
    }
    if (this.loginForm.valid) {
      if (this.authService.successLogIn(payload)) {
        // Create the parameter you want to pass
        const parameterValue = payload;

        const user: User | undefined = this.authService.getUsers().find(u => u.email == this.logInEmail && u.password == this.logInPassword);
        // Set up the navigation extras object

        let navigationExtras: NavigationExtras;

        if (user != undefined) {
          navigationExtras = {
            queryParams: {
              id: user.id
            }
          };
        }
        else {
          navigationExtras = {
            queryParams: {
              id: -1
            }
          };
        }

        // Redirect with the parameter
        this.router.navigate(['/main-table'], navigationExtras);
      } else {
        this.incorrectLogIn = true;
      }
    }
  }
}
