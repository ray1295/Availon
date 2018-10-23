import { Injectable } from '@angular/core';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _userList: User[] = []

  constructor() { }

  addUser(user: User) {
    this._userList.push(user)
  }

  removeUser(id: number) {
    const user = this._userList.findIndex(c => c.ID === id);
    this._userList.splice(user, 1);
  }

  getAllUsers() {
    return this._userList;
  }
}
