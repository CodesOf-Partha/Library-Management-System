import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {
  blogContent;
  constructor(public activatedRoute:ActivatedRoute,public http:HttpClient) { }

  ngOnInit() {
    this.http.get(`https://demobl0g.herokuapp.com/api/blogs/${this.activatedRoute.snapshot.paramMap.get('id')}`)
    .toPromise()
    .then((response) => {
      this.blogContent = response;
    },
    (error) => {
      console.log(error);
    })
  }

}
