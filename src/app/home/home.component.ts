import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogList;
  constructor(public http:HttpClient) { }

  ngOnInit() {
    this.http.get('https://demobl0g.herokuapp.com/api/blogs')
      .toPromise()
      .then((response) => {
        this.blogList = response;
      }, (error) => {
        console.log(error);
      })
  }

}
