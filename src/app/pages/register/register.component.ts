import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PasswordValidator } from '../../shared/validators/confirm-password.validator';

export interface Radius {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  // styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isLinear = true;
  hide = true;
  checked = false;
  firstRegisterForm: FormGroup;
  secondRegisterForm: FormGroup;

  radii: Radius[] = [
    { value: '1/4-0', viewValue: '1/4 miles' },
    { value: '1/2-1', viewValue: '1/2 miles' },
    { value: '1-2', viewValue: '1 miles' },
    { value: '3-3', viewValue: '3 miles' },
    { value: '5-4', viewValue: '5 miles' },
    { value: '10-5', viewValue: '10 miles' },
    { value: '20-6', viewValue: '20 miles' }
  ];

  constructor(private _formBuilder: FormBuilder) {
    this.firstRegisterForm = new FormGroup({
      firstName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
      lastName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      phoneNumber: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(11)])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')])),
      confirmPassword: new FormControl('', Validators.required)
    }, (group: FormGroup) => {
        return PasswordValidator.checkPasswords(group)
    }
    );
    this.secondRegisterForm = new FormGroup({
      maxRent: new FormControl('', [Validators.required]),
      minBedrooms: new FormControl('', Validators.compose([Validators.required, Validators.minLength(1)])),
      searchRadius: new FormControl('', [Validators.required]),
      searchArea: new FormControl('', [Validators.required]),
      terms: new FormControl ('', [Validators.required]),
      marketing: new FormControl ('')
    });
  }  

  onSubmitFirst() {
    // console.log(this.firstRegisterForm.value);
  }
  onSubmitSecond() {
    // console.log(this.secondRegisterForm.value);
  }

  ngOnInit() {}

}