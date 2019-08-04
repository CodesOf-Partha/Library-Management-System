import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { ListBlogComponent } from './list-blog/list-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { HomeComponent } from './home/home.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { LibraryComponent } from './library/library.component';

const routes: Routes = [
  {
    path : '',
    component:HomeComponent
  },
  {
    path : 'post/:id',
    component : ViewBlogComponent
  },
  {
    path : 'library',
    component : LibraryComponent
  },
  {
    path :'dashboard',
    component : DashboardComponent,
    children : [
      {
        path : 'create',
        component : CreateBlogComponent
      },
      {
        path : 'list',
        component :ListBlogComponent
      },
      {
        path:'edit/:id',
        component : EditBlogComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
