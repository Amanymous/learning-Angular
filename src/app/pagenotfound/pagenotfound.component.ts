import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  notFound:any
  ngOnInit(): void {
    console.log("home id is :",this.route.snapshot.paramMap.get('id'))
    this.notFound = this.route.snapshot.paramMap.get('id')
  }

}
