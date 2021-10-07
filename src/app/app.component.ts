import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Template Driven Form';
  userDetails = [
    {
      name: 'Aman', Email: "test@.com"
    },
    {
      name: 'Aman1', Email: "test1@.com"
    }
    ,
    {
      name: 'Aman2', Email: "test2@.com"
    }
    ,
    {
      name: 'Aman3', Email: "test3@.com"
    }
    , {
      name: 'Aman4', Email: "test4@.com"
    }

  ]
}