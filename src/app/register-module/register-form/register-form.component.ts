import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/helpers/custom-validators';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  registerForm!: FormGroup;
  registerEmail!: string;
  registerPassword!: string;
  registerPasswordRepeat!: string;
  registerUsername!: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, CustomValidators.passwordValidator]),
      passwordRepeat: new FormControl(null, [Validators.required, CustomValidators.passwordMatch("-")]),
      username: new FormControl(null, [Validators.required])
    });
  }

  get email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }

  get passwordRepeat(): FormControl {
    return this.registerForm.get('passwordRepeat') as FormControl;
  }

  createAccount(): void {

    var newUser: User = {
      id: this.authService.getUsers().length + 1,
      email: this.registerEmail,
      password: this.registerPassword,
      username: this.registerUsername,
      scores: []
    }

    if(this.registerForm.valid) {
      this.authService.addUser(newUser);
      this.router.navigateByUrl('/');
    }
  }
}
