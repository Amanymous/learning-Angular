import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  users(){
    return [
      {name:'aman1',age:22,email:'test1@.com'},
      {name:'aman2',age:22,email:'test2@.com'},
      {name:'aman3',age:22,email:'test3@.com'}
    ]
  }
}
