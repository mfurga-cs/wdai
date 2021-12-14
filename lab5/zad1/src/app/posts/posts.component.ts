import { Component, OnInit } from '@angular/core';

import { BackendService } from '../backend.service';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

}
