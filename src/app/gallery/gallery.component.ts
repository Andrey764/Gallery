import { Component, OnInit } from '@angular/core';
import { Gallery } from '../Gallery';
import { Picture } from '../Picture';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public collection:Array<Picture>
  constructor() { 
    this.collection = new Gallery().Gallery;
  }

  ngOnInit(): void {
  }

}
