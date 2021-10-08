import { Component } from '@angular/core';
import { UserDataService } from './service/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning-angular';
  users:any
 constructor(private userData:UserDataService){
   console.log("user data",userData.users())
   this.users = userData.users()
 }
}
