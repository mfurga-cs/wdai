import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PhotosComponent } from './photos/photos.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { PhotosDetailComponent } from './photos-detail/photos-detail.component';
import { PostsAddComponent } from './posts-add/posts-add.component';

const appRoutes: Routes = [
  { path: 'posts', component: PostsComponent},
  { path: 'photos', component: PhotosComponent },
  { path: 'photos/:id', component: PhotosDetailComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PhotosComponent,
    HomeComponent,
    PhotosDetailComponent,
    PostsAddComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
