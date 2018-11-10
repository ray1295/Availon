import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PasswordValidator } from '../../shared/validators/confirm-password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  // styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  checked = false;
  registerForm: FormGroup;
  genders: string[] = ['Female', 'Male'];
  public title = 'Places';
  public addrKeys: string[];
  public addr: object;

  constructor(public _formBuilder: FormBuilder, private zone: NgZone) {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
      lastName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')])),
      confirmPassword: new FormControl('', Validators.required),
      marketing: new FormControl('')
    }, (group: FormGroup) => {
      return PasswordValidator.checkPasswords(group)
    }
    );
  }

  // Method -> to be invoked everytime we receive a new instance of the address object from the onSelect event emitter.
  setAddress(addrObj) {
    //We are wrapping this in a NgZone to reflect the changes
    //to the object in the DOM.
    this.zone.run(() => {
      this.addr = addrObj;
      this.addrKeys = Object.keys(addrObj);
    });
  }

  onSubmit() {
    // console.log(this.registerForm.value);
  }


  ngOnInit() { }
}