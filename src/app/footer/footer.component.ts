import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  memberData = [
    {name:'aman',email:'test@.com'},
    {name:'aman1',email:'test1@.com'},
    {name:'aman2',email:'test2@.com'},
    {name:'aman3',email:'test3@.com'}
  ]

}
