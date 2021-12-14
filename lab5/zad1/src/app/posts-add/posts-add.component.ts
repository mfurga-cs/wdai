import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { BackendService } from '../backend.service';
import { Post } from '../post';

@Component({
  selector: 'app-posts-add',
  templateUrl: './posts-add.component.html',
  styleUrls: ['./posts-add.component.css']
})
export class PostsAddComponent implements OnInit {

  postForm: FormGroup;

  constructor(private backendService: BackendService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      title: ["", Validators.required],
      body: ["", Validators.required]
    });
  }

  onSubmit(): void {
    let data = this.postForm.value;
    this.backendService.addPost(data.title, data.body);
    this.postForm.reset();
  }

}
