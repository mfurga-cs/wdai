import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BackendService } from '../backend.service';
import { Photo } from '../photo';

@Component({
  selector: 'app-photos-detail',
  templateUrl: './photos-detail.component.html',
  styleUrls: ['./photos-detail.component.css']
})
export class PhotosDetailComponent implements OnInit {

  photo: Photo = {albumId: -1, id: -1, title: "", url: "", thumbnailUrl: ""};

  constructor(private route: ActivatedRoute,
              private backendService: BackendService) {}

  ngOnInit(): void {
    const photoId = this.route.snapshot.params['id'];
    this.backendService.getPhotoById(photoId).subscribe((photo: Photo) => {
      this.photo = photo;
    });
  }

}
