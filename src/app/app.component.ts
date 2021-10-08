import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning-angular';
  memberData = [
    {name:'aman',email:'test@.com'},
    {name:'aman1',email:'test1@.com'},
    {name:'aman2',email:'test2@.com'},
    {name:'aman3',email:'test3@.com'}
  ]
}
