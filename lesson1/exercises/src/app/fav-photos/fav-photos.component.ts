import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Images';
  image1 = 'https://i.picsum.photos/id/866/536/354.jpg';
  image2 = 'https://i.picsum.photos/id/1084/536/354.jpg';
  image3 = 'https://i.picsum.photos/id/1060/536/354.jpg';

  constructor() { }

  ngOnInit() {
  }

}