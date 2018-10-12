import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UserService } from '../service/user.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  isPopupOpend = false;

  constructor(private dialog?: MatDialog,
    private _userService?: UserService) { }

  ngOnInit() {
  }

  get userList(){
    return this._userService.getAllUsers();
  }

  addUser() {
    this.isPopupOpend = true;
    const dialogRef = this.dialog.open(UserComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpend = false;
    });
  }


}
