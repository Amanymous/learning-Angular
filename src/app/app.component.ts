import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Template Driven Form';
  list:any[]=[]
  addTask(item:string){
    this.list.push({id:this.list.length,name:item})
    console.log(this.list)
    console.log(item)
  }
  removeTask(id:number){
    console.log(id)
    this.list = this.list.filter(item=>item.id!== id)
  }
}