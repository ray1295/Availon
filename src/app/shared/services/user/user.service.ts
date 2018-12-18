/*
HTTPCLIENT:
-----------
- Front-end applications communicatw with backend services over the HTTP protocol.

|--  SETUP:
  - Import the Angulat HttpClientModule in root AppModule.
  - Inject HttpClient into application class.
  - Applications often request JSON dara from the server.
  - Seperate poresentation of data from data access -> Data access in services/ Data presentation in component.

|-- TYPE CHECKING THE RESPONSE:
  - HttpClient.get() method parsed the JSON server response into the anonymous Object type -> it doesn't know what the shape of object is.
  - Can tell HttpClient the type of response to make consuming the output easier and more obvious.
  - First, define an interface with a shape.
  - Specify interface as HttpClient.get() call's type paramerter in the service.
    |-- READING FULL RESPONSE:
      - Response body doesnt return all data you may need.
      - Sometime servers return special headers or status codes to ndicate....

|-- ERROR HANDLING:
  - Request fail on server or poor network connection prevents it from reaching server -> HttpClient returns an error object.
  - Handle with second callback to the .subsribe().

*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../../models/user';
// import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // _userList: User[] = []

  constructor(
    private http: HttpClient
    ) {}
  // HttpClient -> Fetching users files with a get() method on HttpClient.
  getUsers() {
    // now returns an Observable of IUser
    return this.http.get<IUser>('https://api.github.com/users');
  }

  // postUser() {
  //   return this.http.post('https://api.github.com/users',
  //   {
  //     'name': 'mark',
  //     'age': '41'
  //   });
  // }
  removeUser() {}
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
