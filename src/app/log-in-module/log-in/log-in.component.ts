import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../helpers/custom-validators';
import { AuthService } from 'src/app/services/auth.service';
import { LogInPayload } from 'src/app/interfaces/payload.interface';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  loginForm!: FormGroup;
  logInEmail!: string;
  logInPassword!: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.initializeForm();
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
      password: this.logInPassword
    }
    // TO BE CHANGED LATER
    if(this.loginForm.valid && this.authService.successLogIn(payload)) {
      alert("VALID FORM");
      return;
    }
    else{
      alert("INVALID FORM");
      return;
    }
  }

  // logIn() {
  //   if(!this.loginForm.valid) {
  //     alert("INVALID FORM");
  //     return;
  //   }
  //   else {
  //     this.router.navigate(['test']);
  //   }
  // }
}
