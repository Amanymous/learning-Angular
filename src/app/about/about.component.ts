import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  aboutId:any
  ngOnInit(): void {

    console.log("about id is :",this.route.snapshot.paramMap.get('id'))
    this.aboutId = this.route.snapshot.paramMap.get('id')
  }

}
