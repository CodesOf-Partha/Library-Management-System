import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(public http: HttpClient) { }
  bookList;
  ngOnInit() {
    this.loadData();
  }
  loadData(){
    this.http.get('http://5d11a89c84e9060014576370.mockapi.io/books')
      .toPromise()
      .then((response) => {
        this.bookList = response;
      }, (error) => {
        console.log(error);
      })
  }

}
