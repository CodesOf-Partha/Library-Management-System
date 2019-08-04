import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {
  //blogForm;
  bookForm;
  constructor(public http:HttpClient,public router:Router) { }

  ngOnInit() {
    // this.blogForm = new FormGroup({
    //   'title': new FormControl(),
    //   'Description': new FormControl(),
    //   'imageURL': new FormControl(),
    //   'author': new FormControl()
    // })
    this.bookForm = new FormGroup({
      'name': new FormControl(),
      'avatar':new FormControl(),
      'authorName': new FormControl(),
      'description': new FormControl()
    })
  }

  postBooks(){
      console.log(this.bookForm.value);
      this.http.post('http://5d11a89c84e9060014576370.mockapi.io/books',this.bookForm.value)
      .toPromise()
      .then((response) => {
        console.log(response);
        this.router.navigate(['dashboard/list']);
      },(error) => {
        console.log(error);
      })
  }

}
