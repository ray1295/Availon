import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PasswordValidator } from '../../shared/validators/confirm-password.validator';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MappingService } from '../../shared/services/google-maps/mapping.service';

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
  filteredOptions: Observable<string[]>;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  
  constructor(private _formBuilder: FormBuilder) {
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

  onSubmit() {
    // console.log(this.registerForm.value);
  }

  
  ngOnInit() { 
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}