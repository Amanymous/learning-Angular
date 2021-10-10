import { Component } from '@angular/core';
import { UserDataService } from './service/user-data.service';
// import { saveUsers } from './service/user-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning-angular';
  todos:any
 constructor(private userData:UserDataService){
   console.log("user data",userData.todos().subscribe((data)=>{
     console.log(data)
   this.todos=data
  }))
    console.log(this.todos)
   //  this.users = userData.users()
 }

 getUserFormData(data:any){
   console.log(data)
   this.userData.saveUsers(data).subscribe((result)=>{
     console.log(result)
   })
 }
}
