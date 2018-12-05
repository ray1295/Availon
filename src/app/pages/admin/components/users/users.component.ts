import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../shared/services/user/user.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users;

  constructor(
    public _userService: UserService,
    public http: HttpClient) {
    let showUsers = this._userService.fetchUser()
      .subscribe(
        (data) => {
          this.users = data;
          // console.log(data);
        },
        (error) => {
          console.log(error);
        },
        () => {
          showUsers.unsubscribe();
        }
      );
    let newUser = this._userService.postUser()
      .subscribe(
        (data) => {
          console.log("POST Request is successful ", data);
        },
        error => {
          console.log("Error", error);
        },
        () => {
          newUser.unsubscribe();
        }
      )
  }



  ngOnInit() { }

}
