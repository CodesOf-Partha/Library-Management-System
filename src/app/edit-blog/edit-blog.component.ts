import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
  bookForm;
  constructor(public activatedRoute:ActivatedRoute,public http:HttpClient,public router:Router) {
    this.bookForm = new FormGroup({
      'name': new FormControl(),
      'avatar':new FormControl(),
      'authorName': new FormControl(),
      'description': new FormControl()
    })
  }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));

    this.http.get(`http://5d11a89c84e9060014576370.mockapi.io/books/${this.activatedRoute.snapshot.paramMap.get('id')}`)
    .toPromise()
    .then((response:any) => {
      this.bookForm.setValue({
        'name' : response.name,
        'description' : response.description,
        'authorName' : response.authorName,
        'avatar' : response.avatar
      })
    }, (error) => {

    })


    
  }

  postBooks(){
    this.http.put(`http://5d11a89c84e9060014576370.mockapi.io/books/${this.activatedRoute.snapshot.paramMap.get('id')}`,this.bookForm.value)
    .toPromise()
    .then((response) => {
      this.router.navigate(['dashboard/list']);
    },(error) => {

    })
  }

}
