import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from '../../shared/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public _userForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<UserComponent>,
    private _userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
      this.dialogRef.close();
    }
  ngOnInit() {
    this._userForm = this._formBuilder.group({
      ID: [],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this._userService.addUser(this._userForm.value);
    this.dialogRef.close();
  }

}
