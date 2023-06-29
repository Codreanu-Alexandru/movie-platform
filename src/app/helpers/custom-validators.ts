import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {

  public static passwordValidator(password: FormControl): ValidationErrors | null {

    if (!password?.value?.match(/\d/)) {
      return { containsNumber: true };
    }

    if (password?.value?.length < 8) {
      return { minLength: true };
    }

    return null;
  }

  public static passwordMatch(originalPassword: string): ValidatorFn {
    return (password: any): ValidationErrors | null => {
      if(!(originalPassword === password?.value)) {
        console.log(originalPassword, " ", password.value);
        return { matching: true };
      }
      return null;
    }
  }
}
