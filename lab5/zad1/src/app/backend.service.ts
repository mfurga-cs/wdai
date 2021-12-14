import { Injectable } from '@angular/core';

import { HttpClient } from  '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Post } from './post';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private url = 'https://jsonplaceholder.typicode.com';

  private posts: Post[] = [];
  private postsSubject = new BehaviorSubject<Post[]>(this.posts);

  private photos: Photo[] = [];
  private photosSubject = new BehaviorSubject<Photo[]>(this.photos);

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    if (this.posts.length === 0) {
      this.http.get<Post[]>(this.url + '/posts').subscribe((posts: Post[]) => {
        this.posts = posts;
        this.postsSubject.next(this.posts);
      });
    }
    return this.postsSubject.asObservable();
  }

  addPost(title: string, body: string): void {
    let post: Post = { userId: 0, id: 0, title: title, body: body };
    this.http.post<Post>(this.url + '/posts', post).subscribe((post: Post) => {
      this.posts.push(post);
      this.postsSubject.next(this.posts);
    });
  }

  getPhotos(): Observable<Photo[]> {
    if (this.photos.length === 0) {
      this.http.get<Photo[]>(this.url + '/photos').subscribe((photos: Photo[]) => {
        this.photos = photos;
        this.photosSubject.next(this.photos);
      });
    }
    return this.photosSubject.asObservable();
  }

  getPhotoById(id: string): Observable<Photo> {
    return this.http.get<Photo>(this.url + '/photos/' + id);
  }
}
