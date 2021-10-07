import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning-angular';
 
  loginForm = new FormGroup({
    user:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*$')]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  })
  loginUser(){
    console.log(this.loginForm.value)
  }
  getUser(){
    return this.loginForm.get('user')
  }
  get password(){
    return this.loginForm.get('password')
  }
}
