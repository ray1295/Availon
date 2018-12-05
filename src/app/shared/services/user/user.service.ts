import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // _userList: User[] = []

  constructor(
    private http: HttpClient
    ) {}
    
  // API -> Fetching user details from an API
  fetchUser() {
    return this.http.get('https://api.github.com/users');
  }

  postUser() {
    return this.http.post('https://api.github.com/users', 
    {
      "name": 'mark',
      "age": "41"
    });
  }
 
  removeUser() {
    
  }
  // addUser(user: User) {
  //   this._userList.push(user)
  // }

  // removeUser(id: number) {
  //   const user = this._userList.findIndex(c => c.ID === id);
  //   this._userList.splice(user, 1);
  // }

  // getAllUsers() {
  //   return this._userList;
  // }
}
