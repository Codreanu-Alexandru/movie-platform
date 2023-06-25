import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../helpers/custom-validators';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  loginForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        CustomValidators.passwordValidator,
      ]),
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
