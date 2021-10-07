import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-childern',
  templateUrl: './childern.component.html',
  styleUrls: ['./childern.component.css']
})
export class ChildernComponent implements OnInit {

  constructor() { }
  @ Input() Child = 0
  ngOnInit(): void {
  }

}
