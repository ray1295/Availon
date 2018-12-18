import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../shared/services/user/user.service';
import { HttpClient } from '@angular/common/http';
import { IUser } from 'src/app/shared/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: IUser;

  // Injects UserServices and calls the getUsers service method.
  constructor(
    public _userService: UserService,
    public http: HttpClient) {
    const showUsers = this._userService.getUsers()
      // Clone the data object, using its known IUser shape.
      .subscribe(
        (data: IUser) => {
          this.users = data;
        }, // success path.
        (error) => {
          console.log(error);
        }, // error path.
        () => {
          showUsers.unsubscribe();
        }
      );
    // const newUser = this._userService.postUser()
    //   .subscribe(
    //     (data) => {
    //       console.log('POST Request is successful ', data);
    //     },
    //     error => {
    //       console.log('Error', error);
    //     },
    //     () => {
    //       newUser.unsubscribe();
    //     }
    //   );
  }



  ngOnInit() { }

}
