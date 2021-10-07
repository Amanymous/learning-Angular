import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Template Driven Form';
data=10
data1 = 11
updateChild(){
  this.data = Math.floor(Math.random()*10)
}
updateChildern(){
  this.data1 = Math.floor(Math.random()*10)
}
}