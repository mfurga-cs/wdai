import { Component, OnInit } from '@angular/core';

import { BackendService } from '../backend.service';
import { Photo } from '../photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: Photo[] = [];

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getPhotos().subscribe((photos: Photo[]) => {
      this.photos = photos;
    });
  }

}
