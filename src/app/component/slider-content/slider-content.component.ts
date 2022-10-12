import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-content',
  templateUrl: './slider-content.component.html',
  styleUrls: ['./slider-content.component.scss']
})
export class SliderContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = [944, 1011, 984, 932, 1018].map((n) => `https://picsum.photos/id/${n}/900/500`);
}