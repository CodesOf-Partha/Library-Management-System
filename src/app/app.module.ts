import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { ListBlogComponent } from './list-blog/list-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { HomeComponent } from './home/home.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LibraryComponent } from './library/library.component';
import { BooksComponent } from './books/books.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateBlogComponent,
    ListBlogComponent,
    EditBlogComponent,
    HomeComponent,
    ViewBlogComponent,
    TopBarComponent,
    FooterComponent,
    LibraryComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
