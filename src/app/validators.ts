import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const fobidden = nameRe.test(control.value);
        return fobidden ? { forbiddenName: { value: control.value } } : null;
    };
}

export function notEqualsValidator(lhs: string, rhs: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const firstName = (control as FormGroup).controls[lhs];
        const lastName = (control as FormGroup).controls[rhs];
        return firstName && lastName && firstName.value === lastName.value ? { equal: true } : null;
    }
}